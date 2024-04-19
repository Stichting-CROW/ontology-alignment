## Metadata and versioning

The following sections contain an overview how a [=linkset=] should be documented and versioned.

### Metadata

To ensure the best interpretation _and_ reuse of the [=linkset=], this best practice basic metadata entries to declare extra information about the [=linkset=]. For this best practice the following metadata is adopted:

| Metadata            | Explanation                                                                                                                                                                    | URI                                                                     |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Title               | A name/title by which the [=linkset=] is recognisable                                                                                                                          | [rdfs:label](http://www.w3.org/2000/01/rdf-schema#)                     |
| Description         | The matching method and a textual description on the [=alignment=]                                                                                                             | [rdfs:comment](http://www.w3.org/2000/01/rdf-schema#)                   |
| Publisher           | The person or organisation who distributed the [=alignment=]                                                                                                                   | [dct:publisher](http://purl.org/dc/terms/publisher)                     |
| Date                | The date on which the [=alignment=] is issued (`xsd:date`)                                                                                                                     | [dct:issued](http://purl.org/dc/terms/issued)                           |
| Conformance         | A standard to which [=linkset=] conforms. At `void:Linkset`s the expected values are `skos:` `owl:`, which implies respectively [=informal semantics=] or [=formal semantics=] | [dct:conformsTo](http://purl.org/dc/terms/conformsTo)                   |
| instructionalMethod | A description of what the intended use of the [=linkset=] is                                                                                                                   | [dct:instructionalMethod](http://purl.org/dc/terms/instructionalMethod) |
| Version             | A version indicator and/or information about a version                                                                                                                         | [owl:versionInfo](http://www.w3.org/2002/07/owl#versionInfo)            |
| Prior version       | A reference to another (version of) the [=linkset=]                                                                                                                            | [owl:priorVersion](http://www.w3.org/2002/07/owl#PriorVersion)          |
| {.def}      |

More expressive metadata attached to [=linksets=] may reveal the method used for matching the [=ontologies=] (in particular, if these are automatic or manually generated [=linksets=]); they can cover manual assessments about the [=linkset=] (people publishing them can annotate the [=linkset=] to tell what they are good for); or they may contain indications of their intended use which can be matched with that of the current situation.[=linkset=].

> NOTE
> It is advisable to be as specific as possible with regards to the `dct:conformsTo` information. If shapes are available these should be mentioned here for instance.

### Versioning

The versioning of a [=linkset=] and it's source [=ontologies=] can become complicated. In this best practice we opt for a simple method adopting principles from [[OWL2-overview]] and [SemVer][SemVer]. 

In a [=linkset=] the source [=ontologies=] are mentioned, there is a property called `owl:versionInfo`. The value of this (annotation)property should be a (versioned) IRI if possible, otherwise it can be a simple string that identifies the version of the [=ontology=] where the [=linkset=] links to.

For the [=linkset=] itself the [SemVer][SemVer] principles are adopted. This also done on the property `owl:versionInfo`. Semantic Versioning, often abbreviated as [SemVer][SemVer], is a versioning scheme used to convey information about the nature of changes.It follows a three-part version number format: MAJOR.MINOR.PATCH. In the context of this best practice for [=linksets=] this means: 

* MAJOR version: Increments when the [=linkset=] changes, because it links to a new/other version of one of the source [=ontologies=]
* MINOR version: Increments when the [=linkset=] changes, because the [=alignment=]/[=extension=] itself is adjusted (internally)
* PATCH version: Increments bug fixes or minor type errors that do not impact the semantics

Links to a previous version can be provided via the `owl:priorVersion` property. This van be illustrated by the following example.

```turtle
nen2767:    rdf:type            owl:Ontology ;
            owl:versionInfo     "1.6" .

imbor:      rdf:type            owl:Ontology ;
            owl:versionInfo     "2022" .    

:imbor_nen2767-4    rdf:type    owl:Ontology, void:Linkset  ;
            owl:versionInfo     "1.0.0" ;
            owl:priorVersion    "0.1.0" .
```

[SemVer]: https://semver.org/