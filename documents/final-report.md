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

This document is complete as of the date of presentation to RAN in satisfaction of the Milestone #6 deliverables. 

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

This section outlines the context in which SURROUND was engaged to support the Western Australian Next Generation Spatial Cadastre (NGSC) project, the scope of its responsibilities, and the approach adopted in delivering the contracted work.

It describes SURROUND's relationship with Accenture and Landgate, the methodology applied across the five project deliverables, and the distinction between cadastral information modelling and NGSC system implementation responsibilities. 
It also summarises the collaborative approach to requirements analysis, technical specification development, and knowledge transfer.

Together, these provide the context for assessing the work undertaken, the technical outputs produced, and the opportunities for further development identified through the engagement.

### 2.1 NGSC programme context and objectives

The Western Australian Next Generation Spatial Cadastre (NGSC) project forms part of Landgate's broader Spatial WA programme. 
The project seeks to modernise the management of cadastral information, including the transition from predominantly two-dimensional cadastral representations to a spatial cadastre capable of supporting three-dimensional parcels, improved data quality, automated validation, and integration with contemporary spatial information systems.

Accenture is the prime contractor responsible for delivery of the NGSC solution to Landgate. 
Accenture engaged SURROUND Australia to provide specialist cadastral information modelling, standards development, and technical advisory services, with particular emphasis on the Intergovernmental Committee on Surveying and Mapping (ICSM) [3D Cadastral Survey Data Model (3D CSDM)](https://icsm-au.github.io/3d-csdm/).

SURROUND's primary objective was to assist Accenture and Landgate in translating the NGSC business and functional requirements into well-defined, standards-aligned information requirements that could be implemented, tested, and maintained. 
This included identifying where existing national and international standards could be applied, where Western Australian requirements warranted extensions or additional specification, and where the proposed functionality depended on decisions concerning NGSC system design or business processes.

An important consideration throughout the engagement was that the 3D CSDM is an information exchange standard, rather than a specification for the complete NGSC system. 
The work therefore sought to distinguish the responsibilities of the cadastral information model from those of the applications, services, and business processes required to implement and maintain the spatial cadastre.

The intended outcome was not just to document individual requirements, but to establish a more consistent and reusable standards-based foundation for NGSC development, with opportunities for adoption beyond the immediate Western Australian implementation.

### 2.2 Contractual scope and responsibilities

SURROUND was engaged under a 12-month subcontract to Accenture, within the broader NGSC delivery programme. 
The contracted services covered specialist data design, requirements analysis, co-design, development of CSDM profiles and supporting specifications, identification of technical constraints, validation, and definition of potential acceptance criteria.

The Statement of Work distinguished between requirements for which SURROUND had responsibility for leading specified CSD and 3D CSDM-related outputs and requirements for which SURROUND provided specialist support to the Accenture implementation team. 
This distinction is important when assessing the work undertaken and the associated delivery responsibilities.

For the nominated CSD and 3D CSDM requirements, the contract identified technical outputs including machine-readable schemas, ontologies, example datasets, validation rules, and transformation specifications, where applicable. 
It also required documentation, test cases, and acceptance criteria to support subsequent solution development and verification.

For supporting requirements, SURROUND's role was primarily to assist in interpreting cadastral and 3D requirements, advise on information modelling and relevant standards, identify technical limitations and dependencies, and contribute to the definition of appropriate acceptance criteria.

Accenture retained overall responsibility for programme management, solution architecture, system development, integration, implementation, and delivery to Landgate. 
Landgate, as the client and business owner, retained responsibility for confirming business requirements, jurisdictional policy, and operational decisions. 
SURROUND's technical advice and specifications were intended to inform these activities rather than replace the detailed design and implementation responsibilities of the NGSC delivery team.

This allocation of responsibilities was particularly relevant where a requirement involved both information modelling and operational functionality. 
For example, the 3D CSDM can define and validate cadastral information exchanged with the NGSC, but the implementation of user interfaces, workflows, application programming interfaces, database services, and operational controls remains a responsibility of the NGSC solution.

The distinction also informed how unresolved technical and business matters were treated. 
Where a requirement depended on an agreed workflow, system architecture, data ownership arrangement, or jurisdictional rule, the dependency was identified rather than assuming a design decision on behalf of Accenture or Landgate.

### 2.3 Requirements analysis methodology

The work was undertaken through five deliverables, aligned with the staged NGSC programme requirements. 
Together, these addressed 34 requirements spanning cadastral data growth, data standards, 3D spatial representation, survey information, boundary management, metadata, validation, system interfaces, and associated business functions.

The methodology evolved during the engagement but retained a consistent approach to interpreting requirements and identifying the contribution of the 3D CSDM. 
For each requirement, the analysis generally addressed six related considerations:
1. Requirement interpretation: Establish the intended business capability, distinguish functional outcomes from proposed implementation approaches, and identify ambiguities or gaps in the requirement.
2. NGSC responsibilities: Identify the functionality expected of the NGSC solution, including relevant applications, services, workflows, and operational controls.
3. 3D CSDM alignment: Assess whether existing data models and standards support the requirement and identify any necessary extensions, information structures, or implementation patterns.
4. Technical constraints: Consider data availability, geometric and topological integrity, compatibility with existing survey information, validation, transformation, and interoperability.
5. Potential acceptance criteria: Propose testable outcomes and verification approaches, without unnecessarily prescribing implementation technology or detailed solution design.
6. Dependencies and decisions: Record outstanding policy, business, architectural, and technical matters requiring further consideration by Accenture, Landgate, or the NGSC implementation team.
The earlier deliverables included more detailed examination of individual data standards and technical requirements, while later deliverables adopted a consolidated reporting structure incorporating the original WA requirement, analysis, NGSC System Perspective, 3D CSDM Perspective, and potential acceptance criteria.

A deliberate feature of this approach was the separation of the NGSC System Perspective from the 3D CSDM Perspective. 
SURROUND prepared the requirement analysis and cadastral information modelling perspective, with the NGSC System Perspective reserved for completion by the implementation team. 
This provided a basis for coordinated design while avoiding assumptions about implementation decisions that had not yet been made.

The analyses also recognised that not all requirements could be fully resolved through information modelling. 
Matters such as metadata governance, lodgement and approval workflows, system ownership, historical survey information, and the precise interpretation of certain 3D geometric operations required additional business or technical decisions. 
Identifying these dependencies was considered an important outcome of the analysis, as it provided greater clarity regarding subsequent design and implementation work.

### 2.4 Machine-readable specifications and technical outputs

In parallel with the requirements analysis, development work was undertaken to support machine-readable specifications and to investigate practical implementation approaches.

This included work on the Western Australian 3D CSDM profile and supporting common model components; development and refinement of controlled vocabularies; structured cadastral examples; topology and validation functions; and prototype capabilities for visualisation, reporting, and survey data processing.

The work was managed through GitHub repositories, allowing specifications, example datasets, validation logic, and supporting software to be developed and tested in a repeatable manner. 
These artefacts provide an implementation-oriented complement to the written requirements analyses and help demonstrate how the proposed information structures and constraints can be applied.

The principal technical workstreams are represented by the WA 3D CSDM profile, ICSM vocabularies, common CSDM components, Topo Feature model, and topology validation functions. 
Supporting (proof of concept) developments included horizontal section and 3D viewers, reporting components, and survey calculation utilities. 
These are discussed further in later sections of this report, together with their applicability to individual NGSC requirements.

### 2.5 Engagement, collaboration, and knowledge transfer

SURROUND's engagement was structured to support Accenture's delivery responsibilities through specialist advice, collaborative requirements interpretation, and development of standards-based technical outputs. 
The intended approach involved co-design with Landgate and Accenture and its spatial implementation team to clarify business requirements, policy considerations, and acceptance expectations.

Collaboration was important because cadastral requirements frequently span multiple areas of responsibility. 
Survey and land administration practices define the meaning of the information, standards establish how it can be represented and exchanged, and the NGSC implementation determines how that information is managed and used operationally.

The requirements reports and associated technical artefacts were developed to provide a common reference for these discussions. 
Proposed acceptance criteria, documented dependencies, and practical examples were intended to support later design workshops, implementation planning, and verification.

Knowledge transfer was also supported through documented specifications, shared development repositories and reusable examples and validation components. 
The technical work adopted open standards and the [OGC Building Blocks](https://ogcincubator.github.io/bblocks-docs/) approach, allowing specifications and their supporting examples to be published, tested, and maintained independently of any particular NGSC application.

This approach sought to provide Accenture and Landgate with more than individual requirement interpretations. 
It established a body of reusable cadastral information modelling and validation work that can support continued NGSC development, future refinement of the Australian 3D CSDM, and wider adoption of consistent cadastral information standards.

The distinction between completed analysis, supporting technical development and outstanding implementation decisions remains important. 
The outputs of this engagement provide a foundation for subsequent design and implementation, but their value will ultimately depend on their adoption, integration, and verification within the NGSC solution.

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