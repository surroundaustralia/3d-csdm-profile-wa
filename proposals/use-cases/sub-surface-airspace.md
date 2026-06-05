# Use case: Encode WA tunnels, subsurface infrastructure, and airspace parcels as 3D CSDM datasets

## Revision history

| Version | Date       | Author        | Summary of change                                                                                                                                                                                                                                                                                                                                                                                          |
|---------|------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.1     | 2026-05-27 | Andrew Hunter | Initial draft prepared for review. WA-focused use case for 3D cadastral parcels representing tunnels, subsurface infrastructure, and airspace volumes. The draft aligns with the 3D CSDM implementation profile approach, the WA profile, SPP-12 Three Dimensional Plans, and companion use cases for height descriptions, extruded parcels, terrain-intersection curves, built strata, and survey-strata. |

## Description

A WA cadastral survey dataset may need to represent a 3D cadastral parcel whose legal object is not a conventional surface parcel, not a building-based strata lot, nor a derived extrusion from a 2D footprint.

Examples include:

- a tunnel parcel below existing road, rail, Crown, freehold, or reserve land;
- a subsurface infrastructure parcel for a service corridor, utility chamber, drainage structure, or underground facility;
- an airspace parcel above an existing parcel, road, building, reserve, or public place;
- a height-limited or depth-limited deposited plan lot;
- a three-dimensional easement or other spatial interest associated with a tunnel, underground asset, bridge, elevated walkway, airspace development, or service infrastructure.

This use case tests whether the 3D CSDM and WA profile can encode a plan-defined 3D cadastral parcel as a legal cadastral object with explicit upper, lower, horizontal, and vertical boundary surfaces.

The use case is different from a simple extrusion use case. 
The parcel may not be produced by vertically extruding a single 2D footprint. 
It may have stepped planes, sloping planes, multiple representative horizontal extents, different abuttals above and below, non-contiguous parts, break-lines, relationships to structures, and plan-defined views such as plan views, elevations, sections, or isometric views.

The dataset must preserve the relationship between:

- the legal 3D parcel or interest;
- its parent or affected surface parcel or parcels;
- the deposited plan, scheme plan, or statutory instrument that defines it;
- the upper, lower, vertical, sloping, or stepped boundary surfaces;
- any AHD reduced levels, natural surface references, structure references, or other height descriptions;
- the horizontal footprint or representative outline used for CSD entry or index display;
- abuttals above, below, and horizontally adjoining the 3D parcel;
- survey evidence, marks, occupation evidence, structure connections, field book records, computations, and provenance; and
- whether the encoded geometry is authoritative, derived from the plan, analytical, approximate, or visualisation-only.

## Relationship to existing use cases

This use case should be a companion use case, not a replacement for the existing set. 
It sits in the middle of the use-case set: it reuses the general height, extrusion, terrain, evidence, and parcel-classification patterns where they apply, but focuses on plan-defined 3D parcels and interests whose legal extent is the tunnel, subsurface volume, airspace volume, or related 3D interest itself.

