# Audit UX & Navigation — Revizo MSGN
> Date : 2026-04-16 · Auditeur : Claude Opus 4.6

## Architecture de navigation

### Pattern à 3 niveaux (réutilisable pour les autres matières)

1. **Barre d'épreuve** (`.nav-epreuve`, sticky top:0) : Navigation inter-matières (Éco-Droit / SGDN / Philo). Classes du design system `revizo-nav.css`.

2. **Barre de rubriques** (`.nav-rubriques`, sticky top:44px) : Navigation intra-matière. Pour MSGN, 3 modes via `switchMode()` : Fiches mémo | Questions du Bac | Questions de synthèse.

3. **Layout sidebar + main** (`.layout` en CSS Grid) : 3 conteneurs sidebar cachés/affichés selon le mode (`sidebar-questions`, `sidebar-synthese`, `sidebar-fiches`). Le panneau `#main` est rendu dynamiquement.

### Flux de données

```
Données statiques (objets JS inline)
  N = {}       → 31 notions (def, form, interp, ex, conf, svg?)
  Q = {}       → 20 questions Bac (methode, annale, corrige)
  SYNTH = []   → 8 sujets synthèse (question, attendu, corrige)
  FICHES = {}  → 8 sections regroupant des sous-ensembles de N
  CHECKLISTS = {} → 3 listes d'auto-évaluation

Fonctions de rendu
  switchMode(mode)           → bascule sidebar + page de garde
  show(id, el)               → affiche une question Q dans #main
  openN(id)                  → affiche une notion N dans la modale
  showFiche(dossier, sec, el)→ affiche les fiches d'une section
  showChecklist(dossier, el) → affiche la checklist
  showSynthMethode(el)       → affiche la méthode synthèse
  showSynthSujet(idx, el)    → affiche un sujet de synthèse
  showFicheHome()            → affiche la page de garde fiches
  buildFicheCard(n)          → génère le HTML d'une fiche accordéon
  toggleGroup(header)        → ouvre/ferme un accordéon sidebar
```

### Sidebars par mode

| Mode | Sidebar | Contenu panneau |
|------|---------|-----------------|
| fiches | 3 dossiers en accordéon (sous-sections + "Notions maîtrisées ?") | Fiches notions depuis N |
| questions | 3 dossiers avec sous-titres jaunes (même structure que fiches) | Détail question depuis Q |
| synthese | Méthode + 8 sujets regroupés par dossier | Question + corrigé depuis SYNTH |

### Composants réutilisables

- `.group` / `.group-header` / `.group-body` : accordéon
- `.q-item` : item cliquable dans la sidebar
- `.dossier-label` : sous-titre jaune de séparation
- `.fiche` / `.fiche-header` / `.fiche-body` : carte notion en accordéon
- `.fb-def` / `.fb-retenir` / `.fb-exemple` / `.fb-piege` : 4 blocs de la fiche
- Modale : `.overlay` / `.modal` / `.modal-body`

## Bugs corrigés

- P20 : onclick Dossier 2 page de garde → tous pointaient vers [5], remplacés par appels directs showFiche()
- P22 : duplication HTML switchMode/showFicheHome → factorisé
- P24 : fonctions mortes toggleSvg/toggleCorr → supprimées

## Problèmes connus (non bloquants)

- P1 : data-subject="sgdn" définit des couleurs violet dans le design system, mais la page utilise du rose (#b5415a). Choix volontaire.
- P8 : variables CSS locales (--accent, --fond) dupliquent le design system. À harmoniser lors de la refonte globale.
- P16 : décompte notions sidebar D2 (7 vs 9 réel, 5 vs 4 réel). À corriger.
- P19 : total "32 notions" annoncé vs 31 dans N. À corriger.
- P32 : grille fiches non responsive sous 680px. À ajouter.
- P35 : indices SYNTH hardcodés. Fragile mais fonctionnel.

## Fichiers mémo standalone (backup)

Les fichiers suivants ne sont plus liés dans la navigation mais restent dans le repo :
- `memo-msgn-dossier1.html` — Dossier 1 Stratégie
- `memo-msgn-dossier2.html` — Dossier 2 Finances & GRH  
- `memo-msgn-dossier3.html` — Dossier 3 RSE & Numérique
- `memos-sdgn.html` + `memo-sdgn-blocA-F.html` — Anciens mémos cours SDGN

Ces pages peuvent être consultées directement par URL si besoin.
