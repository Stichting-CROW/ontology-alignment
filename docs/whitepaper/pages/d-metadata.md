## Metadata and versioning

This section gives an overview how an [=alignment=] should be documented and versioned.

To ensure the best interpretation _and_ reuse of the [=alignment=], the [[alignment format]] allows to declare extra information about the [=alignment=]. The [Alignment API](https://moex.gitlabpages.inria.fr/alignapi/labels.html) provides a minimal set based on [[DCTERMS]], which consists of a version description via `owl:versionInfo`, a title via `dct:title`, an indication of the matching method and description via `dct:description`, a publisher via `dct:publisher` and a publish date via `dct:date`. They also use `align:level` to indicate the specific [[alignment format]] level. The property `void:feature` is used to note the format in which the data is serialized. For this best practice the following metadata is adopted:

| Metadata    | Explanation                                                        | URI                                                                     |
| ----------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Version     | A version indicator and/or information about a version             | [owl:versionInfo](http://www.w3.org/2002/07/owl#versionInfo)            |
| Title       | A name/title by which the [=alignment=] is recognisable            | [dct:title](http://purl.org/dc/terms/title)                             |
| Description | The matching method and a textual description on the [=alignment=] | [dct:description](http://purl.org/dc/terms/description)                 |
| Publisher   | The person or organisation who distributed the [=alignment=]       | [dct:publisher](http://purl.org/dc/terms/publisher)                     |
| Date        | The date on which the [=alignment=] is published (`xsd:date`)      | [dct:date](http://purl.org/dc/terms/date)                               |
| Align level | [[Alignment format]] notation of the [=alignment=] level           | [align:level](https://moex.gitlabpages.inria.fr/alignapi/format#levels) |
| Format      | RDF serialization format                                           | [void:feature](http://rdfs.org/ns/void#feature)                         |
| {.def}      |

More expressive metadata attached to [=alignments=] may reveal the method used for matching the [=ontologies=] (in particular, if these are automatic or manually generated [=alignments=]); they can cover manual assessments about the [=alignment=] (people publishing them can annotate the [=alignments=] to tell what they are good for); or they may contain indications of their intended use which can be matched with that of the current situation.[=alignment=].
