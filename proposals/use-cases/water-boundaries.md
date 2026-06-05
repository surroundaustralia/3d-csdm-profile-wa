# Use case: Represent WA natural and general water boundaries as 3D CSDM datasets

## Revision history

| Version | Date       | Author        | Summary of change                                                                                                                                                                                                                                                                                                                         |
|---------|------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.1     | 2026-06-03 | Andrew Hunter | Initial draft prepared for review. Added a WA-focused use case for natural and general boundaries, including high water mark, ordinary high water line, tidal and non-tidal water boundaries, watercourse boundaries, ambulatory boundary change, AHD-related survey evidence, annotations, and title amendment / lifecycle implications. |

## Description

A WA cadastral survey dataset may need to represent a parcel boundary defined by a natural or general boundary rather than by a straight surveyed line, fixed curve, wall, building surface, or derived 3D solid.

Examples include:

- a boundary defined by the **High Water Mark (HWM)** of tidal waters;
- a boundary defined by the **ordinary high water line or mark** of non-tidal rivers, lakes, swamps, or watercourses;
- a boundary along a tidal river or estuary where tidal and non-tidal influences must be interpreted;
- a boundary along a watercourse where the parcel extends to the centre thread of the watercourse;
- a boundary where accretion or erosion may have gradually and imperceptibly changed the legal boundary position;
- a boundary where an avulsive or non-gradual change means the legal boundary may remain in its former position;
- a boundary determined from terrestrial evidence, tidal observations, levelling, aerial photography, historical surveys, or other evidence;
- a boundary requiring an annotation such as `HWM`, `High Water Mark (at ... m above AHD)`, `boundary is low water mark`, `not a riparian boundary`, or `HWM drawn from aerial photography`.

This use case tests whether the 3D CSDM and WA profile can represent a natural or general boundary in a way that preserves:

- the legal boundary definition;
- the observed or adopted physical water-boundary evidence;
- the survey method and source evidence used to determine the boundary;
- the relationship to AHD or another recoverable datum where applicable;
- the distinction between tidal and non-tidal boundary definitions;
- the distinction between surveyed, adopted, inferred, approximate, and annotated boundaries;
- the distinction between fixed cadastral geometry and ambulatory natural boundary behaviour;
- the relationship between the boundary and the affected parcel, water body, Crown land, adjoining parcels, or centreline of a watercourse; and
- the lifecycle implications where the title or cadastral representation is amended because of gradual and imperceptible boundary movement.

## Relationship to existing use cases

This use case should be a companion use case, not a replacement for the existing set. 
It focuses on natural and general water-boundary definition, evidence, annotation, uncertainty, and lifecycle behaviour. 
Other use cases may involve height, terrain, 3D parcels, strata, mining tenure, or infrastructure contexts that interact with water boundaries, but they should not replace the specific water-boundary evidence and legal-boundary pattern tested here.

