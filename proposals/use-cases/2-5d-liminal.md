## Represent a WA 2D parcel that can be promoted to 2.5D or derived 3D

## Description

A WA cadastral dataset contains parcels that are primarily represented by a surveyed 2D footprint. 
For a standard 2D parcel, the dataset does not explicitly define an upper or lower vertical boundary. 
However, the dataset must be capable of being extended to support a **2.5D surface representation** bounded by the 2D parcel footprint, and, where jurisdictional vertical limits are available, translated into a **derived 3D solid**.

This means the use case should test three related states:

| State                   | Description                                                                       | Legal status                                                                                                                 |
|-------------------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| **2D parcel**           | The parcel is represented by its surveyed footprint only.                         | Authoritative 2D cadastral representation.                                                                                   |
| **2.5D parcel surface** | The footprint is associated with a ground, terrain, height, or reference surface. | Adds vertical context but does not necessarily define a closed legal volume.                                                 |
| **Derived 3D solid**    | The footprint or 2.5D surface is combined with defined upper and lower z-limits.  | May be authoritative only if the z-limits are legally defined. Otherwise it is a derived visualisation or analytical volume. |

The 3D CSDM includes a `surface` property for the terrain or ground level of a parcel, a `terrain intersection` curve for a 3D parcel, and `zMax` / `zMin` values as upper and lower extent indicators. 
However, the model notes that the exact interpretation of `zMax` and `zMin` is implementation and context dependent, so the WA profile or implementation rules must state what those values mean [(ICSM, 2023)](https://icsm-au.github.io/3d-csdm/docs/).

## Use Case statement

**As a cadastral data editor, I want to model a WA 2D parcel in a way that can later support 2.5D surfaces and derived 3D solids, so that the parcel can be used in a 3D cadastre without changing its legal identity.**

## Purpose

The purpose of this use case is to test whether a WA 3D CSDM dataset can represent a standard 2D cadastral parcel in a way that remains extensible to 2.5D and 3D use.

The use case starts with the surveyed 2D parcel footprint as the authoritative cadastral geometry. 
It then tests whether the parcel can be associated with a bounded 2.5D terrain or reference surface, and whether legally defined, jurisdictional, title-based, statutory, or plan-based vertical limits can be recorded and used to derive a 3D solid.

The use case also tests that the dataset can distinguish between authoritative cadastral geometry, undefined vertical extent, jurisdictional assumptions, legally defined vertical limits, and derived geometry used for visualisation or analysis. 
This ensures that a standard 2D parcel is not incorrectly treated as a legally defined 3D volume unless the relevant vertical limits are supported by an appropriate source.

| Dataset concern                    | Why it matters                                                                                                                                                                                                          |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authoritative 2D footprint         | The parcel begins as a standard surveyed 2D cadastral parcel. The 2D footprint remains the authoritative cadastral geometry unless a legally defined 3D extent is supplied.                                             |
| Undefined vertical extent          | A standard 2D parcel should not be treated as having explicit upper or lower z-limits. The dataset must be able to record that the z-axis extent is undefined.                                                          |
| Extensibility to 2.5D              | The parcel may later be associated with a terrain, ground, or reference surface bounded by the 2D footprint, without automatically becoming a full 3D solid.                                                            |
| 2.5D surface boundary              | Any 2.5D surface must remain spatially constrained by the parcel footprint, unless a separate parcel, easement, or interest explicitly extends beyond it.                                                               |
| Jurisdictional z-limits            | If upper or lower vertical limits are supplied by legislation, title, plan notation, Crown grant condition, or jurisdictional rule, the source and interpretation of those limits must be recorded.                     |
| Derived 3D solid                   | A 3D solid may be generated from the 2D footprint or 2.5D surface and the applicable z-limits, but the dataset must identify whether that solid is authoritative, inferred, analytical, or visualisation-only.          |
| Legal versus derived geometry      | The dataset must distinguish legal cadastral geometry from geometry derived for display, analysis, or system processing.                                                                                                |
| Representation status              | The parcel should clearly state whether it is being represented as 2D, 2.5D, or derived 3D. This prevents a standard 2D parcel from being incorrectly promoted to a legally defined 3D parcel.                          |
| Vertical datum and CRS             | Any height, depth, or surface value must be linked to the relevant vertical datum and coordinate reference system.                                                                                                      |
| Survey evidence and provenance     | The footprint, surface, vertical limits, and any derived 3D solid must be traceable to survey observations, source plans, legal instruments, jurisdictional rules, computations, or derivation processes.               |
| Validation by representation level | Validation rules should depend on whether the parcel is 2D, 2.5D, or 3D. A 2D parcel should not fail because it lacks 3D shell closure, while a derived 3D solid should be checked for closure and z-limit consistency. |
| WA profile conformance             | The dataset should use WA profile values for CRS, vertical datum, parcel type, parcel purpose, survey type, survey purpose, provenance, and other jurisdiction-specific metadata where applicable.                      |

<!--
The WA profile is relevant because it constrains WA CSDM datasets with WA-appropriate values, including horizontal CRS and vertical datum.
-->

## Primary actor

Cadastral surveyor or cadastral data editor

## Supporting actors

Landgate validator, cadastral database maintainer, infrastructure authority, local government, title administrator, 3D viewer user, downstream spatial data user.

## Scenario

A WA cadastral dataset contains a standard land parcel currently represented by a surveyed 2D footprint. 
The parcel has a legal appellation, parcel type, parcel purpose, boundary observations, survey marks, source plan references, and survey provenance.

The dataset does not initially define an explicit upper or lower vertical boundary for the parcel. 
The parcel is therefore represented as a 2D cadastral parcel, not as a 2.5D parcel, and not as a closed 3D solid.

The dataset must also support an extension pathway. 
If additional information becomes available, the 2D parcel footprint may be used to bound a terrain, ground, or reference surface. 
This creates a 2.5D representation of the parcel, but it does not automatically create a legal 3D volume.

Where title-based, statutory, plan-based, Crown grant, or other jurisdictionally supported vertical limits are available, the dataset may record upper and lower z-limits. 
These limits may then be used with the 2D footprint or 2.5D surface to derive a 3D solid.

The dataset must distinguish between:

| Representation state            | Scenario meaning                                                                                                                                                             |
|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2D parcel                       | The parcel is represented only by its surveyed horizontal footprint. No vertical limits are defined.                                                                         |
| 2.5D surface-bounded parcel     | The parcel footprint bounds a terrain, ground, or reference surface. The parcel has vertical context, but not necessarily a closed legal volume.                             |
| Jurisdictionally bounded parcel | The parcel has upper and/or lower z-limits derived from a title, plan, statute, Crown grant condition, or approved jurisdictional rule.                                      |
| Derived 3D solid                | A solid is generated from the footprint, optional surface, and z-limits. The dataset records whether this solid is legally authoritative, analytical, or visualisation-only. |

The scenario tests that the parcel can move from a 2D representation to a 2.5D or derived 3D representation without changing the parcel identity, losing survey provenance, or implying legal vertical limits that are not supported by an authoritative source.

## Modelling principle

The modelling principle is:

> Do not assume a 3D solid merely because the dataset is 3D-capable.
> Generate a 3D solid only when the vertical limits are legally defined, jurisdictionally specified, or clearly marked as derived and non-authoritative.

This matters because terms / concepts such as the “upper atmosphere” and “lower mantle” or "infinite carrot" limits should not be treated as default cadastral limits unless WA law, Landgate practice, or the implementation profile explicitly defines them. 
For WA, Landgate material refers to traditional Crown Grant depth limits, commonly 12.19 metres (40') or 60.96 metres (200'), rather than an unlimited assumption [(Landgate, 2023)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/land-titles/land-ownership-land-titles-and-landgate/typ-01-types-of-title-to-land).
Landgate’s 3D plan guidance also distinguishes three-dimensional lots limited in height or depth from traditional Crown Grant depth limits [(Landgate, 2018)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/plan-preparation/spp-12-three-dimensional-plans/).

So, for the use case, it would be safer to use terms such as:

| Concept                                | Suggested wording                                |
|----------------------------------------|--------------------------------------------------|
| Undefined vertical extent              | `verticalExtentStatus = undefined`               |
| No legal z-limit supplied              | `zMin` / `zMax` omitted                          |
| Jurisdictional default applies         | `verticalExtentStatus = jurisdictionalDefault`   |
| Legally stated height/depth applies    | `verticalExtentStatus = legallyDefined`          |
| Generated only for display or analysis | `verticalExtentStatus = derivedForVisualisation` |
| Full 3D cadastral solid                | `verticalExtentStatus = authoritative3D`         |

## Proposed 3D CSDM Modelling pattern

| Real-world item                   | Suggested 3D CSDM representation                                                                     |
|-----------------------------------|------------------------------------------------------------------------------------------------------|
| Standard WA 2D parcel             | `CadastralParcel`, usually a `PrimaryCadastralParcel`                                                |
| Authoritative 2D footprint        | Parcel surface, polygon, boundary edges, surveyed lines, survey marks                                |
| 2.5D terrain or reference surface | `surface` or implementation-specific surface geometry bounded by the 2D footprint                    |
| Terrain intersection              | `terrain intersection` curve where the parcel’s 3D or surface representation intersects ground level |
| Upper jurisdictional limit        | `zMax`, if legally or jurisdictionally defined                                                       |
| Lower jurisdictional limit        | `zMin`, if legally or jurisdictionally defined                                                       |
| Derived 3D solid                  | Generated geometry using footprint/surface plus `zMin`/`zMax`, with derivation/provenance recorded   |
| Legal status of vertical limits   | Parcel quality, parcel state, implementation attribute, or WA profile extension                      |
| Survey evidence                   | Survey points, vector observations, adopted observations, computations                               |
| Provenance                        | Survey provenance bundle recording how the 2D, 2.5D, or 3D representation was derived                |

## Main flow

1. _Create the parcel as a standard 2D cadastral parcel_:
The parcel is first encoded using its surveyed 2D footprint, legal appellation, parcel type, parcel purpose, survey observations, CRS, and provenance.

2. _Declare the vertical extent status_:
The dataset records that the parcel’s z-axis extent is either undefined, jurisdictionally implied, legally defined, or derived for visualisation.

3. _Optionally attach a 2.5D surface_:
If terrain, ground level, design surface, or height surface information is available, the parcel may be associated with a bounded 2.5D surface. 
This surface is bounded by the parcel footprint but does not automatically create a legal 3D volume.

4. _Apply jurisdictional z-limits only where justified_:
If the jurisdiction, title, statute, plan notation, Crown Grant, or other legal source defines upper or lower limits, those limits may be encoded as `zMin` and `zMax`.

5. _Generate a derived 3D solid only when valid_:
A 3D solid may be generated by extruding or bounding the 2D footprint or 2.5D surface between `zMin` and `zMax`. 
The dataset must state whether that solid is authoritative, derived, approximate, or visualisation-only.

6. _Record derivation provenance_:
The dataset records whether the 3D solid came from survey observations, legal plan notation, Crown Grant depth limits, jurisdictional rules, terrain modelling, or a visualisation process.

7. _Validate according to representation level_:
A 2D parcel should not fail because it lacks 3D shell closure. 
A 2.5D parcel should be checked for footprint and surface consistency. 
A derived 3D solid should be checked for closure, z-limit consistency, volume derivation, and provenance.

## Acceptance outcomes

1. _The 2D footprint remains authoritative_:
The parcel retains its surveyed 2D cadastral footprint and legal identity.

2. _The dataset distinguishes 2D, 2.5D, and 3D states_:
The parcel clearly states whether it is a 2D parcel, a 2.5D surface-bounded parcel, or a derived 3D solid.

3. _Vertical limits are not invented_:
`zMin` and `zMax` are only populated where they come from a title, plan, statute, jurisdictional rule, or approved implementation rule.

4. _Jurisdictional limits are traceable_:
Where upper or lower limits are applied, their source and interpretation are recorded.

5. _Derived solids are identified as derived_:
If a 3D solid is generated from the footprint and z-limits, the dataset records whether the solid is legally authoritative or derived for analysis or visualisation.

6. _2.5D surfaces are bounded by the parcel footprint_:
Any terrain, ground, or reference surface associated with the parcel does not extend beyond the parcel’s 2D boundary unless explicitly modelled as a separate parcel or interest.

7. _Validation depends on the declared representation_:
A 2D parcel is validated as 2D, a 2.5D surface as surface-bounded, and a 3D solid as a closed volume.

So the use case is about a **representation pathway** from:

2D footprint **to** bounded 2.5D surface **to** jurisdictionally bounded derived 3D solid.
