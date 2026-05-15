// =====================================================================
// questions-bac-eco.js — 54 questions du Bac Économie STMG 2023-2025
// =====================================================================
// Sources :
//   - Documentation/annales-eco-2023-2025.md (libellés verbatim PDFs officiels)
//   - Codes Éducation Nationale décodés : ME=Métropole, PO=Polynésie,
//     IN=Océan Indien, NC=Nouvelle-Calédonie, G=Centres Étrangers
//   - Suffixe 1 = session principale (juin), 3 = remplacement (septembre)
//
// Format d'une entrée :
//   id        : "eco-<code>-<num>" (ex: "eco-25me1-3")
//   sujet     : nom court de l'entreprise / thème (ex: "SARL Camélia", "FMN & IDE")
//   annee     : 2023, 2024, 2025
//   session   : code session (ex: "CE", "Métropole", "Polynésie Remp.", "Océan Indien")
//   code      : code Éducation Nationale (ex: "24-MGDEME1")
//   num       : numéro de la question dans le sujet ("1", "2", "3", "4", parfois "5")
//   fam       : famille pédagogique (5 types vérifiés sur 14 sujets 2021-2025)
//                 ✏️ Définir / Rappeler  · 📊 Commenter / Constater
//                 🧠 Expliquer / Mécanisme · 🛠️ Identifier / Agir
//                 💭 Argumenter (✍️) — TOUJOURS en dernière position
//   theme     : "T6" / "T7" / "T8" (thème dominant)
//   primary   : id de la notion-clé (référence aux IDs de notions-eco.js)
//   secondary : tableau d'ids des notions secondaires (0 à 3)
//   synthese  : true si question d'argumentation ✍️ (rédaction 15 lignes)
//   libelle   : libellé EXACT du sujet officiel (PDF)
// =====================================================================

