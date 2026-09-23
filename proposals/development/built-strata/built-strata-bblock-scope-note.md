# Built Strata BBlock Scope Note

## Purpose and status

This scope note defines the encoding pattern for `built-strata` cadastral parcels under the WA 3D CSDM profile: the strata scheme, its constituent lots, and the `former-tenure` parcel it was created from. 
It has been derived from the specification outlined in the [summary of Western Australian built strata examples](built-strata-overview.md), the [built strata parcel specification](built-strata-parcel-specification.md), the [`AggregateSolid` discussion note](aggregate-solid.md), and the [built strata questions](built-strata-questions.md).
It is a proposal, not an approved `bblock`.
Every property and vocabulary term below is either a working convention validated against the [worked example](examples/example-1.json), strata plan SP83687), or a CSV draft awaiting promotion. 
None of it exists yet in the published `wa-liminal` schema. 
The intended home is a new `wa-built-strata` bblock, sibling to wa-liminal, in the `3d-csdm-profile-wa` repository.

## Required encoding structure

A `built-strata` scheme is one `ParcelAggregate-topology` parcel (the scheme) plus one `PrimaryParcel` feature per lot, both derived from a `former-tenure` parcel. 
All three roles are verified against the worked example.

### 1. Former-tenure parcel

The land the scheme was created from.
- `parcelState`: `wa-parcel-state:former-tenure`
- `parcelPurpose`: `wa-parcel-purpose:lot` (its pre-subdivision purpose)
- Standard parcel properties only: `appellation`, `area`, `interests`, `parcelType`, `spatialRepresentationDefinitions` for its own 2D footprint
- No `topology.relationships` back to the scheme in the worked example.
  The reference is one-directional (`scheme` to `former-tenure`)

### 2. Strata-scheme parcel

Represents the scheme as a whole (Lots 1–9 on SP83687).
- `parcelPurpose`: `wa-parcel-purpose:strata-scheme`
- `topology.type`: `ParcelAggregate`; `references`: the member lots' ids
- `topology.relationships`: one entry, `rel`: `topology`, `role`: `containingPrimaryParcel`, `href` the former-tenure parcel, `targetFeatureType`: `"PrimaryParcel"`
- Required properties, in addition to standard parcel properties:

| Property                       | Type                           | Notes                                                                                                                                                                                                       |
|--------------------------------|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `schemeName`                   | string                         |                                                                                                                                                                                                             |
| `schemeNumber`                 | string                         |                                                                                                                                                                                                             |
| `bylawsLodged`                 | boolean                        |                                                                                                                                                                                                             |
| `schemeAddress`                | compound address (?)           | same `hasPart` pattern as `appellation` (?)                                                                                                                                                                 |
| `members`                      | array of `PrimaryParcel` `id`s | the scheme's lot parcels                                                                                                                                                                                    |
| `interests`                    | array                          | one entry for strata scheme total entitlement: `interestType`: `wa-interest-type:strata-scheme`, `entitlementTotal`: `integer`                                                                              |
| `spatialRepresentationSummary` | object                         | `memberRepresentationStatuses` (array, default `representation-status`:`d3d`), `memberParcelCount` (integer), `geometryTypes` (array, e.g. `AggregateSolid`), a`llMemberParcelsSpatiallyResolved` (boolean) |

### 3. Strata-lot parcels

One per lot (Lot 1, Lot 2 on SP83687)

- `parcelPurpose`: `wa-parcel-purpose:strata-lot`
- `topology.type`: `AggregateSolid`; `references`: the lot's own component solids
- `topology.relationships`: one entry; `rel`: `topology`, `role`: `containingPrimaryParcel`, `href` : the strata-scheme parcel
- Required properties, in addition to standard parcel properties:

| Property                           | Type   | Notes                                                                                                                                                                                                                                |
|------------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `schemeRef`                        | string | `id` of the strata-scheme parcel                                                                                                                                                                                                     |
| `interests`                        | array  | one entry for strata lot entitlement: `interestType`: `wa-interest-type:strata-lot`, `entitlementPortion`: `integer`                                                                                                                 |
| `spatialRepresentationDefinitions` | object | the built-strata variant, `verticalBoundaryDefinitions[]` with building-referenced (`vertical-definition-type`:`brb`) limits, alongside the standard `representationStatus`/`geometryLegalStatus`/`verticalExtent`/`derivedGeometry` |

## New and supplementary vocabularies

Every term below is either a WA-profile supplement (has a committed `.ttl` file, pending registration) or a CSV draft (no formal vocabulary built yet). 
None is in the published `icsm-3d`/`wa-liminal` schema.

**WA supplements:** `.ttl` files exist in `3d-csdm-profile-wa`/`profiles`, pending context declaration and bindings/labels registration:

