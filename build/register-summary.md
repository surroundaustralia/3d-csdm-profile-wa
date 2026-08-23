# WA Implementation Profile for 3D CSDM

This repository contains the working copy of the WA profile of the [Cadastral Survey Data Model Exchange Specification](https://icsm-au.github.io/3d-csdm-common/), 
extending the  [common ICSM profile](https://icsm-au.github.io/3d-csdm-profile-icsm/).
 
This version is being refined as required to meet the requirements of the WA Next Generation Spatial Cadastre. 



The encoding specification and all profiles are compatible with the [OGC API Features](https://opengeospatial.github.io/e-learning/ogcapi-features/text/basic-main.html) data exchange specification, and can thus be implemented by any standards compliant software capable of handling nested object sub-schemas and control of codelist in content.

Profiles are defined in a consistent, machine-readable and validatable way using the [OGC Building Blocks methodology](https://ogcincubator.github.io/bblocks-docs/).


## Building Blocks

### `icsm.profiles.wa.datatypes.spatialRepresentationDefinition` — Spatial Representation Definition

**Type:** schema

Generic, reusable properties that record how a 2D feature's geometry is being interpreted with respect to the vertical dimension: whether the representation is a plain 2D footprint, has contextual z-values, is bounded by a reference surface, carries a legally defined vertical boundary, or has a derived 3D solid — and how confidently that interpretation can be computed. Not specific to parcels; reusable by any 2D feature type gaining a 2.5D or 3D representation.

### `icsm.profiles.wa.datatypes.parcelSpatialRepresentationDefinition` — Parcel Spatial Representation Definition

**Type:** schema

The WA cadastral parcel-specific extension of the generic spatial representation definition pattern. Adds the jurisdictional source basis (rule type, source authority type, and verbatim source statement) needed to trace a parcel's vertical boundary back to a title, plan, statute, Crown Grant, strata statement, or other approved jurisdictional rule.

### `icsm.profiles.wa.datatypes.waAppellationNamespaces` — WA Ref Namespaces

**Type:** schema

Defines the namespaces for use in WA Compound Names

### `icsm.profiles.wa.datatypes.crownAllotment` — Crown Allotment Appellation

**Type:** schema

Parcel appellation shall be based on the Landgate parcel identifier model. Each parcel appellation shall be classified as Lot on Survey/Plan, Crown Allotment, or Miscellaneous. New parcels should normally use the Lot-on-Plan form, while legacy Crown Allotment and Miscellaneous identifiers shall remain supported where they are the authoritative legal description.

### `icsm.profiles.wa.datatypes.dualName` — Dual Name (Compound)

**Type:** schema

A multiple part name, consisting of a set of strings with functional roles that can be combined into single string using a template.

### `icsm.profiles.wa.datatypes.lotOnPlan` — Lot On Plan Appelation

**Type:** schema

Parcel appellation shall be based on the Landgate parcel identifier model. Each parcel appellation shall be classified as Lot on Survey/Plan, Crown Allotment, or Miscellaneous. New parcels should normally use the Lot-on-Plan form, while legacy Crown Allotment and Miscellaneous identifiers shall remain supported where they are the authoritative legal description.

### `icsm.profiles.wa.datatypes.miscellaneousTenure` — Miscellaneous Tenure Appellation

**Type:** schema

Parcel appellation shall be based on the Landgate parcel identifier model. Each parcel appellation shall be classified as Lot on Survey/Plan, Crown Allotment, or Miscellaneous. New parcels should normally use the Lot-on-Plan form, while legacy Crown Allotment and Miscellaneous identifiers shall remain supported where they are the authoritative legal description.

### `icsm.profiles.wa.datatypes.parcelAppellation` — Parcel Appellation Options

**Type:** schema

Parcel appellation shall be based on the Landgate parcel identifier model. Each parcel appellation shall be classified as Lot on Survey/Plan, Crown Allotment, or Miscellaneous. New parcels should normally use the Lot-on-Plan form, while legacy Crown Allotment and Miscellaneous identifiers shall remain supported where they are the authoritative legal description.

### `icsm.profiles.wa.wa-core` — Western Australia Cadastral Survey Data Exchange Profile

**Type:** schema

Implementation Profile of the ICSM Cadastral Survey Data Exchange Model for use in Western Australia

### `icsm.profiles.wa.wa-3d` — WA- 3D profile

**Type:** schema

3D test cases for WA - may constrain to force 3D

### `icsm.profiles.wa.wa-mining` — WA Next Gen Cadastre Mining Profile

**Type:** schema

Sub-profile of the WA profile for CSDM, for use in the mining industry domain,