const QUESTIONS_BAC_ECO = [

  // ───────────────────────────────────────────────────────────────────
  // 1. FMN & IDE — 2023 Centres Étrangers (23-MGDEG1)
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-23g1-1", sujet: "FMN & IDE", annee: 2023, session: "Centres Étrangers", code: "23-MGDEG1", num: "1", fam: "🛠️",
    theme: "T8", primary: "fmn", secondary: ["ide", "mondialisation"],
    libelle: "Présentez le lien entre firmes multinationales (FMN) et investissements directs à l'étranger (IDE)." },
  { id: "eco-23g1-2", sujet: "FMN & IDE", annee: 2023, session: "Centres Étrangers", code: "23-MGDEG1", num: "2", fam: "📊",
    theme: "T8", primary: "ide", secondary: ["pib", "balance-commerciale"],
    libelle: "Comparez les effets de l'évolution des flux d'investissements directs à l'étranger (IDE) sur le PIB en France entre 2005 et 2021." },
  { id: "eco-23g1-3", sujet: "FMN & IDE", annee: 2023, session: "Centres Étrangers", code: "23-MGDEG1", num: "3", fam: "🧠",
    theme: "T8", primary: "facteurs-production", secondary: ["competitivite", "ide"],
    libelle: "Expliquez en quoi l'actuelle combinaison des facteurs de production en France contribue à l'attractivité du pays." },
  { id: "eco-23g1-4", sujet: "FMN & IDE", annee: 2023, session: "Centres Étrangers", code: "23-MGDEG1", num: "4", fam: "🛠️",
    theme: "T8", primary: "protectionnisme", secondary: ["ide", "fonctions-etat"],
    libelle: "Justifiez la nécessité de la mise en place des mesures de contrôle des investissements étrangers." },
  { id: "eco-23g1-5", sujet: "FMN & IDE", annee: 2023, session: "Centres Étrangers", code: "23-MGDEG1", num: "5", fam: "💭", synthese: true,
    theme: "T8", primary: "fmn", secondary: ["ide", "mondialisation", "libre-echange"],
    libelle: "Rédigez une argumentation : L'implantation de firmes multinationales est-elle toujours favorable pour l'économie d'un pays ?" },

  // ───────────────────────────────────────────────────────────────────
  // 2. Déficit & dette publique — 2023 Centres Étrangers (variante "Liban")
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-23g2-1", sujet: "Déficit & dette", annee: 2023, session: "Centres Étrangers (Liban)", code: "23-MGDEG1", num: "1", fam: "✏️",
    theme: "T6", primary: "deficit-dette", secondary: ["depenses-pub", "prelevements"],
    libelle: "Distinguez le déficit public de la dette publique et retrouvez par le calcul le déficit public pour l'année 2021." },
  { id: "eco-23g2-2", sujet: "Déficit & dette", annee: 2023, session: "Centres Étrangers (Liban)", code: "23-MGDEG1", num: "2", fam: "📊",
    theme: "T6", primary: "depenses-pub", secondary: ["prelevements", "deficit-dette"],
    libelle: "Commentez l'évolution des dépenses et des recettes publiques des administrations publiques." },
  { id: "eco-23g2-3", sujet: "Déficit & dette", annee: 2023, session: "Centres Étrangers (Liban)", code: "23-MGDEG1", num: "3", fam: "🧠",
    theme: "T6", primary: "pol-budgetaire", secondary: ["depenses-pub", "redistribution"],
    libelle: "Montrez en quoi les dépenses publiques favorisent la consommation." },
  { id: "eco-23g2-4", sujet: "Déficit & dette", annee: 2023, session: "Centres Étrangers (Liban)", code: "23-MGDEG1", num: "4", fam: "🧠",
    theme: "T6", primary: "pol-budgetaire", secondary: ["pol-monetaire", "fonctions-etat"],
    libelle: "Expliquez les principales politiques économiques mises en œuvre dans la Loi de finances rectificative 2022." },
  { id: "eco-23g2-5", sujet: "Déficit & dette", annee: 2023, session: "Centres Étrangers (Liban)", code: "23-MGDEG1", num: "5", fam: "💭", synthese: true,
    theme: "T6", primary: "pol-budgetaire", secondary: ["deficit-dette", "fonctions-etat"],
    libelle: "Rédigez une argumentation : La politique budgétaire de l'État est-elle efficace en temps de crise ?" },

  // ───────────────────────────────────────────────────────────────────
  // 3. Difficultés de recrutement — 2024 Métropole Remp. (24-MGDEME3)
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-24me3-1", sujet: "Recrutement", annee: 2024, session: "Métropole Remp.", code: "24-MGDEME3", num: "1", fam: "📊",
    theme: "T7", primary: "marche-travail", secondary: ["offre-travail"],
    libelle: "Décrivez l'évolution des difficultés de recrutement selon les secteurs d'activité." },
  { id: "eco-24me3-2", sujet: "Recrutement", annee: 2024, session: "Métropole Remp.", code: "24-MGDEME3", num: "2", fam: "🧠",
    theme: "T7", primary: "offre-travail", secondary: ["marche-travail", "types-chomage"],
    libelle: "Expliquez les freins à l'emploi pour les offreurs de travail." },
  { id: "eco-24me3-3", sujet: "Recrutement", annee: 2024, session: "Métropole Remp.", code: "24-MGDEME3", num: "3", fam: "🛠️",
    theme: "T7", primary: "politiques-emploi", secondary: ["politique-active-passive"],
    libelle: "Identifiez les mesures de politique de l'emploi mises en œuvre en France." },
  { id: "eco-24me3-4", sujet: "Recrutement", annee: 2024, session: "Métropole Remp.", code: "24-MGDEME3", num: "4", fam: "💭", synthese: true,
    theme: "T7", primary: "politiques-emploi", secondary: ["fonctions-etat", "offre-travail"],
    libelle: "Rédigez une argumentation : L'intervention de l'État suffit-elle pour agir sur l'offre de travail ?" },

  // ───────────────────────────────────────────────────────────────────
  // 4. Dépenses publiques & inégalités — 2024 Océan Indien (24-MGDEIN1)
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-24in1-1", sujet: "Dépenses pub. & inégalités", annee: 2024, session: "Océan Indien", code: "24-MGDEIN1", num: "1", fam: "📊",
    theme: "T6", primary: "depenses-pub", secondary: ["fonctions-etat"],
    libelle: "Commentez l'évolution des dépenses publiques en France." },
  { id: "eco-24in1-2", sujet: "Dépenses pub. & inégalités", annee: 2024, session: "Océan Indien", code: "24-MGDEIN1", num: "2", fam: "🧠",
    theme: "T6", primary: "protection-sociale", secondary: ["redistribution"],
    libelle: "Distinguez la logique d'assistance de la logique d'assurance en présentant un exemple pour chacune d'elle." },
  { id: "eco-24in1-3", sujet: "Dépenses pub. & inégalités", annee: 2024, session: "Océan Indien", code: "24-MGDEIN1", num: "3", fam: "🧠",
    theme: "T6", primary: "inflation", secondary: ["pouvoir-achat", "redistribution"],
    libelle: "Montrez que la hausse des prix a des conséquences inégales sur les ménages français." },
  { id: "eco-24in1-4", sujet: "Dépenses pub. & inégalités", annee: 2024, session: "Océan Indien", code: "24-MGDEIN1", num: "4", fam: "💭", synthese: true,
    theme: "T6", primary: "redistribution", secondary: ["protection-sociale", "fonctions-etat"],
    libelle: "Rédigez une argumentation : Les politiques sociales sont-elles suffisantes pour lutter contre les inégalités ?" },

  // ───────────────────────────────────────────────────────────────────
  // 5. Biens communs — 2024 Centres Étrangers (24-MGDEG1) — Mme De Gouges
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-24g1-1", sujet: "Biens communs", annee: 2024, session: "Centres Étrangers", code: "24-MGDEG1", num: "1", fam: "✏️",
    theme: "T6", primary: "biens-communs", secondary: ["biens-publics"],
    libelle: "Distinguez les notions de biens collectifs et de biens communs." },
  { id: "eco-24g1-2", sujet: "Biens communs", annee: 2024, session: "Centres Étrangers", code: "24-MGDEG1", num: "2", fam: "🛠️",
    theme: "T6", primary: "externalites", secondary: ["externalites-env"],
    libelle: "Repérez les externalités négatives de l'activité humaine sur l'environnement en France." },
  { id: "eco-24g1-3", sujet: "Biens communs", annee: 2024, session: "Centres Étrangers", code: "24-MGDEG1", num: "3", fam: "📊",
    theme: "T6", primary: "externalites-env", secondary: ["fiscalite-eco", "depenses-pub"],
    libelle: "Commentez l'évolution des postes de dépenses de la protection de l'environnement en France." },
  { id: "eco-24g1-4", sujet: "Biens communs", annee: 2024, session: "Centres Étrangers", code: "24-MGDEG1", num: "4", fam: "💭", synthese: true,
    theme: "T6", primary: "biens-communs", secondary: ["fonctions-etat", "externalites"],
    libelle: "Rédigez une argumentation : L'intervention de l'État français permet-elle de protéger les biens communs ?" },

  // ───────────────────────────────────────────────────────────────────
  // 6. SARL Camélia — 2024 Métropole (24-MGDEME1) — Prélèvements obligatoires
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-24me1-1", sujet: "SARL Camélia", annee: 2024, session: "Métropole", code: "24-MGDEME1", num: "1", fam: "✏️",
    theme: "T6", primary: "deficit-dette", secondary: ["prelevements"],
    libelle: "Rappelez le lien entre déficit public et dette publique." },
  { id: "eco-24me1-2", sujet: "SARL Camélia", annee: 2024, session: "Métropole", code: "24-MGDEME1", num: "2", fam: "📊",
    theme: "T6", primary: "prelevements", secondary: ["redistribution", "pouvoir-achat"],
    libelle: "Présentez les conséquences de la baisse des prélèvements obligatoires selon le niveau de vie des ménages en 2020/2021." },
  { id: "eco-24me1-3", sujet: "SARL Camélia", annee: 2024, session: "Métropole", code: "24-MGDEME1", num: "3", fam: "🛠️",
    theme: "T6", primary: "competitivite", secondary: ["prelevements", "ide"],
    libelle: "Identifiez en quoi la baisse des prélèvements obligatoires peut être source de compétitivité des entreprises et d'attractivité du territoire." },
  { id: "eco-24me1-4", sujet: "SARL Camélia", annee: 2024, session: "Métropole", code: "24-MGDEME1", num: "4", fam: "💭", synthese: true,
    theme: "T6", primary: "prelevements", secondary: ["croissance", "competitivite", "pol-budgetaire"],
    libelle: "Rédigez une argumentation : La réduction des prélèvements obligatoires favorise-t-elle la croissance économique ?" },

  // ───────────────────────────────────────────────────────────────────
  // 7. Pouvoir d'achat — 2025 Métropole Remp. (25-MGDEME3)
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-25me3-1", sujet: "Pouvoir d'achat", annee: 2025, session: "Métropole Remp.", code: "25-MGDEME3", num: "1", fam: "📊",
    theme: "T6", primary: "pouvoir-achat", secondary: ["revenu-disponible", "inflation"],
    libelle: "Commentez l'évolution du revenu disponible et du pouvoir d'achat en France depuis 2015." },
  { id: "eco-25me3-2", sujet: "Pouvoir d'achat", annee: 2025, session: "Métropole Remp.", code: "25-MGDEME3", num: "2", fam: "🧠",
    theme: "T6", primary: "inflation", secondary: ["pouvoir-achat", "revenu-disponible"],
    libelle: "Expliquez le mécanisme qui relie niveau des prix, revenu disponible et pouvoir d'achat." },
  { id: "eco-25me3-3", sujet: "Pouvoir d'achat", annee: 2025, session: "Métropole Remp.", code: "25-MGDEME3", num: "3", fam: "🛠️",
    theme: "T6", primary: "pol-monetaire", secondary: ["pol-budgetaire", "inflation"],
    libelle: "Identifiez les types de politiques économiques mises en place pour limiter les conséquences de la hausse des prix." },
  { id: "eco-25me3-4", sujet: "Pouvoir d'achat", annee: 2025, session: "Métropole Remp.", code: "25-MGDEME3", num: "4", fam: "💭", synthese: true,
    theme: "T6", primary: "pouvoir-achat", secondary: ["croissance", "pol-budgetaire", "fonctions-etat"],
    libelle: "Rédigez une argumentation : L'intervention de l'État en faveur du pouvoir d'achat des ménages permet-elle de stimuler la croissance économique ?" },

  // ───────────────────────────────────────────────────────────────────
  // 8. Chômage & inégalités — 2025 Polynésie Remp. (25-MGDEPO3)
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-25po3-1", sujet: "Chômage & inégalités", annee: 2025, session: "Polynésie Remp.", code: "25-MGDEPO3", num: "1", fam: "✏️",
    theme: "T7", primary: "politique-active-passive", secondary: ["politiques-emploi"],
    libelle: "Distinguez politiques active et passive de l'emploi." },
  { id: "eco-25po3-2", sujet: "Chômage & inégalités", annee: 2025, session: "Polynésie Remp.", code: "25-MGDEPO3", num: "2", fam: "🛠️",
    theme: "T7", primary: "marche-travail", secondary: ["redistribution"],
    libelle: "Identifiez les différentes sources d'inégalités sur le marché du travail." },
  { id: "eco-25po3-3", sujet: "Chômage & inégalités", annee: 2025, session: "Polynésie Remp.", code: "25-MGDEPO3", num: "3", fam: "🧠",
    theme: "T7", primary: "politiques-emploi", secondary: ["politique-active-passive"],
    libelle: "Expliquez comment les mesures prises par les gouvernements peuvent réduire le chômage." },
  { id: "eco-25po3-4", sujet: "Chômage & inégalités", annee: 2025, session: "Polynésie Remp.", code: "25-MGDEPO3", num: "4", fam: "💭", synthese: true,
    theme: "T7", primary: "politiques-emploi", secondary: ["redistribution", "marche-travail"],
    libelle: "Rédigez une argumentation : Les politiques de lutte contre le chômage permettent-elles de réduire les inégalités sur le marché du travail ?" },

  // ───────────────────────────────────────────────────────────────────
  // 9. SARL OGALAU — 2025 Océan Indien (25-MGDEIN1) — Fiscalité environnementale
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-25in1-1", sujet: "Fiscalité environnementale", annee: 2025, session: "Océan Indien", code: "25-MGDEIN1", num: "1", fam: "✏️",
    theme: "T9", primary: "agents-eco", secondary: ["fonctions-etat"],
    libelle: "Rappelez la fonction principale des agents économiques : ménages et entreprises." },
  { id: "eco-25in1-2", sujet: "Fiscalité environnementale", annee: 2025, session: "Océan Indien", code: "25-MGDEIN1", num: "2", fam: "🛠️",
    theme: "T9", primary: "fiscalite-eco", secondary: ["externalites-env", "fonctions-etat"],
    libelle: "Identifiez les instruments mis en place par l'État pour favoriser la transition écologique." },
  { id: "eco-25in1-3", sujet: "Fiscalité environnementale", annee: 2025, session: "Océan Indien", code: "25-MGDEIN1", num: "3", fam: "🧠",
    theme: "T9", primary: "fiscalite-eco", secondary: ["externalites", "externalites-env"],
    libelle: "Montrez que la fiscalité environnementale modifie le comportement des agents économiques." },
  { id: "eco-25in1-4", sujet: "Fiscalité environnementale", annee: 2025, session: "Océan Indien", code: "25-MGDEIN1", num: "4", fam: "💭", synthese: true,
    theme: "T9", primary: "externalites-env", secondary: ["biens-communs", "fiscalite-eco", "developpement-durable"],
    libelle: "Rédigez une argumentation : L'intervention de l'État dans l'économie permet-elle de préserver l'environnement ?" },

  // ───────────────────────────────────────────────────────────────────
  // 10. Tourisme — 2025 Centres Étrangers (25-MGDEG1) — Bastien MISTRALLET
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-25g1-1", sujet: "Tourisme & défaillances", annee: 2025, session: "Centres Étrangers", code: "25-MGDEG1", num: "1", fam: "🛠️",
    theme: "T8", primary: "balance-commerciale", secondary: ["mondialisation"],
    libelle: "Identifiez la place de la France sur le marché du tourisme mondial." },
  { id: "eco-25g1-2", sujet: "Tourisme & défaillances", annee: 2025, session: "Centres Étrangers", code: "25-MGDEG1", num: "2", fam: "🛠️",
    theme: "T6", primary: "externalites", secondary: ["externalites-env"],
    libelle: "Présentez les externalités générées par le tourisme." },
  { id: "eco-25g1-3", sujet: "Tourisme & défaillances", annee: 2025, session: "Centres Étrangers", code: "25-MGDEG1", num: "3", fam: "🧠",
    theme: "T6", primary: "defaillances", secondary: ["fonctions-etat"],
    libelle: "Expliquez comment les États interviennent pour réguler les défaillances dans le secteur du tourisme." },
  { id: "eco-25g1-4", sujet: "Tourisme & défaillances", annee: 2025, session: "Centres Étrangers", code: "25-MGDEG1", num: "4", fam: "💭", synthese: true,
    theme: "T6", primary: "defaillances", secondary: ["fonctions-etat", "externalites"],
    libelle: "Rédigez une argumentation : L'intervention de l'État est-elle suffisante pour corriger les défaillances de marché ?" },

  // ───────────────────────────────────────────────────────────────────
  // 11. ArchiDij974 — 2025 Métropole (25-MGDEME1) — Libre-échange
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-25me1-1", sujet: "ArchiDij974", annee: 2025, session: "Métropole", code: "25-MGDEME1", num: "1", fam: "📊",
    theme: "T8", primary: "balance-commerciale", secondary: ["libre-echange", "mondialisation"],
    libelle: "Commentez l'évolution des échanges de biens entre 2015 et 2023." },
  { id: "eco-25me1-2", sujet: "ArchiDij974", annee: 2025, session: "Métropole", code: "25-MGDEME1", num: "2", fam: "📊",
    theme: "T8", primary: "pib", secondary: ["balance-commerciale"],
    libelle: "Comparez les contributions de la consommation et du commerce extérieur dans la formation du PIB de la France." },
  { id: "eco-25me1-3", sujet: "ArchiDij974", annee: 2025, session: "Métropole", code: "25-MGDEME1", num: "3", fam: "🧠",
    theme: "T8", primary: "droits-douane", secondary: ["protectionnisme", "competitivite"],
    libelle: "Expliquez les conséquences de la hausse des droits de douane sur l'activité des entreprises." },
  { id: "eco-25me1-4", sujet: "ArchiDij974", annee: 2025, session: "Métropole", code: "25-MGDEME1", num: "4", fam: "💭", synthese: true,
    theme: "T8", primary: "libre-echange", secondary: ["croissance", "protectionnisme", "mondialisation"],
    libelle: "Rédigez une argumentation : Le libre-échange favorise-t-il la croissance économique ?" },

  // ───────────────────────────────────────────────────────────────────
  // 12. Abir MONSE — 2025 Polynésie (25-MGDEPO1) — Chômage & substitution
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-25po1-1", sujet: "Chômage & facteurs", annee: 2025, session: "Polynésie", code: "25-MGDEPO1", num: "1", fam: "📊",
    theme: "T7", primary: "types-chomage", secondary: ["marche-travail"],
    libelle: "Commentez l'évolution du taux de chômage en France selon le diplôme entre 2000 et 2023." },
  { id: "eco-25po1-2", sujet: "Chômage & facteurs", annee: 2025, session: "Polynésie", code: "25-MGDEPO1", num: "2", fam: "🧠",
    theme: "T7", primary: "facteurs-production", secondary: ["types-chomage", "marche-travail"],
    libelle: "Déterminez si la substitution entre les facteurs de production travail et capital est source de chômage." },
  { id: "eco-25po1-3", sujet: "Chômage & facteurs", annee: 2025, session: "Polynésie", code: "25-MGDEPO1", num: "3", fam: "🧠",
    theme: "T7", primary: "politique-active-passive", secondary: ["politiques-emploi", "fonctions-etat"],
    libelle: "Démontrez que l'intervention de l'État en matière de chômage relève de politiques active et passive." },
  { id: "eco-25po1-4", sujet: "Chômage & facteurs", annee: 2025, session: "Polynésie", code: "25-MGDEPO1", num: "4", fam: "💭", synthese: true,
    theme: "T7", primary: "politiques-emploi", secondary: ["fonctions-etat", "politique-active-passive"],
    libelle: "Rédigez une argumentation : L'intervention de l'État réduit-elle le chômage en France ?" },

  // ───────────────────────────────────────────────────────────────────
  // 13. Ellen DIAGNOU — 2025 Nouvelle-Calédonie (25-MGDENC1) — Halo & sous-emploi
  // ───────────────────────────────────────────────────────────────────
  { id: "eco-25nc1-1", sujet: "Halo & sous-emploi", annee: 2025, session: "Nouvelle-Calédonie", code: "25-MGDENC1", num: "1", fam: "📊",
    theme: "T7", primary: "types-chomage", secondary: ["marche-travail", "population-active"],
    libelle: "Commentez l'évolution du taux de chômage en France entre 2003 et 2023." },
  { id: "eco-25nc1-2", sujet: "Halo & sous-emploi", annee: 2025, session: "Nouvelle-Calédonie", code: "25-MGDENC1", num: "2", fam: "✏️",
    theme: "T7", primary: "halo-chomage", secondary: ["sous-emploi", "marche-travail"],
    libelle: "Distinguez les notions de halo du chômage et de sous-emploi." },
  { id: "eco-25nc1-3", sujet: "Halo & sous-emploi", annee: 2025, session: "Nouvelle-Calédonie", code: "25-MGDENC1", num: "3", fam: "🛠️",
    theme: "T7", primary: "politiques-emploi", secondary: ["politique-active-passive"],
    libelle: "Identifiez à quels types de politiques de l'emploi appartiennent les mesures prises par l'État en matière de lutte contre le chômage." },
  { id: "eco-25nc1-4", sujet: "Halo & sous-emploi", annee: 2025, session: "Nouvelle-Calédonie", code: "25-MGDENC1", num: "4", fam: "💭", synthese: true,
    theme: "T7", primary: "politiques-emploi", secondary: ["politique-active-passive", "fonctions-etat"],
    libelle: "Rédigez une argumentation : Les politiques d'emploi mises en œuvre par la France luttent-elles efficacement contre le chômage ?" }

];