| Related use case                                                                                 | Relationship to this use case                                                                                                                                                                                                                                                                                                                                                                                                                   |
|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Represent a WA 2D parcel with height descriptions and derived 3D extent                          | Provides the general treatment of height descriptions, `zMin`, `zMax`, relative heights, absolute AHD heights, undefined extent, unconstrained extent, representation status, vertical extent status, and legal-versus-derived geometry. This use case applies those concepts to legal 3D parcels and interests where the three-dimensional extent is central rather than optional or derived from an ordinary 2D parcel.                       |
| Create a WA 3D CSDM extruded cadastral parcel from a 2D footprint and resolved height definition | Covers the simpler case where a closed 3D solid is generated from a 2D footprint and computable height definition. This use case covers plan-defined 3D parcels that may have stepped, sloping, multi-part, non-contiguous, structure-referenced, or otherwise non-extruded boundary geometry.                                                                                                                                                  |
| Create a WA 3D CSDM Terrain Intersection Curve                                                   | Supports cases where a tunnel, subsurface parcel, or airspace parcel intersects terrain. The terrain-intersection curve may be a useful derived relationship, but it is not the full legal parcel definition and should not replace the legal boundary surfaces, abuttals, or source plan definition.                                                                                                                                           |
| Encode a WA multi-unit and/or multi-level built-strata scheme as a 3D CSDM dataset               | Covers building-referenced strata lots, building evidence, private lot solids, common-property or void treatment, and strata-specific descriptions. This use case may reference structures, but should not assume a building-referenced boundary unless the deposited plan, scheme plan, or legal source says so.                                                                                                                               |
| Represent WA strata wall-boundary definitions between adjoining built-strata lots                | Covers wall, floor, ceiling, centre-plane, joined-building, inner-surface, and encroachment boundary definitions between built-strata lots. This use case may need similar structure-versus-legal-boundary separation, but focuses on 3D parcels and interests such as tunnels, subsurface infrastructure, airspace parcels, and 3D easements.                                                                                                  |
| Encode a WA multi-unit, multi-level survey-strata scheme as a 3D CSDM dataset                    | Covers survey-defined strata lots, common property, easements, scheme information, unit entitlement, optional vertical limits, and relevant structures captured as context rather than boundary-defining geometry. This use case covers dedicated 3D parcels or interests where the three-dimensional definition is the primary purpose of the plan.                                                                                            |
| Encode a WA mining tenement survey dataset as a 3D CSDM mining profile                           | Covers mining tenements as `SecondaryCadastralParcel` features, mining-specific vocabularies, marking-out evidence, lifecycle status, GDA2020 lodgement, and mine-plan context. This use case is relevant where mining-related shafts, declines, tunnels, voids, exclusion zones, or subsurface infrastructure need to be distinguished from the legal mining tenement and from operational mine geometry.                                      |
| Represent WA natural and general water boundaries as 3D CSDM datasets                            | Covers natural and general water boundaries such as HWM, ordinary high water line, watercourse boundaries, AHD-related survey evidence, annotations, ambulatory behaviour, and title-amendment lifecycle history. This use case may interact with water boundaries where a 3D parcel passes under, over, beside, or through a water-related parcel or boundary, but it does not replace the water-boundary evidence and legal-boundary pattern. |
## Use case statement

**As a cadastral data editor, I want to encode a WA tunnel, subsurface infrastructure parcel, airspace parcel, or related 3D interest as a 3D CSDM dataset, so that the legal 3D extent, boundary surfaces, AHD levels, abuttals, parent parcel relationships, survey evidence, structure relationships, and provenance can be represented, validated, displayed, and exchanged without reducing the parcel to a misleading 2D footprint or simple extrusion.**

## Purpose

The purpose of this use case is to test whether a WA 3D CSDM dataset can represent a plan-defined 3D cadastral parcel whose legal extent is defined by surfaces, levels, planes, sections, elevations, abuttals, or structure relationships.

The use case should test that the dataset can:

