## Learn HOW to make it

Now the [what](#learn-what-it-is) and [why](#learn-why-to-use-it) are clear, the 'how-to' is left?

<figure>

![](img/matching-proces.drawio.png)

<figcaption>
The matching process in essence
</figcaption>
</figure>

The process in essence is fairly straightforward. It starts with two [=ontologies=] that need [=matching=] because of a [heterogeneity problem](#heterogeneity-problem). The intended use of the [=alignment=], in combination with the heterogeneity problem results in a descision for 1) the [matching method](#matching-methods) and 2) the [level(s)](#alignment-levels) at which the [=alignments=] are made. When the [=ontologies=] are identified and the kind of problem is clear, the actual [=ontology matching=] can be conducted. The matching will result in an [=ontology alignment=], which consists of a set of [=correspondence=]s. the [=alignment=] can be seen as a [=mapping=] from one [=ontology=] to another (directed), consisting of a set of [=mapping rule=]s.

To illustrate the process and the endresult, we make use of a real life example situation regarding two [=ontologies=] about the build environment. Specifically about maintaining public space.

There are two organisations that manage an [=ontology=] within the domain of public space management. The first is called 'IMBOR', which focusses on describing which (physical) asset types exists in the domain and what information municipalities need to efficiently maintain those assets. The second is called NEN2767-4, which focusses on a method for assessing conditions and states for (physical) asset types. While they have a different intended use and scope, there are similarities in the asset types they describe. Next to that, municipalities that are responsible for maintaining the public space use both to get (and keep) a complete picture of their (physical) assets. Therefore there is a wish to 1) align the terms so that assetmanagers speak the same language and 2) align the classes (or: conceptuals) so that software vendors for assetmanagement applications can use the [=ontologies=] in conjunction in their software.

> ADVISEMENT
> The [=ontologies=] used as examples are both [[NEN2660-2]] compliant. Therefore they make a distinction between the vocabulary and the [=ontology=] and the use shapes to define the data structure. This is not obligatory in this best practice. But using this (graph) structure as expression is advisable, since it align with the alignment levels in this best practice.
>
> <figure>
>
> ![](img/ontology-general-structure.drawio.png)
>
> <figcaption>
> Advisable structure for modular [=ontologies=]
> </figcaption>
> </figure>

> NOTE
> This example is nice and simple. It’s certain that real life data is considerably more complex! It might not be immediately obvious how to apply this lessons. The [[Alignment format]] and [[EDOAL]] are well documented and should be sufficient to suit all needs. But one should be cautious about complicating the [=alignments=]. Usually, a simple [=alignment=] already solves a significant part of the problems. Therefore, think carefully about whether it really needs to be that complicated.

### Aligning the terms

Let's start with the first wish for an [=alignment=] on the [=terminological level=]. First we have to look at the two [=ontologies=] and see what is there.

Below is the IMBOR vocabulary [=ontology=] with one entity (`imbor-term:10f4ea25-70d7-4e3a-9a05-d7be8dfb0e36`) is the identifier for "Sluis" (English: "Sluice").

```turtle
imbor-term:
        a             owl:Ontology ;
        rdfs:comment  "Dit normatieve gedeelte betreft de vocabulair van IMBOR"@nl ;
        rdfs:label    "IMBOR Vocabulaire"@nl ;
        .

imbor-term:10f4ea25-70d7-4e3a-9a05-d7be8dfb0e36
        a                skos:Concept ;
        skos:definition  "Kunstwerk met een beweegbare waterkering, dat de verbinding vormt tussen twee wateren."@nl ;
        skos:inScheme    imbor-term:term-schema ;
        skos:prefLabel   "Sluis"@nl ;
        .
```