// =====================================================================
// MAPPING NOTION → TYPE de question (pour le bouton "Réponse attendue")
// =====================================================================
// Relie chaque notion-clé à un TYPE méthodologique récurrent.
// Les 7 TYPES sont définis dans la SPA revizo-eco.html (objet Q).
// =====================================================================

const NOTION_TO_TYPE_ECO = {
  // TYPE 1 — Argumenter sur l'efficacité d'une politique économique
  "pol-budgetaire": 1, "pol-monetaire": 1, "redistribution": 1,
  "fonctions-etat": 1, "pouvoir-achat": 1, "prelevements": 1,

  // TYPE 2 — Analyser une situation d'emploi / chômage
  "marche-travail": 2, "types-chomage": 2, "politiques-emploi": 2,
  "politique-active-passive": 2, "offre-travail": 2,
  "halo-chomage": 2, "sous-emploi": 2, "population-active": 2,

  // TYPE 3 — Argumenter sur le libre-échange / commerce international
  "libre-echange": 3, "protectionnisme": 3, "droits-douane": 3,
  "mondialisation": 3, "ide": 3, "fmn": 3, "omc": 3,
  "balance-commerciale": 3, "facteurs-production": 3, "competitivite": 3,

  // TYPE 4 — Calculer et commenter un indicateur
  "deficit-dette": 4, "pib": 4,

  // TYPE 5 — Distinguer deux notions proches
  "protection-sociale": 5, "biens-publics": 5, "biens-communs": 5,
  "inflation": 5, "revenu-disponible": 5,

  // TYPE 6 — Expliquer un mécanisme économique
  "depenses-pub": 6, "externalites": 6, "defaillances": 6,
  "fiscalite-eco": 6, "agents-eco": 6, "marche": 6, "financement": 6,

  // TYPE 7 — Commenter l'évolution de données (tableau / graphique)
  "externalites-env": 7,

  // T9 (Grand Oral)
  "croissance": 6, "developpement-durable": 6, "soutenabilite": 6
};

