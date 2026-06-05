# Use case: Encode a WA mining tenement survey dataset as a 3D CSDM mining profile

## Revision history

| Version | Date       | Author        | Summary of change                                                                                                                                                                                                                                                                                                                                                                                                                        |
|---------|------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.1     | 2026-06-01 | Andrew Hunter | Initial draft prepared for review. Added a WA-focused mining profile use case for representing mining tenement survey datasets in 3D CSDM, including mining tenement vocabularies, approved surveyor requirements, marking-out evidence, tenement boundary descriptions, GDA2020 lodgement, MTO digital lodgement, cadastral database integration, mine-plan context, and relationships to WA profile and common 3D CSDM model elements. |
| 0.2     | 2026-06-05 | Andrew Hunter | Amended the mining profile use case to require mining tenements to be encoded as `SecondaryCadastralParcel` features, not `PrimaryCadastralParcel` features. Added supporting modelling principles, validation requirements, acceptance outcomes, and open confirmation points for secondary parcel classification.                                                                                                                      |

## Description

A WA mining dataset may need to represent cadastral survey information for mining tenements and related mining interests in a form that can be exchanged, validated, integrated, and reviewed using the 3D CSDM common model and a WA mining profile.

For this use case, a mining tenement is treated as a secondary cadastral parcel. 
The WA mining profile should therefore require each mining tenement to be encoded as a `SecondaryCadastralParcel`, not as a `PrimaryCadastralParcel`.

The underlying land parcel, Crown parcel, reserve, road parcel, freehold parcel, pastoral lease area, or other base cadastral land object may remain a primary cadastral parcel or other appropriate cadastral object. 
The mining tenement is represented as a secondary cadastral parcel because it is a mining-related tenure, right, licence, lease, or statutory interest that overlays, affects, constrains, or coexists with the underlying cadastral fabric.

The mining profile should sit beside the existing WA cadastral profile and should constrain mining tenements to `SecondaryCadastralParcel` representation. 
It should reuse common 3D CSDM concepts such as parcels, geometry, topology, survey observations, survey points, marks, provenance, source documents, and supporting documents. 
It should then add mining-specific vocabulary values and constraints for tenement type, tenement status, marking-out evidence, approved surveyor requirements, mining-specific boundary descriptions, Department lodgement requirements, and links to mine-plan or operational survey context where relevant.

Examples include:

- mining leases;
- general purpose leases;
- miscellaneous licences;
- prospecting licences;
- exploration licences;
- retention licences;
- special prospecting licences;
- mining tenement applications;
- surveyed and unsurveyed mining tenements;
- live, pending, surrendered, restored, amended, or forfeited tenements;
- mining-specific boundary marks, datum posts, notices, trenches, rows of stones, pegs, cairns, posts, or poles;
- tenements described from existing survey marks, prominent ground features, latitude/longitude, or MGA coordinates;
- partial surrender or amended tenement boundary datasets;
- mining tenement boundaries overlapping or interacting with cadastral parcels, Crown land, native title, reserves, water areas, infrastructure corridors, or other land interests;
- 3D or height-limited mining rights, subsurface mining infrastructure, voids, shafts, tunnels, or exclusion zones where the legal or survey dataset requires 3D representation;
- supporting mine-plan information such as plans, cross-sections, longitudinal sections, workings, quarry faces, underground voids, shafts, open pits, benches, and survey control where those objects support cadastral interpretation or boundary review.

This use case is focused on cadastral and tenure survey exchange. 
It does not attempt to replace an operational mine survey system, mine safety management system, geological model, production model, resource model, or full mine-plan compilation. 
It should, however, allow the 3D CSDM dataset to reference or include mining-domain evidence where that evidence is needed to support a tenement boundary, survey plan, digital lodgement, validation rule, or cadastral database integration outcome.

## Mining tenement classification requirement

For the WA mining profile, a mining tenement must be encoded as a `SecondaryCadastralParcel`.

A mining tenement must not be encoded as a `PrimaryCadastralParcel`.

The `PrimaryCadastralParcel` classification is reserved for the underlying primary cadastral fabric or other parcel types that the WA profile identifies as primary cadastral parcels. 
A mining tenement may overlap, affect, constrain, or coexist with those parcels, but it remains a secondary cadastral parcel in the mining profile.

This requirement should be implemented as a WA mining profile validation rule. 
A dataset should fail mining-profile validation if a feature with a mining tenement type is encoded as a `PrimaryCadastralParcel`.

## Relationship to existing use cases

This use case should be a companion use case, not a replacement for the existing set. It focuses on the mining-profile requirement to represent mining tenements as `SecondaryCadastralParcel` features with mining-specific vocabulary, survey evidence, marking-out evidence, lodgement metadata, affected-land relationships, and lifecycle history.

