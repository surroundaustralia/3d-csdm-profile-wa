# Discussion Note

## Use of `AggregateSolid` for Multipart Cadastral Geometry

## Introduction

Cadastral units may comprise several spatially separate 3D components that collectively form a single legal or administrative unit.

This situation commonly occurs in strata, condominium, unit-title, commonhold, and other forms of multi-level or multipart property development. 
A single cadastral unit may, for example, comprise a principal occupancy area together with balconies, courtyards, parking spaces, storage areas, or other spatially separated components.

These components do not necessarily touch one another or form a single continuous solid. 
The core 3D CSDM therefore requires a consistent mechanism for associating multiple `Solid` geometries with a single cadastral unit without implying geometric continuity or creating additional cadastral units solely to accommodate the geometry.

The terms `AggregateSolid` and `MultiSolid` have both been considered for this purpose. 
[ISO 19107:2019 Geographic information — Spatial schema](https://www.iso.org/standard/66175.html) provides the corresponding geometric concept through `GM_MultiSolid`, while [ISO 19152-1:2024 Geographic information — Spatial schema](https://www.iso.org/standard/81263.html) provides the related administrative concept of `BA_Unit`, which groups spatial units to which common rights, restrictions, or responsibilities apply.

## Background

### Multipart cadastral units

A cadastral unit may have a single legal identity while its spatial extent consists of several independent volumes.

For example:

```text
Cadastral Unit
    ├── Solid — principal component, lower level
    ├── Solid — principal component, upper level
    ├── Solid — balcony
    ├── Solid — private open space
    └── Solid — parking space
```

The relationship between these solids is not necessarily geometric. 
Their association may arise because the relevant cadastral, tenure, or registration framework treats them collectively as one legal unit.

The core model should therefore distinguish between:

```text
legal or cadastral identity
        and
geometric decomposition
```

A separate cadastral unit should only be created where the relevant jurisdiction recognises the component as having an independent cadastral or legal identity.

### `AggregateSolid`

`AggregateSolid` describes a collection of `Solid` geometries without implying that the members are connected or collectively form a single continuous solid.

This reflects the distinction made in [ISO 19107:2019](https://www.iso.org/standard/66175.html) between aggregate and composite geometries.

An aggregate groups geometry objects without requiring spatial continuity or connectivity. 
This behaviour is appropriate where a cadastral unit comprises multiple spatially separate volumes.

The association between the members of an `AggregateSolid` is therefore established by the feature being represented rather than by a requirement for geometric connectivity.

The term also provides a useful distinction from `CompositeSolid`.

A `CompositeSolid` represents component solids that are spatially connected and collectively behave as a single continuous solid. 
Such connectivity requirements should not be imposed on a multipart cadastral unit unless the underlying geometry actually has those characteristics.

### `MultiSolid`

[ISO 19107:2019](https://www.iso.org/standard/66175.html) uses `GM_MultiSolid` for a homogeneous aggregate of solid geometries. 
Related standards and implementations commonly use the term `MultiSolid`.

`MultiSolid` therefore provides the closest direct correspondence with [ISO 19107:2019](https://www.iso.org/standard/66175.html) terminology.

However, the term primarily indicates that multiple solids are present. 
It does not make the distinction between a grouping being **aggregate** or **composite** for an implementer.

For cadastral applications this distinction is important. 
The presence of multiple solid components should not cause an implementation or validator to infer that those components must:

* touch one another;
* share common boundary faces;
* be spatially contiguous;
* have a connected interior; or
* collectively form a single `Solid`.

The term `AggregateSolid` makes this modelling intention explicit.

From this perspective, `AggregateSolid` may be regarded as the cadastral application-model term corresponding to the aggregate semantics of [ISO 19107:2019](https://www.iso.org/standard/66175.html) `GM_MultiSolid`, rather than as a new geometry concept.

### `CompositeSolid`

A `CompositeSolid` represents a distinctly different geometric situation.

Its components participate in a geometrically connected structure and collectively represent a single continuous solid. 
A composite therefore carries stronger spatial and topological semantics than an aggregate.

The distinction can be summarised as:

| Concept          | General meaning                                                                       |
| ---------------- | ------------------------------------------------------------------------------------- |
| `Solid`          | A single 3D volume                                                                    |
| `AggregateSolid` | A collection of solids associated with one feature, without connectivity requirements |
| `CompositeSolid` | Connected component solids that collectively behave as a single solid                 |

A cadastral model should retain this distinction so that geometry validation does not impose composite-solid rules on what is merely an aggregate of spatial components.

### Relationship to `BA_Unit`

[ISO 19152-1:2024](https://www.iso.org/standard/81263.html) provides a related administrative concept through `BA_Unit`.

A `BA_Unit` groups one or more spatial units to which a homogeneous set of rights, restrictions, or responsibilities applies. 
This may include cases where an ownership unit consists of several spatial components.

The concept is relevant to multipart cadastral representation because it demonstrates the need to separate administrative or legal grouping from spatial representation.

However, `BA_Unit` and `AggregateSolid` operate at different conceptual levels:

```text
BA_Unit or equivalent
    administrative/legal grouping

AggregateSolid
    geometric representation
```

Within a cadastral model, an existing cadastral parcel, cadastral unit, or equivalent feature may already provide the required legal identity. 
Where this is the case, the geometry of that feature may be represented by an `AggregateSolid`.

For example:

```text
CadastralUnit
       │
       └── AggregateSolid
              ├── Solid
              ├── Solid
              ├── Solid
              └── Solid
```

There is therefore no requirement to model every solid as a separate cadastral unit unless the relevant jurisdiction assigns that component an independent legal or cadastral identity.

This distinction is particularly important for strata, condominium, and similar developments, but it is not specific to those forms of tenure.

### Role of individual components

Because an `AggregateSolid` deliberately imposes minimal semantic constraints on its members, it can be useful to describe the function or role of each component within the cadastral unit.

A qualified component relationship could, therefore, provide an optional `componentRole`.

For example:

```json
{
  "type": "AggregateSolid",
  "components": [
    {
      "solidRef": "solid-unit-main",
      "componentRole": "principalUnit"
    },
    {
      "solidRef": "solid-unit-balcony",
      "componentRole": "balcony"
    },
    {
      "solidRef": "solid-unit-parking",
      "componentRole": "parkingSpace"
    }
  ]
}
```

The geometry remains a collection of ordinary `Solid` objects, while `componentRole` provides application semantics describing the purpose of each member.

The core model need not prescribe a comprehensive list of cadastral component roles. 
Instead, it may define the ability to associate a role with a component, while jurisdictional or application profiles define appropriate controlled vocabularies.

Possible roles could include, for example:

```text
principalUnit
balcony
courtyard
privateOpenSpace
parkingSpace
storage
roofSpace
accessoryUnit
other
```

The vocabulary may vary between jurisdictions without changing the underlying geometry model.

## Core model capability

Multipart cadastral geometry should be treated as a general capability of the core 3D cadastral model rather than as a jurisdiction-specific extension.

The core model should be capable of expressing that:

1. one cadastral parcel feature may have an `AggregateSolid` as its spatial representation;
2. an `AggregateSolid` contains one or more `Solid` members;
3. no connectivity or adjacency requirement is imposed between those members;
4. each member may optionally have a role describing its function within the parent cadastral feature;
5. membership of an `AggregateSolid` does not, by itself, imply that a member is an independent cadastral unit; and
6. jurisdictional profiles may impose additional legal, semantic, or validation constraints where required.

This allows the same modelling pattern to support a range of cadastral arrangements, including:

```text
strata
condominium
unit title
commonhold
apartment ownership
multi-level cadastral units
multipart easements or rights
other non-contiguous 3D cadastral units
```

without embedding the terminology or legislative concepts of a particular jurisdiction in the core geometry model.

## Recommendation

It is recommended that **`AggregateSolid` be adopted as a core 3D CSDM capability for representing a cadastral parcel feature whose spatial extent comprises multiple `Solid` geometries that are not required to be spatially connected**.

The core model should define `AggregateSolid` explicitly as corresponding to the aggregate semantics of [ISO 19107:2019](https://www.iso.org/standard/66175.html) `GM_MultiSolid`.

A general definition could be:

> **AggregateSolid**: A collection of one or more `Solid` geometries that collectively represent the spatial extent of a feature. 
> No requirement is imposed that the member solids are contiguous, connected, mutually adjacent, or collectively form a single continuous solid. 
> The concept corresponds to the aggregate semantics of [ISO 19107:2019](https://www.iso.org/standard/66175.html) `GM_MultiSolid`.

The model should distinguish `AggregateSolid` from `CompositeSolid`, for which stronger connectivity and continuity requirements apply.

`MultiSolid` should be identified as the corresponding [ISO 19107:2019](https://www.iso.org/standard/66175.html) terminology rather than used interchangeably with `AggregateSolid` within the 3D CSDM model.

The recommended core pattern is:

```text
CadastralFeature
        │
        └── AggregateSolid
              ├── Solid
              │    componentRole = ...
              ├── Solid
              │    componentRole = ...
              └── Solid
                   componentRole = ...
```

The `componentRole` capability should also be supported by the core model, but its vocabulary should normally be defined or extended by jurisdictional profiles.

This approach provides a jurisdiction-neutral mechanism for representing multipart cadastral units, preserves the distinction between legal identity and geometric decomposition, avoids inappropriate connectivity requirements, and provides a clear mapping to [ISO 19107:2019](https://www.iso.org/standard/66175.html) geometry concepts and [ISO 19152-1:2024](https://www.iso.org/standard/81263.html) land-administration principles.