| Scheme                         | New terms this encoding adds                                                                                                                                                                             |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `wa-parcel-purpose`            | `strata-scheme`                                                                                                                                                                                          |
| `wa-interest-type`             | `strata-scheme`, `strata-lot`                                                                                                                                                                            |
| `wa-occ`                       | `wall`, `slab`, `ceiling` (occupation-feature types)                                                                                                                                                     |
| `wa-annotation`                | `boundary-definition-statement`, `building-approval-certification`, `licensed-valuer-certification`, `record-of-strata-titles-scheme`, `strata-plan-endorsement`                                         |
| `wa-survey-documentation-type` | `certificate-of-title`, `built-strata-plan`, `unitEntitlementSchedule`, `buildingApprovalCertificate`, `strataPlanEndorsementCertificate`, `recordOfStrataTitlesScheme`, `schemeByLaws`, `schemeNotices` |
| `wa-approved-form`             | `2021-47738`, `BA14`, `15c`, `2020-27588-v3` (referenced form numbers)                                                                                                                                   |

**CSV drafts:** proposed, no formal vocabulary built yet:

| Scheme                         | Purpose                                                                                                                                                    |
|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `vertical-definition-type`     | adds `brb` (building-referenced boundary)                                                                                                                  |
| `boundary-role`                | `lower` / `upper` / `lateral`, extending the existing lower/upper-only vocabulary                                                                          |
| `building-boundary-reference`  | how a boundary relates to a building element: `innerSurface`, `outerSurface`, `centrePlane`, `upperSurface`, `underSurface`, `surface`, `projection`       |
| `cadastral-boundary-reference` | boundary defined by a title reference (`title-boundary`)                                                                                                   |
| `relative-height-reference`    | boundary offset from a reference surface (`below-surface`)                                                                                                 |
| `wa-strata-component-role`     | what a geometry component is within a multipart lot: `principal-unit`, `courtyard`, `balcony`, `car-bay`, `storage`, `roof-space`, `private-use-area`      |
| `icsm-scope`                   | what level a source statement applies at: `scheme`, `parcel`, `parcelPart`, `boundary`, `boundaryPart`, `dataset`                                          |
| `icsm-reference-kind`          | what kind of thing a boundary reference points at: `occupation-feature`, `reference-surface`, `parcel`                                                     |
| `icsm-mechanism`               | how a boundary was geometrically derived: `wall-centre-plane`, `face-projection`, `surface-offset`, `reference-surface-intersection`, `vertical-extrusion` |
| `icsm-boundary-coverage`       | whether a component's full boundary is accounted for                                                                                                       |
| `icsm-derived-geometry-status` | `generated` / `not-generated` / `solid-generated`                                                                                                          |
| `icsm-vertical-direction`      | `above` / `below` / c`oincident-with`                                                                                                                      |
| `wa-resolution-status`         | `resolved` / `unresolved`                                                                                                                                  |
| `wa-prov-role`                 | provenance roles for the generation pipeline: `format-converter`, `workflow-orchestrator`, `source-csd-file`, `source-pdf-file`                            |

Note that where the vocabulary prefix is `icsm-` the assumption is that the vocabulary is defined within the ICSM namespace.
This was a late consideration, so many of the other vocabularies may fit within the ICSM namespace as well.

## Questions / gaps

1. `featureType` on the **scheme** and **former-tenure** parcels. 
   The worked example leaves `featureType` unset on both. 
   The `icsm-3d` schema's `featureType` `enum` only permits `PrimaryParcel`/`SecondaryParcel`
   There isn't a legal value for a `ParcelAggregate-topology` feature. 
   Should the scheme parcel carry `featureType`: `PrimaryParcel` explicitly.
   Is it necessary on the `strata-lot`s, given the `FeatureCollection` has a `featureType`: `PrimaryParcel`?
2. **Registration gap:** Four of the WA-supplement vocabularies above (`wa-approved-form`, `wa-occ`, `wa-annotation`, and `wa-surveypoint-method` elsewhere in the profile) have real, committed `.ttl` files but are not yet declared in the WA profile's own @context, nor listed in `wa-vocab-bindings.csv`/`wa-vocab-labels.csv`.
3. **Scheme:** `ParcelAggregate` is a class in the core CSDM ontology, but not a legal `featureType` value.
   So the strata scheme can only be represented as a `ParcelAggregate-topology` parcel feature with no `featureType`, not as a first-class typed feature. 
   Is this a concern?
4. **Component-role vocabulary:** `wa-strata-component-role` doesn't yet distinguish an exclusive-use common-property area from a lot-owned component. 
   Private parking stalls in an underground (common) garage, for example. 
   Should this type of component be added to the vocabulary? 
   They will have different rules.