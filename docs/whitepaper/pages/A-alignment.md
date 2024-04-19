## Alignments

### Ontology alignment

This section gives a very simplified overview what [=ontology matching=] is, what [=ontology alignments=] are ánd what they compose of. Key components are formally defined within the context of this best practice.

#### General process

The process in essence is fairly straightforward. It starts with two [=ontologies=] that need [=matching=] because of a [heterogeneity problem](#heterogeneity-problem). There are four kinds of heterogeneity problems ([=syntactic heterogeneity=], [=terminological heterogeneity=], [=semantic heterogeneity=] and [=semiotic heterogeneity=]), and each requires a different mapping strategy. Once the[=ontologies=]are identified, the intended use of the [=alignment=] is clear and the kind of problem is clear, the actual [=ontology matching=] can be conducted. The matching will result in an [=ontology alignment=], which in turn consists of a set of [=correspondence=]s. The [=alignment=] can be seen as a [=mapping=] from one [=ontology=] to another (directed), consisting of a set of [=mapping rule=]s.

<figure>

![](img/matching-proces.drawio.png)

<figcaption>
The matching process in essence
</figcaption>
</figure>

#### Heterogeneity problem

There are four different heterogeneity problems that can be considered, the last one ([=semiotic heterogeneity=]) is out of scope for this best practice.

> DEF
> <dfn>Syntactic heterogeneity</dfn> occurs when [=ontologies=] are not expressed in the same [=ontology=] language (e.g. XML-Schema, OWL).

> DEF
> <dfn>Terminological heterogeneity</dfn> occurs when different terms refer to the same entity or the same term describes different entities in different ontologies. This may be caused by the use of different natural languages (e.g. Paper vs. Papier), different technical languages (e.g. Paper vs. Memo), or the use of synonyms (Paper vs. Article).

> DEF
> <dfn>Semantic heterogeneity</dfn> (or Conceptual heterogeneity) occurs when there are differences in modelling the same domain of interest. This may be the case when[=ontologies=] describe different domains at the same level of detail and from an unique perspective (difference in coverage), or when[=ontologies=] describe the same domain from the same perspective but at different levels of detail (difference in granularity), or when[=ontologies=] describe the same domain, at the same level of detail, but from a different perspective (difference in perspective or scope).

> DEF
> <dfn>Semiotic heterogeneity</dfn> (or Pragmatic heterogeneity) occurs when there are different (human) interpretations of the same (semantically defined) entity.

_Adapted from [Ontology matching]_

#### Ontology matching

There is a whole [scientific community](http://www.ontologymatching.org/) about [=ontology matching=]. For this best practices the most important components are selected to create a practical implementation.

> DEF
> An <dfn data-lt="ontologies">Ontology</dfn> typically provides a model describing a domain of interest and a specification of the meaning of terms in that domain. Depending on the precision, the [=ontology=] encompasses several data and conceptual models, including, sets of terms, classifications, thesauri, the properties (attributes) that can be used to describe the entities, and the relationships between those things. An [=ontology=] does not (usually) contain actual data about instances of entities.

> DEF
> <dfn data-lt="matching">Ontology matching</dfn> is the process of finding correspondences between semantically related entities of different ontologies. These correspondences may stand for equivalence as well as other relations, such as consequence, subsumption, or disjointness, between [=ontology=] entities. [=Ontology=] entities, in turn, usually denote the named entities of ontologies, such as classes, properties or individuals. However, these entities may also be more complex expressions, such as formulas, concept definitions, queries or term building expressions.[=ontology matching=] results, called an [=ontology alignment=], can thus express with various degrees of precision the relations between the[=ontologies=]under consideration. [=Alignments=] can be used for various tasks, such as [=ontology=]merging, query answering, data translation or for browsing the semantic web.

> DEF
> <dfn data-lt="alignment">Ontology alignment</dfn> is a set of correspondences between two or more ontologies. The [=alignment=] is the output of the matching process.

> DEF
> <dfn data-lt="link">Correspondence</dfn> is the relation holding a particular [=alignment=], between entities of different[=ontologies=] (sometimes called the 'link' or 'mapping'.). These entities can be as different as classes, individuals, properties or formulas.

> DEF
> <dfn>Mapping</dfn> is the oriented, or directed, version of an [=alignment=]: it maps the entities of one [=ontology=] to at most one entity of another ontology. A mapping can be seen as a collection of mapping rules all oriented in the same direction, i.e., from one [=ontology=] to the other, and such that the elements of the source [=ontology=] appear at most once.

> DEF
> <dfn>Mapping rule</dfn> is a correspondence which maps an entity of one[=ontology=]into an other one from another ontology.

_Adapted from [[Ontology_matching]]_

### Alignment levels

> NOTE
> The terminology for the different levels is still under consideration. Feedback is welcome.

When modelling a domain, there are a number of 'levels' of complexity (or richness) to consider, ranging from the meaning and intent of the words people use when talking about something to a specification of how data is recorded and exchanged. This section gives an overview of the different levels to distinguish and how the [=alignments=] differ, but _can_ be used to infer information from each other.

#### <dfn>Terminological level</dfn>

> DEF
> The [=terminological level=] describes the reality within the domain in scope (the 'universe of discourse') by means of the terms (or: 'words') used in it and their relationships to each other. The aim is for actors within it to understand each other and speak one language. A model of terms is drawn up for use by people, especially 'the business'. The terms are, most of the times, described in a formal language, a vocabulary. _Adapted from [[MIM]]_

For this best practice [[skos-reference]] is advised, in combination with the [[NEN2660-2]].

##### <dfn>Informal semantics</dfn>

> DEF
> [=Informal semantics=] do not structure or define the dataset on the individual level or add any automation. Using [=informal semantics=] when creating a [=linkset=] results in a mapping that _can_ be used for referencing the [=ontologies=] between upper-ontologies. But _can not_ be used for the creation of individuals or instances or any form of inference.
>Such semantics are helpful when it is not necessary or considered risky to give more meaning or information on relations. When [=informal semantics=] are used, [=mappings=] do not provide a possibility of inference. _Adapted from [[Organising Libraries of Master Data]]_

#### <dfn>Conceptual level</dfn>

> DEF
> The [=conceptual level=] describes the reality within the domain in scope (the 'universe of discourse') by means of the classes and shapes (or: 'conceptuals') used in it and their relationships to each other. Regarding the classes, the aim is for machines and models within it to understand each other have a common understanding of a concept. A model of classes is drawn up for use by machines and formal models (it is also used by people). The classes are described in a formal language, and form an ontology. Regarding the shapes (or: 'data structure') the aim is for machines and models within it to understand each other have a common understanding of what the information needs for an entity are and how this data is shaped. A shape is drawn up for use by machines and formal models (it is also used by people). The shapes are described in a formal language, and form a constrained based ontology to which one can validate there datasets. When on the [=ontologies=] get more explicit the automation potential also rises. This also leads to an increase in the complexity of the [=alignment=]. 

For this best practice [[RDF-schema]] is advised, in combination with the [[NEN2660-2]].

##### <dfn>Formal semantics</dfn>

> DEF
> [=Formal semantics=] are use when the goal is to provide a clear and unambiguous interpretation of the intended meaning, using standard vocabularies which give firm information on the relations. When the links between [=ontologies=] are actual properties, it may lead to new or additional information (which could also mean inference). Formal semantics are helpful when some level of information on the same concept exists in both [=ontologies=]. However, one of them involves more information. When a link with [=formal semantics=] is created, the additional property could also be made available in the [=ontology=]. _Adapted from [[Organising Libraries of Master Data]]_

### Matching methods

This section gives a compact overview what methods for [=ontology matching=] are, and elaborates on how and when they should be used. It is not a definitive list, but rather a selection of techniques as adapted from [[Ontology_matching]]. There are three main categories defined and seven methods in scope for this best practice.

#### <dfn>Element-level</dfn>

Element-level matching techniques focus mainly on the [=ontology=] entity (or its instances) itself. They to this in isolation from their relations with other entities.

> DEF
> <dfn>String-based matching</dfn> techniques rely on matching names or descriptions of entities. They are typically based on the following intuition: the more similar the strings, the more likely they are to denote the same concepts.

> DEF
> <dfn>Linguistic-based matching</dfn> techniques use NLP, lexicons, or domain specific thesauri to match words based on linguistic relations (homonymy, synonymy, partonomy, etc.) or exploiting morphological properties.

> DEF
> <dfn>Constraint-based matching</dfn> techniques take into account internal constraints applied to the definitions of entities, e.g. types, cardinality of properties, etc.

> DEF
> <dfn>Resource-based matching</dfn> techniques use external upper-level or domain-specific [=ontologies=] to bridge classes to be matched.

> ADVISEMENT
> To employ most [=element-level=] techniques it is wise to label the entities in English. For the English language there is much more (open source) information available. Most algorithms work with libraries like [WordNet](https://wordnet.princeton.edu/) and in English there is just much more available for free. In LinkedData it is quite common for entities to have multilingual labels, differentiated with the `@nl` or `@en` language tag.

#### <dfn>Conceptual-level</dfn>

Contrary to element-level techniques, structure-level techniques consider the [=ontology=] entities or their instances to compare their relations with other entities or their instances.

> DEF
> <dfn>Taxonomy-Based matching</dfn> techniques consider only specialization/generalization relations. The intuition behind taxonomic techniques is that specialization connect terms that are already similar, therefore their neighbors may be also somehow similar.

> DEF
> <dfn>Instance-Based matching</dfn> techniques use individuals of classes, i.e., classes are considered similar if they share many instances

#### <dfn>Expert-judgement</dfn>

Most of the literature focus on the use of algorithms and statistical analysis for the matching proces. In a lot of scenarios this is a good way to start, but in the end a human interpretation will propably be needed to create an [=alignment=] with acceptable quality. Sometimes the human is needed to teach or steer an algorithm, in other situations it is more efficient to do the [=matching=] completely by hand.

> NOTE
> In most cases a combination of these techniques will be used. Common practice is to generate a concept [=alignment=] with a combination of [=string-based matching=] and [=constraint-based matching=] techniques. And then present this to a domain expert who refines the [=alignment=] based on [=expert-judgement=].

### Considerations

Making a [=linkset=] and especially an [=alignment=] is not strictly a technical effort. This whitepaper describes a method to describe the actual links in a technical format. The substantive considerations are the hardest part. While this is not the focus of this whitepaper, there are some major considerations to take in account that are addressed here. 

####  Multiple heterogeneity problems

Considering the IMBOR and NEN2767-4 case, one can agree with the statement that there is a heterogeneity problem present. Pondering the application of the general approach of creating an [=alignment=] to IMBOR, it would be naïve however to assume [=semantic heterogeneity=] is the only face of the heterogeneity problem to be dealt with. Consider for example the following possible cases:
* There can be terminological correspondence, but definitional differences in scope remain, which leads to [=semiotic heterogeneity=] or an obscured instance of [=terminological heterogeneity=] (compare for example: NEN2767 `Kade` and IMBOR `gebruiksfunctie:Kade`). This cannot be addressed only by subsumption under a mapping vocabulary.
* There can be semantic correspondence, but disparity in terms of entity-type, as in a semantic correspondence between an IMBOR `ObjectType` and a NEN2767 `Element` or `Bouwdeel`. This is actually a distinction of model use that makes parts of the [=ontologies=] disjoint, but which masquerades behind a semantic correspondence=.
* There can be a semiotic and terminological correspondence, but a semantic difference in use (compare for example: NEN2767 `Natuurgebied` and IMBOR `Natuurgebied`). NEN2767 could have a meronomy of a `Natuurgebied` which is strictly nonsensical (albeit not impossible) in the IMBOR modelling. This is caused by the fact that, as the [[NEN2660-2]] authors state, “NEN2767 is a meronomy for infrastructural concepts in which the functional and technical nature of those concepts is not properly distinguished.”

#### Broader methodology of alignments

What metatheoretical values or pragmatic considerations guide the construction of an [=alignment=]? Is deference to expert judgement always required here? This is of course not so much a remark on the proposed method itself, but rather on the broader methodology that the method is part of, and is partly within scope of the whitepaper (e.g. on [=governance=]). Returning to the case to illustrate this point, how far does the [=alignment=] need to go in matching terms and/or extending either one or both of the ontologies to match the domain of the ontology? With the focus on the heterogeneity problem, the type of [=alignment=] that needs to be sought is addressed adequately, but what remains underdeveloped is what to do with:
1. the heterogeneity that remains after constructing an [=alignment=] (presupposing two ontologies do not have the exact same domain and reach); 
2. the desired selection of abstract values to function as guide for how far a particular [=alignment=] should go in terms of defining the scope of two [=ontologies=] that should be aligned (i.e. are pragmatic reasons, terminological reasons or only semantic reasons brought to bear on this?), how symmetry in modelling has to be pursued before terms can be aligned, and what rules should govern the form and nature of expert input into this process.
3. the possible multiplicity of heterogeneity problems inside a single two-ontology case. It is possible for the type of heterogeneity to vary from instance to instance within the same mapping casus. 

