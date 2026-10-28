# Built Strata Profile — Decisions Register

Pre-read for the Built Strata profile presentation. Item numbers match [`built-strata-questions.md`](built-strata-questions.md) in the profile repository; items [16](#item-16)–[18](#item-18) are added from the scope note and use case.

Each item has a **recommendation** from Surround. We are asking Landgate to **accept, amend, or assign an owner and date**.

## A. Policy (Landgate)

| #  | Question                                                                                                  | Recommendation                                                                                                   | Decision / Owner / Due |
|----|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|------------------------|
| <a id="item-1"></a>1  | Will WA ever treat submitted 3D geometry as the authoritative legal boundary (`legal-3d`), or only as derived from the plan wording (`derived-from-legal-description`)? | Encode as `derived-from-legal-description` now; the model already supports moving to `legal-3d` with no structural change.                       |                        |
| <a id="item-13"></a>13 | How should an exclusive-use area that stays common property be represented?                             | Not part of the lot's `AggregateSolid`; represent as an interest or secondary spatial object where legally required. |                        |
| <a id="item-16"></a>16 | Should common property be captured only for display/interpretation, or ever as a queryable cadastral volume? | Display/interpretation only, consistent with current Landgate practice; but record explicitly that residual space is common property. |                        |
| <a id="item-15"></a>15 | What does `area` mean for a multipart strata lot (habitable only, sum of all components, or projected footprint)? | No recommendation yet; needs a Landgate definition. Component areas can be derived from geometry whichever is chosen. |                        |

## B. Encoding (Landgate + Surround)

| #  | Question                                                                                                  | Recommendation                                                                                                   | Decision / Owner / Due |
|----|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|------------------------|
| <a id="item-2"></a>2  | How is the strata scheme itself materialised? `ParcelAggregate` exists in the core model but is not an allowed `featureType`. | Scheme as a `ParcelAggregate`-topology parcel (as in [SP83687](examples/example-1.json) example); raise `featureType` gap with ICSM.          |                        |
| <a id="item-8"></a>8  | At what level does boundary wording apply: scheme, parcel, parcel part or boundary?                      | Scheme level where it applies generally; boundary level only where it varies. Controlled `scope` value.           |                        |
| <a id="item-10"></a>10 | Where do entitlement and liability totals live?                                                          | On a scheme-level interest (`entitlementTotal` = 1000 for SP83687), not on the former-tenure parcel.              | Amended ([D7](../vocabularies/vocab-review.md#decision-d7), Surround team, 2026-10-16): `entitlementTotal` on the scheme parcel and `entitlementPortion` on each lot parcel; no strata interest types. |
| <a id="item-11"></a>11 | Formal adoption of `occupationFeatures` (wall, slab, ceiling).                                            | Adopt; align types with IFC (`IfcWall`, `IfcSlab`, ...).                                                          | Accepted ([D5](../vocabularies/vocab-review.md#decision-d5), Surround team, 2026-10-16): common [`occupation-feature`](../vocabularies/occupation-feature.ttl) vocabulary, IFC 4.3 matches as buildingSMART identifiers. ICSM to confirm. |
| <a id="item-17"></a>17 | Should `featureType` be set explicitly on scheme and former-tenure parcels?                               | Yes, `PrimaryParcel`, pending the ICSM response on [item 2](#item-2).                                                        |                        |

## C. Vocabulary sign-off (Landgate)

| #  | Vocabulary                                | Proposed terms                                                                              | Decision / Owner / Due |
|----|-------------------------------------------|---------------------------------------------------------------------------------------------|------------------------|
| <a id="item-4"></a>4  | [`vertical-definition-type`](../vocabularies/vertical-definition-type.csv)                | add `building-referenced-boundary` (old code `brb`)                                                    |                        |
| <a id="item-5"></a>5  | [`boundary-role`](../vocabularies/boundary-role.csv)                           | `lower`, `upper`, `lateral`                                                                 |                        |
| <a id="item-6"></a>6  | [`building-boundary-reference`](../vocabularies/crosswalk/vocab-crosswalk.csv)             | `innerSurface`, `outerSurface`, `centrePlane`, `upperSurface`, `underSurface`, `surface`, `projection` | Amended ([D1](../vocabularies/vocab-review.md#decision-d1), [D8](../vocabularies/vocab-review.md#decision-d8), Surround team, 2026-10-16): renamed [`boundary-reference`](../vocabularies/boundary-reference.csv); kebab notations; `outerSurface` merged into `external-surface` and `underSurface` into `lower-surface`. |
| <a id="item-7"></a>7  | [`wa-strata-component-role`](../vocabularies/crosswalk/vocab-crosswalk.csv)                | `principal-unit`, `courtyard`, `balcony`, `car-bay`, `storage`, `roof-space`, `private-use-area` | Amended ([D5](../vocabularies/vocab-review.md#decision-d5), Surround team, 2026-10-16): merged into common [`component-role`](../vocabularies/component-role.csv). |
| <a id="item-18"></a>18 | Exclusive-use component role              | Add a distinct role for exclusive-use areas on common property (e.g. parking in a common garage)? | |
| <a id="item-12"></a>12 | [`wa-survey-documentation-type`](https://linked.data.gov.au/def/csdm/wa-survey-documentation-type), [`wa-approved-form`](../../../profiles/wa-approved-form-supplement.ttl) | Unit entitlement schedule, building approval certificate (BA14), endorsement certificate (15C), record of strata titles scheme, by-laws, notices | Amended ([D9](../vocabularies/vocab-review.md#decision-d9), Surround team, 2026-10-16): duplicates map to `scheme-ue` and `scheme-record-form`; the plan is endorsed under section 15(4) by the WAPC or its authorised delegate (15C, endorsement certificate). |

## D. For information (Surround actions)

| #  | Item                                                     | Status                                    |
|----|----------------------------------------------------------|-------------------------------------------|
| <a id="item-3"></a>3  | `SolidAggregate` topology on the parcel feature          | Resolved 18/09/2026                       |
| <a id="item-9"></a>9  | `entitlementPortion` datatype string → number/integer, and allowed as a parcel property with `entitlementTotal` ([D7](../vocabularies/vocab-review.md#decision-d7)) | Change to be proposed to core schema      |
| <a id="item-14"></a>14 | Publish `wa-built-strata` building block                 | Pending decisions above                   |
| —  | Register WA vocabularies in profile `@context` and bindings | In progress                              |

## E. Vocabulary decisions (Surround team, 2026-10-16)

Recorded in full in [`proposals/development/vocabularies/vocab-review.md`](../vocabularies/vocab-review.md) [§5.10](../vocabularies/vocab-review.md#510-decisions). The custodian (ICSM or Landgate) confirms each one when the vocabularies are submitted.

| Ref | Decision | Effect |
|-----|----------|--------|
| [D1](../vocabularies/vocab-review.md#decision-d1)  | Kebab-case words for every draft notation; old codes kept as altLabels | IRIs become kebab-case; about 250 example values change |
| [D2](../vocabularies/vocab-review.md#decision-d2)  | 3D CSDM (core) owns the SRD BBlock and vocabulary family; WA is interim steward | LADM may ultimately become the steward |
| [D3](../vocabularies/vocab-review.md#decision-d3)  | Common vocabularies are part of the 3D CSDM core model (`https://icsm-au.github.io/3d-csdm`) | Not in `icsm-vocabs` |
| [D4](../vocabularies/vocab-review.md#decision-d4)  | One [`vertical-extent-status`](../vocabularies/vertical-extent-status.csv) scheme with two [`skos:Collection`](https://www.w3.org/2009/08/skos-reference/skos.html#Collection)s | [`vertical-boundary-state`](../vocabularies/crosswalk/vocab-crosswalk.csv) retired; `dfv`, `a3d` removed |
| [D5](../vocabularies/vocab-review.md#decision-d5)  | Common [`component-role`](../vocabularies/component-role.csv) and [`occupation-feature`](../vocabularies/occupation-feature.ttl) (IFC 4.3, buildingSMART identifiers) | [`wa-strata-component-role`](../vocabularies/crosswalk/vocab-crosswalk.csv) and `wa-occ-supplement.ttl` retired; ICSM to confirm |
| [D6](../vocabularies/vocab-review.md#decision-d6)  | Strata scheme typed by `parcelPurpose: strata-scheme` now; `ParcelAggregate`/`EstateParcel` featureType is the target | Links to items [2](#item-2) and [17](#item-17) |
| [D7](../vocabularies/vocab-review.md#decision-d7)  | `strata-scheme` and `strata-lot` are not interest types | Entitlements on parcels; lots to be created carry no interest until titles are registered |
| [D8](../vocabularies/vocab-review.md#decision-d8)  | Merge `under-surface` → `lower-surface`, `outer-surface` → `external-surface` | Merged labels kept as altLabels |
| [D9](../vocabularies/vocab-review.md#decision-d9)  | Strata plans are endorsed under section 15(4) by the WAPC or its authorised delegate, such as a local government | Three definitions aligned; [SP83687](examples/example-1.json) names [`wa-local-government:city-of-belmont`](https://linked.data.gov.au/def/csdm/wa-local-government/city-of-belmont) as the delegate |
| [D10](../vocabularies/vocab-review.md#decision-d10) | Consolidate `limitRole` and `boundaryRole` into one property and `boundaryDefinitions` | [`boundary-role`](../vocabularies/boundary-role.csv) serves both |
| [D11](../vocabularies/vocab-review.md#decision-d11) | Derived boundary points use [`wa-surveypoint-purpose:internal-boundary`](https://linked.data.gov.au/def/csdm/wa-surveypoint-purpose/internal-boundary) with [`wa-surveypoint-method:G`](https://linked.data.gov.au/def/csdm/wa-surveypoint-method/G) | `derived-boundary` and [`wa-monument-condition:computed`](../vocabularies/crosswalk/vocab-crosswalk.csv) rejected |
| [D12](../vocabularies/vocab-review.md#decision-d12) | [`wa-prov-role`](../vocabularies/wa-prov-role.csv) stays local; [`icsm-boundary-coverage`](../vocabularies/crosswalk/vocab-crosswalk.csv) removed | Components use `"fullBoundaryCoverage": true` |
