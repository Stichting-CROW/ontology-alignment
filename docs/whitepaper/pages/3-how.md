## Learn HOW to make it

Now the [what](#learn-what-it-is) and [why](#learn-why-to-use-it) are clear, the 'how-to' is left.

<figure>

![](img/matching-proces.drawio.png)

<figcaption>
The matching process in essence
</figcaption>
</figure>

The process of making the [=alignment=] is, in essence, fairly straightforward. It starts with two [=ontologies=] that need [=matching=] because of a [heterogeneity problem](#heterogeneity-problem). The intended use of the [=linkset=], in combination with the heterogeneity problem results in a descision for 1) the [matching method](#matching-methods) and 2) the [level(s)](#alignment-levels) at which the [=linksets=] are made. When the [=ontologies=] are identified and the kind of problem is clear, the actual [=ontology matching=] can be conducted. The matching will result in an [=ontology alignment=], which consists of a set of [=correspondence=]s. the [=alignment=] can be seen as a [=mapping=] from one [=ontology=] to another (directed), consisting of a set of [=mapping rule=]s.

To illustrate the process and the end result, we make use of a real life example situation regarding two [=ontologies=] about the built environment. Specifically about maintaining public spaces. This example will be used throughout the whole document.

> EXAMPLE
> CROW and NEN are two organisations that manage an [=ontology=] within the domain of public space management. The ontology by CROW is called 'IMBOR', which focusses on describing which (physical) asset types exist in the domain and what information municipalities need to efficiently maintain those assets. The ontology by NEN is called NEN2767-4, which focusses on a method for assessing conditions and states for (physical) asset types. While they have different intended uses and scopes, there are similarities in the asset types they describe. Municipalities that are responsible for maintaining the public space use both to get (and keep) a complete picture of their (physical) assets. Therefore there is a wish to 1) align the terms so that assetmanagers speak the same language and 2) align the classes (or: conceptuals) so that software vendors for assetmanagement applications can use both [=ontologies=] in their software. With this latter [=linkset=] it will be possible to make use of the common ground and transition the data, to use it for multiple purposes.

The used example is nice and simple. It’s certain that real life data is considerably more complex! It might not be immediately obvious how to apply these lessons. But one should be cautious about complicating the [=linksets=]. Usually, a simple [=linkset=] already solves a significant part of the problems. Therefore, think carefully about whether it really needs to be that complicated.

In this example, the two [=ontologies=]  used are both [[NEN2660-2]] compliant (or made so for the purpose of this example). They make a distinction between the vocabulary and the [=ontology=] and they use shapes to define the data structure. This structure is not obligatory for applying this best practice. But using this (graph) structure as a form of expression is advisable, as detailed in the [[NEN2660-2]].

### Creating the informal alignment

Let's start with the first wish for an [=alignment=] on the [=informal semantics=] ([=terminological level=]). First we have to look at the two [=ontologies=] and see what is there.

Below is the IMBOR vocabulary [=ontology=]. This contains one entity (`imbor-term:10f4ea25-70d7-4e3a-9a05-d7be8dfb0e36`), being the the identifier for "Sluis" (English: "Sluice" or "Lock").

```turtle
imbor-term:
        a               owl:Ontology ;
        rdfs:comment    "Dit normatieve gedeelte betreft de vocabulaire van IMBOR"@nl ;
        rdfs:label      "IMBOR Vocabulaire"@nl ;
        .

imbor-term:10f4ea25-70d7-4e3a-9a05-d7be8dfb0e36
        a                skos:Concept ;
        skos:definition  "Kunstwerk met een beweegbare waterkering, dat de verbinding vormt tussen twee wateren."@nl ;
        skos:inScheme    imbor-term:term-schema ;
        skos:prefLabel   "Sluis"@nl ;
        .
```

Next up, the NEN2767-4 vocabulary [=ontology=] with one entity (`nen2767-term:BN` is the identifier for "Spuisluis") (English: "Drainage sluice" or "River lock"):

