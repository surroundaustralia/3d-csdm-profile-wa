## Use case: Encode a WA multi-unit, multi-level survey-strata scheme as a 3D CSDM dataset

## Revision history

| Version | Date       | Author        | Summary of change                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|---------|------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0.1     | 2026-05-06 | Andrew Hunter | Initial draft prepared.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.2     | 2026-06-04 | Andrew Hunter | Added client and feedback: structures captured where within the nominated distance of a boundary and relevant to the plan; scheme-level information; scheme notice / scheme component information; strata element descriptions; unit entitlement; flexible free-text descriptions where prescribed values are too restrictive; height descriptions for vertically limited elements; by-law lodgement and supporting document references; and staged survey-strata conversion behaviour aligned with the built-strata companion use case. |

### Description

A WA survey-strata scheme contains a set of surveyed lots, common property, accessways, service areas, easements, optional vertical limits, scheme-level information, strata element descriptions, unit entitlement information, supporting documents, and provenance.

Buildings and other structures may exist on the lots. 
They are not the basis for survey-strata cadastral boundaries and should not be used to define the survey-strata lot geometry. 
However, structures may still be captured where they are within the nominated distance of a boundary and are relevant to the plan. 
In those cases, they should be represented as occupation evidence, contextual features, annotations, descriptors, or supporting review information rather than as boundary-defining geometry.

> **Note:** It is assumed that "within the nominated distance" refers to improvements of a permanent nature (e.g., buildings and brick walls) within one metre of a surveyed boundary [(Landgate, 2025)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/survey-practice-guidelines/spp-08-field-records/)

The use case demonstrates how the scheme can be represented as a 3D CSDM cadastral survey dataset, where each survey-strata lot is encoded as a cadastral parcel, common property is represented explicitly, easements and spatial interests are recorded, vertical restrictions are defined by survey information rather than by building surfaces, and scheme-level digital plan components are available for validation and registration review.

This differs from the [built-strata use case](./built-strata.md) because the legal boundaries are not derived from walls, floors, ceilings, slabs, or other building elements. 
Instead, they are derived from surveyed dimensions, survey marks, observations, plan geometry, and, where applicable, AHD-defined height or depth limits.

Where party walls, shared structures, building encroachments, or building-related evidence remain relevant after conversion, they are represented as easements, support rights, occupation evidence, annotations, supporting documents, or contextual information. 
Detailed wall-boundary modelling is tested in the [built-strata](./built-strata.md) and [wall-boundary](./party-wall.md) companion use cases, not repeated in detail here.

## Use case statement

**As a cadastral data editor, I want to encode a WA survey-strata scheme as a 3D CSDM dataset, so that each surveyed lot, common-property area, easement, vertical restriction, relevant structure, scheme component, unit entitlement, strata element description, supporting document, and supporting survey observation can be represented clearly, validated, reviewed, and exchanged without relying on building-referenced boundaries.**

## Purpose

The purpose of the use case is to test whether the WA 3D CSDM pattern can support a survey-strata dataset where the important cadastral information is:

