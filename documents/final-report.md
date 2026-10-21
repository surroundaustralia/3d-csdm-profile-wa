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

<!--
Sections 1–3 establish what was undertaken and delivered; 
Sections 4–5 explain what was learned and what remains uncertain; 
Sections 6–8 establish where the programme could go next and the value of doing so.
-->

- [1. Executive summary](#1-executive-summary)
  - [1.1 Engagement overview and purpose](#11-engagement-overview-and-purpose)
  - [1.2 Key outcomes and value delivered](#12-key-outcomes-and-value-delivered)
  - [1.3 Principal findings and strategic implications](#13-principal-findings-and-strategic-implications)
  - [1.4 Priority recommendations and next steps](#14-priority-recommendations-and-next-steps-)
- [2. Project context, scope, and approach](#2-project-context-scope-and-approach)
  - [2.1 NGSC programme context and objectives](#21-ngsc-programme-context-and-objectives)
  - [2.2 Contractual scope and responsibilities](#22-contractual-scope-and-responsibilities)
  - [2.3 Requirements analysis methodology](#23-requirements-analysis-methodology)
  - [2.4 Engagement, collaboration, and knowledge transfer](#24-engagement-collaboration-and-knowledge-transfer)
- [3. Deliverables and outcomes](#3-deliverables-and-outcomes)
  - [3.1 Summary of the five deliverables](#31-summary-of-the-five-deliverables)
  - [3.2 Coverage of the 34 NGSC requirements](#32-coverage-of-the-34-ngsc-requirements)
  - [3.3 Technical and architectural contributions](#33-technical-and-architectural-contributions)
  - [3.4 Acceptance criteria and validation readiness](#34-acceptance-criteria-and-validation-readiness)
  - [3.5 Status of outputs and remaining dependencies](#35-status-of-outputs-and-remaining-dependencies)
- [4. Consolidated technical and strategic findings](#4-consolidated-technical-and-strategic-findings)
  - [4.1 3D CSDM alignment and WA profile development](#41-3d-csdm-alignment-and-wa-profile-development)
  - [4.2 Cadastral data exchange and interoperability](#42-cadastral-data-exchange-and-interoperability)
  - [4.3 3D geometry, topology, and boundary representation](#43-3d-geometry-topology-and-boundary-representation)
  - [4.4 Metadata, data quality and standards compliance](#44-metadata-data-quality-and-standards-compliance)
  - [4.5 Cadastral workflows, APIs, and system integration](#45-cadastral-workflows-apis-and-system-integration)
  - [4.6 Cross-cutting dependencies and architectural decisions](#46-cross-cutting-dependencies-and-architectural-decisions)
- [5. Strategic assessment: strengths, gaps, opportunities, and risks](#5-strategic-assessment-strengths-gaps-opportunities-and-risks)
  - [5.1 Strengths and capabilities established](#51-strengths-and-capabilities-established)
  - [5.2 Capability gaps and areas requiring further development](#52-capability-gaps-and-areas-requiring-further-development)
  - [5.3 Opportunities for further value creation](#53-opportunities-for-further-value-creation)
  - [5.4 Risks to delivery and long-term sustainability](#54-risks-to-delivery-and-long-term-sustainability)
- [6. Opportunities to strengthen NGSC delivery and capability](#6-opportunities-to-strengthen-ngsc-delivery-and-capability)
  - [6.1 Prioritisation principles](#61-prioritisation-principles)
  - [6.2 WA 3D CSDM profile and standards development](#62-wa-3d-csdm-profile-and-standards-development)
  - [6.3 Validation, testing, and quality assurance](#63-validation-testing-and-quality-assurance)
  - [6.4 Data transformation and migration](#64-data-transformation-and-migration)
  - [6.5 3D cadastre implementation and demonstrators](#65-3d-cadastre-implementation-and-demonstrators)
  - [6.6 Integration, governance, and capability development](#66-integration-governance-and-capability-development)
- [7. Implementation roadmap and engagement opportunities](#7-implementation-roadmap-and-engagement-opportunities)
  - [7.1 Immediate priorities and decision points](#71-immediate-priorities-and-decision-points)
  - [7.2 Medium-term development opportunities](#72-medium-term-development-opportunities)
  - [7.3 Longer-term strategic opportunities](#73-longer-term-strategic-opportunities)
  - [7.4 Potential delivery and collaboration arrangements](#74-potential-delivery-and-collaboration-arrangements)
- [8. Conclusions and recommended next steps](#8-conclusions-and-recommended-next-steps)
  - [8.1 Overall assessment](#81-overall-assessment)
  - [8.2 Decisions and actions recommended](#82-decisions-and-actions-recommended)
  - [8.3 Pathway to future collaboration](#83-pathway-to-future-collaboration)
- [References](#references)

<div style="margin-top: 8rem;"></div>

##### Revision history

| Version | Status | Date       | Author        | Description |
|---------|--------|------------|---------------|-------------|
| 0.1     | Draft  | 2026-10-15 | Andrew Hunter | Initial TOC |

This document is complete as of the date of presentation to Accenture. 

<!-- CONTENT -->

## 1. Executive summary
<!-- 
2 - 3 pages

Summarise the engagement, the 34 requirement assessments, key findings and their contribution to NGSC implementation.
Emphasise reduced technical uncertainty, clarified responsibilities and an implementable approach to 3D cadastral information.
End with three to five priority recommendations: what should happen next and why it matters.

Do last
-->


## 2. Project context, scope, and approach
<!-- 
2 - 3 pages

State SURROUND's objectives and its relationship to Accenture, Landgate and the NGSC programme.
Describe the methodology across the five deliverables: requirement interpretation, NGSC responsibilities, 3D CSDM alignment, technical constraints, acceptance criteria and dependencies.
Clarify the split of responsibility between SURROUND and the NGSC implementation team.
Show how contracted machine-readable specifications and other technical outputs were addressed, referencing artefacts where they exist.
-->

This section outlines SURROUND's role in the Western Australian Next Generation Spatial Cadastre (NGSC) project, its contractual responsibilities, and the approach adopted across the five deliverables. 
It also describes the requirements analysis methodology, supporting technical development, collaboration, and knowledge transfer.

### 2.1 NGSC programme context and objectives

The Next Generation Spatial Cadastre (NGSC) project forms part of Landgate's broader Spatial WA programme. 
Its objectives include modernising cadastral information management, supporting the transition from two-dimensional to three-dimensional cadastral representations, improving data quality and validation, and enabling integration with contemporary spatial information systems.

Accenture is the prime contractor responsible for delivering the NGSC solution to Landgate. 
Accenture engaged SURROUND Australia to provide specialist cadastral information modelling, standards development, and technical advice, particularly concerning the Intergovernmental Committee on Surveying and Mapping (ICSM) [3D Cadastral Survey Data Model](https://icsm-au.github.io/3d-csdm/) (3D CSDM).

SURROUND's primary objective was to translate relevant NGSC requirements into standards-aligned information specifications suitable for implementation and testing. 
This involved identifying applicable standards, determining where Western Australian extensions were necessary, and highlighting dependencies on NGSC system design or business decisions.

A central consideration was that the 3D CSDM defines cadastral information for exchange, rather than the complete NGSC system. 
The work therefore distinguished information modelling responsibilities from the applications, services, and business processes needed to operate the spatial cadastre.

The broader objective was to establish a consistent, reusable standards-based foundation for NGSC development, with potential application beyond Western Australia.

### 2.2 Contractual scope and responsibilities

SSURROUND was engaged under a 12-month subcontract to Accenture. 
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

### 2.3 Requirements analysis methodology

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

### 2.4 Machine-readable specifications and technical outputs

Technical development accompanied the requirements analysis to support contracted machine-readable specifications and investigate practical implementation approaches.

Work included the Western Australian 3D CSDM profile, common model components, controlled vocabularies, cadastral example datasets, and topology and validation functions. 
Supporting proof-of-concept developments included 3D and sectional viewers, reporting components, topology validation tools, and survey calculation utilities.

These outputs were managed through GitHub repositories, providing traceable, reusable specifications, examples, validation rules, and supporting software. 
The principal workstreams included the WA 3D CSDM profile, ICSM vocabularies, common CSDM components, Topo Feature, and topology validation functions.

The technical artefacts complement the written requirements analysis and demonstrate potential implementation approaches. 
Their applicability, maturity, and relationship to individual contractual requirements are examined in later sections of this report.

### 2.5 Engagement, collaboration, and knowledge transfer

SURROUND supported Accenture through specialist technical advice, collaborative requirements analysis, and standards-based development. 
The approach involved working with Accenture, its spatial implementation team, and Landgate to clarify requirements, technical considerations, and acceptance expectations.

Collaboration was necessary because cadastral requirements span several responsibilities. 
Survey and land administration practices establish the meaning of the information, standards define its representation and exchange, and the NGSC implementation determines how it is managed operationally.

The requirements reports, proposed acceptance criteria, documented dependencies, and technical examples provided a common reference for design discussions, implementation planning, and verification.

Knowledge transfer was supported through documentation, shared repositories and reusable examples and validation components. 
Technical development adopted open standards and the [OGC Building Blocks](https://ogcincubator.github.io/bblocks-docs/) approach, enabling specifications and supporting artefacts to be published, tested, and maintained independently of individual applications.

Collectively, the work established a reusable foundation for continued NGSC development and further refinement of the Australian 3D CSDM. 
Its longer-term value will depend on the adoption, integration, and verification of these outputs within the NGSC solution.

## 3. Deliverables and outcomes
<!-- 
3 - 4 pages
Concise account of what the five deliverables achieved, rather than reproducing the 34 individual assessments.

Add traceability to machine-readable schemas, ontologies, sample datasets, validation and transformation specifications, acceptance criteria and standards compliance.

Compact version here, more details in an Appendix if necessary
-->

| Deliverable | Requirements | Principal focus                                                                 |
|-------------|--------------|---------------------------------------------------------------------------------|
| 1           | 1            | NGSC data growth, scalability and 3D cadastral capability                       |
| 2           | 10           | Geographical naming, ABS Data Quality Framework and government standards        |
| 3           | 15           | Cadastral editing, 3D visualisation, data exchange, workflows and APIs          |
| 4           | 6            | Survey control, metadata, plan lodgement, validation and boundary relationships |
| 5           | 2            | Metadata feedback workflows and 3D boundary alignment                           |
| **Total**   | **34**       |                                                                                 |

### 3.1 Summary of the five deliverables

### 3.2 Coverage of the 34 NGSC requirements

### 3.3 Technical and architectural contributions

### 3.4 Acceptance criteria and validation readiness

### 3.5 Status of outputs and remaining dependencies

## 4. Consolidated technical and strategic findings
<!-- 
4 - 6 pages

Synthesise recurring issues across the 34 assessments: NGSC–3D CSDM alignment, legacy survey data transformation, 3D topology and boundary semantics, metadata governance, and the split between data-model and application-workflow responsibilities.

Include a decision register?
-->

### 4.1 3D CSDM alignment and WA profile development

### 4.2 Cadastral data exchange and interoperability

### 4.3 3D geometry, topology, and boundary representation

### 4.4 Metadata, data quality and standards compliance

### 4.5 Cadastral workflows, APIs, and system integration

### 4.6 Cross-cutting dependencies and architectural decisions

## 5. Strategic assessment: strengths, gaps, opportunities, and risks
<!-- 
2 - 3 pages

Analyse the readiness of the NGSC programme to realise the capabilities addressed through this engagement.
-->

### 5.1 Strengths and capabilities established

### 5.2 Capability gaps and areas requiring further development

### 5.3 Opportunities for further value creation

### 5.4 Risks to delivery and long-term sustainability

## 6. Opportunities to strengthen NGSC delivery and capability
<!-- 
4–5 pages

Identify discrete work packages that could be jointly considered by SURROUND and Accenture
-->

### 6.1 Prioritisation principles

### 6.2 WA 3D CSDM profile and standards development

### 6.3 Validation, testing, and quality assurance

### 6.4 Data transformation and migration

### 6.5 3D cadastre implementation and demonstrators

### 6.6 Integration, governance, and capability development

## 7. Implementation roadmap and engagement opportunities
<!-- 
2–3 pages

Translate the future work programme into practical phases.
-->

### 7.1 Immediate priorities and decision points

### 7.2 Medium-term development opportunities

### 7.3 Longer-term strategic opportunities

### 7.4 Potential delivery and collaboration arrangements

## 8. Conclusions and recommended next steps
<!--
1–2 pages

Conclude with an assessment of the engagement's contribution to NGSC
-->

### 8.1 Overall assessment

### 8.2 Decisions and actions recommended

### 8.3 Pathway to future collaboration

## References

[Click here for references](final-report_refs.bib)