# Configuration des promotions dans Drupal Commerce

Les promotions sont un excellent moyen d'attirer de nouveaux clients et de fidéliser les clients existants. Avec Drupal Commerce, vous pouvez configurer des réductions, des cadeaux ou des frais de port gratuits pour dynamiser vos ventes. Ce guide vous explique comment mettre en place ces mécanismes promotionnels.

## ⚙️ Configuration des promotions

### 1. Accéder à l'interface des promotions

- Naviguez dans le back-office : `Administration > Commerce > Promotions`.
- Cliquez sur **Ajouter une promotion**.
  ![Ajouter une promotion](/assets/add-promotion.png)

### 2. Créer une nouvelle promotion

- **Nom** : Donnez un titre clair (ex: "Réduction Été 2025").
- **Statut** : Activez la promotion.
- **Type d'offre** : Sélectionnez le type de promotion :
  - _Remise_ : Pourcentage ou montant fixe.
  - _Cadeau_ : Offrir un produit spécifique.
  - _Livraison_ : Exonérer des frais de port.
  - ...

![Type d'offre](/assets/promotion-type.png)

### 3. Définir les conditions d'application

- Dans l'onglet **Conditions**, ajoutez des règles pour déclencher la promotion :
  - **Montant minimum du panier** (ex: 50€).
  - **Catégorie de produit** (ex: appliquer aux articles de sport).
  - **Segment clients** (ex: utilisateurs enregistrés).
  - ...

![Conditions](/assets/promotion-conditions.png)

### 4. Paramétrer les dates et limites

- **Période de validité** : Définissez une date de début/fin.
- **Limites d'utilisation** :
  - Nombre maximal d'utilisations par client.
  - Code promo unique (optionnel).

![Dates et limites](/assets/promotion-dates-limits.png)

## 💡 Bonnes pratiques

- **Tester les promotions** : Vérifiez avec des commandes tests avant le lancement.
- **Combinaison de promotions** : Contrôlez si les promotions sont cumulables.
- **Analysez l'impact** : Utilisez des outils de reporting pour mesurer l'efficacité.