```turtle
nen2767-term:
        a             owl:Ontology ;
        rdfs:comment  "Dit is wellicht gelijk aan de NPR van NEN2767-4"@nl ;
        rdfs:label    "NEN2767-4 Vocabulaire"@nl ;
        .

nen2767-term:BN
        a                skos:Concept ;
        skos:definition  "Uitwateringssluis om een overvloed aan water op het binnenwater gereguleerd naar een lager gelegen buitenwater te laten afvloeien. Tevens dient de spuisluis voor het keren van buitenwater."@nl ;
        skos:prefLabel   "Spuisluis"@nl ;
        .
```

Domain experts will know that the two terms, "Spuisluis" and "Sluis", are related. At first glance, it appears that the NEN2767-4 term "Spuisluis" is more specific than the IMBOR term "Sluis".

Because the intended use is in (spoken) natural language and there is a [=terminological heterogeneity=] problem, we can decide that we make an informal [=alignment=] on the [=terminological level=] and use [=expert-judgement=] as a method. If we run the matching process we see a [=correspondence=] between the two terms. To express this in a [=linkset=] we have to declare which two [=ontologies=] are in scope. This is done via pointing to each `owl:Ontology`. Then we declare which version of the [=ontology=] is being used, via `owl:versionInfo`. And lastly we express how to interpret the terms via `dct:conformsTo`, to which expected values are `<http://www.w3.org/2004/02/skos/core#>` and `http://www.w3.org/2002/07/owl#`. In this case both are expressed in [[skos-reference]].

```turtle
nen2767-term:  rdf:type         owl:Ontology ;
        owl:versionInfo         "1.6" ;
        dct:conformsTo          <http://www.w3.org/2004/02/skos/core#> ;
        .

imbor-term:  rdf:type           owl:Ontology ;
        owl:versionInfo         "2022" ;
        dct:conformsTo          <http://www.w3.org/2004/02/skos/core#> ;
        .   
```

The next step is to create the actual [=link=] via a [[skos-reference]] predicate. The mapping below states that the IMBOR term for "Sluis" has the narrow match "Spuisluis" in NEN2767-4.

```turtle
imbor-term:10f4ea25-70d7-4e3a-9a05-d7be8dfb0e36 
        skos:narrowMatch 
                nen2767-term:BN
```