| Dataset concern                        | Why it matters                                                                                                                                                                                                    |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Legal 3D parcel identity               | A tunnel, subsurface infrastructure parcel, airspace parcel, or 3D easement may be a legal cadastral object or legal interest, not merely display geometry.                                                       |
| Parent or affected parcel relationship | The 3D parcel must be linked to the surface parcel, road, reserve, Crown parcel, strata parcel, scheme parcel, or other tenure affected by or containing the 3D parcel.                                           |
| Non-simple 3D geometry                 | The parcel may contain stepped, sloping, or multiple boundary planes and may not be representable as a simple vertical extrusion.                                                                                 |
| Boundary surfaces                      | Upper, lower, side, sloping, stepped, and vertical boundary surfaces must be represented explicitly enough to define the closed 3D extent.                                                                        |
| AHD and vertical datum                 | Reduced levels, vertical limits, and height descriptions must be tied to AHD or another approved vertical datum where computable geometry is required.                                                            |
| Natural surface and depth wording      | Depth limits such as depth below natural surface must be preserved as legal wording and not prematurely converted into absolute z-values unless the reference surface and method are known.                       |
| Abuttals in 3D                         | The dataset must record tenure or parcel relationships above, below, and horizontally adjacent to the 3D parcel.                                                                                                  |
| Plan views and vertical views          | The legal definition may depend on plan views, elevations, sections, isometric views, enlargements, schedules, or other plan components.                                                                          |
| Structure relationships                | A structure may be evidence, monument, physical asset, or boundary reference. The dataset must distinguish the physical structure from the legal cadastral boundary.                                              |
| Marking and re-establishment           | Some 3D parcel corners may be high in airspace or deep underground and cannot be physically marked. Alternative marks, structure connections, field records, and provenance are needed.                           |
| Horizontal CSD outline                 | WA practice may require a horizontal outline or representative footprint for CSD entry or index display, but this outline must not be confused with the full 3D legal extent.                                     |
| Multi-part parcels                     | The parcel may contain non-contiguous or vertically separated parts that are legally connected to the same parcel or interest.                                                                                    |
| Legal versus derived geometry          | Geometry derived from plan descriptions, computations, structure measurements, or visualisation processes must be classified according to its authority and source.                                               |
| Validation                             | The dataset must validate closure, planarity, orientation, CRS/datum consistency, topology, abuttals, and provenance according to the declared representation type.                                               |
| WA profile conformance                 | The dataset should use WA profile values for CRS, vertical datum, survey type, survey purpose, parcel type, parcel purpose, provenance, height descriptions, and jurisdiction-specific metadata where applicable. |

## Primary actor

Licensed cadastral surveyor or cadastral data editor.

## Supporting actors

Landgate validator, Inspector of Plans and Surveys, title administrator, infrastructure authority, road or rail authority, utility provider, local government, Crown land administrator, scheme plan examiner, cadastral database maintainer, 3D viewer user, downstream spatial data user.

## Scenario

A WA infrastructure project requires a deposited plan or other cadastral survey dataset to define one or more 3D parcels or spatial interests.

The project may include:

| Scenario element            | Example                                                                                                                                        |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Tunnel parcel               | A tunnel corridor beneath road, rail, private land, Crown land, or reserve land.                                                               |
| Subsurface infrastructure   | An underground station box, plant room, service chamber, utility corridor, drainage facility, or underground access structure.                 |
| Airspace parcel             | A volume above a road, building, reserve, railway, or surface parcel for a bridge, elevated walkway, building overhang, or future development. |
| 3D easement or restriction  | A support, access, service, drainage, light-and-air, tunnel, or infrastructure easement with upper and lower limits.                           |
| Vertically separated tenure | Different parcels, roads, reserves, or interests occupying different vertical levels over the same horizontal area.                            |

The surveyor prepares a 3D cadastral survey dataset that defines the relevant volume or volumes.

The dataset must encode the parcel or interest using 3D geometry and legal descriptions sufficient to show:

1. the legal identity of the 3D parcel or interest;
2. the parent or affected surface parcel or parcels;
3. the upper, lower, side, sloping, or stepped boundary surfaces;
4. AHD reduced levels or other vertical references used to define those surfaces;
5. plan-view and vertical-view information needed to understand the extent;
6. abuttals above, below, and horizontally adjoining the 3D parcel;
7. relationships to physical structures, where the structure is relevant;
8. any representative horizontal outline used for CSD entry or index display;
9. survey marks, connections, field records, adopted observations, computations, and provenance; and
10. validation results showing that the parcel is a coherent 3D cadastral object.

## Modelling principles

### 1. Treat the 3D parcel as the cadastral object

The legal object is the tunnel, subsurface volume, airspace volume, or 3D interest.

The dataset should not treat the 3D parcel as merely:

- a 2D footprint;
- a drawing annotation;
- a visualisation volume;
- a terrain-intersection curve; or
- a simple extrusion unless the source definition supports that interpretation.

### 2. Preserve the legal definition separately from computed geometry

The dataset should preserve the legal plan wording, schedule wording, AHD reduced levels, natural surface references, structure references, and boundary descriptions.

Computed geometry should be linked to those source descriptions and should state whether it is authoritative, plan-derived, analytical, approximate, or visualisation-only.

### 3. Prefer explicit boundary surfaces

The 3D parcel should be represented by explicit boundary surfaces, such as:

- horizontal upper or lower planes;
- vertical side planes;
- sloping planes;
- stepped plane surfaces;
- break-line-separated plane surfaces;
- structure-referenced surfaces where the structure legally defines the boundary; or
- other surfaces allowed by the applicable WA plan requirements.

Where a boundary is defined by four or more points, planarity should be checked. If the points do not define a unique plane, the surface should be broken into valid plane components or represented with an approved break-line pattern.

### 4. Do not treat a horizontal footprint as the full parcel

A horizontal outline may be needed for CSD entry, indexing, display, searching, or plan-view presentation.

That outline must be classified as a representative footprint or 2D index geometry unless it is also the legal boundary at a stated height or surface.

### 5. Record abuttals in three dimensions

The dataset should record abutting tenures or parcels:

- horizontally adjoining the 3D parcel;
- above the 3D parcel;
- below the 3D parcel;
- at different height bands over the same horizontal area; and
- within or around the same parent surface parcel.

### 6. Separate physical structures from legal boundaries

A tunnel lining, wall, slab, roof, floor, bridge deck, station box, service conduit, or other structure may be:

- physical evidence;
- a monument;
- a construction asset;
- an occupation feature;
- a boundary reference; or
- the legal boundary itself.

The dataset must state which role applies. Physical infrastructure should not automatically define the cadastral boundary unless the plan or legal source makes that relationship explicit.

### 7. Support non-contiguous and interlocking 3D parcels

The dataset should support parcels or interests made from multiple spatial components, including parts at different levels or separated horizontally.

Where several 3D parcels abut, interlock, overlap in plan view, or occupy different height bands over the same horizontal area, the dataset should preserve those relationships explicitly.

## Preconditions

1. A WA 3D CSDM dataset container exists or can be created.
2. The parent, affected, or surrounding parcel or tenure framework is identified.
3. The 3D parcel or interest has a legal appellation, identifier, parcel type, purpose, or interest type.
4. The source plan, statutory instrument, title, deposited plan, scheme plan, easement document, or infrastructure instrument defining the 3D parcel is available.
5. The horizontal CRS, vertical CRS or datum, units, and coordinate epoch where applicable are recorded.
6. Upper, lower, side, sloping, or stepped boundary surfaces are sufficiently defined from plan information, survey observations, structure references, reduced levels, or computations.
7. Any relative height or depth description has a stated reference, such as AHD, natural surface, ground surface, structure surface, or another approved reference.
8. Survey marks, structure connections, field observations, adopted observations, and computations are available where required.
9. The dataset can distinguish legal geometry from derived, approximate, analytical, or visualisation geometry.

## Proposed 3D CSDM modelling pattern

