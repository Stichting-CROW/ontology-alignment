## Learn WHY to use it

In the previous section we have described [what the best practice for ontology alignment](#learn-what-it-is) is, therefore we now look at _why should you use it_?

In information heavy domains there are many different stakeholders, expert views and interests. In addition, there is a booming and much needed digitalisation trend. These developments combined are creating a proliferation of [=ontologies=] (also called information models, schemas or Object type libraries) to describe the universe of discourse. In the built environment domain some clarity has emerged on the use of a toplevel model (also called 'foundational' or 'upper[=ontologies=]') and the language binding to semantic web languages. This is the result of the advent of [[NEN2660-2]].

What is still lacking is a standard approach to [=ontology matching=] (also called 'mapping or 'linking').
Ontology matching is important in the heterogeneous environment in which [=ontologies=] are designed, developed and supposed to work. Methodologically, it is worthwhile to express relations between [=ontologies=] since this allows for:

- **_Manageable ontologies_**

  Working with small and self-sufficient modular [=ontologies=], instead of monolithic [=ontologies=].

- **_Data transition_**

  Expressing the links between two versions of the same [=ontology=] (the delta) or between versions of other ontologies, and thus, updating data from one [=ontology=] to another.

- **_Using common ground_**

  Putting back an [=ontology=] in the context of a toplevel ontology, allowing it to become more consensual with other [=ontologies=]of that domain.

- **_Conjunctive use_**

  Using [=ontologies=] together in the same process or application, allows for more seamless interdisciplinary projects.

The last reason is quite urgent. Currently, this is often left to the software suppliers or modellers, while [=ontology=] (or "standard") maintainers could and should pay more attention to this. Certainly software vendors that need to use [=ontologies=] in their software have to deal with multiple, distributed and evolving ontologies. For them, clarity regarding how to use them together is very important. Predictability about the structure of the [=alignment=] _and_ the provenance, authorship and versioning information about this [=alignment=] is believed to be a big enabler for adoption.

Because a standard approach for [=ontology alignment=] is lacking, this best practices sets out to be one for the built environment. Therefore the following principles hold for this best practice:

1. Using existing web standards like (but not limited to) [[rdf-schema]],[[turtle]],[[VoID]], [[Alignment format]] and [[EDOAL]] nothing new is invented. Every component is well documented, tested and tried;
2. Optimizing the usage of the LinkedData principles in combination with the [FAIR principles](https://www.nature.com/articles/sdata201618) to ensure maximum reusability, sustainability and openness;
3. One way (for [=ontology alignment=]) to have a common perspective of have [=ontologies=] link to each other;
4. Just as much focus on governance and provenance as on technique, te ensure sustainable use for implementing in (costly) software development.

With this best practice, CROW and it's partners are trying to establish a method that can be used both internally and externally, providing clients with more clarity and predictability. The hope is that this will give (costly) developments in the software and data landscape a boost.
