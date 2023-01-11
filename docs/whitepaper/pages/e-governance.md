## Governance

Apart from the technology for managing, using and communicating [=alignments=], there is also an essential organizational aspect: "Who is responsible for financing, organizing and managing the [=alignment=]?" (read: the governance). Most of the times there are multiple stakeholders involved, who independently need to maintain there [=ontologies=]. The [=alignment=] is 'just another' [=ontology=] to maintain, but with a more complex governance structure.

These [=alignments=] are basic prerequisites for consistency and the sustainability for data. Therefore it is unforgivable that the responsibility for creating and managing them is currently not felt and the [=alignments=] are mostly not yet in place. This can be directly traced to the remit that different [=ontology=] owners have, even within organisations. The [=alignments=] are generally within the grey zone (or: the twilight zone) and nobody knows exactly who is accountable for them. The management of these [=alignments=] must therefore be supported by policy, and therefore budget. An important element of this governance is that careful consideration must be given to the level at which the maintenance of these [=alignment=] is laid. It is recommended that this be placed as close as possible to the ontology owners ánd domain experts. Besides the actual creation of [=alignments=], semantic interpretation of these [=alignments=] is also an important issue that needs to be addressed. The current modelling of [=ontologies=] within its own silo provides a certain freedom in modelling. However, when aligning with other [=ontologies=], governance on the meaning of this [=alignment=] is also necessary.

This section gives an overview for the different thing to consider when governing and maintaining an [=alignment=].

### Components and guidelines

When making a governance plan or setting up the governance structure there are several components to consider. This best practice describes the components and gives a guideline for what could be considered advisable.

- **_Technical standards_**

  Technical agreements are, for example, agreements regarding the modelling practice so that it is possible to align the [=ontologies=] at all. Technical agreements are relatively easy to draw up rules for and there are already examples of them. In this best practice we advise [[turtle]] as syntax format, the [[alignment format]] as alignment format, the [[NEN2660-2]] as technical guideline, [[SKOS-primer]] as expression format for the vocabulary, [[RDF-schema]] and [[SHACL]] as expression format for the [=ontology=].

- **_Modelling rules_**

  Closely related to the technical standards are the modelling rules or modelling conventions. These result partly from the chosen technical standards, but there are rules that best not left implicit. It is hard to pinpoint exactly what these should be but examples are: how to write a definition, what language to use for labels, when to use a simple alignment or when to use a complex alignment, etcera. If an governance plan is made, there should be resource reserved to draft modelling rules. This ensures that [=alignments=] should be consistend over time, due to the fact that different people should make the same descions when the follow the same rules.

- **_Responsibilities_**

  Who is responsible and accountable for what. This is a obvious but sometimes complicated question that needs to be answered in the beginning. Therefore it is described in more detail in the section [Organisational form](#organisational-form).

- **_Financing_**

  There is no definitive answer to how the financing of [=alignments=] should be handled. The best advice that can be given is that creating the [=alignment=] is only a very limited part of the [=alignment lifecycle=]. And that as a result, maintenance (or: the enhancement) costs more funds in almost all cases. Reserving money for maintenance is often difficult, but is really an essential step in ensuring a good and sustainable [=alignment=].

- **_Roadmap_**

  One important component to consider is making a roadmap. This goes for [=ontologies=], but especially for [=alignments=]. By creating a roadmap it is ensured that future development is clear enough to rely on. Minimal components of a roadmap are a vision (of what is desired and the potential that it has), a strategy (of how to get there), the requirements (that outline the needs), a plan (with prioritization and goals) and a general timeline with milestones.

  Because [=alignments=] are becoming an essential part of the daily operation when working with [=ontologies=] in conjunction, the roadmap ensures that users can plan ahead for their own developments. This goes not only for the owners of the involved [=ontologies=], but also for the software developers that make software that uses the [=ontologies=] and [=alignment=]. Certainly software vendors that need to use [=ontologies=] in their software have to deal with multiple, distributed and evolving ontologies. For them, clarity about the future developments is very important. Predictability about the structure of the [=alignment=] _and_ the provenance, authorship and versioning information about this [=alignment=] is believed to be a big enabler for adoption.

### Organisational form

In essence, there are three basic forms of how responsibility for managing the alignment can be assigned: the [=shared model=], [=external model=] and [=delegated model=].

<figure>

![](img/governance-approach.drawio.png)

<figcaption>
Three forms of governance (blue is responsible party) 
</figcaption>
</figure>

1. Separate organisations can decide that the form an alliance in which they manage the [=alignment=] in an "<dfn data-lt="shared model">Shared governance model</dfn>". In this case they send a (delegation) of their [=ontology=] owners to convey in an periodic session to discuss the [=alignment=], the feedback on it and the roadmaps;
2. Separate organisations can decide to ask a 3rd (external) party to manage the [=alignment=] in an "<dfn data-lt="external model">External governance model</dfn>". In this case an external party will be responsible for managing the roadmap, discuss the feedback and make changes to the [=alignment=]. The (original) [=ontology=] owners manage their own [=ontologies=] and the external party reacties to changes;
3. In the "<dfn data-lt="delegated model">Shared delegated model</dfn>" two organisations decide that one of them has the responsibility to manage the [=alignment=].

Each of these options has their own advantages and disadvantages. In general we can say that the [=delegated model=] is the least desirable. This has to do with feeling the shared responsibility and making descions on which everyone agrees together. The [=external model=] could be a costly option because there should be funds available to hire an organisation and consult with them regularly. But an organisation which focusses on the [=alignment=] without distractions of other responsibilities could work better in an environment where there are many tasks. The [=shared model=] looks convenient and in most situations it is. This model is prone to long discussions and experts who cannot agree with each other, though.

### <dfn>Alignment lifecycle</dfn>

[=Ontology matching=] is not an independent activity. Instead, it should be considered it as related to [=ontology=] management: when [=ontologies=] evolve, [=alignments=] must follow this evolution as well. Moreover, [=ontology=] matching should be considered in a dynamic perspective in which the result of matching has its own life cycle, which has to be maintained and evolved as well.

<figure>

![](img/alignment-lifecycle.drawio.png)

<figcaption>
Alignment lifecycle, adapted from [[Ontology Matching]]
</figcaption>
</figure>

[=Alignments=] are first created through the [=matching=] process. Then they can go through an iterative loop of evaluation and enhancement. Enhancement may be obtained through manual change of the alignment or through automatic feedback. When an
alignment is deemed worth publishing, then it can be stored and communicated to other parties interested. Finally, the alignment can be exploited and put into practice.

These different lifecycle phases should be considered when defining the governance for a specific [=alignment=]. It is considered good practice to name these phases in the governance plan and assign responsible parties for them.
