# Gestion des Commandes dans Drupal Commerce

La gestion des commandes est une étape cruciale dans le fonctionnement d'une plateforme e-commerce. Elle permet de suivre, traiter et expédier les commandes de manière efficace. Dans Drupal Commerce, les commandes sont gérées via l'onglet **Commandes** dans l'interface d'administration. Voici un guide détaillé pour traiter les commandes après un achat sur votre site.

## **Accéder à la Liste des Commandes**

Pour accéder à la liste des commandes, suivez ces étapes :

1. Rendez-vous dans le menu **Commerce** -> **Commandes**.
2. Vous verrez une liste de toutes les commandes passées sur votre site.

## **Consulter les Détails d'une Commande**

Pour consulter les détails d'une commande spécifique :

1. Cliquez sur le lien **Voir** correspondant à la commande souhaitée.
2. Vous aurez accès à toutes les informations relatives à la commande, y compris les produits, les informations client, les détails de livraison et de facturation.

## **Traiter une Commande**

Le traitement d'une commande implique plusieurs étapes clés :

### **1. Vérification de la Commande**

- Vérifiez les produits commandés, les informations du client, les détails de livraison et de facturation.
- Si tout est correct, cliquez sur **Validate order** pour valider la commande.

  ![Validate order](/assets/validate-order.png)

### **2. Passage à l'État 'Fulfillment'**

- Une fois la commande validée, son état passe à **Fulfillment**. Cela signifie que la commande est prête à être préparée et expédiée.

  ![Fulfillment](/assets/fulfillment.png)

### **3. Passage à l'État 'Completed'**

- Lorsque la commande est expédiée et livrée, passer son état **Completed**. Cela indique que le processus de traitement est terminé.

  ![Completed](/assets/completed.png)

## **Autres Actions Possibles sur une Commande**

En plus des étapes de traitement, vous pouvez effectuer les actions suivantes sur une commande :

### **1. Modifier l'État de la Commande**

- Vous pouvez mettre à jour l'état de la commande en fonction de son avancement (par exemple : en attente, en cours de traitement, expédiée, etc.).

### **2. Ajouter des Commentaires**

- Ajoutez des commentaires pour suivre l'évolution de la commande et faciliter la communication interne.

### **3. Ajouter des Produits**

- Si nécessaire, vous pouvez ajouter des produits supplémentaires à la commande.

### **4. Modifier les Informations de Livraison**

- Vous pouvez ajuster les informations de livraison, telles que l'adresse ou le mode de livraison.

### **5. Modifier les Informations de Facturation**

- Vous pouvez mettre à jour les informations de facturation si besoin.

### **6. Modifier les Informations du Client**

- Vous pouvez modifier les informations du client, telles que le nom, l'adresse ou les coordonnées.

#### **Documentation Officielle**

Pour en savoir plus sur la gestion des commandes dans Drupal Commerce, consultez la documentation officielle :

- [Drupal Commerce - Flux de Travail des Commandes](https://docs.drupalcommerce.org/v2/developer-guide/orders/workflows/)