| Related use case                                                                                 | Relationship to this use case                                                                                                                                                                                                                                                                                                                                              |
|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Represent a WA 2D parcel with height descriptions and derived 3D extent                          | Provides general treatment of 2D, 2.5D, height-described, jurisdictionally bounded, and derived 3D representations. The mining profile may reuse these concepts for vertically limited mining tenements, subsurface rights, height/depth constraints, or derived 3D mining-related representations.                                                                        |
| Create a WA 3D CSDM extruded cadastral parcel from a 2D footprint and resolved height definition | Covers generation of a closed 3D solid from a footprint and computable vertical limits. The mining profile may use this pattern where a mining tenement or mining-related secondary parcel is legally defined by a footprint and explicit vertical limits, but extrusion should not be used to invent a mining-tenement volume where the legal source does not support it. |
| Create a WA 3D CSDM Terrain Intersection Curve                                                   | May support mining cases where a subsurface, vertically limited, or 3D mining-related parcel intersects terrain. It is a derived geometry pattern and is not the primary pattern for representing the mining tenement itself.                                                                                                                                              |
| Encode WA tunnels, subsurface infrastructure, and airspace parcels as 3D CSDM datasets           | Closely related for shafts, declines, tunnels, underground infrastructure, subsurface corridors, voids, exclusion zones, and 3D infrastructure interests. The mining profile should cross-reference that use case where a mining object is legally or operationally represented as a 3D volume, while keeping tenement geometry distinct from mine-operational geometry.   |
| Represent WA natural and general water boundaries as 3D CSDM datasets                            | Relevant where mining tenements interact with land covered by water, watercourse boundaries, HWM, ordinary high water line, water-related exclusions, Crown land, or affected parcels with natural boundaries. The mining profile should reference the water-boundary pattern rather than redefining natural-boundary evidence rules.                                      |
| Encode a WA multi-unit and/or multi-level built-strata scheme as a 3D CSDM dataset               | Generally separate, but relevant where a mining tenement, mining-related infrastructure, or subsurface interest affects strata land, a built-strata parent parcel, building-referenced parcel boundaries, easements, or structure-related evidence. The mining profile should not confuse building-referenced strata geometry with mining-tenement geometry.               |
| Represent WA strata wall-boundary definitions between adjoining built-strata lots                | Generally separate, but relevant where mining-related interests, support rights, encroachments, or infrastructure affect wall-defined built-strata lots. The wall-boundary use case provides detailed treatment of physical structure versus legal boundary, which may be useful when mining infrastructure is near or below built structures.                             |
| Encode a WA multi-unit, multi-level survey-strata scheme as a 3D CSDM dataset                    | Generally separate, but relevant where a mining tenement or mining infrastructure affects survey-strata lots, common property, easements, support rights, service corridors, or vertically limited strata elements. The mining profile should record affected-land relationships without recasting the mining tenement as a survey-strata parcel.                          |

## Use case statement

**As a cadastral data editor, approved mining tenement surveyor, or mining tenement administrator, I want to encode a WA mining tenement as a `SecondaryCadastralParcel` using a 3D CSDM mining profile, so that mining tenement boundaries, marking-out evidence, survey observations, tenement vocabulary values, GDA2020 coordinates, digital lodgement requirements, source documents, mine-plan context, validation rules, and lifecycle history can be represented, reviewed, exchanged, and integrated with WA cadastral and mining tenure systems without treating the mining tenement as a `PrimaryCadastralParcel`.**

## Purpose

The purpose of this use case is to test whether the 3D CSDM common model, the WA profile, and a proposed mining-domain profile can represent WA mining tenement survey data without overloading ordinary cadastral parcel vocabulary.

The mining profile should test:

| Dataset concern                           | Why it matters                                                                                                                                                                                                                                                                                                                                                                |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mining-specific parcel / tenement types   | Mining leases, general purpose leases, miscellaneous licences, prospecting licences, exploration licences, retention licences, and other mining interests require controlled vocabulary values under the `SecondaryCadastralParcel` pattern, distinct from ordinary primary land parcels, freehold parcels, Crown parcels, strata parcels, or other primary cadastral fabric. |
| Secondary cadastral parcel classification | A mining tenement should be encoded as a `SecondaryCadastralParcel`, not as a `PrimaryCadastralParcel`. This reflects that the mining tenement is a mining-related tenure, right, lease, licence, or statutory interest associated with land, rather than the underlying primary land parcel itself.                                                                          |
| Approved surveyor context                 | Mining tenement surveys may need to identify the approved surveyor, approval basis, instructions, report, field notes, and statutory authority for the survey.                                                                                                                                                                                                                |
| Marking-out evidence                      | Mining tenement applications and surveys may rely on datum posts, boundary posts, notices, trenches, rows of stones, pegs, cairns, poles, and existing survey marks.                                                                                                                                                                                                          |
| Tenement boundary description             | Mining tenement boundaries may be described from existing survey marks, prominent ground features, latitude/longitude, or MGA coordinates.                                                                                                                                                                                                                                    |
| Shape and boundary constraints            | Different mining tenement types may have specific shape, area, marking, or survey rules. These should be represented as validation constraints or profile-specific rules.                                                                                                                                                                                                     |
| Surveyed and unsurveyed tenure            | The dataset must distinguish surveyed tenements, unsurveyed tenements, pending applications, granted tenements subject to survey, amended tenements, and restored or surrendered tenements.                                                                                                                                                                                   |
| GDA2020 lodgement                         | WA mining survey lodgement currently requires survey coordinates in GDA2020 for integration with Landgate and Department systems.                                                                                                                                                                                                                                             |
| Digital lodgement through MTO             | The dataset should support electronic survey document and data lodgement through Mineral Titles Online or related digital processes.                                                                                                                                                                                                                                          |
| Spatial relationship to cadastral parcels | A mining tenement may overlap, affect, or be constrained by freehold land, Crown land, reserves, roads, water, native title, pastoral leases, or other cadastral interests.                                                                                                                                                                                                   |
| Surface and subsurface distinction        | A mining tenement may relate to minerals, surface access, subsurface workings, shafts, tunnels, voids, infrastructure, or exclusion zones. The dataset should state which geometry is cadastral tenure and which is operational mine geometry.                                                                                                                                |
| 3D geometry support                       | Some mining-related interests or supporting mine survey objects may require 3D geometry, such as shafts, stopes, tunnels, underground workings, pits, benches, exclusion volumes, or vertically limited areas.                                                                                                                                                                |
| Mine-plan context                         | Mine survey plans, cross sections, and longitudinal sections may provide supporting context, but should not automatically become cadastral parcel geometry.                                                                                                                                                                                                                   |
| Lifecycle events                          | Mining tenements may be applied for, marked out, surveyed, granted, amended, partially surrendered, restored, objected to, forfeited, or cancelled. The dataset should preserve lifecycle history.                                                                                                                                                                            |
| Provenance                                | Source legislation, regulations, Department instructions, survey reports, field notes, computations, survey control, coordinate transformations, lodgement history, and responsible agents must be traceable.                                                                                                                                                                 |
| Profile vocabulary governance             | A mining profile is likely to require its own controlled vocabularies while remaining compatible with the 3D CSDM common model and WA profile.                                                                                                                                                                                                                                |

