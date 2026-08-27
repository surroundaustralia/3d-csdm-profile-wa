
# Dual Name (Compound) (Schema)

`icsm.profiles.wa.datatypes.dualName` *v0.1*

A multiple part name, consisting of a set of strings with functional roles that can be combined into single string using a template.

[*Status*](http://www.opengis.net/def/status): Under development

## Examples

### Example CompoundName
A name with a label, but also a set of parts with roles that can be validated against content rules.
#### json
```json
{
  "id": "wa:place-name:mammang-koort-king-george-sound",
  "type": "place:placeName",
  "label": "Mammang Koort / King George Sound",
  "hasPart": [
    {
      "type":  "wa:indigenousName",
      "label": "Mammang Koort"
    },
    {
      "type": "wa:placeName",
      "label": "King George Sound"
    }
  ]
}
```

#### jsonld
```jsonld
{
  "@context": "https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/dualName/context.jsonld",
  "id": "wa:place-name:mammang-koort-king-george-sound",
  "type": "place:placeName",
  "label": "Mammang Koort / King George Sound",
  "hasPart": [
    {
      "type": "wa:indigenousName",
      "label": "Mammang Koort"
    },
    {
      "type": "wa:placeName",
      "label": "King George Sound"
    }
  ]
}
```

#### ttl
```ttl
@prefix commonpatterns: <https://w3id.org/ogc/utils/label/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

[] rdfs:label "Mammang Koort / King George Sound" ;
    dcterms:hasPart [ rdfs:label "Mammang Koort" ;
            commonpatterns:namePartType <wa:indigenousName> ],
        [ rdfs:label "King George Sound" ;
            commonpatterns:namePartType <wa:placeName> ] .


```

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: Compound Name
allOf:
- $ref: https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/waAppellationNamespaces/schema.yaml

```

Links to the schema:

* YAML version: [schema.yaml](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/dualName/schema.json)
* JSON version: [schema.json](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/dualName/schema.yaml)


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
[context.jsonld](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/dualName/context.jsonld)

## Sources

* [CSDM model](https://github.com/icsm-au/3d-csdm)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/3d-csdm-profile-wa](https://github.com/surroundaustralia/3d-csdm-profile-wa)
* Path: `_sources/datatypes/dualName`

