## Learn HOW to make it

Now the [what](#learn-what-it-is) and [why](#learn-why-to-use-it) are clear, the 'how-to' is left?

<figure>

![](img/matching-proces.drawio.png)

<figcaption>
The matching process in essence
</figcaption>
</figure>

The process in essence is fairly straightforward. It starts with two [=ontologies=] that need [=matching=] because of a [heterogeneity problem](#heterogeneity-problem). The intended use of the [=linkset=], in combination with the heterogeneity problem results in a descision for 1) the [matching method](#matching-methods) and 2) the [level(s)](#alignment-levels) at which the [=linksets=] are made. When the [=ontologies=] are identified and the kind of problem is clear, the actual [=ontology matching=] can be conducted. The matching will result in an [=ontology alignment=], which consists of a set of [=correspondence=]s. the [=alignment=] can be seen as a [=mapping=] from one [=ontology=] to another (directed), consisting of a set of [=mapping rule=]s.

To illustrate the process and the endresult, we make use of a real life example situation regarding two [=ontologies=] about the build environment. Specifically about maintaining public space.

There are two organisations that manage an [=ontology=] within the domain of public space management. The first is called 'IMBOR', which focusses on describing which (physical) asset types exists in the domain and what information municipalities need, to efficiently maintain those assets. The second is called NEN2767-4, which focusses on a method for assessing conditions and states for (physical) asset types. While they have a different intended use and scope, there are similarities in the asset types they describe. Next to that, municipalities that are responsible for maintaining the public space use both to get (and keep) a complete picture of their (physical) assets. Therefore there is a wish to 1) align the terms so that assetmanagers speak the same language and 2) align the classes (or: conceptuals) so that software vendors for assetmanagement applications can use both [=ontologies=] in their software. Having this latter [=linkset=] it is possible make use of the common ground and transition the data, to use it for multiple purposes.

> ADVISEMENT
> The [=ontologies=] used as examples are both [[NEN2660-2]] compliant (the NEN2767-4 is made compliant for the example). Therefore they make a distinction between the vocabulary and the [=ontology=] and the use shapes to define the data structure. This is not obligatory in this best practice. But using this (graph) structure as expression is advisable, since it align with the alignment levels in this best practice.
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
> This example is nice and simple. It’s certain that real life data is considerably more complex! It might not be immediately obvious how to apply this lessons. But one should be cautious about complicating the [=linksets=]. Usually, a simple [=linkset=] already solves a significant part of the problems. Therefore, think carefully about whether it really needs to be that complicated.

### Aligning the terms

Let's start with the first wish for an [=alignment=] on the [=terminological level=]. First we have to look at the two [=ontologies=] and see what is there.

Below is the IMBOR vocabulary [=ontology=] with one entity (`imbor-term:10f4ea25-70d7-4e3a-9a05-d7be8dfb0e36`) is the identifier for "Sluis" (English: "Sluice").

```turtle
imbor-term:
        a             owl:Ontology ;
        rdfs:comment  "Dit normatieve gedeelte betreft de vocabulaire van IMBOR"@nl ;
        rdfs:label    "IMBOR Vocabulaire"@nl ;
        .

imbor-term:10f4ea25-70d7-4e3a-9a05-d7be8dfb0e36
        a                skos:Concept ;
        skos:definition  "Kunstwerk met een beweegbare waterkering, dat de verbinding vormt tussen twee wateren."@nl ;
        skos:inScheme    imbor-term:term-schema ;
        skos:prefLabel   "Sluis"@nl ;
        .
```

Next up, the NEN2767-4 vocabulary [=ontology=] with one entity (`nen2676-term:BN` is the identifier for "Spuisluis") (English: "Drainage sluice"):

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

Because the intended use is in (spoken) natural language and there is a [=terminological heterogeneity=] problem, we can decide that we make the [=alignment=] on the [=terminological level=] and use [=expert-judgement=] as a method. If we run the matching process we see a [=correspondence=] between the two terms. To express this we have to declare which two [=ontologies=] are in scope. This is done via pointing to an `owl:Ontology`. Then we declare which version of set [=ontology=] is being used, via `owl:versionInfo`. And lastly how to interpreted them via `dct:conformsTo`. In this case both are expressed in [[SKOS-primer]].

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

