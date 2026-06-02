# Represent a WA 2D parcel with height descriptions and derived 3D extent

## Revision history

| Version | Date       | Author        | Summary of change                                                                                                                                                |
|---------|------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.1     | 2026-05-06 | Andrew Hunter | Initial draft prepared.                                                                                                                                          |
| 0.2     | 2026-06-02 | Andrew Hunter | In response to Landgate feedback added height-description requirements and clarified the distinction between legal descriptions, z-values, and derived geometry. | 

## Description

A WA cadastral dataset contains parcels that are primarily represented by a surveyed 2D footprint.
For a standard 2D parcel, the dataset does not necessarily define an explicit upper or lower vertical boundary.
However, the dataset must be capable of being extended to support:

- a **2.5D surface representation** bounded by the 2D parcel footprint;
- a **height or vertical relationship description**, such as ground level, floor level, ceiling level, or AHD;
- legally defined, jurisdictional, title-based, statutory, plan-based, or Crown Grant vertical limits; and
- a **derived 3D solid**, where the legal description and computable geometry values are sufficient to construct one.

This use case therefore tests a representation pathway from an authoritative 2D footprint to a bounded 2.5D surface and, where justified, to a derived or legally bounded 3D solid.

It also tests that the dataset can distinguish between:

- a point or geometry `z` value;
- the meaning of that height in relation to ground, floor, ceiling, surface, building, or datum;
- a legal height or depth description;
- computable `zMin` / `zMax` values;
- relative height expressions, such as `groundLevel - 8.0 m`;
- absolute height values, such as `15.7 m AHD`; and
- undefined, unconstrained, or not-supplied vertical extent.

This means the use case should test the following related states:

| State                               | Description                                                                                                                                                 | Legal status                                                                                                                                                                                         |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **2D parcel**                       | The parcel is represented by its surveyed footprint only.                                                                                                   | Authoritative 2D cadastral representation. The vertical extent is not explicitly defined by the dataset.                                                                                             |
| **2.5D parcel surface**             | The footprint is associated with a ground, terrain, height, or reference surface.                                                                           | Adds vertical context but does not necessarily define a closed legal volume.                                                                                                                         |
| **Height-described parcel**         | The parcel has a height, depth, or stratum description, such as ground level, floor level, ceiling level, AHD, building surface, or a plan-based statement. | The description may be legally significant, but it may not be directly computable without resolving its reference surface, datum, or source rule.                                                    |
| **Jurisdictionally bounded parcel** | The parcel has upper and/or lower vertical limits derived from a title, plan, statute, Crown Grant condition, or approved jurisdictional rule.              | May define a legal vertical extent where the source rule is authoritative.                                                                                                                           |
| **Derived 3D solid**                | The footprint or 2.5D surface is combined with computable vertical values, surfaces, planes, or offsets to generate a solid.                                | Authoritative only where the legal source defines the parcel by those values, surfaces, planes, building elements, or solid geometry. Otherwise, it is a derived visualisation or analytical volume. |