Next up, the NEN2767-4 vocabulary [=ontology=] with one entity (`nen2676-term:BN` is the identifier for "Spuisluis" (English: "Drainage sluice"):

```turtle
nen2767-term:
        a             owl:Ontology ;
        rdfs:comment  "Dit is wellicht gelijk aan de NPR van NEN2767-4"@nl ;
        rdfs:label    "NEN2767-4 Vocabulaire"@nl ;
        .

nen2676-term:BN
        a                skos:Concept ;
        skos:definition  "Uitwateringssluis om een overvloed aan water op het binnenwater gereguleerd naar een lager gelegen buitenwater te laten afvloeien. Tevens dient de spuisluis voor het keren van buitenwater."@nl ;
        skos:prefLabel   "Spuisluis"@nl ;
        .
```

We can see that there are two terms that are related. From first perspective it seems that the NEN2676-4 term "Spuisluis" is more specific than the IMBOR term "Sluis.

Because the intended use is in (spoken) natural language and there is a [=terminological heterogeneity=] problem, we can decide that we make the [=alignment=] on the [=terminological level=] and use [=expert-judgement=] as a method. If we run the matching process we see a [=correspondence=] between the two terms. To express this in the [[alignment format]] we have to declare that the two [=ontologies=] involved are in scope via `align:Ontology`, where to find them via `align:location` and tell how to interpreted them via `align:formalism`. In this case both are expressed in [[SKOS-primer]].

```turtle
nen2767-term:
        a               align:Ontology ;
        align:location  "file:ex_ont_2767-4.ttl";
        align:formalism [   a   align:Formalism ;
                            align:name "SKOS"@en ;
                            align:uri "http://www.w3.org/2004/02/skos/core#" ] ;
        .

imbor-term:
        a               align:Ontology ;
        align:location  "file:ex_ont_imbor.ttl";
        align:formalism [   a   align:Formalism ;
                            align:name "SKOS"@en ;
                            align:uri "http://www.w3.org/2004/02/skos/core#" ] ;
        .
```

The next step is to create the actual [=alignment=] via `align:Alignment` and populating it by creating a [=correspondence=] via an `align:Cell`. In this case there are two [=ontologies=] and there is one 'mapping' called `:mappingTerm_sluis_spuisluis`. This mapping cell states that there is one entity (or: term) from IMBOR that subsumes one from NEN2767-4. Via `align:semantics` (which is a free text field) we can give further information about the semantics of the relation. In this case `skos:narrowMatch` is used to specify the exact semantics. And lastly via `align:measure` the confidence that the relation holds between the first and the second entity, which in this case is a solid `1` (as confidence as it gets).

```turtle
:imbor-term_nen2767-4-term
        a               align:Alignment ;
        align:uri1      imbor-term: ;
        align:onto1     imbor-term: ;
        align:uri2      nen2767-term: ;
        align:onto2     nen2767-term: ;
        align:map       :mappingTerm_sluis_spuisluis ;
        .

:mappingTerm_sluis_spuisluis
        a               align:Cell ;
        align:entity1   imbor-term:10f4ea25-70d7-4e3a-9a05-d7be8dfb0e36 ;
        align:entity2   nen2676-term:BN ;
        align:relation  align:subsumes ;
        align:semantics skos:narrowMatch ;
        align:measure   "1.0"^^xsd:float ;
        .
```

> ADVISEMENT "Using predefined semantics"
>
> To ensure maximum understanding, it is part of this best practice to specify the value for `align:semantics` with the [predicates](https://mapping-commons.github.io/sssom/spec/#common-mapping-predicates) selected by [[SSSOM]].

To ensure the best interpretation _and_ reuse of the [=alignment=], the [[alignment format]] allows to declare extra information about the [=alignment=]. In this case `align:level` is used to declare that this is a `level 0` [=alignment=] which stands for _"alignments in which matched entities are identified by URIs"_. Furthermore it is needed to provide some provenance, authoring and versioning information. The [Alignment API](https://moex.gitlabpages.inria.fr/alignapi/labels.html) provides a minimal set based on [[DCTERMS]], which consists of a version description via `owl:versionInfo`, a title via `dct:title`, an indication of the matching method and description via `dct:description`,, a publisher via `dct:publisher` and a publish date via `dct:date`.

```turtle
:imbor-term_nen2767-4-term
        a               align:Alignment ;
        owl:versionInfo "0.1"@nl ;
        dct:title       "IMBOR en NEN2767-4 vocabulaire mapping"@nl ;
        dct:description "Handmatige voorbeeld mapping van de twee vocabulaires o.b.v. expert judgement"@nl ;
        dct:publisher   "Stichting CROW"@nl ;
        dct:date        "2022-12-31"^^xsd:date;
        align:level     "0" ;
        .
```

Now we have expressed in [[Turtle]], making use of the W3C standards [[RDF11-concepts]], [[OWL2-primer]], [[SKOS-primer]] and the [[alignment format]] that two terms from different [=ontologies=] have a "has narrower match" relation with each other. In this case two assetmanagers who use different vocabularies can logically explain how their words relate. This is shown in a basic diagram below:

<figure>

![](img/alignment-example-term.drawio.png)

<figcaption>
The basis components of the terms alignment in diagram form (without aspect properties)
</figcaption>
</figure>

Lastly, we add the necessary information to be compliant with the [[VoID]] standard. We declare that the two [=ontologies=] are `void:Dataset`s, that the [=alignment=] is an `void:Linkset` and via `void:feature` we declare that the [[turtle]] format is used. We conclude by describing the relation between the `void:Dataset`s and the `void:Linkset` via `void:target`. The complete result is shown below in [[Turtle]]:

```turtle
@prefix rdf:                <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:               <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl:                <http://www.w3.org/2002/07/owl#> .
@prefix skos:               <http://www.w3.org/2004/02/skos/core#> .
@prefix dct:                <http://purl.org/dc/terms/> .
@prefix imbor:              <https://data.crow.nl/imbor/def/> .
@prefix imbor-term:         <https://data.crow.nl/imbor/term/> .
@prefix imbor-domeinwaarde: <https://data.crow.nl/imbor/id/domeinwaarden/> .
@prefix nen2767:            <https://data.nen.nl/nen2767-4/def/> .
@prefix nen2767-term:       <https://data.nen.nl/nen2767-4/term/> .
@prefix void:               <http://rdfs.org/ns/void#> .
@prefix align:              <http://knowledgeweb.semanticweb.org/heterogeneity/alignment#> .

nen2767-term:
        a                align:Ontology void:Dataset ;
        void:feature    <http://www.w3.org/ns/formats/Turtle> ;
        align:location  "file:ex_ont_2767-4.ttl";
        align:formalism [   a   align:Formalism ;
                            align:name "SKOS"@en ;
                            align:uri "http://www.w3.org/2004/02/skos/core#" ] ;
        .

imbor-term:
        a               align:Ontology void:Dataset ;
        void:feature    <http://www.w3.org/ns/formats/Turtle> ;
        align:location  "file:ex_ont_imbor.ttl";
        align:formalism [   a   align:Formalism ;
                            align:name "SKOS"@en ;
                            align:uri "http://www.w3.org/2004/02/skos/core#" ] ;
        .

:imbor-term_nen2767-4-term
        a               align:Alignment, void:Linkset ;
        void:feature    <http://www.w3.org/ns/formats/Turtle> ;
        owl:versionInfo "0.1"@nl ;
        dct:title       "IMBOR en NEN2767-4 vocabulaire mapping"@nl ;
        dct:description "Handmatige voorbeeld mapping van de twee vocabulaires o.b.v. expert judgement"@nl ;
        dct:publisher   "Stichting CROW"@nl ;
        dct:date        "2022-12-31"^^xsd:date;
        align:level     "0" ;
        align:uri1      imbor-term: ;
        align:onto1     imbor-term: ;
        void:target     imbor-term: ;
        align:uri2      nen2767-term: ;
        align:onto2     nen2767-term: ;
        void:target     nen2767-term: ;
        align:map       :mappingTerm_sluis_spuisluis ;
        .

:mappingTerm_sluis_spuisluis
        a               align:Cell ;
        align:entity1   imbor-term:10f4ea25-70d7-4e3a-9a05-d7be8dfb0e36 ;
        align:entity2   nen2676-term:BN ;
        align:relation  align:subsumes ;
        align:semantics skos:narrowMatch ;
        align:measure   "1.0"^^xsd:float ;
        .
```

### Aligning the conceptuals

Aligning terms is a perfect way to start a complete [=alignment=]. It is relatively easy and provides a common ground for users. But when there is more to be wished for regarding other intended uses we need to be more expressive. This is definitely the case when machines get involved. As seen before the second wish for this example was an [=alignment=] of classes so that software vendors for assetmanagement applications can use the [=ontologies=] in conjunction in their software.

> ADVISEMENT
> It is advisable to start with creating an [=alignment=] on the [=terminological level=], to use this as base to create a more expressive [=alignment=] on the [=conceptual level=] and/or [=structural level=]. This is _not_ necessary.

Let's have a look at the different [=ontologies=] involved. First up we have the IMBOR [=ontology=]. Below is shown that `imbor:` is an `owl:Ontology`. In this case [[SHACL]] is used as a constraint language to further specify asset types. This shows because there is a `sh:NodeShape` (which is also a `rdfs:Class`) with the label "Sluis" (English: "Sluice") and is identified by `imbor:b193d52e-0243-4e0e-9f90-236edb35c624`. Furthermore there is `sh:PropertyShape` that specifies that every "Sluis" has to have at least one `rdf:Property` called "Type". And the value for this property should be an instance of the class with the label "SluisType". There is one instance specified, namely "Spuisluis" (English: "Drainage sluice").

There are also `rdfs:seeAlso` relations specified for each entity, which link to the vocabulary for IMBOR (which is used in the previous section). The use of `rdfs:seeAlso` is a prescribed in the [[NEN2660-2]].

```turtle
imbor:
        a               owl:Ontology ;
        rdfs:comment   "Dit normatieve gedeelte betreft de kern (de ontologie) van IMBOR"@nl ;
        rdfs:label     "IMBOR Kernmodel (ontologie)"@nl ;
        .

imbor:b193d52e-0243-4e0e-9f90-236edb35c624
        a                sh:NodeShape , rdfs:Class ;
        rdfs:seeAlso     imbor-term:10f4ea25-70d7-4e3a-9a05-d7be8dfb0e36 ;
        skos:definition  "Kunstwerk met een beweegbare waterkering, dat de verbinding vormt tussen twee wateren."@nl ;
        skos:prefLabel   "Sluis"@nl ;
        sh:property      imbor:664c6523-af24-43c5-9917-bad872c2b6bd ;
        .

imbor:664c6523-af24-43c5-9917-bad872c2b6bd
        a                       sh:PropertyShape ;
        skos:prefLabel          "type vastgezet op Sluis"@nl ;
        sh:path                 imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1 ;
        sh:qualifiedMaxCount    1 ;
        sh:qualifiedValueShape  [ sh:class  imbor:8caeda34-4605-4388-b07d-5b1761bdd4c3 ] ;
        .

imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1
        a                rdf:Property ;
        rdfs:seeAlso     imbor-term:f64e2373-5046-467e-b4d6-d49e8a74ef70 ;
        skos:definition  "Typering van het beheerobject."@nl ;
        skos:note        "Enumeratie"@nl ;
        skos:prefLabel   "type"@nl ;
        .

imbor:8caeda34-4605-4388-b07d-5b1761bdd4c3
        a                rdfs:Class ;
        rdfs:seeAlso     imbor-term:8f33f9ce-6138-47bb-81cd-038b81a9cbf8 ;
        rdfs:subClassOf  nen2660:EnumerationType ;
        skos:definition  "Het enumeratietype SluisType is de naam voor de domeinwaardenlijst van de klasse Sluis en het attribuut type."@nl ;
        skos:prefLabel   "SluisType"@nl ;
        .

imbor-domeinwaarde:2d9771b5-d707-47f8-9577-898f05eadd08
        a                imbor:8caeda34-4605-4388-b07d-5b1761bdd4c3 ;
        rdfs:seeAlso     imbor-term:0d1b5949-ae26-4f85-8ef0-b0491eeadcfe ;
        skos:definition  "Een sluis bedoeld om binnenwater te spuien, dat wil zeggen, het te lozen, en buitenwater te keren."@nl ;
        skos:prefLabel   "Spuisluis"@nl ;
        .
```

Next up, the NEN2767-4 [=ontology=] with one entity (nen2676:BN is the identifier for "Spuisluis" (English: "Drainage sluice"):

```turtle
nen2676:
        a              owl:Ontology ;
        rdfs:comment   "Dit normatieve gedeelte betreft de ontologie (de kern) van NEN2767-4"@nl ;
        rdfs:label     "NEN2767-4 Ontologie"@nl ;
        .

nen2676:BN
        a                rdfs:Class ;
        rdfs:seeAlso     nen2676-term:BN ;
        skos:definition  "Kunstwerk met een beweegbare waterkering, dat de verbinding vormt tussen twee wateren."@nl ;
        skos:prefLabel   "Spuisluis"@nl ;
        .
```

We can see that there are two classes that are related, but that there is more explicit information available to make the [=alignment=] more precise. From first perspective it seems that the NEN2676-4 class "Spuisluis", should be related to the IMBOR class "Sluis", but with the condition that the value of the property "SluisType" is "Spuisluis".

Because the intended use is usage in conjunction within software there is a [=semantic heterogeneity=] problem. Therefore we can decide that we make the [=alignment=] (at least) on the [=conceptual level=] and use [=expert-judgement=] as a method. If we run the [=matching=] process we see a [=correspondence=] between the two classes, but with a constraint. To express this in the [[alignment format]] we have to declare that the two [=ontologies=] involved are in scope via `align:Ontology`, where to find them via `align:location` and tell how to interpreted them via `align:formalism`. In this case the NEN2676 is expressed in [[RDF-Schema]] (RDFS) as implemented by the [[NEN2660-2]] and IMBOR is expressed in [[RDF-Schema]] (RDFS) and [[SHACL]] as implemented by the [[NEN2660-2]].

```turtle
nen2767:
        a               align:Ontology ;
        align:location  "file:ex_ont_2767-4.ttl";
        align:formalism [   a   align:Formalism ;
                            align:name "NEN2660-2 RDFS"@en ;
                            align:uri "https://w3id.org/nen2660/def" ] ;
        .

imbor:
        a                align:Ontology ;
        align:location  "file:ex_ont_imbor.ttl";
        align:formalism [   a   align:Formalism ;
                            align:name "NEN2660-2 RDFS/SHACL"@en ;
                            align:uri "https://w3id.org/nen2660/def" ] ;
        .
```

The next step is to create the actual [=alignment=] via `align:Alignment` and populating it by creating a [=correspondence=] via an `align:Cell`. In this case there are two [=ontologies=] and there is one 'mapping' called `:mapping_sluis_spuisluis`. In contrary to the [terms example](#aligning-the-terms) it is not sufficient to use the [[alignment format]], in this case the extension [[EDOAL]] is needed. To properly use [[EDOAL]] we have to express the entities from the involved [=ontologies=] according to the [[EDOAL]] ontology. This done by saying that IMBOR "Sluis", "SluisType" and "Spuisluis" are instances of respectively `edoal:Class`, `edoal:Property` and `edoal:Instance`. Furthermore, NEN2747-4 "Spuisluis" is also an instance of `edoal:Class`.

After this we can further comprise the `:mapping_sluis_spuisluis` as a complete mapping cell. This mapping cell states that there is `align:entity2` which is the NEN2767-4 class and `align:entity1` which is a blanknode which in turn states that on the class "Sluis" (`imbor:b193d52e-0243-4e0e-9f90-236edb35c624`) there is a 'property value restriction' on the property "SluisType" (`imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1`) with the value "Spuisluis" (`imbor-domeinwaarde:2d9771b5-d707-47f8-9577-898f05eadd08`).

Via `align:semantics` (which is a free text field) we can give further information about the semantics of the relation. In this case `owl:equivalentClass` is used to specify the exact semantics. And lastly via `align:measure` the confidence that the relation holds between the first and the second entity, which in this case is `1` (as confidence as it gets).

```turtle
:imbor_nen2767-4
        a               align:Alignment ;
        align:uri1      imbor: ;
        align:onto1     imbor: ;
        align:uri2      nen2767: ;
        align:onto2     nen2767: ;
        align:map       :mapping_sluis_spuisluis ;
        .

imbor:b193d52e-0243-4e0e-9f90-236edb35c624
        a   edoal:Class .
imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1
        a   edoal:Property .
imbor-domeinwaarde:2d9771b5-d707-47f8-9577-898f05eadd08
        a   edoal:Instance .
nen2676:BN
        a   edoal:Class .

:mapping_sluis_spuisluis
        a               align:Cell ;
        align:entity1   [ a edoal:Class ;
                            edoal:and   imbor:b193d52e-0243-4e0e-9f90-236edb35c624 ;
                            edoal:and   [ a edoal:propertyValueRestriction ;
                                        edoal:property  imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1 ;
                                        edoal:value     imbor-domeinwaarde:2d9771b5-d707-47f8-9577-898f05eadd08
                                        ]
                        ] ;
        align:entity2   nen2676:BN ;
        align:relation  align:equivalent ;
        align:semantics owl:equivalentClass ;
        align:measure   "1.0"^^xsd:float ;
        .
```

> ADVISEMENT "Using predefined semantics"
>
> To ensure maximum understanding, it is part of this best practice to specify the value for `align:semantics` with the [predicates](https://mapping-commons.github.io/sssom/spec/#common-mapping-predicates) selected by [[SSSOM]].

To ensure the best interpretation _and_ reuse of the [=alignment=], the [[alignment format]] allows to declare extra information about the [=alignment=]. In this case `align:level` is used to declare that this is a `level 2EDOAL` [=alignment=] which stands for _"more structured entities that may be represented in RDF. EDOAL mandates level 2 alignments."_. Furthermore it is needed to provide some provenance, authoring and versioning information. The [Alignment API](https://moex.gitlabpages.inria.fr/alignapi/labels.html) provides a minimal set based on [[DCTERMS]], which consists of a version description via `owl:versionInfo`, a title via `dct:title`, an indication of the matching method and description via `dct:description`,, a publisher via `dct:publisher` and a publish date via `dct:date`.

```turtle
:imbor_nen2767-4
        a               align:Alignment ;
        owl:versionInfo "0.1"@nl ;
        dct:title       "IMBOR en NEN2767-4 ontologie mapping"@nl ;
        dct:description "Handmatige voorbeeld mapping van de twee kernmodellen o.b.v. expert judgement"@nl ;
        dct:publisher   "Stichting CROW"@nl ;
        dct:date        "2023-01-03"^^xsd:date;
        align:level     "2EDOAL" ;
        .
```

Now we have expressed in [[Turtle]], making use of the W3C standards [[RDF11-concepts]], [[RDF-Schema]], [[OWL2-primer]], [[SHACL]] and the [[alignment format]], including the extension [[EDOAL]] and the [[NEN2660-2]] that two classes from different [=ontologies=] have a "equivalent" relation with each other. In this case software used by assetmanagers who use standards (e.g. IMBOR and NEN2767-4) in conjunction can logically logically deduct that instances are the same. This is shown in a basic diagram below:

<figure>

![](img/alignment-example-conceptual.drawio.png)

<figcaption>
The basis components of the conceptual/structural alignment in diagram form (without aspect properties)
</figcaption>
</figure>

Lastly, we add the necessary information to be compliant with the [[VoID]] standard. We declare that the two [=ontologies=] are `void:Dataset`s, that the [=alignment=] is an `void:Linkset` and via `void:feature` we declare that the [[turtle]] format is used. We conclude by describing the relation between the `void:Dataset`s and the `void:Linkset` via `void:target`. The complete result is shown below in [[Turtle]]:

```turtle
@prefix rdf:                <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:               <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl:                <http://www.w3.org/2002/07/owl#> .
@prefix skos:               <http://www.w3.org/2004/02/skos/core#> .
@prefix dct:                <http://purl.org/dc/terms/> .
@prefix imbor:              <https://data.crow.nl/imbor/def/> .
@prefix imbor-term:         <https://data.crow.nl/imbor/term/> .
@prefix imbor-domeinwaarde: <https://data.crow.nl/imbor/id/domeinwaarden/> .
@prefix nen2767:            <https://data.nen.nl/nen2767-4/def/> .
@prefix nen2767-term:       <https://data.nen.nl/nen2767-4/term/> .
@prefix void:               <http://rdfs.org/ns/void#> .
@prefix align:              <http://knowledgeweb.semanticweb.org/heterogeneity/alignment#> .
@prefix edoal:              <http://ns.inria.org/edoal/1.0/> .

nen2767:
        a               align:Ontology, void:Dataset ;
        void:feature    <http://www.w3.org/ns/formats/Turtle> ;
        align:location  "file:ex_ont_2767-4.ttl";
        align:formalism [   a   align:Formalism ;
                            align:name "NEN2660-2 RDFS"@en ;
                            align:uri "https://w3id.org/nen2660/def" ] ;
        .

imbor:
        a               align:Ontology, void:Dataset ;
        void:feature    <http://www.w3.org/ns/formats/Turtle> ;
        align:location  "file:ex_ont_imbor.ttl";
        align:formalism [   a   align:Formalism ;
                            align:name "NEN2660-2 RDFS/SHACL"@en ;
                            align:uri "https://w3id.org/nen2660/def" ] ;
        .

:imbor_nen2767-4
        a               align:Alignment, void:Linkset ;
        void:feature    <http://www.w3.org/ns/formats/Turtle> ;
        owl:versionInfo "0.1"@nl ;
        dct:title       "IMBOR en NEN2767-4 ontologie mapping"@nl ;
        dct:description "Handmatige voorbeeld mapping van de twee kernmodellen o.b.v. expert judgement"@nl ;
        dct:publisher   "Stichting CROW"@nl ;
        dct:date        "2023-01-03"^^xsd:date;
        align:level     "2EDOAL" ;
        align:uri1      imbor: ;
        align:onto1     imbor: ;
        void:target     imbor: ;
        align:uri2      nen2767: ;
        align:onto2     nen2767: ;
        void:target     nen2767: ;
        align:map       :mapping_sluis_spuisluis ;
        .
imbor:b193d52e-0243-4e0e-9f90-236edb35c624
        a   edoal:Class .
imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1
        a   edoal:Property .
imbor-domeinwaarde:2d9771b5-d707-47f8-9577-898f05eadd08
        a   edoal:Instance .
nen2676:BN
        a   edoal:Class .

:mapping_sluis_spuisluis
        a               align:Cell ;
        align:entity1   [ a edoal:Class ;
                            edoal:and   imbor:b193d52e-0243-4e0e-9f90-236edb35c624 ;
                            edoal:and   [ a edoal:propertyValueRestriction ;
                                        edoal:property  imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1 ;
                                        edoal:value     imbor-domeinwaarde:2d9771b5-d707-47f8-9577-898f05eadd08
                                        ]
                        ] ;
        align:entity2   nen2676:BN ;
        align:relation  align:equivalent ;
        align:semantics owl:equivalentClass ;
        align:measure   "1.0"^^xsd:float ;
        .
```
