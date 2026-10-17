# Vocabulary Review — Handoff

**Updated:** 2026-10-17, after the vocabulary cleanup (cleanup Stages [0](#cleanup-stage-0)–[8](#cleanup-stage-8)) and the final audit rerun ([section 5](#5-rerun-the-audit)).
**Next:** hand the drafts to the uplift owner ([section 4](#4-what-the-uplift-owner-receives)) and scan the downstream consumers with the crosswalk ([section 6](#6-still-open)).

| Document | Purpose |
|---|---|
| [`vocab-review.md`](vocab-review.md) | The review: inventory, findings (F-xx), dispositions with their cleanup status, decisions [D1](vocab-review.md#decision-d1)–[D12](vocab-review.md#decision-d12) ([§5.10](vocab-review.md#510-decisions)) |
| [`vocab-remediation-plan.md`](vocab-remediation-plan.md) | The longer-term remediation plan (Stages [0](vocab-remediation-plan.md#stage-0--mobilisation-and-baseline)–[10](vocab-remediation-plan.md#stage-10--longer-term-governance-c1c6)), with status notes showing what the cleanup completed |
| [`crosswalk/vocab-crosswalk.csv`](crosswalk/vocab-crosswalk.csv) | Every old supplement and CSV term (181) mapped to its new IRI, with the action and reason |
| this file | Where things stand and what each party receives |

---

## 1. State at the end of the cleanup

### Repositories and branches

Each branch is pushed to its own remote branch; none is merged into `main`. Each cleanup stage is one commit (see [Cleanup stages](#cleanup-stages)), so it can be reviewed or reverted alone.

| Repository | Branch | What it holds |
|---|---|---|
| `3d-csdm-profile-wa` | `vocab-cleanup/content` (from `docs/vocab-review-handoff`) | Decisions ([Stage 1](#cleanup-stage-1)), supplements ([2](#cleanup-stage-2)), CSV merges and crosswalk ([3](#cleanup-stage-3)), normalised CSVs ([4](#cleanup-stage-4)), examples, viewer data and contexts ([5](#cleanup-stage-5)), uplift YAML copy ([7](#cleanup-stage-7)), documentation and scheme metadata ([8](#cleanup-stage-8)) |
| `processWAData` | `vocab-cleanup/consumers` (from `feat/vocab-audit/analysis-cli`) | Skill, validators, `validate_vocab`, vocab-audit tool and use-case examples on the new codes ([Stage 6](#cleanup-stage-6)); audit runs [`00-baseline`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/00-baseline) … [`08-cleanup`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/08-cleanup) |
| `sa-icsm-vocabs` | `vocab-cleanup/uplift-altlabel` | [`source/vocabs-uplift.yml`](https://github.com/surroundaustralia/icsm-vocabs/blob/vocab-cleanup/uplift-altlabel/source/vocabs-uplift.yml) extended ([Stage 7](#cleanup-stage-7)). **Do not push to `main`**: a push touching `source/**` triggers `build-vocabs.yml` and republishes |

### Cleanup stages

Other documents cite these as "cleanup Stage N" or, in status cells, "Done (Stage N)". They are not the stages of [`vocab-remediation-plan.md`](vocab-remediation-plan.md), which has its own numbering.

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
| <a id="cleanup-stage-8a"></a>8a | Remaining camelCase [`wa-prov-role`](wa-prov-role.csv) values (`formatConverter`, `sourceCsdFile`, `sourcePdfFile`, `workflowOrchestrator`) changed to the kebab-case notations in the liminal examples, viewer data, the processWAData generator and its examples and outputs | not yet committed | — |

### What changed

- **Decisions [D1](vocab-review.md#decision-d1)–[D12](vocab-review.md#decision-d12)** are recorded in [`vocab-review.md`](vocab-review.md) [§5.10](vocab-review.md#510-decisions) (decided by the Surround team; custodians confirm at submission).
- **Supplements** (`profiles/*-supplement.ttl`): `computed`, `derived-boundary`, [`wa-survey-type:ct`](crosswalk/vocab-crosswalk.csv) and the two strata interest types were removed; the rest were corrected ([D9](vocab-review.md#decision-d9) endorsement wording, kebab-case IRIs, [`skos:related`](https://www.w3.org/2009/08/skos-reference/skos.html#related) between annotations and document types, [`wa-approved-form`](../../../profiles/wa-approved-form-supplement.ttl) scheme and source IRIs). [`wa-occ`](crosswalk/vocab-crosswalk.csv) is now the common [`occupation-feature.ttl`](occupation-feature.ttl) in this folder, with IFC 4.3 matches.
- **CSV drafts**: 25 files became 16 drafts plus the local [`wa-prov-role`](wa-prov-role.csv). All use one format: `preflabel,definition,notation,altlabel,broader,related,scopenote`, `|` as the only separator, kebab-case notations (old code kept as the first altLabel) and readable prefLabels. [`vertical-extent-status.collections.ttl`](vertical-extent-status.collections.ttl) declares its two collections.
- **Examples and data**: the two proposal example sets, `_sources/wa-liminal` examples, all threeJS viewer data and the `wa-liminal`, `wa-3d` and `wa-core` contexts use the new values. Regenerating [SP83687](../built-strata/examples/example-1.json) from the processWAData skill reproduces [`built-strata/examples/example-1.json`](../built-strata/examples/example-1.json) exactly.
- **Uplift**: [`vocabs-uplift.yml`](https://github.com/surroundaustralia/icsm-vocabs/blob/vocab-cleanup/uplift-altlabel/source/vocabs-uplift.yml) splits `altlabel` on `|` for every CSV and maps `broader`, `related` and `scopenote` for draft-format CSVs (those with a `broader` column). All 79 published vocabularies still build unchanged.
- **Duplicated documents in processWAData**: the copies of the built-strata overview, parcel specification and scope note, and of the liminal overview, in processWAData `use-cases/` and in the skill's `references/`, are now pointers to the profile documents (located via `WA_PROFILE_ROOT`). The profile repository is canonical.

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

[Stage 8a](#cleanup-stage-8a) removes the four remaining `USAGE_FORM_MISMATCH` warnings for `wa-prov-role`; a check run after it gave 23 errors and 29 warnings, with no new findings.

Rises in Stages [3](#cleanup-stage-3)–[4](#cleanup-stage-4) were expected: examples kept the old values until [Stage 5](#cleanup-stage-5). Each run folder has `compare.md` and the per-folder `tests.txt`; the processWAData test suite is back to its baseline (only the three `write_json` failures and the `record_type` error, which predate the cleanup).

---

## 2. Setup each session

```bash
export ICSM_VOCAB_ROOT=/mnt/c/Users/Andrew/Documents/GitHub/sa-icsm-vocabs/vocabs
export WA_PROFILE_ROOT=/mnt/c/Users/Andrew/Documents/GitHub/3d-csdm-profile-wa
export ICSM_PROFILE_ROOT=/mnt/c/Users/Andrew/Documents/GitHub/3d-csdm-profile-icsm
cd /mnt/c/Users/Andrew/Documents/GitHub/processWAData
export PYTHONPATH=src            # or: pip install -e .  (then use `wa-vocab-audit`)
```

**Easiest:** ask Claude to use the `vocab-audit` skill (processWAData `.claude/skills/vocab-audit/`). It runs the audit, compares with an earlier run and explains the changes. Or run its script directly:

```bash
python .claude/skills/vocab-audit/scripts/run_audit.py <NN-label> --against <earlier-label>
```

This writes `data/output/vocab-audit/<NN-label>/` with `summary.md`, `findings.csv`, `usage.csv` and `compare.md`. The audit now also reads hand-written Turtle drafts in this folder (`ttl-draft`, e.g. [`occupation-feature.ttl`](occupation-feature.ttl)) and checks collection members in `*.collections.ttl`.

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

It lives in a subfolder so the audit does not read it as a vocabulary. Apply it to any consumer that still uses old values; Stages [5](#cleanup-stage-5) and [6](#cleanup-stage-6) did so by replacing whole string values, then made a few changes by hand.

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

- **Cleared**: dangling references (15 → 0), the undeclared [`wa-approved-form`](../../../profiles/wa-approved-form-supplement.ttl) scheme, literal-where-IRI, empty literals, reused notations, the duplicate vocabulary and mixed CSV separators. Undeclared prefixes fell from 19 to 4, usage-form mismatches from 17 to 7 (3 after [Stage 8a](#cleanup-stage-8a)). Published concepts are unchanged, so nothing was republished.
- **Remaining errors**: all are the drift listed in [section 6](#6-still-open), plus the local `wa-angle-derivation` prefix ([D12](vocab-review.md#decision-d12)) and the missing ICSM binding for `icsm-survey-type`.
- **New, expected**: overlapping-vocabulary warnings that only show now the codes are readable words (mostly similar names for different concepts); two prefixes for `wa-annotation` (the `wa-core` alias, below); "uses unpublished vocabulary" notes for the renamed drafts until the uplift; deliberately invalid values in the processWAData tests; and legacy inputs such as `representation-status:2D` that the validators still accept.
- **New, for review**: the audit finds every [`vertical-value-type`](vertical-value-type.csv) concept matched by one in [`vertical-definition-type`](vertical-definition-type.csv) (see [section 6](#6-still-open)).

---

## 6. Still open

- **Downstream consumers**: 4–5 other repositories process 3D CSDM data. Scan them for retired values with the crosswalk once the vocabularies are final, before migrating them.
- **`entitlementPortion` placement ([D7](vocab-review.md#decision-d7))**: [SP83687](../built-strata/examples/example-1.json) puts it on the lot parcels, but the common schema defines it on `interests[]`; this needs a schema extension (decision register items [9](../built-strata/decisions-register.md#item-9) and [10](../built-strata/decisions-register.md#item-10)).
- **Published `related` columns**: 78 published CSVs have a free-text `related` column (labels, not concept references). The uplift leaves it unmapped; whether those should become links is for the uplift owner.
- **[`3d-csdm-profile-icsm/vocabs-uplift.yml`](https://github.com/icsm-au/3d-csdm-profile-icsm/blob/main/vocabs-uplift.yml)** still differs from the fork (read-only for this work).
- **`wa-core` examples** (`_sources/wa-core/examples`, mainly `extended-example.json`) still use [`wa-annotation-role:`](https://linked.data.gov.au/def/csdm/wa-annotation) and `wa-pt-method:`; the `wa-core` context keeps `wa-annotation-role` as an alias for them.
- **Viewer PDF link**: two viewer files link a `wa-leg:` PDF named for the 1955 regulations; the descriptions now say 1995.
- **processWAData**: `_absolute_height_object` is called but not defined (use-case examples 04 and 05 cannot be validated); use-case example 07 lacks height-description, jurisdictional-source and side-face content. Both predate the cleanup.
- **Drift found by the audit that the review did not list** (unchanged by the cleanup): single-letter [`wa-vector-purpose`](https://linked.data.gov.au/def/csdm/wa-vector-purpose) codes, `wa-procedure-used:M`/`m`/`d`, `wa-parcel-type:road`/`miscellaneous`/`l`, `wa-parcel-purpose:reserve`/`townlot`, `icsm-distance-type:grid`/`bearing`, `wa-survey-type:p`, the undefined `wa-mines` prefix and two prefixes for [`wa-secondary-parcel-type`](https://linked.data.gov.au/def/csdm/wa-secondary-parcel-type). The `wa-core` context also declares `wa-interest` and `wa-vector-type` prefixes that resolve to no vocabulary. In `3d-csdm-profile-icsm` (read-only here), the common context declares `icsm-survey-type` and the vocabulary bindings name it, but no such vocabulary exists (roadmap activity [B5](vocab-review.md#activity-b5)).
- **[`vertical-value-type`](vertical-value-type.csv) and [`vertical-definition-type`](vertical-definition-type.csv)**: the [`08-cleanup`](https://github.com/andrewhunter2066/processWAData/tree/vocab-cleanup/consumers/data/output/vocab-audit/08-cleanup) audit matches all four `vertical-value-type` concepts to `vertical-definition-type` ones (`relative-height-description` ≈ `offset`, `absolute-height-description` ≈ `absolute-height`, `jurisdictional-boundary-rule` ≈ `rule-expression`, `geometry-boundary-reference` ≈ `geometry-reference`). Confirm with the custodian whether both are needed before publication.
- **Other provenance roles**: the liminal examples also use bare roles that are in no vocabulary (for example `heightDescriptionExtractor`, `sourceSurveyPlan`, `convertedCsdmJson`). Decide whether they belong in [`wa-prov-role`](wa-prov-role.csv) or stay free text.