> ADVISEMENT "Using predefined semantics"
>
> To ensure maximum understanding, it is part of this best practice to specify the value for the predicate with the [predicates](https://mapping-commons.github.io/sssom/spec-model/#allowed-and-common-mapping-predicates) selected by [[SSSOM]].

To ensure the best interpretation _and_ reuse of the [=alignment=] (and other [=linksets=]), some extra information is to be declared about the [=alignment=] in the form of its own [=ontology=] and metadata. In this case `rdfs:label` is used to name the set and `rdfs:comment` is used to provide an indication of the matching method and a description. Furthermore the [=ontology=] is needed to provide some provenance, authoring and versioning information. Therefore a publisher is provided via `dct:publisher` and a publish date via `dct:issued`. Similar to the [=ontologies=] `dct:conformsTo` is used to declare the formal language in which the [=linkset=] is written. This example identifies that the [=alignment=] is on the [=terminological level=] too ([[skos-reference]]). `dct:instructionalMethod` is used in this best practice to state the intended use of the [=linkset=]. Lastly `owl:versionInfo` defines the version of the [=linkset=] and an `owl:imports` statement is then used to reference the used [=ontologies=] from the previous step, whose meaning is considered to be part of the meaning of the importing ontology.

```turtle
:imbor-term_nen2767-4-term    rdf:type    owl:Ontology, void:Linkset ;
        rdfs:label              "IMBOR en NEN2767-4 vocabulaire mapping"@nl ;
        rdfs:comment            "Handmatige voorbeeld mapping van de twee vocabulaires o.b.v. expert judgement"@nl ;
        dct:publisher           "Stichting CROW"@nl ;
        dct:issued              "2022-12-31"^^xsd:date ;
        dct:conformsTo          <http://www.w3.org/2004/02/skos/core#> ;  
        dct:instructionalMethod "Deze linkset mag alleen gebruikt worden in de context van de Ontology Alignment whitepaper t.b.v. de vergelijking van twee termen"@nl ; 
        owl:versionInfo         "1.0.0" ;
        owl:imports             imbor-term:, nen2767-term: ;
        .
```

>ADVISEMENT
>We also declare that this [=linkset=] is a `void:Linkset`. While we do not use the [[VoID]] standard anywhere else, the specific semantics of a `void:Linkset` distinguishes the [=alignment=] from the aligned [=ontologies=]. 

<figure>

![](img/alignment-example-term.drawio.png)

<figcaption>
The basis components of the terms alignment in diagram form (without aspect properties)
</figcaption>
</figure>

### Creating the formal alignment

Starting with aligning terms is a perfect way to works towards a complete [=alignment=]. Matching on this level is relatively easy and provides a common ground for users. But when more advanced functionality is required we need to be more precise. This is certainly the case when logical inferences are required to be made by software. The next
step in our example is therefore an [=alignment=] of classes so that software vendors for assetmanagement applications can use the [=ontologies=] in conjunction in their software.

> ADVISEMENT
> It is advisable to start with creating an [=alignment=] based on the [=informal semantics=], to use this as base to create a more formal [=alignment=] on the [=conceptual level=]. This step is _not_ necessary however for all use scenarios.

Let's have a look at the different [=ontologies=] involved. First up we have the IMBOR [=ontology=]. Below is shown that `imbor:` is an `owl:Ontology`. In this case [[SHACL]] is used as a constraint language to further specify asset types. This is apparent because there is a `sh:NodeShape` (which is also a `rdfs:Class`) with the label "Sluis" (English: "Sluice") and is identified by `imbor:b193d52e-0243-4e0e-9f90-236edb35c624`. Furthermore there is `sh:PropertyShape` that specifies that every "Sluis" has to have at least one `rdf:Property` called "Type". And the value for this property should be an instance of the class with the label "SluisType". There is one instance specified, namely "Spuisluis" (English: "Drainage sluice").

There are also `rdfs:seeAlso` relations specified for each entity, which link to the vocabulary for IMBOR (which is used in the previous section). The use of `rdfs:seeAlso` is a prescribed in the [[NEN2660-2]].

```turtle
imbor:
        a               owl:Ontology ;
        rdfs:comment    "Dit normatieve gedeelte betreft de kern (de ontologie) van IMBOR"@nl ;
        rdfs:label      "IMBOR Kernmodel (ontologie)"@nl ;
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

Next up, the NEN2767-4 [=ontology=] with one entity (nen2767:BN is the identifier for "Spuisluis" (English: "Drainage sluice")):

```turtle
nen2767:
        a              owl:Ontology ;
        rdfs:comment   "Dit normatieve gedeelte betreft de ontologie (de kern) van NEN2767-4"@nl ;
        rdfs:label     "NEN2767-4 Ontologie"@nl ;
        .

nen2767:BN
        a                rdfs:Class ;
        rdfs:seeAlso     nen2767-term:BN ;
        skos:definition  "Kunstwerk met een beweegbare waterkering, dat de verbinding vormt tussen twee wateren."@nl ;
        skos:prefLabel   "Spuisluis"@nl ;
        .

nen2767:93
        rdf:type        rdfs:Class ;
        skos:prefLabel  "Cementbeton"@nl ;
        .
```

Again we know that there are two classes that are related, but that there is more explicit information available to make the [=alignment=] more precise. From first glance it seems that the NEN2767-4 class "Spuisluis", should be related to the IMBOR class "Sluis", but with the condition that the value of the property "SluisType" is "Spuisluis".

Because the intended use is usage in conjunction within software there is a [=semantic heterogeneity=] problem. Therefore we can decide that we make a formal [=alignment=] on the [=conceptual level=] and use [=expert-judgement=] as a method. If we run the [=matching=] process we see a [=correspondence=] between the two classes, but with a constraint. To express this relation we have to declare that the two [=ontologies=] involved are in scope via `owl:Ontology` and tell how to interpreted them via `dct:conformsTo`. In this case the NEN2767 is expressed in [[RDF-Schema]] (RDFS) as implemented by the [[NEN2660-2]] and IMBOR is expressed in [[RDF-Schema]] (RDFS) and [[SHACL]] as implemented by the [[NEN2660-2]].

```turtle
nen2767:  rdf:type              owl:Ontology ;
        owl:versionInfo         "1.6" ;
        dct:conformsTo          <https://w3id.org/nen2660/def> ;
        .

imbor:  rdf:type                owl:Ontology ;
        owl:versionInfo         "2022" ;
        dct:conformsTo          <https://w3id.org/nen2660/def> ;
        .    
```

The next step is to create the actual [=alignment=]. In this case there are two [=ontologies=] and there is one 'mapping' called `:mapping_sluis_spuisluis`. In contrary to the [terms example](#creating-the-informal-alignment) it is not sufficient to use the [[skos-reference]] semantics, in this case the [=formal semantics=] of [[OWL2-overview]] are needed. 

- A class is created: `mapping_sluis_spuisluis`. This is a non-descriptive name and this _may_ be a blanknode.   
  - This class has two properties, the first is `owl:intersectionOf`. This property links a class to a list of class descriptions. 
    - In this example there are two in this list, the first being "Sluis" (`imbor:b193d52e-0243-4e0e-9f90-236edb35c624`) and the second a blanknode. 
    - This blanknode is a `owl:Restriction` (class) and has in turn two properties. 
      - The first (`owl:onProperty`) states that the restriction holds for the property "type" (`imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1`) 
      - and the second that this should have the value "Spuisluis" (`imbor-domeinwaarde:2d9771b5-d707-47f8-9577-898f05eadd08`). 
  - This second property of `mapping_sluis_spuisluis` is `owl:equivalentClass`, the meaning of which is that the two have exactly the same set of individuals. In this example "Spuisluis" (`nen2767:BN`) is used. 

> NOTE
> In many cases a relation such as `owl:equivalentClass` can be used directly between two classes, without the need for further elaboration. In the example below, however, the mapping needs to assert more than an equivalence between two classes from different ontologies. That is, IMBOR requires an intersection (i.e., a combination) of a certain IMBOR class and a specific value of an IMBOR property. To capture this requirement in a formal manner, the example coins a new (anonymous) class that represents the intersection.

The above states in formal [[OWL2-overview]] that individuals of the class NEN2767 "Spuisluis" may be considered as the same individuals from the IMBOR "Sluis" class, but only if the have the value "Spuisluis" on the property "type". 

```turtle
:entity_according_to_imbor_for_spuisluis
        owl:intersectionOf (
                imbor:b193d52e-0243-4e0e-9f90-236edb35c624 
                [ a owl:Restriction ;
                owl:onProperty imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1 ;
                owl:hasValue imbor-domeinwaarde:2d9771b5-d707-47f8-9577-898f05ead
                ] 
        ) ;
        owl:equivalentClass nen2767:BN ;
        .
```

> ADVISEMENT "Using predefined semantics"
>
> To ensure maximum understanding, it is part of this best practice to specify the alignment via the [[OWL2-overview]] constructs.

To ensure the best interpretation _and_ reuse of the [=alignment=] (and other [=linksets=]), some extra information is to be declared about the [=alignment=]. In this case `rdfs:label` is used name the set and `rdfs:comment` is used to provide an indication of the matching method and a description. Furthermore it is needed to provide some provenance, authoring and versioning information. Therefore a publisher is provided via `dct:publisher` and a publish date via `dct:issued`. Similar to the [=ontologies=] `dct:conformsTo` is used to declare the formal language in which the [=linkset=] is written. This also identifies that the [=alignment=] is on the [=conceptual level=] ([[OWL2-overview]]). `dct:instructionalMethod` is used in this best practice to state the intended use of the [=linkset=]. Lastly `owl:versionInfo` defines the version of the [=linkset=] and an `owl:imports` statement is then used to reference the used [=ontologies=] from the last step, whose meaning is considered to be part of the meaning of the importing ontology.

```turtle
:imbor_nen2767-4    rdf:type    owl:Ontology, void:Linkset ;
        rdfs:label              "IMBOR en NEN2767-4 ontologie mapping"@nl ;
        rdfs:comment            "Handmatige voorbeeld mapping van de twee kernmodellen o.b.v. expert judgement"@nl ;
        dct:publisher           "Stichting CROW"@nl ;
        dct:issued              "2023-01-03"^^xsd:date;   
        dct:conformsTo          <http://www.w3.org/2002/07/owl#> ;
        dct:instructionalMethod "Deze linkset mag alleen gebruikt worden in de context van de Ontology Alignment whitepaper t.b.v. de vergelijking van twee classes"@nl ;      
        owl:versionInfo         "1.0.0" ;
        owl:imports             imbor:, nen2767: ;
        .
```

Now we have expressed in [[Turtle]], making use of the W3C standards [[RDF11-concepts]], [[RDF-Schema]], [[OWL2-overview]] and the [[NEN2660-2]], that two classes from different [=ontologies=] have an "equivalent" relation with each other. In this case software used by assetmanagers who use standards (e.g. IMBOR and NEN2767-4) in conjunction can logically deduct that instances of the one class are instances of the other. The m[=mapping=] is shown in a basic diagram below:

<figure>

![](img/alignment-example-conceptual.drawio.png)

<figcaption>
The basis components of the conceptual/structural alignment in diagram form (without aspect properties)
</figcaption>
</figure>

>ADVISEMENT
>We also declare that this [=linkset=] is a `void:Linkset`. While we do not use the [[VoID]] standard anywhere else, the specific semantics of a `void:Linkset` distinguishes the [=alignment=] from the aligned [=ontologies=]. 

The complete result is shown below in [[Turtle]]:

```turtle
@prefix rdf:                <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:               <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl:                <http://www.w3.org/2002/07/owl#> .
@prefix sh:                 <http://www.w3.org/ns/shacl#> .
@prefix xsd:                <http://www.w3.org/2001/XMLSchema#> .
@prefix skos:               <http://www.w3.org/2004/02/skos/core#> .
@prefix dct:                <http://purl.org/dc/terms/> .
@prefix imbor:              <https://data.crow.nl/imbor/def/> .
@prefix imbor-domeinwaarde: <https://data.crow.nl/imbor/id/domeinwaarden/> .
@prefix nen2767:            <https://data.nen.nl/nen2767-4/def/> .
@prefix void:               <http://rdfs.org/ns/void#> .

nen2767:  rdf:type              owl:Ontology ;
        owl:versionInfo         "1.6" ;
        dct:conformsTo          <https://w3id.org/nen2660/def> ;
        .

imbor:  rdf:type                owl:Ontology ;
        owl:versionInfo         "2022" ;
        dct:conformsTo          <https://w3id.org/nen2660/def> ;
        .       

:imbor_nen2767-4    rdf:type    owl:Ontology, void:Linkset  ;
        rdfs:label              "IMBOR en NEN2767-4 ontologie mapping"@nl ;
        rdfs:comment            "Handmatige voorbeeld mapping van de twee kernmodellen o.b.v. expert judgement"@nl ;
        dct:publisher           "Stichting CROW"@nl ;
        dct:issued              "2023-01-03"^^xsd:date;   
        dct:conformsTo          <http://www.w3.org/2002/07/owl#> ;   
        dct:instructionalMethod "Deze linkset mag alleen gebruikt worden in de context van de Ontology Alignment whitepaper t.b.v. de vergelijking van twee classes"@nl ;   
        owl:versionInfo         "1.0.0" ;
        owl:imports             imbor:, nen2767: ;
        .

:mapping_sluis_spuisluis
        owl:intersectionOf (
                imbor:b193d52e-0243-4e0e-9f90-236edb35c624 
                [ a owl:Restriction ;
                owl:onProperty imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1 ;
                owl:hasValue imbor-domeinwaarde:2d9771b5-d707-47f8-9577-898f05ead
                ] 
        ) ;
        owl:equivalentClass nen2767:BN ;
        .
```

> ADVISEMENT
> These kinds of [=mappings=] can be applied to all [=ontologies=] that use [=formal semantics=] for a strong [=alignment=] between classes, whether they are `rdfs:Class`, `owl:Class` or `sh:NodeShape`.

### Extending the conceptuals

The second kind of [=linkset=] is an [=extension=]. Below is a complete example in the context of IMBOR and NEN2767. 

First we have to declare which two [=ontologies=] are in scope. After this we want to say that an Sluice can consists of the material 'cementcrete'. Therefore we extend (or 'link') "Sluis" from IMBOR (`imbor:b193d52e-0243-4e0e-9f90-236edb35c624`) with the [[NEN2660-2]] property `nen2660:consistOf` and the value "Cementbeton" (`nen2767:93`). 

To ensure the best interpretation _and_ reuse of the [=extension=], some extra information is to be declared about the [=extension=]. In this case `rdfs:label` is used name the set and `rdfs:comment` is used to provide an indication of the matching method and a description. Furthermore it is needed to provide some provenance, authoring and versioning information. Therefore a publisher is provided via `dct:publisher` and a publish date via `dct:issued`. `dct:conformsTo` is used to declare the formal language in which the [=extension=] is written and `owl:versionInfo` defines the version of the [=extension=]. An `owl:imports` statement is then used to reference the used [=ontologies=] from the last step, whose meaning is considered to be part of the meaning of the importing ontology.

> ADVISEMENT "Using predefined semantics"
>
> To ensure maximum understanding, it is part of this best practice to specify the extension via the [[NEN2660-2]] predicates.

```turtle
nen2767:  rdf:type              owl:Ontology ;
        dct:conformsTo          <https://w3id.org/nen2660/def> ;
        owl:versionInfo         "1.6" ;
        .

imbor:  rdf:type                owl:Ontology ;
        dct:conformsTo          <https://w3id.org/nen2660/def> ;
        owl:versionInfo         "2022" ;
        .       

imbor:b193d52e-0243-4e0e-9f90-236edb35c624
        rdfs:subClassOf [
                        a owl:Restriction ;
                        owl:onProperty nen2660:consistsOf ;
                        owl:allValuesFrom nen2767:93 
                        ]
        . 

:imbor_object_nen2767-4_matter    rdf:type    owl:Ontology, void:Linkset ;
        rdfs:label      "Link tussen IMBOR Objecttypen en NEN2767-4 materialen"@nl ;
        rdfs:comment    "Handmatig voorbeeld van een link tussen de twee kernmodellen o.b.v. expert judgement"@nl ;
        dct:publisher   "Stichting CROW"@nl ;
        dct:issued      "2023-12-24"^^xsd:date;   
        owl:versionInfo "1.0.0" ;
        owl:imports     imbor:, nen2767: ;
        .
```

>ADVISEMENT
>We also declare that this [=linkset=] is a `void:Linkset`. While we do not use the [[VoID]] standard anywhere else, the specific semantics of a `void:Linkset` distinguishes the [=alignment=] from the aligned [=ontologies=]. 

<figure>

![](img/extension-example-conceptual.drawio.png)

<figcaption>
Simplified diagram of the basis components of the extension in diagram form (without aspect properties)
</figcaption>
</figure>

>NOTE
>Sharing linksets separately (as described earlier) is not always common. In the use of top models we tend to see the links shared as part of the ontology that is extending the top model. A top model is a shared framework through which meaning is expressed so as to have some basic agreements with others. For example, the agreement: "these are all physical objects". Knowledge from the top model is therefore a set of shared agreements at a more abstract level, which one often wants to build on directly without a desire to be flexible in selecting other models as a potential top model through separate linksets.
