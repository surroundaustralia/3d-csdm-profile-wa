## Use case: Create a WA 3D CSDM Terrain Intersection Curve

In the 3D CSDM, `terrainIntersectionCurve` is defined as the **terrain/ground-level intersection curve of a 3D parcel**, is a sub-property of `geo:hasGeometry`, has expected type `LinearRing`, and has cardinality `0..1` for a cadastral parcel [(ICSM, 2023)](https://icsm-au.github.io/3d-csdm/docs/).

### Description

A WA 3D CSDM dataset contains a parcel that has a 3D or 2.5D representation. The parcel may be a height-limited lot, depth-limited lot, tunnel parcel, airspace parcel, building-based stratum, or another parcel whose geometry interacts with the ground surface.

The use case demonstrates how the dataset can derive and encode a **Terrain Intersection Curve** for the parcel. The curve identifies where the parcel’s 3D extent intersects the terrain or ground-level surface. It is not necessarily the same as the parcel’s legal 2D footprint. It is a derived geometric relationship between the parcel geometry and the terrain surface.

<!--
The WA profile is relevant because the dataset needs WA-specific metadata, including horizontal CRS, vertical datum, survey type, parcel type, parcel purpose, survey procedures, and provenance. The WA profile states that `verticalDatum` is used as the datum to assume for all height values in scope of the CSD object [(ICSM, 2023)](https://icsm-au.github.io/3d-csdm/docs/wa-profile/)
-->

## Use Case statement

**As a cadastral data editor, I want to create a Terrain Intersection Curve for a WA 3D cadastral parcel, so that the dataset records where the parcel’s 3D geometry intersects the terrain surface and can support validation, visualisation, and exchange in a 3D CSDM dataset.**

## Purpose

The purpose of this use case is to test whether a WA 3D CSDM dataset can correctly create, encode, validate, and trace the **Terrain Intersection Curve** of a 3D parcel.

The use case is especially useful where the legal parcel is not simply a flat 2D footprint. For example, a parcel may be above ground, below ground, partly intersecting sloping terrain, or bounded by a surface that cuts through the ground. The Terrain Intersection Curve provides a way to record the ground-level intersection of that 3D parcel geometry.

## Dataset concerns

| Dataset concern             | Why it matters                                                                                                                                                                                                |
| --------------------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3D parcel geometry          | The curve can only be meaningful where there is a 3D or surface-based parcel geometry to intersect with terrain.                                                                                              |
| Terrain or ground surface   | The dataset must identify the terrain surface used to derive the curve. The CSDM also defines `surface` as the terrain or ground level of a parcel [(ICSM, 2023)](https://icsm-au.github.io/3d-csdm/docs/).   |
| Terrain Intersection Curve  | The result should be encoded as the parcel’s `terrainIntersectionCurve`, with geometry consistent with the expected `LinearRing` type [(ICSM, 2023)](https://icsm-au.github.io/3d-csdm/docs/). |
| CRS and vertical datum      | The parcel geometry and terrain surface must be in compatible horizontal and vertical reference systems.                                                                                                      |
| Legal versus derived status | The curve should be identified as derived unless it is directly defined by the legal plan or survey.                                                                                                          |
| Provenance                  | The dataset must record how the curve was created, including source parcel geometry, terrain source, calculation method, date, and responsible agent.                                                         |
| Validation                  | The curve should be closed, spatially consistent with the parcel and terrain surface, and not confused with the parcel’s legal footprint.                                                                     |

## Primary actor

**Cadastral data editor**

## Supporting actors

Licensed surveyor, Landgate validator, cadastral database maintainer, 3D viewer user, downstream spatial data user.

## Scenario

A WA cadastral dataset contains a 3D parcel whose lower boundary intersects a sloping terrain surface. 
The parcel has a legal appellation, parcel type, parcel purpose, 3D geometry, CRS, vertical datum, and survey provenance.

The editor needs to create a **Terrain Intersection Curve** that records where the parcel’s 3D geometry meets the terrain surface. The curve is derived from the intersection of:

1. the parcel’s 3D boundary or solid geometry; and
2. the terrain or ground-level surface used by the dataset.

The resulting curve is stored against the cadastral parcel as its terrain intersection geometry. The dataset also records the derivation method and source datasets, so the curve can be reviewed, validated, and regenerated if the terrain model or parcel geometry changes.

## Proposed 3D CSDM modelling pattern

| Real-world item            | Suggested 3D CSDM representation                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Target 3D parcel           | `CadastralParcel`, usually `PrimaryCadastralParcel` or `SecondaryCadastralParcel` depending on the right represented |
| Parcel legal identity      | `Appellation`                                                                                                        |
| Parcel 3D geometry         | Solid, surface, boundary faces, or other 3D spatial unit geometry                                                    |
| Terrain / ground surface   | Parcel `surface` or referenced terrain model                                                                         |
| Terrain Intersection Curve | `terrainIntersectionCurve` / `terrain intersection` property on the parcel                                           |
| Curve geometry             | `LinearRing` geometry                                                                                                |
| Source survey evidence     | Survey observations, adopted observations, survey points, computations                                               |
| Derivation process         | Computation or survey activity in provenance                                                                         |
| WA metadata                | Horizontal CRS, vertical datum, survey type, survey purpose, parcel type, parcel purpose                             |

## Main flow

1. _Create or identify the WA 3D CSDM dataset_:
   The dataset contains the relevant parcel, survey observations, CRS, vertical datum, and provenance.

2. _Select the target parcel_:
   The editor identifies the 3D cadastral parcel for which a Terrain Intersection Curve is required.

3. _Confirm the parcel has suitable 3D geometry_:
   The parcel must have a solid, surface, boundary-face, or other geometry that can be intersected with terrain.

4. _Select the terrain or ground surface_:
   The editor selects the terrain model or ground-level surface to be used. This may be a surveyed ground surface, DEM, design surface, or jurisdictionally approved terrain surface.

5. _Check CRS and vertical datum compatibility_:
   The parcel geometry and terrain surface must be in compatible horizontal and vertical reference systems. If not, a transformation step is required and must be recorded.

6. _Derive the Terrain Intersection Curve_:
   The system calculates the intersection between the parcel’s 3D geometry and the terrain surface.

7. _Encode the curve_:
   The resulting curve is encoded as the parcel’s `terrainIntersectionCurve`, using the expected `LinearRing` geometry form.

8. _Record provenance_:
   The dataset records the source terrain model, parcel geometry version, computation method, software/process, date, and responsible party.

9. _Validate the curve_:
   The dataset is checked to confirm that the curve is closed, lies on the relevant terrain surface, intersects the parcel geometry correctly, uses the correct CRS/datum, and does not contradict the parcel’s legal geometry.

## Alternative flows and edge cases

| Case                                                     | Expected handling                                                                                                                                            |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Parcel is a standard 2D parcel                           | Do not create a Terrain Intersection Curve unless a 3D or surface-based parcel representation exists.                                                        |
| Parcel has a 2.5D surface only                           | The curve may be derived if the surface and terrain relationship is meaningful and documented.                                                               |
| Parcel is entirely above terrain                         | No terrain intersection curve may exist, or the result is empty/not applicable.                                                                              |
| Parcel is entirely below terrain                         | No ground-level intersection may exist unless the parcel crosses the terrain surface.                                                                        |
| Parcel intersects terrain in multiple disconnected rings | The implementation needs a rule, because the CSDM property expects a `LinearRing`; multiple intersections may require separate handling or profile guidance. |
| Terrain model changes                                    | The curve may need to be regenerated, with versioned provenance retained.                                                                                    |
| Curve is used only for visualisation                     | Mark it as derived or visualisation-supporting, not as legal boundary geometry.                                                                              |
| Curve is plan-defined                                    | Record the plan or survey source and treat the curve according to its legal status.                                                                          |

## Acceptance outcomes

1. _The target parcel is validly identified_:
   The dataset identifies the parcel for which the Terrain Intersection Curve is being created.

2. _The terrain source is recorded_:
   The dataset records the terrain or ground surface used to derive the curve.

3. _The curve is encoded in the correct CSDM property_:
   The result is stored as the parcel’s `terrainIntersectionCurve`.

4. _The curve geometry is valid_:
   The curve is a valid closed ring and is consistent with the expected `LinearRing` geometry type.

5. _CRS and vertical datum are explicit_:
   The dataset records the horizontal CRS and vertical datum used for the parcel, terrain surface, and derived curve.

6. _The curve is traceable_:
   The dataset records the derivation process, source parcel geometry, terrain model, computation method, and responsible agent.

7. _The curve is not confused with the legal footprint_:
   The dataset distinguishes the Terrain Intersection Curve from the parcel’s legal 2D footprint, boundary edges, boundary faces, or derived visualisation geometry.

8. _Validation is representation-aware_:
   A standard 2D parcel is not required to have a Terrain Intersection Curve. A 3D parcel may have one where the parcel intersects terrain and the source data supports its creation.