## Explicit WA source requirements tested by this use case

This use case tests the following WA mining-survey requirements and translates them into 3D CSDM mining-profile requirements.

| WA source requirement                                                                                                                                                                                     | 3D CSDM mining-profile requirement                                                                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| The Mining Act 1978 and regulations apply to marking out and surveying mining tenements in Western Australia.                                                                                             | Record the mining legislative source, tenement type, survey purpose, marking-out status, and survey provenance.                        |
| The Department of Mines, Petroleum and Exploration (DMPE) publishes provisions, regulations, and directions for approved surveyors conducting mining tenement surveys, including limited marking surveys. | Record approved surveyor status, DMPE instructions, survey report, field notes, and compliance evidence.                               |
| Mining leases must be surveyed, although survey may occur after grant.                                                                                                                                    | Support lifecycle status values such as `application`, `markedOut`, `grantedSubjectToSurvey`, `surveyed`, `integrated`, and `amended`. |
| Certain tenements must be marked out before application unless an exception applies.                                                                                                                      | Record marking-out evidence, datum post, notice, posts, trenches, stones, pegs, and any marking-out exemption.                         |
| Mining tenement boundaries may be described from an existing survey mark, prominent ground feature, latitude and longitude, or MGA coordinates.                                                           | Support mining boundary-description source types and link them to observations, coordinates, marks, or adopted features.               |
| Boundary marks must be maintained.                                                                                                                                                                        | Record boundary mark type, mark condition, maintenance status, observation date, and responsible party where required.                 |
| Common posts may be used where adjoining tenements are sought or held by the same person.                                                                                                                 | Support shared boundary-mark relationships between adjacent mining tenements.                                                          |
| The DMPE adopted GDA2020 for mapping and requires authorised surveyors to lodge surveys in GDA2020 coordinates for integration with Landgate and Department systems.                                      | Require CRS metadata, coordinate reference system validation, transformation provenance, and GDA2020-compatible lodgement outputs.     |
| Digital datasets include mining tenements surveyed and unsurveyed, live and pending.                                                                                                                      | Support tenement survey status, tenure status, and lifecycle classification.                                                           |
| Mineral Titles Online provides digital transactions and tenement data access.                                                                                                                             | Support digital lodgement metadata, MTO transaction references, lodgement status, and document / data package references.              |

## Profile layering assumption

This use case assumes three layers:

| Layer                | Role                                                                                                                                                                                                                                                                                                         |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3D CSDM common model | Provides the general exchange model for parcels, survey observations, geometry, topology, provenance, source documents, CRS, and validation.                                                                                                                                                                 |
| WA profile           | Provides WA cadastral constraints, WA CRS / datum handling, WA survey purpose, parcel purpose, and jurisdictional vocabulary bindings.                                                                                                                                                                       |
| WA mining profile    | Adds mining-specific vocabulary values, constraints, validation rules, feature roles, lifecycle states, lodgement metadata, and links to DMPE mining-tenure systems. It also constrains mining tenements to be encoded as `SecondaryCadastralParcel` features rather than `PrimaryCadastralParcel` features. |

The mining profile should treat the `SecondaryCadastralParcel` classification as a mandatory profile constraint for mining tenements. 
This means a conforming mining-profile dataset must not encode a mining tenement as a `PrimaryCadastralParcel`, even where the tenement has a surveyed boundary, legal identity, area, and lifecycle history.

The WA mining profile should not duplicate common CSDM structures where existing model elements are sufficient. 
It should add controlled values, profile constraints, and mining-specific relationships where the common model is intentionally general.

## Primary actor

Approved mining tenement surveyor, licensed cadastral surveyor, cadastral data editor, or mining tenement data administrator.

## Supporting actors

DMPE registrar, Mineral Titles Online user, Landgate validator, tenement holder, applicant, cadastral database maintainer, 3D viewer user, downstream spatial data user.

## Scenario

A mining tenement applicant or holder requires a survey dataset for a mining tenement or mining-related interest.

The dataset may involve:

| Scenario element                         | Example                                                                                                                                                 |
|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mining tenement application              | A mining lease or miscellaneous licence is marked out and applied for.                                                                                  |
| Granted tenement subject to survey       | A mining lease is granted and later surveyed as required.                                                                                               |
| Limited marking survey                   | An approved surveyor conducts a limited marking survey under DMPE directions.                                                                           |
| Boundary description from coordinates    | Tenement boundaries are described using MGA coordinates or latitude/longitude.                                                                          |
| Boundary description from physical marks | Tenement boundaries are described from existing survey marks, datum posts, posts, trenches, rows of stones, cairns, pegs, or prominent ground features. |
| Shared mining boundary                   | Adjacent mining tenements share a boundary mark or common boundary.                                                                                     |
| Partial surrender or amendment           | A tenement boundary is amended, reduced, or surrendered in part.                                                                                        |
| Interaction with cadastral tenure        | The mining tenement overlaps or affects Crown land, reserves, freehold land, pastoral lease, road, water, native title area, or other tenure.           |
| Subsurface or 3D mining object           | A mining-related tunnel, shaft, stope, underground void, exclusion zone, or infrastructure corridor needs to be represented or referenced in 3D.        |
| Mine-plan context                        | Cross sections, longitudinal sections, underground workings, open-pit faces, benches, or survey control support the cadastral survey or DMPE review.    |
| Digital lodgement                        | Survey documents and electronic data are lodged through MTO or another DMPE workflow.                                                                   |

The surveyor prepares a 3D CSDM mining-profile dataset that includes tenement identity, boundary geometry, survey observations, marking-out evidence, coordinates, source documents, survey report references, GDA2020 CRS metadata, MTO lodgement metadata, and validation results.

The dataset must distinguish:

1. the legal mining tenement boundary;
2. the marking-out evidence used to support or identify the boundary;
3. the survey observations and adopted observations used to compute the boundary;
4. any supporting mine-plan or operational geometry;
5. any 3D mining-related volume or feature;
6. the affected cadastral and land-tenure framework;
7. the lifecycle state of the tenement or survey; and
8. the provenance of all computations, transformations, reports, and lodgement events.

