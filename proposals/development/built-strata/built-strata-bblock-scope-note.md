# Built Strata BBlock Scope Note

## Purpose and status

This scope note defines the encoding pattern for `built-strata` cadastral parcels under the WA 3D CSDM profile: the strata scheme, its constituent lots, and the `former-tenure` parcel it was created from. 
It has been derived from the specification outlined in the [summary of Western Australian built strata examples](built-strata-overview.md), the [built strata parcel specification](built-strata-parcel-specification.md), the [`AggregateSolid` discussion note](aggregate-solid.md), and the [built strata questions](built-strata-questions.md).
It is a proposal, not an approved `bblock`.
Every property and vocabulary term below is either a working convention validated against the [worked example](examples/example-1.json), strata plan [SP83687](examples/example-1.json)), or a CSV draft awaiting promotion. 
None of it exists yet in the published `wa-liminal` schema. 
The intended home is a new `wa-built-strata` bblock, sibling to wa-liminal, in the `3d-csdm-profile-wa` repository.

## Required encoding structure

A `built-strata` scheme is one `ParcelAggregate-topology` parcel (the scheme) plus one `PrimaryParcel` feature per lot, both derived from a `former-tenure` parcel. 
All three roles are verified against the worked example.

### 1. Former-tenure parcel

The land the scheme was created from.
- `parcelState`: [`wa-parcel-state:former-tenure`](https://linked.data.gov.au/def/csdm/wa-parcel-state/former-tenure)
- `parcelPurpose`: [`wa-parcel-purpose:lot`](https://linked.data.gov.au/def/csdm/wa-parcel-purpose/lot) (its pre-subdivision purpose)
- Standard parcel properties only: `appellation`, `area`, `interests`, `parcelType`, `spatialRepresentationDefinitions` for its own 2D footprint
- No `topology.relationships` back to the scheme in the worked example.
  The reference is one-directional (`scheme` to `former-tenure`)

### 2. Strata-scheme parcel

Represents the scheme as a whole (Lots 1–9 on [SP83687](examples/example-1.json)).
- `parcelPurpose`: [`wa-parcel-purpose:strata-scheme`](../../../profiles/wa-parcel-purpose-supplement.ttl)
- `topology.type`: `ParcelAggregate`; `references`: the member lots' ids
- `topology.relationships`: one entry, `rel`: `topology`, `role`: `containingPrimaryParcel`, `href` the former-tenure parcel, `targetFeatureType`: `"PrimaryParcel"`
- Required properties, in addition to standard parcel properties:

| Property                              | Type                           | Required | Notes                                                                                                                                                                                                                                           |
|---------------------------------------|--------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `schemeName`                          | string                         | Yes      |                                                                                                                                                                                                                                                 |
| `schemeNumber`                        | string                         | Yes      |                                                                                                                                                                                                                                                 |
| `bylawsLodged`                        | boolean                        | Yes      | Include as an `interest` and/or `supportingDocumentation`                                                                                                                                                                                       |
| `schemeAddress`                       | compound address (?)           | Yes      | same `hasPart` pattern as `appellation` (?)                                                                                                                                                                                                     |
| `members`                             | array of `PrimaryParcel` `id`s | No       | Generate via a reporting transform. The scheme's lot parcels                                                                                                                                                                                    |
| `entitlementTotal`                    | integer                        | Yes      | Total unit entitlement of the scheme (1000 for SP83687); equals the sum of the lots' `entitlementPortion`. A parcel property, not an `interests[]` entry ([D7](../vocabularies/vocab-review.md#decision-d7)) |
| `spatialRepresentationSummary`        | object                         | No       | Generate via a reporting transform. `memberRepresentationStatuses` (array, default [`representation-status`](../vocabularies/representation-status.csv):`d3d`), `memberParcelCount` (integer), `geometryTypes` (array, e.g. `AggregateSolid`), a`llMemberParcelsSpatiallyResolved` (boolean) |

### 3. Strata-lot parcels

One per lot (Lot 1, Lot 2 on SP83687)

- `parcelPurpose`: [`wa-parcel-purpose:strata-lot`](https://linked.data.gov.au/def/csdm/wa-parcel-purpose/strata-lot)
- `topology.type`: `AggregateSolid`; `references`: the lot's own component solids
- `topology.relationships`: one entry; `rel`: `topology`, `role`: `containingPrimaryParcel`, `href` : the strata-scheme parcel
- Required properties, in addition to standard parcel properties:

| Property                           | Type    | Required | Notes                                                                                                                                                                                                                                |
|------------------------------------|---------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `schemeRef`                        | string  | No       | Unless two-way traversal is required. `id` of the strata-scheme parcel                                                                                                                                                               |
| `entitlementPortion`               | integer | Yes      | The lot's unit entitlement (117 for Lot 1 of SP83687). A parcel property, not an `interests[]` entry ([D7](../vocabularies/vocab-review.md#decision-d7)) |
| `spatialRepresentationDefinitions` | object  | Yes      | The built-strata variant, `verticalBoundaryDefinitions[]` with building-referenced ([`vertical-definition-type`](../vocabularies/vertical-definition-type.csv):`brb`) limits, alongside the standard `representationStatus`/`geometryLegalStatus`/`verticalExtent`/`derivedGeometry` |

## New and supplementary vocabularies

Every term below is either a WA-profile supplement (has a committed `.ttl` file, pending registration) or a CSV draft (no formal vocabulary built yet). 
None is in the published `icsm-3d`/`wa-liminal` schema.

**WA supplements:** `.ttl` files in `3d-csdm-profile-wa`/`profiles`, to be incorporated into their published WA parents:

| Scheme                         | Terms this encoding uses                                                                                                                                                  | Binding? | Notes                                                                                                   |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------------------------------------------------------------------------------------------------------|
| [`wa-parcel-purpose`](https://linked.data.gov.au/def/csdm/wa-parcel-purpose)            | `strata-scheme`                                                                                                                                                           | `wa`     | Interim WA purpose; the target is a `ParcelAggregate`/`EstateParcel` feature type ([D6](../vocabularies/vocab-review.md#decision-d6))                  |
| [`wa-annotation`](https://linked.data.gov.au/def/csdm/wa-annotation)                | `boundary-definition-statement`, `building-approval-certification`, `licensed-valuer-certification`, `record-of-strata-titles-scheme`, `strata-plan-endorsement`          | `wa`     | Strata annotations used in WA, each linked to the document type it certifies                            |
| [`wa-survey-documentation-type`](https://linked.data.gov.au/def/csdm/wa-survey-documentation-type) | `certificate-of-title`, `building-approval-certificate`, `strata-plan-endorsement-certificate`, `scheme-by-laws`, `scheme-notice`; published `scheme-ue`, `scheme-record-form`, `2d-plan` | `wa`     | Strata documents used in WA; duplicates of published terms were dropped                                 |
| [`wa-approved-form`](../../../profiles/wa-approved-form-supplement.ttl)             | `2021-47738`, `BA14`, `15c`, `2020-27588-v3`                                                                                                                              | `wa`     | Referenced WA form versions                                                                             |

[`wa-interest-type:strata-scheme`](../vocabularies/crosswalk/vocab-crosswalk.csv) and `strata-lot` are not used ([D7](../vocabularies/vocab-review.md#decision-d7)): `entitlementTotal` and `entitlementPortion` are properties of the scheme and lot parcels, and lots to be created carry no interest until titles are registered.

**Common draft vocabularies:** CSV drafts in `proposals/development/vocabularies/` (plus the hand-written [`occupation-feature.ttl`](../vocabularies/occupation-feature.ttl)), part of the 3D CSDM core ([D2](../vocabularies/vocab-review.md#decision-d2), [D3](../vocabularies/vocab-review.md#decision-d3)):

| Scheme                     | Terms this encoding uses                                                                                                                   | Binding  | Notes                                                                                                   |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|----------|---------------------------------------------------------------------------------------------------------|
| [`vertical-definition-type`](../vocabularies/vertical-definition-type.csv) | `building-referenced-boundary`                                                                                                             | `parcel` | Identifies the vertical definition used by built strata surveys                                         |
| [`boundary-role`](../vocabularies/boundary-role.csv)            | `lower` / `upper` / `lateral`                                                                                                              | `parcel` | Extends the former lower/upper-only limit roles with `lateral` for walls ([D10](../vocabularies/vocab-review.md#decision-d10))                          |
| [`boundary-reference`](../vocabularies/boundary-reference.csv)       | `inner-surface`, `external-surface`, `centre-plane`, `lower-surface`, `upper-surface`, `surface`, `plane`, `projection`, `title-boundary`, `offset-from-surface` | `parcel` | How a boundary relates to a building element, a 2D title boundary or a reference surface. Merges the former building-, cadastral- and [relative-height-reference](../vocabularies/crosswalk/vocab-crosswalk.csv) drafts; `outer` and `under` surfaces are altLabels ([D8](../vocabularies/vocab-review.md#decision-d8)) |
| [`occupation-feature`](../vocabularies/occupation-feature.ttl)       | `wall`, `slab`, `ceiling`                                                                                                                  | `parcel` | Building elements and structures, matched to IFC 4.3 ([D5](../vocabularies/vocab-review.md#decision-d5))                                               |
| [`component-role`](../vocabularies/component-role.csv)           | `principal-unit`, `courtyard`, `balcony`, `car-bay`, `storage`, `roof-space`, `private-use-area`                                           | `parcel` | What a geometry component is within a multipart lot ([D5](../vocabularies/vocab-review.md#decision-d5))                                                |
| [`source-scope`](../vocabularies/source-scope.csv)             | `scheme`, `parcel`, `parcel-part`, `boundary`, `boundary-part`, `dataset`                                                                  | `parcel` | What level a source statement applies at                                                                |
| [`reference-kind`](../vocabularies/reference-kind.csv)           | [`occupation-feature`](../vocabularies/occupation-feature.ttl), `reference-surface`, `parcel`                                                                                        | `parcel` | What kind of thing a boundary reference points at                                                       |
| [`derivation-mechanism`](../vocabularies/derivation-mechanism.csv)     | `wall-centre-plane`, `face-projection`, `surface-offset`, `reference-surface-intersection`, `vertical-extrusion`                           | `parcel` | How a boundary was geometrically derived                                                                |
| [`derived-geometry-status`](../vocabularies/derived-geometry-status.csv)  | `generated` / `not-generated` / `generation-failed`                                                                                        | `parcel` | Whether derived geometry was generated                                                                  |
| [`vertical-direction`](../vocabularies/vertical-direction.csv)       | `above` / `below` / `coincident-with`                                                                                                      | `parcel` | Direction of an offset relative to its reference                                                        |
| [`computability-status`](../vocabularies/computability-status.csv)     | `computable` / `not-computable`                                                                                                            | `parcel` | Resolution status of a boundary definition (absorbs the former [`wa-resolution-status`](../vocabularies/crosswalk/vocab-crosswalk.csv))                 |
| [`wa-prov-role`](../vocabularies/wa-prov-role.csv)             | `format-converter`, `workflow-orchestrator`, `source-csd-file`, `source-pdf-file`                                                         | —        | Provenance roles for the generation pipeline; implementation-local, not published ([D12](../vocabularies/vocab-review.md#decision-d12))                 |

Whether a component's full boundary is accounted for is the boolean `boundaryCoverage.fullBoundaryCoverage` (`true` / `false`), not a vocabulary ([D12](../vocabularies/vocab-review.md#decision-d12)).

The `icsm-` prefixes the drafts first carried were dropped when they were renamed (review [F-N3](../vocabularies/vocab-review.md#finding-f-n3)): the namespace already carries ownership. All IRIs stay under `https://linked.data.gov.au/def/csdm/`.

## Questions / gaps

1. <a id="question-1"></a>`featureType` on the **scheme** and **former-tenure** parcels. 
   The worked example leaves `featureType` unset on both. 
   The `icsm-3d` schema's `featureType` `enum` only permits `PrimaryParcel`/`SecondaryParcel`
   There isn't a legal value for a `ParcelAggregate-topology` feature. 
   Should the scheme parcel carry `featureType`: `PrimaryParcel` explicitly.
   Is it necessary on the `strata-lot`s, given the `FeatureCollection` has a `featureType`: `PrimaryParcel`?
2. <a id="question-2"></a>**Registration gap:** [`wa-approved-form`](../../../profiles/wa-approved-form-supplement.ttl) and [`occupation-feature`](../vocabularies/occupation-feature.ttl) are not yet listed in [`wa-vocab-bindings.csv`](../../../profiles/wa-vocab-bindings.csv)/[`wa-vocab-labels.csv`](../../../profiles/wa-vocab-labels.csv), and [`wa-approved-form`](../../../profiles/wa-approved-form-supplement.ttl) is not declared in any WA profile @context. ([`wa-annotation`](https://linked.data.gov.au/def/csdm/wa-annotation) and [`wa-surveypoint-method`](https://linked.data.gov.au/def/csdm/wa-surveypoint-method) were added to the `wa-core` context, and the common drafts to the `wa-liminal` and `wa-3d` contexts, during the 2026-10-16 cleanup.)
3. <a id="question-3"></a>**Scheme:** `ParcelAggregate` is a class in the core CSDM ontology, but not a legal `featureType` value.
   So the strata scheme can only be represented as a `ParcelAggregate-topology` parcel feature with no `featureType`, not as a first-class typed feature. 
   Is this a concern?
4. <a id="question-4"></a>**Component-role vocabulary:** [`component-role`](../vocabularies/component-role.csv) doesn't yet distinguish an exclusive-use common-property area from a lot-owned component. 
   Private parking stalls in an underground (common) garage, for example. 
   Should this type of component be added to the vocabulary? 
   They will have different rules.