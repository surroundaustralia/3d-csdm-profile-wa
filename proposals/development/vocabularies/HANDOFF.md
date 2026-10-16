# Vocabulary Review — Handoff

**Paused:** 2026-10-15
**Resume with:** Stage 0.1 → Stage 3 → Stage 4 → rerun the analysis. Stage 0.2 is not needed: the leftover `bblocks-land-parcels` changes can be discarded.

| Document | Purpose |
|---|---|
| [`vocab-review.md`](vocab-review.md) | The review: inventory, findings (F-xx), dispositions, target architecture, decisions (D1–D12) |
| [`vocab-remediation-plan.md`](vocab-remediation-plan.md) | The staged plan (Stages 0–10). Stage numbers below refer to it |
| this file | Where things stand and the exact next steps |

---

## 1. State at pause

### Repositories

| Repository (local folder) | Branch @ commit | Working tree | Notes |
|---|---|---|---|
| `sa-icsm-vocabs` (`surroundaustralia/icsm-vocabs`) | `main` @ `ceb7a2c` | 213 files flagged; **all line-ending-only** | **The correct ICSM vocabulary checkout.** The old `…/GitHub/icsm-vocabs` checkout (upstream `icsm-au`) was used by mistake in the first review run; do not use it. |
| `3d-csdm-profile-wa` | `main` @ `ff7eb66` | ~515 files flagged; line-ending-only except the files below | Uncommitted: `vocab-review.md` (provenance correction) and `vocab-remediation-plan.md` (fork references) edits; this `HANDOFF.md` is new |
| `processWAData` | `feat/vocab-audit/analysis-cli` (from `main` @ `86984e0`) | clean | Contains the analysis tool (`wa-vocab-audit`, `wa-vocab-audit-compare`) and the `vocab-audit` skill. **Not yet merged to `main`.** |
| `3d-csdm-profile-icsm` | `main` @ `f85d524` | clean | Read only for this work |
| `bblocks-land-parcels` | `master` @ `45addd0` | untracked `assets/` | Discard (replaces Stage 0.2) |

### Things to confirm first

1. **pr/26 is not on `sa-icsm-vocabs` `main`.** That PR added WA supplement terms to the published vocabularies, including `wa-monument-condition:computed` and `wa-surveypoint-purpose` "Derived 3D Boundary", which the review recommends against (§5.5). At pause it was only on `surroundaustralia/integrate-csv-sources` (`084159c`), and the local checkout had not been fetched. Run `git -C sa-icsm-vocabs fetch` and check whether `main` now contains `084159c`. If it does, the audit will show those supplement terms as `SUPPLEMENT_TERM_ALREADY_PUBLISHED`, which changes what Stage 3 has to do for them.
2. **Merge the pending branches** (both were committed at pause):
   - processWAData `feat/vocab-audit/analysis-cli` → `main` (analysis tool and skill). Be on this branch whenever you run the audit until it is merged.
   - 3d-csdm-profile-wa `docs/vocab-review-handoff` → `main` (review provenance correction, plan fork references, this file).

### Last analysis run (baseline before any remediation)

Against `sa-icsm-vocabs` @ `ceb7a2c`, `3d-csdm-profile-wa` @ `ff7eb66`, `3d-csdm-profile-icsm` @ `f85d524`:

| | Files | Concepts |
|---|---|---|
| Published | 79 | 9,410 |
| Supplements | 10 | 43 |
| CSV drafts | 25 | 138 |

**Findings: 44 errors, 79 warnings, 182 info.** The output from that run was in a session scratch folder and has not been kept, so take a fresh baseline after Stage 0.1 (§3).

---

## 2. Setup each session

```bash
export ICSM_VOCAB_ROOT=/mnt/c/Users/Andrew/Documents/GitHub/sa-icsm-vocabs/vocabs
export WA_PROFILE_ROOT=/mnt/c/Users/Andrew/Documents/GitHub/3d-csdm-profile-wa
export ICSM_PROFILE_ROOT=/mnt/c/Users/Andrew/Documents/GitHub/3d-csdm-profile-icsm
cd /mnt/c/Users/Andrew/Documents/GitHub/processWAData
export PYTHONPATH=src            # or: pip install -e .  (then use `wa-vocab-audit`)
```

