## Use case: Encode a WA multi-unit, multi-level survey-strata scheme as a 3D CSDM dataset

### Description

A WA survey-strata scheme contains a set of surveyed lots, common property, accessways, service areas, easements, and optional vertical limits. 
Buildings may exist on the lots, but they are not shown on the survey-strata plan and do not define the cadastral boundaries.

The use case demonstrates how the scheme can be represented as a 3D CSDM cadastral survey dataset, where each survey-strata lot is encoded as a cadastral parcel, common property is represented explicitly, easements and spatial interests are recorded, and any vertical restrictions are defined by survey information rather than by building surfaces.

This differs from the built-strata use case because the legal boundaries are not derived from walls, floors, ceilings, slabs, or other building elements. 
Instead, they are derived from surveyed dimensions, survey marks, observations, plan geometry, and, where applicable, AHD-defined height or depth limits.

## Use case statement

**As a cadastral data editor, I want to encode a WA survey-strata scheme as a 3D CSDM dataset, so that each surveyed lot, common-property area, easement, vertical restriction, and supporting survey observation can be represented clearly, validated, and exchanged without relying on building-referenced boundaries.**


## Purpose

The purpose of the use case is to test whether the WA 3D CSDM pattern can support a survey-strata dataset where the important cadastral information is:

| Dataset concern          | Why it matters                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Survey-defined lots      | Survey-strata lots are defined by surveyed dimensions and survey information, not by buildings.                                                                                                                                                                                                                                                                                                            |
| Common property          | Common property must be shown explicitly and given its own unique number where present [(Landgate, 2023)](https://www.landgate.wa.gov.au/strata-and-community-titles/strata-titles/learn-about-strata/resources-for-strata-owners/).                                                                                                                                                                       |
| Easements and rights     | Access, light and air, support, services, party wall, intrusion and pedestrian access rights may need to be represented spatially [(Landgate, 2020b)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/).                           |
| Optional vertical limits | Survey-strata lots may be unlimited in height and depth, or limited by AHD levels [(Landgate, 2020b)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/).                                                                           |
| Survey evidence          | The dataset must preserve survey marks, observations, dimensions, adopted measurements, computations and provenance.                                                                                                                                                                                                                                                                                       |
| Conversion constraints   | If the dataset represents a conversion from built strata, existing lot identities must be preserved and common property may be allocated into existing lots [(Landgate, 2020b)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/). |


## Primary actor

Cadastral surveyor or cadastral data editor

## Supporting actors

Landgate validator, cadastral database maintainer, infrastructure authority, local government, title administrator, 3D viewer user, downstream spatial data user.

## Scenario

A registered single-tier built-strata scheme is converted to a survey-strata scheme. The scheme contains existing lots, common driveways, service corridors, garden areas, accessways, storage areas, and existing buildings.

The converted survey-strata dataset must represent:

| Level                            | Content                                                                         |
|----------------------------------|---------------------------------------------------------------------------------|
| Existing strata lots             | Converted to survey-strata lots with the same lot identity where required       |
| Former common property           | Allocated into lots or retained as common property                              |
| Common accessways                | Common property or vehicle/pedestrian access easements                          |
| Services                         | Utility service easements or statutory service rights                           |
| Party walls or shared structures | Party wall easements, support easements, or contextual occupation evidence      |
| Buildings                        | Contextual features only; not defining survey-strata boundaries                 |
| Height-limited areas             | 3D parcel limits using AHD or other stated vertical datum                       |
| Unit entitlement                 | Based on site value, with buildings not considered for survey-strata conversion |

Landgate states that a conversion to survey-strata allows boundaries to be realigned to include part or all of the common property into lots, but surveyors must not adjust boundaries between existing strata lots. 
The conversion is intended to divide common property between existing strata lot owners, not to subdivide existing strata lots [(Landgate, 2020b)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/). 

## Proposed 3D CSDM modelling pattern

| Real-world item                   | Suggested 3D CSDM representation                                                             |
|-----------------------------------|----------------------------------------------------------------------------------------------|
| Whole strata scheme parcel        | Parcel aggregate or scheme-level grouping                                                    |
| Survey-strata lot                 | 3D `CadastralParcel`, usually a primary cadastral parcel                                     |
| Common property lot               | Separate common-property parcel or parcel aggregate                                          |
| Accessway or driveway             | Common property, easement parcel, or interest-linked spatial object                          |
| Service corridor or utility area  | Easement, statutory interest, or secondary cadastral parcel                                  |
| Party wall / support relationship | Party wall easement, support easement, or occupation evidence depending on legal effect      |
| Height-limited lot                | 3D cadastral parcel with explicit upper and lower limits                                     |
| Unlimited-height lot              | 2D parcel with unlimited height/depth interpretation recorded in attributes or plan metadata |
| Building footprint                | Occupation or contextual feature only                                                        |
| Survey observations               | Vector observations, adopted observations, survey marks, computations                        |
| Scheme plan metadata              | CSD container metadata, survey purpose, survey type, CRS, vertical datum, provenance         |

<!--
The 3D CSDM supports this because a cadastral parcel may be a single or multi-area, or a solid, above or below the surface of the earth, and its extent can be described by a surface, a solid, and topological relationships with other parcels [(ICSM, 2023a)](https://icsm-au.github.io/3d-csdm/docs/). 
Where easements or other non-exclusive spatial rights overlap primary lots, the 3D CSDM `Secondary Cadastral Parcel` pattern is relevant because it represents the extent of a non-exclusive right and may overlap both primary parcels and other secondary parcels [(ICSM, 2023a)](https://icsm-au.github.io/3d-csdm/docs/).
-->

## Main flow

1. _Create the WA 3D CSDM dataset container_:
The dataset is created as a cadastral survey dataset containing parcels, survey points, observations, interests, supporting documents, and provenance.

2. _Identify the parent scheme parcel_:
The freehold parent parcel is recorded as the land being subdivided by the survey-strata scheme.

3. _Create the survey-strata lots_:
Each lot is encoded from surveyed boundaries, dimensions, survey marks, and survey observations.

4. _Represent common property explicitly_:
Common property is encoded as a separate parcel or parcel aggregate. It is not inferred from leftover building structure.

5. _Represent easements and spatial interests_:
Vehicle access, pedestrian access, utility services, support, light and air, party wall, and intrusion easements are represented as interests and, where spatially defined, as secondary parcels or equivalent spatial objects.

6. _Apply vertical limits only where legally required_:
If a lot or easement is vertically limited, the upper and lower extents are encoded explicitly, for example, using AHD values. 
If the lot is unlimited in height and depth, the dataset should not invent a 3D solid merely because a building exists on the land. 

7. _Keep buildings separate from cadastral boundaries_:
Buildings may be retained as occupation or contextual evidence, but they do not define the survey-strata lot boundary.

8. _Attach survey observations and provenance_:
Survey marks, vectors, dimensions, adopted observations, computations, source plans, and survey activities are recorded so the geometry can be validated and traced.

9. _Validate the dataset_:
Validation checks confirm parcel closure, lot identity preservation, common-property allocation, easement geometry, vertical limits, CRS, vertical datum, appellations, and WA profile values.

## Alternative flows and edge cases

| Case                                                              | Expected handling                                                                                                                                                                                                                                                                                                                                                      |
|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Survey-strata lot is unlimited in height and depth                | Represent as a surveyed land parcel with unlimited vertical extent recorded in the plan metadata or parcel attributes.                                                                                                                                                                                                                                                 |
| Survey-strata lot is height limited                               | Represent as a 3D parcel with explicit upper and lower limits, preferably referenced to AHD where required.                                                                                                                                                                                                                                                            |
| Common property is allocated into existing lots during conversion | Preserve the identity of the existing lots and record the newly allocated areas as part of those lots.                                                                                                                                                                                                                                                                 |
| Existing strata lot would need to be split                        | Do not treat this as a simple conversion; Landgate indicates conversion is not intended to subdivide existing strata lots [(Landgate, 2020)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/) |
| Building exists on a survey-strata lot                            | Record it only as contextual occupation/building evidence, not as the cadastral boundary.                                                                                                                                                                                                                                                                              |
| Party wall remains relevant after conversion                      | Represent the legal right as a party wall easement or support easement, not as a building-defined lot boundary.                                                                                                                                                                                                                                                        |
| Service infrastructure crosses lots                               | Represent using service easements, statutory interests or secondary cadastral parcels.                                                                                                                                                                                                                                                                                 |
| Common access is required                                         | Represent as common property or a vehicle/pedestrian access easement.                                                                                                                                                                                                                                                                                                  |

## Acceptance outcomes

1. _Each survey-strata lot is represented as a cadastral parcel_:
Each lot has a legal appellation, parcel type, parcel purpose, geometry, and relationship to the parent scheme parcel.

2. _Boundaries are survey-defined_:
Lot boundaries are derived from survey marks, dimensions, observations and plan geometry, not from building surfaces.

3. _Common property is explicit_:
Common property is represented as a separate identifiable parcel or parcel aggregate.

4. _Buildings are not used as boundary-defining features_:
Building footprints, walls, roofs, and other structures may be recorded as occupation evidence, but they do not define survey-strata boundaries.

5. _Vertical limits are only used where legally required_:
Height or depth restrictions are explicitly encoded where the plan limits a lot or easement vertically.

6. _Easements and spatial rights are represented_:
Access, services, support, light and air, party wall and intrusion rights are represented as interests and, where required, spatially defined secondary parcels.

7. _Conversion rules are respected_:
Where the use case involves conversion from built strata, existing strata lot identities are preserved and existing strata lot boundaries are not adjusted.

8. _Survey evidence and provenance are traceable_:
Measurements, computations, source plans, survey activities, and supporting documents are available for validation and audit.

9. _The dataset supports WA profile validation_:
The dataset uses WA profile values for CRS, survey type, survey purpose, vertical datum, parcel classification, and other jurisdiction-specific metadata.