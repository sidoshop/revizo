// Données des 22 annales Bac Droit STMG (2021-2025)
// verified: true = corrigé issu des consignes officielles
// verified: false = corrigé construit à partir du programme, à vérifier

const ANNALES = [
  {
    id: "bt-mecanique-2021", year: 2021, session: "Métropole", caseName: "BT Mécanique",
    theme: "T7", themeLabel: "Le travail", topic: "Contrat de travail, licenciement",
    stars: 5, verified: false,
    q4: "Pourquoi le droit limite-t-il le pouvoir de l'employeur ?",
    type1: {
      eleve: "Un patron a viré un employé qui travaillait mal et l'employé n'est pas content.",
      correcteur: "L'employeur, la société BT Mécanique, a procédé au licenciement pour motif personnel de son salarié, lié par un contrat de travail à durée indéterminée (CDI). Le salarié conteste le caractère réel et sérieux du motif invoqué. Le litige porte sur la validité du licenciement au regard de l'article L1232-1 du Code du travail.",
      declic: "« viré » = licencié pour motif personnel · « patron » = employeur · « employé » = salarié lié par un CDI"
    }
  },
  {
    id: "reparemobile-2021", year: 2021, session: "Centres étrangers", caseName: "Répar'mobile",
    theme: "T6", themeLabel: "La responsabilité", topic: "Responsabilité civile extracontractuelle",
    stars: 4, verified: false,
    q4: "La diversité des régimes de responsabilité",
    type1: {
      eleve: "Un réparateur a cassé le téléphone d'un client et le client veut se faire rembourser.",
      correcteur: "Le client, victime d'un dommage matériel (détérioration de son téléphone), engage la responsabilité civile contractuelle du réparateur, Répar'mobile, au titre de l'article 1231-1 du Code civil. Le litige porte sur l'inexécution de l'obligation de résultat du réparateur et la réparation du préjudice subi.",
      declic: "« a cassé » = inexécution de l'obligation de résultat · « rembourser » = réparation du dommage matériel (dommages-intérêts)"
    }
  },
  {
    id: "unipur-2021", year: 2021, session: "Remplacement", caseName: "UNIPUR",
    theme: "T7", themeLabel: "Le travail", topic: "Licenciement, types de licenciement",
    stars: 4, verified: false,
    q4: "Le droit protège-t-il efficacement le salarié ?",
    type1: {
      eleve: "Une entreprise a renvoyé des employés parce qu'elle n'avait plus assez d'argent.",
      correcteur: "La société UNIPUR, employeur, a procédé au licenciement pour motif économique de plusieurs salariés, invoquant des difficultés économiques au sens de l'article L1233-3 du Code du travail. Le litige porte sur le respect de la procédure de licenciement économique et l'obligation de reclassement.",
      declic: "« renvoyé parce que plus d'argent » = licenciement économique (lié à l'entreprise, pas à la personne) · « employés » = salariés"
    }
  },
  {
    id: "maxi-2021", year: 2021, session: "Espagne", caseName: "MAXI",
    theme: "T5", themeLabel: "Le contrat", topic: "Formation du contrat, conditions de validité",
    stars: 3, verified: false,
    q4: "Pourquoi le droit encadre-t-il la formation du contrat ?",
    type1: {
      eleve: "Un magasin a vendu un produit à quelqu'un qui ne savait pas que c'était défectueux.",
      correcteur: "L'acheteur (consommateur) a conclu un contrat de vente avec le vendeur, la société MAXI. Le consentement de l'acheteur a été vicié par un dol (art. 1137 du Code civil) : le vendeur a dissimulé un défaut de la chose. Le litige porte sur la nullité du contrat pour vice du consentement.",
      declic: "« ne savait pas » = le consentement n'était pas éclairé · « défectueux caché » = dol (dissimulation intentionnelle) → nullité"
    }
  },
  {
    id: "restaurant-2022", year: 2022, session: "Métropole", caseName: "Restaurant de montagne",
    theme: "T6", themeLabel: "La responsabilité", topic: "Responsabilité civile, dommage",
    stars: 4, verified: false,
    q4: "La diversité des régimes de responsabilité",
    type1: {
      eleve: "Un client s'est blessé dans un restaurant et veut de l'argent pour ses blessures.",
      correcteur: "La victime, client du restaurant, a subi un dommage corporel (blessures) dans l'établissement. Elle engage la responsabilité civile délictuelle du restaurateur sur le fondement de l'article 1242 alinéa 1 du Code civil (responsabilité du fait des choses). Le gardien de la chose ayant causé le dommage est responsable de plein droit.",
      declic: "« s'est blessé » = dommage corporel · « dans un restaurant » = responsabilité du fait des choses (art. 1242 al.1), pas besoin de prouver la faute du restaurateur"
    }
  },
  {
    id: "guerin-2022", year: 2022, session: "Nouvelle-Calédonie", caseName: "GUERIN",
    theme: "T7", themeLabel: "Le travail", topic: "Droit de retrait, santé au travail",
    stars: 5, verified: true,
    q4: "Pourquoi le droit protège-t-il la santé du salarié ?",
    type1: {
      eleve: "Un salarié a refusé de travailler parce que c'était dangereux et son patron l'a viré.",
      correcteur: "M. Guérin, salarié, a exercé son droit de retrait (art. L4131-1 du Code du travail) face à un danger grave et imminent pour sa santé (exposition prolongée à un acide sans protection). L'employeur a procédé à son licenciement. Le litige porte sur la légitimité du droit de retrait et le caractère abusif du licenciement.",
      declic: "« a refusé de travailler parce que dangereux » = exercice du droit de retrait · « viré » = licenciement contesté comme abusif"
    },
    type2: {
      party: "M. Guérin (salarié)",
      args: [
        {
          vertu: "En vertu de l'article L4131-1 du Code du travail, le salarié peut exercer son droit de retrait s'il a un motif raisonnable de penser que sa situation de travail présente un danger grave et imminent pour sa vie ou sa santé.",
          espece: "En l'espèce, M. Guérin travaille depuis 20 ans avec un acide puissant sans ventilation ni équipements de protection adéquats, et il a développé une maladie cutanée malgré ses alertes répétées auprès de son employeur.",
          consequence: "Par conséquent, l'exercice de son droit de retrait est légitime."
        },
        {
          vertu: "En vertu de l'article L4121-1 du Code du travail, l'employeur est tenu d'assurer la sécurité et de protéger la santé physique et mentale de ses salariés.",
          espece: "En l'espèce, l'employeur n'a fourni ni ventilation ni équipements de protection malgré les demandes répétées de M. Guérin.",
          consequence: "Par conséquent, l'employeur a manqué à son obligation de sécurité et le licenciement de M. Guérin est dépourvu de cause réelle et sérieuse."
        }
      ]
    },
    type3: {
      party: "L'employeur",
      args: [
        {
          vertu: "En vertu de l'article L4131-1 du Code du travail, le droit de retrait suppose un danger « grave et imminent ».",
          espece: "En l'espèce, M. Guérin travaille dans ces conditions depuis 20 ans sans incident majeur, ce qui pourrait remettre en question le caractère « imminent » du danger.",
          consequence: "Par conséquent, l'employeur peut soutenir que les conditions du droit de retrait n'étaient pas réunies."
        },
        {
          vertu: "En vertu du pouvoir de direction de l'employeur (art. L1221-1 du Code du travail), celui-ci est en droit d'organiser le travail et de prendre les décisions nécessaires au fonctionnement de l'entreprise.",
          espece: "En l'espèce, l'employeur peut arguer qu'il avait planifié des améliorations des conditions de travail et que l'absence du salarié a désorganisé l'entreprise.",
          consequence: "Par conséquent, le licenciement reposerait sur une cause réelle et sérieuse liée à l'insubordination du salarié."
        }
      ]
    }
  },
  {
    id: "bastide-2022", year: 2022, session: "Polynésie", caseName: "Bastide",
    theme: "T7", themeLabel: "Le travail", topic: "Contrat de travail, modification",
    stars: 4, verified: false,
    q4: "Le pouvoir de l'employeur et ses limites",
    type1: {
      eleve: "Un patron a changé les horaires de son employé et l'employé refuse.",
      correcteur: "L'employeur a modifié un élément essentiel du contrat de travail du salarié (modification du contrat, art. L1222-6 du Code du travail). Le salarié a refusé cette modification, ce qui est son droit. Le litige porte sur la distinction entre modification du contrat (accord obligatoire) et simple changement des conditions de travail (pouvoir de direction).",
      declic: "« changé les horaires » = modifier un élément du contrat ≠ simple changement des conditions de travail · La question clé : est-ce essentiel (accord obligatoire) ou secondaire (pouvoir de direction) ?"
    }
  },
  {
    id: "balzana-2022", year: 2022, session: "Polynésie remp.", caseName: "Balzana / Cat & Cie",
    theme: "T8", themeLabel: "Entreprendre", topic: "Propriété intellectuelle",
    stars: 2, verified: false,
    q4: "Les enjeux de la protection du droit de propriété",
    type1: {
      eleve: "Quelqu'un a copié le dessin d'un autre et l'autre veut l'empêcher.",
      correcteur: "L'auteur, titulaire d'un droit de propriété intellectuelle (droit d'auteur) sur son œuvre originale, constate que la société Cat & Cie a reproduit cette œuvre sans autorisation, commettant ainsi un acte de contrefaçon (art. L335-2 du Code de la propriété intellectuelle). Le litige porte sur l'atteinte au droit d'auteur et la réparation du préjudice.",
      declic: "« a copié » = contrefaçon · « dessin » = œuvre protégée par le droit d'auteur · « empêcher » = action en contrefaçon (civil + pénal)"
    }
  },
  {
    id: "securiteplus-2022", year: 2022, session: "Métropole remp.", caseName: "SécuritéPlus",
    theme: "T7", themeLabel: "Le travail", topic: "Licenciement économique",
    stars: 4, verified: false,
    q4: "Le rôle pacificateur du droit",
    type1: {
      eleve: "Une entreprise de sécurité a renvoyé un agent parce qu'elle perdait des clients.",
      correcteur: "La société SécuritéPlus, employeur, a procédé au licenciement pour motif économique de son salarié, invoquant une perte de clientèle entraînant des difficultés économiques (art. L1233-3 du Code du travail). Le litige porte sur le caractère réel et sérieux du motif économique et le respect de l'obligation de reclassement.",
      declic: "« perdait des clients » = difficultés économiques (motif économique, pas personnel) · l'employeur doit prouver les difficultés ET avoir cherché à reclasser le salarié"
    }
  },
  {
    id: "pompes-2023", year: 2023, session: "Métropole", caseName: "Pompes à Chaleur",
    theme: "T6", themeLabel: "La responsabilité", topic: "Responsabilité du fait des produits défectueux",
    stars: 4, verified: false,
    q4: "Le droit assure-t-il une protection renforcée du consommateur ?",
    type1: {
      eleve: "Une pompe à chaleur a explosé et a blessé quelqu'un, le fabricant doit payer.",
      correcteur: "La victime a subi un dommage corporel causé par un produit défectueux (pompe à chaleur présentant un défaut de sécurité). Elle engage la responsabilité du producteur sur le fondement de l'article 1245 du Code civil (responsabilité du fait des produits défectueux). Le producteur est responsable de plein droit, sans qu'il soit nécessaire de prouver sa faute.",
      declic: "« a explosé » = produit défectueux · « fabricant » = producteur responsable de plein droit (pas besoin de prouver la faute, seulement le défaut + le dommage + le lien)"
    }
  },
  {
    id: "investix-2023", year: 2023, session: "La Réunion", caseName: "INVESTIX",
    theme: "T8", themeLabel: "Entreprendre", topic: "Droit de propriété et ses limites",
    stars: 2, verified: false,
    q4: "Les enjeux de la protection du droit de propriété",
    type1: {
      eleve: "Un propriétaire ne veut pas que la mairie prenne son terrain pour construire une route.",
      correcteur: "Le propriétaire, titulaire du droit de propriété sur son bien immobilier (art. 544 du Code civil : usus, fructus, abusus), conteste la procédure d'expropriation pour cause d'utilité publique engagée par la collectivité. Le litige porte sur les limites du droit de propriété face à l'intérêt général.",
      declic: "« prenne son terrain » = expropriation pour utilité publique · le droit de propriété est un droit fondamental MAIS il peut être limité dans l'intérêt général"
    }
  },
  {
    id: "beebop-2023", year: 2023, session: "Liban", caseName: "Beebop",
    theme: "T5", themeLabel: "Le contrat", topic: "Vices du consentement, erreur",
    stars: 3, verified: true,
    q4: "Pourquoi le droit encadre-t-il la formation du contrat ?",
    type1: {
      eleve: "Un monsieur a acheté une maison avec un dessin et le dessin n'était pas de qui il croyait.",
      correcteur: "John Beebop, acheteur, a conclu un contrat de vente immobilière avec Maxime Foley, vendeur. L'élément déterminant de l'achat était un graffiti attribué à un artiste célèbre. Or, cette attribution s'avère erronée, ce qui constitue potentiellement un vice du consentement (erreur sur les qualités essentielles de la chose, article 1132 du Code civil). Le litige porte sur la nullité du contrat pour erreur.",
      declic: "« le dessin n'était pas de qui il croyait » = erreur sur les qualités essentielles → c'est un vice du consentement → le contrat peut être annulé (nullité)"
    },
    type2: {
      party: "John Beebop (acheteur)",
      args: [
        {
          vertu: "En vertu de l'article 1132 du Code civil, l'erreur sur les qualités essentielles de la prestation est une cause de nullité du contrat lorsqu'elle porte sur une qualité que les parties avaient considérée comme déterminante.",
          espece: "En l'espèce, John Beebop a acheté le bien immobilier en raison de la présence d'un graffiti attribué à un artiste de renommée internationale, ce qui constituait l'élément déterminant de son consentement. Or, cette attribution s'avère fausse.",
          consequence: "Par conséquent, l'erreur porte sur une qualité essentielle et déterminante, justifiant la nullité du contrat de vente."
        },
        {
          vertu: "En vertu de l'article 1112-1 du Code civil, le vendeur a une obligation d'information précontractuelle sur les éléments déterminants du consentement de l'acheteur.",
          espece: "En l'espèce, le vendeur connaissait ou aurait dû connaître l'incertitude sur l'attribution du graffiti et n'en a pas informé l'acheteur.",
          consequence: "Par conséquent, le manquement à l'obligation d'information renforce le caractère vicié du consentement."
        }
      ]
    },
    type3: {
      party: "Maxime Foley (vendeur)",
      args: [
        {
          vertu: "En vertu de l'article 1132 du Code civil, l'erreur doit porter sur une qualité « convenue entre les parties » comme essentielle pour entraîner la nullité.",
          espece: "En l'espèce, le vendeur peut soutenir que l'attribution du graffiti n'a jamais été expressément garantie dans l'acte de vente et que l'acheteur aurait dû vérifier l'authenticité par lui-même avant de s'engager.",
          consequence: "Par conséquent, l'erreur est imputable à la négligence de l'acheteur et ne peut fonder une demande en nullité."
        },
        {
          vertu: "En vertu du principe de bonne foi contractuelle (art. 1104 du Code civil), chaque partie doit s'informer raisonnablement avant de contracter.",
          espece: "En l'espèce, l'acheteur, en tant que professionnel ou acquéreur avisé d'un bien immobilier de cette valeur, avait les moyens de faire expertiser le graffiti avant la signature.",
          consequence: "Dès lors, le vendeur peut invoquer la négligence de l'acheteur pour s'opposer à la nullité du contrat."
        }
      ]
    }
  },
  {
    id: "agrisol-2023", year: 2023, session: "Centres étrangers", caseName: "AgriSol",
    theme: "T5", themeLabel: "Le contrat", topic: "Bail commercial, force obligatoire",
    stars: 2, verified: false,
    q4: "La force obligatoire du contrat",
    type1: {
      eleve: "Un locataire d'un local commercial ne veut pas partir quand le propriétaire le lui demande.",
      correcteur: "Le preneur (locataire commercial), titulaire d'un bail commercial, invoque son droit au renouvellement du bail face au bailleur (propriétaire) qui souhaite mettre fin au contrat. Le litige porte sur la force obligatoire du contrat (art. 1103 du Code civil) et le droit au maintien dans les lieux du preneur commercial.",
      declic: "« locataire ne veut pas partir » = il exerce son droit au renouvellement du bail commercial · le contrat s'impose comme une loi aux parties (force obligatoire)"
    }
  },
  {
    id: "transexpress-2023", year: 2023, session: "Remplacement", caseName: "TransExpress",
    theme: "T7", themeLabel: "Le travail", topic: "Clause de non-concurrence",
    stars: 3, verified: false,
    q4: "Le droit concilie-t-il liberté et protection ?",
    type1: {
      eleve: "Un ancien salarié est allé travailler chez un concurrent et son ancien patron n'est pas d'accord.",
      correcteur: "L'ancien salarié de la société TransExpress a rejoint une entreprise concurrente en violation de la clause de non-concurrence figurant dans son contrat de travail. L'employeur invoque cette clause pour obtenir réparation. Le litige porte sur la validité de la clause de non-concurrence (limitée dans le temps, l'espace, assortie d'une contrepartie financière).",
      declic: "« chez un concurrent » = violation de la clause de non-concurrence · la clause n'est valable QUE si elle est limitée (temps + espace) ET avec une contrepartie financière pour le salarié"
    }
  },
  {
    id: "camelia-2024", year: 2024, session: "Métropole", caseName: "SARL Camélia",
    theme: "T7", themeLabel: "Le travail", topic: "Licenciement pour faute",
    stars: 5, verified: false,
    q4: "Le droit protège-t-il efficacement le salarié ?",
    type1: {
      eleve: "Une fleuriste a été virée parce qu'elle arrivait en retard et elle trouve ça injuste.",
      correcteur: "La salariée de la SARL Camélia a fait l'objet d'un licenciement pour faute (motif personnel). L'employeur invoque des retards répétés constitutifs d'une faute justifiant la rupture du contrat. La salariée conteste le caractère réel et sérieux de la cause de licenciement (art. L1232-1 du Code du travail). Le litige porte devant le conseil de prud'hommes.",
      declic: "« virée parce qu'en retard » = licenciement pour faute (motif personnel) · la question : les retards sont-ils suffisamment graves pour constituer une cause réelle ET sérieuse ?"
    },
    type2: {
      party: "La salariée",
      args: [
        {
          vertu: "En vertu de l'article L1232-1 du Code du travail, tout licenciement pour motif personnel doit être justifié par une cause réelle et sérieuse.",
          espece: "En l'espèce, les retards invoqués par l'employeur sont mineurs et ponctuels, et la salariée n'a jamais fait l'objet de sanctions disciplinaires préalables (avertissement, mise en demeure).",
          consequence: "Par conséquent, le licenciement est dépourvu de cause réelle et sérieuse et constitue un licenciement abusif ouvrant droit à des dommages-intérêts."
        },
        {
          vertu: "En vertu du principe de proportionnalité des sanctions, l'employeur doit adapter la sanction à la gravité de la faute commise.",
          espece: "En l'espèce, des retards de quelques minutes ne justifient pas la sanction la plus lourde (le licenciement). Un avertissement ou une mise à pied auraient été proportionnés.",
          consequence: "Par conséquent, la sanction est disproportionnée et le licenciement doit être requalifié en licenciement sans cause réelle et sérieuse."
        }
      ]
    },
    type3: {
      party: "L'employeur (SARL Camélia)",
      args: [
        {
          vertu: "En vertu du pouvoir disciplinaire de l'employeur, celui-ci peut sanctionner tout manquement du salarié à ses obligations contractuelles.",
          espece: "En l'espèce, les retards répétés de la salariée ont désorganisé le service et nui à la bonne marche de l'entreprise (ouverture tardive du magasin, perte de clientèle).",
          consequence: "Par conséquent, l'accumulation de retards constitue une cause réelle et sérieuse de licenciement."
        },
        {
          vertu: "En vertu de l'article L1222-1 du Code du travail, le contrat de travail doit être exécuté de bonne foi par les deux parties.",
          espece: "En l'espèce, la salariée n'a pas respecté ses horaires contractuels malgré les rappels de l'employeur, manquant ainsi à son obligation de bonne foi dans l'exécution du contrat.",
          consequence: "Dès lors, le licenciement repose sur des faits objectifs, vérifiables et suffisamment graves."
        }
      ]
    }
  },
  {
    id: "degouges-2024", year: 2024, session: "Centres étrangers", caseName: "Mme De Gouges",
    theme: "T7", themeLabel: "Le travail", topic: "Discrimination au travail",
    stars: 3, verified: false,
    q4: "Le rôle du droit dans la lutte contre les discriminations",
    type1: {
      eleve: "Une femme n'a pas été promue parce qu'elle est une femme et c'est pas normal.",
      correcteur: "La salariée, Mme De Gouges, invoque une discrimination fondée sur le sexe (art. L1132-1 du Code du travail) dans l'accès à une promotion professionnelle. Le litige porte sur le traitement défavorable d'une salariée fondé sur un critère prohibé par la loi. L'employeur devra prouver que sa décision repose sur des éléments objectifs étrangers à toute discrimination.",
      declic: "« pas promue parce que femme » = discrimination fondée sur le sexe (critère prohibé) · en droit, c'est l'EMPLOYEUR qui doit prouver qu'il n'a pas discriminé"
    }
  },
  {
    id: "solartech-2024", year: 2024, session: "Remplacement", caseName: "SolarTech",
    theme: "T5", themeLabel: "Le contrat", topic: "Responsabilité contractuelle, inexécution",
    stars: 3, verified: false,
    q4: "Pourquoi la Cour de cassation est-elle indispensable ?",
    type1: {
      eleve: "Une entreprise a installé des panneaux solaires mais ils ne marchent pas bien, le client n'est pas content.",
      correcteur: "Le client (maître d'ouvrage) a conclu un contrat d'entreprise avec la société SolarTech (entrepreneur) pour l'installation de panneaux solaires. L'installation présente des défauts, constituant une inexécution de l'obligation de résultat. Le client engage la responsabilité contractuelle de SolarTech (art. 1231-1 du Code civil) et dispose des remèdes de l'article 1217 (exécution forcée, réduction du prix, résolution, dommages-intérêts).",
      declic: "« ne marchent pas bien » = inexécution de l'obligation de résultat · le client peut demander la réparation, la réduction du prix ou la résolution du contrat (art. 1217)"
    }
  },
  {
    id: "merbleue-2024", year: 2024, session: "Polynésie", caseName: "MerBleue",
    theme: "T5", themeLabel: "Le contrat", topic: "Garantie légale de conformité",
    stars: 3, verified: false,
    q4: "Le droit assure-t-il une protection renforcée du consommateur ?",
    type1: {
      eleve: "Un client a acheté un bateau mais il ne correspond pas à ce qu'on lui avait dit.",
      correcteur: "Le consommateur a conclu un contrat de vente avec le vendeur professionnel MerBleue. Le bien livré n'est pas conforme aux caractéristiques convenues, ce qui constitue un défaut de conformité ouvrant droit à la garantie légale de conformité (art. L217-4 du Code de la consommation). Le consommateur peut exiger la réparation, le remplacement ou la résolution du contrat.",
      declic: "« ne correspond pas » = défaut de conformité (pas un vice caché, c'est différent) · le consommateur est protégé par la garantie légale de conformité (droit de la consommation)"
    }
  },
  {
    id: "urbanvert-2024", year: 2024, session: "Nouvelle-Calédonie", caseName: "UrbanVert",
    theme: "T6", themeLabel: "La responsabilité", topic: "Trouble anormal de voisinage",
    stars: 3, verified: false,
    q4: "Le droit de propriété et ses limites",
    type1: {
      eleve: "Un voisin fait trop de bruit avec ses travaux et l'autre voisin en a marre.",
      correcteur: "Le propriétaire voisin subit un trouble anormal de voisinage causé par les nuisances (bruit, poussière) liées aux travaux de la société UrbanVert. Le litige porte sur la responsabilité pour trouble anormal de voisinage : il n'est pas nécessaire de prouver une faute, mais seulement le caractère anormal de la nuisance qui dépasse les inconvénients normaux du voisinage.",
      declic: "« trop de bruit » = trouble anormal de voisinage · PAS besoin de prouver la faute, seulement le caractère ANORMAL du trouble"
    },
    type2: {
      party: "Le voisin (victime)",
      args: [
        {
          vertu: "En vertu du principe de responsabilité pour trouble anormal de voisinage (consacré par la jurisprudence et l'article 1253 du Code civil), nul ne doit causer à autrui un trouble excédant les inconvénients normaux du voisinage.",
          espece: "En l'espèce, les travaux de la société UrbanVert génèrent des nuisances sonores et de la poussière depuis plusieurs mois, dépassant largement les inconvénients normaux du voisinage.",
          consequence: "Par conséquent, le trouble anormal est caractérisé et le voisin a droit à réparation (cessation du trouble et/ou dommages-intérêts)."
        }
      ]
    },
    type3: {
      party: "UrbanVert",
      args: [
        {
          vertu: "En vertu du droit de propriété (art. 544 du Code civil), le propriétaire a le droit d'user de son bien et d'y effectuer des travaux.",
          espece: "En l'espèce, les travaux sont autorisés par un permis de construire, respectent la réglementation en vigueur et sont limités dans le temps.",
          consequence: "Par conséquent, les nuisances sont temporaires et ne constituent pas un trouble excédant les inconvénients normaux liés à des travaux de construction."
        }
      ]
    }
  },
  {
    id: "archidij-2025", year: 2025, session: "Métropole", caseName: "ArchiDij974",
    theme: "T7", themeLabel: "Le travail", topic: "Rupture du contrat de travail",
    stars: 5, verified: false,
    q4: "Pourquoi le droit limite-t-il le pouvoir de l'employeur ?",
    type1: {
      eleve: "Un architecte a été renvoyé à cause de ce qu'il a publié sur les réseaux sociaux.",
      correcteur: "Le salarié, architecte au sein de la société ArchiDij974, a fait l'objet d'un licenciement pour motif personnel. L'employeur invoque des publications du salarié sur les réseaux sociaux comme constitutives d'un trouble objectif dans l'entreprise. Le litige porte sur l'articulation entre la vie privée du salarié (protégée au travail) et le pouvoir disciplinaire de l'employeur.",
      declic: "« publié sur les réseaux » = faits de vie privée · l'employeur ne peut licencier pour des faits privés SAUF trouble objectif caractérisé dans l'entreprise"
    }
  },
  {
    id: "novabois-2025", year: 2025, session: "Centres étrangers", caseName: "NovaBois",
    theme: "T5", themeLabel: "Le contrat", topic: "Formation du contrat, dol",
    stars: 3, verified: false,
    q4: "Le rôle pacificateur du droit",
    type1: {
      eleve: "Un vendeur de bois a menti sur la qualité du bois et l'acheteur veut annuler la vente.",
      correcteur: "L'acheteur a conclu un contrat de vente avec la société NovaBois, vendeur professionnel. Le vendeur a dissimulé un défaut de qualité du bois, constitutif d'un dol (art. 1137 du Code civil : manœuvres, mensonges ou dissimulation intentionnelle d'une information déterminante). Le litige porte sur la nullité du contrat pour vice du consentement (dol) et la réparation du préjudice subi.",
      declic: "« a menti sur la qualité » = dol (tromperie intentionnelle du vendeur) ≠ erreur (je me trompe tout seul) · le dol = l'AUTRE m'a trompé → nullité du contrat"
    },
    type2: {
      party: "L'acheteur",
      args: [
        {
          vertu: "En vertu de l'article 1137 du Code civil, le dol est constitué par des manœuvres, des mensonges ou la dissimulation intentionnelle d'une information déterminante par l'un des cocontractants.",
          espece: "En l'espèce, la société NovaBois a volontairement dissimulé les défauts de qualité du bois vendu, alors que cette qualité était déterminante du consentement de l'acheteur.",
          consequence: "Par conséquent, le consentement de l'acheteur a été vicié par le dol du vendeur, ce qui justifie la nullité du contrat (art. 1131 du Code civil)."
        },
        {
          vertu: "En vertu de l'article 1112-1 du Code civil, le vendeur professionnel est tenu d'une obligation d'information sur les éléments déterminants du consentement de l'acheteur.",
          espece: "En l'espèce, le vendeur, professionnel du bois, connaissait les défauts du produit et a manqué à son obligation d'information en ne les révélant pas.",
          consequence: "Par conséquent, le manquement à l'obligation d'information constitue un dol par réticence, ouvrant droit à la nullité du contrat et à des dommages-intérêts."
        }
      ]
    },
    type3: {
      party: "NovaBois (vendeur)",
      args: [
        {
          vertu: "En vertu de l'article 1137 du Code civil, le dol suppose une intention de tromper. La simple erreur ou négligence ne constitue pas un dol.",
          espece: "En l'espèce, le vendeur peut soutenir qu'il ignorait les défauts du bois, qui n'étaient pas décelables au moment de la vente, et qu'il n'y avait aucune intention de tromper.",
          consequence: "Par conséquent, en l'absence d'intention dolosive prouvée, le contrat ne peut être annulé pour dol."
        },
        {
          vertu: "En vertu du principe caveat emptor (l'acheteur doit être vigilant), l'acheteur a l'obligation de se renseigner avant de contracter.",
          espece: "En l'espèce, l'acheteur, en tant que professionnel, avait les compétences pour examiner la qualité du bois avant l'achat et n'a pas demandé d'expertise.",
          consequence: "Dès lors, la négligence de l'acheteur contribue à son propre dommage et ne peut fonder une action en nullité."
        }
      ]
    }
  },
  {
    id: "logipro-2025", year: 2025, session: "Remplacement", caseName: "LogiPro",
    theme: "T6", themeLabel: "La responsabilité", topic: "Responsabilité du commettant",
    stars: 3, verified: false,
    q4: "La diversité des régimes de responsabilité",
    type1: {
      eleve: "Un livreur a causé un accident en livrant et le client blessé veut que l'entreprise paye.",
      correcteur: "Le préposé (salarié livreur) de la société LogiPro (commettant) a causé un dommage corporel à un tiers (la victime) dans l'exercice de ses fonctions. La victime engage la responsabilité civile délictuelle du commettant du fait de son préposé (art. 1242 alinéa 5 du Code civil). La responsabilité du commettant est de plein droit : pas besoin de prouver la faute de l'employeur.",
      declic: "« livreur » = préposé (salarié) · « l'entreprise » = commettant (employeur) · la victime attaque l'EMPLOYEUR, pas le salarié → responsabilité du fait d'autrui (automatique)"
    }
  }
];

// Questions de réflexion récurrentes (TYPE 4)
const QUESTIONS_Q4 = [
  { question: "Pourquoi le droit limite-t-il le pouvoir de l'employeur ?", count: 3, themes: ["T7"] },
  { question: "La diversité des régimes de responsabilité", count: 3, themes: ["T6"] },
  { question: "Le droit protège-t-il efficacement le salarié ?", count: 2, themes: ["T7"] },
  { question: "Pourquoi le droit encadre-t-il la formation du contrat ?", count: 2, themes: ["T5"] },
  { question: "Les enjeux de la protection du droit de propriété", count: 2, themes: ["T8"] },
  { question: "Le droit assure-t-il une protection renforcée du consommateur ?", count: 2, themes: ["T5"] },
  { question: "Le rôle pacificateur du droit", count: 2, themes: ["T5", "T7"] },
  { question: "Pourquoi la Cour de cassation est-elle indispensable ?", count: 1, themes: ["T5"] },
  { question: "Le droit concilie-t-il liberté et protection ?", count: 1, themes: ["T7"] },
  { question: "Le rôle du droit dans la lutte contre les discriminations", count: 1, themes: ["T7"] }
];