The next step is to create the actual [=link=] via a [[SKOS-primer]] predicate. This mapping states that there is one entity (or: term) from IMBOR that is a narrow match to one from NEN2767-4. The express the exact semantics, `skos:narrowMatch` is used. 

```turtle
imbor-term:10f4ea25-70d7-4e3a-9a05-d7be8dfb0e36 
        skos:narrowMatch 
                nen2676-term:BN
```

> ADVISEMENT "Using predefined semantics"
>
> To ensure maximum understanding, it is part of this best practice to specify the value for the predicate with the [predicates](https://mapping-commons.github.io/sssom/spec/#common-mapping-predicates) selected by [[SSSOM]].

To ensure the best interpretation _and_ reuse of the [=alignment=] (and other [=linksets=]), some extra information is to be declared about the [=alignment=]. In this case `dct:title` is used name the set and `dct:description` is used to provide an indication of the matching method and a description. Furthermore it is needed to provide some provenance, authoring and versioning information. Therefore a publisher is provided via `dct:publisher` and a publish date via `dct:issued`. Similar to the [=ontologies=] `dct:conformsTo` is used to declare the formal language in which the [=linkset=] is written. This also identifies that the [=alignment=] is on the [=terminological level=] ([[SKOS-primer]]). `dct:instructionalMethod` is used in this best practice to state the intended use of the [=linkset=]. Lastly `owl:versionInfo` defines the version of the [=linkset=] and an `owl:imports` statement is then used to reference the used [=ontologies=] from the last step, whose meaning is considered to be part of the meaning of the importing ontology.

```turtle
:imbor-term_nen2767-4-term    rdf:type    owl:Ontology, void:Linkset ;
        dct:title               "IMBOR en NEN2767-4 vocabulaire mapping"@nl ;
        dct:description         "Handmatige voorbeeld mapping van de twee vocabulaires o.b.v. expert judgement"@nl ;
        dct:publisher           "Stichting CROW"@nl ;
        dct:issued              "2022-12-31"^^xsd:date ;
        dct:conformsTo          <http://www.w3.org/2004/02/skos/core#> ;  
        dct:instructionalMethod "Deze linkset mag alleen gebruikt worden in de context van de Ontology Alignment whitepaper t.b.v. de vergelijking van twee termen"@nl ; 
        owl:versionInfo         "1.0.0" ;
        owl:imports             imbor-term:, nen2767-term: ;
        .
```

>ADVISEMENT
>We also declare that this [=linkset=] is a `void:Linkset`. While we do not use the [[VoID]] standard anywhere else, the specific semantics of a `void:Linkset` seperates the used `owl:Ontology`s in the whole process. 

<figure>

![](img/alignment-example-term.drawio.png)

<figcaption>
The basis components of the terms alignment in diagram form (without aspect properties)
</figcaption>
</figure>

### Aligning the conceptuals

Aligning terms is a perfect way to start a complete [=alignment=]. It is relatively easy and provides a common ground for users. But when there is more to be wished for regarding other intended uses we need to be more expressive. This is definitely the case when machines get involved. As seen before the second wish for this example was an [=alignment=] of classes so that software vendors for assetmanagement applications can use the [=ontologies=] in conjunction in their software.

> ADVISEMENT
> It is advisable to start with creating an [=alignment=] on the [=terminological level=], to use this as base to create a more expressive [=alignment=] on the [=conceptual level=]. This is _not_ necessary.

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

Next up, the NEN2767-4 [=ontology=] with one entity (nen2676:BN is the identifier for "Spuisluis" (English: "Drainage sluice")):

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

nen2676:93
        rdf:type        rdfs:Class ;
        skos:prefLabel  "Cementbeton"@nl .
```

We can see that there are two classes that are related, but that there is more explicit information available to make the [=alignment=] more precise. From first perspective it seems that the NEN2676-4 class "Spuisluis", should be related to the IMBOR class "Sluis", but with the condition that the value of the property "SluisType" is "Spuisluis".

Because the intended use is usage in conjunction within software there is a [=semantic heterogeneity=] problem. Therefore we can decide that we make the [=alignment=] on the [=conceptual level=] and use [=expert-judgement=] as a method. If we run the [=matching=] process we see a [=correspondence=] between the two classes, but with a constraint. To express this we have to declare that the two [=ontologies=] involved are in scope via `owl:Ontology` and tell how to interpreted them via `dct:conformsTo`. In this case the NEN2676 is expressed in [[RDF-Schema]] (RDFS) as implemented by the [[NEN2660-2]] and IMBOR is expressed in [[RDF-Schema]] (RDFS) and [[SHACL]] as implemented by the [[NEN2660-2]].

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

The next step is to create the actual [=alignment=]. In this case there are two [=ontologies=] and there is one 'mapping' called `:mapping_sluis_spuisluis`. In contrary to the [terms example](#aligning-the-terms) it is not sufficient to use the [[SKOS-primer]] semantics, in this case the formal semantics of [[OWL2-primer]] are needed. 

- A class is created: `mapping_sluis_spuisluis`. This is a non-descriptive name and this _may_ be a blanknode.   
  - This class has two properties, the first is `owl:intersectionOf`. This property links a class to a list of class descriptions. 
    - In this example there are two in this list, the first being "Sluis" (`imbor:b193d52e-0243-4e0e-9f90-236edb35c624`) and the second a blanknode. 
    - This blanknode is a `owl:Restriction` (class) and has in turn two properties. 
      - The first (`owl:onProperty`) states that the restriction holds for the property "type" (`imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1`) 
      - and the second that this should have the value "Spuisluis" (`imbor-domeinwaarde:2d9771b5-d707-47f8-9577-898f05eadd08`). 
  - This second property of `mapping_sluis_spuisluis` is `owl:equivalentClass`, the meaning of which is that the two have exactly the same set of individuals. In this example "Spuisluis" (`nen2767:BN`) is used. 

The above states in formal [[OWL2-primer]] that individuals of the class NEN2767 "Spuisluis" may be considered as the same individuals from the IMBOR "Sluis" class, but only if the have the value "Spuisluis" on the property "type". 

```turtle
:mapping_sluis_spuisluis
        owl:intersectionOf (
                imbor:b193d52e-0243-4e0e-9f90-236edb35c624 
                [ a owl:Restriction ;
                owl:onProperty imbor:e3e112b3-e46f-45c4-b2c9-b152e6f805a1 ;
                owl:hasValue imbor-domeinwaarde:2d9771b5-d707-47f8-9577-898f05ead
                ] 
        ) ;
        owl:equivalentClass nen2676:BN ;
        .
```

> ADVISEMENT "Using predefined semantics"
>
> To ensure maximum understanding, it is part of this best practice to specify the alignment via the [[OWL2-primer]] constructs.

To ensure the best interpretation _and_ reuse of the [=alignment=] (and other [=linksets=]), some extra information is to be declared about the [=alignment=]. In this case `dct:title` is used name the set and `dct:description` is used to provide an indication of the matching method and a description. Furthermore it is needed to provide some provenance, authoring and versioning information. Therefore a publisher is provided via `dct:publisher` and a publish date via `dct:issued`. Similar to the [=ontologies=] `dct:conformsTo` is used to declare the formal language in which the [=linkset=] is written. This also identifies that the [=alignment=] is on the [=conceptual level=] ([[OWL2-primer]]).         `dct:instructionalMethod` is used in this best practice to state the intended use of the [=linkset=]. Lastly `owl:versionInfo` defines the version of the [=linkset=] and an `owl:imports` statement is then used to reference the used [=ontologies=] from the last step, whose meaning is considered to be part of the meaning of the importing ontology.

```turtle
:imbor_nen2767-4    rdf:type    owl:Ontology, void:Linkset ;
        dct:title               "IMBOR en NEN2767-4 ontologie mapping"@nl ;
        dct:description         "Handmatige voorbeeld mapping van de twee kernmodellen o.b.v. expert judgement"@nl ;
        dct:publisher           "Stichting CROW"@nl ;
        dct:issued              "2023-01-03"^^xsd:date;   
        dct:conformsTo          <http://www.w3.org/2002/07/owl#> ;
        dct:instructionalMethod "Deze linkset mag alleen gebruikt worden in de context van de Ontology Alignment whitepaper t.b.v. de vergelijking van twee classes"@nl ;      
        owl:versionInfo         "1.0.0" ;
        owl:imports             imbor:, nen2767: ;
        .
```

Now we have expressed in [[Turtle]], making use of the W3C standards [[RDF11-concepts]], [[RDF-Schema]], [[OWL2-primer]] and the [[NEN2660-2]] that two classes from different [=ontologies=] have a "equivalent" relation with each other. In this case software used by assetmanagers who use standards (e.g. IMBOR and NEN2767-4) in conjunction can logically deduct that instances are the same. This is shown in a basic diagram below:

<figure>

![](img/alignment-example-conceptual.drawio.png)

<figcaption>
The basis components of the conceptual/structural alignment in diagram form (without aspect properties)
</figcaption>
</figure>

>ADVISEMENT
>We also declare that this [=linkset=] is a `void:Linkset`. While we do not use the [[VoID]] standard anywhere else, the specific semantics of a `void:Linkset` seperates the used `owl:Ontology`s in the whole process.

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
        dct:title               "IMBOR en NEN2767-4 ontologie mapping"@nl ;
        dct:description         "Handmatige voorbeeld mapping van de twee kernmodellen o.b.v. expert judgement"@nl ;
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
        owl:equivalentClass nen2676:BN ;
        .
```

### Extending the conceptuals

The second form of [=linkset=] is an [=extension=]. This is very similar to how the terms are aligned, but it works on the [=conceptual level=]. Below is the complete example. 

First we have to declare which two [=ontologies=] are in scope. After this we want to say that an Sluice can consists of the material 'cementcrete'. Therefore we extend (or 'link') "Sluis" from IMBOR (`imbor:b193d52e-0243-4e0e-9f90-236edb35c624`) with the [[NEN2660-2]] property `nen2660:consistOf` and the value "Cementbeton" (`nen2767:93`). 

To ensure the best interpretation _and_ reuse of the [=extension=], some extra information is to be declared about the [=extension=]. In this case `dct:title` is used name the set and `dct:description` is used to provide an indication of the matching method and a description. Furthermore it is needed to provide some provenance, authoring and versioning information. Therefore a publisher is provided via `dct:publisher` and a publish date via `dct:issued`. `dct:conformsTo` is used to declare the formal language in which the [=extension=] is written and `owl:versionInfo` defines the version of the [=extension=]. An `owl:imports` statement is then used to reference the used [=ontologies=] from the last step, whose meaning is considered to be part of the meaning of the importing ontology.

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
        nen2660:consistsOf
                nen2767:93 .

:imbor_object_nen2767-4_matter    rdf:type    owl:Ontology, void:Linkset ;
        dct:title       "Link tussen IMBOR Objecttypen en NEN2767-4 materialen"@nl ;
        dct:description "Handmatig voorbeeld van een link tussen de twee kernmodellen o.b.v. expert judgement"@nl ;
        dct:publisher   "Stichting CROW"@nl ;
        dct:issued      "2023-12-24"^^xsd:date;   
        owl:versionInfo "1.0.0" ;
        owl:imports     imbor:, nen2767: ;
        .
```

>ADVISEMENT
>We also declare that this [=linkset=] is a `void:Linkset`. While we do not use the [[VoID]] standard anywhere else, the specific semantics of a `void:Linkset` seperates the used `owl:Ontology`s in the whole process. 

<figure>

![](img/extension-example-conceptual.drawio.png)

<figcaption>
The basis components of the extension in diagram form (without aspect properties)
</figcaption>
</figure>