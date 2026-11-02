#!/usr/bin/env bash
#
# Clean checkout of an OGC Blocks repository and of every repository it depends on, into one snapshot directory.
#
# Dependencies are discovered recursively from each repository's bblocks-config.yaml:
#   - imports:            register URLs (https://<owner>.github.io/<repo>/...) and @org/register aliases,
#                         resolved through the Building Blocks meta-register index
#   - plugins:            transform and validator packages installed with pip from git+https://github.com/...
#   - viewer view-plugins: viewer plugins served from cdn.jsdelivr.net/gh/<owner>/<repo>
#
# Repositories are cloned from GitHub (never copied from a local working tree) into
# <output>/<owner>/<repo>, and a manifest of what was checked out (commit, branch, why it was included)
# is written to <output>/snapshot-manifest.tsv.
#
# Optionally (-p ORG), the snapshot is also recorded on GitHub as a branch named after the snapshot:
#   - in each snapshotted repository owned by ORG, and
#   - for repositories owned by an organisation given with -f, in ORG's fork of the repository
#     (the fork is created if missing, or its default branch synced with the upstream if it exists).
# This needs the GitHub CLI (gh), authenticated with rights to create forks and branches in ORG.
# Use -n first to see what would be created.

set -euo pipefail

usage() {
  cat <<EOF
Usage: $0 [options] [repository]

  repository   GitHub owner/repo, a GitHub URL, or a path to a local clone (its 'origin' remote is used).
               Default: the repository in the current directory.

Options:
  -o DIR       Output directory (default: snapshot-YYYY-MM-DD)
  -b REF       Branch or tag to check out for the root repository (default: its default branch)
  -r REPO=REF  Branch or tag to check out for a dependency, e.g. -r surroundaustralia/3d-csdm-common=dev
               (repeatable; overrides refs given in plugin URLs)
  -x REPO      Exclude a repository (owner/repo; repeatable). Excluded by default:
               ${DEFAULT_EXCLUDES[*]}
  -X           Do not apply the default exclusions
  -d DEPTH     Clone depth (default: 1; 0 for full history)
  -m URL       Meta-register index used to resolve @org/register aliases
               (default: $META_REGISTER)
  -h           Show this help

Snapshot branches on GitHub (requires gh):
  -p ORG       Create a snapshot branch in each snapshotted repository owned by ORG
  -f ORG       Fork repositories owned by ORG into the -p organisation (create, or sync an existing fork)
               and create the snapshot branch there (repeatable)
  -B NAME      Snapshot branch name (default: the output directory name, e.g. snapshot-YYYY-MM-DD)
  -F           Move an existing snapshot branch that points at a different commit (default: leave it, warn)
  -n           Dry run: clone and report, but do not create forks or branches

Example:
  $0 -n -p surroundaustralia -f ogcincubator surroundaustralia/3d-csdm-profile-wa
EOF
  exit "${1:-0}"
}

# The OGC main register ('default' import) and the cross-domain model are imported by almost every register.
DEFAULT_EXCLUDES=(opengeospatial/bblocks ogcincubator/cross-domain-model)
META_REGISTER=https://w3id.org/ogc/bblocks/meta-register.json
OUT_DIR=
ROOT_REF=
DEPTH=1
EXCLUDES=()
REF_OVERRIDES=()
USE_DEFAULT_EXCLUDES=1
PUBLISH_ORG=
FORK_ORGS=()
SNAPSHOT_BRANCH=
FORCE_BRANCH=
DRY_RUN=

while getopts "o:b:r:x:Xd:m:p:f:B:Fnh" opt; do
  case $opt in
    o) OUT_DIR="$OPTARG" ;;
    b) ROOT_REF="$OPTARG" ;;
    r) REF_OVERRIDES+=("$OPTARG") ;;
    x) EXCLUDES+=("$OPTARG") ;;
    X) USE_DEFAULT_EXCLUDES= ;;
    d) DEPTH="$OPTARG" ;;
    m) META_REGISTER="$OPTARG" ;;
    p) PUBLISH_ORG="$OPTARG" ;;
    f) FORK_ORGS+=("$OPTARG") ;;
    B) SNAPSHOT_BRANCH="$OPTARG" ;;
    F) FORCE_BRANCH=1 ;;
    n) DRY_RUN=1 ;;
    h) usage ;;
    *) usage 1 ;;
  esac
