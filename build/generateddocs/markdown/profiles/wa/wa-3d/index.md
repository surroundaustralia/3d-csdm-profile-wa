
# WA- 3D profile (Schema)

`icsm.profiles.wa.wa-3d` *v0.1*

3D test cases for WA - may constrain to force 3D

[*Status*](http://www.opengis.net/def/status): Under development

## Description

## 3D test cases

This building block captures test cases for 3D topology for WA.

It allows isolation of these from the more general 2D bash view.sh
## Examples

### WA 3D Survey Mark Example
WA Survey Marks Example extended to include 3D survey marks. **verticalDatum** included for specification of the 
Vertical Height Datum, epsg:5711 (Australian Height Datum 1971) and **coordinates** have been extended to include 
**X**, **Y** and **Z** elements. **Z** values are set 0.000 in the examples.
#### json
```json
{
  "id": "DP_422532",
  "name": "DP 422532",
  "description": "Western Australia 3D Point Example",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision",
  "surveyType": "wa-survey-type:SSA",
  "time": { "date": "2022-05-22" },
  "horizontalCRS": "epsg:8024",
  "verticalDatum": "epsg:5711",
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
  "points": [
    {
      "id": "CadastralMark",
      "type": "FeatureCollection",
      "featureType": "CadastralMark",
      "features": [
        {
          "id": "18430386",
          "type": "Feature",
          "featureType": "CadastralMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54676.628,
              398434.298,
              0.000
            ]
          },
          "properties": {
            "name": {
              "label": "EFB157243/9533",
              "hasPart": [
                {
                  "type": "Source",
                  "label": "EFB157243"
                },
                {
                  "type": "Stamp",
                  "label": "9533"
                }
              ]
            },
            "purpose": "wa-surveypoint-purpose:temporary-control-point",
            "ptQualityMeasure": 0.028,
            "comment": "In Bitumen",
            "monumentedBy": {
              "form": "wa-monument-form:spike",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        }
      ]
    },
    {
      "id": "BoundaryMark",
      "type": "FeatureCollection",
      "featureType": "BoundaryMark",
      "features": [
        {
          "id": "17876586",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54700.281,
              398426.444,
              0.000
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:road-boundary",
            "ptQualityMeasure": 0.013,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        }
      ]
    },
    {
      "id": "GeodeticReferenceMark",
      "type": "FeatureCollection",
      "featureType": "GeodeticReferenceMark",
      "features": [
        {
          "id": "18430396",
          "type": "Feature",
          "featureType": "GeodeticReferenceMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54761.299,
              398489.106,
              0.000
            ]
          },
          "properties": {
            "geodeticid": "EFB157243/9802",
            "name": {
              "label": "EFB157243/9802",
              "hasPart": [
                {
                  "type": "Source",
                  "label": "EFB157243"
                },
                {
                  "type": "Stamp",
                  "label": "9802"
                }
              ]
            },
            "purpose": "wa-surveypoint-purpose:permanent-survey-mark",
            "ptQualityMeasure": 0.026,
            "comment": "In Concrete",
            "monumentedBy": {
              "form": "wa-monument-form:brass-plaque",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        }
      ]
    }
  ],
  "edges": [],
  "solids": [],
  "vectorObservations": [],
  "parcels": [],
  "supportingDocuments": [],
  "annotations": []
}
```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-3d/context.jsonld",
  "id": "DP_422532",
  "name": "DP 422532",
  "description": "Western Australia 3D Point Example",
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
  "verticalDatum": "epsg:5711",
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
  "points": [
    {
      "id": "CadastralMark",
      "type": "FeatureCollection",
      "featureType": "CadastralMark",
      "features": [
        {
          "id": "18430386",
          "type": "Feature",
          "featureType": "CadastralMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54676.628,
              398434.298,
              0.0
            ]
          },
          "properties": {
            "name": {
              "label": "EFB157243/9533",
              "hasPart": [
                {
                  "type": "Source",
                  "label": "EFB157243"
                },
                {
                  "type": "Stamp",
                  "label": "9533"
                }
              ]
            },
            "purpose": "wa-surveypoint-purpose:temporary-control-point",
            "ptQualityMeasure": 0.028,
            "comment": "In Bitumen",
            "monumentedBy": {
              "form": "wa-monument-form:spike",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        }
      ]
    },
    {
      "id": "BoundaryMark",
      "type": "FeatureCollection",
      "featureType": "BoundaryMark",
      "features": [
        {
          "id": "17876586",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54700.281,
              398426.444,
              0.0
            ]
          },
          "properties": {
            "name": null,
            "purpose": "wa-surveypoint-purpose:road-boundary",
            "ptQualityMeasure": 0.013,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        }
      ]
    },
    {
      "id": "GeodeticReferenceMark",
      "type": "FeatureCollection",
      "featureType": "GeodeticReferenceMark",
      "features": [
        {
          "id": "18430396",
          "type": "Feature",
          "featureType": "GeodeticReferenceMark",
          "time": null,
          "geometry": null,
          "place": {
            "type": "Point",
            "coordinates": [
              54761.299,
              398489.106,
              0.0
            ]
          },
          "properties": {
            "geodeticid": "EFB157243/9802",
            "name": {
              "label": "EFB157243/9802",
              "hasPart": [
                {
                  "type": "Source",
                  "label": "EFB157243"
                },
                {
                  "type": "Stamp",
                  "label": "9802"
                }
              ]
            },
            "purpose": "wa-surveypoint-purpose:permanent-survey-mark",
            "ptQualityMeasure": 0.026,
            "comment": "In Concrete",
            "monumentedBy": {
              "form": "wa-monument-form:brass-plaque",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            }
          }
        }
      ]
    }
  ],
  "edges": [],
  "solids": [],
  "vectorObservations": [],
  "parcels": [],
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
@prefix ns1: <https://linked.data.gov.au/def/csdm/commonpatterns/> .
@prefix ns2: <http://www.iana.org/assignments/> .
@prefix oa: <http://www.w3.org/ns/oa#> .
@prefix prof: <http://www.w3.org/ns/dx/prof/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix surv: <https://linked.data.gov.au/def/csdm/surveyfeatures/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix wa-local-government: <https://linked.data.gov.au/def/csdm/wa-local-government/> .
@prefix wa-locality: <https://linked.data.gov.au/def/csdm/wa-locality/> .
@prefix wa-monument-condition: <https://linked.data.gov.au/def/csdm/wa-monument-condition/> .
@prefix wa-monument-form: <https://linked.data.gov.au/def/csdm/wa-monument-form/> .
@prefix wa-monument-state: <https://linked.data.gov.au/def/csdm/wa-monument-state/> .
@prefix wa-survey-purpose: <https://linked.data.gov.au/def/csdm/wa-survey-purpose/> .
@prefix wa-survey-type: <https://linked.data.gov.au/def/csdm/wa-survey-type/> .
@prefix wa-surveypoint-purpose: <https://linked.data.gov.au/def/csdm/wa-surveypoint-purpose/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://www.wa-example.com/features/DP_422532> a geojson:FeatureCollection ;
    rdfs:label "DP 422532" ;
    dcterms:time [ time:hasTime "2022-05-22"^^xsd:date ] ;
    container:adminUnit [ ns2:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:localGovernmentArea ;
            oa:hasTarget wa-local-government:city-of-kalgoorlie-boulder ],
        [ ns2:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:karlkurla ] ;
    container:bearingRotation 0e+00 ;
    container:horizontalCRS epsg:8024 ;
    container:points <https://www.wa-example.com/features/BoundaryMark>,
        <https://www.wa-example.com/features/CadastralMark>,
        <https://www.wa-example.com/features/GeodeticReferenceMark> ;
    container:purpose wa-survey-purpose:subdivision ;
    container:surveyType wa-survey-type:SSA ;
    container:verticalDatum epsg:5711 ;
    geojson:collectionFeatureType "CSD" .

<https://www.wa-example.com/features/17876586> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.470028e+04 3.984264e+05 0e+00 ) ] ;
    ns1:qualityMeasure 1.3e-02 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:mark-found ] ;
    surv:purpose wa-surveypoint-purpose:road-boundary .

<https://www.wa-example.com/features/18430386> a surv:CadastralMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.467663e+04 3.984343e+05 0e+00 ) ] ;
    rdfs:comment "In Bitumen" ;
    ns1:name [ rdfs:label "EFB157243/9533" ;
            dcterms:hasPart [ rdfs:label "EFB157243" ;
                    commonpatterns:namePartType <https://www.wa-example.com/features/Source> ],
                [ rdfs:label "9533" ;
                    commonpatterns:namePartType <https://www.wa-example.com/features/Stamp> ] ] ;
    ns1:qualityMeasure 2.8e-02 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:spike ;
            surv:state wa-monument-state:mark-found ] ;
    surv:purpose wa-surveypoint-purpose:temporary-control-point .

<https://www.wa-example.com/features/18430396> a surv:GeodeticReferenceMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.47613e+04 3.984891e+05 0e+00 ) ] ;
    rdfs:comment "In Concrete" ;
    ns1:name [ rdfs:label "EFB157243/9802" ;
            dcterms:hasPart [ rdfs:label "9802" ;
                    commonpatterns:namePartType <https://www.wa-example.com/features/Stamp> ],
                [ rdfs:label "EFB157243" ;
                    commonpatterns:namePartType <https://www.wa-example.com/features/Source> ] ] ;
    ns1:qualityMeasure 2.6e-02 ;
    surv:geodeticid "EFB157243/9802" ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:brass-plaque ;
            surv:state wa-monument-state:mark-found ] ;
    surv:purpose wa-surveypoint-purpose:permanent-survey-mark .

<https://www.wa-example.com/features/BoundaryMark> a geojson:FeatureCollection ;
    geojson:collectionFeatureType "BoundaryMark" ;
    geojson:features <https://www.wa-example.com/features/17876586> .

<https://www.wa-example.com/features/CadastralMark> a geojson:FeatureCollection ;
    geojson:collectionFeatureType "CadastralMark" ;
    geojson:features <https://www.wa-example.com/features/18430386> .

<https://www.wa-example.com/features/GeodeticReferenceMark> a geojson:FeatureCollection ;
    geojson:collectionFeatureType "GeodeticReferenceMark" ;
    geojson:features <https://www.wa-example.com/features/18430396> .


```


### Four Unit Up/Down test example with stairwell
Self-contained collection of topology objects defining a Four Unit Up/Down example with stairwell. 
Dataset consists of 36 points, 65 edges, 35 rings, 35 faces, five shells, and five solids.

[Open the interactive viewer](assets/topo_viewer.html?example=4-unit-up-down.json)

#### json
```json
{
  "id": "uuid:a4df5a33-fc85-40a0-9fe6-b749d8170a33",
  "name": "DP 12347",
  "description": "Multi-solid test for Solid validation",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision",
  "surveyType": "wa-survey-type:SSA",
  "time": {
    "date": "2026-04-22"
  },
  "horizontalCRS": "epsg:7850",
  "verticalCRS": "epsg:5711",
  "bearingRotation": 0.0,
  "surveyTitle": "4 Unit Up/Down with Stairwell",

  "hasProvenance": [],
  "wasGeneratedBy": {
    "id": "uuid:08fe8ebb-59f4-4489-81e1-b0640caa9056",
    "endedAtTime": "2026-05-27T05:58:56.923046+00:00"
  },
  "features": [],
  "referencedCSDs": [],
  "points": [
    {
      "id": "uuid:9a3a584a-38b4-49ec-84a2-15512d31db5b",
      "type": "FeatureCollection",
      "featureType": "CadastralMark",
      "features": [
        {
          "id": "uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779818303263,
              -31.88703552343606,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:fa551002-6466-46f1-a2f3-f433334447e6",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779818303263,
              -31.88703552343606,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779740952903,
              -31.887107661310704,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779740952903,
              -31.887107661310704,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773398518112,
              -31.88710716621648,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773398518112,
              -31.88710716621648,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:e0d36194-78e8-4255-b6b7-4f59b79544db",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:5228ad62-0730-416f-89b0-5042da216efb",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076290656701,
              -31.887034203228236,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:48b7ec92-e7ff-468f-8dff-d03483468e97",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076290656701,
              -31.887034203228236,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:754fd788-08c8-45b0-a591-e608a27f0948",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00762829203471,
              -31.887106341099198,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00762829203471,
              -31.887106341099198,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769171638001,
              -31.88710683624614,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769171638001,
              -31.88710683624614,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:073f2f24-c85a-455d-9807-c24f75ea50f5",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773380229235,
              -31.88712520753267,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.427,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781835048558,
              -31.887125867514182,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781835048558,
              -31.887125867514182,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:7e2ed802-251e-48b6-b140-013cad070d9f",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773379171989,
              -31.887125207450133,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781931741749,
              -31.887035688404968,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781931741749,
              -31.887035688404968,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:9d786d21-169c-459e-a354-4eeee65bf8a3",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:9ccc8672-7244-42a9-8d65-1b40a637a603",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00760696414898,
              -31.887124217331177,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769152291053,
              -31.887124877479565,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:451e256a-6127-4e18-97f5-644093e9f9df",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769152291053,
              -31.887124877479565,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00760696414898,
              -31.887124217331177,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076079312868,
              -31.887034038227714,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076079312868,
              -31.887034038227714,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        }
      ]
    }
  ],
  "vectorObservations": [],
  "observedVectors": [],
  "parcels": [],
  "edges": [
    {
      "id": "uuid:d1d9c298-e00e-47e4-94b8-d9aa5ab0b854",
      "type": "FeatureCollection",
      "featureType": "Edge",
      "features": [
        {
          "id": "uuid:cc9ce047-61a1-4bf9-a366-bfc5b43092c2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e",
              "uuid:fa551002-6466-46f1-a2f3-f433334447e6"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:c795e6d9-0f44-4b1c-bc01-686d5e2acaa3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fa551002-6466-46f1-a2f3-f433334447e6",
              "uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:f0aa8d02-1aa3-4f44-be28-d135c94de497",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9",
              "uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:06e882da-e914-4ff8-a279-13c1b16b7646",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d",
              "uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010",
              "uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:d27bfb1b-ffd5-4fb3-9594-6f04ad66aa81",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9",
              "uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:9257083c-e11a-4914-a120-fbb11f0c10c8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1",
              "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:725ebfd6-7c75-44fa-b917-94381bddef5f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96",
              "uuid:fa551002-6466-46f1-a2f3-f433334447e6"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e",
              "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b",
              "uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96",
              "uuid:e0d36194-78e8-4255-b6b7-4f59b79544db"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e0d36194-78e8-4255-b6b7-4f59b79544db",
              "uuid:5228ad62-0730-416f-89b0-5042da216efb"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:21935dcb-8634-4e57-abf4-4585eba35018",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:5228ad62-0730-416f-89b0-5042da216efb",
              "uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b",
              "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:a51db565-6909-4151-ad98-9c7fbeb85c19",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4",
              "uuid:e0d36194-78e8-4255-b6b7-4f59b79544db"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4",
              "uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:aa458878-e72e-454e-9921-bfbf14315787",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c",
              "uuid:5228ad62-0730-416f-89b0-5042da216efb"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010",
              "uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b",
              "uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:1f8b2b5d-416a-4b6b-90da-9c672bc42d2c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8",
              "uuid:48b7ec92-e7ff-468f-8dff-d03483468e97"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:f83f26bd-63dc-4a5e-959c-e90a7640d8a2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:48b7ec92-e7ff-468f-8dff-d03483468e97",
              "uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8",
              "uuid:754fd788-08c8-45b0-a591-e608a27f0948"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:a493ef53-2a0f-42f3-9523-23dea4dc19d6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa",
              "uuid:754fd788-08c8-45b0-a591-e608a27f0948"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:8eb102da-ae40-45c1-9a30-8ca97c69bdf6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa",
              "uuid:48b7ec92-e7ff-468f-8dff-d03483468e97"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:615aed99-8ae9-4857-931c-90bdd126e8c8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:754fd788-08c8-45b0-a591-e608a27f0948",
              "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2",
              "uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:ab68b5c9-0626-4a27-b735-c591dfc47e0a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e",
              "uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e",
              "uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:580818ce-50f0-486c-85c9-91c35ab39509",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6",
              "uuid:e0d36194-78e8-4255-b6b7-4f59b79544db"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:073f2f24-c85a-455d-9807-c24f75ea50f5",
              "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:17fa2c1e-5416-443b-b263-2f47cb514aa6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6",
              "uuid:073f2f24-c85a-455d-9807-c24f75ea50f5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:073f2f24-c85a-455d-9807-c24f75ea50f5",
              "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:e47e1b0a-ecee-4d50-987e-d10ad397f597",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198",
              "uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:0cc9dbeb-9ae4-429b-80d5-a637d54f9bc4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f",
              "uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:d6b33a71-4823-4c26-8ca1-ed929f278377",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f",
              "uuid:7e2ed802-251e-48b6-b140-013cad070d9f"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7e2ed802-251e-48b6-b140-013cad070d9f",
              "uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:7197ee0b-aa79-40dd-a8ec-9d4413777a19",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd",
              "uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:030a717f-c3d7-46c9-8e04-4a90a2de6971",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8",
              "uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:c0a27c02-e38f-4648-b296-3ba0372f0e50",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29",
              "uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:5698e261-6451-4ffe-90dd-05d5270c59a7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8",
              "uuid:9d786d21-169c-459e-a354-4eeee65bf8a3"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9d786d21-169c-459e-a354-4eeee65bf8a3",
              "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:9e2b2cf4-db16-4c58-9cea-86b593995bdf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e",
              "uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198",
              "uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.998
          }
        },
        {
          "id": "uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca",
              "uuid:9ccc8672-7244-42a9-8d65-1b40a637a603"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9ccc8672-7244-42a9-8d65-1b40a637a603",
              "uuid:9d786d21-169c-459e-a354-4eeee65bf8a3"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:8e931595-7a01-4678-a20e-5607229a0d01",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9ccc8672-7244-42a9-8d65-1b40a637a603",
              "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:8a34c9fb-e3d6-45d3-817e-93d0c58be464",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c",
              "uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7e2ed802-251e-48b6-b140-013cad070d9f",
              "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 2.0
          }
        },
        {
          "id": "uuid:2413de82-7661-4536-8a05-58c4fadbd5fd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a",
              "uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:28922e7d-7683-40da-916c-241f473ee3bd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4",
              "uuid:451e256a-6127-4e18-97f5-644093e9f9df"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:99e2aa85-d004-4eed-8533-1313133f0809",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:451e256a-6127-4e18-97f5-644093e9f9df",
              "uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:8103a475-c12f-4664-ac95-50afbd4c782d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd",
              "uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:3bc984fd-e2fa-48de-9397-635b28834926",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e",
              "uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:ba83542a-054c-4671-ad1f-412f89783e0f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd",
              "uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:259ec3c3-5480-484c-8b6f-d081695a0a3f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e",
              "uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:e3c87c26-8a6a-4889-923c-d87562d2dde9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9d786d21-169c-459e-a354-4eeee65bf8a3",
              "uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:4a32db28-5b1a-4b4c-8fd4-e94cfca8c03a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3",
              "uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9ccc8672-7244-42a9-8d65-1b40a637a603",
              "uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d",
              "uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.998
          }
        },
        {
          "id": "uuid:e4a49176-d47d-41f7-85c1-7d91bb836286",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d",
              "uuid:073f2f24-c85a-455d-9807-c24f75ea50f5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2",
              "uuid:451e256a-6127-4e18-97f5-644093e9f9df"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 2.0
          }
        },
        {
          "id": "uuid:eb237aee-db71-4faf-8bb2-aeefc8515821",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4",
              "uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:05253350-3d88-4edc-b6cb-759a2234382f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7e2ed802-251e-48b6-b140-013cad070d9f",
              "uuid:451e256a-6127-4e18-97f5-644093e9f9df"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:78d47480-6451-451e-b35c-afbc40f27f93",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2",
              "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:0c7efeba-1fb3-49a1-aafd-3e38affa4a9c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e",
              "uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        }
      ]
    }
  ],
  "rings": [
    {
      "id": "uuid:e473c559-9182-4bde-98af-669971f814d1",
      "type": "FeatureCollection",
      "featureType": "Ring",
      "features": [
        {
          "id": "uuid:bec0f9d8-0d77-46ba-8941-f884943ac3d8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:cc9ce047-61a1-4bf9-a366-bfc5b43092c2",
                "orientation": "+"
              },
              {
                "ref": "uuid:c795e6d9-0f44-4b1c-bc01-686d5e2acaa3",
                "orientation": "+"
              },
              {
                "ref": "uuid:f0aa8d02-1aa3-4f44-be28-d135c94de497",
                "orientation": "+"
              },
              {
                "ref": "uuid:06e882da-e914-4ff8-a279-13c1b16b7646",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.994
          }
        },
        {
          "id": "uuid:6642ea7b-0b5e-474c-95ef-fe5a15be551b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9",
                "orientation": "+"
              },
              {
                "ref": "uuid:f0aa8d02-1aa3-4f44-be28-d135c94de497",
                "orientation": "-"
              },
              {
                "ref": "uuid:d27bfb1b-ffd5-4fb3-9594-6f04ad66aa81",
                "orientation": "+"
              },
              {
                "ref": "uuid:9257083c-e11a-4914-a120-fbb11f0c10c8",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.998
          }
        },
        {
          "id": "uuid:10ebd12b-36b6-4db0-b43e-b742e05540ce",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:725ebfd6-7c75-44fa-b917-94381bddef5f",
                "orientation": "+"
              },
              {
                "ref": "uuid:cc9ce047-61a1-4bf9-a366-bfc5b43092c2",
                "orientation": "-"
              },
              {
                "ref": "uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428",
                "orientation": "+"
              },
              {
                "ref": "uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:f8c1f3d2-aeb6-4b33-b6f8-7d01a5e8ae59",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:d27bfb1b-ffd5-4fb3-9594-6f04ad66aa81",
                "orientation": "-"
              },
              {
                "ref": "uuid:c795e6d9-0f44-4b1c-bc01-686d5e2acaa3",
                "orientation": "-"
              },
              {
                "ref": "uuid:725ebfd6-7c75-44fa-b917-94381bddef5f",
                "orientation": "-"
              },
              {
                "ref": "uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08",
                "orientation": "+"
              },
              {
                "ref": "uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f",
                "orientation": "+"
              },
              {
                "ref": "uuid:21935dcb-8634-4e57-abf4-4585eba35018",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:72d54df4-b018-4897-a96d-7d62cb9d8c4a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64",
                "orientation": "+"
              },
              {
                "ref": "uuid:a51db565-6909-4151-ad98-9c7fbeb85c19",
                "orientation": "+"
              },
              {
                "ref": "uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08",
                "orientation": "-"
              },
              {
                "ref": "uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.998
          }
        },
        {
          "id": "uuid:d7b9eb80-93ca-4ee5-adcb-ab1cfda75d4f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34",
                "orientation": "+"
              },
              {
                "ref": "uuid:aa458878-e72e-454e-9921-bfbf14315787",
                "orientation": "+"
              },
              {
                "ref": "uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f",
                "orientation": "-"
              },
              {
                "ref": "uuid:a51db565-6909-4151-ad98-9c7fbeb85c19",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:79e3d840-7da3-4380-8288-6c2db4ac8b06",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9",
                "orientation": "-"
              },
              {
                "ref": "uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1",
                "orientation": "+"
              },
              {
                "ref": "uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34",
                "orientation": "-"
              },
              {
                "ref": "uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64",
                "orientation": "-"
              },
              {
                "ref": "uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428",
                "orientation": "-"
              },
              {
                "ref": "uuid:06e882da-e914-4ff8-a279-13c1b16b7646",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:7472a7e9-efcf-49a8-a19f-4a14c3e6f86e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1",
                "orientation": "-"
              },
              {
                "ref": "uuid:9257083c-e11a-4914-a120-fbb11f0c10c8",
                "orientation": "-"
              },
              {
                "ref": "uuid:21935dcb-8634-4e57-abf4-4585eba35018",
                "orientation": "-"
              },
              {
                "ref": "uuid:aa458878-e72e-454e-9921-bfbf14315787",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        },
        {
          "id": "uuid:bba09dfa-33c6-4256-8f33-b802aec75bdb",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5",
                "orientation": "+"
              },
              {
                "ref": "uuid:1f8b2b5d-416a-4b6b-90da-9c672bc42d2c",
                "orientation": "+"
              },
              {
                "ref": "uuid:f83f26bd-63dc-4a5e-959c-e90a7640d8a2",
                "orientation": "+"
              },
              {
                "ref": "uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:5b1af58d-21f4-4582-96f8-14d356205491",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:1f8b2b5d-416a-4b6b-90da-9c672bc42d2c",
                "orientation": "-"
              },
              {
                "ref": "uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118",
                "orientation": "+"
              },
              {
                "ref": "uuid:a493ef53-2a0f-42f3-9523-23dea4dc19d6",
                "orientation": "-"
              },
              {
                "ref": "uuid:8eb102da-ae40-45c1-9a30-8ca97c69bdf6",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.994
          }
        },
        {
          "id": "uuid:8c5381e4-64ab-4b9d-bdd5-aea3de220330",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:a493ef53-2a0f-42f3-9523-23dea4dc19d6",
                "orientation": "+"
              },
              {
                "ref": "uuid:615aed99-8ae9-4857-931c-90bdd126e8c8",
                "orientation": "+"
              },
              {
                "ref": "uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16",
                "orientation": "+"
              },
              {
                "ref": "uuid:ab68b5c9-0626-4a27-b735-c591dfc47e0a",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.998
          }
        },
        {
          "id": "uuid:73155e38-87b0-4ded-9af7-dd354d36a728",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f83f26bd-63dc-4a5e-959c-e90a7640d8a2",
                "orientation": "-"
              },
              {
                "ref": "uuid:8eb102da-ae40-45c1-9a30-8ca97c69bdf6",
                "orientation": "-"
              },
              {
                "ref": "uuid:ab68b5c9-0626-4a27-b735-c591dfc47e0a",
                "orientation": "-"
              },
              {
                "ref": "uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018",
                "orientation": "+"
              },
              {
                "ref": "uuid:580818ce-50f0-486c-85c9-91c35ab39509",
                "orientation": "+"
              },
              {
                "ref": "uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:ce452f84-97f5-43ad-83f8-1758fba42a49",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2",
                "orientation": "+"
              },
              {
                "ref": "uuid:a51db565-6909-4151-ad98-9c7fbeb85c19",
                "orientation": "+"
              },
              {
                "ref": "uuid:580818ce-50f0-486c-85c9-91c35ab39509",
                "orientation": "-"
              },
              {
                "ref": "uuid:17fa2c1e-5416-443b-b263-2f47cb514aa6",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:46d1879a-0f3f-42ef-b68d-d813f684e3f9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79",
                "orientation": "+"
              },
              {
                "ref": "uuid:615aed99-8ae9-4857-931c-90bdd126e8c8",
                "orientation": "-"
              },
              {
                "ref": "uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118",
                "orientation": "-"
              },
              {
                "ref": "uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5",
                "orientation": "-"
              },
              {
                "ref": "uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64",
                "orientation": "+"
              },
              {
                "ref": "uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:98685c3a-fc3b-4490-b99f-5a4f9ef3aae4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79",
                "orientation": "-"
              },
              {
                "ref": "uuid:17fa2c1e-5416-443b-b263-2f47cb514aa6",
                "orientation": "-"
              },
              {
                "ref": "uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018",
                "orientation": "-"
              },
              {
                "ref": "uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        },
        {
          "id": "uuid:8efc4bcc-0265-4aba-82f9-4e9c5f818018",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e47e1b0a-ecee-4d50-987e-d10ad397f597",
                "orientation": "+"
              },
              {
                "ref": "uuid:0cc9dbeb-9ae4-429b-80d5-a637d54f9bc4",
                "orientation": "-"
              },
              {
                "ref": "uuid:d6b33a71-4823-4c26-8ca1-ed929f278377",
                "orientation": "+"
              },
              {
                "ref": "uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.995
          }
        },
        {
          "id": "uuid:0bdb8d8a-3d53-4a97-bee6-56bf509e6b69",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:7197ee0b-aa79-40dd-a8ec-9d4413777a19",
                "orientation": "+"
              },
              {
                "ref": "uuid:030a717f-c3d7-46c9-8e04-4a90a2de6971",
                "orientation": "+"
              },
              {
                "ref": "uuid:c0a27c02-e38f-4648-b296-3ba0372f0e50",
                "orientation": "+"
              },
              {
                "ref": "uuid:0cc9dbeb-9ae4-429b-80d5-a637d54f9bc4",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:2d2a332b-7633-41ee-8f53-712fc6f2b877",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:5698e261-6451-4ffe-90dd-05d5270c59a7",
                "orientation": "+"
              },
              {
                "ref": "uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f",
                "orientation": "+"
              },
              {
                "ref": "uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428",
                "orientation": "-"
              },
              {
                "ref": "uuid:9e2b2cf4-db16-4c58-9cea-86b593995bdf",
                "orientation": "+"
              },
              {
                "ref": "uuid:030a717f-c3d7-46c9-8e04-4a90a2de6971",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:424281c5-646a-48c3-b0f2-ac703d3a8d10",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e47e1b0a-ecee-4d50-987e-d10ad397f597",
                "orientation": "-"
              },
              {
                "ref": "uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29",
                "orientation": "+"
              },
              {
                "ref": "uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030",
                "orientation": "+"
              },
              {
                "ref": "uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a",
                "orientation": "+"
              },
              {
                "ref": "uuid:5698e261-6451-4ffe-90dd-05d5270c59a7",
                "orientation": "-"
              },
              {
                "ref": "uuid:7197ee0b-aa79-40dd-a8ec-9d4413777a19",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 39.987
          }
        },
        {
          "id": "uuid:d4e4f6d3-3603-4da5-9d20-661ff9a38015",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:8e931595-7a01-4678-a20e-5607229a0d01",
                "orientation": "+"
              },
              {
                "ref": "uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64",
                "orientation": "-"
              },
              {
                "ref": "uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f",
                "orientation": "-"
              },
              {
                "ref": "uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.998
          }
        },
        {
          "id": "uuid:adb6be70-c29a-4dcc-9e4b-47970d9930dd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:8a34c9fb-e3d6-45d3-817e-93d0c58be464",
                "orientation": "+"
              },
              {
                "ref": "uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29",
                "orientation": "-"
              },
              {
                "ref": "uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c",
                "orientation": "-"
              },
              {
                "ref": "uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013",
                "orientation": "+"
              },
              {
                "ref": "uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.996
          }
        },
        {
          "id": "uuid:3ff8d8c4-90fe-4782-9717-1e3f4110f5a0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:8a34c9fb-e3d6-45d3-817e-93d0c58be464",
                "orientation": "-"
              },
              {
                "ref": "uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34",
                "orientation": "-"
              },
              {
                "ref": "uuid:8e931595-7a01-4678-a20e-5607229a0d01",
                "orientation": "-"
              },
              {
                "ref": "uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:2402e110-526c-49d6-82f2-5ecf689f64d3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:9e2b2cf4-db16-4c58-9cea-86b593995bdf",
                "orientation": "-"
              },
              {
                "ref": "uuid:06e882da-e914-4ff8-a279-13c1b16b7646",
                "orientation": "-"
              },
              {
                "ref": "uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9",
                "orientation": "-"
              },
              {
                "ref": "uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013",
                "orientation": "-"
              },
              {
                "ref": "uuid:d6b33a71-4823-4c26-8ca1-ed929f278377",
                "orientation": "-"
              },
              {
                "ref": "uuid:c0a27c02-e38f-4648-b296-3ba0372f0e50",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 35.99
          }
        },
        {
          "id": "uuid:64496114-d8c3-4643-9975-4ae0bb1af186",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:2413de82-7661-4536-8a05-58c4fadbd5fd",
                "orientation": "+"
              },
              {
                "ref": "uuid:28922e7d-7683-40da-916c-241f473ee3bd",
                "orientation": "+"
              },
              {
                "ref": "uuid:99e2aa85-d004-4eed-8533-1313133f0809",
                "orientation": "+"
              },
              {
                "ref": "uuid:8103a475-c12f-4664-ac95-50afbd4c782d",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:79e3d1de-56bc-47de-a18b-d29da6100eda",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:3bc984fd-e2fa-48de-9397-635b28834926",
                "orientation": "+"
              },
              {
                "ref": "uuid:8103a475-c12f-4664-ac95-50afbd4c782d",
                "orientation": "-"
              },
              {
                "ref": "uuid:ba83542a-054c-4671-ad1f-412f89783e0f",
                "orientation": "+"
              },
              {
                "ref": "uuid:259ec3c3-5480-484c-8b6f-d081695a0a3f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:815b8458-d756-45cc-8385-00314271e297",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e3c87c26-8a6a-4889-923c-d87562d2dde9",
                "orientation": "+"
              },
              {
                "ref": "uuid:259ec3c3-5480-484c-8b6f-d081695a0a3f",
                "orientation": "+"
              },
              {
                "ref": "uuid:4a32db28-5b1a-4b4c-8fd4-e94cfca8c03a",
                "orientation": "+"
              },
              {
                "ref": "uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5",
                "orientation": "-"
              },
              {
                "ref": "uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:1a7575a5-e039-4059-9fa8-b7e960c50c64",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e3c87c26-8a6a-4889-923c-d87562d2dde9",
                "orientation": "-"
              },
              {
                "ref": "uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a",
                "orientation": "-"
              },
              {
                "ref": "uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4",
                "orientation": "+"
              },
              {
                "ref": "uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958",
                "orientation": "+"
              },
              {
                "ref": "uuid:2413de82-7661-4536-8a05-58c4fadbd5fd",
                "orientation": "-"
              },
              {
                "ref": "uuid:3bc984fd-e2fa-48de-9397-635b28834926",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 39.988
          }
        },
        {
          "id": "uuid:92f996ff-4259-4d40-96ec-65de71faa800",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e4a49176-d47d-41f7-85c1-7d91bb836286",
                "orientation": "+"
              },
              {
                "ref": "uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79",
                "orientation": "+"
              },
              {
                "ref": "uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52",
                "orientation": "+"
              },
              {
                "ref": "uuid:28922e7d-7683-40da-916c-241f473ee3bd",
                "orientation": "-"
              },
              {
                "ref": "uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 17.996
          }
        },
        {
          "id": "uuid:441f6a73-ea02-44a7-a04d-4fec5659d529",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:8e931595-7a01-4678-a20e-5607229a0d01",
                "orientation": "+"
              },
              {
                "ref": "uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2",
                "orientation": "-"
              },
              {
                "ref": "uuid:e4a49176-d47d-41f7-85c1-7d91bb836286",
                "orientation": "-"
              },
              {
                "ref": "uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:8ca4710e-2abd-4152-912d-55c25793b4b7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52",
                "orientation": "-"
              },
              {
                "ref": "uuid:615aed99-8ae9-4857-931c-90bdd126e8c8",
                "orientation": "-"
              },
              {
                "ref": "uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118",
                "orientation": "-"
              },
              {
                "ref": "uuid:4a32db28-5b1a-4b4c-8fd4-e94cfca8c03a",
                "orientation": "-"
              },
              {
                "ref": "uuid:ba83542a-054c-4671-ad1f-412f89783e0f",
                "orientation": "-"
              },
              {
                "ref": "uuid:99e2aa85-d004-4eed-8533-1313133f0809",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 35.99
          }
        },
        {
          "id": "uuid:29f3aa93-c4e5-4961-9fd5-c2261a0b9f3b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:eb237aee-db71-4faf-8bb2-aeefc8515821",
                "orientation": "-"
              },
              {
                "ref": "uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958",
                "orientation": "-"
              },
              {
                "ref": "uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4",
                "orientation": "-"
              },
              {
                "ref": "uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030",
                "orientation": "-"
              },
              {
                "ref": "uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 19.993
          }
        },
        {
          "id": "uuid:bac4ae02-1a53-4849-9e46-b3c0d67925b1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:05253350-3d88-4edc-b6cb-759a2234382f",
                "orientation": "+"
              },
              {
                "ref": "uuid:28922e7d-7683-40da-916c-241f473ee3bd",
                "orientation": "-"
              },
              {
                "ref": "uuid:eb237aee-db71-4faf-8bb2-aeefc8515821",
                "orientation": "+"
              },
              {
                "ref": "uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.997
          }
        },
        {
          "id": "uuid:6a58d678-e9cf-4466-b01f-76e8e7f1f4a4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:05253350-3d88-4edc-b6cb-759a2234382f",
                "orientation": "-"
              },
              {
                "ref": "uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013",
                "orientation": "+"
              },
              {
                "ref": "uuid:78d47480-6451-451e-b35c-afbc40f27f93",
                "orientation": "-"
              },
              {
                "ref": "uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 11.996
          }
        },
        {
          "id": "uuid:49b309d9-6d39-4c44-9a9e-ac2e73c3b58e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:0c7efeba-1fb3-49a1-aafd-3e38affa4a9c",
                "orientation": "+"
              },
              {
                "ref": "uuid:21935dcb-8634-4e57-abf4-4585eba35018",
                "orientation": "-"
              },
              {
                "ref": "uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f",
                "orientation": "-"
              },
              {
                "ref": "uuid:580818ce-50f0-486c-85c9-91c35ab39509",
                "orientation": "-"
              },
              {
                "ref": "uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 15.992
          }
        },
        {
          "id": "uuid:b17a9121-2cf2-427f-871d-78266deacddf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:78d47480-6451-451e-b35c-afbc40f27f93",
                "orientation": "+"
              },
              {
                "ref": "uuid:9257083c-e11a-4914-a120-fbb11f0c10c8",
                "orientation": "-"
              },
              {
                "ref": "uuid:0c7efeba-1fb3-49a1-aafd-3e38affa4a9c",
                "orientation": "-"
              },
              {
                "ref": "uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        }
      ]
    }
  ],
  "faces": [
    {
      "id": "uuid:cc0799d5-a994-464b-8200-35566358138f",
      "type": "FeatureCollection",
      "featureType": "Face",
      "features": [
        {
          "id": "uuid:649a326e-bb1e-4492-943a-39aa35806c64",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:bec0f9d8-0d77-46ba-8941-f884943ac3d8",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999937695,
              2.1252341604305102e-06,
              2.818552790910351e-06
            ],
            "area": 23.991,
            "description": "East-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:4fe850d8-d729-4851-b7d9-0f9e7ed39468",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:6642ea7b-0b5e-474c-95ef-fe5a15be551b",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1347501594712472e-06,
              -0.9999999999976475,
              -3.8463119361166447e-07
            ],
            "area": 17.997,
            "description": "South-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:0523e3be-6777-40f9-9e14-523e128647c0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:10ebd12b-36b6-4db0-b43e-b742e05540ce",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1160627370878684e-06,
              0.9999999999964104,
              1.6436244147846745e-06
            ],
            "area": 23.994,
            "description": "North-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:4def3698-95e1-486f-9588-a69a73640e5c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:f8c1f3d2-aeb6-4b33-b6f8-7d01a5e8ae59",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 55.969,
            "description": "Top boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:fa7823a2-8ed7-43f0-9912-e7ade12c966a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:72d54df4-b018-4897-a96d-7d62cb9d8c4a",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999965267,
              -2.120773346758996e-06,
              -1.5650321292142593e-06
            ],
            "area": 11.997,
            "description": "West-facing boundary face, [Upper East, Upper West]"
          }
        },
        {
          "id": "uuid:f45d1ba5-ecfe-4b0b-b315-2dc71cfe2b3b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:d7b9eb80-93ca-4ee5-adcb-ab1cfda75d4f",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.124969241213484e-06,
              -0.9999999999972277,
              -1.0145170209822307e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Upper East, Stairwell]"
          }
        },
        {
          "id": "uuid:d0ddc512-0c81-43bb-a000-bf5017ff64a7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:79e3d840-7da3-4380-8288-6c2db4ac8b06",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.0,
              -0.0,
              -1.0
            ],
            "area": 55.969,
            "description": "Bottom boundary face, [Upper East, Lower East]"
          }
        },
        {
          "id": "uuid:fbe45af6-b334-4500-97e3-3c4cd177db90",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:7472a7e9-efcf-49a8-a19f-4a14c3e6f86e",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999959679,
              -2.1300537012889316e-06,
              -1.8780230806249394e-06
            ],
            "area": 11.994,
            "description": "West-facing boundary face, [Upper East, Stairwell]"
          }
        },
        {
          "id": "uuid:d8aca1d0-8d06-4520-9437-7479640802df",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:bba09dfa-33c6-4256-8f33-b802aec75bdb",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1160024131438693e-06,
              0.9999999999964108,
              1.6434718457076753e-06
            ],
            "area": 23.994,
            "description": "North-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:f4b518ed-e4d2-48cc-b2b9-997df7a49c29",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:5b1af58d-21f4-4582-96f8-14d356205491",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999976931,
              -2.1251782237133477e-06,
              -3.124220601837041e-07
            ],
            "area": 23.991,
            "description": "West-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:83e6f887-a532-473f-8f09-536ef1943f33",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:8c5381e4-64ab-4b9d-bdd5-aea3de220330",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1344389761872487e-06,
              -0.9999999999976482,
              -3.846345366682647e-07
            ],
            "area": 17.997,
            "description": "South-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:16b0e4ac-22b3-40f5-8510-7fefb1b1cc06",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:73155e38-87b0-4ded-9af7-dd354d36a728",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 55.968,
            "description": "Top boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:f3212f35-ba06-46b1-8822-fdfac0ec4bd1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:ce452f84-97f5-43ad-83f8-1758fba42a49",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.125434709040482e-06,
              -0.9999999999972267,
              -1.01451768633823e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Upper West, Stairwell]"
          }
        },
        {
          "id": "uuid:bda4a01e-afca-41dd-b296-81cd3df3c070",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:46d1879a-0f3f-42ef-b68d-d813f684e3f9",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 55.968,
            "description": "Bottom boundary face, [Upper West, Lower West]"
          }
        },
        {
          "id": "uuid:1713550e-1504-45f6-a00e-7eeb436306eb",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:98685c3a-fc3b-4490-b99f-5a4f9ef3aae4",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999969489,
              2.129537331624891e-06,
              1.251893000853936e-06
            ],
            "area": 11.994,
            "description": "East-facing boundary face, [Upper West, Stairwell]"
          }
        },
        {
          "id": "uuid:3f40fd91-3d85-404b-82cd-fd4bb7228ca5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:8efc4bcc-0265-4aba-82f9-4e9c5f818018",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1354470739553984e-06,
              -0.9999999999977187,
              -4.90443042600462e-08
            ],
            "area": 23.992,
            "description": "South-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:0e50d98b-eed1-41b7-aec0-35970c4c03df",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:0bdb8d8a-3d53-4a97-bee6-56bf509e6b69",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.999999999992833,
              2.1277472132566447e-06,
              3.1315738370324766e-06
            ],
            "area": 29.991,
            "description": "East-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:1d373111-f4b1-4627-92ab-14f0bbeb882b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:2d2a332b-7633-41ee-8f53-712fc6f2b877",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.112030056897979e-06,
              0.9999999999964635,
              1.616305591688749e-06
            ],
            "area": 29.991,
            "description": "North-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:6caff784-d847-4916-9360-03ab48f3a5df",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:424281c5-646a-48c3-b0f2-ac703d3a8d10",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 87.948,
            "description": "Bottom boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:429a8b49-b82a-4521-9388-6b0b87bccb06",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:d4e4f6d3-3603-4da5-9d20-661ff9a38015",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999965249,
              -2.121172640933992e-06,
              -1.565526879734256e-06
            ],
            "area": 11.997,
            "description": "West-facing boundary face, [Lower East, Lower West]"
          }
        },
        {
          "id": "uuid:48b5ada1-bbec-4aee-851d-6c1509e9d444",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:adb6be70-c29a-4dcc-9e4b-47970d9930dd",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999959602,
              -2.131841094675915e-06,
              -1.8801796836009255e-06
            ],
            "area": 17.994,
            "description": "West-facing boundary face, [Lower East, Stairwell]"
          }
        },
        {
          "id": "uuid:a3e906eb-b583-4af2-a13b-fb6bb2d399a3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:3ff8d8c4-90fe-4782-9717-1e3f4110f5a0",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.122639235232521e-06,
              -0.9999999999972454,
              -1.001788957290246e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Lower East, Stairwell]"
          }
        },
        {
          "id": "uuid:90f77d40-3e87-4627-993d-e0a9efef52d6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:2402e110-526c-49d6-82f2-5ecf689f64d3",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 31.982,
            "description": "Top boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:d9c6f295-4449-4e1d-bb3a-0c4ddf57e8f0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:64496114-d8c3-4643-9975-4ae0bb1af186",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1381834939563843e-06,
              -0.9999999999977119,
              -6.782998719558046e-08
            ],
            "area": 23.994,
            "description": "South-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:47967a8e-ab17-4db0-bbfa-7a6d797e6136",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:79e3d1de-56bc-47de-a18b-d29da6100eda",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999977369,
              -2.1275050385904402e-06,
              5.802619591563473e-10
            ],
            "area": 29.991,
            "description": "West-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:538c874f-36f0-4fe5-9bb1-fc37f0b14f0e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:815b8458-d756-45cc-8385-00314271e297",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1147242879319153e-06,
              0.9999999999964325,
              1.6319025594187058e-06
            ],
            "area": 29.991,
            "description": "North-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:c6d50260-a8fe-4fac-9279-2ac46d621e87",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:1a7575a5-e039-4059-9fa8-b7e960c50c64",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 87.95,
            "description": "Bottom boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:69183851-6fbc-495b-aa59-eba99d14bf68",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:92f996ff-4259-4d40-96ec-65de71faa800",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999969424,
              2.131971756477877e-06,
              1.2529856403859282e-06
            ],
            "area": 17.994,
            "description": "East-facing boundary face, [Lower West, Stairwell]"
          }
        },
        {
          "id": "uuid:6bb474bd-c5d6-4366-bc9e-d051dbf72a6e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:441f6a73-ea02-44a7-a04d-4fec5659d529",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1233376085545115e-06,
              -0.999999999997241,
              -1.004738808137242e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Lower West, Stairwell]"
          }
        },
        {
          "id": "uuid:ec0516e9-68b2-4d3d-8ed9-4a59f8e018c8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:8ca4710e-2abd-4152-912d-55c25793b4b7",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 31.982,
            "description": "Top boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:5381559d-4537-4041-81e1-a0978e7f3c64",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:29f3aa93-c4e5-4961-9fd5-c2261a0b9f3b",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              1.5695020611744682e-06,
              4.6264846992854333e-07,
              -0.9999999999986614
            ],
            "area": 23.983,
            "description": "Bottom boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:a63b48bc-c0d9-440d-9238-c093d3a6c40c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:bac4ae02-1a53-4849-9e46-b3c0d67925b1",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1368444112603913e-06,
              -0.9999999999977152,
              -6.208482429009232e-08
            ],
            "area": 11.996,
            "description": "South-facing boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:029e7e2d-a650-4510-b861-ee68b46a2fff",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:6a58d678-e9cf-4466-b01f-76e8e7f1f4a4",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -1.5667086656316248e-06,
              -1.5697701705156244e-07,
              0.9999999999987605
            ],
            "area": 7.996,
            "description": "Top boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:64860b38-d1bf-4728-8f0d-6ced9451ce37",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:49b309d9-6d39-4c44-9a9e-ac2e73c3b58e",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -1.566941334935351e-06,
              -6.103726788333472e-07,
              0.999999999998586
            ],
            "area": 15.983,
            "description": "Top boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:4bd327dc-316a-4e1c-9b35-b377652e89d6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:b17a9121-2cf2-427f-871d-78266deacddf",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1346333832552482e-06,
              -0.9999999999976478,
              -3.8447764578726455e-07
            ],
            "area": 11.994,
            "description": "South-facing boundary face, [Stairwell]"
          }
        }
      ]
    }
  ],
  "shells": [
    {
      "id": "uuid:c6ad4aa1-ed7a-4636-b80a-df7a673f74de",
      "type": "FeatureCollection",
      "featureType": "Shell",
      "features": [
        {
          "id": "uuid:31dcf84a-98c6-48b1-8ba6-14d7a5ff6749",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:649a326e-bb1e-4492-943a-39aa35806c64",
                "orientation": "+"
              },
              {
                "ref": "uuid:4fe850d8-d729-4851-b7d9-0f9e7ed39468",
                "orientation": "+"
              },
              {
                "ref": "uuid:0523e3be-6777-40f9-9e14-523e128647c0",
                "orientation": "+"
              },
              {
                "ref": "uuid:4def3698-95e1-486f-9588-a69a73640e5c",
                "orientation": "+"
              },
              {
                "ref": "uuid:fa7823a2-8ed7-43f0-9912-e7ade12c966a",
                "orientation": "+"
              },
              {
                "ref": "uuid:f45d1ba5-ecfe-4b0b-b315-2dc71cfe2b3b",
                "orientation": "+"
              },
              {
                "ref": "uuid:d0ddc512-0c81-43bb-a000-bf5017ff64a7",
                "orientation": "+"
              },
              {
                "ref": "uuid:fbe45af6-b334-4500-97e3-3c4cd177db90",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Upper East"
          }
        },
        {
          "id": "uuid:f44d98c1-fc4e-45da-a233-6e63e58bd560",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:d8aca1d0-8d06-4520-9437-7479640802df",
                "orientation": "+"
              },
              {
                "ref": "uuid:f4b518ed-e4d2-48cc-b2b9-997df7a49c29",
                "orientation": "+"
              },
              {
                "ref": "uuid:83e6f887-a532-473f-8f09-536ef1943f33",
                "orientation": "+"
              },
              {
                "ref": "uuid:16b0e4ac-22b3-40f5-8510-7fefb1b1cc06",
                "orientation": "+"
              },
              {
                "ref": "uuid:fa7823a2-8ed7-43f0-9912-e7ade12c966a",
                "orientation": "-"
              },
              {
                "ref": "uuid:f3212f35-ba06-46b1-8822-fdfac0ec4bd1",
                "orientation": "+"
              },
              {
                "ref": "uuid:bda4a01e-afca-41dd-b296-81cd3df3c070",
                "orientation": "+"
              },
              {
                "ref": "uuid:1713550e-1504-45f6-a00e-7eeb436306eb",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Upper West"
          }
        },
        {
          "id": "uuid:26bd463c-0433-4510-8ba8-074f5cdd1e64",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:3f40fd91-3d85-404b-82cd-fd4bb7228ca5",
                "orientation": "+"
              },
              {
                "ref": "uuid:0e50d98b-eed1-41b7-aec0-35970c4c03df",
                "orientation": "+"
              },
              {
                "ref": "uuid:1d373111-f4b1-4627-92ab-14f0bbeb882b",
                "orientation": "+"
              },
              {
                "ref": "uuid:6caff784-d847-4916-9360-03ab48f3a5df",
                "orientation": "+"
              },
              {
                "ref": "uuid:429a8b49-b82a-4521-9388-6b0b87bccb06",
                "orientation": "+"
              },
              {
                "ref": "uuid:48b5ada1-bbec-4aee-851d-6c1509e9d444",
                "orientation": "+"
              },
              {
                "ref": "uuid:a3e906eb-b583-4af2-a13b-fb6bb2d399a3",
                "orientation": "+"
              },
              {
                "ref": "uuid:d0ddc512-0c81-43bb-a000-bf5017ff64a7",
                "orientation": "-"
              },
              {
                "ref": "uuid:90f77d40-3e87-4627-993d-e0a9efef52d6",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Lower East"
          }
        },
        {
          "id": "uuid:3e5f9429-9bfb-498b-9624-e667f2e7b281",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:d9c6f295-4449-4e1d-bb3a-0c4ddf57e8f0",
                "orientation": "+"
              },
              {
                "ref": "uuid:47967a8e-ab17-4db0-bbfa-7a6d797e6136",
                "orientation": "+"
              },
              {
                "ref": "uuid:538c874f-36f0-4fe5-9bb1-fc37f0b14f0e",
                "orientation": "+"
              },
              {
                "ref": "uuid:c6d50260-a8fe-4fac-9279-2ac46d621e87",
                "orientation": "+"
              },
              {
                "ref": "uuid:69183851-6fbc-495b-aa59-eba99d14bf68",
                "orientation": "+"
              },
              {
                "ref": "uuid:6bb474bd-c5d6-4366-bc9e-d051dbf72a6e",
                "orientation": "+"
              },
              {
                "ref": "uuid:429a8b49-b82a-4521-9388-6b0b87bccb06",
                "orientation": "-"
              },
              {
                "ref": "uuid:ec0516e9-68b2-4d3d-8ed9-4a59f8e018c8",
                "orientation": "+"
              },
              {
                "ref": "uuid:bda4a01e-afca-41dd-b296-81cd3df3c070",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Lower West"
          }
        },
        {
          "id": "uuid:9d4e9985-3788-4e70-a2ec-a809aba7c7e8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:5381559d-4537-4041-81e1-a0978e7f3c64",
                "orientation": "+"
              },
              {
                "ref": "uuid:a63b48bc-c0d9-440d-9238-c093d3a6c40c",
                "orientation": "+"
              },
              {
                "ref": "uuid:029e7e2d-a650-4510-b861-ee68b46a2fff",
                "orientation": "+"
              },
              {
                "ref": "uuid:64860b38-d1bf-4728-8f0d-6ced9451ce37",
                "orientation": "+"
              },
              {
                "ref": "uuid:4bd327dc-316a-4e1c-9b35-b377652e89d6",
                "orientation": "+"
              },
              {
                "ref": "uuid:fbe45af6-b334-4500-97e3-3c4cd177db90",
                "orientation": "-"
              },
              {
                "ref": "uuid:1713550e-1504-45f6-a00e-7eeb436306eb",
                "orientation": "-"
              },
              {
                "ref": "uuid:6bb474bd-c5d6-4366-bc9e-d051dbf72a6e",
                "orientation": "-"
              },
              {
                "ref": "uuid:69183851-6fbc-495b-aa59-eba99d14bf68",
                "orientation": "-"
              },
              {
                "ref": "uuid:48b5ada1-bbec-4aee-851d-6c1509e9d444",
                "orientation": "-"
              },
              {
                "ref": "uuid:f45d1ba5-ecfe-4b0b-b315-2dc71cfe2b3b",
                "orientation": "-"
              },
              {
                "ref": "uuid:a3e906eb-b583-4af2-a13b-fb6bb2d399a3",
                "orientation": "-"
              },
              {
                "ref": "uuid:f3212f35-ba06-46b1-8822-fdfac0ec4bd1",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Stairwell"
          }
        }
      ]
    }
  ],
  "solids": [
    {
      "id": "uuid:dca59cc5-b097-4aec-8fb3-e7c839e50f09",
      "type": "FeatureCollection",
      "featureType": "Solid",
      "features": [
        {
          "id": "uuid:799663c8-0a92-4852-921c-7a0230e91398",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
           "directed_references": [
              {
                "ref": "uuid:31dcf84a-98c6-48b1-8ba6-14d7a5ff6749",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "name": "Upper East",
            "floors": [
              2
            ],
            "volume": 167.907
          }
        },
        {
          "id": "uuid:8b285c1f-d701-4a8e-ab33-499c70ddffc7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
           "directed_references": [
              {
                "ref": "uuid:f44d98c1-fc4e-45da-a233-6e63e58bd560",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "name": "Upper West",
            "floors": [
              2
            ],
            "volume": 167.904
          }
        },
        {
          "id": "uuid:fd11dcb1-cdf6-43b6-b1de-92c296d21ffc",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
           "directed_references": [
              {
                "ref": "uuid:26bd463c-0433-4510-8ba8-074f5cdd1e64",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "name": "Lower East",
            "floors": [
              1
            ],
            "volume": 263.913
          }
        },
        {
          "id": "uuid:cbda787e-1805-4c86-94b1-de73e1534766",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
           "directed_references": [
              {
                "ref": "uuid:3e5f9429-9bfb-498b-9624-e667f2e7b281",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "name": "Lower West",
            "floors": [
              1
            ],
            "volume": 263.85
          }
        },
        {
          "id": "uuid:113658a0-e13f-4abd-8a2b-f02f215d70f8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
           "directed_references": [
              {
                "ref": "uuid:9d4e9985-3788-4e70-a2ec-a809aba7c7e8",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "name": "Stairwell",
            "floors": [
              1,
              2
            ],
            "volume": 119.806
          }
        }
      ]
    }
  ],
  "supportingDocuments": [],
  "annotations": [],
  "statistics": {
    "point_count": 36,
    "edge_count": 65,
    "ring_count": 35,
    "face_count": 35,
    "shell_count": 5,
    "solid_count": 5
  }
}
```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-3d/context.jsonld",
  "id": "uuid:a4df5a33-fc85-40a0-9fe6-b749d8170a33",
  "name": "DP 12347",
  "description": "Multi-solid test for Solid validation",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision",
  "surveyType": "wa-survey-type:SSA",
  "time": {
    "date": "2026-04-22"
  },
  "horizontalCRS": "epsg:7850",
  "verticalCRS": "epsg:5711",
  "bearingRotation": 0.0,
  "surveyTitle": "4 Unit Up/Down with Stairwell",
  "hasProvenance": [],
  "wasGeneratedBy": {
    "id": "uuid:08fe8ebb-59f4-4489-81e1-b0640caa9056",
    "endedAtTime": "2026-05-27T05:58:56.923046+00:00"
  },
  "features": [],
  "referencedCSDs": [],
  "points": [
    {
      "id": "uuid:9a3a584a-38b4-49ec-84a2-15512d31db5b",
      "type": "FeatureCollection",
      "featureType": "CadastralMark",
      "features": [
        {
          "id": "uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779818303263,
              -31.88703552343606,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:fa551002-6466-46f1-a2f3-f433334447e6",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779818303263,
              -31.88703552343606,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779740952903,
              -31.887107661310704,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779740952903,
              -31.887107661310704,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773398518112,
              -31.88710716621648,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773398518112,
              -31.88710716621648,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:e0d36194-78e8-4255-b6b7-4f59b79544db",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:5228ad62-0730-416f-89b0-5042da216efb",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076290656701,
              -31.887034203228236,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:48b7ec92-e7ff-468f-8dff-d03483468e97",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076290656701,
              -31.887034203228236,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:754fd788-08c8-45b0-a591-e608a27f0948",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00762829203471,
              -31.887106341099198,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00762829203471,
              -31.887106341099198,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769171638001,
              -31.88710683624614,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769171638001,
              -31.88710683624614,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:073f2f24-c85a-455d-9807-c24f75ea50f5",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773380229235,
              -31.88712520753267,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.427,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781835048558,
              -31.887125867514182,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781835048558,
              -31.887125867514182,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:7e2ed802-251e-48b6-b140-013cad070d9f",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773379171989,
              -31.887125207450133,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781931741749,
              -31.887035688404968,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781931741749,
              -31.887035688404968,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:9d786d21-169c-459e-a354-4eeee65bf8a3",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:9ccc8672-7244-42a9-8d65-1b40a637a603",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00760696414898,
              -31.887124217331177,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769152291053,
              -31.887124877479565,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:451e256a-6127-4e18-97f5-644093e9f9df",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769152291053,
              -31.887124877479565,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00760696414898,
              -31.887124217331177,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076079312868,
              -31.887034038227714,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076079312868,
              -31.887034038227714,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-27T05:58:56.914093+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        }
      ]
    }
  ],
  "vectorObservations": [],
  "observedVectors": [],
  "parcels": [],
  "edges": [
    {
      "id": "uuid:d1d9c298-e00e-47e4-94b8-d9aa5ab0b854",
      "type": "FeatureCollection",
      "featureType": "Edge",
      "features": [
        {
          "id": "uuid:cc9ce047-61a1-4bf9-a366-bfc5b43092c2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e",
              "uuid:fa551002-6466-46f1-a2f3-f433334447e6"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:c795e6d9-0f44-4b1c-bc01-686d5e2acaa3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fa551002-6466-46f1-a2f3-f433334447e6",
              "uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:f0aa8d02-1aa3-4f44-be28-d135c94de497",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9",
              "uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:06e882da-e914-4ff8-a279-13c1b16b7646",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d",
              "uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010",
              "uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:d27bfb1b-ffd5-4fb3-9594-6f04ad66aa81",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9",
              "uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:9257083c-e11a-4914-a120-fbb11f0c10c8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1",
              "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:725ebfd6-7c75-44fa-b917-94381bddef5f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96",
              "uuid:fa551002-6466-46f1-a2f3-f433334447e6"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e",
              "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b",
              "uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96",
              "uuid:e0d36194-78e8-4255-b6b7-4f59b79544db"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e0d36194-78e8-4255-b6b7-4f59b79544db",
              "uuid:5228ad62-0730-416f-89b0-5042da216efb"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:21935dcb-8634-4e57-abf4-4585eba35018",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:5228ad62-0730-416f-89b0-5042da216efb",
              "uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b",
              "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:a51db565-6909-4151-ad98-9c7fbeb85c19",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4",
              "uuid:e0d36194-78e8-4255-b6b7-4f59b79544db"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4",
              "uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:aa458878-e72e-454e-9921-bfbf14315787",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c",
              "uuid:5228ad62-0730-416f-89b0-5042da216efb"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010",
              "uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b",
              "uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:1f8b2b5d-416a-4b6b-90da-9c672bc42d2c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8",
              "uuid:48b7ec92-e7ff-468f-8dff-d03483468e97"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:f83f26bd-63dc-4a5e-959c-e90a7640d8a2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:48b7ec92-e7ff-468f-8dff-d03483468e97",
              "uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8",
              "uuid:754fd788-08c8-45b0-a591-e608a27f0948"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:a493ef53-2a0f-42f3-9523-23dea4dc19d6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa",
              "uuid:754fd788-08c8-45b0-a591-e608a27f0948"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:8eb102da-ae40-45c1-9a30-8ca97c69bdf6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa",
              "uuid:48b7ec92-e7ff-468f-8dff-d03483468e97"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:615aed99-8ae9-4857-931c-90bdd126e8c8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:754fd788-08c8-45b0-a591-e608a27f0948",
              "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2",
              "uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:ab68b5c9-0626-4a27-b735-c591dfc47e0a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e",
              "uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e",
              "uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:580818ce-50f0-486c-85c9-91c35ab39509",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6",
              "uuid:e0d36194-78e8-4255-b6b7-4f59b79544db"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:073f2f24-c85a-455d-9807-c24f75ea50f5",
              "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:17fa2c1e-5416-443b-b263-2f47cb514aa6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6",
              "uuid:073f2f24-c85a-455d-9807-c24f75ea50f5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:073f2f24-c85a-455d-9807-c24f75ea50f5",
              "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:e47e1b0a-ecee-4d50-987e-d10ad397f597",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198",
              "uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:0cc9dbeb-9ae4-429b-80d5-a637d54f9bc4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f",
              "uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:d6b33a71-4823-4c26-8ca1-ed929f278377",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f",
              "uuid:7e2ed802-251e-48b6-b140-013cad070d9f"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7e2ed802-251e-48b6-b140-013cad070d9f",
              "uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:7197ee0b-aa79-40dd-a8ec-9d4413777a19",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd",
              "uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:030a717f-c3d7-46c9-8e04-4a90a2de6971",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8",
              "uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:c0a27c02-e38f-4648-b296-3ba0372f0e50",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29",
              "uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:5698e261-6451-4ffe-90dd-05d5270c59a7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8",
              "uuid:9d786d21-169c-459e-a354-4eeee65bf8a3"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9d786d21-169c-459e-a354-4eeee65bf8a3",
              "uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:9e2b2cf4-db16-4c58-9cea-86b593995bdf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e",
              "uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198",
              "uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.998
          }
        },
        {
          "id": "uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca",
              "uuid:9ccc8672-7244-42a9-8d65-1b40a637a603"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9ccc8672-7244-42a9-8d65-1b40a637a603",
              "uuid:9d786d21-169c-459e-a354-4eeee65bf8a3"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:8e931595-7a01-4678-a20e-5607229a0d01",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9ccc8672-7244-42a9-8d65-1b40a637a603",
              "uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:8a34c9fb-e3d6-45d3-817e-93d0c58be464",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c",
              "uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7e2ed802-251e-48b6-b140-013cad070d9f",
              "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 2.0
          }
        },
        {
          "id": "uuid:2413de82-7661-4536-8a05-58c4fadbd5fd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a",
              "uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:28922e7d-7683-40da-916c-241f473ee3bd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4",
              "uuid:451e256a-6127-4e18-97f5-644093e9f9df"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:99e2aa85-d004-4eed-8533-1313133f0809",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:451e256a-6127-4e18-97f5-644093e9f9df",
              "uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:8103a475-c12f-4664-ac95-50afbd4c782d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd",
              "uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:3bc984fd-e2fa-48de-9397-635b28834926",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e",
              "uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:ba83542a-054c-4671-ad1f-412f89783e0f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd",
              "uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:259ec3c3-5480-484c-8b6f-d081695a0a3f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e",
              "uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:e3c87c26-8a6a-4889-923c-d87562d2dde9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9d786d21-169c-459e-a354-4eeee65bf8a3",
              "uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:4a32db28-5b1a-4b4c-8fd4-e94cfca8c03a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3",
              "uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9ccc8672-7244-42a9-8d65-1b40a637a603",
              "uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d",
              "uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.998
          }
        },
        {
          "id": "uuid:e4a49176-d47d-41f7-85c1-7d91bb836286",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d",
              "uuid:073f2f24-c85a-455d-9807-c24f75ea50f5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2",
              "uuid:451e256a-6127-4e18-97f5-644093e9f9df"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 2.0
          }
        },
        {
          "id": "uuid:eb237aee-db71-4faf-8bb2-aeefc8515821",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4",
              "uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:05253350-3d88-4edc-b6cb-759a2234382f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7e2ed802-251e-48b6-b140-013cad070d9f",
              "uuid:451e256a-6127-4e18-97f5-644093e9f9df"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:78d47480-6451-451e-b35c-afbc40f27f93",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2",
              "uuid:2f1070ed-9bae-47f5-a856-7f4db788c010"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:0c7efeba-1fb3-49a1-aafd-3e38affa4a9c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e",
              "uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        }
      ]
    }
  ],
  "rings": [
    {
      "id": "uuid:e473c559-9182-4bde-98af-669971f814d1",
      "type": "FeatureCollection",
      "featureType": "Ring",
      "features": [
        {
          "id": "uuid:bec0f9d8-0d77-46ba-8941-f884943ac3d8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:cc9ce047-61a1-4bf9-a366-bfc5b43092c2",
                "orientation": "+"
              },
              {
                "ref": "uuid:c795e6d9-0f44-4b1c-bc01-686d5e2acaa3",
                "orientation": "+"
              },
              {
                "ref": "uuid:f0aa8d02-1aa3-4f44-be28-d135c94de497",
                "orientation": "+"
              },
              {
                "ref": "uuid:06e882da-e914-4ff8-a279-13c1b16b7646",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.994
          }
        },
        {
          "id": "uuid:6642ea7b-0b5e-474c-95ef-fe5a15be551b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9",
                "orientation": "+"
              },
              {
                "ref": "uuid:f0aa8d02-1aa3-4f44-be28-d135c94de497",
                "orientation": "-"
              },
              {
                "ref": "uuid:d27bfb1b-ffd5-4fb3-9594-6f04ad66aa81",
                "orientation": "+"
              },
              {
                "ref": "uuid:9257083c-e11a-4914-a120-fbb11f0c10c8",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.998
          }
        },
        {
          "id": "uuid:10ebd12b-36b6-4db0-b43e-b742e05540ce",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:725ebfd6-7c75-44fa-b917-94381bddef5f",
                "orientation": "+"
              },
              {
                "ref": "uuid:cc9ce047-61a1-4bf9-a366-bfc5b43092c2",
                "orientation": "-"
              },
              {
                "ref": "uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428",
                "orientation": "+"
              },
              {
                "ref": "uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:f8c1f3d2-aeb6-4b33-b6f8-7d01a5e8ae59",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:d27bfb1b-ffd5-4fb3-9594-6f04ad66aa81",
                "orientation": "-"
              },
              {
                "ref": "uuid:c795e6d9-0f44-4b1c-bc01-686d5e2acaa3",
                "orientation": "-"
              },
              {
                "ref": "uuid:725ebfd6-7c75-44fa-b917-94381bddef5f",
                "orientation": "-"
              },
              {
                "ref": "uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08",
                "orientation": "+"
              },
              {
                "ref": "uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f",
                "orientation": "+"
              },
              {
                "ref": "uuid:21935dcb-8634-4e57-abf4-4585eba35018",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:72d54df4-b018-4897-a96d-7d62cb9d8c4a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64",
                "orientation": "+"
              },
              {
                "ref": "uuid:a51db565-6909-4151-ad98-9c7fbeb85c19",
                "orientation": "+"
              },
              {
                "ref": "uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08",
                "orientation": "-"
              },
              {
                "ref": "uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.998
          }
        },
        {
          "id": "uuid:d7b9eb80-93ca-4ee5-adcb-ab1cfda75d4f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34",
                "orientation": "+"
              },
              {
                "ref": "uuid:aa458878-e72e-454e-9921-bfbf14315787",
                "orientation": "+"
              },
              {
                "ref": "uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f",
                "orientation": "-"
              },
              {
                "ref": "uuid:a51db565-6909-4151-ad98-9c7fbeb85c19",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:79e3d840-7da3-4380-8288-6c2db4ac8b06",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9",
                "orientation": "-"
              },
              {
                "ref": "uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1",
                "orientation": "+"
              },
              {
                "ref": "uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34",
                "orientation": "-"
              },
              {
                "ref": "uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64",
                "orientation": "-"
              },
              {
                "ref": "uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428",
                "orientation": "-"
              },
              {
                "ref": "uuid:06e882da-e914-4ff8-a279-13c1b16b7646",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:7472a7e9-efcf-49a8-a19f-4a14c3e6f86e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1",
                "orientation": "-"
              },
              {
                "ref": "uuid:9257083c-e11a-4914-a120-fbb11f0c10c8",
                "orientation": "-"
              },
              {
                "ref": "uuid:21935dcb-8634-4e57-abf4-4585eba35018",
                "orientation": "-"
              },
              {
                "ref": "uuid:aa458878-e72e-454e-9921-bfbf14315787",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        },
        {
          "id": "uuid:bba09dfa-33c6-4256-8f33-b802aec75bdb",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5",
                "orientation": "+"
              },
              {
                "ref": "uuid:1f8b2b5d-416a-4b6b-90da-9c672bc42d2c",
                "orientation": "+"
              },
              {
                "ref": "uuid:f83f26bd-63dc-4a5e-959c-e90a7640d8a2",
                "orientation": "+"
              },
              {
                "ref": "uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:5b1af58d-21f4-4582-96f8-14d356205491",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:1f8b2b5d-416a-4b6b-90da-9c672bc42d2c",
                "orientation": "-"
              },
              {
                "ref": "uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118",
                "orientation": "+"
              },
              {
                "ref": "uuid:a493ef53-2a0f-42f3-9523-23dea4dc19d6",
                "orientation": "-"
              },
              {
                "ref": "uuid:8eb102da-ae40-45c1-9a30-8ca97c69bdf6",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.994
          }
        },
        {
          "id": "uuid:8c5381e4-64ab-4b9d-bdd5-aea3de220330",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:a493ef53-2a0f-42f3-9523-23dea4dc19d6",
                "orientation": "+"
              },
              {
                "ref": "uuid:615aed99-8ae9-4857-931c-90bdd126e8c8",
                "orientation": "+"
              },
              {
                "ref": "uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16",
                "orientation": "+"
              },
              {
                "ref": "uuid:ab68b5c9-0626-4a27-b735-c591dfc47e0a",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.998
          }
        },
        {
          "id": "uuid:73155e38-87b0-4ded-9af7-dd354d36a728",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f83f26bd-63dc-4a5e-959c-e90a7640d8a2",
                "orientation": "-"
              },
              {
                "ref": "uuid:8eb102da-ae40-45c1-9a30-8ca97c69bdf6",
                "orientation": "-"
              },
              {
                "ref": "uuid:ab68b5c9-0626-4a27-b735-c591dfc47e0a",
                "orientation": "-"
              },
              {
                "ref": "uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018",
                "orientation": "+"
              },
              {
                "ref": "uuid:580818ce-50f0-486c-85c9-91c35ab39509",
                "orientation": "+"
              },
              {
                "ref": "uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:ce452f84-97f5-43ad-83f8-1758fba42a49",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2",
                "orientation": "+"
              },
              {
                "ref": "uuid:a51db565-6909-4151-ad98-9c7fbeb85c19",
                "orientation": "+"
              },
              {
                "ref": "uuid:580818ce-50f0-486c-85c9-91c35ab39509",
                "orientation": "-"
              },
              {
                "ref": "uuid:17fa2c1e-5416-443b-b263-2f47cb514aa6",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:46d1879a-0f3f-42ef-b68d-d813f684e3f9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79",
                "orientation": "+"
              },
              {
                "ref": "uuid:615aed99-8ae9-4857-931c-90bdd126e8c8",
                "orientation": "-"
              },
              {
                "ref": "uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118",
                "orientation": "-"
              },
              {
                "ref": "uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5",
                "orientation": "-"
              },
              {
                "ref": "uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64",
                "orientation": "+"
              },
              {
                "ref": "uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:98685c3a-fc3b-4490-b99f-5a4f9ef3aae4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79",
                "orientation": "-"
              },
              {
                "ref": "uuid:17fa2c1e-5416-443b-b263-2f47cb514aa6",
                "orientation": "-"
              },
              {
                "ref": "uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018",
                "orientation": "-"
              },
              {
                "ref": "uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        },
        {
          "id": "uuid:8efc4bcc-0265-4aba-82f9-4e9c5f818018",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e47e1b0a-ecee-4d50-987e-d10ad397f597",
                "orientation": "+"
              },
              {
                "ref": "uuid:0cc9dbeb-9ae4-429b-80d5-a637d54f9bc4",
                "orientation": "-"
              },
              {
                "ref": "uuid:d6b33a71-4823-4c26-8ca1-ed929f278377",
                "orientation": "+"
              },
              {
                "ref": "uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.995
          }
        },
        {
          "id": "uuid:0bdb8d8a-3d53-4a97-bee6-56bf509e6b69",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:7197ee0b-aa79-40dd-a8ec-9d4413777a19",
                "orientation": "+"
              },
              {
                "ref": "uuid:030a717f-c3d7-46c9-8e04-4a90a2de6971",
                "orientation": "+"
              },
              {
                "ref": "uuid:c0a27c02-e38f-4648-b296-3ba0372f0e50",
                "orientation": "+"
              },
              {
                "ref": "uuid:0cc9dbeb-9ae4-429b-80d5-a637d54f9bc4",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:2d2a332b-7633-41ee-8f53-712fc6f2b877",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:5698e261-6451-4ffe-90dd-05d5270c59a7",
                "orientation": "+"
              },
              {
                "ref": "uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f",
                "orientation": "+"
              },
              {
                "ref": "uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428",
                "orientation": "-"
              },
              {
                "ref": "uuid:9e2b2cf4-db16-4c58-9cea-86b593995bdf",
                "orientation": "+"
              },
              {
                "ref": "uuid:030a717f-c3d7-46c9-8e04-4a90a2de6971",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:424281c5-646a-48c3-b0f2-ac703d3a8d10",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e47e1b0a-ecee-4d50-987e-d10ad397f597",
                "orientation": "-"
              },
              {
                "ref": "uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29",
                "orientation": "+"
              },
              {
                "ref": "uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030",
                "orientation": "+"
              },
              {
                "ref": "uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a",
                "orientation": "+"
              },
              {
                "ref": "uuid:5698e261-6451-4ffe-90dd-05d5270c59a7",
                "orientation": "-"
              },
              {
                "ref": "uuid:7197ee0b-aa79-40dd-a8ec-9d4413777a19",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 39.987
          }
        },
        {
          "id": "uuid:d4e4f6d3-3603-4da5-9d20-661ff9a38015",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:8e931595-7a01-4678-a20e-5607229a0d01",
                "orientation": "+"
              },
              {
                "ref": "uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64",
                "orientation": "-"
              },
              {
                "ref": "uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f",
                "orientation": "-"
              },
              {
                "ref": "uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.998
          }
        },
        {
          "id": "uuid:adb6be70-c29a-4dcc-9e4b-47970d9930dd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:8a34c9fb-e3d6-45d3-817e-93d0c58be464",
                "orientation": "+"
              },
              {
                "ref": "uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29",
                "orientation": "-"
              },
              {
                "ref": "uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c",
                "orientation": "-"
              },
              {
                "ref": "uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013",
                "orientation": "+"
              },
              {
                "ref": "uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.996
          }
        },
        {
          "id": "uuid:3ff8d8c4-90fe-4782-9717-1e3f4110f5a0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:8a34c9fb-e3d6-45d3-817e-93d0c58be464",
                "orientation": "-"
              },
              {
                "ref": "uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34",
                "orientation": "-"
              },
              {
                "ref": "uuid:8e931595-7a01-4678-a20e-5607229a0d01",
                "orientation": "-"
              },
              {
                "ref": "uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:2402e110-526c-49d6-82f2-5ecf689f64d3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:9e2b2cf4-db16-4c58-9cea-86b593995bdf",
                "orientation": "-"
              },
              {
                "ref": "uuid:06e882da-e914-4ff8-a279-13c1b16b7646",
                "orientation": "-"
              },
              {
                "ref": "uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9",
                "orientation": "-"
              },
              {
                "ref": "uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013",
                "orientation": "-"
              },
              {
                "ref": "uuid:d6b33a71-4823-4c26-8ca1-ed929f278377",
                "orientation": "-"
              },
              {
                "ref": "uuid:c0a27c02-e38f-4648-b296-3ba0372f0e50",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 35.99
          }
        },
        {
          "id": "uuid:64496114-d8c3-4643-9975-4ae0bb1af186",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:2413de82-7661-4536-8a05-58c4fadbd5fd",
                "orientation": "+"
              },
              {
                "ref": "uuid:28922e7d-7683-40da-916c-241f473ee3bd",
                "orientation": "+"
              },
              {
                "ref": "uuid:99e2aa85-d004-4eed-8533-1313133f0809",
                "orientation": "+"
              },
              {
                "ref": "uuid:8103a475-c12f-4664-ac95-50afbd4c782d",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:79e3d1de-56bc-47de-a18b-d29da6100eda",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:3bc984fd-e2fa-48de-9397-635b28834926",
                "orientation": "+"
              },
              {
                "ref": "uuid:8103a475-c12f-4664-ac95-50afbd4c782d",
                "orientation": "-"
              },
              {
                "ref": "uuid:ba83542a-054c-4671-ad1f-412f89783e0f",
                "orientation": "+"
              },
              {
                "ref": "uuid:259ec3c3-5480-484c-8b6f-d081695a0a3f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:815b8458-d756-45cc-8385-00314271e297",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e3c87c26-8a6a-4889-923c-d87562d2dde9",
                "orientation": "+"
              },
              {
                "ref": "uuid:259ec3c3-5480-484c-8b6f-d081695a0a3f",
                "orientation": "+"
              },
              {
                "ref": "uuid:4a32db28-5b1a-4b4c-8fd4-e94cfca8c03a",
                "orientation": "+"
              },
              {
                "ref": "uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5",
                "orientation": "-"
              },
              {
                "ref": "uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:1a7575a5-e039-4059-9fa8-b7e960c50c64",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e3c87c26-8a6a-4889-923c-d87562d2dde9",
                "orientation": "-"
              },
              {
                "ref": "uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a",
                "orientation": "-"
              },
              {
                "ref": "uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4",
                "orientation": "+"
              },
              {
                "ref": "uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958",
                "orientation": "+"
              },
              {
                "ref": "uuid:2413de82-7661-4536-8a05-58c4fadbd5fd",
                "orientation": "-"
              },
              {
                "ref": "uuid:3bc984fd-e2fa-48de-9397-635b28834926",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 39.988
          }
        },
        {
          "id": "uuid:92f996ff-4259-4d40-96ec-65de71faa800",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:e4a49176-d47d-41f7-85c1-7d91bb836286",
                "orientation": "+"
              },
              {
                "ref": "uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79",
                "orientation": "+"
              },
              {
                "ref": "uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52",
                "orientation": "+"
              },
              {
                "ref": "uuid:28922e7d-7683-40da-916c-241f473ee3bd",
                "orientation": "-"
              },
              {
                "ref": "uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 17.996
          }
        },
        {
          "id": "uuid:441f6a73-ea02-44a7-a04d-4fec5659d529",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:8e931595-7a01-4678-a20e-5607229a0d01",
                "orientation": "+"
              },
              {
                "ref": "uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2",
                "orientation": "-"
              },
              {
                "ref": "uuid:e4a49176-d47d-41f7-85c1-7d91bb836286",
                "orientation": "-"
              },
              {
                "ref": "uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:8ca4710e-2abd-4152-912d-55c25793b4b7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52",
                "orientation": "-"
              },
              {
                "ref": "uuid:615aed99-8ae9-4857-931c-90bdd126e8c8",
                "orientation": "-"
              },
              {
                "ref": "uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118",
                "orientation": "-"
              },
              {
                "ref": "uuid:4a32db28-5b1a-4b4c-8fd4-e94cfca8c03a",
                "orientation": "-"
              },
              {
                "ref": "uuid:ba83542a-054c-4671-ad1f-412f89783e0f",
                "orientation": "-"
              },
              {
                "ref": "uuid:99e2aa85-d004-4eed-8533-1313133f0809",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 35.99
          }
        },
        {
          "id": "uuid:29f3aa93-c4e5-4961-9fd5-c2261a0b9f3b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:eb237aee-db71-4faf-8bb2-aeefc8515821",
                "orientation": "-"
              },
              {
                "ref": "uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958",
                "orientation": "-"
              },
              {
                "ref": "uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4",
                "orientation": "-"
              },
              {
                "ref": "uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030",
                "orientation": "-"
              },
              {
                "ref": "uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 19.993
          }
        },
        {
          "id": "uuid:bac4ae02-1a53-4849-9e46-b3c0d67925b1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:05253350-3d88-4edc-b6cb-759a2234382f",
                "orientation": "+"
              },
              {
                "ref": "uuid:28922e7d-7683-40da-916c-241f473ee3bd",
                "orientation": "-"
              },
              {
                "ref": "uuid:eb237aee-db71-4faf-8bb2-aeefc8515821",
                "orientation": "+"
              },
              {
                "ref": "uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.997
          }
        },
        {
          "id": "uuid:6a58d678-e9cf-4466-b01f-76e8e7f1f4a4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:05253350-3d88-4edc-b6cb-759a2234382f",
                "orientation": "-"
              },
              {
                "ref": "uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013",
                "orientation": "+"
              },
              {
                "ref": "uuid:78d47480-6451-451e-b35c-afbc40f27f93",
                "orientation": "-"
              },
              {
                "ref": "uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 11.996
          }
        },
        {
          "id": "uuid:49b309d9-6d39-4c44-9a9e-ac2e73c3b58e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:0c7efeba-1fb3-49a1-aafd-3e38affa4a9c",
                "orientation": "+"
              },
              {
                "ref": "uuid:21935dcb-8634-4e57-abf4-4585eba35018",
                "orientation": "-"
              },
              {
                "ref": "uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f",
                "orientation": "-"
              },
              {
                "ref": "uuid:580818ce-50f0-486c-85c9-91c35ab39509",
                "orientation": "-"
              },
              {
                "ref": "uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 15.992
          }
        },
        {
          "id": "uuid:b17a9121-2cf2-427f-871d-78266deacddf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:78d47480-6451-451e-b35c-afbc40f27f93",
                "orientation": "+"
              },
              {
                "ref": "uuid:9257083c-e11a-4914-a120-fbb11f0c10c8",
                "orientation": "-"
              },
              {
                "ref": "uuid:0c7efeba-1fb3-49a1-aafd-3e38affa4a9c",
                "orientation": "-"
              },
              {
                "ref": "uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        }
      ]
    }
  ],
  "faces": [
    {
      "id": "uuid:cc0799d5-a994-464b-8200-35566358138f",
      "type": "FeatureCollection",
      "featureType": "Face",
      "features": [
        {
          "id": "uuid:649a326e-bb1e-4492-943a-39aa35806c64",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:bec0f9d8-0d77-46ba-8941-f884943ac3d8",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999937695,
              2.1252341604305102e-06,
              2.818552790910351e-06
            ],
            "area": 23.991,
            "description": "East-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:4fe850d8-d729-4851-b7d9-0f9e7ed39468",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:6642ea7b-0b5e-474c-95ef-fe5a15be551b",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1347501594712472e-06,
              -0.9999999999976475,
              -3.8463119361166447e-07
            ],
            "area": 17.997,
            "description": "South-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:0523e3be-6777-40f9-9e14-523e128647c0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:10ebd12b-36b6-4db0-b43e-b742e05540ce",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1160627370878684e-06,
              0.9999999999964104,
              1.6436244147846745e-06
            ],
            "area": 23.994,
            "description": "North-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:4def3698-95e1-486f-9588-a69a73640e5c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:f8c1f3d2-aeb6-4b33-b6f8-7d01a5e8ae59",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 55.969,
            "description": "Top boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:fa7823a2-8ed7-43f0-9912-e7ade12c966a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:72d54df4-b018-4897-a96d-7d62cb9d8c4a",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999965267,
              -2.120773346758996e-06,
              -1.5650321292142593e-06
            ],
            "area": 11.997,
            "description": "West-facing boundary face, [Upper East, Upper West]"
          }
        },
        {
          "id": "uuid:f45d1ba5-ecfe-4b0b-b315-2dc71cfe2b3b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:d7b9eb80-93ca-4ee5-adcb-ab1cfda75d4f",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.124969241213484e-06,
              -0.9999999999972277,
              -1.0145170209822307e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Upper East, Stairwell]"
          }
        },
        {
          "id": "uuid:d0ddc512-0c81-43bb-a000-bf5017ff64a7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:79e3d840-7da3-4380-8288-6c2db4ac8b06",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.0,
              -0.0,
              -1.0
            ],
            "area": 55.969,
            "description": "Bottom boundary face, [Upper East, Lower East]"
          }
        },
        {
          "id": "uuid:fbe45af6-b334-4500-97e3-3c4cd177db90",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:7472a7e9-efcf-49a8-a19f-4a14c3e6f86e",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999959679,
              -2.1300537012889316e-06,
              -1.8780230806249394e-06
            ],
            "area": 11.994,
            "description": "West-facing boundary face, [Upper East, Stairwell]"
          }
        },
        {
          "id": "uuid:d8aca1d0-8d06-4520-9437-7479640802df",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:bba09dfa-33c6-4256-8f33-b802aec75bdb",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1160024131438693e-06,
              0.9999999999964108,
              1.6434718457076753e-06
            ],
            "area": 23.994,
            "description": "North-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:f4b518ed-e4d2-48cc-b2b9-997df7a49c29",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:5b1af58d-21f4-4582-96f8-14d356205491",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999976931,
              -2.1251782237133477e-06,
              -3.124220601837041e-07
            ],
            "area": 23.991,
            "description": "West-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:83e6f887-a532-473f-8f09-536ef1943f33",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:8c5381e4-64ab-4b9d-bdd5-aea3de220330",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1344389761872487e-06,
              -0.9999999999976482,
              -3.846345366682647e-07
            ],
            "area": 17.997,
            "description": "South-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:16b0e4ac-22b3-40f5-8510-7fefb1b1cc06",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:73155e38-87b0-4ded-9af7-dd354d36a728",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 55.968,
            "description": "Top boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:f3212f35-ba06-46b1-8822-fdfac0ec4bd1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:ce452f84-97f5-43ad-83f8-1758fba42a49",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.125434709040482e-06,
              -0.9999999999972267,
              -1.01451768633823e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Upper West, Stairwell]"
          }
        },
        {
          "id": "uuid:bda4a01e-afca-41dd-b296-81cd3df3c070",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:46d1879a-0f3f-42ef-b68d-d813f684e3f9",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 55.968,
            "description": "Bottom boundary face, [Upper West, Lower West]"
          }
        },
        {
          "id": "uuid:1713550e-1504-45f6-a00e-7eeb436306eb",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:98685c3a-fc3b-4490-b99f-5a4f9ef3aae4",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999969489,
              2.129537331624891e-06,
              1.251893000853936e-06
            ],
            "area": 11.994,
            "description": "East-facing boundary face, [Upper West, Stairwell]"
          }
        },
        {
          "id": "uuid:3f40fd91-3d85-404b-82cd-fd4bb7228ca5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:8efc4bcc-0265-4aba-82f9-4e9c5f818018",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1354470739553984e-06,
              -0.9999999999977187,
              -4.90443042600462e-08
            ],
            "area": 23.992,
            "description": "South-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:0e50d98b-eed1-41b7-aec0-35970c4c03df",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:0bdb8d8a-3d53-4a97-bee6-56bf509e6b69",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.999999999992833,
              2.1277472132566447e-06,
              3.1315738370324766e-06
            ],
            "area": 29.991,
            "description": "East-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:1d373111-f4b1-4627-92ab-14f0bbeb882b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:2d2a332b-7633-41ee-8f53-712fc6f2b877",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.112030056897979e-06,
              0.9999999999964635,
              1.616305591688749e-06
            ],
            "area": 29.991,
            "description": "North-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:6caff784-d847-4916-9360-03ab48f3a5df",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:424281c5-646a-48c3-b0f2-ac703d3a8d10",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 87.948,
            "description": "Bottom boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:429a8b49-b82a-4521-9388-6b0b87bccb06",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:d4e4f6d3-3603-4da5-9d20-661ff9a38015",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999965249,
              -2.121172640933992e-06,
              -1.565526879734256e-06
            ],
            "area": 11.997,
            "description": "West-facing boundary face, [Lower East, Lower West]"
          }
        },
        {
          "id": "uuid:48b5ada1-bbec-4aee-851d-6c1509e9d444",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:adb6be70-c29a-4dcc-9e4b-47970d9930dd",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999959602,
              -2.131841094675915e-06,
              -1.8801796836009255e-06
            ],
            "area": 17.994,
            "description": "West-facing boundary face, [Lower East, Stairwell]"
          }
        },
        {
          "id": "uuid:a3e906eb-b583-4af2-a13b-fb6bb2d399a3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:3ff8d8c4-90fe-4782-9717-1e3f4110f5a0",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.122639235232521e-06,
              -0.9999999999972454,
              -1.001788957290246e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Lower East, Stairwell]"
          }
        },
        {
          "id": "uuid:90f77d40-3e87-4627-993d-e0a9efef52d6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:2402e110-526c-49d6-82f2-5ecf689f64d3",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 31.982,
            "description": "Top boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:d9c6f295-4449-4e1d-bb3a-0c4ddf57e8f0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:64496114-d8c3-4643-9975-4ae0bb1af186",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1381834939563843e-06,
              -0.9999999999977119,
              -6.782998719558046e-08
            ],
            "area": 23.994,
            "description": "South-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:47967a8e-ab17-4db0-bbfa-7a6d797e6136",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:79e3d1de-56bc-47de-a18b-d29da6100eda",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999977369,
              -2.1275050385904402e-06,
              5.802619591563473e-10
            ],
            "area": 29.991,
            "description": "West-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:538c874f-36f0-4fe5-9bb1-fc37f0b14f0e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:815b8458-d756-45cc-8385-00314271e297",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1147242879319153e-06,
              0.9999999999964325,
              1.6319025594187058e-06
            ],
            "area": 29.991,
            "description": "North-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:c6d50260-a8fe-4fac-9279-2ac46d621e87",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:1a7575a5-e039-4059-9fa8-b7e960c50c64",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 87.95,
            "description": "Bottom boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:69183851-6fbc-495b-aa59-eba99d14bf68",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:92f996ff-4259-4d40-96ec-65de71faa800",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999969424,
              2.131971756477877e-06,
              1.2529856403859282e-06
            ],
            "area": 17.994,
            "description": "East-facing boundary face, [Lower West, Stairwell]"
          }
        },
        {
          "id": "uuid:6bb474bd-c5d6-4366-bc9e-d051dbf72a6e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:441f6a73-ea02-44a7-a04d-4fec5659d529",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1233376085545115e-06,
              -0.999999999997241,
              -1.004738808137242e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Lower West, Stairwell]"
          }
        },
        {
          "id": "uuid:ec0516e9-68b2-4d3d-8ed9-4a59f8e018c8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:8ca4710e-2abd-4152-912d-55c25793b4b7",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 31.982,
            "description": "Top boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:5381559d-4537-4041-81e1-a0978e7f3c64",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:29f3aa93-c4e5-4961-9fd5-c2261a0b9f3b",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              1.5695020611744682e-06,
              4.6264846992854333e-07,
              -0.9999999999986614
            ],
            "area": 23.983,
            "description": "Bottom boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:a63b48bc-c0d9-440d-9238-c093d3a6c40c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:bac4ae02-1a53-4849-9e46-b3c0d67925b1",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1368444112603913e-06,
              -0.9999999999977152,
              -6.208482429009232e-08
            ],
            "area": 11.996,
            "description": "South-facing boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:029e7e2d-a650-4510-b861-ee68b46a2fff",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:6a58d678-e9cf-4466-b01f-76e8e7f1f4a4",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -1.5667086656316248e-06,
              -1.5697701705156244e-07,
              0.9999999999987605
            ],
            "area": 7.996,
            "description": "Top boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:64860b38-d1bf-4728-8f0d-6ced9451ce37",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:49b309d9-6d39-4c44-9a9e-ac2e73c3b58e",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -1.566941334935351e-06,
              -6.103726788333472e-07,
              0.999999999998586
            ],
            "area": 15.983,
            "description": "Top boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:4bd327dc-316a-4e1c-9b35-b377652e89d6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:b17a9121-2cf2-427f-871d-78266deacddf",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1346333832552482e-06,
              -0.9999999999976478,
              -3.8447764578726455e-07
            ],
            "area": 11.994,
            "description": "South-facing boundary face, [Stairwell]"
          }
        }
      ]
    }
  ],
  "shells": [
    {
      "id": "uuid:c6ad4aa1-ed7a-4636-b80a-df7a673f74de",
      "type": "FeatureCollection",
      "featureType": "Shell",
      "features": [
        {
          "id": "uuid:31dcf84a-98c6-48b1-8ba6-14d7a5ff6749",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:649a326e-bb1e-4492-943a-39aa35806c64",
                "orientation": "+"
              },
              {
                "ref": "uuid:4fe850d8-d729-4851-b7d9-0f9e7ed39468",
                "orientation": "+"
              },
              {
                "ref": "uuid:0523e3be-6777-40f9-9e14-523e128647c0",
                "orientation": "+"
              },
              {
                "ref": "uuid:4def3698-95e1-486f-9588-a69a73640e5c",
                "orientation": "+"
              },
              {
                "ref": "uuid:fa7823a2-8ed7-43f0-9912-e7ade12c966a",
                "orientation": "+"
              },
              {
                "ref": "uuid:f45d1ba5-ecfe-4b0b-b315-2dc71cfe2b3b",
                "orientation": "+"
              },
              {
                "ref": "uuid:d0ddc512-0c81-43bb-a000-bf5017ff64a7",
                "orientation": "+"
              },
              {
                "ref": "uuid:fbe45af6-b334-4500-97e3-3c4cd177db90",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Upper East"
          }
        },
        {
          "id": "uuid:f44d98c1-fc4e-45da-a233-6e63e58bd560",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:d8aca1d0-8d06-4520-9437-7479640802df",
                "orientation": "+"
              },
              {
                "ref": "uuid:f4b518ed-e4d2-48cc-b2b9-997df7a49c29",
                "orientation": "+"
              },
              {
                "ref": "uuid:83e6f887-a532-473f-8f09-536ef1943f33",
                "orientation": "+"
              },
              {
                "ref": "uuid:16b0e4ac-22b3-40f5-8510-7fefb1b1cc06",
                "orientation": "+"
              },
              {
                "ref": "uuid:fa7823a2-8ed7-43f0-9912-e7ade12c966a",
                "orientation": "-"
              },
              {
                "ref": "uuid:f3212f35-ba06-46b1-8822-fdfac0ec4bd1",
                "orientation": "+"
              },
              {
                "ref": "uuid:bda4a01e-afca-41dd-b296-81cd3df3c070",
                "orientation": "+"
              },
              {
                "ref": "uuid:1713550e-1504-45f6-a00e-7eeb436306eb",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Upper West"
          }
        },
        {
          "id": "uuid:26bd463c-0433-4510-8ba8-074f5cdd1e64",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:3f40fd91-3d85-404b-82cd-fd4bb7228ca5",
                "orientation": "+"
              },
              {
                "ref": "uuid:0e50d98b-eed1-41b7-aec0-35970c4c03df",
                "orientation": "+"
              },
              {
                "ref": "uuid:1d373111-f4b1-4627-92ab-14f0bbeb882b",
                "orientation": "+"
              },
              {
                "ref": "uuid:6caff784-d847-4916-9360-03ab48f3a5df",
                "orientation": "+"
              },
              {
                "ref": "uuid:429a8b49-b82a-4521-9388-6b0b87bccb06",
                "orientation": "+"
              },
              {
                "ref": "uuid:48b5ada1-bbec-4aee-851d-6c1509e9d444",
                "orientation": "+"
              },
              {
                "ref": "uuid:a3e906eb-b583-4af2-a13b-fb6bb2d399a3",
                "orientation": "+"
              },
              {
                "ref": "uuid:d0ddc512-0c81-43bb-a000-bf5017ff64a7",
                "orientation": "-"
              },
              {
                "ref": "uuid:90f77d40-3e87-4627-993d-e0a9efef52d6",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Lower East"
          }
        },
        {
          "id": "uuid:3e5f9429-9bfb-498b-9624-e667f2e7b281",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:d9c6f295-4449-4e1d-bb3a-0c4ddf57e8f0",
                "orientation": "+"
              },
              {
                "ref": "uuid:47967a8e-ab17-4db0-bbfa-7a6d797e6136",
                "orientation": "+"
              },
              {
                "ref": "uuid:538c874f-36f0-4fe5-9bb1-fc37f0b14f0e",
                "orientation": "+"
              },
              {
                "ref": "uuid:c6d50260-a8fe-4fac-9279-2ac46d621e87",
                "orientation": "+"
              },
              {
                "ref": "uuid:69183851-6fbc-495b-aa59-eba99d14bf68",
                "orientation": "+"
              },
              {
                "ref": "uuid:6bb474bd-c5d6-4366-bc9e-d051dbf72a6e",
                "orientation": "+"
              },
              {
                "ref": "uuid:429a8b49-b82a-4521-9388-6b0b87bccb06",
                "orientation": "-"
              },
              {
                "ref": "uuid:ec0516e9-68b2-4d3d-8ed9-4a59f8e018c8",
                "orientation": "+"
              },
              {
                "ref": "uuid:bda4a01e-afca-41dd-b296-81cd3df3c070",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Lower West"
          }
        },
        {
          "id": "uuid:9d4e9985-3788-4e70-a2ec-a809aba7c7e8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:5381559d-4537-4041-81e1-a0978e7f3c64",
                "orientation": "+"
              },
              {
                "ref": "uuid:a63b48bc-c0d9-440d-9238-c093d3a6c40c",
                "orientation": "+"
              },
              {
                "ref": "uuid:029e7e2d-a650-4510-b861-ee68b46a2fff",
                "orientation": "+"
              },
              {
                "ref": "uuid:64860b38-d1bf-4728-8f0d-6ced9451ce37",
                "orientation": "+"
              },
              {
                "ref": "uuid:4bd327dc-316a-4e1c-9b35-b377652e89d6",
                "orientation": "+"
              },
              {
                "ref": "uuid:fbe45af6-b334-4500-97e3-3c4cd177db90",
                "orientation": "-"
              },
              {
                "ref": "uuid:1713550e-1504-45f6-a00e-7eeb436306eb",
                "orientation": "-"
              },
              {
                "ref": "uuid:6bb474bd-c5d6-4366-bc9e-d051dbf72a6e",
                "orientation": "-"
              },
              {
                "ref": "uuid:69183851-6fbc-495b-aa59-eba99d14bf68",
                "orientation": "-"
              },
              {
                "ref": "uuid:48b5ada1-bbec-4aee-851d-6c1509e9d444",
                "orientation": "-"
              },
              {
                "ref": "uuid:f45d1ba5-ecfe-4b0b-b315-2dc71cfe2b3b",
                "orientation": "-"
              },
              {
                "ref": "uuid:a3e906eb-b583-4af2-a13b-fb6bb2d399a3",
                "orientation": "-"
              },
              {
                "ref": "uuid:f3212f35-ba06-46b1-8822-fdfac0ec4bd1",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Stairwell"
          }
        }
      ]
    }
  ],
  "solids": [
    {
      "id": "uuid:dca59cc5-b097-4aec-8fb3-e7c839e50f09",
      "type": "FeatureCollection",
      "featureType": "Solid",
      "features": [
        {
          "id": "uuid:799663c8-0a92-4852-921c-7a0230e91398",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:31dcf84a-98c6-48b1-8ba6-14d7a5ff6749",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "name": "Upper East",
            "floors": [
              2
            ],
            "volume": 167.907
          }
        },
        {
          "id": "uuid:8b285c1f-d701-4a8e-ab33-499c70ddffc7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:f44d98c1-fc4e-45da-a233-6e63e58bd560",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "name": "Upper West",
            "floors": [
              2
            ],
            "volume": 167.904
          }
        },
        {
          "id": "uuid:fd11dcb1-cdf6-43b6-b1de-92c296d21ffc",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:26bd463c-0433-4510-8ba8-074f5cdd1e64",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "name": "Lower East",
            "floors": [
              1
            ],
            "volume": 263.913
          }
        },
        {
          "id": "uuid:cbda787e-1805-4c86-94b1-de73e1534766",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:3e5f9429-9bfb-498b-9624-e667f2e7b281",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "name": "Lower West",
            "floors": [
              1
            ],
            "volume": 263.85
          }
        },
        {
          "id": "uuid:113658a0-e13f-4abd-8a2b-f02f215d70f8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:9d4e9985-3788-4e70-a2ec-a809aba7c7e8",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "name": "Stairwell",
            "floors": [
              1,
              2
            ],
            "volume": 119.806
          }
        }
      ]
    }
  ],
  "supportingDocuments": [],
  "annotations": [],
  "statistics": {
    "point_count": 36,
    "edge_count": 65,
    "ring_count": 35,
    "face_count": 35,
    "shell_count": 5,
    "solid_count": 5
  }
}
```

#### ttl
```ttl
@prefix container: <https://linked.data.gov.au/def/csdm/container/> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix epsg: <http://www.opengis.net/def/crs/EPSG/0/> .
@prefix geojson: <https://purl.org/geojson/vocab#> .
@prefix ns1: <https://linked.data.gov.au/def/csdm/commonpatterns/> .
@prefix owlTime: <http://www.w3.org/2006/time#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix surv: <https://linked.data.gov.au/def/csdm/surveyfeatures/> .
@prefix topo: <https://purl.org/geojson/topo#> .
@prefix uuid: <urn:uuid:> .
@prefix wa-monument-condition: <https://linked.data.gov.au/def/csdm/wa-monument-condition/> .
@prefix wa-monument-form: <https://linked.data.gov.au/def/csdm/wa-monument-form/> .
@prefix wa-monument-state: <https://linked.data.gov.au/def/csdm/wa-monument-state/> .
@prefix wa-survey-purpose: <https://linked.data.gov.au/def/csdm/wa-survey-purpose/> .
@prefix wa-survey-type: <https://linked.data.gov.au/def/csdm/wa-survey-type/> .
@prefix wa-surveypoint-purpose: <https://linked.data.gov.au/def/csdm/wa-surveypoint-purpose/> .
@prefix wa-vector-purpose: <https://linked.data.gov.au/def/csdm/wa-vector-purpose/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

uuid:a4df5a33-fc85-40a0-9fe6-b749d8170a33 a geojson:FeatureCollection ;
    rdfs:label "DP 12347" ;
    dct:time [ owlTime:hasTime "2026-04-22"^^xsd:date ] ;
    container:bearingRotation 0e+00 ;
    container:horizontalCRS epsg:7850 ;
    container:points uuid:9a3a584a-38b4-49ec-84a2-15512d31db5b ;
    container:purpose wa-survey-purpose:subdivision ;
    container:surveyType wa-survey-type:SSA ;
    topo:edges uuid:d1d9c298-e00e-47e4-94b8-d9aa5ab0b854 ;
    topo:faces ( uuid:cc0799d5-a994-464b-8200-35566358138f ) ;
    topo:rings ( uuid:e473c559-9182-4bde-98af-669971f814d1 ) ;
    topo:shells ( uuid:c6ad4aa1-ed7a-4636-b80a-df7a673f74de ) ;
    geojson:collectionFeatureType "CSD" .

uuid:26bd463c-0433-4510-8ba8-074f5cdd1e64 a geojson:Feature ;
    geojson:topology [ a topo:Shell ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:3f40fd91-3d85-404b-82cd-fd4bb7228ca5 ] [ topo:orientation "+" ;
                        topo:ref uuid:0e50d98b-eed1-41b7-aec0-35970c4c03df ] [ topo:orientation "+" ;
                        topo:ref uuid:1d373111-f4b1-4627-92ab-14f0bbeb882b ] [ topo:orientation "+" ;
                        topo:ref uuid:6caff784-d847-4916-9360-03ab48f3a5df ] [ topo:orientation "+" ;
                        topo:ref uuid:429a8b49-b82a-4521-9388-6b0b87bccb06 ] [ topo:orientation "+" ;
                        topo:ref uuid:48b5ada1-bbec-4aee-851d-6c1509e9d444 ] [ topo:orientation "+" ;
                        topo:ref uuid:a3e906eb-b583-4af2-a13b-fb6bb2d399a3 ] [ topo:orientation "-" ;
                        topo:ref uuid:d0ddc512-0c81-43bb-a000-bf5017ff64a7 ] [ topo:orientation "+" ;
                        topo:ref uuid:90f77d40-3e87-4627-993d-e0a9efef52d6 ] ) ] .

uuid:31dcf84a-98c6-48b1-8ba6-14d7a5ff6749 a geojson:Feature ;
    geojson:topology [ a topo:Shell ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:649a326e-bb1e-4492-943a-39aa35806c64 ] [ topo:orientation "+" ;
                        topo:ref uuid:4fe850d8-d729-4851-b7d9-0f9e7ed39468 ] [ topo:orientation "+" ;
                        topo:ref uuid:0523e3be-6777-40f9-9e14-523e128647c0 ] [ topo:orientation "+" ;
                        topo:ref uuid:4def3698-95e1-486f-9588-a69a73640e5c ] [ topo:orientation "+" ;
                        topo:ref uuid:fa7823a2-8ed7-43f0-9912-e7ade12c966a ] [ topo:orientation "+" ;
                        topo:ref uuid:f45d1ba5-ecfe-4b0b-b315-2dc71cfe2b3b ] [ topo:orientation "+" ;
                        topo:ref uuid:d0ddc512-0c81-43bb-a000-bf5017ff64a7 ] [ topo:orientation "+" ;
                        topo:ref uuid:fbe45af6-b334-4500-97e3-3c4cd177db90 ] ) ] .

uuid:3e5f9429-9bfb-498b-9624-e667f2e7b281 a geojson:Feature ;
    geojson:topology [ a topo:Shell ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:d9c6f295-4449-4e1d-bb3a-0c4ddf57e8f0 ] [ topo:orientation "+" ;
                        topo:ref uuid:47967a8e-ab17-4db0-bbfa-7a6d797e6136 ] [ topo:orientation "+" ;
                        topo:ref uuid:538c874f-36f0-4fe5-9bb1-fc37f0b14f0e ] [ topo:orientation "+" ;
                        topo:ref uuid:c6d50260-a8fe-4fac-9279-2ac46d621e87 ] [ topo:orientation "+" ;
                        topo:ref uuid:69183851-6fbc-495b-aa59-eba99d14bf68 ] [ topo:orientation "+" ;
                        topo:ref uuid:6bb474bd-c5d6-4366-bc9e-d051dbf72a6e ] [ topo:orientation "-" ;
                        topo:ref uuid:429a8b49-b82a-4521-9388-6b0b87bccb06 ] [ topo:orientation "+" ;
                        topo:ref uuid:ec0516e9-68b2-4d3d-8ed9-4a59f8e018c8 ] [ topo:orientation "-" ;
                        topo:ref uuid:bda4a01e-afca-41dd-b296-81cd3df3c070 ] ) ] .

uuid:9a3a584a-38b4-49ec-84a2-15512d31db5b a geojson:FeatureCollection ;
    geojson:collectionFeatureType "CadastralMark" ;
    geojson:features uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8,
        uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a,
        uuid:073f2f24-c85a-455d-9807-c24f75ea50f5,
        uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa,
        uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198,
        uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd,
        uuid:2f1070ed-9bae-47f5-a856-7f4db788c010,
        uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29,
        uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d,
        uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e,
        uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b,
        uuid:451e256a-6127-4e18-97f5-644093e9f9df,
        uuid:48b7ec92-e7ff-468f-8dff-d03483468e97,
        uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca,
        uuid:5228ad62-0730-416f-89b0-5042da216efb,
        uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e,
        uuid:754fd788-08c8-45b0-a591-e608a27f0948,
        uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6,
        uuid:7e2ed802-251e-48b6-b140-013cad070d9f,
        uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9,
        uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd,
        uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e,
        uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8,
        uuid:9ccc8672-7244-42a9-8d65-1b40a637a603,
        uuid:9d786d21-169c-459e-a354-4eeee65bf8a3,
        uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f,
        uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2,
        uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1,
        uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4,
        uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4,
        uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3,
        uuid:e0d36194-78e8-4255-b6b7-4f59b79544db,
        uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96,
        uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c,
        uuid:fa551002-6466-46f1-a2f3-f433334447e6,
        uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d .

uuid:9d4e9985-3788-4e70-a2ec-a809aba7c7e8 a geojson:Feature ;
    geojson:topology [ a topo:Shell ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:5381559d-4537-4041-81e1-a0978e7f3c64 ] [ topo:orientation "+" ;
                        topo:ref uuid:a63b48bc-c0d9-440d-9238-c093d3a6c40c ] [ topo:orientation "+" ;
                        topo:ref uuid:029e7e2d-a650-4510-b861-ee68b46a2fff ] [ topo:orientation "+" ;
                        topo:ref uuid:64860b38-d1bf-4728-8f0d-6ced9451ce37 ] [ topo:orientation "+" ;
                        topo:ref uuid:4bd327dc-316a-4e1c-9b35-b377652e89d6 ] [ topo:orientation "-" ;
                        topo:ref uuid:fbe45af6-b334-4500-97e3-3c4cd177db90 ] [ topo:orientation "-" ;
                        topo:ref uuid:1713550e-1504-45f6-a00e-7eeb436306eb ] [ topo:orientation "-" ;
                        topo:ref uuid:6bb474bd-c5d6-4366-bc9e-d051dbf72a6e ] [ topo:orientation "-" ;
                        topo:ref uuid:69183851-6fbc-495b-aa59-eba99d14bf68 ] [ topo:orientation "-" ;
                        topo:ref uuid:48b5ada1-bbec-4aee-851d-6c1509e9d444 ] [ topo:orientation "-" ;
                        topo:ref uuid:f45d1ba5-ecfe-4b0b-b315-2dc71cfe2b3b ] [ topo:orientation "-" ;
                        topo:ref uuid:a3e906eb-b583-4af2-a13b-fb6bb2d399a3 ] [ topo:orientation "-" ;
                        topo:ref uuid:f3212f35-ba06-46b1-8822-fdfac0ec4bd1 ] ) ] .

uuid:c6ad4aa1-ed7a-4636-b80a-df7a673f74de a geojson:FeatureCollection ;
    geojson:collectionFeatureType "Shell" ;
    geojson:features uuid:26bd463c-0433-4510-8ba8-074f5cdd1e64,
        uuid:31dcf84a-98c6-48b1-8ba6-14d7a5ff6749,
        uuid:3e5f9429-9bfb-498b-9624-e667f2e7b281,
        uuid:9d4e9985-3788-4e70-a2ec-a809aba7c7e8,
        uuid:f44d98c1-fc4e-45da-a233-6e63e58bd560 .

uuid:cc0799d5-a994-464b-8200-35566358138f a geojson:FeatureCollection ;
    geojson:collectionFeatureType "Face" ;
    geojson:features uuid:029e7e2d-a650-4510-b861-ee68b46a2fff,
        uuid:0523e3be-6777-40f9-9e14-523e128647c0,
        uuid:0e50d98b-eed1-41b7-aec0-35970c4c03df,
        uuid:16b0e4ac-22b3-40f5-8510-7fefb1b1cc06,
        uuid:1713550e-1504-45f6-a00e-7eeb436306eb,
        uuid:1d373111-f4b1-4627-92ab-14f0bbeb882b,
        uuid:3f40fd91-3d85-404b-82cd-fd4bb7228ca5,
        uuid:429a8b49-b82a-4521-9388-6b0b87bccb06,
        uuid:47967a8e-ab17-4db0-bbfa-7a6d797e6136,
        uuid:48b5ada1-bbec-4aee-851d-6c1509e9d444,
        uuid:4bd327dc-316a-4e1c-9b35-b377652e89d6,
        uuid:4def3698-95e1-486f-9588-a69a73640e5c,
        uuid:4fe850d8-d729-4851-b7d9-0f9e7ed39468,
        uuid:5381559d-4537-4041-81e1-a0978e7f3c64,
        uuid:538c874f-36f0-4fe5-9bb1-fc37f0b14f0e,
        uuid:64860b38-d1bf-4728-8f0d-6ced9451ce37,
        uuid:649a326e-bb1e-4492-943a-39aa35806c64,
        uuid:69183851-6fbc-495b-aa59-eba99d14bf68,
        uuid:6bb474bd-c5d6-4366-bc9e-d051dbf72a6e,
        uuid:6caff784-d847-4916-9360-03ab48f3a5df,
        uuid:83e6f887-a532-473f-8f09-536ef1943f33,
        uuid:90f77d40-3e87-4627-993d-e0a9efef52d6,
        uuid:a3e906eb-b583-4af2-a13b-fb6bb2d399a3,
        uuid:a63b48bc-c0d9-440d-9238-c093d3a6c40c,
        uuid:bda4a01e-afca-41dd-b296-81cd3df3c070,
        uuid:c6d50260-a8fe-4fac-9279-2ac46d621e87,
        uuid:d0ddc512-0c81-43bb-a000-bf5017ff64a7,
        uuid:d8aca1d0-8d06-4520-9437-7479640802df,
        uuid:d9c6f295-4449-4e1d-bb3a-0c4ddf57e8f0,
        uuid:ec0516e9-68b2-4d3d-8ed9-4a59f8e018c8,
        uuid:f3212f35-ba06-46b1-8822-fdfac0ec4bd1,
        uuid:f45d1ba5-ecfe-4b0b-b315-2dc71cfe2b3b,
        uuid:f4b518ed-e4d2-48cc-b2b9-997df7a49c29,
        uuid:fa7823a2-8ed7-43f0-9912-e7ade12c966a,
        uuid:fbe45af6-b334-4500-97e3-3c4cd177db90 .

uuid:d1d9c298-e00e-47e4-94b8-d9aa5ab0b854 a geojson:FeatureCollection ;
    geojson:collectionFeatureType "Edge" ;
    geojson:features uuid:030a717f-c3d7-46c9-8e04-4a90a2de6971,
        uuid:05253350-3d88-4edc-b6cb-759a2234382f,
        uuid:06e882da-e914-4ff8-a279-13c1b16b7646,
        uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f,
        uuid:0c7efeba-1fb3-49a1-aafd-3e38affa4a9c,
        uuid:0cc9dbeb-9ae4-429b-80d5-a637d54f9bc4,
        uuid:17fa2c1e-5416-443b-b263-2f47cb514aa6,
        uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5,
        uuid:1f8b2b5d-416a-4b6b-90da-9c672bc42d2c,
        uuid:21935dcb-8634-4e57-abf4-4585eba35018,
        uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030,
        uuid:2413de82-7661-4536-8a05-58c4fadbd5fd,
        uuid:259ec3c3-5480-484c-8b6f-d081695a0a3f,
        uuid:28922e7d-7683-40da-916c-241f473ee3bd,
        uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958,
        uuid:3bc984fd-e2fa-48de-9397-635b28834926,
        uuid:4a32db28-5b1a-4b4c-8fd4-e94cfca8c03a,
        uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018,
        uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c,
        uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e,
        uuid:5698e261-6451-4ffe-90dd-05d5270c59a7,
        uuid:580818ce-50f0-486c-85c9-91c35ab39509,
        uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9,
        uuid:615aed99-8ae9-4857-931c-90bdd126e8c8,
        uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16,
        uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013,
        uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118,
        uuid:7197ee0b-aa79-40dd-a8ec-9d4413777a19,
        uuid:725ebfd6-7c75-44fa-b917-94381bddef5f,
        uuid:78d47480-6451-451e-b35c-afbc40f27f93,
        uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1,
        uuid:8103a475-c12f-4664-ac95-50afbd4c782d,
        uuid:8a34c9fb-e3d6-45d3-817e-93d0c58be464,
        uuid:8e931595-7a01-4678-a20e-5607229a0d01,
        uuid:8eb102da-ae40-45c1-9a30-8ca97c69bdf6,
        uuid:9257083c-e11a-4914-a120-fbb11f0c10c8,
        uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52,
        uuid:99e2aa85-d004-4eed-8533-1313133f0809,
        uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08,
        uuid:9e2b2cf4-db16-4c58-9cea-86b593995bdf,
        uuid:a493ef53-2a0f-42f3-9523-23dea4dc19d6,
        uuid:a51db565-6909-4151-ad98-9c7fbeb85c19,
        uuid:aa458878-e72e-454e-9921-bfbf14315787,
        uuid:ab68b5c9-0626-4a27-b735-c591dfc47e0a,
        uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64,
        uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428,
        uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2,
        uuid:ba83542a-054c-4671-ad1f-412f89783e0f,
        uuid:c0a27c02-e38f-4648-b296-3ba0372f0e50,
        uuid:c795e6d9-0f44-4b1c-bc01-686d5e2acaa3,
        uuid:cc9ce047-61a1-4bf9-a366-bfc5b43092c2,
        uuid:d27bfb1b-ffd5-4fb3-9594-6f04ad66aa81,
        uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4,
        uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29,
        uuid:d6b33a71-4823-4c26-8ca1-ed929f278377,
        uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a,
        uuid:e3c87c26-8a6a-4889-923c-d87562d2dde9,
        uuid:e47e1b0a-ecee-4d50-987e-d10ad397f597,
        uuid:e4a49176-d47d-41f7-85c1-7d91bb836286,
        uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34,
        uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f,
        uuid:eb237aee-db71-4faf-8bb2-aeefc8515821,
        uuid:f0aa8d02-1aa3-4f44-be28-d135c94de497,
        uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79,
        uuid:f83f26bd-63dc-4a5e-959c-e90a7640d8a2 .

uuid:e473c559-9182-4bde-98af-669971f814d1 a geojson:FeatureCollection ;
    geojson:collectionFeatureType "Ring" ;
    geojson:features uuid:0bdb8d8a-3d53-4a97-bee6-56bf509e6b69,
        uuid:10ebd12b-36b6-4db0-b43e-b742e05540ce,
        uuid:1a7575a5-e039-4059-9fa8-b7e960c50c64,
        uuid:2402e110-526c-49d6-82f2-5ecf689f64d3,
        uuid:29f3aa93-c4e5-4961-9fd5-c2261a0b9f3b,
        uuid:2d2a332b-7633-41ee-8f53-712fc6f2b877,
        uuid:3ff8d8c4-90fe-4782-9717-1e3f4110f5a0,
        uuid:424281c5-646a-48c3-b0f2-ac703d3a8d10,
        uuid:441f6a73-ea02-44a7-a04d-4fec5659d529,
        uuid:46d1879a-0f3f-42ef-b68d-d813f684e3f9,
        uuid:49b309d9-6d39-4c44-9a9e-ac2e73c3b58e,
        uuid:5b1af58d-21f4-4582-96f8-14d356205491,
        uuid:64496114-d8c3-4643-9975-4ae0bb1af186,
        uuid:6642ea7b-0b5e-474c-95ef-fe5a15be551b,
        uuid:6a58d678-e9cf-4466-b01f-76e8e7f1f4a4,
        uuid:72d54df4-b018-4897-a96d-7d62cb9d8c4a,
        uuid:73155e38-87b0-4ded-9af7-dd354d36a728,
        uuid:7472a7e9-efcf-49a8-a19f-4a14c3e6f86e,
        uuid:79e3d1de-56bc-47de-a18b-d29da6100eda,
        uuid:79e3d840-7da3-4380-8288-6c2db4ac8b06,
        uuid:815b8458-d756-45cc-8385-00314271e297,
        uuid:8c5381e4-64ab-4b9d-bdd5-aea3de220330,
        uuid:8ca4710e-2abd-4152-912d-55c25793b4b7,
        uuid:8efc4bcc-0265-4aba-82f9-4e9c5f818018,
        uuid:92f996ff-4259-4d40-96ec-65de71faa800,
        uuid:98685c3a-fc3b-4490-b99f-5a4f9ef3aae4,
        uuid:adb6be70-c29a-4dcc-9e4b-47970d9930dd,
        uuid:b17a9121-2cf2-427f-871d-78266deacddf,
        uuid:bac4ae02-1a53-4849-9e46-b3c0d67925b1,
        uuid:bba09dfa-33c6-4256-8f33-b802aec75bdb,
        uuid:bec0f9d8-0d77-46ba-8941-f884943ac3d8,
        uuid:ce452f84-97f5-43ad-83f8-1758fba42a49,
        uuid:d4e4f6d3-3603-4da5-9d20-661ff9a38015,
        uuid:d7b9eb80-93ca-4ee5-adcb-ab1cfda75d4f,
        uuid:f8c1f3d2-aeb6-4b33-b6f8-7d01a5e8ae59 .

uuid:f44d98c1-fc4e-45da-a233-6e63e58bd560 a geojson:Feature ;
    geojson:topology [ a topo:Shell ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:d8aca1d0-8d06-4520-9437-7479640802df ] [ topo:orientation "+" ;
                        topo:ref uuid:f4b518ed-e4d2-48cc-b2b9-997df7a49c29 ] [ topo:orientation "+" ;
                        topo:ref uuid:83e6f887-a532-473f-8f09-536ef1943f33 ] [ topo:orientation "+" ;
                        topo:ref uuid:16b0e4ac-22b3-40f5-8510-7fefb1b1cc06 ] [ topo:orientation "-" ;
                        topo:ref uuid:fa7823a2-8ed7-43f0-9912-e7ade12c966a ] [ topo:orientation "+" ;
                        topo:ref uuid:f3212f35-ba06-46b1-8822-fdfac0ec4bd1 ] [ topo:orientation "+" ;
                        topo:ref uuid:bda4a01e-afca-41dd-b296-81cd3df3c070 ] [ topo:orientation "+" ;
                        topo:ref uuid:1713550e-1504-45f6-a00e-7eeb436306eb ] ) ] .

uuid:029e7e2d-a650-4510-b861-ee68b46a2fff a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:6a58d678-e9cf-4466-b01f-76e8e7f1f4a4 ] ) ] .

uuid:0523e3be-6777-40f9-9e14-523e128647c0 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:10ebd12b-36b6-4db0-b43e-b742e05540ce ] ) ] .

uuid:0bdb8d8a-3d53-4a97-bee6-56bf509e6b69 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:7197ee0b-aa79-40dd-a8ec-9d4413777a19 ] [ topo:orientation "+" ;
                        topo:ref uuid:030a717f-c3d7-46c9-8e04-4a90a2de6971 ] [ topo:orientation "+" ;
                        topo:ref uuid:c0a27c02-e38f-4648-b296-3ba0372f0e50 ] [ topo:orientation "+" ;
                        topo:ref uuid:0cc9dbeb-9ae4-429b-80d5-a637d54f9bc4 ] ) ] .

uuid:0e50d98b-eed1-41b7-aec0-35970c4c03df a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:0bdb8d8a-3d53-4a97-bee6-56bf509e6b69 ] ) ] .

uuid:10ebd12b-36b6-4db0-b43e-b742e05540ce a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:725ebfd6-7c75-44fa-b917-94381bddef5f ] [ topo:orientation "-" ;
                        topo:ref uuid:cc9ce047-61a1-4bf9-a366-bfc5b43092c2 ] [ topo:orientation "+" ;
                        topo:ref uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428 ] [ topo:orientation "+" ;
                        topo:ref uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e ] ) ] .

uuid:16b0e4ac-22b3-40f5-8510-7fefb1b1cc06 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:73155e38-87b0-4ded-9af7-dd354d36a728 ] ) ] .

uuid:1a7575a5-e039-4059-9fa8-b7e960c50c64 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:e3c87c26-8a6a-4889-923c-d87562d2dde9 ] [ topo:orientation "-" ;
                        topo:ref uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a ] [ topo:orientation "+" ;
                        topo:ref uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4 ] [ topo:orientation "+" ;
                        topo:ref uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958 ] [ topo:orientation "-" ;
                        topo:ref uuid:2413de82-7661-4536-8a05-58c4fadbd5fd ] [ topo:orientation "-" ;
                        topo:ref uuid:3bc984fd-e2fa-48de-9397-635b28834926 ] ) ] .

uuid:1d373111-f4b1-4627-92ab-14f0bbeb882b a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:2d2a332b-7633-41ee-8f53-712fc6f2b877 ] ) ] .

uuid:2402e110-526c-49d6-82f2-5ecf689f64d3 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:9e2b2cf4-db16-4c58-9cea-86b593995bdf ] [ topo:orientation "-" ;
                        topo:ref uuid:06e882da-e914-4ff8-a279-13c1b16b7646 ] [ topo:orientation "-" ;
                        topo:ref uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9 ] [ topo:orientation "-" ;
                        topo:ref uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013 ] [ topo:orientation "-" ;
                        topo:ref uuid:d6b33a71-4823-4c26-8ca1-ed929f278377 ] [ topo:orientation "-" ;
                        topo:ref uuid:c0a27c02-e38f-4648-b296-3ba0372f0e50 ] ) ] .

uuid:29f3aa93-c4e5-4961-9fd5-c2261a0b9f3b a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:eb237aee-db71-4faf-8bb2-aeefc8515821 ] [ topo:orientation "-" ;
                        topo:ref uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958 ] [ topo:orientation "-" ;
                        topo:ref uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4 ] [ topo:orientation "-" ;
                        topo:ref uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030 ] [ topo:orientation "-" ;
                        topo:ref uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29 ] ) ] .

uuid:2d2a332b-7633-41ee-8f53-712fc6f2b877 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:5698e261-6451-4ffe-90dd-05d5270c59a7 ] [ topo:orientation "+" ;
                        topo:ref uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f ] [ topo:orientation "-" ;
                        topo:ref uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428 ] [ topo:orientation "+" ;
                        topo:ref uuid:9e2b2cf4-db16-4c58-9cea-86b593995bdf ] [ topo:orientation "-" ;
                        topo:ref uuid:030a717f-c3d7-46c9-8e04-4a90a2de6971 ] ) ] .

uuid:3f40fd91-3d85-404b-82cd-fd4bb7228ca5 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:8efc4bcc-0265-4aba-82f9-4e9c5f818018 ] ) ] .

uuid:3ff8d8c4-90fe-4782-9717-1e3f4110f5a0 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:8a34c9fb-e3d6-45d3-817e-93d0c58be464 ] [ topo:orientation "-" ;
                        topo:ref uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34 ] [ topo:orientation "-" ;
                        topo:ref uuid:8e931595-7a01-4678-a20e-5607229a0d01 ] [ topo:orientation "-" ;
                        topo:ref uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030 ] ) ] .

uuid:424281c5-646a-48c3-b0f2-ac703d3a8d10 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:e47e1b0a-ecee-4d50-987e-d10ad397f597 ] [ topo:orientation "+" ;
                        topo:ref uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29 ] [ topo:orientation "+" ;
                        topo:ref uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030 ] [ topo:orientation "+" ;
                        topo:ref uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a ] [ topo:orientation "-" ;
                        topo:ref uuid:5698e261-6451-4ffe-90dd-05d5270c59a7 ] [ topo:orientation "-" ;
                        topo:ref uuid:7197ee0b-aa79-40dd-a8ec-9d4413777a19 ] ) ] .

uuid:441f6a73-ea02-44a7-a04d-4fec5659d529 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:8e931595-7a01-4678-a20e-5607229a0d01 ] [ topo:orientation "-" ;
                        topo:ref uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2 ] [ topo:orientation "-" ;
                        topo:ref uuid:e4a49176-d47d-41f7-85c1-7d91bb836286 ] [ topo:orientation "-" ;
                        topo:ref uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4 ] ) ] .

uuid:46d1879a-0f3f-42ef-b68d-d813f684e3f9 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79 ] [ topo:orientation "-" ;
                        topo:ref uuid:615aed99-8ae9-4857-931c-90bdd126e8c8 ] [ topo:orientation "-" ;
                        topo:ref uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118 ] [ topo:orientation "-" ;
                        topo:ref uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5 ] [ topo:orientation "+" ;
                        topo:ref uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64 ] [ topo:orientation "-" ;
                        topo:ref uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2 ] ) ] .

uuid:47967a8e-ab17-4db0-bbfa-7a6d797e6136 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:79e3d1de-56bc-47de-a18b-d29da6100eda ] ) ] .

uuid:49b309d9-6d39-4c44-9a9e-ac2e73c3b58e a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:0c7efeba-1fb3-49a1-aafd-3e38affa4a9c ] [ topo:orientation "-" ;
                        topo:ref uuid:21935dcb-8634-4e57-abf4-4585eba35018 ] [ topo:orientation "-" ;
                        topo:ref uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f ] [ topo:orientation "-" ;
                        topo:ref uuid:580818ce-50f0-486c-85c9-91c35ab39509 ] [ topo:orientation "-" ;
                        topo:ref uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018 ] ) ] .

uuid:4bd327dc-316a-4e1c-9b35-b377652e89d6 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:b17a9121-2cf2-427f-871d-78266deacddf ] ) ] .

uuid:4def3698-95e1-486f-9588-a69a73640e5c a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:f8c1f3d2-aeb6-4b33-b6f8-7d01a5e8ae59 ] ) ] .

uuid:4fe850d8-d729-4851-b7d9-0f9e7ed39468 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:6642ea7b-0b5e-474c-95ef-fe5a15be551b ] ) ] .

uuid:5381559d-4537-4041-81e1-a0978e7f3c64 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:29f3aa93-c4e5-4961-9fd5-c2261a0b9f3b ] ) ] .

uuid:538c874f-36f0-4fe5-9bb1-fc37f0b14f0e a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:815b8458-d756-45cc-8385-00314271e297 ] ) ] .

uuid:5b1af58d-21f4-4582-96f8-14d356205491 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:1f8b2b5d-416a-4b6b-90da-9c672bc42d2c ] [ topo:orientation "+" ;
                        topo:ref uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118 ] [ topo:orientation "-" ;
                        topo:ref uuid:a493ef53-2a0f-42f3-9523-23dea4dc19d6 ] [ topo:orientation "+" ;
                        topo:ref uuid:8eb102da-ae40-45c1-9a30-8ca97c69bdf6 ] ) ] .

uuid:64496114-d8c3-4643-9975-4ae0bb1af186 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:2413de82-7661-4536-8a05-58c4fadbd5fd ] [ topo:orientation "+" ;
                        topo:ref uuid:28922e7d-7683-40da-916c-241f473ee3bd ] [ topo:orientation "+" ;
                        topo:ref uuid:99e2aa85-d004-4eed-8533-1313133f0809 ] [ topo:orientation "+" ;
                        topo:ref uuid:8103a475-c12f-4664-ac95-50afbd4c782d ] ) ] .

uuid:64860b38-d1bf-4728-8f0d-6ced9451ce37 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:49b309d9-6d39-4c44-9a9e-ac2e73c3b58e ] ) ] .

uuid:649a326e-bb1e-4492-943a-39aa35806c64 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:bec0f9d8-0d77-46ba-8941-f884943ac3d8 ] ) ] .

uuid:6642ea7b-0b5e-474c-95ef-fe5a15be551b a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9 ] [ topo:orientation "-" ;
                        topo:ref uuid:f0aa8d02-1aa3-4f44-be28-d135c94de497 ] [ topo:orientation "+" ;
                        topo:ref uuid:d27bfb1b-ffd5-4fb3-9594-6f04ad66aa81 ] [ topo:orientation "+" ;
                        topo:ref uuid:9257083c-e11a-4914-a120-fbb11f0c10c8 ] ) ] .

uuid:6a58d678-e9cf-4466-b01f-76e8e7f1f4a4 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:05253350-3d88-4edc-b6cb-759a2234382f ] [ topo:orientation "+" ;
                        topo:ref uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013 ] [ topo:orientation "-" ;
                        topo:ref uuid:78d47480-6451-451e-b35c-afbc40f27f93 ] [ topo:orientation "+" ;
                        topo:ref uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52 ] ) ] .

uuid:6caff784-d847-4916-9360-03ab48f3a5df a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:424281c5-646a-48c3-b0f2-ac703d3a8d10 ] ) ] .

uuid:72d54df4-b018-4897-a96d-7d62cb9d8c4a a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64 ] [ topo:orientation "+" ;
                        topo:ref uuid:a51db565-6909-4151-ad98-9c7fbeb85c19 ] [ topo:orientation "-" ;
                        topo:ref uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08 ] [ topo:orientation "-" ;
                        topo:ref uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e ] ) ] .

uuid:73155e38-87b0-4ded-9af7-dd354d36a728 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:f83f26bd-63dc-4a5e-959c-e90a7640d8a2 ] [ topo:orientation "-" ;
                        topo:ref uuid:8eb102da-ae40-45c1-9a30-8ca97c69bdf6 ] [ topo:orientation "-" ;
                        topo:ref uuid:ab68b5c9-0626-4a27-b735-c591dfc47e0a ] [ topo:orientation "+" ;
                        topo:ref uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018 ] [ topo:orientation "+" ;
                        topo:ref uuid:580818ce-50f0-486c-85c9-91c35ab39509 ] [ topo:orientation "-" ;
                        topo:ref uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08 ] ) ] .

uuid:7472a7e9-efcf-49a8-a19f-4a14c3e6f86e a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1 ] [ topo:orientation "-" ;
                        topo:ref uuid:9257083c-e11a-4914-a120-fbb11f0c10c8 ] [ topo:orientation "-" ;
                        topo:ref uuid:21935dcb-8634-4e57-abf4-4585eba35018 ] [ topo:orientation "-" ;
                        topo:ref uuid:aa458878-e72e-454e-9921-bfbf14315787 ] ) ] .

uuid:79e3d1de-56bc-47de-a18b-d29da6100eda a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:3bc984fd-e2fa-48de-9397-635b28834926 ] [ topo:orientation "-" ;
                        topo:ref uuid:8103a475-c12f-4664-ac95-50afbd4c782d ] [ topo:orientation "+" ;
                        topo:ref uuid:ba83542a-054c-4671-ad1f-412f89783e0f ] [ topo:orientation "-" ;
                        topo:ref uuid:259ec3c3-5480-484c-8b6f-d081695a0a3f ] ) ] .

uuid:79e3d840-7da3-4380-8288-6c2db4ac8b06 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9 ] [ topo:orientation "+" ;
                        topo:ref uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1 ] [ topo:orientation "-" ;
                        topo:ref uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34 ] [ topo:orientation "-" ;
                        topo:ref uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64 ] [ topo:orientation "-" ;
                        topo:ref uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428 ] [ topo:orientation "-" ;
                        topo:ref uuid:06e882da-e914-4ff8-a279-13c1b16b7646 ] ) ] .

uuid:815b8458-d756-45cc-8385-00314271e297 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:e3c87c26-8a6a-4889-923c-d87562d2dde9 ] [ topo:orientation "+" ;
                        topo:ref uuid:259ec3c3-5480-484c-8b6f-d081695a0a3f ] [ topo:orientation "+" ;
                        topo:ref uuid:4a32db28-5b1a-4b4c-8fd4-e94cfca8c03a ] [ topo:orientation "-" ;
                        topo:ref uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5 ] [ topo:orientation "-" ;
                        topo:ref uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f ] ) ] .

uuid:83e6f887-a532-473f-8f09-536ef1943f33 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:8c5381e4-64ab-4b9d-bdd5-aea3de220330 ] ) ] .

uuid:8c5381e4-64ab-4b9d-bdd5-aea3de220330 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:a493ef53-2a0f-42f3-9523-23dea4dc19d6 ] [ topo:orientation "+" ;
                        topo:ref uuid:615aed99-8ae9-4857-931c-90bdd126e8c8 ] [ topo:orientation "+" ;
                        topo:ref uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16 ] [ topo:orientation "+" ;
                        topo:ref uuid:ab68b5c9-0626-4a27-b735-c591dfc47e0a ] ) ] .

uuid:8ca4710e-2abd-4152-912d-55c25793b4b7 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52 ] [ topo:orientation "-" ;
                        topo:ref uuid:615aed99-8ae9-4857-931c-90bdd126e8c8 ] [ topo:orientation "-" ;
                        topo:ref uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118 ] [ topo:orientation "-" ;
                        topo:ref uuid:4a32db28-5b1a-4b4c-8fd4-e94cfca8c03a ] [ topo:orientation "-" ;
                        topo:ref uuid:ba83542a-054c-4671-ad1f-412f89783e0f ] [ topo:orientation "-" ;
                        topo:ref uuid:99e2aa85-d004-4eed-8533-1313133f0809 ] ) ] .

uuid:8efc4bcc-0265-4aba-82f9-4e9c5f818018 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:e47e1b0a-ecee-4d50-987e-d10ad397f597 ] [ topo:orientation "-" ;
                        topo:ref uuid:0cc9dbeb-9ae4-429b-80d5-a637d54f9bc4 ] [ topo:orientation "+" ;
                        topo:ref uuid:d6b33a71-4823-4c26-8ca1-ed929f278377 ] [ topo:orientation "+" ;
                        topo:ref uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c ] ) ] .

uuid:90f77d40-3e87-4627-993d-e0a9efef52d6 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:2402e110-526c-49d6-82f2-5ecf689f64d3 ] ) ] .

uuid:92f996ff-4259-4d40-96ec-65de71faa800 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:e4a49176-d47d-41f7-85c1-7d91bb836286 ] [ topo:orientation "+" ;
                        topo:ref uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79 ] [ topo:orientation "+" ;
                        topo:ref uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52 ] [ topo:orientation "-" ;
                        topo:ref uuid:28922e7d-7683-40da-916c-241f473ee3bd ] [ topo:orientation "-" ;
                        topo:ref uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958 ] ) ] .

uuid:98685c3a-fc3b-4490-b99f-5a4f9ef3aae4 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79 ] [ topo:orientation "-" ;
                        topo:ref uuid:17fa2c1e-5416-443b-b263-2f47cb514aa6 ] [ topo:orientation "-" ;
                        topo:ref uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018 ] [ topo:orientation "-" ;
                        topo:ref uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16 ] ) ] .

uuid:a63b48bc-c0d9-440d-9238-c093d3a6c40c a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:bac4ae02-1a53-4849-9e46-b3c0d67925b1 ] ) ] .

uuid:adb6be70-c29a-4dcc-9e4b-47970d9930dd a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:8a34c9fb-e3d6-45d3-817e-93d0c58be464 ] [ topo:orientation "-" ;
                        topo:ref uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29 ] [ topo:orientation "-" ;
                        topo:ref uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c ] [ topo:orientation "+" ;
                        topo:ref uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013 ] [ topo:orientation "+" ;
                        topo:ref uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1 ] ) ] .

uuid:b17a9121-2cf2-427f-871d-78266deacddf a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:78d47480-6451-451e-b35c-afbc40f27f93 ] [ topo:orientation "-" ;
                        topo:ref uuid:9257083c-e11a-4914-a120-fbb11f0c10c8 ] [ topo:orientation "-" ;
                        topo:ref uuid:0c7efeba-1fb3-49a1-aafd-3e38affa4a9c ] [ topo:orientation "-" ;
                        topo:ref uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16 ] ) ] .

uuid:bac4ae02-1a53-4849-9e46-b3c0d67925b1 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:05253350-3d88-4edc-b6cb-759a2234382f ] [ topo:orientation "-" ;
                        topo:ref uuid:28922e7d-7683-40da-916c-241f473ee3bd ] [ topo:orientation "+" ;
                        topo:ref uuid:eb237aee-db71-4faf-8bb2-aeefc8515821 ] [ topo:orientation "-" ;
                        topo:ref uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c ] ) ] .

uuid:bba09dfa-33c6-4256-8f33-b802aec75bdb a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5 ] [ topo:orientation "+" ;
                        topo:ref uuid:1f8b2b5d-416a-4b6b-90da-9c672bc42d2c ] [ topo:orientation "+" ;
                        topo:ref uuid:f83f26bd-63dc-4a5e-959c-e90a7640d8a2 ] [ topo:orientation "-" ;
                        topo:ref uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e ] ) ] .

uuid:bec0f9d8-0d77-46ba-8941-f884943ac3d8 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:cc9ce047-61a1-4bf9-a366-bfc5b43092c2 ] [ topo:orientation "+" ;
                        topo:ref uuid:c795e6d9-0f44-4b1c-bc01-686d5e2acaa3 ] [ topo:orientation "+" ;
                        topo:ref uuid:f0aa8d02-1aa3-4f44-be28-d135c94de497 ] [ topo:orientation "+" ;
                        topo:ref uuid:06e882da-e914-4ff8-a279-13c1b16b7646 ] ) ] .

uuid:c6d50260-a8fe-4fac-9279-2ac46d621e87 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:1a7575a5-e039-4059-9fa8-b7e960c50c64 ] ) ] .

uuid:ce452f84-97f5-43ad-83f8-1758fba42a49 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2 ] [ topo:orientation "+" ;
                        topo:ref uuid:a51db565-6909-4151-ad98-9c7fbeb85c19 ] [ topo:orientation "-" ;
                        topo:ref uuid:580818ce-50f0-486c-85c9-91c35ab39509 ] [ topo:orientation "+" ;
                        topo:ref uuid:17fa2c1e-5416-443b-b263-2f47cb514aa6 ] ) ] .

uuid:d4e4f6d3-3603-4da5-9d20-661ff9a38015 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:8e931595-7a01-4678-a20e-5607229a0d01 ] [ topo:orientation "-" ;
                        topo:ref uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64 ] [ topo:orientation "-" ;
                        topo:ref uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f ] [ topo:orientation "-" ;
                        topo:ref uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a ] ) ] .

uuid:d7b9eb80-93ca-4ee5-adcb-ab1cfda75d4f a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34 ] [ topo:orientation "+" ;
                        topo:ref uuid:aa458878-e72e-454e-9921-bfbf14315787 ] [ topo:orientation "-" ;
                        topo:ref uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f ] [ topo:orientation "-" ;
                        topo:ref uuid:a51db565-6909-4151-ad98-9c7fbeb85c19 ] ) ] .

uuid:d8aca1d0-8d06-4520-9437-7479640802df a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:bba09dfa-33c6-4256-8f33-b802aec75bdb ] ) ] .

uuid:d9c6f295-4449-4e1d-bb3a-0c4ddf57e8f0 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:64496114-d8c3-4643-9975-4ae0bb1af186 ] ) ] .

uuid:ec0516e9-68b2-4d3d-8ed9-4a59f8e018c8 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:8ca4710e-2abd-4152-912d-55c25793b4b7 ] ) ] .

uuid:f4b518ed-e4d2-48cc-b2b9-997df7a49c29 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:5b1af58d-21f4-4582-96f8-14d356205491 ] ) ] .

uuid:f8c1f3d2-aeb6-4b33-b6f8-7d01a5e8ae59 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:d27bfb1b-ffd5-4fb3-9594-6f04ad66aa81 ] [ topo:orientation "-" ;
                        topo:ref uuid:c795e6d9-0f44-4b1c-bc01-686d5e2acaa3 ] [ topo:orientation "-" ;
                        topo:ref uuid:725ebfd6-7c75-44fa-b917-94381bddef5f ] [ topo:orientation "+" ;
                        topo:ref uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08 ] [ topo:orientation "+" ;
                        topo:ref uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f ] [ topo:orientation "+" ;
                        topo:ref uuid:21935dcb-8634-4e57-abf4-4585eba35018 ] ) ] .

uuid:030a717f-c3d7-46c9-8e04-4a90a2de6971 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8 uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29 ) ] .

uuid:05253350-3d88-4edc-b6cb-759a2234382f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:7e2ed802-251e-48b6-b140-013cad070d9f uuid:451e256a-6127-4e18-97f5-644093e9f9df ) ] .

uuid:0c7efeba-1fb3-49a1-aafd-3e38affa4a9c a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1 ) ] .

uuid:0cc9dbeb-9ae4-429b-80d5-a637d54f9bc4 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd ) ] .

uuid:1713550e-1504-45f6-a00e-7eeb436306eb a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:98685c3a-fc3b-4490-b99f-5a4f9ef3aae4 ] ) ] .

uuid:17fa2c1e-5416-443b-b263-2f47cb514aa6 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6 uuid:073f2f24-c85a-455d-9807-c24f75ea50f5 ) ] .

uuid:1f8b2b5d-416a-4b6b-90da-9c672bc42d2c a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8 uuid:48b7ec92-e7ff-468f-8dff-d03483468e97 ) ] .

uuid:2413de82-7661-4536-8a05-58c4fadbd5fd a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4 ) ] .

uuid:259ec3c3-5480-484c-8b6f-d081695a0a3f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3 ) ] .

uuid:3bc984fd-e2fa-48de-9397-635b28834926 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a ) ] .

uuid:429a8b49-b82a-4521-9388-6b0b87bccb06 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:d4e4f6d3-3603-4da5-9d20-661ff9a38015 ] ) ] .

uuid:48b5ada1-bbec-4aee-851d-6c1509e9d444 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:adb6be70-c29a-4dcc-9e4b-47970d9930dd ] ) ] .

uuid:4a32db28-5b1a-4b4c-8fd4-e94cfca8c03a a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3 uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8 ) ] .

uuid:5698e261-6451-4ffe-90dd-05d5270c59a7 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8 uuid:9d786d21-169c-459e-a354-4eeee65bf8a3 ) ] .

uuid:69183851-6fbc-495b-aa59-eba99d14bf68 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:92f996ff-4259-4d40-96ec-65de71faa800 ] ) ] .

uuid:6bb474bd-c5d6-4366-bc9e-d051dbf72a6e a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:441f6a73-ea02-44a7-a04d-4fec5659d529 ] ) ] .

uuid:7197ee0b-aa79-40dd-a8ec-9d4413777a19 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8 ) ] .

uuid:725ebfd6-7c75-44fa-b917-94381bddef5f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96 uuid:fa551002-6466-46f1-a2f3-f433334447e6 ) ] .

uuid:78d47480-6451-451e-b35c-afbc40f27f93 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2 uuid:2f1070ed-9bae-47f5-a856-7f4db788c010 ) ] .

uuid:8103a475-c12f-4664-ac95-50afbd4c782d a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a ) ] .

uuid:8a34c9fb-e3d6-45d3-817e-93d0c58be464 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca ) ] .

uuid:8eb102da-ae40-45c1-9a30-8ca97c69bdf6 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa uuid:48b7ec92-e7ff-468f-8dff-d03483468e97 ) ] .

uuid:99e2aa85-d004-4eed-8533-1313133f0809 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:451e256a-6127-4e18-97f5-644093e9f9df uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd ) ] .

uuid:9e2b2cf4-db16-4c58-9cea-86b593995bdf a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29 ) ] .

uuid:a3e906eb-b583-4af2-a13b-fb6bb2d399a3 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:3ff8d8c4-90fe-4782-9717-1e3f4110f5a0 ] ) ] .

uuid:a493ef53-2a0f-42f3-9523-23dea4dc19d6 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa uuid:754fd788-08c8-45b0-a591-e608a27f0948 ) ] .

uuid:aa458878-e72e-454e-9921-bfbf14315787 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c uuid:5228ad62-0730-416f-89b0-5042da216efb ) ] .

uuid:ab68b5c9-0626-4a27-b735-c591dfc47e0a a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa ) ] .

uuid:ba83542a-054c-4671-ad1f-412f89783e0f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3 ) ] .

uuid:bda4a01e-afca-41dd-b296-81cd3df3c070 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:46d1879a-0f3f-42ef-b68d-d813f684e3f9 ] ) ] .

uuid:c0a27c02-e38f-4648-b296-3ba0372f0e50 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29 uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f ) ] .

uuid:c795e6d9-0f44-4b1c-bc01-686d5e2acaa3 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:fa551002-6466-46f1-a2f3-f433334447e6 uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9 ) ] .

uuid:cc9ce047-61a1-4bf9-a366-bfc5b43092c2 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e uuid:fa551002-6466-46f1-a2f3-f433334447e6 ) ] .

uuid:d0ddc512-0c81-43bb-a000-bf5017ff64a7 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:79e3d840-7da3-4380-8288-6c2db4ac8b06 ] ) ] .

uuid:d27bfb1b-ffd5-4fb3-9594-6f04ad66aa81 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9 uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1 ) ] .

uuid:d6b33a71-4823-4c26-8ca1-ed929f278377 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f uuid:7e2ed802-251e-48b6-b140-013cad070d9f ) ] .

uuid:e3c87c26-8a6a-4889-923c-d87562d2dde9 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9d786d21-169c-459e-a354-4eeee65bf8a3 uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e ) ] .

uuid:e47e1b0a-ecee-4d50-987e-d10ad397f597 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198 uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd ) ] .

uuid:e4a49176-d47d-41f7-85c1-7d91bb836286 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d uuid:073f2f24-c85a-455d-9807-c24f75ea50f5 ) ] .

uuid:eb237aee-db71-4faf-8bb2-aeefc8515821 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4 uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198 ) ] .

uuid:f0aa8d02-1aa3-4f44-be28-d135c94de497 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9 uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d ) ] .

uuid:f3212f35-ba06-46b1-8822-fdfac0ec4bd1 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:ce452f84-97f5-43ad-83f8-1758fba42a49 ] ) ] .

uuid:f45d1ba5-ecfe-4b0b-b315-2dc71cfe2b3b a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:d7b9eb80-93ca-4ee5-adcb-ab1cfda75d4f ] ) ] .

uuid:f83f26bd-63dc-4a5e-959c-e90a7640d8a2 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:48b7ec92-e7ff-468f-8dff-d03483468e97 uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96 ) ] .

uuid:fa7823a2-8ed7-43f0-9912-e7ade12c966a a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:72d54df4-b018-4897-a96d-7d62cb9d8c4a ] ) ] .

uuid:fbe45af6-b334-4500-97e3-3c4cd177db90 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:7472a7e9-efcf-49a8-a19f-4a14c3e6f86e ] ) ] .

uuid:016ea44a-df91-462a-9a7e-5b8e2e950fd8 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061664e+05 6.471656e+06 2e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188704e+01 2e+01 ) ] .

uuid:06bd85c9-c7ae-42b1-9cde-efd91489c35a a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061464e+05 6.471646e+06 2e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188712e+01 2e+01 ) ] .

uuid:06e882da-e914-4ff8-a279-13c1b16b7646 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e ) ] .

uuid:0795c157-5fcb-4d01-b0f0-fedf92b1d41f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:e0d36194-78e8-4255-b6b7-4f59b79544db uuid:5228ad62-0730-416f-89b0-5042da216efb ) ] .

uuid:0efa4062-5cc0-42d0-a69c-6472b91bffaa a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061484e+05 6.471648e+06 2.6e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188711e+01 2.6e+01 ) ] .

uuid:1b26a418-ddc1-4e7d-8ff0-811102c413b5 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8 ) ] .

uuid:1bb5fd50-9be1-4456-8ce6-ddc6f8d0a1cd a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061464e+05 6.471646e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188712e+01 2.3e+01 ) ] .

uuid:21935dcb-8634-4e57-abf4-4585eba35018 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:5228ad62-0730-416f-89b0-5042da216efb uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1 ) ] .

uuid:23375f61-8d9d-407c-bc86-ff0a4a1a3030 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca uuid:9ccc8672-7244-42a9-8d65-1b40a637a603 ) ] .

uuid:28922e7d-7683-40da-916c-241f473ee3bd a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4 uuid:451e256a-6127-4e18-97f5-644093e9f9df ) ] .

uuid:2f487e99-6ee5-422b-8f39-81f1365a4b29 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061664e+05 6.471656e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188704e+01 2.3e+01 ) ] .

uuid:2fe7500a-344c-43c9-8a4a-42a4dc381958 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4 ) ] .

uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471652e+06 2e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2e+01 ) ] .

uuid:48b7ec92-e7ff-468f-8dff-d03483468e97 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061484e+05 6.471656e+06 2.6e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188703e+01 2.6e+01 ) ] .

uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471652e+06 2e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2e+01 ) ] .

uuid:4bbdae51-6837-4cbb-974d-ab8987d4a018 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6 ) ] .

uuid:51c0f9c6-7c13-4460-8636-2ed5ee228a6c a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:7e2ed802-251e-48b6-b140-013cad070d9f uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198 ) ] .

uuid:5228ad62-0730-416f-89b0-5042da216efb a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471652e+06 2.6e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.6e+01 ) ] .

uuid:52e158fb-6ec0-489c-8592-db1d6e180c8e a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061464e+05 6.471656e+06 2e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188703e+01 2e+01 ) ] .

uuid:5367fe8d-79c0-4161-a4ce-3b7f42afad3e a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96 ) ] .

uuid:580818ce-50f0-486c-85c9-91c35ab39509 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6 uuid:e0d36194-78e8-4255-b6b7-4f59b79544db ) ] .

uuid:5f1fd4be-c4ba-4387-9d7d-6e26b8299dc9 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:2f1070ed-9bae-47f5-a856-7f4db788c010 uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d ) ] .

uuid:615aed99-8ae9-4857-931c-90bdd126e8c8 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:754fd788-08c8-45b0-a591-e608a27f0948 uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2 ) ] .

uuid:6968cfbb-265a-48a5-8fac-91fbc7fe1a16 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2 uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e ) ] .

uuid:6ac9e1bc-3c5f-468b-8646-ac85e38d3013 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:7e2ed802-251e-48b6-b140-013cad070d9f uuid:2f1070ed-9bae-47f5-a856-7f4db788c010 ) ] .

uuid:6c6ddd1e-2780-4758-bbe7-a4c77bba6118 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8 uuid:754fd788-08c8-45b0-a591-e608a27f0948 ) ] .

uuid:754fd788-08c8-45b0-a591-e608a27f0948 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061484e+05 6.471648e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188711e+01 2.3e+01 ) ] .

uuid:77b273d5-f113-41f4-867a-1d3f93c67ef6 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471652e+06 2.6e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.6e+01 ) ] .

uuid:791da2a3-ee19-44a1-b604-5f379ab00bb1 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:2f1070ed-9bae-47f5-a856-7f4db788c010 uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c ) ] .

uuid:83d45b42-d9bb-48cb-9777-fbb2525083f9 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061644e+05 6.471648e+06 2.6e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188711e+01 2.6e+01 ) ] .

uuid:8e931595-7a01-4678-a20e-5607229a0d01 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9ccc8672-7244-42a9-8d65-1b40a637a603 uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4 ) ] .

uuid:9257083c-e11a-4914-a120-fbb11f0c10c8 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1 uuid:2f1070ed-9bae-47f5-a856-7f4db788c010 ) ] .

uuid:929d7ecd-8ff2-4be6-af3e-929b8a3bdd52 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2 uuid:451e256a-6127-4e18-97f5-644093e9f9df ) ] .

uuid:987e2a90-2ce3-4836-9a36-04d08031c7bd a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061664e+05 6.471646e+06 2e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188713e+01 2e+01 ) ] .

uuid:9a5a3eef-7ddb-40bf-ae2a-111b4623fb08 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96 uuid:e0d36194-78e8-4255-b6b7-4f59b79544db ) ] .

uuid:a51db565-6909-4151-ad98-9c7fbeb85c19 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4 uuid:e0d36194-78e8-4255-b6b7-4f59b79544db ) ] .

uuid:b25fa8ee-bbe6-4fad-a662-4fea8a7b5e7f a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061664e+05 6.471646e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188713e+01 2.3e+01 ) ] .

uuid:b42f27c9-d0e6-4cfb-9ea3-7e2517426428 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b ) ] .

uuid:b745f3b0-caff-4c6a-8839-9c709893e1c2 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:073f2f24-c85a-455d-9807-c24f75ea50f5 uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4 ) ] .

uuid:d2e6c025-8dc2-45b0-896a-8cfbb94fd4e4 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9ccc8672-7244-42a9-8d65-1b40a637a603 uuid:318227cb-4e3d-4ce1-b480-9cf4b709e28d ) ] .

uuid:d302b67e-99d1-4033-84c8-bec14b1a3a29 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198 uuid:4a09ba87-445c-4146-b687-97ab6e9f4bca ) ] .

uuid:d7c2a2a6-8580-4bcf-bfeb-b5c08f7d3bc3 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061464e+05 6.471656e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188703e+01 2.3e+01 ) ] .

uuid:dbed95c2-94f5-4c01-ac9e-a71441efd65a a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9ccc8672-7244-42a9-8d65-1b40a637a603 uuid:9d786d21-169c-459e-a354-4eeee65bf8a3 ) ] .

uuid:e8b25b9d-346c-4cdf-985b-c742fd7c3a34 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4 uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c ) ] .

uuid:eb0aaf70-bb65-4855-a35b-860b1c23c53f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9d786d21-169c-459e-a354-4eeee65bf8a3 uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b ) ] .

uuid:f60637f4-cdf9-4bf7-b969-72eabb91eb79 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:073f2f24-c85a-455d-9807-c24f75ea50f5 uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2 ) ] .

uuid:fa551002-6466-46f1-a2f3-f433334447e6 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061644e+05 6.471656e+06 2.6e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188704e+01 2.6e+01 ) ] .

uuid:fa94e00a-24f0-4133-bd78-8a6d28be410d a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061644e+05 6.471648e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188711e+01 2.3e+01 ) ] .

uuid:073f2f24-c85a-455d-9807-c24f75ea50f5 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471652e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.3e+01 ) ] .

uuid:1ae0c24d-f346-4314-9bf2-8c74d0007198 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471646e+06 2e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188713e+01 2e+01 ) ] .

uuid:32acfb36-f3d3-47fe-9400-eec9b06d781e a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061644e+05 6.471656e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188704e+01 2.3e+01 ) ] .

uuid:451e256a-6127-4e18-97f5-644093e9f9df a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471646e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188712e+01 2.3e+01 ) ] .

uuid:7e2ed802-251e-48b6-b140-013cad070d9f a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471646e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188713e+01 2.3e+01 ) ] .

uuid:9943c35d-49e3-47b5-b8b5-020d2cc70b0e a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471648e+06 2.6e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188711e+01 2.6e+01 ) ] .

uuid:9c9dcda2-4713-4ea4-9a1c-8cc1bb05f7c8 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061484e+05 6.471656e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188703e+01 2.3e+01 ) ] .

uuid:9ccc8672-7244-42a9-8d65-1b40a637a603 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471652e+06 2e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2e+01 ) ] .

uuid:9d786d21-169c-459e-a354-4eeee65bf8a3 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471656e+06 2e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188703e+01 2e+01 ) ] .

uuid:b179ed08-b3a8-492c-8642-b76fb67bdd64 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4 ) ] .

uuid:bce88da3-5cda-4af9-a494-4d4b319ed2c1 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471648e+06 2.6e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188711e+01 2.6e+01 ) ] .

uuid:c92366e3-4649-413d-a9f1-04ccfc2377d4 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471646e+06 2e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188712e+01 2e+01 ) ] .

uuid:e0d36194-78e8-4255-b6b7-4f59b79544db a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471652e+06 2.6e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.6e+01 ) ] .

uuid:e7478b99-0d1e-4a1f-b958-c6a4b1719e96 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471656e+06 2.6e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188703e+01 2.6e+01 ) ] .

uuid:f84d09ba-e7af-48a7-bd47-30ca9265214c a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471652e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.3e+01 ) ] .

uuid:2f1070ed-9bae-47f5-a856-7f4db788c010 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471648e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188711e+01 2.3e+01 ) ] .

uuid:3e40bf74-9619-426b-8b5e-58ebe480a92b a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471656e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188703e+01 2.3e+01 ) ] .

uuid:b6352026-0d61-48d5-ab7d-e62eb34139e2 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471648e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188711e+01 2.3e+01 ) ] .

uuid:d75d9704-aeb3-4dc7-b2f0-a3fb62f44dd4 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471652e+06 2.3e+01 ) ] ;
    dct:time "2026-05-27T05:58:56.914093+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.3e+01 ) ] .


```


### Four Unit Up/Down test example with stairwell and Parcel
Self-contained collection of topology objects defining a Four Unit Up/Down example with stairwell. 
Dataset consists of 57 points, 19 vectorObservations, one Polygon, 65 edges, 35 rings, 35 faces, five shells, and five solids.
![Tetrahedron Example](assets/4-unit.png)

[Open the interactive viewer](assets/topo_viewer.html?example=4-unit-up-down.json)

#### json
```json
{
  "id": "uuid:e9901182-59a5-4f67-8093-942fef888bf2",
  "name": "DP 12347",
  "description": "Multi-solid test for Solid validation",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision",
  "surveyType": "wa-survey-type:SSA",
  "time": {
    "date": "2026-04-22"
  },
  "horizontalCRS": "epsg:7850",
  "verticalCRS": "epsg:5711",
  "bearingRotation": 0.0,
  "surveyTitle": "4 Unit Up/Down with Stairwell",
  "hasProvenance": [],
  "wasGeneratedBy": {
    "id": "uuid:389c096d-2d42-4b65-afa3-db52d19d8b2f",
    "endedAtTime": "2026-05-04T02:39:38.197690+00:00"
  },
  "features": [],
  "referencedCSDs": [],
  "points": [
    {
      "id": "uuid:6ae2b7e0-a540-40c7-81bc-45c2cac1d3e6",
      "type": "FeatureCollection",
      "featureType": "CadastralMark",
      "features": [
        {
          "id": "uuid:29d783d3-10bb-4882-908a-eb8151cc52ec",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779818303263,
              -31.88703552343606,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779818303263,
              -31.88703552343606,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779740952903,
              -31.887107661310704,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:3d450239-8099-4649-a355-565e58332111",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779740952903,
              -31.887107661310704,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773398518112,
              -31.88710716621648,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773398518112,
              -31.88710716621648,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:d250661e-6383-4458-9323-bf347210311f",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:7970f2e9-9893-4e54-b249-187db718bd31",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076290656701,
              -31.887034203228236,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:85f5fe02-792e-44e4-908e-10240b79ddb5",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076290656701,
              -31.887034203228236,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:127223b8-ae77-4a0c-abe6-d76332e85af1",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00762829203471,
              -31.887106341099198,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00762829203471,
              -31.887106341099198,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769171638001,
              -31.88710683624614,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769171638001,
              -31.88710683624614,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:7f9a7128-b01c-4568-8241-29391e9a5d30",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773380229235,
              -31.88712520753267,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.427,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781835048558,
              -31.887125867514182,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781835048558,
              -31.887125867514182,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773379171989,
              -31.887125207450133,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:6d31e874-6317-43c3-b357-49a699f8a69d",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781931741749,
              -31.887035688404968,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:21a929df-71c5-47e2-a6d5-24f37bae8442",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781931741749,
              -31.887035688404968,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:a9135246-4680-4183-b3a0-ea902313e04b",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00760696414898,
              -31.887124217331177,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769152291053,
              -31.887124877479565,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769152291053,
              -31.887124877479565,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00760696414898,
              -31.887124217331177,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076079312868,
              -31.887034038227714,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:40a76a4c-fff8-4156-8071-61423b0d44e9",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076079312868,
              -31.887034038227714,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:c4aa05ba-997c-4b7e-b5bd-071f385e17d5",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0077434,
              -31.886833
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406159.038,
              6471678.639
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:489a1c4c-0ac4-470f-9757-e50bc71d3aa8",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076575,
              -31.8868496
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406150.931,
              6471676.724
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:e18342eb-1272-4582-b6bf-3c9d7e138667",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0075549,
              -31.8869004
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406141.279,
              6471671.005
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:313731cb-1e0c-469c-b64e-06af1629ba2a",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0074515,
              -31.8869993
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406131.6,
              6471659.952
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:c7c0b650-ed8a-496d-bff5-46d9953137fd",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00742,
              -31.8871037
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406128.727,
              6471648.352
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:4261adb8-2fa6-4ce6-94cc-d4906f2a40fc",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0074358,
              -31.8872071
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406130.326,
              6471636.904
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:d9e43ed6-9387-4180-a25a-3b3208422263",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0075106,
              -31.8872894
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406137.484,
              6471627.846
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:4a98b01f-7e97-4049-9f39-a0ba56758ce9",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076316,
              -31.8873402
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.979,
              6471622.32
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:be40befb-8498-4793-9ed6-d0e72c1a1d5b",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0077619,
              -31.887342
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406161.304,
              6471622.233
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:7023d838-169a-4b01-a85f-e2b270751a7c",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0078949,
              -31.8873106
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406173.851,
              6471625.829
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:fbebc23c-cdef-4d02-bced-5b5bb7686b1f",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0079725,
              -31.8872653
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406181.144,
              6471630.918
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:d72f308c-110a-459d-ae5f-9d459d9ae51e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080335,
              -31.8872145
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406186.862,
              6471636.601
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:a221f31d-26c6-46f0-872a-567244fa5447",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080778,
              -31.8871397
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406190.976,
              6471644.931
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:3cf6b3c0-3acc-4720-a643-d885d6951b2a",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080944,
              -31.8870676
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406192.473,
              6471652.938
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:67c660f1-0e49-4ee4-996d-4d453fe6209b",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080852,
              -31.8869873
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406191.521,
              6471661.831
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:3c6c5996-1c40-4e52-932b-13cc41fcee71",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080584,
              -31.8869365
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406188.935,
              6471667.439
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:97571fb3-9987-49b3-b54c-88b8adcd2655",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080067,
              -31.8868884
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406183.997,
              6471672.726
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:4c83a22b-2309-4240-97b1-d130cb1a8d43",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0079272,
              -31.886845
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406176.434,
              6471677.468
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:291b7f49-8f18-498e-bd2f-7bfb6760eaa2",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0078358,
              -31.8868302
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406167.774,
              6471679.029
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        }
      ]
    }
  ],
  "vectorObservations": [],
  "parcels": [
    {
      "id": "uuid:f6235c7a-8ada-499d-9574-067ccd370949",
      "type": "FeatureCollection",
      "featureType": "PrimaryParcel",
      "features": [
        {
          "id": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "uuid:13b59b93-6f0f-4773-a8b7-88401c9c1fae",
                "uuid:ff22d8d8-5d2e-4fdd-97ce-d80e2b48b5de",
                "uuid:5a34b8a2-dac0-4ad4-8a59-cbee38b407c8",
                "uuid:2fbdbc42-6443-4bc2-bd42-0c77a3e9c9fc",
                "uuid:54943d43-ea1a-4a8c-8cbb-c6d89187e842",
                "uuid:cf0f9b8d-c8d2-4691-8c41-086e18375574",
                "uuid:ed1e393e-d7f5-4a85-93b1-f08812b85014",
                "uuid:d2ebb167-17a2-4bd0-8411-97f83c92d9e6",
                "uuid:d75b510f-9b88-4a82-bac4-4de995f4a1b9",
                "uuid:7914b52a-e13d-4d79-9f76-43e040fa939f",
                "uuid:b4b815fe-eb25-401b-b65f-f7a020da8944",
                "uuid:41e63da1-bee7-48da-be90-527c99fa38d8",
                "uuid:e9b94664-2b7a-4e97-a565-4bcce3896392",
                "uuid:1ce937ba-14a1-48dc-b65c-3b50e98ceb37",
                "uuid:6e614af5-e74d-4c6d-b841-85ac4dd93250",
                "uuid:379f8fe1-7311-4db2-a5b3-8b7cf5dd0882",
                "uuid:780d3b13-0263-4449-ad1e-1627fd0042aa",
                "uuid:fd23e6be-fb9a-44fd-8ad1-55df298d506a",
                "uuid:f7fb3296-07ab-42f6-937f-0ebbe0ee98ea"
              ]
            ]
          },
          "properties": {
            "appellation": {
              "type": "wa:LotOnPlanAppellation",
              "label": "Lot 3 DP 214866",
              "hasPart": [
                {
                  "type": "ParcelType",
                  "label": "Lot"
                },
                {
                  "type": "ParcelIdentifier",
                  "label": "3"
                },
                {
                  "type": "PlanType",
                  "label": "DP"
                },
                {
                  "type": "planIdentifier",
                  "label": "214866"
                }
              ]
            },
            "area": 2829,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:lot",
            "parcelState": "wa-parcel-state:created",
            "interests": []
          }
        }
      ]
    }
  ],
  "edges": [
    {
      "id": "uuid:8a7f5e78-fcc3-4f6d-a19e-ece99b75234f",
      "type": "FeatureCollection",
      "featureType": "Edge",
      "features": [
        {
          "id": "uuid:b62a056e-a219-4fc5-942e-3fb4c48d708d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:29d783d3-10bb-4882-908a-eb8151cc52ec",
              "uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:a1386220-8990-43a9-800c-4ed3b3e323f6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e",
              "uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:32ccd411-43f6-46f2-9fc8-0ae0a18e650d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78",
              "uuid:3d450239-8099-4649-a355-565e58332111"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:3d450239-8099-4649-a355-565e58332111",
              "uuid:29d783d3-10bb-4882-908a-eb8151cc52ec"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd",
              "uuid:3d450239-8099-4649-a355-565e58332111"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:5ad51e3c-9924-4a4f-83b3-a1b2605b56de",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78",
              "uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:3accc489-4f33-4a69-ae3c-ad302bea4102",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b",
              "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:94185a2f-45b0-4c79-95c0-44fef184e2c7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:d250661e-6383-4458-9323-bf347210311f",
              "uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:29d783d3-10bb-4882-908a-eb8151cc52ec",
              "uuid:7970f2e9-9893-4e54-b249-187db718bd31"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7970f2e9-9893-4e54-b249-187db718bd31",
              "uuid:d250661e-6383-4458-9323-bf347210311f"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:d250661e-6383-4458-9323-bf347210311f",
              "uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:cd257d47-13ca-40db-b196-d78c51872a3b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4",
              "uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0",
              "uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7970f2e9-9893-4e54-b249-187db718bd31",
              "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:26974107-8cc7-472a-98b1-bac952f4c924",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76",
              "uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76",
              "uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:380f1122-b209-41f6-8fd0-f013d06de253",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4",
              "uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:5ef7922d-72e6-4c88-bb01-b81714eee525",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd",
              "uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:12307863-0535-49c5-9baf-ae6d2dc7241a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7970f2e9-9893-4e54-b249-187db718bd31",
              "uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:647124d6-678c-45aa-98ce-7e268086f742",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec",
              "uuid:85f5fe02-792e-44e4-908e-10240b79ddb5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:75c75f5e-3c22-4b05-a4b7-5ce037bbd55b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:85f5fe02-792e-44e4-908e-10240b79ddb5",
              "uuid:d250661e-6383-4458-9323-bf347210311f"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec",
              "uuid:127223b8-ae77-4a0c-abe6-d76332e85af1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:d24a9e84-362c-4d6e-84f2-c1a16900185e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879",
              "uuid:127223b8-ae77-4a0c-abe6-d76332e85af1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:7b34e432-9892-4867-bebf-485a47054777",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879",
              "uuid:85f5fe02-792e-44e4-908e-10240b79ddb5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:73751771-3e38-4526-8d49-9465d947b6dd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:127223b8-ae77-4a0c-abe6-d76332e85af1",
              "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1",
              "uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:cc1617ec-c00c-42c4-abaa-9237964d2f9c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1",
              "uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1",
              "uuid:7f9a7128-b01c-4568-8241-29391e9a5d30"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:6b9374b0-671d-4603-9349-748b4c231518",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7f9a7128-b01c-4568-8241-29391e9a5d30",
              "uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89",
              "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:0a69a1c6-2a79-4e71-9149-b488b01ac1e0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7f9a7128-b01c-4568-8241-29391e9a5d30",
              "uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:33deda4d-e880-418b-9b90-93bc255670db",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89",
              "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:d78450ce-0f63-4c04-811a-5b87b9591b0f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70",
              "uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:887b4e80-25a7-491c-9f99-c567acf7a098",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e",
              "uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:9557e813-61c9-4ae4-a097-fe3ccf104c34",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e",
              "uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac",
              "uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:84b3b6af-d3cb-402a-8ef3-1ed8b8b9c50b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324",
              "uuid:6d31e874-6317-43c3-b357-49a699f8a69d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:b24b3a09-48c1-4fa3-a21c-71641207feae",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:6d31e874-6317-43c3-b357-49a699f8a69d",
              "uuid:21a929df-71c5-47e2-a6d5-24f37bae8442"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:9d3409e1-67b8-4a8c-9ee6-981eaff19cf5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:21a929df-71c5-47e2-a6d5-24f37bae8442",
              "uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:105668a3-bd19-4802-a5ce-c200f1b06fad",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:6d31e874-6317-43c3-b357-49a699f8a69d",
              "uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d",
              "uuid:7970f2e9-9893-4e54-b249-187db718bd31"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:6627f055-85b5-44c1-a7f8-a9c5b9c9fa9f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:29d783d3-10bb-4882-908a-eb8151cc52ec",
              "uuid:21a929df-71c5-47e2-a6d5-24f37bae8442"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70",
              "uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.998
          }
        },
        {
          "id": "uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda",
              "uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:d001066e-9581-4f45-880e-4810c005aeb4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb",
              "uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:150f57fd-8d57-4533-9922-96732defb792",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb",
              "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:f9f5fd81-680a-43f5-a04e-adc180a9ecdd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4",
              "uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:a1660706-a249-4fd6-ab29-809940a8aedf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac",
              "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 2.0
          }
        },
        {
          "id": "uuid:a59870f2-8fa1-4cbf-9822-e1565922e3d1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:a9135246-4680-4183-b3a0-ea902313e04b",
              "uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:06b36f25-9655-4795-a67e-51f17d95c50a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806",
              "uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:a475a79b-06a2-400c-9460-6de8a6772ac6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce",
              "uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:7755d20a-6e6d-4356-b9d6-51a65a971dfb",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba",
              "uuid:a9135246-4680-4183-b3a0-ea902313e04b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:fe560591-08a1-4c35-998b-bee91f67ca50",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d",
              "uuid:a9135246-4680-4183-b3a0-ea902313e04b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:d377883b-98a1-43bf-a10f-bffeeb530993",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba",
              "uuid:40a76a4c-fff8-4156-8071-61423b0d44e9"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:689a0716-0880-4a1b-8454-ba189e331ee6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d",
              "uuid:40a76a4c-fff8-4156-8071-61423b0d44e9"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:74d06171-c161-4193-aea9-11cf904dd554",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d",
              "uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:79014769-c1f8-4ffd-ae8a-2f43b1a5118d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:40a76a4c-fff8-4156-8071-61423b0d44e9",
              "uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb",
              "uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:a49e4e7d-1f64-4162-9535-ac936901c370",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158",
              "uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.998
          }
        },
        {
          "id": "uuid:f15f5cb8-bee6-4d84-951a-b4821a00cccf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158",
              "uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1",
              "uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 2.0
          }
        },
        {
          "id": "uuid:8eefa72f-3f34-4866-a4cf-ebdde5d2483e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806",
              "uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:52d7c66c-e1f2-49c4-a670-8e1a80c816a2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac",
              "uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:44d3831e-c643-48f4-989b-d7ca9d2598bf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1",
              "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:123ff795-71e3-489c-89c8-8a1e53864313",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1",
              "uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        }
      ]
    },
    {
      "id": "uuid:20ac1c64-b5d9-407a-91ae-f241cb3b4d4e",
      "type": "FeatureCollection",
      "featureType": "surv:ObservedVector",
      "features": [
        {
          "id": "uuid:13b59b93-6f0f-4773-a8b7-88401c9c1fae",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:c4aa05ba-997c-4b7e-b5bd-071f385e17d5",
              "uuid:489a1c4c-0ac4-470f-9757-e50bc71d3aa8"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:ff22d8d8-5d2e-4fdd-97ce-d80e2b48b5de",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:489a1c4c-0ac4-470f-9757-e50bc71d3aa8",
              "uuid:e18342eb-1272-4582-b6bf-3c9d7e138667"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:5a34b8a2-dac0-4ad4-8a59-cbee38b407c8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:e18342eb-1272-4582-b6bf-3c9d7e138667",
              "uuid:313731cb-1e0c-469c-b64e-06af1629ba2a"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:2fbdbc42-6443-4bc2-bd42-0c77a3e9c9fc",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:313731cb-1e0c-469c-b64e-06af1629ba2a",
              "uuid:c7c0b650-ed8a-496d-bff5-46d9953137fd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:54943d43-ea1a-4a8c-8cbb-c6d89187e842",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:c7c0b650-ed8a-496d-bff5-46d9953137fd",
              "uuid:4261adb8-2fa6-4ce6-94cc-d4906f2a40fc"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:cf0f9b8d-c8d2-4691-8c41-086e18375574",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:4261adb8-2fa6-4ce6-94cc-d4906f2a40fc",
              "uuid:d9e43ed6-9387-4180-a25a-3b3208422263"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:ed1e393e-d7f5-4a85-93b1-f08812b85014",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:d9e43ed6-9387-4180-a25a-3b3208422263",
              "uuid:4a98b01f-7e97-4049-9f39-a0ba56758ce9"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:d2ebb167-17a2-4bd0-8411-97f83c92d9e6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:4a98b01f-7e97-4049-9f39-a0ba56758ce9",
              "uuid:be40befb-8498-4793-9ed6-d0e72c1a1d5b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:d75b510f-9b88-4a82-bac4-4de995f4a1b9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:be40befb-8498-4793-9ed6-d0e72c1a1d5b",
              "uuid:7023d838-169a-4b01-a85f-e2b270751a7c"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:7914b52a-e13d-4d79-9f76-43e040fa939f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:7023d838-169a-4b01-a85f-e2b270751a7c",
              "uuid:fbebc23c-cdef-4d02-bced-5b5bb7686b1f"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:b4b815fe-eb25-401b-b65f-f7a020da8944",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:fbebc23c-cdef-4d02-bced-5b5bb7686b1f",
              "uuid:d72f308c-110a-459d-ae5f-9d459d9ae51e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:41e63da1-bee7-48da-be90-527c99fa38d8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:d72f308c-110a-459d-ae5f-9d459d9ae51e",
              "uuid:a221f31d-26c6-46f0-872a-567244fa5447"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:e9b94664-2b7a-4e97-a565-4bcce3896392",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:a221f31d-26c6-46f0-872a-567244fa5447",
              "uuid:3cf6b3c0-3acc-4720-a643-d885d6951b2a"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:1ce937ba-14a1-48dc-b65c-3b50e98ceb37",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:3cf6b3c0-3acc-4720-a643-d885d6951b2a",
              "uuid:67c660f1-0e49-4ee4-996d-4d453fe6209b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:6e614af5-e74d-4c6d-b841-85ac4dd93250",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:67c660f1-0e49-4ee4-996d-4d453fe6209b",
              "uuid:3c6c5996-1c40-4e52-932b-13cc41fcee71"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:379f8fe1-7311-4db2-a5b3-8b7cf5dd0882",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:3c6c5996-1c40-4e52-932b-13cc41fcee71",
              "uuid:97571fb3-9987-49b3-b54c-88b8adcd2655"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:780d3b13-0263-4449-ad1e-1627fd0042aa",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:97571fb3-9987-49b3-b54c-88b8adcd2655",
              "uuid:4c83a22b-2309-4240-97b1-d130cb1a8d43"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:fd23e6be-fb9a-44fd-8ad1-55df298d506a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:4c83a22b-2309-4240-97b1-d130cb1a8d43",
              "uuid:291b7f49-8f18-498e-bd2f-7bfb6760eaa2"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:f7fb3296-07ab-42f6-937f-0ebbe0ee98ea",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:291b7f49-8f18-498e-bd2f-7bfb6760eaa2",
              "uuid:c4aa05ba-997c-4b7e-b5bd-071f385e17d5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        }
      ]
    }
  ],
  "rings": [
    {
      "id": "uuid:a212bf84-0fc3-4c11-b9ae-6324149206bf",
      "type": "FeatureCollection",
      "featureType": "Ring",
      "features": [
        {
          "id": "uuid:0c487fe8-39b5-4a89-8c97-ac022dbe1fce",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:b62a056e-a219-4fc5-942e-3fb4c48d708d",
                "orientation": "+"
              },
              {
                "ref": "uuid:a1386220-8990-43a9-800c-4ed3b3e323f6",
                "orientation": "+"
              },
              {
                "ref": "uuid:32ccd411-43f6-46f2-9fc8-0ae0a18e650d",
                "orientation": "+"
              },
              {
                "ref": "uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.994
          }
        },
        {
          "id": "uuid:777a02bc-f2d3-4b31-bc4c-7180bc13a31c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546",
                "orientation": "+"
              },
              {
                "ref": "uuid:32ccd411-43f6-46f2-9fc8-0ae0a18e650d",
                "orientation": "-"
              },
              {
                "ref": "uuid:5ad51e3c-9924-4a4f-83b3-a1b2605b56de",
                "orientation": "+"
              },
              {
                "ref": "uuid:3accc489-4f33-4a69-ae3c-ad302bea4102",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.998
          }
        },
        {
          "id": "uuid:e6fb50a4-9678-4e44-b31c-70cd67726e49",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:94185a2f-45b0-4c79-95c0-44fef184e2c7",
                "orientation": "+"
              },
              {
                "ref": "uuid:b62a056e-a219-4fc5-942e-3fb4c48d708d",
                "orientation": "-"
              },
              {
                "ref": "uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147",
                "orientation": "+"
              },
              {
                "ref": "uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:f6d80de2-ba10-4748-9c16-f74eafa5e454",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:5ad51e3c-9924-4a4f-83b3-a1b2605b56de",
                "orientation": "-"
              },
              {
                "ref": "uuid:a1386220-8990-43a9-800c-4ed3b3e323f6",
                "orientation": "-"
              },
              {
                "ref": "uuid:94185a2f-45b0-4c79-95c0-44fef184e2c7",
                "orientation": "-"
              },
              {
                "ref": "uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3",
                "orientation": "+"
              },
              {
                "ref": "uuid:cd257d47-13ca-40db-b196-d78c51872a3b",
                "orientation": "+"
              },
              {
                "ref": "uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:abe41c77-3601-4c23-bc85-69d574e758f2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52",
                "orientation": "+"
              },
              {
                "ref": "uuid:26974107-8cc7-472a-98b1-bac952f4c924",
                "orientation": "+"
              },
              {
                "ref": "uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3",
                "orientation": "-"
              },
              {
                "ref": "uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.998
          }
        },
        {
          "id": "uuid:cb61c522-2984-4aea-92b7-68b08b3da84d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67",
                "orientation": "+"
              },
              {
                "ref": "uuid:380f1122-b209-41f6-8fd0-f013d06de253",
                "orientation": "+"
              },
              {
                "ref": "uuid:cd257d47-13ca-40db-b196-d78c51872a3b",
                "orientation": "-"
              },
              {
                "ref": "uuid:26974107-8cc7-472a-98b1-bac952f4c924",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:89e58766-afab-4d1f-8775-1311275c857a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546",
                "orientation": "-"
              },
              {
                "ref": "uuid:5ef7922d-72e6-4c88-bb01-b81714eee525",
                "orientation": "+"
              },
              {
                "ref": "uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67",
                "orientation": "-"
              },
              {
                "ref": "uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52",
                "orientation": "-"
              },
              {
                "ref": "uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147",
                "orientation": "-"
              },
              {
                "ref": "uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:1c3ca0ce-fbaf-4929-bd1d-44ca6c3fd3bc",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:5ef7922d-72e6-4c88-bb01-b81714eee525",
                "orientation": "-"
              },
              {
                "ref": "uuid:3accc489-4f33-4a69-ae3c-ad302bea4102",
                "orientation": "-"
              },
              {
                "ref": "uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5",
                "orientation": "-"
              },
              {
                "ref": "uuid:380f1122-b209-41f6-8fd0-f013d06de253",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        },
        {
          "id": "uuid:356935be-07f0-4a7f-895d-78848298cc32",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:12307863-0535-49c5-9baf-ae6d2dc7241a",
                "orientation": "+"
              },
              {
                "ref": "uuid:647124d6-678c-45aa-98ce-7e268086f742",
                "orientation": "+"
              },
              {
                "ref": "uuid:75c75f5e-3c22-4b05-a4b7-5ce037bbd55b",
                "orientation": "+"
              },
              {
                "ref": "uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:b062d93a-cabd-45e1-845e-ca90e3c39730",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:647124d6-678c-45aa-98ce-7e268086f742",
                "orientation": "-"
              },
              {
                "ref": "uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1",
                "orientation": "+"
              },
              {
                "ref": "uuid:d24a9e84-362c-4d6e-84f2-c1a16900185e",
                "orientation": "-"
              },
              {
                "ref": "uuid:7b34e432-9892-4867-bebf-485a47054777",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.994
          }
        },
        {
          "id": "uuid:c47c2ae9-6ff5-4b26-a293-ca83b7046ac0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:d24a9e84-362c-4d6e-84f2-c1a16900185e",
                "orientation": "+"
              },
              {
                "ref": "uuid:73751771-3e38-4526-8d49-9465d947b6dd",
                "orientation": "+"
              },
              {
                "ref": "uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8",
                "orientation": "+"
              },
              {
                "ref": "uuid:cc1617ec-c00c-42c4-abaa-9237964d2f9c",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.998
          }
        },
        {
          "id": "uuid:55e481c1-3084-42de-b1b1-020ae90b594c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:75c75f5e-3c22-4b05-a4b7-5ce037bbd55b",
                "orientation": "-"
              },
              {
                "ref": "uuid:7b34e432-9892-4867-bebf-485a47054777",
                "orientation": "-"
              },
              {
                "ref": "uuid:cc1617ec-c00c-42c4-abaa-9237964d2f9c",
                "orientation": "-"
              },
              {
                "ref": "uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936",
                "orientation": "+"
              },
              {
                "ref": "uuid:6b9374b0-671d-4603-9349-748b4c231518",
                "orientation": "+"
              },
              {
                "ref": "uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:70d6787b-0280-42a1-a46f-4c3ea010cbce",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6",
                "orientation": "+"
              },
              {
                "ref": "uuid:26974107-8cc7-472a-98b1-bac952f4c924",
                "orientation": "+"
              },
              {
                "ref": "uuid:6b9374b0-671d-4603-9349-748b4c231518",
                "orientation": "-"
              },
              {
                "ref": "uuid:0a69a1c6-2a79-4e71-9149-b488b01ac1e0",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:c4eecceb-c7c0-4b2d-a462-de459de385f7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:33deda4d-e880-418b-9b90-93bc255670db",
                "orientation": "+"
              },
              {
                "ref": "uuid:73751771-3e38-4526-8d49-9465d947b6dd",
                "orientation": "-"
              },
              {
                "ref": "uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1",
                "orientation": "-"
              },
              {
                "ref": "uuid:12307863-0535-49c5-9baf-ae6d2dc7241a",
                "orientation": "-"
              },
              {
                "ref": "uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52",
                "orientation": "+"
              },
              {
                "ref": "uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:d627f2d7-d27f-40bf-b30a-2298c50c5b88",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:33deda4d-e880-418b-9b90-93bc255670db",
                "orientation": "-"
              },
              {
                "ref": "uuid:0a69a1c6-2a79-4e71-9149-b488b01ac1e0",
                "orientation": "-"
              },
              {
                "ref": "uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936",
                "orientation": "-"
              },
              {
                "ref": "uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        },
        {
          "id": "uuid:6d219ad2-36b7-4f0d-bc02-deba6c975ea2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:d78450ce-0f63-4c04-811a-5b87b9591b0f",
                "orientation": "+"
              },
              {
                "ref": "uuid:887b4e80-25a7-491c-9f99-c567acf7a098",
                "orientation": "-"
              },
              {
                "ref": "uuid:9557e813-61c9-4ae4-a097-fe3ccf104c34",
                "orientation": "+"
              },
              {
                "ref": "uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.995
          }
        },
        {
          "id": "uuid:0e17be70-1378-48cc-b88b-f12de3d9e112",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:84b3b6af-d3cb-402a-8ef3-1ed8b8b9c50b",
                "orientation": "+"
              },
              {
                "ref": "uuid:b24b3a09-48c1-4fa3-a21c-71641207feae",
                "orientation": "+"
              },
              {
                "ref": "uuid:9d3409e1-67b8-4a8c-9ee6-981eaff19cf5",
                "orientation": "+"
              },
              {
                "ref": "uuid:887b4e80-25a7-491c-9f99-c567acf7a098",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:bdf1b7f8-6f4e-4652-a24e-2d7328101807",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:105668a3-bd19-4802-a5ce-c200f1b06fad",
                "orientation": "+"
              },
              {
                "ref": "uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5",
                "orientation": "+"
              },
              {
                "ref": "uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147",
                "orientation": "-"
              },
              {
                "ref": "uuid:6627f055-85b5-44c1-a7f8-a9c5b9c9fa9f",
                "orientation": "+"
              },
              {
                "ref": "uuid:b24b3a09-48c1-4fa3-a21c-71641207feae",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:6b4acb54-1cd3-42d5-9845-7a7f57b26fab",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:d78450ce-0f63-4c04-811a-5b87b9591b0f",
                "orientation": "-"
              },
              {
                "ref": "uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f",
                "orientation": "+"
              },
              {
                "ref": "uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a",
                "orientation": "+"
              },
              {
                "ref": "uuid:d001066e-9581-4f45-880e-4810c005aeb4",
                "orientation": "+"
              },
              {
                "ref": "uuid:105668a3-bd19-4802-a5ce-c200f1b06fad",
                "orientation": "-"
              },
              {
                "ref": "uuid:84b3b6af-d3cb-402a-8ef3-1ed8b8b9c50b",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 39.987
          }
        },
        {
          "id": "uuid:22851efb-93f5-492d-9a9c-102d1df785c1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:150f57fd-8d57-4533-9922-96732defb792",
                "orientation": "+"
              },
              {
                "ref": "uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52",
                "orientation": "-"
              },
              {
                "ref": "uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5",
                "orientation": "-"
              },
              {
                "ref": "uuid:d001066e-9581-4f45-880e-4810c005aeb4",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.998
          }
        },
        {
          "id": "uuid:f02f10fc-79f0-4ba7-aa31-e50da369b0e0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f9f5fd81-680a-43f5-a04e-adc180a9ecdd",
                "orientation": "+"
              },
              {
                "ref": "uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f",
                "orientation": "-"
              },
              {
                "ref": "uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561",
                "orientation": "-"
              },
              {
                "ref": "uuid:a1660706-a249-4fd6-ab29-809940a8aedf",
                "orientation": "+"
              },
              {
                "ref": "uuid:5ef7922d-72e6-4c88-bb01-b81714eee525",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.996
          }
        },
        {
          "id": "uuid:5943a3e8-75e7-45c0-9b66-3f29e77150cf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f9f5fd81-680a-43f5-a04e-adc180a9ecdd",
                "orientation": "-"
              },
              {
                "ref": "uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67",
                "orientation": "-"
              },
              {
                "ref": "uuid:150f57fd-8d57-4533-9922-96732defb792",
                "orientation": "-"
              },
              {
                "ref": "uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:0934c81e-8a94-41c5-8103-3365b8c33853",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:6627f055-85b5-44c1-a7f8-a9c5b9c9fa9f",
                "orientation": "-"
              },
              {
                "ref": "uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5",
                "orientation": "-"
              },
              {
                "ref": "uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546",
                "orientation": "-"
              },
              {
                "ref": "uuid:a1660706-a249-4fd6-ab29-809940a8aedf",
                "orientation": "-"
              },
              {
                "ref": "uuid:9557e813-61c9-4ae4-a097-fe3ccf104c34",
                "orientation": "-"
              },
              {
                "ref": "uuid:9d3409e1-67b8-4a8c-9ee6-981eaff19cf5",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 35.99
          }
        },
        {
          "id": "uuid:cb6708a2-df56-4993-9699-9542c85c4f86",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:a59870f2-8fa1-4cbf-9822-e1565922e3d1",
                "orientation": "+"
              },
              {
                "ref": "uuid:06b36f25-9655-4795-a67e-51f17d95c50a",
                "orientation": "+"
              },
              {
                "ref": "uuid:a475a79b-06a2-400c-9460-6de8a6772ac6",
                "orientation": "+"
              },
              {
                "ref": "uuid:7755d20a-6e6d-4356-b9d6-51a65a971dfb",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:4d4b7e04-ac90-4447-9d86-28db1ad4ac41",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:fe560591-08a1-4c35-998b-bee91f67ca50",
                "orientation": "+"
              },
              {
                "ref": "uuid:7755d20a-6e6d-4356-b9d6-51a65a971dfb",
                "orientation": "-"
              },
              {
                "ref": "uuid:d377883b-98a1-43bf-a10f-bffeeb530993",
                "orientation": "+"
              },
              {
                "ref": "uuid:689a0716-0880-4a1b-8454-ba189e331ee6",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:315d5051-9eb9-4c1a-9434-a8d2e3e1d3f5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:74d06171-c161-4193-aea9-11cf904dd554",
                "orientation": "+"
              },
              {
                "ref": "uuid:689a0716-0880-4a1b-8454-ba189e331ee6",
                "orientation": "+"
              },
              {
                "ref": "uuid:79014769-c1f8-4ffd-ae8a-2f43b1a5118d",
                "orientation": "+"
              },
              {
                "ref": "uuid:12307863-0535-49c5-9baf-ae6d2dc7241a",
                "orientation": "-"
              },
              {
                "ref": "uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:9ca25210-c370-4b91-b92f-33f5e1921889",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:74d06171-c161-4193-aea9-11cf904dd554",
                "orientation": "-"
              },
              {
                "ref": "uuid:d001066e-9581-4f45-880e-4810c005aeb4",
                "orientation": "-"
              },
              {
                "ref": "uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f",
                "orientation": "+"
              },
              {
                "ref": "uuid:a49e4e7d-1f64-4162-9535-ac936901c370",
                "orientation": "+"
              },
              {
                "ref": "uuid:a59870f2-8fa1-4cbf-9822-e1565922e3d1",
                "orientation": "-"
              },
              {
                "ref": "uuid:fe560591-08a1-4c35-998b-bee91f67ca50",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 39.988
          }
        },
        {
          "id": "uuid:6379c9a9-86c4-45a0-a508-a62309a4e766",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f15f5cb8-bee6-4d84-951a-b4821a00cccf",
                "orientation": "+"
              },
              {
                "ref": "uuid:33deda4d-e880-418b-9b90-93bc255670db",
                "orientation": "+"
              },
              {
                "ref": "uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55",
                "orientation": "+"
              },
              {
                "ref": "uuid:06b36f25-9655-4795-a67e-51f17d95c50a",
                "orientation": "-"
              },
              {
                "ref": "uuid:a49e4e7d-1f64-4162-9535-ac936901c370",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 17.996
          }
        },
        {
          "id": "uuid:542934a9-f32d-401e-8e05-05d529492483",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:150f57fd-8d57-4533-9922-96732defb792",
                "orientation": "+"
              },
              {
                "ref": "uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6",
                "orientation": "-"
              },
              {
                "ref": "uuid:f15f5cb8-bee6-4d84-951a-b4821a00cccf",
                "orientation": "-"
              },
              {
                "ref": "uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:7d373590-b767-45a5-8e6a-120d938d3736",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55",
                "orientation": "-"
              },
              {
                "ref": "uuid:73751771-3e38-4526-8d49-9465d947b6dd",
                "orientation": "-"
              },
              {
                "ref": "uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1",
                "orientation": "-"
              },
              {
                "ref": "uuid:79014769-c1f8-4ffd-ae8a-2f43b1a5118d",
                "orientation": "-"
              },
              {
                "ref": "uuid:d377883b-98a1-43bf-a10f-bffeeb530993",
                "orientation": "-"
              },
              {
                "ref": "uuid:a475a79b-06a2-400c-9460-6de8a6772ac6",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 35.99
          }
        },
        {
          "id": "uuid:2eba2a4e-7b02-4921-894b-7882959e13fd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:8eefa72f-3f34-4866-a4cf-ebdde5d2483e",
                "orientation": "-"
              },
              {
                "ref": "uuid:a49e4e7d-1f64-4162-9535-ac936901c370",
                "orientation": "-"
              },
              {
                "ref": "uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f",
                "orientation": "-"
              },
              {
                "ref": "uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a",
                "orientation": "-"
              },
              {
                "ref": "uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 19.993
          }
        },
        {
          "id": "uuid:abd9ba1e-6d89-417d-a8ee-2e84d2b296dc",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:52d7c66c-e1f2-49c4-a670-8e1a80c816a2",
                "orientation": "+"
              },
              {
                "ref": "uuid:06b36f25-9655-4795-a67e-51f17d95c50a",
                "orientation": "-"
              },
              {
                "ref": "uuid:8eefa72f-3f34-4866-a4cf-ebdde5d2483e",
                "orientation": "+"
              },
              {
                "ref": "uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.997
          }
        },
        {
          "id": "uuid:aaee3689-d94d-4193-af47-cdf29e45d3e3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:52d7c66c-e1f2-49c4-a670-8e1a80c816a2",
                "orientation": "-"
              },
              {
                "ref": "uuid:a1660706-a249-4fd6-ab29-809940a8aedf",
                "orientation": "+"
              },
              {
                "ref": "uuid:44d3831e-c643-48f4-989b-d7ca9d2598bf",
                "orientation": "-"
              },
              {
                "ref": "uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 11.996
          }
        },
        {
          "id": "uuid:71721739-f1d5-4cac-9a53-34c39c7e2ce2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:123ff795-71e3-489c-89c8-8a1e53864313",
                "orientation": "+"
              },
              {
                "ref": "uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5",
                "orientation": "-"
              },
              {
                "ref": "uuid:cd257d47-13ca-40db-b196-d78c51872a3b",
                "orientation": "-"
              },
              {
                "ref": "uuid:6b9374b0-671d-4603-9349-748b4c231518",
                "orientation": "-"
              },
              {
                "ref": "uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 15.992
          }
        },
        {
          "id": "uuid:2ff15613-8fa2-4410-af09-0f42e2c83dd1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:44d3831e-c643-48f4-989b-d7ca9d2598bf",
                "orientation": "+"
              },
              {
                "ref": "uuid:3accc489-4f33-4a69-ae3c-ad302bea4102",
                "orientation": "-"
              },
              {
                "ref": "uuid:123ff795-71e3-489c-89c8-8a1e53864313",
                "orientation": "-"
              },
              {
                "ref": "uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        }
      ]
    }
  ],
  "faces": [
    {
      "id": "uuid:b877b36c-fa85-40c3-b254-fe4d8cbf637c",
      "type": "FeatureCollection",
      "featureType": "Face",
      "features": [
        {
          "id": "uuid:509fb96a-ed61-4418-a897-1cc9a394d7d6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:0c487fe8-39b5-4a89-8c97-ac022dbe1fce",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999937695,
              2.1252341604305102e-06,
              2.818552790910351e-06
            ],
            "area": 23.991,
            "description": "East-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:2f59c9a6-1cd7-4cc0-86df-cc3c44d22286",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:777a02bc-f2d3-4b31-bc4c-7180bc13a31c",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1347501594712472e-06,
              -0.9999999999976475,
              -3.8463119361166447e-07
            ],
            "area": 17.997,
            "description": "South-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:79feb69f-05d4-4ef0-b880-44276e524854",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:e6fb50a4-9678-4e44-b31c-70cd67726e49",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1160627370878684e-06,
              0.9999999999964104,
              1.6436244147846745e-06
            ],
            "area": 23.994,
            "description": "North-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:41901fb2-753b-4b9f-8687-ae11d6f69439",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:f6d80de2-ba10-4748-9c16-f74eafa5e454",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 55.969,
            "description": "Top boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:2ec797d0-35d9-46fc-a4ab-52794d397416",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:abe41c77-3601-4c23-bc85-69d574e758f2",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999965267,
              -2.120773346758996e-06,
              -1.5650321292142593e-06
            ],
            "area": 11.997,
            "description": "West-facing boundary face, [Upper East, Upper West]"
          }
        },
        {
          "id": "uuid:608c4fbe-df28-4c78-bec6-f7560f6a40ca",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:cb61c522-2984-4aea-92b7-68b08b3da84d",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.124969241213484e-06,
              -0.9999999999972277,
              -1.0145170209822307e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Upper East, Stairwell]"
          }
        },
        {
          "id": "uuid:2baad9ae-e5b4-48eb-81c6-736fd1500fb9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:89e58766-afab-4d1f-8775-1311275c857a",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.0,
              -0.0,
              -1.0
            ],
            "area": 55.969,
            "description": "Bottom boundary face, [Upper East, Lower East]"
          }
        },
        {
          "id": "uuid:5635ffda-d1a0-463c-93e4-2c256e049f6e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:1c3ca0ce-fbaf-4929-bd1d-44ca6c3fd3bc",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999959679,
              -2.1300537012889316e-06,
              -1.8780230806249394e-06
            ],
            "area": 11.994,
            "description": "West-facing boundary face, [Upper East, Stairwell]"
          }
        },
        {
          "id": "uuid:200595fe-9d0a-4fa0-a16f-374b28cb0ad0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:356935be-07f0-4a7f-895d-78848298cc32",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1160024131438693e-06,
              0.9999999999964108,
              1.6434718457076753e-06
            ],
            "area": 23.994,
            "description": "North-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:9ce5b406-dab7-4afa-8fbd-2d5101aec77d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:b062d93a-cabd-45e1-845e-ca90e3c39730",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999976931,
              -2.1251782237133477e-06,
              -3.124220601837041e-07
            ],
            "area": 23.991,
            "description": "West-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:bd5ceea7-ea06-4191-9b3c-2905569f3035",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:c47c2ae9-6ff5-4b26-a293-ca83b7046ac0",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1344389761872487e-06,
              -0.9999999999976482,
              -3.846345366682647e-07
            ],
            "area": 17.997,
            "description": "South-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:05d0ee6b-baed-4a58-8c57-14c12cfe9fe0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:55e481c1-3084-42de-b1b1-020ae90b594c",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 55.968,
            "description": "Top boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:6ae1d5a0-8bf8-4675-a048-f92b7704c482",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:70d6787b-0280-42a1-a46f-4c3ea010cbce",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.125434709040482e-06,
              -0.9999999999972267,
              -1.01451768633823e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Upper West, Stairwell]"
          }
        },
        {
          "id": "uuid:f2f50332-6f50-47ab-868f-fdc520e68848",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:c4eecceb-c7c0-4b2d-a462-de459de385f7",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 55.968,
            "description": "Bottom boundary face, [Upper West, Lower West]"
          }
        },
        {
          "id": "uuid:2a36d343-55e4-4ddb-8c44-f7612baa99ce",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:d627f2d7-d27f-40bf-b30a-2298c50c5b88",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999969489,
              2.129537331624891e-06,
              1.251893000853936e-06
            ],
            "area": 11.994,
            "description": "East-facing boundary face, [Upper West, Stairwell]"
          }
        },
        {
          "id": "uuid:741587b8-5d4f-4921-979e-92cebc0bc61a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:6d219ad2-36b7-4f0d-bc02-deba6c975ea2",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1354470739553984e-06,
              -0.9999999999977187,
              -4.90443042600462e-08
            ],
            "area": 23.992,
            "description": "South-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:c6a3d176-abfb-4f53-a6d8-cc594118b214",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:0e17be70-1378-48cc-b88b-f12de3d9e112",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.999999999992833,
              2.1277472132566447e-06,
              3.1315738370324766e-06
            ],
            "area": 29.991,
            "description": "East-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:ce095212-8b35-48bf-b77d-57ba8bcf9882",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:bdf1b7f8-6f4e-4652-a24e-2d7328101807",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.112030056897979e-06,
              0.9999999999964635,
              1.616305591688749e-06
            ],
            "area": 29.991,
            "description": "North-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:a6c01635-707b-4359-8eb5-23d324d7a7a8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:6b4acb54-1cd3-42d5-9845-7a7f57b26fab",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 87.948,
            "description": "Bottom boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:6837ca1f-41c3-4002-9251-7113835def85",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:22851efb-93f5-492d-9a9c-102d1df785c1",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999965249,
              -2.121172640933992e-06,
              -1.565526879734256e-06
            ],
            "area": 11.997,
            "description": "West-facing boundary face, [Lower East, Lower West]"
          }
        },
        {
          "id": "uuid:c45f774d-8ba2-41a8-8edd-a08921a630b9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:f02f10fc-79f0-4ba7-aa31-e50da369b0e0",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999959602,
              -2.131841094675915e-06,
              -1.8801796836009255e-06
            ],
            "area": 17.994,
            "description": "West-facing boundary face, [Lower East, Stairwell]"
          }
        },
        {
          "id": "uuid:335305a1-d6a4-499f-8105-8b5e2f9a7383",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:5943a3e8-75e7-45c0-9b66-3f29e77150cf",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.122639235232521e-06,
              -0.9999999999972454,
              -1.001788957290246e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Lower East, Stairwell]"
          }
        },
        {
          "id": "uuid:f55c0e40-89fe-4a23-8d11-aff91c754214",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:0934c81e-8a94-41c5-8103-3365b8c33853",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 31.982,
            "description": "Top boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:933a6a7d-dfe4-4bae-ae48-3385e9f22916",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:cb6708a2-df56-4993-9699-9542c85c4f86",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1381834939563843e-06,
              -0.9999999999977119,
              -6.782998719558046e-08
            ],
            "area": 23.994,
            "description": "South-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:287abc0b-28ad-41ec-a7ff-eec8d4192c2b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:4d4b7e04-ac90-4447-9d86-28db1ad4ac41",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999977369,
              -2.1275050385904402e-06,
              5.802619591563473e-10
            ],
            "area": 29.991,
            "description": "West-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:079558dc-5401-4bbb-ae7a-b3e566a6737d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:315d5051-9eb9-4c1a-9434-a8d2e3e1d3f5",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1147242879319153e-06,
              0.9999999999964325,
              1.6319025594187058e-06
            ],
            "area": 29.991,
            "description": "North-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:d5f598a6-8c7b-4254-a710-5a0238368a6b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:9ca25210-c370-4b91-b92f-33f5e1921889",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 87.95,
            "description": "Bottom boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:d8f2444f-769d-4fe5-bfb7-96c75eb21aa3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:6379c9a9-86c4-45a0-a508-a62309a4e766",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999969424,
              2.131971756477877e-06,
              1.2529856403859282e-06
            ],
            "area": 17.994,
            "description": "East-facing boundary face, [Lower West, Stairwell]"
          }
        },
        {
          "id": "uuid:09582fa5-0931-481b-9203-0dba27308ddd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:542934a9-f32d-401e-8e05-05d529492483",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1233376085545115e-06,
              -0.999999999997241,
              -1.004738808137242e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Lower West, Stairwell]"
          }
        },
        {
          "id": "uuid:b3470cac-a616-4768-a74b-182208496ee1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:7d373590-b767-45a5-8e6a-120d938d3736",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 31.982,
            "description": "Top boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:fa9fc866-8b5d-4056-9afb-a5294b52eea3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:2eba2a4e-7b02-4921-894b-7882959e13fd",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              1.5695020611744682e-06,
              4.6264846992854333e-07,
              -0.9999999999986614
            ],
            "area": 23.983,
            "description": "Bottom boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:afa0638d-9d57-4b2a-ad58-af68daa3726a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:abd9ba1e-6d89-417d-a8ee-2e84d2b296dc",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1368444112603913e-06,
              -0.9999999999977152,
              -6.208482429009232e-08
            ],
            "area": 11.996,
            "description": "South-facing boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:e2dd1def-1a2e-4e60-9db0-5e4c4095e4c7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:aaee3689-d94d-4193-af47-cdf29e45d3e3",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -1.5667086656316248e-06,
              -1.5697701705156244e-07,
              0.9999999999987605
            ],
            "area": 7.996,
            "description": "Top boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:cace1bee-957e-4b24-8343-47cd6827a09e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:71721739-f1d5-4cac-9a53-34c39c7e2ce2",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -1.566941334935351e-06,
              -6.103726788333472e-07,
              0.999999999998586
            ],
            "area": 15.983,
            "description": "Top boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:7385f01e-11f8-4811-bab6-3abca0b2c6f7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:2ff15613-8fa2-4410-af09-0f42e2c83dd1",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1346333832552482e-06,
              -0.9999999999976478,
              -3.8447764578726455e-07
            ],
            "area": 11.994,
            "description": "South-facing boundary face, [Stairwell]"
          }
        }
      ]
    }
  ],
  "shells": [
    {
      "id": "uuid:4239e2e9-e975-4d03-9c5a-65321c4830b1",
      "type": "FeatureCollection",
      "featureType": "Shell",
      "features": [
        {
          "id": "uuid:26924195-da93-43af-946d-237910710449",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:509fb96a-ed61-4418-a897-1cc9a394d7d6",
                "orientation": "+"
              },
              {
                "ref": "uuid:2f59c9a6-1cd7-4cc0-86df-cc3c44d22286",
                "orientation": "+"
              },
              {
                "ref": "uuid:79feb69f-05d4-4ef0-b880-44276e524854",
                "orientation": "+"
              },
              {
                "ref": "uuid:41901fb2-753b-4b9f-8687-ae11d6f69439",
                "orientation": "+"
              },
              {
                "ref": "uuid:2ec797d0-35d9-46fc-a4ab-52794d397416",
                "orientation": "+"
              },
              {
                "ref": "uuid:608c4fbe-df28-4c78-bec6-f7560f6a40ca",
                "orientation": "+"
              },
              {
                "ref": "uuid:2baad9ae-e5b4-48eb-81c6-736fd1500fb9",
                "orientation": "+"
              },
              {
                "ref": "uuid:5635ffda-d1a0-463c-93e4-2c256e049f6e",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Upper East"
          }
        },
        {
          "id": "uuid:89957e86-89d5-459d-a170-0c7c916f2382",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:200595fe-9d0a-4fa0-a16f-374b28cb0ad0",
                "orientation": "+"
              },
              {
                "ref": "uuid:9ce5b406-dab7-4afa-8fbd-2d5101aec77d",
                "orientation": "+"
              },
              {
                "ref": "uuid:bd5ceea7-ea06-4191-9b3c-2905569f3035",
                "orientation": "+"
              },
              {
                "ref": "uuid:05d0ee6b-baed-4a58-8c57-14c12cfe9fe0",
                "orientation": "+"
              },
              {
                "ref": "uuid:2ec797d0-35d9-46fc-a4ab-52794d397416",
                "orientation": "-"
              },
              {
                "ref": "uuid:6ae1d5a0-8bf8-4675-a048-f92b7704c482",
                "orientation": "+"
              },
              {
                "ref": "uuid:f2f50332-6f50-47ab-868f-fdc520e68848",
                "orientation": "+"
              },
              {
                "ref": "uuid:2a36d343-55e4-4ddb-8c44-f7612baa99ce",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Upper West"
          }
        },
        {
          "id": "uuid:9a31a4bf-8d83-4876-8bc3-df640512418a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:741587b8-5d4f-4921-979e-92cebc0bc61a",
                "orientation": "+"
              },
              {
                "ref": "uuid:c6a3d176-abfb-4f53-a6d8-cc594118b214",
                "orientation": "+"
              },
              {
                "ref": "uuid:ce095212-8b35-48bf-b77d-57ba8bcf9882",
                "orientation": "+"
              },
              {
                "ref": "uuid:a6c01635-707b-4359-8eb5-23d324d7a7a8",
                "orientation": "+"
              },
              {
                "ref": "uuid:6837ca1f-41c3-4002-9251-7113835def85",
                "orientation": "+"
              },
              {
                "ref": "uuid:c45f774d-8ba2-41a8-8edd-a08921a630b9",
                "orientation": "+"
              },
              {
                "ref": "uuid:335305a1-d6a4-499f-8105-8b5e2f9a7383",
                "orientation": "+"
              },
              {
                "ref": "uuid:2baad9ae-e5b4-48eb-81c6-736fd1500fb9",
                "orientation": "-"
              },
              {
                "ref": "uuid:f55c0e40-89fe-4a23-8d11-aff91c754214",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Lower East"
          }
        },
        {
          "id": "uuid:ddbbed6c-5a7d-4405-9d41-59677b9484ee",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:933a6a7d-dfe4-4bae-ae48-3385e9f22916",
                "orientation": "+"
              },
              {
                "ref": "uuid:287abc0b-28ad-41ec-a7ff-eec8d4192c2b",
                "orientation": "+"
              },
              {
                "ref": "uuid:079558dc-5401-4bbb-ae7a-b3e566a6737d",
                "orientation": "+"
              },
              {
                "ref": "uuid:d5f598a6-8c7b-4254-a710-5a0238368a6b",
                "orientation": "+"
              },
              {
                "ref": "uuid:d8f2444f-769d-4fe5-bfb7-96c75eb21aa3",
                "orientation": "+"
              },
              {
                "ref": "uuid:09582fa5-0931-481b-9203-0dba27308ddd",
                "orientation": "+"
              },
              {
                "ref": "uuid:6837ca1f-41c3-4002-9251-7113835def85",
                "orientation": "-"
              },
              {
                "ref": "uuid:b3470cac-a616-4768-a74b-182208496ee1",
                "orientation": "+"
              },
              {
                "ref": "uuid:f2f50332-6f50-47ab-868f-fdc520e68848",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Lower West"
          }
        },
        {
          "id": "uuid:1e877d2e-b9b0-4152-b693-fc4d76843142",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:fa9fc866-8b5d-4056-9afb-a5294b52eea3",
                "orientation": "+"
              },
              {
                "ref": "uuid:afa0638d-9d57-4b2a-ad58-af68daa3726a",
                "orientation": "+"
              },
              {
                "ref": "uuid:e2dd1def-1a2e-4e60-9db0-5e4c4095e4c7",
                "orientation": "+"
              },
              {
                "ref": "uuid:cace1bee-957e-4b24-8343-47cd6827a09e",
                "orientation": "+"
              },
              {
                "ref": "uuid:7385f01e-11f8-4811-bab6-3abca0b2c6f7",
                "orientation": "+"
              },
              {
                "ref": "uuid:5635ffda-d1a0-463c-93e4-2c256e049f6e",
                "orientation": "-"
              },
              {
                "ref": "uuid:2a36d343-55e4-4ddb-8c44-f7612baa99ce",
                "orientation": "-"
              },
              {
                "ref": "uuid:09582fa5-0931-481b-9203-0dba27308ddd",
                "orientation": "-"
              },
              {
                "ref": "uuid:d8f2444f-769d-4fe5-bfb7-96c75eb21aa3",
                "orientation": "-"
              },
              {
                "ref": "uuid:c45f774d-8ba2-41a8-8edd-a08921a630b9",
                "orientation": "-"
              },
              {
                "ref": "uuid:608c4fbe-df28-4c78-bec6-f7560f6a40ca",
                "orientation": "-"
              },
              {
                "ref": "uuid:335305a1-d6a4-499f-8105-8b5e2f9a7383",
                "orientation": "-"
              },
              {
                "ref": "uuid:6ae1d5a0-8bf8-4675-a048-f92b7704c482",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Stairwell"
          }
        }
      ]
    }
  ],
  "solids": [
    {
      "id": "uuid:057e31e4-e48d-4690-85f5-7f9bee5503ec",
      "type": "FeatureCollection",
      "featureType": "Solid",
      "features": [
        {
          "id": "uuid:59df3615-f39c-4cbb-a911-5f7d80b9034b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:26924195-da93-43af-946d-237910710449",
                "orientation": "+"
              }
            ],
            "relationships": [
              {
                "href": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
                "rel": "topology",
                "role": "within",
                "targetRole": "containingPrimaryParcel",
                "targetFeatureType": "PrimaryParcel"
              }
            ]
          },
          "properties": {
            "name": "Upper East",
            "floors": [
              2
            ],
            "volume": 167.907
          }
        },
        {
          "id": "uuid:1c7bd760-43d5-46ad-9a6b-3b8f3e558b11",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:89957e86-89d5-459d-a170-0c7c916f2382",
                "orientation": "+"
              }
            ],
            "relationships": [
              {
                "href": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
                "rel": "topology",
                "role": "containingPrimaryParcel",
                "targetFeatureType": "surv:PrimaryParcel"
              }
            ]
          },
          "properties": {
            "name": "Upper West",
            "floors": [
              2
            ],
            "volume": 167.904
          }
        },
        {
          "id": "uuid:dc91b809-03bf-49f2-849f-1e8071fad1d9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:9a31a4bf-8d83-4876-8bc3-df640512418a",
                "orientation": "+"
              }
            ],
            "relationships": [
              {
                "href": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
                "rel": "topology",
                "role": "containingPrimaryParcel",
                "targetFeatureType": "surv:PrimaryParcel"
              }
            ]
          },
          "properties": {
            "name": "Lower East",
            "floors": [
              1
            ],
            "volume": 263.913
          }
        },
        {
          "id": "uuid:950966fc-0c0e-4546-b5c6-41f73fa57be1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:ddbbed6c-5a7d-4405-9d41-59677b9484ee",
                "orientation": "+"
              }
            ],
            "relationships": [
              {
                "href": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
                "rel": "topology",
                "role": "containingPrimaryParcel",
                "targetFeatureType": "surv:PrimaryParcel"
              }
            ]
          },
          "properties": {
            "name": "Lower West",
            "floors": [
              1
            ],
            "volume": 263.85
          }
        },
        {
          "id": "uuid:b9b03d9f-fe75-4ec5-8696-294aefafe145",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:1e877d2e-b9b0-4152-b693-fc4d76843142",
                "orientation": "+"
              }
            ],
            "relationships": [
              {
                "href": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
                "rel": "topology",
                "role": "containingPrimaryParcel",
                "targetFeatureType": "surv:PrimaryParcel"
              }
            ]
          },
          "properties": {
            "name": "Stairwell",
            "floors": [
              1,
              2
            ],
            "volume": 119.806
          }
        }
      ]
    }
  ],
  "supportingDocuments": [],
  "annotations": [],
  "statistics": {
    "point_count": 57,
    "edge_count": 65,
    "ring_count": 35,
    "face_count": 35,
    "shell_count": 5,
    "solid_count": 5
  }
}
```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-3d/context.jsonld",
  "id": "uuid:e9901182-59a5-4f67-8093-942fef888bf2",
  "name": "DP 12347",
  "description": "Multi-solid test for Solid validation",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision",
  "surveyType": "wa-survey-type:SSA",
  "time": {
    "date": "2026-04-22"
  },
  "horizontalCRS": "epsg:7850",
  "verticalCRS": "epsg:5711",
  "bearingRotation": 0.0,
  "surveyTitle": "4 Unit Up/Down with Stairwell",
  "hasProvenance": [],
  "wasGeneratedBy": {
    "id": "uuid:389c096d-2d42-4b65-afa3-db52d19d8b2f",
    "endedAtTime": "2026-05-04T02:39:38.197690+00:00"
  },
  "features": [],
  "referencedCSDs": [],
  "points": [
    {
      "id": "uuid:6ae2b7e0-a540-40c7-81bc-45c2cac1d3e6",
      "type": "FeatureCollection",
      "featureType": "CadastralMark",
      "features": [
        {
          "id": "uuid:29d783d3-10bb-4882-908a-eb8151cc52ec",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779818303263,
              -31.88703552343606,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779818303263,
              -31.88703552343606,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779740952903,
              -31.887107661310704,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:3d450239-8099-4649-a355-565e58332111",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00779740952903,
              -31.887107661310704,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406164.425,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773398518112,
              -31.88710716621648,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773398518112,
              -31.88710716621648,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:d250661e-6383-4458-9323-bf347210311f",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:7970f2e9-9893-4e54-b249-187db718bd31",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076290656701,
              -31.887034203228236,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:85f5fe02-792e-44e4-908e-10240b79ddb5",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076290656701,
              -31.887034203228236,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471656.237,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:127223b8-ae77-4a0c-abe6-d76332e85af1",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00762829203471,
              -31.887106341099198,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00762829203471,
              -31.887106341099198,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.429,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769171638001,
              -31.88710683624614,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471648.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769171638001,
              -31.88710683624614,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471648.24,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:7f9a7128-b01c-4568-8241-29391e9a5d30",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              26.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              26.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773380229235,
              -31.88712520753267,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.427,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781835048558,
              -31.887125867514182,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781835048558,
              -31.887125867514182,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773379171989,
              -31.887125207450133,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:6d31e874-6317-43c3-b357-49a699f8a69d",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781931741749,
              -31.887035688404968,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:21a929df-71c5-47e2-a6d5-24f37bae8442",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00781931741749,
              -31.887035688404968,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406166.424,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771362434999,
              -31.88703486336026,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00773437190962,
              -31.88707110179026,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406158.426,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00771323751721,
              -31.887070936807078,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406156.427,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:a9135246-4680-4183-b3a0-ea902313e04b",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00760696414898,
              -31.887124217331177,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769152291053,
              -31.887124877479565,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471646.24,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00769152291053,
              -31.887124877479565,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00760696414898,
              -31.887124217331177,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471646.24,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076079312868,
              -31.887034038227714,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471656.237,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:40a76a4c-fff8-4156-8071-61423b0d44e9",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076079312868,
              -31.887034038227714,
              23.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406146.43,
              6471656.237,
              23.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-04T02:39:38.184691+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.007692103125,
              -31.887070771820383,
              20.0
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406154.428,
              6471652.238,
              20.0
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:c4aa05ba-997c-4b7e-b5bd-071f385e17d5",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0077434,
              -31.886833
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406159.038,
              6471678.639
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:489a1c4c-0ac4-470f-9757-e50bc71d3aa8",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076575,
              -31.8868496
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406150.931,
              6471676.724
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:e18342eb-1272-4582-b6bf-3c9d7e138667",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0075549,
              -31.8869004
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406141.279,
              6471671.005
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:313731cb-1e0c-469c-b64e-06af1629ba2a",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0074515,
              -31.8869993
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406131.6,
              6471659.952
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:c7c0b650-ed8a-496d-bff5-46d9953137fd",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.00742,
              -31.8871037
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406128.727,
              6471648.352
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:4261adb8-2fa6-4ce6-94cc-d4906f2a40fc",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0074358,
              -31.8872071
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406130.326,
              6471636.904
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:d9e43ed6-9387-4180-a25a-3b3208422263",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0075106,
              -31.8872894
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406137.484,
              6471627.846
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:4a98b01f-7e97-4049-9f39-a0ba56758ce9",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0076316,
              -31.8873402
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406148.979,
              6471622.32
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:be40befb-8498-4793-9ed6-d0e72c1a1d5b",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0077619,
              -31.887342
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406161.304,
              6471622.233
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:7023d838-169a-4b01-a85f-e2b270751a7c",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0078949,
              -31.8873106
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406173.851,
              6471625.829
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:fbebc23c-cdef-4d02-bced-5b5bb7686b1f",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0079725,
              -31.8872653
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406181.144,
              6471630.918
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:d72f308c-110a-459d-ae5f-9d459d9ae51e",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080335,
              -31.8872145
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406186.862,
              6471636.601
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:a221f31d-26c6-46f0-872a-567244fa5447",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080778,
              -31.8871397
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406190.976,
              6471644.931
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:3cf6b3c0-3acc-4720-a643-d885d6951b2a",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080944,
              -31.8870676
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406192.473,
              6471652.938
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:67c660f1-0e49-4ee4-996d-4d453fe6209b",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080852,
              -31.8869873
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406191.521,
              6471661.831
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:3c6c5996-1c40-4e52-932b-13cc41fcee71",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080584,
              -31.8869365
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406188.935,
              6471667.439
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:97571fb3-9987-49b3-b54c-88b8adcd2655",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0080067,
              -31.8868884
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406183.997,
              6471672.726
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:4c83a22b-2309-4240-97b1-d130cb1a8d43",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0079272,
              -31.886845
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406176.434,
              6471677.468
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        },
        {
          "id": "uuid:291b7f49-8f18-498e-bd2f-7bfb6760eaa2",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "time": "2026-05-05T00:14:08.163770+00:00",
          "geometry": {
            "type": "Point",
            "coordinates": [
              116.0078358,
              -31.8868302
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              406167.774,
              6471679.029
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:boundary",
            "ptQualityMeasure": 0.1,
            "comment": null,
            "monumentedBy": {
              "form": "wa-monument-form:cadastral-point-unmarked",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:unmarked"
            }
          }
        }
      ]
    }
  ],
  "vectorObservations": [],
  "parcels": [
    {
      "id": "uuid:f6235c7a-8ada-499d-9574-067ccd370949",
      "type": "FeatureCollection",
      "featureType": "PrimaryParcel",
      "features": [
        {
          "id": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Polygon",
            "references": [
              [
                "uuid:13b59b93-6f0f-4773-a8b7-88401c9c1fae",
                "uuid:ff22d8d8-5d2e-4fdd-97ce-d80e2b48b5de",
                "uuid:5a34b8a2-dac0-4ad4-8a59-cbee38b407c8",
                "uuid:2fbdbc42-6443-4bc2-bd42-0c77a3e9c9fc",
                "uuid:54943d43-ea1a-4a8c-8cbb-c6d89187e842",
                "uuid:cf0f9b8d-c8d2-4691-8c41-086e18375574",
                "uuid:ed1e393e-d7f5-4a85-93b1-f08812b85014",
                "uuid:d2ebb167-17a2-4bd0-8411-97f83c92d9e6",
                "uuid:d75b510f-9b88-4a82-bac4-4de995f4a1b9",
                "uuid:7914b52a-e13d-4d79-9f76-43e040fa939f",
                "uuid:b4b815fe-eb25-401b-b65f-f7a020da8944",
                "uuid:41e63da1-bee7-48da-be90-527c99fa38d8",
                "uuid:e9b94664-2b7a-4e97-a565-4bcce3896392",
                "uuid:1ce937ba-14a1-48dc-b65c-3b50e98ceb37",
                "uuid:6e614af5-e74d-4c6d-b841-85ac4dd93250",
                "uuid:379f8fe1-7311-4db2-a5b3-8b7cf5dd0882",
                "uuid:780d3b13-0263-4449-ad1e-1627fd0042aa",
                "uuid:fd23e6be-fb9a-44fd-8ad1-55df298d506a",
                "uuid:f7fb3296-07ab-42f6-937f-0ebbe0ee98ea"
              ]
            ]
          },
          "properties": {
            "appellation": {
              "type": "wa:LotOnPlanAppellation",
              "label": "Lot 3 DP 214866",
              "hasPart": [
                {
                  "type": "ParcelType",
                  "label": "Lot"
                },
                {
                  "type": "ParcelIdentifier",
                  "label": "3"
                },
                {
                  "type": "PlanType",
                  "label": "DP"
                },
                {
                  "type": "planIdentifier",
                  "label": "214866"
                }
              ]
            },
            "area": 2829,
            "parcelType": "wa-parcel-type:freehold",
            "parcelPurpose": "wa-parcel-purpose:lot",
            "parcelState": "wa-parcel-state:created",
            "interests": []
          }
        }
      ]
    }
  ],
  "edges": [
    {
      "id": "uuid:8a7f5e78-fcc3-4f6d-a19e-ece99b75234f",
      "type": "FeatureCollection",
      "featureType": "Edge",
      "features": [
        {
          "id": "uuid:b62a056e-a219-4fc5-942e-3fb4c48d708d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:29d783d3-10bb-4882-908a-eb8151cc52ec",
              "uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:a1386220-8990-43a9-800c-4ed3b3e323f6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e",
              "uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:32ccd411-43f6-46f2-9fc8-0ae0a18e650d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78",
              "uuid:3d450239-8099-4649-a355-565e58332111"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:3d450239-8099-4649-a355-565e58332111",
              "uuid:29d783d3-10bb-4882-908a-eb8151cc52ec"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd",
              "uuid:3d450239-8099-4649-a355-565e58332111"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:5ad51e3c-9924-4a4f-83b3-a1b2605b56de",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78",
              "uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:3accc489-4f33-4a69-ae3c-ad302bea4102",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b",
              "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:94185a2f-45b0-4c79-95c0-44fef184e2c7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:d250661e-6383-4458-9323-bf347210311f",
              "uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:29d783d3-10bb-4882-908a-eb8151cc52ec",
              "uuid:7970f2e9-9893-4e54-b249-187db718bd31"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7970f2e9-9893-4e54-b249-187db718bd31",
              "uuid:d250661e-6383-4458-9323-bf347210311f"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:d250661e-6383-4458-9323-bf347210311f",
              "uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:cd257d47-13ca-40db-b196-d78c51872a3b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4",
              "uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0",
              "uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7970f2e9-9893-4e54-b249-187db718bd31",
              "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:26974107-8cc7-472a-98b1-bac952f4c924",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76",
              "uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76",
              "uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:380f1122-b209-41f6-8fd0-f013d06de253",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4",
              "uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:5ef7922d-72e6-4c88-bb01-b81714eee525",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd",
              "uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:12307863-0535-49c5-9baf-ae6d2dc7241a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7970f2e9-9893-4e54-b249-187db718bd31",
              "uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:647124d6-678c-45aa-98ce-7e268086f742",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec",
              "uuid:85f5fe02-792e-44e4-908e-10240b79ddb5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:75c75f5e-3c22-4b05-a4b7-5ce037bbd55b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:85f5fe02-792e-44e4-908e-10240b79ddb5",
              "uuid:d250661e-6383-4458-9323-bf347210311f"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec",
              "uuid:127223b8-ae77-4a0c-abe6-d76332e85af1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:d24a9e84-362c-4d6e-84f2-c1a16900185e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879",
              "uuid:127223b8-ae77-4a0c-abe6-d76332e85af1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:7b34e432-9892-4867-bebf-485a47054777",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879",
              "uuid:85f5fe02-792e-44e4-908e-10240b79ddb5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:73751771-3e38-4526-8d49-9465d947b6dd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:127223b8-ae77-4a0c-abe6-d76332e85af1",
              "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1",
              "uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:cc1617ec-c00c-42c4-abaa-9237964d2f9c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1",
              "uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.999
          }
        },
        {
          "id": "uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1",
              "uuid:7f9a7128-b01c-4568-8241-29391e9a5d30"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:6b9374b0-671d-4603-9349-748b4c231518",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7f9a7128-b01c-4568-8241-29391e9a5d30",
              "uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89",
              "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:0a69a1c6-2a79-4e71-9149-b488b01ac1e0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7f9a7128-b01c-4568-8241-29391e9a5d30",
              "uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:33deda4d-e880-418b-9b90-93bc255670db",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89",
              "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:d78450ce-0f63-4c04-811a-5b87b9591b0f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70",
              "uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.997
          }
        },
        {
          "id": "uuid:887b4e80-25a7-491c-9f99-c567acf7a098",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e",
              "uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:9557e813-61c9-4ae4-a097-fe3ccf104c34",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e",
              "uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac",
              "uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:84b3b6af-d3cb-402a-8ef3-1ed8b8b9c50b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324",
              "uuid:6d31e874-6317-43c3-b357-49a699f8a69d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:b24b3a09-48c1-4fa3-a21c-71641207feae",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:6d31e874-6317-43c3-b357-49a699f8a69d",
              "uuid:21a929df-71c5-47e2-a6d5-24f37bae8442"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:9d3409e1-67b8-4a8c-9ee6-981eaff19cf5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:21a929df-71c5-47e2-a6d5-24f37bae8442",
              "uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:105668a3-bd19-4802-a5ce-c200f1b06fad",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:6d31e874-6317-43c3-b357-49a699f8a69d",
              "uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d",
              "uuid:7970f2e9-9893-4e54-b249-187db718bd31"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:6627f055-85b5-44c1-a7f8-a9c5b9c9fa9f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:29d783d3-10bb-4882-908a-eb8151cc52ec",
              "uuid:21a929df-71c5-47e2-a6d5-24f37bae8442"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70",
              "uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.998
          }
        },
        {
          "id": "uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda",
              "uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:d001066e-9581-4f45-880e-4810c005aeb4",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb",
              "uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:150f57fd-8d57-4533-9922-96732defb792",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb",
              "uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:f9f5fd81-680a-43f5-a04e-adc180a9ecdd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4",
              "uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:a1660706-a249-4fd6-ab29-809940a8aedf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac",
              "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 2.0
          }
        },
        {
          "id": "uuid:a59870f2-8fa1-4cbf-9822-e1565922e3d1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:a9135246-4680-4183-b3a0-ea902313e04b",
              "uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:06b36f25-9655-4795-a67e-51f17d95c50a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806",
              "uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:a475a79b-06a2-400c-9460-6de8a6772ac6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce",
              "uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 7.998
          }
        },
        {
          "id": "uuid:7755d20a-6e6d-4356-b9d6-51a65a971dfb",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba",
              "uuid:a9135246-4680-4183-b3a0-ea902313e04b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:fe560591-08a1-4c35-998b-bee91f67ca50",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d",
              "uuid:a9135246-4680-4183-b3a0-ea902313e04b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:d377883b-98a1-43bf-a10f-bffeeb530993",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba",
              "uuid:40a76a4c-fff8-4156-8071-61423b0d44e9"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:689a0716-0880-4a1b-8454-ba189e331ee6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d",
              "uuid:40a76a4c-fff8-4156-8071-61423b0d44e9"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:74d06171-c161-4193-aea9-11cf904dd554",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d",
              "uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 9.997
          }
        },
        {
          "id": "uuid:79014769-c1f8-4ffd-ae8a-2f43b1a5118d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:40a76a4c-fff8-4156-8071-61423b0d44e9",
              "uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb",
              "uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 1.999
          }
        },
        {
          "id": "uuid:a49e4e7d-1f64-4162-9535-ac936901c370",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158",
              "uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 5.998
          }
        },
        {
          "id": "uuid:f15f5cb8-bee6-4d84-951a-b4821a00cccf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158",
              "uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.0
          }
        },
        {
          "id": "uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1",
              "uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 2.0
          }
        },
        {
          "id": "uuid:8eefa72f-3f34-4866-a4cf-ebdde5d2483e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806",
              "uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.999
          }
        },
        {
          "id": "uuid:52d7c66c-e1f2-49c4-a670-8e1a80c816a2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac",
              "uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:44d3831e-c643-48f4-989b-d7ca9d2598bf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1",
              "uuid:359c2049-41e8-4f00-ab35-458acc23f4bd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        },
        {
          "id": "uuid:123ff795-71e3-489c-89c8-8a1e53864313",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Edge",
            "references": [
              "uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1",
              "uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:3D-Construct",
            "comment": null,
            "length": 3.998
          }
        }
      ]
    },
    {
      "id": "uuid:20ac1c64-b5d9-407a-91ae-f241cb3b4d4e",
      "type": "FeatureCollection",
      "featureType": "surv:ObservedVector",
      "features": [
        {
          "id": "uuid:13b59b93-6f0f-4773-a8b7-88401c9c1fae",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:c4aa05ba-997c-4b7e-b5bd-071f385e17d5",
              "uuid:489a1c4c-0ac4-470f-9757-e50bc71d3aa8"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:ff22d8d8-5d2e-4fdd-97ce-d80e2b48b5de",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:489a1c4c-0ac4-470f-9757-e50bc71d3aa8",
              "uuid:e18342eb-1272-4582-b6bf-3c9d7e138667"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:5a34b8a2-dac0-4ad4-8a59-cbee38b407c8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:e18342eb-1272-4582-b6bf-3c9d7e138667",
              "uuid:313731cb-1e0c-469c-b64e-06af1629ba2a"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:2fbdbc42-6443-4bc2-bd42-0c77a3e9c9fc",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:313731cb-1e0c-469c-b64e-06af1629ba2a",
              "uuid:c7c0b650-ed8a-496d-bff5-46d9953137fd"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:54943d43-ea1a-4a8c-8cbb-c6d89187e842",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:c7c0b650-ed8a-496d-bff5-46d9953137fd",
              "uuid:4261adb8-2fa6-4ce6-94cc-d4906f2a40fc"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:cf0f9b8d-c8d2-4691-8c41-086e18375574",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:4261adb8-2fa6-4ce6-94cc-d4906f2a40fc",
              "uuid:d9e43ed6-9387-4180-a25a-3b3208422263"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:ed1e393e-d7f5-4a85-93b1-f08812b85014",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:d9e43ed6-9387-4180-a25a-3b3208422263",
              "uuid:4a98b01f-7e97-4049-9f39-a0ba56758ce9"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:d2ebb167-17a2-4bd0-8411-97f83c92d9e6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:4a98b01f-7e97-4049-9f39-a0ba56758ce9",
              "uuid:be40befb-8498-4793-9ed6-d0e72c1a1d5b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:d75b510f-9b88-4a82-bac4-4de995f4a1b9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:be40befb-8498-4793-9ed6-d0e72c1a1d5b",
              "uuid:7023d838-169a-4b01-a85f-e2b270751a7c"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:7914b52a-e13d-4d79-9f76-43e040fa939f",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:7023d838-169a-4b01-a85f-e2b270751a7c",
              "uuid:fbebc23c-cdef-4d02-bced-5b5bb7686b1f"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:b4b815fe-eb25-401b-b65f-f7a020da8944",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:fbebc23c-cdef-4d02-bced-5b5bb7686b1f",
              "uuid:d72f308c-110a-459d-ae5f-9d459d9ae51e"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:41e63da1-bee7-48da-be90-527c99fa38d8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:d72f308c-110a-459d-ae5f-9d459d9ae51e",
              "uuid:a221f31d-26c6-46f0-872a-567244fa5447"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:e9b94664-2b7a-4e97-a565-4bcce3896392",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:a221f31d-26c6-46f0-872a-567244fa5447",
              "uuid:3cf6b3c0-3acc-4720-a643-d885d6951b2a"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:1ce937ba-14a1-48dc-b65c-3b50e98ceb37",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:3cf6b3c0-3acc-4720-a643-d885d6951b2a",
              "uuid:67c660f1-0e49-4ee4-996d-4d453fe6209b"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:6e614af5-e74d-4c6d-b841-85ac4dd93250",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:67c660f1-0e49-4ee4-996d-4d453fe6209b",
              "uuid:3c6c5996-1c40-4e52-932b-13cc41fcee71"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:379f8fe1-7311-4db2-a5b3-8b7cf5dd0882",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:3c6c5996-1c40-4e52-932b-13cc41fcee71",
              "uuid:97571fb3-9987-49b3-b54c-88b8adcd2655"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:780d3b13-0263-4449-ad1e-1627fd0042aa",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:97571fb3-9987-49b3-b54c-88b8adcd2655",
              "uuid:4c83a22b-2309-4240-97b1-d130cb1a8d43"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:fd23e6be-fb9a-44fd-8ad1-55df298d506a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:4c83a22b-2309-4240-97b1-d130cb1a8d43",
              "uuid:291b7f49-8f18-498e-bd2f-7bfb6760eaa2"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        },
        {
          "id": "uuid:f7fb3296-07ab-42f6-937f-0ebbe0ee98ea",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "uuid:291b7f49-8f18-498e-bd2f-7bfb6760eaa2",
              "uuid:c4aa05ba-997c-4b7e-b5bd-071f385e17d5"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        }
      ]
    }
  ],
  "rings": [
    {
      "id": "uuid:a212bf84-0fc3-4c11-b9ae-6324149206bf",
      "type": "FeatureCollection",
      "featureType": "Ring",
      "features": [
        {
          "id": "uuid:0c487fe8-39b5-4a89-8c97-ac022dbe1fce",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:b62a056e-a219-4fc5-942e-3fb4c48d708d",
                "orientation": "+"
              },
              {
                "ref": "uuid:a1386220-8990-43a9-800c-4ed3b3e323f6",
                "orientation": "+"
              },
              {
                "ref": "uuid:32ccd411-43f6-46f2-9fc8-0ae0a18e650d",
                "orientation": "+"
              },
              {
                "ref": "uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.994
          }
        },
        {
          "id": "uuid:777a02bc-f2d3-4b31-bc4c-7180bc13a31c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546",
                "orientation": "+"
              },
              {
                "ref": "uuid:32ccd411-43f6-46f2-9fc8-0ae0a18e650d",
                "orientation": "-"
              },
              {
                "ref": "uuid:5ad51e3c-9924-4a4f-83b3-a1b2605b56de",
                "orientation": "+"
              },
              {
                "ref": "uuid:3accc489-4f33-4a69-ae3c-ad302bea4102",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.998
          }
        },
        {
          "id": "uuid:e6fb50a4-9678-4e44-b31c-70cd67726e49",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:94185a2f-45b0-4c79-95c0-44fef184e2c7",
                "orientation": "+"
              },
              {
                "ref": "uuid:b62a056e-a219-4fc5-942e-3fb4c48d708d",
                "orientation": "-"
              },
              {
                "ref": "uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147",
                "orientation": "+"
              },
              {
                "ref": "uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:f6d80de2-ba10-4748-9c16-f74eafa5e454",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:5ad51e3c-9924-4a4f-83b3-a1b2605b56de",
                "orientation": "-"
              },
              {
                "ref": "uuid:a1386220-8990-43a9-800c-4ed3b3e323f6",
                "orientation": "-"
              },
              {
                "ref": "uuid:94185a2f-45b0-4c79-95c0-44fef184e2c7",
                "orientation": "-"
              },
              {
                "ref": "uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3",
                "orientation": "+"
              },
              {
                "ref": "uuid:cd257d47-13ca-40db-b196-d78c51872a3b",
                "orientation": "+"
              },
              {
                "ref": "uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:abe41c77-3601-4c23-bc85-69d574e758f2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52",
                "orientation": "+"
              },
              {
                "ref": "uuid:26974107-8cc7-472a-98b1-bac952f4c924",
                "orientation": "+"
              },
              {
                "ref": "uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3",
                "orientation": "-"
              },
              {
                "ref": "uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.998
          }
        },
        {
          "id": "uuid:cb61c522-2984-4aea-92b7-68b08b3da84d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67",
                "orientation": "+"
              },
              {
                "ref": "uuid:380f1122-b209-41f6-8fd0-f013d06de253",
                "orientation": "+"
              },
              {
                "ref": "uuid:cd257d47-13ca-40db-b196-d78c51872a3b",
                "orientation": "-"
              },
              {
                "ref": "uuid:26974107-8cc7-472a-98b1-bac952f4c924",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:89e58766-afab-4d1f-8775-1311275c857a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546",
                "orientation": "-"
              },
              {
                "ref": "uuid:5ef7922d-72e6-4c88-bb01-b81714eee525",
                "orientation": "+"
              },
              {
                "ref": "uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67",
                "orientation": "-"
              },
              {
                "ref": "uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52",
                "orientation": "-"
              },
              {
                "ref": "uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147",
                "orientation": "-"
              },
              {
                "ref": "uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:1c3ca0ce-fbaf-4929-bd1d-44ca6c3fd3bc",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:5ef7922d-72e6-4c88-bb01-b81714eee525",
                "orientation": "-"
              },
              {
                "ref": "uuid:3accc489-4f33-4a69-ae3c-ad302bea4102",
                "orientation": "-"
              },
              {
                "ref": "uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5",
                "orientation": "-"
              },
              {
                "ref": "uuid:380f1122-b209-41f6-8fd0-f013d06de253",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        },
        {
          "id": "uuid:356935be-07f0-4a7f-895d-78848298cc32",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:12307863-0535-49c5-9baf-ae6d2dc7241a",
                "orientation": "+"
              },
              {
                "ref": "uuid:647124d6-678c-45aa-98ce-7e268086f742",
                "orientation": "+"
              },
              {
                "ref": "uuid:75c75f5e-3c22-4b05-a4b7-5ce037bbd55b",
                "orientation": "+"
              },
              {
                "ref": "uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:b062d93a-cabd-45e1-845e-ca90e3c39730",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:647124d6-678c-45aa-98ce-7e268086f742",
                "orientation": "-"
              },
              {
                "ref": "uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1",
                "orientation": "+"
              },
              {
                "ref": "uuid:d24a9e84-362c-4d6e-84f2-c1a16900185e",
                "orientation": "-"
              },
              {
                "ref": "uuid:7b34e432-9892-4867-bebf-485a47054777",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.994
          }
        },
        {
          "id": "uuid:c47c2ae9-6ff5-4b26-a293-ca83b7046ac0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:d24a9e84-362c-4d6e-84f2-c1a16900185e",
                "orientation": "+"
              },
              {
                "ref": "uuid:73751771-3e38-4526-8d49-9465d947b6dd",
                "orientation": "+"
              },
              {
                "ref": "uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8",
                "orientation": "+"
              },
              {
                "ref": "uuid:cc1617ec-c00c-42c4-abaa-9237964d2f9c",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.998
          }
        },
        {
          "id": "uuid:55e481c1-3084-42de-b1b1-020ae90b594c",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:75c75f5e-3c22-4b05-a4b7-5ce037bbd55b",
                "orientation": "-"
              },
              {
                "ref": "uuid:7b34e432-9892-4867-bebf-485a47054777",
                "orientation": "-"
              },
              {
                "ref": "uuid:cc1617ec-c00c-42c4-abaa-9237964d2f9c",
                "orientation": "-"
              },
              {
                "ref": "uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936",
                "orientation": "+"
              },
              {
                "ref": "uuid:6b9374b0-671d-4603-9349-748b4c231518",
                "orientation": "+"
              },
              {
                "ref": "uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:70d6787b-0280-42a1-a46f-4c3ea010cbce",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6",
                "orientation": "+"
              },
              {
                "ref": "uuid:26974107-8cc7-472a-98b1-bac952f4c924",
                "orientation": "+"
              },
              {
                "ref": "uuid:6b9374b0-671d-4603-9349-748b4c231518",
                "orientation": "-"
              },
              {
                "ref": "uuid:0a69a1c6-2a79-4e71-9149-b488b01ac1e0",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:c4eecceb-c7c0-4b2d-a462-de459de385f7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:33deda4d-e880-418b-9b90-93bc255670db",
                "orientation": "+"
              },
              {
                "ref": "uuid:73751771-3e38-4526-8d49-9465d947b6dd",
                "orientation": "-"
              },
              {
                "ref": "uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1",
                "orientation": "-"
              },
              {
                "ref": "uuid:12307863-0535-49c5-9baf-ae6d2dc7241a",
                "orientation": "-"
              },
              {
                "ref": "uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52",
                "orientation": "+"
              },
              {
                "ref": "uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 31.99
          }
        },
        {
          "id": "uuid:d627f2d7-d27f-40bf-b30a-2298c50c5b88",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:33deda4d-e880-418b-9b90-93bc255670db",
                "orientation": "-"
              },
              {
                "ref": "uuid:0a69a1c6-2a79-4e71-9149-b488b01ac1e0",
                "orientation": "-"
              },
              {
                "ref": "uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936",
                "orientation": "-"
              },
              {
                "ref": "uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        },
        {
          "id": "uuid:6d219ad2-36b7-4f0d-bc02-deba6c975ea2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:d78450ce-0f63-4c04-811a-5b87b9591b0f",
                "orientation": "+"
              },
              {
                "ref": "uuid:887b4e80-25a7-491c-9f99-c567acf7a098",
                "orientation": "-"
              },
              {
                "ref": "uuid:9557e813-61c9-4ae4-a097-fe3ccf104c34",
                "orientation": "+"
              },
              {
                "ref": "uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.995
          }
        },
        {
          "id": "uuid:0e17be70-1378-48cc-b88b-f12de3d9e112",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:84b3b6af-d3cb-402a-8ef3-1ed8b8b9c50b",
                "orientation": "+"
              },
              {
                "ref": "uuid:b24b3a09-48c1-4fa3-a21c-71641207feae",
                "orientation": "+"
              },
              {
                "ref": "uuid:9d3409e1-67b8-4a8c-9ee6-981eaff19cf5",
                "orientation": "+"
              },
              {
                "ref": "uuid:887b4e80-25a7-491c-9f99-c567acf7a098",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:bdf1b7f8-6f4e-4652-a24e-2d7328101807",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:105668a3-bd19-4802-a5ce-c200f1b06fad",
                "orientation": "+"
              },
              {
                "ref": "uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5",
                "orientation": "+"
              },
              {
                "ref": "uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147",
                "orientation": "-"
              },
              {
                "ref": "uuid:6627f055-85b5-44c1-a7f8-a9c5b9c9fa9f",
                "orientation": "+"
              },
              {
                "ref": "uuid:b24b3a09-48c1-4fa3-a21c-71641207feae",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:6b4acb54-1cd3-42d5-9845-7a7f57b26fab",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:d78450ce-0f63-4c04-811a-5b87b9591b0f",
                "orientation": "-"
              },
              {
                "ref": "uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f",
                "orientation": "+"
              },
              {
                "ref": "uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a",
                "orientation": "+"
              },
              {
                "ref": "uuid:d001066e-9581-4f45-880e-4810c005aeb4",
                "orientation": "+"
              },
              {
                "ref": "uuid:105668a3-bd19-4802-a5ce-c200f1b06fad",
                "orientation": "-"
              },
              {
                "ref": "uuid:84b3b6af-d3cb-402a-8ef3-1ed8b8b9c50b",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 39.987
          }
        },
        {
          "id": "uuid:22851efb-93f5-492d-9a9c-102d1df785c1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:150f57fd-8d57-4533-9922-96732defb792",
                "orientation": "+"
              },
              {
                "ref": "uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52",
                "orientation": "-"
              },
              {
                "ref": "uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5",
                "orientation": "-"
              },
              {
                "ref": "uuid:d001066e-9581-4f45-880e-4810c005aeb4",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.998
          }
        },
        {
          "id": "uuid:f02f10fc-79f0-4ba7-aa31-e50da369b0e0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f9f5fd81-680a-43f5-a04e-adc180a9ecdd",
                "orientation": "+"
              },
              {
                "ref": "uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f",
                "orientation": "-"
              },
              {
                "ref": "uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561",
                "orientation": "-"
              },
              {
                "ref": "uuid:a1660706-a249-4fd6-ab29-809940a8aedf",
                "orientation": "+"
              },
              {
                "ref": "uuid:5ef7922d-72e6-4c88-bb01-b81714eee525",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 17.996
          }
        },
        {
          "id": "uuid:5943a3e8-75e7-45c0-9b66-3f29e77150cf",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f9f5fd81-680a-43f5-a04e-adc180a9ecdd",
                "orientation": "-"
              },
              {
                "ref": "uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67",
                "orientation": "-"
              },
              {
                "ref": "uuid:150f57fd-8d57-4533-9922-96732defb792",
                "orientation": "-"
              },
              {
                "ref": "uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:0934c81e-8a94-41c5-8103-3365b8c33853",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:6627f055-85b5-44c1-a7f8-a9c5b9c9fa9f",
                "orientation": "-"
              },
              {
                "ref": "uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5",
                "orientation": "-"
              },
              {
                "ref": "uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546",
                "orientation": "-"
              },
              {
                "ref": "uuid:a1660706-a249-4fd6-ab29-809940a8aedf",
                "orientation": "-"
              },
              {
                "ref": "uuid:9557e813-61c9-4ae4-a097-fe3ccf104c34",
                "orientation": "-"
              },
              {
                "ref": "uuid:9d3409e1-67b8-4a8c-9ee6-981eaff19cf5",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 35.99
          }
        },
        {
          "id": "uuid:cb6708a2-df56-4993-9699-9542c85c4f86",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:a59870f2-8fa1-4cbf-9822-e1565922e3d1",
                "orientation": "+"
              },
              {
                "ref": "uuid:06b36f25-9655-4795-a67e-51f17d95c50a",
                "orientation": "+"
              },
              {
                "ref": "uuid:a475a79b-06a2-400c-9460-6de8a6772ac6",
                "orientation": "+"
              },
              {
                "ref": "uuid:7755d20a-6e6d-4356-b9d6-51a65a971dfb",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 21.996
          }
        },
        {
          "id": "uuid:4d4b7e04-ac90-4447-9d86-28db1ad4ac41",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:fe560591-08a1-4c35-998b-bee91f67ca50",
                "orientation": "+"
              },
              {
                "ref": "uuid:7755d20a-6e6d-4356-b9d6-51a65a971dfb",
                "orientation": "-"
              },
              {
                "ref": "uuid:d377883b-98a1-43bf-a10f-bffeeb530993",
                "orientation": "+"
              },
              {
                "ref": "uuid:689a0716-0880-4a1b-8454-ba189e331ee6",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:315d5051-9eb9-4c1a-9434-a8d2e3e1d3f5",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:74d06171-c161-4193-aea9-11cf904dd554",
                "orientation": "+"
              },
              {
                "ref": "uuid:689a0716-0880-4a1b-8454-ba189e331ee6",
                "orientation": "+"
              },
              {
                "ref": "uuid:79014769-c1f8-4ffd-ae8a-2f43b1a5118d",
                "orientation": "+"
              },
              {
                "ref": "uuid:12307863-0535-49c5-9baf-ae6d2dc7241a",
                "orientation": "-"
              },
              {
                "ref": "uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 25.994
          }
        },
        {
          "id": "uuid:9ca25210-c370-4b91-b92f-33f5e1921889",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:74d06171-c161-4193-aea9-11cf904dd554",
                "orientation": "-"
              },
              {
                "ref": "uuid:d001066e-9581-4f45-880e-4810c005aeb4",
                "orientation": "-"
              },
              {
                "ref": "uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f",
                "orientation": "+"
              },
              {
                "ref": "uuid:a49e4e7d-1f64-4162-9535-ac936901c370",
                "orientation": "+"
              },
              {
                "ref": "uuid:a59870f2-8fa1-4cbf-9822-e1565922e3d1",
                "orientation": "-"
              },
              {
                "ref": "uuid:fe560591-08a1-4c35-998b-bee91f67ca50",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 39.988
          }
        },
        {
          "id": "uuid:6379c9a9-86c4-45a0-a508-a62309a4e766",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:f15f5cb8-bee6-4d84-951a-b4821a00cccf",
                "orientation": "+"
              },
              {
                "ref": "uuid:33deda4d-e880-418b-9b90-93bc255670db",
                "orientation": "+"
              },
              {
                "ref": "uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55",
                "orientation": "+"
              },
              {
                "ref": "uuid:06b36f25-9655-4795-a67e-51f17d95c50a",
                "orientation": "-"
              },
              {
                "ref": "uuid:a49e4e7d-1f64-4162-9535-ac936901c370",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 17.996
          }
        },
        {
          "id": "uuid:542934a9-f32d-401e-8e05-05d529492483",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:150f57fd-8d57-4533-9922-96732defb792",
                "orientation": "+"
              },
              {
                "ref": "uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6",
                "orientation": "-"
              },
              {
                "ref": "uuid:f15f5cb8-bee6-4d84-951a-b4821a00cccf",
                "orientation": "-"
              },
              {
                "ref": "uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 9.998
          }
        },
        {
          "id": "uuid:7d373590-b767-45a5-8e6a-120d938d3736",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55",
                "orientation": "-"
              },
              {
                "ref": "uuid:73751771-3e38-4526-8d49-9465d947b6dd",
                "orientation": "-"
              },
              {
                "ref": "uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1",
                "orientation": "-"
              },
              {
                "ref": "uuid:79014769-c1f8-4ffd-ae8a-2f43b1a5118d",
                "orientation": "-"
              },
              {
                "ref": "uuid:d377883b-98a1-43bf-a10f-bffeeb530993",
                "orientation": "-"
              },
              {
                "ref": "uuid:a475a79b-06a2-400c-9460-6de8a6772ac6",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 35.99
          }
        },
        {
          "id": "uuid:2eba2a4e-7b02-4921-894b-7882959e13fd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:8eefa72f-3f34-4866-a4cf-ebdde5d2483e",
                "orientation": "-"
              },
              {
                "ref": "uuid:a49e4e7d-1f64-4162-9535-ac936901c370",
                "orientation": "-"
              },
              {
                "ref": "uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f",
                "orientation": "-"
              },
              {
                "ref": "uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a",
                "orientation": "-"
              },
              {
                "ref": "uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 19.993
          }
        },
        {
          "id": "uuid:abd9ba1e-6d89-417d-a8ee-2e84d2b296dc",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:52d7c66c-e1f2-49c4-a670-8e1a80c816a2",
                "orientation": "+"
              },
              {
                "ref": "uuid:06b36f25-9655-4795-a67e-51f17d95c50a",
                "orientation": "-"
              },
              {
                "ref": "uuid:8eefa72f-3f34-4866-a4cf-ebdde5d2483e",
                "orientation": "+"
              },
              {
                "ref": "uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.997
          }
        },
        {
          "id": "uuid:aaee3689-d94d-4193-af47-cdf29e45d3e3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:52d7c66c-e1f2-49c4-a670-8e1a80c816a2",
                "orientation": "-"
              },
              {
                "ref": "uuid:a1660706-a249-4fd6-ab29-809940a8aedf",
                "orientation": "+"
              },
              {
                "ref": "uuid:44d3831e-c643-48f4-989b-d7ca9d2598bf",
                "orientation": "-"
              },
              {
                "ref": "uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "circumference": 11.996
          }
        },
        {
          "id": "uuid:71721739-f1d5-4cac-9a53-34c39c7e2ce2",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:123ff795-71e3-489c-89c8-8a1e53864313",
                "orientation": "+"
              },
              {
                "ref": "uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5",
                "orientation": "-"
              },
              {
                "ref": "uuid:cd257d47-13ca-40db-b196-d78c51872a3b",
                "orientation": "-"
              },
              {
                "ref": "uuid:6b9374b0-671d-4603-9349-748b4c231518",
                "orientation": "-"
              },
              {
                "ref": "uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 15.992
          }
        },
        {
          "id": "uuid:2ff15613-8fa2-4410-af09-0f42e2c83dd1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Ring",
            "directed_references": [
              {
                "ref": "uuid:44d3831e-c643-48f4-989b-d7ca9d2598bf",
                "orientation": "+"
              },
              {
                "ref": "uuid:3accc489-4f33-4a69-ae3c-ad302bea4102",
                "orientation": "-"
              },
              {
                "ref": "uuid:123ff795-71e3-489c-89c8-8a1e53864313",
                "orientation": "-"
              },
              {
                "ref": "uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "circumference": 13.996
          }
        }
      ]
    }
  ],
  "faces": [
    {
      "id": "uuid:b877b36c-fa85-40c3-b254-fe4d8cbf637c",
      "type": "FeatureCollection",
      "featureType": "Face",
      "features": [
        {
          "id": "uuid:509fb96a-ed61-4418-a897-1cc9a394d7d6",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:0c487fe8-39b5-4a89-8c97-ac022dbe1fce",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999937695,
              2.1252341604305102e-06,
              2.818552790910351e-06
            ],
            "area": 23.991,
            "description": "East-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:2f59c9a6-1cd7-4cc0-86df-cc3c44d22286",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:777a02bc-f2d3-4b31-bc4c-7180bc13a31c",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1347501594712472e-06,
              -0.9999999999976475,
              -3.8463119361166447e-07
            ],
            "area": 17.997,
            "description": "South-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:79feb69f-05d4-4ef0-b880-44276e524854",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:e6fb50a4-9678-4e44-b31c-70cd67726e49",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1160627370878684e-06,
              0.9999999999964104,
              1.6436244147846745e-06
            ],
            "area": 23.994,
            "description": "North-facing boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:41901fb2-753b-4b9f-8687-ae11d6f69439",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:f6d80de2-ba10-4748-9c16-f74eafa5e454",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 55.969,
            "description": "Top boundary face, [Upper East]"
          }
        },
        {
          "id": "uuid:2ec797d0-35d9-46fc-a4ab-52794d397416",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:abe41c77-3601-4c23-bc85-69d574e758f2",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999965267,
              -2.120773346758996e-06,
              -1.5650321292142593e-06
            ],
            "area": 11.997,
            "description": "West-facing boundary face, [Upper East, Upper West]"
          }
        },
        {
          "id": "uuid:608c4fbe-df28-4c78-bec6-f7560f6a40ca",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:cb61c522-2984-4aea-92b7-68b08b3da84d",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.124969241213484e-06,
              -0.9999999999972277,
              -1.0145170209822307e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Upper East, Stairwell]"
          }
        },
        {
          "id": "uuid:2baad9ae-e5b4-48eb-81c6-736fd1500fb9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:89e58766-afab-4d1f-8775-1311275c857a",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.0,
              -0.0,
              -1.0
            ],
            "area": 55.969,
            "description": "Bottom boundary face, [Upper East, Lower East]"
          }
        },
        {
          "id": "uuid:5635ffda-d1a0-463c-93e4-2c256e049f6e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:1c3ca0ce-fbaf-4929-bd1d-44ca6c3fd3bc",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999959679,
              -2.1300537012889316e-06,
              -1.8780230806249394e-06
            ],
            "area": 11.994,
            "description": "West-facing boundary face, [Upper East, Stairwell]"
          }
        },
        {
          "id": "uuid:200595fe-9d0a-4fa0-a16f-374b28cb0ad0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:356935be-07f0-4a7f-895d-78848298cc32",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1160024131438693e-06,
              0.9999999999964108,
              1.6434718457076753e-06
            ],
            "area": 23.994,
            "description": "North-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:9ce5b406-dab7-4afa-8fbd-2d5101aec77d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:b062d93a-cabd-45e1-845e-ca90e3c39730",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999976931,
              -2.1251782237133477e-06,
              -3.124220601837041e-07
            ],
            "area": 23.991,
            "description": "West-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:bd5ceea7-ea06-4191-9b3c-2905569f3035",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:c47c2ae9-6ff5-4b26-a293-ca83b7046ac0",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1344389761872487e-06,
              -0.9999999999976482,
              -3.846345366682647e-07
            ],
            "area": 17.997,
            "description": "South-facing boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:05d0ee6b-baed-4a58-8c57-14c12cfe9fe0",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:55e481c1-3084-42de-b1b1-020ae90b594c",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 55.968,
            "description": "Top boundary face, [Upper West]"
          }
        },
        {
          "id": "uuid:6ae1d5a0-8bf8-4675-a048-f92b7704c482",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:70d6787b-0280-42a1-a46f-4c3ea010cbce",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.125434709040482e-06,
              -0.9999999999972267,
              -1.01451768633823e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Upper West, Stairwell]"
          }
        },
        {
          "id": "uuid:f2f50332-6f50-47ab-868f-fdc520e68848",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:c4eecceb-c7c0-4b2d-a462-de459de385f7",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 55.968,
            "description": "Bottom boundary face, [Upper West, Lower West]"
          }
        },
        {
          "id": "uuid:2a36d343-55e4-4ddb-8c44-f7612baa99ce",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:d627f2d7-d27f-40bf-b30a-2298c50c5b88",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999969489,
              2.129537331624891e-06,
              1.251893000853936e-06
            ],
            "area": 11.994,
            "description": "East-facing boundary face, [Upper West, Stairwell]"
          }
        },
        {
          "id": "uuid:741587b8-5d4f-4921-979e-92cebc0bc61a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:6d219ad2-36b7-4f0d-bc02-deba6c975ea2",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1354470739553984e-06,
              -0.9999999999977187,
              -4.90443042600462e-08
            ],
            "area": 23.992,
            "description": "South-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:c6a3d176-abfb-4f53-a6d8-cc594118b214",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:0e17be70-1378-48cc-b88b-f12de3d9e112",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.999999999992833,
              2.1277472132566447e-06,
              3.1315738370324766e-06
            ],
            "area": 29.991,
            "description": "East-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:ce095212-8b35-48bf-b77d-57ba8bcf9882",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:bdf1b7f8-6f4e-4652-a24e-2d7328101807",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.112030056897979e-06,
              0.9999999999964635,
              1.616305591688749e-06
            ],
            "area": 29.991,
            "description": "North-facing boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:a6c01635-707b-4359-8eb5-23d324d7a7a8",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:6b4acb54-1cd3-42d5-9845-7a7f57b26fab",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 87.948,
            "description": "Bottom boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:6837ca1f-41c3-4002-9251-7113835def85",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:22851efb-93f5-492d-9a9c-102d1df785c1",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999965249,
              -2.121172640933992e-06,
              -1.565526879734256e-06
            ],
            "area": 11.997,
            "description": "West-facing boundary face, [Lower East, Lower West]"
          }
        },
        {
          "id": "uuid:c45f774d-8ba2-41a8-8edd-a08921a630b9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:f02f10fc-79f0-4ba7-aa31-e50da369b0e0",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999959602,
              -2.131841094675915e-06,
              -1.8801796836009255e-06
            ],
            "area": 17.994,
            "description": "West-facing boundary face, [Lower East, Stairwell]"
          }
        },
        {
          "id": "uuid:335305a1-d6a4-499f-8105-8b5e2f9a7383",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:5943a3e8-75e7-45c0-9b66-3f29e77150cf",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.122639235232521e-06,
              -0.9999999999972454,
              -1.001788957290246e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Lower East, Stairwell]"
          }
        },
        {
          "id": "uuid:f55c0e40-89fe-4a23-8d11-aff91c754214",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:0934c81e-8a94-41c5-8103-3365b8c33853",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 31.982,
            "description": "Top boundary face, [Lower East]"
          }
        },
        {
          "id": "uuid:933a6a7d-dfe4-4bae-ae48-3385e9f22916",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:cb6708a2-df56-4993-9699-9542c85c4f86",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1381834939563843e-06,
              -0.9999999999977119,
              -6.782998719558046e-08
            ],
            "area": 23.994,
            "description": "South-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:287abc0b-28ad-41ec-a7ff-eec8d4192c2b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:4d4b7e04-ac90-4447-9d86-28db1ad4ac41",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -0.9999999999977369,
              -2.1275050385904402e-06,
              5.802619591563473e-10
            ],
            "area": 29.991,
            "description": "West-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:079558dc-5401-4bbb-ae7a-b3e566a6737d",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:315d5051-9eb9-4c1a-9434-a8d2e3e1d3f5",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -2.1147242879319153e-06,
              0.9999999999964325,
              1.6319025594187058e-06
            ],
            "area": 29.991,
            "description": "North-facing boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:d5f598a6-8c7b-4254-a710-5a0238368a6b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:9ca25210-c370-4b91-b92f-33f5e1921889",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              -1.0
            ],
            "area": 87.95,
            "description": "Bottom boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:d8f2444f-769d-4fe5-bfb7-96c75eb21aa3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:6379c9a9-86c4-45a0-a508-a62309a4e766",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.9999999999969424,
              2.131971756477877e-06,
              1.2529856403859282e-06
            ],
            "area": 17.994,
            "description": "East-facing boundary face, [Lower West, Stairwell]"
          }
        },
        {
          "id": "uuid:09582fa5-0931-481b-9203-0dba27308ddd",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:542934a9-f32d-401e-8e05-05d529492483",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1233376085545115e-06,
              -0.999999999997241,
              -1.004738808137242e-06
            ],
            "area": 5.997,
            "description": "South-facing boundary face, [Lower West, Stairwell]"
          }
        },
        {
          "id": "uuid:b3470cac-a616-4768-a74b-182208496ee1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:7d373590-b767-45a5-8e6a-120d938d3736",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              0.0,
              0.0,
              1.0
            ],
            "area": 31.982,
            "description": "Top boundary face, [Lower West]"
          }
        },
        {
          "id": "uuid:fa9fc866-8b5d-4056-9afb-a5294b52eea3",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:2eba2a4e-7b02-4921-894b-7882959e13fd",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              1.5695020611744682e-06,
              4.6264846992854333e-07,
              -0.9999999999986614
            ],
            "area": 23.983,
            "description": "Bottom boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:afa0638d-9d57-4b2a-ad58-af68daa3726a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:abd9ba1e-6d89-417d-a8ee-2e84d2b296dc",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1368444112603913e-06,
              -0.9999999999977152,
              -6.208482429009232e-08
            ],
            "area": 11.996,
            "description": "South-facing boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:e2dd1def-1a2e-4e60-9db0-5e4c4095e4c7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:aaee3689-d94d-4193-af47-cdf29e45d3e3",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -1.5667086656316248e-06,
              -1.5697701705156244e-07,
              0.9999999999987605
            ],
            "area": 7.996,
            "description": "Top boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:cace1bee-957e-4b24-8343-47cd6827a09e",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:71721739-f1d5-4cac-9a53-34c39c7e2ce2",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              -1.566941334935351e-06,
              -6.103726788333472e-07,
              0.999999999998586
            ],
            "area": 15.983,
            "description": "Top boundary face, [Stairwell]"
          }
        },
        {
          "id": "uuid:7385f01e-11f8-4811-bab6-3abca0b2c6f7",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Face",
            "directed_references": [
              {
                "ref": "uuid:2ff15613-8fa2-4410-af09-0f42e2c83dd1",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "normal": [
              2.1346333832552482e-06,
              -0.9999999999976478,
              -3.8447764578726455e-07
            ],
            "area": 11.994,
            "description": "South-facing boundary face, [Stairwell]"
          }
        }
      ]
    }
  ],
  "shells": [
    {
      "id": "uuid:4239e2e9-e975-4d03-9c5a-65321c4830b1",
      "type": "FeatureCollection",
      "featureType": "Shell",
      "features": [
        {
          "id": "uuid:26924195-da93-43af-946d-237910710449",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:509fb96a-ed61-4418-a897-1cc9a394d7d6",
                "orientation": "+"
              },
              {
                "ref": "uuid:2f59c9a6-1cd7-4cc0-86df-cc3c44d22286",
                "orientation": "+"
              },
              {
                "ref": "uuid:79feb69f-05d4-4ef0-b880-44276e524854",
                "orientation": "+"
              },
              {
                "ref": "uuid:41901fb2-753b-4b9f-8687-ae11d6f69439",
                "orientation": "+"
              },
              {
                "ref": "uuid:2ec797d0-35d9-46fc-a4ab-52794d397416",
                "orientation": "+"
              },
              {
                "ref": "uuid:608c4fbe-df28-4c78-bec6-f7560f6a40ca",
                "orientation": "+"
              },
              {
                "ref": "uuid:2baad9ae-e5b4-48eb-81c6-736fd1500fb9",
                "orientation": "+"
              },
              {
                "ref": "uuid:5635ffda-d1a0-463c-93e4-2c256e049f6e",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Upper East"
          }
        },
        {
          "id": "uuid:89957e86-89d5-459d-a170-0c7c916f2382",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:200595fe-9d0a-4fa0-a16f-374b28cb0ad0",
                "orientation": "+"
              },
              {
                "ref": "uuid:9ce5b406-dab7-4afa-8fbd-2d5101aec77d",
                "orientation": "+"
              },
              {
                "ref": "uuid:bd5ceea7-ea06-4191-9b3c-2905569f3035",
                "orientation": "+"
              },
              {
                "ref": "uuid:05d0ee6b-baed-4a58-8c57-14c12cfe9fe0",
                "orientation": "+"
              },
              {
                "ref": "uuid:2ec797d0-35d9-46fc-a4ab-52794d397416",
                "orientation": "-"
              },
              {
                "ref": "uuid:6ae1d5a0-8bf8-4675-a048-f92b7704c482",
                "orientation": "+"
              },
              {
                "ref": "uuid:f2f50332-6f50-47ab-868f-fdc520e68848",
                "orientation": "+"
              },
              {
                "ref": "uuid:2a36d343-55e4-4ddb-8c44-f7612baa99ce",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Upper West"
          }
        },
        {
          "id": "uuid:9a31a4bf-8d83-4876-8bc3-df640512418a",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:741587b8-5d4f-4921-979e-92cebc0bc61a",
                "orientation": "+"
              },
              {
                "ref": "uuid:c6a3d176-abfb-4f53-a6d8-cc594118b214",
                "orientation": "+"
              },
              {
                "ref": "uuid:ce095212-8b35-48bf-b77d-57ba8bcf9882",
                "orientation": "+"
              },
              {
                "ref": "uuid:a6c01635-707b-4359-8eb5-23d324d7a7a8",
                "orientation": "+"
              },
              {
                "ref": "uuid:6837ca1f-41c3-4002-9251-7113835def85",
                "orientation": "+"
              },
              {
                "ref": "uuid:c45f774d-8ba2-41a8-8edd-a08921a630b9",
                "orientation": "+"
              },
              {
                "ref": "uuid:335305a1-d6a4-499f-8105-8b5e2f9a7383",
                "orientation": "+"
              },
              {
                "ref": "uuid:2baad9ae-e5b4-48eb-81c6-736fd1500fb9",
                "orientation": "-"
              },
              {
                "ref": "uuid:f55c0e40-89fe-4a23-8d11-aff91c754214",
                "orientation": "+"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Lower East"
          }
        },
        {
          "id": "uuid:ddbbed6c-5a7d-4405-9d41-59677b9484ee",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:933a6a7d-dfe4-4bae-ae48-3385e9f22916",
                "orientation": "+"
              },
              {
                "ref": "uuid:287abc0b-28ad-41ec-a7ff-eec8d4192c2b",
                "orientation": "+"
              },
              {
                "ref": "uuid:079558dc-5401-4bbb-ae7a-b3e566a6737d",
                "orientation": "+"
              },
              {
                "ref": "uuid:d5f598a6-8c7b-4254-a710-5a0238368a6b",
                "orientation": "+"
              },
              {
                "ref": "uuid:d8f2444f-769d-4fe5-bfb7-96c75eb21aa3",
                "orientation": "+"
              },
              {
                "ref": "uuid:09582fa5-0931-481b-9203-0dba27308ddd",
                "orientation": "+"
              },
              {
                "ref": "uuid:6837ca1f-41c3-4002-9251-7113835def85",
                "orientation": "-"
              },
              {
                "ref": "uuid:b3470cac-a616-4768-a74b-182208496ee1",
                "orientation": "+"
              },
              {
                "ref": "uuid:f2f50332-6f50-47ab-868f-fdc520e68848",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Lower West"
          }
        },
        {
          "id": "uuid:1e877d2e-b9b0-4152-b693-fc4d76843142",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Shell",
            "directed_references": [
              {
                "ref": "uuid:fa9fc866-8b5d-4056-9afb-a5294b52eea3",
                "orientation": "+"
              },
              {
                "ref": "uuid:afa0638d-9d57-4b2a-ad58-af68daa3726a",
                "orientation": "+"
              },
              {
                "ref": "uuid:e2dd1def-1a2e-4e60-9db0-5e4c4095e4c7",
                "orientation": "+"
              },
              {
                "ref": "uuid:cace1bee-957e-4b24-8343-47cd6827a09e",
                "orientation": "+"
              },
              {
                "ref": "uuid:7385f01e-11f8-4811-bab6-3abca0b2c6f7",
                "orientation": "+"
              },
              {
                "ref": "uuid:5635ffda-d1a0-463c-93e4-2c256e049f6e",
                "orientation": "-"
              },
              {
                "ref": "uuid:2a36d343-55e4-4ddb-8c44-f7612baa99ce",
                "orientation": "-"
              },
              {
                "ref": "uuid:09582fa5-0931-481b-9203-0dba27308ddd",
                "orientation": "-"
              },
              {
                "ref": "uuid:d8f2444f-769d-4fe5-bfb7-96c75eb21aa3",
                "orientation": "-"
              },
              {
                "ref": "uuid:c45f774d-8ba2-41a8-8edd-a08921a630b9",
                "orientation": "-"
              },
              {
                "ref": "uuid:608c4fbe-df28-4c78-bec6-f7560f6a40ca",
                "orientation": "-"
              },
              {
                "ref": "uuid:335305a1-d6a4-499f-8105-8b5e2f9a7383",
                "orientation": "-"
              },
              {
                "ref": "uuid:6ae1d5a0-8bf8-4675-a048-f92b7704c482",
                "orientation": "-"
              }
            ]
          },
          "properties": {
            "description": "Exterior Shell of Stairwell"
          }
        }
      ]
    }
  ],
  "solids": [
    {
      "id": "uuid:057e31e4-e48d-4690-85f5-7f9bee5503ec",
      "type": "FeatureCollection",
      "featureType": "Solid",
      "features": [
        {
          "id": "uuid:59df3615-f39c-4cbb-a911-5f7d80b9034b",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:26924195-da93-43af-946d-237910710449",
                "orientation": "+"
              }
            ],
            "relationships": [
              {
                "href": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
                "rel": "topology",
                "role": "within",
                "targetRole": "containingPrimaryParcel",
                "targetFeatureType": "PrimaryParcel"
              }
            ]
          },
          "properties": {
            "name": "Upper East",
            "floors": [
              2
            ],
            "volume": 167.907
          }
        },
        {
          "id": "uuid:1c7bd760-43d5-46ad-9a6b-3b8f3e558b11",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:89957e86-89d5-459d-a170-0c7c916f2382",
                "orientation": "+"
              }
            ],
            "relationships": [
              {
                "href": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
                "rel": "topology",
                "role": "containingPrimaryParcel",
                "targetFeatureType": "surv:PrimaryParcel"
              }
            ]
          },
          "properties": {
            "name": "Upper West",
            "floors": [
              2
            ],
            "volume": 167.904
          }
        },
        {
          "id": "uuid:dc91b809-03bf-49f2-849f-1e8071fad1d9",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:9a31a4bf-8d83-4876-8bc3-df640512418a",
                "orientation": "+"
              }
            ],
            "relationships": [
              {
                "href": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
                "rel": "topology",
                "role": "containingPrimaryParcel",
                "targetFeatureType": "surv:PrimaryParcel"
              }
            ]
          },
          "properties": {
            "name": "Lower East",
            "floors": [
              1
            ],
            "volume": 263.913
          }
        },
        {
          "id": "uuid:950966fc-0c0e-4546-b5c6-41f73fa57be1",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:ddbbed6c-5a7d-4405-9d41-59677b9484ee",
                "orientation": "+"
              }
            ],
            "relationships": [
              {
                "href": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
                "rel": "topology",
                "role": "containingPrimaryParcel",
                "targetFeatureType": "surv:PrimaryParcel"
              }
            ]
          },
          "properties": {
            "name": "Lower West",
            "floors": [
              1
            ],
            "volume": 263.85
          }
        },
        {
          "id": "uuid:b9b03d9f-fe75-4ec5-8696-294aefafe145",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "Solid",
            "directed_references": [
              {
                "ref": "uuid:1e877d2e-b9b0-4152-b693-fc4d76843142",
                "orientation": "+"
              }
            ],
            "relationships": [
              {
                "href": "uuid:458ba315-9601-4e0c-9385-f54c1e2372f6",
                "rel": "topology",
                "role": "containingPrimaryParcel",
                "targetFeatureType": "surv:PrimaryParcel"
              }
            ]
          },
          "properties": {
            "name": "Stairwell",
            "floors": [
              1,
              2
            ],
            "volume": 119.806
          }
        }
      ]
    }
  ],
  "supportingDocuments": [],
  "annotations": [],
  "statistics": {
    "point_count": 57,
    "edge_count": 65,
    "ring_count": 35,
    "face_count": 35,
    "shell_count": 5,
    "solid_count": 5
  }
}
```

#### ttl
```ttl
@prefix commonpatterns: <https://w3id.org/ogc/utils/label/> .
@prefix container: <https://linked.data.gov.au/def/csdm/container/> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix epsg: <http://www.opengis.net/def/crs/EPSG/0/> .
@prefix geojson: <https://purl.org/geojson/vocab#> .
@prefix ns1: <https://linked.data.gov.au/def/csdm/commonpatterns/> .
@prefix owlTime: <http://www.w3.org/2006/time#> .
@prefix parcel: <https://w3id.org/ogc/ladm/parcels/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix surv: <https://linked.data.gov.au/def/csdm/surveyfeatures/> .
@prefix topo: <https://purl.org/geojson/topo#> .
@prefix uuid: <urn:uuid:> .
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

uuid:e9901182-59a5-4f67-8093-942fef888bf2 a geojson:FeatureCollection ;
    rdfs:label "DP 12347" ;
    dct:time [ owlTime:hasTime "2026-04-22"^^xsd:date ] ;
    container:bearingRotation 0e+00 ;
    container:horizontalCRS epsg:7850 ;
    container:parcels uuid:f6235c7a-8ada-499d-9574-067ccd370949 ;
    container:points uuid:6ae2b7e0-a540-40c7-81bc-45c2cac1d3e6 ;
    container:purpose wa-survey-purpose:subdivision ;
    container:surveyType wa-survey-type:SSA ;
    topo:edges uuid:20ac1c64-b5d9-407a-91ae-f241cb3b4d4e,
        uuid:8a7f5e78-fcc3-4f6d-a19e-ece99b75234f ;
    topo:faces ( uuid:b877b36c-fa85-40c3-b254-fe4d8cbf637c ) ;
    topo:rings ( uuid:a212bf84-0fc3-4c11-b9ae-6324149206bf ) ;
    topo:shells ( uuid:4239e2e9-e975-4d03-9c5a-65321c4830b1 ) ;
    geojson:collectionFeatureType "CSD" .

uuid:1e877d2e-b9b0-4152-b693-fc4d76843142 a geojson:Feature ;
    geojson:topology [ a topo:Shell ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:fa9fc866-8b5d-4056-9afb-a5294b52eea3 ] [ topo:orientation "+" ;
                        topo:ref uuid:afa0638d-9d57-4b2a-ad58-af68daa3726a ] [ topo:orientation "+" ;
                        topo:ref uuid:e2dd1def-1a2e-4e60-9db0-5e4c4095e4c7 ] [ topo:orientation "+" ;
                        topo:ref uuid:cace1bee-957e-4b24-8343-47cd6827a09e ] [ topo:orientation "+" ;
                        topo:ref uuid:7385f01e-11f8-4811-bab6-3abca0b2c6f7 ] [ topo:orientation "-" ;
                        topo:ref uuid:5635ffda-d1a0-463c-93e4-2c256e049f6e ] [ topo:orientation "-" ;
                        topo:ref uuid:2a36d343-55e4-4ddb-8c44-f7612baa99ce ] [ topo:orientation "-" ;
                        topo:ref uuid:09582fa5-0931-481b-9203-0dba27308ddd ] [ topo:orientation "-" ;
                        topo:ref uuid:d8f2444f-769d-4fe5-bfb7-96c75eb21aa3 ] [ topo:orientation "-" ;
                        topo:ref uuid:c45f774d-8ba2-41a8-8edd-a08921a630b9 ] [ topo:orientation "-" ;
                        topo:ref uuid:608c4fbe-df28-4c78-bec6-f7560f6a40ca ] [ topo:orientation "-" ;
                        topo:ref uuid:335305a1-d6a4-499f-8105-8b5e2f9a7383 ] [ topo:orientation "-" ;
                        topo:ref uuid:6ae1d5a0-8bf8-4675-a048-f92b7704c482 ] ) ] .

uuid:20ac1c64-b5d9-407a-91ae-f241cb3b4d4e a geojson:FeatureCollection ;
    geojson:collectionFeatureType "surv:ObservedVector" ;
    geojson:features uuid:13b59b93-6f0f-4773-a8b7-88401c9c1fae,
        uuid:1ce937ba-14a1-48dc-b65c-3b50e98ceb37,
        uuid:2fbdbc42-6443-4bc2-bd42-0c77a3e9c9fc,
        uuid:379f8fe1-7311-4db2-a5b3-8b7cf5dd0882,
        uuid:41e63da1-bee7-48da-be90-527c99fa38d8,
        uuid:54943d43-ea1a-4a8c-8cbb-c6d89187e842,
        uuid:5a34b8a2-dac0-4ad4-8a59-cbee38b407c8,
        uuid:6e614af5-e74d-4c6d-b841-85ac4dd93250,
        uuid:780d3b13-0263-4449-ad1e-1627fd0042aa,
        uuid:7914b52a-e13d-4d79-9f76-43e040fa939f,
        uuid:b4b815fe-eb25-401b-b65f-f7a020da8944,
        uuid:cf0f9b8d-c8d2-4691-8c41-086e18375574,
        uuid:d2ebb167-17a2-4bd0-8411-97f83c92d9e6,
        uuid:d75b510f-9b88-4a82-bac4-4de995f4a1b9,
        uuid:e9b94664-2b7a-4e97-a565-4bcce3896392,
        uuid:ed1e393e-d7f5-4a85-93b1-f08812b85014,
        uuid:f7fb3296-07ab-42f6-937f-0ebbe0ee98ea,
        uuid:fd23e6be-fb9a-44fd-8ad1-55df298d506a,
        uuid:ff22d8d8-5d2e-4fdd-97ce-d80e2b48b5de .

uuid:26924195-da93-43af-946d-237910710449 a geojson:Feature ;
    geojson:topology [ a topo:Shell ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:509fb96a-ed61-4418-a897-1cc9a394d7d6 ] [ topo:orientation "+" ;
                        topo:ref uuid:2f59c9a6-1cd7-4cc0-86df-cc3c44d22286 ] [ topo:orientation "+" ;
                        topo:ref uuid:79feb69f-05d4-4ef0-b880-44276e524854 ] [ topo:orientation "+" ;
                        topo:ref uuid:41901fb2-753b-4b9f-8687-ae11d6f69439 ] [ topo:orientation "+" ;
                        topo:ref uuid:2ec797d0-35d9-46fc-a4ab-52794d397416 ] [ topo:orientation "+" ;
                        topo:ref uuid:608c4fbe-df28-4c78-bec6-f7560f6a40ca ] [ topo:orientation "+" ;
                        topo:ref uuid:2baad9ae-e5b4-48eb-81c6-736fd1500fb9 ] [ topo:orientation "+" ;
                        topo:ref uuid:5635ffda-d1a0-463c-93e4-2c256e049f6e ] ) ] .

uuid:4239e2e9-e975-4d03-9c5a-65321c4830b1 a geojson:FeatureCollection ;
    geojson:collectionFeatureType "Shell" ;
    geojson:features uuid:1e877d2e-b9b0-4152-b693-fc4d76843142,
        uuid:26924195-da93-43af-946d-237910710449,
        uuid:89957e86-89d5-459d-a170-0c7c916f2382,
        uuid:9a31a4bf-8d83-4876-8bc3-df640512418a,
        uuid:ddbbed6c-5a7d-4405-9d41-59677b9484ee .

uuid:458ba315-9601-4e0c-9385-f54c1e2372f6 a geojson:Feature ;
    geojson:topology [ a geojson:Polygon ;
            topo:relatedFeatures ( ( uuid:13b59b93-6f0f-4773-a8b7-88401c9c1fae uuid:ff22d8d8-5d2e-4fdd-97ce-d80e2b48b5de uuid:5a34b8a2-dac0-4ad4-8a59-cbee38b407c8 uuid:2fbdbc42-6443-4bc2-bd42-0c77a3e9c9fc uuid:54943d43-ea1a-4a8c-8cbb-c6d89187e842 uuid:cf0f9b8d-c8d2-4691-8c41-086e18375574 uuid:ed1e393e-d7f5-4a85-93b1-f08812b85014 uuid:d2ebb167-17a2-4bd0-8411-97f83c92d9e6 uuid:d75b510f-9b88-4a82-bac4-4de995f4a1b9 uuid:7914b52a-e13d-4d79-9f76-43e040fa939f uuid:b4b815fe-eb25-401b-b65f-f7a020da8944 uuid:41e63da1-bee7-48da-be90-527c99fa38d8 uuid:e9b94664-2b7a-4e97-a565-4bcce3896392 uuid:1ce937ba-14a1-48dc-b65c-3b50e98ceb37 uuid:6e614af5-e74d-4c6d-b841-85ac4dd93250 uuid:379f8fe1-7311-4db2-a5b3-8b7cf5dd0882 uuid:780d3b13-0263-4449-ad1e-1627fd0042aa uuid:fd23e6be-fb9a-44fd-8ad1-55df298d506a uuid:f7fb3296-07ab-42f6-937f-0ebbe0ee98ea ) ) ] ;
    parcel:appellation [ a <wa:LotOnPlanAppellation> ;
            rdfs:label "Lot 3 DP 214866" ;
            dct:hasPart [ rdfs:label "3" ;
                    commonpatterns:namePartType <file:///github/workspace/ParcelIdentifier> ],
                [ rdfs:label "214866" ;
                    commonpatterns:namePartType <file:///github/workspace/planIdentifier> ],
                [ rdfs:label "DP" ;
                    commonpatterns:namePartType <file:///github/workspace/PlanType> ],
                [ rdfs:label "Lot" ;
                    commonpatterns:namePartType <file:///github/workspace/ParcelType> ] ] ;
    parcel:purpose wa-parcel-purpose:lot ;
    parcel:state wa-parcel-state:created ;
    parcel:surfaceArea 2829 ;
    parcel:type wa-parcel-type:freehold .

uuid:6ae2b7e0-a540-40c7-81bc-45c2cac1d3e6 a geojson:FeatureCollection ;
    geojson:collectionFeatureType "CadastralMark" ;
    geojson:features uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4,
        uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac,
        uuid:127223b8-ae77-4a0c-abe6-d76332e85af1,
        uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324,
        uuid:21a929df-71c5-47e2-a6d5-24f37bae8442,
        uuid:291b7f49-8f18-498e-bd2f-7bfb6760eaa2,
        uuid:29d783d3-10bb-4882-908a-eb8151cc52ec,
        uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1,
        uuid:313731cb-1e0c-469c-b64e-06af1629ba2a,
        uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba,
        uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806,
        uuid:359c2049-41e8-4f00-ab35-458acc23f4bd,
        uuid:3c6c5996-1c40-4e52-932b-13cc41fcee71,
        uuid:3cf6b3c0-3acc-4720-a643-d885d6951b2a,
        uuid:3d450239-8099-4649-a355-565e58332111,
        uuid:40a76a4c-fff8-4156-8071-61423b0d44e9,
        uuid:4261adb8-2fa6-4ce6-94cc-d4906f2a40fc,
        uuid:489a1c4c-0ac4-470f-9757-e50bc71d3aa8,
        uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec,
        uuid:4a98b01f-7e97-4049-9f39-a0ba56758ce9,
        uuid:4c83a22b-2309-4240-97b1-d130cb1a8d43,
        uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879,
        uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b,
        uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d,
        uuid:67c660f1-0e49-4ee4-996d-4d453fe6209b,
        uuid:6d31e874-6317-43c3-b357-49a699f8a69d,
        uuid:7023d838-169a-4b01-a85f-e2b270751a7c,
        uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89,
        uuid:7970f2e9-9893-4e54-b249-187db718bd31,
        uuid:7f9a7128-b01c-4568-8241-29391e9a5d30,
        uuid:85f5fe02-792e-44e4-908e-10240b79ddb5,
        uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78,
        uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4,
        uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70,
        uuid:97571fb3-9987-49b3-b54c-88b8adcd2655,
        uuid:a221f31d-26c6-46f0-872a-567244fa5447,
        uuid:a9135246-4680-4183-b3a0-ea902313e04b,
        uuid:be40befb-8498-4793-9ed6-d0e72c1a1d5b,
        uuid:c4aa05ba-997c-4b7e-b5bd-071f385e17d5,
        uuid:c7c0b650-ed8a-496d-bff5-46d9953137fd,
        uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d,
        uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda,
        uuid:d250661e-6383-4458-9323-bf347210311f,
        uuid:d72f308c-110a-459d-ae5f-9d459d9ae51e,
        uuid:d9e43ed6-9387-4180-a25a-3b3208422263,
        uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1,
        uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76,
        uuid:e18342eb-1272-4582-b6bf-3c9d7e138667,
        uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0,
        uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158,
        uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce,
        uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e,
        uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb,
        uuid:fbebc23c-cdef-4d02-bced-5b5bb7686b1f,
        uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e .

uuid:89957e86-89d5-459d-a170-0c7c916f2382 a geojson:Feature ;
    geojson:topology [ a topo:Shell ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:200595fe-9d0a-4fa0-a16f-374b28cb0ad0 ] [ topo:orientation "+" ;
                        topo:ref uuid:9ce5b406-dab7-4afa-8fbd-2d5101aec77d ] [ topo:orientation "+" ;
                        topo:ref uuid:bd5ceea7-ea06-4191-9b3c-2905569f3035 ] [ topo:orientation "+" ;
                        topo:ref uuid:05d0ee6b-baed-4a58-8c57-14c12cfe9fe0 ] [ topo:orientation "-" ;
                        topo:ref uuid:2ec797d0-35d9-46fc-a4ab-52794d397416 ] [ topo:orientation "+" ;
                        topo:ref uuid:6ae1d5a0-8bf8-4675-a048-f92b7704c482 ] [ topo:orientation "+" ;
                        topo:ref uuid:f2f50332-6f50-47ab-868f-fdc520e68848 ] [ topo:orientation "+" ;
                        topo:ref uuid:2a36d343-55e4-4ddb-8c44-f7612baa99ce ] ) ] .

uuid:8a7f5e78-fcc3-4f6d-a19e-ece99b75234f a geojson:FeatureCollection ;
    geojson:collectionFeatureType "Edge" ;
    geojson:features uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5,
        uuid:06b36f25-9655-4795-a67e-51f17d95c50a,
        uuid:0a69a1c6-2a79-4e71-9149-b488b01ac1e0,
        uuid:105668a3-bd19-4802-a5ce-c200f1b06fad,
        uuid:12307863-0535-49c5-9baf-ae6d2dc7241a,
        uuid:123ff795-71e3-489c-89c8-8a1e53864313,
        uuid:150f57fd-8d57-4533-9922-96732defb792,
        uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5,
        uuid:26974107-8cc7-472a-98b1-bac952f4c924,
        uuid:32ccd411-43f6-46f2-9fc8-0ae0a18e650d,
        uuid:33deda4d-e880-418b-9b90-93bc255670db,
        uuid:380f1122-b209-41f6-8fd0-f013d06de253,
        uuid:3accc489-4f33-4a69-ae3c-ad302bea4102,
        uuid:44d3831e-c643-48f4-989b-d7ca9d2598bf,
        uuid:52d7c66c-e1f2-49c4-a670-8e1a80c816a2,
        uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6,
        uuid:5ad51e3c-9924-4a4f-83b3-a1b2605b56de,
        uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f,
        uuid:5ef7922d-72e6-4c88-bb01-b81714eee525,
        uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147,
        uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67,
        uuid:647124d6-678c-45aa-98ce-7e268086f742,
        uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8,
        uuid:6627f055-85b5-44c1-a7f8-a9c5b9c9fa9f,
        uuid:689a0716-0880-4a1b-8454-ba189e331ee6,
        uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546,
        uuid:6b9374b0-671d-4603-9349-748b4c231518,
        uuid:73751771-3e38-4526-8d49-9465d947b6dd,
        uuid:74d06171-c161-4193-aea9-11cf904dd554,
        uuid:75c75f5e-3c22-4b05-a4b7-5ce037bbd55b,
        uuid:7755d20a-6e6d-4356-b9d6-51a65a971dfb,
        uuid:79014769-c1f8-4ffd-ae8a-2f43b1a5118d,
        uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52,
        uuid:7b34e432-9892-4867-bebf-485a47054777,
        uuid:84b3b6af-d3cb-402a-8ef3-1ed8b8b9c50b,
        uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936,
        uuid:887b4e80-25a7-491c-9f99-c567acf7a098,
        uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5,
        uuid:8eefa72f-3f34-4866-a4cf-ebdde5d2483e,
        uuid:94185a2f-45b0-4c79-95c0-44fef184e2c7,
        uuid:9557e813-61c9-4ae4-a097-fe3ccf104c34,
        uuid:9d3409e1-67b8-4a8c-9ee6-981eaff19cf5,
        uuid:a1386220-8990-43a9-800c-4ed3b3e323f6,
        uuid:a1660706-a249-4fd6-ab29-809940a8aedf,
        uuid:a475a79b-06a2-400c-9460-6de8a6772ac6,
        uuid:a49e4e7d-1f64-4162-9535-ac936901c370,
        uuid:a59870f2-8fa1-4cbf-9822-e1565922e3d1,
        uuid:b24b3a09-48c1-4fa3-a21c-71641207feae,
        uuid:b62a056e-a219-4fc5-942e-3fb4c48d708d,
        uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561,
        uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3,
        uuid:cc1617ec-c00c-42c4-abaa-9237964d2f9c,
        uuid:cd257d47-13ca-40db-b196-d78c51872a3b,
        uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55,
        uuid:d001066e-9581-4f45-880e-4810c005aeb4,
        uuid:d24a9e84-362c-4d6e-84f2-c1a16900185e,
        uuid:d377883b-98a1-43bf-a10f-bffeeb530993,
        uuid:d78450ce-0f63-4c04-811a-5b87b9591b0f,
        uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1,
        uuid:f15f5cb8-bee6-4d84-951a-b4821a00cccf,
        uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a,
        uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f,
        uuid:f9f5fd81-680a-43f5-a04e-adc180a9ecdd,
        uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f,
        uuid:fe560591-08a1-4c35-998b-bee91f67ca50 .

uuid:9a31a4bf-8d83-4876-8bc3-df640512418a a geojson:Feature ;
    geojson:topology [ a topo:Shell ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:741587b8-5d4f-4921-979e-92cebc0bc61a ] [ topo:orientation "+" ;
                        topo:ref uuid:c6a3d176-abfb-4f53-a6d8-cc594118b214 ] [ topo:orientation "+" ;
                        topo:ref uuid:ce095212-8b35-48bf-b77d-57ba8bcf9882 ] [ topo:orientation "+" ;
                        topo:ref uuid:a6c01635-707b-4359-8eb5-23d324d7a7a8 ] [ topo:orientation "+" ;
                        topo:ref uuid:6837ca1f-41c3-4002-9251-7113835def85 ] [ topo:orientation "+" ;
                        topo:ref uuid:c45f774d-8ba2-41a8-8edd-a08921a630b9 ] [ topo:orientation "+" ;
                        topo:ref uuid:335305a1-d6a4-499f-8105-8b5e2f9a7383 ] [ topo:orientation "-" ;
                        topo:ref uuid:2baad9ae-e5b4-48eb-81c6-736fd1500fb9 ] [ topo:orientation "+" ;
                        topo:ref uuid:f55c0e40-89fe-4a23-8d11-aff91c754214 ] ) ] .

uuid:a212bf84-0fc3-4c11-b9ae-6324149206bf a geojson:FeatureCollection ;
    geojson:collectionFeatureType "Ring" ;
    geojson:features uuid:0934c81e-8a94-41c5-8103-3365b8c33853,
        uuid:0c487fe8-39b5-4a89-8c97-ac022dbe1fce,
        uuid:0e17be70-1378-48cc-b88b-f12de3d9e112,
        uuid:1c3ca0ce-fbaf-4929-bd1d-44ca6c3fd3bc,
        uuid:22851efb-93f5-492d-9a9c-102d1df785c1,
        uuid:2eba2a4e-7b02-4921-894b-7882959e13fd,
        uuid:2ff15613-8fa2-4410-af09-0f42e2c83dd1,
        uuid:315d5051-9eb9-4c1a-9434-a8d2e3e1d3f5,
        uuid:356935be-07f0-4a7f-895d-78848298cc32,
        uuid:4d4b7e04-ac90-4447-9d86-28db1ad4ac41,
        uuid:542934a9-f32d-401e-8e05-05d529492483,
        uuid:55e481c1-3084-42de-b1b1-020ae90b594c,
        uuid:5943a3e8-75e7-45c0-9b66-3f29e77150cf,
        uuid:6379c9a9-86c4-45a0-a508-a62309a4e766,
        uuid:6b4acb54-1cd3-42d5-9845-7a7f57b26fab,
        uuid:6d219ad2-36b7-4f0d-bc02-deba6c975ea2,
        uuid:70d6787b-0280-42a1-a46f-4c3ea010cbce,
        uuid:71721739-f1d5-4cac-9a53-34c39c7e2ce2,
        uuid:777a02bc-f2d3-4b31-bc4c-7180bc13a31c,
        uuid:7d373590-b767-45a5-8e6a-120d938d3736,
        uuid:89e58766-afab-4d1f-8775-1311275c857a,
        uuid:9ca25210-c370-4b91-b92f-33f5e1921889,
        uuid:aaee3689-d94d-4193-af47-cdf29e45d3e3,
        uuid:abd9ba1e-6d89-417d-a8ee-2e84d2b296dc,
        uuid:abe41c77-3601-4c23-bc85-69d574e758f2,
        uuid:b062d93a-cabd-45e1-845e-ca90e3c39730,
        uuid:bdf1b7f8-6f4e-4652-a24e-2d7328101807,
        uuid:c47c2ae9-6ff5-4b26-a293-ca83b7046ac0,
        uuid:c4eecceb-c7c0-4b2d-a462-de459de385f7,
        uuid:cb61c522-2984-4aea-92b7-68b08b3da84d,
        uuid:cb6708a2-df56-4993-9699-9542c85c4f86,
        uuid:d627f2d7-d27f-40bf-b30a-2298c50c5b88,
        uuid:e6fb50a4-9678-4e44-b31c-70cd67726e49,
        uuid:f02f10fc-79f0-4ba7-aa31-e50da369b0e0,
        uuid:f6d80de2-ba10-4748-9c16-f74eafa5e454 .

uuid:b877b36c-fa85-40c3-b254-fe4d8cbf637c a geojson:FeatureCollection ;
    geojson:collectionFeatureType "Face" ;
    geojson:features uuid:05d0ee6b-baed-4a58-8c57-14c12cfe9fe0,
        uuid:079558dc-5401-4bbb-ae7a-b3e566a6737d,
        uuid:09582fa5-0931-481b-9203-0dba27308ddd,
        uuid:200595fe-9d0a-4fa0-a16f-374b28cb0ad0,
        uuid:287abc0b-28ad-41ec-a7ff-eec8d4192c2b,
        uuid:2a36d343-55e4-4ddb-8c44-f7612baa99ce,
        uuid:2baad9ae-e5b4-48eb-81c6-736fd1500fb9,
        uuid:2ec797d0-35d9-46fc-a4ab-52794d397416,
        uuid:2f59c9a6-1cd7-4cc0-86df-cc3c44d22286,
        uuid:335305a1-d6a4-499f-8105-8b5e2f9a7383,
        uuid:41901fb2-753b-4b9f-8687-ae11d6f69439,
        uuid:509fb96a-ed61-4418-a897-1cc9a394d7d6,
        uuid:5635ffda-d1a0-463c-93e4-2c256e049f6e,
        uuid:608c4fbe-df28-4c78-bec6-f7560f6a40ca,
        uuid:6837ca1f-41c3-4002-9251-7113835def85,
        uuid:6ae1d5a0-8bf8-4675-a048-f92b7704c482,
        uuid:7385f01e-11f8-4811-bab6-3abca0b2c6f7,
        uuid:741587b8-5d4f-4921-979e-92cebc0bc61a,
        uuid:79feb69f-05d4-4ef0-b880-44276e524854,
        uuid:933a6a7d-dfe4-4bae-ae48-3385e9f22916,
        uuid:9ce5b406-dab7-4afa-8fbd-2d5101aec77d,
        uuid:a6c01635-707b-4359-8eb5-23d324d7a7a8,
        uuid:afa0638d-9d57-4b2a-ad58-af68daa3726a,
        uuid:b3470cac-a616-4768-a74b-182208496ee1,
        uuid:bd5ceea7-ea06-4191-9b3c-2905569f3035,
        uuid:c45f774d-8ba2-41a8-8edd-a08921a630b9,
        uuid:c6a3d176-abfb-4f53-a6d8-cc594118b214,
        uuid:cace1bee-957e-4b24-8343-47cd6827a09e,
        uuid:ce095212-8b35-48bf-b77d-57ba8bcf9882,
        uuid:d5f598a6-8c7b-4254-a710-5a0238368a6b,
        uuid:d8f2444f-769d-4fe5-bfb7-96c75eb21aa3,
        uuid:e2dd1def-1a2e-4e60-9db0-5e4c4095e4c7,
        uuid:f2f50332-6f50-47ab-868f-fdc520e68848,
        uuid:f55c0e40-89fe-4a23-8d11-aff91c754214,
        uuid:fa9fc866-8b5d-4056-9afb-a5294b52eea3 .

uuid:ddbbed6c-5a7d-4405-9d41-59677b9484ee a geojson:Feature ;
    geojson:topology [ a topo:Shell ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:933a6a7d-dfe4-4bae-ae48-3385e9f22916 ] [ topo:orientation "+" ;
                        topo:ref uuid:287abc0b-28ad-41ec-a7ff-eec8d4192c2b ] [ topo:orientation "+" ;
                        topo:ref uuid:079558dc-5401-4bbb-ae7a-b3e566a6737d ] [ topo:orientation "+" ;
                        topo:ref uuid:d5f598a6-8c7b-4254-a710-5a0238368a6b ] [ topo:orientation "+" ;
                        topo:ref uuid:d8f2444f-769d-4fe5-bfb7-96c75eb21aa3 ] [ topo:orientation "+" ;
                        topo:ref uuid:09582fa5-0931-481b-9203-0dba27308ddd ] [ topo:orientation "-" ;
                        topo:ref uuid:6837ca1f-41c3-4002-9251-7113835def85 ] [ topo:orientation "+" ;
                        topo:ref uuid:b3470cac-a616-4768-a74b-182208496ee1 ] [ topo:orientation "-" ;
                        topo:ref uuid:f2f50332-6f50-47ab-868f-fdc520e68848 ] ) ] .

uuid:f6235c7a-8ada-499d-9574-067ccd370949 a geojson:FeatureCollection,
        parcel:PrimaryParcel ;
    geojson:features uuid:458ba315-9601-4e0c-9385-f54c1e2372f6 .

uuid:05d0ee6b-baed-4a58-8c57-14c12cfe9fe0 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:55e481c1-3084-42de-b1b1-020ae90b594c ] ) ] .

uuid:079558dc-5401-4bbb-ae7a-b3e566a6737d a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:315d5051-9eb9-4c1a-9434-a8d2e3e1d3f5 ] ) ] .

uuid:0934c81e-8a94-41c5-8103-3365b8c33853 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:6627f055-85b5-44c1-a7f8-a9c5b9c9fa9f ] [ topo:orientation "-" ;
                        topo:ref uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5 ] [ topo:orientation "-" ;
                        topo:ref uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546 ] [ topo:orientation "-" ;
                        topo:ref uuid:a1660706-a249-4fd6-ab29-809940a8aedf ] [ topo:orientation "-" ;
                        topo:ref uuid:9557e813-61c9-4ae4-a097-fe3ccf104c34 ] [ topo:orientation "-" ;
                        topo:ref uuid:9d3409e1-67b8-4a8c-9ee6-981eaff19cf5 ] ) ] .

uuid:0c487fe8-39b5-4a89-8c97-ac022dbe1fce a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:b62a056e-a219-4fc5-942e-3fb4c48d708d ] [ topo:orientation "+" ;
                        topo:ref uuid:a1386220-8990-43a9-800c-4ed3b3e323f6 ] [ topo:orientation "+" ;
                        topo:ref uuid:32ccd411-43f6-46f2-9fc8-0ae0a18e650d ] [ topo:orientation "+" ;
                        topo:ref uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5 ] ) ] .

uuid:0e17be70-1378-48cc-b88b-f12de3d9e112 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:84b3b6af-d3cb-402a-8ef3-1ed8b8b9c50b ] [ topo:orientation "+" ;
                        topo:ref uuid:b24b3a09-48c1-4fa3-a21c-71641207feae ] [ topo:orientation "+" ;
                        topo:ref uuid:9d3409e1-67b8-4a8c-9ee6-981eaff19cf5 ] [ topo:orientation "+" ;
                        topo:ref uuid:887b4e80-25a7-491c-9f99-c567acf7a098 ] ) ] .

uuid:13b59b93-6f0f-4773-a8b7-88401c9c1fae a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:c4aa05ba-997c-4b7e-b5bd-071f385e17d5 uuid:489a1c4c-0ac4-470f-9757-e50bc71d3aa8 ) ] .

uuid:1c3ca0ce-fbaf-4929-bd1d-44ca6c3fd3bc a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:5ef7922d-72e6-4c88-bb01-b81714eee525 ] [ topo:orientation "-" ;
                        topo:ref uuid:3accc489-4f33-4a69-ae3c-ad302bea4102 ] [ topo:orientation "-" ;
                        topo:ref uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5 ] [ topo:orientation "-" ;
                        topo:ref uuid:380f1122-b209-41f6-8fd0-f013d06de253 ] ) ] .

uuid:1ce937ba-14a1-48dc-b65c-3b50e98ceb37 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:3cf6b3c0-3acc-4720-a643-d885d6951b2a uuid:67c660f1-0e49-4ee4-996d-4d453fe6209b ) ] .

uuid:200595fe-9d0a-4fa0-a16f-374b28cb0ad0 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:356935be-07f0-4a7f-895d-78848298cc32 ] ) ] .

uuid:22851efb-93f5-492d-9a9c-102d1df785c1 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:150f57fd-8d57-4533-9922-96732defb792 ] [ topo:orientation "-" ;
                        topo:ref uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52 ] [ topo:orientation "-" ;
                        topo:ref uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5 ] [ topo:orientation "-" ;
                        topo:ref uuid:d001066e-9581-4f45-880e-4810c005aeb4 ] ) ] .

uuid:287abc0b-28ad-41ec-a7ff-eec8d4192c2b a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:4d4b7e04-ac90-4447-9d86-28db1ad4ac41 ] ) ] .

uuid:2eba2a4e-7b02-4921-894b-7882959e13fd a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:8eefa72f-3f34-4866-a4cf-ebdde5d2483e ] [ topo:orientation "-" ;
                        topo:ref uuid:a49e4e7d-1f64-4162-9535-ac936901c370 ] [ topo:orientation "-" ;
                        topo:ref uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f ] [ topo:orientation "-" ;
                        topo:ref uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a ] [ topo:orientation "-" ;
                        topo:ref uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f ] ) ] .

uuid:2f59c9a6-1cd7-4cc0-86df-cc3c44d22286 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:777a02bc-f2d3-4b31-bc4c-7180bc13a31c ] ) ] .

uuid:2fbdbc42-6443-4bc2-bd42-0c77a3e9c9fc a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:313731cb-1e0c-469c-b64e-06af1629ba2a uuid:c7c0b650-ed8a-496d-bff5-46d9953137fd ) ] .

uuid:2ff15613-8fa2-4410-af09-0f42e2c83dd1 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:44d3831e-c643-48f4-989b-d7ca9d2598bf ] [ topo:orientation "-" ;
                        topo:ref uuid:3accc489-4f33-4a69-ae3c-ad302bea4102 ] [ topo:orientation "-" ;
                        topo:ref uuid:123ff795-71e3-489c-89c8-8a1e53864313 ] [ topo:orientation "-" ;
                        topo:ref uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8 ] ) ] .

uuid:315d5051-9eb9-4c1a-9434-a8d2e3e1d3f5 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:74d06171-c161-4193-aea9-11cf904dd554 ] [ topo:orientation "+" ;
                        topo:ref uuid:689a0716-0880-4a1b-8454-ba189e331ee6 ] [ topo:orientation "+" ;
                        topo:ref uuid:79014769-c1f8-4ffd-ae8a-2f43b1a5118d ] [ topo:orientation "-" ;
                        topo:ref uuid:12307863-0535-49c5-9baf-ae6d2dc7241a ] [ topo:orientation "-" ;
                        topo:ref uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5 ] ) ] .

uuid:356935be-07f0-4a7f-895d-78848298cc32 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:12307863-0535-49c5-9baf-ae6d2dc7241a ] [ topo:orientation "+" ;
                        topo:ref uuid:647124d6-678c-45aa-98ce-7e268086f742 ] [ topo:orientation "+" ;
                        topo:ref uuid:75c75f5e-3c22-4b05-a4b7-5ce037bbd55b ] [ topo:orientation "-" ;
                        topo:ref uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f ] ) ] .

uuid:379f8fe1-7311-4db2-a5b3-8b7cf5dd0882 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:3c6c5996-1c40-4e52-932b-13cc41fcee71 uuid:97571fb3-9987-49b3-b54c-88b8adcd2655 ) ] .

uuid:41901fb2-753b-4b9f-8687-ae11d6f69439 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:f6d80de2-ba10-4748-9c16-f74eafa5e454 ] ) ] .

uuid:41e63da1-bee7-48da-be90-527c99fa38d8 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:d72f308c-110a-459d-ae5f-9d459d9ae51e uuid:a221f31d-26c6-46f0-872a-567244fa5447 ) ] .

uuid:4d4b7e04-ac90-4447-9d86-28db1ad4ac41 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:fe560591-08a1-4c35-998b-bee91f67ca50 ] [ topo:orientation "-" ;
                        topo:ref uuid:7755d20a-6e6d-4356-b9d6-51a65a971dfb ] [ topo:orientation "+" ;
                        topo:ref uuid:d377883b-98a1-43bf-a10f-bffeeb530993 ] [ topo:orientation "-" ;
                        topo:ref uuid:689a0716-0880-4a1b-8454-ba189e331ee6 ] ) ] .

uuid:509fb96a-ed61-4418-a897-1cc9a394d7d6 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:0c487fe8-39b5-4a89-8c97-ac022dbe1fce ] ) ] .

uuid:542934a9-f32d-401e-8e05-05d529492483 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:150f57fd-8d57-4533-9922-96732defb792 ] [ topo:orientation "-" ;
                        topo:ref uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6 ] [ topo:orientation "-" ;
                        topo:ref uuid:f15f5cb8-bee6-4d84-951a-b4821a00cccf ] [ topo:orientation "-" ;
                        topo:ref uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f ] ) ] .

uuid:54943d43-ea1a-4a8c-8cbb-c6d89187e842 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:c7c0b650-ed8a-496d-bff5-46d9953137fd uuid:4261adb8-2fa6-4ce6-94cc-d4906f2a40fc ) ] .

uuid:55e481c1-3084-42de-b1b1-020ae90b594c a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:75c75f5e-3c22-4b05-a4b7-5ce037bbd55b ] [ topo:orientation "-" ;
                        topo:ref uuid:7b34e432-9892-4867-bebf-485a47054777 ] [ topo:orientation "-" ;
                        topo:ref uuid:cc1617ec-c00c-42c4-abaa-9237964d2f9c ] [ topo:orientation "+" ;
                        topo:ref uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936 ] [ topo:orientation "+" ;
                        topo:ref uuid:6b9374b0-671d-4603-9349-748b4c231518 ] [ topo:orientation "-" ;
                        topo:ref uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3 ] ) ] .

uuid:5943a3e8-75e7-45c0-9b66-3f29e77150cf a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:f9f5fd81-680a-43f5-a04e-adc180a9ecdd ] [ topo:orientation "-" ;
                        topo:ref uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67 ] [ topo:orientation "-" ;
                        topo:ref uuid:150f57fd-8d57-4533-9922-96732defb792 ] [ topo:orientation "-" ;
                        topo:ref uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a ] ) ] .

uuid:5a34b8a2-dac0-4ad4-8a59-cbee38b407c8 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:e18342eb-1272-4582-b6bf-3c9d7e138667 uuid:313731cb-1e0c-469c-b64e-06af1629ba2a ) ] .

uuid:6379c9a9-86c4-45a0-a508-a62309a4e766 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:f15f5cb8-bee6-4d84-951a-b4821a00cccf ] [ topo:orientation "+" ;
                        topo:ref uuid:33deda4d-e880-418b-9b90-93bc255670db ] [ topo:orientation "+" ;
                        topo:ref uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55 ] [ topo:orientation "-" ;
                        topo:ref uuid:06b36f25-9655-4795-a67e-51f17d95c50a ] [ topo:orientation "-" ;
                        topo:ref uuid:a49e4e7d-1f64-4162-9535-ac936901c370 ] ) ] .

uuid:6b4acb54-1cd3-42d5-9845-7a7f57b26fab a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:d78450ce-0f63-4c04-811a-5b87b9591b0f ] [ topo:orientation "+" ;
                        topo:ref uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f ] [ topo:orientation "+" ;
                        topo:ref uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a ] [ topo:orientation "+" ;
                        topo:ref uuid:d001066e-9581-4f45-880e-4810c005aeb4 ] [ topo:orientation "-" ;
                        topo:ref uuid:105668a3-bd19-4802-a5ce-c200f1b06fad ] [ topo:orientation "-" ;
                        topo:ref uuid:84b3b6af-d3cb-402a-8ef3-1ed8b8b9c50b ] ) ] .

uuid:6d219ad2-36b7-4f0d-bc02-deba6c975ea2 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:d78450ce-0f63-4c04-811a-5b87b9591b0f ] [ topo:orientation "-" ;
                        topo:ref uuid:887b4e80-25a7-491c-9f99-c567acf7a098 ] [ topo:orientation "+" ;
                        topo:ref uuid:9557e813-61c9-4ae4-a097-fe3ccf104c34 ] [ topo:orientation "+" ;
                        topo:ref uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561 ] ) ] .

uuid:6e614af5-e74d-4c6d-b841-85ac4dd93250 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:67c660f1-0e49-4ee4-996d-4d453fe6209b uuid:3c6c5996-1c40-4e52-932b-13cc41fcee71 ) ] .

uuid:70d6787b-0280-42a1-a46f-4c3ea010cbce a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6 ] [ topo:orientation "+" ;
                        topo:ref uuid:26974107-8cc7-472a-98b1-bac952f4c924 ] [ topo:orientation "-" ;
                        topo:ref uuid:6b9374b0-671d-4603-9349-748b4c231518 ] [ topo:orientation "+" ;
                        topo:ref uuid:0a69a1c6-2a79-4e71-9149-b488b01ac1e0 ] ) ] .

uuid:71721739-f1d5-4cac-9a53-34c39c7e2ce2 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:123ff795-71e3-489c-89c8-8a1e53864313 ] [ topo:orientation "-" ;
                        topo:ref uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5 ] [ topo:orientation "-" ;
                        topo:ref uuid:cd257d47-13ca-40db-b196-d78c51872a3b ] [ topo:orientation "-" ;
                        topo:ref uuid:6b9374b0-671d-4603-9349-748b4c231518 ] [ topo:orientation "-" ;
                        topo:ref uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936 ] ) ] .

uuid:7385f01e-11f8-4811-bab6-3abca0b2c6f7 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:2ff15613-8fa2-4410-af09-0f42e2c83dd1 ] ) ] .

uuid:741587b8-5d4f-4921-979e-92cebc0bc61a a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:6d219ad2-36b7-4f0d-bc02-deba6c975ea2 ] ) ] .

uuid:777a02bc-f2d3-4b31-bc4c-7180bc13a31c a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546 ] [ topo:orientation "-" ;
                        topo:ref uuid:32ccd411-43f6-46f2-9fc8-0ae0a18e650d ] [ topo:orientation "+" ;
                        topo:ref uuid:5ad51e3c-9924-4a4f-83b3-a1b2605b56de ] [ topo:orientation "+" ;
                        topo:ref uuid:3accc489-4f33-4a69-ae3c-ad302bea4102 ] ) ] .

uuid:780d3b13-0263-4449-ad1e-1627fd0042aa a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:97571fb3-9987-49b3-b54c-88b8adcd2655 uuid:4c83a22b-2309-4240-97b1-d130cb1a8d43 ) ] .

uuid:7914b52a-e13d-4d79-9f76-43e040fa939f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:7023d838-169a-4b01-a85f-e2b270751a7c uuid:fbebc23c-cdef-4d02-bced-5b5bb7686b1f ) ] .

uuid:79feb69f-05d4-4ef0-b880-44276e524854 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:e6fb50a4-9678-4e44-b31c-70cd67726e49 ] ) ] .

uuid:7d373590-b767-45a5-8e6a-120d938d3736 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55 ] [ topo:orientation "-" ;
                        topo:ref uuid:73751771-3e38-4526-8d49-9465d947b6dd ] [ topo:orientation "-" ;
                        topo:ref uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1 ] [ topo:orientation "-" ;
                        topo:ref uuid:79014769-c1f8-4ffd-ae8a-2f43b1a5118d ] [ topo:orientation "-" ;
                        topo:ref uuid:d377883b-98a1-43bf-a10f-bffeeb530993 ] [ topo:orientation "-" ;
                        topo:ref uuid:a475a79b-06a2-400c-9460-6de8a6772ac6 ] ) ] .

uuid:89e58766-afab-4d1f-8775-1311275c857a a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546 ] [ topo:orientation "+" ;
                        topo:ref uuid:5ef7922d-72e6-4c88-bb01-b81714eee525 ] [ topo:orientation "-" ;
                        topo:ref uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67 ] [ topo:orientation "-" ;
                        topo:ref uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52 ] [ topo:orientation "-" ;
                        topo:ref uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147 ] [ topo:orientation "-" ;
                        topo:ref uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5 ] ) ] .

uuid:933a6a7d-dfe4-4bae-ae48-3385e9f22916 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:cb6708a2-df56-4993-9699-9542c85c4f86 ] ) ] .

uuid:9ca25210-c370-4b91-b92f-33f5e1921889 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:74d06171-c161-4193-aea9-11cf904dd554 ] [ topo:orientation "-" ;
                        topo:ref uuid:d001066e-9581-4f45-880e-4810c005aeb4 ] [ topo:orientation "+" ;
                        topo:ref uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f ] [ topo:orientation "+" ;
                        topo:ref uuid:a49e4e7d-1f64-4162-9535-ac936901c370 ] [ topo:orientation "-" ;
                        topo:ref uuid:a59870f2-8fa1-4cbf-9822-e1565922e3d1 ] [ topo:orientation "-" ;
                        topo:ref uuid:fe560591-08a1-4c35-998b-bee91f67ca50 ] ) ] .

uuid:9ce5b406-dab7-4afa-8fbd-2d5101aec77d a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:b062d93a-cabd-45e1-845e-ca90e3c39730 ] ) ] .

uuid:a6c01635-707b-4359-8eb5-23d324d7a7a8 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:6b4acb54-1cd3-42d5-9845-7a7f57b26fab ] ) ] .

uuid:aaee3689-d94d-4193-af47-cdf29e45d3e3 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:52d7c66c-e1f2-49c4-a670-8e1a80c816a2 ] [ topo:orientation "+" ;
                        topo:ref uuid:a1660706-a249-4fd6-ab29-809940a8aedf ] [ topo:orientation "-" ;
                        topo:ref uuid:44d3831e-c643-48f4-989b-d7ca9d2598bf ] [ topo:orientation "+" ;
                        topo:ref uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55 ] ) ] .

uuid:abd9ba1e-6d89-417d-a8ee-2e84d2b296dc a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:52d7c66c-e1f2-49c4-a670-8e1a80c816a2 ] [ topo:orientation "-" ;
                        topo:ref uuid:06b36f25-9655-4795-a67e-51f17d95c50a ] [ topo:orientation "+" ;
                        topo:ref uuid:8eefa72f-3f34-4866-a4cf-ebdde5d2483e ] [ topo:orientation "-" ;
                        topo:ref uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561 ] ) ] .

uuid:abe41c77-3601-4c23-bc85-69d574e758f2 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52 ] [ topo:orientation "+" ;
                        topo:ref uuid:26974107-8cc7-472a-98b1-bac952f4c924 ] [ topo:orientation "-" ;
                        topo:ref uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3 ] [ topo:orientation "-" ;
                        topo:ref uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f ] ) ] .

uuid:afa0638d-9d57-4b2a-ad58-af68daa3726a a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:abd9ba1e-6d89-417d-a8ee-2e84d2b296dc ] ) ] .

uuid:b062d93a-cabd-45e1-845e-ca90e3c39730 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:647124d6-678c-45aa-98ce-7e268086f742 ] [ topo:orientation "+" ;
                        topo:ref uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1 ] [ topo:orientation "-" ;
                        topo:ref uuid:d24a9e84-362c-4d6e-84f2-c1a16900185e ] [ topo:orientation "+" ;
                        topo:ref uuid:7b34e432-9892-4867-bebf-485a47054777 ] ) ] .

uuid:b3470cac-a616-4768-a74b-182208496ee1 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:7d373590-b767-45a5-8e6a-120d938d3736 ] ) ] .

uuid:b4b815fe-eb25-401b-b65f-f7a020da8944 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:fbebc23c-cdef-4d02-bced-5b5bb7686b1f uuid:d72f308c-110a-459d-ae5f-9d459d9ae51e ) ] .

uuid:bd5ceea7-ea06-4191-9b3c-2905569f3035 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:c47c2ae9-6ff5-4b26-a293-ca83b7046ac0 ] ) ] .

uuid:bdf1b7f8-6f4e-4652-a24e-2d7328101807 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:105668a3-bd19-4802-a5ce-c200f1b06fad ] [ topo:orientation "+" ;
                        topo:ref uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5 ] [ topo:orientation "-" ;
                        topo:ref uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147 ] [ topo:orientation "+" ;
                        topo:ref uuid:6627f055-85b5-44c1-a7f8-a9c5b9c9fa9f ] [ topo:orientation "-" ;
                        topo:ref uuid:b24b3a09-48c1-4fa3-a21c-71641207feae ] ) ] .

uuid:c47c2ae9-6ff5-4b26-a293-ca83b7046ac0 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:d24a9e84-362c-4d6e-84f2-c1a16900185e ] [ topo:orientation "+" ;
                        topo:ref uuid:73751771-3e38-4526-8d49-9465d947b6dd ] [ topo:orientation "+" ;
                        topo:ref uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8 ] [ topo:orientation "+" ;
                        topo:ref uuid:cc1617ec-c00c-42c4-abaa-9237964d2f9c ] ) ] .

uuid:c4eecceb-c7c0-4b2d-a462-de459de385f7 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:33deda4d-e880-418b-9b90-93bc255670db ] [ topo:orientation "-" ;
                        topo:ref uuid:73751771-3e38-4526-8d49-9465d947b6dd ] [ topo:orientation "-" ;
                        topo:ref uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1 ] [ topo:orientation "-" ;
                        topo:ref uuid:12307863-0535-49c5-9baf-ae6d2dc7241a ] [ topo:orientation "+" ;
                        topo:ref uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52 ] [ topo:orientation "-" ;
                        topo:ref uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6 ] ) ] .

uuid:c6a3d176-abfb-4f53-a6d8-cc594118b214 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:0e17be70-1378-48cc-b88b-f12de3d9e112 ] ) ] .

uuid:cace1bee-957e-4b24-8343-47cd6827a09e a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:71721739-f1d5-4cac-9a53-34c39c7e2ce2 ] ) ] .

uuid:cb61c522-2984-4aea-92b7-68b08b3da84d a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67 ] [ topo:orientation "+" ;
                        topo:ref uuid:380f1122-b209-41f6-8fd0-f013d06de253 ] [ topo:orientation "-" ;
                        topo:ref uuid:cd257d47-13ca-40db-b196-d78c51872a3b ] [ topo:orientation "-" ;
                        topo:ref uuid:26974107-8cc7-472a-98b1-bac952f4c924 ] ) ] .

uuid:cb6708a2-df56-4993-9699-9542c85c4f86 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:a59870f2-8fa1-4cbf-9822-e1565922e3d1 ] [ topo:orientation "+" ;
                        topo:ref uuid:06b36f25-9655-4795-a67e-51f17d95c50a ] [ topo:orientation "+" ;
                        topo:ref uuid:a475a79b-06a2-400c-9460-6de8a6772ac6 ] [ topo:orientation "+" ;
                        topo:ref uuid:7755d20a-6e6d-4356-b9d6-51a65a971dfb ] ) ] .

uuid:ce095212-8b35-48bf-b77d-57ba8bcf9882 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:bdf1b7f8-6f4e-4652-a24e-2d7328101807 ] ) ] .

uuid:cf0f9b8d-c8d2-4691-8c41-086e18375574 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:4261adb8-2fa6-4ce6-94cc-d4906f2a40fc uuid:d9e43ed6-9387-4180-a25a-3b3208422263 ) ] .

uuid:d2ebb167-17a2-4bd0-8411-97f83c92d9e6 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:4a98b01f-7e97-4049-9f39-a0ba56758ce9 uuid:be40befb-8498-4793-9ed6-d0e72c1a1d5b ) ] .

uuid:d5f598a6-8c7b-4254-a710-5a0238368a6b a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:9ca25210-c370-4b91-b92f-33f5e1921889 ] ) ] .

uuid:d627f2d7-d27f-40bf-b30a-2298c50c5b88 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:33deda4d-e880-418b-9b90-93bc255670db ] [ topo:orientation "-" ;
                        topo:ref uuid:0a69a1c6-2a79-4e71-9149-b488b01ac1e0 ] [ topo:orientation "-" ;
                        topo:ref uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936 ] [ topo:orientation "-" ;
                        topo:ref uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8 ] ) ] .

uuid:d75b510f-9b88-4a82-bac4-4de995f4a1b9 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:be40befb-8498-4793-9ed6-d0e72c1a1d5b uuid:7023d838-169a-4b01-a85f-e2b270751a7c ) ] .

uuid:e2dd1def-1a2e-4e60-9db0-5e4c4095e4c7 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:aaee3689-d94d-4193-af47-cdf29e45d3e3 ] ) ] .

uuid:e6fb50a4-9678-4e44-b31c-70cd67726e49 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:94185a2f-45b0-4c79-95c0-44fef184e2c7 ] [ topo:orientation "-" ;
                        topo:ref uuid:b62a056e-a219-4fc5-942e-3fb4c48d708d ] [ topo:orientation "+" ;
                        topo:ref uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147 ] [ topo:orientation "+" ;
                        topo:ref uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f ] ) ] .

uuid:e9b94664-2b7a-4e97-a565-4bcce3896392 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:a221f31d-26c6-46f0-872a-567244fa5447 uuid:3cf6b3c0-3acc-4720-a643-d885d6951b2a ) ] .

uuid:ed1e393e-d7f5-4a85-93b1-f08812b85014 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:d9e43ed6-9387-4180-a25a-3b3208422263 uuid:4a98b01f-7e97-4049-9f39-a0ba56758ce9 ) ] .

uuid:f02f10fc-79f0-4ba7-aa31-e50da369b0e0 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:f9f5fd81-680a-43f5-a04e-adc180a9ecdd ] [ topo:orientation "-" ;
                        topo:ref uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f ] [ topo:orientation "-" ;
                        topo:ref uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561 ] [ topo:orientation "+" ;
                        topo:ref uuid:a1660706-a249-4fd6-ab29-809940a8aedf ] [ topo:orientation "+" ;
                        topo:ref uuid:5ef7922d-72e6-4c88-bb01-b81714eee525 ] ) ] .

uuid:f55c0e40-89fe-4a23-8d11-aff91c754214 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:0934c81e-8a94-41c5-8103-3365b8c33853 ] ) ] .

uuid:f6d80de2-ba10-4748-9c16-f74eafa5e454 a geojson:Feature ;
    geojson:topology [ a topo:Ring ;
            topo:directedReferences ( [ topo:orientation "-" ;
                        topo:ref uuid:5ad51e3c-9924-4a4f-83b3-a1b2605b56de ] [ topo:orientation "-" ;
                        topo:ref uuid:a1386220-8990-43a9-800c-4ed3b3e323f6 ] [ topo:orientation "-" ;
                        topo:ref uuid:94185a2f-45b0-4c79-95c0-44fef184e2c7 ] [ topo:orientation "+" ;
                        topo:ref uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3 ] [ topo:orientation "+" ;
                        topo:ref uuid:cd257d47-13ca-40db-b196-d78c51872a3b ] [ topo:orientation "+" ;
                        topo:ref uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5 ] ) ] .

uuid:f7fb3296-07ab-42f6-937f-0ebbe0ee98ea a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:291b7f49-8f18-498e-bd2f-7bfb6760eaa2 uuid:c4aa05ba-997c-4b7e-b5bd-071f385e17d5 ) ] .

uuid:fa9fc866-8b5d-4056-9afb-a5294b52eea3 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:2eba2a4e-7b02-4921-894b-7882959e13fd ] ) ] .

uuid:fd23e6be-fb9a-44fd-8ad1-55df298d506a a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:4c83a22b-2309-4240-97b1-d130cb1a8d43 uuid:291b7f49-8f18-498e-bd2f-7bfb6760eaa2 ) ] .

uuid:ff22d8d8-5d2e-4fdd-97ce-d80e2b48b5de a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( uuid:489a1c4c-0ac4-470f-9757-e50bc71d3aa8 uuid:e18342eb-1272-4582-b6bf-3c9d7e138667 ) ] .

uuid:09582fa5-0931-481b-9203-0dba27308ddd a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:542934a9-f32d-401e-8e05-05d529492483 ] ) ] .

uuid:0a69a1c6-2a79-4e71-9149-b488b01ac1e0 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:7f9a7128-b01c-4568-8241-29391e9a5d30 uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89 ) ] .

uuid:105668a3-bd19-4802-a5ce-c200f1b06fad a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:6d31e874-6317-43c3-b357-49a699f8a69d uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d ) ] .

uuid:123ff795-71e3-489c-89c8-8a1e53864313 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1 uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b ) ] .

uuid:291b7f49-8f18-498e-bd2f-7bfb6760eaa2 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061678e+05 6.471679e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188683e+01 ) ] .

uuid:2a36d343-55e4-4ddb-8c44-f7612baa99ce a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:d627f2d7-d27f-40bf-b30a-2298c50c5b88 ] ) ] .

uuid:2baad9ae-e5b4-48eb-81c6-736fd1500fb9 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:89e58766-afab-4d1f-8775-1311275c857a ] ) ] .

uuid:2ec797d0-35d9-46fc-a4ab-52794d397416 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:abe41c77-3601-4c23-bc85-69d574e758f2 ] ) ] .

uuid:313731cb-1e0c-469c-b64e-06af1629ba2a a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061316e+05 6.47166e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160075e+02 -3.1887e+01 ) ] .

uuid:32ccd411-43f6-46f2-9fc8-0ae0a18e650d a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78 uuid:3d450239-8099-4649-a355-565e58332111 ) ] .

uuid:335305a1-d6a4-499f-8105-8b5e2f9a7383 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:5943a3e8-75e7-45c0-9b66-3f29e77150cf ] ) ] .

uuid:380f1122-b209-41f6-8fd0-f013d06de253 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4 uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0 ) ] .

uuid:3c6c5996-1c40-4e52-932b-13cc41fcee71 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061889e+05 6.471667e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160081e+02 -3.188694e+01 ) ] .

uuid:3cf6b3c0-3acc-4720-a643-d885d6951b2a a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061925e+05 6.471653e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160081e+02 -3.188707e+01 ) ] .

uuid:4261adb8-2fa6-4ce6-94cc-d4906f2a40fc a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061303e+05 6.471637e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160074e+02 -3.188721e+01 ) ] .

uuid:44d3831e-c643-48f4-989b-d7ca9d2598bf a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1 uuid:359c2049-41e8-4f00-ab35-458acc23f4bd ) ] .

uuid:489a1c4c-0ac4-470f-9757-e50bc71d3aa8 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061509e+05 6.471677e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188685e+01 ) ] .

uuid:4a98b01f-7e97-4049-9f39-a0ba56758ce9 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.06149e+05 6.471622e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188734e+01 ) ] .

uuid:4c83a22b-2309-4240-97b1-d130cb1a8d43 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061764e+05 6.471677e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160079e+02 -3.188685e+01 ) ] .

uuid:52d7c66c-e1f2-49c4-a670-8e1a80c816a2 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce ) ] .

uuid:5635ffda-d1a0-463c-93e4-2c256e049f6e a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:1c3ca0ce-fbaf-4929-bd1d-44ca6c3fd3bc ] ) ] .

uuid:5ad51e3c-9924-4a4f-83b3-a1b2605b56de a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78 uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b ) ] .

uuid:608c4fbe-df28-4c78-bec6-f7560f6a40ca a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:cb61c522-2984-4aea-92b7-68b08b3da84d ] ) ] .

uuid:647124d6-678c-45aa-98ce-7e268086f742 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec uuid:85f5fe02-792e-44e4-908e-10240b79ddb5 ) ] .

uuid:6627f055-85b5-44c1-a7f8-a9c5b9c9fa9f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:29d783d3-10bb-4882-908a-eb8151cc52ec uuid:21a929df-71c5-47e2-a6d5-24f37bae8442 ) ] .

uuid:67c660f1-0e49-4ee4-996d-4d453fe6209b a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061915e+05 6.471662e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160081e+02 -3.188699e+01 ) ] .

uuid:6837ca1f-41c3-4002-9251-7113835def85 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:22851efb-93f5-492d-9a9c-102d1df785c1 ] ) ] .

uuid:689a0716-0880-4a1b-8454-ba189e331ee6 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d uuid:40a76a4c-fff8-4156-8071-61423b0d44e9 ) ] .

uuid:6ae1d5a0-8bf8-4675-a048-f92b7704c482 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:70d6787b-0280-42a1-a46f-4c3ea010cbce ] ) ] .

uuid:7023d838-169a-4b01-a85f-e2b270751a7c a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061739e+05 6.471626e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160079e+02 -3.188731e+01 ) ] .

uuid:74d06171-c161-4193-aea9-11cf904dd554 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d ) ] .

uuid:75c75f5e-3c22-4b05-a4b7-5ce037bbd55b a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:85f5fe02-792e-44e4-908e-10240b79ddb5 uuid:d250661e-6383-4458-9323-bf347210311f ) ] .

uuid:7755d20a-6e6d-4356-b9d6-51a65a971dfb a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba uuid:a9135246-4680-4183-b3a0-ea902313e04b ) ] .

uuid:79014769-c1f8-4ffd-ae8a-2f43b1a5118d a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:40a76a4c-fff8-4156-8071-61423b0d44e9 uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec ) ] .

uuid:7b34e432-9892-4867-bebf-485a47054777 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879 uuid:85f5fe02-792e-44e4-908e-10240b79ddb5 ) ] .

uuid:84b3b6af-d3cb-402a-8ef3-1ed8b8b9c50b a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324 uuid:6d31e874-6317-43c3-b357-49a699f8a69d ) ] .

uuid:887b4e80-25a7-491c-9f99-c567acf7a098 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324 ) ] .

uuid:8eefa72f-3f34-4866-a4cf-ebdde5d2483e a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806 uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70 ) ] .

uuid:94185a2f-45b0-4c79-95c0-44fef184e2c7 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:d250661e-6383-4458-9323-bf347210311f uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e ) ] .

uuid:9557e813-61c9-4ae4-a097-fe3ccf104c34 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac ) ] .

uuid:97571fb3-9987-49b3-b54c-88b8adcd2655 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.06184e+05 6.471673e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.16008e+02 -3.188689e+01 ) ] .

uuid:9d3409e1-67b8-4a8c-9ee6-981eaff19cf5 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:21a929df-71c5-47e2-a6d5-24f37bae8442 uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e ) ] .

uuid:a1386220-8990-43a9-800c-4ed3b3e323f6 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78 ) ] .

uuid:a221f31d-26c6-46f0-872a-567244fa5447 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.06191e+05 6.471645e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160081e+02 -3.188714e+01 ) ] .

uuid:a475a79b-06a2-400c-9460-6de8a6772ac6 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba ) ] .

uuid:a59870f2-8fa1-4cbf-9822-e1565922e3d1 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:a9135246-4680-4183-b3a0-ea902313e04b uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806 ) ] .

uuid:b24b3a09-48c1-4fa3-a21c-71641207feae a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:6d31e874-6317-43c3-b357-49a699f8a69d uuid:21a929df-71c5-47e2-a6d5-24f37bae8442 ) ] .

uuid:b62a056e-a219-4fc5-942e-3fb4c48d708d a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:29d783d3-10bb-4882-908a-eb8151cc52ec uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e ) ] .

uuid:be40befb-8498-4793-9ed6-d0e72c1a1d5b a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061613e+05 6.471622e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188734e+01 ) ] .

uuid:c45f774d-8ba2-41a8-8edd-a08921a630b9 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:f02f10fc-79f0-4ba7-aa31-e50da369b0e0 ] ) ] .

uuid:c4aa05ba-997c-4b7e-b5bd-071f385e17d5 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.06159e+05 6.471679e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188683e+01 ) ] .

uuid:c7c0b650-ed8a-496d-bff5-46d9953137fd a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061287e+05 6.471648e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160074e+02 -3.18871e+01 ) ] .

uuid:cc1617ec-c00c-42c4-abaa-9237964d2f9c a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1 uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879 ) ] .

uuid:d24a9e84-362c-4d6e-84f2-c1a16900185e a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879 uuid:127223b8-ae77-4a0c-abe6-d76332e85af1 ) ] .

uuid:d377883b-98a1-43bf-a10f-bffeeb530993 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba uuid:40a76a4c-fff8-4156-8071-61423b0d44e9 ) ] .

uuid:d72f308c-110a-459d-ae5f-9d459d9ae51e a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061869e+05 6.471637e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.16008e+02 -3.188721e+01 ) ] .

uuid:d78450ce-0f63-4c04-811a-5b87b9591b0f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70 uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324 ) ] .

uuid:d8f2444f-769d-4fe5-bfb7-96c75eb21aa3 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:6379c9a9-86c4-45a0-a508-a62309a4e766 ] ) ] .

uuid:d9e43ed6-9387-4180-a25a-3b3208422263 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061375e+05 6.471628e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160075e+02 -3.188729e+01 ) ] .

uuid:e18342eb-1272-4582-b6bf-3c9d7e138667 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061413e+05 6.471671e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.18869e+01 ) ] .

uuid:f15f5cb8-bee6-4d84-951a-b4821a00cccf a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158 uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89 ) ] .

uuid:f2f50332-6f50-47ab-868f-fdc520e68848 a geojson:Feature ;
    geojson:topology [ a topo:Face ;
            topo:directedReferences ( [ topo:orientation "+" ;
                        topo:ref uuid:c4eecceb-c7c0-4b2d-a462-de459de385f7 ] ) ] .

uuid:f9f5fd81-680a-43f5-a04e-adc180a9ecdd a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4 uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda ) ] .

uuid:fbebc23c-cdef-4d02-bced-5b5bb7686b1f a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061811e+05 6.471631e+06 ) ] ;
    dct:time "2026-05-05T00:14:08.163770+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.16008e+02 -3.188727e+01 ) ] .

uuid:fe560591-08a1-4c35-998b-bee91f67ca50 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d uuid:a9135246-4680-4183-b3a0-ea902313e04b ) ] .

uuid:0175c2aa-87ea-4e50-9b5e-a702710d09a5 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0 uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b ) ] .

uuid:06b36f25-9655-4795-a67e-51f17d95c50a a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806 uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce ) ] .

uuid:12307863-0535-49c5-9baf-ae6d2dc7241a a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:7970f2e9-9893-4e54-b249-187db718bd31 uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec ) ] .

uuid:127223b8-ae77-4a0c-abe6-d76332e85af1 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061484e+05 6.471648e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188711e+01 2.3e+01 ) ] .

uuid:150f57fd-8d57-4533-9922-96732defb792 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76 ) ] .

uuid:1b9a26b1-0913-459b-a0ba-fd3c8d5e0324 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061664e+05 6.471646e+06 2e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188713e+01 2e+01 ) ] .

uuid:21a929df-71c5-47e2-a6d5-24f37bae8442 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061664e+05 6.471656e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188704e+01 2.3e+01 ) ] .

uuid:24d38d5c-3824-4088-8ab6-284a451e4ae5 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d uuid:7970f2e9-9893-4e54-b249-187db718bd31 ) ] .

uuid:26974107-8cc7-472a-98b1-bac952f4c924 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76 uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4 ) ] .

uuid:323ee5a8-7a23-4b0c-a7c0-f8f66ce2caba a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061464e+05 6.471646e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188712e+01 2.3e+01 ) ] .

uuid:33deda4d-e880-418b-9b90-93bc255670db a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89 uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1 ) ] .

uuid:3accc489-4f33-4a69-ae3c-ad302bea4102 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b uuid:359c2049-41e8-4f00-ab35-458acc23f4bd ) ] .

uuid:3d450239-8099-4649-a355-565e58332111 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061644e+05 6.471648e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188711e+01 2.3e+01 ) ] .

uuid:40a76a4c-fff8-4156-8071-61423b0d44e9 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061464e+05 6.471656e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188703e+01 2.3e+01 ) ] .

uuid:55372e38-9d41-4d12-bbac-fdb6c9613fc6 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89 uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76 ) ] .

uuid:5a934736-cab5-4fc7-9e8f-877eb80c5879 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061484e+05 6.471648e+06 2.6e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188711e+01 2.6e+01 ) ] .

uuid:5cb6b170-6c30-4578-9fdf-a06662911c3f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:7970f2e9-9893-4e54-b249-187db718bd31 uuid:d250661e-6383-4458-9323-bf347210311f ) ] .

uuid:5ef7922d-72e6-4c88-bb01-b81714eee525 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:359c2049-41e8-4f00-ab35-458acc23f4bd uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4 ) ] .

uuid:5fe61aa8-ab56-4ce2-a8bb-8f8a27fb5147 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:29d783d3-10bb-4882-908a-eb8151cc52ec uuid:7970f2e9-9893-4e54-b249-187db718bd31 ) ] .

uuid:6378a84c-b6a9-46d8-871b-a28b3598bd67 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76 uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4 ) ] .

uuid:64cb5d00-fba4-44b2-ad2a-1913a94fe5a8 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1 uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1 ) ] .

uuid:6a1a5566-6cbd-42c6-991e-ef4e6ffda546 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:359c2049-41e8-4f00-ab35-458acc23f4bd uuid:3d450239-8099-4649-a355-565e58332111 ) ] .

uuid:6b9374b0-671d-4603-9349-748b4c231518 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:7f9a7128-b01c-4568-8241-29391e9a5d30 uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4 ) ] .

uuid:6d31e874-6317-43c3-b357-49a699f8a69d a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061664e+05 6.471656e+06 2e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188704e+01 2e+01 ) ] .

uuid:73751771-3e38-4526-8d49-9465d947b6dd a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:127223b8-ae77-4a0c-abe6-d76332e85af1 uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1 ) ] .

uuid:7f9a7128-b01c-4568-8241-29391e9a5d30 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471652e+06 2.6e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.6e+01 ) ] .

uuid:85afbe5b-65bf-40a1-b958-43bb89ef4936 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1 uuid:7f9a7128-b01c-4568-8241-29391e9a5d30 ) ] .

uuid:85f5fe02-792e-44e4-908e-10240b79ddb5 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061484e+05 6.471656e+06 2.6e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188703e+01 2.6e+01 ) ] .

uuid:89b34c59-ad3b-4935-91df-da4beef1a2a5 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:3d450239-8099-4649-a355-565e58332111 uuid:29d783d3-10bb-4882-908a-eb8151cc52ec ) ] .

uuid:8c3b760e-6015-461f-b3e4-1f10a8458d78 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061644e+05 6.471648e+06 2.6e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188711e+01 2.6e+01 ) ] .

uuid:a1660706-a249-4fd6-ab29-809940a8aedf a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac uuid:359c2049-41e8-4f00-ab35-458acc23f4bd ) ] .

uuid:a49e4e7d-1f64-4162-9535-ac936901c370 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158 uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806 ) ] .

uuid:a9135246-4680-4183-b3a0-ea902313e04b a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061464e+05 6.471646e+06 2e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188712e+01 2e+01 ) ] .

uuid:b769cbe5-703f-441e-8fc5-1b79d6ff3561 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70 ) ] .

uuid:c7f55cbd-30bc-4bae-95d8-d8a2e11739a3 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:d250661e-6383-4458-9323-bf347210311f uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4 ) ] .

uuid:cbbbff1a-ea9d-43e4-b292-9c26e91dc71d a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061464e+05 6.471656e+06 2e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188703e+01 2e+01 ) ] .

uuid:cd257d47-13ca-40db-b196-d78c51872a3b a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4 uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0 ) ] .

uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471652e+06 2e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2e+01 ) ] .

uuid:cf3c1bfe-c40e-498c-ace8-52777c7aee55 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1 uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce ) ] .

uuid:d001066e-9581-4f45-880e-4810c005aeb4 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d ) ] .

uuid:e6bc54bc-bb9f-4535-860c-b1fbf67465e0 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471652e+06 2.6e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.6e+01 ) ] .

uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471652e+06 2e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2e+01 ) ] .

uuid:e8b7a3f1-807b-47c1-a233-845f7e9492f1 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec uuid:127223b8-ae77-4a0c-abe6-d76332e85af1 ) ] .

uuid:f20cfff2-f3e6-41b2-843b-93e32f3f205a a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb ) ] .

uuid:f52b81d9-6877-4f7f-9210-8002f8ddc85f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb uuid:e802ff21-40ea-4728-a6e7-4d5b79d45158 ) ] .

uuid:f683e96a-1e0d-450c-9df8-54e54aa8109e a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061664e+05 6.471646e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188713e+01 2.3e+01 ) ] .

uuid:fc45a8b6-848f-46b9-b079-a0ebba08f96e a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061644e+05 6.471656e+06 2.6e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188704e+01 2.6e+01 ) ] .

uuid:fd6494bc-b8a0-4a99-a86e-89178fad956f a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70 uuid:cd8c2acd-0d28-41d8-8a2a-966df677cfda ) ] .

uuid:029860ee-5cc9-4a34-a7fc-e9ee6704d0e4 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471652e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.3e+01 ) ] .

uuid:0941cb64-d6e3-4fd4-81da-6586b21f27ac a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471646e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188713e+01 2.3e+01 ) ] .

uuid:29d783d3-10bb-4882-908a-eb8151cc52ec a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061644e+05 6.471656e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160078e+02 -3.188704e+01 2.3e+01 ) ] .

uuid:2e36bfd1-f23a-412b-8715-7e342f6970b1 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471648e+06 2.6e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188711e+01 2.6e+01 ) ] .

uuid:33f0cc1b-317c-4e5a-be73-82210d7a9806 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471646e+06 2e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188712e+01 2e+01 ) ] .

uuid:4a18b6c9-e5f1-41a7-9f33-45be997255ec a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061484e+05 6.471656e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160076e+02 -3.188703e+01 2.3e+01 ) ] .

uuid:5f0ab17c-c5fa-49ef-a027-18876ea9181b a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471648e+06 2.6e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188711e+01 2.6e+01 ) ] .

uuid:65b83fdc-a7ed-4178-9bc1-01da4a52ea0d a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471656e+06 2e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188703e+01 2e+01 ) ] .

uuid:7210455e-1a79-4c3c-9f3a-49565c0b4c89 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471652e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.3e+01 ) ] .

uuid:7985a7eb-88fb-4f9d-8220-5d6804305f52 a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:3D-Construct ;
    geojson:topology [ a topo:Edge ;
            topo:relatedFeatures ( uuid:7970f2e9-9893-4e54-b249-187db718bd31 uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76 ) ] .

uuid:8e0f2f64-c9e9-474d-ac20-07954d8759c4 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471652e+06 2.6e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.6e+01 ) ] .

uuid:9281190b-ec34-4dac-afe3-3a7c064f0b70 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471646e+06 2e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188713e+01 2e+01 ) ] .

uuid:d250661e-6383-4458-9323-bf347210311f a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471656e+06 2.6e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188703e+01 2.6e+01 ) ] .

uuid:f62c9eab-b63d-4cfe-ab76-b4a142b4a8ce a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471646e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188712e+01 2.3e+01 ) ] .

uuid:fa85407d-b02e-4d8b-ba7f-f1643968bdfb a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471652e+06 2e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2e+01 ) ] .

uuid:359c2049-41e8-4f00-ab35-458acc23f4bd a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061584e+05 6.471648e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188711e+01 2.3e+01 ) ] .

uuid:7970f2e9-9893-4e54-b249-187db718bd31 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471656e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188703e+01 2.3e+01 ) ] .

uuid:da0715e3-0429-44a0-896e-9afef8b3c5a1 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061544e+05 6.471648e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188711e+01 2.3e+01 ) ] .

uuid:dd93eb3d-d9e7-4977-b6c5-df894bfcdd76 a surv:BoundaryMark,
        geojson:Feature ;
    dct:spatial [ a geojson:Point ;
            geojson:coordinates ( 4.061564e+05 6.471652e+06 2.3e+01 ) ] ;
    dct:time "2026-05-04T02:39:38.184691+00:00" ;
    ns1:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:cadastral-point-unmarked ;
            surv:state wa-monument-state:unmarked ] ;
    surv:purpose wa-surveypoint-purpose:boundary ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.160077e+02 -3.188707e+01 2.3e+01 ) ] .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: WA profile of Cadastral Survey Data Model
allOf:
- $ref: https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-core/schema.yaml
- required:
  - solids
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

* YAML version: [schema.yaml](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-3d/schema.json)
* JSON version: [schema.json](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-3d/schema.yaml)


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
[context.jsonld](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-3d/context.jsonld)

## Sources

* [3D Cadastre Survey Data Model](https://icsm-au.github.io/3d-csdm-common)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/3d-csdm-profile-wa](https://github.com/surroundaustralia/3d-csdm-profile-wa)
* Path: `_sources/wa-3d`

