## Introduction

This whitepaper contains a best practice for creating, managing, using and communicating [=ontology alignments=] and [=ontology extensions=] (aka: linksets), for the purpose of linking [=ontologies=] (so _not_ instance data) and using them in conjunction. It is derived from several literature sources and practical implementations on the matter. Furthermore it uses existing (web) standards and combines them to create a practical application. In doing so it proposes a (still lacking) standard approach to [=ontology matching=] (also called 'mapping or 'linking').

It consists of two major parts:

- Sections [1](#learn-what-it-is), [2](#learn-why-to-use-it) and [3](#learn-how-to-make-it) which are 'normative' **_and contain everything one needs to know to put this best practice into practice_**.
- Everything from section 4 onwards, which are definitions, in-depth explanations and other background information for those who need more knowledge. These can be used as reference works.

This document is primarily intended for (information) modellers who want to create these [=linksets=]; software developers who need to use them in their software and people who want to use models and [=ontologies=] in conjunction based on [=linksets=] according to this best practice. Knowledge of information modelling is a plus. Knowledge of LinkedData and the NEN2660-2 is a plus but not necessary. This best practice focuses in particular on models within the built environment, but it can also be used in a broader context.

A set of related and recommended publications are listed in [this section](#further-information) for those who wish to read up on the matter further.

_This initiative was nominated for the [Dutch DigiDareAwards](https://digidareaward.nl/nen2767imbor-in-samenhang-bruikbaar/)._

>ADVISEMENT
>The second release of this whitepaper is a major update regarding the use of technical standards. The [[Alignment format]] and [[EDOAL]] standards are replaced by using standard OWL constructs. While the [[Alignment format]] and [[EDOAL]] result in more readable [=linksets=], the use of [[OWL2-overview]] is much more supported in the standard technology stacks.

> ADVISEMENT
> Although the focus of this paper is on creating [=linksets=] and [=matching=] [=ontologies=] some of its content is applicable to describing instance [=alignments=], too.

### Namespaces

The following namespace prefixes are used throughout this document. 

| Prefix             | Namespace IRI                                | Definition                               |
|--------------------|----------------------------------------------|------------------------------------------|
| rdf                | http://www.w3.org/1999/02/22-rdf-syntax-ns#  | The RDF namespace                        |
| rdfs               | http://www.w3.org/2000/01/rdf-schema#        | The RDFS namespace                       |
| owl                | http://www.w3.org/2002/07/owl#>              | The OWL namespace                        |
| sh                 | http://www.w3.org/ns/shacl#                  | The SHACL namespace                      |
| xsd                | http://www.w3.org/2001/XMLSchema#            | The XML Schema namespace                 |
| skos               | http://www.w3.org/2004/02/skos/core#         | The SKOS vocabulary namespace            |
| dct                | http://purl.org/dc/terms/                    | The Dublin Core Terms namespace          |
| void               | http://rdfs.org/ns/void#                     | The VOID namespace                       |
| nen2660            | https://w3id.org/nen2660/def#                | The NEN2660-2 namespace                  |
| imbor              | https://data.crow.nl/imbor/def/              | The IMBOR namespace                      |
| imbor-term         | https://data.crow.nl/imbor/term/             | The IMBOR vocabulary namespace           |
| imbor-domeinwaarde | https://data.crow.nl/imbor/id/domeinwaarden/ | The IMBOR enumeration values namespace   |
| nen2767            | https://data.nen.nl/nen2767-4/def/           | (Virtual) NEN2767-4 namespace            |
| nen-2767-term      | https://data.nen.nl/nen2767-4/term/          | (Virtual) NEN2767-4 vocabulary namespace |
| {.index} ||