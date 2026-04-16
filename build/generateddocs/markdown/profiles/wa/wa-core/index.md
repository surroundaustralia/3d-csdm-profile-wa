
# Western Australia Cadastral Survey Data Exchange Profile (Schema)

`icsm.profiles.wa.wa-core` *v0.1*

Implementation Profile of the ICSM Cadastral Survey Data Exchange Model for use in Western Australia

[*Status*](http://www.opengis.net/def/status): Under development

## Description

## Cadastral Survey Data Model - Western Australia Profile

This profile is the WA (Western Australia) of the Cadastral Survey Data Model (CSDM). This extends the [common ICSM Profile](https://icsm-au.github.io/3d-csdm-profile-icsm/) with Western Australia specific constraints.

It only (currently) defines vocabulary bindings to WA specific vocabularies - but can be extended directly, or via sub-profiles, with further data elements and business rules about content requirements.

[More information about the ways profiles are specified](https://ogcincubator.github.io/bblocks-docs/overview/profiles)



These constraints are defined in a **_machine-readable_** form to support:

- unambiguous interpretation
- conformance validation
- configuration of generic software to meet specific jurisdictional needs. (if implementers choose to use this option)


### extensions

No specific extensions 

## Examples

### WA Observations
Minimal example - with combined elements from each test case
#### json
```json
{
  "id": "Western-Australia-Example-1",
  "name": "TBD",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "wasGeneratedBy": {
    "id": "DP-1-S2",
    "endedAtTime": "2029-01-01T01:02:03Z"
  },
  "purpose": "wa-survey-purpose:subdivision",
  "time": {
    "date": "2022-05-22"
  },
  "horizontalCRS": "epsg:8031",
  "bearingRotation": 0.0,
  "surveyType": "wa-survey-type:deposited-plan",
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
  "features": [],
  "referencedCSDs": [],
  "points": [
    {
      "id": "WAMarks",
      "type": "FeatureCollection",
      "featureType": "SurveyPoint",
      "features": [
        {
          "id": "15432571",
          "type": "Feature",
          "featureType": "CadastralMark",
          "geometry": {
            "type": "Point",
            "coordinates": [
              119.09647713372017,
              -34.70981740542593
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              52701.989,
              350518.914
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:temporary-control-point",
            "monumentedBy": {
              "form": "wa-monument-form:spike",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            },
            "name": {
              "label": "EFB157243/9540",
              "hasPart": [
                {
                  "type": "Source",
                  "label": "EFB157243"
                },
                {
                  "type": "Stamp",
                  "label": "9540"
                }
              ]
            }
          }
        },
        {
          "id": "14005391",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "geometry": {
            "type": "Point",
            "coordinates": [
              119.0934904173545,
              -34.711406228435756
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              52534.56,
              350239.395
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:monument",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            },
            "name": {
              "label": ""
            }
          }
        },
        {
          "id": "14005400",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "geometry": {
            "type": "Point",
            "coordinates": [
              119.09344703860768,
              -34.71151562207706
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              52522.547,
              350235.023
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:monument",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            },
            "name": {
              "label": ""
            }
          }
        },
        {
          "id": "14005401",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "geometry": {
            "type": "Point",
            "coordinates": [
              119.09339442578255,
              -34.71154090351977
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              52519.898,
              350230.109
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:monument",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            },
            "name": {
              "label": ""
            }
          }
        }
      ]
    }
  ],
  "observedVectors": [
    {
      "id": "observedVectors",
      "type": "FeatureCollection",
      "featureType": "ObservedVector",
      "features": [
        {
          "id": "17251502",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "14005391",
              "14005400"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:boundary",
            "comment": null
          }
        },
        {
          "id": "17251503",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "14005400",
              "14005401"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:boundary",
            "comment": null
          }
        }
      ]
    }
  ],
  "vectorObservations": [
    {
      "id": "vectorObservations",
      "type": "FeatureCollection",
      "featureType": "sosa:ObservationCollection",
      "time": null,
      "properties": {
        "resultTime": "2022-05-22T00:00:00Z",
        "observedProperty": "surveyable:VectorDetermination",
        "usedProcedure": "wa-procedure-used:M",
        "angleType": "icsm-angle-type:angle",
        "distanceType": "icsm-distance-type:grid",
        "madeBySensor": {
          "sensorType": "icsm-equipment-type:t-edm",
          "theodoliteSensor": "T+111984765",
          "edmSensor": "edm+89873452",
          "prism": "p+223421"
        }
      },
      "features": [
        {
          "type": "Feature",
          "geometry": null,
          "time": null,
          "place": null,
          "properties": {
            "hasFeatureOfInterest": "17251502",
            "referenceVector": "17251503",
            "hasResult": {
              "angle": 138.033055556,
              "distance": 12.784
            }
          }
        }
      ]
    }
  ]
}
```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-core/context.jsonld",
  "id": "Western-Australia-Example-1",
  "name": "TBD",
  "type": "FeatureCollection",
  "featureType": "CSD",
  "wasGeneratedBy": {
    "id": "DP-1-S2",
    "endedAtTime": "2029-01-01T01:02:03Z"
  },
  "purpose": "wa-survey-purpose:subdivision",
  "time": {
    "date": "2022-05-22"
  },
  "horizontalCRS": "epsg:8031",
  "bearingRotation": 0.0,
  "surveyType": "wa-survey-type:deposited-plan",
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
  "features": [],
  "referencedCSDs": [],
  "points": [
    {
      "id": "WAMarks",
      "type": "FeatureCollection",
      "featureType": "SurveyPoint",
      "features": [
        {
          "id": "15432571",
          "type": "Feature",
          "featureType": "CadastralMark",
          "geometry": {
            "type": "Point",
            "coordinates": [
              119.09647713372017,
              -34.70981740542593
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              52701.989,
              350518.914
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:temporary-control-point",
            "monumentedBy": {
              "form": "wa-monument-form:spike",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            },
            "name": {
              "label": "EFB157243/9540",
              "hasPart": [
                {
                  "type": "Source",
                  "label": "EFB157243"
                },
                {
                  "type": "Stamp",
                  "label": "9540"
                }
              ]
            }
          }
        },
        {
          "id": "14005391",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "geometry": {
            "type": "Point",
            "coordinates": [
              119.0934904173545,
              -34.711406228435756
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              52534.56,
              350239.395
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:monument",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            },
            "name": {
              "label": ""
            }
          }
        },
        {
          "id": "14005400",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "geometry": {
            "type": "Point",
            "coordinates": [
              119.09344703860768,
              -34.71151562207706
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              52522.547,
              350235.023
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:monument",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            },
            "name": {
              "label": ""
            }
          }
        },
        {
          "id": "14005401",
          "type": "Feature",
          "featureType": "BoundaryMark",
          "geometry": {
            "type": "Point",
            "coordinates": [
              119.09339442578255,
              -34.71154090351977
            ]
          },
          "place": {
            "type": "Point",
            "coordinates": [
              52519.898,
              350230.109
            ]
          },
          "properties": {
            "purpose": "wa-surveypoint-purpose:monument",
            "monumentedBy": {
              "form": "wa-monument-form:peg",
              "condition": "wa-monument-condition:ok",
              "state": "wa-monument-state:mark-found"
            },
            "name": {
              "label": ""
            }
          }
        }
      ]
    }
  ],
  "observedVectors": [
    {
      "id": "observedVectors",
      "type": "FeatureCollection",
      "featureType": "ObservedVector",
      "features": [
        {
          "id": "17251502",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "14005391",
              "14005400"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:boundary",
            "comment": null
          }
        },
        {
          "id": "17251503",
          "type": "Feature",
          "geometry": null,
          "topology": {
            "type": "LineString",
            "references": [
              "14005400",
              "14005401"
            ]
          },
          "properties": {
            "vectorPurpose": "wa-vector-purpose:boundary",
            "comment": null
          }
        }
      ]
    }
  ],
  "vectorObservations": [
    {
      "id": "vectorObservations",
      "type": "FeatureCollection",
      "featureType": "sosa:ObservationCollection",
      "time": null,
      "properties": {
        "resultTime": "2022-05-22T00:00:00Z",
        "observedProperty": "surveyable:VectorDetermination",
        "usedProcedure": "wa-procedure-used:M",
        "angleType": "icsm-angle-type:angle",
        "distanceType": "icsm-distance-type:grid",
        "madeBySensor": {
          "sensorType": "icsm-equipment-type:t-edm",
          "theodoliteSensor": "T+111984765",
          "edmSensor": "edm+89873452",
          "prism": "p+223421"
        }
      },
      "features": [
        {
          "type": "Feature",
          "geometry": null,
          "time": null,
          "place": null,
          "properties": {
            "hasFeatureOfInterest": "17251502",
            "referenceVector": "17251503",
            "hasResult": {
              "angle": 138.033055556,
              "distance": 12.784
            }
          }
        }
      ]
    }
  ]
}
```

#### ttl
```ttl
@prefix commonpatterns: <https://linked.data.gov.au/def/csdm/commonpatterns/> .
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
@prefix oa: <http://www.w3.org/ns/oa#> .
@prefix prof: <http://www.w3.org/ns/dx/prof/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix surv: <https://linked.data.gov.au/def/csdm/surveyfeatures/> .
@prefix surveyable: <https://linked.data.gov.au/def/csdm/defs/surveyableproperties/> .
@prefix time: <http://www.w3.org/2006/time#> .
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

<https://www.wa-example.com/features/Western-Australia-Example-1> a geojson:FeatureCollection ;
    rdfs:label "TBD" ;
    dcterms:time [ time:hasTime "2022-05-22"^^xsd:date ] ;
    container:adminUnit [ ns2:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:locality ;
            oa:hasTarget wa-locality:karlkurla ],
        [ ns2:relation <http://www.iana.org/assignments/relation/related> ;
            prof:hasRole icsm-admin-unit-type:localGovernmentArea ;
            oa:hasTarget wa-local-government:city-of-kalgoorlie-boulder ] ;
    container:bearingRotation 0e+00 ;
    container:horizontalCRS epsg:8031 ;
    container:observedVectors <https://www.wa-example.com/features/observedVectors> ;
    container:points <https://www.wa-example.com/features/WAMarks> ;
    container:purpose wa-survey-purpose:subdivision ;
    container:surveyType wa-survey-type:deposited-plan ;
    container:vectorObservations <https://www.wa-example.com/features/vectorObservations> ;
    geojson:collectionFeatureType "CSD" .

<https://www.wa-example.com/features/15432571> a surv:CadastralMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.270199e+04 3.505189e+05 ) ] ;
    commonpatterns:name [ rdfs:label "EFB157243/9540" ;
            dcterms:hasPart [ rdfs:label "EFB157243" ;
                    commonpatterns:namePartType "Source" ],
                [ rdfs:label "9540" ;
                    commonpatterns:namePartType "Stamp" ] ] ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:spike ;
            surv:state wa-monument-state:mark-found ] ;
    surv:purpose wa-surveypoint-purpose:temporary-control-point ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.190965e+02 -3.470982e+01 ) ] .

<https://www.wa-example.com/features/17251503> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:boundary ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/14005400> <https://www.wa-example.com/features/14005401> ) ] .

<https://www.wa-example.com/features/WAMarks> a geojson:FeatureCollection ;
    geojson:collectionFeatureType "SurveyPoint" ;
    geojson:features <https://www.wa-example.com/features/14005391>,
        <https://www.wa-example.com/features/14005400>,
        <https://www.wa-example.com/features/14005401>,
        <https://www.wa-example.com/features/15432571> .

<https://www.wa-example.com/features/observedVectors> a surv:ObservedVector,
        geojson:FeatureCollection ;
    geojson:features <https://www.wa-example.com/features/17251502>,
        <https://www.wa-example.com/features/17251503> .

<https://www.wa-example.com/features/vectorObservations> a sosa:ObservationCollection,
        geojson:FeatureCollection ;
    sosa:hasMember [ a geojson:Feature ;
            sosa:hasFeatureOfInterest <https://www.wa-example.com/features/17251502> ;
            sosa:hasResult [ surv:distance 1.2784e+01 ] ] ;
    sosa:madeBySensor [ a icsm-equipment-type:t-edm ] ;
    sosa:observedProperty surveyable:VectorDetermination ;
    sosa:resultTime "2022-05-22T00:00:00Z" ;
    sosa:usedProcedure wa-procedure-used:M ;
    ns1:angleType icsm-angle-type:angle ;
    ns1:distanceType icsm-distance-type:grid .

<https://www.wa-example.com/features/14005391> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.253456e+04 3.502394e+05 ) ] ;
    commonpatterns:name [ rdfs:label "" ] ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:mark-found ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.190935e+02 -3.471141e+01 ) ] .

