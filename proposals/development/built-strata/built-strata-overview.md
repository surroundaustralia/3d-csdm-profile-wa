# Summary of Western Australian Built Strata Examples

## Table of Contents

1. [Purpose](#purpose)
2. [Introduction](#introduction)
3. [Recommended Additions](#recommended-additions)
4. [New `definitionType` for building-referenced boundaries](#new-definitiontype-for-building-referenced-boundaries)
5. [Use a common `limits` array](#use-a-common-limits-array)
6. [Broaden `limitRole` into `boundaryRole`](#broaden-limitrole-into-boundaryrole)
7. [Add a controlled `relationship` to the referenced building element](#add-a-controlled-relationship-to-the-referenced-building-element)
8. [Add `referenceFeatureRef`](#add-referencefeatureref)
9. [Add `boundaryFaceRef`](#add-boundaryfaceref)
10. [Keep source information at the definition level](#keep-source-information-at-the-definition-level)
11. [Allow heterogeneous definitions for one strata unit](#allow-heterogeneous-definitions-for-one-strata-unit)
12. [`derivedGeometry` should reference the 3D CSDM Solids](#derivedgeometry-should-reference-the-3d-csdm-solids)
13. [Preferred multipart form](#preferred-multipart-form)
14. [Relationship to `verticalExtent`](#relationship-to-verticalextent)
15. [Complete built-strata example](#complete-built-strata-example)

## Purpose

This document sets out how the Western Australian built-strata use case can be expressed using the general `spatialRepresentationDefinitions` pattern already established for WA parcel representation, rather than as a separate strata-specific representation model.
It identifies the small set of additions needed to describe legal boundaries that are defined by reference to building elements: the surfaces and centre planes of walls, floors, ceilings and slabs, including lateral boundary faces alongside the existing upper and lower limits, and shows how each legal definition traces through to the topological faces and solids of the derived 3D geometry while keeping building/occupation evidence distinct from the cadastral boundary itself.
Worked JSON fragments and a complete built-strata example are included, so the proposed additions can be reviewed and discussed before adoption into the profile.

## Introduction

The built-strata use case can fit the pattern described in [Section 10 of the Summary of Western Australian Parcel Representation Examples](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/development/2-5d-liminal/2-5d-liminal-overview.md#refactor-of-types-1-to-7-into-a-single-general-pattern) without creating a separate strata-specific representation model.
However, the existing `verticalBoundaryDefinitions` pattern is primarily oriented around upper and lower limits, whereas a built-strata solid will generally be defined by a collection of lower, upper, and lateral building-referenced boundary faces.
This matters because the built-strata use case explicitly requires walls, floor surfaces, ceiling surfaces, centre planes, and similar building references to define legal lot boundaries, while keeping the underlying building/occupation evidence separate from the cadastral boundary itself.

By retaining the overall `spatialRepresentationDefinitions` structure from [Section 10 of the Summary of Western Australian Parcel Representation Examples](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/development/2-5d-liminal/2-5d-liminal-overview.md#refactor-of-types-1-to-7-into-a-single-general-pattern):

```json
{
  "spatialRepresentationDefinitions": {
    "representationStatus": "...",
    "geometryLegalStatus": "...",
    "coordinateRepresentation": {
      ...
    },
    "verticalExtent": {
      ...
    },
    "computabilityStatus": "...",
    "verticalBoundaryDefinitions": [
      ...
    ],
    "referenceSurfaces": [
      ...
    ],
    "derivedGeometry": {
      ...
    }
  }
}
```

preserves separation of concepts already established between:

- summary classification;
- source/legal boundary definitions;
- supporting/reference geometry; and
- geometry generated from those definitions.

A built-strata lot with generated 3D topology can be described as follows:

```json
{
  "representationStatus": "representation-status:d3d",
  "geometryLegalStatus": "geometry-legal-status:dfld",
  "computabilityStatus": "computability-status:cd"
}
```

where, assuming the solid has been derived from legally supported strata-plan boundary definition, `representation-status:d3d` indicates a 3D solid has been generated from computable inputs; `geometry-legal-status:dfld` indicates the geometry is computed from a legal height or boundary description (occupation features, such as walls, floors, and ceilings for built-strata); and `computability-status:cd` indicates that the geometry has been computed and should include derivation provenance.

If WA ultimately recognises that submitted 3D geometry as being authoritative legal geometry, then `geometry-legal-status` could be changed to `geometry-legal-status:l3d`.

## Recommended Additions

We suggest five substantive additions to the general `spatialRepresentationDefinitions` pattern described in the [Summary of Western Australian Parcel Representation Examples](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/development/2-5d-liminal/2-5d-liminal-overview.md).

| Addition                                     | Purpose                                                                                                                                                       |
|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `definitionType: buildingReferencedBoundary` | Distinguishes building-referenced legal boundaries from relative heights, AHD limits and generic jurisdictional rules.                                        |
| `boundaryRole`                               | Extends the upper/lower concept to include lateral faces.                                                                                                     |
| `relationship`                               | Records *how* the legal boundary relates to the referenced building element: inner surface, centre plane, upper surface, underside, etc.                      |
| `referenceFeatureRef`                        | Links the legal definition to the wall/floor/ceiling or other occupation/building evidence without treating that evidence as the cadastral boundary.          |
| `boundaryFaceRef`                            | Links the semantic legal definition directly to the corresponding `Face` in the Point **to** Edge **to** Ring **to** Face **to** Shell **to** Solid topology. |

For multipart strata units, we have also included `derivedGeometry.components[]`, each containing a `solidRef` and its relevant `inputDefinitionRefs`.

## New `definitionType` for building-referenced boundaries

The existing discriminator currently differentiates `relative`, `AHD` and `jurisdictional` definitions.
We suggest adding:

```json
{
  "definitionType": "vertical-definition-type:brb"
}
```

where `brb` means **building referenced boundary**. 
The cadastral boundary is established by a defined relationship to a particular building surface, plane, or element.

For example, a building surface could be:

- an inner surface of a wall;
- the centre plane of a wall;
- the external surface of a building;
- the upper surface of a floor;
- the underside of a ceiling;
- the upper surface of a slab;
- a roof surface.

## Use a common `limits` array

For built strata because there are expected to be many surfaces that define the limits of a strata unit, therefore it is expected that 'limits' specification will be a nested array.

```json
{
  "verticalBoundaryDefinitions": [
    {
      "id": "boundary-definition-lot-1-part-1",
      "definitionType": "vertical-definition-type:brb",
      "limits": [
        {
          "id": "limit-floor-1",
          "boundaryRole": "boundary-role:lower",
          "relationship": "building-boundary-reference:upperSurface",
          "buildingElementType": "building-element:floor",
          "referenceFeatureRef": "occupation-floor-12",
          "boundaryFaceRef": "face-101",
          "description": "upper surface of floor"
        },
        {
          "id": "limit-ceiling-1",
          "boundaryRole": "boundary-role:upper",
          "relationship": "building-boundary-reference:underSurface",
          "buildingElementType": "building-element:ceiling",
          "referenceFeatureRef": "occupation-ceiling-12",
          "boundaryFaceRef": "face-102",
          "description": "under surface of ceiling"
        },
        {
          "id": "limit-wall-east",
          "boundaryRole": "boundary-role:lateral",
          "relationship": "building-boundary-reference:centrePlane",
          "buildingElementType": "building-element:wall",
          "referenceFeatureRef": "occupation-wall-27",
          "boundaryFaceRef": "face-103",
          "description": "centre plane of wall"
        },
        {
          "id": "limit-wall-west",
          "boundaryRole": "boundary-role:lateral",
          "relationship": "building-boundary-reference:innerSurface",
          "buildingElementType": "building-element:wall",
          "referenceFeatureRef": "occupation-wall-31",
          "boundaryFaceRef": "face-104",
          "description": "inner surface of wall"
        }
      ],
      "source": {
        "sourceType": "strataPlanBoundaryDefinition",
        "sourceReference": "source-strata-plan-boundary-1",
        "sourceAuthorityType": "registeredStrataPlan",
        "sourceStatement": "Boundaries are the inner surfaces of walls, upper surfaces of floors and under surfaces of ceilings except where otherwise shown.",
        "sourceLocation": {
          "planReference": "SP83687",
          "sheet": "3",
          "note": "2"
        },
        "scope": "parcelPart",
        "appliesTo": [
          "parcel-lot-1-part-1"
        ]
      },
      "resolutionStatus": "resolved",
      "provenanceRef": "prov-boundary-definition-lot-1"
    }
  ]
}
```

This provides a useful hierarchy: _source definition_ **to** _individual limits_ **to** _derived boundary face_ **to** _solid_

## Broaden `limitRole` into `boundaryRole`

The existing `vertical-limit-role` vocabulary distinguishes only lower and upper limits. 
The current `spatialRepresentationDefinitions` specification for the existing parcel specification describes the boundary-definition array in terms of lower and upper limits.
For built strata, that is insufficient; hence there is potentially a need to add additional a vocabulary, `boundary-role`, for built strata.

```json
[
  "boundary-role:lower",
  "boundary-role:upper",
  "boundary-role:lateral"
]
```

## Add a controlled `relationship` to the referenced building element

We suggest the addition of a new semantic property, `relationship` for built strata.

```json
{
  "relationship": "building-boundary-reference:innerSurface"
}
```

with an initial vocabulary containing:

- innerSurface
- outerSurface
- centrePlane
- upperSurface
- underSurface
- externalSurface
- surface
- plane

This supports the controlled classifications contemplated in the [built strata use case](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/use-cases/built-strata.md): `innerFace`, `centreLine`, `upperSurface`, `underSurface`, `AHDHeight`, while retaining free text for the actual plan wording.

We propose naming this property `relationship`, rather than `heightReference`, because a wall-centre plane is not a height reference.

For example:

```json
{
  "boundaryRole": "boundary-role:lateral",
  "relationship": "building-boundary-reference:centrePlane"
}
```

as this says something semantically useful even before any geometry has been generated.

## Add `referenceFeatureRef`

Because walls, slabs, ceilings, and similar objects are supporting building/occupation evidence, they should not automatically become cadastral boundaries.
We therefore recommend adding:

```json
{
  "referenceFeatureRef": "occupation-wall-27"
}
```

This differs from `boundaryFaceRef`. The distinction can be described as follows:

```text
referenceFeatureRef
        ↓
observed / represented building feature
        ↓
legal relationship such as centrePlane
        ↓
boundaryFaceRef
        ↓
topological cadastral boundary face
```

For example:
```json
{
  "referenceFeatureRef": "occupation-wall-27",
  "relationship": "building-boundary-reference:centrePlane",
  "boundaryFaceRef": "face-103"
}
```

Which means `occupation-wall-27` is the observed building feature. 
The legal rule is its centre plane. 
`face-103` is the resulting cadastral boundary.

## Add `boundaryFaceRef`

For 3D implementation we think this is important for implementation, as the `solidRef` alone does not identify how a boundary was defined.
To make definition explict, the boundary definition should directly map to the relevant topological face.

```json
{
  "boundaryFaceRef": "face-103"
}
```

This supports the 3D CSDM requirement that a common wall or slab face can be consistently referenced by both adjoining parcels.

## Keep source information at the definition level

The `source` object is where we think the `limits` approach is very helpful.

A typical strata note may apply to ten or 100 faces. 
It should not be necessary to repeat:

```json
{
  "sourceStatement": "..."
}
```

against every wall or floor.

Instead, include it once for the set of boundaries to which it applies:

```json
{
  "definitionType": "vertical-definition-type:brb",
  "limits": [
    ...
  ],
  "source": {
    ...
  }
}
```

The built strata `source` subtype could contain:
```json
{
  "source": {
    "sourceType": "strataPlanBoundaryDefinition",
    "sourceReference": "source-strata-plan-boundary-1",
    "sourceAuthorityType": "registeredStrataPlan",
    "sourceStatement": "...",
    "sourceLocation": {
      "planReference": "SP12345",
      "sheet": "4",
      "note": "2"
    },
    "scope": "scheme",
    "appliesTo": [
      "parcel-lot-1",
      "parcel-lot-2"
    ]
  }
}
```

We recommend that `scope` is controlled:

```text
scheme
parcel
parcelPart
boundary
```
This directly addresses the open issue in the use case about whether boundary wording applies at scheme/header, parcel-part or individual boundary level. 
The current recommendation is already to use scheme-level wording where generally applicable and boundary-level wording where the rule varies.

A particular limit could optionally override the common source:

```json
{
  "id": "limit-wall-east",
  "sourceReference": "special-boundary-note-4",
  ...
}
```

but that should be exceptional rather than the normal pattern.

## Allow heterogeneous definitions for one strata unit

An advantage of keeping `verticalBoundaryDefinitions` as an array is that a single lot need not use one boundary mechanism.

For example:

```json
{
  "verticalBoundaryDefinitions": [
    {
      "definitionType": "vertical-definition-type:brb",
      ...
    },
    {
      "definitionType": "vertical-definition-type:ahd",
      ...
    }
  ]
}
```

A strata parcel could therefore have:

- walls defined by inner surfaces;
- floor defined by upper surface of slab;
- ceiling defined by underside of ceiling;
- a balcony having an AHD upper limit; and
- perhaps some unusual jurisdictional condition.

That fits the modular principle, which is preferred over the definition of a monolithic "builtStrata" object. 
This approach is also in line with the [initial use case](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/development/2-5d-liminal/2-5d-liminal-overview.md) which recommends against collapsing the different legal/source distinctions.

## `derivedGeometry` should reference the 3D CSDM Solids

For a single-component strata unit:

```json
{
  "derivedGeometry": {
    "status": "solidGenerated",
    "geometryType": "Solid",
    "solidRef": "solid-lot-1",
    "inputDefinitionRefs": [
      "boundary-definition-lot-1"
    ],
    "sourceReference": "source-strata-plan-boundary-1",
    "provenanceRef": "prov-build-solid-lot-1"
  }
}
```

This is the same pattern used in the [initial use case](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/development/2-5d-liminal/2-5d-liminal-overview.md): derived geometry references its source definitions and resulting solid.

However, built strata introduce a common additional requirement: one legal lot may have multiple spatially disconnected parts, such as a unit, car bay, storage unit, and balcony. 
The use case explicitly requires multi-level and multi-part lots to remain connected to the same legal lot.

For that reason we recommend extending `derivedGeometry` slightly.

### Preferred multipart form

```json
{
  "derivedGeometry": {
    "status": "solidGenerated",
    "geometryType": "MultiSolid",
    "components": [
      {
        "componentId": "lot-1-main-unit",
        "solidRef": "solid-lot-1-main",
        "componentRole": "principalUnit",
        "inputDefinitionRefs": [
          "boundary-definition-lot-1-main"
        ]
      },
      {
        "componentId": "lot-1-car-bay",
        "componentRole": "carBay",
        "solidRef": "solid-lot-1-carbay",
        "inputDefinitionRefs": [
          "boundary-definition-lot-1-carbay"
        ]
      },
      {
        "componentId": "lot-1-storage",
        "componentRole": "storage",
        "solidRef": "solid-lot-1-storage",
        "inputDefinitionRefs": [
          "boundary-definition-lot-1-storage"
        ]
      }
    ],
    "sourceReference": "source-strata-plan-12345",
    "provenanceRef": "prov-build-lot-1-solids"
  }
}
```

The underlying geometry remains ordinary 3D CSDM topology. 
`components` is metadata describing how those solids collectively represent one legal cadastral parcel.

`components` identify one or more spatial units that collectively realise the spatial representation of the cadastral parcel. 
Each component references a 3D CSDM Solid and may identify the boundary definitions from which that solid was generated. 
A component does not imply a separate cadastral parcel or legal interest.

`componentRole` can be used to describe the role of the component within the cadastral parcel, such as "principalUnit", "carBay", or "storage".

Possible values might include:

```text
principalUnit
carBay
storage
balcony
courtyard
roofSpace
other
```

## Relationship to `verticalExtent`

We suggest keeping `verticalExtent` as the summary of the parcel vertical state, rather than attempting to list all strata faces.

For example:

```json
{
  "verticalExtent": {
    "status": "vertical-extent-status:dfld",
    "lowerBoundary": {
      "state": "vertical-boundary-state:drv",
      "definitionRef": "boundary-definition-lot-1",
      "limitRef": "limit-floor-1",
      "geometryRef": "face-101"
    },
    "upperBoundary": {
      "state": "vertical-boundary-state:drv",
      "definitionRef": "boundary-definition-lot-1",
      "limitRef": "limit-ceiling-1",
      "geometryRef": "face-102"
    }
  }
}
```

Lateral walls should not appear in `verticalExtent` as they do not necessarily represent the minimum/maximum vertical extent.
This preserves the [initial use case](https://github.com/surroundaustralia/3d-csdm-profile-wa/blob/main/proposals/development/2-5d-liminal/2-5d-liminal-overview.md) idea that lower and upper vertical states have a distinct summary purpose.

## Complete built-strata example

```json
{
  "spatialRepresentationDefinitions": {
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
        "definitionRef": "boundary-definition-lot-1",
        "limitRef": "limit-floor-1",
        "geometryRef": "face-101"
      },
      "upperBoundary": {
        "state": "vertical-boundary-state:drv",
        "definitionRef": "boundary-definition-lot-1",
        "limitRef": "limit-ceiling-1",
        "geometryRef": "face-102"
      }
    },
    "computabilityStatus": "computability-status:cd",
    "verticalBoundaryDefinitions": [
      {
        "id": "boundary-definition-lot-1",
        "definitionType": "vertical-definition-type:brb",
        "limits": [
          {
            "id": "limit-floor-1",
            "boundaryRole": "boundary-role:lower",
            "relationship": "building-boundary-reference:upperSurface",
            "buildingElementType": "building-element:floor",
            "referenceFeatureRef": "occupation-floor-12",
            "boundaryFaceRef": "face-101",
            "description": "upper surface of floor"
          },
          {
            "id": "limit-ceiling-1",
            "boundaryRole": "boundary-role:upper",
            "relationship": "building-boundary-reference:underSurface",
            "buildingElementType": "building-element:ceiling",
            "referenceFeatureRef": "occupation-ceiling-12",
            "boundaryFaceRef": "face-102",
            "description": "under surface of ceiling"
          },
          {
            "id": "limit-wall-east",
            "boundaryRole": "boundary-role:lateral",
            "relationship": "building-boundary-reference:centrePlane",
            "buildingElementType": "building-element:wall",
            "referenceFeatureRef": "occupation-wall-27",
            "boundaryFaceRef": "face-103",
            "description": "centre plane of party wall"
          },
          {
            "id": "limit-wall-west",
            "boundaryRole": "boundary-role:lateral",
            "relationship": "building-boundary-reference:innerSurface",
            "buildingElementType": "building-element:wall",
            "referenceFeatureRef": "occupation-wall-31",
            "boundaryFaceRef": "face-104",
            "description": "inner surface of external wall"
          },
          {
            "id": "limit-wall-north",
            "boundaryRole": "boundary-role:lateral",
            "relationship": "building-boundary-reference:innerSurface",
            "buildingElementType": "building-element:wall",
            "referenceFeatureRef": "occupation-wall-35",
            "boundaryFaceRef": "face-105",
            "description": "inner surface of external wall"
          },
          {
            "id": "limit-wall-south",
            "boundaryRole": "boundary-role:lateral",
            "relationship": "building-boundary-reference:innerSurface",
            "buildingElementType": "building-element:wall",
            "referenceFeatureRef": "occupation-wall-38",
            "boundaryFaceRef": "face-106",
            "description": "inner surface of external wall"
          }
        ],
        "source": {
          "sourceType": "strataPlanBoundaryDefinition",
          "sourceReference": "source-strata-plan-boundary-1",
          "sourceAuthorityType": "registeredStrataPlan",
          "sourceStatement": "Boundaries are the inner surfaces of walls, upper surfaces of floors and under surfaces of ceilings except where otherwise shown.",
          "sourceLocation": {
            "planReference": "SP12345",
            "sheet": "4",
            "note": "2"
          },
          "scope": "parcelPart",
          "appliesTo": [
            "parcel-lot-1"
          ]
        },
        "resolutionStatus": "resolved",
        "provenanceRef": "prov-boundary-definition-lot-1"
      }
    ],
    "referenceSurfaces": [],
    "derivedGeometry": {
      "status": "solidGenerated",
      "geometryType": "Solid",
      "solidRef": "solid-lot-1",
      "inputDefinitionRefs": [
        "boundary-definition-lot-1"
      ],
      "componentRole": "principalUnit",
      "sourceReference": "source-strata-plan-boundary-1",
      "provenanceRef": "prov-build-solid-lot-1"
    }
  }
}
```