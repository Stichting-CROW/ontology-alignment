## Learn WHY to use it

In the previous section we have described [what ontology alignment and ontology extension](#learn-what-it-is) is. We will therefore now look at _why should you use it_?

In information heavy domains there are many different stakeholders, expert views and interests. In addition, there is a booming and much needed digitalisation trend. These developments combined are creating a proliferation of [=ontologies=] (also called information models, schemas or Object type libraries) to describe the universe of discourse. In the built environment domain some clarity has emerged on the use of a toplevel model (also called 'foundational' or 'upper[=ontologies=]') and the language binding to semantic web languages. This is the result of the advent of [[NEN2660-2]].

Because a standard approach for creating [=linksets=] regarding to [=ontology matching=] and [=ontology extending=] is lacking, this best practices sets out to be one for the built environment. Therefore the following principles hold for this best practice:

1. Using existing web standards like (but not limited to) [[rdf-schema]],[[turtle]],[[VoID]] and [[vocab-dcat-3]] nothing new is invented. Every component is well documented, tested and tried;
2. Optimizing the usage of the LinkedData principles in combination with the [FAIR principles](https://www.nature.com/articles/sdata201618) to ensure maximum reusability, sustainability and openness;
3. One (best practice) way (for creating [=linksets=]) to have a common perspective of have [=ontologies=] link to each other;
4. Just as much focus on governance and provenance as on technique, te ensure sustainable use for implementing in (costly) software development.

With this best practice, [CROW](https://www.crow.nl/) and it's partners are trying to establish a method that can be used both internally and externally, providing clients with more clarity and predictability. The hope is that this will give (costly) developments in the software and data landscape a boost.

### Semantic web standards

In this best practice there is a sole focus on the Semantic Web standards. This is prescribed by the [[NEN2660-2]] and is the international standard for these kind of technological challenges. The information in a [=linkset=] is a semantic model, this contains meaning that can be comprehended by both humans and machines. They use basic language concepts to make it readable for humans, and map these concepts to constructs that can be processed by machines. Making semantic models interpretable by computers requires technology. Linked Data is a standardised technology stack that can facilitate this.

Linked Data is the foundation of the Semantic Web. The Semantic Web is an extension of the World Wide Web, where data (e.g. websites) from different sources can be linked together like a web. It provides a framework that facilitates the possibility of sharing and reusing information across multiple applications, organisations, and community boundaries. This framework is defined in standards set by the World Wide Web Consortium (W3C). These standards include (among others) recommendations about the data format, publication and access. _Adapted from: [[Organising Libraries of Master Data]]_

There are other publication methods of [=ontologies=] possible. Therefore a short comparison is made:

| Publication method                                | Advantages                                              | Disadvantages                        |
|---------------------------------------------------|---------------------------------------------------------|--------------------------------------|
| Documents                                         | Simple                                                  | Prone to error                       |
|                                                   | Little infrastructure needed                            | Not applicable in applications       |
| Within an application                             | Linkset is directly applicable in the application       | Not applicable in other applications |
| Centrally distributed within an application suite | Linkset is directly applicable in multiple applications | Closed format (lock-in)              |
| Centrally distributed as Linked Data              | Open format (no lock-in)                                | Technically harder to set up         |
|                                                   | Easily related/linked to other sources                  | Linked Data infrastructure needed    |
|                                                   | Applicable within all applications (using add-ons)      |                                      |
| {.data}      |

_Source: [[Organising Libraries of Master Data]]_


### Ontology matching

The 'standard approach' to 'linking' (or 'mapping) [=ontologies=] is still lacking. Ontology matching (both [=extending=] and [=alignment=]) is important in the heterogeneous environment in which [=ontologies=] are designed, developed and supposed to work. Methodologically, it is worthwhile to express relations between [=ontologies=] since this allows for:

- **_Manageable ontologies_**

  Working with small and self-sufficient modular [=ontologies=], instead of monolithic ones. The teams responsible for creating and managing the [=ontologies=] can be the same as the ones for the [=linksets=], but if the task is getting to large it can be separated. 

- **_Data transition_**

  Expressing the links between two versions of the same [=ontology=] (the delta) or between versions of other ontologies, and thus, updating data from one [=ontology=] to another.

- **_Using common ground_**

  Putting back an [=ontology=] in the context of a toplevel ontology, allowing it to become more consensual with other [=ontologies=]of that domain.

- **_Re-using existing knowledge_**

  Using [=ontology extensions=] to link [=ontologies=] together allows for re-using already available knowledge. This avoids redundancy (which can lead to confusion and inconsistency, making it harder to integrate and share data). And at the same time it leads to semantic enrichment (combining multiple [=ontologies=] from different domains, facilitating more advanced reasoning and data analysis) and more standardisation. 

- **_Conjunctive use_**

  Using [=ontologies=] together in the same process or application, allows for more seamless interdisciplinary projects.

The last reason is quite urgent. Currently, this is often left to the software suppliers or modellers, while [=ontology=] (or "standard") maintainers _could_ and _should_ pay more attention to this. Certainly software vendors that need to use [=ontologies=] in their software have to deal with multiple, distributed and evolving ontologies. For them, clarity regarding how to use them together is very important. Predictability about the structure of the [=linksets=] _and_ the provenance, authorship and versioning information about this [=linkset=] is believed to be a big enabler for adoption.

### Separated linkset

The before mentioned arguments show _why_ it is worthwile to express relations between _[=ontologies=]_, but this best practice also describes a way to create, manage and store these links as _separate datasets_, called [=linksets=]. Doing so allows for: 

- **_Performance throttling_**

  Specific information from a linked [=ontology=] is only needed in specific situations. By supplying separate linked [=ontologies=] the user can choose what to load and when. This can result in much better performance.

- **_Using alternatives_**

  There is not a single perspective on how two [=ontologies=] relate to eachother. Therefore their should always be the possibility to switch to a different [=linkset=] is one is available.

- **_Clear scope definition_**

  Both [=ontologies=] and [=linksets=] have a specific goal or intended use. Storing relations to other [=ontologies=] in your own [=ontology=] can 'stain' it or make it more complex then it has to be. This is especially true when the they have different levels of (semantic) detail.  

