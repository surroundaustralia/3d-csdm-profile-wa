
# Parcel Spatial Representation Definition (Schema)

`icsm.profiles.wa.datatypes.parcelSpatialRepresentationDefinition` *v0.1*

The WA cadastral parcel-specific extension of the generic spatial representation definition pattern. Adds the jurisdictional source basis (rule type, source authority type, and verbatim source statement) needed to trace a parcel's vertical boundary back to a title, plan, statute, Crown Grant, strata statement, or other approved jurisdictional rule.

[*Status*](http://www.opengis.net/def/status): Under development

## Description

## Purpose

This block extends
[`icsm.profiles.wa.datatypes.spatialRepresentationDefinition`](../spatialRepresentationDefinition)
(the generic 2D-to-3D interpretation pattern) with the one thing that is specific to a WA cadastral
parcel rather than to 2D features in general: preserving the jurisdictional basis of a vertical
boundary.

A jurisdictional boundary rule (`definitionType` = `vertical-definition-type:jur`) is only trustworthy
if its **rule type**, its **source authority**, its **original source statement**, and the **parcel it
applies to** all remain explicit and traceable. This block adds `sourceBasis` to each entry of
`verticalBoundaryDefinitions` to carry the first three; the parcel the rule applies to is already
identified by the parcel feature the `spatialRepresentationDefinitions` property is attached to (and,
where the rule was inherited from a related parcel, by the WA profile's `supportingDocuments`
provenance).

Jurisdictional limits must never be assumed or applied silently — see the [source proposal's
discussion of important distinctions](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/development/2-5d-liminal/2-5d-liminal-overview.md#important-distinctions).

## Usage

Populate `sourceBasis` on a `verticalBoundaryDefinitions` entry whenever that entry's `definitionType`
is a jurisdictional boundary rule. It is not applicable to relative or absolute height descriptions.

## Vocabularies

As with the generic block this extends, vocabulary value definitions are managed as a separate
artefact and are not defined here. `ruleType` and `sourceAuthorityType` are recorded as free text in
this version of the pattern — they are not yet backed by one of the WA CSDM managed vocabularies.

## Examples

### Jurisdictionally bounded parcel
A parcel whose lower vertical boundary is defined by a Crown Grant depth condition. The
jurisdictional rule type, source authority, and verbatim source statement are preserved in
`sourceBasis` on the `jurisdictional-limit-lower-1` boundary definition, alongside the
`sourceReference` and `provenanceRef` that trace it back to its Certificate of Title extraction.

#### json
```json
{
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

```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/parcelSpatialRepresentationDefinition/context.jsonld",
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
```

#### ttl
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix pvb: <https://linked.data.gov.au/def/csdm/parcel-vertical-boundary/> .
@prefix sr: <https://linked.data.gov.au/def/csdm/spatial-representation/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

[] sr:computabilityStatus <computability-status:rrs> ;
    sr:coordinateRepresentation [ sr:coordinateDimension 2 ;
            sr:zValueRole <coordinate-z-role:absent> ] ;
    sr:derivedGeometry [ sr:derivedGeometryStatus "notGenerated" ] ;
    sr:geometryLegalStatus <geometry-legal-status:a2d> ;
    sr:representationStatus <representation-status:jb> ;
    sr:verticalBoundaryDefinitions [ dct:description "LIMITED IN DEPTH TO 12.19 METRES BELOW GROUND" ;
            pvb:sourceBasis [ pvb:ruleType "crownGrantDepthLimit"^^xsd:string ;
                    pvb:sourceAuthorityType "CrownGrant"^^xsd:string ;
                    pvb:sourceStatement "LIMITED IN DEPTH TO 12.19 METRES BELOW GROUND"^^xsd:string ] ;
            sr:definitionType <vertical-definition-type:jur> ;
            sr:direction <vertical-direction:blw> ;
            sr:heightReference <height-reference:gl> ;
            sr:limitRole <vertical-limit-role:ll> ;
            sr:provenanceRef <file:///github/workspace/crown-grant-depth-limit-extraction-1> ;
            sr:resolutionStatus "requiresReferenceSurface" ;
            sr:sourceReference <file:///github/workspace/source-crown-grant-depth-limit-1> ;
            sr:value 12.19 ;
            sr:valueType <vertical-value-type:off> ] ;
    sr:verticalExtent [ sr:lowerBoundary [ sr:boundaryState <vertical-boundary-state:dur> ;
                    sr:definitionRef <file:///github/workspace/jurisdictional-limit-lower-1> ] ;
            sr:upperBoundary [ sr:boundaryState <vertical-boundary-state:und> ] ;
            sr:verticalExtentStatus <vertical-extent-status:ld> ] .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: 'Parcel-specific extension of the generic spatial representation definition
  pattern (icsm.profiles.wa.datatypes.spatialRepresentationDefinition). Adds `sourceBasis`
  to each vertical boundary definition so that a jurisdictional boundary rule preserves
  the rule type, the source authority, and the original source statement it was extracted
  from. Jurisdictional limits must not be assumed or applied silently: `sourceBasis`
  should be populated whenever `definitionType` is a jurisdictional boundary rule.
  Vocabulary value definitions are managed as a separate artefact and are not defined
  here.'
allOf:
- $ref: https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/spatialRepresentationDefinition/schema.yaml
- properties:
    verticalBoundaryDefinitions:
      type: array
      items:
        properties:
          sourceBasis:
            $ref: '#/$defs/jurisdictionalSourceBasis'
            x-jsonld-id: https://linked.data.gov.au/def/csdm/parcel-vertical-boundary/sourceBasis
            x-jsonld-type: '@id'
$defs:
  jurisdictionalSourceBasis:
    type: object
    description: Preserves the legal or jurisdictional basis of a vertical boundary
      definition established by a title, plan, statute, Crown Grant, strata statement,
      or approved jurisdictional rule.
    properties:
      ruleType:
        type: string
        description: The specific kind of jurisdictional rule applied, e.g. `crownGrantDepthLimit`.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/parcel-vertical-boundary/ruleType
        x-jsonld-type: http://www.w3.org/2001/XMLSchema#string
      sourceAuthorityType:
        type: string
        description: The type of authority or instrument the rule derives from, e.g.
          `CrownGrant` or `CrownGrantCondition`.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/parcel-vertical-boundary/sourceAuthorityType
        x-jsonld-type: http://www.w3.org/2001/XMLSchema#string
      sourceStatement:
        type: string
        description: The verbatim source wording the boundary rule was extracted from,
          e.g. "LIMITED IN DEPTH TO 12.19 METRES BELOW GROUND".
        x-jsonld-id: https://linked.data.gov.au/def/csdm/parcel-vertical-boundary/sourceStatement
        x-jsonld-type: http://www.w3.org/2001/XMLSchema#string
    required:
    - ruleType
    - sourceAuthorityType
    - sourceStatement
x-jsonld-prefixes:
  pvb: https://linked.data.gov.au/def/csdm/parcel-vertical-boundary/
  xsd: http://www.w3.org/2001/XMLSchema#

```

Links to the schema:

* YAML version: [schema.yaml](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/parcelSpatialRepresentationDefinition/schema.json)
* JSON version: [schema.json](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/parcelSpatialRepresentationDefinition/schema.yaml)


# JSON-LD Context

```jsonld
{
  "@context": {
    "state": {
      "@id": "sr:boundaryState",
      "@type": "@vocab"
    },
    "definitionRef": {
      "@id": "sr:definitionRef",
      "@type": "@id"
    },
    "geometryRef": {
      "@id": "sr:geometryRef",
      "@type": "@id"
    },
    "representationStatus": {
      "@id": "sr:representationStatus",
      "@type": "@vocab"
    },
    "geometryLegalStatus": {
      "@id": "sr:geometryLegalStatus",
      "@type": "@vocab"
    },
    "coordinateRepresentation": {
      "@context": {
        "coordinateDimension": {
          "@id": "sr:coordinateDimension",
          "@type": "xsd:integer"
        },
        "zValueRole": {
          "@id": "sr:zValueRole",
          "@type": "@vocab"
        }
      },
      "@id": "sr:coordinateRepresentation",
      "@type": "@id"
    },
    "verticalExtent": {
      "@context": {
        "status": {
          "@id": "sr:verticalExtentStatus",
          "@type": "@vocab"
        },
        "lowerBoundary": {
          "@id": "sr:lowerBoundary",
          "@type": "@id"
        },
        "upperBoundary": {
          "@id": "sr:upperBoundary",
          "@type": "@id"
        },
        "sourceReference": {
          "@id": "sr:sourceReference",
          "@type": "@id"
        }
      },
      "@id": "sr:verticalExtent",
      "@type": "@id"
    },
    "computabilityStatus": {
      "@id": "sr:computabilityStatus",
      "@type": "@vocab"
    },
    "verticalBoundaryDefinitions": {
      "@context": {
        "definitionType": {
          "@id": "sr:definitionType",
          "@type": "@vocab"
        },
        "limitRole": {
          "@id": "sr:limitRole",
          "@type": "@vocab"
        },
        "valueType": {
          "@id": "sr:valueType",
          "@type": "@vocab"
        },
        "value": {
          "@id": "sr:value",
          "@type": "xsd:decimal"
        },
        "direction": {
          "@id": "sr:direction",
          "@type": "@vocab"
        },
        "heightReference": {
          "@id": "sr:heightReference",
          "@type": "@vocab"
        },
        "description": "dct:description",
        "comparisonOperator": "sr:comparisonOperator",
        "resolutionStatus": "sr:resolutionStatus",
        "sourceReference": {
          "@id": "sr:sourceReference",
          "@type": "@id"
        },
        "provenanceRef": {
          "@id": "sr:provenanceRef",
          "@type": "@id"
        }
      },
      "@id": "sr:verticalBoundaryDefinitions",
      "@type": "@id",
      "@container": "@set"
    },
    "referenceSurfaces": {
      "@context": {
        "surfaceType": {
          "@id": "sr:surfaceType",
          "@type": "@vocab"
        },
        "ref": {
          "@id": "sr:surfaceGeometryRef",
          "@type": "@id"
        },
        "boundedByFootprint": {
          "@id": "sr:boundedByFootprint",
          "@type": "xsd:boolean"
        }
      },
      "@id": "sr:referenceSurfaces",
      "@type": "@id",
      "@container": "@set"
    },
    "derivedGeometry": {
      "@context": {
        "status": "sr:derivedGeometryStatus",
        "geometryType": "sr:geometryType",
        "solidRef": {
          "@id": "sr:solidRef",
          "@type": "@id"
        },
        "inputFootprintRef": {
          "@id": "sr:inputFootprintRef",
          "@type": "@id"
        },
        "inputDefinitionRefs": {
          "@id": "sr:inputDefinitionRefs",
          "@type": "@id",
          "@container": "@set"
        },
        "inputSurfaceRefs": {
          "@id": "sr:inputSurfaceRefs",
          "@type": "@id",
          "@container": "@set"
        },
        "sourceReference": {
          "@id": "sr:sourceReference",
          "@type": "@id"
        },
        "provenanceRef": {
          "@id": "sr:provenanceRef",
          "@type": "@id"
        }
      },
      "@id": "sr:derivedGeometry",
      "@type": "@id"
    },
    "sourceBasis": {
      "@context": {
        "ruleType": {
          "@id": "pvb:ruleType",
          "@type": "xsd:string"
        },
        "sourceAuthorityType": {
          "@id": "pvb:sourceAuthorityType",
          "@type": "xsd:string"
        },
        "sourceStatement": {
          "@id": "pvb:sourceStatement",
          "@type": "xsd:string"
        }
      },
      "@id": "pvb:sourceBasis",
      "@type": "@id"
    },
    "sr": "https://linked.data.gov.au/def/csdm/spatial-representation/",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "dct": "http://purl.org/dc/terms/",
    "pvb": "https://linked.data.gov.au/def/csdm/parcel-vertical-boundary/",
    "@version": 1.1
  }
}
```

You can find the full JSON-LD context here:
[context.jsonld](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/parcelSpatialRepresentationDefinition/context.jsonld)

## Sources

* [Summary of Western Australian Parcel Representation Examples (2.5D liminal proposal)](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/development/2-5d-liminal/2-5d-liminal-overview.md)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/3d-csdm-profile-wa](https://github.com/surroundaustralia/3d-csdm-profile-wa)
* Path: `_sources/datatypes/parcelSpatialRepresentationDefinition`

