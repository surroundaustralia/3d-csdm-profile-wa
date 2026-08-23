
# Spatial Representation Definition (Schema)

`icsm.profiles.wa.datatypes.spatialRepresentationDefinition` *v0.1*

Generic, reusable properties that record how a 2D feature's geometry is being interpreted with respect to the vertical dimension: whether the representation is a plain 2D footprint, has contextual z-values, is bounded by a reference surface, carries a legally defined vertical boundary, or has a derived 3D solid — and how confidently that interpretation can be computed. Not specific to parcels; reusable by any 2D feature type gaining a 2.5D or 3D representation.

[*Status*](http://www.opengis.net/def/status): Under development

## Description

## Purpose

These properties record how a 2D feature's geometry is currently being interpreted with respect to
the vertical dimension, without incorrectly implying that every 2D feature has a legally defined 3D
extent.

The key principle is:

> A feature remains an authoritative 2D representation unless a legal vertical extent is explicitly
> described, supported by an authoritative source, and, where a 3D solid is created, capable of being
> computed and validated.

This block is intentionally generic: it does not assume the feature is a cadastral parcel, and it can
be reused by any 2D feature type gaining a 2.5D or 3D representation. The parcel-specific extension of
this pattern is
[`icsm.profiles.wa.datatypes.parcelSpatialRepresentationDefinition`](../parcelSpatialRepresentationDefinition),
which adds the jurisdictional/title-specific properties that only make sense for cadastral parcels.

## Structure

- `representationStatus`, `geometryLegalStatus` and `computabilityStatus` give a quick, top-level
  classification of the representation.
- `coordinateRepresentation` separates the dimensionality of the *stored coordinates* from the
  *legal* dimensionality recorded in `geometryLegalStatus` — a feature can be legally 2D while its
  coordinates carry a contextual third ordinate.
- `verticalExtent` models the lower and upper vertical boundary independently, so that each direction
  can carry its own state (undefined, not applicable, unconstrained, defined but unresolved, defined,
  or derived).
- `verticalBoundaryDefinitions` is a single, shared array that can hold relative offsets, absolute
  datum values, jurisdictional rules, or geometry boundary references — discriminated by
  `definitionType`.
- `referenceSurfaces` holds any terrain/ground/floor surfaces that provide vertical context. A
  reference surface is supporting geometry; it is not automatically a legal boundary.
- `derivedGeometry` is kept separate from the source definitions above it: it records only the
  computational *result* (e.g. a generated solid) and which inputs were used to produce it.

## Vocabularies

Property values such as `representation-status:2d` or `vertical-definition-type:jur` are compact
references into managed vocabularies. This block only declares how those property *names* map to RDF
predicates (`context.jsonld`) and describes the predicates themselves (`ontology.ttl`); it does not
define the vocabulary terms (concept schemes) themselves — those are managed as a separate artefact.
The consuming profile is responsible for declaring the vocabulary namespace prefixes used in its
property values (see the WA 3D profile's `context.jsonld`).

See the source proposal for the full worked examples this pattern is drawn from:
[Summary of Western Australian Parcel Representation Examples](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/development/2-5d-liminal/2-5d-liminal-overview.md).

## Examples

### Authoritative 2D footprint
The surveyed horizontal footprint only. No vertical extent is defined and no derived geometry
has been generated.

#### json
```json
{
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
  "verticalBoundaryDefinitions": [],
  "referenceSurfaces": [],
  "derivedGeometry": {
    "status": "notGenerated"
  }
}

```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/spatialRepresentationDefinition/context.jsonld",
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
  "verticalBoundaryDefinitions": [],
  "referenceSurfaces": [],
  "derivedGeometry": {
    "status": "notGenerated"
  }
}
```

#### ttl
```ttl
@prefix sr: <https://linked.data.gov.au/def/csdm/spatial-representation/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

[] sr:computabilityStatus <computability-status:nc> ;
    sr:coordinateRepresentation [ sr:coordinateDimension 2 ;
            sr:zValueRole <coordinate-z-role:absent> ] ;
    sr:derivedGeometry [ sr:derivedGeometryStatus "notGenerated" ] ;
    sr:geometryLegalStatus <geometry-legal-status:a2d> ;
    sr:representationStatus <representation-status:2d> ;
    sr:verticalExtent [ sr:lowerBoundary [ sr:boundaryState <vertical-boundary-state:und> ] ;
            sr:upperBoundary [ sr:boundaryState <vertical-boundary-state:und> ] ;
            sr:verticalExtentStatus <vertical-extent-status:ud> ] .


```


### 2.5D reference surface
The footprint is associated with a ground reference surface. The surface provides vertical
context but is not a legal vertical boundary, so `verticalExtent.status` remains `notApplicable`.

#### json
```json
{
  "representationStatus": "representation-status:2-5d",
  "geometryLegalStatus": "geometry-legal-status:a2d",
  "coordinateRepresentation": {
    "coordinateDimension": 3,
    "zValueRole": "coordinate-z-role:rs"
  },
  "verticalExtent": {
    "status": "vertical-extent-status:na",
    "lowerBoundary": {
      "state": "vertical-boundary-state:na"
    },
    "upperBoundary": {
      "state": "vertical-boundary-state:na"
    }
  },
  "computabilityStatus": "computability-status:nc",
  "verticalBoundaryDefinitions": [],
  "referenceSurfaces": [
    {
      "id": "surface-ground-1",
      "surfaceType": "height-reference:gl",
      "geometryLegalStatus": "geometry-legal-status:obs",
      "ref": "uuid:ca9c4381-9422-4bbb-8f05-c8a835831933",
      "boundedByFootprint": true
    }
  ],
  "derivedGeometry": {
    "status": "notGenerated"
  }
}

```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/spatialRepresentationDefinition/context.jsonld",
  "representationStatus": "representation-status:2-5d",
  "geometryLegalStatus": "geometry-legal-status:a2d",
  "coordinateRepresentation": {
    "coordinateDimension": 3,
    "zValueRole": "coordinate-z-role:rs"
  },
  "verticalExtent": {
    "status": "vertical-extent-status:na",
    "lowerBoundary": {
      "state": "vertical-boundary-state:na"
    },
    "upperBoundary": {
      "state": "vertical-boundary-state:na"
    }
  },
  "computabilityStatus": "computability-status:nc",
  "verticalBoundaryDefinitions": [],
  "referenceSurfaces": [
    {
      "id": "surface-ground-1",
      "surfaceType": "height-reference:gl",
      "geometryLegalStatus": "geometry-legal-status:obs",
      "ref": "uuid:ca9c4381-9422-4bbb-8f05-c8a835831933",
      "boundedByFootprint": true
    }
  ],
  "derivedGeometry": {
    "status": "notGenerated"
  }
}
```

#### ttl
```ttl
@prefix sr: <https://linked.data.gov.au/def/csdm/spatial-representation/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

[] sr:computabilityStatus <computability-status:nc> ;
    sr:coordinateRepresentation [ sr:coordinateDimension 3 ;
            sr:zValueRole <coordinate-z-role:rs> ] ;
    sr:derivedGeometry [ sr:derivedGeometryStatus "notGenerated" ] ;
    sr:geometryLegalStatus <geometry-legal-status:a2d> ;
    sr:referenceSurfaces [ sr:boundedByFootprint true ;
            sr:geometryLegalStatus <geometry-legal-status:obs> ;
            sr:surfaceGeometryRef <uuid:ca9c4381-9422-4bbb-8f05-c8a835831933> ;
            sr:surfaceType <height-reference:gl> ] ;
    sr:representationStatus <representation-status:2-5d> ;
    sr:verticalExtent [ sr:lowerBoundary [ sr:boundaryState <vertical-boundary-state:na> ] ;
            sr:upperBoundary [ sr:boundaryState <vertical-boundary-state:na> ] ;
            sr:verticalExtentStatus <vertical-extent-status:na> ] .


```


### Relative height description
Both vertical boundaries are described relative to ground level but cannot yet be resolved to
absolute values, so `resolutionStatus` is `requiresReferenceSurface`.

#### json
```json
{
  "representationStatus": "representation-status:hd",
  "geometryLegalStatus": "geometry-legal-status:a2d",
  "coordinateRepresentation": {
    "coordinateDimension": 2,
    "zValueRole": "coordinate-z-role:absent"
  },
  "verticalExtent": {
    "status": "vertical-extent-status:rr",
    "lowerBoundary": {
      "state": "vertical-boundary-state:dur",
      "definitionRef": "relative-limit-lower-1"
    },
    "upperBoundary": {
      "state": "vertical-boundary-state:dur",
      "definitionRef": "relative-limit-upper-1"
    }
  },
  "computabilityStatus": "computability-status:rrs",
  "verticalBoundaryDefinitions": [
    {
      "id": "relative-limit-lower-1",
      "definitionType": "vertical-definition-type:rel",
      "limitRole": "vertical-limit-role:ll",
      "valueType": "vertical-value-type:off",
      "value": 2,
      "direction": "vertical-direction:blw",
      "heightReference": "height-reference:gl",
      "description": "2 metres below ground level",
      "sourceReference": "source-height-description-1",
      "resolutionStatus": "requiresReferenceSurface",
      "provenanceRef": "height-description-extraction-1"
    },
    {
      "id": "relative-limit-upper-1",
      "definitionType": "vertical-definition-type:rel",
      "limitRole": "vertical-limit-role:ul",
      "valueType": "vertical-value-type:off",
      "value": 12,
      "direction": "vertical-direction:abv",
      "heightReference": "height-reference:gl",
      "description": "12 metres above ground level",
      "sourceReference": "source-height-description-2",
      "resolutionStatus": "requiresReferenceSurface",
      "provenanceRef": "height-description-extraction-1"
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
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/spatialRepresentationDefinition/context.jsonld",
  "representationStatus": "representation-status:hd",
  "geometryLegalStatus": "geometry-legal-status:a2d",
  "coordinateRepresentation": {
    "coordinateDimension": 2,
    "zValueRole": "coordinate-z-role:absent"
  },
  "verticalExtent": {
    "status": "vertical-extent-status:rr",
    "lowerBoundary": {
      "state": "vertical-boundary-state:dur",
      "definitionRef": "relative-limit-lower-1"
    },
    "upperBoundary": {
      "state": "vertical-boundary-state:dur",
      "definitionRef": "relative-limit-upper-1"
    }
  },
  "computabilityStatus": "computability-status:rrs",
  "verticalBoundaryDefinitions": [
    {
      "id": "relative-limit-lower-1",
      "definitionType": "vertical-definition-type:rel",
      "limitRole": "vertical-limit-role:ll",
      "valueType": "vertical-value-type:off",
      "value": 2,
      "direction": "vertical-direction:blw",
      "heightReference": "height-reference:gl",
      "description": "2 metres below ground level",
      "sourceReference": "source-height-description-1",
      "resolutionStatus": "requiresReferenceSurface",
      "provenanceRef": "height-description-extraction-1"
    },
    {
      "id": "relative-limit-upper-1",
      "definitionType": "vertical-definition-type:rel",
      "limitRole": "vertical-limit-role:ul",
      "valueType": "vertical-value-type:off",
      "value": 12,
      "direction": "vertical-direction:abv",
      "heightReference": "height-reference:gl",
      "description": "12 metres above ground level",
      "sourceReference": "source-height-description-2",
      "resolutionStatus": "requiresReferenceSurface",
      "provenanceRef": "height-description-extraction-1"
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
@prefix sr: <https://linked.data.gov.au/def/csdm/spatial-representation/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

[] sr:computabilityStatus <computability-status:rrs> ;
    sr:coordinateRepresentation [ sr:coordinateDimension 2 ;
            sr:zValueRole <coordinate-z-role:absent> ] ;
    sr:derivedGeometry [ sr:derivedGeometryStatus "notGenerated" ] ;
    sr:geometryLegalStatus <geometry-legal-status:a2d> ;
    sr:representationStatus <representation-status:hd> ;
    sr:verticalBoundaryDefinitions [ dct:description "12 metres above ground level" ;
            sr:definitionType <vertical-definition-type:rel> ;
            sr:direction <vertical-direction:abv> ;
            sr:heightReference <height-reference:gl> ;
            sr:limitRole <vertical-limit-role:ul> ;
            sr:provenanceRef <file:///github/workspace/height-description-extraction-1> ;
            sr:resolutionStatus "requiresReferenceSurface" ;
            sr:sourceReference <file:///github/workspace/source-height-description-2> ;
            sr:value 12.0 ;
            sr:valueType <vertical-value-type:off> ],
        [ dct:description "2 metres below ground level" ;
            sr:definitionType <vertical-definition-type:rel> ;
            sr:direction <vertical-direction:blw> ;
            sr:heightReference <height-reference:gl> ;
            sr:limitRole <vertical-limit-role:ll> ;
            sr:provenanceRef <file:///github/workspace/height-description-extraction-1> ;
            sr:resolutionStatus "requiresReferenceSurface" ;
            sr:sourceReference <file:///github/workspace/source-height-description-1> ;
            sr:value 2.0 ;
            sr:valueType <vertical-value-type:off> ] ;
    sr:verticalExtent [ sr:lowerBoundary [ sr:boundaryState <vertical-boundary-state:dur> ;
                    sr:definitionRef <file:///github/workspace/relative-limit-lower-1> ] ;
            sr:upperBoundary [ sr:boundaryState <vertical-boundary-state:dur> ;
                    sr:definitionRef <file:///github/workspace/relative-limit-upper-1> ] ;
            sr:verticalExtentStatus <vertical-extent-status:rr> ] .


```


### Absolute AHD height description
Both vertical boundaries are supported absolute values referenced to the AHD vertical datum, so
`computabilityStatus` is `computable`.

#### json
```json
{
  "representationStatus": "representation-status:hd",
  "geometryLegalStatus": "geometry-legal-status:a2d",
  "coordinateRepresentation": {
    "coordinateDimension": 2,
    "zValueRole": "coordinate-z-role:absent"
  },
  "verticalExtent": {
    "status": "vertical-extent-status:ld",
    "lowerBoundary": {
      "state": "vertical-boundary-state:def",
      "definitionRef": "absolute-limit-lower-1"
    },
    "upperBoundary": {
      "state": "vertical-boundary-state:def",
      "definitionRef": "absolute-limit-upper-1"
    }
  },
  "computabilityStatus": "computability-status:c",
  "verticalBoundaryDefinitions": [
    {
      "id": "absolute-limit-lower-1",
      "definitionType": "vertical-definition-type:ahd",
      "limitRole": "vertical-limit-role:ll",
      "valueType": "vertical-value-type:ah",
      "value": 16,
      "comparisonOperator": "greaterThanOrEqual",
      "description": "limited in height to more than and equal to 16.00 AHD",
      "sourceReference": "source-height-description-2",
      "resolutionStatus": "absoluteLimitAvailable",
      "provenanceRef": "height-description-extraction-1"
    },
    {
      "id": "absolute-limit-upper-1",
      "definitionType": "vertical-definition-type:ahd",
      "limitRole": "vertical-limit-role:ul",
      "valueType": "vertical-value-type:ah",
      "value": 35,
      "comparisonOperator": "lessThanOrEqual",
      "description": "limited in height to less than and equal to 35.00 AHD",
      "sourceReference": "source-height-description-1",
      "resolutionStatus": "absoluteLimitAvailable",
      "provenanceRef": "height-description-extraction-1"
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
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/spatialRepresentationDefinition/context.jsonld",
  "representationStatus": "representation-status:hd",
  "geometryLegalStatus": "geometry-legal-status:a2d",
  "coordinateRepresentation": {
    "coordinateDimension": 2,
    "zValueRole": "coordinate-z-role:absent"
  },
  "verticalExtent": {
    "status": "vertical-extent-status:ld",
    "lowerBoundary": {
      "state": "vertical-boundary-state:def",
      "definitionRef": "absolute-limit-lower-1"
    },
    "upperBoundary": {
      "state": "vertical-boundary-state:def",
      "definitionRef": "absolute-limit-upper-1"
    }
  },
  "computabilityStatus": "computability-status:c",
  "verticalBoundaryDefinitions": [
    {
      "id": "absolute-limit-lower-1",
      "definitionType": "vertical-definition-type:ahd",
      "limitRole": "vertical-limit-role:ll",
      "valueType": "vertical-value-type:ah",
      "value": 16,
      "comparisonOperator": "greaterThanOrEqual",
      "description": "limited in height to more than and equal to 16.00 AHD",
      "sourceReference": "source-height-description-2",
      "resolutionStatus": "absoluteLimitAvailable",
      "provenanceRef": "height-description-extraction-1"
    },
    {
      "id": "absolute-limit-upper-1",
      "definitionType": "vertical-definition-type:ahd",
      "limitRole": "vertical-limit-role:ul",
      "valueType": "vertical-value-type:ah",
      "value": 35,
      "comparisonOperator": "lessThanOrEqual",
      "description": "limited in height to less than and equal to 35.00 AHD",
      "sourceReference": "source-height-description-1",
      "resolutionStatus": "absoluteLimitAvailable",
      "provenanceRef": "height-description-extraction-1"
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
@prefix sr: <https://linked.data.gov.au/def/csdm/spatial-representation/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

[] sr:computabilityStatus <computability-status:c> ;
    sr:coordinateRepresentation [ sr:coordinateDimension 2 ;
            sr:zValueRole <coordinate-z-role:absent> ] ;
    sr:derivedGeometry [ sr:derivedGeometryStatus "notGenerated" ] ;
    sr:geometryLegalStatus <geometry-legal-status:a2d> ;
    sr:representationStatus <representation-status:hd> ;
    sr:verticalBoundaryDefinitions [ dct:description "limited in height to more than and equal to 16.00 AHD" ;
            sr:comparisonOperator "greaterThanOrEqual" ;
            sr:definitionType <vertical-definition-type:ahd> ;
            sr:limitRole <vertical-limit-role:ll> ;
            sr:provenanceRef <file:///github/workspace/height-description-extraction-1> ;
            sr:resolutionStatus "absoluteLimitAvailable" ;
            sr:sourceReference <file:///github/workspace/source-height-description-2> ;
            sr:value 16.0 ;
            sr:valueType <vertical-value-type:ah> ],
        [ dct:description "limited in height to less than and equal to 35.00 AHD" ;
            sr:comparisonOperator "lessThanOrEqual" ;
            sr:definitionType <vertical-definition-type:ahd> ;
            sr:limitRole <vertical-limit-role:ul> ;
            sr:provenanceRef <file:///github/workspace/height-description-extraction-1> ;
            sr:resolutionStatus "absoluteLimitAvailable" ;
            sr:sourceReference <file:///github/workspace/source-height-description-1> ;
            sr:value 35.0 ;
            sr:valueType <vertical-value-type:ah> ] ;
    sr:verticalExtent [ sr:lowerBoundary [ sr:boundaryState <vertical-boundary-state:def> ;
                    sr:definitionRef <file:///github/workspace/absolute-limit-lower-1> ] ;
            sr:upperBoundary [ sr:boundaryState <vertical-boundary-state:def> ;
                    sr:definitionRef <file:///github/workspace/absolute-limit-upper-1> ] ;
            sr:verticalExtentStatus <vertical-extent-status:ld> ] .


```


### Derived 3D solid
Sufficient source information (footprint, resolved vertical boundary definitions, and a ground
reference surface) has been converted into a closed 3D solid. The source definitions in
`verticalBoundaryDefinitions` are retained alongside the computed result in `derivedGeometry`.

#### json
```json
{
  "representationStatus": "representation-status:d3d",
  "geometryLegalStatus": "geometry-legal-status:dfld",
  "coordinateRepresentation": {
    "coordinateDimension": 3,
    "zValueRole": "coordinate-z-role:dbg"
  },
  "verticalExtent": {
    "status": "vertical-extent-status:dfld",
    "lowerBoundary": {
      "state": "vertical-boundary-state:drv",
      "definitionRef": "relative-limit-lower-1",
      "geometryRef": "derived-lower-surface-1"
    },
    "upperBoundary": {
      "state": "vertical-boundary-state:drv",
      "definitionRef": "relative-limit-upper-1",
      "geometryRef": "derived-upper-surface-1"
    }
  },
  "computabilityStatus": "computability-status:cd",
  "verticalBoundaryDefinitions": [
    {
      "id": "relative-limit-lower-1",
      "definitionType": "vertical-definition-type:rel",
      "limitRole": "vertical-limit-role:ll",
      "valueType": "vertical-value-type:off",
      "value": 2,
      "direction": "vertical-direction:blw",
      "heightReference": "height-reference:gl",
      "description": "2 metres below ground level",
      "sourceReference": "source-height-description-1",
      "resolutionStatus": "resolved",
      "provenanceRef": "derived-3d-solid-generation-1"
    },
    {
      "id": "relative-limit-upper-1",
      "definitionType": "vertical-definition-type:rel",
      "limitRole": "vertical-limit-role:ul",
      "valueType": "vertical-value-type:off",
      "value": 12,
      "direction": "vertical-direction:abv",
      "heightReference": "height-reference:gl",
      "description": "12 metres above ground level",
      "sourceReference": "source-height-description-2",
      "resolutionStatus": "resolved",
      "provenanceRef": "derived-3d-solid-generation-1"
    }
  ],
  "referenceSurfaces": [
    {
      "id": "surface-ground-1",
      "surfaceType": "height-reference:gl",
      "geometryLegalStatus": "geometry-legal-status:obs",
      "ref": "uuid:ca9c4381-9422-4bbb-8f05-c8a835831933",
      "boundedByFootprint": true
    }
  ],
  "derivedGeometry": {
    "status": "solidGenerated",
    "geometryType": "Solid",
    "solidRef": "uuid:fbefade9-9cda-4826-9327-3ba8796191f5",
    "inputFootprintRef": "parcel-footprint-1",
    "inputDefinitionRefs": [
      "relative-limit-lower-1",
      "relative-limit-upper-1"
    ],
    "inputSurfaceRefs": [
      "surface-ground-1"
    ],
    "sourceReference": [
      "source-surface-offset-1",
      "source-surface-offset-2"
    ],
    "provenanceRef": "surface-offset-extraction-1"
  }
}

```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/spatialRepresentationDefinition/context.jsonld",
  "representationStatus": "representation-status:d3d",
  "geometryLegalStatus": "geometry-legal-status:dfld",
  "coordinateRepresentation": {
    "coordinateDimension": 3,
    "zValueRole": "coordinate-z-role:dbg"
  },
  "verticalExtent": {
    "status": "vertical-extent-status:dfld",
    "lowerBoundary": {
      "state": "vertical-boundary-state:drv",
      "definitionRef": "relative-limit-lower-1",
      "geometryRef": "derived-lower-surface-1"
    },
    "upperBoundary": {
      "state": "vertical-boundary-state:drv",
      "definitionRef": "relative-limit-upper-1",
      "geometryRef": "derived-upper-surface-1"
    }
  },
  "computabilityStatus": "computability-status:cd",
  "verticalBoundaryDefinitions": [
    {
      "id": "relative-limit-lower-1",
      "definitionType": "vertical-definition-type:rel",
      "limitRole": "vertical-limit-role:ll",
      "valueType": "vertical-value-type:off",
      "value": 2,
      "direction": "vertical-direction:blw",
      "heightReference": "height-reference:gl",
      "description": "2 metres below ground level",
      "sourceReference": "source-height-description-1",
      "resolutionStatus": "resolved",
      "provenanceRef": "derived-3d-solid-generation-1"
    },
    {
      "id": "relative-limit-upper-1",
      "definitionType": "vertical-definition-type:rel",
      "limitRole": "vertical-limit-role:ul",
      "valueType": "vertical-value-type:off",
      "value": 12,
      "direction": "vertical-direction:abv",
      "heightReference": "height-reference:gl",
      "description": "12 metres above ground level",
      "sourceReference": "source-height-description-2",
      "resolutionStatus": "resolved",
      "provenanceRef": "derived-3d-solid-generation-1"
    }
  ],
  "referenceSurfaces": [
    {
      "id": "surface-ground-1",
      "surfaceType": "height-reference:gl",
      "geometryLegalStatus": "geometry-legal-status:obs",
      "ref": "uuid:ca9c4381-9422-4bbb-8f05-c8a835831933",
      "boundedByFootprint": true
    }
  ],
  "derivedGeometry": {
    "status": "solidGenerated",
    "geometryType": "Solid",
    "solidRef": "uuid:fbefade9-9cda-4826-9327-3ba8796191f5",
    "inputFootprintRef": "parcel-footprint-1",
    "inputDefinitionRefs": [
      "relative-limit-lower-1",
      "relative-limit-upper-1"
    ],
    "inputSurfaceRefs": [
      "surface-ground-1"
    ],
    "sourceReference": [
      "source-surface-offset-1",
      "source-surface-offset-2"
    ],
    "provenanceRef": "surface-offset-extraction-1"
  }
}
```

#### ttl
```ttl
@prefix dct: <http://purl.org/dc/terms/> .
@prefix sr: <https://linked.data.gov.au/def/csdm/spatial-representation/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

