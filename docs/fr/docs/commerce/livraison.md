# Configuration des Modes de Livraison dans Drupal Commerce

L'environnement de livraison est préconfiguré avec des méthodes de livraison fictives. Ces méthodes peuvent être modifiées, supprimées ou complétées par de nouvelles options selon vos besoins. La configuration des modes de livraison s'effectue dans le menu `Configuration` -> `Commerce` -> `Expédition`.

![Gestion des modes de livraison](/assets/gestion-des-moyens-de-livraison.png)

## Champs Essentiels pour la Configuration d'un Mode de Livraison

Les éléments clés à renseigner pour configurer un mode de livraison sont les suivants :

- **Nom** : Identifiant du mode de livraison (visible uniquement par l'administrateur).
- **Plugin** : Type de mode de livraison.
- **Rate label** : Libellé du mode de livraison (affiché au client).
- **Rate amount** : Montant des frais de livraison.
- **Activé** : Statut du mode de livraison (actif ou inactif).

## Types de Modes de Livraison

Deux types de modes de livraison sont disponibles :

1. **Taux Fixe**
2. **Taux Fixe Appliqué par Article**

### 1. Taux Fixe

Le mode de livraison **Taux Fixe** (ou _Flat Rate_ en anglais) applique des frais de livraison fixes, indépendamment du nombre d'articles commandés, du poids de la commande ou d'autres facteurs. Le coût de livraison reste identique pour toutes les commandes. Cette option peut être ajustée pour offrir une plus grande flexibilité. Par exemple, il est possible de définir des frais de livraison distincts pour différentes zones géographiques, en fonction du poids, de la quantité de produits, etc.

### 2. Taux Fixe Appliqué par Article

Le mode de livraison **Taux Fixe Appliqué par Article** (ou _Flat Rate per Item_ en anglais) applique des frais de livraison fixes pour chaque article commandé. Le coût de livraison est donc proportionnel au nombre d'articles. Cette option peut également être personnalisée pour s'adapter à des critères spécifiques, tels que la zone de livraison, le poids ou la quantité de produits.

## Personnalisation des Frais de Livraison

### Ajustement en Fonction des Critères Utilisateur

Les frais de livraison peuvent être ajustés en fonction de critères liés à l'utilisateur. Par exemple :

- **Adresse de Facturation** : Définir des frais de livraison variables selon l'adresse de facturation.
- **Adresse de Livraison** : Définir des frais de livraison variables selon l'adresse de livraison.

![Ajustement en fonction de l'utilisateur](/assets/taux-fixe-user.png)

### Ajustement en Fonction des Critères de Livraison

Les frais de livraison peuvent également être ajustés en fonction de critères spécifiques à la commande, tels que :

- **Shipment Quantity** : Définir des frais de livraison variables en fonction de la quantité d'articles commandés.
- **Shipment Weight** : Définir des frais de livraison variables en fonction du poids total de la commande.

![Ajustement des frais de livraison](/assets/taux-fixe-ajustements.png)
