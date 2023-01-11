## Learn WHAT it is

This best practice describes a way for creating, managing, using and communicating [=ontology alignments=], for the purpose of linking [=ontologies=] and using them in conjunction. It uses existing (web) standards and combines them to create a practical application. In doing so it proposes a standard approach to [=ontology matching=] (also called 'mapping or 'linking'). This best practice include:

- **_Definition of the concepts involved in ontology matching_**

  There is a lot of information online about [=ontology matching=]. The terminology is not unambiguous. Therefore this best practice defines concepts like:

  - [=ontology=]
  - [=ontology matching=]
  - [=alignment=]
  - [=correspondences=]
  - [=mapping=]

- **_Abstraction levels of alignments_**

  There are different levels of precision at which [=alignments=] can be made:

  1. _'talking about the same thing'_ between thesauri (the [=terminological level=]),
  2. _'meaning/expressing the same thing'_ between class structures (the [=conceptual level=]) and,
  3. _'wanting to capture the same data'_ between so-called shapes (the [=structural level=]).

<figure>

![](img/basic-alignment-diagram.drawio.png)

<figcaption>
The basic components of an alignment and the levels
</figcaption>
</figure>

- **_Semantics of the links_**

  When creating a [=correspondence=] there can be different semantics involved. Sometimes it is just enough to say things are 'related', in another case it can be that data needs to be transformed from one [=ontology=] to another. In the latter there should be more explicit [=mappings=] or even transformation rules.

- **_Matching methods_**

  When creating the actual [=correspondences=] one can use different methods of [=matching=]. This varies from algorithms and statistical analysis, to expert judgement.

- **_Minimal set of metadata_**

  Most [=alignments=] are quite dynamic. Either the involved [=ontologies=] change and/or the [=correspondences=] change. This is a challenge when managing the [=alignment=] and even more a challenge when actively using the [=alignment=]. Therefore it is good practice to at least annotate the [=alignment=] with some metadata regarding provenance, authoring and versioning.

- **_Governance practices_**

  Apart from the technology for managing, using and communicating [=alignments=], there is also an essential organizational aspect: "Who is responsible for financing, organizing and managing the [=alignment=]?" (read: the governance) Most of the times there are multiple stakeholders involved, who independently need to maintain their [=ontologies=]. The [=alignment=] is 'just another' [=ontology=] to maintain, but with a more complex governance structure.

This document is primarily intended for (information) modellers who want to create these [=alignments=]; software developers who need to use these [=alignments=] in their software and people who want to use models and [=ontologies=] in conjunction based on [=alignments=] according to this best practice. Knowledge of information modelling is a plus. Knowledge of LinkedData and the NEN2660-2 is a plus but not necessary. This best practice focuses in particular on models within the built environment, but it can also be used in a broader context.
