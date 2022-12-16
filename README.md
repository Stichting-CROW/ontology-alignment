# ReSpec-repo-template

A GitHub repository template for CROW-style ReSpec documents, to be used for technical specifications.

> - Voor een nieuw project: volg onderstaand stappenplan.
> - Voor een nieuw document binnen een bestaand project: volg het stappenplan op [stichting-crow/respec-document-template].

## Stappenplan nieuwe ReSpec

> In het kort:
> standaardbranch: `main`;
> branch `gh-pages` wordt automatisch geactiveerd door [.github/workflows/setup.yaml];
> Documenten komen in `docs/`, die map wordt gekopieerd en gedeployed.
> Het eerste werkdocument heeft dezelfde naam als de repo;
> referentieversies komen in gh-pages:v/, naast werkdocumenten.

1. Bedenk een **korte naam** voor het project.

   Een korte naam bestaat uit kleine letters, cijfers en koppeltekens.

   Dit wordt ook de naam van de GitHub-repository.
   _informatiemodel beheer openbare ruimte_: `imbor`,
   _datastandaard fietsparkeren_: `datastd-fietspark`,
   _standaard uitwisselingsformaat globale visuele weginspectiebestanden in RDF_: `stufweg-rdf`,
   etc.

2. Bedenk of werkversies en discussies niet-openbaar moeten zijn.

   Het wordt aanbevolen om werkversies publiek te bewerken.
   Openbare repositories zijn ook altijd gratis.
   Let op dat alle voorgaande versies van een document in GitHub altijd terug te halen zijn.
   Opmerkingen, wachtwoorden, etc. blijven in principe\* altijd beschikbaar.

3. Klik op [_Use this template_](generate).

   Bij _owner_: ‘stichting-crow’ of de GitHub-organisatie van je werkgroep.  
   Bij _repository name_: de korte naam van het project.  
   Bij _public/private_: Als je het niet zeker weet, kies _public_.  
   Bij _include all branches_: Niet noodzakelijk.

Vervolgens maakt GitHub een nieuwe repository aan,
kopieert-ie de inhoud van [stichting-crow/respec-repo-template]
en start-ie het aanmaken van het eerste document binnen de repo.
Dat duurt zo'n 30 seconden, waarna het lampje in de balk bovenin op groen springt.

[ghio]: https://stichting-crow.github.io
[themas]: https://www.crow.nl/thema-s/
[wiki]: https://github.com/stichting-crow/respec/wiki
[publiceer-readme]: https://github.com/stichting-crow/stichting-crow.github.io/blob/main/README.md#publiceren
[stichting-crow/respec-document-template]: https://github.com/stichting-crow/respec-document-template
[stichting-crow/respec-repo-template]: https://github.com/stichting-crow/respec-repo-template
[.github/workflows/setup.yaml]: .github/workflows/setup.yaml

---

# Documentation of the workings of `stichting-crow/respec-repo-template`

This repository is set as a GitHub template repository.
After clone in the interface, a `clone`-event is sent to the GitHub Actions in this repository and [`setup.yaml`](setup.yaml) triggers.
That file will not run if the current repository is its base, preventing the automation from triggering before clone.

[`setup.yaml`](setup.yaml) will then do the following:

1. Setup the GitHub Pages branch (`gh-pages`) and enforce HTTPS.
1. Run (with `cookiecutter`) the
   [stichting-crow/respec-document-template](respec-document-template),
   [stichting-crow/respec-workflows-template](respec-workflows-template)
   templates.
1. Save version info on the used templates in `.github/VERSION`.
1. Overwrite the README with one [for the spec / spec editors](README_AFTER_CLONE.md).

[respec-document-template]: https://github.com/stichting-crow/respec-document-template
[respec-workflows-template]: https://github.com/Stichting-CROW/respec-workflows-template