**Easiest:** ask Claude to use the `vocab-audit` skill (processWAData `.claude/skills/vocab-audit/`). It runs the audit, compares with the previous run and explains the changes against this plan. Or run its script directly. The environment variables above are optional: it falls back to sibling checkouts.

```bash
python .claude/skills/vocab-audit/scripts/run_audit.py <NN-label>    # e.g. 00-baseline, 03-supplements
```

This writes `data/output/vocab-audit/<NN-label>/` and, when an earlier run exists, `compare.md` beside it. Use `--against <label>` to pick the comparison run.

Manual equivalents:

```bash
python -m vocab_audit.cli --output-dir data/output/vocab-audit/<run-name>
python -m vocab_audit.compare data/output/vocab-audit/<before> data/output/vocab-audit/<after>
```

`summary.md` gives counts and every finding; `findings.csv` is easiest to filter; `usage.csv` lists each vocabulary value in examples and code with its JSON path or line. `references/finding-categories.md` in the skill maps each finding category to the review and the plan stage.

---

## 3. Next steps

### Step 1 — Stage 0.1: remove line-ending noise

**Why:** every diff in `sa-icsm-vocabs` and `3d-csdm-profile-wa` is currently buried in CRLF-only changes. Neither repository has a `.gitattributes`, and `core.autocrlf` is unset. processWAData already has the right pattern (`* text=auto eol=lf`).

What was found:

- `sa-icsm-vocabs`: every text file is stored with LF in git; 213 working-tree files have CRLF only. No content changes.
- `3d-csdm-profile-wa`: 525 files stored with LF, **10 stored with CRLF** (all generated: `build/annotated/profiles/wa/**/_visited_properties.tsv`), 48 binary. No content changes.

For each of the two repositories:

1. Confirm there are no real changes. This must print nothing:
   ```bash
   git diff --ignore-cr-at-eol --numstat
   ```
2. On a branch (e.g. `chore/normalise-line-endings`), add `.gitattributes` modelled on processWAData's:
   ```gitattributes
   * text=auto eol=lf
   *.png binary
   *.pdf binary
   ```
   In `3d-csdm-profile-wa`, also add `build/** -text`. The `build/` tree is regenerated by the BBlocks CI, so leave its line endings exactly as the generator writes them; otherwise the next CI build will flip them back.
3. Refresh the working tree from the index, then renormalise:
   ```bash
   git rm -r --cached -q . && git reset -q --hard   # only after step 1 printed nothing
   git add --renormalize .
   git status --short                               # expect only .gitattributes
   ```
4. Commit `.gitattributes` on its own (`chore: normalise line endings`). Do not mix it with content changes.
5. Check `git status` is clean, then open a Windows-side editor, save a file and confirm it does not reappear as modified.

`sa-icsm-vocabs` note: its `build-vocabs.yml` workflow runs on pushes to `main` that touch `source/**`, `scripts/**`, `manifest.ttl` or `.ogc/**`. A `.gitattributes`-only commit does not trigger it.

Then **take the baseline:**

```bash
python .claude/skills/vocab-audit/scripts/run_audit.py 00-baseline
```

The Inputs table in `summary.md` should now show 0 line-ending-only changes for both repositories.

**Stage 0.2:** delete the untracked `assets/` in `bblocks-land-parcels` (`git -C …/bblocks-land-parcels clean -n` to preview, then `-f`).

**Rest of Stage 0** (branches, register, approvers — 0.3, 0.6, 0.7) was not in scope for this restart. Stage 3's exit gate mentions register rows; the audit `findings.csv` can stand in until the register exists.

### Step 2 — Stage 3: supplement corrections (in `3d-csdm-profile-wa/profiles/`)

Work on a branch in `3d-csdm-profile-wa`. Each task, the files it touches, and the audit findings that should disappear:

