## Learn WHAT it is

This best practice describes a way for creating, managing, using and communicating [=ontology alignments=] and [=ontology extensions=], for the purpose of linking [=ontologies=] (so _not_ instance data) and using them in conjunction. It uses existing (web) standards and combines them to create a practical application. In doing so it proposes a standard approach to [=ontology matching=] (also called 'mapping or 'linking'). This best practice includes:

- **_Definitions of the concepts involved in ontology matching_**

  There is a lot of information online about [=ontology matching=]. The terminology is not unambiguous. Therefore this best practice defines concepts such as:

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

  There is a semantic difference between 'aligning' and 'extending'. In an [=alignment=] the focus is on expressing how two or more [=ontologies=] compare to each other. Typically these comparisons involve entities with meanings that are quite similar. In contrast, [=ontology extending=] links [=ontologies=] together for the purpose of extending the use, typically by relating entities that either belong to different semantics domains (e.g., persons and documents) or have a different level of abstraction (i.e., considered more specific or more abstract in meaning). 

>DEF
>A <dfn data-lt="Linksets">Linkset</dfn> (often referred to as 'link rule set' or 'integration library') is a set of triples where for all triples the subject is defined in one dataset, and the object is defined in another. In this context an [=ontology alignment=] and an [=ontology extension=] can both be seen as [=linksets=] and as a form of Master data libraries.  

>EXAMPLE
>
>_[=Alignment=]_= `imbor:Put owl:equivalentClass gwsw:Put`
>
>_[=Extension=]_= `imbor:Put nen2660:hasState bor-meld:DekselKapot` 


- **_Abstraction levels regarding of linksets_**

  [=Alignments=] can be made between ontologies that are informal or formal. The following two examples illustrates the difference between the two:

* _'talking about the same thing/concept'_ between informal [=ontologies=] such as thesauri,
* _'expressing identical sets of things'_ between class structures or between so-called shapes.

Similarly, [=alignments=] can themselves use [=informal semantics=] or [=formal semantics=] to relate [=ontologies=]. The use of [=formal semantics=]  in [=alignments=] can be used to inform automated deductions, a process known as inferencing, for which [=informal semantics=] are less suitable. Sometimes the distinction between informal and formal is made clear by calling [=alignments=] respectively (semantically) weak [=mappings=] and (semantically) strong [=mappings=]. The level of formality used in an [=alignment=]  tends to depend on the use case and is in practice also largely determined by the level of formality of the [=ontologies=] that are aligned: if one of the [=ontologies=] employs [=informal semantics=], there is little reason to use [=formal semantics=] when aligning it with another [=ontology=].

<figure>

![](img/basic-alignment-diagram.drawio.png)

<figcaption>
The basic components of a linkset and the levels
</figcaption>
</figure>

- **_Semantics of the links_**

  When creating a [=link=] between entities from different [=ontologies=], one can choose what semantics the [=link=]  is to express. In some cases it is enough for a [=link=]  to say things are 'related' and used to inform people on that fact; in other cases the purpose of a [=link=]  may be to transform data expressed in one [=ontology=] to be transformed to data expressed according to another [=ontology=]. In such, more advanced cases, more explicit, formal mappings or transformation rules are needed, such as ‘is equivalent to’ or ‘is a subset of’. 

- **_Matching methods_**

  When creating the actual [=links=] one can use different methods in [=matching=] entities. This varies from the use of algorithms and statistical analysis, to expert judgement.

- **_Minimal set of metadata_**

   Most [=linksets=] are subject to version changes. Either the involved [=ontologies=] change and necessitate corresponding changes in the [=linkset=] or the [=links=] are redefined and improved irrespective of any changes in the [=ontologies=] involved. Such changes are a challenge when managing the [=linkset=] and even more a challenge when actively using the [=linkset=]. Therefore it is good practice to at least annotate the [=linkset=] with some metadata regarding provenance, authoring and versioning.

- **_Governance practices_**

  Apart from the technology for managing, using and communicating [=linksets=], there is also an essential organizational aspect: "Who is responsible for financing, organizing and managing the [=linkset=]?" (read: the governance) Most of the times there are multiple stakeholders involved, who independently need to maintain their [=ontologies=]. The [=linkset=] is 'just another' [=ontology=] to maintain, but with a potentially more complex governance structure.