| Related use case                                                                                 | Relationship to this use case                                                                                                                                                                                                                                                                                                                                                                              |
|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Represent a WA 2D parcel with height descriptions and derived 3D extent                          | Provides general treatment of geometry `z` values, height descriptions, AHD references, relative height references, derived surfaces, representation status, vertical extent status, and legal-versus-derived status. This use case may use height or AHD evidence for water-boundary determination, but focuses on natural boundary definition and evidence rather than vertical parcel extent.           |
| Create a WA 3D CSDM extruded cadastral parcel from a 2D footprint and resolved height definition | Covers closed 3D solids generated from footprints and height rules. Natural water boundaries are not normally closed solids and should not be treated as extrusions. Where a parcel with a water boundary also has vertical limits, the extrusion pattern may be relevant only after the water-boundary geometry and legal basis have been separately established.                                         |
| Create a WA 3D CSDM Terrain Intersection Curve                                                   | Deals with a derived curve where a 3D parcel intersects terrain. A water boundary such as HWM or ordinary high water line may be a legal parcel boundary in its own right, not just a derived terrain-intersection curve. Terrain or surface information may support evidence, but it should not replace the adopted legal water boundary unless the source supports that interpretation.                  |
| Encode a WA multi-unit and/or multi-level built-strata scheme as a 3D CSDM dataset               | Covers building-referenced strata boundaries, private lot solids, building evidence, common-property or void treatment, and strata-specific descriptions. Natural water boundaries are not building-referenced boundaries, although a built-strata scheme may still need to reference a water boundary where the parent parcel, scheme parcel, or adjoining boundary is water-related.                     |
| Represent WA strata wall-boundary definitions between adjoining built-strata lots                | Covers wall, floor, ceiling, centre-plane, joined-building, inner-surface, and encroachment boundary definitions. Natural water boundaries are evidence-based natural or general boundaries rather than built-surface boundaries, although both use cases require a clear distinction between physical evidence and the adopted legal cadastral boundary.                                                  |
| Encode a WA multi-unit, multi-level survey-strata scheme as a 3D CSDM dataset                    | Covers survey-defined strata lots, common property, easements, scheme information, unit entitlement, optional vertical limits, and relevant structures captured as context. A survey-strata scheme may include or abut water boundaries, but the detailed treatment of HWM, ordinary high water line, tidal/non-tidal interpretation, watercourse boundaries, and ambulatory change should be tested here. |
| Encode WA tunnels, subsurface infrastructure, and airspace parcels as 3D CSDM datasets           | Covers plan-defined 3D parcels and interests such as tunnels, subsurface infrastructure, airspace parcels, and 3D easements. Natural water boundaries may interact with those parcels where an infrastructure corridor passes under, over, beside, or through a water-related boundary, but this use case remains focused on boundary-definition and evidence rather than volumetric parcel-definition.    |
| Encode a WA mining tenement survey dataset as a 3D CSDM mining profile                           | Covers mining tenements as `SecondaryCadastralParcel` features, mining-specific vocabularies, marking-out evidence, lifecycle status, GDA2020 lodgement, and mine-plan context. This use case is relevant where mining tenements interact with land covered by water, watercourse boundaries, HWM, ordinary high water line, water-related exclusions, or affected parcels with natural boundaries.        |

## Use case statement

**As a cadastral surveyor or cadastral data editor, I want to encode a WA natural or general water boundary, such as High Water Mark or ordinary high water line, in a 3D CSDM dataset, so that the legal boundary definition, survey evidence, AHD relationship, water body context, boundary annotations, uncertainty, ambulatory behaviour, and lifecycle history can be represented, validated, reviewed, displayed, and exchanged without confusing the observed physical water feature with the legal cadastral boundary.**

## Purpose

The purpose of this use case is to test whether a WA 3D CSDM dataset can represent a cadastral parcel boundary whose position is defined by a natural water boundary and by survey evidence, legal interpretation, and plan annotation.

The use case should test that the dataset can:

| Dataset concern                         | Why it matters                                                                                                                                                                                                                                  |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Natural boundary legal definition       | A water boundary may be defined by HWM, ordinary high water line, low water mark, centre thread, or another legal description. The dataset must preserve the legal boundary basis.                                                              |
| Tidal versus non-tidal boundary type    | Tidal HWM and non-tidal ordinary high water line are determined differently and may rely on different evidence.                                                                                                                                 |
| Water body context                      | The dataset must identify whether the boundary relates to ocean coast, tidal river, estuary, river, lake, swamp, watercourse, or other water body.                                                                                              |
| AHD relationship                        | Tidal HWM surveys may use levelling to an adopted HWM contour related to a recoverable datum, preferably AHD.                                                                                                                                   |
| Ground evidence                         | Non-tidal ordinary high water line may rely on vegetation, soil, erosion, shelving, litter, geological evidence, or top of bank interpretation.                                                                                                 |
| Survey method                           | The dataset should record whether the boundary was determined by levelling, traverse offsets, radiations, GNSS, terrestrial observations, tide observations, aerial photography, adopted values, historical survey evidence, or another method. |
| Boundary annotation                     | Plan annotations such as `HWM`, `High Water Mark (at ... m above AHD)`, `boundary is low water mark`, `not a riparian boundary`, or `HWM drawn from 2022 aerial photography` may carry essential interpretation.                                |
| Legal boundary versus physical evidence | The observed shoreline, debris line, vegetation line, top of bank, tide contour, aerial image line, or water edge is evidence. It is not automatically the legal cadastral boundary unless adopted under the applicable legal and survey rules. |
| Ambulatory boundary status              | The dataset must distinguish a boundary capable of moving through accretion or erosion from a fixed boundary, an adopted boundary, or a boundary held at a previous position after a non-gradual change.                                        |
| Accretion and erosion                   | Gradual and imperceptible change may support title amendment and boundary update.                                                                                                                                                               |
| Avulsion or sudden change               | Sudden or non-gradual change may require the boundary to be held in its previous position rather than moved with the water feature.                                                                                                             |
| Title amendment / lifecycle history     | Where a water boundary changes substantially and title amendment is required, the dataset must preserve the original boundary, new surveyed boundary, application basis, affected parcels, and lifecycle event.                                 |
| Affected adjoining parcels              | Changes in water boundaries may affect adjoining parcels, including parcels across a watercourse.                                                                                                                                               |
| Centre thread of watercourse            | Where a parcel extends to the centre thread of an inland watercourse, both banks and the centreline may need to be represented.                                                                                                                 |
| Uncertainty and evidence quality        | Natural boundary determination may involve uncertainty. The dataset must support method, evidence, date, reliability, and review information.                                                                                                   |
| WA profile conformance                  | The dataset should use WA profile values for CRS, vertical datum, survey type, survey purpose, parcel type, parcel purpose, provenance, annotations, and jurisdiction-specific metadata where applicable.                                       |

