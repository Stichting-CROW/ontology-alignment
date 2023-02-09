## Ontology alignment

This section gives a very simplified overview what [=ontology matching=] is, what [=ontology alignments=] are ánd what they compose of. Key components are formally defined within the context of this best practice.

### General process

The process in essence is fairly straightforward. It starts with two [=ontologies=] that need [=matching=] because of a [heterogeneity problem](#heterogeneity-problem). There are four kinds of heterogeneity problems ([=syntactic heterogeneity=], [=terminological heterogeneity=], [=semantic heterogeneity=] and [=semiotic heterogeneity=]), and each requires a different mapping strategy. Once the[=ontologies=]are identified, the intended use of the [=alignment=] is clear and the kind of problem is clear, the actual [=ontology matching=] can be conducted. The matching will result in an [=ontology alignment=], which in turn consists of a set of [=correspondence=]s. The [=alignment=] can be seen as a [=mapping=] from one[=ontology=] to another (directed), consisting of a set of [=mapping rule=]s.

<figure>

![](img/matching-proces.drawio.png)

<figcaption>
The matching process in essence
</figcaption>
</figure>

### Heterogeneity problem

There are four different heterogeneity problems that can be considered, the last one ([=semiotic heterogeneity=]) is out of scope for this best practice.

> DEF
> <dfn>Syntactic heterogeneity</dfn> occurs when[=ontologies=] are not expressed in the same [=ontology=] language (e.g. XML, OWL).

> DEF
> <dfn>Terminological heterogeneity</dfn> occurs when different terms refer to the same entity or the same term describes different entities in different ontologies. This may be caused by the use of different natural languages (e.g. Paper vs. Papier), different technical languages (e.g. Paper vs. Memo), or the use of synonyms (Paper vs. Article).

> DEF
> <dfn>Semantic heterogeneity</dfn> (or Conceptual heterogeneity) occurs when there are differences in modelling the same domain of interest. This may be the case when[=ontologies=] describe different domains at the same level of detail and from an unique perspective (difference in coverage), or when[=ontologies=] describe the same domain from the same perspective but at different levels of detail (difference in granularity), or when[=ontologies=] describe the same domain, at the same level of detail, but from a different perspective (difference in perspective or scope).

> DEF
> <dfn>Semiotic heterogeneity</dfn> (or Pragmatic heterogeneity) occurs when there are different (human) interpretations of the same (semantically defined) entity.

_Adapted from [[Ontology matching]]_

### Ontology matching

There is a whole [scientific community](http://www.ontologymatching.org/) about [=ontology matching=]. For this best practices the most important components are selected to create a practical implementation.

> DEF
> An <dfn data-lt="ontologies">Ontology</dfn> typically provides a model describing a domain of interest and a specification of the meaning of terms in that domain. Depending on the precision, the [=ontology=] encompasses several data and conceptual models, including, sets of terms, classifications, thesauri, the properties (attributes) that can be used to describe the entities, and the relationships between those things. An [=ontology=] does not contain actual data about instances of entities.

> DEF
> <dfn data-lt="matching">Ontology matching</dfn> is the process of finding correspondences between semantically related entities of different ontologies. These correspondences may stand for equivalence as well as other relations, such as consequence, subsumption, or disjointness, between [=ontology=] entities. [=Ontology=] entities, in turn, usually denote the named entities of ontologies, such as classes, properties or individuals. However, these entities may also be more complex expressions, such as formulas, concept definitions, queries or term building expressions.[=ontology matching=] results, called an [=ontology alignment=], can thus express with various degrees of precision the relations between the[=ontologies=]under consideration. [=Alignments=] can be used for various tasks, such as [=ontology=]merging, query answering, data translation or for browsing the semantic web.

> DEF
> <dfn data-lt="alignment">Ontology alignment</dfn> is a set of correspondences between two or more ontologies. The [=alignment=] is the output of the matching process.

> DEF
> <dfn>Correspondence</dfn> is the relation holding a particular [=alignment=], between entities of different[=ontologies=](sometimes called the 'link' or 'mapping'.). These entities can be as different as classes, individuals, properties or formulas.

> DEF
> <dfn>Mapping</dfn> is the oriented, or directed, version of an [=alignment=]: it maps the entities of one [=ontology=] to at most one entity of another ontology. A mapping can be seen as a collection of mapping rules all oriented in the same direction, i.e., from one [=ontology=] to the other, and such that the elements of the source [=ontology=] appear at most once.

> DEF
> <dfn>Mapping rule</dfn> is a correspondence which maps an entity of one[=ontology=]into an other one from another ontology.

_Adapted from [[Ontology matching]]_
