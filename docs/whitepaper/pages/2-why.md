## Learn WHY to use it

In the previous section we have described [what ontology alignment and ontology extension](#learn-what-it-is) is. We will therefore now look at _why should you use it_?

In information heavy domains there are many different stakeholders, expert views and interests. In addition, there is a booming and much needed digitalisation trend. These developments combined are resulting in a proliferation of [=ontologies=] (also called information models, schemas or Object type libraries) to describe the universe of discourse. In the built environment domain some clarity has emerged on the use of a toplevel model (also called 'foundational' or 'upper [=ontologies=]') and the language binding to semantic web languages, owing to [[NEN2660-2]] and [[prEN 17632-2]].

### Ontology matching

A standard approach is still lacking for linking (or [=mapping=]) [=ontologies=]. Ontology matching (both [=extending=] and [=alignment=]) is important in the heterogeneous environment in which [=ontologies=] are designed, developed and supposed to work. Methodologically, it is worthwhile to express relations between [=ontologies=] since this allows for:

- **_Manageable ontologies_**

  Working with small and self-sufficient modular [=ontologies=], instead of monolithic ones. The teams responsible for creating and managing the [=ontologies=] can be the same as the ones for the [=linksets=], but if the task is getting too large the responsibilities can be separated. 

> EXAMPLE "Manageable ontologies"
> A municipality creates an ontology for describing their information needs. The 'Roads' department creates the ontology for roads and the 'Green' department creates an ontology for trees, foliage, etc. In the end these should be deployed together to a contractor. Therefore a linkset must be made to keep the two separate ontologies aligned, withoud disturbing eachothers proces. 

- **_Data transition_**

  Expressing the links between two versions of the same [=ontology=] (the delta) or between versions of other ontologies, and thus, updating data from one [=ontology=] to another.

> EXAMPLE "Data transition"
> An organisation has height data of a tree that is classified to version 1.0 of an ontology. In version 1.1 of that ontology the height of a tree is not measured from the ground to the top, but the roots are also included. The linkset between 1.0 and 1.1 contains information to automatically transition the data. 

- **_Using common ground_**

  Putting back an [=ontology=] in the context of a toplevel ontology, allowing it to become more consensual with other [=ontologies=] of that domain.

> EXAMPLE "Using common ground"
> A municipality makes their own ontology for roads. Instead of making their own top level ontology, the use the toplevel models from NEN2660-2 and NEN3610 as base, by stating: `x:Tree rdfs:subClassOf nen2660:DiscreteObject`

- **_Re-using existing knowledge_**

  Using [=ontology extensions=] to link [=ontologies=] together allows for re-using already available knowledge. This avoids redundancy (which can lead to confusion and inconsistency, making it harder to integrate and share data). And at the same time it leads to semantic enrichment (combining multiple [=ontologies=] from different domains, facilitating more advanced reasoning and data analysis) and higher levels of standardisation. 

> EXAMPLE "Re-using existing knowledge"
> A municipality makes their own ontology for roads, this includes entities about inspections. But instead of defining their own inspections methods, they adopt (and thus link to) a predefined vocabulary of inspection methods declared by CROW.

- **_Conjunctive use_**

  Using [=ontologies=] together in the same process or application, allows for more seamless interdisciplinary projects.

> EXAMPLE "Conjunctive usee"
> A software vendor creates an integrated application for public space management. The application should adhere to the sector standards IMBOR and GWSW. Both standards are ontologies that define different information requirements for a sewer drain. The owners of IMBOR and GWSW have defined a machine-readable linkset, which serves as a third model that the software vendor can import. This ensures that the vendor does not have to worry about compliance with both ontologies.

This last reason is quite urgent. Currently, this is often left to the software suppliers or modellers, while [=ontology=] (or "standard") maintainers _could_ and _should_ pay more attention to this. Certainly software vendors that need to use [=ontologies=] in their software have to deal with multiple, distributed and evolving ontologies. For them, clarity regarding how to use them together is very important. Predictability about the structure of the [=linksets=] _and_ the provenance, authorship and versioning information about this [=linkset=] is believed to be a big enabler for adoption.

### Separated linkset

The arguments mentioned above show _why_ it is worthwile to express relations between _[=ontologies=]_, but this best practice also describes a way to create, manage and store these links as _separate datasets_, called [=linksets=]. Doing so allows for: 

- **_Performance throttling_**

  Specific information from a linked [=ontology=] is only needed in specific situations. By supplying separate linked [=ontologies=] the user can choose what to load and when. This can result in much better performance.

- **_Using alternatives_**

  There is not a single perspective on how two [=ontologies=] relate to eachother. Therefore there should always be the possibility to switch to a different [=linkset=] if one is available.

- **_Clear scope definition_**

  Both [=ontologies=] and [=linksets=] have a specific goal or intended use. Storing relations to other [=ontologies=] in your own [=ontology=] can 'stain' it or make it more complex then it has to be. This is especially true when the they have different levels of (semantic) detail.  


### Best practice 
In Annex E of [[prEN 17632-2]] [=linksets=] are mentioned as follows _"Explicitly (and therefore more reusable) by declaratively modelling the links, preferably separately from the ontologies/information sets that are to be linked in 'link sets'. This way the link sets/links themselves remain 'agnostic' and 'clean'." ... "Technically, from a 'linked data' technology perspective, a simple link set is a collection of RDF triples in which both the object and the subject of the triples can refer to elements from different ontologies or information sets. Every rdf:Property instance can be regarded as a "link"; so all relationships that are used in 'modelling' can be used for 'linking' too._

The [[prEN 17632-2]] also mentions: _"The modelling of information models (here [=ontologies=]) and information sets is one thing. The (inter)linking of information models, the (inter)linking of information sets, and the linking of information sets to information models, is another. In the future, this linking will become increasingly important since information models and information sets are often interrelated in practice and complementing and strengthening each other in multidisciplinary decision making."_

Because a standard approach for creating [=linksets=] regarding to [=ontology matching=] and [=ontology extending=] is lacking, this best practice sets out to be one for the built environment. Therefore the following principles hold for this best practice:

1. Using existing web standards such as (but not limited to) [[rdf-schema]],[[turtle]],[[VoID]] and [[vocab-dcat-3]]; nothing new is invented. Every component is well documented, tested and tried;
2. Optimizing the usage of the LinkedData principles in combination with the [FAIR principles](https://www.nature.com/articles/sdata201618) to ensure maximum reusability, sustainability and openness;
3. One way (for [=linksets=]) to have a common perspective of linking [=ontologies=] to each other;
4. Just as much focus on [=governance=] and provenance as on technique, to ensure sustainable use for implementing in (costly) software development.

With this best practice, [CROW](https://www.crow.nl/) and its partners are trying to establish a method that can be used both internally and externally, providing clients with more clarity and predictability. Our intention thereby is to give (costly) developments in the software and data landscape a boost.

### Semantic web standards

In this best practice there is a focus on Semantic Web standards. These are the international standards for these kind of technological challenges and thats why they are encouraged by [F.A.I.R.](https://www.go-fair.org/fair-principles/). Standards like the [[NEN2660-2]] adopt the principles by prescribing the use of the Semantic Web standards. The information in a [=linkset=] is a semantic model, which contains meaning that can be comprehended by both humans and machines. Such models use basic language concepts to make then readable for humans, and map these concepts to constructs that can be processed by machines. Making semantic models interpretable by computers requires technology. Linked Data is a standardised technology stack that can facilitate this interpretation.

Linked Data is the foundation of the Semantic Web. The Semantic Web is an extension of the World Wide Web, where data (e.g. websites) from different sources can be linked together like a web. It provides a framework that facilitates the possibility of sharing and reusing information across multiple applications, organisations, and community boundaries. This framework is defined in standards set by the World Wide Web Consortium (W3C). These standards include (among others) recommendations about the data format, publication and access. _Adapted from: [[Organising Libraries of Master Data]]_

There are other publication methods of [=linksets=] possible. Therefore a short comparison is made:

| Publication method                                | Advantages                                              | Disadvantages                        |
|---------------------------------------------------|---------------------------------------------------------|--------------------------------------|
| Documents                                         | Simple                                                  | Prone to error                       |
|                                                   | Little infrastructure needed                            | Not applicable in applications       |
| Within an application                             | Linkset is directly applicable in the application       | Not applicable in other applications |
| Centrally distributed within an application suite | Linkset is directly applicable in multiple applications | Closed format (lock-in)              |
| Centrally distributed as Linked Data              | Open format (no lock-in)                                | Technically harder to set up         |
|                                                   | Easily related/linked to other sources                  |                                      |
|                                                   | Applicable within all applications (using add-ons)      |                                      |
| {.data}      |

_Source: [[Organising Libraries of Master Data]]_


