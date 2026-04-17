
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

[] rdfs:label "Lot 4 on Plan 1234" ;
    dcterms:hasPart [ rdfs:label "1234" ;
            commonpatterns:namePartType "surveyNumber" ],
        [ commonpatterns:namePartRef <wa-parcel-purpose:lot> ;
            commonpatterns:namePartType "lotPrefix" ],
        [ commonpatterns:namePartRef <wa-survey-type:p> ;
            commonpatterns:namePartType "surveyType" ],
        [ rdfs:label "4" ;
            commonpatterns:namePartType "lotNumber" ] .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: Compound Name
allOf:
- $ref: https://surroundaustralia.github.io/3d-csdm-common/build/annotated/csdm/datatypes/compoundName/schema.yaml
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

