## Use case: Create a WA 3D CSDM extruded cadastral parcel from a 2D footprint and resolved height definition

An extruded parcel is a derived 3D cadastral parcel created from an authoritative 2D parcel footprint, a resolved height or vertical reference definition, and an extrusion rule.

This use case is related to, but narrower than, the use case [Represent a WA 2D parcel with height descriptions and derived 3D extent](./2-5d-liminal.md). 
That use case deals with the representation of height descriptions, vertical extent status, `zMin` / `zMax`, `zMinDescription` / `zMaxDescription`, relative height references, absolute height values, and unconstrained vertical extent.

This use case tests the next step: whether those height definitions can be used with a 2D parcel footprint to generate, classify, validate, exchange, and trace a closed 3D solid.

This is supported by the 3D CSDM because a cadastral parcel may be a single area, multi-area, solid, or multi-solid, and its extent may be described by surfaces, solids, or topological relationships. 
The 3D CSDM also supports 3D spatial units as closed solids, multi-solids, or other valid geometry from which a solid can be derived [(ICSM, 2023a)](https://icsm-au.github.io/3d-csdm/docs/).

## Revision history

| Version | Date       | Author        | Summary of change                                                                                                                                                                                                                                                                                                                  |
|---------|------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.1     | 2026-05-06 | Andrew Hunter | Initial draft prepared.                                                                                                                                                                                                                                                                                                            |
| 0.2     | 2026-06-03 | Andrew Hunter | Revised in response to client feedback and the height-description use case. Added explicit extrusion-base height references, computability checks before solid generation, handling rules for `null`, omitted values, unconstrained vertical extent, and distinction between legal, derived, analytical, and visualisation solids. |

## Description

A WA cadastral dataset contains a standard 2D cadastral parcel footprint. 
The footprint provides the horizontal shape for extrusion, but it does not by itself define the vertical base, upper limit, lower limit, or legal vertical extent of the parcel.

To create an extruded solid, the dataset must also identify the height reference or extrusion base from which the solid is derived. 
This may be a ground level, surface level, floor level, ceiling level, AHD value, building surface, boundary plane, or another WA profile or implementation-rule height reference.

The extrusion is applied in the vertical direction, normally along the CRS z-axis, using one of the following approaches:

1. a computable extrusion distance from a stated base reference;
2. explicit computable lower and upper limits, such as resolved `zMin` and `zMax` values;
3. relative lower and upper limits that have been resolved from height references and offsets; or
4. lower and upper boundary surfaces or planes from which a closed solid can be computed.

The result is a **derived 3D solid cadastral parcel** or an **authoritative 3D cadastral parcel**, depending on the legal status of the source vertical limits.

The dataset must preserve the relationship between:

- the original 2D parcel footprint;
- the height reference or extrusion base;
- the extrusion rule;
- the vertical limits or extrusion distance;
- the legal or descriptive height wording;
- the resulting solid geometry;
- the representation status and legal status of the solid; and
- the provenance of the derivation.

This is similar to a swept solid or swept path solid pattern, where a base geometry is swept along a path (typically perpendicular to the base shape) to create a solid. 
However, in a cadastral context the act of extrusion must not imply legal 3D extent unless the relevant legal source, plan, statute, Crown Grant condition, strata statement, or jurisdictional rule supports that interpretation.

## Use Case statement

**As a cadastral data editor, I want to create a WA 3D cadastral parcel by extruding a 2D parcel footprint using a resolved height reference and computable vertical limits, so that the resulting solid can be represented, validated, exchanged, and traced without incorrectly implying legal 3D extent.**

## Purpose

The purpose of this use case is to test whether a WA 3D CSDM dataset can create and manage an extruded cadastral parcel from a 2D parcel footprint and a resolved height definition.

The use case assumes that legal height descriptions, relative height references, absolute height values, vertical extent status, and `zMin` / `zMax` semantics are handled by the companion height-description use case. 
This use case then tests whether that information is sufficient to generate a valid closed solid.

The use case tests that the dataset can:

| Dataset concern                    | Why it matters                                                                                                                                                                                                                                                                                                                            |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Source 2D footprint                | The 2D cadastral parcel provides the authoritative horizontal extrusion shape.                                                                                                                                                                                                                                                            |
| Extrusion base or height reference | The dataset must state whether the extrusion is based on ground level, surface level, floor level, AHD, a building surface, a boundary plane, or another controlled reference.                                                                                                                                                            |
| Extrusion rule                     | The dataset must record how the solid was created, including direction, distance, lower and upper limits, or bounding surfaces.                                                                                                                                                                                                           |
| Computable vertical limits         | A closed solid should only be generated where the upper and lower bounding conditions are computable.                                                                                                                                                                                                                                     |
| Relative height descriptions       | Relative expressions such as `groundLevel - 8.0 m` or `floorLevel + 12.0 m` must not be converted into geometry unless the reference level or surface is known.                                                                                                                                                                           |
| Absolute height values             | Absolute values, such as `15.7 m AHD`, can only be interpreted where the vertical datum and units are known.                                                                                                                                                                                                                              |
| Unconstrained vertical extent      | `null`, omitted values, symbols, or display conventions must not be used to imply infinity. Unconstrained extent should be represented explicitly.                                                                                                                                                                                        |
| Vertical direction                 | The extrusion should normally follow the z-axis of the CRS, unless another direction is explicitly defined and justified.                                                                                                                                                                                                                 |
| Derived solid geometry             | The resulting 3D parcel should be encoded as a solid or valid geometry from which a solid can be derived.                                                                                                                                                                                                                                 |
| Legal status                       | The dataset must distinguish an authoritative legal 3D parcel from a derived, analytical, approximate, or visualisation solid.                                                                                                                                                                                                            |
| CRS and vertical datum             | The horizontal CRS, vertical CRS, vertical datum, and units must be known before z-values, offsets, surfaces, or extrusion distances can be interpreted. The WA profile requires a horizontal CRS and provides WA-specific vertical datum handling for height values [(ICSM, 2023b)](https://icsm-au.github.io/3d-csdm/docs/wa-profile/). |
| Provenance                         | The dataset must record the source footprint, height reference, extrusion method, vertical limits, computation process, date, software/process, and responsible agent.                                                                                                                                                                    |
| Validation                         | The resulting solid should be closed, correctly oriented, consistent with the source footprint, consistent with the resolved vertical limits, and correctly classified by representation and legal status.                                                                                                                                |

## Primary actor

**Cadastral data editor**

## Supporting actors

Licensed surveyor, Landgate validator, cadastral database maintainer, strata plan examiner, 3D viewer user, title administrator, downstream spatial data user.

## Scenario

A WA cadastral parcel is currently represented by a surveyed 2D footprint. 
The parcel needs to be represented as a simple 3D solid for testing, visualisation, validation, spatial analysis, or future 3D cadastral exchange.

The editor selects the 2D parcel footprint as the horizontal extrusion shape. 
The editor, or the source dataset, must also identify the height reference or extrusion base. 
For example, the footprint may represent a parcel at ground level, a second-storey floor level, a reference surface, an AHD height, or a building surface.

The editor then supplies or confirms an extrusion rule, such as:

| Extrusion input                    | Example                                                                                                                                       |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Source parcel                      | Standard WA 2D cadastral parcel                                                                                                               |
| Base shape                         | 2D cadastral parcel polygon                                                                                                                   |
| Extrusion base or height reference | `groundLevel`, `surfaceLevel`, `floorLevel`, `lowestGroundFloorUpperSurfaceLevel`, `AHD`, `buildingSurface`, or `boundaryPlane`               |
| Direction                          | Positive z-axis                                                                                                                               |
| Lower limit                        | `zMin = 0.0 m AHD`, or `groundLevel - 8.0 m` once ground level is resolved                                                                    |
| Upper limit                        | `zMax = 20.0 m AHD`, or `floorLevel + 12.0 m` once floor level is resolved                                                                    |
| Alternative distance rule          | Extrude 20 m upward from an identified and computable base surface                                                                            |
| Vertical extent status             | `legallyDefined`, `jurisdictionalDefault`, `derivedForVisualisation`, `unconstrainedAbove`, `unconstrainedBelow`, or another controlled value |
| Output geometry                    | Closed 3D solid or solid derivable from the base geometry and extrusion rule                                                                  |
| Output status                      | Authoritative 3D, derived cadastral solid, analytical solid, approximate solid, or visualisation solid                                        |

The dataset creates a solid only where the input information is sufficient to compute a closed volume. 
The resulting solid is linked back to the source 2D parcel, height reference, extrusion rule, vertical limits, source descriptions, and provenance.

The 3D CSDM geometry model includes properties relevant to this pattern, including `base surface`, `boundary`, `extension`, `isOutward`, and `extrusion`. 
The model describes `extension` as the extension of an extruded geometry in the defined orientation, using the units of the coordinate system of the base geometry, and describes `extrusion` as the description of extrusion requirements, typically a distance [(ICSM, 2023a)](https://icsm-au.github.io/3d-csdm/docs/).

## Preconditions

1. The source 2D parcel footprint is valid, closed, and authoritative for the horizontal parcel extent.
2. The parcel has a legal appellation, parcel type, parcel purpose, CRS, and survey provenance.
3. The parcel has a declared representation status, such as `2D`, `2.5D`, `height-described`, `jurisdictionallyBounded`, `derived3D`, or `authoritative3D`.
4. The parcel has a declared vertical extent status, such as `undefined`, `notSupplied`, `notApplicable`, `unconstrainedAbove`, `unconstrainedBelow`, `jurisdictionalDefault`, `legallyDefined`, `derivedForVisualisation`, or `authoritative3D`.
5. The extrusion base or height reference is identified, such as `groundLevel`, `surfaceLevel`, `floorLevel`, `lowestGroundFloorUpperSurfaceLevel`, `AHD`, `buildingSurface`, or `boundaryPlane`.
6. The upper and lower vertical limits, or the extrusion base and extrusion distance, are computable.
7. The horizontal CRS, vertical CRS or datum, units, source, and provenance are recorded.

## Proposed 3D CSDM modelling pattern

| Real-world or computational item   | Suggested 3D CSDM or WA profile representation                                                                                                                                                                    |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Source 2D parcel                   | `CadastralParcel`, usually a `PrimaryCadastralParcel`                                                                                                                                                             |
| Legal parcel name                  | `Appellation`                                                                                                                                                                                                     |
| Authoritative 2D footprint         | Parcel surface, polygon, boundary edges, surveyed lines, survey marks, or topology derived from the 2D parcel                                                                                                     |
| Extrusion footprint                | Base surface or boundary geometry derived from the 2D parcel                                                                                                                                                      |
| Extrusion base or height reference | WA profile or implementation-rule value such as `groundLevel`, `surfaceLevel`, `floorLevel`, `lowestGroundFloorUpperSurfaceLevel`, `AHD`, `buildingSurface`, `floorSurface`, `ceilingSurface`, or `boundaryPlane` |
| Extrusion direction                | Implementation rule, normally positive or negative z-axis                                                                                                                                                         |
| Extrusion distance                 | `extension`, extrusion description, height offset, or derived rule, where the base reference is computable                                                                                                        |
| Absolute upper limit               | `zMax`, where legally or operationally defined in a known vertical CRS or datum                                                                                                                                   |
| Absolute lower limit               | `zMin`, where legally or operationally defined in a known vertical CRS or datum                                                                                                                                   |
| Relative upper limit               | Height reference plus offset, with `zMax` computed only where the reference level or surface can be resolved                                                                                                      |
| Relative lower limit               | Height reference plus offset, with `zMin` computed only where the reference level or surface can be resolved                                                                                                      |
| Upper vertical description         | `zMaxDescription` or equivalent WA profile extension preserving legal or plan wording                                                                                                                             |
| Lower vertical description         | `zMinDescription` or equivalent WA profile extension preserving legal or plan wording                                                                                                                             |
| Unconstrained or undefined extent  | Explicit `verticalExtentStatus`, not a missing value, `null`, `%`, or infinity symbol                                                                                                                             |
| Resulting solid                    | Solid geometry or geometry from which a solid can be derived                                                                                                                                                      |
| Boundary faces                     | Derived side faces, top face, and bottom face, or equivalent topological construction                                                                                                                             |
| Source observations                | Survey marks, observed vectors, adopted vectors, parcel boundary observations, floor levels, surfaces, or built-form references                                                                                   |
| Legal status of vertical limits    | Parcel quality, parcel state, implementation attribute, or WA profile extension                                                                                                                                   |
| Derivation process                 | Computation or provenance activity                                                                                                                                                                                |
| WA metadata                        | Horizontal CRS, vertical datum, survey type, survey purpose, parcel type, parcel purpose, height reference, vertical extent status, and provenance                                                                |

## Main flow

1. _Select the source 2D parcel_  
   The editor selects a WA cadastral parcel with a valid 2D footprint, appellation, parcel type, parcel purpose, CRS, and survey provenance.

2. _Confirm the extrusion footprint_  
   The system confirms that the 2D parcel footprint is valid, closed, and suitable as the horizontal base shape for extrusion.

3. _Declare the representation status_  
   The dataset records whether the parcel is being represented as 2D, 2.5D, height-described, jurisdictionally bounded, derived 3D, or authoritative 3D.

4. _Declare the vertical extent status_  
   The dataset records whether the parcel’s vertical extent is undefined, not supplied, not applicable, unconstrained above, unconstrained below, jurisdictionally implied, legally defined, derived for visualisation, or authoritative 3D.

5. _Define the extrusion base or height reference_  
   The dataset identifies what the extrusion footprint represents vertically, such as `groundLevel`, `surfaceLevel`, `floorLevel`, `lowestGroundFloorUpperSurfaceLevel`, `AHD`, `buildingSurface`, `floorSurface`, `ceilingSurface`, or `boundaryPlane`.

6. _Define the vertical reference system_  
   The dataset identifies the vertical datum, vertical CRS, units, and reference surface needed to interpret any z-values, height offsets, surfaces, planes, or vertical limits.

7. _Record the height descriptions and source wording_  
   Where a title, plan, statute, Crown Grant condition, strata statement, or jurisdictional rule describes the upper or lower vertical extent, the dataset preserves that wording in `zMinDescription`, `zMaxDescription`, or equivalent description elements.

8. _Resolve the vertical limits_  
   The system determines whether the upper and lower limits are:

   - absolute values, such as `15.7 m AHD`;
   - relative expressions, such as `groundLevel - 60.96 m`;
   - offsets from a floor, ceiling, ground, or surface level;
   - boundary surfaces or planes;
   - jurisdictional defaults; or
   - unresolved descriptions.

9. _Confirm that a closed solid can be computed_  
   The system proceeds only if both the lower and upper bounding conditions are computable, or if a base surface and extrusion distance are computable. If the required inputs are not computable, the dataset records the height description and vertical extent status but does not generate a closed solid.

10. _Define the extrusion rule_  
    The editor defines or confirms the extrusion direction and either an extrusion distance, explicit upper and lower limits, resolved relative limits, or bounding surfaces.

11. _Generate the swept solid_  
    The system sweeps the 2D footprint between the resolved lower and upper limits, or from the base reference by the stated extrusion distance.

12. _Create derived boundary faces_  
    The system creates the base face, top face, and side faces needed to close the solid. Where topology is used, the system creates or references the required oriented faces, rings, edges, and nodes.

13. _Attach the solid to the cadastral parcel_  
    The resulting solid geometry is associated with the parcel as an authoritative 3D representation, derived cadastral solid, analytical solid, approximate solid, or visualisation solid.

14. _Record derivation provenance_  
    The dataset records the source footprint, height reference, vertical descriptions, resolved vertical limits, extrusion rule, CRS, vertical datum, computation method, software/process, date, and responsible agent. The WA profile requires a survey provenance bundle for a cadastral survey dataset [(ICSM, 2023b)](https://icsm-au.github.io/3d-csdm/docs/wa-profile/).

15. _Validate the result_  
    The system checks that the solid is closed, has valid face orientation, uses the correct vertical limits, remains consistent with the source 2D footprint, and is correctly classified by legal, derived, analytical, or visualisation status.

## Important modelling principles

### Do not use extrusion to invent legal 3D extent

The act of extruding a 2D parcel does not, by itself, create a legal 3D parcel. 
Legal status depends on the title, plan, statute, Crown Grant condition, strata statement, approved jurisdictional rule, or other authoritative source that defines the vertical extent.

An extruded parcel may be one of the following:

| Status                  | Meaning                                                                                                                                           |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Authoritative 3D parcel | The upper and lower limits are legally defined by title, plan, statute, Crown Grant condition, strata statement, or approved jurisdictional rule. |
| Derived cadastral solid | The solid is generated from known data, but is not itself the legal boundary unless the vertical limits are authoritative.                        |
| Analytical solid        | The solid supports validation, testing, spatial analysis, clash detection, or queries.                                                            |
| Approximate solid       | The solid is generated from incomplete, estimated, interpolated, or approximate values and must not be treated as authoritative.                  |
| Visualisation solid     | The solid is generated only for 3D display and must not be treated as legal geometry.                                                             |

### Generate solids only from computable inputs

A closed solid should only be generated where the dataset has sufficient information to compute the lower and upper bounding conditions. 
A height description may be legally important but still not computable until its reference level, surface, datum, or source rule is resolved.

For example:

| Source description                                                                      | Computability implication                                                                   |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| `RESTRICTED IN HEIGHT TO 15.7 METRES AHD`                                               | Computable if the vertical datum and units are known.                                       |
| `LIMITED IN DEPTH TO 60.96 METRES`                                                      | Not directly computable unless the relevant ground level or reference surface is known.     |
| `8 metres below and 12 metres above the upper surface level of the lowest ground floor` | Not directly computable unless the upper surface level of the lowest ground floor is known. |
| `groundLevel - 8.0 m`                                                                   | Computable only where `groundLevel` is defined by a resolvable surface or value.            |
| `floorLevel + 12.0 m`                                                                   | Computable only where the relevant floor level is defined.                                  |

### Treat `null`, omitted values, and infinity explicitly

The dataset should not treat omitted values or `null` as meaning infinity unless a WA profile or implementation rule explicitly defines that behaviour.

It is safer to distinguish the following cases using explicit status values:

| Case                      | Suggested meaning                                                                      |
|---------------------------|----------------------------------------------------------------------------------------|
| `notSupplied`             | No value was supplied in the source material or dataset.                               |
| `undefined`               | The vertical extent has not been defined for this parcel representation.               |
| `notApplicable`           | The concept does not apply to this parcel representation.                              |
| `unconstrainedAbove`      | The legal or jurisdictional source indicates that the parcel is not constrained above. |
| `unconstrainedBelow`      | The legal or jurisdictional source indicates that the parcel is not constrained below. |
| `jurisdictionalDefault`   | A jurisdictional default applies, and the source rule should be referenced.            |
| `legallyDefined`          | A legal source defines the vertical extent.                                            |
| `derivedForVisualisation` | A finite geometry has been generated for display or analysis only.                     |
| `authoritative3D`         | The parcel has a legally authoritative 3D extent.                                      |

Do not use `%`, the CP437 infinity symbol, or a text value such as `infinite` as a substitute for a controlled vertical extent status. 
Those forms may be useful for display, but they should not be the primary machine-readable rule.

A safer pattern is:

```json
{
  "zMin": null,
  "zMinStatus": "unconstrainedBelow",
  "zMinDescription": "No lower vertical constraint is defined by the source.",
  "zMax": 15.7,
  "zMaxStatus": "legallyDefined",
  "zMaxReference": "AHD",
  "zMaxDescription": "RESTRICTED IN HEIGHT TO 15.7 METRES AHD"
}
```

An alternative structured pattern is:

```json
{
  "verticalLimits": {
    "lower": {
      "value": null,
      "status": "unconstrainedBelow",
      "reference": null,
      "description": null
    },
    "upper": {
      "value": 15.7,
      "status": "legallyDefined",
      "reference": "AHD",
      "description": "RESTRICTED IN HEIGHT TO 15.7 METRES AHD"
    }
  }
}
```

The key rule is:

> `null` means there is no computable value. 
> It does not mean infinity. 
> Unconstrained extent should be represented by an explicit status such as `unconstrainedAbove` or `unconstrainedBelow`.

### Treat built geometry as legal only where the source says so

Built geometry can be part of the legal definition of a parcel where the plan, statute, title, strata statement, or approved cadastral rule defines the parcel boundary by reference to built elements.

Where built geometry is used only to visualise, approximate, or validate the parcel, it should be recorded as derived geometry and should not be treated as the legal parcel boundary.

## Alternative flows and edge cases

| Case                                                                     | Expected handling                                                                                                                                                                  |
|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Base footprint supplied but no height reference                          | Do not generate a solid. Record that the footprint is available but the extrusion base is undefined.                                                                               |
| Base footprint is `groundLevel`                                          | Extrude from the ground or terrain reference surface, if that surface is computable.                                                                                               |
| Base footprint is `surfaceLevel`                                         | Extrude from the named or modelled surface, if that surface is computable.                                                                                                         |
| Base footprint is `floorLevel`                                           | Extrude from the stated floor level. This supports second-storey or upper-level elements.                                                                                          |
| Base footprint is `lowestGroundFloorUpperSurfaceLevel`                   | Extrude from the upper surface level of the lowest ground floor, if that reference level is computable.                                                                            |
| Base footprint is AHD-based                                              | Use the stated vertical datum, units, and absolute height value.                                                                                                                   |
| Base footprint is a built surface                                        | Use the built surface only where the source supports it. Treat it as legal only where the legal source defines the boundary by that surface.                                       |
| Extrusion distance is supplied from a base reference                     | Generate the solid only if the base reference is computable.                                                                                                                       |
| `zMin` and `zMax` are both computable                                    | Generate the solid between the lower and upper limits.                                                                                                                             |
| Relative `zMin` / `zMax` descriptions are supplied                       | Do not compute the solid until the reference level, surface, plane, or datum is resolved.                                                                                          |
| Only `zMax` is supplied                                                  | Do not generate a closed solid unless a lower limit, base surface, extrusion distance, or jurisdictional rule is also supplied.                                                    |
| Only `zMin` is supplied                                                  | Do not generate a closed solid unless an upper limit, extrusion distance, bounding surface, or jurisdictional rule is also supplied.                                               |
| `zMin` or `zMax` is omitted                                              | Treat as no supplied computable value unless the implementation rule defines another meaning. Do not infer infinity.                                                               |
| `zMin` or `zMax` is `null`                                               | Treat as no computable value. Do not infer infinity. Check the corresponding status field.                                                                                         |
| Extent is unconstrained above                                            | Record `unconstrainedAbove`. Do not generate a finite legal solid unless a display or analysis clipping rule is applied and clearly identified as non-legal.                       |
| Extent is unconstrained below                                            | Record `unconstrainedBelow`. Do not generate a finite legal solid unless a display or analysis clipping rule is applied and clearly identified as non-legal.                       |
| Display clipping is used for an unconstrained extent                     | Mark the geometry as visualisation or analytical only, and record the clipping rule.                                                                                               |
| Source parcel has holes                                                  | Preserve holes during extrusion and create internal side faces.                                                                                                                    |
| Source parcel is multi-part                                              | Generate a multi-solid or separate solid members, depending on implementation rules.                                                                                               |
| Footprint is invalid or not closed                                       | Do not generate the solid until the 2D footprint is repaired or validated.                                                                                                         |
| Vertical datum is missing                                                | Do not treat height limits as computable or authoritative until the datum is supplied.                                                                                             |
| CRS units are missing or inconsistent                                    | Do not generate the solid until units and CRS interpretation are resolved.                                                                                                         |
| Solid is for visualisation only                                          | Mark the result as derived visualisation geometry, not legal parcel geometry.                                                                                                      |
| Solid is derived from approximate terrain or building data               | Mark the result as approximate or analytical unless the source rule makes that data authoritative.                                                                                 |
| Extruded solid overlaps another primary parcel                           | Flag as a validation issue unless the overlap is legally permitted or the parcel type allows it.                                                                                   |
| Parcel represents an easement, restriction, or other non-exclusive right | Consider a `SecondaryCadastralParcel`, because secondary parcels may overlap primary parcels and other secondary parcels [(ICSM, 2023a)](https://icsm-au.github.io/3d-csdm/docs/). |

## Acceptance-style outcomes

1. _The source footprint is valid_  
   The parcel has a valid, closed 2D footprint suitable for extrusion.

2. _The source footprint remains authoritative_  
   The 2D footprint remains the authoritative horizontal cadastral geometry unless a legally authoritative 3D extent is supplied.

3. _The representation status is explicit_  
   The dataset identifies whether the parcel is represented as 2D, 2.5D, height-described, jurisdictionally bounded, derived 3D, or authoritative 3D.

4. _The vertical extent status is explicit_  
   The dataset identifies whether the vertical extent is undefined, not supplied, not applicable, unconstrained, jurisdictionally implied, legally defined, derived for visualisation, or authoritative 3D.

5. _The extrusion base is explicit_  
   The dataset identifies whether the extrusion is based on ground level, surface level, floor level, AHD, a building surface, a boundary plane, or another controlled height reference.

6. _The extrusion rule is explicit_  
   The dataset records the extrusion direction and either the extrusion distance, upper and lower limits, resolved relative limits, or bounding surfaces.

7. _The vertical datum is recorded_  
   Any z-values, height offsets, vertical limits, or surfaces are linked to the applicable vertical datum, vertical CRS, units, and reference surface where required.

8. _Vertical descriptions are preserved_  
   Where a vertical limit is described in legal, plan, title, statutory, Crown Grant, strata, or jurisdictional wording, that wording is preserved in `zMinDescription`, `zMaxDescription`, or an equivalent description element.

9. _Relative height descriptions are not prematurely converted_  
   Relative descriptions such as `groundLevel - 8.0 m`, `floorLevel + 12.0 m`, or `8 metres below the lowest ground floor` are only converted to computable geometry where the reference level or surface is known.

10. _`null` is not treated as infinity_  
    Missing or `null` `zMin` / `zMax` values are not interpreted as unconstrained or infinite unless an explicit WA profile or implementation rule says so.

11. _Unconstrained vertical extent is explicit_  
    Where a parcel is unconstrained above or below, this is recorded using an explicit status, not by omitting a value or using a symbolic infinity value.

12. _A solid is generated only from computable inputs_  
    The system creates a closed solid only where the footprint, base reference, vertical limits, CRS, units, and provenance are sufficient.

13. _The resulting solid is valid_  
    The derived geometry is a closed 3D solid or a valid geometry from which a solid can be derived.

14. _The derived faces are consistent with the footprint_  
    The top, bottom, and side faces correspond to the source footprint, extrusion base, and extrusion rule.

15. _The legal status is clear_  
    The dataset identifies whether the extruded solid is legally authoritative, derived, analytical, approximate, or visualisation-only.

16. _Visualisation clipping is not confused with legal extent_  
    Any finite display geometry generated for an unconstrained parcel is clearly marked as visualisation-only or analytical.

17. _Built geometry is legal only where the source says so_  
    Building surfaces, wall surfaces, floor surfaces, ceiling surfaces, or other built elements are treated as legal parcel boundaries only where the relevant legal source defines the parcel by those elements.

18. _The derivation is traceable_  
    The dataset records the source parcel, height reference, extrusion parameters, vertical descriptions, resolved values, computation method, CRS, vertical datum, and responsible agent.

19. _The dataset supports WA profile validation_  
    The dataset uses WA profile values for CRS, vertical datum, survey type, survey purpose, parcel type, parcel purpose, height reference descriptions, vertical extent status, and provenance.

## Out of scope
This use case does not define the final WA profile schema for height descriptions, vertical extent status, height reference vocabulary, or controlled values. 
It identifies the requirements that the WA profile or implementation rules should satisfy when those values are used to generate an extruded solid.

This use case also does not decide whether `zMinDescription`, `zMaxDescription`, height reference, offset, vertical extent status, or derived-solid status should be implemented as direct properties, nested components, observations, quality elements, profile extensions, or another 3D CSDM-compatible pattern. 
That decision should be made as part of the WA profile and 3D CSDM implementation design.

This use case does not define the legal rules for whether a WA parcel is unconstrained above or below. 
It requires those rules to be explicit and traceable where they are applied.

## Summary

This use case is about the generation pathway from:

**authoritative 2D footprint**  
to **resolved height reference or extrusion base**  
to **computable vertical limits or extrusion distance**  
to **closed 3D solid**  
to **classified legal, derived, analytical, approximate, or visualisation geometry**.

The central requirement is that the dataset must not create a 3D solid from a footprint alone. 
It must also have a computable height reference, vertical extent status, vertical datum or surface, and traceable derivation rule.

A parcel should only become an authoritative 3D cadastral solid where the legal source supports that interpretation. 
Where the 3D geometry is generated from assumptions, defaults, terrain models, relative height expressions, clipping rules, or visualisation processes, the dataset must clearly record that it is derived and identify the source and method used.

## Open confirmation points

1. Controlled vocabulary for height references: Confirm the final WA profile vocabulary: `groundLevel`, `naturalSurface`, `finishedSurface`, `surfaceLevel`, `floorLevel`, `ceilingLevel`, `plateHeight`, `AHD`, `buildingSurface`, etc.

## References

- [ICSM (2023a) 3D Cadastral Survey Data Model (3D CSDM)](https://icsm-au.github.io/3d-csdm/docs/)
- [ICSM (2023b) WA profile of the 3D CSDM](https://icsm-au.github.io/3d-csdm/docs/wa-profile/)
- [Surround (2026) Represent a WA 2D parcel with height descriptions and derived 3D extent](./2-5d-liminal.md)
