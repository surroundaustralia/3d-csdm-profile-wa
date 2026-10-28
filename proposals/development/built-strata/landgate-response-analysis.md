# Landgate response to the Built Strata decisions register: analysis and plan

Analysis of Landgate's working notes on [`decisions-register.md`](decisions-register.md) (Rev A, 27 October 2026), prepared to resolve [issue #43](https://github.com/surroundaustralia/3d-csdm-profile-wa/issues/43).
It records what Landgate decided for each register item, what that means for the vocabularies and [`examples/example-1.json`](examples/example-1.json), and a phased plan.

Landgate responded to the register as it stood before the vocabulary decisions D1–D12 of 16 October 2026 ([`vocab-review.md` §5.10](../vocabularies/vocab-review.md#510-decisions)).
Their responses are mapped here onto the current vocabularies: `building-boundary-reference` is now [`boundary-reference`](../vocabularies/boundary-reference.csv), `wa-strata-component-role` is now the common [`component-role`](../vocabularies/component-role.csv), `icsm-scope` is now [`source-scope`](../vocabularies/source-scope.csv), and notations are kebab-case (D1).

Status: phase 1 (register) done; later phases not started.

## 1. Item-by-item analysis

### A. Policy

| #  | Landgate response | Effect on the profile |
|----|-------------------|-----------------------|
| 1  | **Accepted.** Built form remains the survey monument from which most built-strata boundaries are referenced; a coordinate may become an extent, but it is still a legal description. Landgate has no intention of changing this for built strata. | Register only. The example already uses `geometry-legal-status:derived-from-legal-description`. |
| 13 | **Accepted, amended.** Treat an exclusive-use area that remains common property as a `SecondaryParcel`, with a new term in `wa-secondary-parcel-purpose` ("Exclusive Use" or "By-Law Exclusive Use", to be settled). "By-Law Restricted Use" and different kinds of lease can be handled the same way. Appellation as `[Lot]-[Label]-[Doc]`. Landgate cited an exclusive-use by-law notification on an existing scheme as the motivating case. | New terms in `wa-secondary-parcel-purpose`, owned by `sa-icsm-vocabs`. Conflicts with the "exclusive use area" altLabel and "exclusive or restricted use" definition of `component-role:private-use-area`. Example addition. |
| 16 | **Accepted.** Common-property elements should still be parcel elements so they can be labelled ("car bay", "stairs", "void", "Common Property"), with a state or purpose of abuttal/reference. Landgate asked whether to create new abuttal line codes or reuse existing codes. | `wa-parcel-state:abuttal` already exists in `sa-icsm-vocabs` ("Document State: parcel is relevant to display"), so a new state may not be needed. |
| 15 | **Answered.** Current practice: area is the legal 2D extent of each component, with a combined total shown in brackets; it need not be the graphical area. In a 3D submission component areas should be shown; systems can total them, and the total need not be stated. | Define `area` in the scope note as the legal 2D extent of a component. In the example, the strata lots and their components carry no `area`; only the former-tenure and scheme parcels do. |

### B. Encoding

| #  | Landgate response | Effect on the profile |
|----|-------------------|-----------------------|
| 2  | **Accepted.** Landgate's annotated diagram adds a **stage** level between the scheme and its lots. | Register only for item 2; stage is new item 19. Consistent with D6 (`parcelPurpose: strata-scheme` now, `ParcelAggregate` as the target). |
| 8  | **Amended.** Boundary wording applies at **stage** level, with variations at element level; hierarchy scheme → stage → parcel → parcel part → boundary. Specific components (car bays, balconies) can have their own note. See [issue #35](https://github.com/surroundaustralia/3d-csdm-profile-wa/issues/35) and the 3D CSDM gap analysis. | Add `stage` to `source-scope`. The nine `source-scope:scheme` uses in the example need reviewing; component notes use `parcel-part`. |
| 10 | **Accepted** the original recommendation (a scheme-level interest). Landgate leadership also supports a scheme-level document. Unit entitlements are a separate document of the plan; Landgate stores current values and intends to store all values digitally, so the schema needs extending for extracts. Landgate sketched a unit-entitlement document and a per-lot `unitEntitlement` with a history dated by stage approval. | **Conflict with D7**, which put `entitlementTotal` on the scheme parcel and `entitlementPortion` on each lot parcel, with no strata interest types. Landgate's per-lot sketch fits D7, so D7 should stand, subject to confirmation with Landgate. Schema work in items 20 and 21; property name and datatype overlap item 9. |
| 11 | **Accepted;** Landgate would like worked examples. Two options were raised: (1) single terms such as `inside-face-of-wall`; (2) paired terms such as `innerSurface` + `wall`. | D5 and the example already use option 2: a `boundary-reference` relationship plus a reference to an `occupation-feature` (wall, slab, ceiling). Worked examples needed. |
| 17 | **Accepted.** | Register only. |

### C. Vocabulary sign-off

| #  | Vocabulary (current) | Landgate response | Effect on the profile |
|----|----------------------|-------------------|-----------------------|
| 4  | `vertical-definition-type` | **Amended:** `structure-referenced-boundary`, code `srb`. Landgate want to avoid the word "building". | Replace `building-referenced-boundary` (altLabel `brb`); nine uses in the example. Its definition ("a particular building surface, plane or element") should also say structure. |
| 5  | `boundary-role` | **Accepted;** asks for a better word than "lateral". | Open naming question; 95 uses of `lateral` in the example. |
| 6  | `boundary-reference` | **Accepted,** with `projection` split into `projection-centreline` and `projection-face`. | Add both as narrower terms of `projection`; reclassify the 43 uses of `projection` in the example. The common vocabulary belongs to the 3D CSDM core (D3), so this is a WA request to the core. |
| 7  | `component-role` | **Accepted;** asks for a better name than "principal-unit". | Open naming question; four uses in the example. Common vocabulary (D5), so the core confirms. |
| 18 | Exclusive-use component role | **Resolved by item 13;** no separate list needed. | No new role. Remove exclusive use from `private-use-area` (§3). |
| 12 | `wa-survey-documentation-type`, `wa-approved-form` | **Accepted.** Asks whether the unit-entitlement document should be two items (a PDF form and a digital form); notes that `wa-approved-form` allows for a specific version of the form. | Concerns `wa-survey-documentation-type:scheme-ue` (D9), owned by `sa-icsm-vocabs`. |

### D. For information

| #  | Item | Effect of Landgate's response |
|----|------|-------------------------------|
| 3  | `SolidAggregate` topology on the parcel feature | No change (resolved 18/09/2026). |
| 9  | `entitlementPortion` datatype | Now also depends on Landgate's `unitEntitlement` proposal (item 21): property name, numeric value and history. |
| 14 | Publish `wa-built-strata` building block | Still pending; now waits on items 8 and 19 (stage) and 13 (secondary-parcel purpose). |

## 2. New items raised by Landgate

Added to the register as section F, items 19–26.

| # | Item | Raised as | Proposed responsibility |
|---|------|-----------|-------------------------|
| 19 | **Stage** as a level between scheme and lot: how a stage is materialised and identified, and its relation to the scheme and lots. | Diagram annotation on item 2; item 8 | Landgate / WA / Surround |
| 20 | **Scheme document**: a scheme-level record with name (via address), address, tier (community titles), notice addresses (primary and secondary), unit entitlements, Record of Scheme and provenance. | Item 10 and gap analysis | Landgate / Surround |
| 21 | **Unit-entitlement document and history**: unit entitlement as a separate document with certification provenance, and a per-lot value whose history is bounded by stage approval dates. | Item 10 | Landgate / Surround |
| 22 | **Building extents and clearances**: in a 3D submission, how structure extents are shown; the clearance stated by the surveyor stays the official value for council building approvals, even where tools could compute it. | Item 15 discussion | Landgate |
| 23 | **Survey-strata conversion and parent lots**: linking a new lodged stage to the existing built-strata scheme, which elements it replaces, and keeping parent lots traceable (Strata Titles Act 1985 s31F; parent-lot tracking in Landgate's systems). | Working notes | Landgate / WA |
| 24 | **Leases and restricted use**: third-party leases (for example solar panels) and by-law restricted use, using the item 13 approach. | Item 13 | Landgate |
| 25 | **Mineral rights and depth limits**: whether the item 13 approach also applies. | Item 13 | Landgate |
| 26 | **Policy: digital documents**: removing the sketch from documents; whether a 3D CSDM document must form part of a submission, or a move to digital (JSON-LD) documents with a geometry element. | Item 13 | Landgate |

## 3. Vocabulary changes

### Draft vocabularies in this repository (`proposals/development/vocabularies/`)

| Vocabulary | Change | Owner |
|------------|--------|-------|
| `vertical-definition-type.csv` | Replace `building-referenced-boundary` with `structure-referenced-boundary`; altLabels `srb`, `brb`, `building-referenced-boundary`; definition refers to a structure surface, plane or element. | WA |
| `boundary-reference.csv` | Add `projection-centreline` and `projection-face` with broader `projection`; review the definitions that say "building" against Landgate's preference for "structure". | 3D CSDM core (D3) |
| `source-scope.csv` | Add `stage`, between `scheme` and `parcel`. | 3D CSDM core (D3) |
| `component-role.csv` | Narrow `private-use-area` to space that forms part of the lot: remove the altLabel "exclusive use area" and "exclusive or restricted use" from the definition. Rename `principal-unit` once Landgate choose a name. | 3D CSDM core (D5) |
| `boundary-role.csv` | Rename `lateral` once Landgate choose a name. | 3D CSDM core |

Each renamed term keeps its old notation as an altLabel (D1).
`crosswalk/vocab-crosswalk.csv` needs the same changes; the `meta/*.meta.ttl` files hold scheme metadata only and are unaffected.

### In `sa-icsm-vocabs` (through the uplift owner, HANDOFF §4)

| Vocabulary | Change |
|------------|--------|
| `wa-secondary-parcel-purpose` | Add by-law exclusive use and by-law restricted use. Lease subtypes later (item 24). |
| `wa-survey-documentation-type` | A digital unit-entitlement term alongside `scheme-ue`, only if two terms are wanted (question 3). |
| `wa-parcel-purpose` | Possibly `common-property`, if labelling needs a purpose in addition to the `abuttal` state (question 2). |

## 4. Example and scope-note changes

`examples/example-1.json`:

- Replace `vertical-definition-type:building-referenced-boundary` with `structure-referenced-boundary` (nine uses).
- Reclassify the 43 `boundary-reference:projection` uses as `projection-centreline` or `projection-face` from the plan wording.
- Change boundary-wording scope from `source-scope:scheme` to `source-scope:stage` where the wording applies to the stage, and use `parcel-part` for component-specific notes.
- Add `area` (legal 2D extent) to each `AggregateSolid` component.
- Add an exclusive-use `SecondaryParcel` and labelled common-property abuttal elements if SP83687 has them; otherwise add a small separate example.
- Keep personal names, signatures and addresses out of the example.

`built-strata-bblock-scope-note.md`:

- Record the decisions above: `area` semantics, stage scope, exclusive use as a secondary parcel, and the renamed terms.
- Replace the open point on exclusive-use component roles.

Worked examples for item 11, showing the paired-term encoding for a wall, slab and ceiling boundary.

## 5. Affected consumers

Run `/edge-dev:impact-assessment` before phase 2.
Expected consumers of the renamed terms and the example:

- `processWAData` and `edge-development-hub`, which read this checkout.
- Copies in `waTestData`, `bblocks-xy-section-viewer` and `bblocks-3d-csdm-reporting`.
- Vocabulary consumers `topo-functions`, `bblocks-viewer-topo-feature-plugin`, `ogc-i-bblocks-cesium-viewer` and `wa_ngsc_requirements`.

## 6. Plan

Each phase stops for review before the next starts.

1. **Register (done).** Decisions for items 1–18 recorded in [`decisions-register.md`](decisions-register.md), section F added for items 19–26, and section D updated; the Status column of [`built-strata-questions.md`](built-strata-questions.md) updated to match.
   Organisations are named, not individuals.
2. **Draft vocabularies in this repository.** Apply §3, holding the `lateral` and `principal-unit` renames until Landgate choose names.
3. **Vocabularies in `sa-icsm-vocabs`.** Send the §3 requests to the uplift owner.
4. **Example and scope note.** Apply §4, including the item 11 worked examples, and validate the example against the published blocks.
5. **Schema proposal.** Draft the scheme document, stage and unit-entitlement history (items 19–21, with item 9) as a proposal linked to the gap analysis.

## 7. Open questions

| # | Question | Recommendation |
|---|----------|----------------|
| 1 | Item 10: does D7 (entitlements as parcel properties) stand, given Landgate accepted the earlier scheme-level-interest recommendation? | Yes; Landgate's own per-lot sketch fits D7. Confirm with Landgate. |
| 2 | Item 16: new abuttal line codes, or reuse `wa-parcel-state:abuttal` with the element name as the parcel label? | Reuse `abuttal` and labels; add a `common-property` purpose only if querying needs it. |
| 3 | Item 12: one or two unit-entitlement documentation types? | One term (`scheme-ue`); distinguish PDF and digital forms by file media type and `wa-approved-form` version. |
| 4 | Item 13: "Exclusive Use" or "By-Law Exclusive Use"? | "By-Law Exclusive Use", matching "By-Law Restricted Use" and the instrument that creates it. |
| 5 | Items 5 and 7: replacement names for `lateral` and `principal-unit`. | Ask Landgate for preferred names; keep the current terms until then. |
| 6 | Should "building" also be replaced in the `boundary-reference` definitions? | Yes, where the term applies to any structure, in the same change as `structure-referenced-boundary`. |
