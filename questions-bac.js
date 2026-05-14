// =====================================================================
// questions-bac.js — 128 questions du Bac MSGN 2022-2025
// =====================================================================
// Sources :
//   - Documentation/annales-msgn-2022-2025.md (libellés condensés)
//   - Documentation/mapping-questions-notions.md (notion-clé + secondaires)
//
// Format d'une entrée :
//   id        : identifiant unique (sujet-court + dossier + num, ex: "be-1-1")
//   sujet     : nom de l'entreprise/cas du bac
//   annee     : année du sujet (2022 à 2025)
//   dossier   : 1, 2 ou 3
//   num       : numéro de la question dans le sujet (ex: "1.1", "1.4a")
//   fam       : famille pédagogique (emoji)
//                 🔍 Diagnostiquer · 🧭 Décider · 🛤️ Agir
//                 💻 Outils numériques · 💰 Mesurer chiffres
//                 👥 Mesurer humain · 🌿 Engager
//   primary   : id de la notion-clé (référence aux IDs de notions-msgn.js)
//   secondary : tableau d'ids des notions secondaires (0 à 3)
//   libelle   : libellé de la question (paraphrase du sujet officiel)
//
// Les libellés viennent du fichier annales-msgn-2022-2025.md. Ils sont
// précis sur le sens (verbe + objet) mais peuvent être plus courts que
// la formulation exacte des sujets bac officiels.
// =====================================================================