The 3D CSDM includes a `surface` property for the terrain or ground level of a parcel, a `terrain intersection` curve for a 3D parcel, and `zMax` / `zMin` values as upper and lower extent indicators.
However, the exact interpretation of `zMax` and `zMin` is implementation and context dependent. 
The WA profile or implementation rules therefore need to state what those values mean and how they relate to legal descriptions, height references, vertical datums, and derived geometry [(ICSM, 2023)](https://icsm-au.github.io/3d-csdm/docs/).

## Use Case statement

As a cadastral data editor, I want to model a WA 2D parcel with optional height descriptions, vertical limits, 2.5D surfaces, and derived 3D geometry, so that the parcel can be used in a 3D cadastre without changing its legal identity or incorrectly implying a legal 3D volume.

## Purpose

The purpose of this use case is to test whether a WA 3D CSDM dataset can represent a standard 2D cadastral parcel in a way that remains extensible to 2.5D and 3D use.

The use case starts with the surveyed 2D parcel footprint as the authoritative cadastral geometry.
It then tests whether the parcel can be associated with a bounded 2.5D terrain or reference surface, and whether legal or jurisdictional height descriptions can be recorded separately from computable geometry values.

The use case also tests whether legally defined, jurisdictional, title-based, statutory, Crown Grant, or plan-based vertical limits can be recorded and used to derive a 3D solid where the source information is sufficient.

The dataset must distinguish between:

- authoritative cadastral geometry;
- geometry `z` values;
- undefined vertical extent;
- unconstrained vertical extent;
- height reference descriptions;
- legal height or depth descriptions;
- relative height expressions;
- absolute height values in a vertical CRS or datum;
- jurisdictional assumptions;
- legally defined vertical limits; and
- derived geometry used for visualisation, validation, analysis, or system processing.

This ensures that a standard 2D parcel is not incorrectly treated as a legally defined 3D volume unless the relevant vertical limits are supported by an appropriate authoritative source.

## Dataset concerns

| Dataset concern                    | Why it matters                                                                                                                                                                                                                                                             |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authoritative 2D footprint         | The parcel begins as a standard surveyed 2D cadastral parcel. The 2D footprint remains the authoritative cadastral geometry unless a legally defined 3D extent is supplied.                                                                                                |
| Undefined vertical extent          | A standard 2D parcel should not be treated as having explicit upper or lower z-limits. The dataset must be able to record that the z-axis extent is undefined, not supplied, or not applicable.                                                                            |
| Unconstrained vertical extent      | The dataset should not use `null` or omitted values to imply infinity unless the implementation rule explicitly defines that meaning. Unconstrained extent should be represented explicitly.                                                                               |
| Extensibility to 2.5D              | The parcel may later be associated with a terrain, ground, floor, height, or reference surface bounded by the 2D footprint, without automatically becoming a full 3D solid.                                                                                                |
| 2.5D surface boundary              | Any 2.5D surface must remain spatially constrained by the parcel footprint, unless a separate parcel, easement, restriction, or interest explicitly extends beyond it.                                                                                                     |
| Geometry z-values                  | A point or geometry may have a `z` coordinate, but that value alone does not explain whether the point is at ground level, floor level, ceiling level, monument level, an occupation mark, an internal boundary, or another height relationship.                           |
| Height reference descriptions      | Height values should be linked to a stated reference, such as `groundLevel`, `surfaceLevel`, `floorLevel`, `ceilingLevel`, `plateHeight`, AHD, a building surface, or another jurisdictionally defined reference.                                                          |
| Legal height or depth descriptions | Legal, plan, title, statutory, or jurisdictional wording should be preserved separately from computable z-values.                                                                                                                                                          |
| Relative height expressions        | Expressions such as `groundLevel - 8.0 m` or `floorLevel + 12.0 m` are not simple z-values. They require a reference surface or reference level before they can be converted into geometry.                                                                                |
| Absolute height values             | Values such as `15.7 m AHD` may be directly computable if the vertical CRS or datum is stated.                                                                                                                                                                             |
| Jurisdictional z-limits            | If upper or lower vertical limits are supplied by legislation, title, plan notation, Crown Grant condition, or jurisdictional rule, the source and interpretation of those limits must be recorded.                                                                        |
| Derived 3D solid                   | A 3D solid may be generated from the 2D footprint or 2.5D surface and the applicable height values, surfaces, planes, or z-limits. The dataset must identify whether that solid is authoritative, inferred, analytical, approximate, or visualisation-only.                |
| Legal versus derived geometry      | The dataset must distinguish legal cadastral geometry from geometry derived for display, validation, analysis, or system processing.                                                                                                                                       |
| Representation status              | The parcel should clearly state whether it is being represented as 2D, 2.5D, height-described, jurisdictionally bounded, or derived 3D.                                                                                                                                    |
| Vertical datum and CRS             | Any height, depth, surface, or z-value must be linked to the relevant vertical datum and coordinate reference system where it is intended to be computable.                                                                                                                |
| Survey evidence and provenance     | The footprint, surface, height description, vertical limits, and any derived 3D solid must be traceable to survey observations, source plans, legal instruments, jurisdictional rules, computations, or derivation processes.                                              |
| Validation by representation level | Validation rules should depend on whether the parcel is 2D, 2.5D, height-described, jurisdictionally bounded, or 3D. A 2D parcel should not fail because it lacks 3D shell closure, while a derived 3D solid should be checked for closure and vertical-limit consistency. |
| WA profile conformance             | The dataset should use WA profile values for CRS, vertical datum, parcel type, parcel purpose, survey type, survey purpose, provenance, height reference descriptions, and other jurisdiction-specific metadata where applicable.                                          |

<!--
The WA profile is relevant because it constrains WA CSDM datasets with WA-appropriate values, including horizontal CRS, vertical datum, parcel purpose, and potentially controlled vocabularies for height references and vertical extent status.
-->

## Primary actor

Cadastral surveyor or cadastral data editor.

## Supporting actors

Landgate validator, cadastral database maintainer, infrastructure authority, local government, title administrator, strata plan examiner, 3D viewer user, downstream spatial data user.

## Scenario

A WA cadastral dataset contains a standard land parcel currently represented by a surveyed 2D footprint.
The parcel has a legal appellation, parcel type, parcel purpose, boundary observations, survey marks, source plan references, and survey provenance.

The dataset does not initially define an explicit upper or lower vertical boundary for the parcel.
The parcel is therefore represented as a 2D cadastral parcel, not as a 2.5D parcel, not as a height-described parcel, and not as a closed 3D solid.

The dataset must also support an extension pathway.
If additional information becomes available, the 2D parcel footprint may be used to bound a terrain, ground, floor, or reference surface.
This creates a 2.5D or height-contextual representation of the parcel, but it does not automatically create a legal 3D volume.

If a legal source describes the parcel’s vertical extent, the dataset must preserve that description.
The description may use absolute values, such as a height in metres AHD, or relative values, such as a height above a floor level or a depth below ground level.

Where title-based, statutory, plan-based, Crown Grant, strata, built-form, or other jurisdictionally supported vertical limits are available, the dataset may record upper and lower vertical limits.
These limits may be represented as computable `zMin` and `zMax` values, relative height expressions, boundary surfaces, planes, or building surfaces, depending on how the legal source defines the parcel.

A 3D solid may be generated only where the available information is sufficient to compute one.
The dataset must state whether the resulting solid is legally authoritative, derived from a legal description, approximate, analytical, or visualisation-only.

The dataset must distinguish between:

| Representation state            | Scenario meaning                                                                                                                                                                                                                                          |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2D parcel                       | The parcel is represented only by its surveyed horizontal footprint. No explicit vertical limits are defined.                                                                                                                                             |
| 2.5D surface-bounded parcel     | The parcel footprint bounds a terrain, ground, floor, or reference surface. The parcel has vertical context, but not necessarily a closed legal volume.                                                                                                   |
| Height-described parcel         | The parcel has a legal or descriptive height relationship, such as ground level, floor level, ceiling level, AHD, or building surface, but the description may not yet be converted to a closed solid.                                                    |
| Jurisdictionally bounded parcel | The parcel has upper and/or lower vertical limits derived from a title, plan, statute, Crown Grant condition, strata statement, built-form boundary, or approved jurisdictional rule.                                                                     |
| Derived 3D solid                | A solid is generated from the footprint, optional surface, height reference, legal description, and computable vertical values. The dataset records whether this solid is legally authoritative, derived, analytical, approximate, or visualisation-only. |

The scenario tests that the parcel can move from a 2D representation to a 2.5D, height-described, jurisdictionally bounded, or derived 3D representation without changing the parcel identity, losing survey provenance, or implying legal vertical limits that are not supported by an authoritative source.

## Modelling principles

### Do not assume 3D extent

Do not assume a 3D solid merely because the dataset is 3D-capable.

A parcel may have:

- no defined vertical extent;
- a geometry `z` value only;
- a height relationship to ground, floor, ceiling, building surface, datum, or another reference;
- a legal height or depth description;
- computable `zMin` / `zMax` values;
- relative height expressions;
- absolute height values in a vertical CRS or datum; or
- a closed 3D solid.

The dataset must distinguish these cases.

### Separate values from descriptions

A `zMin` or `zMax` value should be treated as a computable geometry or extent value.

A `zMinDescription` or `zMaxDescription` should preserve the legal, plan, title, statutory, Crown Grant, strata, or jurisdictional wording that explains what the vertical limit means.

Where the source is a relative height statement, such as `8 metres below ground level`, the dataset should record the reference level, offset, unit, and source description. 
A computed `zMin` or `zMax` value should only be created where the reference level or surface can be resolved.

### Be explicit about unconstrained or undefined vertical extent

The dataset should not treat omitted values or `null` as meaning infinity unless the implementation rule explicitly defines that behaviour.

It is safer to distinguish:

| Case                      | Suggested meaning                                                                      |
|---------------------------|----------------------------------------------------------------------------------------|
| `notSupplied`             | No value was supplied in the source material or dataset.                               |
| `undefined`               | The vertical extent has not been defined for this parcel representation.               |
| `notApplicable`           | The concept does not apply to this parcel representation.                              |
| `unconstrainedAbove`      | The legal or jurisdictional source indicates that the parcel is not constrained above. |
| `unconstrainedBelow`      | The legal or jurisdictional source indicates that the parcel is not constrained below. |
| `jurisdictionalDefault`   | A jurisdictional default applies, and the source rule should be referenced.            |
| `legallyDefined`          | A legal source defines the vertical extent.                                            |
| `derivedForVisualisation` | A geometry has been generated for display or analysis only.                            |
| `authoritative3D`         | The parcel has a legally authoritative 3D extent.                                      |

This matters because terms or assumptions such as the “upper atmosphere”, “lower mantle”, or “infinite carrot” limits should not be treated as default cadastral limits unless WA law, Landgate practice, or the implementation profile explicitly defines them.

For WA, Landgate material refers to traditional Crown Grant depth limits, commonly 12.19 metres (40') or 60.96 metres (200'), rather than an unlimited assumption [(Landgate, 2023)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/land-titles/land-ownership-land-titles-and-landgate/typ-01-types-of-title-to-land).
Landgate’s 3D plan guidance also distinguishes three-dimensional lots limited in height or depth from traditional Crown Grant depth limits [Landgate, 2018](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/plan-preparation/spp-12-three-dimensional-plans/).

### Treat built geometry as legal only where the legal source says so

Built geometry can be part of the legal definition of a parcel where the plan, statute, title, strata statement, or approved cadastral rule defines the parcel boundary by reference to built elements.

Examples may include :

- strata lots defined by the inner surfaces of walls, the upper surface of the floor, and the under surface of the ceiling;
- single-tier strata lots defined by the external surfaces of buildings;
- party wall cases where a wall surface or centre plane forms the boundary;
- 3D lots limited by surveyed planes, levels, or building surfaces; and
- building-based cubic spaces where the legal text defines the parcel by reference to built form.

Where built geometry is used only to visualise, approximate, or validate the parcel, it should be recorded as derived geometry and should not be treated as the legal parcel boundary.

## Height description and vertical extent pattern

The use case should test that the implementation can separate:

| Component                            | Purpose                                                                                                                                                                |
|--------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `z`                                  | A coordinate value used to position a point or geometry in 3D.                                                                                                         |
| `zDescription` or height description | A description of what the `z` value represents, such as ground level, floor level, ceiling level, plate height, monument level, occupation mark, or internal boundary. |
| `zMin`                               | A computable lower geometry or extent value, where available.                                                                                                          |
| `zMinDescription`                    | The legal or descriptive text explaining the lower vertical extent.                                                                                                    |
| `zMax`                               | A computable upper geometry or extent value, where available.                                                                                                          |
| `zMaxDescription`                    | The legal or descriptive text explaining the upper vertical extent.                                                                                                    |
| `heightReference`                    | The reference level, surface, or datum from which a height or depth is measured.                                                                                       |
| `heightOffset`                       | A relative offset from the reference level or surface.                                                                                                                 |
| `verticalCRS` / vertical datum       | The CRS or datum used for absolute height values.                                                                                                                      |
| `verticalExtentStatus`               | The status of the vertical extent, such as undefined, unconstrained, legally defined, jurisdictional default, derived for visualisation, or authoritative 3D.          |
| `source` / provenance                | The plan, title, statute, Crown Grant, strata statement, survey observation, computation, or rule that supports the value or description.                              |

The following height reference values are candidate vocabulary terms for the WA profile or implementation rules:

| Candidate value                      | Intended meaning                                                                   |
|--------------------------------------|------------------------------------------------------------------------------------|
| `groundLevel`                        | Height or depth is measured relative to ground level.                              |
| `naturalSurface`                     | Height or depth is measured relative to natural ground surface.                    |
| `finishedSurface`                    | Height or depth is measured relative to a finished or constructed surface.         |
| `surfaceLevel`                       | Height or depth is measured relative to a named or modelled surface.               |
| `floorLevel`                         | Height is measured relative to a floor level.                                      |
| `lowestGroundFloorUpperSurfaceLevel` | Height is measured relative to the upper surface level of the lowest ground floor. |
| `ceilingLevel`                       | Height is measured relative to a ceiling level.                                    |
| `plateHeight`                        | Height is measured relative to plate height.                                       |
| `AHD`                                | Height is measured in metres Australian Height Datum.                              |
| `buildingSurface`                    | Boundary is defined by a building surface.                                         |
| `wallSurface`                        | Boundary is defined by a wall surface.                                             |
| `floorSurface`                       | Boundary is defined by a floor surface.                                            |
| `ceilingSurface`                     | Boundary is defined by a ceiling surface.                                          |
| `roofSurface`                        | Boundary is defined by a roof surface.                                             |
| `boundaryPlane`                      | Boundary is defined by a surveyed or described plane.                              |

The vocabulary should be controlled by the WA profile or implementation rules so that systems can distinguish legal, descriptive, and geometric meanings.

## Example height encoding scenarios

### SP 78282 style stratum statement

Example source statement:

> THE STRATUM OF THE PART LOTS INCLUDING THE CUBIC SPACE ABOVE AND BELOW THE PART LOTS COMPRISING THE BUILDING EXTENDS BETWEEN 8 METRES BELOW AND 12 METRES ABOVE THE UPPER SURFACE LEVEL OF THE LOWEST GROUND FLOOR OF THE RESPECTIVE UNITS INCLUDING WHERE COVERED

This is not a simple pair of absolute z-values. 
It is a relative height description that depends on a reference level.

| Component              | Example value                                                                                                                                   |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `zMin`                 | Computed only if the upper surface level of the lowest ground floor is known.                                                                   |
| `zMinDescription`      | `THE STRATUM ... EXTENDS FROM 8 METRES BELOW THE LOWEST GROUND FLOOR OF THE RESPECTIVE UNITS INCLUDING WHERE COVERED`                           |
| `zMinReference`        | `lowestGroundFloorUpperSurfaceLevel`                                                                                                            |
| `zMinOffset`           | `-8.0 m`                                                                                                                                        |
| `zMax`                 | Computed only if the upper surface level of the lowest ground floor is known.                                                                   |
| `zMaxDescription`      | `THE STRATUM ... EXTENDS TO 12 METRES ABOVE THE UPPER SURFACE LEVEL OF THE LOWEST GROUND FLOOR OF THE RESPECTIVE UNITS INCLUDING WHERE COVERED` |
| `zMaxReference`        | `lowestGroundFloorUpperSurfaceLevel`                                                                                                            |
| `zMaxOffset`           | `+12.0 m`                                                                                                                                       |
| `verticalExtentStatus` | `legallyDefined`, if the source plan is authoritative for that parcel.                                                                          |
| `derivedSolidStatus`   | `computable` only where the reference floor level or surface is available.                                                                      |

### Land depth restriction

Example source statement:

> LIMITED IN DEPTH TO 60.96 METRES AS TO LOT 4495 ONLY

This is a relative depth restriction. 
It should not be treated as a simple absolute `zMin` unless the ground level reference can be resolved.

| Component              | Example value                                                                                                       |
|------------------------|---------------------------------------------------------------------------------------------------------------------|
| `zMin`                 | Computed only if the ground level or relevant reference surface is known.                                           |
| `zMinDescription`      | `LIMITED IN DEPTH TO 60.96 METRES AS TO LOT 4495 ONLY`                                                              |
| `zMinReference`        | `groundLevel` or another legally defined reference surface.                                                         |
| `zMinOffset`           | `-60.96 m`                                                                                                          |
| `zMax`                 | Omitted unless a source supplies an upper limit.                                                                    |
| `zMaxStatus`           | `undefined`, `notSupplied`, or `unconstrainedAbove`, depending on the legal interpretation and implementation rule. |
| `verticalExtentStatus` | `legallyDefined` or `jurisdictionalDefault`, depending on the source.                                               |

### Height restricted to 15.7 metres AHD

Example source statement:

> RESTRICTED IN HEIGHT TO 15.7 METRES AHD

This is an absolute height limit in a stated vertical datum.

| Component                      | Example value                                                                                                       |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `zMax`                         | `15.7`                                                                                                              |
| `zMaxDescription`              | `RESTRICTED IN HEIGHT TO 15.7 METRES AHD`                                                                           |
| `zMaxReference`                | `AHD`                                                                                                               |
| `verticalCRS` / vertical datum | `AHD`                                                                                                               |
| `zMin`                         | Omitted unless a source supplies a lower limit.                                                                     |
| `zMinStatus`                   | `undefined`, `notSupplied`, or `unconstrainedBelow`, depending on the legal interpretation and implementation rule. |
| `verticalExtentStatus`         | `legallyDefined`, if the source plan is authoritative for that parcel.                                              |

## Proposed 3D CSDM modelling pattern

| Real-world item                            | Suggested 3D CSDM or WA profile representation                                                                                                                                 |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Standard WA 2D parcel                      | `CadastralParcel`, usually a `PrimaryCadastralParcel`.                                                                                                                         |
| Authoritative 2D footprint                 | Parcel surface, polygon, boundary edges, surveyed lines, survey marks.                                                                                                         |
| Geometry z-value                           | `z` coordinate value used to position a point or geometry.                                                                                                                     |
| Height description                         | Implementation or WA profile component describing the relationship of a `z` value to ground, floor, ceiling, building, monument, occupation mark, internal boundary, or datum. |
| 2.5D terrain or reference surface          | `surface` or implementation-specific surface geometry bounded by the 2D footprint.                                                                                             |
| Terrain intersection                       | `terrain intersection` curve where the parcel’s 3D or surface representation intersects ground level.                                                                          |
| Absolute upper vertical limit              | `zMax`, where legally or jurisdictionally defined and expressed in a known vertical CRS or datum.                                                                              |
| Absolute lower vertical limit              | `zMin`, where legally or jurisdictionally defined and expressed in a known vertical CRS or datum.                                                                              |
| Relative upper vertical limit              | Height reference plus offset, with `zMax` computed only where the reference can be resolved.                                                                                   |
| Relative lower vertical limit              | Height reference plus offset, with `zMin` computed only where the reference can be resolved.                                                                                   |
| Upper vertical description                 | `zMaxDescription` or equivalent WA profile extension.                                                                                                                          |
| Lower vertical description                 | `zMinDescription` or equivalent WA profile extension.                                                                                                                          |
| Unconstrained or undefined vertical extent | Explicit `verticalExtentStatus`, not merely a missing or `null` z-value.                                                                                                       |
| Derived 3D solid                           | Generated geometry using footprint, surface, height reference, `zMin`, `zMax`, boundary planes, or built surfaces, with derivation and provenance recorded.                    |
| Legal status of vertical limits            | Parcel quality, parcel state, implementation attribute, or WA profile extension.                                                                                               |
| Survey evidence                            | Survey points, vector observations, adopted observations, computations.                                                                                                        |
| Provenance                                 | Survey provenance bundle recording how the 2D, 2.5D, height-described, or 3D representation was derived.                                                                       |

## Main flow

1. _Create the parcel as a standard 2D cadastral parcel_  
   The parcel is first encoded using its surveyed 2D footprint, legal appellation, parcel type, parcel purpose, survey observations, CRS, and provenance.

2. _Declare the representation status_  
   The dataset records whether the parcel is represented as 2D, 2.5D, height-described, jurisdictionally bounded, derived 3D, or authoritative 3D.

3. _Declare the vertical extent status_  
   The dataset records whether the parcel’s z-axis extent is undefined, not supplied, not applicable, unconstrained, jurisdictionally implied, legally defined, or derived for visualisation.

4. _Record geometry z-values where available_  
   If points or geometry contain z-values, the dataset records those values as geometry positions. 
   The dataset does not assume that the z-values define the legal vertical extent of the parcel.

5. _Record height descriptions where available_  
   If the source describes a height relationship, such as ground level, floor level, ceiling level, plate height, monument level, occupation mark, or internal boundary, the dataset records that description separately from the geometry z-value.

6. _Optionally attach a 2.5D surface_  
   If terrain, ground level, design surface, floor surface, or height surface information is available, the parcel may be associated with a bounded 2.5D surface. 
   This surface is bounded by the parcel footprint but does not automatically create a legal 3D volume.

7. _Record legal vertical descriptions_  
   If a title, plan, statute, Crown Grant condition, strata statement, or jurisdictional rule describes upper or lower vertical limits, the dataset preserves that wording in `zMinDescription`, `zMaxDescription`, or equivalent description elements.

8. _Record relative height expressions_  
   If the legal description is relative to a reference level or surface, the dataset records the reference, offset, unit, and source. 
   A computed `zMin` or `zMax` is created only where the reference level or surface can be resolved.

9. _Record absolute height values_  
   If the legal description provides an absolute height, such as metres AHD, the dataset records the value, vertical datum, source description, and provenance.

10. _Apply jurisdictional z-limits only where justified_  
    If the jurisdiction, title, statute, plan notation, Crown Grant, or other legal source defines upper or lower limits, those limits may be encoded as `zMin` and `zMax`, or as relative expressions that can later be resolved into `zMin` and `zMax`.

11. _Generate a derived 3D solid only when valid_  
    A 3D solid may be generated by extruding or bounding the 2D footprint or 2.5D surface using computable vertical values, reference surfaces, boundary planes, or built surfaces. The dataset must state whether that solid is authoritative, derived from a legal description, approximate, analytical, or visualisation-only.

12. _Record derivation provenance_  
    The dataset records whether the 3D solid came from survey observations, legal plan notation, Crown Grant depth limits, jurisdictional rules, terrain modelling, building surfaces, computation, or visualisation processes.

13. _Validate according to representation and height-definition type_  
    A 2D parcel should not fail because it lacks 3D shell closure. 
    A 2.5D parcel should be checked for footprint and surface consistency. 
    A height-described parcel should be checked for valid references and descriptions. 
    A derived 3D solid should be checked for closure, z-limit consistency, volume derivation, and provenance.

## Acceptance outcomes

1. _The 2D footprint remains authoritative_  
   The parcel retains its surveyed 2D cadastral footprint and legal identity.

2. _The dataset distinguishes 2D, 2.5D, height-described, and 3D states_  
   The parcel clearly states whether it is a 2D parcel, a 2.5D surface-bounded parcel, a height-described parcel, a jurisdictionally bounded parcel, a derived 3D solid, or an authoritative 3D parcel.

3. _Geometry z-values are not confused with legal height descriptions_  
   A point or geometry `z` value is treated as a geometry position. 
   The dataset separately records what that height means where a height relationship is known.

4. _Height descriptions are supported_  
   The dataset can record height relationships such as ground level, surface level, floor level, ceiling level, plate height, building surface, monument level, occupation mark, internal boundary, or AHD.

5. _Vertical descriptions are preserved_  
   Where a vertical limit is described in legal, plan, title, statutory, Crown Grant, strata, or jurisdictional wording, that wording is preserved in `zMinDescription`, `zMaxDescription`, or an equivalent description element.

6. _Vertical values are not invented_  
   `zMin` and `zMax` are only populated where they come from a title, plan, statute, jurisdictional rule, approved implementation rule, resolved height expression, or other authoritative source.

7. _Relative height limits are supported_  
   The dataset can encode vertical limits measured relative to a reference level or surface, such as ground level, natural surface, floor level, ceiling level, plate height, or building surface.

8. _Absolute height limits are supported_  
   The dataset can encode vertical limits expressed as absolute heights in a defined vertical CRS or datum, such as metres AHD.

9. _Unconstrained vertical extent is explicit_  
   The dataset does not use `null` or omitted z-values to imply infinity unless the implementation rule explicitly defines that meaning. 
   Unconstrained vertical extent is recorded using an explicit status or controlled value.

10. _Jurisdictional limits are traceable_  
    Where upper or lower limits are applied, their source and interpretation are recorded.

11. _Derived solids are identified as derived_  
    If a 3D solid is generated from the footprint, surface, height description, z-limits, reference surfaces, planes, or built geometry, the dataset records whether the solid is legally authoritative or derived for validation, analysis, or visualisation.

12. _Built geometry is legal only where the source says so_  
    Building surfaces, wall surfaces, floor surfaces, ceiling surfaces, or other built elements are treated as legal parcel boundaries only where the relevant legal source defines the parcel by those elements.

13. _2.5D surfaces are bounded by the parcel footprint_  
    Any terrain, ground, floor, or reference surface associated with the parcel does not extend beyond the parcel’s 2D boundary unless explicitly modelled as a separate parcel, easement, restriction, or interest.

14. _Derived solids are generated only from computable height definitions_  
    A derived 3D solid is generated only where the required height references, offsets, surfaces, CRS, and provenance are sufficient to compute the solid.

15. _Validation depends on the declared representation_  
    A 2D parcel is validated as 2D, a 2.5D surface as surface-bounded, a height-described parcel as a set of valid height descriptions and references, and a 3D solid as a closed volume.

16. _Validation recognises height-definition type_  
    Validation distinguishes between parcels with no vertical extent, parcels with descriptive vertical limits, parcels with relative height expressions, parcels with absolute z-values, and parcels with closed 3D solid geometry.

## Out of scope

This use case does not define the final WA profile schema for height descriptions, vertical extent status, or controlled vocabularies.
It identifies the requirements that the WA profile or implementation rules should satisfy.

This use case also does not decide whether `zMinDescription`, `zMaxDescription`, height reference, offset, and vertical extent status should be implemented as direct properties, nested components, observations, quality elements, profile extensions, or another 3D CSDM-compatible pattern.
That decision should be made as part of the WA profile and 3D CSDM implementation design.

## Summary

The use case is about a representation pathway from:

**2D footprint**  
to **bounded 2.5D surface**  
to **height-described parcel**  
to **jurisdictionally bounded vertical extent**  
to **derived or authoritative 3D solid**.

The central requirement is that the dataset must keep legal meaning, height description, geometry value, and derived solid geometry separate.

A parcel should only become an authoritative 3D cadastral solid where the legal source supports that interpretation.
Where the 3D geometry is generated from assumptions, defaults, terrain models, relative height expressions, or visualisation processes, the dataset must clearly record that it is derived and identify the source and method used.