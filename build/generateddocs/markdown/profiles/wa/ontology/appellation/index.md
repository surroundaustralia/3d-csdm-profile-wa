
# WA Parcel Appellation Ontology (Model)

`icsm.profiles.wa.ontology.appellation` *v0.1*

Classes for the Landgate parcel identifier forms (Lot on Plan, Crown Allotment, Miscellaneous Tenure), as specialisations of the compound name model.

[*Status*](http://www.opengis.net/def/status): Under development

## Examples

### Lot on Plan appellation
A Lot on Plan appellation is a compound name. Its parts are validated by the compound name rules, and the
part labels must appear in the appellation label.
#### turtle
```turtle
@prefix com: <https://w3id.org/ogc/utils/label/> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix wa: <https://linked.data.gov.au/def/csdm/profiles/wa/> .
@prefix wa-name-part-type: <https://linked.data.gov.au/def/csdm/wa-name-part-type/> .
@prefix wa-survey-type: <https://linked.data.gov.au/def/csdm/wa-survey-type/> .

[] a wa:LotOnPlanAppellation ;
  rdfs:label "Lot 4 on Plan 1234" ;
  dct:hasPart [ com:namePartType wa-name-part-type:surveyType ; com:namePartRef wa-survey-type:deposited-plan ] ,
              [ com:namePartType wa-name-part-type:surveyNumber ; rdfs:label "1234" ] ,
              [ com:namePartType wa-name-part-type:lotNumber ; rdfs:label "4" ] .

```


# For developers

The source code for this Building Block can be found in the following repository:

* URL: [https://github.com/surroundaustralia/3d-csdm-profile-wa](https://github.com/surroundaustralia/3d-csdm-profile-wa)
* Path: `_sources/ontology/appellation`

