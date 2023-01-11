## Matching methods

This section gives a compact overview what methods for [=ontology matching=] are, and elaborates on how and when they should be used. It is not a definitive list, but rather a selection of techniques as adapted from [[Ontology matching]]. There are three main categories defined and seven methods in scope for this best practice.

### <dfn>Element-level</dfn>

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

### <dfn>Structural-level</dfn>

Contrary to element-level techniques, structure-level techniques consider the [=ontology=] entities or their instances to compare their relations with other entities or their instances.

> DEF
> <dfn>Taxonomy-Based matching</dfn> techniques consider only specialization/generalization relations. The intuition behind taxonomic techniques is that specialization connect terms that are already similar, therefore their neighbors may be also somehow similar.

> DEF
> <dfn>Instance-Based matching</dfn> techniques use individuals of classes, i.e., classes are considered similar if they share many instances

### <dfn>Expert-judgement</dfn>

Most of the literature focus on the use of algorithms and statistical analysis for the matching proces. In a lot of scenarios this is a good way to start, but in the end a human interpretation will propably be needed to create an [=alignment=] with acceptable quality. Sometimes the human is needed to teach or steer an algorithm, in other situations it is more efficient to do the [=matching=] completely by hand.

> NOTE
> In most cases a combination of these techniques will be used. Common practice is to generate a concept [=alignment=] with a combination of [=string-based matching=] and [=constraint-based matching=] techniques. And then present this to a domain expert who refines the [=alignment=] based on [=expert-judgement=].