## Modelling principles

### 1. Treat mining tenements as secondary cadastral parcels

A mining tenement should be represented as a `SecondaryCadastralParcel`.

It should not be represented as a `PrimaryCadastralParcel`.

The underlying land, Crown parcel, reserve, road, freehold parcel, pastoral lease, water area, native title area, or other base tenure may be represented separately using the appropriate cadastral or external reference pattern. 
The mining tenement is then related to those affected land objects through spatial, legal, administrative, or lifecycle relationships.

This distinction is important because a mining tenement may:

- overlap one or more underlying primary parcels;
- coexist with Crown land, freehold land, reserves, roads, water areas, pastoral leases, or native title areas;
- grant a mining-related right, lease, licence, or statutory interest without replacing the underlying land parcel;
- be surveyed or unsurveyed;
- be pending, live, amended, surrendered, restored, forfeited, or cancelled; and
- have mining-specific marking-out, survey, lodgement, and lifecycle requirements.

A mining tenement should therefore not be treated merely as:

- an annotation;
- an operational mine object;
- a geological block;
- a resource polygon;
- a map overlay;
- a generic cadastral parcel without mining-specific vocabulary; or
- a `PrimaryCadastralParcel`.

### 2. Reuse common 3D CSDM structures

The mining profile should reuse common model structures for:

- dataset container;
- parcel or tenure object;
- appellation / identifier;
- boundary geometry;
- survey points;
- survey marks;
- observations;
- adopted observations;
- computations;
- source documents;
- supporting documents;
- provenance;
- lifecycle history;
- CRS and datum metadata; and
- validation results.

The profile should add mining-specific controlled values and constraints rather than inventing parallel structures.

### 3. Separate tenement geometry from mine-operational geometry

A mining tenement boundary is a legal or administrative tenure boundary.

Mine workings, stopes, shafts, declines, tunnels, pits, benches, faces, voids, orebody models, exclusion zones, survey control networks, and mine-plan drawings may be relevant evidence or context, but they are not automatically tenement boundaries.

The dataset must classify each mining feature as one of:

- legal tenement geometry;
- secondary legal interest;
- supporting mine-plan feature;
- operational mine survey feature;
- safety / exclusion feature;
- evidence feature;
- reference geometry;
- visualisation-only geometry; or
- external supporting document reference.

### 4. Support both 2D and 3D mining geometries

Many mining tenements will be represented primarily by 2D boundary geometry, even where the legal right relates to minerals beneath the surface.

The profile should also support 3D geometry where required, such as:

- vertically limited mining interests;
- tunnel parcels;
- shafts;
- declines;
- underground corridors;
- subsurface infrastructure;
- stopes or voids used as evidence;
- open-pit volumes or benches used for mine-plan context;
- exclusion volumes;
- ventilation or service corridors; and
- above/below relationships to surface parcels or infrastructure.

Where a 3D geometry is derived or operational rather than legal, its status must be explicit.

### 5. Preserve marking-out evidence

Mining tenement surveys often rely on marking-out evidence. The dataset should preserve:

- datum post;
- notice of marking out;
- boundary posts;
- pegs;
- poles;
- cairns of stones;
- trenches;
- rows of stones;
- existing survey marks;
- common posts for adjoining tenements;
- mark condition;
- date of observation;
- field note reference;
- survey report reference; and
- relationship to boundary geometry.

### 6. Support mining tenement lifecycle

The dataset should support lifecycle states and events such as:

- application prepared;
- marked out;
- application lodged;
- objection lodged;
- granted subject to survey;
- survey instructed;
- surveyed;
- check survey;
- correction required;
- corrected;
- report lodged;
- integrated;
- amended;
- partial surrender;
- surrendered;
- restored;
- forfeited;
- expired; and
- cancelled.

Lifecycle history should be linked to source documents, dates, responsible agents, and affected geometry versions.

### 7. Represent relationships to other land interests

A mining tenement may overlap or interact with:

- primary cadastral parcels;
- Crown land;
- reserves;
- private land;
- roads;
- water boundaries;
- pastoral leases;
- native title areas;
- infrastructure corridors;
- easements;
- other mining tenements; and
- environmental or heritage constraints.

The dataset should represent these relationships as legal, spatial, administrative, or supporting-context relationships, rather than assuming that all overlaps are invalid.

### 8. Use GDA2020 and transformation provenance

Where the DMPE requires GDA2020 lodgement, the dataset should record:

- CRS;
- coordinate epoch where relevant;
- source CRS;
- transformation method;
- transformation parameters;
- transformed coordinate values;
- transformation date;
- software/process; and
- responsible agent.

### 9. Keep mine plans linked but not absorbed

Mine plans, cross-sections, longitudinal sections, workings, quarry faces, and operational survey features may be referenced where relevant.

The mining profile should not attempt to encode every operational mine survey requirement unless that information is needed for cadastral / tenure exchange, validation, or review.

## Preconditions

1. A 3D CSDM dataset container exists or can be created.
2. The WA profile and proposed WA mining profile are available or can be referenced.
3. The mining tenement or application has a tenement identifier, application number, lease / licence type, applicant or holder, and lifecycle status.
4. The relevant Mining Act, regulations, DMPE directions, survey instruction, survey report, field notes, title / tenement document, MTO transaction, or other source document is available.
5. The approved surveyor, survey authority, or responsible party is recorded where applicable.
6. The boundary geometry is known, surveyed, adopted, marked out, or available from DMPE datasets.
7. Marking-out evidence is available or its absence / exemption can be recorded.
8. CRS metadata is recorded, including GDA2020 where required for lodgement.
9. Survey observations, adopted observations, marks, computations, source documents, and provenance are available where required.
10. Where 3D mine-related geometry is included, the dataset states whether the geometry is legal, operational, evidentiary, analytical, approximate, or visualisation-only.

## Proposed 3D CSDM modelling pattern

