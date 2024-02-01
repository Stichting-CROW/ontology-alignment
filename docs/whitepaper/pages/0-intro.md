## Introduction

This whitepaper contains a best practice for creating, managing, using and communicating [=ontology alignments=] and [=ontology extensions=] (aka: linksets), for the purpose of linking [=ontologies=] (so _not_ instance data) and using them in conjunction. It is derived from several literature sources and practical implementations on the matter. Furthermore it uses existing (web) standards and combines them to create a practical application. In doing so it proposes a (still lacking) standard approach to [=ontology matching=] (also called 'mapping or 'linking').

It consists of two major parts:

- Sections [1](#learn-what-it-is), [2](#learn-why-to-use-it) and [3](#learn-how-to-make-it) which are 'normative' **_and contain everything one needs to know to put this best practice into practice_**.
- Everything from section 4 onwards, which are definitions, in-depth explanations and other background information for those who need more knowledge. These can be used as reference works.

This document is primarily intended for (information) modellers who want to create these [=linksets=]; software developers who need to use them in their software and people who want to use models and [=ontologies=] in conjunction based on [=linksets=] according to this best practice. Knowledge of information modelling is a plus. Knowledge of LinkedData and the NEN2660-2 is a plus but not necessary. This best practice focuses in particular on models within the built environment, but it can also be used in a broader context.

When interest is piqued and one want’s to dive further in the matter, publications are recommended in [this section](#further-information) . 

_This initiative was nominated for the [Dutch DigiDareAwards](https://digidareaward.nl/nen2767imbor-in-samenhang-bruikbaar/)._

>ADVISEMENT
>The second release of this whitepaper is a major update regarding the use of technical standards. The [[Alignment format]] and [[EDOAL]] standards are replaced by using standard OWL constructs. While the [[Alignment format]] and [[EDOAL]] result in more readable [=linksets=], the use of [[OWL2-primer]] is much more supported in the standard technology stacks.

> ADVISEMENT
> This best practice has a clear focus on creating [=linksets=] and [=matching=] [=ontologies=]. It does not take the instance level in scope. The [=linksets=] contain semantic links like 'related' and 'equivalent class', in contrast to 'same as'. It is not said that a parts of this whitepaper _can_ be used to describe instance [=alignments=] though, it is just not the focus (for now).


    