| Real-world or legal item                  | Suggested 3D CSDM / WA profile representation                                                                                          |
|-------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Tunnel parcel                             | 3D `CadastralParcel`, `SecondaryCadastralParcel`, or other agreed parcel type depending on legal purpose and WA profile vocabulary.    |
| Subsurface infrastructure parcel          | 3D cadastral parcel, secondary parcel, infrastructure-related spatial interest, easement parcel, or other WA profile type.             |
| Airspace parcel                           | 3D cadastral parcel or airspace-related parcel / interest, linked to the affected parent or underlying parcel.                         |
| Parent or affected parcel                 | Referenced `CadastralParcel`, parent parcel, scheme parcel, road, reserve, Crown parcel, or affected tenure object.                    |
| Legal identity                            | `Appellation`, parcel identifier, plan identifier, lot number, easement identifier, or other legal identifier.                         |
| Boundary surfaces                         | `BoundaryFace`, surface geometry, shell components, or other 3D geometry components that define the solid.                             |
| Solid volume                              | Closed solid, multi-solid, or solid derivable from boundary faces.                                                                     |
| Multi-part parcel                         | Multiple spatial components linked to the same legal parcel or interest.                                                               |
| Upper and lower limits                    | `zMax`, `zMin`, boundary faces, AHD reduced levels, planes, surfaces, or structured height descriptions.                               |
| Legal height wording                      | `zMinDescription`, `zMaxDescription`, height reference description, schedule wording, plan note, or supporting document reference.     |
| Natural-surface depth limit               | Legal description preserved as text and, where resolved, linked to derived AHD values with method and qualification.                   |
| AHD values                                | Absolute height values with vertical datum, units, source, accuracy, and provenance.                                                   |
| Plan view outline                         | Representative footprint or CSD index geometry, clearly classified as plan-view / index geometry rather than the full legal 3D extent. |
| Elevation, section, isometric or schedule | Supporting plan component, document reference, annotation, view reference, or structured representation of vertical limits.            |
| Abuttals above and below                  | Topological relationship, adjacency relationship, plan abuttal annotation, or supporting document relationship.                        |
| Structure used as evidence                | Occupation feature, occupation mark, survey point, structure observation, annotation, or source evidence.                              |
| Structure used as legal boundary          | Boundary face or surface with boundary-basis attribute identifying the legal role of the structure.                                    |
| Marking and reference evidence            | Survey mark, reference mark, offset mark, structure connection, field book observation, computation, or provenance activity.           |
| Derivation process                        | Computation, survey activity, plan interpretation activity, or validation process in provenance.                                       |
| WA metadata                               | Horizontal CRS, vertical datum, survey type, survey purpose, parcel type, parcel purpose, plan type, lifecycle status, and provenance. |

## Main flow

1. _Create the WA 3D CSDM dataset container_  
   The dataset is created as a cadastral survey dataset containing parcels, survey observations, marks, structure references, geometry components, supporting documents, annotations, and provenance.

2. _Identify the source plan or legal instrument_  
   The surveyor or editor records the deposited plan, scheme plan, statutory instrument, title document, easement document, acquisition document, or other source that defines the 3D parcel or interest.

3. _Identify the parent or affected parcel framework_  
   The dataset identifies the surface parcel, road, railway, reserve, Crown parcel, strata scheme, survey-strata scheme, or other tenure affected by the 3D parcel.

4. _Create the legal 3D parcel or interest_  
   The tunnel, subsurface infrastructure parcel, airspace parcel, or 3D easement is created with its legal identity, parcel or interest type, purpose, and relationship to affected tenure.

5. _Record representation and vertical extent status_  
   The dataset declares whether the object is an authoritative 3D parcel, legally defined 3D interest, derived 3D representation, analytical object, approximate object, or visualisation-only object.

6. _Define horizontal extent or plan-view outline_  
   The dataset records the plan-view outline or representative footprint used for plan reference, CSD entry, indexing, or display.  
   The dataset also records whether that outline is the full horizontal projection of the 3D parcel, a ground-level outline, a representative outline at a stated height, or another approved outline.

7. _Define upper, lower, side, and other boundary surfaces_  
   The dataset records the boundary surfaces that define the 3D extent, including vertical planes, horizontal planes, sloping planes, stepped surfaces, break-line-separated planes, or structure-referenced surfaces.

8. _Record vertical limits and height references_  
   The dataset records AHD reduced levels, `zMin`, `zMax`, relative height descriptions, depth descriptions, natural surface references, structure references, and any supporting schedule wording.

