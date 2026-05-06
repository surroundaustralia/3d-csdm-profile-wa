## Use case: Create a WA 3D CSDM extruded cadastral parcel

An extruded parcel is a derived 3D cadastral parcel, created from an authoritative 2D parcel footprint plus an extrusion rule.

This is supported by the 3D CSDM because a cadastral parcel may be a single or multi-area, or solid, above or below the surface of the earth, and its extent may be described by a surface, solid, and topological relationships. 
The 3D CSDM also defines a 3D spatial unit as a closed solid, multi-solid, or other valid geometry from which a solid can be derived [(ISCM, 2023)](https://icsm-au.github.io/3d-csdm/docs/).

### Description

A WA cadastral dataset contains a standard 2D cadastral parcel footprint. 
The footprint is used as the **base shape** for an extrusion. 
The extrusion is applied in the vertical direction, normally along the CRS z-axis, using either:

1. an extrusion distance; or
2. explicit upper and lower limits, such as `zMin` and `zMax`.

The result is a **derived 3D solid cadastral parcel**. 
The dataset must preserve the relationship between the original 2D parcel, the extrusion rule, the vertical limits, the resulting solid geometry, and the provenance of the derivation.

This is similar to a swept solid or swept path solid pattern, where a base geometry is swept along a direction to create a solid.

## Use Case statement

**As a cadastral data editor, I want to create a WA 3D cadastral parcel by extruding a 2D parcel footprint using defined vertical limits or an extrusion distance, so that a derived 3D solid can be represented, validated, exchanged, and traced in a 3D CSDM dataset.**

## Purpose

The purpose of this use case is to test whether a WA 3D CSDM dataset can create and manage an **extruded cadastral parcel** from a 2D parcel footprint.

The use case tests that the dataset can:

| Dataset concern        | Why it matters                                                                                                                                                                                                                                                                                 |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Base footprint         | The 2D cadastral parcel provides the authoritative extrusion shape.                                                                                                                                                                                                                            |
| Extrusion rule         | The dataset must record how the solid was created, including direction and distance or upper/lower limits.                                                                                                                                                                                     |
| Vertical direction     | The extrusion should normally follow the z-axis of the CRS, unless another direction is explicitly defined.                                                                                                                                                                                    |
| Upper and lower limits | `zMin` and `zMax` may be used as extent indicators, but their interpretation is implementation and context dependent [(ISCM, 2023)](https://icsm-au.github.io/3d-csdm/docs/).                                                                                                                  |
| Derived solid geometry | The resulting 3D parcel should be encoded as a solid or valid geometry from which a solid can be derived.                                                                                                                                                                                      |
| Legal status           | The dataset must distinguish an authoritative legal 3D parcel from a derived analytical or visualisation solid.                                                                                                                                                                                |
| CRS and vertical datum | The horizontal CRS and vertical datum must be known before z-values or extrusion distances can be interpreted. The WA profile requires a horizontal CRS and provides WA-specific vertical datum handling for height values [(ICSM, 2023)](https://icsm-au.github.io/3d-csdm/docs/wa-profile/). |
| Provenance             | The dataset must record the source footprint, extrusion method, vertical limits, computation process, and responsible agent.                                                                                                                                                                   |
| Validation             | The resulting solid should be closed, correctly oriented, and consistent with the source footprint and vertical limits.                                                                                                                                                                        |

## Primary actor

**Cadastral data editor**

## Supporting actors

Licensed surveyor, Landgate validator, cadastral database maintainer, 3D viewer user, title administrator, downstream spatial data user.

## Scenario

A WA cadastral parcel is currently represented by a surveyed 2D footprint. 
The parcel needs to be represented as a simple 3D solid for testing, visualisation, validation, or future 3D cadastral exchange.

The editor selects the 2D parcel footprint as the extrusion base. 
The editor then supplies an extrusion rule, such as:

| Extrusion input           | Example                                                                      |
|---------------------------|------------------------------------------------------------------------------|
| Base shape                | 2D cadastral parcel polygon                                                  |
| Direction                 | Positive z-axis                                                              |
| Lower limit               | `zMin = 0.0 m AHD`                                                           |
| Upper limit               | `zMax = 20.0 m AHD`                                                          |
| Alternative distance rule | Extrude 20 m upward from an identified surface                               |
| Output geometry           | Closed 3D solid or solid derivable from the base geometry and extrusion rule |

The dataset creates a solid by sweeping the 2D footprint between the lower and upper vertical limits. The resulting solid is linked back to the source 2D parcel and the extrusion rule.

The 3D CSDM geometry model includes properties relevant to this pattern, including `base surface`, `boundary`, `extension`, `isOutward`, and `extrusion`. 
The model describes `extension` as the extension of an extruded geometry in the defined orientation, using the units of the coordinate system of the base geometry, and describes `extrusion` as the description of extrusion requirements, typically a distance [(ISCM, 2023)](https://icsm-au.github.io/3d-csdm/docs/). 

## Proposed 3D CSDM modelling pattern

| Real-world or computational item | Suggested 3D CSDM representation                                                         |
|----------------------------------|------------------------------------------------------------------------------------------|
| Source 2D parcel                 | `CadastralParcel`, usually a `PrimaryCadastralParcel`                                    |
| Legal parcel name                | `Appellation`                                                                            |
| Extrusion footprint              | Base surface or boundary geometry derived from the 2D parcel                             |
| Extrusion direction              | Implementation rule, normally positive or negative z-axis                                |
| Extrusion distance               | `extension` or extrusion description                                                     |
| Upper limit                      | `zMax`, where legally or operationally defined                                           |
| Lower limit                      | `zMin`, where legally or operationally defined                                           |
| Resulting solid                  | Solid geometry or geometry from which a solid can be derived                             |
| Boundary faces                   | Derived side faces, top face, and bottom face                                            |
| Source observations              | Survey marks, observed vectors, adopted vectors, parcel boundary observations            |
| Derivation process               | Computation or provenance activity                                                       |
| WA metadata                      | Horizontal CRS, vertical datum, survey type, survey purpose, parcel type, parcel purpose |

## Main flow

1. _Select the source 2D parcel_:
   The editor selects a WA cadastral parcel with a valid 2D footprint, appellation, parcel type, parcel purpose, CRS, and survey provenance.

2. _Confirm the extrusion base_:
   The system confirms that the 2D parcel footprint is suitable as the base surface or boundary for extrusion.

3. _Define the vertical reference system_:
   The dataset identifies the vertical datum used for height values. This is essential if `zMin`, `zMax`, or height-based limits are used.

4. _Define the extrusion rule_:
   The editor defines either an extrusion distance or explicit upper and lower limits. The rule also states the extrusion direction, usually along the positive or negative z-axis.

5. _Generate the swept solid_:
   The system sweeps the 2D footprint along the extrusion direction to create a closed 3D solid.

6. _Create derived boundary faces_:
   The system creates the base face, top face, and side faces needed to close the solid.

7. _Attach the solid to the cadastral parcel_:
   The resulting solid geometry is associated with the parcel as its 3D representation.

8. _Record provenance_:
   The dataset records the source footprint, extrusion rule, vertical limits, CRS, vertical datum, computation method, software/process, date, and responsible agent. The WA profile requires a survey provenance bundle for a cadastral survey dataset [(ICSM, 2023)](https://icsm-au.github.io/3d-csdm/docs/wa-profile/). 

9. _Validate the result_:
   The system checks that the solid is closed, has valid face orientation, uses the correct vertical limits, and remains consistent with the source 2D footprint.

## Important modelling principle

The use case should make clear that an extruded parcel may be either:

| Status                  | Meaning                                                                                                                   |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
| Authoritative 3D parcel | The upper and lower limits are legally defined by title, plan, statute, or approved jurisdictional rule.                  |
| Derived cadastral solid | The solid is generated from known data but is not itself the legal boundary unless the vertical limits are authoritative. |
| Analytical solid        | The solid supports analysis, testing, validation, or spatial queries.                                                     |
| Visualisation solid     | The solid is generated only for 3D display and must not be treated as legal geometry.                                     |

This distinction is important because the act of extruding a 2D parcel does not, by itself, create a legal 3D parcel. The legal status depends on the source of the vertical limits and the jurisdictional rules applied.

## Alternative flows and edge cases

| Case                                                       | Expected handling                                                                                                                                                                 |
|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Extrusion distance is supplied                             | Generate the solid by sweeping the footprint by that distance in the stated direction.                                                                                            |
| `zMin` and `zMax` are supplied                             | Generate the solid between the lower and upper limits.                                                                                                                            |
| Only `zMax` is supplied                                    | Do not generate a full solid unless a lower limit or base surface is defined.                                                                                                     |
| Only `zMin` is supplied                                    | Do not generate a full solid unless an upper limit or extrusion distance is defined.                                                                                              |
| Source parcel has holes                                    | Preserve holes during extrusion and create internal side faces.                                                                                                                   |
| Source parcel is multi-part                                | Generate a multi-solid or separate solid members, depending on implementation rules.                                                                                              |
| Footprint is invalid or not closed                         | Do not generate the solid until the 2D footprint is repaired or validated.                                                                                                        |
| Vertical datum is missing                                  | Do not treat height limits as authoritative until the datum is supplied.                                                                                                          |
| Solid is for visualisation only                            | Mark the result as derived visualisation geometry, not legal parcel geometry.                                                                                                     |
| Extruded solid overlaps another primary parcel             | Flag as a validation issue unless the overlap is legally permitted or the parcel type allows it.                                                                                  |
| Parcel represents an easement or other non-exclusive right | Consider a `SecondaryCadastralParcel`, because secondary parcels may overlap primary parcels and other secondary parcels [(ISCM, 2023)](https://icsm-au.github.io/3d-csdm/docs/). |

## Acceptance-style outcomes

1. _The source footprint is valid_:
   The parcel has a valid 2D footprint suitable for extrusion.

2. _The extrusion rule is explicit_:
   The dataset records the extrusion direction and either the extrusion distance or upper and lower vertical limits.

3. _The vertical datum is recorded_:
   Any z-values or height limits are linked to the applicable vertical datum.

4. _The resulting solid is valid_:
   The derived geometry is a closed 3D solid or a valid geometry from which a solid can be derived.

5. _The derived faces are consistent with the footprint_:
   The top, bottom, and side faces correspond to the source footprint and extrusion rule.

6. _The legal status is clear_:
   The dataset identifies whether the extruded solid is legally authoritative, derived, analytical, or visualisation-only.

7. _The derivation is traceable_:
   The dataset records the source parcel, extrusion parameters, computation method, CRS, vertical datum, and responsible agent.

8. _The dataset supports WA profile validation_:
   The dataset uses WA profile values for CRS, vertical datum, survey type, survey purpose, parcel type, parcel purpose, and provenance.