// =====================================================================
// HELPERS
// =====================================================================

function getQuestionsBySujet(sujetName) {
  return QUESTIONS_BAC_ECO.filter(q => q.sujet === sujetName);
}

function getQuestionsByNotion(notionId) {
  return QUESTIONS_BAC_ECO.filter(q =>
    q.primary === notionId || (q.secondary || []).includes(notionId)
  );
}

function getQuestionsByTheme(theme) {
  return QUESTIONS_BAC_ECO.filter(q => q.theme === theme);
}

function getSyntheses() {
  return QUESTIONS_BAC_ECO.filter(q => q.synthese === true);
}

// =====================================================================
// ORDRE DES NOTIONS sur la carte (pour le tri des questions par notion)
// =====================================================================
// Suit l'ordre visuel de fiche-memo-cycle-eco.html :
// T6 (Constater → Expliquer → Agir) puis T7, T8, T9, Rappels

const NOTIONS_ORDER_ECO = [
  // T6 — État
  "deficit-dette", "depenses-pub", "prelevements", "inflation", "revenu-disponible",
  "fonctions-etat", "defaillances", "externalites", "biens-publics", "biens-communs",
  "pol-budgetaire", "pol-monetaire", "redistribution", "protection-sociale", "pouvoir-achat",
  // T7 — Emploi
  "population-active", "types-chomage", "halo-chomage", "sous-emploi",
  "marche-travail", "offre-travail",
  "politiques-emploi", "politique-active-passive",
  // T8 — Commerce
  "mondialisation", "balance-commerciale", "ide",
  "fmn", "facteurs-production", "competitivite",
  "libre-echange", "protectionnisme", "droits-douane", "omc",
  // T9 — Oral
  "croissance", "developpement-durable", "soutenabilite", "externalites-env", "fiscalite-eco",
  // Rappels Première
  "agents-eco", "pib", "marche", "financement"
];
