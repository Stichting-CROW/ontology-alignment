var respecConfig = {
  // => https://github.com/stichting-crow/respec/wiki
  specStatus: "DEF",
  shortName: "ontology-alignment/whitepaper",
  specType: "whitepaper", // vrije tekst, kleine letter
  imprint: "crow",
  prevVersion:
    "https://docs.crow.nl/ontology-alignment/whitepaper/versions/20230209-DigiDareVersion/",
  editors: [
    // alleen `name` is verplicht, https://respec.org/docs/#person
    {
      name: "Rik",
      company: "Stichting CROW",
      url: "https://www.crow.nl/",
    },
    {
      name: "Sander Stolk",
      company: "Semmtech",
      url: "https://semmtech.com/",
    },
    {
      name: "Thomas Mollema",
      company: "Unafact",
      url: "https://www.unafact.nl/",
    },
  ],
  github: "https://github.com/Stichting-CROW/ontology-alignment",
  localBiblio: {
    "NEN2660-2": {
      title:
        "Rules for information modelling of the built environment - Part 2: Practical configuration, extension and implementation of NEN 2660-1",
      href: "https://www.nen.nl/nen-2660-2-2022-nl-291667",
      status: "Definitief",
      publisher: "Stichting Koninklijk Nederlands Normalisatie Instituut (NEN)",
    },
    Ontology_matching: {
      title: "Euzenat Jérôme. (2013). Ontology matching (Second). Springer",
      href: "http://www.ontologymatching.org/",
      publisher: "Springer",
    },
    "prEN 17632-2": {
      title:
        "Building Information Modelling (BIM) - Semantic Modelling and Linking (SML)",
      href: "https://standards.cencenelec.eu/dyn/www/f?p=CEN:110:0::::FSP_PROJECT,FSP_ORG_ID:76161,1991542&cs=1D40D0701E13D1851B42C956BA0006B3C",
      publisher: "CEN-CENELEC",
    },
    MIM: {
      title: "MIM - Metamodel Informatie Modellering",
      href: "http://www.ontologymatching.org/",
      status: "Vastgesteld",
      publisher: "Geonovum",
    },
    "Alignment format": {
      title: "Align API: A format for ontology alignment",
      href: "https://moex.gitlabpages.inria.fr/alignapi/format.html",
      publisher:
        "National Institute for Research in Digital Science and Technology (INRIA)",
    },
    EDOAL: {
      title: "EDOAL: Expressive and Declarative Ontology Alignment Language",
      href: "https://moex.gitlabpages.inria.fr/alignapi/edoal.html#",
      publisher:
        "National Institute for Research in Digital Science and Technology (INRIA)",
    },
    SSSOM: {
      title: "SSSOM: Simple Standard for Sharing Ontology Mappings",
      href: "https://mapping-commons.github.io/sssom/",
      publisher: "Cornell University",
    },
    "Organising Libraries of Master Data": {
      title:
        "Organising libraries of master data: A knowledge framework for setting up and managing master data libraries",
      href: "https://semmtech.com/",
      publisher: "Semmtech",
    },
  },

  license: "cc-by",
  pluralize: true,
  lint: { "no-unused-dfns": false },
};
