## Summary

This use case examines how Western Australian mining tenement survey data could be represented and validated using the 3D CSDM common model, the WA profile and a proposed WA mining profile.

The central proposal is that each mining tenement be encoded as a `SecondaryCadastralParcel`, rather than a `PrimaryCadastralParcel`. 
This preserves the distinction between the mining tenure and the underlying cadastral parcels or other land interests that it overlaps, affects or coexists with.

The mining profile would reuse existing 3D CSDM structures for geometry, survey observations, marks, documents, provenance, CRS and lifecycle history, while adding mining-specific vocabularies and validation rules for tenement type and status, marking-out evidence, boundary sources, approved surveyor activities, GDA2020 lodgement, MTO transactions and mining geometry roles.

A key requirement is to distinguish the legal tenement boundary from survey evidence, mine-plan information and operational mine geometry. 
The use case is intended to confirm whether this modelling approach, the proposed vocabularies and the validation requirements align with the Department’s legislative and operational expectations.
