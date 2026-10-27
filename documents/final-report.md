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

**Date:** 2026-10-31

<!--
Date: 2026-10-15

Convert to PDF using `print_to_pdf`
-->

<!-- TOC -->

## Table of contents

<!--
Sections 1–3 establish what was undertaken and delivered; 
Sections 4–5 explain what was learned and what remains uncertain; 
Sections 6–8 establish where the programme could go next and the value of doing so.
-->

- [1. Executive summary](#1-executive-summary)
- [2. Project context, scope and approach](#2-project-context-scope-and-approach)
  - [2.1 NGSC programme context and objectives](#21-ngsc-programme-context-and-objectives)
  - [2.2 Contractual scope and responsibilities](#22-contractual-scope-and-responsibilities)
  - [2.3 Requirements analysis methodology](#23-requirements-analysis-methodology)
  - [2.4 Engagement, collaboration and knowledge transfer](#24-engagement-collaboration-and-knowledge-transfer)
- [3. Deliverables and outcomes](#3-deliverables-and-outcomes)
  - [3.1 Summary of the five deliverables](#31-summary-of-the-five-deliverables)
  - [3.2 Coverage of the 34 NGSC requirements](#32-coverage-of-the-34-ngsc-requirements)
  - [3.3 Technical and architectural contributions](#33-technical-and-architectural-contributions)
  - [3.4 Acceptance criteria and validation readiness](#34-acceptance-criteria-and-validation-readiness)
  - [3.5 Status of outputs and remaining dependencies](#35-status-of-outputs-and-remaining-dependencies)
- [4. Consolidated technical and strategic findings](#4-consolidated-technical-and-strategic-findings)
  - [4.1 3D CSDM alignment and WA profile development](#41-3d-csdm-alignment-and-wa-profile-development)
  - [4.2 Cadastral data exchange and interoperability](#42-cadastral-data-exchange-and-interoperability)
  - [4.3 3D geometry, topology and boundary representation](#43-3d-geometry-topology-and-boundary-representation)
  - [4.4 Metadata, data quality and standards compliance](#44-metadata-data-quality-and-standards-compliance)
  - [4.5 CSDM Transforms](#45-csdm-transforms)
  - [4.6 Cross-cutting dependencies and architectural decisions](#46-cross-cutting-dependencies-and-architectural-decisions)
- [5. Strategic assessment: strengths, gaps, opportunities and risks](#5-strategic-assessment-strengths-gaps-opportunities-and-risks)
  - [5.1 Strengths and capabilities established](#51-strengths-and-capabilities-established)
  - [5.2 Capability gaps and areas requiring further development](#52-capability-gaps-and-areas-requiring-further-development)
  - [5.3 Opportunities for further value creation](#53-opportunities-for-further-value-creation)
  - [5.4 Risks to delivery and long-term sustainability](#54-risks-to-delivery-and-long-term-sustainability)
- [6. Opportunities to strengthen NGSC delivery and capability](#6-opportunities-to-strengthen-ngsc-delivery-and-capability)
  - [6.1 Prioritisation principles](#61-prioritisation-principles)
  - [6.2 WA 3D CSDM profile and standards development](#62-wa-3d-csdm-profile-and-standards-development)
  - [6.3 Validation, testing and quality assurance](#63-validation-testing-and-quality-assurance)
  - [6.4 Data transformation and migration](#64-data-transformation-and-migration)
  - [6.5 3D cadastre implementation and demonstrators](#65-3d-cadastre-implementation-and-demonstrators)
  - [6.6 Integration, governance and capability development](#66-integration-governance-and-capability-development)
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


## 2. Project context, scope and approach
<!-- 
2 - 3 pages

State SURROUND's objectives and its relationship to Accenture, Landgate and the NGSC programme.
Describe the methodology across the five deliverables: requirement interpretation, NGSC responsibilities, 3D CSDM alignment, technical constraints, acceptance criteria and dependencies.
Clarify the split of responsibility between SURROUND and the NGSC implementation team.
Show how contracted machine-readable specifications and other technical outputs were addressed, referencing artefacts where they exist.
-->

### 2.1 NGSC programme context and objectives

### 2.2 Contractual scope and responsibilities

### 2.3 Requirements analysis methodology

### 2.4 Engagement, collaboration and knowledge transfer

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

### 4.3 3D geometry, topology and boundary representation

### 4.4 Metadata, data quality and standards compliance

### 4.5 CSDM Transforms

### 4.6 Cross-cutting dependencies and architectural decisions

## 5. Strategic assessment: strengths, gaps, opportunities and risks
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

### 6.3 Validation, testing and quality assurance

### 6.4 Data transformation and migration

### 6.5 3D cadastre implementation and demonstrators

### 6.6 Integration, governance and capability development

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

[Click here for references](srs_refs.bib)