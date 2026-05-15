// =====================================================================
// notions-eco.js — Source des 42 notions cadres du programme Éco STMG
// =====================================================================
// Format identique à notions-msgn.js : id → { tag, titre, freq, def, form, [interp], ex, conf }
// Tag = thème du programme STMG (T6 État, T7 Emploi, T8 Commerce, T9 Oral, Rappels 1ère)
// Source matière : Economie/Revizo_Economie_STMG_Notions.md (429 lignes)
// Source bac    : Documentation/annales-eco-2023-2025.md (13 sujets, 54 questions, 2023-2025)
//
// 🔗 LIEN AVEC LES MÉMOS — RÈGLE DE SYNCHRONISATION
// ─────────────────────────────────────────────────────────────────────
// Ce fichier est utilisé par la SPA revizo-eco.html (vue programme cadre).
// Les 4 mémos memo-eco-theme6/7/8/9.html ont leur PROPRE objet tipsData
// avec des sous-notions plus FINES (102 tooltips au total).
//
// → notions-eco.js et tipsData mémos sont COMPLÉMENTAIRES, pas redondants.
// → Mapping complet : Documentation/annales-eco-2023-2025.md §2bis
//
// ⚠️ POUR MODIFIER une notion ici :
//   1. Repérer la (ou les) entrée(s) correspondante(s) dans les mémos
//      (chercher le `data-tip="<id>"` dans memo-eco-themeX.html)
//   2. Synchroniser sémantiquement les deux versions
//   3. Voir le tableau de mapping §2bis du doc-mère pour les correspondances
//
// Exemple : "protection-sociale" ici est éclatée en "assurance" + "assistance" dans memo T6.
// =====================================================================