| Real-world or legal item                                                    | Suggested 3D CSDM / WA mining profile representation                                                                                                                                                                                                           |
|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mining tenement dataset                                                     | `CSD` or dataset container with WA mining profile conformance declaration.                                                                                                                                                                                     |
| Mining tenement                                                             | `SecondaryCadastralParcel`. This is mandatory for the WA mining profile. A mining tenement must not be encoded as a `PrimaryCadastralParcel`.                                                                                                                  |
| Underlying or affected land parcel                                          | `PrimaryCadastralParcel`, Crown parcel, reserve parcel, road parcel, freehold parcel, pastoral lease, water area, native title area, or external referenced land object as appropriate. The mining tenement is related to this object but does not replace it. |
| Mining tenement type                                                        | Controlled vocabulary applied to the `SecondaryCadastralParcel`, such as mining lease, general purpose lease, miscellaneous licence, prospecting licence, exploration licence, retention licence, special prospecting licence, or other mining tenement type.  |
| Tenement identifier                                                         | `Appellation`, tenement ID, application number, lease number, licence number, DMPE identifier, or profile-specific identifier.                                                                                                                                 |
| Tenement holder / applicant                                                 | Party or supporting administrative attribute, subject to privacy and system integration rules.                                                                                                                                                                 |
| Tenement lifecycle status                                                   | Controlled lifecycle value such as application, pending, live, granted, surveyed, unsurveyed, amended, surrendered, expired, forfeited, restored, or cancelled.                                                                                                |
| Legal boundary                                                              | Boundary geometry, edges, curves, polygon, solid, multi-solid, or topological representation depending on the legal object.                                                                                                                                    |
| Boundary description source                                                 | Existing survey mark, prominent ground feature, latitude/longitude, MGA coordinate, DMPE dataset, field notes, or adopted boundary source.                                                                                                                     |
| Marking-out evidence                                                        | Survey marks, occupation / marking features, datum post, posts, pegs, poles, trenches, rows of stones, cairns, notices, common posts, or supporting observations.                                                                                              |
| Survey observations                                                         | Observed vectors, adopted vectors, GNSS observations, traverse observations, coordinate observations, offsets, radiations, and computations.                                                                                                                   |
| Approved surveyor information                                               | Survey activity, survey agent, approval reference, instructions, survey report, field note reference, and provenance.                                                                                                                                          |
| GDA2020 coordinates                                                         | CRS metadata, coordinate observations, transformed coordinates, transformation provenance, and validation rule.                                                                                                                                                |
| MTO lodgement                                                               | Digital lodgement metadata, transaction reference, package identifier, lodgement status, source document reference, or supporting document.                                                                                                                    |
| Survey report / Form 44                                                     | Supporting document, report reference, provenance activity, or metadata bundle.                                                                                                                                                                                |
| Mine-plan context                                                           | Supporting document, referenced plan component, cross section, longitudinal section, operational mine survey feature, or external dataset link.                                                                                                                |
| 3D mining feature                                                           | Solid, multi-solid, shell, boundary faces, surface, line, point, or reference geometry classified by legal / operational / evidentiary status.                                                                                                                 |
| Relationship to cadastral parcels                                           | Spatial relationship, legal relationship, affected parcel reference, overlap relationship, abuttal relationship, or supporting context.                                                                                                                        |
| Relationship to other mining tenements                                      | Adjacent tenement, overlapping tenement, parent / child tenement, special prospecting licence over primary tenement, common boundary mark, or conflict / objection relationship.                                                                               |
| Native title, Crown, reserve, water, road, pastoral or private land context | External parcel / tenure references, supporting documents, constraints, or relationship annotations.                                                                                                                                                           |
| Check survey / correction                                                   | Validation activity, lifecycle event, survey correction, check survey report, or provenance record.                                                                                                                                                            |
| WA metadata                                                                 | Horizontal CRS, vertical datum where used, survey type, survey purpose, parcel type, parcel purpose, mining tenement type, mining lifecycle status, and provenance.                                                                                            |

## Candidate mining vocabularies

The WA mining profile is expected to require new controlled vocabularies. Candidate vocabularies include:

### Tenement type

- `miningLease`
- `generalPurposeLease`
- `miscellaneousLicence`
- `prospectingLicence`
- `explorationLicence`
- `retentionLicence`
- `specialProspectingLicence`
- `specialMiningLease`
- `temporaryReserve`
- `miningTenementApplication`
- `otherMiningTenement`

### Tenement status

- `application`
- `pending`
- `live`
- `granted`
- `grantedSubjectToSurvey`
- `surveyed`
- `unsurveyed`
- `markedOut`
- `underObjection`
- `underReview`
- `amended`
- `partialSurrender`
- `surrendered`
- `restored`
- `expired`
- `forfeited`
- `cancelled`

### Boundary description source

- `existingSurveyMark`
- `prominentGroundFeature`
- `latitudeLongitude`
- `MGA1994`
- `MGA2020`
- `GDA2020Coordinate`
- `departmentOfMinesDataset`
- `fieldSurvey`
- `adoptedSurvey`
- `previousTenementSurvey`
- `naturalFeature`
- `otherSource`

### Marking-out feature type

- `datumPost`
- `boundaryPost`
- `peg`
- `surveyPeg`
- `mark`
- `post`
- `pole`
- `cairnOfStones`
- `trench`
- `rowOfStones`
- `noticeOfMarkingOut`
- `existingSurveyMark`
- `commonPost`
- `unmarkedExemption`
- `otherMarkingEvidence`

### Mining geometry role

- `legalTenementBoundary`
- `applicationBoundary`
- `surveyedBoundary`
- `unsurveyedBoundary`
- `markedOutBoundary`
- `derivedBoundary`
- `operationalMineFeature`
- `minePlanContext`
- `undergroundWorking`
- `openPitFeature`
- `shaft`
- `decline`
- `drive`
- `stope`
- `void`
- `exclusionZone`
- `infrastructureCorridor`
- `visualisationOnly`