9. _Check CRS, vertical datum, and units_  
   The dataset verifies that the horizontal CRS, vertical datum, units, and coordinate epoch where applicable are sufficient to interpret the geometry and height values.

10. _Record abuttals in three dimensions_  
    The dataset records tenure and parcel abuttals beside, above, and below the 3D parcel. Where different tenures exist at different height bands over the same plan-view area, each relevant abuttal is recorded.

11. _Record structure relationships_  
    Where the parcel relates to a tunnel lining, building, slab, bridge, wall, service conduit, or other structure, the dataset records whether the structure is physical evidence, monument, occupation feature, legal boundary reference, or visualisation context.

12. _Record marking, survey evidence, and field records_  
    The dataset records marks, reference marks, offset marks, structure connections, survey observations, adopted observations, field book records, computations, and any relevant accuracy or uncertainty information.

13. _Create or derive the 3D geometry_  
    The system creates a closed solid, multi-solid, shell, boundary-face set, or other valid 3D geometry from the legally defined surfaces and values.

14. _Record provenance_  
    The dataset records source documents, survey activities, computations, interpretations, validation activities, software/process, date, responsible party, and lifecycle status.

15. _Validate the 3D parcel_  
    The dataset validates that the geometry is closed, surfaces are valid and correctly oriented, relevant planes are planar, vertical values are datum-consistent, abuttals are present, parent relationships are valid, and legal-versus-derived status is clear.

16. _Prepare exchange, review, and display outputs_  
    The dataset is available for 3D CSDM exchange, Landgate review, cadastral database integration, plan interpretation, 3D visualisation, and downstream use. Display styling remains the responsibility of the viewer.

## Alternative flows and edge cases

| Case                                                           | Expected handling                                                                                                                                                                                    |
|----------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parcel is a simple vertical extrusion                          | Reuse the companion extruded parcel pattern, but still record legal source, vertical limits, abuttals, and provenance.                                                                               |
| Parcel has stepped or sloping limits                           | Represent the boundary as multiple valid planar faces or approved surface components. Do not force it into a single horizontal `zMin` / `zMax` pair.                                                 |
| Boundary surface is not planar                                 | Split the surface into two or more planar faces, introduce break-lines, or use another approved representation. Do not encode a non-unique twisted plane as a legal boundary surface.                |
| Parcel is wholly below ground                                  | Record that it is subsurface and ensure above/below abuttals, structure relationships, AHD levels, and plan-view outline are clear. A terrain-intersection curve may be absent or not applicable.    |
| Parcel is wholly above ground                                  | Record that it is airspace and ensure underlying tenure, supporting structure, AHD limits, plan-view outline, and vertical abuttals are clear.                                                       |
| Parcel crosses terrain                                         | Use the terrain-intersection curve use case where required, but do not confuse the terrain-intersection curve with the full legal 3D parcel boundary.                                                |
| Multiple height bands occupy the same plan-view space          | Record each parcel, tenure, easement, or interest in its correct vertical band with above/below abuttals.                                                                                            |
| Structure defines the boundary                                 | Represent the relevant structure surface as a legal boundary surface and record the boundary basis and legal source.                                                                                 |
| Structure is only evidence                                     | Represent the structure as survey evidence, occupation evidence, annotation, or context. Do not use it as legal geometry.                                                                            |
| Corners cannot be marked directly                              | Record reference marks, offset marks, structure connections, field book observations, and re-establishment information.                                                                              |
| Natural surface depth wording is used                          | Preserve the legal wording and reference surface. If converted to AHD values, record method, assumptions, date, source surface, and whether the conversion is authoritative or for information only. |
| Only a horizontal CSD footprint is required for database entry | Record the footprint as representative or index geometry and link it to the legal 3D parcel definition. Do not treat the footprint as the complete legal geometry.                                   |
| Parcel has multiple disconnected parts                         | Encode each part as a spatial component of the same legal parcel or interest, with shared appellation and provenance.                                                                                |
| Parcel is an easement rather than a lot                        | Represent the legal interest or secondary parcel using the appropriate WA profile pattern and link it to the affected parcels and source document.                                                   |

