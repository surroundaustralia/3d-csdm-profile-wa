## Use case: Create a WA 3D CSDM Terrain Intersection Curve

## Revision history

| Version | Date       | Author        | Summary of change                                                                                                                                                                                                                                                                                                                                 |
|---------|------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.1     | 2026-05-06 | Andrew Hunter | Initial draft prepared.                                                                                                                                                                                                                                                                                                                           |
| 0.2     | 2026-06-05 | Andrew Hunter | Aligned with companion WA 3D CSDM use cases by adding explicit representation status, vertical extent status, height-reference and surface-source treatment, legal-versus-derived classification, computability checks, no-result handling, visualisation treatment, strata-specific cautions, validation outcomes, and open confirmation points. |

In the 3D CSDM, `terrainIntersectionCurve` is defined as the terrain/ground-level intersection curve of a 3D parcel and is a sub-property of `geo:hasGeometry`.

This use case identifies a required specification amendment: a cadastral parcel may intersect the terrain surface in more than one disconnected closed ring. 
The terrainIntersectionCurve property should therefore support cardinality `0..*`, rather than `0..1`. 
Each terrainIntersectionCurve value should remain a LinearRing. [(ICSM, 2023a)](https://icsm-au.github.io/3d-csdm/docs/).

### Description

A WA 3D CSDM dataset may contain a parcel that has a 3D or 2.5D representation. 
The parcel may be a height-limited lot, depth-limited lot, tunnel parcel, airspace parcel, building-based stratum, or another parcel whose geometry interacts with the terrain or ground surface.

The use case demonstrates how the dataset can derive and encode a **Terrain Intersection Curve** for the parcel. 
The curve identifies where the parcel’s 3D extent intersects the terrain or ground-level surface. 
It is not necessarily the same as the parcel’s legal 2D footprint. 
It is a derived geometric relationship between the parcel geometry and the terrain or ground surface.

A `terrainIntersectionCurve` is normally a derived geometric result. 
It must not be treated as a legal parcel boundary, legal footprint, legal vertical limit, or legal extent unless the source plan, title, statute, Crown Grant condition, strata statement, survey record, or approved jurisdictional rule explicitly gives it that status.

The use case therefore tests that the dataset can distinguish between:

- the legal cadastral parcel extent;
- the parcel’s 2D, 2.5D, height-described, derived 3D, or authoritative 3D representation;
- the terrain, ground, datum, design, or reference surface used for the intersection;
- the computed Terrain Intersection Curve;
- a curve used for legal, validation, analytical, approximate, or visualisation purposes; and
- the provenance of the source geometry, source surface, computation method, and result.

## Relationship to existing use cases

This use case should be a companion use case, not a replacement for the existing set. 
It focuses on a specific derived geometry: the curve or curves where a 3D, 2.5D, height-described, or surface-based parcel representation intersects a stated terrain or ground surface. 
Other use cases may supply the parcel geometry, vertical limits, legal boundary basis, or domain context needed to decide whether a Terrain Intersection Curve can be generated, but the curve should not be confused with the legal parcel boundary unless the source explicitly gives it that status.

| Related use case                                                                                 | Relationship to this use case                                                                                                                                                                                                                                                                                                                                     |
|--------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Represent a WA 2D parcel with height descriptions and derived 3D extent                          | Provides the general treatment of representation status, vertical extent status, `zMin`, `zMax`, height descriptions, AHD references, relative height references, derived surfaces, and legal-versus-derived geometry. This use case relies on those concepts to decide whether a parcel has a representation that can meaningfully intersect terrain.            |
| Create a WA 3D CSDM extruded cadastral parcel from a 2D footprint and resolved height definition | May provide a simple closed 3D solid whose relationship to terrain can be tested. A Terrain Intersection Curve may be derived from an extruded parcel, but the curve is not the extrusion footprint, the legal vertical limit, or the legal parcel extent unless the source explicitly says so.                                                                   |
| Encode WA tunnels, subsurface infrastructure, and airspace parcels as 3D CSDM datasets           | Closely related where a tunnel, subsurface parcel, airspace parcel, bridge, 3D easement, or other plan-defined 3D interest crosses or touches the terrain surface. The Terrain Intersection Curve may be useful for display, validation, or analysis, but it should not replace the legal 3D parcel definition or its boundary surfaces.                          |
| Encode a WA mining tenement survey dataset as a 3D CSDM mining profile                           | Relevant where mining-related subsurface rights, shafts, tunnels, voids, exclusion zones, or vertically limited tenements intersect terrain. The curve may support mining-profile review or visualisation, but mining tenement classification, marking-out evidence, lifecycle status, and affected-land relationships remain part of the mining-profile pattern. |
| Represent WA strata wall-boundary definitions between adjoining built-strata lots                | Generally separate, but relevant where a built-strata parcel uses wall, floor, ceiling, or other building surfaces that might otherwise be mistaken for terrain or ground. This use case should not treat building-referenced boundaries as terrain-intersection curves unless the source explicitly defines the relevant surface as terrain or ground.           |
| Encode a WA multi-unit and/or multi-level built-strata scheme as a 3D CSDM dataset               | Provides building-referenced strata parcel solids, private lot volumes, building evidence, and common-property or void treatment. A Terrain Intersection Curve is usually not central to built-strata modelling, but may be relevant where a built-strata parcel, basement, courtyard, or external component interacts with a stated terrain surface.             |
| Encode a WA multi-unit, multi-level survey-strata scheme as a 3D CSDM dataset                    | Provides survey-defined strata lots, common property, easements, optional vertical limits, relevant structures, and scheme-level information. A Terrain Intersection Curve may be relevant for vertically limited or terrain-interacting survey-strata elements, but it should not make survey-strata boundaries building-defined or replace surveyed boundaries. |
| Represent WA natural and general water boundaries as 3D CSDM datasets                            | Related where terrain, ground, waterbody, bank, HWM, ordinary high water line, or AHD contour evidence is involved. A water boundary may be a legal boundary in its own right, while a Terrain Intersection Curve is normally derived from parcel geometry and terrain. The two should remain distinct unless the source explicitly links them.                   |

## Use case statement

**As a cadastral data editor, I want to create one or more Terrain Intersection Curves for a WA 3D cadastral parcel, so that the dataset records each disconnected ring where the parcel’s 3D geometry intersects the terrain surface and can support validation, visualisation, and exchange in a 3D CSDM dataset.**

## Purpose

The purpose of this use case is to test whether a WA 3D CSDM dataset can correctly create, encode, validate, and trace the **Terrain Intersection Curve** of a 3D parcel.

The use case is especially useful where the parcel is not simply represented by a flat 2D footprint. 
For example, a parcel may be above ground, below ground, partly intersecting sloping terrain, or bounded by a surface that cuts through the ground. 
The Terrain Intersection Curve provides a way to record the ground-level intersection of that parcel geometry.

The use case also tests that the dataset does not create or interpret a Terrain Intersection Curve unless the parcel representation, terrain or ground surface, CRS, vertical datum, units, and computation method are sufficient to support that result.

The dataset must be able to classify the curve as one of the following, according to the agreed WA profile or implementation rule:

| Curve status        | Meaning                                                                                                                                             |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `legal`             | The source plan, title, statute, survey record, or approved jurisdictional rule explicitly defines the curve as legally significant.                |
| `derived`           | The curve is calculated from parcel geometry and a stated terrain or ground surface.                                                                |
| `analytical`        | The curve is generated to support validation, analysis, or system processing.                                                                       |
| `approximate`       | The curve is generated from an approximate, generalised, or lower-confidence terrain or parcel source.                                              |
| `visualisationOnly` | The curve supports display or interpretation but is not legal cadastral geometry.                                                                   |
| `notApplicable`     | The parcel representation or spatial relationship does not support a terrain-intersection curve.                                                    |
| `notGenerated`      | The curve could be generated in principle but was not created because the required source information was unavailable, unresolved, or out of scope. |

## Dataset concerns

| Dataset concern                                  | Why it matters                                                                                                                                                                                                                                                                                                                       |
|--------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3D or surface-based parcel geometry              | The curve can only be meaningful where there is a 3D, 2.5D, height-described, or surface-based parcel geometry that can be intersected with terrain. A standard 2D parcel should not be required to have a Terrain Intersection Curve.                                                                                               |
| Representation status                            | The parcel should state whether it is represented as `2D`, `2.5D`, `height-described`, `jurisdictionallyBounded`, `derived3D`, `authoritative3D`, or another agreed WA representation status.                                                                                                                                        |
| Vertical extent status                           | The parcel should state whether its vertical extent is `undefined`, `notSupplied`, `notApplicable`, `unconstrainedAbove`, `unconstrainedBelow`, `jurisdictionalDefault`, `legallyDefined`, `derivedForVisualisation`, `authoritative3D`, or another agreed controlled value.                                                         |
| Terrain or ground surface                        | The dataset must identify the terrain or ground surface used to derive the curve. The CSDM also defines `surface` as the terrain or ground level of a parcel [(ICSM, 2023a)](https://icsm-au.github.io/3d-csdm/docs/).                                                                                                               |
| Surface source and height reference              | The dataset must state whether the intersection is with natural ground, finished ground, surveyed terrain, DEM, design surface, parcel `surface`, AHD-defined level, or another approved reference surface. A point or geometry `z` value alone is not enough to define the ground relationship.                                     |
| Terrain Intersection Curve                       | The result should be encoded as zero, one or more parcel `terrainIntersectionCurve` values. Each value is a valid closed `LinearRing`; collectively, the values represent the parcel's terrian-intersection ring set.                                                                                                                |
| CRS and vertical datum                           | The parcel geometry, terrain surface, and derived curve must be in compatible horizontal and vertical reference systems. Transformations must be recorded.                                                                                                                                                                           |
| Computability                                    | The curve should only be generated where the parcel geometry, terrain or ground surface, CRS, vertical datum, units, and computation method are sufficient to compute the intersection.                                                                                                                                              |
| Legal versus derived status                      | The curve should be identified as derived unless it is directly defined by the legal plan, survey, statute, title, Crown Grant condition, or approved jurisdictional rule.                                                                                                                                                           |
| Provenance                                       | The dataset must record how the curve was created, including source parcel geometry, parcel geometry version, terrain source, terrain source version, calculation method, software/process, date, and responsible agent.                                                                                                             |
| Validation                                       | The curve should be closed, spatially consistent with the parcel and terrain surface, correctly classified, and not confused with the parcel’s legal footprint, boundary edges, boundary faces, or visualisation-only geometry.                                                                                                      |
| Visualisation and styling                        | The dataset should encode the semantic facts needed to display or style the curve. Line colour, line weight, transparency, and other portrayal rules should be handled by the visualisation client.                                                                                                                                  |
| Multiple disconnected terrain-intersection rings | A single 3D parcel may intersect the terrain surface in more than one disconnected closed curve, for example where the parcel is multi-part, has complex terrain interaction, or intersects terrain in separate locations. The dataset must be able to encode each ring separately using repeated `terrainIntersectionCurve` values. |


## Required 3D CSDM specification amendment

This use case identifies a required amendment to the 3D CSDM specification.

The current `terrainIntersectionCurve` property is too restrictive where a parcel intersects the terrain surface in more than one disconnected closed ring. 
A single `LinearRing` cannot represent multiple disconnected terrain-intersection results without either losing information or forcing an artificial geometry construction.

The required amendment is:

| Property                   | Current specification                           | Required specification                          |
|----------------------------|-------------------------------------------------|-------------------------------------------------|
| `terrainIntersectionCurve` | Expected type: `LinearRing`; cardinality `0..1` | Expected type: `LinearRing`; cardinality `0..*` |

Each `terrainIntersectionCurve` value represents one connected closed terrain-intersection ring. 
A parcel may therefore have:

- no terrain-intersection curve;
- one terrain-intersection ring; or
- multiple disconnected terrain-intersection rings.

The repeated values together form the parcel’s terrain-intersection ring set. 
This should not change the legal status of the rings. 
Each ring remains legal, derived, analytical, approximate, or visualisation-only according to its source and provenance.

## Primary actor

**Cadastral data editor**

## Supporting actors

Licensed surveyor, Landgate validator, cadastral database maintainer, strata plan examiner, 3D viewer user, downstream spatial data user.

## Scenario

A WA cadastral dataset contains a 3D parcel whose lower boundary intersects a sloping terrain surface. 
The parcel has a legal appellation, parcel type, parcel purpose, 3D geometry, CRS, vertical datum, representation status, vertical extent status, and survey provenance.

The editor needs to create a **Terrain Intersection Curve** that records where the parcel’s 3D geometry meets the terrain or ground surface. 
The curve is derived from the intersection of:

1. the parcel’s 3D boundary, surface, or solid geometry; and
2. the terrain, ground-level, design, datum, or reference surface used by the dataset.

The terrain or ground surface may be a surveyed ground surface, DEM, design surface, natural surface, finished surface, parcel `surface`, AHD-defined level, or another jurisdictionally approved reference surface. 
The selected surface must be identified because different surface sources can produce different terrain-intersection results.

The resulting curve is stored against the cadastral parcel as its terrain intersection geometry where the result is valid and permitted by the WA profile or implementation rule. 
The dataset also records the derivation method and source datasets, so the curve can be reviewed, validated, and regenerated if the terrain model or parcel geometry changes.

## Modelling principles

### Do not assume a Terrain Intersection Curve for every parcel

A standard 2D parcel should not automatically have a `terrainIntersectionCurve`. 
The curve is only meaningful where the parcel has a 3D, 2.5D, height-described, jurisdictionally bounded, derived 3D, or authoritative 3D representation that can be intersected with a stated terrain or ground surface.

### Do not treat the curve as legal geometry unless the source supports it

A Terrain Intersection Curve is normally a derived result. 
It should not be treated as the legal footprint, boundary face, boundary edge, vertical limit, or legal extent unless the source plan, title, legislation, survey record, Crown Grant condition, strata statement, or approved jurisdictional rule explicitly defines that status.

### Identify the surface used for derivation

The dataset should state whether the intersection uses `groundLevel`, `surfaceLevel`, `naturalSurface`, `finishedSurface`, `surveyedGround`, `DEM`, `designSurface`, `AHD`, parcel `surface`, or another agreed surface-source value. 
A point or geometry `z` value is not enough by itself to identify the terrain or ground relationship.

### Preserve legal wording separately from computed geometry

Where the source material contains legal or plan wording about ground, surface, height, depth, or vertical extent, that wording should be preserved separately from any computed Terrain Intersection Curve. 
The computed curve may support interpretation, but it should not replace the source legal description.

### Be explicit about no-result and not-generated cases

The dataset should not encode an arbitrary placeholder ring where no terrain intersection exists. 
If the parcel is entirely above terrain, entirely below terrain, lacks a suitable 3D representation, or lacks a usable terrain source, the dataset should record an agreed status such as `notApplicable`, `empty`, `notGenerated`, or `sourceUnavailable`.

### Keep styling separate from semantic encoding

The Terrain Intersection Curve may support display, clipping, or visual interpretation. 
However, portrayal rules such as colour, line weight, transparency, hatching, or symbology should be handled by the visualisation client. 
The dataset should encode the semantic facts needed to determine how the curve may be styled, not the styling itself.

## Preconditions

1. The target parcel exists in the WA 3D CSDM dataset and has a legal appellation, parcel type, parcel purpose, CRS, vertical datum, and provenance.
2. The target parcel has a declared representation status, such as `2D`, `2.5D`, `height-described`, `jurisdictionallyBounded`, `derived3D`, or `authoritative3D`.
3. The target parcel has a declared vertical extent status, such as `undefined`, `notSupplied`, `notApplicable`, `unconstrainedAbove`, `unconstrainedBelow`, `jurisdictionalDefault`, `legallyDefined`, `derivedForVisualisation`, or `authoritative3D`.
4. The parcel has suitable 3D, 2.5D, surface, boundary-face, solid, or other geometry capable of being intersected with a terrain or ground surface.
5. The terrain, ground, design, datum, or reference surface to be used for the intersection is identified, and its source status is known.
6. The horizontal CRS, vertical CRS or datum, units, transformation method, and source quality are sufficient for the intended curve status.
7. The intended status of the curve is known, such as `legal`, `derived`, `analytical`, `approximate`, or `visualisationOnly`.

## Proposed 3D CSDM modelling pattern

| Real-world or computational item     | Suggested 3D CSDM or WA profile representation                                                                                                                                                                                       |
|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Target parcel                        | `CadastralParcel`, usually `PrimaryCadastralParcel` or `SecondaryCadastralParcel` depending on the right represented.                                                                                                                |
| Parcel legal identity                | `Appellation`.                                                                                                                                                                                                                       |
| Parcel representation status         | WA profile or implementation-rule value such as `2D`, `2.5D`, `height-described`, `jurisdictionallyBounded`, `derived3D`, or `authoritative3D`.                                                                                      |
| Parcel vertical extent status        | WA profile or implementation-rule value such as `undefined`, `notSupplied`, `notApplicable`, `unconstrainedAbove`, `unconstrainedBelow`, `jurisdictionalDefault`, `legallyDefined`, `derivedForVisualisation`, or `authoritative3D`. |
| Parcel 3D geometry                   | Solid, surface, boundary faces, or other 3D spatial unit geometry.                                                                                                                                                                   |
| Terrain / ground surface             | Parcel `surface`, surveyed ground surface, DEM, natural surface, finished surface, design surface, AHD-defined level, or referenced terrain model.                                                                                   |
| Surface source description           | Structured value and/or description identifying the source surface and whether it is legal, surveyed, approved, approximate, analytical, or visualisation-only.                                                                      |
| Terrain-intersection ring set        | Zero, one, or more `terrainIntersectionCurve` values associated with the parcel                                                                                                                                                      |                                                                                                            
| Individual terrain-intersection ring | One `terrainIntersectionCurve` value                                                                                                                                                                                                 |                                                                                                                                                     
| Ring geometry                        | `LinearRing` geometry for each disconnected closed ring                                                                                                                                                                              |                                                                                                                                     
| Ring provenance                      | Source parcel geometry, terrain surface, calculation method, date, responsible agent, and geometry status recorded for each ring or for the derivation activity that produced the ring set                                           | 
| Curve status                         | Legal, derived, analytical, approximate, visualisation-only, not applicable, not generated, or other agreed controlled value.                                                                                                        |
| Source survey evidence               | Survey observations, adopted observations, survey points, surface observations, computations, field notes, or approved source data.                                                                                                  |
| Derivation process                   | Computation or survey activity in provenance, including software/process, method, source versions, date, and responsible agent.                                                                                                      |
| WA metadata                          | Horizontal CRS, vertical datum, survey type, survey purpose, parcel type, parcel purpose, representation status, vertical extent status, height reference, surface source, and provenance.                                           |

## Main flow

1. _Create or identify the WA 3D CSDM dataset_:  
   The dataset contains the relevant parcel, survey observations, CRS, vertical datum, source data, and provenance.

2. _Select the target parcel_:  
   The editor identifies the cadastral parcel for which a Terrain Intersection Curve is being considered.

3. _Confirm representation and vertical extent status_:  
   The editor confirms whether the parcel is represented as `2D`, `2.5D`, `height-described`, `jurisdictionallyBounded`, `derived3D`, `authoritative3D`, or another agreed status. 
   The editor also confirms whether the vertical extent is undefined, not supplied, not applicable, unconstrained, legally defined, derived, or authoritative.

4. _Confirm the parcel has suitable geometry_:  
   The parcel must have a solid, surface, boundary-face, 2.5D surface, or other geometry that can be meaningfully intersected with terrain. 
   A standard 2D footprint alone does not require a Terrain Intersection Curve.

5. _Select the terrain or ground surface_:  
   The editor selects the terrain model, ground-level surface, design surface, datum surface, parcel `surface`, or approved reference surface to be used. 
   This may be a surveyed ground surface, DEM, natural surface, finished surface, design surface, AHD-defined level, or jurisdictionally approved terrain surface.

6. _Classify the selected surface source_:  
   The dataset records whether the selected surface is legal, surveyed, approved, approximate, analytical, visualisation-only, or another agreed status. 
   If the surface is approximate or visualisation-only, the resulting curve should not be treated as legal geometry.

7. _Encode the terrain-intersection ring or rings_:  
   The resulting terrain-intersection geometry is encoded as zero, one, or more `terrainIntersectionCurve` values on the parcel. 
   Each disconnected closed intersection is encoded as a separate `LinearRing`.

   Where the intersection produces multiple disconnected rings, the dataset must not collapse them into a single artificial ring or discard secondary rings. 
   The repeated `terrainIntersectionCurve` values together represent the full terrain-intersection result for the parcel.

8. _Validate each ring and the ring set_:  
   The dataset is checked to confirm that each `terrainIntersectionCurve` value is a valid closed `LinearRing`, lies on the relevant terrain surface, intersects the parcel geometry correctly, uses the correct CRS and vertical datum, and is not confused with the parcel’s legal footprint.

   Where multiple rings are present, the dataset also validates that the rings are separate members of the same terrain-intersection result and that no ring has been duplicated, omitted, or incorrectly merged.

9. _Check CRS, vertical datum, and unit compatibility_:  
   The parcel geometry and terrain surface must be in compatible horizontal and vertical reference systems. 
   If a transformation is required, the transformation method, parameters, source CRS, target CRS, vertical datum, and responsible process must be recorded.

10. _Confirm computability_:  
    The system confirms that the parcel geometry, terrain surface, CRS, vertical datum, units, and source quality are sufficient to compute the intersection. 
    If not, the curve is not generated and the reason is recorded.

11. _Derive the Terrain Intersection Curve_:  
    The system calculates the intersection between the parcel’s 3D or surface-based geometry and the selected terrain or ground surface.

12. _Classify the curve result_:  
    The resulting curve is classified as `legal`, `derived`, `analytical`, `approximate`, `visualisationOnly`, `notApplicable`, `notGenerated`, or another agreed status.

13. _Encode the curve_:  
    Where the result is valid and a single closed ring, the resulting curve is encoded as the parcel’s `terrainIntersectionCurve`, using the expected `LinearRing` geometry form.

14. _Record provenance_:  
    The dataset records the source terrain model, terrain model version, parcel geometry version, computation method, software/process, date, responsible party, curve status, and any transformation or generalisation applied.

15. _Validate the curve_:  
    The dataset is checked to confirm that the curve is closed, lies on the relevant terrain or ground surface, intersects the parcel geometry correctly, uses the correct CRS and vertical datum, has the correct status, and does not contradict the parcel’s legal geometry.

16. _Support visualisation without encoding styling_:  
    The curve may be used by a viewer or validation tool, but line colour, line weight, transparency, hatching, and other portrayal rules are managed by the visualisation client rather than the core cadastral data model.

## Alternative flows and edge cases

| Case                                                              | Expected handling                                                                                                                                                                                                                                                                                       |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parcel is a standard 2D parcel                                    | Do not create a Terrain Intersection Curve unless a 3D, 2.5D, height-described, or surface-based parcel representation exists.                                                                                                                                                                          |
| Parcel has a 2.5D surface only                                    | The curve may be derived if the surface and terrain relationship is meaningful and documented. The result should not imply a closed legal 3D volume unless supported by the legal source.                                                                                                               |
| Parcel has unresolved height descriptions                         | Do not generate the curve until the relevant ground, surface, floor, ceiling, datum, or reference level can be resolved sufficiently for the intended result status.                                                                                                                                    |
| Parcel is entirely above terrain                                  | No terrain intersection curve may exist. Record an agreed no-result status such as `notApplicable`, `empty`, or `notGenerated`.                                                                                                                                                                         |
| Parcel is entirely below terrain                                  | No ground-level intersection may exist unless the parcel crosses the terrain surface. Record an agreed no-result status rather than creating a placeholder ring.                                                                                                                                        |
| Parcel intersects terrain in multiple disconnected rings          | Encode each disconnected closed intersection as a separate `terrainIntersectionCurve` value. The parcel may have multiple `terrainIntersectionCurve` values under the proposed `0..*` cardinality. Each ring must be valid, traceable, and classified by legal/derived/analytical/visualisation status. |
| Parcel touches terrain at a point or along a non-ring line        | The result may not satisfy the expected `LinearRing` geometry type. Record the result as not applicable, not generated, or requiring profile guidance.                                                                                                                                                  |
| Terrain source is unavailable                                     | Do not derive the curve. Record the missing source, review requirement, and whether generation is deferred.                                                                                                                                                                                             |
| Terrain source is approximate                                     | Derive only if the use case permits approximate geometry. Classify the result as approximate, analytical, or visualisation-only.                                                                                                                                                                        |
| Terrain model changes                                             | Regenerate the curve only as a new derived result or controlled lifecycle event, with versioned provenance retained for the previous terrain source and curve.                                                                                                                                          |
| Parcel geometry changes                                           | Regenerate or retire the curve according to lifecycle rules, preserving the previous parcel geometry version, curve, method, date, and responsible party.                                                                                                                                               |
| Curve is used only for visualisation                              | Mark it as derived or visualisation-supporting, not as legal boundary geometry. Do not encode styling rules in the core data.                                                                                                                                                                           |
| Curve is plan-defined                                             | Record the plan or survey source and treat the curve according to its legal status. The dataset should still preserve provenance and distinguish the source wording from any computed geometry.                                                                                                         |
| Built-strata parcel uses building surfaces                        | Do not treat walls, floors, ceilings, slabs, or other building surfaces as terrain or ground surface unless the source explicitly defines them that way. Building-referenced boundaries are handled by the built-strata and wall-boundary use cases.                                                    |
| Survey-strata parcel includes relevant structures near boundaries | Treat structures as occupation evidence, contextual features, annotations, or supporting review information. Do not use them to derive a Terrain Intersection Curve unless they are part of the approved terrain or ground-surface source.                                                              |
| Common property, shared structure, or void is present             | Do not infer a Terrain Intersection Curve from voids, shared structures, or uncollected spaces. The curve must be based on an identified parcel representation and terrain or ground surface.                                                                                                           |

## Acceptance outcomes

1. _The target parcel is validly identified_:  
   The dataset identifies the parcel for which the Terrain Intersection Curve is being created or considered.

2. _Representation status is explicit_:  
   The dataset records whether the parcel is `2D`, `2.5D`, `height-described`, `jurisdictionallyBounded`, `derived3D`, `authoritative3D`, or another agreed representation status.

3. _Vertical extent status is explicit_:  
   The dataset records whether the parcel’s vertical extent is undefined, not supplied, not applicable, unconstrained, jurisdictionally defined, legally defined, derived, or authoritative.

4. _The terrain or ground source is recorded_:  
   The dataset records the terrain, ground, design, datum, parcel `surface`, or reference surface used to derive the curve, including the source version and status where available.

5. _The curve is generated only where computable_:  
   The curve is created only where the parcel geometry, terrain or ground surface, CRS, vertical datum, units, source quality, and method are sufficient for the intended result status.

6. _The curve status is recorded_:  
   The dataset identifies whether the curve is legal, derived, analytical, approximate, visualisation-only, not applicable, not generated, or another agreed status.

7. _The curve is encoded in the correct CSDM property_:  
   Where valid and permitted, the result is stored as the parcel’s `terrainIntersectionCurve`.

8. _The curve geometry is valid_:  
   Each terrain-intersection result is encoded as a valid closed `LinearRing`. 
   Where the parcel intersects terrain in multiple disconnected rings, each ring is encoded as a separate `terrainIntersectionCurve` value. 
   The dataset supports zero, one, or many terrain-intersection rings for a parcel. 
   Cases that do not produce a single closed ring are handled by agreed profile or implementation rules.

9. _Multiple rings are not lost or artificially merged_:
   Where the intersection produces multiple disconnected closed rings, the dataset preserves each ring as a separate `terrainIntersectionCurve` value and records the provenance of the derivation.

9. _CRS and vertical datum are explicit_:  
   The dataset records the horizontal CRS and vertical datum used for the parcel, terrain surface, transformation, and derived curve.

10. _The curve is traceable_:  
    The dataset records the derivation process, source parcel geometry, source parcel geometry version, terrain model, terrain model version, computation method, software/process, transformation, date, and responsible agent.

11. _The curve is not confused with legal parcel geometry_:  
    The dataset distinguishes the Terrain Intersection Curve from the parcel’s legal 2D footprint, boundary edges, boundary faces, height descriptions, vertical limits, and visualisation-only geometry.

12. _Validation is representation-aware_:  
    A standard 2D parcel is not required to have a Terrain Intersection Curve. A 3D, 2.5D, height-described, derived 3D, or authoritative 3D parcel may have one where the parcel intersects terrain and the source data supports its creation.

13. _No-result cases are handled explicitly_:  
    Where no terrain intersection exists, the dataset records an agreed status such as `notApplicable`, `empty`, or `notGenerated` rather than encoding an arbitrary placeholder geometry.

14. _Visualisation remains separate from data encoding_:  
    The dataset provides the semantic information needed by visualisation clients, but does not encode line styling, colour, transparency, hatching, or other portrayal rules as core cadastral data.

## Outstanding issues to confirm

1. Confirm the controlled vocabulary for terrain or ground-surface source, such as `naturalSurface`, `finishedSurface`, `surveyedGround`, `DEM`, `designSurface`, `parcelSurface`, `AHD`, or `jurisdictionallyApprovedSurface`.
2. Confirm the controlled vocabulary for curve status, such as `legal`, `derived`, `analytical`, `approximate`, `visualisationOnly`, `notApplicable`, and `notGenerated`.
3. Confirm how to encode no-result cases: omitted property, `notApplicable`, `empty`, `notGenerated`, `sourceUnavailable`, or another controlled value.
4. Confirm whether repeated `terrainIntersectionCurve` values require individual identifiers, ordering, roles, quality metadata, or per-ring provenance, or whether provenance can be recorded once for the derivation activity that generated the full ring set.
5. Confirm whether a Terrain Intersection Curve can ever be authoritative in WA, and if so, what source material is sufficient.
6. Confirm whether derived curves should be regenerated automatically when the terrain model or parcel geometry changes, or only through a controlled lifecycle/provenance event.
7. Confirm whether the WA profile should allow a related derived geometry where the intersection result is not a single `LinearRing`.
8. Confirm whether surface-source quality, accuracy, or confidence should be recorded as a structured value, free-text provenance, or both.
9. Confirm whether the curve should be validated against the parcel’s legal 2D footprint, parent parcel, or scheme parcel in addition to the selected terrain or ground surface.

## Summary

The key specification requirement identified by this use case is that `terrainIntersectionCurve` must support multiple disconnected terrain-intersection rings. 
The required change is to amend the property cardinality from `0..1` to `0..*`, while retaining `LinearRing` as the expected type for each value. 
This allows the 3D CSDM to represent complex terrain intersections without merging disconnected rings, discarding valid intersections, or introducing a separate multi-geometry type.

## References

- [ICSM (2023a) 3D Cadastral Survey Data Model (3D CSDM)](https://icsm-au.github.io/3d-csdm/docs/)
- [ICSM (2023b) WA Profile of the 3D CSDM](https://icsm-au.github.io/3d-csdm/docs/wa-profile/)
