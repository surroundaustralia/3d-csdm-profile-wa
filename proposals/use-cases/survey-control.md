# Use case: Encode a WA cadastral control network survey as a 3D CSDM dataset

## Revision history

| Version | Date       | Author        | Summary of change                  |
|---------|------------|---------------|------------------------------------|
| 0.1     | 2026-06-08 | Andrew Hunter | Initial draft prepared for review. |

## Description

A WA cadastral control network survey may need to be exchanged, validated, reviewed, and reused as a 3D CSDM dataset even where the dataset does not create, alter, or encode cadastral parcels.

The authoritative content of the dataset is survey control information. 
This includes survey marks, geodetic reference marks, monument information, GNSS and terrestrial observations, reduced 3D observations, adjusted values, adopted values, calculated values, network adjustment information, quality and uncertainty information, supporting records, equipment and procedure metadata, and survey provenance.

This use case is particularly relevant where a control network is required for a subdivision or survey-strata development in a Special Survey Area. 
WA regulation provides that subdivisions in Special Survey Areas must contain a control survey network. 
The field record must include a graphic summary of the control network, observed values, adjusted/adopted values, and connections between the control network and the re-establishment survey [(WA 2026)](https://www.legislation.wa.gov.au/legislation/statutes.nsf/RedirectURL?OpenAgent&query=mrdoc_25554.pdf).

For this use case, a graphic summary must be able to be derived from the survey data but is not required to be included as a separate object in the survey dataset.

Landgate’s GNSS guidance also states that cadastral GNSS surveys should generally be connected to the State Geodetic Network. 
The field record should identify methods, equipment, control relationships, coordinate systems, and height derivation where relevant [(Landgate 2021)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/survey-practice-guidelines/spp-06-surveys-using-global-navigation-satellite-systems-gnss/).

The central requirement is that the WA profile should support a valid cadastral survey dataset where no `PrimaryCadastralParcel`, `SecondaryCadastralParcel`, parcel aggregate, or parcel geometry is submitted.

Survey control observations that form part of a `SurveyNetwork` or `Traverse` must be encoded as reduced 3D observations, as defined in the modelling principles.

## Relationship to existing use cases

This use case is a companion use case. 
It defines how a control-network-only cadastral survey dataset can be encoded.

Other parcel-defining use cases may reference this control network as source evidence or provenance, but they remain responsible for encoding their own parcel geometry, legal boundary interpretation, topology, and lifecycle information.

## Relationship to 3D CSDM and the WA profile

The 3D CSDM `CadastralSurveyDataset` is broad enough to transfer survey observations without necessarily defining parcels. 
It includes `points`, `vectorObservations`, `adoptedObservations`, `referencedCSD`, `surveyProvenance`, `horizontalCRS`, `verticalDatum`, `surveyType`, and `Survey Purpose` [(ICSM 2023)](https://icsm-au.github.io/3d-csdm/docs/wa-profile).

The WA profile includes survey-feature classes for `SurveyPoint`, `SurveyMark`, `CadastralMark`, `GeodeticReferenceMark`, `Monument`, `ObservedVector`, `AdoptedVector`, and `SurveyedLine`. 
It also includes observation classes such as `SurveyNetwork`, `DirectPositionObservation`, `SurveyVectorObservation`, `Traverse`, `Computation`, and `VectorObservations` [(ICSM 2023)](https://icsm-au.github.io/3d-csdm/docs/wa-profile).

A `SurveyMark` is defined as a physically located object that defines a point on the surface of the Earth and is stable during survey operations. 
A `GeodeticReferenceMark` is a kind of `SurveyMark` that connects a survey to the jurisdictional geodetic network, either horizontally, vertically, or both [(ICSM 2023)](https://icsm-au.github.io/3d-csdm/docs/wa-profile).

## Use case statement

**As a licensed surveyor or Landgate validation officer, I want to encode a WA cadastral control network survey as a 3D CSDM dataset, so that control marks, geodetic reference marks, observations, computations, adjusted values, adopted values, supporting reports, and provenance can be exchanged and validated without requiring cadastral parcels to be created in the dataset.**

## Purpose

The purpose of this use case is to test that the 3D CSDM and WA profile can support a control-network-only cadastral submission.

The dataset should allow Landgate to:

| Dataset concern                                                       | Why it matters                                                                                                                                                                                                                                 |
|-----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Control-network-only dataset                                          | A cadastral survey dataset may be submitted for survey control without creating or changing parcels.                                                                                                                                           |
| Control marks and geodetic reference marks                            | Existing, new, re-established, replaced, searched, validated, or adopted control marks must be identifiable, and marks used to connect the survey to the State Geodetic Network must be distinguishable from ordinary cadastral control marks. |
| Monument information                                                  | Physical marks require monument form, condition, state, stability, access, and reference information where required.                                                                                                                           |
| Reduced 3D observations                                               | Control network and traverse observations must be spatially usable in 3D, not merely recorded as raw field readings or 2D-only measurements.                                                                                                   |
| Observed, reduced, adjusted, adopted, calculated, and reported values | Raw observations must not be confused with reduced 3D observations, adjusted network values, adopted geodetic values, calculated values, or reported values.                                                                                   |
| Computations, adjustment, and quality                                 | Network adjustment, least-squares processing, closure, misclose, uncertainty, covariance, redundancy, residuals, and computation outputs must be linked to their source observations and methods.                                              |
| CRS and vertical datum                                                | Horizontal CRS, vertical datum, units, geoid/ellipsoid conversion, and transformation provenance must be recorded where relevant.                                                                                                              |
| Survey procedure and equipment                                        | Method, instrument, sensor, antenna, calibration, software, and processing metadata support legal traceability and validation.                                                                                                                 |
| Supporting documents                                                  | Field records, network summaries, station summaries, calibration records, GNSS reports, adjustment reports, certificates, and correspondence may be required as supporting information.                                                        |
| Provenance                                                            | Surveyor, survey activity, equipment, observations, computations, reports, certificates, validation, and lodgement events must be traceable.                                                                                                   |
| Later reuse                                                           | A later parcel-defining cadastral survey should be able to reference the control network dataset rather than duplicating untraceable local control values.                                                                                     |
| WA profile conformance                                                | The dataset should use WA profile values for survey purpose, survey type, CRS, vertical datum, point purpose, monument form, monument state, monument condition, and provenance.                                                               |

## Primary actor

Licensed cadastral surveyor or Landgate validation officer.

## Supporting actors

Landgate validator, survey firm, Special Survey Area coordinator, downstream cadastral surveyor, and 3D CSDM dataset consumer.

## Scenario

A licensed surveyor prepares a cadastral control network survey for a WA project.

The survey may support:

| Scenario element                         | Example                                                                                                    |
|------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Special Survey Area control              | A control network required for a subdivision or survey-strata development in a Special Survey Area.        |
| GNSS cadastral control                   | A GNSS survey connected to the State Geodetic Network.                                                     |
| Conventional traverse control            | A terrestrial traverse network supporting cadastral re-establishment or later subdivision.                 |
| Mixed GNSS and terrestrial network       | A combined GNSS and total station network, adjusted together or linked through adopted control values.     |
| Deferred final marking                   | A control survey that supports later final marking or staged survey completion.                            |
| Survey-strata final control field record | A final control field record associated with survey-strata or subdivision control requirements.            |
| Later parcel survey support              | A control network lodged before a later parcel-defining dataset, which will reference the control network. |

The dataset contains control marks, observations, adjusted values, adopted values, computations, reports, and provenance.

It does not submit cadastral parcel features, parcel topology, built-strata solids, survey-strata lots, easements, mining tenements, or other parcel-defining spatial objects.

The validation process must confirm that the dataset is a valid cadastral survey dataset even though no parcel collection is present.

## Modelling principles

### 1. Treat a control network as cadastral survey evidence, not parcel geometry

A control network survey may be part of the cadastral survey framework even where it does not define any parcel.

The dataset should therefore be valid where its main content is:

- points;
- marks;
- observations;
- adopted observations;
- computations;
- adjustment outputs;
- CRS and datum metadata;
- reports; and
- provenance.

The dataset must not create placeholder `PrimaryCadastralParcel`, `SecondaryCadastralParcel`, `ParcelAggregate`, or parcel geometry solely to satisfy validation.

If an implementation requires a `parcels` collection, the preferred behaviour should be an explicitly empty collection rather than a dummy parcel.

### 2. Distinguish mark roles

The dataset should distinguish:

- State Geodetic Survey Marks;
- Standard Survey Marks;
- Bench Marks;
- Permanent Survey Marks;
- Reference Marks;
- cadastral control marks;
- temporary control marks;
- instrument setup points;
- adopted survey points; and
- newly placed or re-established marks.

A mark used for geodetic datum or checking should be distinguishable from a local cadastral control mark.

### 3. Separate raw, reduced, adjusted, adopted, calculated, and reported values

A control network dataset must preserve the difference between:

| Value type             | Meaning                                                                         |
|------------------------|---------------------------------------------------------------------------------|
| Raw observed value     | A raw observation collected as part of the control survey field procedure.      |
| Reduced observed value | A corrected and reduced 3D observation used in the control network or traverse. |
| Adjusted value         | A value produced by network adjustment or computation.                          |
| Adopted value          | A value accepted from a prior survey, geodetic record, or authoritative source. |
| Calculated value       | A value derived by computation from other observations or adopted values.       |
| Reported value         | A value present in a supporting report, summary, or station record.             |

The dataset should not collapse these into a single coordinate, vector, or distance without source and method metadata.

Observation reduction is the process used to apply corrections to raw observations that account for instrument effects, observational procedures, atmospheric conditions, curvature and refraction, temperature and pressure variation, scale factors, projection effects, and other relevant systematic or natural/physical influences.

For this use case, an observed value that forms part of a `SurveyNetwork` or `Traverse` is not intended to mean an unreduced raw field reading. 
Raw readings may be linked through field records, instrument files, GNSS logs, or supporting documents. 
The 3D CSDM observation used in the control network or traverse should be the reduced 3D observation that can participate in network validation, adjustment, review, and later reuse.

### 4. Preserve the geodetic connection

Where the survey connects to the State Geodetic Network, the dataset should identify:

- the geodetic marks used;
- the connection observations;
- the adopted coordinates or heights;
- the CRS and datum;
- any transformation or geoid/ellipsoid conversion;
- the source of adopted values; and
- the role of each mark as datum, check, constraint, or supporting observation.

### 5. Record methods, equipment, processing, and provenance

The dataset should record survey procedure, equipment, processing, and provenance metadata where required for traceability.

This may include GNSS method, occupation time, antenna type and height, total station details, calibration records, instrument serial numbers, baseline processing software, network adjustment software, adjustment method, field procedure, quality information, uncertainty information, and the activity that produced each observation or result.

### 6. Support later reference by parcel-defining datasets

A later subdivision, survey-strata, built-strata, tunnel, infrastructure, mining, water-boundary, or other parcel-defining dataset may use the control network.

That later dataset should reference the control network dataset through `referencedCSD`, provenance, supporting documents, or another agreed pattern rather than duplicating untraceable values.

### 7. Control network and traverse observations are reduced 3D observations

Survey control observations that form part of a control network or traverse must be represented as reduced 3D observations.

For this use case, a reduced 3D observation is an observation that has been processed from raw field measurements into an appropriate usable 3D form. 
It may be represented as a 3D polar observation, a reduced horizontal-and-vertical component observation, or a Cartesian 3D vector, provided the encoded values fully define the 3D relationship between the relevant survey points.

Examples include:

- a GNSS-derived 3D direct-position observation;
- a reduced GNSS baseline between two control marks;
- a terrestrial observation reduced to a 3D vector between survey points;
- a traverse leg reduced to horizontal and vertical components, or to an equivalent 3D vector; and
- a height difference observation reduced into the nominated vertical datum.

Acceptable reduced 3D observation forms include:

| Form                                                           | Required components                                                             | Description                                                                                     |
|----------------------------------------------------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| Bearing, vertical angle or zenith distance, and slope distance | Horizontal bearing; vertical angle or zenith distance; slope distance           | A polar 3D observation describing the direction and length of the observed line in 3D.          |
| Bearing, horizontal distance, and vertical distance            | Horizontal bearing; horizontal distance; vertical distance or height difference | A reduced observation where the horizontal and vertical components have already been separated. |
| Cartesian 3D vector                                            | `ΔX`, `ΔY`, `ΔZ`                                                                | A vector observation expressed directly as coordinate differences in the nominated CRS.         |

Each form must include enough metadata to allow the 3D relationship to be interpreted consistently. 
This includes units of measure, bearing reference, angle convention, vertical sign convention, vertical datum or height reference where relevant, and the start and target points of the observation.

Raw observations may still be retained or referenced as supporting evidence, but they should not be the only representation of a control network or traverse observation in the 3D CSDM dataset.

### 8. GNSS-observed control networks must show derived azimuths, angles, and ground-level distances

Where GNSS is used to observe a control network, the dataset must show the derived survey values needed to review the network in conventional cadastral survey terms.

For each GNSS-observed control line used in the network, the dataset should include or reference:

- the forward azimuth;
- the reverse azimuth;
- the mean azimuth;
- the mean ground-level distance;
- the method used to derive the ground-level distance from the GNSS observations; and
- the provenance of the calculation.

Where network angles are required, the angles should be calculated from the relevant mean azimuths.

These derived values do not replace the reduced 3D GNSS observations. 
They are required reported or computed values that allow the GNSS-observed control network to be reviewed, validated, and compared with conventional traverse or control-network information.

## Preconditions

1. A WA 3D CSDM dataset container exists or can be created.
2. The survey has a dataset identifier, survey purpose, survey type, CRS, and administration metadata.
3. The surveyor, firm, survey date, field activity, computation activity, and lodgement activity can be recorded.
4. Control marks, geodetic reference marks, temporary control points, or instrument setup points are known or can be recorded.
5. Observations, adopted values, adjusted values, or supporting reports are available.
6. The coordinate reference system and vertical datum are recorded where coordinates or heights are supplied.
7. Supporting documents such as field records, station summaries, GNSS reports, adjustment reports, certificates, or correspondence are available where required.
8. The dataset can be validated without parcel features.

## Proposed 3D CSDM modelling pattern

| Control survey concept                     | Suggested 3D CSDM representation                                                                | Notes                                                                                                                                                                                                                                               |
|--------------------------------------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Control-network dataset                    | `CadastralSurveyDataset`                                                                        | The dataset records survey control and observations. `parcels` should be absent, or empty only if required by implementation rules.                                                                                                                 |
| Survey purpose                             | `Survey Purpose` using WA profile vocabulary                                                    | Confirm the correct WA vocabulary value for cadastral control, SSA control, GNSS control, or equivalent.                                                                                                                                            |
| Survey type                                | `surveyType` using WA Survey Type vocabulary                                                    | Likely surveyed, computed, or mixed surveyed/computed depending on final vocabulary rules.                                                                                                                                                          |
| Existing State Geodetic Survey Mark        | `GeodeticReferenceMark`                                                                         | Used where the mark connects the survey to the State Geodetic Network.                                                                                                                                                                              |
| Existing cadastral control mark            | `SurveyMark` or `CadastralMark`                                                                 | Use the more specific subtype only where the WA profile supports the intended meaning.                                                                                                                                                              |
| New permanent control mark                 | `SurveyMark`, possibly `CadastralMark` or `GeodeticReferenceMark`                               | Use `GeodeticReferenceMark` only where the mark is intended to connect to or become part of the jurisdictional geodetic network.                                                                                                                    |
| Temporary control mark                     | `SurveyPoint` or `SurveyMark`                                                                   | If physically marked and stable during the survey, `SurveyMark` may be appropriate. If only an observed/setup point, `SurveyPoint` may be more appropriate.                                                                                         |
| Physical monument                          | `Monument`, linked using `monumentedBy`                                                         | `SurveyMark` requires a physical monument description [(ICSM 2023)](https://icsm-au.github.io/3d-csdm/docs/wa-profile).                                                                                                                             |
| Instrument setup                           | `InstrumentSetup`                                                                               | Used to describe instrument occupation/setup events.                                                                                                                                                                                                |
| GNSS direct position                       | `DirectPositionObservation`                                                                     | Suitable for observed positions in Cartesian space [(ICSM 2023)](https://icsm-au.github.io/3d-csdm/docs/wa-profile).                                                                                                                                |
| Reduced 3D survey control observation      | `SurveyVectorObservation`, `ObservedVector`, `QualifiedVector`, or agreed WA profile equivalent | Required for survey control observations that form part of a `SurveyNetwork` or `Traverse`. The observation should represent the reduced 3D relationship between survey points, not only the raw direction, distance, angle, or instrument reading. |
| Raw field measurement or instrument record | Supporting document, field record, provenance source, or computation input                      | May be referenced for traceability, but should not be the only encoded observation where the observation forms part of the control network or traverse.                                                                                             |
| Control network collection                 | `SurveyNetwork` or `VectorObservations`                                                         | `SurveyNetwork` is available as an observation collection, although its detailed definition is not yet provided in the profile documentation [(ICSM 2023)](https://icsm-au.github.io/3d-csdm/docs/wa-profile).                                      |
| Traverse                                   | `Traverse`                                                                                      | Use where observations are grouped as a connected traverse.                                                                                                                                                                                         |
| Adjusted values                            | `Computation` result, `QualifiedPosition`, `QualifiedVector`, or supporting report              | Confirm the preferred encoding pattern for adjusted values.                                                                                                                                                                                         |
| Adopted geodetic values                    | `adoptedObservations` or referenced survey/network record                                       | Preserve source metadata and the basis for adoption.                                                                                                                                                                                                |
| Network summary / adjustment report        | `Report` or supporting document linked through provenance                                       | Should include observed, reduced, adjusted, and adopted values.                                                                                                                                                                                     |
| GNSS-derived mean azimuth                  | Computed observation result, `Computation` result, or agreed WA profile equivalent              | Calculated from the forward and reverse azimuths after the reverse azimuth has been normalised to the same line direction.                                                                                                                          |
| GNSS-derived network angle                 | Computed observation result, `Computation` result, or network summary value                     | Calculated from the relevant mean azimuths.                                                                                                                                                                                                         |
| GNSS-derived mean ground-level distance    | Computed observation result, `Computation` result, or agreed WA profile equivalent              | Represents the ground-level distance used for control-network review, not an unlabelled grid, ellipsoidal, or slope distance.                                                                                                                       |
| Surveyor and certification                 | `surveyProvenance` bundle                                                                       | Survey provenance is mandatory for a `CadastralSurveyDataset` [(ICSM 2023)](https://icsm-au.github.io/3d-csdm/docs/wa-profile).                                                                                                                     |
| Later reuse by another CSD                 | `referencedCSD`, provenance source, or supporting document reference                            | Used when a later parcel-defining survey relies on this control network.                                                                                                                                                                            |

## Main flow

1. _Create the CSD container_  
   Create a `CadastralSurveyDataset` that declares the WA profile, survey purpose, survey type, horizontal CRS, vertical datum where applicable, administration unit, dataset identifier, date, and description.

   The description should state that the dataset is a cadastral control network survey and does not define cadastral parcels.

2. _Declare that no cadastral parcels are submitted_  
   Do not include `PrimaryCadastralParcel`, `SecondaryCadastralParcel`, `ParcelAggregate`, or parcel geometry.

   The `parcels` collection should be omitted unless the implementation requires an explicitly empty collection.

3. _Identify the legal and procedural basis_  
   Record whether the control survey relates to a Special Survey Area, deferred final marking, survey-strata final control field record, subdivision control, GNSS connection, cadastral re-establishment support, or another WA cadastral control workflow.

   Where relevant, link the dataset to supporting field records, survey sheets, network summaries, certificates, approval letters, or Landgate correspondence.

4. _Record existing control and geodetic marks_  
   Encode existing State Geodetic Survey Marks, Standard Survey Marks, Bench Marks, Reference Marks, Permanent Survey Marks, and other existing control marks that were searched, used, validated, occupied, checked, or adopted.

   Existing geodetic marks used for datum or check purposes should be represented as `GeodeticReferenceMark` or another agreed WA profile equivalent.

5. _Record new or re-established control marks_  
   Encode newly placed, re-established, replaced, or validated control marks as `SurveyPoint` / `SurveyMark` features, with the appropriate WA purpose, state, monument form, monument condition, name, identifier, and geometry.

   Where a mark replaces a previous mark, include the relationship to the previous mark using the available replacement or provenance pattern.

6. _Record physical monument details_  
   For each physical mark, record the monument details using `Monument` and link it using `monumentedBy`.

   Include mark form, condition, stability, reference marks, access information, and any relevant station-summary details.

7. _Record reduced 3D observations_  
   Encode GNSS observations, terrestrial observations, traverse observations, directions, angles, distances, height differences, levelling observations, and direct-position observations.

   Where an observation forms part of a `SurveyNetwork` or `Traverse`, encode it as a reduced 3D observation using one of the permitted forms defined in the modelling principles.

   Each reduced 3D observation should identify the start point, occupied point, or observed feature; the target point or related survey point; the reduced 3D result; CRS and vertical datum where relevant; units of measure; observation procedure; sensor or instrument; reduction or processing method; uncertainty, residual, or quality information where available; and activity provenance.

   Where GNSS observations are used to form part of the control network, include the derived azimuth, angle, and ground-level distance values required by the GNSS-specific modelling principle.

   Raw field measurements, instrument observations, GNSS logs, and field notes may be linked as supporting evidence or computation inputs. 
   They should not replace the reduced 3D observation required for the control network or traverse.

8. _Record survey procedures and equipment_  
   Record the method used for each class of observation, such as static GNSS, RTK, VRS, total station traverse, levelling, baseline observation, or conventional terrestrial survey.

   Include equipment metadata, calibration details, serial numbers, antenna information, and processing software where required for traceability. 
   Landgate’s GNSS guidance requires equipment and method details in field notes for legal traceability [(Landgate 2021)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/survey-practice-guidelines/spp-06-surveys-using-global-navigation-satellite-systems-gnss/).

9. _Record adjusted, adopted, and calculated values_  
   Record both the observed measurements and the adjusted/adopted values used for the network.

   Where the adjustment is performed externally, link the resulting values to the computation or adjustment report through survey provenance.

   The dataset should preserve enough information to distinguish raw observed values from reduced observations, adjusted values, adopted geodetic values, calculated values, and report-backed values.

10. _Record network closure and quality information_  
    Include closure, misclose, uncertainty, covariance information, redundancy, residuals, adjustment quality, and validation information where available.

    Landgate SPP-03 identifies accuracy and closure expectations for cadastral surveys, including angular and linear misclosure checks [(Landgate 2022)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/survey-practice-guidelines/spp-03-survey-guidelines/).

11. _Record supporting documents_  
    Link field records, survey sheets, network summaries, station summaries, calibration records, GNSS reports, adjustment reports, certificates, approval correspondence, and other supporting documents.

    Supporting documents should be linked through provenance or document references rather than embedded as unstructured text unless no structured representation is available.

12. _Record provenance_  
    Create a `surveyProvenance` bundle that identifies the licensed surveyor, firm, survey activity, field survey, computation, adjustment, quality review, validation, supporting documents, certification, and lodgement activity.

    Link observations, computations, reports, and adopted values back to the activity or source from which they were generated.

13. _Validate the dataset_  
    Validate the dataset against the common 3D CSDM schema and the WA profile.

    The validation should confirm that the dataset is a valid survey dataset even though no cadastral parcel collection is present.

14. _Support later reuse_  
    If a later parcel-defining dataset uses this control network, the later dataset should reference this dataset through `referencedCSD`, provenance source, supporting document reference, or another agreed WA pattern.

## Alternative flows and edge cases

| Case                                                      | Expected handling                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|-----------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GNSS control survey only                                  | Record GNSS stations, datum stations, reduced 3D GNSS baselines or direct-position observations, antenna heights, occupation times or epochs, coordinate system, datum, height reference, processing method, and supporting GNSS reports. Where GNSS is used to observe the control network, show the forward and reverse azimuths, the mean azimuth derived from them, any angles calculated from the mean azimuths, and the mean ground-level distances used for network review. |
| Conventional traverse control survey                      | Record instrument setups, backsight/foresight relationships, and traverse grouping. Traverse legs that form part of the control network must be encoded as reduced 3D observations, with raw angles, distances, and field readings referenced as supporting evidence where required.                                                                                                                                                                                               |
| Mixed GNSS and terrestrial network                        | Preserve the different observation procedures and ensure that both GNSS and terrestrial observations used in the control network are reduced to a consistent 3D observation form before adjustment, validation, or later reuse.                                                                                                                                                                                                                                                    |
| Existing geodetic mark found disturbed                    | Record the mark searched, condition evidence, whether it was rejected/replaced/retained, any replacement or alternative datum mark, and the effect on the adopted network.                                                                                                                                                                                                                                                                                                         |
| Existing mark destroyed                                   | Record destroyed status, evidence, source, replacement relationship where applicable, and validation implication.                                                                                                                                                                                                                                                                                                                                                                  |
| Temporary control mark used only during survey            | Encode as `SurveyPoint`, `SurveyMark`, `InstrumentSetup`, or a combination depending on whether it was physically marked and stable during survey operations.                                                                                                                                                                                                                                                                                                                      |
| Control network references a previous CSD                 | Include a `referencedCSD` or equivalent supporting reference. Adopted values should not be copied without source metadata.                                                                                                                                                                                                                                                                                                                                                         |
| Adopted geodetic values are used                          | Record the source of adopted values, date, CRS, datum, authority, and whether the value was used as a datum, check, constraint, or comparison value.                                                                                                                                                                                                                                                                                                                               |
| Network adjustment performed outside the dataset          | Link adjusted results to the computation or adjustment report through provenance. Record software, method, date, responsible person, and input observations where possible.                                                                                                                                                                                                                                                                                                        |
| Special Survey Area final control field record            | Record the control network, final marking, field record, adjusted/adopted values, validation, certification evidence, and connections to re-establishment survey.                                                                                                                                                                                                                                                                                                                  |
| Control network supports a later parcel survey            | The later parcel-defining dataset should reference this control network dataset as a source, rather than duplicating the control survey as untraceable local coordinates.                                                                                                                                                                                                                                                                                                          |
| Raw observations supplied without reduced 3D observations | Treat as insufficient for a control network or traverse submission. Raw observations may support provenance, but the control network or traverse must include reduced 3D observations suitable for validation, adjustment, and reuse.                                                                                                                                                                                                                                              |
| Heights are included                                      | Record vertical datum, height reference, geoid/ellipsoid conversion where applicable, height observation method, and provenance.                                                                                                                                                                                                                                                                                                                                                   |
| Heights are not included                                  | Do not require a vertical datum unless the WA profile or implementation rule requires it.                                                                                                                                                                                                                                                                                                                                                                                          |
| Empty parcel collection required by software              | Use an explicitly empty `parcels` collection only if required by implementation rules. Do not create a dummy parcel.                                                                                                                                                                                                                                                                                                                                                               |

## Business rules

| Rule | Requirement                                                                                                                                                                                                                                                                                                 |
|------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BR1  | A control-network-only dataset must not require a cadastral parcel feature or create dummy parcels to satisfy validation.                                                                                                                                                                                   |
| BR2  | Every submitted control mark must have a stable identifier within the dataset.                                                                                                                                                                                                                              |
| BR3  | Every physical survey mark must be linked to a monument description where required.                                                                                                                                                                                                                         |
| BR4  | Every geodetic reference mark used for datum or checking must be distinguishable from ordinary cadastral control marks.                                                                                                                                                                                     |
| BR5  | The dataset must distinguish raw observed values, reduced 3D observations, adjusted values, adopted values, calculated values, and report-backed values.                                                                                                                                                    |
| BR6  | The dataset must identify the CRS and vertical datum used for coordinates and heights.                                                                                                                                                                                                                      |
| BR7  | Observations must identify the procedure or method used.                                                                                                                                                                                                                                                    |
| BR8  | Observations must identify the sensor/instrument where required by the profile or WA practice.                                                                                                                                                                                                              |
| BR9  | Adopted geodetic values must identify their source.                                                                                                                                                                                                                                                         |
| BR10 | Network adjustment results must be linked to the computation, report, or software process that generated them.                                                                                                                                                                                              |
| BR11 | Survey provenance must identify the licensed surveyor and relevant survey activity.                                                                                                                                                                                                                         |
| BR12 | Supporting documents must be linked, not embedded as unstructured text unless no structured representation is available.                                                                                                                                                                                    |
| BR13 | An SSA control network must include the information needed to support the network summary, including observed values and adjusted/adopted values.                                                                                                                                                           |
| BR14 | The absence of `parcels` must not cause validation failure for this use case.                                                                                                                                                                                                                               |
| BR15 | A later parcel-defining dataset should be able to reference the control network dataset as source evidence.                                                                                                                                                                                                 |
| BR16 | Every observation that forms part of a `SurveyNetwork` or `Traverse` must be encoded as a reduced 3D observation.                                                                                                                                                                                           |
| BR17 | A raw field measurement, instrument reading, GNSS log, field note, or adjustment input file must not be the only representation of a control network or traverse observation.                                                                                                                               |
| BR18 | A reduced 3D observation must use an allowed form: bearing/vertical angle or zenith distance/slope distance; bearing/horizontal distance/vertical distance; Cartesian `ΔX`, `ΔY`, `ΔZ`; or another agreed WA profile form.                                                                                  |
| BR19 | Each reduced 3D observation must include or inherit sufficient metadata to interpret it unambiguously, including start and target points, units, bearing reference, angle convention, vertical sign convention, CRS, vertical datum or height reference where relevant, method, instrument, and provenance. |
| BR20 | Reduced 3D observations must remain distinguishable from raw values, adjusted values, adopted values, calculated values, and report-backed values.                                                                                                                                                          |
| BR21 | Where GNSS is used to observe a control network, forward and reverse azimuths must be recorded or referenced for each relevant GNSS-observed control line.                                                                                                                                                  |
| BR22 | Where GNSS is used to observe a control network, a mean azimuth must be calculated from the forward and reverse azimuths after normalising the reverse azimuth to the same line direction.                                                                                                                  |
| BR23 | Where network angles are required for a GNSS-observed control network, those angles must be calculated from the relevant mean azimuths.                                                                                                                                                                     |
| BR24 | Where GNSS is used to observe a control network, mean ground-level distances must be shown for the relevant control lines.                                                                                                                                                                                  |
| BR25 | GNSS-derived azimuths, calculated angles, and mean ground-level distances must identify their calculation method, units, reference surface, and provenance.                                                                                                                                                 |
| BR26 | GNSS-derived mean azimuths, calculated angles, and mean ground-level distances must remain distinguishable from raw GNSS observations, reduced 3D observations, adjusted values, and adopted values.                                                                                                        |

## Validation requirements

The dataset should support validation of:

1. _Dataset structure_  
   The file is a valid 3D CSDM / WA profile dataset.

2. _No parcel content_  
   No `PrimaryCadastralParcel`, `SecondaryCadastralParcel`, parcel topology, or parcel geometry is present, except for an explicitly empty `parcels` collection if required by implementation rules.

3. _No dummy parcels_  
   The dataset does not contain artificial placeholder parcels created only to satisfy validation.

4. _Survey purpose_  
   The survey purpose uses an allowed WA profile value.

5. _Survey type_  
   The survey type uses an allowed WA profile value.

6. _CRS_  
   The horizontal CRS uses an allowed WA CRS value.

7. _Vertical datum_  
   A vertical datum is provided where heights are included or where required by the WA profile.

8. _Survey marks_  
   Each submitted `SurveyMark` has an identifier, name, purpose, geometry where required, and monument details where required.

9. _Geodetic reference marks_  
   State Geodetic Survey Marks used for datum/checking are encoded as `GeodeticReferenceMark` or an agreed equivalent.

10. _Monument details_  
    Physical form, state, and condition values use WA profile vocabularies.

11. _Observations_  
    Each observation has a result, procedure, sensor/instrument where required, observed property, feature of interest, and time/activity provenance where available.

12. _Vector observations_  
    Each vector observation identifies start and target points and relevant angle/distance components.

13. _Direct position observations_  
    GNSS-derived positions identify CRS, procedure, and quality/uncertainty where supplied.

14. _Reduced 3D control observations_  
    Every observation included in a `SurveyNetwork` or `Traverse` is encoded as a reduced 3D observation.

15. _No raw-only control observations_  
    A `SurveyNetwork` or `Traverse` does not rely only on raw angles, distances, GNSS logs, instrument readings, field notes, or supporting documents.

16. _Permitted reduced 3D observation form_  
    Each reduced 3D observation uses an allowed form and contains all required components for that form.

17. _Observation interpretation metadata_  
    Each reduced 3D observation includes or inherits the metadata needed to interpret it, including start and target points, units, bearing reference, angle convention, vertical sign convention, CRS, and vertical datum or height reference where applicable.

18. _Reduction provenance_  
    Each reduced 3D observation is linked to the method, procedure, computation, software, instrument, or activity that produced the reduced result.

19. _GNSS-derived azimuths_  
    Where GNSS is used to observe the control network, each relevant GNSS-observed control line includes or references forward and reverse azimuths.

20. _Mean azimuth calculation_  
    Where GNSS forward and reverse azimuths are supplied, the dataset includes a mean azimuth calculated after the reverse azimuth has been normalised to the same line direction.

21. _Angles from mean azimuths_  
    Where network angles are required for a GNSS-observed control network, the angles are calculated from the relevant mean azimuths.

22. _Mean ground-level distances_  
    Where GNSS is used to observe the control network, the dataset shows mean ground-level distances for the relevant control lines.

23. _GNSS calculation metadata_  
    GNSS-derived azimuths, angles, and mean ground-level distances include or inherit sufficient metadata to identify units, bearing reference, distance reference surface, calculation method, and provenance.

24. _Separation from raw and adjusted values_  
    GNSS-derived azimuths, calculated angles, and mean ground-level distances are distinguishable from raw GNSS observations, reduced 3D observations, adjusted values, adopted values, and report-backed values.

25. _Adjusted/adopted values_  
    Adjusted and adopted values are not confused with raw observations or reduced 3D observations.

26. _Computation and adjustment provenance_  
    Network adjustment outputs are linked to computation methods, software/processes, reports, and source observations.

27. _Provenance_  
    A `surveyProvenance` bundle is present and links surveyor, survey activity, observations, computations, reports, certification, and lodgement.

28. _Supporting documents_  
    Field records, network summaries, certificates, adjustment reports, GNSS reports, and station summaries are referenced.

29. _Network quality_  
    Closure, redundancy, uncertainty, covariance information, residuals, or adjustment outputs are present where required by WA practice.

30. _Profile conformance_  
    WA controlled vocabularies are used for survey purpose, survey procedure, point purpose, monument form, monument condition, monument state, CRS, and vertical datum.

31. _Later reference readiness_  
    The dataset has identifiers and provenance sufficient for a later parcel-defining CSD to reference it.

## Acceptance outcomes

1. _A control-network-only dataset is valid_  
   A WA 3D CSDM dataset can be submitted containing only control network survey information.

2. _No cadastral parcels are required_  
   The dataset validates without requiring `PrimaryCadastralParcel`, `SecondaryCadastralParcel`, parcel topology, parcel geometry, or a dummy parcel.

3. _Survey marks are identifiable_  
   The dataset clearly identifies all survey marks, control marks, temporary control points, and geodetic reference marks used or created.

4. _Geodetic connection is clear_  
   Landgate can determine how the control network connects to the State Geodetic Network.

5. _Monument information is recorded_  
   Physical marks are linked to monument form, condition, state, and supporting station information where required.

6. _Reduced 3D observations are preserved_  
   The dataset records the GNSS, terrestrial, traverse, levelling, baseline, direction, distance, height, and direct-position observations used to establish the network as reduced 3D observations where they form part of a `SurveyNetwork` or `Traverse`.

7. _Raw observations remain supporting evidence_  
   Raw field observations, GNSS logs, field notes, adjustment input files, and instrument records may be linked for traceability, but the validated control network or traverse is based on reduced 3D observations.

8. _Observed, reduced, adjusted, adopted, calculated, and reported values are distinct_  
   The dataset preserves observed, reduced, adjusted, adopted, calculated, and report-backed values as distinct information.

9. _Computation and adjustment are traceable_  
   Adjustment outputs, closure information, uncertainty, covariance information, computation reports, and processing software are linked to source observations and provenance.

10. _Supporting documents are linked_  
    Field records, network summaries, station summaries, calibration records, GNSS reports, adjustment reports, certificates, and correspondence can be referenced.

11. _Survey provenance is complete_  
    The dataset records the provenance of the survey, computations, reports, certification, validation, and lodgement.

12. _WA profile validation is supported_  
    The dataset uses WA profile values for CRS, vertical datum where required, survey purpose, survey type, point purpose, monument details, procedures, and provenance.

13. _Later cadastral surveys can reference the network_  
    A later parcel-defining cadastral survey can reference the control network dataset through `referencedCSD`, provenance source, supporting document reference, or another agreed pattern.

14. _GNSS-observed control networks show derived survey values_  
    Where GNSS is used to observe the control network, the dataset shows mean azimuths calculated from forward and reverse azimuths, angles calculated from those mean azimuths, and mean ground-level distances for the relevant control lines.

## Out of scope

This use case does not include:

- creation or amendment of cadastral parcel boundaries;
- encoding of any parcel-defining geometry, including built-strata, survey-strata, easements, mining tenements, tunnel, infrastructure, airspace, or water-boundary parcels; or
- topology tests between parcels.

If a downstream cadastral survey later uses this control network to define parcel boundaries, that later survey should be encoded as a separate cadastral survey dataset that may reference this control network dataset.

This use case does not define the final WA profile schema for control-network survey purpose, survey mark subtyping, adjusted values, survey network containers, station summaries, reduced 3D observation forms, or empty parcel collections.

It identifies the requirements that the WA profile or implementation rules should satisfy.

## Open confirmation points

1. What WA survey purpose value should be used for a cadastral control network survey, SSA control survey, GNSS control survey, or equivalent?
2. Should temporary control marks be encoded as `SurveyMark`, `SurveyPoint`, `InstrumentSetup`, or a combination?
3. Should the preferred network container pattern use `SurveyNetwork`, `VectorObservations`, `Traverse`, or a combination?
4. What is the preferred structured encoding for adjusted values: observation results, computation results, adopted observations, qualified vectors, qualified positions, or report-backed values?
5. Should least-squares adjustment metadata be represented as a `Computation`, a `Report`, or both?
6. Should station summaries be encoded as structured mark metadata, supporting documents, or both?
7. Should reference marks associated with SSMs/BMs be separate `SurveyMark` features, monument metadata, or supporting station-summary content?
8. Should the WA profile explicitly allow omission of `parcels`, or require an empty `FeatureCollection` for no-parcel datasets?
9. Should a control network dataset have its own lifecycle state, especially where it is lodged before a later parcel-defining survey?
10. What minimum adjustment quality information should be required for a control network dataset?
11. What metadata is required for GNSS equipment, antennas, occupation times, processing software, and calibration records?
12. What is the preferred WA profile encoding for a reduced 3D observation: `SurveyVectorObservation`, `ObservedVector`, `QualifiedVector`, `DirectPositionObservation`, or another agreed pattern?
13. What minimum components must a reduced 3D observation contain: delta east/north/height, bearing/distance/height difference, start/end 3D coordinates, covariance matrix, or another form?
14. Should raw field measurements be allowed inside the structured CSDM observation model, or should they be referenced only through supporting documents and provenance?
15. How should the dataset distinguish a reduced observed 3D vector from an adjusted 3D vector?
16. Should the WA profile define a controlled list of reduced 3D observation forms?
17. Should reduced 3D observation forms be identified by an explicit property, such as `observationForm`, `resultType`, or `vectorForm`?
18. What bearing reference should be required or allowed: grid bearing, true bearing, magnetic bearing, or locally defined bearing?
19. Should vertical angle and zenith distance be separate declared forms, or should they be treated as alternative angle conventions for the same reduced 3D observation form?
20. Should GNSS-derived forward azimuth, reverse azimuth, mean azimuth, calculated angle, and mean ground-level distance be encoded as structured observation results, computation results, or supporting network-summary values?
21. What convention should be used for normalising reverse azimuths before calculating the mean azimuth?
22. Should mean azimuths be calculated before or after network adjustment?
23. Should mean ground-level distance be derived from ellipsoidal distance, grid distance, slope distance, or another defined distance form?
24. What metadata is required to distinguish ground-level distance from grid distance, ellipsoidal distance, slope distance, and horizontal distance?

## Summary

This use case tests an important non-parcel 3D CSDM scenario.

A cadastral control network survey is still a cadastral survey dataset, but its primary content is survey control, marks, observations, computations, adjusted values, adopted values, supporting reports, and provenance.

The central requirement is that the WA profile should support a valid CSD submission where `parcels` are absent and the authoritative content is the control network.

For observations that form part of a `SurveyNetwork` or `Traverse`, the authoritative observation content should be reduced 3D observations. 
Raw field measurements may be retained as supporting evidence, but the control network or traverse should be encoded in a 3D form that supports validation, adjustment, review, and later reuse.

A reduced 3D observation does not need to be stored in only one mathematical form. 
It may be represented as bearing, vertical angle or zenith distance, and slope distance; as bearing, horizontal distance, and vertical distance; or as a Cartesian `ΔX`, `ΔY`, `ΔZ` vector. 
The essential requirement is that the observation fully defines a 3D relationship between survey points and includes the metadata needed to interpret that relationship consistently.

Where GNSS is used, derived mean azimuths, calculated angles, and mean ground-level distances must supplement the reduced 3D GNSS observations.

The key modelling principle is to distinguish control-network survey evidence from parcel-defining cadastral geometry; raw observations from reduced observations; reduced observations from adjusted, adopted, and calculated values; and structured survey information from supporting reports and provenance.

A later parcel-defining dataset may rely on this control network, but the control network dataset itself should not be forced to create or imply parcel geometry.

## References

- [ICSM (2023) Western Australia Profile of 3D CSDM](https://icsm-au.github.io/3d-csdm/docs/wa-profile)
- [ICSM (2020a) Guideline for Control Surveys by GNSS, SP 1 v.2.2](https://www.landgate.wa.gov.au/siteassets/documents/location-data-and-services/surveying/guideline-for-control-surveys-by-gnss_v2.2_0.pdf)
- [ICSM (2020b) Guideline for Conventional Traverse Surveys, SP 2 v.2.2](https://www.landgate.wa.gov.au/siteassets/documents/location-data-and-services/surveying/guideline-for-conventional-traverse-surveys_v2.2.pdf)
- [Landgate (2022) SPP-03 Survey Guidelines](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/survey-practice-guidelines/spp-03-survey-guidelines/)
- [Landgate (2021) SPP-06 Surveys using Global Navigation Satellite Systems (GNSS)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/survey-practice-guidelines/spp-06-surveys-using-global-navigation-satellite-systems-gnss/)
- [LSLB (2019) Survey Practice Guidelines for Subdivisions within Special Survey Areas](https://www.lslb.wa.gov.au/wp-content/uploads/2019/04/Version-1.1-2019-SSA_Guidelines.pdf)
- [WA (2026) Licensed Surveyors (General Surveying Practice) Regulations 1961](https://www.legislation.wa.gov.au/legislation/statutes.nsf/RedirectURL?OpenAgent&query=mrdoc_25554.pdf)