## Explicit WA source requirements tested by this use case

This use case tests the following explicit WA water-boundary requirements and translates them into 3D CSDM exchange requirements.

| WA source requirement                                                                                                                                                                                            | 3D CSDM use case requirement                                                                                                                      |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Surveys of land bounded by water can involve complex legal situations and must adhere to legal principles and accuracy requirements.                                                                             | Record the legal boundary basis, source evidence, survey method, accuracy/quality information, and provenance.                                    |
| For tidal waters, HWM is the ordinary high water at spring tides and is generally accepted as equivalent to Mean High Water Springs.                                                                             | Record `boundaryBasis = HWM`, `waterBoundaryType = tidal`, adopted tidal datum / HWM height, source, and method.                                  |
| Tidal HWM surveys should use levelling techniques to set out an adopted HWM contour and relate the survey to a recoverable datum, preferably AHD.                                                                | Record AHD relationship, adopted HWM reduced level, levelling evidence, datum source, field records, and provenance.                              |
| In tidal rivers or estuaries, tidal range and lag may differ from open sea and non-tidal effects may affect reliability.                                                                                         | Record water body context, tidal/non-tidal interpretation, observation period, reliability, and review notes.                                     |
| For non-tidal waters, ordinary high water line is an observable physical mark evidenced by vegetation, soil, surface markings, erosion, shelving, litter, and geological characteristics.                        | Record physical evidence features and the adopted boundary interpretation separately from the final legal boundary geometry.                      |
| For non-tidal waters, top of bank is often adopted as the ordinary high water line, but historical high-bank interpretations may be erroneous.                                                                   | Record the adopted bank feature, evidence type, source, uncertainty, and whether review by Landgate / Inspector of Plans and Surveys is required. |
| Where a parcel extends to the centre thread of an inland watercourse, both banks and the centreline of the watercourse should be defined.                                                                        | Support both-bank geometry, watercourse centreline, affected parcels, and relationships to the subject parcel.                                    |
| HWM surveys may use offsets, insets, or radiations from traverse stations.                                                                                                                                       | Record survey observations, traverse lines, offsets, radiations, adopted points, and computations as survey evidence.                             |
| The doctrine of accretion and erosion applies where boundary change is gradual and imperceptible.                                                                                                                | Record ambulatory-boundary status, change process, date/evidence, and lifecycle event for boundary update.                                        |
| Where change is not gradual and imperceptible, the bank must be defined in the same position as immediately before the change.                                                                                   | Support fixed previous-boundary position and record evidence for non-gradual change or avulsion.                                                  |
| Where large differences from original are encountered and the change occurred gradually and imperceptibly, a title may be amended under section 170 of the Transfer of Land Act 1893 based on a new survey plan. | Record title-amendment lifecycle event, source plan, affected parcels, original boundary, new boundary, and application basis.                    |
| Water features that form part of a lot boundary should be shown by full black lines and suitably named where appropriate.                                                                                        | Encode the natural boundary as cadastral boundary geometry with name / water body context and boundary role.                                      |
| When HWM is the boundary, plan notation should refer to HWM as defined in the Land Administration Act 1997.                                                                                                      | Preserve statutory boundary wording as annotation or structured boundary-basis metadata.                                                          |
| Showing a water boundary as an abuttal requires annotation as to the nature of the boundary definition.                                                                                                          | Record abuttal relationship and boundary-definition annotation such as HWM, low water mark, or not riparian.                                      |
| If boundaries are determined from aerial photography, annotation should identify that source.                                                                                                                    | Record source imagery, date, method, uncertainty, and annotation text.                                                                            |
| If inconsistencies in boundary definition are found, they should be resolved with the Inspector of Plans and Surveys before lodgement.                                                                           | Support manual-review status, issue notes, decision provenance, and validation warnings.                                                          |
| When tidal boundaries are located by setting out a contour at a height above AHD, the plan should annotate `High Water Mark (at ... m above AHD)`.                                                               | Record the adopted AHD height as structured vertical reference metadata and preserve the plan annotation text.                                    |
| Digital data is an electronic record of a survey and is part of the plan for certification purposes.                                                                                                             | Treat the 3D CSDM dataset, survey observations, annotations, and boundary definitions as part of the submitted survey evidence package.           |
| Three dimensional polygons in current CSD files do not currently require a vertical component.                                                                                                                   | Distinguish legacy 2D CSD capture requirements from richer 3D CSDM evidence, height, surface, and provenance capabilities.                        |