<https://www.wa-example.com/features/14005401> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.25199e+04 3.502301e+05 ) ] ;
    commonpatterns:name [ rdfs:label "" ] ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:mark-found ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.190934e+02 -3.471154e+01 ) ] .

<https://www.wa-example.com/features/17251502> a geojson:Feature ;
    surv:vectorPurpose wa-vector-purpose:boundary ;
    geojson:topology [ a geojson:LineString ;
            geojson:relatedFeatures ( <https://www.wa-example.com/features/14005391> <https://www.wa-example.com/features/14005400> ) ] .

<https://www.wa-example.com/features/14005400> a surv:BoundaryMark,
        geojson:Feature ;
    dcterms:spatial [ a geojson:Point ;
            geojson:coordinates ( 5.252255e+04 3.50235e+05 ) ] ;
    commonpatterns:name [ rdfs:label "" ] ;
    surv:monumentedBy [ surv:condition wa-monument-condition:ok ;
            surv:form wa-monument-form:peg ;
            surv:state wa-monument-state:mark-found ] ;
    surv:purpose wa-surveypoint-purpose:monument ;
    geojson:geometry [ a geojson:Point ;
            geojson:coordinates ( 1.190934e+02 -3.471152e+01 ) ] .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: WA profile of Cadastral Survey Data Model
allOf:
- $ref: https://surroundaustralia.github.io/3d-csdm-profile-icsm/build/annotated/profiles/common/schema.yaml
- properties:
    parcel:
      type: array
      items:
        properties:
          features:
            type: array
            items:
              properties:
                properties:
                  properties:
                    appellation:
                      $ref: https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/parcelAppellation/schema.yaml
x-jsonld-extra-terms:
  activityType: '@type'
x-jsonld-prefixes:
  vocabs: https://linked.data.gov.au/def/csdm/
  wa-surveypoint-purpose: https://linked.data.gov.au/def/csdm/wa-surveypoint-purpose/
  wa-survey-purpose: https://linked.data.gov.au/def/csdm/wa-survey-purpose/
  wa-survey-type: https://linked.data.gov.au/def/csdm/wa-survey-type/
  wa-procedure-used: https://linked.data.gov.au/def/csdm/wa-procedure-used/
  wa-survey-documentation-type: https://linked.data.gov.au/def/csdm/wa-survey-documentation-type/
  wa-annotation-role: https://linked.data.gov.au/def/csdm/wa-annotation/
  wa-parcel-purpose: https://linked.data.gov.au/def/csdm/wa-parcel-purpose/
  wa-parcel-type: https://linked.data.gov.au/def/csdm/wa-parcel-type/
  wa-parcel-state: https://linked.data.gov.au/def/csdm/wa-parcel-state/
  wa-nonprimary-parcel-type: https://linked.data.gov.au/def/csdm/wa-secondary-parcel-type/
  wa-monument-form: https://linked.data.gov.au/def/csdm/wa-monument-form/
  wa-monument-condition: https://linked.data.gov.au/def/csdm/wa-monument-condition/
  wa-monument-state: https://linked.data.gov.au/def/csdm/wa-monument-state/
  wa-vector-purpose: https://linked.data.gov.au/def/csdm/wa-vector-purpose/
  wa-vector-type: https://linked.data.gov.au/def/csdm/wa-vector-type/
  wa-secondary-parcel-purpose: https://linked.data.gov.au/def/csdm/wa-secondary-parcel-purpose/
  wa-secondary-parcel-type: https://linked.data.gov.au/def/csdm/wa-secondary-parcel-type/
  wa-secondary-purpose: https://linked.data.gov.au/def/csdm/wa-secondary-purpose/
  wa-interest-type: https://linked.data.gov.au/def/csdm/wa-interest-type/
  wa-interest: https://linked.data.gov.au/def/csdm/wa-interest/
  wa-locality: https://linked.data.gov.au/def/csdm/wa-locality/
  wa-local-government: https://linked.data.gov.au/def/csdm/wa-local-government/
  registered-surveyors: https://wa.gov.au/surveyors/
  foaf: http://xmlns.com/foaf/0.1/

```

Links to the schema:

* YAML version: [schema.yaml](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-core/schema.json)
* JSON version: [schema.json](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-core/schema.yaml)


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
              "@id": "geojson:relatedFeatures",
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
    "locality": "csd:locality",
    "PrimaryParcel": {
      "@id": "parcel:PrimaryParcel",
      "@type": "@id"
    },
    "SecondaryParcel": {
      "@id": "parcel:SecondaryParcel",
      "@type": "@id"
    },
    "parcelQualityClass": {
      "@id": "parcel:qualityClass",
      "@type": "@id"
    },
    "terrainIntersectionCurve": "parcel:terrainIntersectionCurve",
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
        "name": "csdm:commonpatterns/name",
        "hasPart": {
          "@context": {
            "ref": {
              "@type": "@id",
              "@id": "csdm:commonpatterns/namePartRef"
            },
            "type": "csdm:commonpatterns/namePartType"
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
                  "@id": "geojson:relatedFeatures",
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
                "hasPart": {
                  "@context": {
                    "ref": {
                      "@type": "@id",
                      "@id": "csdm:commonpatterns/namePartRef"
                    },
                    "type": "csdm:commonpatterns/namePartType"
                  },
                  "@id": "dct:hasPart"
                }
              }
            },
            "name": {
              "@id": "csdm:commonpatterns/name",
              "@type": "@id",
              "@context": {
                "hasPart": {
                  "@context": {
                    "ref": {
                      "@type": "@id",
                      "@id": "csdm:commonpatterns/namePartRef"
                    },
                    "type": "csdm:commonpatterns/namePartType"
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
        "featureType": "@type",
        "features": {
          "@context": {
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
                  "@id": "geojson:relatedFeatures",
                  "@type": "@id",
                  "@container": "@list"
                }
              },
              "@type": "@id",
              "@id": "geojson:topology"
            },
            "appellation": {
              "@context": {
                "name": "csdm:commonpatterns/name",
                "hasPart": {
                  "@context": {
                    "ref": {
                      "@type": "@id",
                      "@id": "csdm:commonpatterns/namePartRef"
                    },
                    "type": "csdm:commonpatterns/namePartType"
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
            "address": "sdo:address",
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
        }
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
    "CompoundName": "csdm:commonpatterns/CompoundName",
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
    "parcel": "csdm:parcels/",
    "surv": "csdm:surveyfeatures/",
    "geojson": "https://purl.org/geojson/vocab#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "oa": "http://www.w3.org/ns/oa#",
    "dct": "http://purl.org/dc/terms/",
    "owlTime": "http://www.w3.org/2006/time#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "csdm": "https://linked.data.gov.au/def/csdm/",
    "prof": "http://www.w3.org/ns/dx/prof/",
    "prov": "http://www.w3.org/ns/prov#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "commonpatterns": "csdm:commonpatterns/",
    "geosparql": "http://www.opengis.net/ont/geosparql#",
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
[context.jsonld](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/wa-core/context.jsonld)

## Sources

* [3D Cadastre Survey Data Model](https://icsm-au.github.io/3d-csdm-common)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/3d-csdm-profile-wa](https://github.com/surroundaustralia/3d-csdm-profile-wa)
* Path: `_sources/wa-core`