const QUESTIONS_BAC = [

  // ───────────────────────────────────────────────────────────────────
  // 1. BÉBÉ SEREIN — Métropole 2025 ✅ corrigé officiel en main
  //    Couches écologiques 100 % circuit court
  // ───────────────────────────────────────────────────────────────────
  { id: "be-1-1", sujet: "Bébé Serein", annee: 2025, dossier: 1, num: "1.1", fam: "🔍",
    primary: "finalites", secondary: ["parties", "rse"],
    libelle: "Présenter les finalités de l'entreprise Bébé Serein." },
  { id: "be-1-2", sujet: "Bébé Serein", annee: 2025, dossier: 1, num: "1.2", fam: "🔍",
    primary: "comportement", secondary: ["mercatique_n"],
    libelle: "Repérer les différents facteurs explicatifs du comportement des consommateurs (freins, motivations, attitude et besoins) de l'entreprise Bébé Serein." },
  { id: "be-1-3", sujet: "Bébé Serein", annee: 2025, dossier: 1, num: "1.3", fam: "🔍",
    primary: "modele", secondary: ["comportement"],
    libelle: "Déterminer si le modèle économique choisi par l'entreprise Bébé Serein est adapté à l'évolution de ces comportements." },
  { id: "be-1-4", sujet: "Bébé Serein", annee: 2025, dossier: 1, num: "1.4", fam: "🌿",
    primary: "rse", secondary: ["modele", "ethique"],
    libelle: "Proposer des limites au modèle économique retenu par l'entreprise Bébé Serein sur le plan environnemental et sociétal." },
  { id: "be-2-1", sujet: "Bébé Serein", annee: 2025, dossier: 2, num: "2.1", fam: "💰",
    primary: "frng", secondary: ["bfr", "tn"],
    libelle: "Analyser l'équilibre financier de l'entreprise Bébé Serein en calculant le fonds de roulement net global (FRNG), le besoin en fonds de roulement (BFR) et la trésorerie nette (TN)." },
  { id: "be-2-2", sujet: "Bébé Serein", annee: 2025, dossier: 2, num: "2.2", fam: "💰",
    primary: "perf_co", secondary: ["couts"],
    libelle: "Calculer les taux d'évolution du chiffre d'affaires et du bénéfice de l'entreprise Bébé Serein entre 2021 et 2023. Commenter les résultats." },
  { id: "be-2-3", sujet: "Bébé Serein", annee: 2025, dossier: 2, num: "2.3", fam: "🧭",
    primary: "decision", secondary: ["strategies"],
    libelle: "Au regard de la situation financière de l'entreprise, justifier la décision de se positionner sur le marché du lait bio pour bébé." },
  { id: "be-2-4", sujet: "Bébé Serein", annee: 2025, dossier: 2, num: "2.4", fam: "🧭",
    primary: "decision", secondary: ["strategies"],
    libelle: "Montrer que cette décision relève du management stratégique." },
  { id: "be-3-1", sujet: "Bébé Serein", annee: 2025, dossier: 3, num: "3.1", fam: "🌿",
    primary: "ethique", secondary: ["rse", "parties"],
    libelle: "Montrer que l'entreprise Bébé Serein est engagée dans une démarche éthique." },
  { id: "be-3-2", sujet: "Bébé Serein", annee: 2025, dossier: 3, num: "3.2", fam: "👥",
    primary: "motivation", secondary: ["gpec"],
    libelle: "Présenter les différentes pratiques de gestion des ressources humaines mises en œuvre par Bébé Serein et montrer qu'elles constituent des facteurs de motivation." },
  { id: "be-3-3", sujet: "Bébé Serein", annee: 2025, dossier: 3, num: "3.3", fam: "🌿",
    primary: "rse", secondary: ["valeurs", "performance"], synthese: true, synthIndex: 8,
    libelle: "Montrer que la mise en place d'une démarche RSE est créatrice de valeurs." },

  // ───────────────────────────────────────────────────────────────────
  // 2. LA DORURE ARTISANALE — Asie 2025
  //    Restauration d'actes administratifs anciens (Théodore Bonna)
  // ───────────────────────────────────────────────────────────────────
  { id: "dor-1-1", sujet: "La Dorure", annee: 2025, dossier: 1, num: "1.1", fam: "🔍",
    primary: "marche", secondary: ["diagnostic_ext"],
    libelle: "Présenter les caractéristiques du marché" },
  { id: "dor-1-2", sujet: "La Dorure", annee: 2025, dossier: 1, num: "1.2", fam: "🔍",
    primary: "competences", secondary: ["diagnostic_ext"],
    libelle: "Réaliser le diagnostic interne" },
  { id: "dor-1-3", sujet: "La Dorure", annee: 2025, dossier: 1, num: "1.3", fam: "🧭",
    primary: "strategies", secondary: ["das"],
    libelle: "Relever les options stratégiques + apprécier leur pertinence" },
  { id: "dor-1-4", sujet: "La Dorure", annee: 2025, dossier: 1, num: "1.4", fam: "🛤️",
    primary: "mercatique_n", secondary: ["comportement"],
    libelle: "Déterminer l'approche marketing" },
  { id: "dor-2-1", sujet: "La Dorure", annee: 2025, dossier: 2, num: "2.1", fam: "💰",
    primary: "perf_co", secondary: [],
    libelle: "Analyser la performance commerciale (CA, part de marché 2022-2024)" },
  { id: "dor-2-2", sujet: "La Dorure", annee: 2025, dossier: 2, num: "2.2", fam: "💰",
    primary: "seuil", secondary: ["couts"],
    libelle: "Calculer le seuil de rentabilité en valeur et en quantité" },
  { id: "dor-2-3", sujet: "La Dorure", annee: 2025, dossier: 2, num: "2.3", fam: "💰",
    primary: "rex", secondary: ["va", "perf_co"],
    libelle: "Analyser la performance financière + taux de profitabilité" },
  { id: "dor-2-4", sujet: "La Dorure", annee: 2025, dossier: 2, num: "2.4", fam: "💰",
    primary: "financement", secondary: ["caf"],
    libelle: "Choisir les modalités de financement" },
  { id: "dor-3-1", sujet: "La Dorure", annee: 2025, dossier: 3, num: "3.1", fam: "👥",
    primary: "risques_pro", secondary: ["performance"],
    libelle: "Risques professionnels + conséquences sur la performance sociale" },
  { id: "dor-3-2", sujet: "La Dorure", annee: 2025, dossier: 3, num: "3.2", fam: "👥",
    primary: "gpec", secondary: ["motivation"],
    libelle: "Apprécier la pertinence des actions QVT" },
  { id: "dor-3-3", sujet: "La Dorure", annee: 2025, dossier: 3, num: "3.3", fam: "👥",
    primary: "motivation", secondary: [],
    libelle: "Facteurs externes de motivation" },
  { id: "dor-3-4", sujet: "La Dorure", annee: 2025, dossier: 3, num: "3.4", fam: "💻",
    primary: "pgi", secondary: ["si_fonctions"], synthese: true,
    libelle: "(15 lignes) Avantages et limites d'un outil numérique partagé de planification" },

  // ───────────────────────────────────────────────────────────────────
  // 3. CLIMA&CO — Polynésie 2025
  //    Alimentation durable « climatarienne », B Corp (Joséphine B.)
  // ───────────────────────────────────────────────────────────────────
  { id: "cli-1-1", sujet: "Clima&Co", annee: 2025, dossier: 1, num: "1.1", fam: "🔍",
    primary: "comportement", secondary: ["mercatique_n"],
    libelle: "Identifier les facteurs explicatifs du comportement consommateur en matière alimentaire" },
  { id: "cli-1-2", sujet: "Clima&Co", annee: 2025, dossier: 1, num: "1.2", fam: "🔍",
    primary: "modele", secondary: ["comportement"],
    libelle: "Montrer que le modèle économique répond aux besoins des consommateurs" },
  { id: "cli-1-3", sujet: "Clima&Co", annee: 2025, dossier: 1, num: "1.3", fam: "🛤️",
    primary: "labels", secondary: ["competences", "rse"],
    libelle: "Expliquer en quoi B Corp est un avantage concurrentiel" },
  { id: "cli-1-4", sujet: "Clima&Co", annee: 2025, dossier: 1, num: "1.4", fam: "🧭",
    primary: "strategies", secondary: ["croissance"],
    libelle: "Repérer une option stratégique + avantages et limites" },
  { id: "cli-2-1", sujet: "Clima&Co", annee: 2025, dossier: 2, num: "2.1", fam: "💻",
    primary: "blockchain", secondary: ["si_fonctions", "ecommerce"],
    libelle: "Lister les avantages d'un QR Code sur les produits" },
  { id: "cli-2-2", sujet: "Clima&Co", annee: 2025, dossier: 2, num: "2.2", fam: "💻",
    primary: "blockchain", secondary: ["pgi"],
    libelle: "Montrer l'intérêt de la blockchain pour la traçabilité" },
  { id: "cli-2-3", sujet: "Clima&Co", annee: 2025, dossier: 2, num: "2.3", fam: "💻",
    primary: "ecommerce", secondary: ["perf_co", "communication_n"], synthese: true,
    libelle: "(15 lignes) Impacts d'une commercialisation exclusivement en ligne" },
  { id: "cli-3-1", sujet: "Clima&Co", annee: 2025, dossier: 3, num: "3.1", fam: "💰",
    primary: "perf_co", secondary: ["couts"],
    libelle: "Calculer les évolutions annuelles du CA et commenter" },
  { id: "cli-3-2", sujet: "Clima&Co", annee: 2025, dossier: 3, num: "3.2", fam: "💰",
    primary: "couts", secondary: ["perf_co"],
    libelle: "Coût de revient de 250g d'amandes grillées + prix HT avec marge 25 %" },
  { id: "cli-3-3", sujet: "Clima&Co", annee: 2025, dossier: 3, num: "3.3", fam: "🧭",
    primary: "mercatique_n", secondary: ["labels"],
    libelle: "Relever les éléments justifiant les prix pratiqués" },
  { id: "cli-3-4", sujet: "Clima&Co", annee: 2025, dossier: 3, num: "3.4", fam: "💰",
    primary: "financement", secondary: ["caf"],
    libelle: "Identifier les sources de financement + avantages" },
  { id: "cli-3-5", sujet: "Clima&Co", annee: 2025, dossier: 3, num: "3.5", fam: "👥",
    primary: "gpec", secondary: ["performance"],
    libelle: "Montrer que les actions marque employeur contribuent à la performance sociale" },

  // ───────────────────────────────────────────────────────────────────
  // 4. GLOBAL STEEL PACIFIC (GSP) — Nouvelle-Calédonie 2025
  //    Transformation acier (filiale de Global Steel)
  // ───────────────────────────────────────────────────────────────────
  { id: "gsp-1-1", sujet: "GSP", annee: 2025, dossier: 1, num: "1.1", fam: "🔍",
    primary: "diagnostic_ext", secondary: ["marche"],
    libelle: "Présenter des éléments du diagnostic externe" },
  { id: "gsp-1-2", sujet: "GSP", annee: 2025, dossier: 1, num: "1.2", fam: "🧭",
    primary: "strategies", secondary: ["competences"],
    libelle: "Justifier la pertinence de la stratégie de différenciation au regard des forces" },
  { id: "gsp-1-3", sujet: "GSP", annee: 2025, dossier: 1, num: "1.3", fam: "🧭",
    primary: "croissance", secondary: ["parties"],
    libelle: "Montrer que la modalité de développement est cohérente avec la finalité" },
  { id: "gsp-2-1", sujet: "GSP", annee: 2025, dossier: 2, num: "2.1", fam: "💰",
    primary: "perf_co", secondary: [],
    libelle: "Performance commerciale (évolution CA, part international)" },
  { id: "gsp-2-2", sujet: "GSP", annee: 2025, dossier: 2, num: "2.2", fam: "💰",
    primary: "bfr", secondary: ["frng", "tn"],
    libelle: "FRNG/BFR/TN + solutions pour diminuer le BFR" },
  { id: "gsp-2-3", sujet: "GSP", annee: 2025, dossier: 2, num: "2.3", fam: "🛤️",
    primary: "croissance", secondary: ["competences"],
    libelle: "Montrer que la stratégie d'implantation s'appuie sur un écosystème d'affaires solide" },
  { id: "gsp-2-4", sujet: "GSP", annee: 2025, dossier: 2, num: "2.4", fam: "💻",
    primary: "ia", secondary: ["si_fonctions"],
    libelle: "Justifier le recours à l'intelligence artificielle pour le cluster NCT&I" },
  { id: "gsp-3-1", sujet: "GSP", annee: 2025, dossier: 3, num: "3.1", fam: "👥",
    primary: "likert", secondary: ["culture"],
    libelle: "Caractériser le style de management + cohérence avec les valeurs" },
  { id: "gsp-3-2", sujet: "GSP", annee: 2025, dossier: 3, num: "3.2", fam: "🌿",
    primary: "rse", secondary: ["performance"],
    libelle: "Expliquer comment la démarche RSE contribue à la performance globale" },
  { id: "gsp-3-3", sujet: "GSP", annee: 2025, dossier: 3, num: "3.3", fam: "🛤️",
    primary: "communication_ext", secondary: ["parties", "rse"], synthese: true,
    libelle: "(15 lignes) Communication externe pour répondre aux attentes des parties prenantes" },

  // ───────────────────────────────────────────────────────────────────
  // 5. SAVEURS & NATURE — Polynésie 2023 ✅ corrigé officiel en main
  //    Chocolaterie artisanale bio (Vendée, marque IKALIA)
  // ───────────────────────────────────────────────────────────────────
  { id: "sav-1-1", sujet: "Saveurs & Nature", annee: 2023, dossier: 1, num: "1.1", fam: "🔍",
    primary: "competences", secondary: ["modele"],
    libelle: "Présenter les ressources de l'entreprise Saveurs & Nature." },
  { id: "sav-1-2", sujet: "Saveurs & Nature", annee: 2023, dossier: 1, num: "1.2", fam: "🔍",
    primary: "diagnostic_ext", secondary: ["marche"],
    libelle: "Identifier les menaces du macro-environnement dans lequel évolue Saveurs & Nature." },
  { id: "sav-1-3", sujet: "Saveurs & Nature", annee: 2023, dossier: 1, num: "1.3", fam: "🔍",
    primary: "fcs", secondary: ["competences", "marche"],
    libelle: "Apprécier la maîtrise par Saveurs & Nature des facteurs clefs de succès du marché du chocolat." },
  { id: "sav-1-4", sujet: "Saveurs & Nature", annee: 2023, dossier: 1, num: "1.4", fam: "🧭",
    primary: "croissance", secondary: ["strategies"],
    libelle: "Repérer et caractériser les modalités de développement de Saveurs & Nature." },
  { id: "sav-2-1", sujet: "Saveurs & Nature", annee: 2023, dossier: 2, num: "2.1", fam: "👥",
    primary: "gpec", secondary: ["perf_co", "motivation"],
    libelle: "Analyser les conséquences de la politique de gestion de ressources humaines de Saveurs & Nature sur sa performance commerciale." },
  { id: "sav-2-2", sujet: "Saveurs & Nature", annee: 2023, dossier: 2, num: "2.2", fam: "🛤️",
    primary: "processus", secondary: ["parties", "labels"],
    libelle: "Montrer les avantages attendus pour l'entreprise de schématiser le processus de renouvellement de la certification « épi barré » et préciser le rôle des parties prenantes impliquées dans ce processus." },
  { id: "sav-2-3", sujet: "Saveurs & Nature", annee: 2023, dossier: 2, num: "2.3", fam: "🛤️",
    primary: "competences", secondary: ["labels", "strategies"], synthese: true, synthIndex: 9,
    libelle: "Montrer comment la qualité permet à une entreprise de se démarquer sur un marché très concurrentiel." },
  { id: "sav-3-1", sujet: "Saveurs & Nature", annee: 2023, dossier: 3, num: "3.1", fam: "🧭",
    primary: "mercatique_n", secondary: ["labels"],
    libelle: "Relever les éléments justifiant les prix élevés pratiqués par Saveurs & Nature." },
  { id: "sav-3-2", sujet: "Saveurs & Nature", annee: 2023, dossier: 3, num: "3.2", fam: "💰",
    primary: "couts", secondary: ["mercatique_n"],
    libelle: "Calculer le coût de revient d'une tablette de chocolat noir avec des noisettes entières Saveurs & Nature et en déduire un prix de vente hors taxe permettant de garantir une marge de 25 %." },
  { id: "sav-3-3", sujet: "Saveurs & Nature", annee: 2023, dossier: 3, num: "3.3", fam: "💰",
    primary: "perf_co", secondary: ["va", "rex"],
    libelle: "Analyser l'évolution des indicateurs financiers et commerciaux entre 2020 et 2021." },
  { id: "sav-3-4", sujet: "Saveurs & Nature", annee: 2023, dossier: 3, num: "3.4", fam: "💰",
    primary: "performance", secondary: ["perf_co", "rex"],
    libelle: "Conclure sur la capacité de l'entreprise à concilier performance commerciale et performance financière." },

  // ───────────────────────────────────────────────────────────────────
  // 6. CARAÏBES FUMÉS — Métropole 2022
  //    Transformation de poisson fumé en Guadeloupe (Cap Créole)
  // ───────────────────────────────────────────────────────────────────
  { id: "car-1-1", sujet: "Caraïbes Fumés", annee: 2022, dossier: 1, num: "1.1", fam: "🔍",
    primary: "modele", secondary: ["parties", "competences"],
    libelle: "Présenter l'activité principale, les partenaires et les ressources clés du modèle économique de l'entreprise Caraïbes Fumés." },
  { id: "car-1-2", sujet: "Caraïbes Fumés", annee: 2022, dossier: 1, num: "1.2", fam: "🔍",
    primary: "diagnostic_ext", secondary: ["marche"],
    libelle: "Identifier les menaces auxquelles l'entreprise Caraïbes Fumés doit faire face." },
  { id: "car-1-3", sujet: "Caraïbes Fumés", annee: 2022, dossier: 1, num: "1.3", fam: "🔍",
    primary: "competences", secondary: [],
    libelle: "Présenter des éléments du diagnostic interne de l'entreprise Caraïbes Fumés." },
  { id: "car-1-4a", sujet: "Caraïbes Fumés", annee: 2022, dossier: 1, num: "1.4a", fam: "🌿", choix: true,
    primary: "finalites", secondary: ["parties", "rse"],
    libelle: "Montrer que l'entreprise Caraïbes Fumés poursuit une finalité environnementale et que cette finalité répond aux attentes de ses partenaires et consommateurs." },
  { id: "car-1-4b", sujet: "Caraïbes Fumés", annee: 2022, dossier: 1, num: "1.4b", fam: "🔍", choix: true,
    primary: "competences", secondary: ["diagnostic_ext"],
    libelle: "Identifier les avantages concurrentiels de l'entreprise Caraïbes Fumés et montrer que ces avantages ont permis de faire face aux menaces." },
  { id: "car-2-1", sujet: "Caraïbes Fumés", annee: 2022, dossier: 2, num: "2.1", fam: "👥",
    primary: "likert", secondary: ["culture"],
    libelle: "Identifier le style de direction du dirigeant de l'entreprise Caraïbes Fumés. Justifier la réponse." },
  { id: "car-2-2", sujet: "Caraïbes Fumés", annee: 2022, dossier: 2, num: "2.2", fam: "🛤️",
    primary: "labels", secondary: ["processus"],
    libelle: "Relever, dans les activités de la chaîne de valeur, trois éléments de la démarche qualité mise en place dans l'entreprise Caraïbes Fumés." },
  { id: "car-2-3a", sujet: "Caraïbes Fumés", annee: 2022, dossier: 2, num: "2.3a", fam: "👥", choix: true, synthese: true, synthIndex: 1,
    primary: "performance", secondary: ["gpec", "motivation"],
    libelle: "Montrer que la performance sociale est une préoccupation de l'entreprise Caraïbes Fumés." },
  { id: "car-2-3b", sujet: "Caraïbes Fumés", annee: 2022, dossier: 2, num: "2.3b", fam: "💻", choix: true, synthese: true, synthIndex: 10,
    primary: "pgi", secondary: ["perf_co", "communication_n"],
    libelle: "Montrer que les outils numériques de l'entreprise Caraïbes fumés sont au service de l'amélioration de sa performance commerciale." },
  { id: "car-3-1", sujet: "Caraïbes Fumés", annee: 2022, dossier: 3, num: "3.1", fam: "💰",
    primary: "va", secondary: ["rex", "performance"],
    libelle: "Calculer les indicateurs de création de valeur de Caraïbes Fumés en 2020 (valeur ajoutée, résultat d'exploitation, résultat net) et procéder à l'analyse de sa performance financière." },
  { id: "car-3-2", sujet: "Caraïbes Fumés", annee: 2022, dossier: 3, num: "3.2", fam: "🧭",
    primary: "croissance", secondary: ["decision"],
    libelle: "Présenter les raisons justifiant le lancement des deux nouvelles structures en Martinique (l'unité de production et la boutique)." },
  { id: "car-3-3", sujet: "Caraïbes Fumés", annee: 2022, dossier: 3, num: "3.3", fam: "💰",
    primary: "frng", secondary: ["bfr", "tn"],
    libelle: "Analyser l'équilibre financier de Caraïbes Fumés en Guadeloupe en calculant le fonds de roulement net global (FRNG), le besoin en fonds de roulement (BFR) et la trésorerie nette (TN)." },
  { id: "car-3-4", sujet: "Caraïbes Fumés", annee: 2022, dossier: 3, num: "3.4", fam: "💰",
    primary: "financement", secondary: ["caf"],
    libelle: "Proposer trois sources de financement envisageables pour le lancement des deux nouvelles structures en Martinique." },

  // ───────────────────────────────────────────────────────────────────
  // 7. ANKAMA — Métropole 2023
  //    Création numérique et artistique (Dofus, BD, animation)
  // ───────────────────────────────────────────────────────────────────
  { id: "ank-1-1", sujet: "Ankama", annee: 2023, dossier: 1, num: "1.1", fam: "🧭",
    primary: "das", secondary: ["strategies"],
    libelle: "Démontrer l'intérêt pour l'entreprise Ankama d'avoir opté pour différents domaines d'activité stratégiques." },
  { id: "ank-1-2", sujet: "Ankama", annee: 2023, dossier: 1, num: "1.2", fam: "🔍",
    primary: "competences", secondary: ["das"],
    libelle: "Identifier les ressources et compétences permettant à Ankama d'accompagner ce choix stratégique." },
  { id: "ank-1-3", sujet: "Ankama", annee: 2023, dossier: 1, num: "1.3", fam: "🧭",
    primary: "decision", secondary: ["integration"],
    libelle: "Montrer que la décision de maîtriser toutes les activités de la chaîne de valeur pour son activité « bande dessinée » relève du management stratégique." },
  { id: "ank-1-4", sujet: "Ankama", annee: 2023, dossier: 1, num: "1.4", fam: "🧭",
    primary: "integration", secondary: ["strategies"],
    libelle: "Présenter les intérêts et les limites pour Ankama de ne pas externaliser certaines de ses activités." },
  { id: "ank-2-1", sujet: "Ankama", annee: 2023, dossier: 2, num: "2.1", fam: "🛤️",
    primary: "production_n", secondary: ["processus"],
    libelle: "Présenter le mode de production des BD choisi par Ankama." },
  { id: "ank-2-2", sujet: "Ankama", annee: 2023, dossier: 2, num: "2.2", fam: "💰",
    primary: "couts", secondary: [],
    libelle: "Retrouver, par le calcul, le coût de revient d'une BD lorsque l'entreprise en produit 3 000 unités." },
  { id: "ank-2-3", sujet: "Ankama", annee: 2023, dossier: 2, num: "2.3", fam: "💰",
    primary: "couts", secondary: ["seuil"],
    libelle: "Comparer le coût de revient unitaire d'une BD pour un lot de 3 000 unités et celui d'une BD pour un lot de 100 unités et justifier la pertinence du mode production mis en place par Ankama." },
  { id: "ank-2-4", sujet: "Ankama", annee: 2023, dossier: 2, num: "2.4", fam: "💰",
    primary: "couts", secondary: ["perf_co"],
    libelle: "Calculer la marge et le taux de marge d'une BD (pour un lot de 3 000) et en déduire la pertinence de commercialiser ou non le produit." },
  { id: "ank-3-1", sujet: "Ankama", annee: 2023, dossier: 3, num: "3.1", fam: "👥",
    primary: "culture", secondary: ["parties"],
    libelle: "Identifier les éléments de culture de l'entreprise Ankama." },
  { id: "ank-3-2", sujet: "Ankama", annee: 2023, dossier: 3, num: "3.2", fam: "👥",
    primary: "likert", secondary: ["culture"],
    libelle: "Repérer et justifier le style de direction d'Anthony Roux." },
  { id: "ank-3-3", sujet: "Ankama", annee: 2023, dossier: 3, num: "3.3", fam: "👥",
    primary: "likert", secondary: ["motivation"],
    libelle: "Montrer que le style de direction participatif aurait été pertinent au regard de la culture de l'organisation." },
  { id: "ank-3-4", sujet: "Ankama", annee: 2023, dossier: 3, num: "3.4", fam: "💻",
    primary: "communication_ext", secondary: ["identite_num", "communication_n"], synthese: true, synthIndex: 2,
    libelle: "Montrer que l'utilisation d'outils numériques de communication influencent l'identité des organisations." },

  // ───────────────────────────────────────────────────────────────────
  // 8. TOPSCHUSS — Métropole 2024
  //    Équipements sports outdoor en Haute-Savoie (La Rebloch'Family)
  // ───────────────────────────────────────────────────────────────────
  { id: "top-1-1", sujet: "Topschuss", annee: 2024, dossier: 1, num: "1.1", fam: "🔍",
    primary: "comportement", secondary: ["marche"],
    libelle: "Repérer les évolutions des modes de consommation" },
  { id: "top-1-2", sujet: "Topschuss", annee: 2024, dossier: 1, num: "1.2", fam: "🧭",
    primary: "strategies", secondary: ["das"],
    libelle: "Analyser les options stratégiques" },
  { id: "top-1-3", sujet: "Topschuss", annee: 2024, dossier: 1, num: "1.3", fam: "🛤️",
    primary: "competences", secondary: ["croissance"],
    libelle: "Expliquer en quoi le partenariat Goodloop génère un avantage concurrentiel" },
  { id: "top-1-4", sujet: "Topschuss", annee: 2024, dossier: 1, num: "1.4", fam: "🌿",
    primary: "rse", secondary: ["comportement", "parties"],
    libelle: "Montrer que le volet environnemental de la RSE répond aux attentes des consommateurs" },
  { id: "top-2-1", sujet: "Topschuss", annee: 2024, dossier: 2, num: "2.1", fam: "👥",
    primary: "gpec", secondary: [],
    libelle: "Justifier l'intérêt de la marque employeur pour les besoins de recrutement" },
  { id: "top-2-2", sujet: "Topschuss", annee: 2024, dossier: 2, num: "2.2", fam: "👥",
    primary: "gpec", secondary: ["performance", "motivation"], synthese: true, synthIndex: 5,
    libelle: "(15 lignes) QVT contribue à la performance globale" },
  { id: "top-2-3", sujet: "Topschuss", annee: 2024, dossier: 2, num: "2.3", fam: "💰",
    primary: "frng", secondary: ["bfr", "tn"],
    libelle: "Analyser l'équilibre financier (FRNG/BFR/TN) + commenter" },
  { id: "top-2-4", sujet: "Topschuss", annee: 2024, dossier: 2, num: "2.4", fam: "💰",
    primary: "financement", secondary: ["caf"],
    libelle: "Repérer et justifier le choix de financement" },
  { id: "top-3-1", sujet: "Topschuss", annee: 2024, dossier: 3, num: "3.1", fam: "💰",
    primary: "perf_co", secondary: [],
    libelle: "Analyser la performance commerciale (évolution CA 2021-2022) + commenter" },
  { id: "top-3-2", sujet: "Topschuss", annee: 2024, dossier: 3, num: "3.2", fam: "💻",
    primary: "communication_n", secondary: ["pgi"],
    libelle: "Montrer comment la diversité des outils numériques contribue à la relation client" },
  { id: "top-3-3", sujet: "Topschuss", annee: 2024, dossier: 3, num: "3.3", fam: "🛤️",
    primary: "processus", secondary: ["parties"],
    libelle: "Préciser le rôle des acteurs dans le processus de préparation des commandes (interne/externe)" },
  { id: "top-3-4", sujet: "Topschuss", annee: 2024, dossier: 3, num: "3.4", fam: "💻",
    primary: "production_n", secondary: ["si_fonctions", "gpec"],
    libelle: "Apprécier les impacts de l'automatisation de l'entrepôt sur les ressources" },

  // ───────────────────────────────────────────────────────────────────
  // 9. TPS (Tôles Perforées Système) — Asie 2023
  //    Perforation de tôles en acier, Maubeuge (M. Prissette)
  // ───────────────────────────────────────────────────────────────────
  { id: "tps-1-1", sujet: "TPS", annee: 2023, dossier: 1, num: "1.1", fam: "🔍",
    primary: "competences", secondary: ["diagnostic_ext"],
    libelle: "Relever les éléments du diagnostic interne" },
  { id: "tps-1-2", sujet: "TPS", annee: 2023, dossier: 1, num: "1.2", fam: "🔍",
    primary: "competences", secondary: ["strategies"],
    libelle: "Identifier les compétences distinctives + avantage concurrentiel" },
  { id: "tps-1-3", sujet: "TPS", annee: 2023, dossier: 1, num: "1.3", fam: "🧭",
    primary: "strategies", secondary: ["das"],
    libelle: "Caractériser les stratégies globale et de domaine + justifier la pertinence" },
  { id: "tps-2-1", sujet: "TPS", annee: 2023, dossier: 2, num: "2.1", fam: "👥",
    primary: "likert", secondary: ["culture"],
    libelle: "Identifier le style de direction de M. Prissette + justifier" },
  { id: "tps-2-2", sujet: "TPS", annee: 2023, dossier: 2, num: "2.2", fam: "👥",
    primary: "motivation", secondary: ["performance"],
    libelle: "Repérer les facteurs de motivation au travail + performance sociale" },
  { id: "tps-2-3", sujet: "TPS", annee: 2023, dossier: 2, num: "2.3", fam: "👥",
    primary: "gpec", secondary: ["motivation"],
    libelle: "Causes du problème de recrutement + importance de la GPEC" },
  { id: "tps-2-4", sujet: "TPS", annee: 2023, dossier: 2, num: "2.4", fam: "👥",
    primary: "gpec", secondary: ["performance"], synthese: true, synthIndex: 3,
    libelle: "(15 lignes) Marque employeur participe à la performance globale" },
  { id: "tps-3-1", sujet: "TPS", annee: 2023, dossier: 3, num: "3.1", fam: "💰",
    primary: "frng", secondary: ["bfr", "tn"],
    libelle: "Retrouver les calculs du bilan fonctionnel (FRNG/BFR/TN) + analyser" },
  { id: "tps-3-2", sujet: "TPS", annee: 2023, dossier: 3, num: "3.2", fam: "💰",
    primary: "bfr", secondary: ["couts"],
    libelle: "Expliquer les avantages de l'achat des MP par les clients grands comptes + effets sur le BFR" },
  { id: "tps-3-3", sujet: "TPS", annee: 2023, dossier: 3, num: "3.3", fam: "🛤️",
    primary: "production_n", secondary: ["couts"],
    libelle: "Identifier le mode de gestion des stocks pour les clients occasionnels + intérêt" },
  { id: "tps-3-4", sujet: "TPS", annee: 2023, dossier: 3, num: "3.4", fam: "💻",
    primary: "pgi", secondary: ["parties", "si_fonctions"],
    libelle: "Décrire les apports du PGI Sylob 9 dans les relations avec les parties prenantes" },

  // ───────────────────────────────────────────────────────────────────
  // 10. OPC — Centres Étrangers 2024
  //     Vêtements sport outdoor éco-responsables
  // ───────────────────────────────────────────────────────────────────
  { id: "opc-1-1", sujet: "OPC", annee: 2024, dossier: 1, num: "1.1", fam: "🔍",
    primary: "diagnostic_ext", secondary: ["marche"],
    libelle: "Réaliser le diagnostic stratégique externe" },
  { id: "opc-1-2", sujet: "OPC", annee: 2024, dossier: 1, num: "1.2", fam: "🧭",
    primary: "strategies", secondary: ["competences"],
    libelle: "Montrer que les innovations favorisent la stratégie de différenciation" },
  { id: "opc-1-3", sujet: "OPC", annee: 2024, dossier: 1, num: "1.3", fam: "💻",
    primary: "communication_n", secondary: ["pgi", "ecommerce"],
    libelle: "Montrer que les outils numériques contribuent à la relation client" },
  { id: "opc-1-4", sujet: "OPC", annee: 2024, dossier: 1, num: "1.4", fam: "🛤️",
    primary: "comportement", secondary: ["modele"],
    libelle: "Expliquer en quoi un élément de la chaîne de valeur n'est pas cohérent avec les modes de consommation" },
  { id: "opc-2-1", sujet: "OPC", annee: 2024, dossier: 2, num: "2.1", fam: "💰",
    primary: "rex", secondary: ["va"],
    libelle: "Calculer l'évolution du résultat d'exploitation 2021-2022" },
  { id: "opc-2-2", sujet: "OPC", annee: 2024, dossier: 2, num: "2.2", fam: "💰",
    primary: "rex", secondary: ["perf_co"],
    libelle: "Commenter ce résultat" },
  { id: "opc-2-3", sujet: "OPC", annee: 2024, dossier: 2, num: "2.3", fam: "💰",
    primary: "frng", secondary: ["bfr", "tn"],
    libelle: "Calculer FRNG/BFR/TN + analyser l'équilibre + son évolution" },
  { id: "opc-2-4", sujet: "OPC", annee: 2024, dossier: 2, num: "2.4", fam: "💰",
    primary: "financement", secondary: ["bfr"],
    libelle: "Proposer des solutions pour financer le cycle d'exploitation" },
  { id: "opc-3-1", sujet: "OPC", annee: 2024, dossier: 3, num: "3.1", fam: "🌿",
    primary: "rse", secondary: [],
    libelle: "Relever les composantes de la démarche RSE" },
  { id: "opc-3-2", sujet: "OPC", annee: 2024, dossier: 3, num: "3.2", fam: "👥",
    primary: "likert", secondary: [],
    libelle: "Repérer et justifier le style de direction" },
  { id: "opc-3-3", sujet: "OPC", annee: 2024, dossier: 3, num: "3.3", fam: "👥",
    primary: "motivation", secondary: ["gpec"],
    libelle: "Montrer que l'entreprise a mis en place des dispositions favorisant la motivation" },
  { id: "opc-3-4", sujet: "OPC", annee: 2024, dossier: 3, num: "3.4", fam: "🌿",
    primary: "rse", secondary: ["performance", "valeurs"], synthese: true,
    libelle: "(15 lignes) RSE peut influencer la performance globale" },

  // ───────────────────────────────────────────────────────────────────
  // 11. RENOU TEXTILES — Polynésie 2024
  //     Chaussettes artisanales 100 % made in France (Limousin)
  // ───────────────────────────────────────────────────────────────────
  { id: "ren-1-1", sujet: "Renou Textiles", annee: 2024, dossier: 1, num: "1.1", fam: "🔍",
    primary: "finalites", secondary: ["parties", "rse"],
    libelle: "Identifier les finalités de l'entreprise Renou Textiles." },
  { id: "ren-1-2", sujet: "Renou Textiles", annee: 2024, dossier: 1, num: "1.2", fam: "🔍",
    primary: "diagnostic_ext", secondary: ["fcs", "marche"],
    libelle: "Réaliser le diagnostic externe de Renou Textiles et en déduire les facteurs clés de succès." },
  { id: "ren-1-3", sujet: "Renou Textiles", annee: 2024, dossier: 1, num: "1.3", fam: "🛤️",
    primary: "labels", secondary: ["competences"],
    libelle: "Montrer que l'obtention de la certification « Origine France Garantie » constitue un avantage concurrentiel pour Renou Textiles." },
  { id: "ren-1-4", sujet: "Renou Textiles", annee: 2024, dossier: 1, num: "1.4", fam: "🧭",
    primary: "strategies", secondary: ["das"],
    libelle: "Repérer deux des principales options stratégiques de Renou Textiles et en justifier la pertinence." },
  { id: "ren-1-5", sujet: "Renou Textiles", annee: 2024, dossier: 1, num: "1.5", fam: "🛤️",
    primary: "couts", secondary: ["mercatique_n"],
    libelle: "Expliciter les choix commerciaux envisageables pour l'entreprise Renou Textiles pour faire face à la hausse des coûts des matières premières." },
  { id: "ren-2-1", sujet: "Renou Textiles", annee: 2024, dossier: 2, num: "2.1", fam: "🛤️",
    primary: "mercatique_n", secondary: [],
    libelle: "Identifier l'approche mercatique choisie par l'entreprise Renou Textiles pour leur marque Maison Renou et justifier votre réponse." },
  { id: "ren-2-2", sujet: "Renou Textiles", annee: 2024, dossier: 2, num: "2.2", fam: "💻",
    primary: "ecommerce", secondary: ["perf_co"],
    libelle: "Montrer que le choix de vendre les produits Maison Renou en ligne peut améliorer sa performance commerciale." },
  { id: "ren-2-3", sujet: "Renou Textiles", annee: 2024, dossier: 2, num: "2.3", fam: "💻",
    primary: "communication_n", secondary: ["identite_num"],
    libelle: "Présenter l'apport des réseaux sociaux dans la gestion de la relation client pour une marque comme Maison Renou." },
  { id: "ren-2-4", sujet: "Renou Textiles", annee: 2024, dossier: 2, num: "2.4", fam: "🌿",
    primary: "rse", secondary: ["valeurs", "performance"], synthese: true, synthIndex: 7,
    libelle: "Montrer que la démarche RSE d'une entreprise peut être créatrice de valeur." },
  { id: "ren-3-1", sujet: "Renou Textiles", annee: 2024, dossier: 3, num: "3.1", fam: "👥",
    primary: "gpec", secondary: ["croissance"],
    libelle: "Montrer que le projet d'agrandissement des locaux s'accompagne d'une démarche de gestion prévisionnelle des emplois et des compétences." },
  { id: "ren-3-2", sujet: "Renou Textiles", annee: 2024, dossier: 3, num: "3.2", fam: "💰",
    primary: "frng", secondary: ["bfr", "tn"],
    libelle: "Analyser la structure financière de l'entreprise Renou Textiles en calculant le fonds de roulement net global (FRNG), le besoin de fonds de roulement (BFR) et la trésorerie nette (TN). Commenter vos résultats." },
  { id: "ren-3-3", sujet: "Renou Textiles", annee: 2024, dossier: 3, num: "3.3", fam: "💰",
    primary: "financement", secondary: ["caf"],
    libelle: "Identifier les modalités de financement de l'investissement, puis proposer d'autres moyens pour financer l'agrandissement de Renou Textiles." },

  // ───────────────────────────────────────────────────────────────────
  // SUJETS COMPLÉMENTAIRES — uniquement pour l'onglet Questions de synthèse
  // (sujets non détaillés dans les 11 annales 2022-2025 mais ayant un corrigé
  //  de synthèse rédigé dans l'objet SYNTH de la SPA).
  // ───────────────────────────────────────────────────────────────────
  { id: "reo-syn", sujet: "Fromagerie Réo", annee: 2021, dossier: 3, num: "3.S", fam: "💻",
    synthese: true, synthIndex: 0, synthOnly: true,
    primary: "pgi", secondary: ["perf_co", "performance"],
    libelle: "(15 lignes) Le numérique peut contribuer à l'amélioration de la performance" },
  { id: "bey-syn", sujet: "Beyer", annee: 2023, dossier: 2, num: "2.S", fam: "🛤️",
    synthese: true, synthIndex: 4, synthOnly: true,
    primary: "modele", secondary: ["valeurs", "competences"],
    libelle: "(15 lignes) Une innovation peut contribuer à améliorer la valeur perçue" },
  { id: "eye-syn", sujet: "Eyecontact", annee: 2024, dossier: 3, num: "3.S", fam: "💻",
    synthese: true, synthIndex: 6, synthOnly: true,
    primary: "ia", secondary: ["identite_num", "pgi"],
    libelle: "(15 lignes) Les technologies du numérique sont sources d'opportunités mais aussi de risques" },

];

