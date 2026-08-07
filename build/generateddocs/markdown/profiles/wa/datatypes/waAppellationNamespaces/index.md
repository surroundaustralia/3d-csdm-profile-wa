
# WA Ref Namespaces (Schema)

`icsm.profiles.wa.datatypes.waAppellationNamespaces` *v0.1*

Defines the namespaces for use in WA Compound Names

[*Status*](http://www.opengis.net/def/status): Under development

## Schema

```yaml
$schema: https://json-schema.org/draft/2020-12/schema
description: Parcel Appellation Options
$ref: https://ogcincubator.github.io/bblocks-utility/build/annotated/bbr/utils/compoundName/schema.yaml
x-jsonld-prefixes:
  vocabs: https://linked.data.gov.au/def/csdm/
  wa-surveypoint-purpose: https://linked.data.gov.au/def/csdm/wa-surveypoint-purpose/
  wa-survey-purpose: https://linked.data.gov.au/def/csdm/wa-survey-purpose/
  wa-survey-type: https://linked.data.gov.au/def/csdm/wa-survey-type/
  wa-procedure-used: https://linked.data.gov.au/def/csdm/wa-procedure-used/
  wa-survey-documentation-type: https://linked.data.gov.au/def/csdm/wa-survey-documentation-type/
  wa-annotation-role: https://linked.data.gov.au/def/csdm/wa-annotation/
  wa-parcel-purpose: https://linked.data.gov.au/def/csdm/wa-parcel-purpose/
  wa-parcel-type: https://linked.data.gov.au/def/csdm/wa-parcel-type/
  wa-parcel-state: https://linked.data.gov.au/def/csdm/wa-parcel-state/
  wa-nonprimary-parcel-type: https://linked.data.gov.au/def/csdm/wa-secondary-parcel-type/
  wa-monument-form: https://linked.data.gov.au/def/csdm/wa-monument-form/
  wa-vector-purpose: https://linked.data.gov.au/def/csdm/wa-vector-purpose/
  wa-vector-type: https://linked.data.gov.au/def/csdm/wa-vector-type/
  wa-secondary-parcel-purpose: https://linked.data.gov.au/def/csdm/wa-secondary-parcel-purpose/
  wa-secondary-parcel-type: https://linked.data.gov.au/def/csdm/wa-secondary-parcel-type/
  wa-secondary-purpose: https://linked.data.gov.au/def/csdm/wa-secondary-purpose/
  wa-interest-type: https://linked.data.gov.au/def/csdm/wa-interest-type/
  wa-interest: https://linked.data.gov.au/def/csdm/wa-interest/
  wa-locality: https://linked.data.gov.au/def/csdm/wa-locality/
  wa-local-government: https://linked.data.gov.au/def/csdm/wa-local-government/

```

Links to the schema:

* YAML version: [schema.yaml](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/waAppellationNamespaces/schema.json)
* JSON version: [schema.json](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/waAppellationNamespaces/schema.yaml)


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
[context.jsonld](https://surroundaustralia.github.io/3d-csdm-profile-wa/build/annotated/profiles/wa/datatypes/waAppellationNamespaces/context.jsonld)

## Sources

* [CSDM model](https://github.com/icsm-au/3d-csdm)

# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/3d-csdm-profile-wa](https://github.com/surroundaustralia/3d-csdm-profile-wa)
* Path: `_sources/datatypes/waAppellationNamespaces`

