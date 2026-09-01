
# Lot On Plan Appelation (Schema)

`icsm.profiles.wa.datatypes.lotOnPlan` *v0.1*

Parcel appellation shall be based on the Landgate parcel identifier model. Each parcel appellation shall be classified as Lot on Survey/Plan, Crown Allotment, or Miscellaneous. New parcels should normally use the Lot-on-Plan form, while legacy Crown Allotment and Miscellaneous identifiers shall remain supported where they are the authoritative legal description.

[*Status*](http://www.opengis.net/def/status): Under development

## Examples

### Example CompoundName
Example appellation.
#### json
```json
{
     "type": "wa:LotOnPlanAppellation",
    "label": "Lot 4 on Plan 1234",
    "hasPart": [
      { "type": "surveyType", "ref": "wa-survey-type:p" },
      { "type": "surveyNumber", "label": "1234" },
      { "type": "lotPrefix", "ref": "wa-parcel-purpose:lot" },
      { "type": "lotNumber", "label": "4" }
    ]

}
```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/lotOnPlan/context.jsonld",
  "type": "wa:LotOnPlanAppellation",
  "label": "Lot 4 on Plan 1234",
  "hasPart": [
    {
      "type": "surveyType",
      "ref": "wa-survey-type:p"
    },
    {
      "type": "surveyNumber",
      "label": "1234"
    },
    {
      "type": "lotPrefix",
      "ref": "wa-parcel-purpose:lot"
    },
    {
      "type": "lotNumber",
      "label": "4"
    }
  ]
}
```

#### ttl
```ttl
@prefix commonpatterns: <https://w3id.org/ogc/utils/label/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix wa-parcel-purpose: <https://linked.data.gov.au/def/csdm/wa-parcel-purpose/> .
@prefix wa-survey-type: <https://linked.data.gov.au/def/csdm/wa-survey-type/> .

[] rdfs:label "Lot 4 on Plan 1234" ;
    dcterms:hasPart [ rdfs:label "4" ;
            commonpatterns:namePartType <http://www.example.com/namedobjects/lotNumber> ],
        [ commonpatterns:namePartRef wa-survey-type:p ;
            commonpatterns:namePartType <http://www.example.com/namedobjects/surveyType> ],
        [ rdfs:label "1234" ;
            commonpatterns:namePartType <http://www.example.com/namedobjects/surveyNumber> ],
        [ commonpatterns:namePartRef wa-parcel-purpose:lot ;
            commonpatterns:namePartType <http://www.example.com/namedobjects/lotPrefix> ] .


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
      - const: wa:LotOnPlanAppellation
  required:
  - type

```

Links to the schema:

* YAML version: [schema.yaml](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/lotOnPlan/schema.json)
* JSON version: [schema.json](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/lotOnPlan/schema.yaml)


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
        "type": {
          "@type": "@id",
          "@id": "commonpatterns:namePartType"
        }
      },
      "@id": "dct:hasPart"
    },
    "dct": "http://purl.org/dc/terms/",
    "commonpatterns": "https://w3id.org/ogc/utils/label/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "vocabs": "https://linked.data.gov.au/def/csdm/",
    "wa-surveypoint-purpose": "vocabs:wa-surveypoint-purpose/",
    "wa-survey-purpose": "vocabs:wa-survey-purpose/",
    "wa-survey-type": "vocabs:wa-survey-type/",
    "wa-procedure-used": "vocabs:wa-procedure-used/",
    "wa-survey-documentation-type": "vocabs:wa-survey-documentation-type/",
    "wa-annotation-role": "vocabs:wa-annotation/",
    "wa-parcel-purpose": "vocabs:wa-parcel-purpose/",
    "wa-parcel-type": "vocabs:wa-parcel-type/",
    "wa-parcel-state": "vocabs:wa-parcel-state/",
    "wa-nonprimary-parcel-type": "vocabs:wa-secondary-parcel-type/",
    "wa-monument-form": "vocabs:wa-monument-form/",
    "wa-vector-purpose": "vocabs:wa-vector-purpose/",
    "wa-vector-type": "vocabs:wa-vector-type/",
    "wa-secondary-parcel-purpose": "vocabs:wa-secondary-parcel-purpose/",
    "wa-secondary-parcel-type": "vocabs:wa-secondary-parcel-type/",
    "wa-secondary-purpose": "vocabs:wa-secondary-purpose/",
    "wa-interest-type": "vocabs:wa-interest-type/",
    "wa-interest": "vocabs:wa-interest/",
    "wa-locality": "vocabs:wa-locality/",
    "wa-local-government": "vocabs:wa-local-government/",
    "@version": 1.1
  }
}
```

You can find the full JSON-LD context here:
[context.jsonld](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/lotOnPlan/context.jsonld)

## Sources

* [CSDM model](https://github.com/icsm-au/3d-csdm)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/3d-csdm-profile-wa](https://github.com/surroundaustralia/3d-csdm-profile-wa)
* Path: `_sources/datatypes/lotOnPlan`

