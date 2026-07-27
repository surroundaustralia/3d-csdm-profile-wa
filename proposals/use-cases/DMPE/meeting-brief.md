# WA 3D CSDM Mining Profile Review Workshop

## Meeting Brief

### Purpose

This workshop is intended to obtain departmental review and confirmation of the proposed approach for representing Western Australian mining tenement survey information using the 3D Cadastral Survey Data Model (3D CSDM).

The objective is to test the draft proposal against the Department’s operational processes, legislative responsibilities, survey practices, terminology, data holdings, and Mineral Titles Online workflows.

The principal outcome sought is agreement on whether the proposed use case, parcel classification, mining vocabularies, and validation rules provide an appropriate foundation for developing a WA 3D CSDM mining profile.

### Scope of the Review

The workshop will consider whether the proposed profile appropriately:

* represents a mining tenement as a cadastral tenure or statutory interest associated with underlying land;
* distinguishes the legal mining tenement boundary from marking-out evidence, survey observations, mine-plan information, and operational mine geometry;
* supports surveyed, unsurveyed, marked-out, pending, granted, amended, surrendered, restored, forfeited, and cancelled tenements;
* records mining-specific boundary sources, marking-out evidence, approved surveyor information, lifecycle events, GDA2020 coordinates, transformation provenance, and digital lodgement metadata;
* represents relationships to underlying cadastral parcels, Crown land, reserves, roads, water areas, pastoral leases, native title areas, infrastructure, and other mining tenements; and
* reuses the 3D CSDM common model and WA profile without unnecessarily duplicating existing parcel, geometry, topology, observation, document, provenance, and validation structures.

The proposed profile is limited to **cadastral and mining-tenure survey exchange**. 
It is not intended to replace Mineral Titles Online, cadastral database processes, mine survey systems, safety systems, geological or resource models, production systems, or mine-planning software.

### Key Modelling Decision for Confirmation

The draft proposes that every mining tenement be encoded as a:

**`SecondaryCadastralParcel`**

and not as a:

**`PrimaryCadastralParcel`**

Under this approach, the mining tenement is represented separately from the underlying primary cadastral fabric. 
The tenement may overlap, affect, constrain, or coexist with primary parcels and other land interests, while retaining its own identity, geometry, lifecycle, and statutory basis.

We would like the Department to confirm whether this distinction is consistent with:

* the legal character of mining tenements;
* departmental tenure and survey administration;
* the relationship between mining tenements and underlying land;
* cadastral database integration requirements; and
* terminology used in legislation, regulations, directions, MTO, and departmental datasets.

### Decisions Required

We are seeking departmental direction on the following matters:

1. **Use-case validity**
   Does the proposed use case accurately describe the information and processes required to exchange, review, validate, and integrate mining tenement survey datasets?

2. **Secondary parcel classification**
   Should mining tenements be mandatorily represented as `SecondaryCadastralParcel` features, including where a tenement has a surveyed legal boundary and is the only parcel-like feature in the dataset?

3. **Mining vocabulary**
   Which official values are required for:

   * tenement type;
   * tenement and survey status;
   * lifecycle events;
   * boundary-description source;
   * marking-out feature type;
   * mining geometry role; and
   * mining survey activity type?

4. **Validation rules**
   Which proposed rules should be mandatory, conditional, advisory, or excluded? Particular consideration is required for:

   * tenement identity and status;
   * approved surveyor and authority information;
   * marking-out evidence and exemptions;
   * GDA2020 and transformation provenance;
   * boundary-source traceability;
   * relationships to affected and abutting land;
   * MTO lodgement metadata;
   * lifecycle consistency; and
   * separation of legal tenement geometry from operational mine geometry.

5. **System and lifecycle alignment**
   How should the 3D CSDM dataset align with MTO transactions, departmental tenure lifecycle history, cadastral database lifecycle history, survey corrections, amendments, and partial surrenders?

### Expected Workshop Outcome

The preferred outcome is a documented departmental position identifying:

* elements that are supported as drafted;
* elements requiring amendment or clarification;
* missing legislative, operational, or data requirements;
* authoritative terminology and vocabulary sources;
* rules that should be mandatory or conditional; and
* matters that require further investigation before a formal WA mining profile is developed.

The workshop is not expected to approve a final schema. 
It is intended to confirm the modelling direction and establish the requirements that a subsequent mining-profile specification must satisfy.