## Validation requirements

The dataset should support validation of:

1. _Legal identity_  
   The parcel or interest has a valid appellation, identifier, type, purpose, and source document.

2. _Parent and affected parcel relationships_  
   The parcel is linked to the surface parcel, underlying tenure, overlying tenure, surrounding tenure, or affected parcels.

3. _3D geometry closure_  
   The solid, multi-solid, shell, or boundary-face set forms a valid 3D parcel extent where a closed volume is required.

4. _Boundary face orientation_  
   Boundary faces are consistently oriented and support inward/outward interpretation where required.

5. _Planarity_  
   Boundary planes defined by multiple points are planar, or the surface is split into valid planar components.

6. _Vertical datum consistency_  
   AHD or other vertical datum values are used consistently and are recorded with units and source.

7. _Height description consistency_  
   `zMin`, `zMax`, relative height descriptions, depth descriptions, and plan notes do not contradict each other.

8. _Abuttals_  
   Horizontal, above, and below abuttals are recorded where required.

9. _Structure relationship classification_  
   The dataset distinguishes structures that are legal boundaries from structures that are monuments, evidence, occupation features, or visualisation context.

10. _Representative footprint classification_  
    Any plan-view or CSD footprint is clearly identified as representative, projected, ground-level, or legal at a specified height.

11. _Legal versus derived status_  
    The dataset identifies whether each 3D geometry component is legally authoritative, plan-derived, analytical, approximate, or visualisation-only.

12. _Provenance_  
    Source documents, survey observations, computations, transformations, interpretation decisions, validation results, and responsible agents are traceable.

13. _WA profile conformance_  
    Controlled values, CRS, vertical datum, survey type, survey purpose, parcel type, parcel purpose, and provenance conform to the WA profile or agreed implementation rules.

## Acceptance outcomes

1. _The 3D parcel is represented as a cadastral object_  
   The dataset represents the tunnel, subsurface parcel, airspace parcel, or 3D interest as a legal cadastral object or legal interest, not merely as a 2D footprint or display object.

2. _The legal source is recorded_  
   The source plan, title, deposited plan, scheme plan, statutory instrument, easement document, or other legal source is identified.

3. _The parent or affected parcel relationship is explicit_  
   The dataset records the surface parcel, surrounding tenure, affected tenure, or parent scheme context.

4. _The 3D extent is computable_  
   Upper, lower, side, sloping, stepped, or structure-referenced boundary surfaces are sufficiently defined to compute or validate the 3D extent.

5. _AHD and height references are explicit_  
   Reduced levels, height limits, depth limits, natural surface references, and structure references are recorded with datum, units, source, and legal status.

6. _The geometry is valid_  
   The 3D parcel is represented as a closed solid, multi-solid, shell, boundary-face set, or other valid 3D geometry pattern supported by the 3D CSDM.

7. _Planarity and break-lines are handled_  
   Boundary surfaces are valid planes where required. Non-planar surfaces are split or otherwise handled using an approved method.

8. _Abuttals are represented in three dimensions_  
   The dataset records abuttals above, below, and horizontally adjoining the 3D parcel.

9. _The representative footprint is not misleading_  
   Any horizontal outline or CSD footprint is identified as a representative or index geometry unless it is legally defined as a boundary at a stated level.

10. _Structures are correctly classified_  
    Physical tunnels, linings, slabs, buildings, bridge decks, walls, conduits, and other structures are treated as legal boundaries only where the source says so.

11. _Marking and re-establishment evidence is traceable_  
    Where corners cannot be marked directly, the dataset records reference marks, structure connections, offsets, field observations, and re-establishment evidence.

12. _The dataset supports legal and derived geometry classification_  
    The dataset distinguishes authoritative legal parcel geometry from plan-derived, analytical, approximate, or visualisation-only geometry.

