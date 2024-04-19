## Governance

The management of [=linksets=] must be supported by policy, and therefore budget. Apart from the technology for managing, using and communicating [=linksets=], this is an essential organizational aspect: "Who is responsible for financing, organizing and managing the [=linkset=]?" (read: the [=governance=]). It is recommended that this be placed as close as possible to the ontology owners ánd domain experts. Most of the times there are multiple stakeholders involved, who independently need to maintain their [=ontologies=]. The [=linkset=] is 'just another' [=ontology=] to maintain, but with a more complex [=governance=] structure due to its relation with two (or, in some cases, more than two) other [=ontologies=] and the [=governance=] of those [=ontologies=] on which it relies.

> DEF
> The <dfn>governance</dfn> of an [=linkset=] regards to who is responsible for financing, organizing and managing the [=linkset=]?

These [=linksets=] are basic prerequisites for consistency and the sustainability for data. Therefore it is detrimental when the responsibility for creating and managing them is not felt and [=linksets=] are mostly not yet in place. This can be directly traced to the remit that [=ontologies=] have different owners, even within organisations. The [=linksets=] are generally within the grey zone and nobody knows exactly who is accountable for them. An important element of this [=governance=] is that careful consideration must be given to the level at which the maintenance of these [=linksets=] is laid. Besides the actual creation of [=linksets=], semantic interpretation of these [=linksets=] is also an important issue that needs to be addressed. The current modelling of [=ontologies=] within its own silo provides a certain freedom in modelling. However, when aligning with other [=ontologies=], [=governance=] on the meaning of this [=linkset=] is also necessary.

This section gives an overview for the different thing to consider when governing and maintaining an [=linkset=].

### Components and guidelines

When making a [=governance=] plan or setting up the [=governance=] structure there are several components to consider. This best practice describes the components and gives a guideline for what could be considered advisable.

- **_Technical standards_**

  Technical agreements are, for example, agreements regarding the modelling practice so that it is possible to align the [=ontologies=] at all. Technical agreements are relatively easy to draw up rules for and there are already examples of them. In this best practice we advise to publish the [=linkset=] on a LinkedData platform and provide a [SPARQL endpoint](https://www.nationaalarchief.nl/onderzoeken/linked-open-data/sparql-interface), [[skos-reference]] as expression format for the vocabulary, [[OWL2-overview]] as expression for the [=alignment=], [[RDF-schema]] and [[SHACL]] as expression format for the [=ontology=]. In the specific case of the built environment we also advise [[NEN2660-2]] as a technical guideline.

- **_Modelling rules_**

  Closely related to the technical standards are the modelling rules or modelling conventions. These result partly from the chosen technical standards, but there are rules that best not left implicit. Examples are: how to write a definition, what language to use for labels, when to use a simple alignment or when to use a complex alignment, etcera. If a [=governance=] plan is made, sufficient resources should be reserved to draft modelling rules. Doing so ensures that [=linksets=] are consistend over time, due to the fact that different people should make the same decisions when they follow the same rules.

- **_Responsibilities_**

  Who is responsible and accountable for what. This is an obvious but sometimes complicated question that needs to be answered at the start of creating any [=ontology=]. We therefore it describe it in more detail in the section [Organisational form](#organisational-form).

- **_Financing_**

  There is no definitive answer to how the financing of [=linksets=] should be handled. The best advice that can be given is that creating the [=linkset=] is only a very limited part of the [=alignment lifecycle=]. And that as a result, maintenance (or: the enhancement) costs more funds in almost all cases. Reserving money for maintenance is often difficult, but is really an essential step in ensuring a good and sustainable [=linkset=].

> ADVISEMENT
> It should be noted that, for those use cases that can be covered with [=alignments=], described earlier, funding [=alignment=] endeavours is crucial in order to obtain a rigorous, methodical and efficient solution. The alternatives, such as hardcoding [=alignments=] in the source code of software, may be less perceivable but tends to be vastly more expensive.

- **_Roadmap_**

  One important component to consider is making a roadmap. This goes for [=ontologies=], but especially for [=linksets=]. A roadmap ensures that future developments are clear enough to rely on. Minimal components of a roadmap are a vision (of what is desired and the potential that it has), a strategy (of how to get there), the requirements (that outline the needs), a plan (with prioritization and goals) and a general timeline with milestones.

  Because [=linksets=] are becoming an essential part of the daily operation when working with [=ontologies=] in conjunction, the roadmap ensures that users can plan ahead for their own developments. This holds not only for the owners of the involved [=ontologies=], but also for the software developers that make software that uses the [=ontologies=] and [=linkset=]. Certainly software vendors that need to use [=ontologies=] in their software have to deal with multiple, distributed and evolving ontologies. For them, clarity about the future developments is very important. Predictability about the structure of the [=linkset=] _and_ the provenance, authorship and versioning information about this [=alignment=] is believed to be a big enabler for adoption.

### Organisational form

In essence, there are three basic forms of how responsibility for managing the alignment can be assigned: the [=cooperative model=], [=third-party model=] and [=delegated model=].

<figure>

![](img/governance-approach.drawio.png)

<figcaption>
Three forms of [=governance=] (blue is responsible party) 
</figcaption>
</figure>

1. Separate organisations can decide that the form an alliance in which they manage the [=linkset=] in an "<dfn data-lt="cooperative model">Cooperative</dfn>" governance model. In this case they send a (delegation) of their [=ontology=] owners to convey in an periodic session to discuss the [=linkset=], the feedback on it and the roadmaps;
2. Separate organisations can decide to ask a 3rd (external) party to manage the [=linkset=] in an "<dfn data-lt="third-party model">Third-party</dfn>" governance model. In this case an external party will be responsible for managing the roadmap, discuss the feedback and make changes to the [=linkset=]. The (original) [=ontology=] owners manage their own [=ontologies=] and the external party reacties to changes;
3. In the "<dfn data-lt="delegated model">Delegated</dfn>" governance model two organisations decide that one of them has the responsibility to manage the [=linkset=].

Each of these options has their own advantages and disadvantages. In general we can say that the [=delegated model=] is the least desirable. This has to do with feeling the shared responsibility and making decisions on which everyone agrees together. The [=third-party model=] could be a costly option because there should be funds available to hire an organisation and consult with them regularly. But an organisation which focusses on the [=linkset=] without distractions of other responsibilities could work better in an environment where there are many tasks. The [=cooperative model=] looks convenient and in most situations it is.

### <dfn>Alignment lifecycle</dfn>

[=Ontology matching=] is a part of [=ontology=] management: when [=ontologies=] evolve, [=linksets=] must follow this evolution as well. Moreover, [=ontology=] matching should be considered in a dynamic perspective in which the result of matching has its own life cycle, which has to be maintained and evolved as well.

<figure>

![](img/alignment-lifecycle.drawio.png)

<figcaption>
Alignment lifecycle, adapted from [[Ontology_matching]]
</figcaption>
</figure>

[=Linksets=] are first created through the [=matching=] process. Then they can go through an iterative loop of evaluation and enhancement. Evaluation consists of assessing properties of the obtained alignment. Enhancement may be obtained through manual change of the alignment or through automatic feedback. When an alignment is deemed worth publishing, then it can be stored and communicated to other parties interested. Finally, the alignment can be exploited and put into practice.

These different lifecycle phases should be considered when defining the [=governance=] for a specific [=linkset=]. It is considered good practice to name these phases in the [=governance=] plan and assign responsible parties for them.
