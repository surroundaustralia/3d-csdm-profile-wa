
# WA liminal geometry profile (Schema)

`icsm.profiles.wa.wa-liminal` *v0.1*

Examples and test cases for 2D geometries with described 3D limits.

[*Status*](http://www.opengis.net/def/status): Under development

## Description

## 3D Liminal Profile

This building block captures test cases for 2D topology with 3D extent descriptions for WA.

It allows isolation of these from the more general 2D and explicit 3D cases.

Specific validators, transformers and viewers can now be defined for this profile.
## Examples

### Authoritative 2D footprint
The surveyed horizontal footprint only. No vertical extent is defined and no derived geometry
has been generated.

This example contains three parcels; two strata lots that have undefined vertical extents that 
are to be extinguished, and a conventional 2D parcel that is created by the survey (with 
undefined vertical extents).

![2D Footprint Example](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/assets/2d-footprint.png)

#### json
```json
{
  "@context": {
    "wa-profile": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-core/context.jsonld",
    "wa-leg": "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/$FILE/"
  },
  "id": "01-2d-footprint",
  "name": "2D footprint only",
  "description": "Expected validation result for a standard WA cadastral parcel represented by its surveyed 2D footprint only.",
  "type": "FeatureCollection",
  "featureType": "3D CSDM",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision-t-sts",
  "surveyType": "wa-survey-type:compiled",
  "time": {
    "date": "2026-01-02"
  },
  "horizontalCRS": "epsg:8031",
  "bearingRotation": 0.25954350,
  "surveyTitle": "Lot 800 on DP 431276",
  "adminUnit": [
    {
      "href": "wa-locality:innaloo",
      "rel": "related",
      "role": "icsm-admin-unit-type:locality"
    },
    {
      "href": "wa-locality:stirling",
      "rel": "related",
      "role": "icsm-admin-unit-type:localGovernmentArea"
    }
  ],
  "has_provenance": [
    {
      "id": "uuid:f45dc6e9-e1e8-41a8-b8e6-470337ca4a3a",
      "activityType": "certification-of-field-record",
      "activityName": "Survey Certificate - Regulation 4 Compiled Plan",
      "wasAssociatedWith": {
        "agentType": "Person",
        "name": {
          "firstName": "Craig",
          "lastName": "Miller",
          "formattedName": "Craig Miller"
        },
        "surveyorReference": null,
        "certified": "hereby certify that this plan is accurate and is a correct representation of the - (a) is a correct and accurate representation of the survey(s) of the subject land ; and (b) is in accordance with the relevant law in relation to which it is lodged.",
        "actedOnBehalfOf": {
          "agentType": "Organization",
          "legalName": "Vision Surveys Consulting",
          "address": {
            "streetNumber": "59",
            "street": "Scarborough Beach Road",
            "city": "Scarborough",
            "stateOrTerritory": "Western Australia",
            "postcode": "6019",
            "country": "Australia"
          },
          "phone": "61440000",
          "email": "info@visionsc.com.au"
        },
        "surveyReference": "VS010368 - Kyarra St 4a and 4b, Innaloo",
        "signedTimestamp": "20260102T11:09:49+08:00"
      },
      "generated": "DP-431276-1-1-0.00"
    },
    {
      "id": "uuid:c329ad73-2ae1-4fda-a1c8-56a579f0a605",
      "activityType": "planning-approval-obtained",
      "wasAssociatedWith": {
        "agentType": "Person",
        "name": {
          "firstName": null,
          "lastName": null,
          "formattedName": "Planning Authority Representative"
        },
        "actedOnBehalfOf": {
          "agentType": "Organization",
          "name": "WAPC"
        },
        "reference": "201505"
      },
      "generated": "DP-431276-1-1-0.00",
      "signedTimestamp": null,
      "delegatedUnder": {
        "legislation": "Planning and Development Act 2005",
        "section": "Sec. 16"
      }
    }
  ],
  "wasGeneratedBy": {
    "id": "uuid:ede6b973-c085-430d-812c-1ce2f0bd9117",
    "type": "prov:Activity",
    "label": "Convert APX-05 CSD file and associated PDF to WA 3D CSDM JSON",
    "startedAtTime": "2026-06-15T17:47:17Z",
    "endedAtTime": "2026-06-15T17:47:17Z",
    "used": [
      {
        "id": "file:CSD_DP431276.csd",
        "type": "prov:Entity",
        "label": "APX-05 CSD source file"
      },
      {
        "id": "file:DP431276.pdf",
        "type": "prov:Entity",
        "label": "Source PDF plan image"
      }
    ],
    "generated": [
      {
        "id": "file:CSD_DP431276.csdm.json",
        "type": "prov:Entity",
        "label": "Converted WA 3D CSDM JSON"
      }
    ],
    "qualifiedUsage": [
      {
        "type": "Usage",
        "entity": "file:CSD_DP431276.csd",
        "hadRole": "wa-prov-role:sourceCsdFile"
      },
      {
        "type": "Usage",
        "entity": "file:DP431276.pdf",
        "hadRole": "wa-prov-role:sourcePdfFile"
      }
    ],
    "wasAssociatedWith": [
      {
        "id": "src/process_csd/process_wa_csd.py",
        "type": [
          "prov:SoftwareAgent",
          "schema:SoftwareApplication"
        ],
        "label": "Python module used to convert APX-05 CSD records into WA 3D CSDM JSON."
      },
      {
        "id": "src/process_csd_pdf/build_wa_csd_pdf.py",
        "type": [
          "prov:SoftwareAgent",
          "schema:SoftwareApplication"
        ],
        "label": "Python module used to run the CSD converter, run the PDF metadata extractor, and merge the resulting JSON outputs."
      }
    ],
    "qualifiedAssociation": [
      {
        "type": "Association",
        "agent": "src/process_csd/process_wa_csd.py",
        "hadRole": "wa-prov-role:formatConverter"
      },
      {
        "type": "Association",
        "agent": "src/process_csd_pdf/build_wa_csd_pdf.py",
        "hadRole": "wa-prov-role:workflowOrchestrator"
      }
    ]
  },
  "features": [],
  "referencedCSDs": [
    {
      "id": "uuid:7cae767b-5c27-41e1-9a46-b4d1d09401fc",
      "name": "SP 28750",
      "adminUnit": {
        "href": "wa-locality:innaloo",
        "rel": "related",
        "role": "icsm-admin-unit-type:locality"
      },
      "bearingRotation": 0.25954350,
      "time": {
        "date": null
      }
    },
    {
      "id": "uuid:df8ccb77-c666-41b3-87a5-0c6a950ca806",
      "name": "D36053",
      "adminUnit": {
        "href": "wa-locality:innaloo",
        "rel": "related",
        "role": "icsm-admin-unit-type:locality"
      },
      "bearingRotation": 0.25954350,
      "time": {
        "date": null
      }
    }
  ],
  "points": [
    {
      "id": "uuid:59ba70ef-374a-46b6-b3d1-8c827291e21a",
      "type": "FeatureCollection",
      "featureType": "CadastralMark",
      "features": [
        {
          "id": "point-2",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": {
            "type": "Point",
            "coordinates": [
              115.79697337440058,
              -31.893652878797063
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              48136.976,
              369943.109
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.05,
            "comment": null,
            "methodEstablished": "wa-pt-method:T",
            "monumentedBy": {
              "form": "wa-monument-form:other",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        },
        {
          "id": "point-3",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": {
            "type": "Point",
            "coordinates": [
              115.79718601252313,
              -31.893653732234803
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              48157.092,
              369943.018
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.05,
            "comment": null,
            "methodEstablished": "wa-pt-method:T",
            "monumentedBy": {
              "form": "wa-monument-form:other",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        },
        {
          "id": "point-4",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": {
            "type": "Point",
            "coordinates": [
              115.79697538604657,
              -31.893290034215067
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              48137.159,
              369983.343
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.05,
            "comment": null,
            "methodEstablished": "wa-pt-method:T",
            "monumentedBy": {
              "form": "wa-monument-form:other",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        },
        {
          "id": "point-5",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": {
            "type": "Point",
            "coordinates": [
              115.79718801276466,
              -31.893290887647535
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              48157.274,
              369983.252
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.05,
            "comment": null,
            "methodEstablished": "wa-pt-method:T",
            "monumentedBy": {
              "form": "wa-monument-form:other",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        }
      ]
    }
  ],
  "vectorObservations": [
    {
      "id": "uuid:0e582a81-b517-4012-a3bb-7605853e0159",
      "type": "FeatureCollection",
      "featureType": "sosa:ObservationCollection",
      "properties": {
        "resultTime": "2026-01-02T00:00:00Z",
        "observedProperty": "surveyable:VectorDetermination",
        "madeBySensor": {
          "id": "ts-16",
          "sensorType": "icsm-equipment-type:ts",
          "description": "Leica TS16 3",
          "lastCalibrated": "2026-01-02T00:00:00Z",
          "hasSubSystem": [
            {
              "sensorType": "icsm-equipment-type:ts",
              "id": "sensordesc:123456"
            },
            {
              "sensorType": "icsm-equipment-type:p",
              "id": "sensordesc:789012"
            }
          ]
        }
      },
      "usedProcedure": "icsm-procedure-used:measured",
      "features": [
        {
          "id": "uuid:6865b3a4-8fe1-47a2-a6c6-0e2b64f81a8e",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "line-geometry-1",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "distance": 20.116
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "id": "uuid:f46cd560-f1fe-4dfc-9bc3-fcf2615ac157",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "line-geometry-2",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "distance": 40.234
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "id": "uuid:ee3bf46c-d29f-4133-8d65-584bb86e03f2",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "line-geometry-3",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "distance": 40.234
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "id": "uuid:636cb711-83c2-42dc-95c0-8aa62961bcf5",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "line-geometry-4",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "distance": 20.116
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "id": "subtended-angle-1",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "angle-1",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "angle": 90.0
            },
            "angleAccuracy": 0.0056,
            "angleType": "icsm-angle-type:angle",
            "angleDerivation": "wa-angle-derivation:M"
          }
        },
        {
          "id": "subtended-angle-2",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "angle-2",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "angle": 90.0
            },
            "angleAccuracy": 0.0056,
            "angleType": "icsm-angle-type:angle",
            "angleDerivation": "wa-angle-derivation:M"
          }
        },
        {
          "id": "subtended-angle-3",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "angle-3",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "angle": 90.0
            },
            "angleAccuracy": 0.0056,
            "angleType": "icsm-angle-type:angle",
            "angleDerivation": "wa-angle-derivation:M"
          }
        },
        {
          "id": "subtended-angle-4",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "angle-4",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "angle": 90.0
            },
            "angleAccuracy": 0.0056,
            "angleType": "icsm-angle-type:angle",
            "angleDerivation": "wa-angle-derivation:M"
          }
        }
      ]
    }
  ],
  "edges": [
    {
      "id": "uuid:a358dcd1-5013-40a0-96b6-e04e70cd2f40",
      "type": "FeatureCollection",
      "featureType": "ObservedVector",
      "features": [
        {
          "id": "line-geometry-1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "point-2",
              "point-3"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:road-boundary",
            "comment": null
          }
        },
        {
          "id": "line-geometry-2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "point-2",
              "point-4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:boundary",
            "comment": null
          }
        },
        {
          "id": "line-geometry-3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "point-3",
              "point-5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:boundary",
            "comment": null
          }
        },
        {
          "id": "line-geometry-4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "point-4",
              "point-5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:boundary",
            "comment": null
          }
        }
      ]
    },
    {
      "id": "uuid:55d0e62e-04a9-479c-a98a-1d6e5549a4e2",
      "type": "FeatureCollection",
      "featureType": "SubtendedAngle",
      "features": [
        {
          "id": "angle-1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "SubtendedAngle",
            "references": [
              "point-5",
              "line-geometry-3",
              "line-geometry-4"
            ]
          },
          "properties": {
            "angleType": "icsm-angle-type:subtended",
            "comment": null
          }
        },
        {
          "id": "angle-2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "SubtendedAngle",
            "references": [
              "point-3",
              "line-geometry-1",
              "line-geometry-3"
            ]
          },
          "properties": {
            "angleType": "icsm-angle-type:subtended",
            "comment": null
          }
        },
        {
          "id": "angle-3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "SubtendedAngle",
            "references": [
              "point-2",
              "line-geometry-2",
              "line-geometry-1"
            ]
          },
          "properties": {
            "angleType": "icsm-angle-type:subtended",
            "comment": null
          }
        },
        {
          "id": "angle-4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "SubtendedAngle",
            "references": [
              "point-4",
              "line-geometry-4",
              "line-geometry-2"
            ]
          },
          "properties": {
            "angleType": "icsm-angle-type:subtended",
            "comment": null
          }
        }
      ]
    }
  ],
  "rings": [],
  "faces": [],
  "shells": [],
  "solids": [],
  "parcels": [
    {
      "id": "uuid:63c654cd-0c9a-496a-aebf-b6cb4a784525",
      "type": "FeatureCollection",
      "featureType": "PrimaryParcel",
      "properties": {
        "spatialRepresentationDefinitions": {
          "representationStatus": "representation-status:2d",
          "geometryLegalStatus": "geometry-legal-status:a2d",
          "coordinateRepresentation": {
            "coordinateDimension": 2,
            "zValueRole": "coordinate-z-role:absent"
          },
          "verticalExtent": {
            "status": "vertical-extent-status:ud",
            "lowerBoundary": {
              "state": "vertical-boundary-state:und"
            },
            "upperBoundary": {
              "state": "vertical-boundary-state:und"
            }
          },
          "computabilityStatus": "computability-status:nc",
          "derivedGeometry": {
            "status": "notGenerated"
          }
        }
      },
      "features": [
        {
          "id": "parcel-1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              "line-geometry-2",
              "line-geometry-1",
              "line-geometry-3",
              "line-geometry-4"
            ]
          },
          "properties": {
            "appellation": {
              "type": "wa:LotOnPlanAppellation",
              "label": "Lot 800 on Plan DP 431276",
              "hasPart": [
                {
                  "type": "surveyType",
                  "ref": "wa-survey-type:deposited-plan"
                },
                {
                  "type": "surveyNumber",
                  "label": "DP 431276"
                },
                {
                  "type": "lotPrefix",
                  "ref": "wa-parcel-purpose:lot"
                },
                {
                  "type": "lotNumber",
                  "label": "800"
                }
              ]
            },
            "area": 809,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:lot",
            "parcelState": "wa-parcel-state:created",
            "interests": []
          }
        }
      ]
    },
    {
      "id": "uuid:c627546f-1b7e-44d2-ba45-36d7dc1293e6",
      "type": "FeatureCollection",
      "featureType": "PrimaryParcel",
      "properties": {
        "spatialRepresentationDefinitions": {
          "representationStatus": "representation-status:2d",
          "geometryLegalStatus": "geometry-legal-status:a2d",
          "coordinateRepresentation": {
            "coordinateDimension": 2,
            "zValueRole": "coordinate-z-role:absent"
          },
          "verticalExtent": {
            "status": "vertical-extent-status:ns",
            "lowerBoundary": {
              "state": "vertical-boundary-state:und"
            },
            "upperBoundary": {
              "state": "vertical-boundary-state:und"
            }
          },
          "computabilityStatus": "computability-status:nc",
          "derivedGeometry": {
            "status": "notGenerated"
          }
        }
      },
      "features": [
        {
          "id": "parcel-2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              "line-geometry-2",
              "line-geometry-1",
              "line-geometry-3",
              "line-geometry-4"
            ]
          },
          "properties": {
            "appellation": {
              "type": "wa:LotOnPlanAppellation",
              "label": "Lot 1 on Plan SP 28750",
              "hasPart": [
                {
                  "type": "surveyType",
                  "ref": "wa-survey-type:deposited-plan"
                },
                {
                  "type": "surveyNumber",
                  "label": "SP 28750"
                },
                {
                  "type": "lotPrefix",
                  "ref": "wa-parcel-purpose:lot"
                },
                {
                  "type": "lotNumber",
                  "label": "1"
                }
              ]
            },
            "area": 809,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:strata-lot",
            "parcelState": "wa-parcel-state:former-tenure",
            "interests": [
              {
                "interestLink": "2500-584",
                "interestType": "wa-interest-type:ct"
              }
            ]
          }
        },
        {
          "id": "parcel-3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              "line-geometry-2",
              "line-geometry-1",
              "line-geometry-3",
              "line-geometry-4"
            ]
          },
          "properties": {
            "appellation": {
              "type": "wa:LotOnPlanAppellation",
              "label": "Lot 2 on Plan SP 28750",
              "hasPart": [
                {
                  "type": "surveyType",
                  "ref": "wa-survey-type:deposited-plan"
                },
                {
                  "type": "surveyNumber",
                  "label": "SP 28750"
                },
                {
                  "type": "lotPrefix",
                  "ref": "wa-parcel-purpose:lot"
                },
                {
                  "type": "lotNumber",
                  "label": "2"
                }
              ]
            },
            "area": 809,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:strata-lot",
            "parcelState": "wa-parcel-state:former-tenure",
            "interests": [
              {
                "interestLink": "2500-585",
                "interestType": "wa-interest-type:ct"
              }
            ]
          }
        }
      ]
    }
  ],
  "supportingDocuments": [],
  "annotations": [
    {
      "description": "Subject to Material Change and WAPC approval.",
      "role": "wa-annotation-role:sp",
      "lodged": {
        "date": "2026-01-02"
      }
    },
    {
      "description": "Survey carried out under Regulation 4 Compiled Plan of Transfer of Land (Surveys) Regulations 1955",
      "href": "wa-leg:Transfer%20of%20Land%20(Surveys)%20Regulations%201955%20-%20%5B01-b0-09%5D.pdf",
      "role": "wa-annotation-role:r-4"
    }
  ]
}

```

#### jsonld
```jsonld
{
  "@context": [
    "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-liminal/context.jsonld",
    {
      "wa-profile": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-core/context.jsonld",
      "wa-leg": "https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/$FILE/"
    }
  ],
  "id": "01-2d-footprint",
  "name": "2D footprint only",
  "description": "Expected validation result for a standard WA cadastral parcel represented by its surveyed 2D footprint only.",
  "type": "FeatureCollection",
  "featureType": "3D CSDM",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision-t-sts",
  "surveyType": "wa-survey-type:compiled",
  "time": {
    "date": "2026-01-02"
  },
  "horizontalCRS": "epsg:8031",
  "bearingRotation": 0.2595435,
  "surveyTitle": "Lot 800 on DP 431276",
  "adminUnit": [
    {
      "href": "wa-locality:innaloo",
      "rel": "related",
      "role": "icsm-admin-unit-type:locality"
    },
    {
      "href": "wa-locality:stirling",
      "rel": "related",
      "role": "icsm-admin-unit-type:localGovernmentArea"
    }
  ],
  "has_provenance": [
    {
      "id": "uuid:f45dc6e9-e1e8-41a8-b8e6-470337ca4a3a",
      "activityType": "certification-of-field-record",
      "activityName": "Survey Certificate - Regulation 4 Compiled Plan",
      "wasAssociatedWith": {
        "agentType": "Person",
        "name": {
          "firstName": "Craig",
          "lastName": "Miller",
          "formattedName": "Craig Miller"
        },
        "surveyorReference": null,
        "certified": "hereby certify that this plan is accurate and is a correct representation of the - (a) is a correct and accurate representation of the survey(s) of the subject land ; and (b) is in accordance with the relevant law in relation to which it is lodged.",
        "actedOnBehalfOf": {
          "agentType": "Organization",
          "legalName": "Vision Surveys Consulting",
          "address": {
            "streetNumber": "59",
            "street": "Scarborough Beach Road",
            "city": "Scarborough",
            "stateOrTerritory": "Western Australia",
            "postcode": "6019",
            "country": "Australia"
          },
          "phone": "61440000",
          "email": "info@visionsc.com.au"
        },
        "surveyReference": "VS010368 - Kyarra St 4a and 4b, Innaloo",
        "signedTimestamp": "20260102T11:09:49+08:00"
      },
      "generated": "DP-431276-1-1-0.00"
    },
    {
      "id": "uuid:c329ad73-2ae1-4fda-a1c8-56a579f0a605",
      "activityType": "planning-approval-obtained",
      "wasAssociatedWith": {
        "agentType": "Person",
        "name": {
          "firstName": null,
          "lastName": null,
          "formattedName": "Planning Authority Representative"
        },
        "actedOnBehalfOf": {
          "agentType": "Organization",
          "name": "WAPC"
        },
        "reference": "201505"
      },
      "generated": "DP-431276-1-1-0.00",
      "signedTimestamp": null,
      "delegatedUnder": {
        "legislation": "Planning and Development Act 2005",
        "section": "Sec. 16"
      }
    }
  ],
  "wasGeneratedBy": {
    "id": "uuid:ede6b973-c085-430d-812c-1ce2f0bd9117",
    "type": "prov:Activity",
    "label": "Convert APX-05 CSD file and associated PDF to WA 3D CSDM JSON",
    "startedAtTime": "2026-06-15T17:47:17Z",
    "endedAtTime": "2026-06-15T17:47:17Z",
    "used": [
      {
        "id": "file:CSD_DP431276.csd",
        "type": "prov:Entity",
        "label": "APX-05 CSD source file"
      },
      {
        "id": "file:DP431276.pdf",
        "type": "prov:Entity",
        "label": "Source PDF plan image"
      }
    ],
    "generated": [
      {
        "id": "file:CSD_DP431276.csdm.json",
        "type": "prov:Entity",
        "label": "Converted WA 3D CSDM JSON"
      }
    ],
    "qualifiedUsage": [
      {
        "type": "Usage",
        "entity": "file:CSD_DP431276.csd",
        "hadRole": "wa-prov-role:sourceCsdFile"
      },
      {
        "type": "Usage",
        "entity": "file:DP431276.pdf",
        "hadRole": "wa-prov-role:sourcePdfFile"
      }
    ],
    "wasAssociatedWith": [
      {
        "id": "src/process_csd/process_wa_csd.py",
        "type": [
          "prov:SoftwareAgent",
          "schema:SoftwareApplication"
        ],
        "label": "Python module used to convert APX-05 CSD records into WA 3D CSDM JSON."
      },
      {
        "id": "src/process_csd_pdf/build_wa_csd_pdf.py",
        "type": [
          "prov:SoftwareAgent",
          "schema:SoftwareApplication"
        ],
        "label": "Python module used to run the CSD converter, run the PDF metadata extractor, and merge the resulting JSON outputs."
      }
    ],
    "qualifiedAssociation": [
      {
        "type": "Association",
        "agent": "src/process_csd/process_wa_csd.py",
        "hadRole": "wa-prov-role:formatConverter"
      },
      {
        "type": "Association",
        "agent": "src/process_csd_pdf/build_wa_csd_pdf.py",
        "hadRole": "wa-prov-role:workflowOrchestrator"
      }
    ]
  },
  "features": [],
  "referencedCSDs": [
    {
      "id": "uuid:7cae767b-5c27-41e1-9a46-b4d1d09401fc",
      "name": "SP 28750",
      "adminUnit": {
        "href": "wa-locality:innaloo",
        "rel": "related",
        "role": "icsm-admin-unit-type:locality"
      },
      "bearingRotation": 0.2595435,
      "time": {
        "date": null
      }
    },
    {
      "id": "uuid:df8ccb77-c666-41b3-87a5-0c6a950ca806",
      "name": "D36053",
      "adminUnit": {
        "href": "wa-locality:innaloo",
        "rel": "related",
        "role": "icsm-admin-unit-type:locality"
      },
      "bearingRotation": 0.2595435,
      "time": {
        "date": null
      }
    }
  ],
  "points": [
    {
      "id": "uuid:59ba70ef-374a-46b6-b3d1-8c827291e21a",
      "type": "FeatureCollection",
      "featureType": "CadastralMark",
      "features": [
        {
          "id": "point-2",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": {
            "type": "Point",
            "coordinates": [
              115.79697337440058,
              -31.893652878797063
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              48136.976,
              369943.109
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.05,
            "comment": null,
            "methodEstablished": "wa-pt-method:T",
            "monumentedBy": {
              "form": "wa-monument-form:other",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        },
        {
          "id": "point-3",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": {
            "type": "Point",
            "coordinates": [
              115.79718601252313,
              -31.893653732234803
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              48157.092,
              369943.018
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.05,
            "comment": null,
            "methodEstablished": "wa-pt-method:T",
            "monumentedBy": {
              "form": "wa-monument-form:other",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        },
        {
          "id": "point-4",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": {
            "type": "Point",
            "coordinates": [
              115.79697538604657,
              -31.893290034215067
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              48137.159,
              369983.343
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.05,
            "comment": null,
            "methodEstablished": "wa-pt-method:T",
            "monumentedBy": {
              "form": "wa-monument-form:other",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        },
        {
          "id": "point-5",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": {
            "type": "Point",
            "coordinates": [
              115.79718801276466,
              -31.893290887647535
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              48157.274,
              369983.252
            ]
          },
          "properties": {
            "name": "",
            "purpose": "wa-surveypoint-purpose:monument",
            "ptQualityMeasure": 0.05,
            "comment": null,
            "methodEstablished": "wa-pt-method:T",
            "monumentedBy": {
              "form": "wa-monument-form:other",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        }
      ]
    }
  ],
  "vectorObservations": [
    {
      "id": "uuid:0e582a81-b517-4012-a3bb-7605853e0159",
      "type": "FeatureCollection",
      "featureType": "sosa:ObservationCollection",
      "properties": {
        "resultTime": "2026-01-02T00:00:00Z",
        "observedProperty": "surveyable:VectorDetermination",
        "madeBySensor": {
          "id": "ts-16",
          "sensorType": "icsm-equipment-type:ts",
          "description": "Leica TS16 3",
          "lastCalibrated": "2026-01-02T00:00:00Z",
          "hasSubSystem": [
            {
              "sensorType": "icsm-equipment-type:ts",
              "id": "sensordesc:123456"
            },
            {
              "sensorType": "icsm-equipment-type:p",
              "id": "sensordesc:789012"
            }
          ]
        }
      },
      "usedProcedure": "icsm-procedure-used:measured",
      "features": [
        {
          "id": "uuid:6865b3a4-8fe1-47a2-a6c6-0e2b64f81a8e",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "line-geometry-1",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "distance": 20.116
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "id": "uuid:f46cd560-f1fe-4dfc-9bc3-fcf2615ac157",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "line-geometry-2",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "distance": 40.234
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "id": "uuid:ee3bf46c-d29f-4133-8d65-584bb86e03f2",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "line-geometry-3",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "distance": 40.234
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "id": "uuid:636cb711-83c2-42dc-95c0-8aa62961bcf5",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "line-geometry-4",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "distance": 20.116
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "id": "subtended-angle-1",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "angle-1",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "angle": 90.0
            },
            "angleAccuracy": 0.0056,
            "angleType": "icsm-angle-type:angle",
            "angleDerivation": "wa-angle-derivation:M"
          }
        },
        {
          "id": "subtended-angle-2",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "angle-2",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "angle": 90.0
            },
            "angleAccuracy": 0.0056,
            "angleType": "icsm-angle-type:angle",
            "angleDerivation": "wa-angle-derivation:M"
          }
        },
        {
          "id": "subtended-angle-3",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "angle-3",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "angle": 90.0
            },
            "angleAccuracy": 0.0056,
            "angleType": "icsm-angle-type:angle",
            "angleDerivation": "wa-angle-derivation:M"
          }
        },
        {
          "id": "subtended-angle-4",
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "angle-4",
            "resultTime": "2026-01-02T00:00:00Z",
            "hasResult": {
              "angle": 90.0
            },
            "angleAccuracy": 0.0056,
            "angleType": "icsm-angle-type:angle",
            "angleDerivation": "wa-angle-derivation:M"
          }
        }
      ]
    }
  ],
  "edges": [
    {
      "id": "uuid:a358dcd1-5013-40a0-96b6-e04e70cd2f40",
      "type": "FeatureCollection",
      "featureType": "ObservedVector",
      "features": [
        {
          "id": "line-geometry-1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "point-2",
              "point-3"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:road-boundary",
            "comment": null
          }
        },
        {
          "id": "line-geometry-2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "point-2",
              "point-4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:boundary",
            "comment": null
          }
        },
        {
          "id": "line-geometry-3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "point-3",
              "point-5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:boundary",
            "comment": null
          }
        },
        {
          "id": "line-geometry-4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "point-4",
              "point-5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:boundary",
            "comment": null
          }
        }
      ]
    },
    {
      "id": "uuid:55d0e62e-04a9-479c-a98a-1d6e5549a4e2",
      "type": "FeatureCollection",
      "featureType": "SubtendedAngle",
      "features": [
        {
          "id": "angle-1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "SubtendedAngle",
            "references": [
              "point-5",
              "line-geometry-3",
              "line-geometry-4"
            ]
          },
          "properties": {
            "angleType": "icsm-angle-type:subtended",
            "comment": null
          }
        },
        {
          "id": "angle-2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "SubtendedAngle",
            "references": [
              "point-3",
              "line-geometry-1",
              "line-geometry-3"
            ]
          },
          "properties": {
            "angleType": "icsm-angle-type:subtended",
            "comment": null
          }
        },
        {
          "id": "angle-3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "SubtendedAngle",
            "references": [
              "point-2",
              "line-geometry-2",
              "line-geometry-1"
            ]
          },
          "properties": {
            "angleType": "icsm-angle-type:subtended",
            "comment": null
          }
        },
        {
          "id": "angle-4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "SubtendedAngle",
            "references": [
              "point-4",
              "line-geometry-4",
              "line-geometry-2"
            ]
          },
          "properties": {
            "angleType": "icsm-angle-type:subtended",
            "comment": null
          }
        }
      ]
    }
  ],
  "rings": [],
  "faces": [],
  "shells": [],
  "solids": [],
  "parcels": [
    {
      "id": "uuid:63c654cd-0c9a-496a-aebf-b6cb4a784525",
      "type": "FeatureCollection",
      "featureType": "PrimaryParcel",
      "properties": {
        "spatialRepresentationDefinitions": {
          "representationStatus": "representation-status:2d",
          "geometryLegalStatus": "geometry-legal-status:a2d",
          "coordinateRepresentation": {
            "coordinateDimension": 2,
            "zValueRole": "coordinate-z-role:absent"
          },
          "verticalExtent": {
            "status": "vertical-extent-status:ud",
            "lowerBoundary": {
              "state": "vertical-boundary-state:und"
            },
            "upperBoundary": {
              "state": "vertical-boundary-state:und"
            }
          },
          "computabilityStatus": "computability-status:nc",
          "derivedGeometry": {
            "status": "notGenerated"
          }
        }
      },
      "features": [
        {
          "id": "parcel-1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              "line-geometry-2",
              "line-geometry-1",
              "line-geometry-3",
              "line-geometry-4"
            ]
          },
          "properties": {
            "appellation": {
              "type": "wa:LotOnPlanAppellation",
              "label": "Lot 800 on Plan DP 431276",
              "hasPart": [
                {
                  "type": "surveyType",
                  "ref": "wa-survey-type:deposited-plan"
                },
                {
                  "type": "surveyNumber",
                  "label": "DP 431276"
                },
                {
                  "type": "lotPrefix",
                  "ref": "wa-parcel-purpose:lot"
                },
                {
                  "type": "lotNumber",
                  "label": "800"
                }
              ]
            },
            "area": 809,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:lot",
            "parcelState": "wa-parcel-state:created",
            "interests": []
          }
        }
      ]
    },
    {
      "id": "uuid:c627546f-1b7e-44d2-ba45-36d7dc1293e6",
      "type": "FeatureCollection",
      "featureType": "PrimaryParcel",
      "properties": {
        "spatialRepresentationDefinitions": {
          "representationStatus": "representation-status:2d",
          "geometryLegalStatus": "geometry-legal-status:a2d",
          "coordinateRepresentation": {
            "coordinateDimension": 2,
            "zValueRole": "coordinate-z-role:absent"
          },
          "verticalExtent": {
            "status": "vertical-extent-status:ns",
            "lowerBoundary": {
              "state": "vertical-boundary-state:und"
            },
            "upperBoundary": {
              "state": "vertical-boundary-state:und"
            }
          },
          "computabilityStatus": "computability-status:nc",
          "derivedGeometry": {
            "status": "notGenerated"
          }
        }
      },
      "features": [
        {
          "id": "parcel-2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              "line-geometry-2",
              "line-geometry-1",
              "line-geometry-3",
              "line-geometry-4"
            ]
          },
          "properties": {
            "appellation": {
              "type": "wa:LotOnPlanAppellation",
              "label": "Lot 1 on Plan SP 28750",
              "hasPart": [
                {
                  "type": "surveyType",
                  "ref": "wa-survey-type:deposited-plan"
                },
                {
                  "type": "surveyNumber",
                  "label": "SP 28750"
                },
                {
                  "type": "lotPrefix",
                  "ref": "wa-parcel-purpose:lot"
                },
                {
                  "type": "lotNumber",
                  "label": "1"
                }
              ]
            },
            "area": 809,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:strata-lot",
            "parcelState": "wa-parcel-state:former-tenure",
            "interests": [
              {
                "interestLink": "2500-584",
                "interestType": "wa-interest-type:ct"
              }
            ]
          }
        },
        {
          "id": "parcel-3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              "line-geometry-2",
              "line-geometry-1",
              "line-geometry-3",
              "line-geometry-4"
            ]
          },
          "properties": {
            "appellation": {
              "type": "wa:LotOnPlanAppellation",
              "label": "Lot 2 on Plan SP 28750",
              "hasPart": [
                {
                  "type": "surveyType",
                  "ref": "wa-survey-type:deposited-plan"
                },
                {
                  "type": "surveyNumber",
                  "label": "SP 28750"
                },
                {
                  "type": "lotPrefix",
                  "ref": "wa-parcel-purpose:lot"
                },
                {
                  "type": "lotNumber",
                  "label": "2"
                }
              ]
            },
            "area": 809,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:strata-lot",
            "parcelState": "wa-parcel-state:former-tenure",
            "interests": [
              {
                "interestLink": "2500-585",
                "interestType": "wa-interest-type:ct"
              }
            ]
          }
        }
      ]
    }
  ],
  "supportingDocuments": [],
  "annotations": [
    {
      "description": "Subject to Material Change and WAPC approval.",
      "role": "wa-annotation-role:sp",
      "lodged": {
        "date": "2026-01-02"
      }
    },
    {
      "description": "Survey carried out under Regulation 4 Compiled Plan of Transfer of Land (Surveys) Regulations 1955",
      "href": "wa-leg:Transfer%20of%20Land%20(Surveys)%20Regulations%201955%20-%20%5B01-b0-09%5D.pdf",
      "role": "wa-annotation-role:r-4"
    }
  ]
}
```

#### ttl
```ttl
@prefix commonpatterns: <https://w3id.org/ogc/utils/label/> .
@prefix container: <https://linked.data.gov.au/def/csdm/container/> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix epsg: <http://www.opengis.net/def/crs/EPSG/0/> .
@prefix geojson: <https://purl.org/geojson/vocab#> .
@prefix icsm-admin-unit-type: <https://linked.data.gov.au/def/csdm/icsm-admin-unit-type/> .
@prefix icsm-angle-type: <https://linked.data.gov.au/def/csdm/icsm-angle-type/> .
@prefix icsm-distance-type: <https://linked.data.gov.au/def/csdm/icsm-distance-type/> .
@prefix icsm-equipment-type: <https://linked.data.gov.au/def/csdm/icsm-equipment-type/> .
@prefix icsm-procedure-used: <https://linked.data.gov.au/def/csdm/icsm-procedure-used/> .
@prefix ns1: <https://linked.data.gov.au/def/csdm/surveyobs/> .
@prefix ns2: <https://linked.data.gov.au/def/csdm/commonpatterns/> .
@prefix ns3: <http://www.iana.org/assignments/> .
@prefix oa: <http://www.w3.org/ns/oa#> .
@prefix owlTime: <http://www.w3.org/2006/time#> .
@prefix parcel: <https://w3id.org/ogc/ladm/parcels/> .
@prefix prof: <http://www.w3.org/ns/dx/prof/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix surv: <https://linked.data.gov.au/def/csdm/surveyfeatures/> .
@prefix surveyable: <https://linked.data.gov.au/def/csdm/defs/surveyableproperties/> .
@prefix topo: <https://purl.org/geojson/topo#> .
@prefix uuid: <urn:uuid:> .
@prefix wa-annotation-role: <https://linked.data.gov.au/def/csdm/wa-annotation/> .
@prefix wa-interest-type: <https://linked.data.gov.au/def/csdm/wa-interest-type/> .
@prefix wa-leg: <https://www.legislation.wa.gov.au/legislation/prod/filestore.nsf/FileURL/$FILE/> .
@prefix wa-locality: <https://linked.data.gov.au/def/csdm/wa-locality/> .
@prefix wa-monument-condition: <https://linked.data.gov.au/def/csdm/wa-monument-condition/> .
@prefix wa-monument-form: <https://linked.data.gov.au/def/csdm/wa-monument-form/> .
@prefix wa-monument-state: <https://linked.data.gov.au/def/csdm/wa-monument-state/> .
@prefix wa-parcel-purpose: <https://linked.data.gov.au/def/csdm/wa-parcel-purpose/> .
@prefix wa-parcel-state: <https://linked.data.gov.au/def/csdm/wa-parcel-state/> .
@prefix wa-parcel-type: <https://linked.data.gov.au/def/csdm/wa-parcel-type/> .
@prefix wa-survey-purpose: <https://linked.data.gov.au/def/csdm/wa-survey-purpose/> .
@prefix wa-survey-type: <https://linked.data.gov.au/def/csdm/wa-survey-type/> .
@prefix wa-surveypoint-purpose: <https://linked.data.gov.au/def/csdm/wa-surveypoint-purpose/> .
@prefix wa-vector-purpose: <https://linked.data.gov.au/def/csdm/wa-vector-purpose/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<file:///github/workspace/01-2d-footprint> a geojson:FeatureCollection ;
    rdfs:label "2D footprint only" ;
    dct:time [ owlTime:hasTime "2026-01-02"^^xsd:date ] ;
    container:adminUnit [ ns3:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:localGovernmentArea ;
            oa:hasTarget wa-locality:stirling ],
        [ ns3:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:innaloo ] ;
    container:annotations [ prof:hasRole wa-annotation-role:r-4 ;
            oa:hasTarget wa-leg:Transfer%20of%20Land%20\(Surveys\)%20Regulations%201955%20-%20%5B01-b0-09%5D.pdf ],
        [ prof:hasRole wa-annotation-role:sp ] ;
    container:bearingRotation 2.595435e-01 ;
    container:horizontalCRS epsg:8031 ;
    container:parcels uuid:63c654cd-0c9a-496a-aebf-b6cb4a784525,
        uuid:c627546f-1b7e-44d2-ba45-36d7dc1293e6 ;
    container:points uuid:59ba70ef-374a-46b6-b3d1-8c827291e21a ;
    container:purpose wa-survey-purpose:subdivision-t-sts ;
    container:referencedCSD uuid:7cae767b-5c27-41e1-9a46-b4d1d09401fc,
        uuid:df8ccb77-c666-41b3-87a5-0c6a950ca806 ;
    container:surveyType wa-survey-type:compiled ;
    container:vectorObservations uuid:0e582a81-b517-4012-a3bb-7605853e0159 ;
    topo:edges uuid:55d0e62e-04a9-479c-a98a-1d6e5549a4e2,
        uuid:a358dcd1-5013-40a0-96b6-e04e70cd2f40 ;
    topo:faces () ;
    topo:rings () ;
    topo:shells () ;
    geojson:collectionFeatureType "3D CSDM" .

<file:///github/workspace/parcel-1> a geojson:Feature ;
    geojson:topology [ a geojson:Polygon ;
            topo:relatedFeatures ( <file:///github/workspace/line-geometry-2> <file:///github/workspace/line-geometry-1> <file:///github/workspace/line-geometry-3> <file:///github/workspace/line-geometry-4> ) ] ;
    parcel:appellation [ a <wa:LotOnPlanAppellation> ;
            rdfs:label "Lot 800 on Plan DP 431276" ;
            dct:hasPart [ commonpatterns:namePartRef wa-survey-type:deposited-plan ;
                    commonpatterns:namePartType <file:///github/workspace/surveyType> ],
                [ rdfs:label "DP 431276" ;
                    commonpatterns:namePartType <file:///github/workspace/surveyNumber> ],
                [ commonpatterns:namePartRef wa-parcel-purpose:lot ;
                    commonpatterns:namePartType <file:///github/workspace/lotPrefix> ],
                [ rdfs:label "800" ;
                    commonpatterns:namePartType <file:///github/workspace/lotNumber> ] ] ;
    parcel:purpose wa-parcel-purpose:lot ;
    parcel:state wa-parcel-state:created ;
    parcel:surfaceArea 809 ;
    parcel:type wa-parcel-type:freehold .

<file:///github/workspace/parcel-2> a geojson:Feature ;
    geojson:topology [ a geojson:Polygon ;
            topo:relatedFeatures ( <file:///github/workspace/line-geometry-2> <file:///github/workspace/line-geometry-1> <file:///github/workspace/line-geometry-3> <file:///github/workspace/line-geometry-4> ) ] ;
    parcel:appellation [ a <wa:LotOnPlanAppellation> ;
            rdfs:label "Lot 1 on Plan SP 28750" ;
            dct:hasPart [ rdfs:label "1" ;
                    commonpatterns:namePartType <file:///github/workspace/lotNumber> ],
                [ commonpatterns:namePartRef wa-parcel-purpose:lot ;
                    commonpatterns:namePartType <file:///github/workspace/lotPrefix> ],
                [ commonpatterns:namePartRef wa-survey-type:deposited-plan ;
                    commonpatterns:namePartType <file:///github/workspace/surveyType> ],
                [ rdfs:label "SP 28750" ;
                    commonpatterns:namePartType <file:///github/workspace/surveyNumber> ] ] ;
    parcel:interest [ parcel:interestLink <file:///github/workspace/2500-584> ;
            parcel:interestType wa-interest-type:ct ] ;
    parcel:purpose wa-parcel-purpose:strata-lot ;
    parcel:state wa-parcel-state:former-tenure ;
    parcel:surfaceArea 809 ;
    parcel:type wa-parcel-type:freehold .

<file:///github/workspace/parcel-3> a geojson:Feature ;
    geojson:topology [ a geojson:Polygon ;
            topo:relatedFeatures ( <file:///github/workspace/line-geometry-2> <file:///github/workspace/line-geometry-1> <file:///github/workspace/line-geometry-3> <file:///github/workspace/line-geometry-4> ) ] ;
    parcel:appellation [ a <wa:LotOnPlanAppellation> ;
            rdfs:label "Lot 2 on Plan SP 28750" ;
            dct:hasPart [ commonpatterns:namePartRef wa-parcel-purpose:lot ;
                    commonpatterns:namePartType <file:///github/workspace/lotPrefix> ],
                [ rdfs:label "SP 28750" ;
                    commonpatterns:namePartType <file:///github/workspace/surveyNumber> ],
                [ rdfs:label "2" ;
                    commonpatterns:namePartType <file:///github/workspace/lotNumber> ],
                [ commonpatterns:namePartRef wa-survey-type:deposited-plan ;
                    commonpatterns:namePartType <file:///github/workspace/surveyType> ] ] ;
    parcel:interest [ parcel:interestLink <file:///github/workspace/2500-585> ;
            parcel:interestType wa-interest-type:ct ] ;
    parcel:purpose wa-parcel-purpose:strata-lot ;
    parcel:state wa-parcel-state:former-tenure ;
    parcel:surfaceArea 809 ;
    parcel:type wa-parcel-type:freehold .

<file:///github/workspace/subtended-angle-1> a geojson:Feature ;
    sosa:hasFeatureOfInterest <file:///github/workspace/angle-1> ;
    sosa:hasResult [ ] ;
    sosa:resultTime "2026-01-02T00:00:00Z" ;
    ns1:angleType icsm-angle-type:angle .

<file:///github/workspace/subtended-angle-2> a geojson:Feature ;
    sosa:hasFeatureOfInterest <file:///github/workspace/angle-2> ;
    sosa:hasResult [ ] ;
    sosa:resultTime "2026-01-02T00:00:00Z" ;
    ns1:angleType icsm-angle-type:angle .

<file:///github/workspace/subtended-angle-3> a geojson:Feature ;
    sosa:hasFeatureOfInterest <file:///github/workspace/angle-3> ;
    sosa:hasResult [ ] ;
    sosa:resultTime "2026-01-02T00:00:00Z" ;
    ns1:angleType icsm-angle-type:angle .

<file:///github/workspace/subtended-angle-4> a geojson:Feature ;
    sosa:hasFeatureOfInterest <file:///github/workspace/angle-4> ;
    sosa:hasResult [ ] ;
    sosa:resultTime "2026-01-02T00:00:00Z" ;
    ns1:angleType icsm-angle-type:angle .

<https://linked.data.gov.au/def/csdm/sensors/ts-16> a icsm-equipment-type:ts ;
    sosa:hasSubSystem <sensordesc:123456>,
        <sensordesc:789012> ;
    surv:lastCalibrated "2026-01-02T00:00:00Z" .

<sensordesc:123456> a icsm-equipment-type:ts .

<sensordesc:789012> a icsm-equipment-type:p .

uuid:0e582a81-b517-4012-a3bb-7605853e0159 a sosa:ObservationCollection,
        geojson:FeatureCollection ;
    sosa:hasMember <file:///github/workspace/subtended-angle-1>,
        <file:///github/workspace/subtended-angle-2>,
        <file:///github/workspace/subtended-angle-3>,
        <file:///github/workspace/subtended-angle-4>,
        uuid:636cb711-83c2-42dc-95c0-8aa62961bcf5,
        uuid:6865b3a4-8fe1-47a2-a6c6-0e2b64f81a8e,
        uuid:ee3bf46c-d29f-4133-8d65-584bb86e03f2,
        uuid:f46cd560-f1fe-4dfc-9bc3-fcf2615ac157 ;
    sosa:madeBySensor <https://linked.data.gov.au/def/csdm/sensors/ts-16> ;
    sosa:observedProperty surveyable:VectorDetermination ;
    sosa:resultTime "2026-01-02T00:00:00Z" ;
    sosa:usedProcedure icsm-procedure-used:measured .

uuid:55d0e62e-04a9-479c-a98a-1d6e5549a4e2 a geojson:FeatureCollection ;
    geojson:collectionFeatureType "SubtendedAngle" ;
    geojson:features <file:///github/workspace/angle-1>,
        <file:///github/workspace/angle-2>,
        <file:///github/workspace/angle-3>,
        <file:///github/workspace/angle-4> .

uuid:59ba70ef-374a-46b6-b3d1-8c827291e21a a geojson:FeatureCollection ;
    geojson:collectionFeatureType "CadastralMark" ;
    geojson:features <file:///github/workspace/point-2>,
        <file:///github/workspace/point-3>,
        <file:///github/workspace/point-4>,
        <file:///github/workspace/point-5> .

uuid:636cb711-83c2-42dc-95c0-8aa62961bcf5 a geojson:Feature ;
    sosa:hasFeatureOfInterest <file:///github/workspace/line-geometry-4> ;
    sosa:hasResult [ surv:distance 2.0116e+01 ] ;
    sosa:resultTime "2026-01-02T00:00:00Z" ;
    ns1:distanceType icsm-distance-type:ground .

uuid:63c654cd-0c9a-496a-aebf-b6cb4a784525 a geojson:FeatureCollection,
        parcel:PrimaryParcel ;
    geojson:features <file:///github/workspace/parcel-1> .

uuid:6865b3a4-8fe1-47a2-a6c6-0e2b64f81a8e a geojson:Feature ;
    sosa:hasFeatureOfInterest <file:///github/workspace/line-geometry-1> ;
    sosa:hasResult [ surv:distance 2.0116e+01 ] ;
    sosa:resultTime "2026-01-02T00:00:00Z" ;
    ns1:distanceType icsm-distance-type:ground .

uuid:7cae767b-5c27-41e1-9a46-b4d1d09401fc rdfs:label "SP 28750" ;
    dct:time [ ] ;
    container:adminUnit [ ns3:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:innaloo ] ;
    container:bearingRotation 2.595435e-01 .

uuid:a358dcd1-5013-40a0-96b6-e04e70cd2f40 a geojson:FeatureCollection ;
    geojson:collectionFeatureType "ObservedVector" ;
    geojson:features <file:///github/workspace/line-geometry-1>,
        <file:///github/workspace/line-geometry-2>,
        <file:///github/workspace/line-geometry-3>,
        <file:///github/workspace/line-geometry-4> .

uuid:c627546f-1b7e-44d2-ba45-36d7dc1293e6 a geojson:FeatureCollection,
        parcel:PrimaryParcel ;
    geojson:features <file:///github/workspace/parcel-2>,
        <file:///github/workspace/parcel-3> .

uuid:df8ccb77-c666-41b3-87a5-0c6a950ca806 rdfs:label "D36053" ;
    dct:time [ ] ;
    container:adminUnit [ ns3:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:innaloo ] ;
    container:bearingRotation 2.595435e-01 .

uuid:ee3bf46c-d29f-4133-8d65-584bb86e03f2 a geojson:Feature ;
    sosa:hasFeatureOfInterest <file:///github/workspace/line-geometry-3> ;
    sosa:hasResult [ surv:distance 4.0234e+01 ] ;
    sosa:resultTime "2026-01-02T00:00:00Z" ;
    ns1:distanceType icsm-distance-type:ground .

uuid:f46cd560-f1fe-4dfc-9bc3-fcf2615ac157 a geojson:Feature ;
    sosa:hasFeatureOfInterest <file:///github/workspace/line-geometry-2> ;
    sosa:hasResult [ surv:distance 4.0234e+01 ] ;
    sosa:resultTime "2026-01-02T00:00:00Z" ;
    ns1:distanceType icsm-distance-type:ground .

<file:///github/workspace/angle-1> a geojson:Feature ;
    geojson:topology [ a <file:///github/workspace/SubtendedAngle> ;
            topo:relatedFeatures ( <file:///github/workspace/point-5> <file:///github/workspace/line-geometry-3> <file:///github/workspace/line-geometry-4> ) ] .

<file:///github/workspace/angle-2> a geojson:Feature ;
    geojson:topology [ a <file:///github/workspace/SubtendedAngle> ;
            topo:relatedFeatures ( <file:///github/workspace/point-3> <file:///github/workspace/line-geometry-1> <file:///github/workspace/line-geometry-3> ) ] .

<file:///github/workspace/angle-3> a geojson:Feature ;
    geojson:topology [ a <file:///github/workspace/SubtendedAngle> ;
            topo:relatedFeatures ( <file:///github/workspace/point-2> <file:///github/workspace/line-geometry-2> <file:///github/workspace/line-geometry-1> ) ] .

<file:///github/workspace/angle-4> a geojson:Feature ;
    geojson:topology [ a <file:///github/workspace/SubtendedAngle> ;
            topo:relatedFeatures ( <file:///github/workspace/point-4> <file:///github/workspace/line-geometry-4> <file:///github/workspace/line-geometry-2> ) ] .

<file:///github/workspace/point-2> a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.813698e+04 3.699431e+05 ) ] ;
    ns2:name <file:///github/workspace/> ;
    ns2:qualityMeasure 5e-02 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:other ;
            surv:state wa-monument-state:mark-found ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.15797e+02 -3.189365e+01 ) ] .

<file:///github/workspace/point-3> a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.815709e+04 3.69943e+05 ) ] ;
    ns2:name <file:///github/workspace/> ;
    ns2:qualityMeasure 5e-02 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:other ;
            surv:state wa-monument-state:mark-found ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.157972e+02 -3.189365e+01 ) ] .

<file:///github/workspace/point-4> a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.813716e+04 3.699833e+05 ) ] ;
    ns2:name <file:///github/workspace/> ;
    ns2:qualityMeasure 5e-02 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:other ;
            surv:state wa-monument-state:mark-found ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.15797e+02 -3.189329e+01 ) ] .

<file:///github/workspace/point-5> a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.815727e+04 3.699833e+05 ) ] ;
    ns2:name <file:///github/workspace/> ;
    ns2:qualityMeasure 5e-02 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:other ;
            surv:state wa-monument-state:mark-found ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.157972e+02 -3.189329e+01 ) ] .

<file:///github/workspace/line-geometry-1> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:road-boundary ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( <file:///github/workspace/point-2> <file:///github/workspace/point-3> ) ] .

<file:///github/workspace/line-geometry-2> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:boundary ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( <file:///github/workspace/point-2> <file:///github/workspace/point-4> ) ] .

<file:///github/workspace/line-geometry-3> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:boundary ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( <file:///github/workspace/point-3> <file:///github/workspace/point-5> ) ] .

<file:///github/workspace/line-geometry-4> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:boundary ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( <file:///github/workspace/point-4> <file:///github/workspace/point-5> ) ] .


```


### Parcel Collection
arbitrary (not actual case) attachment of spatial representation to a parcel collection
#### json
```json
{
  "id": "DP_422532",
  "name": "DP 422532",
  "description": "Western-Australia-Parcel-Example",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision",
  "surveyType": "wa-survey-type:SSA",
  "time": {
    "date": "2022-05-22"
  },
  "horizontalCRS": "epsg:8024",
  "bearingRotation": 0.0,
  "surveyTitle": "Lots 210 - 232, 240, Roads, 9005 & Easements",
  "adminUnit": [
    {
      "href": "wa-local-government:city-of-kalgoorlie-boulder",
      "rel": "related",
      "role": "icsm-admin-unit-type:localGovernmentArea"
    },
    {
      "href": "wa-locality:karlkurla",
      "rel": "related",
      "role": "icsm-admin-unit-type:locality"
    }
  ],
  "wasGeneratedBy": {
    "id": "DP-1-S2",
    "endedAtTime": "2029-01-01T01:02:03Z"
  },
  "features": [],
  "referencedCSDs": [
    {
      "id": "DP_422526",
      "name": "DP 422526",
      "adminUnit": {
        "href": "wa-locality:hyden",
        "rel": "related",
        "role": "icsm-admin-unit-type:locality"
      },
      "bearingRotation": 0.0,
      "time": {
        "date": "2013-03-10"
      }
    }
  ],
  "points": [
    {
      "id": "BoundaryMark",
      "type": "FeatureCollection",
      "featureType": "BoundaryMarks",
      "features": [
        {
          "id": "184",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54693.284,
              398706.957
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:road-boundary",
            "ptQualityMeasure": 0.100,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        },
        {
          "id": "189",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54709.808,
              398707.154
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:road-boundary",
            "ptQualityMeasure": 0.100,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        },
        {
          "id": "190",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54718.977,
              398711.145
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:road-boundary",
            "ptQualityMeasure": 0.100,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        },
        {
          "id": "196",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54725.074,
              398717.535
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:road-boundary",
            "ptQualityMeasure": 0.100,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        },
        {
          "id": "197",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54698.303,
              398743.075
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:internal-boundary",
            "ptQualityMeasure": 0.100,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        },
        {
          "id": "198",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54688.639,
              398732.946
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:internal-boundary",
            "ptQualityMeasure": 0.100,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        }
      ]
    }
  ],
  "vectorObservations": [
    {
      "id": "vectorobservation:computed",
      "type": "FeatureCollection",
      "featureType": "sosa:ObservationCollection",
      "usedProcedure": "wa-procedure-used:d",
      "properties": {
        "resultTime": "2011-05-22T00:00:00Z",
        "observedProperty": "surveyable:VectorDetermination",
        "madeBySensor": {
          "sensorType": "icsm-equipment-type:software"
        }
      },
      "features": [
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "312",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 16.526,
              "angle": 269.31694905
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "313",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 26.401,
              "angle": 349.86944905
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "314",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 14.000,
              "angle": 43.65444905
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "309",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 37.000,
              "angle": 133.65444905
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "311",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 8.832,
              "angle": 223.65444905
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "298",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 10.000,
              "angle": 246.48556016
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        }
      ]
    }
  ],
  "edges": [
    {
      "id": "observedVectors",
      "type": "FeatureCollection",
      "featureType": "surv:ObservedVector",
      "features": [
        {
          "id": "312",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "189",
              "184"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:R",
            "comment": null
          }
        },
        {
          "id": "313",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "184",
              "198"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "314",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "198",
              "197"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "309",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "197",
              "196"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "311",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "196",
              "190"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:R",
            "comment": null
          }
        },
        {
          "id": "298",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "190",
              "189"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:R",
            "comment": null
          }
        }
      ]
    }
  ],
  "parcels": [
    {
      "id": "PrimaryParcels",
      "type": "FeatureCollection",
      "featureType": "PrimaryParcel",
      "properties": {
        "spatialRepresentationDefinitions": {
          "representationStatus": "representation-status:jb",
          "geometryLegalStatus": "geometry-legal-status:a2d",
          "coordinateRepresentation": {
            "coordinateDimension": 2,
            "zValueRole": "coordinate-z-role:absent"
          },
          "verticalExtent": {
            "status": "vertical-extent-status:ld",
            "lowerBoundary": {
              "state": "vertical-boundary-state:dur",
              "definitionRef": "jurisdictional-limit-lower-1"
            },
            "upperBoundary": {
              "state": "vertical-boundary-state:und"
            }
          },
          "computabilityStatus": "computability-status:rrs",
          "verticalBoundaryDefinitions": [
            {
              "id": "jurisdictional-limit-lower-1",
              "definitionType": "vertical-definition-type:jur",
              "limitRole": "vertical-limit-role:ll",
              "valueType": "vertical-value-type:off",
              "value": 12.19,
              "direction": "vertical-direction:blw",
              "heightReference": "height-reference:gl",
              "description": "LIMITED IN DEPTH TO 12.19 METRES BELOW GROUND",
              "sourceReference": "source-crown-grant-depth-limit-1",
              "resolutionStatus": "requiresReferenceSurface",
              "provenanceRef": "crown-grant-depth-limit-extraction-1",
              "sourceBasis": {
                "ruleType": "crownGrantDepthLimit",
                "sourceAuthorityType": "CrownGrant",
                "sourceStatement": "LIMITED IN DEPTH TO 12.19 METRES BELOW GROUND"
              }
            }
          ],
          "referenceSurfaces": [],
          "derivedGeometry": {
            "status": "notGenerated"
          }
        }
      },
      "features": [
        {
          "id": "213",
          "type": "Feature",
          "featureType": "PrimaryParcel",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "298",
                "311",
                "309",
                "314",
                "313",
                "312"
              ]
            ]
          },
          "properties": {
            "appellation": {
              "type": "wa:LotOnPlanAppellation",
              "label": "Lot 213 DP 572532",
              "hasPart": [
                {
                  "type": "ParcelType",
                  "label": "Lot"
                },
                {
                  "type": "ParcelIdentifier",
                  "label": "213"
                },
                {
                  "type": "PlanType",
                  "label": "DP"
                },
                {
                  "type": "PlanNumber",
                  "label": "572532"
                }
              ]
            },
            "area": 798,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:lot",
            "parcelState": "wa-parcel-state:created",
            "interests": []
          }
        }
      ]
    }
  ],
  "supportingDocuments": [],
  "annotations": []
}
```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-liminal/context.jsonld",
  "id": "DP_422532",
  "name": "DP 422532",
  "description": "Western-Australia-Parcel-Example",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision",
  "surveyType": "wa-survey-type:SSA",
  "time": {
    "date": "2022-05-22"
  },
  "horizontalCRS": "epsg:8024",
  "bearingRotation": 0.0,
  "surveyTitle": "Lots 210 - 232, 240, Roads, 9005 & Easements",
  "adminUnit": [
    {
      "href": "wa-local-government:city-of-kalgoorlie-boulder",
      "rel": "related",
      "role": "icsm-admin-unit-type:localGovernmentArea"
    },
    {
      "href": "wa-locality:karlkurla",
      "rel": "related",
      "role": "icsm-admin-unit-type:locality"
    }
  ],
  "wasGeneratedBy": {
    "id": "DP-1-S2",
    "endedAtTime": "2029-01-01T01:02:03Z"
  },
  "features": [],
  "referencedCSDs": [
    {
      "id": "DP_422526",
      "name": "DP 422526",
      "adminUnit": {
        "href": "wa-locality:hyden",
        "rel": "related",
        "role": "icsm-admin-unit-type:locality"
      },
      "bearingRotation": 0.0,
      "time": {
        "date": "2013-03-10"
      }
    }
  ],
  "points": [
    {
      "id": "BoundaryMark",
      "type": "FeatureCollection",
      "featureType": "BoundaryMarks",
      "features": [
        {
          "id": "184",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54693.284,
              398706.957
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:road-boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        },
        {
          "id": "189",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54709.808,
              398707.154
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:road-boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        },
        {
          "id": "190",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54718.977,
              398711.145
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:road-boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        },
        {
          "id": "196",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54725.074,
              398717.535
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:road-boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        },
        {
          "id": "197",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54698.303,
              398743.075
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:internal-boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        },
        {
          "id": "198",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54688.639,
              398732.946
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:internal-boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:did-not-search"
            }
          }
        }
      ]
    }
  ],
  "vectorObservations": [
    {
      "id": "vectorobservation:computed",
      "type": "FeatureCollection",
      "featureType": "sosa:ObservationCollection",
      "usedProcedure": "wa-procedure-used:d",
      "properties": {
        "resultTime": "2011-05-22T00:00:00Z",
        "observedProperty": "surveyable:VectorDetermination",
        "madeBySensor": {
          "sensorType": "icsm-equipment-type:software"
        }
      },
      "features": [
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "312",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 16.526,
              "angle": 269.31694905
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "313",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 26.401,
              "angle": 349.86944905
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "314",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 14.0,
              "angle": 43.65444905
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "309",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 37.0,
              "angle": 133.65444905
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "311",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 8.832,
              "angle": 223.65444905
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "298",
            "resultTime": "2011-05-22T00:00:00Z",
            "hasResult": {
              "distance": 10.0,
              "angle": 246.48556016
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000,
            "angleType": "icsm-angle-type:bearing",
            "angleAccuracy": 0.00833333
          }
        }
      ]
    }
  ],
  "edges": [
    {
      "id": "observedVectors",
      "type": "FeatureCollection",
      "featureType": "surv:ObservedVector",
      "features": [
        {
          "id": "312",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "189",
              "184"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:R",
            "comment": null
          }
        },
        {
          "id": "313",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "184",
              "198"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "314",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "198",
              "197"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "309",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "197",
              "196"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "311",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "196",
              "190"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:R",
            "comment": null
          }
        },
        {
          "id": "298",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "190",
              "189"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:R",
            "comment": null
          }
        }
      ]
    }
  ],
  "parcels": [
    {
      "id": "PrimaryParcels",
      "type": "FeatureCollection",
      "featureType": "PrimaryParcel",
      "properties": {
        "spatialRepresentationDefinitions": {
          "representationStatus": "representation-status:jb",
          "geometryLegalStatus": "geometry-legal-status:a2d",
          "coordinateRepresentation": {
            "coordinateDimension": 2,
            "zValueRole": "coordinate-z-role:absent"
          },
          "verticalExtent": {
            "status": "vertical-extent-status:ld",
            "lowerBoundary": {
              "state": "vertical-boundary-state:dur",
              "definitionRef": "jurisdictional-limit-lower-1"
            },
            "upperBoundary": {
              "state": "vertical-boundary-state:und"
            }
          },
          "computabilityStatus": "computability-status:rrs",
          "verticalBoundaryDefinitions": [
            {
              "id": "jurisdictional-limit-lower-1",
              "definitionType": "vertical-definition-type:jur",
              "limitRole": "vertical-limit-role:ll",
              "valueType": "vertical-value-type:off",
              "value": 12.19,
              "direction": "vertical-direction:blw",
              "heightReference": "height-reference:gl",
              "description": "LIMITED IN DEPTH TO 12.19 METRES BELOW GROUND",
              "sourceReference": "source-crown-grant-depth-limit-1",
              "resolutionStatus": "requiresReferenceSurface",
              "provenanceRef": "crown-grant-depth-limit-extraction-1",
              "sourceBasis": {
                "ruleType": "crownGrantDepthLimit",
                "sourceAuthorityType": "CrownGrant",
                "sourceStatement": "LIMITED IN DEPTH TO 12.19 METRES BELOW GROUND"
              }
            }
          ],
          "referenceSurfaces": [],
          "derivedGeometry": {
            "status": "notGenerated"
          }
        }
      },
      "features": [
        {
          "id": "213",
          "type": "Feature",
          "featureType": "PrimaryParcel",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "298",
                "311",
                "309",
                "314",
                "313",
                "312"
              ]
            ]
          },
          "properties": {
            "appellation": {
              "type": "wa:LotOnPlanAppellation",
              "label": "Lot 213 DP 572532",
              "hasPart": [
                {
                  "type": "ParcelType",
                  "label": "Lot"
                },
                {
                  "type": "ParcelIdentifier",
                  "label": "213"
                },
                {
                  "type": "PlanType",
                  "label": "DP"
                },
                {
                  "type": "PlanNumber",
                  "label": "572532"
                }
              ]
            },
            "area": 798,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:lot",
            "parcelState": "wa-parcel-state:created",
            "interests": []
          }
        }
      ]
    }
  ],
  "supportingDocuments": [],
  "annotations": []
}
```

#### ttl
```ttl
@prefix commonpatterns: <https://w3id.org/ogc/utils/label/> .
@prefix container: <https://linked.data.gov.au/def/csdm/container/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix epsg: <http://www.opengis.net/def/crs/EPSG/0/> .
@prefix geojson: <https://purl.org/geojson/vocab#> .
@prefix icsm-admin-unit-type: <https://linked.data.gov.au/def/csdm/icsm-admin-unit-type/> .
@prefix icsm-angle-type: <https://linked.data.gov.au/def/csdm/icsm-angle-type/> .
@prefix icsm-distance-type: <https://linked.data.gov.au/def/csdm/icsm-distance-type/> .
@prefix icsm-equipment-type: <https://linked.data.gov.au/def/csdm/icsm-equipment-type/> .
@prefix ns1: <https://linked.data.gov.au/def/csdm/surveyobs/> .
@prefix ns2: <http://www.iana.org/assignments/> .
@prefix ns3: <https://linked.data.gov.au/def/csdm/commonpatterns/> .
@prefix oa: <http://www.w3.org/ns/oa#> .
@prefix parcel: <https://w3id.org/ogc/ladm/parcels/> .
@prefix prof: <http://www.w3.org/ns/dx/prof/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix surv: <https://linked.data.gov.au/def/csdm/surveyfeatures/> .
@prefix surveyable: <https://linked.data.gov.au/def/csdm/defs/surveyableproperties/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix topo: <https://purl.org/geojson/topo#> .
@prefix wa-local-government: <https://linked.data.gov.au/def/csdm/wa-local-government/> .
@prefix wa-locality: <https://linked.data.gov.au/def/csdm/wa-locality/> .
@prefix wa-monument-condition: <https://linked.data.gov.au/def/csdm/wa-monument-condition/> .
@prefix wa-monument-form: <https://linked.data.gov.au/def/csdm/wa-monument-form/> .
@prefix wa-monument-state: <https://linked.data.gov.au/def/csdm/wa-monument-state/> .
@prefix wa-parcel-purpose: <https://linked.data.gov.au/def/csdm/wa-parcel-purpose/> .
@prefix wa-parcel-state: <https://linked.data.gov.au/def/csdm/wa-parcel-state/> .
@prefix wa-parcel-type: <https://linked.data.gov.au/def/csdm/wa-parcel-type/> .
@prefix wa-procedure-used: <https://linked.data.gov.au/def/csdm/wa-procedure-used/> .
@prefix wa-survey-purpose: <https://linked.data.gov.au/def/csdm/wa-survey-purpose/> .
@prefix wa-survey-type: <https://linked.data.gov.au/def/csdm/wa-survey-type/> .
@prefix wa-surveypoint-purpose: <https://linked.data.gov.au/def/csdm/wa-surveypoint-purpose/> .
@prefix wa-vector-purpose: <https://linked.data.gov.au/def/csdm/wa-vector-purpose/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://www.wa-example.com/features/DP_422532> a geojson:FeatureCollection ;
    rdfs:label "DP 422532" ;
    dcterms:time [ time:hasTime "2022-05-22"^^xsd:date ] ;
    container:adminUnit [ ns2:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:karlkurla ],
        [ ns2:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:localGovernmentArea ;
            oa:hasTarget wa-local-government:city-of-kalgoorlie-boulder ] ;
    container:bearingRotation 0e+00 ;
    container:horizontalCRS epsg:8024 ;
    container:parcels <https://www.wa-example.com/features/PrimaryParcels> ;
    container:points <https://www.wa-example.com/features/BoundaryMark> ;
    container:purpose wa-survey-purpose:subdivision ;
    container:referencedCSD <https://www.wa-example.com/features/DP_422526> ;
    container:surveyType wa-survey-type:SSA ;
    container:vectorObservations <vectorobservation:computed> ;
    topo:edges <https://www.wa-example.com/features/observedVectors> ;
    geojson:collectionFeatureType "CSD" .

