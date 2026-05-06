## Use case: Encode a WA multi-unit and/or multi-level built-strata scheme as a 3D CSDM dataset

### Description

A WA built-strata scheme may contain a multi-level apartment building, along with (associated) basement car bays or outdoor parking bays, storage areas, ground-floor common property, upper-level residential lots, shared foyers, lifts, stairwells, external walls, slabs, ceilings, balconies, service areas, etc.

The use case will demonstrate how a built-strata scheme can be represented as a 3D CSDM cadastral survey dataset. Where each private strata lot is encoded as a 3D cadastral parcel, common-property areas are distinguished from private lots, and the legal lot boundaries are defined by reference to the building surfaces, levels, and plan notations.

Landgate describes built-strata as schemes where lot boundaries, including height, are defined by reference to the building or buildings shown on the strata plan, while survey-strata lots are surveyed and shown on a survey-strata plan without buildings being shown [(Ladgate, 2023)](https://www.landgate.wa.gov.au/strata-and-community-titles/strata-titles/learn-about-strata/strata-in-wa/).

## Use case statement

**As a cadastral data editor, I want to encode a WA multi-unit, multi-level strata plan as a 3D CSDM dataset, so that each lot, common-property area, vertical boundary, building-referenced boundary, and supporting survey observation can be represented clearly, validated, and exchanged for use in a 3D cadastre.**


## Purpose

The purpose of the use case is to test whether the WA 3D CSDM pattern can support a built-strata dataset where the important cadastral information is not only horizontal parcel extent, but also:

| Dataset concern                | Why it matters                                                                                                                          |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Multi-level parcels/3D solids  | Apartments, storage lots, balconies, and car bays may exist on different levels.                                                        |
| Vertical boundaries            | Lot limits may be defined by floors, ceilings, slabs, walls, or AHD values.                                                             |
| Building-referenced boundaries | Built strata boundaries are often defined by reference to a building. Ideally an identifiable building feature.                         |
| Common property                | Areas not included in a lot may be jointly owned and managed by the strata company.                                                     |
| Shared structures              | External walls, stairwells, lifts, roofs, foyers, driveways, and service zones may need to be represented separately from private lots. |
| Survey evidence                | The model needs to preserve survey observations, adopted measurements, computations, and provenance.                                    |

Landgate notes that strata lots are cubic spaces referenced to a building, while survey-strata lots are defined by dimensions and survey information and may be vertically limited or unlimited [(Landgate, 2020a)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/overview-of-strata-schemes/stp-02-lots/).

## Primary actor

Cadastral surveyor or cadastral data editor

## Supporting actors

Landgate validator, scheme plan examiner, strata company, lot owner, 3D viewer user, downstream cadastral database user.

## Scenario

A registered WA strata plan contains:

| Level        | Content                                                                              |
|--------------|--------------------------------------------------------------------------------------|
| Basement     | car bays, storage lots, access ramps, services, common-property circulation areas    |
| Ground floor | entrance foyer, lift lobby, common driveway, plant room, private courtyard part-lots |
| Level 1      | residential Lots 1–6, balconies, shared corridor                                     |
| Level 2      | residential Lots 7–12, balconies, shared corridor                                    |
| Roof level   | common roof, plant area, solar equipment zone, possible exclusive-use area           |

The dataset must represent the private lot solids, common-property spaces, building-referenced boundary surfaces, shared structural elements, and vertical stratum limits.

## Proposed 3D CSDM modelling pattern

| Real-world item                         | Suggested 3D CSDM representation                                                                       |
|-----------------------------------------|--------------------------------------------------------------------------------------------------------|
| Whole strata scheme parcel              | Parcel aggregate or scheme-level cadastral parcel grouping                                             |
| Individual apartment lot                | 3D `CadastralParcel`, usually a primary cadastral parcel                                               |
| Car bay or storage lot                  | Separate 3D parcel, or part of the relevant lot where legally part of that lot                         |
| Lot spread across multiple levels       | Multi-part 3D parcel, with each part recorded as a spatial component of the same legal lot             |
| Common foyer, lift, stairwell, driveway | Common-property parcel or common-property spatial unit, depending on the implementation pattern        |
| External walls, slabs, ceilings, roof   | Occupation/building features or boundary reference features                                            |
| Wall, floor, or ceiling boundary        | Boundary face or surface used to define the 3D parcel shell                                            |
| Shared wall or slab between two lots    | Single `BoundaryFace` used by both adjoining parcel solids                                             |
| Easement or exclusive-use area          | Secondary cadastral parcel or interest-linked spatial object where it overlaps lots or common property |
| Survey observations                     | Vector observations, occupation observations, adopted observations, computations                       |
| Scheme plan metadata                    | CSD container metadata, survey purpose, survey type, CRS, vertical datum, provenance                   |

A `BoundaryFace` will be useful because the 3D CSDM defines it as the orientable surface where two solids touch, and notes that a single orientable boundary face can be used to define the boundary faces of both touching features [(ICSM, 2023)](https://icsm-au.github.io/3d-csdm/docs/).

## Main flow

1. _Create the WA 3D CSDM dataset container_:
The dataset is created as a cadastral survey dataset containing parcels, survey points, observations, occupation features, supporting documents, and provenance. 
The 3D CSDM describes a cadastral survey dataset as the set of cadastral survey data needed to integrate or transfer survey observations into a cadastral database [(ICSM, 2023a)](https://icsm-au.github.io/3d-csdm/docs/).

2. _Identify the parent scheme parcel_:
The freehold parent parcel is recorded as the land being subdivided by the strata scheme.

3. _Create the private strata lot solids_:
Each apartment, car bay, storage unit, balcony, courtyard, or other private lot component is encoded as a 3D parcel or part of a 3D parcel.

4. _Represent multi-level lots_:
Where a lot has parts on more than one level, the dataset keeps those parts linked to the same legal lot appellation. 
This reflects Landgate guidance that, for strata plans with lot parts on more than one floor level, it may be necessary to generate a table describing the which levels specific part lots are on, along with relevant metadata such as part lot area  [(Landgate, 2022)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/establishing-a-strata-scheme/stp-09-scheme-plans/).

5. _Define vertical boundaries_:
Lot solids are bounded by vertical and horizontal boundary faces. 
These may be derived from inner wall surfaces, upper floor surfaces, under-ceiling surfaces, slab levels, roof levels, or AHD-defined heights, depending on the plan wording.

6. _Represent common property_:
Common-property areas are represented explicitly where the implementation needs a queryable 3D common-property volume. 
This may include foyers, corridors, stairwells, lifts, service risers, driveways, external walls, roofs, and other areas not included in a private lot. 
Landgate describes common property as the part of the scheme parcel that is jointly owned and not contained within any private lot [(Landgate, 2023)](https://www.landgate.wa.gov.au/strata-and-community-titles/strata-titles/learn-about-strata/strata-in-wa/). 

7. _Record building features separately from legal boundaries_:
Walls, slabs, ceilings, columns, and roofs can be recorded as occupation or building evidence. 
The cadastral boundary should be represented as the legal surface or solid limit, not automatically as the whole physical building element.

8. _Attach survey observations and provenance_:
Measurements, adopted values, computations, plan references, source documents, and surveyor information are recorded so that the lot geometry can be traced back to its evidence.
The WA profile includes WA-specific bindings for items such as horizontal CRS, survey type, and survey purpose [(ICSM, 2023b)](https://icsm-au.github.io/3d-csdm/docs/wa-profile/).

9. _Validate the dataset_:
The dataset is checked to confirm that lot solids close correctly, private lots do not overlap incorrectly, common property is not double-counted as private lot space, shared boundary faces are consistently referenced, and vertical limits are clear.

## Important distinction from survey-strata conversion

This use case focuses on **built-strata**, not survey-strata.

Landgate conversion guidance is useful because it highlights what changes when a strata scheme is converted to a survey-strata scheme. 
In a conversion, the intention is to enable the division of common property between existing strata lot owners, not to subdivide existing strata lots. 
Landgate also notes that, for survey-strata, buildings are not considered when assessing unit entitlement [(Landgate, 2020b)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/).

So the use case could include a secondary test:

> Can the 3D CSDM dataset distinguish the original **building-referenced built-strata lot solids** from a later **survey-strata representation** where lots are defined by surveyed land boundaries rather than by building surfaces?

## Alternative flows and edge cases

| Case                                                       | Expected handling                                                                                                                                                      |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Lot boundary is the inner surface of a wall                | Boundary face is placed on the inner wall surface, with the wall retained as occupation/building evidence.                                                             |
| Lot boundary is the centre plane of a party wall           | Boundary face is placed at the centre plane and linked to both adjoining lots.                                                                                         |
| Lot extends over several levels                            | Lot is represented as a multi-part 3D parcel under one legal appellation.                                                                                              |
| Balcony or courtyard is part of a lot                      | Represent as part of the lot solid, with its own vertical stratum limits.                                                                                              |
| Balcony or roof area is common property with exclusive use | Represent common property separately and link the exclusive-use right as an interest or secondary spatial object.                                                      |
| Service riser passes through private lots                  | Represent the riser as common property, easement, building feature, or secondary parcel, depending on the legal plan wording.                                          |
| Building feature does not match legal boundary             | Preserve the building feature as evidence and keep the legal boundary as the authoritative cadastral surface.                                                          |
| Conversion to survey-strata is being tested                | Retain the relationship between existing strata lot numbers and converted survey-strata lots, without splitting an existing strata lot through the conversion process. |

## Acceptance outcomes

1. _Each strata lot is represented as a 3D cadastral parcel_:
Each private lot has a legal appellation, parcel type, parcel purpose, geometry, and relationship to the parent scheme parcel.

2. _Multi-level lot parts remain legally connected_:
Where a lot has parts on multiple levels, each part is spatially distinct but linked to the same legal lot.

3. _Vertical boundaries are explicit_:
Floors, ceilings, wall faces, roof surfaces, slab levels, and AHD-defined heights are represented as explicit boundary surfaces or recorded boundary definitions.

4. _Common property is distinguishable from private lot space_:
Shared foyers, driveways, external walls, roofs, lift cores, and service areas can be queried separately from private lot parcels.

5. _Building evidence is separated from legal parcel geometry_:
Physical building elements are recorded as occupation/building features unless they are explicitly the legal boundary.

6. _Shared boundaries are topologically consistent_:
Where two lots share a wall, floor, ceiling, or slab boundary, the relevant boundary face is consistently referenced by both parcels.

7. _Survey evidence and provenance are traceable_:
Measurements, computations, adopted observations, source plans, survey activities, and supporting documents are available for validation and audit.

8. _The dataset supports WA profile validation_:
The dataset uses WA profile values for CRS, survey type, survey purpose, vertical datum, parcel classification, and other jurisdiction-specific metadata where required.
