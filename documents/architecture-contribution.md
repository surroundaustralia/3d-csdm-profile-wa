<!-- TITLE PAGE -->

<img class="title-logo" src="assets/surround.jpeg" alt="Surround Australia logo">

#### Accenture Australia Pty Ltd

<div style="margin-top: 10rem;"></div>

# Spatial WA – Next Generation Spatial Cadastre (NGSC)

<div style="margin-top: 8rem;"></div>

## 3D CSDM Solution Architecture Contribution

<div class="title-spacer"></div>

Prepared by: Surround Australia Pty Ltd (SURROUND)

**Date:** 2026-11-02

<!-- TOC -->

## Table of Contents
1. [Introduction](#introduction)
2. [Purpose, scope, and responsibilities](#purpose-scope-and-responsibilities)
3. [Architectural Overview](#architectural-overview)
4. [Architectural viewpoints](#architectural-viewpoints)
5. [Requirement-specific architecture contributions](#requirement-specific-architecture-contributions)
6. [Specifications and verification](#specifications-and-verification)
7. [Integration considerations and dependencies](#integration-considerations-and-dependencies)
8. [Summary](#summary)
9. [References](#references)
10. [Appendices](#appendices)

<div style="margin-top: 8rem;"></div>

##### Revision history

| Version | Status | Date       | Author | Description    |
|---------|--------|------------|--------|----------------|
| 0.1     | Draft  | 2026-10-26 |        | Report created |

<!-- CONTENT -->

## Introduction

<!--
Write the report from here on. Headings at levels 2 and 3 (## and ###) are numbered
and listed on the contents page.
An "## Executive Summary" heading before the first section is left unnumbered,
and the section after it starts on a new page.

Citations: [@key] for one work, [@key1; @key2] for several, using keys from
architecture-contribution_refs.bib. They are formatted as APA, or IEEE with --style ieee.

Figures: an HTML <figure> with an <img> and a <figcaption> that starts
"Figure N: ". Number figures yourself, in order. The image path is relative to this
file's folder (put images in assets/). The class "fig" keeps the image and caption
on one page; a second class places the figure:

- fig-wide: across the page, text above and below; set the image width with style
  on the <img>.
- fig-left, fig-right: floated, with the text that follows wrapping beside it;
  45% wide unless style="width: ..." is set on the <figure>. Put the figure just
  before the paragraph that should wrap. Headings at levels 2 and 3 start below it.
- fig-here: add to keep a figure exactly where it is written. Otherwise a figure
  that would leave a gap at the foot of a page moves below the paragraphs that
  follow it (never past a heading, table or another figure).

    <figure class="fig fig-wide">
      <img src="assets/site-plan.png"
           alt="Figure 1: Site plan showing the control marks"
           style="width: 75%;">
      <figcaption>Figure 1: Site plan showing the control marks</figcaption>
    </figure>

    [Figure 1](#fig-1) shows ...

    <figure class="fig fig-left" style="width: 40%;">
      <img src="assets/mark-detail.png" alt="Figure 2: Detail of PM 101">
      <figcaption>Figure 2: Detail of PM 101</figcaption>
    </figure>

    [Figure 2](#fig-2) shows ... (this paragraph wraps on the right)

Tables: a heading "#### Table N: ..." directly above a Markdown table, numbered
in order. The heading becomes the caption and is kept with the first rows.

    #### Table 1: Control marks used

    | Mark   | Type | Class |
    |--------|------|-------|
    | PM 101 | PM   | B     |

    [Table 1](#tbl-1) lists ...

Both are listed on the contents page. Link to them as #fig-N and #tbl-N; the
converter sets those anchors and replaces any id you give a figcaption.

Acronyms: list them in architecture-contribution_acronyms.json (see acronym-management).
-->

## Purpose, scope, and responsibilities
<!--
Describe the document's relationship to Accenture's overall Solution Architecture and Schedule 1.
-->
### Purpose

This document consolidates SURROUND Australia Pty Ltd's (SURROUND) Cadastral Survey Data (CSD), 3D Cadastral Survey Data Model (3D CSDM), and metadata architecture contributions to the Western Australian Next Generation Spatial Cadastre (NGSC) project.

It documents the information structures, standards, specifications, and architectural considerations relevant to SURROUND's allocated requirements, providing supporting material for Accenture's NGSC Solution Architecture.

The document draws upon the five requirements analysis deliverables, the Western Australian 3D CSDM profile, associated technical developments, and supporting documentation.

Its goal is to identify the relevant 3D CSDM components, establish traceability to technical artefacts, and document integration considerations and outstanding architectural dependencies.

### Contractual context and scope

Accenture engaged SURROUND to provide specialist cadastral information modelling, standards development, requirements analysis, and technical support.

Schedule 1 of the subcontract [@accenture_ngsc_subcontract_2025;] identifies 34 allocated requirements, comprising 15 classified as SURROUND Responsible and 19 as SURROUND Supporting.
For applicable Responsible requirements, Schedule 1 requires documentation of CSD, 3D CSDM, or metadata components in a Solution Architecture document, together with other specified technical deliverables.

This document addresses the architectural documentation requirement through the following areas:

- **Information architecture:** 3D CSDM structures, WA profile extensions, identifiers, metadata, provenance, and controlled vocabularies.
- **Geometry and topology:** Cadastral geometry, topological relationships, legal boundary definitions, and geometric constraints.
- **Data exchange:** Survey information exchange, legacy CSD transformation, and preservation of source observations.
- **Validation:** Structural, semantic, geometric, topological, and cadastral validation approaches.
- **Processing capabilities:** Relevant transformation, validation, visualisation, and reporting patterns.
- **Requirement traceability:** Relationships between requirements, specifications, technical artefacts, and dependencies.

Supporting requirements are included where relevant to architectural decisions or shared information components.

### Responsibilities and architectural boundaries

Accenture is responsible for the overall NGSC solution architecture, system development, integration, and delivery.
Landgate retains responsibility for jurisdictional policy, business requirements, and authoritative cadastral decisions.

SURROUND's contribution concerns the cadastral information architecture, associated standards, technical specifications, validation approaches, and supporting implementation guidance.

The 3D CSDM defines information structures for representing and exchanging cadastral information.
It does not prescribe NGSC applications, databases, operational workflows, permissions, or transaction management.

Accordingly, this document does not define the complete NGSC system architecture, including the detailed Esri Parcel Fabric implementation, infrastructure, security, or operational services.

Where requirements involve both information modelling and system functionality, the relevant information components and integration dependencies are identified without prescribing the internal NGSC implementation.

The technical artefacts referenced remain at varying stages of development.
Their inclusion does not establish formal acceptance, standards conformance, or operational readiness.

## Relationship to supporting documentation

This document is intended to complement Accenture's NGSC Solution Architecture.

The principal supporting materials are:

#### Table 1: Supporting documentation

| Reference              | Purpose                                                                                                                                                   |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Subcontract Schedule 1 | Contractual requirements and deliverable obligations.                                                                                                     |
| Deliverables 1–5       | Requirements analyses, 3D CSDM perspectives, proposed acceptance criteria, and dependencies.                                                              |
| End of Project Report  | Consolidated technical findings, architectural decisions, and recommendations, including requirements tracability matrix and technical artefact register. |
| Technical repositories | Machine-readable specifications, datasets, validation resources, and supporting implementations.                                                          |

Subsequent sections identify the architectural components applicable to individual requirements and reference the supporting specifications.

Decisions dependent on NGSC implementation arrangements are identified for reconciliation with Accenture's Solution Architecture.

## Architectural overview
<!-- 
Explain the role of 3D CSDM, WA profiles, source-format transformation and NGSC integration boundaries.
-->

## Architectural viewpoints
<!--
Summarise the Enterprise, Information, Computational, Engineering and Technology perspectives relevant to SURROUND's work.
-->

## Requirement-specific architecture contributions
<!--
Identify the CSD/3D CSDM or metadata components applicable to each relevant Responsible requirement.
-->
This section identifies the CSD, 3D CSDM, and metadata architecture components relevant to the 15 requirements classified as SURROUND Responsible under Schedule 1 of the subcontract.

The requirements are grouped by common information architecture concerns to avoid duplication of shared components.
Each requirement is linked to its principal technical contribution, supporting artefacts, and dependencies on NGSC implementation or further decisions.

The architecture contributions describe information structures and processing patterns rather than the internal design of NGSC applications or services.
Detailed requirement analyses and proposed acceptance criteria are provided in Deliverables 2–5, with additional traceability in the End of Project Report.

### Cadastral information exchange and transformation

The recommended information architecture uses the 3D CSDM and its Western Australian profile as the common representation for cadastral survey information exchange.
Existing CSD formats may be transformed into this representation, subject to defined mapping rules and preservation of source information.

#### Table 2: Cadastral information exchange and transformation architecture contributions

| Requirement                                              | Architectural contribution                                                                                                | Supporting artefacts                                                   | Integration considerations and dependencies                                                      |
|----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **NF02.03.047**: Manually import lodged surveys          | CSD/3D CSDM exchange structures, parcel identifiers, survey observations, spatial representations and provenance.         | WA 3D CSDM profile; common components; Deliverable 3.                  | Source matching, manual exception handling, validation, and authoritative dataset updates.       |
| **NF02.03.067**: Import 3D CSDM to Mining Cadastre       | Common cadastral information structures with profile-specific constraints for mining cadastral information.               | 3D CSDM common components; WA profile; Deliverable 3.                  | Mining Cadastre product requirements, mapping, validation and record maintenance.                |
| **NN01.02.016**: Support 3D CSDM exchange specification  | Machine-readable information structures, schemas, semantic definitions, controlled vocabularies and validation resources. | WA profile; common components; ICSM vocabularies; OGC Building Blocks. | Profile versions, supported product types, conformance requirements and application integration. |
| **NN01.02.017**: Support CSD format specification        | Legacy CSD information mappings, survey observation structures, identifiers and transformation provenance.                | APX-05 analysis; 3D CSDM specifications; Deliverable 3.                | Transformation rules, incomplete records, information loss and conversion validation.            |

### Survey observations and control

The 3D CSDM provides structured representations of survey observations, points, survey marks, and associated reference information.
Processing requirements must distinguish original observations from derived information and preserve the basis for any calculations.

#### Table 3: Survey observations and control architecture contributions

| Requirement                                  | Architectural contribution                                                                                        | Supporting artefacts                                                                     | Integration considerations and dependencies                                                            |
|----------------------------------------------|-------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| **NF02.03.059**: eField Records              | Survey observation structures, points, lines, angles, connections, and provenance information.                    | 3D CSDM common components; WA profile; Deliverable 3.                                    | eField Records import, geographic placement, control-point creation and survey adjustment interfaces.  |
| **NF02.03.071**: Accept angles and bearings  | Representation of observed angles and azimuths, derived bearings, calculation provenance and quality information. | *Angles and Directions*; APX-05 technical advice; `angles-to-bearings` proof of concept. | Bearing derivation, incomplete networks, conflicting observations, uncertainty and quality thresholds. |
| **NF02.03.076**: Import non-geodetic control | Survey points, marks, observations, cadastral connections and associated identifiers.                             | 3D CSDM survey information structures; Deliverable 4.                                    | Candidate identification, duplicate detection, Editor selection and authoritative record creation.     |
| **NF04.01.010**: API eField Records          | Information exchange structures for survey records, observations and associated reference information.            | 3D CSDM survey information structures; Deliverable 3.                                    | API specification, authentication, data mapping, processing states and error handling.                 |

### 3D cadastral representation and visualisation

The WA 3D CSDM profile supports representation of multi-component 3D parcels, including built-strata schemes where legal boundaries may be defined relative to building elements or other reference features.

#### Table 4: 3D cadastral representation and visualisation architecture contributions

| Requirement                                | Architectural contribution                                                             | Supporting artefacts                                                                                               | Integration considerations and dependencies                                                               |
|--------------------------------------------|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| **NF02.02.027**: 2D view of building level | 3D parcel solids, parcel components, vertical extents and derived horizontal sections. | WA built-strata profile; SP83687 example dataset; horizontal section viewer proof of concept; Topo Feature viewer. | Selection of levels and section elevations, graphical presentation, accuracy and application integration. |

The supporting technical developments demonstrate the derivation and visualisation of two-dimensional sections from structured 3D cadastral information.
They do not prescribe the NGSC user interface or rendering implementation.

### Metadata, naming, and standards compliance

The 3D CSDM provides source-level information concerning survey datasets, identifiers, coordinate reference information, purpose, and provenance.
Additional operational metadata, catalogue management, quality assessments, and feedback workflows are NGSC responsibilities.

#### Table 5: Metadata, naming, and standards compliance architecture contributions

| Requirement                                    | Architectural contribution                                                                                              | Supporting artefacts                                                | Integration considerations and dependencies                                                     |
|------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| **NF02.02.036**: Metadata for my NGSC dataset  | Dataset identifiers, provenance and references supporting traceability between cadastral datasets and metadata records. | 3D CSDM metadata structures; Deliverable 5.                         | Metadata feedback interface, catalogue linkage, issue-management workflow, ownership and audit. |
| **NF03.02.006**: Metadata for NGSC dataset     | Source metadata structures and proposed mappings to NGSC catalogue information.                                         | 3D CSDM metadata structures; Deliverable 4.                         | Authoritative NGSC Metadata Profile, catalogue ownership and metadata maintenance.              |
| **NF03.02.007**: Metadata conforms to standard | Metadata schema constraints, controlled vocabularies and validation mechanisms.                                         | WA profile; OGC Building Blocks; Deliverable 3.                     | Applicable metadata standards, profile versions, compliance validation and reporting.           |
| **NN01.02.015**: Geographical naming           | Structured appellations using the `compoundName` pattern, with typed name components and jurisdictional vocabularies.   | WA profile appellation datatypes; ICSM vocabularies; Deliverable 2. | Authoritative naming policies, name sources, language attribution and NGSC record mapping.      |

### Plan lodgement and validation interfaces

The 3D CSDM defines the cadastral information exchanged through plan lodgement and validation interfaces.
The NGSC platform is responsible for implementing the associated APIs, workflows, transactions, and authoritative data management.

#### Table 6: Plan lodgement and validation interfaces architecture contributions

| Requirement                           | Architectural contribution                                                                         | Supporting artefacts                                                                   | Integration considerations and dependencies                                                   |
|---------------------------------------|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **NF04.01.002**: API to lodge plan    | CSD/3D CSDM survey-package structures, identifiers, cadastral content and provenance.              | WA profile; exchange specifications; Deliverable 4.                                    | API contract, lodgement workflows, source matching, record creation and transaction handling. |
| **NF04.01.004**: API to validate plan | Structural, semantic, geometric, topological and jurisdiction-specific cadastral validation rules. | WA profile; OGC Building Blocks validation resources; `topo-functions`; Deliverable 4. | Validation stages, API responses, error reporting, applicable rules and acceptance decisions. |

### Architectural dependencies and traceability

The requirement-specific contributions rely on shared information structures and validation components.
The relevant technical specifications should therefore be maintained independently of individual NGSC application functions wherever practical.

Outstanding dependencies include confirmation of supported cadastral products, authoritative metadata profiles, transformation rules, validation requirements, and the responsibilities of NGSC services and workflows.

The detailed requirement analyses, proposed acceptance criteria, and outstanding dependencies are documented in the five deliverables.
The End of Project Report provides consolidated requirement and artefact registers and identifies the principal architectural decisions requiring confirmation.

The architecture contributions described here provide supporting information for incorporation into Accenture's NGSC Solution Architecture.
Their relationship to the implemented Esri/Parcel Fabric solution remains subject to reconciliation with Accenture's architecture documentation.

## Specifications and verification
<!--
Reference schemas, ontologies, example datasets, validation rules, transformation specifications, tests and acceptance criteria.
-->

## Integration considerations and dependencies
<!--
Identify the decisions that must be addressed within Accenture's Esri/Parcel Fabric solution.
-->

## Summary

## References

[Bibliography](architecture-contribution_refs.bib)

<!--
Appendices go after the references: an "## Appendices" heading gets a separator
page of its own, and each "## Appendix A: ..." heading starts a new page.
Number an appendix's figures and tables by its letter, "Figure A.1: ..." and
"#### Table A.1: ...", and link them as [Table A.1](#tbl-A.1).
-->

## Appendices

### Appendix A: Supporting documentation
<!--
Reference Appendix A, Appendix B, the five requirements reports and relevant repositories.
-->