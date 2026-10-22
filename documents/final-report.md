<!-- TITLE PAGE -->

<img src="../assets/surround.jpeg" alt="Surround Australia" style="width: 150px; position: absolute; top: 0; right: 0; padding: 10px;">

#### Accenture Australia Pty Ltd
<div style="margin-top: 6rem;"></div>

# Spatial WA – Next Generation Spatial Cadastre (NGSC)
<div style="margin-top: 8rem;"></div>

## End of project report

<div style="margin-top: 10rem;"></div>

Prepared by: 
Surround Australia Pty Ltd (SURROUND)

**Date:** 2026-11-02

<!--
Date: 2026-10-15
Convert to PDF using `print_to_pdf`
Organisation: Edge Geomatics Limited
-->

<!-- TOC -->

## Table of contents
1.  [Executive summary](#executive-summary)
2.  [Project context, scope, and approach](#project-context-scope-and-approach)
3.  [Deliverables and outcomes](#deliverables-and-outcomes)
4.  [Consolidated technical and strategic findings](#consolidated-technical-and-strategic-findings)
5.  [Strategic assessment: strengths, gaps, opportunities, and risks](#strategic-assessment-strengths-gaps-opportunities-and-risks)
6.  [Opportunities to strengthen NGSC delivery and capability](#opportunities-to-strengthen-ngsc-delivery-and-capability)
7.  [Implementation roadmap and engagement opportunities](#implementation-roadmap-and-engagement-opportunities)
8.  [Conclusions and recommended next steps](#conclusions-and-recommended-next-steps)
9.  [References](#references)
<!--
Sections 1–3 establish what was undertaken and delivered; 
Sections 4–5 explain what was learned and what remains uncertain; 
Sections 6–8 establish where the programme could go next and the value of doing so.
-->
<div style="margin-top: 8rem;"></div>

##### Revision history

| Version | Status | Date       | Author        | Description  |
|---------|--------|------------|---------------|--------------|
| 0.1     | Draft  | 2026-10-15 | Andrew Hunter | Initial TOC  |
| 0.2     | Draft  | 2026-10-28 | Andrew Hunter | Draft Report |

This document is complete as of the date of presentation to Accenture. 

<!-- CONTENT -->

## Executive summary
<!-- 
2 - 3 pages

Summarise the engagement, the 34 requirement assessments, key findings and their contribution to NGSC implementation.
Emphasise reduced technical uncertainty, clarified responsibilities and an implementable approach to 3D cadastral information.
End with three to five priority recommendations: what should happen next and why it matters.

Do last
-->


## Project context, scope, and approach
<!-- 
2 - 3 pages

State SURROUND's objectives and its relationship to Accenture, Landgate and the NGSC programme.
Describe the methodology across the five deliverables: requirement interpretation, NGSC responsibilities, 3D CSDM alignment, technical constraints, acceptance criteria and dependencies.
Clarify the split of responsibility between SURROUND and the NGSC implementation team.
Show how contracted machine-readable specifications and other technical outputs were addressed, referencing artefacts where they exist.
-->

This section outlines SURROUND's role in the Western Australian Next Generation Spatial Cadastre (NGSC) project, its contractual responsibilities, and the approach adopted across the five deliverables. 
It also describes the requirements analysis methodology, supporting technical development, collaboration, and knowledge transfer.

### NGSC programme context and objectives

The Next Generation Spatial Cadastre (NGSC) project forms part of Landgate's broader Spatial WA programme. 
Its objectives include modernising cadastral information management, supporting the transition from two-dimensional to three-dimensional cadastral representations, improving data quality and validation, and enabling integration with contemporary spatial information systems.

Accenture is the prime contractor responsible for delivering the NGSC solution to Landgate. 
Accenture engaged SURROUND Australia to provide specialist cadastral information modelling, standards development, and technical advice, particularly concerning the Intergovernmental Committee on Surveying and Mapping (ICSM) [3D Cadastral Survey Data Model](https://icsm-au.github.io/3d-csdm/) (3D CSDM) [@atkinson_3d_2022;].

SURROUND's primary objective was to translate relevant NGSC requirements into standards-aligned information specifications suitable for implementation and testing. 
This involved identifying applicable standards, determining where Western Australian extensions were necessary, and highlighting dependencies on NGSC system design or business decisions.

A central consideration was that the 3D CSDM defines cadastral information for exchange, rather than the complete NGSC system. 
The work therefore distinguished information modelling responsibilities from the applications, services, and business processes needed to operate the spatial cadastre.

The broader objective was to establish a consistent, reusable standards-based foundation for NGSC development, with potential application beyond Western Australia.

### Contractual scope and responsibilities

SURROUND was engaged under a 12-month subcontract to Accenture. 
Its scope covered requirements analysis, specialist data design, co-design, development of CSDM profiles and specifications, technical constraint assessment, validation, and proposed acceptance criteria.

The Statement of Work distinguished between requirements for which SURROUND was responsible for specified CSD and 3D CSDM outputs and those where it provided specialist support to the Accenture implementation team.

For the nominated CSD and 3D CSDM requirements, contracted outputs included machine-readable schemas, ontologies, example datasets, validation rules, and transformation specifications, where applicable. 
Supporting documentation, test cases, and acceptance criteria were also required.

For other requirements, SURROUND provided technical advice on cadastral information modelling, standards, constraints, and dependencies, together with input to acceptance criteria.

Accenture retained overall responsibility for programme management, solution architecture, system development, integration, and delivery. 
Landgate retained responsibility for confirming business requirements, jurisdictional policy, and operational decisions. 
SURROUND's role was to inform these activities through specialist analysis and technical specifications.

This distinction was particularly important where requirements combined cadastral information modelling with NGSC functionality. 
For example, the 3D CSDM can define and validate cadastral information, while user interfaces, workflows, APIs, and operational controls remain NGSC implementation responsibilities.

Where requirements depended on unresolved business, policy, or architectural decisions, these were identified as dependencies rather than assuming decisions on behalf of Accenture or Landgate.

### Requirements analysis methodology

The five deliverables addressed 34 requirements covering cadastral data growth, standards, 3D representation, survey information, boundary management, metadata, validation, interfaces, and related business functions.

Although the reporting format evolved, the analysis followed six consistent considerations:

1. Requirement interpretation: Establish the intended business capability and identify ambiguities or gaps.
2. NGSC responsibilities: Identify the functionality expected of the NGSC applications, services, and workflows.
3. 3D CSDM alignment: Assess existing standards and identify necessary extensions or implementation patterns.
4. Technical constraints: Consider data availability, geometric integrity, validation, transformation, and interoperability.
5. Potential acceptance criteria: Define testable outcomes and verification methods without unnecessarily prescribing implementation design.
6. Dependencies and decisions: Identify outstanding business, policy, and technical matters requiring resolution.

Later deliverables adopted a consistent structure comprising the original WA requirement, analysis, NGSC System Perspective, 3D CSDM Perspective, and proposed acceptance criteria.

SURROUND prepared the requirements analysis and 3D CSDM perspective. 
The NGSC System Perspective was reserved for the implementation team, maintaining a clear distinction between information modelling and system design responsibilities.

Not all requirements could be resolved through information modelling alone. 
Issues involving metadata governance, lodgement workflows, system ownership, historical survey information, and certain 3D geometric operations required further decisions. 
Recording these dependencies was an important outcome, providing direction for subsequent design and implementation.

### Machine-readable specifications and technical outputs

Technical development accompanied the requirements analysis to support contracted machine-readable specifications and investigate practical implementation approaches.

Work included the Western Australian 3D CSDM profile, common model components, controlled vocabularies, cadastral example datasets, and topology and validation functions. 
Supporting proof-of-concept developments included 3D and sectional viewers, reporting components, topology validation tools, and survey calculation utilities.

These outputs were managed through GitHub repositories, providing traceable, reusable specifications, examples, validation rules, and supporting software. 
The principal workstreams included the WA 3D CSDM profile, ICSM vocabularies, common CSDM components, Topo Feature, and topology validation functions.

The technical artefacts complement the written requirements analysis and demonstrate potential implementation approaches. 
Their applicability, maturity, and relationship to individual contractual requirements are examined in later sections of this report.

### Engagement, collaboration, and knowledge transfer

SURROUND supported Accenture through specialist technical advice, collaborative requirements analysis, and standards-based development. 
The approach involved working with Accenture, its spatial implementation team, and Landgate to clarify requirements, technical considerations, and acceptance expectations.

Collaboration was necessary because cadastral requirements span several responsibilities. 
Survey and land administration practices establish the meaning of the information, standards define its representation and exchange, and the NGSC implementation determines how it is managed operationally.

The requirements reports, proposed acceptance criteria, documented dependencies, and technical examples provided a common reference for design discussions, implementation planning, and verification.

Knowledge transfer was supported through documentation, shared repositories and reusable examples and validation components. 
Technical development adopted open standards and the [OGC Building Blocks](https://ogcincubator.github.io/bblocks-docs/) [@ogc_ogc_2026;] approach, enabling specifications and supporting artefacts to be published, tested, and maintained independently of individual applications.

Collectively, the work established a reusable foundation for continued NGSC development and further refinement of the Australian 3D CSDM. 
Its longer-term value will depend on the adoption, integration, and verification of these outputs within the NGSC solution.

## Deliverables and outcomes

This section summarises SURROUND's five deliverables, covering 34 allocated requirements from the Western Australian Next Generation Spatial Cadastre (NGSC) Software Requirements Specification.
It outlines the principal outcomes, technical contributions, proposed acceptance criteria, and remaining dependencies.

The work established a structured interpretation of the requirements and a standards-based foundation for NGSC development.
Supporting technical work produced specifications, example datasets, validation capabilities, and proof-of-concept applications.

### Summary of the five deliverables

The five deliverables were undertaken progressively, reflecting the NGSC programme schedule and SURROUND's allocated requirements.
They covered foundational data standards and scalability through to cadastral information modelling, system interfaces, and 3D boundary management.

| Deliverable | Requirements | Principal focus                                                                                                                                 |
|-------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 1           | 1            | NGSC data growth, scalability, transition to 3D and initial geometry and topology validation requirements.                                      |
| 2           | 10           | Geographical and Aboriginal naming, ABS Data Quality Framework and government data standards, including data governance and quality assessment. |
| 3           | 15           | Cadastral editing, 3D visualisation, survey data exchange, boundary relationships, workflows and APIs.                                          |
| 4           | 6            | Survey control and observations, metadata, plan lodgement, validation and boundary relationships.                                               |
| 5           | 2            | Metadata feedback workflows and 3D boundary alignment, including unresolved workflow and geometric constraints.                                 |
| **Total**   | **34**       |                                                                                                                                                 |

> **Note**: Requirement NN01.02.026, concerning Aboriginal naming and dual naming of geographic features, was moved out of scope in December 2025.

Deliverables 1 and 2 concentrated on foundational capabilities, including 3D data growth, geometric integrity, data quality, and standards compliance.
Deliverables 3 and 4 addressed operational requirements, particularly the exchange and management of survey information, boundary relationships, validation and system interfaces.
Deliverable 5 clarified two requirements requiring additional definition: metadata feedback workflows and geometric constraints for 3D boundary alignment.

Collectively, the deliverables clarified expected capabilities, identified applicable standards, and highlighted technical and business decisions required for implementation.

### Coverage of the 34 NGSC requirements

The five reports document the analysis of 34 allocated requirements, with the depth of assessment reflecting each requirement's relevance to the 3D CSDM and SURROUND's contracted responsibilities.
Coverage included cadastral information and survey observations; geometry, topology, and boundary relationships; data exchange; metadata and data quality; and operational workflows.

Several consistent findings emerged.

**The 3D CSDM provides a common foundation for cadastral information exchange.**
It supports structured representation of parcels, survey observations, geometry, topology, relationships, and provenance.
Western Australian profiles and business rules extend this foundation where jurisdiction-specific requirements apply.

**Cadastral information modelling and NGSC operational functionality have distinct responsibilities.**
The 3D CSDM describes the information being exchanged, while NGSC provides the applications, services, workflows, and controls needed to manage it.
Maintaining this distinction supports interoperability and avoids unnecessary extensions to the data model.

**Automation requires reliable information and controlled validation.**
Incomplete observations, ambiguous boundary relationships, or insufficient geometric constraints can produce uncertain outcomes.
These situations require defined business rules, exception handling or Editor intervention rather than automatic acceptance.

**Provenance and traceability are essential.**
Imported, converted, or modified cadastral information should remain linked to its source evidence and processing history.

The individual reports provide detailed assessments, proposed acceptance criteria, and outstanding issues.
A consolidated requirements traceability matrix is proposed for Appendix [X], linking requirements to deliverables, technical artefacts, and dependencies.

### Technical and architectural contributions

Technical development accompanied the requirements analysis to investigate implementation approaches and produce reusable specifications and components.

The principal contribution was the development and refinement of the Western Australian 3D CSDM profile.
This included cadastral geometry, boundary relationships, controlled vocabularies, and jurisdiction-specific representation requirements, particularly for complex built-strata parcels.

Other developments addressed topology and geometry validation, survey data exchange, visualisation, reporting, and survey processing.
Proof-of-concept applications were used to investigate 3D viewing, horizontal sections, and survey calculations.

The work adopted the [OGC Building Blocks](https://ogcincubator.github.io/bblocks-docs/) [@ogc_ogc_2026;] approach where applicable, supporting machine-readable schemas, semantic definitions, examples, and automated validation.

The principal GitHub repositories provide traceability to these developments:

| Technical output                                    | Principal repositories                               |
|-----------------------------------------------------|------------------------------------------------------|
| WA 3D CSDM profile, schemas and cadastral examples  | `3d-csdm-profile-wa`, `3d-csdm-common`               |
| Controlled vocabularies and semantic definitions    | `icsm-vocabs`, `3d-csdm-profile-wa`                  |
| Topological representation and validation functions | `topo-feature`, `topo-functions`                     |
| 3D and sectional visualisation prototypes           | `bblocks-cesium-viewer`, `bblocks-xy-section-viewer` |
| Reporting and survey-processing prototypes          | `bblocks-3d-csdm-reporting`, `angles-to-bearings`    |

The contract also identified transformation specifications and testing for converting existing cadastral survey formats into 3D CSDM.
The requirements analyses established expected transformation behaviour, including validation, preservation of source information, and handling of incomplete records.

These repositories provide a technical foundation for NGSC development, although individual artefacts remain at different stages of maturity.
Further assessment is required to confirm their completeness, standards compliance, and readiness for implementation.

### Acceptance criteria and validation readiness

The five deliverables translated high-level requirements into more specific, testable acceptance criteria.
These generally identify expected capabilities, verification methods, and, in later deliverables, verification types.

The criteria address information and operational requirements, including 3D CSDM conformance, topology validation, preservation of survey evidence, handling invalid submissions, and expected workflow and API behaviour.

Supporting development produced example datasets, validation rules, and reusable checking functions that can help automated testing and reduce manual inspection.

An important distinction remains between **data conformance** and **system acceptance**.
Schemas and validators can establish compliance with structural, semantic, and geometric rules, but cannot demonstrate that operational workflows, performance, permissions, or system integration meet NGSC requirements.

The proposed acceptance criteria therefore provide a basis for implementation testing rather than evidence of completed or accepted NGSC functionality.
Final criteria and test cases require agreement with Accenture and Landgate, supported by representative test data and expected results.

### Status of outputs and remaining dependencies

The five deliverables document the requirements analysis and proposed acceptance criteria, supported by technical specifications, examples, and software components at varying stages of development.

The principal outstanding matters fall into three categories.

**Technical specification and validation readiness.**
Further work is required to confirm traceability between contracted requirements and machine-readable schemas, ontologies, example datasets, validation rules, transformation specifications, and standards-conformance evidence.

**NGSC implementation decisions.**
Several requirements depend on unresolved system architecture and business-process decisions, including metadata governance, plan lodgement, validation workflows, system ownership, APIs, and integration with other Landgate systems.
The NGSC System Perspective, reserved for the implementation team in Deliverables 3–5, remains incomplete in the supplied reports.

**Jurisdictional and geometric rules.**
Further definition is required for aspects of boundary alignment, legally defined 3D boundaries, historical survey information, and incomplete observations.

These dependencies require consideration during subsequent NGSC design and implementation.
Many reflect decisions reserved for Landgate or the implementation team rather than limitations of the 3D CSDM.

Overall, SURROUND's engagement established a foundation of requirements analysis and supporting technical development.
The next stage is to consolidate these outputs into an agreed implementation and validation baseline, resolve remaining dependencies, and confirm their integration into the NGSC solution.

## Consolidated technical and strategic findings
<!-- 
4 - 6 pages

Synthesise recurring issues across the 34 assessments: NGSC–3D CSDM alignment, legacy survey data transformation, 3D topology and boundary semantics, metadata governance, and the split between data-model and application-workflow responsibilities.

Include a decision register?
-->

### 3D CSDM alignment and WA profile development

### Cadastral data exchange and interoperability

### 3D geometry, topology, and boundary representation

### Metadata, data quality and standards compliance

### Cadastral workflows, APIs, and system integration

### Cross-cutting dependencies and architectural decisions

## Strategic assessment: strengths, gaps, opportunities, and risks
<!-- 
2 - 3 pages

Analyse the readiness of the NGSC programme to realise the capabilities addressed through this engagement.
-->

### Strengths and capabilities established

### Capability gaps and areas requiring further development

### Opportunities for further value creation

### Risks to delivery and long-term sustainability

## Opportunities to strengthen NGSC delivery and capability
<!-- 
4–5 pages

Identify discrete work packages that could be jointly considered by SURROUND and Accenture
-->

### Prioritisation principles

### WA 3D CSDM profile and standards development

### Validation, testing, and quality assurance

### Data transformation and migration

### 3D cadastre implementation and demonstrators

### Integration, governance, and capability development

## Implementation roadmap and engagement opportunities
<!-- 
2–3 pages

Translate the future work programme into practical phases.
-->

### Immediate priorities and decision points

### Medium-term development opportunities

### Longer-term strategic opportunities

### Potential delivery and collaboration arrangements

## Conclusions and recommended next steps
<!--
1–2 pages

Conclude with an assessment of the engagement's contribution to NGSC
-->

### Overall assessment

### Decisions and actions recommended

### Pathway to future collaboration

## References

[Click here for references](final-report_refs.bib)