## Primary actor

Licensed cadastral surveyor or cadastral data editor.

## Supporting actors

Landgate validator, Survey Inspection Team, Inspector of Plans and Surveys, title administrator, Crown land administrator, local government, water authority, environmental authority, adjoining landowners, cadastral database maintainer, 3D viewer user, downstream spatial data user.

## Scenario

A WA cadastral survey involves a lot bounded by a river, estuary, ocean coast, lake, swamp, or watercourse.

The source title, plan, statute, survey instruction, or plan notation indicates that part of the parcel boundary is defined by a natural water boundary, such as:

| Scenario element                   | Example                                                                                                                      |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Tidal HWM                          | A coastal lot boundary is defined by High Water Mark.                                                                        |
| Tidal river or estuary             | A lot abuts a tidal river where tidal and freshwater influences must be considered.                                          |
| Non-tidal ordinary high water line | A rural parcel abuts a non-tidal river or lake and the ordinary high water line is determined from ground evidence.          |
| Centre thread of watercourse       | A parcel extends to the centre thread of an inland watercourse.                                                              |
| Aerial photography source          | The water boundary is adopted from aerial photography and must be annotated accordingly.                                     |
| Gradual boundary movement          | The surveyed HWM differs significantly from the original boundary because of gradual and imperceptible accretion or erosion. |
| Non-gradual change                 | The watercourse or bank changed suddenly, requiring the legal boundary to remain at its previous position.                   |

The surveyor determines or adopts the water boundary using appropriate legal interpretation, survey evidence, observation method, field records, AHD or datum information, and plan annotations.

The resulting 3D CSDM dataset must encode:

1. the legal parcel and affected boundary;
2. the boundary basis, such as HWM, ordinary high-water line, low watermark, centre thread, or not riparian;
3. the water body context;
4. the observed evidence and adopted boundary geometry;
5. the survey method and provenance;
6. any AHD height or recoverable datum used;
7. the plan annotation or legal wording;
8. whether the boundary is fixed, ambulatory, adopted, approximate, or under review;
9. any relationship to accretion, erosion, avulsion, or title amendment; and
10. affected adjoining parcels and water body abuttals.

## Modelling principles

### 1. Preserve the legal boundary basis

The dataset must record what kind of natural or general boundary is being represented.

Examples include:

- `highWaterMark`;
- `ordinaryHighWaterLine`;
- `meanHighWaterSprings`;
- `lowWaterMark`;
- `centreThreadOfWatercourse`;
- `topOfBank`;
- `watercourseBank`;
- `notRiparianBoundary`;
- `adoptedWaterBoundary`;
- `fixedHistoricalWaterBoundary`.

The controlled values are illustrative only and should be confirmed as part of the WA profile or implementation rules.

### 2. Separate observed evidence from adopted legal boundary

Observed shoreline evidence, vegetation changes, soil changes, erosion marks, shelving, litter lines, debris, geological characteristics, tide observations, AHD contour points, and aerial imagery lines should be encoded as evidence.

The cadastral boundary should be encoded as the adopted legal boundary geometry and linked to the evidence, method, source, and decision that produced it.

### 3. Record the vertical / datum relationship where it matters

A water boundary is not automatically a 3D parcel or a vertical limit. However, the survey method may rely on height, contour, tide level, or AHD information.

Where the boundary is determined by setting out a contour, the dataset should record:

