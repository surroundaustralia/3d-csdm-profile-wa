
# Miscellaneous Tenure Appellation (Schema)

`icsm.profiles.wa.datatypes.miscellaneousTenure` *v0.1*

Parcel appellation shall be based on the Landgate parcel identifier model. Each parcel appellation shall be classified as Lot on Survey/Plan, Crown Allotment, or Miscellaneous. New parcels should normally use the Lot-on-Plan form, while legacy Crown Allotment and Miscellaneous identifiers shall remain supported where they are the authoritative legal description.

[*Status*](http://www.opengis.net/def/status): Under development

## Examples

### Example CompoundName
Example appellation.
#### json
```json
{
  "type": "wa:MiscellaneousTenureAppellation",
  "label": "L-3114-12345",
  "hasPart": [
    {
      "type": "tenureClass",
      "ref": "wa-parcel-type:l"
    },
    {
      "type": "documentOrGrantReference",
      "label": "3114"
    },
    {
      "type": "legalDescriptor",
      "label": "12345"
    }
  ]
}
```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/miscellaneousTenure/context.jsonld",
  "type": "wa:MiscellaneousTenureAppellation",
  "label": "L-3114-12345",
  "hasPart": [
    {
      "type": "tenureClass",
      "ref": "wa-parcel-type:l"
    },
    {
      "type": "documentOrGrantReference",
      "label": "3114"
    },
    {
      "type": "legalDescriptor",
      "label": "12345"
    }
  ]
}
```

#### ttl
```ttl
@prefix commonpatterns: <https://linked.data.gov.au/def/csdm/commonpatterns/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix wa-parcel-type: <https://linked.data.gov.au/def/csdm/wa-parcel-type/> .

[] rdfs:label "L-3114-12345" ;
    dcterms:hasPart [ rdfs:label "12345" ;
            commonpatterns:namePartType "legalDescriptor" ],
        [ rdfs:label "3114" ;
            commonpatterns:namePartType "documentOrGrantReference" ],
        [ commonpatterns:namePartRef wa-parcel-type:l ;
            commonpatterns:namePartType "tenureClass" ] .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: Compound Name
allOf:
- $ref: https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/waAppellationNamespaces/schema.yaml
- properties:
    type:
      allOf:
      - $ref: https://opengeospatial.github.io/bblocks/annotated-schemas/ogc-utils/iri-or-curie/schema.yaml
      - const: wa:MiscellaneousTenureAppellation
  required:
  - type

```

Links to the schema:

* YAML version: [schema.yaml](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/miscellaneousTenure/schema.json)
* JSON version: [schema.json](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/miscellaneousTenure/schema.yaml)


# JSON-LD Context

```jsonld
{
  "@context": {
    "name": "commonpatterns:name",
    "CompoundName": "commonpatterns:CompoundName",
    "label": "rdfs:label",
    "hasPart": {
      "@context": {
        "ref": {
          "@type": "@id",
          "@id": "commonpatterns:namePartRef"
        },
        "type": "commonpatterns:namePartType"
      },
      "@id": "dct:hasPart"
    },
    "dct": "http://purl.org/dc/terms/",
    "commonpatterns": "csdm:commonpatterns/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "csdm": "https://linked.data.gov.au/def/csdm/",
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
    "wa-vector-purpose": "csdm:wa-vector-purpose/",
    "wa-vector-type": "csdm:wa-vector-type/",
    "wa-secondary-parcel-purpose": "csdm:wa-secondary-parcel-purpose/",
    "wa-secondary-parcel-type": "csdm:wa-secondary-parcel-type/",
    "wa-secondary-purpose": "csdm:wa-secondary-purpose/",
    "wa-interest-type": "csdm:wa-interest-type/",
    "wa-interest": "csdm:wa-interest/",
    "wa-locality": "csdm:wa-locality/",
    "wa-local-government": "csdm:wa-local-government/",
    "@version": 1.1
  }
}
```

You can find the full JSON-LD context here:
[context.jsonld](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/miscellaneousTenure/context.jsonld)

## Sources

* [CSDM model](https://github.com/icsm-au/3d-csdm)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/3d-csdm-profile-wa](https://github.com/surroundaustralia/3d-csdm-profile-wa)
* Path: `_sources/datatypes/miscellaneousTenure`

