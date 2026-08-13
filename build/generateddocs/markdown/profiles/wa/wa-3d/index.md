
# WA- 3D profile (Schema)

`icsm.profiles.wa.wa-3d` *v0.1*

3D test cases for WA - may constrain to force 3D

[*Status*](http://www.opengis.net/def/status): Under development

## Description

## 3D test cases

This building block captures test cases for 3D topology for WA.

It allows isolation of these from the more general 2D bash view.sh
## Examples

### WA Subtended Angle Observation Example
Contains three survey marks defining two vectors that form an included angle observation. The included angle 
references the survey mark where the angle has been observed, the Reference Object (RO) vector that the angle was 
measured from, and the forward vector that defines the angle. The example also includes three vector observations, 
being two distances and an angle. Note that the same vector observation pattern is maintained for the two types of 
observations. For ***distance*** only observations, ***angle*** is **Null**. For the ***angle*** observation, 
***distance*** is **Null**. Angles are measured clockwise from the RO to the forward vector.

![WA Subtended Angle Observation Example](https://icsm-au.github.io/3d-csdm-profiles/assets/wa-obs-angle.png)
#### json
```json
{
  "id": "DP_422532",
  "name": "DP 422532",
  "description": "Western Australia Subtended Angle Observation Example",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "tenureType": "wa-parcel-type:freehold",
  "planType": "wa-survey-type:deposited-plan",
  "purpose": "wa-survey-purpose:subdivision",
  "surveyType": "wa-survey-type:SSA",
  "time": { "date": "2022-05-22" },
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
      "time": { "date": "2013-03-10" }
    }
  ],
  "points": [
    {
      "id": "BoundaryMark",
      "type": "FeatureCollection",
      "featureType": "BoundaryMark",
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
        "resultTime": "2022-05-22T00:00:00Z",
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
            "resultTime": "2022-05-22T00:00:00Z",
            "hasResult": {
              "distance": 16.526
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "313",
            "resultTime": "2022-05-22T00:00:00Z",
            "hasResult": {
              "distance": 26.401
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "843",
            "resultTime": "2022-05-22T00:00:00Z",
            "hasResult": {
              "angle": 99.4475
            },
            "distanceAccuracy": null,
            "angleType": "icsm-angle-type:angle",
            "angleAccuracy": 0.0083
          }
        }
      ]
    }
  ],
  "edges": [
    {
      "id": "observedVectors",
      "type": "FeatureCollection",
      "featureType": "ObservedVector",
      "features": [
        {
          "id": "312",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
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
            "type": "LineString",
            "references": [
              "184",
              "198"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        }
      ]
    },
    {
      "id": "SubtendedAngle",
      "type": "FeatureCollection",
      "featureType": "SubtendedAngle",
      "features": [
        {
          "id": "843",
          "type": "Feature",
          "featureType": "SubtendedAngle",
          "x-comment": "A subtended angle defined vector is an angle formed by two lines, or line segments that originate from the same point and extend to two different points on a circle's circumference.",
          "geometry": null,
          "topology": {
            "type": "SubtendedAngle",
            "x-description": "References is an ordered list of features being a point geometries representing the location of the subtended angle (the Setup Station), and two LineString geometries commonly referred to as Backsight or Reference Object (RO) and Foresight or Target. The angle is the clockwise angle from the RO to the Target.",
            "references": [
              "184",
              "313",
              "312"
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
  "description": "Western Australia Subtended Angle Observation Example",
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
      "featureType": "BoundaryMark",
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
        "resultTime": "2022-05-22T00:00:00Z",
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
            "resultTime": "2022-05-22T00:00:00Z",
            "hasResult": {
              "distance": 16.526
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "313",
            "resultTime": "2022-05-22T00:00:00Z",
            "hasResult": {
              "distance": 26.401
            },
            "distanceType": "icsm-distance-type:ground",
            "distanceAccuracy": 4000
          }
        },
        {
          "type": "Feature",
          "geometry": null,
          "properties": {
            "hasFeatureOfInterest": "843",
            "resultTime": "2022-05-22T00:00:00Z",
            "hasResult": {
              "angle": 99.4475
            },
            "distanceAccuracy": null,
            "angleType": "icsm-angle-type:angle",
            "angleAccuracy": 0.0083
          }
        }
      ]
    }
  ],
  "edges": [
    {
      "id": "observedVectors",
      "type": "FeatureCollection",
      "featureType": "ObservedVector",
      "features": [
        {
          "id": "312",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
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
            "type": "LineString",
            "references": [
              "184",
              "198"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:I",
            "comment": null
          }
        }
      ]
    },
    {
      "id": "SubtendedAngle",
      "type": "FeatureCollection",
      "featureType": "SubtendedAngle",
      "features": [
        {
          "id": "843",
          "type": "Feature",
          "featureType": "SubtendedAngle",
          "x-comment": "A subtended angle defined vector is an angle formed by two lines, or line segments that originate from the same point and extend to two different points on a circle's circumference.",
          "geometry": null,
          "topology": {
            "type": "SubtendedAngle",
            "x-description": "References is an ordered list of features being a point geometries representing the location of the subtended angle (the Setup Station), and two LineString geometries commonly referred to as Backsight or Reference Object (RO) and Foresight or Target. The angle is the clockwise angle from the RO to the Target.",
            "references": [
              "184",
              "313",
              "312"
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
  "parcels": [],
  "supportingDocuments": [],
  "annotations": []
}
```

#### ttl
```ttl
@prefix container: <https://linked.data.gov.au/def/csdm/container/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix epsg: <http://www.opengis.net/def/crs/EPSG/0/> .
@prefix geojson: <https://purl.org/geojson/vocab#> .
@prefix icsm-admin-unit-type: <https://linked.data.gov.au/def/csdm/icsm-admin-unit-type/> .
@prefix icsm-angle-type: <https://linked.data.gov.au/def/csdm/icsm-angle-type/> .
@prefix icsm-distance-type: <https://linked.data.gov.au/def/csdm/icsm-distance-type/> .
@prefix icsm-equipment-type: <https://linked.data.gov.au/def/csdm/icsm-equipment-type/> .
@prefix ns1: <http://www.iana.org/assignments/> .
@prefix ns2: <https://linked.data.gov.au/def/csdm/commonpatterns/> .
@prefix ns3: <https://linked.data.gov.au/def/csdm/surveyobs/> .
@prefix oa: <http://www.w3.org/ns/oa#> .
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
@prefix wa-procedure-used: <https://linked.data.gov.au/def/csdm/wa-procedure-used/> .
@prefix wa-survey-purpose: <https://linked.data.gov.au/def/csdm/wa-survey-purpose/> .
@prefix wa-survey-type: <https://linked.data.gov.au/def/csdm/wa-survey-type/> .
@prefix wa-surveypoint-purpose: <https://linked.data.gov.au/def/csdm/wa-surveypoint-purpose/> .
@prefix wa-vector-purpose: <https://linked.data.gov.au/def/csdm/wa-vector-purpose/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://www.wa-example.com/features/DP_422532> a geojson:FeatureCollection ;
    rdfs:label "DP 422532" ;
    dcterms:time [ time:hasTime "2022-05-22"^^xsd:date ] ;
    container:adminUnit [ ns1:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:localGovernmentArea ;
            oa:hasTarget wa-local-government:city-of-kalgoorlie-boulder ],
        [ ns1:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:karlkurla ] ;
    container:bearingRotation 0e+00 ;
    container:horizontalCRS epsg:8024 ;
    container:points <https://www.wa-example.com/features/BoundaryMark> ;
    container:purpose wa-survey-purpose:subdivision ;
    container:referencedCSD <https://www.wa-example.com/features/DP_422526> ;
    container:surveyType wa-survey-type:SSA ;
    container:vectorObservations <vectorobservation:computed> ;
    topo:edges <https://www.wa-example.com/features/SubtendedAngle>,
        <https://www.wa-example.com/features/observedVectors> ;
    geojson:collectionFeatureType "CSD" .

<https://www.wa-example.com/features/BoundaryMark> a geojson:FeatureCollection ;
    geojson:collectionFeatureType "BoundaryMark" ;
    geojson:features <https://www.wa-example.com/features/184>,
        <https://www.wa-example.com/features/189>,
        <https://www.wa-example.com/features/198> .

<https://www.wa-example.com/features/DP_422526> rdfs:label "DP 422526" ;
    dcterms:time [ time:hasTime "2013-03-10"^^xsd:date ] ;
    container:adminUnit [ ns1:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:hyden ] ;
    container:bearingRotation 0e+00 .

<https://www.wa-example.com/features/observedVectors> a geojson:FeatureCollection ;
    geojson:collectionFeatureType "ObservedVector" ;
    geojson:features <https://www.wa-example.com/features/312>,
        <https://www.wa-example.com/features/313> .

<vectorobservation:computed> a sosa:ObservationCollection,
        geojson:FeatureCollection ;
    sosa:hasMember [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/312> ;
            sosa:hasResult [ surv:distance 1.6526e+01 ] ;
            sosa:resultTime "2022-05-22T00:00:00Z" ;
            ns3:distanceType icsm-distance-type:ground ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/843> ;
            sosa:hasResult [ ] ;
            sosa:resultTime "2022-05-22T00:00:00Z" ;
            ns3:angleType icsm-angle-type:angle ],
        [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/313> ;
            sosa:hasResult [ surv:distance 2.6401e+01 ] ;
            sosa:resultTime "2022-05-22T00:00:00Z" ;
            ns3:distanceType icsm-distance-type:ground ] ;
    sosa:madeBySensor [ a icsm-equipment-type:software ] ;
    sosa:observedProperty surveyable:VectorDetermination ;
    sosa:resultTime "2022-05-22T00:00:00Z" ;
    sosa:usedProcedure wa-procedure-used:d .

<https://www.wa-example.com/features/189> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.470981e+04 3.987072e+05 ) ] ;
    ns2:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:did-not-search ] ;
    surv:purpose wa-surveypoint-purpose:road-boundary .

<https://www.wa-example.com/features/198> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.468864e+04 3.987329e+05 ) ] ;
    ns2:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:did-not-search ] ;
    surv:purpose wa-surveypoint-purpose:internal-boundary .

<https://www.wa-example.com/features/843> a geojson:Feature,
        <https://www.wa-example.com/features/SubtendedAngle> ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a <https://www.wa-example.com/features/SubtendedAngle> ;
            topo:relatedFeatures ( <https://www.wa-example.com/features/184> <https://www.wa-example.com/features/313> <https://www.wa-example.com/features/312> ) ] .

<https://www.wa-example.com/features/312> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:R ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( <https://www.wa-example.com/features/189> <https://www.wa-example.com/features/184> ) ] .

<https://www.wa-example.com/features/313> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:I ;
    geojson:topology [ a geojson:LineString ;
            topo:relatedFeatures ( <https://www.wa-example.com/features/184> <https://www.wa-example.com/features/198> ) ] .

<https://www.wa-example.com/features/SubtendedAngle> a geojson:FeatureCollection ;
    geojson:collectionFeatureType "SubtendedAngle" ;
    geojson:features <https://www.wa-example.com/features/843> .

<https://www.wa-example.com/features/184> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.469328e+04 3.98707e+05 ) ] ;
    ns2:qualityMeasure 1e-01 ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:did-not-search ] ;
    surv:purpose wa-surveypoint-purpose:road-boundary .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: WA profile of Cadastral Survey Data Model
$ref: https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-core/schema.yaml

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

