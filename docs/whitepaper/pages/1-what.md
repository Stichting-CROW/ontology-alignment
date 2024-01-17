## Learn WHAT it is

This best practice describes a way for creating, managing, using and communicating [=ontology alignments=] and [=ontology extensions=], for the purpose of linking [=ontologies=] (so _not_ instance data) and using them in conjunction. It uses existing (web) standards and combines them to create a practical application. In doing so it proposes a standard approach to [=ontology matching=] (also called 'mapping or 'linking'). This best practice include:

- **_Definition of the concepts involved in ontology matching_**

  There is a lot of information online about [=ontology matching=]. The terminology is not unambiguous. Therefore this best practice defines concepts like:

  - [=ontology=]
  - [=ontology matching=]
  - [=alignment=]
  - [=correspondences=]
  - [=mapping=]
  - [=extending=]
  - [=extension=]
  - [=linkset=]


- **_A clear overview of Linksets, Alignments and Extensions_**
 
  This whitepaper describes a best practice for creating [=linksets=]. [=Linksets=] can be divided into two categories: [=ontology alignments=] and [=ontology extensions=]. 

  There is a semantic difference between 'aligning' and 'extending'. In contrast with [=alignment=], [=ontology extending=] links [=ontologies=] together for the purpose of extending the use. In an [=alignment=] the focus is on expressing how two or more [=ontologies=] compare to each other. Typically these are comparisons of entities from the same kind. In [=extensions=] the focus is on expressing how one [=ontology=] adds semantic value to another [=ontology=]. Typically these are relations between entities of different kinds. 

>DEF
>A <dfn data-lt="Linksets">Linkset</dfn> (often referred to as 'link rule set' or 'integration library') is a set of triples where for all triples the subject is defined in one dataset, and the object is defined in another. In this context an [=ontology alignment=] and an [=ontology extension=] can both be seen as [=linksets=] and as a form of Master data libraries.  

>EXAMPLE
>
>_[=Alignment=]_= `imbor:Put owl:equivalentClass gwsw:Put`
>
>_[=Extension=]_= `imbor:Put nen2660:hasState bor-meld:DekselKapot` 


- **_Abstraction levels regarding of linksets_**

  There are different levels of precision at which [=alignments=] can be made:

* _'talking about the same thing'_ between thesauri,
* _'meaning/expressing the same thing'_ between class structures and,
* _'wanting to capture the same data'_ between so-called shapes.

The first one can be considered [=informal semantics=] and form the [=terminological level=] in [=linksets=]. This is used when there is no need for automation or the capacity for maintaining the [=linksets=] is low. The latter two form can be considered [=formal semantics=] and form the [=conceptual level=]. Sometimes the distinction is made clear with calling them respectively (semanticly) weak [=mappings=] and (semanticly) strong [=mappings=].

<figure>

![](img/basic-alignment-diagram.drawio.png)

<figcaption>
The basic components of a linkset and the levels
</figcaption>
</figure>

- **_Semantics of the links_**

  When creating a [=link=] there can be different semantics involved. Sometimes it is just enough to say things are 'related', in another case it can be that data needs to be transformed from one [=ontology=] to another. In the latter there should be more explicit [=mappings=] or even transformation rules. In [=extensions=] the semantics of the links are typically defined by one of the ontologies. It is therefore a more directed [=linkset=].

- **_Matching methods_**

  When creating the actual [=links=] one can use different methods of [=matching=]. This varies from algorithms and statistical analysis, to expert judgement.

- **_Minimal set of metadata_**

  Most [=linksets=] are quite dynamic. Either the involved [=ontologies=] change and/or the [=links=] change. This is a challenge when managing the [=linkset=] and even more a challenge when actively using the [=linkset=]. Therefore it is good practice to at least annotate the [=linkset=] with some metadata regarding provenance, authoring and versioning.

- **_Governance practices_**

  Apart from the technology for managing, using and communicating [=linksets=], there is also an essential organizational aspect: "Who is responsible for financing, organizing and managing the [=linkset=]?" (read: the governance) Most of the times there are multiple stakeholders involved, who independently need to maintain their [=ontologies=]. The [=linkset=] is 'just another' [=ontology=] to maintain, but with a more complex governance structure.

This document is primarily intended for (information) modellers who want to create these [=linksets=]; software developers who need to use them in their software and people who want to use models and [=ontologies=] in conjunction based on [=linksets=] according to this best practice. Knowledge of information modelling is a plus. Knowledge of LinkedData and the NEN2660-2 is a plus but not necessary. This best practice focuses in particular on models within the built environment, but it can also be used in a broader context.

> ADVISEMENT
> This best practice has a clear focus on creating [=linksets=] and [=matching=] [=ontologies=]. It does not take the instance level in scope. The [=linksets=] contain semantic links like 'related' and 'equivalent class', in contrast to 'same as'. It is not said that a parts of this whitepaper _can_ be used to describe instance [=alignments=] though, it is just not the focus (for now).