- vertical datum;
- adopted HWM height above AHD;
- source of the HWM height;
- levelling or observation method;
- field record reference;
- date of observation or adoption;
- quality and uncertainty; and
- plan annotation text.

### 4. Treat natural boundaries as dynamic where legally appropriate

The dataset should support a boundary status that distinguishes:

- fixed boundary;
- ambulatory natural boundary;
- adopted current boundary;
- fixed previous boundary after non-gradual change;
- boundary under review;
- title amendment pending;
- title amendment completed.

This avoids treating every water boundary as either permanently fixed or automatically moving with the current water feature.

### 5. Preserve plan annotations as cadastral meaning

Text such as `HWM`, `High Water Mark (at ... m above AHD)`, `HWM drawn from 2022 aerial photography`, `Boundary is low water mark`, or `not a riparian boundary` should not be treated as mere display text.

The annotation should be preserved as structured boundary-definition evidence or linked annotation so that validation and review can understand the basis of the boundary.

### 6. Distinguish water feature geometry from parcel boundary geometry

The water body, water edge, bank, and adopted cadastral boundary may be related but are not always the same geometry.

The dataset should be able to represent:

- the cadastral parcel boundary;
- the observed physical water feature;
- the adopted HWM / ordinary high water line;
- the bank line;
- the watercourse centreline; and
- the water body polygon or contextual feature.

### 7. Support lifecycle and title amendment history

Where a water boundary has changed and a new survey plan supports a title amendment, the dataset should record:

- original boundary geometry;
- newly surveyed or adopted boundary geometry;
- evidence of gradual and imperceptible change;
- affected parcels;
- title amendment application basis;
- approving authority or review decision;
- effective date or lifecycle event; and
- provenance of the cadastral update.

## Preconditions

1. A WA 3D CSDM dataset container exists or can be created.
2. The parcel has a legal appellation, parcel type, parcel purpose, CRS, and survey provenance.
3. The source plan, title, survey instruction, Crown record, legal instrument, or plan notation identifies a water boundary or water body abuttal.
4. The boundary type is known or can be classified as tidal HWM, non-tidal ordinary high-water line, low watermark, centre thread, not riparian, adopted water boundary, or another controlled value.
5. The water body context is known or can be recorded.
6. The survey method and source evidence are available or can be recorded as not supplied / unresolved / adopted.
7. Where a height or contour is used, the vertical datum, AHD value, observation method, source, and provenance are recorded.
8. Where aerial photography, imagery, historical survey, or adopted values are used, source metadata, date, and uncertainty are recorded.
9. The dataset can distinguish legal boundary geometry from observed physical evidence and contextual waterboard geometry.

## Proposed 3D CSDM modelling pattern

| Real-world or legal item               | Suggested 3D CSDM / WA profile representation                                                                                                                  |
|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Subject parcel                         | `CadastralParcel`, usually `PrimaryCadastralParcel` unless the legal object is an easement, restriction, or secondary interest.                                |
| Parcel legal identity                  | `Appellation`, lot identifier, plan identifier, title reference, or other legal identifier.                                                                    |
| Water boundary segment                 | Boundary edge, boundary curve, boundary feature, or geometry component of the cadastral parcel boundary.                                                       |
| Boundary basis                         | Structured boundary-basis attribute or annotation, such as `highWaterMark`, `ordinaryHighWaterLine`, `lowWaterMark`, `centreThread`, or `notRiparianBoundary`. |
| Water body                             | Contextual feature, related natural feature, water body polygon, watercourse centreline, or supporting feature.                                                |
| Adopted HWM / ordinary high water line | Cadastral boundary geometry or adopted boundary curve linked to evidence and provenance.                                                                       |
| Observed physical evidence             | Survey observations, evidence points, bank lines, vegetation marks, erosion marks, debris lines, aerial imagery linework, or supporting observations.          |
| AHD contour evidence                   | Survey points, observations, vertical datum metadata, adopted HWM height, and plan annotation.                                                                 |
| Traverse, offsets, radiations          | Survey observations and computations linked to the adopted boundary.                                                                                           |
| Plan annotation                        | Structured annotation or supporting text linked to the affected boundary segment.                                                                              |
| Ambulatory status                      | Boundary status, lifecycle state, or implementation attribute indicating fixed, ambulatory, adopted, previous, under review, or amended.                       |
| Accretion / erosion evidence           | Provenance activity, change event, evidence bundle, or lifecycle history.                                                                                      |
| Avulsion / sudden change evidence      | Evidence bundle and legal interpretation supporting fixed former boundary position.                                                                            |
| Title amendment event                  | Lifecycle event linked to new survey plan, original boundary, amended boundary, affected parcels, and application basis.                                       |
| Affected adjoining parcels             | Topological or cadastral relationship to adjoining lots, Crown land, water body, parcel across watercourse, or centre thread.                                  |
| WA metadata                            | Horizontal CRS, vertical datum where used, survey type, survey purpose, parcel type, parcel purpose, source plan, field record, and provenance.                |

