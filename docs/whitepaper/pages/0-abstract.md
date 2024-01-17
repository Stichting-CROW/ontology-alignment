This whitepaper contains a best practice for creating, managing, using and communicating [=ontology alignments=] and [=ontology extensions=] (aka: linksets), for the purpose of linking [=ontologies=] (so _not_ instance data) and using them in conjunction. It is derived from several literature sources and practical implementations on the matter. Furthermore it uses existing (web) standards and combines them to create a practical application. In doing so it proposes a (still lacking) standard approach to [=ontology matching=] (also called 'mapping or 'linking').

It consists of two major parts:

- Section [1](#learn-what-it-is), [2](#learn-why-to-use-it) and [3](#learn-how-to-make-it) which are 'normative' **_and contain everything one needs to know to put this best practice into practice_**.
- Everything from section four onwards, which are definitions, in-depth explanations and other background information for those who need more knowledge. These can be used as reference works.

When interest is piqued and one want’s to dive further in the matter, these publications are recommended. They also form the main inspiration for this best practice:

- Ontology Matching, (2013), J. Euzenat [link](http://www.filosofiacienciaarte.org/attachments/article/1129/Je%CC%81ro%CC%82me%20Euzenat-Ontology%20Matching.pdf)
- Metamodel Informatie Modellering, (2022), Geonovum [link](https://docs.geostandaarden.nl/mim/mim/)
- Ontology Matching - Lecture, (2022), S. Wang [link](https://www.utwente.nl/en/ces/sal/exams/digital-exams/Linked-Data-and-Semantic-Web/ldsw-lecture6-om-2021-2a.pdf)
- Combining and relating ontologies: an analysis of problems and solutions, (2001), M. Klein [link](https://ceur-ws.org/Vol-47/klein.pdf)
- Linked Data Provenance: State of the Art and Challenges, (2015), S. Anam [link](https://www.researchgate.net/publication/271829477_Linked_Data_Provenance_State_of_the_Art_and_Challenges)
- Towards a Unified Metadata Model for Semantic and Data Mappings, (2022), S. Alzahrani [link](http://disi.unitn.it/~pavel/om2022/papers/om2022_poster2.pdf)
- Alignments for data interlinking: a proposal for matching/linking cooperation, (2011), J. Euzenat [link](http://melinda.inrialpes.fr/proposal.html)
- Describing Linked Datasets, (2009), K. Alexander [link](http://events.linkeddata.org/ldow2009/papers/ldow2009_paper20.pdf)

_This initiative was nominated for the [Dutch DigiDareAwards](https://digidareaward.nl/nen2767imbor-in-samenhang-bruikbaar/)._

>ADVISEMENT
>The second release of this whitepaper (the forelaying) is a major update regarding the use of technical standards. The [[Alignment format]] and [[EDOAL]] standards are replaced by using standard OWL constructs. While the [[Alignment format]] and [[EDOAL]] result in more readable [=linksets=], the use of [[OWL2-primer]] is much more supported in the standard technology stacks.