| Task | Change | Expected audit change |
|---|---|---|
| 3.1 | `wa-occ-supplement.ttl`: change `:Building`, `:BuildingElement`, `:Structure` in `skos:hasTopConcept` and `skos:broader` to the minted lower-case/kebab IRIs | `DANGLING_REFERENCE` 15 → 0 |
| 3.2 | `wa-approved-form-supplement.ttl`: add the `skos:ConceptScheme`; make `dcterms:source` an IRI (not `"wa-leg:…"`); fix the `BA14` label ("B14"); normalise `15c`/"15C"; retarget `dcterms:type` from `unitEntitlementSchedule`/`recordOfStrataTitlesScheme` to `scheme-ue`/`scheme-record-form` | `SCHEME_NOT_DECLARED` 1 → 0; `LITERAL_WHERE_IRI_EXPECTED` 2 → 0 |
| 3.3 | `wa-survey-documentation-supplement.ttl`: kebab-case the 6 camelCase IRIs; `skos:broader scheme-form` on `scheme-by-laws`, `scheme-notice`; rewrite the `scheme-notice` definition; fix the `csd` citation | `IDENTIFIER_STYLE_DIFFERS_FROM_PARENT` −6; `MIXED_IDENTIFIER_STYLE` for this vocabulary cleared |
| 3.4 | Remove empty `skos:altLabel ""` | `EMPTY_LITERAL` warnings 2 → 0 |
| 3.5 | `wa-parcel-purpose-supplement.ttl`: rewrite `strata-scheme` as a purpose, not a class | — (content) |
| 3.6 | `wa-survey-purpose-supplement.ttl`: "Strata Title Act" → "Strata Titles Act 1985" | — (content) |
| 3.7 | `wa-annotation-supplement.ttl`: `skos:related` from each certification annotation to its document type | — |
| 3.8 | Mark D9-dependent terms as held (`strata-plan-endorsement`, `strata-plan-endorsement-certificate`, `15c`) | — |
| 3.9 | Structural check script | **Use the audit instead** (see below) |

**Watch-outs:**

- **3.3 breaks the built-strata example unless you update it in the same commit.** `proposals/development/built-strata/examples/example-1.json` uses each of the 6 camelCase IRIs once (`buildingApprovalCertificate`, `recordOfStrataTitlesScheme`, `schemeByLaws`, `schemeNotices`, `strataPlanEndorsementCertificate`, `unitEntitlementSchedule`). Two of those should become the existing published `scheme-record-form` and `scheme-ue` (review §5.5), not kebab-case copies. Check `usage.csv` afterwards for new `UNRESOLVED_USAGE`.
- **3.8 needs re-scoping.** The audit shows the 8 `wa-annotation` *supplement* terms all have definitions. The undefined ones are 5 **published** `wa-annotation` terms (`parcel-derived`, `public-acquisition`, `total-area`, `transfer-of-land-exempt`, `unsurveyed-dimensions`). Defining those is an `sa-icsm-vocabs` CSV change, which belongs with Stage 5, not Stage 3.
- **3.9 is largely covered by the audit.** It already checks parsing, dangling hierarchy links, missing labels and definitions, empty literals and supplement/parent collisions. For a gate, filter `findings.csv` to `source_file` containing `-supplement.ttl` and severity `error`; or run with `--fail-on error` once the unrelated errors are gone. Only write a separate script if you want it in the WA repo's own CI.
- **Pending decisions:** leave the D7 interest types (`strata-scheme`, `strata-lot`) and the D11 `derived-boundary` term alone in Stage 3.
- **If pr/26 has landed** (§1), some supplement terms will already be published. The audit reports them as `SUPPLEMENT_TERM_ALREADY_PUBLISHED`; correct them in `sa-icsm-vocabs` rather than in the supplement, or deprecate if the review says they should not exist (`computed`, `derived-boundary`).

Rerun: `run_audit.py 03-supplements`; `compare.md` is written against `00-baseline`.

### Step 3 — Stage 4: build pipeline (in `sa-icsm-vocabs`)

**The plan's Stage 4 was written against the upstream `vocabs-uplift.yml` workflows.** The fork has since replaced them with `scripts/build_vocabs.py` and `.github/workflows/build-vocabs.yml`, which still use `source/vocabs-uplift.yml` for the CSV → RDF step. Revised scope:

| Plan task | Status in the fork | What remains |
|---|---|---|
| 4.1 `related` → `skos:related` | Not mapped in `source/vocabs-uplift.yml` | Add the column mapping |
| 4.2 split `altlabel` | Not split (whole cell becomes one literal) | Agree one separator (drafts use both `\|` and `;`) and split it in the jq transform |
| 4.3 `broader` → `skos:broader` | Not mapped. `build_vocabs.py` already computes top concepts from `skos:broader`, so mapping the column is enough | Add the column mapping |
| 4.4 explicit `id` column | Not supported: `@id` is still the slug of `notation` (or `preflabel`) | Prefer an `id` column when present. Prerequisite for D1 option (c) |
| 4.5 fail on missing `csMapping` | **Done**: `build()` reports "has no entry in the csMapping" and exits 1 | — |
| 4.6 profile copies of `vocabs-uplift.yml` | `3d-csdm-profile-wa/vocabs-uplift.yml` and `3d-csdm-profile-icsm/vocabs-uplift.yml` still exist | Mirror the changes or record them as retired |
| 4.7 regression test | **Mostly built in**: the build compares each draft with the published file (`isomorphic`) and validates against `manifest.ttl` | Run `--no-publish` and confirm every existing vocabulary is reported unchanged |

How to work:

1. Branch in `sa-icsm-vocabs`. **Do not push `source/vocabs-uplift.yml` or `scripts/` changes to `main` until the regression check passes**, because that push triggers `build-vocabs.yml`, which republishes.
2. Install `scripts/requirements.txt` (ogc-na 0.5.36, prezmanifest 1.2.12, kurra 3.0.5, rdflib 7.6.0) in a venv.
3. Edit `source/vocabs-uplift.yml`.
4. Regression check (no publishing):
   ```bash
   python scripts/build_vocabs.py --no-publish --skip-manifest-validation
   ```
   Every existing vocabulary should be unchanged. Read `source/ttl-drafts/validation-report.md` for anything that is not.
5. Fixture check: add a throwaway CSV with `id`, `related`, `broader` and a multi-value `altlabel` (plus a `.meta.ttl` sidecar and a temporary `csMapping` entry), build with `--filter`, inspect the draft TTL, then remove the fixture.
6. Drop `--skip-manifest-validation` for a final full run before merging.
7. Update Stage 4 in `vocab-remediation-plan.md` (and F-P1/A9 in the review) to match this table.

Side note: `build_vocabs.py` deliberately adds an empty `skos:definition` to concepts without one. That is why the audit reports thousands of empty definitions in published vocabularies (`EMPTY_LITERAL`, info). It is expected behaviour, not a defect to fix in Stage 4.

### Step 4 — Rerun the analysis

```bash
python .claude/skills/vocab-audit/scripts/run_audit.py 04-pipeline
python -m vocab_audit.compare data/output/vocab-audit/00-baseline data/output/vocab-audit/04-pipeline   # optional: overall change since baseline
```

Stage 4 does not change any vocabulary content, so the published counts should not move; if they do, something was republished. Record the before/after error and warning counts in the plan or register.

---

## 4. Out of scope for this restart (still open)

- Governance decisions D1–D12 (review §5.10). D1 (URI/notation convention) gates Stage 6 and any new IRIs.
- Drift the audit found that the review did not list. Fixing it is Stage 2 work:
  - single-letter `wa-vector-purpose` codes `I`, `R`, `E`, `C`, `N` (≈100 uses);
  - `wa-procedure-used:M`/`m`/`d`;
  - `wa-parcel-type:road`/`miscellaneous`/`l`, `wa-parcel-purpose:reserve`/`townlot`;
  - `icsm-distance-type:grid`/`bearing`, `wa-survey-type:p`, `wa-surveypoint-purpose:boundary`;
  - undefined `wa-mines` context prefix; two prefixes for `wa-secondary-parcel-type`.
- Unrelated processWAData test issues: `pdfplumber` missing from the WSL Python (two PDF test modules cannot load), and `test_parse_csd_file_rejects_unsupported_record_type` errors on `main` (missing `record_type` fixture).