## Main flow

1. _Create the WA 3D CSDM dataset container_  
   The dataset is created as a cadastral survey dataset containing parcels, boundary geometry, survey observations, water body context, supporting documents, annotations, and provenance.

2. _Identify the subject parcel and source material_  
   The surveyor or editor records the parcel, source title, plan, field record, Crown record, deposited plan, survey instruction, legal instrument, or other source that identifies the water boundary.

3. _Identify the water boundary segment_  
   The boundary segment affected by the water body is identified separately from fixed surveyed boundaries.

4. _Classify the boundary basis_  
   The dataset records whether the boundary is HWM, ordinary high-water line, low watermark, centre thread of watercourse, not riparian, adopted water boundary, fixed historical water boundary, or another controlled type.

5. _Identify the water body context_  
   The dataset records whether the boundary relates to ocean coast, tidal river, estuary, non-tidal river, lake, swamp, watercourse, bay, harbour, or other water body.

6. _Record source wording and annotation_  
   The dataset preserves the plan note, legal wording, or boundary annotation associated with the water boundary.

7. _Record survey method and evidence_  
   The dataset records the observations and method used to determine the boundary, such as levelling, AHD contour, tide observations, ground evidence, traverse offsets, radiations, GNSS, aerial photography, historical survey evidence, or adopted values.

8. _Record AHD or vertical datum information where relevant_  
   If the boundary is set out using a contour or adopted HWM height, the dataset records the adopted height above AHD, vertical datum, source, observation method, date, field record reference, and uncertainty.

9. _Record observed physical features_  
   The dataset records observed water edge, bank, vegetation, soil, erosion, shelving, litter, geological characteristics, debris, or imagery-derived features as evidence, not automatically as legal boundary geometry.

10. _Create or adopt the legal boundary geometry_  
    The surveyor or editor creates or adopts the cadastral boundary geometry from the evidence and records the basis of adoption.

11. _Link the legal boundary to evidence and provenance_  
    The adopted boundary is linked to the observations, source data, plan annotations, computations, review decisions, date, and responsible party.

12. _Record water body and abuttal relationships_  
    The dataset records the water body abuttal, adjoining parcels, Crown land, reserve, watercourse centreline, and any parcel across the watercourse where relevant.

13. _Record ambulatory or fixed-boundary status_  
    The dataset records whether the boundary is ambulatory, fixed, adopted, under review, or held at a previous position because the change was not gradual and imperceptible.

14. _Record lifecycle history where changed_  
    Where the boundary differs from the original and title amendment is required or has occurred, the dataset records the original boundary, new boundary, evidence of gradual and imperceptible change, affected parcels, application basis, and lifecycle event.

15. _Validate the dataset_  
    Validation checks confirm that the water boundary basis, annotations, evidence, survey method, AHD relationship, parcel geometry, water body context, abuttals, lifecycle history, and WA profile values are complete and consistent.

16. _Prepare exchange, review, and display outputs_  
    The dataset supports 3D CSDM exchange, Landgate review, cadastral database integration, plan interpretation, 3D visualisation, and downstream use. Display styling remains the responsibility of the viewer.

## Alternative flows and edge cases