### Mining survey activity type

- `markingOut`
- `limitedMarkingSurvey`
- `surveyInstruction`
- `fieldSurvey`
- `tenementSurvey`
- `checkSurvey`
- `resurvey`
- `correction`
- `reportLodgement`
- `digitalLodgement`
- `MTOTransaction`
- `integration`
- `amendment`
- `partialSurrenderSurvey`
- `objectionReview`
- `wardenCourtDetermination`

These values are illustrative only. 
They should be reviewed against the final WA mining profile governance process and official DMPE vocabulary requirements.

## Main flow

1. _Create the 3D CSDM mining dataset container_  
   The dataset is created as a CSD package conforming to the 3D CSDM common model, WA profile, and proposed WA mining profile.

2. _Declare profile conformance_  
   The dataset declares conformance to the common 3D CSDM model, the WA profile, and the WA mining profile or mining extension.

3. _Identify the mining tenement or application_  
   The dataset records the tenement identifier, application number, tenement type, applicant or holder where appropriate, lifecycle status, source documents, and DMPE references.

4. _Identify the statutory and administrative source material_  
   The dataset records the Mining Act / regulation source, DMPE directions, survey instruction, approved surveyor details, survey report, field notes, MTO transaction, or other supporting source.

5. _Classify the mining tenement type and status_  
   The dataset assigns controlled values for tenement type, survey status, application status, and lifecycle state.

6. _Classify the mining tenement as a SecondaryCadastralParcel_  
   The dataset encodes the mining tenement as a `SecondaryCadastralParcel`. 
   The dataset must not encode the mining tenement as a `PrimaryCadastralParcel`.

   The dataset separately identifies any underlying or affected primary cadastral parcels, Crown land, reserves, roads, pastoral leases, water areas, native title areas, or other land interests affected by the mining tenement.

7. _Record CRS and datum metadata_  
   The dataset records the horizontal CRS, source CRS, GDA2020 lodgement CRS, coordinate epoch where relevant, and any transformation process.

8. _Create or identify the tenement boundary geometry_  
   The system records the legal, applied-for, marked-out, surveyed, or adopted boundary geometry for the `SecondaryCadastralParcel` using the appropriate 2D, 2.5D, or 3D representation.

9. _Record boundary description basis_  
   The dataset records whether the boundary is described from an existing survey mark, prominent ground feature, latitude/longitude, MGA coordinate, DMPE dataset, or other source.

10. _Record marking-out evidence_  
    The dataset records datum posts, posts, trenches, rows of stones, pegs, notices, common posts, existing survey marks, or exemptions as survey / marking evidence linked to the boundary.

11. _Record survey observations and computations_  
    The dataset records observed vectors, adopted vectors, GNSS observations, traverse observations, offsets, radiations, coordinate computations, transformations, and quality metadata.

12. _Record relationships to affected land and other tenements_  
    The dataset records overlaps, abuttals, adjacency, containment, parent / child relationships, Crown land, reserves, roads, water, native title, pastoral lease, private land, or other affected cadastral interests.

13. _Record 3D mining-related geometry where required_  
    Where the dataset includes shafts, tunnels, voids, open-pit features, underground workings, exclusion volumes, or other 3D mining features, it classifies each feature as legal, operational, evidentiary, analytical, approximate, or visualisation-only.

14. _Reference mine-plan context_  
    The dataset references or includes mine-plan components such as plans, cross sections, longitudinal sections, workings, quarrying faces, or survey control where they support cadastral review or boundary interpretation.

15. _Record lodgement and lifecycle history_  
    The dataset records MTO lodgement metadata, report lodgement, check surveys, corrections, objections, amendments, partial surrenders, restorations, forfeitures, cancellations, or integration events.

16. _Validate the dataset_  
    Validation checks confirm profile conformance, required vocabularies, geometry validity, CRS consistency, marking-out evidence, survey observations, lifecycle status, affected parcel relationships, and provenance completeness.

17. _Prepare exchange and integration outputs_  
    The dataset is prepared for MTO lodgement, Landgate / DMPE integration, cadastral database update, review, archival, and downstream use.

## Alternative flows and edge cases

| Case                                                                        | Expected handling                                                                                                                                                                                                                                      |
|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tenement is unsurveyed                                                      | Represent the DMPE or application geometry and classify it as unsurveyed / pending / approximate / administrative as appropriate. Do not imply surveyed cadastral status.                                                                        |
| Tenement is granted subject to survey                                       | Record the grant lifecycle state and the required survey condition, then update lifecycle history when survey is completed.                                                                                                                            |
| Boundary is marked out but not surveyed                                     | Record marking-out evidence and classify geometry as marked-out / application geometry.                                                                                                                                                                |
| Boundary is identical with existing surveyed land                           | Record the existing survey mark or existing surveyed boundary source and any marking-out exception or reduced marking requirement.                                                                                                                     |
| Boundary description uses latitude/longitude                                | Record source coordinate reference system, coordinate values, transformation to GDA2020/MGA2020 where required, and transformation provenance.                                                                                                         |
| Boundary description uses MGA coordinates                                   | Record MGA zone, datum, coordinate epoch where relevant, and GDA2020 compliance.                                                                                                                                                                       |
| Boundary uses prominent ground feature                                      | Record the feature, source plan, observation, uncertainty, and adoption basis.                                                                                                                                                                         |
| Boundary mark cannot be maintained or found                                 | Record mark condition, missing-mark status, replacement / renewal evidence, survey report note, and lifecycle event.                                                                                                                                   |
| Common post supports adjacent tenements                                     | Link the mark to all affected tenements and boundary relationships.                                                                                                                                                                                    |
| Tenement overlaps another tenure                                            | Record overlap as a legal / administrative relationship for review rather than assuming it is invalid.                                                                                                                                                 |
| Partial surrender changes boundary                                          | Preserve old and new geometry, affected area, source document, application basis, and lifecycle event.                                                                                                                                                 |
| Mining tenement includes subsurface 3D feature                              | Reuse tunnel / subsurface / airspace use case patterns and classify geometry as legal or operational.                                                                                                                                                  |
| Mine-plan geometry is included                                              | Classify as supporting mine-plan context unless the source makes it legal tenement geometry.                                                                                                                                                           |
| Survey correction or check survey occurs                                    | Record correction activity, check survey report, previous version, corrected version, responsible party, and date.                                                                                                                                     |
| Dataset is lodged through MTO                                               | Record MTO transaction reference, lodgement date, lodgement status, documents, and dataset version.                                                                                                                                                    |
| Data must integrate with SCDB and DMPE systems                        | Validate CRS, feature types, identifiers, tenement type, survey purpose, and profile conformance before integration.                                                                                                                                   |
| Mining tenement overlaps a primary parcel                                   | Encode the mining tenement as a `SecondaryCadastralParcel` and record the relationship to the affected `PrimaryCadastralParcel` or other land object. Do not recast the mining tenement as a primary parcel merely because it has a surveyed boundary. |
| Mining tenement covers multiple underlying parcels                          | Encode one mining tenement `SecondaryCadastralParcel` or agreed multi-part secondary parcel representation, with relationships to each affected underlying parcel.                                                                                     |
| Mining tenement boundary is identical with an underlying cadastral boundary | Reuse or reference the underlying boundary geometry where appropriate, but keep the mining tenement classified as a `SecondaryCadastralParcel`.                                                                                                        |
| Mining tenement is the only parcel-like object in the dataset               | The mining tenement is still encoded as a `SecondaryCadastralParcel`. If the underlying primary cadastral parcel is not included in the dataset, it should be referenced as an affected external parcel or supporting cadastral object.                |

