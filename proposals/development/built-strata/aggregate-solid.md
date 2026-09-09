# Discussion Note

## Use of `AggregateSolid` for Multipart Built-Strata Geometry

## Introduction

Built-strata cadastral parcels may comprise several spatially separate 3D components, such as principal units, balconies, courtyards, car bays, and storage areas. 
Although these components collectively represent a single legal strata lot, they do not necessarily touch one another or form a single continuous solid.

A consistent term is therefore required to describe a collection of `Solid` geometries associated with one cadastral parcel. 
The terms `AggregateSolid` and `MultiSolid` have both been used during `built-strata` development, while the ISO 19152 Land Administration Domain Model (LADM) provides a related administrative concept through `BA_Unit`.

## Background

### `AggregateSolid`

`AggregateSolid` describes a collection of `Solid` geometries without implying that the individual members are connected or collectively form a single continuous solid.

This reflects the distinction made in [ISO 19107:2019 Geographic information - Spatial schema](https://www.iso.org/standard/66175.html) between aggregate and composite geometries. 
An aggregate is a collection whose members are grouped together without requiring spatial continuity or connectivity. 
This is well suited to built strata, where one cadastral lot may include several disconnected volumes.

For example, one strata lot could comprise:

```text
Strata Lot 1
    ├── Solid — principal unit, ground floor
    ├── Solid — principal unit, upper floor
    ├── Solid — balcony
    ├── Solid — courtyard
    └── Solid — car bay
```

The association between these solids is cadastral rather than geometric.
Each contributes to the spatial representation of the same legal parcel.

The term also provides a useful contrast with `CompositeSolid`. 
A composite represents component solids that are spatially connected and collectively behave as a single continuous solid. 
Such a constraint would be inappropriate for many built-strata parcels.

### `MultiSolid`

ISO 19107 uses `GM_MultiSolid` for the homogeneous aggregate of solid geometries, and related standards and implementations commonly use the term `MultiSolid`. 
Consequently, `MultiSolid` provides the more direct alignment with [ISO 19107](https://www.iso.org/standard/66175.html) terminology.

However, the term primarily communicates that multiple solids are present. 
It does not make the distinction between **aggregate** and **composite** clear to an implementer.

Within a cadastral profile, this distinction is significant. 
A validator should not infer that the members of a multipart strata parcel must:

* touch one another;
* share common boundary faces;
* be spatially contiguous; or
* form a single connected volume.

Using `AggregateSolid` makes those semantics more explicit, even though the corresponding [ISO 19107](https://www.iso.org/standard/66175.html) concept is `GM_MultiSolid`.

From this perspective, `AggregateSolid` can be regarded as a 3D CSDM application-model term corresponding to the aggregate semantics of [ISO 19107](https://www.iso.org/standard/66175.html) `GM_MultiSolid`, rather than as a new form of geometry.

### `BA_Unit`

[ISO 19152-1:2025](https://www.iso.org/standard/81263.html) provides a related concept through `BA_Unit`. 
A `BA_Unit` is an administrative object that groups one or more spatial units to which the same rights, restrictions, or responsibilities apply. 
A common example is an ownership unit comprising an apartment together with another spatial unit such as a garage.

This concept is useful when considering built strata because it separates:

```text
administrative/legal grouping
        from
spatial representation
```

However, `BA_Unit` operates at a different level from `AggregateSolid`.

In the 3D CSDM context, the cadastral parcel already provides the legal identity of the strata lot. 
The aggregate geometry then provides its spatial representation:

```text
CadastralParcel
       │
       └── AggregateSolid
              ├── Solid — principalUnit
              ├── Solid — balcony
              ├── Solid — courtyard
              └── Solid — carBay
```

Introducing a separate cadastral parcel or spatial unit for every geometry component would be appropriate only where the source cadastral framework gives that component an independent legal identity. 
A balcony, courtyard, or car bay that is simply part of a registered strata lot should not become a separate cadastral parcel solely because it is represented by a separate solid.

### Role of individual components

Because an `AggregateSolid` deliberately imposes few spatial rules on its members, it is useful to describe the cadastral function of each component.

A controlled `componentRole` can provide this information, for example:

```json
{
  "type": "AggregateSolid",
  "components": [
    {
      "solidRef": "solid-lot1-main",
      "componentRole": "principalUnit"
    },
    {
      "solidRef": "solid-lot1-courtyard",
      "componentRole": "courtyard"
    },
    {
      "solidRef": "solid-lot1-carbay",
      "componentRole": "carBay"
    }
  ]
}
```

The geometry remains an ordinary collection of 3D CSDM `Solid` objects, while `componentRole` records why each solid forms part of the cadastral parcel.

## Recommendation

It is recommended that **`AggregateSolid` be retained as the preferred 3D CSDM term for the collection of `Solid` geometries that together represent a multipart cadastral parcel**.

The profile should define the term explicitly as corresponding to the aggregate semantics of [ISO 19107](https://www.iso.org/standard/66175.html) `GM_MultiSolid`. 
The definition should make clear that member solids are not required to be contiguous, connected, or capable of forming a single `Solid`.

`MultiSolid` should therefore be treated as the [ISO 19107](https://www.iso.org/standard/66175.html) correspondence rather than used interchangeably throughout the WA profile. 
Consistent use of `AggregateSolid` will make the intended distinction from `CompositeSolid` clearer to implementers and validators.

A suitable definition would be:

> **AggregateSolid** — A collection of one or more `Solid` geometries that collectively represent the spatial extent of a feature. 
> No requirement is imposed that the member solids are contiguous, connected, mutually adjacent, or collectively form a single continuous solid. 
> The concept corresponds to the aggregate semantics of ISO 19107 `GM_MultiSolid`.

For built-strata parcels, the recommended pattern is therefore:

```text
PrimaryCadastralParcel
        │
        └── AggregateSolid
              ├── Solid
              │    componentRole = principalUnit
              ├── Solid
              │    componentRole = balcony
              ├── Solid
              │    componentRole = courtyard
              └── Solid
                   componentRole = carBay
```

This approach preserves the legal identity of the cadastral parcel, provides a clear representation of multipart geometry, avoids inappropriate connectivity requirements, and remains readily mappable to [ISO 19107](https://www.iso.org/standard/66175.html) terminology.
