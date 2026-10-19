# Vocabulary Review — Handoff

**Updated:** 2026-10-18, after the vocabulary cleanup (cleanup Stages [0](#cleanup-stage-0)–[8a](#cleanup-stage-8a)), the final audit rerun ([section 5](#5-rerun-the-audit)), the first downstream migrations ([section 7](#7-downstream-migration)), the `09-migrate` audit check ([section 5](#rerun-09-migrate)) and the handover fixes ([cleanup Stage 9](#cleanup-stage-9), audits `10-handover` and `11-drift`, [section 5](#rerun-handover)).
**Next:** commit the `wa-core` prefix fixes on `vocab-cleanup/drift-values` and merge that branch into the handover branch, confirm the survey documentation definitions ([section 6](#6-still-open)), hand the drafts to the uplift owner ([section 4](#4-what-the-uplift-owner-receives)), and migrate the remaining downstream repositories ([section 7](#7-downstream-migration)).

| Document | Purpose |
|---|---|
| [`vocab-review.md`](vocab-review.md) | The review: inventory, findings (F-xx), dispositions with their cleanup status, decisions [D1](vocab-review.md#decision-d1)–[D12](vocab-review.md#decision-d12) ([§5.10](vocab-review.md#510-decisions)) |
| [`vocab-remediation-plan.md`](vocab-remediation-plan.md) | The longer-term remediation plan (Stages [0](vocab-remediation-plan.md#stage-0--mobilisation-and-baseline)–[10](vocab-remediation-plan.md#stage-10--longer-term-governance-c1c6)), with status notes showing what the cleanup completed |
| [`crosswalk/vocab-crosswalk.csv`](crosswalk/vocab-crosswalk.csv) | Every old supplement and CSV term (181) mapped to its new IRI, with the action and reason |
| [`crosswalk/value-aliases.csv`](crosswalk/value-aliases.csv), [`crosswalk/prefix-renames.csv`](crosswalk/prefix-renames.csv) | Old values that were never concepts, and old prefixes, with their replacements ([section 3](#3-the-crosswalk)) |
| this file | Where things stand and what each party receives |

---

## 1. State at the end of the cleanup

### Repositories and branches

Each branch is pushed to its own remote branch.
Only the processWAData branch is merged into `main`.
Each cleanup stage is one commit (see [Cleanup stages](#cleanup-stages)), so it can be reviewed or reverted alone.

| Repository | Branch | What it holds |
|---|---|---|
| `3d-csdm-profile-wa` | `vocab-cleanup/content` (from `docs/vocab-review-handoff`), merged back into `docs/vocab-review-handoff` (PR #70, [`dec6f9d`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/dec6f9d)); `vocab-cleanup/drift-values` (from `dec6f9d`, [Stage 9](#cleanup-stage-9)) | Decisions ([Stage 1](#cleanup-stage-1)), supplements ([2](#cleanup-stage-2)), CSV merges and crosswalk ([3](#cleanup-stage-3)), normalised CSVs ([4](#cleanup-stage-4)), examples, viewer data and contexts ([5](#cleanup-stage-5)), uplift YAML copy ([7](#cleanup-stage-7)), documentation and scheme metadata ([8](#cleanup-stage-8)), handover fixes ([9](#cleanup-stage-9)) |
| `processWAData` | `vocab-cleanup/consumers` (from `feat/vocab-audit/analysis-cli`); merged into `main` ([`d0cab66`](https://github.com/andrewhunter2066/processWAData/commit/d0cab66)); a merge fault in the built-strata skill fixed by `fix/vocab-term-merge` (merged, PR #6, [`a468ad8`](https://github.com/andrewhunter2066/processWAData/commit/a468ad8), [section 5](#rerun-09-migrate)) | Skill, validators, `validate_vocab`, vocab-audit tool and use-case examples on the new codes ([Stage 6](#cleanup-stage-6)); audit runs [`00-baseline`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/00-baseline) … [`08-cleanup`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/08-cleanup), then [`09-migrate`](https://github.com/andrewhunter2066/processWAData/tree/main/data/output/vocab-audit/09-migrate) … `11-drift` on `main` |
| `sa-icsm-vocabs` | `vocab-cleanup/uplift-altlabel` | [`source/vocabs-uplift.yml`](https://github.com/surroundaustralia/icsm-vocabs/blob/vocab-cleanup/uplift-altlabel/source/vocabs-uplift.yml) extended ([Stage 7](#cleanup-stage-7)); survey documentation definitions and three new concepts ([Stage 9](#cleanup-stage-9)). **Do not push to `main`**: a push touching `source/**` triggers `build-vocabs.yml` and republishes |

### Cleanup stages

Other documents cite these as "cleanup Stage N" or, in status cells, "Done (Stage N)".
They are not the stages of [`vocab-remediation-plan.md`](vocab-remediation-plan.md), which has its own numbering.

| Stage | What it changed | Commit | Audit run after it |
|---|---|---|---|
| <a id="cleanup-stage-0"></a>0 | Line endings normalised; baseline audit | [`2663ffe`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/2663ffe) (profile), [`881ebbe`](https://github.com/surroundaustralia/icsm-vocabs/commit/881ebbe) (`sa-icsm-vocabs`) | [`00-baseline`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/00-baseline) |
| <a id="cleanup-stage-1"></a>1 | Decisions [D1](vocab-review.md#decision-d1)–[D12](vocab-review.md#decision-d12) recorded in [`vocab-review.md`](vocab-review.md) [§5.10](vocab-review.md#510-decisions) and the decisions register | [`258d865`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/258d865) | [`01-decisions`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/01-decisions) |
| <a id="cleanup-stage-2"></a>2 | Supplements corrected or removed; [`occupation-feature.ttl`](occupation-feature.ttl) created | [`24d74d8`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/24d74d8) | [`02-supplements`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/02-supplements) |
| <a id="cleanup-stage-3"></a>3 | CSV drafts merged; crosswalk created | [`bd1d503`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/bd1d503) | [`03-merge`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/03-merge) |
| <a id="cleanup-stage-4"></a>4 | CSV drafts normalised to one format | [`6316e92`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/6316e92) | [`04-normalise`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/04-normalise) |
| <a id="cleanup-stage-5"></a>5 | Examples, viewer data and contexts migrated | [`1e10472`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/1e10472) | [`05-examples`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/05-examples) |
| <a id="cleanup-stage-6"></a>6 | processWAData skill, validators and vocab-audit tool migrated | [`c069970`](https://github.com/andrewhunter2066/processWAData/commit/c069970) (processWAData) | [`06-consumers`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/06-consumers) |
| <a id="cleanup-stage-7"></a>7 | Uplift YAML extended | [`47e5f59`](https://github.com/surroundaustralia/icsm-vocabs/commit/47e5f59) (`sa-icsm-vocabs`), [`e944f03`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/e944f03) (profile copy) | — |
| <a id="cleanup-stage-8"></a>8 | Documentation updated, identifiers linked, scheme metadata drafted; entitlements moved to parcel properties ([D7](vocab-review.md#decision-d7)); processWAData copies replaced by pointers | [`2c7b8be`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/2c7b8be) (profile), [`1f22768`](https://github.com/andrewhunter2066/processWAData/commit/1f22768) (processWAData) | [`07-docs`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/07-docs), [`08-cleanup`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/08-cleanup) |
| <a id="cleanup-stage-8a"></a>8a | Remaining camelCase [`wa-prov-role`](wa-prov-role.csv) values (`formatConverter`, `sourceCsdFile`, `sourcePdfFile`, `workflowOrchestrator`) changed to the kebab-case notations in the liminal examples, viewer data, the processWAData generator and its examples and outputs | [`4051446`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/4051446) (profile), [`b8bfaf4`](https://github.com/andrewhunter2066/processWAData/commit/b8bfaf4) (processWAData) | — |
| <a id="cleanup-stage-9"></a>9 | Handover fixes: stale `wa-vocab-bindings.csv.json` regenerated; definitions for the seven placeholder [`wa-survey-documentation-type`](https://linked.data.gov.au/def/csdm/wa-survey-documentation-type) concepts; the 16 drift values mapped (13 [`value-aliases.csv`](crosswalk/value-aliases.csv) rows) and `wa-parcel-type:road`/`miscellaneous` and `icsm-distance-type:grid` added; `wa-pt-method:` renamed and the dead `wa-interest`, `wa-vector-type` and `wa-mines` prefixes removed | [`2b88750`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/2b88750), [`1561271`](https://github.com/surroundaustralia/3d-csdm-profile-wa/commit/1561271) and the uncommitted `wa-core` fixes (profile); [`571f40c`](https://github.com/surroundaustralia/icsm-vocabs/commit/571f40c), [`017fefe`](https://github.com/surroundaustralia/icsm-vocabs/commit/017fefe), [`f38760e`](https://github.com/surroundaustralia/icsm-vocabs/commit/f38760e) (`sa-icsm-vocabs`) | [`10-handover`](https://github.com/andrewhunter2066/processWAData/tree/main/data/output/vocab-audit/10-handover), `11-drift` |

### What changed

- **Decisions [D1](vocab-review.md#decision-d1)–[D12](vocab-review.md#decision-d12)** are recorded in [`vocab-review.md`](vocab-review.md) [§5.10](vocab-review.md#510-decisions) (decided by the Surround team; custodians confirm at submission).
- **Supplements** (`profiles/*-supplement.ttl`): `computed`, `derived-boundary`, [`wa-survey-type:ct`](crosswalk/vocab-crosswalk.csv) and the two strata interest types were removed; the rest were corrected ([D9](vocab-review.md#decision-d9) endorsement wording, kebab-case IRIs, [`skos:related`](https://www.w3.org/2009/08/skos-reference/skos.html#related) between annotations and document types, [`wa-approved-form`](../../../profiles/wa-approved-form-supplement.ttl) scheme and source IRIs).
  [`wa-occ`](crosswalk/vocab-crosswalk.csv) is now the common [`occupation-feature.ttl`](occupation-feature.ttl) in this folder, with IFC 4.3 matches.
- **CSV drafts**: 25 files became 16 drafts plus the local [`wa-prov-role`](wa-prov-role.csv).
  All use one format: `preflabel,definition,notation,altlabel,broader,related,scopenote`, `|` as the only separator, kebab-case notations (old code kept as the first altLabel) and readable prefLabels.
  [`vertical-extent-status.collections.ttl`](vertical-extent-status.collections.ttl) declares its two collections.
- **Examples and data**: the two proposal example sets, `_sources/wa-liminal` examples, all threeJS viewer data and the `wa-liminal`, `wa-3d` and `wa-core` contexts use the new values.
  Regenerating [SP83687](../built-strata/examples/example-1.json) from the processWAData skill reproduces [`built-strata/examples/example-1.json`](../built-strata/examples/example-1.json) exactly.
- **Uplift**: [`vocabs-uplift.yml`](https://github.com/surroundaustralia/icsm-vocabs/blob/vocab-cleanup/uplift-altlabel/source/vocabs-uplift.yml) splits `altlabel` on `|` for every CSV and maps `broader`, `related` and `scopenote` for draft-format CSVs (those with a `broader` column).
  All 79 published vocabularies still build unchanged.
- **Duplicated documents in processWAData**: the copies of the built-strata overview, parcel specification and scope note, and of the liminal overview, in processWAData `use-cases/` and in the skill's `references/`, are now pointers to the profile documents (located via `WA_PROFILE_ROOT`).
  The profile repository is canonical.

### Audit trail

| Run (processWAData `data/output/vocab-audit/`) | After | Errors | Warnings |
|---|---|---:|---:|
| [`00-baseline`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/00-baseline) | line endings normalised | 44 | 79 |
| [`01-decisions`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/01-decisions) | [Stage 1](#cleanup-stage-1) | 44 | 79 |
| [`02-supplements`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/02-supplements) | [Stage 2](#cleanup-stage-2) | 38 | 65 |
| [`03-merge`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/03-merge) | [Stage 3](#cleanup-stage-3) | 43 | 53 |
| [`04-normalise`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/04-normalise) | [Stage 4](#cleanup-stage-4) | 46 | 80 |
| [`05-examples`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/05-examples) | [Stage 5](#cleanup-stage-5) | 34 | 51 |
| [`06-consumers`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/06-consumers) | [Stage 6](#cleanup-stage-6) | 23 | 33 |
| [`07-docs`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/07-docs) | [Stages 7](#cleanup-stage-7)–[8](#cleanup-stage-8) (uncommitted Stage 8) | 23 | 33 |
| [`08-cleanup`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/08-cleanup) | [Stage 8](#cleanup-stage-8) committed; compared with `00-baseline` | 23 | 33 |
| [`09-migrate`](https://github.com/andrewhunter2066/processWAData/tree/main/data/output/vocab-audit/09-migrate) | [Stage 8a](#cleanup-stage-8a), the crosswalk files and the documents in one sentence per line; processWAData `main` `3df0566` ([section 5](#rerun-09-migrate)) | 23 | 30 |
| [`10-handover`](https://github.com/andrewhunter2066/processWAData/tree/main/data/output/vocab-audit/10-handover) | processWAData fix merged; bindings JSON and survey documentation definitions ([Stage 9](#cleanup-stage-9)); compared with `00-baseline` | 23 | 28 |
| `11-drift` (uncommitted) | The 16 drift values mapped and three concepts added ([Stage 9](#cleanup-stage-9)); compared with `00-baseline` | 7 | 28 |

[Stage 8a](#cleanup-stage-8a) removes the four remaining `USAGE_FORM_MISMATCH` warnings for `wa-prov-role`.
With the processWAData fix applied, the audit gives 23 errors and 29 warnings, with no new findings.
A check run after the uncommitted `wa-core` prefix fixes gives 3 errors and 27 warnings, with no new findings ([section 5](#rerun-handover)).

Rises in Stages [3](#cleanup-stage-3)–[4](#cleanup-stage-4) were expected: examples kept the old values until [Stage 5](#cleanup-stage-5).
Each run folder has `compare.md` and the per-folder `tests.txt`; the processWAData test suite is back to its baseline (only the three `write_json` failures and the `record_type` error, which predate the cleanup).

---

## 2. Setup each session

```bash
export ICSM_VOCAB_ROOT=/mnt/c/Users/Andrew/Documents/GitHub/sa-icsm-vocabs/vocabs
export WA_PROFILE_ROOT=/mnt/c/Users/Andrew/Documents/GitHub/3d-csdm-profile-wa
export ICSM_PROFILE_ROOT=/mnt/c/Users/Andrew/Documents/GitHub/3d-csdm-profile-icsm
cd /mnt/c/Users/Andrew/Documents/GitHub/processWAData
export PYTHONPATH=src            # or: pip install -e .  (then use `wa-vocab-audit`)
```

**Easiest:** ask Claude to use the `vocab-audit` skill (processWAData `.claude/skills/vocab-audit/`).
It runs the audit, compares with an earlier run and explains the changes.
Or run its script directly:

```bash
python .claude/skills/vocab-audit/scripts/run_audit.py <NN-label> --against <earlier-label>
```

This writes `data/output/vocab-audit/<NN-label>/` with `summary.md`, `findings.csv`, `usage.csv` and `compare.md`.
The audit now also reads hand-written Turtle drafts in this folder (`ttl-draft`, e.g. [`occupation-feature.ttl`](occupation-feature.ttl)) and checks collection members in `*.collections.ttl`.

---

## 3. The crosswalk

[`crosswalk/vocab-crosswalk.csv`](crosswalk/vocab-crosswalk.csv) has one row per old term: `old_iri,new_iri,action,reason`.

| Action | Rows | Meaning |
|---|---:|---|
| keep | 30 | Same IRI |
| rename | 62 | Same scheme, kebab-case notation ([D1](vocab-review.md#decision-d1)) |
| move | 46 | Another scheme ([`wa-occ`](crosswalk/vocab-crosswalk.csv) → [`occupation-feature`](occupation-feature.ttl), `icsm-*` → renamed drafts, [`wa-survey-type:ct`](crosswalk/vocab-crosswalk.csv) → `certificate-of-title`) |
| merge | 26 | Folded into another concept, its code kept as an altLabel |
| replace | 11 | Removed; use the named concept instead (for example `computed` → [`wa-monument-condition:ok`](https://linked.data.gov.au/def/csdm/wa-monument-condition/ok)) |
| remove | 6 | Removed with no replacement ([`height-reference:ahd`](crosswalk/vocab-crosswalk.csv), the boundary-coverage terms, the strata interest types) |

It lives in a subfolder so the audit does not read it as a vocabulary.
Two smaller files beside it record the hand changes that Stages [5](#cleanup-stage-5) and [6](#cleanup-stage-6) made to data, so that no mapping lives only in a commit:

| File | Holds |
|---|---|
| [`value-aliases.csv`](crosswalk/value-aliases.csv) | Values used in data that were never concepts: `wa-surveypoint-purpose:boundary` → `internal-boundary`, `vertical-extent-status:dfld` → `legally-defined`, the typo `vertical-extent-status:ud`, and the 13 drift mappings decided for the handover ([Stage 9](#cleanup-stage-9); for example `wa-vector-purpose:I` → `lot-boundary`, `icsm-distance-type:bearing` → `icsm-angle-type:bearing`). Same columns plus `confirm`; `yes` marks a judgement to confirm for each data set |
| [`prefix-renames.csv`](crosswalk/prefix-renames.csv) | Old prefixes whose notations did not change: `wa-pt-method` → `wa-surveypoint-method`, `wa-annotation-role` → `wa-annotation`, `vertical-extent` → `vertical-extent-status` |

camelCase and capitalised spellings (`belowSurface`, `titleBoundary`, `wa-occ:Wall`, the camelCase [`wa-prov-role`](wa-prov-role.csv) values) need no rows: they map as their kebab-case form does.
When a vocabulary changes, add rows here; the processWAData `vocab-migrate` skill applies all three files ([section 7](#7-downstream-migration)).

---

## 4. What the uplift owner receives

All in `proposals/development/vocabularies/` unless stated.

| Item | Files | Notes |
|---|---|---|
| CSV drafts | 16 `*.csv` (common) | Ready for `source/`; IRIs `https://linked.data.gov.au/def/csdm/<name>` |
| Local list | [`wa-prov-role.csv`](wa-prov-role.csv) | Implementation-local ([D12](vocab-review.md#decision-d12)): **do not publish** |
| Hand-written draft | [`occupation-feature.ttl`](occupation-feature.ttl) | Needs `broader` and IFC `closeMatch`, so it stays outside the CSV pipeline. Its scheme has no creator, publisher or status yet |
| Collections | [`vertical-extent-status.collections.ttl`](vertical-extent-status.collections.ttl) | Two [`skos:Collection`](https://www.w3.org/2009/08/skos-reference/skos.html#Collection)s for [`vertical-extent-status`](vertical-extent-status.csv); outside the pipeline until it supports collections |
| Scheme metadata | `meta/<name>.meta.ttl` (17) | Drafts of each scheme's label, definition, creator, publisher, dates and status. Copy beside each CSV in `source/`. **Confirm** creator (`csdm-pg`), publisher (`icsm`) and status (`experimental`). `wa-prov-role.meta.ttl` is only for use if [D12](vocab-review.md#decision-d12) changes |
| Uplift YAML | `sa-icsm-vocabs` branch `vocab-cleanup/uplift-altlabel` | Plus a copy at [`3d-csdm-profile-wa/vocabs-uplift.yml`](../../../vocabs-uplift.yml) |
| Published-vocabulary changes | `sa-icsm-vocabs` branch `vocab-cleanup/uplift-altlabel`: `source/LandParcels/CSD-Header/wa-survey-documentation-type.csv`, `source/LandParcels/Parcels/wa-parcel-type.csv`, `source/LandParcels/SurveyObservations/icsm-distance-type.csv` | [Stage 9](#cleanup-stage-9). Seven new survey documentation definitions (to confirm, [section 6](#6-still-open)) are in the CSV only; rebuild with `build_vocabs.py` to publish them. The three new concepts (`wa-parcel-type:road`, `:miscellaneous`, `icsm-distance-type:grid`) are in both the CSVs and `vocabs/`, and a build reproduces them exactly |

To publish the drafts the uplift owner also needs to:

1. Add a `csMapping` entry per draft in [`source/vocabs-uplift.yml`](https://github.com/surroundaustralia/icsm-vocabs/blob/vocab-cleanup/uplift-altlabel/source/vocabs-uplift.yml), for example
   `"boundary-reference.csv": { "uri": "https://linked.data.gov.au/def/csdm/boundary-reference", "label": "Boundary Reference", "type": "" },`
   and decide whether each draft gets a `termtype:` concept type, as the published vocabularies do.
2. List each output in `manifest.ttl` under Resource Data.

A dry run of exactly this (in a throwaway copy, with the 16 drafts plus [`wa-prov-role`](wa-prov-role.csv), temporary mappings and manifest entries, and the `meta/` sidecars) passed `build_vocabs.py` with full manifest validation: 104 concepts, every `broader`/`related` link resolving, every collection member resolving.

Under [D3](vocab-review.md#decision-d3) the common vocabularies are part of the 3D CSDM core model; confirm with the uplift owner whether `icsm-vocabs` remains the publication route.

---

## 5. Rerun the audit

Done on 2026-10-17 as [`08-cleanup`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/08-cleanup) (`05-cleanup` in the original plan), with profile `2c7b8be` and `sa-icsm-vocabs` `47e5f59`, both with clean working trees:

```bash
python .claude/skills/vocab-audit/scripts/run_audit.py 08-cleanup --against 00-baseline
```

| Measure | `00-baseline` | `08-cleanup` |
|---|---:|---:|
| Errors | 44 | 23 |
| Warnings | 79 | 33 |
| Info | 182 | 169 |
| Published concepts | 9410 | 9410 |
| Supplement concepts | 43 | 20 |
| CSV-draft concepts | 138 | 104 |

- **Cleared**: dangling references (15 → 0), the undeclared [`wa-approved-form`](../../../profiles/wa-approved-form-supplement.ttl) scheme, literal-where-IRI, empty literals, reused notations, the duplicate vocabulary and mixed CSV separators.
  Undeclared prefixes fell from 19 to 4, usage-form mismatches from 17 to 7 (3 after [Stage 8a](#cleanup-stage-8a)).
  Published concepts are unchanged, so nothing was republished.
- **Remaining errors**: all are the drift listed in [section 6](#6-still-open), plus the local `wa-angle-derivation` prefix (decided 2026-10-16, [`vocab-review.md`](vocab-review.md) [§5.10](vocab-review.md#510-decisions)) and the missing ICSM binding for `icsm-survey-type`.
- **New, expected**: overlapping-vocabulary warnings that only show now the codes are readable words (mostly similar names for different concepts); two prefixes for `wa-annotation` (the `wa-core` alias, below); "uses unpublished vocabulary" notes for the renamed drafts until the uplift; deliberately invalid values in the processWAData tests; and legacy inputs such as `representation-status:2D` that the validators still accept.
- **New, for review**: the audit finds every [`vertical-value-type`](vertical-value-type.csv) concept matched by one in [`vertical-definition-type`](vertical-definition-type.csv) (see [section 6](#6-still-open)).

<a id="rerun-09-migrate"></a>
### Rerun on 2026-10-18 (`09-migrate`)

Run against `08-cleanup`, with profile `4051446` plus the uncommitted crosswalk files and documents, `sa-icsm-vocabs` `47e5f59` and processWAData `main` at `3df0566`:

```bash
python .claude/skills/vocab-audit/scripts/run_audit.py 09-migrate
```

- **Profile**: no published or draft concept changed, so nothing was republished.
  The [Stage 8a](#cleanup-stage-8a) warnings are gone.
  The uncommitted crosswalk files and documents changed no finding.
- **Regression in processWAData `main`**: four new findings (code values in no vocabulary rose from 11 to 21), all in the built-strata skill's `tests/test_validation.py`.
  They are pre-cleanup values: `icsm-boundary-coverage:full-boundary-coverage` (against [D12](vocab-review.md#decision-d12)), `icsm-reference-kind:occupation-feature`, `wa-occ:Wall`/`Slab`/`Ceiling` and `vertical-definition-type:brb`.
- **Cause**: the merge [`69f5a17`](https://github.com/andrewhunter2066/processWAData/commit/69f5a17) (`main` into `vocab-cleanup/consumers`) combined two versions of `vocab_term` in the skill's `scripts/_vocab.py`.
  The result returns the bare notation without the table lookup or the camelCase conversion, so the validator misreads scope-note values.
  The skill's tests failed from PR #3 ([`d0cab66`](https://github.com/andrewhunter2066/processWAData/commit/d0cab66)) on (23 failures).
  The commit [`27eb20e`](https://github.com/andrewhunter2066/processWAData/commit/27eb20e) then changed the tests back to old values (45 failures).
- **Fix**: branch `fix/vocab-term-merge` (uncommitted) restores `scripts/_vocab.py`, `tests/test_validation.py` and `tests/test_vocab.py` to their [Stage 8a](#cleanup-stage-8a) versions ([`b8bfaf4`](https://github.com/andrewhunter2066/processWAData/commit/b8bfaf4)); nothing else in the skill differed.
  The skill's tests pass (292).
  A check audit with the fix matches `08-cleanup` apart from the cleared Stage 8a warnings: 23 errors, 29 warnings, no new findings.
- The processWAData `src` suite still has only the three `write_json` failures and the `record_type` error that predate the cleanup.
- The fix was merged as PR #6 ([`a468ad8`](https://github.com/andrewhunter2066/processWAData/commit/a468ad8)).

<a id="rerun-handover"></a>
### Handover runs on 2026-10-18 (`10-handover`, `11-drift`)

Both compared with `00-baseline`, with clean checkouts of every input:

```bash
python .claude/skills/vocab-audit/scripts/run_audit.py 10-handover --against 00-baseline
python .claude/skills/vocab-audit/scripts/run_audit.py 11-drift --against 00-baseline
```

| Measure | `00-baseline` | `10-handover` | `11-drift` | After `wa-core` fixes (check run) |
|---|---:|---:|---:|---:|
| Errors | 44 | 23 | 7 | 3 |
| Warnings | 79 | 28 | 28 | 27 |
| Info | 182 | 169 | 169 | 169 |
| Published concepts | 9410 | 9410 | 9413 | 9413 |

- **`10-handover`** (profile `docs/vocab-review-handoff` `dec6f9d`, `sa-icsm-vocabs` `571f40c`, processWAData `a468ad8`): no new findings since `09-migrate`.
  The stale bindings artefact and the processWAData test regression are cleared.
- **`11-drift`** (profile `vocab-cleanup/drift-values` `1561271`, `sa-icsm-vocabs` `f38760e`): all 16 `UNRESOLVED_USAGE` errors are cleared, 131 values in 21 profile example and test files.
  The only concept changes are the three intended additions, `icsm-distance-type:grid`, `wa-parcel-type:road` and `wa-parcel-type:miscellaneous`.
- **`wa-core` fixes** (uncommitted on `vocab-cleanup/drift-values`): `wa-pt-method:P` → `wa-surveypoint-method:P` (272 values in `wa-core/examples/extended-example.json` and `parcels.geojson`).
  The dead `wa-interest`, `wa-vector-type` and `wa-mines` prefixes are removed from the `wa-core`, `waAppellationNamespaces` and `wa-mining` contexts and from six threeJS viewer data files that copy the `wa-core` context; no data used them.
  The `waAppellationNamespaces` context also had a trailing comma that made it invalid JSON; it now parses.
- **Remaining errors** (3): the ICSM `icsm-survey-type` binding and context prefix (ICSM-owned), and the local `wa-angle-derivation` prefix (decided 2026-10-16, [`vocab-review.md`](vocab-review.md) [§5.10](vocab-review.md#510-decisions)).
- **Expected warning**: `PLACEHOLDER_DEFINITION` for `wa-survey-documentation-type` stays until the published file is rebuilt from the CSV; a throwaway build passed and cleared it.

---

## 6. Still open

- **Downstream consumers**: see [section 7](#7-downstream-migration).
- **`entitlementPortion` placement ([D7](vocab-review.md#decision-d7))**: [SP83687](../built-strata/examples/example-1.json) puts it on the lot parcels, but the common schema defines it on `interests[]`; this needs a schema extension (decision register items [9](../built-strata/decisions-register.md#item-9) and [10](../built-strata/decisions-register.md#item-10)).
- **Published `related` columns**: 78 published CSVs have a free-text `related` column (labels, not concept references).
  The uplift leaves it unmapped; whether those should become links is for the uplift owner.
- **[`3d-csdm-profile-icsm/vocabs-uplift.yml`](https://github.com/icsm-au/3d-csdm-profile-icsm/blob/main/vocabs-uplift.yml)** still differs from the fork (read-only for this work).
- **`wa-core` examples** (`_sources/wa-core/examples`, mainly `extended-example.json`) still use [`wa-annotation-role:`](https://linked.data.gov.au/def/csdm/wa-annotation); the `wa-core` context keeps `wa-annotation-role` as an alias for them.
  `wa-pt-method:` was renamed in [Stage 9](#cleanup-stage-9).
- **Survey documentation definitions to confirm** ([Stage 9](#cleanup-stage-9)): the seven former "to be confirmed" [`wa-survey-documentation-type`](https://linked.data.gov.au/def/csdm/wa-survey-documentation-type) concepts now have drafted definitions citing Landgate and LSLB sources.
  `2-year-certificate` (reg 53A), `final-survey-certificate` (reg 55E), `field-record-certificate` (reg 17(1)) and `initial-survey-certificate` (Special Survey Area guideline 9.3) follow the regulation or guideline wording.
  `limited-marking-approval` is less certain: reg 26A(1) names the Surveyor General, Landgate's guides the Inspector of Plans and Surveys.
  `wapc-exemption` and `road-name-exemption` rest only on the Landgate APX-06 lodgement labels.
  The regulation text read was the 2013 compilation; check it against the current one.
  Whether each document type belongs in the final schema is still for the custodian.
- **Viewer PDF link**: two viewer files link a `wa-leg:` PDF named for the 1955 regulations; the descriptions now say 1995.
- **processWAData**: `_absolute_height_object` is called but not defined (use-case examples 04 and 05 cannot be validated); use-case example 07 lacks height-description, jurisdictional-source and side-face content.
  Both predate the cleanup.
- **Drift found by the audit that the review did not list**: the 16 values (single-letter [`wa-vector-purpose`](https://linked.data.gov.au/def/csdm/wa-vector-purpose) codes, `wa-procedure-used:M`/`m`/`d`, `wa-parcel-type:road`/`miscellaneous`/`l`, `wa-parcel-purpose:reserve`/`townlot`, `icsm-distance-type:grid`/`bearing`, `wa-survey-type:p`) and the dead `wa-interest`, `wa-vector-type` and `wa-mines` prefixes were resolved in [Stage 9](#cleanup-stage-9).
  Still open: two prefixes for [`wa-secondary-parcel-type`](https://linked.data.gov.au/def/csdm/wa-secondary-parcel-type) (`wa-nonprimary-parcel-type` in the `wa-core` context).
  `built-strata/examples/example-1.json` declares a local `wa-interest` prefix (`https://example.com/interest/`) that nothing uses.
  In `3d-csdm-profile-icsm` (read-only here), the common context declares `icsm-survey-type` and the vocabulary bindings name it, but no such vocabulary exists (roadmap activity [B5](vocab-review.md#activity-b5)).
- **[`vertical-value-type`](vertical-value-type.csv) and [`vertical-definition-type`](vertical-definition-type.csv)**: the [`08-cleanup`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/08-cleanup) audit matches all four `vertical-value-type` concepts to `vertical-definition-type` ones (`relative-height-description` ≈ `offset`, `absolute-height-description` ≈ `absolute-height`, `jurisdictional-boundary-rule` ≈ `rule-expression`, `geometry-boundary-reference` ≈ `geometry-reference`).
  Confirm with the custodian whether both are needed before publication.
- **Other provenance roles**: the liminal examples also use bare roles that are in no vocabulary (for example `heightDescriptionExtractor`, `sourceSurveyPlan`, `convertedCsdmJson`).
  Decide whether they belong in [`wa-prov-role`](wa-prov-role.csv) or stay free text.

---

## 7. Downstream migration

Eight local repositories use 3D CSDM data.
The processWAData **`vocab-migrate`** skill (`.claude/skills/vocab-migrate/`) scans them read-only against the crosswalk files ([section 3](#3-the-crosswalk)) and the current vocabularies, then replaces whole values on a branch.
Ask Claude to "use vocab-migrate on `<repository>`", or run its script:

```bash
python .claude/skills/vocab-migrate/scripts/vocab_migrate.py scan <label> ../<repo> ...   # read-only
python .claude/skills/vocab-migrate/scripts/vocab_migrate.py apply ../<repo>              # dry run; --write on a branch
```

Status on 2026-10-18.
The counts are uses, from the scan [`2026-10-18`](https://github.com/andrewhunter2066/processWAData/tree/main/data/output/vocab-migrate/2026-10-18), taken before the fixture fixes below.
"To confirm" is mostly `wa-surveypoint-purpose:boundary`.

| Repository | Status | Branch / commit | What is left |
|---|---|---|---|
| `bblocks-3d-csdm-reporting` | **Done**: [D7](vocab-review.md#decision-d7) entitlements, role constants and label-table generator (merged, `383334d`); full SP83687 fixture migrated (541 values), trimmed fixture and variants regenerated | `vocab-cleanup/d7-entitlements` (merged); `vocab-cleanup/fixture-values` (uncommitted) | Only deliberate values remain: old-data handling in the adapter and its tests, the dated 2026-10-01 conformance table, and `representation-status:d3d` in the `scheme-composition` descriptions and `test_stage8.py` (descriptive; current value `derived-3d`) |
| `waTestData` | **Done**: code, generators, tests and data (merged, `734834a`); the four camelCase [`wa-prov-role`](wa-prov-role.csv) values in `src/threejs/data/parcel.json` | `feat/vocab/crosswalk-migration` (merged); `vocab-cleanup/prov-roles` (uncommitted) | Drift only (`nz-*`, `icsm-procedure-used:*`); `wa-vector-purpose:I` and the other [Stage 9](#cleanup-stage-9) drift values now have mappings, so a new scan will list them as mapped |
| `bblocks-xy-section-viewer` | **Built-strata fixture done**: `harness/fixtures/built-strata-example-1.json` re-copied from the profile `example-1.json` at `1e10472` (D7, [D12](vocab-review.md#decision-d12) and all value changes) | `vocab-cleanup/built-strata-fixture` (uncommitted) | `harness/fixtures/4-unit-up-down-with-parcel.json` (from waTestData): 55 `wa-surveypoint-purpose:boundary` to confirm, plus `wa-vector-purpose:I` (now mapped to `lot-boundary`, [Stage 9](#cleanup-stage-9)). `build/` is regenerated |
| `topo-functions` | Not started | — | Test fixtures only: 53 mapped, 145 to confirm, 2 stale profile copies |
| `bblocks-viewer-topo-feature-plugin` | Not started | — | Harness fixtures only: 81 mapped, 90 to confirm, 6 stale profile copies |
| `bblocks-cesium-viewer` | Not started | — | Harness fixtures only: 81 mapped, 90 to confirm, 1 stale profile copy |
| `wa_ngsc_requirements` | Not started | — | Notes: one mapped value; the presentation "blocker" about `icsm-reference-kind:*` (now `reference-kind:*`); drift in `notes/appellations.md` |
| `angles-to-bearings` | Not affected | — | — |

The xy-section-viewer fixture README now cites the profile commit on `vocab-cleanup/content`.
Change it to the `main` commit once the profile branch is merged.

Open decisions:
- **`wa-surveypoint-purpose:boundary` → `internal-boundary`** suited the profile examples and waTestData.
  Confirm it for each repository before applying it (`--accept`).
- **Drift with no mapping**: `strata-edge`, `surface-edge` and `terrain-intersection` (`wa-vector-purpose:I` is mapped since [Stage 9](#cleanup-stage-9)); `wa-locality:city-of-stirling` (a local government area, not a locality, also in the profile).
  Each needs a decision in the profile first (section 6).

The earlier one-off scan (processWAData `data/output/vocab-audit/downstream-scan/`, 2026-10-17) is superseded by the skill.