## Validation requirements

The dataset should support validation of:

1. _Secondary parcel classification_  
   Each mining tenement feature is encoded as a `SecondaryCadastralParcel`.

2. _Primary parcel exclusion_  
   A mining tenement feature must not be encoded as a `PrimaryCadastralParcel`.

3. _Affected primary parcel relationship_  
   Where the mining tenement affects, overlaps, abuts, or is contained by an underlying land parcel, the relationship to the affected primary cadastral parcel or other land object is recorded.

4. _Profile conformance_  
   The dataset declares and satisfies the common 3D CSDM, WA profile, and WA mining profile constraints.

5. _Tenement identity_  
   Each mining tenement has a valid tenement identifier, tenement type, lifecycle status, and source reference.

6. _Approved surveyor and authority_  
   Where required, the dataset records the approved surveyor, survey instruction, survey report, field note reference, and authority.

7. _CRS and datum consistency_  
   Coordinates are supplied in the required CRS, including GDA2020 where required, with transformation provenance where applicable.

8. _Boundary geometry validity_  
   Boundary geometry is valid for the declared representation type and does not create unexplained topology errors.

9. _Boundary description basis_  
   Each boundary has a source basis such as survey mark, ground feature, latitude/longitude, MGA coordinate, or adopted survey source.

10. _Marking-out evidence_  
    Required datum posts, posts, trenches, rows of stones, pegs, notices, marks, common posts, or exemptions are recorded.

11. _Survey observations and computations_  
    Observations, adopted observations, computations, transformations, and quality metadata are present where required.

12. _Tenement status consistency_  
    Survey status, tenement status, lifecycle status, and geometry status do not contradict each other.

13. _Mining-specific vocabulary_
    Mining tenement type, boundary source, marking-out feature type, mining geometry role, survey activity type, and lifecycle state use controlled vocabulary values applicable to `SecondaryCadastralParcel` features.

14. _Relationship to affected land_  
    The dataset records spatial and legal relationships to cadastral parcels, Crown land, reserves, roads, water, native title areas, pastoral leases, private land, and other tenements where relevant.

15. _3D geometry classification_  
    Any 3D mining-related geometry is classified as legal, operational, evidentiary, analytical, approximate, or visualisation-only.

16. _Mine-plan context separation_  
    Mine-plan objects are not confused with cadastral tenement boundaries unless the legal or administrative source explicitly makes that connection.

17. _MTO / digital lodgement metadata_  
    The dataset records lodgement package, transaction, document, and status metadata needed for electronic submission and audit.

18. _Lifecycle provenance_  
    Application, marking out, survey, grant, correction, amendment, partial surrender, restoration, forfeiture, cancellation, and integration events are traceable.

## Acceptance outcomes

1. _Mining tenement is encoded as a SecondaryCadastralParcel_  
   Every mining tenement in the dataset is represented as a `SecondaryCadastralParcel`.

2. _Mining tenement is not encoded as a PrimaryCadastralParcel_  
   The dataset does not classify any mining tenement as a `PrimaryCadastralParcel`.

3. _Underlying land is represented separately_  
   Any affected underlying primary parcel, Crown land, reserve, road, freehold parcel, pastoral lease, water area, native title area, or other land object is represented or referenced separately from the mining tenement.

4. _Mining tenement is represented with mining-specific classification_  
   The dataset represents the tenement as a mining tenure object or cadastral interest using controlled mining vocabulary, not as an undifferentiated cadastral parcel.

5. _Boundary source and survey basis are explicit_  
   Boundary geometry is linked to survey marks, ground features, coordinates, DMPE data, field notes, or adopted survey evidence.

6. _Marking-out evidence is preserved_  
   Datum posts, notices, pegs, poles, trenches, rows of stones, cairns, common posts, and exemptions are represented where relevant.

7. _GDA2020 lodgement requirements are supported_  
   The dataset records CRS metadata and can support GDA2020 coordinate lodgement and integration.

8. _MTO digital lodgement is supported_  
   The dataset records transaction, lodgement, report, and supporting document metadata needed for electronic lodgement workflows.

9. _Surveyed and unsurveyed status is clear_  
   The dataset distinguishes surveyed tenements, unsurveyed tenements, marked-out applications, pending applications, granted tenements subject to survey, and amended tenements.

10. _Mining lifecycle history is traceable_  
    Application, marking out, grant, survey, correction, amendment, surrender, restoration, forfeiture, cancellation, and integration events are recorded with provenance.