| Case                                                                   | Expected handling                                                                                                                                    |
|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| Boundary is tidal HWM                                                  | Record HWM basis, tidal context, adopted HWM height where used, AHD relationship, source, method, annotation, and provenance.                        |
| Boundary is non-tidal ordinary high water line                         | Record ordinary high water line basis, ground evidence, adopted bank feature, top-of-bank interpretation if used, uncertainty, and provenance.       |
| Boundary is in a tidal river or estuary                                | Record tidal/non-tidal interpretation, observation period or adopted values, possible freshwater influence, reliability, and review notes.           |
| Boundary is derived from aerial photography                            | Record imagery source, capture date, extraction method, annotation such as `HWM drawn from 2022 aerial photography`, uncertainty, and review status. |
| Boundary is low water mark                                             | Record the low-water basis and plan annotation. Do not treat it as HWM.                                                                              |
| Boundary is not riparian                                               | Preserve annotation that it is not a riparian boundary and record the fixed or adopted boundary source.                                              |
| Parcel extends to centre thread of watercourse                         | Define both banks and the centreline of the watercourse where required, and record parcel relationships across the watercourse where relevant.       |
| Large difference from original due to gradual and imperceptible change | Record accretion/erosion evidence, new survey plan, affected parcels, title amendment status, and lifecycle event.                                   |
| Sudden or non-gradual change occurred                                  | Record evidence for non-gradual change and retain or reference the former boundary position where required.                                          |
| HWM height above AHD is adopted                                        | Record `High Water Mark (at ... m above AHD)` as both structured data and preserved annotation text.                                                 |
| Boundary evidence is ambiguous                                         | Flag for manual review / Inspector of Plans and Surveys resolution before lodgement.                                                                 |
| Water boundary crosses a 3D parcel or height-limited parcel            | Link to the height-description or 3D parcel use case as needed, but keep the water-boundary evidence and legal boundary basis explicit.              |
| Water body geometry and cadastral boundary differ                      | Encode the water body as contextual geometry and the cadastral boundary as legal boundary geometry. Link them through evidence/provenance.           |
| Boundary is only approximate or adopted                                | Classify as adopted, approximate, or derived, and record source and uncertainty.                                                                     |

## Validation requirements

The dataset should support validation of:

1. _Boundary basis_  
   The water boundary records a controlled or reviewable value such as HWM, ordinary high-water line, low watermark, centre thread, not riparian, adopted water boundary, or fixed historical boundary.

2. _Waterboard context_  
   The boundary is linked to the relevant coast, river, estuary, lake, swamp, watercourse, bay, harbour, or other water body.

3. _Legal wording and annotation_  
   Plan notes, statutory wording, HWM annotation, AHD-height annotation, aerial photography annotation, and riparian / non-riparian wording are preserved.

4. _Evidence separation_  
   Observed physical evidence is not confused with the adopted legal boundary.

5. _Survey method_  
   The dataset records the method used to determine the boundary and the observations or sources that support it.

6. _AHD / vertical datum consistency_  
   Where AHD or another vertical datum is used, values, units, datum source, and field record provenance are recorded.

7. _Tidal / non-tidal consistency_  
   The boundary determination method is consistent with the declared water body and boundary type.

8. _Geometry validity_  
   The adopted boundary curve is valid, connected to the parcel boundary topology, and does not create unexplained gaps or overlaps.

9. _Centreline / centre-thread cases_  
   Where a parcel extends to the centre thread, both banks and the centreline are represented or justified.

10. _Ambulatory status_  
    The dataset distinguishes fixed, ambulatory, adopted, under-review, previous-position, and amended boundary states.

11. _Accretion / erosion / avulsion handling_  
    Boundary change is classified and linked to evidence and lifecycle history.

12. _Affected parcels_  
    Adjoining and affected parcels, including parcels across a watercourse where relevant, are identified.

13. _Provenance_  
    Source plans, field records, observations, computations, imagery, adopted values, review decisions, survey activities, and responsible agents are traceable.

14. _WA profile conformance_  
    Controlled values, CRS, vertical datum where used, survey type, survey purpose, parcel type, parcel purpose, and provenance conform to the WA profile or agreed implementation rules.

## Acceptance outcomes

1. _The natural boundary is represented as a cadastral boundary_  
   The dataset represents the water boundary as a legal cadastral boundary segment or boundary component where applicable, not merely as a contextual water body feature.

2. _The legal boundary basis is explicit_  
   The dataset records whether the boundary is HWM, ordinary high water line, low water mark, centre thread, not riparian, or another controlled type.

3. _The source wording is preserved_  
   Plan notation and legal wording are preserved as structured metadata, annotation, or supporting text linked to the boundary.

4. _Observed evidence is retained separately_  
   Vegetation, soil, erosion, shelving, litter, geological evidence, tide observations, levelling, aerial imagery, traverse observations, offsets, and radiations are retained as evidence.

5. _AHD relationship is explicit where used_  
   HWM contours or adopted heights above AHD are recorded with datum, units, source, date, method, and field record provenance.

6. _Tidal and non-tidal boundaries are distinguished_  
   The dataset does not apply tidal HWM logic to a non-tidal ordinary high water line or vice versa without explicit review and explanation.

