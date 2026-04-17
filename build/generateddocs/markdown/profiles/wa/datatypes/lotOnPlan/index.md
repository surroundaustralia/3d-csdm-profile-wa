
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
@prefix commonpatterns: <https://linked.data.gov.au/def/csdm/commonpatterns/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix wa-parcel-purpose: <https://linked.data.gov.au/def/csdm/wa-parcel-purpose/> .
@prefix wa-survey-type: <https://linked.data.gov.au/def/csdm/wa-survey-type/> .

[] rdfs:label "Lot 4 on Plan 1234" ;
    dcterms:hasPart [ rdfs:label "1234" ;
            commonpatterns:namePartType "surveyNumber" ],
        [ rdfs:label "4" ;
            commonpatterns:namePartType "lotNumber" ],
        [ commonpatterns:namePartRef wa-survey-type:p ;
            commonpatterns:namePartType "surveyType" ],
        [ commonpatterns:namePartRef wa-parcel-purpose:lot ;
            commonpatterns:namePartType "lotPrefix" ] .


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
[context.jsonld](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/lotOnPlan/context.jsonld)

## Sources

* [CSDM model](https://github.com/icsm-au/3d-csdm)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/3d-csdm-profile-wa](https://github.com/surroundaustralia/3d-csdm-profile-wa)
* Path: `_sources/datatypes/lotOnPlan`