done
shift $((OPTIND - 1))
[[ $# -le 1 ]] || usage 1
[[ -n "$USE_DEFAULT_EXCLUDES" ]] && EXCLUDES+=("${DEFAULT_EXCLUDES[@]}")
if [[ ${#FORK_ORGS[@]} -gt 0 && -z "$PUBLISH_ORG" ]]; then
  echo "-f needs -p: the organisation the forks are created in." >&2
  exit 1
fi
if [[ -n "$PUBLISH_ORG" ]]; then
  command -v gh >/dev/null 2>&1 || { echo "The GitHub CLI (gh) is required for -p." >&2; exit 1; }
  gh auth status >/dev/null 2>&1 || { echo "gh is not authenticated; run 'gh auth login'." >&2; exit 1; }
fi

PYTHON=
for p in python3 python; do
  if command -v "$p" >/dev/null 2>&1 && "$p" -c 'import sys; sys.exit(sys.version_info < (3, 8))' 2>/dev/null; then
    PYTHON="$p"; break
  fi
done
[[ -n "$PYTHON" ]] || { echo "Python 3.8+ is required to read bblocks-config.yaml." >&2; exit 1; }
command -v git >/dev/null 2>&1 || { echo "git is required." >&2; exit 1; }

lower() { tr '[:upper:]' '[:lower:]'; }

# Normalises a GitHub URL, SSH remote or owner/repo to owner/repo
to_owner_repo() {
  echo "$1" | sed -E -e 's#^(git\+)?(https?://|ssh://git@|git@)github\.com[:/]##' -e 's#\.git$##' -e 's#/+$##' \
    | awk -F/ 'NF >= 2 { print $1 "/" $2 }'
}

# Root repository
ROOT_ARG="${1:-.}"
if [[ -d "$ROOT_ARG" ]]; then
  ROOT_URL=$(git -C "$ROOT_ARG" remote get-url origin 2>/dev/null) \
    || { echo "'$ROOT_ARG' is not a git repository with an 'origin' remote." >&2; exit 1; }
  ROOT=$(to_owner_repo "$ROOT_URL")
else
  ROOT=$(to_owner_repo "$ROOT_ARG")
fi
[[ "$ROOT" == */* ]] || { echo "Cannot determine a GitHub owner/repo from '$ROOT_ARG'." >&2; exit 1; }

OUT_DIR="${OUT_DIR:-snapshot-$(date +%Y-%m-%d)}"
if [[ -e "$OUT_DIR" && -n "$(ls -A "$OUT_DIR" 2>/dev/null)" ]]; then
  echo "Output directory '$OUT_DIR' already exists and is not empty; choose another with -o." >&2
  exit 1
fi
mkdir -p "$OUT_DIR"
SNAPSHOT_BRANCH="${SNAPSHOT_BRANCH:-$(basename "$OUT_DIR")}"

WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT
QUEUE="$WORK/queue"      # level|owner/repo|ref|kind|referenced by ('|' because read collapses empty tab-separated fields)
SEEN="$WORK/seen"
MANIFEST="$OUT_DIR/snapshot-manifest.tsv"
: > "$QUEUE"; : > "$SEEN"
printf 'level\trepository\tkind\tbranch\tcommit\treferenced_by\tsnapshot_branch\n' > "$MANIFEST"

# Extracts dependencies from a bblocks-config.yaml as: kind|owner/repo|ref|source.
# Unresolvable imports are reported on stderr.
cat > "$WORK/deps.py" <<'PYEOF'
import json, re, sys, urllib.request

cfg_path, meta_url, meta_cache = sys.argv[1:4]
text = open(cfg_path, encoding='utf-8').read()

try:
    import yaml
    cfg = yaml.safe_load(text) or {}
except ImportError:
    cfg = None

def imports_from(text):
    if cfg is not None:
        entries = cfg.get('imports') or []
    else:
        # Fallback without PyYAML: the list items under a top-level 'imports:' key
        entries, inside = [], False
        for line in text.splitlines():
            if re.match(r'^imports\s*:', line):
                inside = True
                continue
            if inside:
                if re.match(r'^\S', line):
                    break
                m = re.match(r'^\s*-\s*["\']?([^"\'#\s]+)', line)
                if m:
                    entries.append(m.group(1))
    out = []
    for e in entries:
        if isinstance(e, dict):
            e = e.get('url')
        if isinstance(e, str) and e.strip():
            out.append(e.strip())
    return out

meta = None
def meta_index():
    global meta
    if meta is None:
        try:
            meta = json.load(open(meta_cache, encoding='utf-8'))
        except (OSError, ValueError):
            with urllib.request.urlopen(meta_url, timeout=60) as r:
                meta = json.load(r)
            json.dump(meta, open(meta_cache, 'w', encoding='utf-8'))
    return meta

def repo_from_url(url):
    m = re.match(r'https?://([^./]+)\.github\.io/([^/?#]+)', url)
    if m:
        return f'{m.group(1)}/{m.group(2)}'
    m = re.match(r'https?://(?:raw\.githubusercontent\.com|github\.com)/([^/]+)/([^/?#]+)', url)
    if m:
        return f'{m.group(1)}/{re.sub(r"[.]git$", "", m.group(2))}'
    return None

for entry in imports_from(text):
    url = entry
    if entry == 'default' or entry.startswith('@'):
        url = meta_index().get(entry)
        if not url:
            print(f'warning: import alias {entry} not found in {meta_url}', file=sys.stderr)
            continue
    repo = repo_from_url(url)
    if repo:
        print(f'import|{repo}||{entry}')
    else:
        print(f'warning: cannot map import {entry} to a GitHub repository', file=sys.stderr)

PIP_RE = re.compile(r'git\+https://github\.com/([^/\s"\']+)/([^@\s"\'#]+?)(?:\.git)?(?:@([^\s"\'#]+))?(?=[\s"\'#]|$)')
# The @ref of a jsDelivr URL is usually a build branch (e.g. dist), so the source branch is checked out instead
CDN_RE = re.compile(r'cdn\.jsdelivr\.net/gh/([^/\s"\']+)/([^@/\s"\']+)')

def emit_pip(kind, spec):
    for m in PIP_RE.finditer(spec or ''):
        print(f'{kind}|{m.group(1)}/{m.group(2)}|{m.group(3) or ""}|{m.group(0)}')

def emit_cdn(spec):
    for m in CDN_RE.finditer(spec or ''):
        print(f'viewer|{m.group(1)}/{m.group(2)}||{m.group(0)}')

if cfg is not None:
    # plugins: {transforms: [{pip: ...}], validators: [{pip: ...}], ...}
    for group, items in (cfg.get('plugins') or {}).items():
        kind = 'validator' if group.startswith('validator') else 'transform' if group.startswith('transform') else group
        for item in items or []:
            emit_pip(kind, item.get('pip') if isinstance(item, dict) else item)
    # viewer: {view-plugins: [{url: ...}]}
    for item in (cfg.get('viewer') or {}).get('view-plugins') or []:
        emit_cdn(item.get('url') if isinstance(item, dict) else item)
else:
    for line in text.splitlines():
        if not line.lstrip().startswith('#'):
            emit_pip('plugin', line)
            emit_cdn(line)
PYEOF

owner_in() {  # owner/repo, orgs...
  local owner org
  owner=$(echo "${1%%/*}" | lower); shift
  for org in "$@"; do
    [[ "$owner" == "$(echo "$org" | lower)" ]] && return 0
  done
  return 1
}

# Makes sure PUBLISH_ORG has an up-to-date fork of an upstream repository; prints the fork's owner/repo
ensure_fork() {
  local upstream="$1" fork="$PUBLISH_ORG/${1#*/}" info isfork parent i
  if info=$(gh api "repos/$fork" --jq '"\(.fork) \(.parent.full_name // "-")"' 2>/dev/null); then
    read -r isfork parent <<< "$info"
    if [[ "$isfork" != true || "$(echo "$parent" | lower)" != "$(echo "$upstream" | lower)" ]]; then
      echo "         $fork exists but is not a fork of $upstream - no snapshot branch created" >&2
      return 1
    fi
    if [[ -n "$DRY_RUN" ]]; then
      echo "         would sync fork $fork with $upstream" >&2
    elif gh repo sync "$fork" --source "$upstream" >/dev/null 2>"$WORK/gh.err"; then
      echo "         synced fork $fork" >&2
    else
      echo "         could not sync fork $fork (diverged?): $(head -1 "$WORK/gh.err")" >&2
    fi
  else
    if [[ -n "$DRY_RUN" ]]; then
      echo "         would fork $upstream to $fork" >&2
      echo "$fork"
      return 0
    fi
    gh repo fork "$upstream" --org "$PUBLISH_ORG" --clone=false >/dev/null 2>"$WORK/gh.err" \
      || { echo "         could not fork $upstream: $(head -1 "$WORK/gh.err")" >&2; return 1; }
    # Forks are created asynchronously
    for i in $(seq 1 30); do
      gh api "repos/$fork" >/dev/null 2>&1 && break
      sleep 2
    done
    echo "         forked $upstream to $fork" >&2
  fi
  echo "$fork"
}

# Creates (or with -F moves) the snapshot branch in a GitHub repository at a commit
snapshot_branch() {
  local repo="$1" sha="$2" current
  current=$(gh api "repos/$repo/git/ref/heads/$SNAPSHOT_BRANCH" --jq .object.sha 2>/dev/null) || current=
  if [[ "$current" == "$sha" ]]; then
    echo "         branch $repo@$SNAPSHOT_BRANCH already at ${sha:0:10}" >&2
  elif [[ -n "$current" && -z "$FORCE_BRANCH" ]]; then
    echo "         branch $repo@$SNAPSHOT_BRANCH exists at ${current:0:10}, not ${sha:0:10} - left unchanged (use -F to move it)" >&2
    return 1
  elif [[ -n "$DRY_RUN" ]]; then
    echo "         would $([[ -n "$current" ]] && echo move || echo create) branch $repo@$SNAPSHOT_BRANCH at ${sha:0:10}" >&2
    echo "$repo@$SNAPSHOT_BRANCH (dry run)"
    return 0
  elif [[ -n "$current" ]]; then
    gh api -X PATCH "repos/$repo/git/refs/heads/$SNAPSHOT_BRANCH" -f sha="$sha" -F force=true >/dev/null 2>"$WORK/gh.err" \
      || { echo "         could not move branch $repo@$SNAPSHOT_BRANCH: $(head -1 "$WORK/gh.err")" >&2; return 1; }
    echo "         moved branch $repo@$SNAPSHOT_BRANCH to ${sha:0:10}" >&2
  else
    gh api -X POST "repos/$repo/git/refs" -f ref="refs/heads/$SNAPSHOT_BRANCH" -f sha="$sha" >/dev/null 2>"$WORK/gh.err" \
      || { echo "         could not create branch $repo@$SNAPSHOT_BRANCH: $(head -1 "$WORK/gh.err")" >&2; return 1; }
    echo "         created branch $repo@$SNAPSHOT_BRANCH" >&2
  fi
  echo "$repo@$SNAPSHOT_BRANCH"
}

is_excluded() {
  local r ex
  r=$(echo "$1" | lower)
  for ex in "${EXCLUDES[@]}"; do
    [[ "$r" == "$(echo "$ex" | lower)" ]] && return 0
  done
  return 1
}

ref_override() {
  local r o
  r=$(echo "$1" | lower)
  for o in "${REF_OVERRIDES[@]+"${REF_OVERRIDES[@]}"}"; do
    [[ "$(echo "${o%%=*}" | lower)" == "$r" ]] && { echo "${o#*=}"; return 0; }
  done
  return 1
}

printf '0|%s|%s|root|\n' "$ROOT" "$ROOT_REF" >> "$QUEUE"
FAILED=0
BRANCH_FAILED=0
LINE=0

echo "Snapshot of $ROOT and its dependencies into $OUT_DIR"
if [[ -n "$PUBLISH_ORG" ]]; then
  echo "Snapshot branch '$SNAPSHOT_BRANCH' in $PUBLISH_ORG repositories${FORK_ORGS[*]:+ and $PUBLISH_ORG forks of ${FORK_ORGS[*]} repositories}${DRY_RUN:+ (dry run)}"
fi
while :; do
  LINE=$((LINE + 1))
  ENTRY=$(sed -n "${LINE}p" "$QUEUE")
  [[ -n "$ENTRY" ]] || break
  IFS='|' read -r LEVEL REPO REF KIND PARENT <<< "$ENTRY"

  KEY=$(echo "$REPO" | lower)
  if grep -qxF "$KEY" "$SEEN"; then
    continue
  fi
  echo "$KEY" >> "$SEEN"
  if is_excluded "$REPO"; then
    echo "  skip   $REPO (excluded)"
    continue
  fi

  REF=$(ref_override "$REPO" || echo "$REF")
  DEST="$OUT_DIR/$REPO"
  CLONE_ARGS=(--quiet)
  [[ "$DEPTH" != 0 ]] && CLONE_ARGS+=(--depth "$DEPTH")
  [[ -n "$REF" ]] && CLONE_ARGS+=(--branch "$REF")
  # core.longpaths: generated build/ trees exceed the Windows 260-character path limit
  if ! git -c core.longpaths=true clone "${CLONE_ARGS[@]}" -c core.longpaths=true \
      "https://github.com/$REPO.git" "$DEST" 2>"$WORK/clone.err"; then
    echo "  FAIL   $REPO${REF:+@$REF}: $(head -1 "$WORK/clone.err")" >&2
    FAILED=$((FAILED + 1))
    continue
  fi
  BRANCH=$(git -C "$DEST" rev-parse --abbrev-ref HEAD)
  [[ "$BRANCH" == HEAD ]] && BRANCH="$REF"
  COMMIT=$(git -C "$DEST" rev-parse HEAD)
  printf '  clone  %-55s %-10s %s\n' "$REPO@$BRANCH" "$KIND" "${COMMIT:0:10}"

  # Snapshot branch: in PUBLISH_ORG's own repositories, and in its forks of FORK_ORGS repositories
  SNAP=
  if [[ -n "$PUBLISH_ORG" ]]; then
    TARGET=
    if owner_in "$REPO" "$PUBLISH_ORG"; then
      TARGET="$REPO"
    elif [[ ${#FORK_ORGS[@]} -gt 0 ]] && owner_in "$REPO" "${FORK_ORGS[@]}"; then
      TARGET=$(ensure_fork "$REPO") || TARGET=
    fi
    if [[ -n "$TARGET" ]]; then
      SNAP=$(snapshot_branch "$TARGET" "$COMMIT") || { SNAP=; BRANCH_FAILED=$((BRANCH_FAILED + 1)); }
    fi
  fi
  printf '%s\t%s\t%s\t%s\t%s\t%s\t%s\n' "$LEVEL" "$REPO" "$KIND" "$BRANCH" "$COMMIT" "$PARENT" "$SNAP" >> "$MANIFEST"

  CFG=
  for c in bblocks-config.yaml bblocks-config.yml; do
    [[ -f "$DEST/$c" ]] && { CFG="$DEST/$c"; break; }
  done
  [[ -n "$CFG" ]] || continue

  "$PYTHON" "$WORK/deps.py" "$CFG" "$META_REGISTER" "$WORK/meta-register.json" 2> >(sed "s#^#  ($REPO) #" >&2) \
    | while IFS='|' read -r DKIND DREPO DREF DSRC; do
        printf '%s|%s|%s|%s|%s\n' "$((LEVEL + 1))" "$DREPO" "$DREF" "$DKIND" "$REPO" >> "$QUEUE"
      done
done

echo
echo "Checked out $(($(wc -l < "$MANIFEST") - 1)) repositories into $OUT_DIR (manifest: $MANIFEST)"
[[ $BRANCH_FAILED -gt 0 ]] && echo "$BRANCH_FAILED snapshot branches were not created; see the messages above." >&2
if [[ $FAILED -gt 0 ]]; then
  echo "$FAILED repositories could not be cloned." >&2
  exit 1
fi
[[ $BRANCH_FAILED -eq 0 ]] || exit 2