11. _Mining geometry roles are explicit_  
    Tenement boundaries, mine-plan context, operational mine survey features, underground workings, shafts, voids, and 3D evidence are not confused.

12. _Affected land relationships are represented_  
    The dataset records relationships to cadastral parcels, Crown land, reserves, water, roads, native title, pastoral lease, private land, or other mining tenements where relevant.

13. _3D CSDM common model reuse is demonstrated_  
    The dataset reuses common CSDM structures for geometry, survey evidence, provenance, documents, and validation, while adding mining-specific vocabulary and constraints.

14. _The mining profile gap is identified_  
    The use case identifies that the WA mining profile requires a mandatory class constraint: mining tenements are `SecondaryCadastralParcel` features, with mining-specific vocabulary values and validation rules.

## Out of scope

This use case does not define the final WA mining profile schema.

It does not reopen the class decision for mining tenements. 
For this use case, mining tenements are required to be implemented as `SecondaryCadastralParcel` features.

The use case does not decide whether additional mining-specific feature collections, vocabulary bindings, document types, observation types, or supporting feature types are also required.

It does not replace the DMPE's Mineral Titles Online system, Landgate's SCDB integration process, operational mine survey systems, mine safety management systems, geological models, resource models, production systems, or mine-planning software.

It does not attempt to encode the mine-plan compilation requirements unless those plans, sections, longitudinal sections, workings, or survey control features are needed as cadastral evidence or supporting context.

It does not provide legal advice about the validity of a mining tenement application, objection, grant, marking-out process, surrender, restoration, forfeiture, or boundary dispute.

It does not specify visual styling, map symbology, line weights, colours, or portrayal rules. The dataset should encode semantic facts required for display; visualisation clients should handle portrayal.

## Open confirmation points

1. What official controlled vocabulary should be used for WA mining tenement types?
2. What official controlled vocabulary should be used for tenement lifecycle status?
3. What mining-specific `surveyPurpose`, `parcelPurpose`, `parcelType`, or `featureType` values are required?
4. How should `surveyed`, `unsurveyed`, `markedOut`, `pending`, `live`, and `grantedSubjectToSurvey` states be represented?
5. How should mining marking-out evidence be encoded: as `SurveyPoint`, `SurveyMark`, `OccupationMark`, observation, annotation, supporting document, or mining-specific feature?
6. Are abutting parcels required to be referenced?
<!-- 
My understanding is that they are required because a mining tenement boundary is only validly understood in relation to neighbouring tenements and holdings. 
The adjoining parcels provide the evidence needed to confirm abuttals, detect encroachments, protect prior rights, support notices and objections, and certify that the surveyed tenement fits correctly into the surrounding tenure fabric.

So if this is the case, should abutting parcels in the general cadastral sense also be included?

From a plan perspective, WA cadastral datasets should identify abutting parcels, roads, reserves, waterways, easements, rights-of-way, and other adjoining cadastral interests where required by the applicable plan type and survey purpose. 
This supports cadastral fabric integration, title interpretation, access, encroachment detection, adjoining-owner protection, and validation of the subject parcel in relation to the surrounding cadastre.

For mining tenements, the same general cadastral principle applies, but the mining profile should also record abutting or nearby mining tenements and holdings where needed to support mining-specific requirements for priority, notices, encroachments, objections, and survey certification.
-->
7. What MTO transaction and lodgement metadata should be included in the dataset?
8. How should mining-tenement lifecycle history be reconciled with cadastral database lifecycle history?

## Summary

This use case is recommended because a WA mining dataset introduces a distinct domain profile requirement. 
The central class requirement is that a mining tenement is represented as a `SecondaryCadastralParcel`, not as a `PrimaryCadastralParcel`.

The 3D CSDM common model and WA profile can provide the shared cadastral exchange foundation.
However, mining-tenement survey data requires a new set of controlled vocabularies and validation rules for tenement type, lifecycle status, approved surveyor context, marking-out evidence, boundary-description source, GDA2020 lodgement, MTO transaction metadata, mining-specific geometry roles, affected-land relationships, and mine-plan context.

The central modelling principle is to distinguish:

**underlying primary cadastral parcels and land tenure**  
from **mining tenements encoded as `SecondaryCadastralParcel` features**  
from **marking-out and survey evidence**  
from **operational mine-plan geometry**  
from **3D mining-related context or evidence**  
from **digital lodgement and lifecycle history**.

## References

- [DLGIRS (2025) Mines survey: Code of practice](https://www.worksafe.wa.gov.au/publications/mines-survey-code-practice)
- [DMPE (2024) Provisions and Regulations of the Mining Act 1978 and Directions relating to the Surveying](https://www.wa.gov.au/system/files/2025-07/provisions_regulations_miningact_directions_relating_surveying_miningtenure.pdf)
- [ICSM (2023a) 3D CSDM Schema](https://icsm-au.github.io/3d-csdm-schema/)
- [ICSM (2023b) WA Implementation Profile for 3D CSDM](https://icsm-au.github.io/3d-csdm-profiles/bblock/icsm.profiles.wa)
- [ICSM (2023c) 3D CSDM Common Model / JSON Encoding repository](https://github.com/icsm-au/3d-csdm-common)
- [WA (2025) WA mining tenement surveying guidance](https://www.wa.gov.au/organisation/department-of-mines-petroleum-and-exploration/surveying-of-mining-tenements)- [WA (2026) Mineral Titles Online (MTO)](https://www.wa.gov.au/service/natural-resources/mineral-resources/access-mineral-titles-online-mto)
- [WAL (2025) Mining Act 1978](https://www.legislation.wa.gov.au/legislation/statutes.nsf/RedirectURL?OpenAgent&query=mrdoc_49463.pdf)
- [WAL (2025) Licensed Surveyors Act 1909](https://www.legislation.wa.gov.au/legislation/statutes.nsf/RedirectURL?OpenAgent&query=mrdoc_48916.pdf)