[] sr:computabilityStatus <computability-status:cd> ;
    sr:coordinateRepresentation [ sr:coordinateDimension 3 ;
            sr:zValueRole <coordinate-z-role:dbg> ] ;
    sr:derivedGeometry [ sr:derivedGeometryStatus "solidGenerated" ;
            sr:geometryType "Solid" ;
            sr:inputDefinitionRefs <file:///github/workspace/relative-limit-lower-1>,
                <file:///github/workspace/relative-limit-upper-1> ;
            sr:inputFootprintRef <file:///github/workspace/parcel-footprint-1> ;
            sr:inputSurfaceRefs <file:///github/workspace/surface-ground-1> ;
            sr:provenanceRef <file:///github/workspace/surface-offset-extraction-1> ;
            sr:solidRef <uuid:fbefade9-9cda-4826-9327-3ba8796191f5> ;
            sr:sourceReference <file:///github/workspace/source-surface-offset-1>,
                <file:///github/workspace/source-surface-offset-2> ] ;
    sr:geometryLegalStatus <geometry-legal-status:dfld> ;
    sr:referenceSurfaces [ sr:boundedByFootprint true ;
            sr:geometryLegalStatus <geometry-legal-status:obs> ;
            sr:surfaceGeometryRef <uuid:ca9c4381-9422-4bbb-8f05-c8a835831933> ;
            sr:surfaceType <height-reference:gl> ] ;
    sr:representationStatus <representation-status:d3d> ;
    sr:verticalBoundaryDefinitions [ dct:description "2 metres below ground level" ;
            sr:definitionType <vertical-definition-type:rel> ;
            sr:direction <vertical-direction:blw> ;
            sr:heightReference <height-reference:gl> ;
            sr:limitRole <vertical-limit-role:ll> ;
            sr:provenanceRef <file:///github/workspace/derived-3d-solid-generation-1> ;
            sr:resolutionStatus "resolved" ;
            sr:sourceReference <file:///github/workspace/source-height-description-1> ;
            sr:value 2.0 ;
            sr:valueType <vertical-value-type:off> ],
        [ dct:description "12 metres above ground level" ;
            sr:definitionType <vertical-definition-type:rel> ;
            sr:direction <vertical-direction:abv> ;
            sr:heightReference <height-reference:gl> ;
            sr:limitRole <vertical-limit-role:ul> ;
            sr:provenanceRef <file:///github/workspace/derived-3d-solid-generation-1> ;
            sr:resolutionStatus "resolved" ;
            sr:sourceReference <file:///github/workspace/source-height-description-2> ;
            sr:value 12.0 ;
            sr:valueType <vertical-value-type:off> ] ;
    sr:verticalExtent [ sr:lowerBoundary [ sr:boundaryState <vertical-boundary-state:drv> ;
                    sr:definitionRef <file:///github/workspace/relative-limit-lower-1> ;
                    sr:geometryRef <file:///github/workspace/derived-lower-surface-1> ] ;
            sr:upperBoundary [ sr:boundaryState <vertical-boundary-state:drv> ;
                    sr:definitionRef <file:///github/workspace/relative-limit-upper-1> ;
                    sr:geometryRef <file:///github/workspace/derived-upper-surface-1> ] ;
            sr:verticalExtentStatus <vertical-extent-status:dfld> ] .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: Generic properties describing how a 2D feature's geometry is interpreted
  with respect to the vertical dimension. A feature remains an authoritative 2D representation
  unless a legal vertical extent is explicitly described, supported by an authoritative
  source, and, where a 3D solid is created, capable of being computed and validated.
  This block is deliberately generic (not parcel-specific) so it can be reused by
  any 2D feature type gaining a 2.5D or 3D representation. Vocabulary value definitions
  (the terms referenced by the `*Status`, `*Role`, `*Type` and `direction`/`zValueRole`
  properties below) are managed as a separate artefact and are not defined here.
type: object
properties:
  representationStatus:
    type: string
    description: 'How the feature''s spatial representation currently stands: 2D footprint
      only, 2.5D (footprint plus reference surface), height-described, jurisdictionally
      bounded, or derived 3D. A vocabulary-referencing value (e.g. `representation-status:2d`).'
    x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/representationStatus
    x-jsonld-type: '@vocab'
  geometryLegalStatus:
    type: string
    description: 'Which geometry is legally authoritative for the feature: the 2D
      footprint, an observed surface, or geometry derived from a legal description.
      A vocabulary-referencing value (e.g. `geometry-legal-status:a2d`).'
    x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/geometryLegalStatus
    x-jsonld-type: '@vocab'
  coordinateRepresentation:
    $ref: '#/$defs/coordinateRepresentation'
    x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/coordinateRepresentation
    x-jsonld-type: '@id'
  verticalExtent:
    $ref: '#/$defs/verticalExtent'
    x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/verticalExtent
    x-jsonld-type: '@id'
  computabilityStatus:
    type: string
    description: Whether coordinate boundaries or geometry can be calculated from
      the information currently available. A vocabulary-referencing value (e.g. `computability-status:nc`).
    x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/computabilityStatus
    x-jsonld-type: '@vocab'
  verticalBoundaryDefinitions:
    type: array
    description: "The source definitions (relative offset, absolute datum value, or
      jurisdictional rule) that establish or describe a vertical boundary. Kept separate
      from any computed/derived geometry \u2014 see `derivedGeometry`."
    items:
      $ref: '#/$defs/verticalBoundaryDefinition'
    x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/verticalBoundaryDefinitions
    x-jsonld-type: '@id'
    x-jsonld-container: '@set'
  referenceSurfaces:
    type: array
    description: Reference surfaces (terrain, ground, floor, or other surface) that
      provide vertical context for the feature. A reference surface supports analysis
      or visualisation; it is not by itself a legal vertical boundary.
    items:
      $ref: '#/$defs/referenceSurface'
    x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/referenceSurfaces
    x-jsonld-type: '@id'
    x-jsonld-container: '@set'
  derivedGeometry:
    $ref: '#/$defs/derivedGeometry'
    x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/derivedGeometry
    x-jsonld-type: '@id'
required:
- representationStatus
- geometryLegalStatus
- coordinateRepresentation
- verticalExtent
- computabilityStatus
- derivedGeometry
$defs:
  coordinateRepresentation:
    type: object
    description: Separates the dimensionality of the stored coordinates from the legal
      dimensionality of the feature. A feature can be legally 2D (`geometryLegalStatus`
      authoritative-2D) while its coordinates carry a contextual third ordinate.
    properties:
      coordinateDimension:
        type: integer
        enum:
        - 2
        - 3
        description: The number of ordinates carried by the feature's coordinates.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/coordinateDimension
        x-jsonld-type: http://www.w3.org/2001/XMLSchema#integer
      zValueRole:
        type: string
        description: 'What a third coordinate ordinate, if present, means: absent,
          a contextual geometry height, a reference-surface height, or a derived-boundary
          height. A vocabulary-referencing value (e.g. `coordinate-z-role:absent`).'
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/zValueRole
        x-jsonld-type: '@vocab'
    required:
    - coordinateDimension
    - zValueRole
  verticalExtent:
    type: object
    description: The overall legal or source state of the feature's vertical extent,
      with the lower and upper boundary modelled independently so that each direction
      can carry its own state.
    properties:
      status:
        type: string
        description: The overall legal or source state of the vertical extent. A vocabulary-referencing
          value (e.g. `vertical-extent-status:ud`).
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/verticalExtentStatus
        x-jsonld-type: '@vocab'
      lowerBoundary:
        $ref: '#/$defs/verticalBoundary'
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/lowerBoundary
        x-jsonld-type: '@id'
      upperBoundary:
        $ref: '#/$defs/verticalBoundary'
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/upperBoundary
        x-jsonld-type: '@id'
      sourceReference:
        type: string
        description: Identifier of the supporting source document, where the extent's
          status (e.g. a positively established unconstrained extent) is itself sourced.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/sourceReference
        x-jsonld-type: '@id'
    required:
    - status
    - lowerBoundary
    - upperBoundary
  verticalBoundary:
    type: object
    description: The state of one vertical boundary (lower or upper) of the feature.
    properties:
      state:
        type: string
        description: 'The state of this boundary: undefined, not applicable, unconstrained,
          defined but unresolved, defined, or derived. A vocabulary-referencing value
          (e.g. `vertical-boundary-state:und`).'
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/boundaryState
        x-jsonld-type: '@vocab'
      definitionRef:
        type: string
        description: Identifier of the entry in `verticalBoundaryDefinitions` that
          establishes this boundary, when `state` indicates a source definition exists.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/definitionRef
        x-jsonld-type: '@id'
      geometryRef:
        type: string
        description: Identifier of the derived boundary geometry (e.g. an upper or
          lower surface) realising this boundary, when `state` is derived.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/geometryRef
        x-jsonld-type: '@id'
    required:
    - state
  verticalBoundaryDefinition:
    type: object
    description: 'A single source definition of a vertical boundary: a relative offset,
      an absolute datum value, or a jurisdictional rule. The `definitionType` discriminates
      which kind of definition this is.'
    properties:
      id:
        type: string
        description: Local identifier for this definition, referenced by `verticalExtent.lowerBoundary.definitionRef`
          / `upperBoundary.definitionRef` and by `derivedGeometry.inputDefinitionRefs`.
      definitionType:
        type: string
        description: 'The kind of source definition: relative height description,
          absolute height description, jurisdictional boundary rule, or geometry boundary
          reference. A vocabulary-referencing value (e.g. `vertical-definition-type:rel`).'
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/definitionType
        x-jsonld-type: '@vocab'
      limitRole:
        type: string
        description: Whether this definition establishes an upper or lower limit.
          A vocabulary-referencing value (e.g. `vertical-limit-role:ll`).
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/limitRole
        x-jsonld-type: '@vocab'
      valueType:
        type: string
        description: 'How `value` is expressed: as an offset from a reference, or
          as an absolute height/depth. A vocabulary-referencing value (e.g. `vertical-value-type:off`).'
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/valueType
        x-jsonld-type: '@vocab'
      value:
        type: number
        description: The numeric height, depth, or offset value.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/value
        x-jsonld-type: http://www.w3.org/2001/XMLSchema#decimal
      direction:
        type: string
        description: The direction in which `value` is expressed (above or below the
          reference), where relevant. A vocabulary-referencing value (e.g. `vertical-direction:blw`).
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/direction
        x-jsonld-type: '@vocab'
      heightReference:
        type: string
        description: The surface, level, object, plane or datum that `value` is relative
          to. A vocabulary-referencing value (e.g. `height-reference:gl`).
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/heightReference
        x-jsonld-type: '@vocab'
      description:
        type: string
        description: Human-readable description or verbatim source wording for this
          boundary definition.
        x-jsonld-id: http://purl.org/dc/terms/description
      comparisonOperator:
        type: string
        description: The comparison implied by an absolute value, e.g. `lessThanOrEqual`
          or `greaterThanOrEqual`.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/comparisonOperator
      resolutionStatus:
        type: string
        description: Whether this definition has been resolved into a computable absolute
          value, e.g. `requiresReferenceSurface`, `absoluteLimitAvailable`, or `resolved`.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/resolutionStatus
      sourceReference:
        type: string
        description: Identifier of the supporting source document for this definition.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/sourceReference
        x-jsonld-type: '@id'
      provenanceRef:
        type: string
        description: Identifier of the PROV activity that extracted or derived this
          definition.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/provenanceRef
        x-jsonld-type: '@id'
    required:
    - id
    - definitionType
    - limitRole
  referenceSurface:
    type: object
    description: A terrain, ground, floor, or other surface providing vertical context.
      A reference surface is supporting geometry; it is not automatically an upper
      or lower legal boundary.
    properties:
      id:
        type: string
        description: Local identifier for this reference surface, referenced by `derivedGeometry.inputSurfaceRefs`.
      surfaceType:
        type: string
        description: What the surface represents, e.g. ground level. A vocabulary-referencing
          value (e.g. `height-reference:gl`).
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/surfaceType
        x-jsonld-type: '@vocab'
      geometryLegalStatus:
        type: string
        description: The legal/analytical status of the surface geometry itself. A
          vocabulary-referencing value (e.g. `geometry-legal-status:obs`).
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/geometryLegalStatus
        x-jsonld-type: '@vocab'
      ref:
        type: string
        description: Reference to the surface's geometry, e.g. a surface feature collection
          identifier.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/surfaceGeometryRef
        x-jsonld-type: '@id'
      boundedByFootprint:
        type: boolean
        description: Whether the surface is bounded by (contains) the feature's 2D
          footprint.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/boundedByFootprint
        x-jsonld-type: http://www.w3.org/2001/XMLSchema#boolean
    required:
    - id
    - surfaceType
    - ref
  derivedGeometry:
    type: object
    description: The computational result of converting sufficient source information
      (footprint, vertical boundary definitions, reference surfaces) into derived
      geometry, e.g. a closed 3D solid. Kept separate from the source definitions,
      which remain in `verticalBoundaryDefinitions`.
    properties:
      status:
        type: string
        description: Whether derived geometry has been generated, e.g. `notGenerated`
          or `solidGenerated`.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/derivedGeometryStatus
      geometryType:
        type: string
        description: The type of derived geometry produced, e.g. `Solid`.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/geometryType
      solidRef:
        type: string
        description: Reference to the generated solid geometry.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/solidRef
        x-jsonld-type: '@id'
      inputFootprintRef:
        type: string
        description: Reference to the 2D footprint used as an input to the derivation.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/inputFootprintRef
        x-jsonld-type: '@id'
      inputDefinitionRefs:
        type: array
        description: References to the `verticalBoundaryDefinitions` entries used
          as inputs to the derivation.
        items:
          type: string
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/inputDefinitionRefs
        x-jsonld-type: '@id'
        x-jsonld-container: '@set'
      inputSurfaceRefs:
        type: array
        description: References to the `referenceSurfaces` entries used as inputs
          to the derivation.
        items:
          type: string
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/inputSurfaceRefs
        x-jsonld-type: '@id'
        x-jsonld-container: '@set'
      sourceReference:
        description: Identifier(s) of the supporting source document(s) for the derivation.
        oneOf:
        - type: string
        - type: array
          items:
            type: string
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/sourceReference
        x-jsonld-type: '@id'
      provenanceRef:
        type: string
        description: Identifier of the PROV activity that generated this derived geometry.
        x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/provenanceRef
        x-jsonld-type: '@id'
    required:
    - status
x-jsonld-extra-terms:
  state:
    x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/boundaryState
    x-jsonld-type: '@vocab'
  definitionRef:
    x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/definitionRef
    x-jsonld-type: '@id'
  geometryRef:
    x-jsonld-id: https://linked.data.gov.au/def/csdm/spatial-representation/geometryRef
    x-jsonld-type: '@id'
x-jsonld-prefixes:
  sr: https://linked.data.gov.au/def/csdm/spatial-representation/
  xsd: http://www.w3.org/2001/XMLSchema#
  dct: http://purl.org/dc/terms/

```

Links to the schema:

* YAML version: [schema.yaml](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/spatialRepresentationDefinition/schema.json)
* JSON version: [schema.json](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/spatialRepresentationDefinition/schema.yaml)


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
    "sr": "https://linked.data.gov.au/def/csdm/spatial-representation/",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "dct": "http://purl.org/dc/terms/",
    "@version": 1.1
  }
}
```

You can find the full JSON-LD context here:
[context.jsonld](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/spatialRepresentationDefinition/context.jsonld)

## Sources

* [Summary of Western Australian Parcel Representation Examples (2.5D liminal proposal)](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/development/2-5d-liminal/2-5d-liminal-overview.md)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/3d-csdm-profile-wa](https://github.com/surroundaustralia/3d-csdm-profile-wa)
* Path: `_sources/datatypes/spatialRepresentationDefinition`

