# Gestion des methodes de paiements

Nous vous proposons 2 methodes de paiements, le paiement par carte bancaire et le paiement via Paypal.
Ces deux methodes sont les plus utilisées.

## Paiement par carte bancaire

Pour ce mode de paiement, nous utilisons **Stripe** pour effectuer les transactions.
Stripe est une plateforme de paiement en ligne qui permet aux entreprises de toutes tailles d'accepter les paiements en ligne, notamment par carte bancaire, en toute sécurité.

### Creez un compte stripe

Pour commencer, vous devez creer un compte **Stripe**. Pour cela, rendez-vous sur
[stripe.com](https://stripe.com/fr) et suivez les instructions.

#### Configurer votre compte

- **Complétez votre profil** : Après la validation, Stripe vous demandera de fournir des informations supplémentaires sur votre entreprise (adresse, type d'activité, etc.).
- **Ajoutez un compte bancaire** : Pour recevoir des paiements, vous devez ajouter un compte bancaire où Stripe pourra transférer les fonds.

#### Récupérer les clés d'API

- **Accédez au tableau de bord** : Une fois votre compte configuré, connectez-vous à votre tableau de bord Stripe.

- **Allez dans les paramètres de développeur** : Dans le menu de gauche, cliquez sur "Developers" (Développeurs).

- **Clés API** : Sous l'onglet "API keys", vous trouverez vos clés API :

  - Clé publique (_Publishable key_)

  - Clé secrète (_Secret key_)

#### Ajouter vos clés d'API à votre boutique

Dans votre site drupal, aller sur `commerce` > `configuration` > `commerce` > `payment gateways` > `Carte bancaire (stripe)` et ajoutez vos clés d'API.
![stripe](https://stripe.com/img/v3/home/social.png)
