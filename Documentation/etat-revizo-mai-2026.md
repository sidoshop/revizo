# Bilan Revizo — Fin mai 2026

## 🏛 Architecture actuelle du site

### Hiérarchie des fichiers MSGN
```
revizo-msgn.html         ← SPA principale (4 onglets : Fiches mémo / Questions du Bac / Synthèse / 🔑 Décodage)
  └─ charge notions-msgn.js (source unique de vérité — 43 notions)

memo-msgn-dossier1/2/3.html  ← Pages autonomes par dossier (imprimables, embed)
print-fiches-memo.html       ← Vue 1 page A4 dense (impression)
fiche-memo-cycle.html        ← 🆕 NOUVELLE vue "cycle d'entreprise" (7 familles × 4 phases)
                                charge aussi notions-msgn.js
                                + bullets auto-évaluation (localStorage)
                                + tooltips au survol
                                + modale au clic
```

### Source unique des notions
**`notions-msgn.js`** contient l'objet `N` avec les 43 notions au format :
```js
{
  id: {
    tag:"Catégorie",
    titre:"Nom",
    freq:"★★★★★ Constante",
    def:"Définition courte",
    form:"À retenir (avec \\n pour sauts de ligne)",
    interp:"(optionnel) Note prof / interprétation",
    svg:"(optionnel) SVG illustration",
    ex:"Exemple bac avec source",
    conf:"⚠️ Piège classique"
  }
}
```

⚠️ **RÈGLE D'OR** : si tu modifies une notion, **modifie-la dans `notions-msgn.js`**, pas dans les fichiers HTML. Sinon les versions divergent.

---

## ✅ Ce qui est fait (session 10-12 mai 2026)

### Module Décodage (Chantier A)
- Nouveau 4e onglet 🔑 Décodage dans la SPA
- Dictionnaire des 10 verbes de consigne (Présenter, Repérer, Caractériser, Analyser, Justifier, Apprécier, etc.)
- Pour chaque verbe : attendu, format, piège, exemple bac 2025 ET réponse rédigée modèle
- Tableau express cliquable

### 11 nouvelles notions ajoutées au programme MSGN
- D1 : Comportement consommateur, Caractéristiques marché, Labels & certifications, Décision strat. vs op. (enrichie)
- D2 : Performance commerciale, Risques pro & TMS, Schématisation processus
- D3 : Blockchain, IA, E-commerce, 5 types de valeurs, Communication externe

### 6 nouveaux types de questions dans Questions du Bac
- TYPE 20 — Comportement consommateur
- TYPE 21 — Décision stratégique vs opérationnelle
- TYPE 22 — Schématiser un processus
- TYPE 23 — Apprécier une techno nouvelle (Blockchain/IA/QR)
- TYPE 24 — Identifier les types de valeurs créées (15 lignes)
- TYPE 25 — Calculer un taux d'évolution + commenter

### Fiche cycle d'entreprise (vue alternative)
- 7 familles × 4 phases (Stratégie → Mise en œuvre → Pilotage → Vision)
- 43 notions organisées dans l'ordre logique métier (au lieu des dossiers programme)
- 🔄 Notions transversales marquées
- Survol = mots-clés (tooltip)
- Clic = modale au style SPA
- ⚪🟠🟢 Bullets auto-évaluation avec localStorage

### Nettoyage
- 9 fichiers obsolètes archivés (corbeille macOS, récupérables)
- Toutes les fréquences uniformisées en mots (Constante / Récurrente / Rare) — plus de %
- Compteurs synchronisés partout

---

## 📊 Validation par les données

Structure validée sur **128 questions × 11 sujets bac 2022-2025** :
- ✅ 100 % des questions classables dans une des 7 familles
- ✅ Hiérarchie stable : CHIFFRES (24%) > DIAG (17%) > HUMAIN (16%) > DÉCIDER (13%) > AGIR (12%) > NUM (10%) > ENGAGER (7%)

Détail des sujets analysés → voir `annales-msgn-2022-2025.md`

---

## ⏭ Ce qui reste à faire

### Court terme MSGN
- [ ] Récupérer Puyricard 2023 La Réunion et YBRA 2024 Remplacement (URLs 404, à chercher ailleurs)
- [ ] Décider si `fiche-memo-cycle` remplace ou complète `print-fiches-memo` (actuellement 2 vues coexistent)
- [ ] Lier la fiche cycle depuis la SPA (ajouter un 5e onglet ou un bouton sur la page d'accueil SGDN)
- [ ] Tester l'expérience complète sur le site déployé

### Autres onglets (à attaquer)
- [ ] **Éco-Droit** : appliquer la même approche méthodologique
  - Extraire sujets bac 2022-2025
  - Identifier les familles thématiques
  - Vérifier les notions du Revizo actuel
  - Décider d'une refonte similaire
- [ ] **Philo** : à analyser (structure très différente du bac STMG)

### Améliorations transverses
- [ ] Quiz interactif léger (au-delà de l'auto-évaluation bullets)
- [ ] Roadmap de révision (J-30, J-7, veille du bac)
- [ ] Glossaire alphabétique recherchable

---

## 🛠 Architecture technique

### Stack
- HTML/CSS/JS vanilla (aucun framework)
- Hébergé sur GitHub Pages : https://sidoshop.github.io/revizo/
- Repo : https://github.com/sidoshop/revizo
- Le dossier local `Revizo/site/` est un dépôt git lié à GitHub

### Système de design
- Polices : Inter (corps) + Nunito (titres)
- Palette : --accent (#b5415a), --bleu (#2563a8), --vert (#1a7a3c), --jaune (#f5c842), --texte (#1e1c18)
- Variables centralisées dans `revizo-design-system.css`

### Workflow pour modifier le contenu
1. Modifier `notions-msgn.js` (pour les notions)
2. Modifier `revizo-msgn.html` (pour les questions du bac dans l'objet Q)
3. Synchroniser `memo-msgn-dossier*.html` (pages autonomes)
4. Synchroniser `print-fiches-memo.html` (vue A4)
5. Synchroniser `fiche-memo-cycle.html` (vue cycle)
6. Commit + push

⚠️ Aujourd'hui le contenu est dupliqué entre HTML statiques (pages autonomes, print) et le JS (SPA + cycle). Refactor possible : convertir TOUTES les pages en JS qui charge `notions-msgn.js`.

---

## 🚀 Comment reprendre dans une nouvelle session

1. Lire ce fichier + `annales-msgn-2022-2025.md`
2. Vérifier le dernier commit avec `git log -5`
3. Pull les éventuels changements : `cd site/ && git pull`
4. Tester le site : ouvrir `https://sidoshop.github.io/revizo/`
5. Continuer où on s'est arrêté

**Mémoire Claude** : un dossier `memory/` dans `~/.claude/projects/.../` contient des fiches qui briefent automatiquement chaque nouvelle session.