// =====================================================================
// HELPERS — petites fonctions utilitaires pour interroger les données
// =====================================================================

// Retrouve une question par son id (ex: "be-1-1"). Renvoie undefined si absent.
function getQuestionBac(id) {
  return QUESTIONS_BAC.find(q => q.id === id);
}

// Renvoie toutes les questions d'un dossier donné (1, 2 ou 3).
function getQuestionsByDossier(dossier) {
  return QUESTIONS_BAC.filter(q => q.dossier === dossier);
}

// Renvoie toutes les questions partageant le même numéro de question (ex: "1.1").
// Sert pour la vue centrale "toutes les Q 1.1 du programme".
function getQuestionsByNum(num) {
  return QUESTIONS_BAC.filter(q => q.num === num);
}

// Renvoie la liste des numéros distincts d'un dossier (ex: ["1.1","1.2","1.3","1.4","1.5"]).
// Sert pour construire la sidebar compacte.
function getNumsForDossier(dossier) {
  const set = new Set(QUESTIONS_BAC.filter(q => q.dossier === dossier).map(q => q.num));
  // Tri par ordre lexicographique simple — fonctionne pour "1.1","1.2"... et "1.4a","1.4b"
  return [...set].sort();
}

// =====================================================================
// MAPPING question Bac → TYPE méthodologique (objet Q dans revizo-msgn.html)
// =====================================================================
// Quand une question du bac mobilise une notion qui correspond à un TYPE
// méthodologique pré-rédigé (méthode + corrigé + piège + astuce), on peut
// proposer un bouton "Voir la méthode complète" dans la popup Question du Bac.
//
// Si la notion-clé n'a pas de TYPE équivalent, getTypeKeyForQuestion()
// renvoie null et le bouton n'apparaît pas.
const NOTION_TO_TYPE = {
  // ─── Diagnostiquer & Décider ───
  finalites: 'parties',    parties: 'parties',
  modele: 'modele',
  competences: 'competences', fcs: 'competences',
  diagnostic_ext: 'diagnostic', marche: 'diagnostic',
  comportement: 'comportement_q',
  strategies: 'strategie',  das: 'strategie',
  decision: 'decision_q',
  croissance: 'croissance',       // TYPE 26 (ajouté avec corrigés officiels)
  integration: 'integration',     // TYPE 27 (ajouté avec corrigé Ankama 2023)
  // (ESS, Mintzberg : pas de TYPE dédié — rares en bac)

  // ─── Agir ───
  mercatique_n: 'mercatique', labels: 'mercatique',
  production_n: 'production',
  processus: 'processus_q',
  communication_n: 'communication', communication_ext: 'communication',
  identite_num: 'communication',

  // ─── Outils numériques ───
  pgi: 'numerique',         si_fonctions: 'numerique',
  blockchain: 'techno_q',   ia: 'techno_q',
  ecommerce: 'ecommerce',         // TYPE 28 (ajouté avec corrigé Renou 2024)

  // ─── Mesurer chiffres ───
  frng: 'frng', bfr: 'frng', tn: 'frng',
  va: 'va',    rex: 'va',
  couts: 'couts', seuil: 'couts',
  financement: 'financement', caf: 'financement',
  perf_co: 'evolution_q',

  // ─── Mesurer humain ───
  likert: 'direction',
  culture: 'culture',
  motivation: 'grh',
  gpec: 'gpecq',  risques_pro: 'gpecq',

  // ─── Engager ───
  rse: 'rse',     performance: 'rse',
  valeurs: 'valeurs_q',
  ethique: 'ethique'              // TYPE 29 (ajouté avec corrigé Bébé Serein 2025)
};

// Renvoie la clé du TYPE méthodologique associé à une question, ou null.
function getTypeKeyForQuestion(q) {
  if (!q || !q.primary) return null;
  return NOTION_TO_TYPE[q.primary] || null;
}
