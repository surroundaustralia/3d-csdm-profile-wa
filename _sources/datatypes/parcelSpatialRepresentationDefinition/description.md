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
