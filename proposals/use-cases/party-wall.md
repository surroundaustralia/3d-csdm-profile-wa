## Use case: Represent a WA 3D party wall boundary between adjoining strata lots

### Purpose

To demonstrate how a WA 3D CSDM dataset can represent two adjoining built-strata lots that share a party wall, where the **legal boundary is the centre plane of the wall** and the **physical wall is recorded as supporting occupation evidence**.

## Use Case statement

**As a cadastral data editor, I want to encode a WA built-strata party wall as a shared 3D boundary face between adjoining lot solids, while recording the physical wall as occupation evidence, so that the legal lot boundary, physical building evidence, ownership context, and survey provenance can be clearly distinguished and validated.**

### Primary actor

Licensed cadastral surveyor or cadastral data editor.

### Supporting actors

Landgate validator or approver, strata scheme manager, lot owners, downstream 3D viewer or cadastral database user.

### Scenario

A strata scheme contains two adjoining townhouse-style lots. The lots are separated by a brick party wall. The wall has measurable thickness and height, but the legal boundary between the lots is the centre plane of the wall. The dataset must show:

1. the 3D solid extent of each lot;
2. the shared boundary face between the lots;
3. the physical wall as occupation or building evidence;
4. the relationship between the party wall boundary and the affected lots;
5. the provenance, CRS, vertical datum, survey observations, and WA profile vocabulary values needed to validate and exchange the dataset.

<!--
The [WA profile](https://icsm-au.github.io/3d-csdm/docs/wa-profile/) sits under the [ICSM CSDM Common profile](https://icsm-au.github.io/3d-csdm/docs/icsm-profile/) and the broader [3D CSDM model](https://icsm-au.github.io/3d-csdm/), including cadastral parcels, survey observations, provenance, geometry primitives, survey plan container content, and survey features [(ICSMa, 2023)](https://icsm-au.github.io/3d-csdm/). 
The WA profile also provides WA-specific vocabulary bindings for items such as administration units, coordinate reference systems, parcel types, parcel purposes, survey types, procedures, and vertical datums [(ICSMb, 2023)](https://icsm-au.github.io/3d-csdm/docs/wa-profile/).
-->

## Suggested 3D CSDM pattern

| Real-world thing                            | Suggested 3D CSDM representation                                                                                                  |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Lot 1 and Lot 2                             | `CadastralParcel` / 3D spatial units with solid geometry                                                                          |
| Legal party wall boundary                   | `BoundaryFace` representing the centre plane of the wall                                                                          |
| Physical wall                               | Occupation feature or building/occupation evidence, not necessarily the cadastral boundary itself                                 |
| Relationship between wall face and lots     | `touchesInward` / `touchesOutward`, or equivalent topological relationship from the shared boundary face to the adjoining parcels |
| Surveyed wall measurements                  | Survey observations, vector observations, occupation observations, or adopted observations                                        |
| Legal description of each lot               | `Appellation` using WA profile naming rules                                                                                       |
| Scheme, survey, approval and source history | Survey provenance bundle                                                                                                          |
| Common property, if relevant                | Separate parcel/common-property representation, or external reference, depending on the scheme plan                               |

This is a good fit for `BoundaryFace`, because the 3D CSDM defines a Boundary Face as an orientable surface where two solids touch, and notes that a single orientable boundary face can be used to define the boundary faces of both touching features. 
The model also provides `touchesInward` and `touchesOutward` relationships to describe which features lie on either side of the oriented geometry. 

## Main flow

1. _Create the CSD container_:
The dataset is created as a WA 3D CSDM cadastral survey dataset containing parcels, points, observations, occupation features, and survey provenance. 
The 3D CSDM describes a Cadastral Survey Dataset as the set of cadastral survey data needed to integrate or transfer survey observations into a cadastral database. 

2. _Define the two adjoining lot solids_:
Lot 1 and Lot 2 are represented as 3D parcels.
Each parcel has its own appellation, parcel type, parcel purpose, geometry, and interest reference.

3. _Define the party wall boundary face_:
A single vertical `BoundaryFace` is created along the centre plane of the party wall. 
Its horizontal position follows the centre of the measured wall. 
Its vertical extent follows the relevant scheme-plan wording, for example, from floor level to ceiling, roof, or stated AHD limits.

4. _Link the boundary face to both lots_:
The party wall boundary face is linked to Lot 1 on one side and Lot 2 on the other. 
The face orientation determines which lot is inward and which is outward.

5. _Record the physical wall separately_:
The actual wall thickness, construction, measured faces, offsets from wall faces to centre plane, and any uncertainty are recorded as occupation/building evidence. 
This avoids confusing the **physical wall volume** with the **legal boundary plane**.

6. _Record source and provenance_:
The dataset records the survey activity, surveyor, source plan, observations, computations, and any adopted values. 
The WA profile includes survey provenance concepts such as survey activities, survey agents, lifecycle activities, and survey entities.

7. _Validate the dataset_:
Validation checks confirm that the two lot solids do not overlap, that both lots reference the shared boundary face, that the party wall boundary is topologically consistent, and that the physical wall evidence is traceable to observations or adopted information.

## Alternative cases to include

| Case                                                   | Modelling response                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Wall is common property rather than part of either lot | Represent the wall or related space as common property or link it to a common-property parcel/evidence object. Landgate states that common property is the part of the scheme parcel that does not form part of a lot, and that there is no separate title for common property [(Landgate, 2020)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/overview-of-strata-schemes/stp-03-common-property/).  |
| Wall crosses outside the parent lot or scheme parcel   | Treat this as an exception requiring explicit common property, encroachment, easement, or legal-interest handling.                                                                                                                                                                                                                                                                                                                                                                        |
| Wall forms part of a non-exclusive right or burden     | Consider a secondary parcel pattern, because the WA profile describes a `SecondaryCadastralParcel` as representing the extent of a non-exclusive right that may overlap primary parcels.                                                                                                                                                                                                                                                                                                  |

## Acceptance outcomes

1. _Shared boundary represented once_:
The dataset contains one party-wall `BoundaryFace` representing the legal centre plane between the two adjoining lot solids.

2. _Adjacent lots are topologically linked_:
The party-wall boundary face identifies the two adjoining lot parcels using inward/outward or equivalent topological relationships.

3. _Physical wall evidence is not confused with the legal boundary_:
The measured wall faces, wall thickness, material, and offsets are stored as occupation/building evidence or observations, not as the cadastral boundary unless the scheme-plan wording makes that explicit.

4. _WA profile metadata is present_:
The dataset includes WA-relevant CRS, vertical datum, survey type, parcel type, parcel purpose, appellation, and provenance values.

5. _Common property is handled explicitly_:
Where the wall or adjacent space is common property, the dataset distinguishes the common-property extent from the private lot solids.

6. _Validation confirms 3D consistency_:
The adjoining lot solids do not overlap, the party-wall face is referenced by both lots, and the face geometry is consistent with the lot shells.
