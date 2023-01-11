## Alignment levels

> NOTE
> The terminology for the different levels is still under consideration. Feedback is welcome.

When modelling a domain, there are a number of 'levels' of complexity (or richness) to consider, ranging from the meaning and intent of the words people use when talking about something to a specification of how data is recorded and exchanged. This section gives an overview of the different levels to distinguish and how the [=alignments=] differ, but _can_ be used to infer information from each other.

### <dfn>Terminological level</dfn>

> DEF
> The [=terminological level=] describes the reality within the domain in scope (the 'universe of discourse') by means of the terms (or: 'words') used in it and their relationships to each other. The aim is for actors within it to understand each other and speak one language. A model of terms is drawn up for use by people, especially 'the business'. The terms are, most of the times, described in a formal language, a vocabulary. _Adapted from [[MIM]]_

For this best practice [[SKOS-primer]] is advised, in combination with the [[NEN2660-2]].

### <dfn>Conceptual level</dfn>

> DEF
> The [=conceptual level=] describes the reality within the domain in scope (the 'universe of discourse') by means of the classes (or: 'conceptuals') used in it and their relationships to each other. The aim is for machines and models within it to understand each other have a common understanding of a concept. A model of classes is drawn up for use by machines and formal models (it is also used by people). The classes are described in a formal language, and form an ontology.

For this best practice [[RDF-schema]] is advised, in combination with the [[NEN2660-2]].

### <dfn>Structural level</dfn>

> DEF
> The [=structural level=] describes the reality within the domain in scope (the 'universe of discourse') by means of shapes (or: 'data structure') used in it. The aim is for machines and models within it to understand each other have a common understanding of what the information needs for an entity are and how this data is shaped. A shape is drawn up for use by machines and formal models (it is also used by people). The shapes are described in a formal language, and form a constrained based ontology to which one can validate there datasets.

For this best practice [[SHACL]] is advised, in combination with the [[NEN2660-2]].