const NE = {

  // ═══════════════════════════════════════════════════════════════════════
  // THÈME 6 — Comment l'État peut-il intervenir dans l'économie ?
  // ═══════════════════════════════════════════════════════════════════════

  "etat-gendarme-providence": {
    tag:"T6 — État dans l'économie", titre:"État-gendarme vs État-providence", freq:"★★★☆☆ Régulière (cadrage)",
    def:"Deux conceptions historiques du rôle de l'État.\n• ÉTAT-GENDARME (libéral, XIXe) : missions régaliennes uniquement — police, justice, défense, monnaie. C'est le 'laissez-faire'.\n• ÉTAT-PROVIDENCE (post-1945) : ajout de la protection sociale, éducation, santé, régulation économique.",
    form:"📋 ÉVOLUTION HISTORIQUE :\n\n🏛️ ÉTAT-GENDARME (XIXe — années 1930)\n→ Inspiration : libéralisme classique (Adam Smith, 'main invisible')\n→ Rôle : maintenir l'ordre + faire respecter les contrats\n→ Dépenses publiques : ~10 % du PIB\n→ Pas de sécu, pas d'école obligatoire (avant Jules Ferry 1881)\n\n🏥 ÉTAT-PROVIDENCE (1945 — aujourd'hui)\n→ Inspiration : keynésianisme + plan Beveridge UK\n→ Rôle : protection sociale + régulation économique + redistribution\n→ Dépenses publiques : ~57 % du PIB en France (l'un des taux les plus élevés au monde)\n→ Sécu, école jusqu'à 16 ans, retraites, chômage, RSA, APL\n\n⚖️ DÉBAT ACTUEL :\n→ Interventionnisme (Keynes) : l'État DOIT intervenir\n→ Libéralisme (Hayek, Friedman) : l'État doit se RETIRER",
    ex:"La France de 1880 = État-gendarme (rien de social). La France de 2024 = État-providence (Sécu + école + retraite + chômage). Royaume-Uni sous Thatcher (1980+) = recul partiel vers l'État-gendarme.",
    conf:"⚠️ Notion d'INTRO du programme T6. Capacité explicite : 'Expliquer les différences entre État-gendarme et État-providence.' À mobiliser en ouverture de TOUTE argumentation sur le rôle de l'État."
  },

  "fonctions-etat": {
    tag:"T6 — État dans l'économie", titre:"Fonctions économiques de l'État", freq:"★★★★★ Constante",
    def:"L'État remplit trois grandes fonctions dans l'économie : allocation des ressources (fournir les biens publics, corriger les défaillances du marché), redistribution (réduire les inégalités) et stabilisation (maintenir la croissance et l'emploi).",
    form:"📋 LES 3 FONCTIONS (Musgrave) :\n\n1️⃣ ALLOCATION\n→ Fournir les biens publics (éducation, défense, justice)\n→ Corriger les défaillances du marché (externalités, biens communs)\n\n2️⃣ REDISTRIBUTION\n→ Réduire les inégalités de revenus et de patrimoine\n→ Outils : impôt progressif, prestations sociales, services publics\n\n3️⃣ STABILISATION\n→ Lutter contre les crises (relance) et l'inflation\n→ Outils : politique budgétaire + politique monétaire (BCE)",
    ex:"L'État finance l'éducation publique (allocation), verse le RSA (redistribution), et lance un plan de relance en période de crise (stabilisation).",
    conf:"⚠️ Notion de CADRAGE, souvent mobilisée en introduction d'une argumentation. À TOUJOURS citer dans une question du type 'L'intervention de l'État permet-elle de…' — c'est le verrou cognitif de l'épreuve (8 sujets sur 13 le mobilisent)."
  },

  "defaillances": {
    tag:"T6 — État dans l'économie", titre:"Défaillances du marché", freq:"★★★☆☆ Régulière",
    def:"Situations où le marché, laissé à lui-même, ne produit pas un résultat efficace ou équitable. Justifient l'intervention de l'État.",
    form:"📋 LES 5 TYPES :\n\n1️⃣ ASYMÉTRIES D'INFORMATION\n→ Un acteur sait plus que l'autre (vendeur de voiture d'occasion vs acheteur)\n\n2️⃣ EXTERNALITÉS (positives ou négatives)\n→ Effets sur des tiers sans compensation (pollution = externalité négative)\n\n3️⃣ BIENS PUBLICS\n→ Non rivaux + non excluables (le marché ne les produit pas spontanément)\n\n4️⃣ BIENS COMMUNS\n→ Rivaux + non excluables, menacés de surexploitation (poissons, forêts)\n\n5️⃣ CONCURRENCE IMPARFAITE\n→ Monopoles, oligopoles qui faussent le jeu du marché",
    ex:"La pollution de l'air est une externalité négative : les entreprises polluent sans payer le coût social. L'État intervient par la réglementation ou la fiscalité (taxe carbone).",
    conf:"⚠️ Tombé en 2024 CE (biens communs, Mme De Gouges) et 2025 CE (défaillances/tourisme). C'est le PIVOT entre 'pourquoi l'État doit intervenir' et 'comment il intervient'."
  },

  "biens-publics": {
    tag:"T6 — État dans l'économie", titre:"Biens publics", freq:"★★★☆☆ Régulière",
    def:"Biens NON RIVAUX (la consommation par l'un ne prive pas les autres) et NON EXCLUABLES (impossible d'empêcher quelqu'un d'en bénéficier). Le marché ne les produit pas spontanément car personne n'a intérêt à payer pour un bien dont chacun peut bénéficier gratuitement.",
    form:"Caractéristiques :\n→ Non rivaux : l'éclairage public profite à tous, sans diminuer\n→ Non excluables : impossible d'empêcher quelqu'un d'en bénéficier\n→ Conséquence : 'free riding' (passager clandestin) — d'où la nécessité de l'État",
    ex:"L'éclairage public, la défense nationale, la diffusion radio/TV gratuite, les phares maritimes.",
    conf:"⚠️ Ne pas confondre **bien public** (éclairage public) et **service public** (école, hôpital — qui peuvent être rivaux ou excluables). Le service public est une mission, le bien public est une caractéristique économique du bien."
  },

  "biens-communs": {
    tag:"T6 — État dans l'économie", titre:"Biens communs", freq:"★★★☆☆ Régulière",
    def:"Biens RIVAUX (consommer par l'un prive les autres) mais NON EXCLUABLES (impossible d'empêcher l'accès). D'où le risque de **tragédie des biens communs** : surexploitation jusqu'à épuisement.",
    form:"Caractéristiques :\n→ Rivaux : la pêche d'un poisson prive les autres pêcheurs\n→ Non excluables : impossible d'empêcher l'accès à la mer\n→ Risque : surexploitation → épuisement de la ressource\n\nSolutions possibles :\n→ Quotas (pêche, eau)\n→ Droits de propriété privée (Ostrom)\n→ Coopération locale (gestion communautaire)",
    ex:"Stocks de poissons en mer, forêts non clôturées, eau douce, atmosphère (le climat est un bien commun mondial).",
    conf:"⚠️ Tombé en 2024 Centres Étrangers (sujet entier sur 'Distinguez biens collectifs et biens communs' + argumentation 'L'État protège-t-il les biens communs ?'). Ne pas confondre BIENS COMMUNS (rivaux) et BIENS PUBLICS (non rivaux)."
  },

  "externalites": {
    tag:"T6 — État dans l'économie", titre:"Externalités positives et négatives", freq:"★★★★☆ Récurrente",
    def:"Effets de l'activité d'un agent économique sur des tiers SANS COMPENSATION marchande. Le marché ne les prend pas en compte → c'est une défaillance qui justifie l'intervention de l'État.",
    form:"2 TYPES :\n\n➕ EXTERNALITÉS POSITIVES\n→ Bénéfices pour les tiers (recherche, vaccination, éducation)\n→ Sous-produites par le marché → l'État doit subventionner\n\n➖ EXTERNALITÉS NÉGATIVES\n→ Coûts subis par les tiers (pollution, congestion, bruit)\n→ Sur-produites par le marché → l'État doit taxer ou réglementer (principe pollueur-payeur)",
    ex:"Externalité négative : une usine pollue une rivière → les pêcheurs subissent un coût sans être indemnisés. Externalité positive : un apiculteur installe ses ruches → les agriculteurs voisins voient leurs cultures pollinisées gratuitement.",
    conf:"⚠️ Tombé en 2024 CE (biens communs, externalités négatives sur l'environnement) et 2025 CE (externalités du tourisme). La logique 'pollueur-payeur' est le mécanisme central de la fiscalité écologique."
  },

  "depenses-pub": {
    tag:"T6 — État dans l'économie", titre:"Dépenses publiques", freq:"★★★★☆ Récurrente",
    def:"Ensemble des dépenses réalisées par les administrations publiques (État, collectivités territoriales, sécurité sociale). En France ≈ 57 % du PIB en 2023 — l'un des taux les plus élevés d'Europe.",
    form:"📋 RÉPARTITION (France 2023) :\n→ Protection sociale (retraites, santé, famille) : ~45 %\n→ Services publics (éducation, défense, police) : ~25 %\n→ Affaires économiques (transport, recherche, aides) : ~10 %\n→ Services généraux + dette : ~20 %\n\nFinancement : prélèvements obligatoires (impôts + cotisations sociales).\nSi dépenses > recettes → DÉFICIT public.",
    ex:"En 2024, les dépenses publiques françaises atteignent ~1 600 milliards d'euros, dont 700 Md€ pour la protection sociale.",
    conf:"⚠️ Tombé en 2023 CE (évolution dépenses/recettes), 2024 IN (évolution dépenses), 2024 CE (dépenses protection environnement). Ne pas confondre **dépenses publiques** (flux annuel) et **dette publique** (stock accumulé)."
  },

  "prelevements": {
    tag:"T6 — État dans l'économie", titre:"Prélèvements obligatoires (PO)", freq:"★★★★☆ Récurrente",
    def:"Versements obligatoires effectués par les ménages et entreprises au profit des administrations publiques, sans contrepartie directe. En France ~46 % du PIB.",
    form:"📋 COMPOSITION :\n→ IMPÔTS : IR (impôt sur le revenu), IS (impôt sur les sociétés), TVA, impôts locaux, TICPE…\n→ COTISATIONS SOCIALES : sécurité sociale, retraite, chômage (salariés + employeurs)\n\nEffet sur les ménages :\n→ Baisse des PO → hausse du revenu disponible → relance de la consommation\n→ Mais effet inégal selon le niveau de vie (baisse IR favorise plus les hauts revenus)\n\nEffet sur les entreprises :\n→ Baisse des cotisations → baisse du coût du travail → compétitivité-prix\n→ Risque : baisse des recettes publiques → déficit",
    ex:"SARL Camélia 2024 Métropole : la baisse des prélèvements obligatoires (notamment cotisations) est utilisée pour stimuler la compétitivité. Question argumentation : 'La réduction des prélèvements obligatoires favorise-t-elle la croissance économique ?'",
    conf:"⚠️ Question récurrente sur 'baisse des PO = relance ?'. Argumenter dans les DEUX sens : pour (compétitivité, pouvoir d'achat) + contre (baisse des recettes, inégalités, financement protection sociale)."
  },

  "deficit-dette": {
    tag:"T6 — État dans l'économie", titre:"Déficit public vs dette publique", freq:"★★★★★ Constante",
    def:"Deux notions COMPLÉMENTAIRES mais distinctes :\n• Déficit public = FLUX annuel (dépenses > recettes sur une année)\n• Dette publique = STOCK accumulé (somme des déficits passés non remboursés)",
    form:"📐 FORMULES :\n→ Déficit = Dépenses publiques − Recettes publiques (sur 1 an)\n→ Dette = Déficits cumulés (somme des années précédentes)\n\n📊 RÈGLES EUROPÉENNES (Maastricht) :\n→ Déficit ≤ 3 % du PIB\n→ Dette ≤ 60 % du PIB\n\n📌 EN FRANCE (2023) :\n→ Déficit ~5,5 % du PIB (au-dessus de la règle)\n→ Dette ~110 % du PIB (largement au-dessus)\n\n🔄 LIEN : un déficit récurrent alimente la dette. Pour réduire la dette, il faut soit dégager un excédent budgétaire, soit que le PIB croisse plus vite que la dette.",
    ex:"2023 Centres Étrangers : 'Distinguez le déficit public de la dette publique et retrouvez par le calcul le déficit public pour l'année 2021' (= sujet entier sur ce couple).",
    conf:"⚠️ LE piège classique du Bac : confondre déficit (flux) et dette (stock). Toujours répondre : 'Le déficit est une variation annuelle, la dette est une accumulation.' Penser à la baignoire : le déficit = le robinet ouvert ; la dette = le niveau d'eau."
  },

  "pol-budgetaire": {
    tag:"T6 — État dans l'économie", titre:"Politique budgétaire", freq:"★★★★★ Constante",
    def:"Utilisation du budget de l'État (recettes + dépenses) pour agir sur l'activité économique. C'est l'instrument PRINCIPAL de la fonction de stabilisation.",
    form:"📋 DEUX GRANDS TYPES :\n\n🔵 POLITIQUE DE RELANCE (par la demande, Keynes)\n→ Augmenter les dépenses publiques (investissements, prestations)\n→ Baisser les impôts → ménages dépensent plus\n→ Objectif : stimuler la consommation et l'investissement\n→ Risque : creuser le déficit\n\n🟢 POLITIQUE D'OFFRE\n→ Baisser les charges des entreprises (allègements cotisations)\n→ Favoriser l'innovation (crédit impôt recherche)\n→ Objectif : améliorer la compétitivité et l'attractivité\n→ Risque : effets différés, peut élargir les inégalités\n\n💡 Souvent on combine les deux dans un même plan.",
    ex:"Plan de relance français post-Covid (100 Md€ en 2020) : relance par la demande (chèques aux ménages) ET par l'offre (baisse des impôts de production).",
    conf:"⚠️ Question récurrente d'argumentation : 'La politique budgétaire est-elle efficace en temps de crise ?' (2023 CE) ou 'L'intervention de l'État permet-elle de stimuler la croissance ?' (2025 ME). Ne PAS confondre politique BUDGÉTAIRE (État, via le budget) et politique MONÉTAIRE (BCE, via les taux)."
  },

  "pol-monetaire": {
    tag:"T6 — État dans l'économie", titre:"Politique monétaire (BCE)", freq:"★★★☆☆ Régulière",
    def:"Action de la Banque Centrale Européenne (BCE) sur la masse monétaire, principalement via les taux directeurs. Objectif officiel : stabilité des prix (inflation ~2 %).",
    form:"📋 INSTRUMENTS :\n→ Taux directeurs (principal levier)\n→ Opérations open market (achats/ventes de titres)\n→ Réserves obligatoires des banques commerciales\n\n🔵 TAUX DIRECTEURS BAS\n→ Crédit moins cher\n→ Entreprises et ménages empruntent plus\n→ Relance de l'investissement et de la consommation\n→ Mais risque inflationniste\n\n🔴 TAUX DIRECTEURS ÉLEVÉS\n→ Crédit cher\n→ Frein à l'emprunt → ralentit la consommation et l'investissement\n→ Lutte contre l'inflation\n→ Mais risque de récession",
    ex:"En 2022-2023, la BCE a remonté ses taux directeurs de 0 % à 4,5 % pour lutter contre l'inflation post-Covid et post-guerre en Ukraine.",
    conf:"⚠️ La BCE est INDÉPENDANTE des États (article 130 du Traité). Donc la politique monétaire ÉCHAPPE au gouvernement français — un point souvent oublié dans les copies. Ne pas dire 'l'État décide des taux directeurs' : c'est la BCE."
  },

  "redistribution": {
    tag:"T6 — État dans l'économie", titre:"Redistribution", freq:"★★★☆☆ Régulière",
    def:"Transferts opérés par l'État pour réduire les inégalités de revenus et protéger les ménages contre les risques de la vie.",
    form:"📋 DEUX FORMES :\n\n🟢 REDISTRIBUTION HORIZONTALE\n→ Protège contre les RISQUES (maladie, chômage, vieillesse)\n→ Tout le monde cotise, tout le monde peut en bénéficier\n→ Ex : assurance maladie, retraite, chômage\n\n🔵 REDISTRIBUTION VERTICALE\n→ Réduit les ÉCARTS de revenus\n→ Des plus aisés vers les moins aisés\n→ Ex : impôt progressif sur le revenu, RSA, APL\n\n📊 COEFFICIENT DE GINI : indicateur clé. En France ~0,29 après redistribution (contre 0,38 avant).",
    ex:"Un cadre paye plus d'impôts qu'un ouvrier (redistribution verticale). Un salarié malade est indemnisé par la Sécurité sociale (redistribution horizontale).",
    conf:"⚠️ Mobilisé dans les sujets sur les inégalités (2024 IN, 2025 PO). Question récurrente : 'Les politiques sociales sont-elles suffisantes pour lutter contre les inégalités ?' — argumenter dans les deux sens (efficacité réelle vs limites du système)."
  },

  "protection-sociale": {
    tag:"T6 — État dans l'économie", titre:"Protection sociale : assurance vs assistance", freq:"★★★☆☆ Régulière",
    def:"Deux logiques distinctes au cœur du modèle social français.\n• Logique d'ASSURANCE : on cotise, on touche en cas de pépin (modèle Bismarck)\n• Logique d'ASSISTANCE : on touche sous condition de ressources, sans cotiser (modèle Beveridge)",
    form:"🟦 LOGIQUE D'ASSURANCE\n→ Financée par les COTISATIONS SOCIALES (salariés + employeurs)\n→ Contributive : on touche parce qu'on a cotisé\n→ Ex : assurance chômage, assurance maladie, retraite, accidents du travail\n\n🟧 LOGIQUE D'ASSISTANCE\n→ Financée par l'IMPÔT (CSG, impôt sur le revenu…)\n→ Non contributive : on touche sans avoir cotisé\n→ Sous condition de ressources\n→ Ex : RSA, allocations familiales, APL, minimum vieillesse",
    ex:"Un cadre licencié touche les allocations chômage (logique d'assurance, car il a cotisé). Un jeune sans emploi touche le RSA (logique d'assistance, car il n'a pas cotisé).",
    conf:"⚠️ Tombé en 2024 Océan Indien ('Distinguez la logique d'assistance de la logique d'assurance'). Erreur classique : penser que la Sécu n'est QUE de l'assurance — la branche famille fonctionne en logique d'assistance."
  },

  "inflation": {
    tag:"T6 — État dans l'économie", titre:"Inflation", freq:"★★★★☆ Récurrente",
    def:"Hausse durable et générale du niveau des prix. Mesurée par l'indice des prix à la consommation (IPC) publié chaque mois par l'INSEE.",
    form:"📋 CAUSES POSSIBLES :\n→ Choc d'offre : matières premières plus chères (pétrole, blé)\n→ Choc de demande : consommation forte, plans de relance\n→ Spirale prix-salaires : les salaires suivent l'inflation, qui repart\n→ Inflation importée : monnaie qui se déprécie\n\n📋 EFFETS :\n→ Baisse du POUVOIR D'ACHAT des ménages\n→ Hausse du COÛT DU CRÉDIT (si la BCE relève les taux)\n→ Perte de COMPÉTITIVITÉ-PRIX (si on est plus cher que les voisins)\n→ Redistribution invisible : les CRÉANCIERS perdent (leur capital vaut moins), les DÉBITEURS gagnent (leur dette s'allège)",
    ex:"En 2022-2023, l'inflation en zone euro a dépassé 10 % à cause du choc énergétique lié à la guerre en Ukraine. La BCE a remonté ses taux directeurs pour la contenir.",
    conf:"⚠️ Tombé en 2024 Océan Indien (conséquences inégales sur ménages) et 2025 Métropole Remp. (mécanisme prix-revenu-pouvoir d'achat). L'inflation FRAPPE PLUS DURS les ménages modestes (qui consomment 100 % de leur revenu) que les ménages aisés (qui épargnent une partie)."
  },

  "pouvoir-achat": {
    tag:"T6 — État dans l'économie", titre:"Pouvoir d'achat", freq:"★★★★☆ Récurrente",
    def:"Quantité de biens et services qu'un ménage peut acheter avec son revenu disponible. C'est une mesure RÉELLE (corrigée de l'inflation), à distinguer du revenu NOMINAL.",
    form:"📐 FORMULE :\n→ Pouvoir d'achat = Revenu disponible / Niveau des prix\n→ Variation = Variation revenu − Variation prix\n\n📊 CAS TYPES :\n→ Revenu +2 %, inflation +5 % → pouvoir d'achat −3 % (perte)\n→ Revenu +5 %, inflation +2 % → pouvoir d'achat +3 % (gain)\n→ Revenu stable, inflation à 0 % → pouvoir d'achat stable\n\n📋 LEVIERS DE L'ÉTAT :\n→ Indexation des minima sociaux sur l'inflation\n→ Bouclier tarifaire (énergie 2022-2023)\n→ Aides exceptionnelles (chèque énergie, prime inflation)\n→ Baisse de la TVA sur certains produits",
    ex:"2025 Métropole Remp. : 'L'intervention de l'État en faveur du pouvoir d'achat des ménages permet-elle de stimuler la croissance économique ?' — question d'argumentation centrale.",
    conf:"⚠️ Ne pas confondre **revenu** (combien on gagne) et **pouvoir d'achat** (ce qu'on peut acheter). Une hausse de salaire ne se traduit pas mécaniquement en hausse de pouvoir d'achat : tout dépend de l'évolution des prix."
  },

  "revenu-disponible": {
    tag:"T6 — État dans l'économie", titre:"Revenu disponible brut (RDB)", freq:"★★★☆☆ Régulière",
    def:"Revenu dont disposent effectivement les ménages après opérations de redistribution. C'est ce qu'on peut concrètement dépenser ou épargner.",
    form:"📐 FORMULE :\nRDB = Revenus primaires − Prélèvements obligatoires + Prestations sociales\n\nDécomposition :\n→ Revenus primaires : salaires + revenus du patrimoine + revenus mixtes (indépendants)\n→ − Prélèvements : IR, CSG, cotisations sociales salariales\n→ + Prestations : allocations familiales, APL, RSA, retraite, chômage\n\nUSAGES du RDB :\n→ Consommation finale des ménages (~85 % du RDB)\n→ Épargne (~15 %, à comparer aux pays voisins)",
    ex:"Un salaire brut de 3 000 € devient ~2 350 € net (cotisations retirées). Si le ménage reçoit 200 € d'APL, son RDB est de 2 550 €. Avec ce RDB, il peut consommer ou épargner.",
    conf:"⚠️ Tombé en 2025 Métropole Remp. (commentaire de l'évolution du RDB et du pouvoir d'achat depuis 2015). Lien direct avec POUVOIR D'ACHAT : le RDB est le NUMÉRATEUR de la formule du pouvoir d'achat."
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THÈME 7 — Quelle est l'influence de l'État sur l'emploi et le chômage ?
  // ═══════════════════════════════════════════════════════════════════════

  "marche-travail": {
    tag:"T7 — Emploi & chômage", titre:"Le marché du travail", freq:"★★★☆☆ Régulière",
    def:"Lieu (abstrait) où se confrontent l'offre de travail (les salariés qui proposent leur force de travail) et la demande de travail (les employeurs qui cherchent à embaucher). Le prix est le salaire.",
    form:"📋 OFFRE vs DEMANDE DE TRAVAIL :\n\n🟢 OFFRE de travail\n= ceux qui PROPOSENT leur travail\n= les SALARIÉS et chômeurs (population active)\n\n🔵 DEMANDE de travail\n= ceux qui CHERCHENT à embaucher\n= les ENTREPRISES et autres employeurs\n\n💡 C'EST CONTRE-INTUITIF : sur le marché du travail, ce sont les salariés qui sont 'offreurs', pas les entreprises.\n\n⚖️ ÉQUILIBRE : si offre > demande → chômage. Si demande > offre → tensions sur les recrutements, hausse des salaires.",
    ex:"En 2024, certains secteurs (BTP, restauration, santé) connaissent des difficultés de recrutement = demande de travail > offre dans ce segment. À l'inverse, secteur industriel en restructuration → chômage = offre > demande.",
    conf:"⚠️ Erreur classique du Bac : inverser offre et demande sur le marché du travail. Toujours se rappeler : on parle du POINT DE VUE des SALARIÉS (= offreurs). Tombé en 2024 ME Remp. (difficultés de recrutement)."
  },

  "population-active": {
    tag:"T7 — Emploi & chômage", titre:"Population active & taux de chômage", freq:"★★★★☆ Récurrente",
    def:"Ensemble des personnes de 15 ans et plus qui ont un emploi (actifs occupés) OU qui en cherchent un (chômeurs). Population active = actifs occupés + chômeurs.",
    form:"📐 LES 3 TAUX :\n→ Taux d'activité = (Population active / Population en âge de travailler) × 100\n→ Taux d'emploi = (Actifs occupés / Population en âge de travailler) × 100\n→ Taux de chômage = (Chômeurs / Population active) × 100\n\n📊 EXEMPLE DE CALCUL :\nPays X : 50 M de personnes en âge de travailler (15-64 ans).\n30 M sont actives (occupées + chômeurs).\nDont 3 M de chômeurs.\n→ Taux d'activité = 30/50 = 60 %\n→ Taux d'emploi = 27/50 = 54 %\n→ Taux de chômage = 3/30 = 10 %",
    ex:"En France (2024) : ~30 millions d'actifs, ~2,2 millions de chômeurs au sens BIT → taux de chômage ~7,4 %.",
    conf:"⚠️ Ne PAS calculer le taux de chômage sur la population totale ou la population en âge de travailler — toujours sur la POPULATION ACTIVE. Tombé en 2025 NC et 2025 PO (commentaire de l'évolution du taux de chômage)."
  },

  "types-chomage": {
    tag:"T7 — Emploi & chômage", titre:"Les types de chômage", freq:"★★★☆☆ Régulière",
    def:"Le chômage n'est pas un phénomène homogène : selon ses causes, on distingue plusieurs types qui appellent des politiques différentes.",
    form:"📋 LES 4 TYPES :\n\n🔵 CONJONCTUREL\n→ Temporaire, lié au cycle économique\n→ Cause : ralentissement de la demande (récession)\n→ Réponse : politique de relance\n→ Ex : chômage post-Covid\n\n🟠 STRUCTUREL\n→ Durable, lié à des rigidités du marché\n→ Causes : inadéquation des qualifications, coût du travail, réglementations\n→ Réponse : formation, réformes du marché du travail\n→ Ex : ouvriers de la sidérurgie remplacés par des robots\n\n🟢 FRICTIONNEL\n→ Court (quelques mois), entre deux emplois\n→ Cause : temps de recherche normal\n→ Réponse : amélioration de l'information, France Travail\n→ Ex : un cadre qui change de poste\n\n🔴 TECHNOLOGIQUE\n→ Lié à la substitution du capital au travail\n→ Cause : automatisation, robotisation, IA\n→ Réponse : reconversion, formation continue\n→ Ex : caissières remplacées par caisses automatiques",
    ex:"La montée du chômage pendant le Covid = chômage conjoncturel. Le chômage des ouvriers non qualifiés remplacés par des robots = chômage structurel/technologique.",
    conf:"⚠️ Distinction REGULIÈREMENT demandée (2025 PO Q2 substitution facteurs/chômage). Ne pas confondre **conjoncturel** (problème temporaire) et **structurel** (problème de fond). Le chômage structurel justifie les politiques actives ; le conjoncturel, plutôt les politiques de relance."
  },

  "politiques-emploi": {
    tag:"T7 — Emploi & chômage", titre:"Politiques de l'emploi", freq:"★★★★☆ Récurrente",
    def:"Ensemble des mesures prises par l'État pour agir sur l'emploi et le chômage. Se divisent en politiques ACTIVES (agir sur le marché du travail) et politiques PASSIVES (amortir les conséquences du chômage).",
    form:"🟢 POLITIQUES ACTIVES (agir sur les CAUSES)\n→ Formation professionnelle (CPF, AFPA, reconversions)\n→ Aides à l'embauche (apprentissage, contrats aidés)\n→ Allègements de charges sociales\n→ Service public de l'emploi (France Travail)\n→ Politique de soutien à la création d'entreprise\n\n🔵 POLITIQUES PASSIVES (amortir les EFFETS)\n→ Allocations chômage (ARE)\n→ Préretraites\n→ Indemnisation du chômage partiel\n\n🎯 OBJECTIF : combiner les deux. Les pays qui ne font QUE du passif (forte indemnisation, peu de formation) ont un chômage qui dure ; ceux qui ne font QUE de l'actif sans filet social génèrent des inégalités.",
    ex:"France Travail (ex-Pôle emploi) verse des allocations (politique passive) et propose des formations + accompagne la recherche (politique active).",
    conf:"⚠️ Sujet récurrent (4 sujets sur 13 : 2024 ME Remp., 2025 PO Remp., 2025 PO, 2025 NC). Question d'argumentation type : 'L'intervention de l'État permet-elle de soutenir l'emploi ?' ou 'Les politiques d'emploi luttent-elles efficacement contre le chômage ?'."
  },

  "politique-active-passive": {
    tag:"T7 — Emploi & chômage", titre:"Distinction politique active vs passive", freq:"★★★★☆ Récurrente",
    def:"Distinction structurante des politiques de l'emploi.\n• ACTIVE = agir sur le fonctionnement du marché du travail (causes)\n• PASSIVE = atténuer les conséquences du chômage sur les personnes (effets)",
    form:"🟢 POLITIQUE ACTIVE\n→ Logique : agir EN AMONT\n→ Outils : formation, aides à l'embauche, allègements charges, contrats aidés\n→ Bénéficiaire : l'EMPLOYABILITÉ\n→ Coût : investissement (rentabilité différée)\n\n🔵 POLITIQUE PASSIVE\n→ Logique : agir EN AVAL\n→ Outils : allocations chômage, préretraites, chômage partiel\n→ Bénéficiaire : le REVENU du chômeur\n→ Coût : dépense courante\n\n⚖️ MIX SUÉDOIS (flexisécurité) : combinaison équilibrée — politique active forte + politique passive généreuse + flexibilité de l'emploi.",
    ex:"2025 Polynésie Remp. : 'Distinguez politiques active et passive de l'emploi' — question directe sur cette distinction. 2025 Polynésie : 'L'intervention de l'État en matière de chômage relève de politiques active et passive'.",
    conf:"⚠️ ASTUCE pour le Bac : si un dispositif tire vers la FORMATION ou l'INCITATION À EMBAUCHER → ACTIVE. Si c'est une INDEMNISATION → PASSIVE. Le contrat d'apprentissage = active. L'allocation chômage = passive."
  },

  "offre-travail": {
    tag:"T7 — Emploi & chômage", titre:"Offre de travail & freins à l'emploi", freq:"★★★☆☆ Régulière",
    def:"L'offre de travail désigne l'ensemble des personnes (salariés en poste, chômeurs, inactifs prêts à reprendre) prêtes à travailler. Les freins à l'emploi sont les obstacles qui empêchent les offreurs de retrouver un emploi.",
    form:"📋 LES 3 FAMILLES DE FREINS :\n\n👤 FREINS INDIVIDUELS\n→ Manque de qualification\n→ Problèmes de santé, handicap\n→ Garde d'enfants, contraintes familiales\n→ Mobilité géographique limitée\n\n🏭 FREINS STRUCTURELS\n→ Inadéquation compétences offertes vs besoins entreprises\n→ Discriminations à l'embauche (âge, origine, genre)\n→ Bassins d'emploi sinistrés\n\n⚖️ FREINS INSTITUTIONNELS\n→ Coût du travail élevé\n→ Rigidités du marché (CDI difficiles à rompre)\n→ Trappes à inactivité (perte d'aides si on reprend un emploi)",
    ex:"Une mère célibataire qui ne trouve pas de mode de garde pour son enfant est freinée dans sa recherche d'emploi (frein individuel). Un ouvrier de la sidérurgie qui n'a pas les compétences pour devenir développeur informatique est freiné par l'inadéquation (frein structurel).",
    conf:"⚠️ Tombé en 2024 Métropole Remplacement ('Expliquez les freins à l'emploi pour les offreurs de travail'). Toujours classer les freins en 3 familles dans la copie : individuels / structurels / institutionnels."
  },

  "halo-chomage": {
    tag:"T7 — Emploi & chômage", titre:"Halo du chômage", freq:"★★★☆☆ Régulière",
    def:"Personnes inactives au sens du BIT (Bureau International du Travail) mais qui souhaitent travailler ou ont cherché un emploi récemment sans être disponibles immédiatement. Elles ne sont PAS comptées dans les chômeurs officiels mais sont au 'bord' du chômage.",
    form:"📋 QUI EST DANS LE HALO ?\n→ Personnes qui veulent travailler mais ont arrêté de chercher (chômeurs DÉCOURAGÉS)\n→ Personnes qui cherchent mais ne sont pas disponibles tout de suite\n→ Personnes en formation, en attente d'un projet\n\n📊 ORDRE DE GRANDEUR (France 2023) :\n→ Chômage officiel BIT : ~2,2 M\n→ Halo : ~1,8 M (presque autant !)\n→ Sous-emploi : ~1,5 M\n\n⚠️ CE QUE ÇA VEUT DIRE : le 'sous-emploi total' (chômage + halo + sous-emploi) est presque DOUBLE du chômage officiel.",
    ex:"Une personne qui aimerait travailler mais a arrêté de chercher activement, persuadée qu'elle ne trouvera rien = halo du chômage (chômeur découragé). Un parent au foyer qui souhaiterait reprendre une activité mais ne fait pas de démarches actives = halo.",
    conf:"⚠️ Tombé en 2025 Nouvelle-Calédonie ('Distinguez halo du chômage et sous-emploi'). Distinction CRUCIALE car elle révèle que le taux de chômage officiel sous-estime largement la réalité du non-emploi."
  },

  "sous-emploi": {
    tag:"T7 — Emploi & chômage", titre:"Sous-emploi", freq:"★★★☆☆ Régulière",
    def:"Situation des personnes qui ont un emploi mais qui voudraient travailler davantage. Le sous-emploi reflète une utilisation INCOMPLÈTE du facteur travail dans l'économie.",
    form:"📋 LES 2 COMPOSANTES :\n\n⏱️ TEMPS PARTIEL SUBI\n→ Personnes à temps partiel qui souhaitent travailler plus\n→ À distinguer du temps partiel CHOISI (étudiant, parent…)\n→ Concerne surtout les femmes et les jeunes\n\n⏸️ CHÔMAGE TECHNIQUE / PARTIEL\n→ Personnes momentanément sans activité dans leur entreprise\n→ Indemnisées (allocations d'activité partielle)\n→ Ex : 'chômage partiel' Covid",
    ex:"Une caissière à 20 h/semaine qui voudrait être à 35 h = sous-emploi (temps partiel subi). Les ouvriers de Renault au chômage partiel pendant la pénurie de semi-conducteurs en 2021 = sous-emploi (chômage technique).",
    conf:"⚠️ Tombé en 2025 Nouvelle-Calédonie. ATTENTION : une personne en sous-emploi a UN EMPLOI (≠ chômeur). Elle n'apparaît pas dans le taux de chômage officiel. C'est pourquoi le 'sous-emploi global' = chômage + halo + sous-emploi est un meilleur indicateur."
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THÈME 8 — Comment organiser le commerce international ?
  // ═══════════════════════════════════════════════════════════════════════

  "mondialisation": {
    tag:"T8 — Commerce international", titre:"Mondialisation", freq:"★★★★☆ Récurrente",
    def:"Processus d'ouverture des économies nationales sur un marché devenu planétaire. Se traduit par une augmentation des échanges de biens, services, capitaux, informations et personnes.",
    form:"📋 LES 4 DIMENSIONS :\n→ Commerciale : explosion des échanges de biens (CCI, OMC)\n→ Productive : FMN, DIPP, chaînes de valeur mondiales\n→ Financière : flux de capitaux, IDE, places financières\n→ Culturelle / informationnelle : circulation des modes, idées, données\n\n📊 INDICATEURS :\n→ Taux d'ouverture = (Exports + Imports) / 2 / PIB\n→ Part du commerce mondial dans le PIB mondial : ~30 %\n→ Stock d'IDE mondial : ~40 000 Md$\n\n⚠️ MAIS aussi : crises mondiales (2008, Covid), montée du protectionnisme, démondialisation partielle depuis 2018.",
    ex:"Un iPhone est conçu aux États-Unis, assemblé en Chine, avec des composants coréens et japonais, vendu mondialement : illustration parfaite de la mondialisation productive.",
    conf:"⚠️ Ne pas confondre **mondialisation** (processus FACTUEL, descriptif) et **libre-échange** (doctrine NORMATIVE, prescriptive). La mondialisation est ce qui SE PASSE ; le libre-échange est ce qu'on PRÔNE ou PAS."
  },

  "libre-echange": {
    tag:"T8 — Commerce international", titre:"Libre-échange", freq:"★★★★★ Constante",
    def:"Politique commerciale favorisant la libre circulation des biens et services entre pays, par la suppression des barrières aux échanges (droits de douane, quotas, normes restrictives).",
    form:"📋 ARGUMENTS POUR (théorie classique) :\n→ Baisse des prix (concurrence accrue)\n→ Plus de choix pour les consommateurs\n→ SPÉCIALISATION selon les avantages comparatifs (Ricardo)\n→ Économies d'échelle (marchés plus grands)\n→ Diffusion des innovations\n\n📋 ARGUMENTS CONTRE :\n→ Concurrence déloyale (dumping social, fiscal, environnemental)\n→ Désindustrialisation, fermeture d'usines\n→ Dépendance stratégique (médicaments, semi-conducteurs)\n→ Externalités environnementales (transport, émissions)\n→ Hausse des inégalités dans les pays riches\n\n🌍 INSTITUTIONS :\n→ OMC (multilatéral)\n→ Accords bilatéraux (CETA, JEFTA, Mercosur)\n→ Zones de libre-échange (UE, ALENA, ASEAN)",
    ex:"Le marché unique européen : 27 pays où les marchandises circulent sans droits de douane. 2025 Métropole (ArchiDij974) : 'Le libre-échange favorise-t-il la croissance économique ?'",
    conf:"⚠️ LE sujet d'argumentation par excellence. Toujours équilibrer dans la copie : libre-échange = source de croissance (théorie) MAIS générateur de tensions sociales et environnementales (réalité). Conclure sur le débat actuel (Trump, démondialisation)."
  },

  "protectionnisme": {
    tag:"T8 — Commerce international", titre:"Protectionnisme", freq:"★★★★☆ Récurrente",
    def:"Politique visant à limiter les importations pour protéger la production nationale. C'est la doctrine OPPOSÉE au libre-échange.",
    form:"📋 LES OUTILS :\n\n🚧 BARRIÈRES TARIFAIRES\n→ Droits de douane (taxes sur les importations)\n\n🚷 BARRIÈRES NON TARIFAIRES\n→ Quotas (limite quantitative)\n→ Normes techniques, sanitaires, environnementales\n→ Subventions aux entreprises nationales\n→ Marchés publics réservés aux producteurs locaux\n\n📋 ARGUMENTS POUR :\n→ Protection de l'EMPLOI national\n→ Protection des industries NAISSANTES (théorie de List)\n→ Souveraineté économique (médicaments, défense)\n→ Réciprocité face aux pays qui pratiquent le dumping\n\n📋 ARGUMENTS CONTRE :\n→ Hausse des prix pour les consommateurs\n→ Représailles → guerre commerciale\n→ Frein à l'innovation (pas de concurrence)\n→ Spirale protectionniste (1930)",
    ex:"Les droits de douane Trump 2025 sur l'UE (10-20 %), sur la Chine (60 %) = vague protectionniste majeure. Réponse possible de l'UE : droits de rétorsion.",
    conf:"⚠️ Toujours en OPPOSITION avec le libre-échange dans les sujets d'argumentation. Astuce : pour répondre à 'Le libre-échange favorise-t-il la croissance ?', l'argument 'contre' c'est PRÉCISÉMENT le protectionnisme."
  },

  "droits-douane": {
    tag:"T8 — Commerce international", titre:"Droits de douane", freq:"★★★☆☆ Régulière",
    def:"Taxes prélevées par un État sur les marchandises importées. C'est l'instrument tarifaire PRINCIPAL du protectionnisme.",
    form:"📋 EFFETS DIRECTS :\n→ Renchérissent les produits importés\n→ Favorisent la production nationale (moins chère relativement)\n→ Génèrent des recettes pour l'État\n\n📋 EFFETS COLLATÉRAUX :\n→ Hausse des PRIX pour les consommateurs nationaux\n→ Risque de REPRÉSAILLES (droits réciproques)\n→ Inflation importée\n→ Hausse des coûts pour les entreprises qui importent leurs intrants\n\n📊 EXEMPLES HISTORIQUES :\n→ Smoot-Hawley Tariff Act (USA, 1930) → aggravé la Grande Dépression\n→ Tarifs Trump I (2018-2020) sur acier chinois → guerre commerciale\n→ Tarifs Trump II (2025) sur UE, Mexique, Canada → tensions actuelles",
    ex:"Les droits de douane américains de 25 % sur l'acier chinois en 2018 ont protégé US Steel mais renchéri les voitures américaines (qui utilisent cet acier). 2025 Métropole : 'Expliquez les conséquences de la hausse des droits de douane sur l'activité des entreprises'.",
    conf:"⚠️ Tombé en 2025 Métropole (ArchiDij974). Argument FONDAMENTAL pour le Bac : un droit de douane PROTÈGE les producteurs nationaux MAIS PÉNALISE les consommateurs nationaux (qui paient plus cher) ET les entreprises qui importent leurs intrants."
  },

  "ide": {
    tag:"T8 — Commerce international", titre:"IDE — Investissements Directs à l'Étranger", freq:"★★★☆☆ Régulière",
    def:"Investissements réalisés par une entreprise d'un pays dans un autre pays, dans le but d'acquérir un intérêt durable (≥ 10 % du capital). Les IDE traduisent la mondialisation de la production.",
    form:"📋 LES 3 FORMES :\n→ Création de filiale ex nihilo (greenfield)\n→ Rachat d'entreprise étrangère (M&A)\n→ Joint-venture avec un partenaire local\n\n📋 SENS :\n→ IDE ENTRANTS : depuis l'étranger vers la France\n→ IDE SORTANTS : depuis la France vers l'étranger\n\n📊 EFFETS sur le pays d'ACCUEIL :\n→ ➕ Apport de capitaux, emplois, technologie, formation\n→ ➖ Dépendance, possible exfiltration des profits, déstabilisation\n\n📊 EFFETS sur le pays d'ORIGINE :\n→ ➕ Conquête de marchés, économies d'échelle\n→ ➖ Risque de délocalisation, perte d'emplois",
    ex:"Toyota qui ouvre une usine à Valenciennes = IDE entrant pour la France. L'Oréal qui rachète une marque cosmétique aux USA = IDE sortant pour la France.",
    conf:"⚠️ Tombé en 2023 Centres Étrangers (sujet entier FMN/IDE). Ne pas confondre **IDE** (flux ou stock d'INVESTISSEMENT, $ ou €) et **FMN** (l'ENTREPRISE qui réalise cet investissement). Les IDE sont l'OUTIL, les FMN sont l'ACTEUR."
  },

  "fmn": {
    tag:"T8 — Commerce international", titre:"FMN — Firmes Multinationales", freq:"★★★☆☆ Régulière",
    def:"Entreprises qui possèdent au moins une filiale à l'étranger et organisent leur production à l'échelle internationale. Acteurs centraux de la mondialisation productive.",
    form:"📋 LES STRATÉGIES :\n\n🌐 DIPP (Division Internationale du Processus Productif)\n→ Chaque étape réalisée dans le pays le plus compétitif\n→ Ex : Apple = conception USA + assemblage Chine + ventes monde\n\n🔁 STRATÉGIE HORIZONTALE\n→ Duplication de l'activité dans plusieurs pays\n→ Pour servir les marchés locaux\n→ Ex : Coca-Cola produit partout pour vendre partout\n\n↕️ STRATÉGIE VERTICALE\n→ Segmentation de la chaîne de valeur\n→ R&D ici, production là, marketing ailleurs\n→ Ex : Nike → design USA, fabrication Vietnam, distribution monde\n\n📊 POIDS DES FMN :\n→ ~80 000 FMN dans le monde\n→ Contrôlent ~2/3 du commerce mondial\n→ Réalisent ~75 % des IDE",
    ex:"Apple conçoit aux USA, assemble en Chine via Foxconn, et vend partout. 2023 Centres Étrangers : 'Présentez le lien entre firmes multinationales (FMN) et investissements directs à l'étranger (IDE)'.",
    conf:"⚠️ Lien étroit avec IDE : une FMN se développe à l'étranger PAR des IDE. Question d'argumentation 2023 CE : 'L'implantation de firmes multinationales est-elle toujours favorable pour l'économie d'un pays ?' — équilibrer effets positifs (emploi, technologie) et négatifs (dépendance, exfiltration des profits)."
  },

  "omc": {
    tag:"T8 — Commerce international", titre:"OMC — Organisation Mondiale du Commerce", freq:"★★☆☆☆ Faible",
    def:"Organisation créée en 1995 (succède au GATT de 1947) qui régule le commerce international. Comprend 164 États membres. Siège à Genève.",
    form:"📋 LES 3 PRINCIPES :\n→ NON-DISCRIMINATION : clause de la nation la plus favorisée (NPF)\n→ RÉCIPROCITÉ : un avantage accordé doit être réciproque\n→ TRANSPARENCE : règles publiques, prévisibles\n\n📋 LES MISSIONS :\n→ Encadrer les négociations commerciales multilatérales\n→ Régler les différends entre États (Organe de Règlement des Différends, ORD)\n→ Aider les pays en développement\n\n⚠️ LIMITES ACTUELLES :\n→ Échec du cycle de Doha (2001-)\n→ Blocage de l'ORD par les USA (depuis 2019)\n→ Montée du bilatéralisme et du protectionnisme\n→ Difficulté à intégrer Chine, services, environnement",
    ex:"Quand l'UE pose des droits anti-dumping sur l'acier chinois, la Chine peut saisir l'ORD de l'OMC pour contester. Quand Trump impose ses tarifs, plusieurs pays portent plainte à l'OMC.",
    conf:"⚠️ Notion utile pour argumenter LIBRE-ÉCHANGE vs PROTECTIONNISME : l'OMC est l'institution emblématique du libre-échange multilatéral. Sa crise actuelle illustre la montée du bilatéralisme et du protectionnisme."
  },

  "balance-commerciale": {
    tag:"T8 — Commerce international", titre:"Balance commerciale", freq:"★★★☆☆ Régulière",
    def:"Différence entre la valeur des EXPORTATIONS et celle des IMPORTATIONS d'un pays sur une période donnée (généralement un an).",
    form:"📐 FORMULE :\nBalance commerciale = Exportations − Importations\n\n📊 LES 3 CAS :\n→ EXCÉDENT (X > M) : le pays vend plus qu'il n'achète à l'étranger\n→ DÉFICIT (X < M) : le pays achète plus qu'il ne vend\n→ ÉQUILIBRE (X = M) : rare\n\n📋 LIEN AVEC LE PIB :\nPIB = C + I + G + (X − M)\n→ Un solde commercial positif tire la croissance\n→ Un solde négatif la freine\n\n💡 NUANCE : un déficit n'est pas TOUJOURS un mauvais signe — il peut refléter une économie dynamique qui consomme et investit (USA).",
    ex:"L'Allemagne a une balance commerciale fortement excédentaire (forte exportation industrielle). La France a souvent une balance déficitaire (importations énergétiques, de biens manufacturés). 2025 Métropole : 'Comparez les contributions de la consommation et du commerce extérieur dans la formation du PIB de la France'.",
    conf:"⚠️ Ne pas confondre **balance commerciale** (biens, parfois biens + services) et **balance des paiements** (TOUTES les transactions : biens, services, capitaux, transferts). Une économie peut avoir balance commerciale déficitaire MAIS balance des paiements équilibrée grâce aux IDE entrants."
  },

  "facteurs-production": {
    tag:"T8 — Commerce international", titre:"Facteurs de production & substitution", freq:"★★★☆☆ Régulière",
    def:"Les deux ressources combinées par les entreprises pour produire :\n• TRAVAIL (T) : la main-d'œuvre\n• CAPITAL (K) : machines, équipements, locaux",
    form:"⚙️ COMBINAISON DES FACTEURS\n→ Chaque entreprise choisit une PROPORTION T/K\n→ Dépend du coût relatif des facteurs, de la technique, des politiques publiques\n→ Ex : industrie capitalistique (auto) vs services intensifs en travail (restauration)\n\n🔄 SUBSTITUTION DES FACTEURS\n→ Remplacement d'un facteur par l'autre\n→ Quand le capital devient relativement moins cher OU plus productif\n→ Les entreprises remplacent du travail par du capital\n→ Risque : CHÔMAGE TECHNOLOGIQUE\n\n📋 EXEMPLES DE SUBSTITUTION HISTORIQUES :\n→ Tracteur remplace cheval et ouvriers agricoles (XXe)\n→ Robots remplacent ouvriers industriels (depuis 1970)\n→ IA générative remplace certains métiers tertiaires (depuis 2023)",
    ex:"Les caisses automatiques dans les supermarchés remplacent les caissières = substitution K pour T. L'IA générative qui remplace certaines tâches de rédaction = même logique. 2023 CE : 'L'actuelle combinaison des facteurs de production en France contribue à l'attractivité du pays'.",
    conf:"⚠️ Tombé en 2023 CE (combinaison/attractivité) et 2025 Polynésie (substitution comme source de chômage). Penser à mobiliser cette notion pour parler de COMPÉTITIVITÉ, d'ATTRACTIVITÉ et de CHÔMAGE STRUCTUREL."
  },

  "competitivite": {
    tag:"T8 — Commerce international", titre:"Compétitivité & attractivité du territoire", freq:"★★★★☆ Récurrente",
    def:"Capacité d'une entreprise ou d'un territoire à se maintenir ou gagner des parts de marché. Deux dimensions complémentaires.",
    form:"💰 COMPÉTITIVITÉ-PRIX\n→ Produire moins cher que les concurrents\n→ Leviers : baisse des coûts (salaires, charges, énergie), taux de change favorable, productivité\n→ Stratégie classique des pays émergents\n\n💎 COMPÉTITIVITÉ HORS-PRIX\n→ Se différencier par la QUALITÉ\n→ Leviers : innovation, design, marque, service après-vente, fiabilité\n→ Stratégie des pays développés (Allemagne, Suisse, Japon)\n\n🌍 ATTRACTIVITÉ DU TERRITOIRE\n= capacité d'un pays à attirer les IDE et les talents\n→ Fiscalité (baisse de l'IS, niches)\n→ Infrastructures (ports, routes, fibres)\n→ Main-d'œuvre qualifiée (formation, universités)\n→ Stabilité juridique et politique\n→ Taille du marché intérieur",
    ex:"L'Allemagne attire grâce à sa main-d'œuvre industrielle et la qualité de ses produits (hors-prix). La Chine grâce à ses coûts (prix). La France grâce à ses infrastructures et la formation. SARL Camélia 2024 ME : 'La baisse des prélèvements obligatoires peut être source de compétitivité des entreprises et d'attractivité du territoire'.",
    conf:"⚠️ La compétitivité-PRIX et hors-PRIX ne sont pas exclusives : on peut viser les deux. Mais une économie qui mise SEULEMENT sur la baisse des coûts (course au moins-disant) est vulnérable. Argument fort : la France et l'Allemagne misent SURTOUT sur le hors-prix."
  },

  // ═══════════════════════════════════════════════════════════════════════
  // THÈME 9 — Croissance économique & développement durable
  // (Écrit depuis 2024 + Grand Oral — première occurrence à l'écrit : 2025 Métropole)
  // ═══════════════════════════════════════════════════════════════════════

  "croissance": {
    tag:"T9 — Croissance soutenable", titre:"Croissance économique", freq:"★★★★★ Transversale",
    def:"Augmentation durable de la production de biens et services dans une économie, mesurée par le PIB (Produit Intérieur Brut).",
    form:"📐 FORMULE :\nTaux de croissance = ((PIB_t − PIB_(t-1)) / PIB_(t-1)) × 100\n\n📋 CAS TYPES :\n→ Croissance forte : +3 % et plus (pays émergents)\n→ Croissance molle : 0,5 à 2 % (Europe depuis 2010)\n→ Récession : 2 trimestres consécutifs de croissance négative\n\n📋 SOURCES DE LA CROISSANCE :\n→ FACTEURS DE PRODUCTION (T + K)\n→ PRODUCTIVITÉ (innovation, organisation)\n→ DEMANDE (consommation, investissement, exportations)\n\n⚠️ LIMITES DU PIB COMME MESURE :\n→ Ne mesure pas les inégalités\n→ Ne mesure pas le bien-être\n→ Ne mesure pas l'économie informelle\n→ Ne mesure pas les dégâts environnementaux",
    ex:"PIB de la France ~2 800 Md€ en 2023. Une croissance de 1 % signifie 28 Md€ de production supplémentaire.",
    conf:"⚠️ Le PIB et la croissance sont des notions TRANSVERSALES mobilisées dans presque tous les sujets. Souvent en intro ou en conclusion : 'le PIB est un indicateur incomplet, mais c'est le langage commun des comparaisons internationales'."
  },

  "developpement-durable": {
    tag:"T9 — Croissance soutenable", titre:"Développement durable", freq:"★★★☆☆ Récurrent",
    def:"Développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs (rapport Brundtland, ONU, 1987).",
    form:"📋 LES 3 PILIERS :\n\n💰 ÉCONOMIQUE\n→ Production rentable et viable à long terme\n→ Innovation, économie circulaire\n\n🤝 SOCIAL\n→ Réduction des inégalités, accès aux services essentiels\n→ Conditions de travail décentes\n\n🌍 ENVIRONNEMENTAL\n→ Préservation des ressources naturelles\n→ Réduction de la pollution et des émissions\n→ Biodiversité\n\n⚖️ LE DD vise l'ÉQUILIBRE entre ces 3 piliers — ce qui est souvent l'objet d'ARBITRAGES (créer des emplois locaux peut coûter cher écologiquement, etc.).",
    ex:"Une entreprise qui réduit ses emballages (pilier environnemental) tout en créant des emplois locaux (pilier social) et en restant rentable (pilier économique).",
    conf:"⚠️ Notion centrale du THÈME 9. Désormais à l'écrit ET à l'oral depuis le déplacement de l'épreuve à juin (session 2024+). Tombé en 2025 IN (fiscalité environnementale) et 2025 Métropole (sous-thème 9.1 sources d'une croissance soutenable)."
  },

  "soutenabilite": {
    tag:"T9 — Croissance soutenable", titre:"Soutenabilité faible vs forte", freq:"★★☆☆☆ Faible",
    def:"Deux conceptions opposées de la compatibilité entre croissance économique et préservation de l'environnement.",
    form:"🟦 SOUTENABILITÉ FAIBLE (économistes orthodoxes)\n→ Le CAPITAL NATUREL peut être REMPLACÉ par du capital produit\n→ Si on détruit une forêt, on peut compenser par de la technologie (puits de carbone artificiels)\n→ La croissance reste possible avec progrès technique\n\n🟩 SOUTENABILITÉ FORTE (économistes écologistes)\n→ Le capital naturel est IRREMPLAÇABLE\n→ Certaines ressources détruites ne se recréent pas (biodiversité, climat stable)\n→ La croissance doit être encadrée, voire décroissance dans certains domaines\n\n💡 La position dépend de la PHILOSOPHIE : confiance dans le progrès technique vs principe de précaution.",
    ex:"Soutenabilité faible : la voiture électrique remplacera la voiture thermique, donc on peut continuer à conduire autant. Soutenabilité forte : on doit réduire l'usage de la voiture, l'électrique ne résout pas tout (lithium, électricité, particules de pneus).",
    conf:"⚠️ Notion subtile : enrichit toute argumentation sur l'environnement. Mobilisable à l'écrit (depuis 2024) comme au Grand Oral. Permet de prendre du recul sur le débat 'croissance verte vs décroissance'."
  },

  "externalites-env": {
    tag:"T9 — Croissance soutenable", titre:"Externalités négatives environnementales", freq:"★★★☆☆ Régulière",
    def:"Dommages causés à l'environnement par l'activité économique SANS que le pollueur en paye le coût social. Application directe de la notion d'externalité (T6) au champ environnemental.",
    form:"📋 EXEMPLES TYPIQUES :\n→ Pollution de l'air (CO2, particules fines)\n→ Pollution de l'eau (pesticides, hydrocarbures)\n→ Déforestation\n→ Épuisement des ressources non renouvelables\n→ Perte de biodiversité\n\n📋 LES OUTILS DE L'ÉTAT :\n→ FISCALITÉ écologique (taxe carbone, TGAP, malus auto)\n→ NORMES & RÉGLEMENTATIONS (interdictions, seuils)\n→ MARCHÉ DES DROITS À POLLUER (ETS européen)\n→ SUBVENTIONS aux énergies renouvelables\n→ R&D publique (Ademe)",
    ex:"Une usine qui rejette du CO2 dans l'atmosphère bénéficie d'une 'subvention implicite' = elle pollue gratuitement. La taxe carbone vise à faire payer cette externalité.",
    conf:"⚠️ Tombé en 2024 CE (externalités négatives sur l'environnement), 2025 CE (externalités du tourisme), 2025 IN (fiscalité environnementale). C'est la justification ÉCONOMIQUE de l'intervention de l'État sur l'environnement."
  },

  "fiscalite-eco": {
    tag:"T9 — Croissance soutenable", titre:"Fiscalité écologique", freq:"★★★☆☆ Régulière",
    def:"Ensemble des taxes et impôts visant à corriger les externalités négatives environnementales. Repose sur le principe du POLLUEUR-PAYEUR : celui qui pollue paie le coût social de la pollution.",
    form:"📋 INSTRUMENTS :\n\n💨 TAXE CARBONE\n→ Sur les émissions de CO2 (carburants, gaz, fioul)\n→ Internalise l'externalité climat\n\n🚗 BONUS-MALUS AUTOMOBILE\n→ Malus pour les véhicules polluants\n→ Bonus pour l'électrique\n\n♻️ TGAP (Taxe Générale sur les Activités Polluantes)\n→ Décharges, incinérateurs, lessives polluantes\n\n📈 QUOTAS D'ÉMISSION NÉGOCIABLES\n→ Marché européen du carbone (ETS, depuis 2005)\n→ Chaque entreprise reçoit ou achète un droit à polluer\n→ Mécanisme de marché qui incite à réduire les émissions\n\n🎯 EFFET ATTENDU : modifier le COMPORTEMENT des agents en rendant la pollution coûteuse.",
    ex:"La taxe carbone française renchérit le diesel pour pousser à l'électrique. À l'origine des Gilets jaunes en 2018 (question de l'ÉQUITÉ de la transition). 2025 IN : 'Montrez que la fiscalité environnementale modifie le comportement des agents économiques'.",
    conf:"⚠️ Toujours articuler avec EXTERNALITÉS NÉGATIVES (le problème) et POLLUEUR-PAYEUR (le principe). Argument critique : la fiscalité écologique peut être REGRESSIVE (pèse plus sur les ménages modestes) si elle n'est pas compensée par des aides ou des transferts ciblés."
  },

  "progres-technique": {
    tag:"T9 — Croissance soutenable", titre:"Progrès technique & innovation", freq:"★★★☆☆ Régulière",
    def:"Le progrès technique = ensemble des innovations qui améliorent la productivité des facteurs. L'innovation = application concrète d'une invention dans l'économie (produit, procédé, organisation, marketing). Source ENDOGÈNE de la croissance : la croissance finance la R&D, qui crée l'innovation, qui relance la croissance.",
    form:"📋 LES 4 TYPES D'INNOVATION (Schumpeter) :\n\n🛠️ INNOVATION DE PRODUIT\n→ Nouveau bien/service (iPhone 2007, ChatGPT 2022)\n\n⚙️ INNOVATION DE PROCÉDÉ\n→ Nouvelle façon de produire (gigafactory Tesla, fordisme historiquement)\n\n🏢 INNOVATION ORGANISATIONNELLE\n→ Nouvelle façon d'organiser le travail (Airbnb pair-à-pair, télétravail)\n\n📣 INNOVATION DE MARKETING\n→ Nouveau positionnement / mode de distribution (Netflix vs Blockbuster)\n\n💥 DESTRUCTION CRÉATRICE (Schumpeter)\n→ Le nouveau remplace l'ancien → croissance ET chômage technologique\n→ Ex : cochers remplacés par voitures, opératrices téléphoniques par standards automatiques.\n\n🏛️ RÔLE DE L'ÉTAT : Crédit Impôt Recherche (CIR), brevets, universités, France 2030.",
    ex:"L'iPhone (2007) = innovation de produit + organisationnelle (App Store). En France, le CIR finance ~30% des dépenses R&D des entreprises (~7 Md€/an). 2025 Métropole (sous-thème 9.1) a testé les sources de la croissance soutenable.",
    conf:"⚠️ Ne pas confondre INVENTION (idée, brevet) et INNOVATION (application économique de l'invention). Une invention dans un tiroir n'est pas une innovation."
  },

  "ess": {
    tag:"T9 — Croissance soutenable", titre:"Économie sociale et solidaire (ESS)", freq:"★★★☆☆ Régulière",
    def:"Ensemble d'organisations économiques dont la FINALITÉ est SOCIALE plutôt que la maximisation du profit. En France : associations, coopératives, mutuelles, fondations, entreprises sociales. Représente ~10 % du PIB et ~14 % de l'emploi privé.",
    form:"📋 LES 5 FAMILLES D'ESS :\n\n🤝 ASSOCIATIONS\n→ But non lucratif, financement par dons + subventions\n→ Ex : Emmaüs, Médecins du Monde, Restos du Cœur\n\n🏭 COOPÉRATIVES / SCOP\n→ Salariés = actionnaires (1 personne = 1 voix)\n→ Ex : la Camif, Acome, certains supermarchés (Coopérative U)\n\n🏥 MUTUELLES\n→ Cotisations des adhérents → couverture risques\n→ Ex : Macif, MAIF, Mutuelle Familiale\n\n💎 FONDATIONS\n→ Capital dédié à une cause (mécénat)\n→ Ex : Fondation de France, Fondation Abbé Pierre\n\n🚀 ENTREPRISES SOCIALES\n→ Forme commerciale classique MAIS impact social mesuré\n→ Ex : Phénix (anti-gaspi), Vitamine T (insertion)",
    ex:"La Camif (entreprise reprise en SCOP par ses salariés en 2009), les Restos du Cœur (association), la Macif (mutuelle d'assurance), Phénix (entreprise sociale anti-gaspi).",
    conf:"⚠️ Pas une ÉCONOMIE ALTERNATIVE marginale : 10 % du PIB et 14 % de l'emploi privé. Notion EXPLICITE du programme T9 sous-thème 9.1."
  },

  "economie-circulaire": {
    tag:"T9 — Croissance soutenable", titre:"Économie circulaire & collaborative", freq:"★★★☆☆ Régulière",
    def:"Deux modèles économiques qui visent à RÉDUIRE l'usage de ressources non renouvelables.\n• ÉCONOMIE CIRCULAIRE : rompt avec le linéaire 'extraire-fabriquer-jeter'. Valorise les déchets en nouvelles matières premières (3R : Réduire · Réutiliser · Recycler).\n• ÉCONOMIE COLLABORATIVE : mutualise les ressources entre individus, souvent via plateformes numériques. Moins de propriété, plus d'usage partagé.",
    form:"♻️ ÉCONOMIE CIRCULAIRE — 3R\n→ RÉDUIRE : éco-conception, sobriété, anti-gaspillage\n→ RÉUTILISER : seconde main, vente d'occasion, réparation\n→ RECYCLER : transformer les déchets en nouvelles matières\n\n📊 EXEMPLES PHARES :\n→ Bouteilles plastiques recyclées → polaire\n→ Patagonia (répare + revend la seconde main)\n→ Filière du verre : 100% circulaire en France\n\n🔗 ÉCONOMIE COLLABORATIVE — MUTUALISATION\n→ BlaBlaCar (trajets), Airbnb (logements), Vinted (vêtements)\n→ Plateformes pair-à-pair (peer-to-peer)\n\n⚠️ CRITIQUE : 'ubérisation' = collaboratif sans les obligations sociales (Uber, Deliveroo : statut auto-entrepreneur sans protection).",
    ex:"Vinted = collaboratif (mutualisation des vêtements) + circulaire (réutilisation). BlaBlaCar mutualise les trajets en voiture. La filière du verre est 100% circulaire en France.",
    conf:"⚠️ Ne pas confondre les deux modèles. CIRCULAIRE = transformer les déchets en ressources. COLLABORATIVE = mutualiser l'usage des ressources. Tombent souvent ensemble dans les sujets sur la transition écologique."
  },

  "pauvrete": {
    tag:"T9 — Croissance soutenable", titre:"Pauvreté absolue vs relative", freq:"★★☆☆☆ Faible",
    def:"Deux mesures complémentaires de la pauvreté (sous-thème 9.2).\n• PAUVRETÉ ABSOLUE : ne pas avoir accès aux biens essentiels (nourriture, eau, logement). Mesurée par un seuil universel (1,90 $/jour selon la Banque mondiale).\n• PAUVRETÉ RELATIVE : vivre avec un revenu nettement inférieur au revenu médian du pays. En France : seuil = 60 % du revenu médian (~1 200 €/mois).",
    form:"📊 DEUX TENDANCES OPPOSÉES :\n\n📉 PAUVRETÉ ABSOLUE — recul historique mondial\n→ 1990 : ~36 % de la population mondiale\n→ 2024 : ~8 % (effet de la croissance des pays émergents : Chine, Inde, Asie du SE)\n→ ODD 1 ONU : éradiquer l'extrême pauvreté d'ici 2030\n\n📈 PAUVRETÉ RELATIVE — stable ou en hausse dans les pays riches\n→ France 2024 : ~14 % sous le seuil de pauvreté relative\n→ Effet de la hausse des inégalités, même dans des sociétés enrichies\n\n🎯 RÔLE DE L'ÉDUCATION & DE LA FORMATION\n→ Premier moteur de la sortie de pauvreté\n→ ODD 4 : éducation de qualité pour tous",
    ex:"En 1990, ~2 milliards de personnes vivaient avec moins de 1,90 $/jour (pauvreté absolue). En 2024 : ~700 millions. En France, le seuil de pauvreté relative à 60 % du médian = ~1 200 €/mois pour une personne seule.",
    conf:"⚠️ Sous-thème 9.2 du programme officiel. Ne pas confondre les deux mesures : la pauvreté ABSOLUE recule dans le monde, mais la pauvreté RELATIVE peut augmenter dans les pays riches (inégalités croissantes)."
  },


  // ═══════════════════════════════════════════════════════════════════════
  // RAPPELS DE PREMIÈRE (prérequis mobilisés au Bac)
  // ═══════════════════════════════════════════════════════════════════════

  "agents-eco": {
    tag:"Rappels Première", titre:"Agents économiques", freq:"★★★☆☆ Régulière",
    def:"Acteurs distincts qui réalisent les opérations économiques. La comptabilité nationale identifie 5 grandes catégories (secteurs institutionnels).",
    form:"📋 LES 5 AGENTS :\n\n🏠 MÉNAGES\n→ Fonction : consommer, épargner, OFFRIR du travail\n→ Ressources : salaires, prestations, revenus du patrimoine\n\n🏭 ENTREPRISES (sociétés non financières)\n→ Fonction : produire des biens et services marchands\n→ Ressources : ventes, emprunts, IDE\n\n🏛️ ADMINISTRATIONS PUBLIQUES (APU)\n→ Fonction : services publics, redistribution\n→ Ressources : prélèvements obligatoires\n\n🏦 BANQUES (institutions financières)\n→ Fonction : financement, création monétaire\n→ Ressources : dépôts, marges sur crédits\n\n🌐 RESTE DU MONDE (RDM)\n→ Fonction : échanges internationaux (commerce, IDE)\n→ Apparaît dans le PIB via le solde extérieur",
    ex:"2025 Océan Indien Q1 : 'Rappelez la fonction principale des agents économiques : ménages et entreprises.' — question DIRECTE de rappel de 1ère.",
    conf:"⚠️ Notion BASIQUE mais souvent mobilisée en question 1 pour 'planter le décor'. Maîtriser la fonction PRINCIPALE de chaque agent permet de poser un raisonnement clair (ex : l'État, c'est les APU)."
  },

  "pib": {
    tag:"Rappels Première", titre:"PIB & contributions à la croissance", freq:"★★★★☆ Récurrente",
    def:"Produit Intérieur Brut = somme des valeurs ajoutées produites par les unités résidentes en un an. Mesure la richesse créée sur le territoire national.",
    form:"📐 3 APPROCHES POUR CALCULER LE PIB :\n→ Production : ΣVA + impôts sur produits − subventions\n→ Demande : Consommation + Investissement (FBCF) + Variation stocks + (Exports − Imports)\n→ Revenus : salaires + EBE + impôts\n\n📊 CONTRIBUTIONS À LA CROISSANCE (équation comptable) :\nΔ PIB = Δ Consommation + Δ Investissement + Δ Solde extérieur + Δ Stocks\n\n→ Chaque composante peut TIRER ou FREINER la croissance\n→ Une contribution NÉGATIVE n'est PAS une chute du composant, c'est sa contribution à la variation totale\n\n⚠️ LIMITES DU PIB :\n→ Ne mesure pas le bien-être\n→ Ne mesure pas les inégalités\n→ Ne mesure pas l'économie domestique (travail des parents au foyer)\n→ Ne mesure pas les dégâts environnementaux\n→ Indicateurs alternatifs : IDH, empreinte carbone, BIB",
    ex:"En 2023, croissance France à 0,9 %. Consommation contribue à +0,6 pt, investissement à +0,1 pt, solde extérieur à +0,6 pt, stocks à −0,4 pt → total 0,9 %. 2025 Métropole (ArchiDij974) : 'Comparez les contributions de la consommation et du commerce extérieur dans la formation du PIB'.",
    conf:"⚠️ Au Bac, on demande souvent de COMMENTER un tableau de contributions. Méthode : 1) identifier la composante qui tire (positif fort), 2) celle qui freine (négatif), 3) raconter une histoire économique cohérente. Ne PAS confondre 'la consommation BAISSE' et 'la consommation CONTRIBUE NÉGATIVEMENT'."
  },

  "marche": {
    tag:"Rappels Première", titre:"Marché (offre, demande, prix d'équilibre)", freq:"★★★☆☆ Régulière",
    def:"Lieu (réel ou virtuel) où se confrontent une offre et une demande pour déterminer un prix.",
    form:"📋 LES 3 ÉLÉMENTS :\n\n🟢 OFFRE\n→ Quantité que les producteurs sont prêts à vendre à un prix donné\n→ AUGMENTE quand le prix monte (loi de l'offre)\n→ Courbe croissante\n\n🔴 DEMANDE\n→ Quantité que les consommateurs souhaitent acheter à un prix donné\n→ DIMINUE quand le prix monte (loi de la demande)\n→ Courbe décroissante\n\n⚖️ PRIX D'ÉQUILIBRE\n→ Prix auquel quantités offertes = quantités demandées\n→ Point où les deux courbes se croisent\n→ Si prix > équilibre : surplus (offre > demande)\n→ Si prix < équilibre : pénurie (demande > offre)\n\n📐 ÉLASTICITÉ-PRIX :\n→ Mesure la SENSIBILITÉ de la demande aux variations de prix\n→ |élasticité| > 1 : demande très sensible (biens non essentiels)\n→ |élasticité| < 1 : demande peu sensible (pain, médicaments)",
    ex:"Le calcul de l'élasticité-prix est apparu en 2023 La Réunion (sujet INVESTIX, dans la matière originale). Si le prix d'un produit augmente de 10 % et la demande baisse de 20 %, l'élasticité = −20/10 = −2 (très élastique).",
    conf:"⚠️ Rappel de 1ère MAIS toujours utile pour expliquer un mécanisme — surtout dans les questions de type 'Expliquez le mécanisme qui relie X à Y'. Mobilisé en filigrane dans presque tous les sujets de politique économique."
  },

  "financement": {
    tag:"Rappels Première", titre:"Financement de l'économie", freq:"★★☆☆☆ Faible",
    def:"Ensemble des mécanismes par lesquels les agents économiques (entreprises, ménages, État) obtiennent les ressources financières dont ils ont besoin.",
    form:"📋 LES 2 GRANDS MODES :\n\n💰 AUTOFINANCEMENT\n→ L'entreprise finance ses investissements avec ses propres bénéfices (réserves)\n→ Pas de coût d'intérêt, indépendance\n→ Mais limité par les profits passés\n\n🏦 FINANCEMENT EXTERNE\n→ Crédit bancaire (intermédié) : la banque prête à un taux d'intérêt\n→ Marchés financiers (direct) : émission d'actions (capital) ou d'obligations (dette)\n\n🎯 CRÉATION MONÉTAIRE\n→ Quand une BANQUE accorde un crédit, elle CRÉE de la monnaie\n→ 'Les crédits font les dépôts' (et non l'inverse)\n→ La création monétaire est encadrée par les réserves obligatoires et les taux directeurs de la BCE\n\n📐 TAUX D'INTÉRÊT\n→ Prix du crédit, exprimé en % du capital emprunté\n→ Lien direct avec la politique monétaire de la BCE\n→ Plus le taux est haut, plus le crédit est cher → moins d'investissement",
    ex:"Une PME finance ses machines : 30 % par autofinancement (bénéfices non distribués), 70 % par crédit bancaire à 4 % sur 7 ans. Quand la BCE remonte ses taux directeurs, le coût du crédit pour cette PME augmente.",
    conf:"⚠️ Notion de RAPPEL mais essentielle pour comprendre la POLITIQUE MONÉTAIRE (T6). Lien direct : taux BCE → taux des banques commerciales → coût du crédit pour les entreprises → investissement → croissance. C'est le canal de TRANSMISSION de la politique monétaire."
  }

};