7. _Waterboard and parcel relationships are clear_  
   The water body, watercourse centreline, adjoining parcels, Crown land, reserve, and affected parcels are represented or referenced where relevant.

8. _Ambulatory behaviour is represented_  
   The dataset records whether the boundary is ambulatory, fixed, adopted, previous-position, under review, or amended.

9. _Lifecycle history is traceable_  
   Where a boundary changes and title amendment occurs or is required, the dataset records original and new boundary positions, affected parcels, source survey plan, application basis, and lifecycle event.

10. _The dataset supports validation and review_  
    The dataset can be validated using the 3D CSDM, the WA profile, and agreed WA implementation rules, while supporting manual review of ambiguous natural-boundary cases.

11. _The dataset avoids misleading 3D interpretation_  
    A water boundary may use 3D evidence, heights, contours, and surfaces, but the dataset does not automatically turn it into a 3D solid or terrain-intersection curve unless another use case supports that interpretation.

## Out of scope

This use case does not define the final WA profile schema for natural boundary type, water boundary basis, ambulatory boundary status, evidence type, or title amendment lifecycle events.

It does not decide whether water boundaries should be encoded as direct properties, boundary components, annotations, supporting documents, provenance activities, observations, or a combination of these.

It does not provide legal advice on whether a particular water boundary is ambulatory, fixed, amended, or affected by accretion, erosion, or avulsion.

It does not define hydrological, tidal, environmental, coastal-hazard, floodplain, or shoreline-change modelling.

It does not specify visual styling, symbology, line weights, colour, or drawing conventions. The dataset should encode semantic facts required for display; the visualisation client should handle portrayal.

## Open confirmation points

1. What controlled vocabulary should be used for WA water boundary basis values such as `highWaterMark`, `ordinaryHighWaterLine`, `lowWaterMark`, `centreThread`, `topOfBank`, `notRiparianBoundary`, and `fixedHistoricalWaterBoundary`?
2. Should `HWM`, `OHWM`, `ordinaryHighWaterLine`, and `meanHighWaterSprings` be separate values, aliases, or legal-definition subtypes?
3. How should the WA profile distinguish tidal HWM from non-tidal ordinary high-water line?
4. Should water body context be a controlled value, a referenced feature, a free-text descriptor, or all three?
5. How should AHD contour values for HWM be represented: as `z` values on survey points, as boundary metadata, as observations, as a height-description component, or as a provenance activity?
6. How should ambulatory boundary status be represented in the WA profile?
7. How should accretion, erosion, avulsion, and section 170 title amendment lifecycle events be recorded?
8. How should previous and amended water-boundary positions be retained in provenance and lifecycle history?

## Summary

This use case is recommended because WA natural and general water boundaries introduce a distinct cadastral pattern.

They are not simply 2D parcels with optional height descriptions. 
They are not simple extruded solids. 
They are not built-strata or wall-boundary cases. 
They are not terrain-intersection curves.

The central requirement is that the 3D CSDM and WA profile must be able to encode a legal natural boundary, its water body context, survey evidence, AHD or datum relationship where used, plan annotation, uncertainty, ambulatory or fixed status, accretion/erosion/avulsion interpretation, title amendment lifecycle history, and affected parcel relationships.

The key modelling principle is to distinguish:

**observed physical water evidence**  
from **adopted legal cadastral boundary geometry**  
from **contextual water body geometry**  
from **lifecycle history of boundary change**.

## References

- [ICSM (2023a) ICSM Implementation Profiles for 3D CSDM](https://icsm-au.github.io/3d-csdm-profiles/)
- [ICSM (2023b) WA Implementation Profile for 3D CSDM](https://icsm-au.github.io/3d-csdm-profile-wa/)
- [ICSM (2023c) 3D CSDM Common Model / JSON Encoding repository](https://github.com/icsm-au/3d-csdm-common)
- [Landgate (2023) SPP-09 General Drafting Practices, Water Features](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/plan-preparation/spp-09-general-drafting-practices/)
- [Landgate (2022) SPP-03 Survey Guidelines](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/survey-practice-guidelines/spp-03-survey-guidelines/)
- [Landgate (2020) SPP-05 Surveys of Water Boundaries](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/survey-practice-guidelines/spp-05-surveys-of-water-boundaries/)
- [Landgate (2018) SPP-16 Digital Data Requirements](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/plan-preparation/spp-16-digital-data-requirements/)
