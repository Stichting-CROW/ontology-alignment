## Used and related standards

This best practice adopts (parts of) several other standards. Some as compliancy, some as inspiration. In this section the relation with each of these standards is described.

### Dublin core terms

The DCMI Metadata Terms - Dublin Core [[DCTERMS]] provides an open forum for the development of interoperable online metadata standards for a broad range of purposes and of business models. It is a set elements (properties) for describing resources. These element have been formally standardized.

In this best practice [[DCTERMS]] is used an source for the most important metadata elements.

### NEN2660-2

The Dutch standard "Rules for information modelling of the built environment - Part 2: Practical configuration, extension and implementation of NEN 2660-1" [[NEN2660-2]] is not formally a part of this best practice. But it is to be expected the the majority of [=alignments=] that are created following this best practice are [[NEN2660-2]] ontologies. Therefore it is a practical part of this whitepaper.

In this best practice the [[NEN2660-2]] is used for declaring some of the [=ontology=] entities and the distinction between the vocabulary (graph) and the ontology (graph). As well as the use of `rdfs:seeAlso` to describe the relation between the two. Furthermore is advised to use the [[NEN2660-2]] implementations for the different [levels](#alignment-levels):

- [[SKOS-primer]] for the [=terminological level=];
- [[RDF-schema]]+[[SHACL]] for the [=conceptual level=].

### SKOS

[[SKOS-primer]] is used in conjunction with the [[NEN2660-2]] to describe vocabularies, but it is also used to express the semantics of the [=linksets=] on the [=terminological level=]. The relations as describes in [[SKOS-primer]] are used to describe the specific relation between two terms in the [=alignment=]. If [[SKOS-primer]] is used in the [=alignment=], it can be automatically concluded that the [=alignment=] is on the [=terminological level=]. 

### OWL

[[OWL2-primer]] is used to express the semantics of the [=linksets=] on the [=conceptual level=]. The relations as describes in [[OWL2-primer]] are used to describe the specific relation between two classes in the [=alignment=]. If [[OWL2-primer]] is used in the [=alignment=], it can be automatically concluded that the [=alignment=] is on the [=conceptual level=]. 

### SSSOM

The Simple Standard for Sharing Ontology Mappings [[SSSOM]] is another [=alignment=] standard which was consided for this whitepaper. It is an metadata standard for describing semantic mappings. Including a machine-readable and extensible vocabulary to describe metadata of [=alignments=] ans an easy to use table-based format that integrates seamlessly with LinkedData standards. The reason for not adopting it here is that it cannot express complex [=correspondences=]. So while it is enough for the [=terminological level=] and in some simple cases for the [=conceptual level=], it has not enough expressive power to express the rest of the situations. And therefore it is not comprehensive enough to be used as a sustainable and scalable option for this best practice. That is a shame because it is definitely easier to use in comparison to the [[Alignment format]] and [[EDOAL]] and [[OWL2-primer]].

There is one part of [[SSSOM]] that is advised to be used. The are the ['Common Mapping Predicates'](https://mapping-commons.github.io/sssom/spec/#predicates). This set of predicates describe the most used mapping predicates and for maximum re-use, the use of these are strongly encouraged/advised.

### VoID

The Vocabulary of Interlinked Datasets [[VoID]] an [[RDF-schema]] vocabulary for expressing metadata about RDF datasets. It is intended as a bridge between the publishers and users of RDF data, with applications ranging from data discovery to cataloging and archiving of datasets. It defines entities like `void:Dataset` and `void:Linkset`. It is used quite commonly as a standard for describing [=alignments=].

In this best practice [[VoID]] is used for the semantics of `void:Linkset` but nothing else.
