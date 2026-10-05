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
| 10 | Where do entitlement and liability totals live?                                                          | On a scheme-level interest (`entitlementTotal` = 1000 for SP83687), not on the former-tenure parcel.              |                        |
| 11 | Formal adoption of `occupationFeatures` (wall, slab, ceiling).                                            | Adopt; align types with IFC (`IfcWall`, `IfcSlab`, ...).                                                          |                        |
| 17 | Should `featureType` be set explicitly on scheme and former-tenure parcels?                               | Yes, `PrimaryParcel`, pending the ICSM response on item 2.                                                        |                        |

## C. Vocabulary sign-off (Landgate)

| #  | Vocabulary                                | Proposed terms                                                                              | Decision / Owner / Due |
|----|-------------------------------------------|---------------------------------------------------------------------------------------------|------------------------|
| 4  | `vertical-definition-type`                | add `brb` (building-referenced boundary)                                                    |                        |
| 5  | `boundary-role`                           | `lower`, `upper`, `lateral`                                                                 |                        |
| 6  | `building-boundary-reference`             | `innerSurface`, `outerSurface`, `centrePlane`, `upperSurface`, `underSurface`, `surface`, `projection` |                |
| 7  | `wa-strata-component-role`                | `principal-unit`, `courtyard`, `balcony`, `car-bay`, `storage`, `roof-space`, `private-use-area` | |
| 18 | Exclusive-use component role              | Add a distinct role for exclusive-use areas on common property (e.g. parking in a common garage)? | |
| 12 | `wa-survey-documentation-type`, `wa-approved-form` | Unit entitlement schedule, building approval certificate (BA14), endorsement certificate (15C), record of strata titles scheme, by-laws, notices | |

## D. For information (Surround actions)

| #  | Item                                                     | Status                                    |
|----|----------------------------------------------------------|-------------------------------------------|
| 3  | `SolidAggregate` topology on the parcel feature          | Resolved 18/09/2026                       |
| 9  | `entitlementPortion` datatype string → number/integer    | Change to be proposed to core schema      |
| 14 | Publish `wa-built-strata` building block                 | Pending decisions above                   |
| —  | Register WA vocabularies in profile `@context` and bindings | In progress                              |
