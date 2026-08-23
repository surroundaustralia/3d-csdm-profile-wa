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
