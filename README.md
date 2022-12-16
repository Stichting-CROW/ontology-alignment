# Specificatie

Dit is de GitHub-repository voor ...

---

## Instructies voor redacteurs

1. **Werkversies**

   Werkversies worden continu gepubliceerd op `https://docs.crow.nl/{{repository-korte-naam}}/{{document-korte-naam}} (logboek op [auto-publish]).

2. **Referentieversies**

   Bijvoorbeeld voor een review of consultatie; klik op [**Publiceer een bepaalde versie**](lifecycle) en vervolgens _Run workflow_.

3. **Een nieuw document toevoegen**

   Bijvoorbeeld voor een conceptueel model, API-beschrijving of uitwisselingsformaat; klik op [**Voeg een nieuw document toe**](add-doc) en kies _Run workflow_.

4. **Publicatie op crow.nl**

   Voor op de startpagina van _docs.crow.nl_: zie de [README van docs.crow.nl][publiceer-readme].
   Voor op crow.nl of de kennisbank: mail.

5. **Werken met ReSpec**

   ReSpec biedt structuur en presentatiemogelijkheden voor technische specificaties.
   Zoals informatiemodellen, uitwisselingsstandaarden en API-documentatie.

   ReSpec gebruikt [GfM](https://github.github.com/gfm/) als Markdown-specificatie.
   Lees ter referentie de [CROW-ReSpec-wiki] en de algemene [ReSpec-handleiding].

6. **Werken met Git en GitHub**

   Er zijn talloze handleidingen voor Git en GitHub.

   De webinterface van VS Code (druk op GitHub.com op <kbd>.</kbd>) of
   Visual Studio Code geïnstalleerd op je computer.
   Voor VS Code worden er ook aanbevolen extensies meegegeven in deze repository.

7. **Bijlagen, zoals afbeeldingen**

   Gebruik SVG-bestanden, bijvoorbeeld bewerkt met [draw.io](https://app.diagrams.net/).

[add-doc]: actions/workflows/add-doc.yaml
[auto-publish]: actions/workflows/auto-publish.yaml
[lifecycle]: actions/workflows/lifecycle.yaml
[publiceer-readme]: https://github.com/stichting-crow/stichting-crow.github.io/blob/main/README.md#publiceren
[crow-respec-wiki]: https://github.com/stichting-crow/respec/wiki
[respec-handleiding]: https://respec.org/docs/
