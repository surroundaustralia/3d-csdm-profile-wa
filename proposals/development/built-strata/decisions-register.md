# Built Strata Profile — Decisions Register

Pre-read for the Built Strata profile presentation. Item numbers match `built-strata-questions.md` in the profile repository; items 16–18 are added from the scope note and use case.

Each item has a **recommendation** from Surround. We are asking Landgate to **accept, amend, or assign an owner and date**.

## A. Policy (Landgate)

| #  | Question                                                                                                  | Recommendation                                                                                                   | Decision / Owner / Due |
|----|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|------------------------|
| 1  | Will WA ever treat submitted 3D geometry as the authoritative legal boundary (`l3d`), or only as derived from the plan wording (`dfld`)? | Encode as `dfld` now; the model already supports moving to `l3d` with no structural change.                       |                        |
| 13 | How should an exclusive-use area that stays common property be represented?                             | Not part of the lot's `AggregateSolid`; represent as an interest or secondary spatial object where legally required. |                        |
| 16 | Should common property be captured only for display/interpretation, or ever as a queryable cadastral volume? | Display/interpretation only, consistent with current Landgate practice; but record explicitly that residual space is common property. |                        |
| 15 | What does `area` mean for a multipart strata lot (habitable only, sum of all components, or projected footprint)? | No recommendation yet; needs a Landgate definition. Component areas can be derived from geometry whichever is chosen. |                        |

## B. Encoding (Landgate + Surround)

| #  | Question                                                                                                  | Recommendation                                                                                                   | Decision / Owner / Due |
|----|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|------------------------|
| 2  | How is the strata scheme itself materialised? `ParcelAggregate` exists in the core model but is not an allowed `featureType`. | Scheme as a `ParcelAggregate`-topology parcel (as in SP83687 example); raise `featureType` gap with ICSM.          |                        |
| 8  | At what level does boundary wording apply: scheme, parcel, parcel part or boundary?                      | Scheme level where it applies generally; boundary level only where it varies. Controlled `scope` value.           |                        |
| 10 | Where do entitlement and liability totals live?                                                          | On a scheme-level interest (`entitlementTotal` = 1000 for SP83687), not on the former-tenure parcel.              | Amended (D7, Surround team, 2026-10-16): `entitlementTotal` on the scheme parcel and `entitlementPortion` on each lot parcel; no strata interest types. |
| 11 | Formal adoption of `occupationFeatures` (wall, slab, ceiling).                                            | Adopt; align types with IFC (`IfcWall`, `IfcSlab`, ...).                                                          | Accepted (D5, Surround team, 2026-10-16): common `occupation-feature` vocabulary, IFC 4.3 matches as buildingSMART identifiers. ICSM to confirm. |
| 17 | Should `featureType` be set explicitly on scheme and former-tenure parcels?                               | Yes, `PrimaryParcel`, pending the ICSM response on item 2.                                                        |                        |

## C. Vocabulary sign-off (Landgate)

| #  | Vocabulary                                | Proposed terms                                                                              | Decision / Owner / Due |
|----|-------------------------------------------|---------------------------------------------------------------------------------------------|------------------------|
| 4  | `vertical-definition-type`                | add `brb` (building-referenced boundary)                                                    |                        |
| 5  | `boundary-role`                           | `lower`, `upper`, `lateral`                                                                 |                        |
| 6  | `building-boundary-reference`             | `innerSurface`, `outerSurface`, `centrePlane`, `upperSurface`, `underSurface`, `surface`, `projection` | Amended (D1, D8, Surround team, 2026-10-16): renamed `boundary-reference`; kebab notations; `outerSurface` merged into `external-surface` and `underSurface` into `lower-surface`. |
| 7  | `wa-strata-component-role`                | `principal-unit`, `courtyard`, `balcony`, `car-bay`, `storage`, `roof-space`, `private-use-area` | Amended (D5, Surround team, 2026-10-16): merged into common `component-role`. |
| 18 | Exclusive-use component role              | Add a distinct role for exclusive-use areas on common property (e.g. parking in a common garage)? | |
| 12 | `wa-survey-documentation-type`, `wa-approved-form` | Unit entitlement schedule, building approval certificate (BA14), endorsement certificate (15C), record of strata titles scheme, by-laws, notices | Amended (D9, Surround team, 2026-10-16): duplicates map to `scheme-ue` and `scheme-record-form`; the plan is endorsed under section 15(4) by the WAPC or its authorised delegate (15C, endorsement certificate). |

## D. For information (Surround actions)

| #  | Item                                                     | Status                                    |
|----|----------------------------------------------------------|-------------------------------------------|
| 3  | `SolidAggregate` topology on the parcel feature          | Resolved 18/09/2026                       |
| 9  | `entitlementPortion` datatype string → number/integer    | Change to be proposed to core schema      |
| 14 | Publish `wa-built-strata` building block                 | Pending decisions above                   |
| —  | Register WA vocabularies in profile `@context` and bindings | In progress                              |

## E. Vocabulary decisions (Surround team, 2026-10-16)

Recorded in full in `proposals/development/vocabularies/vocab-review.md` §5.10. The custodian (ICSM or Landgate) confirms each one when the vocabularies are submitted.

| Ref | Decision | Effect |
|-----|----------|--------|
| D1  | Kebab-case words for every draft notation; old codes kept as altLabels | IRIs become kebab-case; about 250 example values change |
| D2  | 3D CSDM (core) owns the SRD BBlock and vocabulary family; WA is interim steward | LADM may ultimately become the steward |
| D3  | Common vocabularies are part of the 3D CSDM core model (`https://icsm-au.github.io/3d-csdm`) | Not in `icsm-vocabs` |
| D4  | One `vertical-extent-status` scheme with two `skos:Collection`s | `vertical-boundary-state` retired; `dfv`, `a3d` removed |
| D5  | Common `component-role` and `occupation-feature` (IFC 4.3, buildingSMART identifiers) | `wa-strata-component-role` and `wa-occ-supplement.ttl` retired; ICSM to confirm |
| D6  | Strata scheme typed by `parcelPurpose: strata-scheme` now; `ParcelAggregate`/`EstateParcel` featureType is the target | Links to items 2 and 17 |
| D7  | `strata-scheme` and `strata-lot` are not interest types | Entitlements on parcels; lots to be created carry no interest until titles are registered |
| D8  | Merge `under-surface` → `lower-surface`, `outer-surface` → `external-surface` | Merged labels kept as altLabels |
| D9  | Strata plans are endorsed under section 15(4) by the WAPC or its authorised delegate, such as a local government | Three definitions aligned; SP83687 names `wa-local-government:city-of-belmont` as the delegate |
| D10 | Consolidate `limitRole` and `boundaryRole` into one property and `boundaryDefinitions` | `boundary-role` serves both |
| D11 | Derived boundary points use `wa-surveypoint-purpose:internal-boundary` with `wa-surveypoint-method:G` | `derived-boundary` and `wa-monument-condition:computed` rejected |
| D12 | `wa-prov-role` stays local; `icsm-boundary-coverage` removed | Components use `"fullBoundaryCoverage": true` |