<https://www.wa-example.com/features/213> a geojson:Feature,
        parcel:PrimaryParcel ;
    geojson:topology [ a geojson:Polygon ;
            topo:relatedFeatures ( ( <https://www.wa-example.com/features/298> <https://www.wa-example.com/features/311> <https://www.wa-example.com/features/309> <https://www.wa-example.com/features/314> <https://www.wa-example.com/features/313> <https://www.wa-example.com/features/312> ) ) ] ;
    parcel:appellation [ a <wa:LotOnPlanAppellation> ;
            rdfs:label "Lot 213 DP 572532" ;
            dcterms:hasPart [ rdfs:label "DP" ;
                    commonpatterns:namePartType <https://www.wa-example.com/features/PlanType> ],
                [ rdfs:label "Lot" ;
                    commonpatterns:namePartType <https://www.wa-example.com/features/ParcelType> ],
                [ rdfs:label "572532" ;
                    commonpatterns:namePartType <https://www.wa-example.com/features/PlanNumber> ],
                [ rdfs:label "213" ;
                    commonpatterns:namePartType <https://www.wa-example.com/features/ParcelIdentifier> ] ] ;
    parcel:purpose wa-parcel-purpose:lot ;
    parcel:state wa-parcel-state:created ;
    parcel:surfaceArea 798 ;
    parcel:type wa-parcel-type:freehold .

<https://www.wa-example.com/features/BoundaryMark> a geojson:FeatureCollection ;
    geojson:collectionFeatureType "BoundaryMarks" ;
    geojson:features <https://www.wa-example.com/features/184>,
        <https://www.wa-example.com/features/189>,
        <https://www.wa-example.com/features/190>,
        <https://www.wa-example.com/features/196>,
        <https://www.wa-example.com/features/197>,
        <https://www.wa-example.com/features/198> .

<https://www.wa-example.com/features/DP_422526> rdfs:label "DP 422526" ;
    dcterms:time [ time:hasTime "2013-03-10"^^xsd:date ] ;
    container:adminUnit [ ns2:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:hyden ] ;
    container:bearingRotation 0e+00 .

<https://www.wa-example.com/features/PrimaryParcels> a geojson:FeatureCollection,
        parcel:PrimaryParcel ;
    geojson:features <https://www.wa-example.com/features/213> .

<https://www.wa-example.com/features/observedVectors> a geojson:FeatureCollection ;
    geojson:collectionFeatureType "surv:ObservedVector" ;
    geojson:features <https://www.wa-example.com/features/298>,
        <https://www.wa-example.com/features/309>,
        <https://www.wa-example.com/features/311>,
        <https://www.wa-example.com/features/312>,
        <https://www.wa-example.com/features/313>,
        <https://www.wa-example.com/features/314> .

<vectorobservation:computed> a sosa:ObservationCollection,
        geojson:FeatureCollection ;
    sosa:hasMember [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/309> ;
            sosa:hasResult [ surv:distance 3.7e+01 ] ;
            sosa:resultTime "2011-05-22T00:00:00Z" ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceType icsm-distance-type:ground ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/311> ;
            sosa:hasResult [ surv:distance 8.832e+00 ] ;
            sosa:resultTime "2011-05-22T00:00:00Z" ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceType icsm-distance-type:ground ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/314> ;
            sosa:hasResult [ surv:distance 1.4e+01 ] ;
            sosa:resultTime "2011-05-22T00:00:00Z" ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceType icsm-distance-type:ground ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/298> ;
            sosa:hasResult [ surv:distance 1e+01 ] ;
            sosa:resultTime "2011-05-22T00:00:00Z" ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceType icsm-distance-type:ground ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/312> ;
            sosa:hasResult [ surv:distance 1.6526e+01 ] ;
            sosa:resultTime "2011-05-22T00:00:00Z" ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceType icsm-distance-type:ground ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/313> ;
            sosa:hasResult [ surv:distance 2.6401e+01 ] ;
            sosa:resultTime "2011-05-22T00:00:00Z" ;
            ns1:angleType icsm-angle-type:bearing ;
            ns1:distanceType icsm-distance-type:ground ] ;
    sosa:madeBySensor [ a icsm-equipment-type:software ] ;
    sosa:observedProperty surveyable:VectorDetermination ;
    sosa:resultTime "2011-05-22T00:00:00Z" ;
    sosa:usedProcedure wa-procedure-used:d .

<https://www.wa-example.com/features/184> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.469328e+04 3.98707e+05 ) ] ;
    ns3:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:did-not-search ] ;
    surv:purpose wa-surveypoint-purpose:road-boundary .

<https://www.wa-example.com/features/189> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.470981e+04 3.987072e+05 ) ] ;
    ns3:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:did-not-search ] ;
    surv:purpose wa-surveypoint-purpose:road-boundary .

<https://www.wa-example.com/features/190> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.471898e+04 3.987111e+05 ) ] ;
    ns3:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:did-not-search ] ;
    surv:purpose wa-surveypoint-purpose:road-boundary .

<https://www.wa-example.com/features/196> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.472507e+04 3.987175e+05 ) ] ;
    ns3:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:did-not-search ] ;
    surv:purpose wa-surveypoint-purpose:road-boundary .

<https://www.wa-example.com/features/197> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.46983e+04 3.987431e+05 ) ] ;
    ns3:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:did-not-search ] ;
    surv:purpose wa-surveypoint-purpose:internal-boundary .

<https://www.wa-example.com/features/198> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.468864e+04 3.987329e+05 ) ] ;
    ns3:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:did-not-search ] ;
    surv:purpose wa-surveypoint-purpose:internal-boundary .

<https://www.wa-example.com/features/298> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:R ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( <https://www.wa-example.com/features/190> <https://www.wa-example.com/features/189> ) ] .

<https://www.wa-example.com/features/309> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( <https://www.wa-example.com/features/197> <https://www.wa-example.com/features/196> ) ] .

<https://www.wa-example.com/features/311> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:R ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( <https://www.wa-example.com/features/196> <https://www.wa-example.com/features/190> ) ] .

<https://www.wa-example.com/features/312> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:R ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( <https://www.wa-example.com/features/189> <https://www.wa-example.com/features/184> ) ] .

<https://www.wa-example.com/features/313> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( <https://www.wa-example.com/features/184> <https://www.wa-example.com/features/198> ) ] .

<https://www.wa-example.com/features/314> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( <https://www.wa-example.com/features/198> <https://www.wa-example.com/features/197> ) ] .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: Liminal 3D cases profile of Cadastral Survey Data Model
allOf:
- $ref: https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-core/schema.yaml
- anyOf:
  - properties:
      parcels:
        type: array
        items:
          properties:
            properties:
              required:
              - spatialRepresentationDefinitions
  - properties:
      parcels:
        type: array
        items:
          properties:
            features:
              type: array
              items:
                properties:
                  properties:
                    required:
                    - spatialRepresentationDefinitions
x-jsonld-prefixes:
  representation-status: https://linked.data.gov.au/def/csdm/representation-status/
  geometry-legal-status: https://linked.data.gov.au/def/csdm/geometry-legal-status/
  vertical-extent-status: https://linked.data.gov.au/def/csdm/vertical-extent-status/
  computability-status: https://linked.data.gov.au/def/csdm/computability-status/
  coordinate-z-role: https://linked.data.gov.au/def/csdm/coordinate-z-role/
  vertical-boundary-state: https://linked.data.gov.au/def/csdm/vertical-boundary-state/
  vertical-definition-type: https://linked.data.gov.au/def/csdm/vertical-definition-type/
  vertical-limit-role: https://linked.data.gov.au/def/csdm/vertical-limit-role/
  vertical-value-type: https://linked.data.gov.au/def/csdm/vertical-value-type/
  vertical-direction: https://linked.data.gov.au/def/csdm/vertical-direction/
  height-reference: https://linked.data.gov.au/def/csdm/height-reference/
  uuid: 'urn:uuid:'

```

Links to the schema:

* YAML version: [schema.yaml](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-liminal/schema.json)
* JSON version: [schema.json](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-liminal/schema.yaml)


# JSON-LD Context

```jsonld
{
  "@context": {
    "type": "@type",
    "featureType": "geojson:collectionFeatureType",
    "coordRefSys": "http://www.opengis.net/def/glossary/term/CoordinateReferenceSystemCRS",
    "features": {
      "@context": {
        "featureType": "@type",
        "links": {
          "@context": {
            "href": {
              "@type": "@id",
              "@id": "oa:hasTarget"
            },
            "rel": {
              "@context": {
                "@base": "http://www.iana.org/assignments/relation/"
              },
              "@id": "http://www.iana.org/assignments/relation",
              "@type": "@id"
            },
            "type": "dct:type",
            "hreflang": "dct:language",
            "title": "rdfs:label",
            "length": "dct:extent"
          },
          "@id": "rdfs:seeAlso"
        },
        "Prism": {
          "@id": "geojson:Prism",
          "@context": {
            "base": "geojson:prismBase",
            "lower": "geojson:prismLower",
            "upper": "geojson:prismUpper"
          }
        },
        "MultiPrism": {
          "@id": "geojson:MultiPrism",
          "@context": {
            "prisms": "geojson:prisms"
          }
        },
        "topology": {
          "@context": {
            "references": {
              "@id": "topo:relatedFeatures",
              "@type": "@id",
              "@container": "@list"
            },
            "directed_references": {
              "@context": {
                "ref": {
                  "@type": "@id",
                  "@id": "topo:ref"
                }
              },
              "@id": "topo:directedReferences",
              "@container": "@list"
            },
            "relationships": {
              "@context": {
                "href": {
                  "@type": "@id",
                  "@id": "oa:hasTarget"
                },
                "rel": {
                  "@context": {
                    "@base": "http://www.iana.org/assignments/relation/"
                  },
                  "@id": "http://www.iana.org/assignments/relation",
                  "@type": "@id"
                },
                "type": "dct:type",
                "hreflang": "dct:language",
                "title": "rdfs:label",
                "length": "dct:extent",
                "role": {
                  "@id": "prof:hasRole",
                  "@type": "@id"
                },
                "conformsTo": {
                  "@id": "dct:conformsTo",
                  "@type": "@id"
                }
              },
              "@id": "topo:relatedFeatures",
              "@type": "@id",
              "@container": "@list"
            }
          },
          "@type": "@id",
          "@id": "geojson:topology"
        }
      },
      "@id": "geojson:features",
      "@container": "@set"
    },
    "Feature": "geojson:Feature",
    "FeatureCollection": "geojson:FeatureCollection",
    "GeometryCollection": "geojson:GeometryCollection",
    "LineString": "geojson:LineString",
    "MultiLineString": "geojson:MultiLineString",
    "MultiPoint": "geojson:MultiPoint",
    "MultiPolygon": "geojson:MultiPolygon",
    "Point": "geojson:Point",
    "Polygon": "geojson:Polygon",
    "id": "@id",
    "properties": "@nest",
    "geometry": "geojson:geometry",
    "bbox": {
      "@container": "@list",
      "@id": "geojson:bbox"
    },
    "links": {
      "@context": {
        "href": {
          "@type": "@id",
          "@id": "oa:hasTarget"
        },
        "rel": {
          "@context": {
            "@base": "http://www.iana.org/assignments/relation/"
          },
          "@id": "http://www.iana.org/assignments/relation",
          "@type": "@id"
        },
        "type": "dct:type",
        "hreflang": "dct:language",
        "title": "rdfs:label",
        "length": "dct:extent"
      },
      "@id": "rdfs:seeAlso"
    },
    "time": {
      "@context": {
        "date": {
          "@id": "owlTime:hasTime",
          "@type": "xsd:date"
        },
        "timestamp": {
          "@id": "owlTime:hasTime",
          "@type": "xsd:dateTime"
        },
        "interval": {
          "@id": "owlTime:hasTime",
          "@container": "@list"
        }
      },
      "@id": "dct:time"
    },
    "place": "dct:spatial",
    "Polyhedron": "geojson:Polyhedron",
    "MultiPolyhedron": "geojson:MultiPolyhedron",
    "Prism": {
      "@id": "geojson:Prism",
      "@context": {
        "base": "geojson:prismBase",
        "lower": "geojson:prismLower",
        "upper": "geojson:prismUpper"
      }
    },
    "MultiPrism": {
      "@id": "geojson:MultiPrism",
      "@context": {
        "prisms": "geojson:prisms"
      }
    },
    "coordinates": {
      "@container": "@list",
      "@id": "geojson:coordinates"
    },
    "geometries": {
      "@id": "geojson:geometry",
      "@container": "@list"
    },
    "name": "rdfs:label",
    "bearingRotation": "container:bearingRotation",
    "annotations": {
      "@context": {
        "href": {
          "@type": "@id",
          "@id": "oa:hasTarget"
        },
        "rel": {
          "@context": {
            "@base": "http://www.iana.org/assignments/relation/"
          },
          "@id": "http://www.iana.org/assignments/relation",
          "@type": "@id"
        },
        "type": "dct:type",
        "hreflang": "dct:language",
        "title": "rdfs:label",
        "length": "dct:extent",
        "role": {
          "@id": "prof:hasRole",
          "@type": "@id"
        },
        "conformsTo": {
          "@id": "dct:conformsTo",
          "@type": "@id"
        }
      },
      "@id": "container:annotations"
    },
    "CSD": "container:CSD",
    "address": "sdo:address",
    "locality": "csd:locality",
    "edges": "topo:edges",
    "PrimaryParcel": {
      "@id": "parcel:PrimaryParcel",
      "@type": "@id"
    },
    "SecondaryParcel": {
      "@id": "parcel:SecondaryParcel",
      "@type": "@id"
    },
    "horizontalCRS": {
      "@id": "container:horizontalCRS",
      "@type": "@id"
    },
    "compoundCRS": {
      "@id": "container:compoundCRS",
      "@type": "@id"
    },
    "verticalDatum": {
      "@id": "container:verticalDatum",
      "@type": "@id"
    },
    "surveyDescription": "container:surveyDescription",
    "surveyDescriptors": {
      "@context": {
        "name": "commonpatterns:name",
        "hasPart": {
          "@context": {
            "ref": {
              "@type": "@id",
              "@id": "commonpatterns:namePartRef"
            },
            "type": {
              "@type": "@id",
              "@id": "commonpatterns:namePartType"
            }
          },
          "@id": "dct:hasPart"
        }
      },
      "@id": "container:surveyDescriptors"
    },
    "purpose": {
      "@id": "container:purpose",
      "@type": "@id"
    },
    "surveyType": {
      "@id": "container:surveyType",
      "@type": "@id"
    },
    "referencedCSDs": "container:referencedCSD",
    "adminUnit": {
      "@context": {
        "href": {
          "@type": "@id",
          "@id": "oa:hasTarget"
        },
        "rel": {
          "@context": {
            "@base": "http://www.iana.org/assignments/relation/"
          },
          "@id": "http://www.iana.org/assignments/relation",
          "@type": "@id"
        },
        "type": "dct:type",
        "hreflang": "dct:language",
        "title": "rdfs:label",
        "length": "dct:extent",
        "role": {
          "@id": "prof:hasRole",
          "@type": "@id"
        },
        "conformsTo": {
          "@id": "dct:conformsTo",
          "@type": "@id"
        }
      },
      "@type": "@id",
      "@id": "container:adminUnit",
      "@container": "@set"
    },
    "supportingDocuments": {
      "@context": {
        "href": {
          "@type": "@id",
          "@id": "oa:hasTarget"
        },
        "rel": {
          "@context": {
            "@base": "http://www.iana.org/assignments/relation/"
          },
          "@id": "http://www.iana.org/assignments/relation",
          "@type": "@id"
        },
        "type": "dct:type",
        "hreflang": "dct:language",
        "title": "rdfs:label",
        "length": "dct:extent",
        "role": {
          "@id": "prof:hasRole",
          "@type": "@id"
        },
        "conformsTo": {
          "@id": "dct:conformsTo",
          "@type": "@id"
        }
      },
      "@id": "container:supportingDocuments",
      "@container": "@set"
    },
    "points": {
      "@context": {
        "features": {
          "@context": {
            "featureType": "@type",
            "links": {
              "@context": {
                "href": {
                  "@type": "@id",
                  "@id": "oa:hasTarget"
                },
                "rel": {
                  "@context": {
                    "@base": "http://www.iana.org/assignments/relation/"
                  },
                  "@id": "http://www.iana.org/assignments/relation",
                  "@type": "@id"
                },
                "type": "dct:type",
                "hreflang": "dct:language",
                "title": "rdfs:label",
                "length": "dct:extent"
              },
              "@id": "rdfs:seeAlso"
            },
            "Prism": {
              "@id": "geojson:Prism",
              "@context": {
                "base": "geojson:prismBase",
                "lower": "geojson:prismLower",
                "upper": "geojson:prismUpper"
              }
            },
            "MultiPrism": {
              "@id": "geojson:MultiPrism",
              "@context": {
                "prisms": "geojson:prisms"
              }
            },
            "topology": {
              "@context": {
                "references": {
                  "@id": "topo:relatedFeatures",
                  "@type": "@id",
                  "@container": "@list"
                },
                "directed_references": {
                  "@context": {
                    "ref": {
                      "@type": "@id",
                      "@id": "topo:ref"
                    }
                  },
                  "@id": "topo:directedReferences",
                  "@container": "@list"
                },
                "relationships": {
                  "@context": {
                    "href": {
                      "@type": "@id",
                      "@id": "oa:hasTarget"
                    },
                    "rel": {
                      "@context": {
                        "@base": "http://www.iana.org/assignments/relation/"
                      },
                      "@id": "http://www.iana.org/assignments/relation",
                      "@type": "@id"
                    },
                    "type": "dct:type",
                    "hreflang": "dct:language",
                    "title": "rdfs:label",
                    "length": "dct:extent",
                    "role": {
                      "@id": "prof:hasRole",
                      "@type": "@id"
                    },
                    "conformsTo": {
                      "@id": "dct:conformsTo",
                      "@type": "@id"
                    }
                  },
                  "@id": "topo:relatedFeatures",
                  "@type": "@id",
                  "@container": "@list"
                }
              },
              "@type": "@id",
              "@id": "geojson:topology"
            },
            "condition": {
              "@type": "@id",
              "@id": "surv:condition"
            },
            "form": {
              "@type": "@id",
              "@id": "surv:form"
            },
            "replaces": {
              "@type": "@id",
              "@id": "surv:replaces"
            },
            "state": {
              "@type": "@id",
              "@id": "surv:state"
            },
            "purpose": {
              "@type": "@id",
              "@id": "surv:purpose"
            },
            "geodeticid": {
              "@id": "surv:geodeticid",
              "@context": {
                "name": "commonpatterns:name",
                "hasPart": {
                  "@context": {
                    "ref": {
                      "@type": "@id",
                      "@id": "commonpatterns:namePartRef"
                    },
                    "type": {
                      "@type": "@id",
                      "@id": "commonpatterns:namePartType"
                    }
                  },
                  "@id": "dct:hasPart"
                }
              }
            },
            "name": {
              "@id": "csdm:commonpatterns/name",
              "@type": "@id",
              "@context": {
                "name": "commonpatterns:name",
                "hasPart": {
                  "@context": {
                    "ref": {
                      "@type": "@id",
                      "@id": "commonpatterns:namePartRef"
                    },
                    "type": {
                      "@type": "@id",
                      "@id": "commonpatterns:namePartType"
                    }
                  },
                  "@id": "dct:hasPart"
                }
              }
            }
          },
          "@id": "geojson:features",
          "@container": "@set"
        }
      },
      "@id": "container:points"
    },
    "observedVectors": {
      "@context": {
        "featureType": "@type"
      },
      "@id": "container:observedVectors"
    },
    "adoptedVectors": {
      "@context": {
        "featureType": "@type"
      },
      "@id": "container:adoptedVectors"
    },
    "parcels": {
      "@context": {
        "features": {
          "@context": {
            "Prism": {
              "@id": "geojson:Prism",
              "@context": {
                "base": "geojson:prismBase",
                "lower": "geojson:prismLower",
                "upper": "geojson:prismUpper"
              }
            },
            "MultiPrism": {
              "@id": "geojson:MultiPrism",
              "@context": {
                "prisms": "geojson:prisms"
              }
            },
            "topology": {
              "@context": {
                "references": {
                  "@id": "topo:relatedFeatures",
                  "@type": "@id",
                  "@container": "@list"
                },
                "directed_references": {
                  "@context": {
                    "ref": {
                      "@type": "@id",
                      "@id": "topo:ref"
                    }
                  },
                  "@id": "topo:directedReferences",
                  "@container": "@list"
                },
                "relationships": {
                  "@context": {
                    "href": {
                      "@type": "@id",
                      "@id": "oa:hasTarget"
                    },
                    "rel": {
                      "@context": {
                        "@base": "http://www.iana.org/assignments/relation/"
                      },
                      "@id": "http://www.iana.org/assignments/relation",
                      "@type": "@id"
                    },
                    "type": "dct:type",
                    "hreflang": "dct:language",
                    "title": "rdfs:label",
                    "length": "dct:extent",
                    "role": {
                      "@id": "prof:hasRole",
                      "@type": "@id"
                    },
                    "conformsTo": {
                      "@id": "dct:conformsTo",
                      "@type": "@id"
                    }
                  },
                  "@id": "topo:relatedFeatures",
                  "@type": "@id",
                  "@container": "@list"
                }
              },
              "@type": "@id",
              "@id": "geojson:topology"
            },
            "points": {
              "@id": "topo:points",
              "@container": "@list"
            },
            "edges": {
              "@id": "topo:edges",
              "@container": "@list"
            },
            "solids": {
              "@id": "topo:solids",
              "@container": "@list"
            },
            "bearingRotation": "parcel:bearingRotation",
            "parcels": "parcel:parcels",
            "PrimaryParcel": {
              "@id": "parcel:PrimaryParcel",
              "@type": "@id"
            },
            "SecondaryParcel": {
              "@id": "parcel:SecondaryParcel",
              "@type": "@id"
            },
            "appellation": {
              "@context": {
                "name": "commonpatterns:name",
                "hasPart": {
                  "@context": {
                    "ref": {
                      "@type": "@id",
                      "@id": "commonpatterns:namePartRef"
                    },
                    "type": {
                      "@type": "@id",
                      "@id": "commonpatterns:namePartType"
                    }
                  },
                  "@id": "dct:hasPart"
                }
              },
              "@id": "parcel:appellation"
            },
            "parcelType": {
              "@id": "parcel:type",
              "@type": "@id"
            },
            "parcelState": {
              "@id": "parcel:state",
              "@type": "@id"
            },
            "parcelPurpose": {
              "@id": "parcel:purpose",
              "@type": "@id"
            },
            "area": "parcel:surfaceArea",
            "floor": "parcel:floor",
            "zmin": "parcel:zmin",
            "zmax": "parcel:zmax",
            "interests": {
              "@context": {
                "interestLink": {
                  "@type": "@id",
                  "@id": "parcel:interestLink"
                },
                "interestName": "parcel:interestName",
                "interestType": {
                  "@type": "@id",
                  "@id": "parcel:interestType"
                },
                "dateInForce": "parcel:interestDateInForce",
                "dateExpires": "parcel:interestDateExpires",
                "statuteLink": {
                  "@type": "@id",
                  "@id": "parcel:statuteLink"
                },
                "statuteName": "parcel:statuteName",
                "benefitedPartyName": "parcel:benefitedPartyName",
                "benefitedPartyLink": {
                  "@type": "@id",
                  "@id": "parcel:benefitedPartyLink"
                },
                "originalSurveyLink": {
                  "@type": "@id",
                  "@id": "parcel:originalSurveyLink"
                },
                "referencedParcel": {
                  "@type": "@id",
                  "@id": "parcel:referencedParcel"
                },
                "burdenedParcels": {
                  "@id": "parcel:burdened",
                  "@container": "@set"
                },
                "benefitedParcels": {
                  "@id": "parcel:benefited",
                  "@container": "@set"
                },
                "description": "parcel:interestDescription",
                "entitlementPortion": "parcel:entitlementPortion",
                "liabilityPortion": "parcel:liabilityPortion"
              },
              "@id": "parcel:interest",
              "@container": "@set"
            }
          },
          "@id": "geojson:features",
          "@container": "@set"
        },
        "featureType": "@type"
      },
      "@id": "container:parcels"
    },
    "vectorObservations": {
      "@context": {
        "observedProperty": {
          "@context": {
            "@base": "https://linked.data.gov.au/def/csdm/property/"
          },
          "@id": "sosa:observedProperty",
          "@type": "@id"
        },
        "madeBySensor": {
          "@context": {
            "@base": "https://linked.data.gov.au/def/csdm/sensors/Sensor",
            "sensorType": "@type",
            "baseSensor": "csdm:sensors/baseSensor",
            "roverSensor": "csdm:sensors/roverSensor"
          },
          "@id": "sosa:madeBySensor",
          "@type": "@id"
        },
        "hasMember": {
          "@context": {
            "features": {
              "@id": "sosa:hasMember",
              "@type": "@id"
            }
          },
          "@id": "sosa:hasMember",
          "@type": "@id"
        },
        "featureType": "@type",
        "features": {
          "@id": "sosa:hasMember",
          "@type": "@id",
          "@container": "@set",
          "@context": {
            "features": {
              "@container": "@set",
              "@id": "sosa:hasMember",
              "@type": "@id"
            },
            "hasResult": {
              "@id": "sosa:hasResult",
              "@type": "@id",
              "@context": {
                "pose": {
                  "@context": {
                    "angles": "csdm:utils/geopose/angles"
                  },
                  "@id": "surv:pose"
                },
                "distance": "surv:distance"
              }
            },
            "hasResultQuality": {
              "@id": "sosa:hasResultQuality",
              "@type": "@id",
              "@context": {
                "angleAccuracy": "csdm:surveyobs/angleAccuracyMeasure",
                "distanceAccuracy": "csdm:surveyobs/distanceAccuracyMeasure",
                "distanceAccuracyClass": {
                  "@type": "@id",
                  "@id": "csdm:surveyobs/distanceAccuracyClass"
                },
                "angleAccuracyClass": {
                  "@type": "@id",
                  "@id": "csdm:surveyobs/angleAccuracyClass"
                }
              }
            }
          }
        },
        "angleType": {
          "@context": {
            "@base": "https://linked.data.gov.au/def/csdm/defs/angletypes/"
          },
          "@type": "@id",
          "@id": "csdm:surveyobs/angleType"
        },
        "distanceType": {
          "@context": {
            "@base": "https://linked.data.gov.au/def/csdm/defs/distancetypes/"
          },
          "@type": "@id",
          "@id": "csdm:surveyobs/distanceType"
        }
      },
      "@id": "container:vectorObservations"
    },
    "occupationObservations": {
      "@context": {
        "hasMember": {
          "@context": {
            "features": {
              "@id": "sosa:hasMember",
              "@type": "@id"
            }
          },
          "@id": "sosa:hasMember",
          "@type": "@id"
        },
        "featureType": "@type",
        "features": {
          "@id": "sosa:hasMember",
          "@type": "@id",
          "@container": "@set",
          "@context": {
            "features": {
              "@container": "@set",
              "@id": "sosa:hasMember",
              "@type": "@id"
            },
            "hasResult": {
              "@id": "sosa:hasResult",
              "@type": "@id",
              "@context": {
                "pose": {
                  "@context": {
                    "angles": "csdm:utils/geopose/angles"
                  },
                  "@id": "surv:pose"
                },
                "distance": "surv:distance"
              }
            },
            "hasResultQuality": {
              "@id": "sosa:hasResultQuality",
              "@type": "@id",
              "@context": {
                "angleAccuracy": "csdm:surveyobs/angleAccuracyMeasure",
                "distanceAccuracy": "csdm:surveyobs/distanceAccuracyMeasure",
                "distanceAccuracyClass": {
                  "@type": "@id",
                  "@id": "csdm:surveyobs/distanceAccuracyClass"
                },
                "angleAccuracyClass": {
                  "@type": "@id",
                  "@id": "csdm:surveyobs/angleAccuracyClass"
                }
              }
            }
          }
        }
      },
      "@id": "container:occupationObservations"
    },
    "occupationFeatures": "container:occupationFeatures",
    "sensorType": {
      "@type": "@id",
      "@id": "surv:sensorType"
    },
    "sensorRole": {
      "@type": "@id",
      "@id": "surv:sensorRole"
    },
    "lastCalibrated": "surv:lastCalibrated",
    "activityType": "@type",
    "Arc": "geojson:Arc",
    "ArcWithCenter": "geojson:ArcWithCenter",
    "ArcByChord": "geojson:ArcByChord",
    "CircleByCenter": "geojson:CircleByCenter",
    "CubicSpline": "geojson:CubicSpline",
    "radius": "geojson:radius",
    "arcLength": "geojson:arcLength",
    "startTangentVector": "geojson:startTangentVector",
    "endTangentVector": "geojson:endTangentVector",
    "ref": "topo:ref",
    "orientation": "topo:orientation",
    "Edge": "topo:Edge",
    "Face": "topo:Face",
    "Ring": "topo:Ring",
    "Shell": "topo:Shell",
    "Solid": "topo:Solid",
    "rings": {
      "@id": "topo:rings",
      "@container": "@list"
    },
    "shells": {
      "@id": "topo:shells",
      "@container": "@list"
    },
    "faces": {
      "@id": "topo:faces",
      "@container": "@list"
    },
    "agentType": "@type",
    "entityType": "@type",
    "provType": "@type",
    "Activity": "prov:Activity",
    "ActivityInfluence": "prov:ActivityInfluence",
    "Agent": "prov:Agent",
    "AgentInfluence": "prov:AgentInfluence",
    "Association": "prov:Association",
    "Attribution": "prov:Attribution",
    "Bundle": "prov:Bundle",
    "Collection": "prov:Collection",
    "Communication": "prov:Communication",
    "Delegation": "prov:Delegation",
    "Derivation": "prov:Derivation",
    "EmptyCollection": "prov:EmptyCollection",
    "End": "prov:End",
    "Entity": "prov:Entity",
    "EntityInfluence": "prov:EntityInfluence",
    "Generation": "prov:Generation",
    "Influence": "prov:Influence",
    "InstantaneousEvent": "prov:InstantaneousEvent",
    "Invalidation": "prov:Invalidation",
    "Location": "prov:Location",
    "Organization": "prov:Organization",
    "Person": "prov:Person",
    "Plan": "prov:Plan",
    "PrimarySource": "prov:PrimarySource",
    "Quotation": "prov:Quotation",
    "Revision": "prov:Revision",
    "Role": "prov:Role",
    "SoftwareAgent": "prov:SoftwareAgent",
    "Start": "prov:Start",
    "Usage": "prov:Usage",
    "ServiceDescription": "prov:ServiceDescription",
    "DirectQueryService": "prov:DirectQueryService",
    "Accept": "prov:Accept",
    "Contribute": "prov:Contribute",
    "Contributor": "prov:Contributor",
    "Copyright": "prov:Copyright",
    "Create": "prov:Create",
    "Creator": "prov:Creator",
    "Modify": "prov:Modify",
    "Publish": "prov:Publish",
    "Publisher": "prov:Publisher",
    "Replace": "prov:Replace",
    "RightsAssignment": "prov:RightsAssignment",
    "RightsHolder": "prov:RightsHolder",
    "Submit": "prov:Submit",
    "Dictionary": "prov:Dictionary",
    "EmptyDictionary": "prov:EmptyDictionary",
    "KeyEntityPair": "prov:KeyEntityPair",
    "Insertion": "prov:Insertion",
    "Removal": "prov:Removal",
    "atTime": {
      "@id": "prov:atTime",
      "@type": "xsd:dateTime"
    },
    "endedAtTime": {
      "@id": "prov:endedAtTime",
      "@type": "xsd:dateTime"
    },
    "generatedAtTime": {
      "@id": "prov:generatedAtTime",
      "@type": "xsd:dateTime"
    },
    "invalidatedAtTime": {
      "@id": "prov:invalidatedAtTime",
      "@type": "xsd:dateTime"
    },
    "startedAtTime": {
      "@id": "prov:startedAtTime",
      "@type": "xsd:dateTime"
    },
    "value": "prov:value",
    "provenanceUriTemplate": "prov:provenanceUriTemplate",
    "pairKey": {
      "@id": "prov:pairKey",
      "@type": "rdfs:Literal"
    },
    "removedKey": {
      "@id": "prov:removedKey",
      "@type": "rdfs:Literal"
    },
    "actedOnBehalfOf": {
      "@id": "prov:actedOnBehalfOf",
      "@type": "@id"
    },
    "agent": {
      "@id": "prov:agent",
      "@type": "@id"
    },
    "alternateOf": {
      "@id": "prov:alternateOf",
      "@type": "@id"
    },
    "atLocation": {
      "@id": "prov:atLocation",
      "@type": "@id"
    },
    "entity": {
      "@id": "prov:entity",
      "@type": "@id"
    },
    "generated": {
      "@id": "prov:generated",
      "@type": "@id"
    },
    "hadActivity": {
      "@id": "prov:hadActivity",
      "@type": "@id"
    },
    "activity": {
      "@id": "prov:activity",
      "@type": "@id"
    },
    "hadGeneration": {
      "@id": "prov:hadGeneration",
      "@type": "@id"
    },
    "hadMember": {
      "@id": "prov:hadMember",
      "@type": "@id"
    },
    "hadPlan": {
      "@id": "prov:hadPlan",
      "@type": "@id"
    },
    "hadPrimarySource": {
      "@id": "prov:hadPrimarySource",
      "@type": "@id"
    },
    "hadRole": {
      "@id": "prov:hadRole",
      "@type": "@id"
    },
    "hadUsage": {
      "@id": "prov:hadUsage",
      "@type": "@id"
    },
    "influenced": {
      "@id": "prov:influenced",
      "@type": "@id"
    },
    "influencer": {
      "@id": "prov:influencer",
      "@type": "@id"
    },
    "invalidated": {
      "@id": "prov:invalidated",
      "@type": "@id"
    },
    "qualifiedAssociation": {
      "@id": "prov:qualifiedAssociation",
      "@type": "@id"
    },
    "qualifiedAttribution": {
      "@id": "prov:qualifiedAttribution",
      "@type": "@id"
    },
    "qualifiedCommunication": {
      "@id": "prov:qualifiedCommunication",
      "@type": "@id"
    },
    "qualifiedDelegation": {
      "@id": "prov:qualifiedDelegation",
      "@type": "@id"
    },
    "qualifiedDerivation": {
      "@id": "prov:qualifiedDerivation",
      "@type": "@id"
    },
    "qualifiedEnd": {
      "@id": "prov:qualifiedEnd",
      "@type": "@id"
    },
    "qualifiedGeneration": {
      "@id": "prov:qualifiedGeneration",
      "@type": "@id"
    },
    "qualifiedInfluence": {
      "@id": "prov:qualifiedInfluence",
      "@type": "@id"
    },
    "qualifiedInvalidation": {
      "@id": "prov:qualifiedInvalidation",
      "@type": "@id"
    },
    "qualifiedPrimarySource": {
      "@id": "prov:qualifiedPrimarySource",
      "@type": "@id"
    },
    "qualifiedQuotation": {
      "@id": "prov:qualifiedQuotation",
      "@type": "@id"
    },
    "qualifiedRevision": {
      "@id": "prov:qualifiedRevision",
      "@type": "@id"
    },
    "qualifiedStart": {
      "@id": "prov:qualifiedStart",
      "@type": "@id"
    },
    "qualifiedUsage": {
      "@id": "prov:qualifiedUsage",
      "@type": "@id"
    },
    "specializationOf": {
      "@id": "prov:specializationOf",
      "@type": "@id"
    },
    "used": {
      "@id": "prov:used",
      "@type": "@id"
    },
    "wasAssociatedWith": {
      "@id": "prov:wasAssociatedWith",
      "@type": "@id"
    },
    "wasAttributedTo": {
      "@id": "prov:wasAttributedTo",
      "@type": "@id"
    },
    "wasDerivedFrom": {
      "@id": "prov:wasDerivedFrom",
      "@type": "@id"
    },
    "wasEndedBy": {
      "@id": "prov:wasEndedBy",
      "@type": "@id"
    },
    "wasInfluencedBy": {
      "@id": "prov:wasInfluencedBy",
      "@type": "@id"
    },
    "wasInformedBy": {
      "@id": "prov:wasInformedBy",
      "@type": "@id"
    },
    "wasInvalidatedBy": {
      "@id": "prov:wasInvalidatedBy",
      "@type": "@id"
    },
    "wasQuotedFrom": {
      "@id": "prov:wasQuotedFrom",
      "@type": "@id"
    },
    "wasRevisionOf": {
      "@id": "prov:wasRevisionOf",
      "@type": "@id"
    },
    "wasStartedBy": {
      "@id": "prov:wasStartedBy",
      "@type": "@id"
    },
    "has_anchor": {
      "@id": "prov:has_anchor",
      "@type": "@id"
    },
    "has_query_service": {
      "@id": "prov:has_query_service",
      "@type": "@id"
    },
    "describesService": {
      "@id": "prov:describesService",
      "@type": "@id"
    },
    "pingback": {
      "@id": "prov:pingback",
      "@type": "@id"
    },
    "dictionary": {
      "@id": "prov:dictionary",
      "@type": "@id"
    },
    "derivedByInsertionFrom": {
      "@id": "prov:derivedByInsertionFrom",
      "@type": "@id"
    },
    "derivedByRemovalFrom": {
      "@id": "prov:derivedByRemovalFrom",
      "@type": "@id"
    },
    "insertedKeyEntityPair": {
      "@id": "prov:insertedKeyEntityPair",
      "@type": "@id"
    },
    "hadDictionaryMember": {
      "@id": "prov:hadDictionaryMember",
      "@type": "@id"
    },
    "pairEntity": {
      "@id": "prov:pairEntity",
      "@type": "@id"
    },
    "qualifiedInsertion": {
      "@id": "prov:qualifiedInsertion",
      "@type": "@id"
    },
    "qualifiedRemoval": {
      "@id": "prov:qualifiedRemoval",
      "@type": "@id"
    },
    "asInBundle": {
      "@id": "prov:asInBundle",
      "@type": "@id"
    },
    "mentionOf": {
      "@id": "prov:mentionOf",
      "@type": "@id"
    },
    "CompoundName": "commonpatterns:CompoundName",
    "vectorPurpose": {
      "@type": "@id",
      "@id": "surv:vectorPurpose"
    },
    "monumentedBy": {
      "@type": "@id",
      "@id": "surv:monumentedBy"
    },
    "comment": "rdfs:comment",
    "note": "rdfs:comment",
    "age": "surv:age",
    "geodeticid": "surv:geodeticid",
    "fromSurvey": {
      "@type": "@id",
      "@id": "surv:fromSurvey"
    },
    "CadastralMark": {
      "@id": "surv:CadastralMark",
      "@type": "@id"
    },
    "BoundaryMark": {
      "@id": "surv:BoundaryMark",
      "@type": "@id"
    },
    "ptQuality": {
      "@id": "csdm:commonpatterns/qualityClass",
      "@type": "@id"
    },
    "ptQualityMeasure": {
      "@id": "csdm:commonpatterns/qualityMeasure",
      "@type": "@id"
    },
    "GeodeticReferenceMark": {
      "@id": "surv:GeodeticReferenceMark",
      "@type": "@id"
    },
    "ObservedVector": {
      "@id": "surv:ObservedVector",
      "@type": "@id"
    },
    "AdoptedVector": {
      "@id": "surv:SurveyedVector",
      "@type": "@id"
    },
    "label": "rdfs:label",
    "state": {
      "@id": "csdm:spatial-representation/boundaryState",
      "@type": "@vocab"
    },
    "definitionRef": {
      "@id": "csdm:spatial-representation/definitionRef",
      "@type": "@id"
    },
    "geometryRef": {
      "@id": "csdm:spatial-representation/geometryRef",
      "@type": "@id"
    },
    "parcelQualityClass": {
      "@id": "parcel:qualityClass",
      "@type": "@id"
    },
    "terrainIntersectionCurve": "parcel:terrainIntersectionCurve",
    "directed_references": {
      "@id": "topo:directedReferences",
      "@container": "@list"
    },
    "ActuatableProperty": {
      "@id": "sosa:ActuatableProperty",
      "@type": "@id"
    },
    "Actuation": {
      "@id": "sosa:Actuation",
      "@type": "@id"
    },
    "ActuationCollection": {
      "@id": "sosa:ActuationCollection",
      "@type": "@id"
    },
    "Actuator": {
      "@id": "sosa:Actuator",
      "@type": "@id"
    },
    "Deployment": {
      "@id": "sosa:Deployment",
      "@type": "@id"
    },
    "Execution": {
      "@id": "sosa:Execution",
      "@type": "@id"
    },
    "FeatureOfInterest": {
      "@id": "sosa:FeatureOfInterest",
      "@type": "@id"
    },
    "ObservableProperty": {
      "@id": "sosa:ObservableProperty",
      "@type": "@id"
    },
    "Observation": {
      "@id": "sosa:Observation",
      "@type": "@id"
    },
    "ObservationCollection": {
      "@id": "sosa:ObservationCollection",
      "@type": "@id"
    },
    "Platform": {
      "@id": "sosa:Platform",
      "@type": "@id"
    },
    "Property": {
      "@id": "sosa:Property",
      "@type": "@id"
    },
    "Procedure ": {
      "@id": "sosa:Procedure",
      "@type": "@id"
    },
    "Sample": {
      "@id": "sosa:Sample",
      "@type": "@id"
    },
    "SampleCollection": {
      "@id": "sosa:SampleCollection",
      "@type": "@id"
    },
    "Sampler": {
      "@id": "sosa:Sampler",
      "@type": "@id"
    },
    "Sampling": {
      "@id": "sosa:Sampling",
      "@type": "@id"
    },
    "Sensor": {
      "@id": "sosa:Sensor",
      "@type": "@id"
    },
    "Stimulus": {
      "@id": "sosa:Stimulus",
      "@type": "@id"
    },
    "System": {
      "@id": "sosa:System",
      "@type": "@id"
    },
    "actsOnProperty": {
      "@id": "sosa:actsOnProperty",
      "@type": "@id"
    },
    "deployedOnPlatform": {
      "@id": "sosa:deployedOnPlatform",
      "@type": "@id"
    },
    "deployedSystem": {
      "@id": "sosa:deployedSystem",
      "@type": "@id"
    },
    "detects": {
      "@id": "sosa:detects",
      "@type": "@id"
    },
    "forProperty": {
      "@id": "sosa:forProperty",
      "@type": "@id"
    },
    "hasDeployment": {
      "@id": "sosa:hasDeployment",
      "@type": "@id"
    },
    "hasInput": {
      "@id": "sosa:hasInput",
      "@type": "@id"
    },
    "hasOriginalSample": {
      "@id": "sosa:hasOriginalSample",
      "@type": "@id"
    },
    "hasOutput": {
      "@id": "sosa:hasOutput",
      "@type": "@id"
    },
    "hasProperty": {
      "@id": "sosa:hasProperty",
      "@type": "@id"
    },
    "hasResult": {
      "@id": "sosa:hasResult",
      "@type": "@id"
    },
    "hasResultQuality": {
      "@id": "sosa:hasResultQuality",
      "@type": "@id"
    },
    "hasSample": {
      "@id": "sosa:hasSample",
      "@type": "@id"
    },
    "hasSampledFeature": {
      "@id": "sosa:hasSampledFeature",
      "@type": "@id"
    },
    "hasSimpleResult": {
      "@id": "sosa:hasSimpleResult",
      "@type": "@id"
    },
    "hasSubSystem": {
      "@id": "sosa:hasSubSystem",
      "@type": "@id",
      "@container": "@set"
    },
    "hasUltimateFeatureOfInterest": {
      "@id": "sosa:hasUltimateFeatureOfInterest",
      "@type": "@id"
    },
    "hosts": {
      "@id": "sosa:hosts",
      "@type": "@id",
      "@container": "@set"
    },
    "implementedBy": {
      "@id": "sosa:implementedBy",
      "@type": "@id"
    },
    "implements": {
      "@id": "sosa:implements",
      "@type": "@id"
    },
    "inDeployment": {
      "@id": "sosa:inDeployment",
      "@type": "@id"
    },
    "isActedOnBy": {
      "@id": "sosa:isActedOnBy",
      "@type": "@id"
    },
    "isFeatureOfInterestOf": {
      "@id": "sosa:isFeatureOfInterestOf",
      "@type": "@id"
    },
    "isHostedBy": {
      "@id": "sosa:isHostedBy",
      "@type": "@id"
    },
    "isObservedBy": {
      "@id": "sosa:isObservedBy",
      "@type": "@id"
    },
    "isPropertyOf": {
      "@id": "sosa:isPropertyOf",
      "@type": "@id"
    },
    "isProxyFor": {
      "@id": "sosa:isProxyFor",
      "@type": "@id"
    },
    "isResultOf": {
      "@id": "sosa:isResultOf",
      "@type": "@id"
    },
    "isResultOfMadeBySampler": {
      "@id": "sosa:isResultOfMadeBySampler",
      "@type": "@id"
    },
    "isResultOfUsedProcedure": {
      "@id": "sosa:isResultOfUsedProcedure",
      "@type": "@id"
    },
    "isSampleOf": {
      "@id": "sosa:isSampleOf",
      "@type": "@id"
    },
    "madeActuation": {
      "@id": "sosa:madeActuation",
      "@type": "@id"
    },
    "madeByActuator": {
      "@id": "sosa:madeByActuator",
      "@type": "@id"
    },
    "madeBySampler": {
      "@id": "sosa:madeBySampler",
      "@type": "@id"
    },
    "madeObservation": {
      "@id": "sosa:madeObservation",
      "@type": "@id"
    },
    "madeSampling": {
      "@id": "sosa:madeSampling",
      "@type": "@id"
    },
    "observes": {
      "@id": "sosa:observes",
      "@type": "@id"
    },
    "wasOriginatedBy": {
      "@id": "sosa:wasOriginatedBy",
      "@type": "@id"
    },
    "Accuracy": {
      "@id": "ssn-system:Accuracy",
      "@type": "@id"
    },
    "ActuationRange": {
      "@id": "ssn-system:ActuationRange",
      "@type": "@id"
    },
    "BatteryLifetime": {
      "@id": "ssn-system:BatteryLifetime",
      "@type": "@id"
    },
    "DetectionLimit": {
      "@id": "ssn-system:DetectionLimit",
      "@type": "@id"
    },
    "Drift": {
      "@id": "ssn-system:Drift",
      "@type": "@id"
    },
    "Frequency": {
      "@id": "ssn-system:Frequency",
      "@type": "@id"
    },
    "Latency": {
      "@id": "ssn-system:Latency",
      "@type": "@id"
    },
    "MaintenanceSchedule": {
      "@id": "ssn-system:MaintenanceSchedule",
      "@type": "@id"
    },
    "MeasurementRange": {
      "@id": "ssn-system:MeasurementRange",
      "@type": "@id"
    },
    "OperatingPowerRange": {
      "@id": "ssn-system:OperatingPowerRange",
      "@type": "@id"
    },
    "OperatingProperty": {
      "@id": "ssn-system:OperatingProperty",
      "@type": "@id"
    },
    "OperatingRange": {
      "@id": "ssn-system:OperatingRange",
      "@type": "@id"
    },
    "Precision": {
      "@id": "ssn-system:Precision",
      "@type": "@id"
    },
    "Resolution": {
      "@id": "ssn-system:Resolution",
      "@type": "@id"
    },
    "ResponseTime": {
      "@id": "ssn-system:ResponseTime",
      "@type": "@id"
    },
    "Selectivity": {
      "@id": "ssn-system:Selectivity",
      "@type": "@id"
    },
    "Sensitivity": {
      "@id": "ssn-system:Sensitivity",
      "@type": "@id"
    },
    "SurvivalProperty": {
      "@id": "ssn-system:SurvivalProperty",
      "@type": "@id"
    },
    "SystemLifetime": {
      "@id": "ssn-system:SystemLifetime",
      "@type": "@id"
    },
    "SurvivalRange": {
      "@id": "ssn-system:SurvivalRange",
      "@type": "@id"
    },
    "SystemCapability": {
      "@id": "ssn-system:SystemCapability",
      "@type": "@id"
    },
    "SystemProperty": {
      "@id": "ssn-system:SystemProperty",
      "@type": "@id"
    },
    "hasOperatingProperty": {
      "@id": "ssn-system:hasOperatingProperty",
      "@type": "@id"
    },
    "hasOperatingRange": {
      "@id": "ssn-system:hasOperatingRange",
      "@type": "@id"
    },
    "hasSurvivalProperty": {
      "@id": "ssn-system:hasSurvivalProperty",
      "@type": "@id"
    },
    "hasSystemCapability": {
      "@id": "ssn-system:hasSystemCapability",
      "@type": "@id"
    },
    "hasSystemProperty": {
      "@id": "ssn-system:hasSystemProperty",
      "@type": "@id"
    },
    "hasSurvivalRange": {
      "@id": "ssn-system:hasSurvivalRange",
      "@type": "@id"
    },
    "inCondition": {
      "@id": "ssn-system:inCondition",
      "@type": "@id"
    },
    "qualityOfObservation": {
      "@id": "ssn-system:qualityOfObservation",
      "@type": "@id"
    },
    "hasMember": {
      "@id": "sosa:hasMember",
      "@type": "@id"
    },
    "hasFeatureOfInterest": {
      "@id": "sosa:hasFeatureOfInterest",
      "@type": "@id"
    },
    "madeBySensor": {
      "@id": "sosa:madeBySensor",
      "@type": "@id"
    },
    "observedProperty": {
      "@id": "sosa:observedProperty",
      "@type": "@id"
    },
    "phenomenonTime": {
      "@id": "sosa:phenomenonTime",
      "@type": "@id"
    },
    "resultTime": "sosa:resultTime",
    "usedProcedure": {
      "@id": "sosa:usedProcedure",
      "@type": "@id"
    },
    "container": "csdm:container/",
    "sdo": "https://schema.org/",
    "csd": "csdm:csd/",
    "surv": "csdm:surveyfeatures/",
    "geojson": "https://purl.org/geojson/vocab#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "oa": "http://www.w3.org/ns/oa#",
    "dct": "http://purl.org/dc/terms/",
    "owlTime": "http://www.w3.org/2006/time#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "topo": "https://purl.org/geojson/topo#",
    "prof": "http://www.w3.org/ns/dx/prof/",
    "prov": "http://www.w3.org/ns/prov#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "commonpatterns": "https://w3id.org/ogc/utils/label/",
    "csdm": "https://linked.data.gov.au/def/csdm/",
    "geosparql": "http://www.opengis.net/ont/geosparql#",
    "sr": "csdm:spatial-representation/",
    "pvb": "csdm:parcel-vertical-boundary/",
    "parcel": "https://w3id.org/ogc/ladm/parcels/",
    "sosa": "http://www.w3.org/ns/sosa/",
    "ssn-system": "ssn:systems/",
    "ssn": "http://www.w3.org/ns/ssn/",
    "geopose": "csdm:utils/geopose/",
    "angletype": "csdm:defs/angletypes/",
    "distancetype": "csdm:defs/distancetypes/",
    "surveyproc": "csdm:defs/surveyprocedures/",
    "surveyable": "csdm:defs/surveyableproperties/",
    "icsm": "https://linked.data.gov.au/def/csdm/",
    "epsg": "http://www.opengis.net/def/crs/EPSG/0/",
    "surveytype": "csdm:surveytypes/",
    "icsm-jurisdictions": "csdm:jurisdictions/",
    "icsm-survey-type": "csdm:icsm-survey-type/",
    "survptpurp": "csdm:survptpurp/",
    "icsm-admin-unit-type": "csdm:icsm-admin-unit-type/",
    "icsm-procedure-used": "csdm:icsm-procedure-used/",
    "icsm-surveypoint-purpose": "csdm:icsm-surveypoint-purpose/",
    "icsm-parcel-state": "csdm:icsm-parcel-state/",
    "icsm-angle-type": "csdm:icsm-angle-type/",
    "icsm-equipment-type": "csdm:icsm-equipment-type/",
    "icsm-distance-type": "csdm:icsm-distance-type/",
    "icsm-arc-orientation": "csdm:arc-orientation/",
    "vocabs": "https://linked.data.gov.au/def/csdm/",
    "wa-surveypoint-purpose": "csdm:wa-surveypoint-purpose/",
    "wa-survey-purpose": "csdm:wa-survey-purpose/",
    "wa-survey-type": "csdm:wa-survey-type/",
    "wa-procedure-used": "csdm:wa-procedure-used/",
    "wa-survey-documentation-type": "csdm:wa-survey-documentation-type/",
    "wa-annotation-role": "csdm:wa-annotation/",
    "wa-parcel-purpose": "csdm:wa-parcel-purpose/",
    "wa-parcel-type": "csdm:wa-parcel-type/",
    "wa-parcel-state": "csdm:wa-parcel-state/",
    "wa-nonprimary-parcel-type": "csdm:wa-secondary-parcel-type/",
    "wa-monument-form": "csdm:wa-monument-form/",
    "wa-monument-condition": "csdm:wa-monument-condition/",
    "wa-monument-state": "csdm:wa-monument-state/",
    "wa-vector-purpose": "csdm:wa-vector-purpose/",
    "wa-vector-type": "csdm:wa-vector-type/",
    "wa-secondary-parcel-purpose": "csdm:wa-secondary-parcel-purpose/",
    "wa-secondary-parcel-type": "csdm:wa-secondary-parcel-type/",
    "wa-secondary-purpose": "csdm:wa-secondary-purpose/",
    "wa-interest-type": "csdm:wa-interest-type/",
    "wa-interest": "csdm:wa-interest/",
    "wa-locality": "csdm:wa-locality/",
    "wa-local-government": "csdm:wa-local-government/",
    "registered-surveyors": "https://wa.gov.au/surveyors/",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "representation-status": "csdm:representation-status/",
    "geometry-legal-status": "csdm:geometry-legal-status/",
    "vertical-extent-status": "csdm:vertical-extent-status/",
    "computability-status": "csdm:computability-status/",
    "coordinate-z-role": "csdm:coordinate-z-role/",
    "vertical-boundary-state": "csdm:vertical-boundary-state/",
    "vertical-definition-type": "csdm:vertical-definition-type/",
    "vertical-limit-role": "csdm:vertical-limit-role/",
    "vertical-value-type": "csdm:vertical-value-type/",
    "vertical-direction": "csdm:vertical-direction/",
    "height-reference": "csdm:height-reference/",
    "uuid": "urn:uuid:",
    "@version": 1.1
  }
}
```

You can find the full JSON-LD context here:
[context.jsonld](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-liminal/context.jsonld)

## Sources

* [Summary of Western Australian Parcel Representation Examples (2.5D liminal proposal)](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/development/2-5d-liminal/2-5d-liminal-overview.md)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/3d-csdm-profile-wa](https://github.com/surroundaustralia/3d-csdm-profile-wa)
* Path: `_sources/wa-liminal`