13. _The dataset supports exchange and validation_  
    The dataset can be validated using the 3D CSDM, the WA profile, and agreed WA implementation rules.

## Out of scope

This use case does not decide the final WA profile schema for tunnel parcels, airspace parcels, subsurface infrastructure parcels, or 3D easements.

It does not decide whether these should be implemented as primary parcels, secondary parcels, spatial interests, parcel components, feature collections, supporting documents, or a combination of these.

It does not define the legal rules for creating, registering, acquiring, vesting, leasing, or extinguishing 3D parcels or infrastructure interests.

It does not specify visual styling, symbology, line weights, transparency, exploded-view styling, or drawing conventions. 
The dataset should encode semantic facts required for display; the visualisation client should handle portrayal.

It does not replace the built-strata, survey-strata, height-description, extrusion, or terrain-intersection use cases. 
It should reference those use cases where the same concepts arise.

## Open confirmation points

1. What controlled vocabulary is required for parcel position or vertical context, such as `aboveGround`, `belowGround`, `crossesGround`, `airspace`, `subsurface`, `tunnel`, `infrastructure`, or `mixed`?
2. What controlled vocabulary is required for a boundary basis, such as `AHDPlane`, `verticalPlane`, `slopingPlane`, `steppedPlane`, `naturalSurfaceDepth`, `structureSurface`, `constructedSurface`, `easementLimit`, or `planDefinedSurface`?
3. How should representative CSD footprints be encoded and distinguished from legal 3D geometry?
4. Should above/below abuttals be encoded as formal topological relationships, structured annotations, supporting document references, or all three?
5. How should a parcel crossing multiple parent parcels or tenure types be represented?
6. How should multipart or disconnected 3D parcels be linked to the same legal appellation?
7. How should non-planar or curved boundaries be handled where the source plan permits or requires them?
8. What minimum provenance is required for converting plan-defined levels, natural-surface depth wording, or structure measurements into computable 3D geometry?
9. How should the dataset distinguish a physical tunnel or asset model from the legal tunnel parcel?
10. How should lifecycle history be recorded when a tunnel parcel, airspace parcel, or subsurface interest is created, amended, acquired, vested, leased, or extinguished?
11. Should a 3D CSDM dataset carry plan-view, elevation, section, isometric, exploded-view, and schedule information needed for manual review, or should this be the responsibility of a section view application?

## Summary

This use case is recommended because tunnels, subsurface infrastructure, and airspace parcels introduce a distinct cadastral pattern.

They are not merely 2D parcels with optional height descriptions. 
They are not always simple extrusions. 
They are not necessarily building-referenced strata parcels. 
They may be legal 3D objects defined by AHD levels, boundary planes, abuttals above and below, structure relationships, plan views, sections, elevations, isometric views, and supporting schedules.

The central requirement is that the 3D CSDM and WA profile must be able to encode the legal 3D parcel or interest, its boundary surfaces, height references, parent parcel relationships, abuttals, representative footprint, structure relationships, survey evidence, and provenance without reducing the object to a misleading 2D outline.

## References

- [ICSM (2023a) 3D Cadastral Survey Data Model (CSDM)](https://icsm-au.github.io/3d-csdm-profiles/)
- [ICSM (2023b) WA Implementation Profile for 3D CSDM](https://icsm-au.github.io/3d-csdm-profile-wa/)
- [ICSM (2023c) 3D CSDM Common Model / JSON Encoding repository](https://github.com/icsm-au/3d-csdm-common)
- [Landgate (2023) Survey Plans and Documents](https://www.landgate.wa.gov.au/land-and-property/property-ownership/survey-plans-and-documents/)
- [Landgate (2021) REG-01 The Transfer of Land Act](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/land-titles/land-ownership-land-titles-and-landgate/reg-01-the-transfer-of-land-act/)
- [Landgate (2018) SPP-12 Three Dimensional Plans](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/plan-preparation/spp-12-three-dimensional-plans/)