| Dataset concern             | Why it matters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Survey-defined lots         | Survey-strata lots are defined by surveyed dimensions and survey information, not by buildings.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Common property             | Common property must be shown explicitly and given its own unique number where present [(Landgate, 2023b)](https://www.landgate.wa.gov.au/strata-and-community-titles/strata-titles/learn-about-strata/resources-for-strata-owners/).                                                                                                                                                                                                                                                                                     |
| Easements and rights        | Access, light and air, support, services, party wall, intrusion and pedestrian access rights may need to be represented spatially [(Landgate, 2020b)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/).                                                                                                                                          |
| Optional vertical limits    | Survey-strata lots may be unlimited in height and depth, or limited by AHD levels [(Landgate, 2020b)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/).                                                                                                                                                                                          |
| Height descriptions         | Vertically limited strata elements may need a description that explains the legal or practical meaning of the limit, such as a ground-floor limit, floor-level limit, car bay height restriction, or other plan-specific description.                                                                                                                                                                                                                                                                                     |
| Relevant structures         | Structures are captured where they are within the nominated distance of a boundary and relevant to the plan. They support review, occupation evidence, or display, but do not define survey-strata boundaries.                                                                                                                                                                                                                                                                                                            |
| Survey evidence             | The dataset must preserve survey marks, observations, dimensions, adopted measurements, computations and provenance.                                                                                                                                                                                                                                                                                                                                                                                                      |
| Scheme-level information    | Survey-strata schemes require scheme information such as scheme name, address for service, scheme type, leasehold status, expiry date where relevant, by-law lodgement status, supporting documents, approval and provenance.                                                                                                                                                                                                                                                                                             |
| Strata element descriptions | Lots, part lots, accessways, car bays, storage areas, service areas and height-restricted components may require legal or practical descriptions. Free text may be needed where prescribed values are too restrictive.                                                                                                                                                                                                                                                                                                    |
| Unit entitlement            | Unit entitlement values may need to be shared as integer values and linked to the relevant lot, schedule of unit entitlements, supporting document, or digital plan component.                                                                                                                                                                                                                                                                                                                                            |
| Conversion constraints      | If the dataset represents a conversion from built strata, existing lot identities must be preserved, common property may be allocated into existing lots, and the conversion should be treated as a new lodged stage rather than a direct edit to the built-strata dataset [(Landgate, 2020b)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/). |

## Primary actor

Cadastral surveyor or cadastral data editor.

## Supporting actors

Landgate validator, scheme plan examiner, registration officer, cadastral database maintainer, strata company, community corporation, infrastructure authority, local government, title administrator, 3D viewer user, downstream spatial data user.

## Scenario

A registered single-tier built-strata scheme is converted to a survey-strata scheme. 
The scheme contains existing lots, common driveways, service corridors, garden areas, accessways, storage areas, existing buildings, relevant structures near boundaries, scheme notice information, by-law lodgement information, and unit entitlement information.

The converted survey-strata dataset must represent:

| Level                                       | Content                                                                                                                                                                                 |
|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Existing strata lots                        | Converted to survey-strata lots with the same lot identity where required.                                                                                                              |
| Former common property                      | Allocated into lots or retained as common property.                                                                                                                                     |
| Common accessways                           | Common property or vehicle/pedestrian access easements.                                                                                                                                 |
| Services                                    | Utility service easements or statutory service rights.                                                                                                                                  |
| Party walls or shared structures            | Party wall easements, support easements, or contextual occupation evidence where they remain legally or practically relevant.                                                           |
| Buildings and structures                    | Contextual features only; not defining survey-strata boundaries. Structures are captured where within the nominated distance of a boundary and relevant to the plan.                    |
| Height-limited areas                        | 3D parcel limits using AHD or other stated vertical datum, with height descriptions where required.                                                                                     |
| Car bays, storage areas and strata elements | Lot parts or scheme elements with controlled classifications and free-text descriptions where needed.                                                                                   |
| Unit entitlement                            | Integer unit entitlement values linked to the relevant parcel or supporting schedule; for conversion to survey-strata, buildings are not considered in the unit entitlement assessment. |
| Scheme-level information                    | Scheme name, scheme type, address for service, leasehold status, expiry date where relevant, by-law lodgement status, supporting documents and provenance.                              |

Landgate states that a conversion to survey-strata allows boundaries to be realigned to include part or all of the common property into lots, but surveyors must not adjust boundaries between existing strata lots. 
The conversion is intended to divide common property between existing strata lot owners, not to subdivide existing strata lots [(Landgate, 2020b)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/).

## Proposed 3D CSDM modelling pattern

| Real-world item                   | Suggested 3D CSDM representation                                                                                                                                                                               |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Whole strata scheme parcel        | Parcel aggregate, scheme-level grouping, or parent scheme component that groups the scheme parcel, lots, common property, interests, documents and provenance.                                                 |
| Parent freehold parcel            | The land being subdivided by the survey-strata scheme.                                                                                                                                                         |
| Survey-strata lot                 | 3D `CadastralParcel`, usually a primary cadastral parcel, derived from survey-defined boundaries.                                                                                                              |
| Part lot or strata element        | Spatial component of the relevant lot, or a related plan component, with controlled classification and free-text description where required.                                                                   |
| Common property lot               | Separate common-property parcel or parcel aggregate, explicitly identified and numbered where required.                                                                                                        |
| Accessway or driveway             | Common property, easement parcel, or interest-linked spatial object.                                                                                                                                           |
| Car bay or storage area           | Part of the relevant lot, separate spatial component, or interest-linked object depending on the legal plan treatment. Height restrictions should be encoded where relevant.                                   |
| Service corridor or utility area  | Easement, statutory interest, secondary cadastral parcel, annotation, or supporting contextual information depending on legal effect.                                                                          |
| Party wall / support relationship | Party wall easement, support easement, statutory interest, occupation evidence, annotation, or supporting document depending on legal effect. The survey-strata boundary is not derived from the wall surface. |
| Height-limited lot or element     | 3D cadastral parcel or parcel component with explicit upper and lower limits, vertical datum, and height description where required.                                                                           |
| Unlimited-height lot              | 2D parcel with unlimited height/depth interpretation recorded in attributes, plan metadata, or scheme documentation.                                                                                           |
| Relevant structure near boundary  | Occupation evidence, contextual feature, `OccupationMark`, `SurveyPoint`, descriptor, annotation, or supporting review information. Do not automatically treat as cadastral parcel geometry.                   |
| Building footprint                | Occupation or contextual feature only. Not a survey-strata boundary-defining object.                                                                                                                           |
| Unit entitlement                  | Integer value recorded against the relevant parcel, schedule of unit entitlements, or digital plan component, with links to supporting valuation or source documents where required.                           |
| Scheme notice / scheme component  | Scheme-level digital component recording scheme name, address for service, scheme type, leasehold status and expiry date where relevant.                                                                       |
| By-law lodgement                  | Boolean value and/or supporting document reference indicating whether by-laws are lodged with the scheme documents.                                                                                            |
| Supporting scheme documents       | References to scheme notice, scheme plan, schedule of unit entitlements, by-laws, valuation certificate, registration approval material, and other supporting documents.                                       |
| Strata element description        | Descriptive or appellation component. Use controlled values where appropriate for validation and free text where prescribed values are too restrictive.                                                        |
| Survey observations               | Vector observations, adopted observations, survey marks, computations, field notes and provenance.                                                                                                             |
| Scheme plan metadata              | CSD container metadata, survey purpose, survey type, CRS, vertical datum, scheme information, approval status and provenance.                                                                                  |

## Scheme and strata element information to be tested

The use case should test whether the 3D CSDM and WA profile can carry survey-strata scheme information and strata element descriptions needed for registration, validation, display, and manual review. 
This includes:

- scheme name;
- address for service of the strata company or community corporation;
- scheme type;
- leasehold status and leasehold expiry date, where relevant;
- lodgement of by-laws as a yes/no value and/or supporting document reference;
- unit entitlement values as integers;
- lot, part-lot, car bay, storage area, accessway, service area, common-property or other strata element descriptions;
- legal or practical descriptions such as external car bay height restrictions;
- height descriptions explaining the basis or meaning of vertical limits;
- free-text descriptions where a prescribed vocabulary is too restrictive;
- controlled values where needed for automated validation;
- links to supporting documents such as the scheme notice, unit entitlement schedule, by-laws, valuation certificate, and registration approval provenance.

The dataset should support controlled values for automation where appropriate, such as parcel purpose or scheme type, but it should also allow free-text descriptions for strata elements where the legal, plan, or registration wording is more specific than the prescribed vocabulary. Free text should support manual review and should not replace controlled values where controlled values are required for validation.

## Main flow

1. _Create the WA 3D CSDM dataset container_:  
The dataset is created as a cadastral survey dataset containing parcels, survey points, observations, interests, scheme components, strata element descriptions, supporting documents, and provenance.

2. _Identify the parent scheme parcel_:  
The freehold parent parcel is recorded as the land being subdivided by the survey-strata scheme.

3. _Record scheme-level information_:  
The dataset records the scheme name, scheme type, scheme notice details, address for service, leasehold status, expiry date where relevant, by-law lodgement status, and links to supporting scheme documents.

4. _Create the survey-strata lots_:  
Each lot is encoded from surveyed boundaries, dimensions, survey marks, and survey observations. Lot boundaries remain survey-defined and are not derived from buildings or structures.

5. _Record strata element descriptions_:  
Each lot, part lot, common property component, accessway, car bay, storage area, height-restricted component, or other relevant strata element can carry a controlled classification and a free-text description where required for plan interpretation or manual review.

6. _Record unit entitlement information_:  
Unit entitlement values are recorded as integer values against the relevant parcel, schedule of unit entitlements, or digital plan component. The dataset links to the supporting unit entitlement schedule, valuation information, or other provenance where required.

7. _Represent common property explicitly_:  
Common property is encoded as a separate parcel or parcel aggregate. It is not inferred from leftover building structure.

8. _Represent easements and spatial interests_:  
Vehicle access, pedestrian access, utility services, support, light and air, party wall, and intrusion easements are represented as interests and, where spatially defined, as secondary parcels or equivalent spatial objects.

9. _Apply vertical limits only where legally required_:  
If a lot, part lot, car bay, storage area, easement, or other strata element is vertically limited, the upper and lower extents are encoded explicitly, for example using AHD values. The dataset also records the vertical datum or reference basis and a height description explaining the legal or practical meaning of the height limit. If the lot is unlimited in height and depth, the dataset should not invent a 3D solid merely because a building exists on the land.

10. _Capture relevant structures as contextual information_:  
Buildings and structures are captured where they are within the nominated distance of a boundary and relevant to the plan. They are represented as occupation evidence, contextual features, `OccupationMarks`, `SurveyPoint` information, descriptors, annotations, or supporting review information. They do not define the survey-strata lot boundary.

11. _Separate building-related boundary detail from this use case_:  
Where detailed wall-surface wording such as centreline of wall, inner face of wall, upper surface of floor, or under surface of ceiling is relevant, it should be handled by the built-strata and wall-boundary companion use cases. In this survey-strata use case, such features are represented only where they support easements, support rights, occupation evidence, conversion lineage, contextual interpretation, or supporting documents.

12. _Attach survey observations and provenance_:  
Survey marks, vectors, dimensions, adopted observations, computations, source plans, supporting documents, survey activities, approval status, registration decisions, and review information are recorded so the geometry and scheme information can be validated and traced.

13. _Support staged conversion behaviour_:  
Where the survey-strata dataset is the result of conversion from built strata, it is treated as a new lodged stage with the same land name. The lodged stage replaces the relevant cadastral elements when integrated. Existing lot identities, common-property allocation decisions, vesting lots, supporting documents, and conversion lineage remain traceable.

14. _Validate the dataset_:  
Validation checks confirm parcel closure, lot identity preservation, common-property allocation, easement geometry, vertical limits, height descriptions, CRS, vertical datum, appellations, scheme-level information, unit entitlement values, supporting documents, free-text descriptions needing manual review, and WA profile values.

## Alternative flows and edge cases

| Case                                                                                          | Expected handling                                                                                                                                                                                                                                                                                                                                                        |
|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Survey-strata lot is unlimited in height and depth                                            | Represent as a surveyed land parcel with unlimited vertical extent recorded in the plan metadata or parcel attributes. Do not create a 3D solid merely because a building exists.                                                                                                                                                                                        |
| Survey-strata lot is height limited                                                           | Represent as a 3D parcel with explicit upper and lower limits, preferably referenced to AHD where required. Record the height description and vertical datum or reference basis.                                                                                                                                                                                         |
| External car bay or storage area has a height restriction                                     | Represent the car bay or storage component as part of the relevant lot, separate parcel component, or relevant interest. Record the numeric height/depth limits and height description.                                                                                                                                                                                  |
| Common property is allocated into existing lots during conversion                             | Preserve the identity of the existing lots and record the newly allocated areas as part of those lots.                                                                                                                                                                                                                                                                   |
| Existing strata lot would need to be split                                                    | Do not treat this as a simple conversion; Landgate indicates conversion is not intended to subdivide existing strata lots [(Landgate, 2020b)](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/). |
| Structure within nominated distance of boundary                                               | Capture as occupation evidence, contextual feature, `OccupationMark`, `SurveyPoint`, descriptor, annotation, or supporting plan information if relevant. Do not treat it as defining the survey-strata boundary.                                                                                                                                                         |
| Structure outside nominated distance and not plan-relevant                                    | Do not require capture unless needed for another legal, survey, validation or review reason.                                                                                                                                                                                                                                                                             |
| Building exists on a survey-strata lot                                                        | Record it only as contextual occupation/building evidence, not as the cadastral boundary.                                                                                                                                                                                                                                                                                |
| Party wall remains relevant after conversion                                                  | Represent the legal right as a party wall easement, support easement, statutory interest, occupation evidence, annotation, or supporting document. Do not treat it as a building-defined lot boundary.                                                                                                                                                                   |
| Wall-boundary definition is relevant to a companion test                                      | Refer to the built-strata or wall-boundary companion use case for detailed handling of centreline, inner-surface, floor or ceiling boundary wording.                                                                                                                                                                                                                     |
| Service infrastructure crosses lots                                                           | Represent using service easements, statutory interests, secondary cadastral parcels, annotations or supporting documents depending on legal effect.                                                                                                                                                                                                                      |
| Common access is required                                                                     | Represent as common property or a vehicle/pedestrian access easement.                                                                                                                                                                                                                                                                                                    |
| Prescribed vocabulary is too restrictive                                                      | Use controlled values where required for validation, and add a free-text description for manual review.                                                                                                                                                                                                                                                                  |
| `wa-parcel-purpose.csv` contains a broad value such as `strata-lot` but more detail is needed | Use the controlled value for automation and validation, and add a separate strata element description or free-text note for the more specific legal or plan description.                                                                                                                                                                                                 |
| Unit entitlement is required                                                                  | Record the unit entitlement as an integer against the relevant parcel, schedule of unit entitlements, or digital plan component. Link to the supporting document where required.                                                                                                                                                                                         |
| Unit entitlement is not part of the cadastral plan geometry                                   | Record the unit entitlement in the relevant digital plan component or supporting schedule rather than forcing it into geometry. Link it to the parcel or lot appellation.                                                                                                                                                                                                |
| By-laws are lodged with the scheme                                                            | Record by-law lodgement status and link to the supporting by-law document.                                                                                                                                                                                                                                                                                               |
| Scheme notice information changes                                                             | Treat name, address for service, leasehold status, expiry and scheme type as scheme-level information, not parcel geometry.                                                                                                                                                                                                                                              |
| Conversion from built-strata to survey-strata is being tested                                 | Treat the conversion as a new lodged stage with the same land name, replacing relevant elements when integrated. Do not treat this as a direct edit to the built-strata dataset.                                                                                                                                                                                         |
| Vesting lot generated from initial built-strata                                               | Preserve lineage and traceability for any vesting lot generated from the initial built-strata element.                                                                                                                                                                                                                                                                   |

## Acceptance outcomes

1. _Each survey-strata lot is represented as a cadastral parcel_:  
Each lot has a legal appellation, parcel type, parcel purpose, geometry, and relationship to the parent scheme parcel.

2. _Boundaries are survey-defined_:  
Lot boundaries are derived from survey marks, dimensions, observations and plan geometry, not from building surfaces.

3. _Common property is explicit_:  
Common property is represented as a separate identifiable parcel or parcel aggregate.

4. _Buildings and structures are not used as boundary-defining features_:  
Building footprints, walls, roofs, and other structures may be recorded as occupation evidence, contextual features, annotations, descriptors, `OccupationMarks`, or `SurveyPoint` information where relevant. They do not define survey-strata boundaries.

5. _Relevant structures can be captured without defining boundaries_:  
Structures within the nominated distance of a boundary, and relevant to the plan, can be captured as contextual evidence, occupation information, or annotations. They do not define survey-strata parcel boundaries.

6. _Vertical limits are only used where legally required_:  
Height or depth restrictions are explicitly encoded where the plan limits a lot, part lot, car bay, storage area, easement, or other strata element vertically.

7. _Height descriptions can be recorded_:  
Vertically limited strata elements can record both the numeric height/depth limits and the descriptive basis for those limits.

8. _Easements and spatial rights are represented_:  
Access, services, support, light and air, party wall and intrusion rights are represented as interests and, where required, spatially defined secondary parcels.

9. _Scheme-level information is represented_:  
The dataset records scheme name, scheme type, scheme notice details, address for service, leasehold status and expiry date where relevant, by-law lodgement status, and links to supporting scheme documents.

10. _Strata element descriptions are supported_:  
Lots, part lots, car bays, storage areas, accessways, service areas, common property elements, and height-restricted components can carry controlled classifications and free-text descriptions where required.

11. _Controlled values and free text are both supported_:  
The dataset supports prescribed values for automated validation, while allowing free-text descriptions where legal or plan-specific wording requires manual review.

12. _Unit entitlement can be recorded_:  
Unit entitlement values are represented as integers and linked to the relevant lot, parcel component, schedule of unit entitlements, or supporting document.

13. _Supporting scheme documents are traceable_:  
The dataset can reference scheme notices, scheme plans, schedules of unit entitlements, by-laws, valuation certificates, approval material, and other supporting documents.

14. _Conversion rules are respected_:  
Where the use case involves conversion from built strata, existing strata lot identities are preserved, existing strata lot boundaries are not adjusted, common-property allocation decisions are recorded, and the survey-strata dataset is treated as a new lodged stage rather than a direct edit of the built-strata dataset.

15. _Survey evidence and provenance are traceable_:  
Measurements, computations, source plans, survey activities, supporting documents, registration decisions, and approval provenance are available for validation and audit.

16. _The dataset supports WA profile validation_:  
The dataset uses WA profile values for CRS, survey type, survey purpose, vertical datum, parcel classification, scheme type, appellation, controlled values, and other jurisdiction-specific metadata.

17. _Detailed wall-boundary modelling is not duplicated_:  
Where centreline wall, inner wall surface, floor surface, ceiling surface, shared structure, or encroachment modelling is needed, the dataset can link to the relevant supporting evidence or companion use case pattern without making the survey-strata boundary building-defined.

## Open confirmation points

The following points need to be confirmed with Landgate before the use case is finalised:

1. Whether scheme-level information should be encoded in the CSD header, a parent scheme component, a supporting document component, or a combination of these.
   _Recommendation:_ Represent the spatial/legal parent parcel or scheme grouping in the parcel structure, and link the scheme documents through provenance/supporting-document references. add a WA-profile schemeInformation / schemeComponent extension for scheme name, scheme type, address for service, by-law lodgement, expiry date.
2. Whether WA profile controlled vocabularies should include more detailed strata element values, or whether broad controlled values plus free-text descriptions are preferred.
3. Whether by-law lodgement should be represented as a Boolean value only, a document reference only, or **both**.
4. How staged conversion from built-strata to survey-strata should be represented in provenance and lifecycle history.

_Illustrative example:_
```json
{
  "surveyProvenance": {
    "activities": [
      {
        "id": "activity:conversion-survey-001",
        "type": "SurveyCSDLifecycleActivity",
        "activityType": "conversionToSurveyStrata",
        "used": [
          "csd:current-built-strata-plan-12345",
          "document:scheme-notice",
          "document:schedule-of-unit-entitlements",
          "document:conversion-resolution",
          "document:field-book"
        ],
        "generated": "csd:lodged-survey-strata-conversion-67890",
        "associatedAgent": "surveyor:licensed-surveyor-id",
        "resultStatus": "lodged"
      },
      {
        "id": "activity:registration-integration-001",
        "type": "SurveyCSDLifecycleActivity",
        "activityType": "registrationAndIntegration",
        "used": ["csd:lodged-survey-strata-conversion-67890"],
        "generated": "csd:integrated-survey-strata-state-67890",
        "invalidated": ["csd:current-built-strata-plan-12345"],
        "resultStatus": "registered"
      }
    ],
    "featureLineage": [
      {
        "oldFeature": "parcel:strata-lot-1",
        "newFeature": "parcel:survey-strata-lot-1",
        "changeType": "replacedBy",
        "identityRule": "sameDesignatedLotNumber"
      },
      {
        "oldFeature": "parcel:former-common-property-area-a",
        "newFeature": "parcel:survey-strata-lot-1",
        "changeType": "allocatedFromCommonProperty"
      },
      {
        "oldFeature": "easement:existing-service-easement-1",
        "newFeature": "easement:survey-strata-service-easement-1",
        "changeType": "carriedForwardEasement"
      }
    ]
  }
}
```

## References

- [ICSM (2023a) 3D Cadastral Survey Data Model (3D CSDM)](https://icsm-au.github.io/3d-csdm/docs/)
- [ICSM (2023b) WA Profile of the 3D CSDM](https://icsm-au.github.io/3d-csdm/docs/wa-profile/)
- [Landgate (2025) SPP-08 Field Records](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/survey-and-plan/survey-practice-guidelines/spp-08-field-records/)
- [Landgate (2023a) Strata in WA](https://www.landgate.wa.gov.au/strata-and-community-titles/strata-titles/learn-about-strata/strata-in-wa/)
- [Landgate (2023b) Resources for strata owners](https://www.landgate.wa.gov.au/strata-and-community-titles/strata-titles/learn-about-strata/resources-for-strata-owners/)
- [Landgate (2022) STP-09 Scheme Plans](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/establishing-a-strata-scheme/stp-09-scheme-plans/)
- [Landgate (2020a) STP-02 Lots](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/overview-of-strata-schemes/stp-02-lots/)
- [Landgate (2020b) STP-14 Conversion of Strata Schemes to Survey Strata Schemes](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/amending-a-strata-scheme/stp-14-conversion-of-strata-schemes-to-survey-strata-schemes/)
- [Landgate STP-08 Scheme Notice](https://www.landgate.wa.gov.au/land-and-property/land-transactions-hub/land-transaction-policy-and-procedure-guides/strata-titles/establishing-a-strata-scheme/stp-08-scheme-notice/)
- [Surround (2026a) Use case: Encode a WA multi-unit and/or multi-level built-strata scheme as a 3D CSDM dataset](./built-strata.md)
- [Surround (2026b) Use case: Represent WA strata wall-boundary definitions between adjoining built-strata lots](./strata-wall-boundary-definitions.md)
