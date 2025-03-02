# Gestion des produits

Les produits représentent des biens ou des services vendus dans votre magasin. Vous pouvez ajouter des produits simples ou des produits variables.

Avant de poursuivre, il est essentiel de comprendre la distinction entre les produits simples et les produits variables.

## Produit simple vs Produit variable

Un produit simple est un produit variable avec une seule variante. En réalité, les produits simples n'existent pas en tant que tels.

:::info
On vend toujours une variante d'un produit. Un produit doit avoir au moins une variante, et si nécessaire, plusieurs.
:::

**Exemple 1 :** Pour la vente d'un livre, créez un produit "Livre" et ajoutez une variante pour ce produit.  
**Exemple 2 :** Pour la vente d'un t-shirt disponible en rouge et bleu, créez un produit "T-shirt" et ajoutez une variante pour chaque couleur.

## Voir la liste des produits

Pour consulter la liste des produits, accédez à : `/admin/commerce/products`  
![Liste des produits](/assets/liste-des-produits.png)

## Modifier un produit

Pour modifier un produit, cliquez sur le bouton `Modifier` à côté du produit concerné.  
![Modifier un produit](/assets/modifier-un-produit.png)

Pour modifier les informations du produit, vous serez redirigé vers la page de modification.  
![Modifier les informations sur un produit](/assets/modifier-les-informations-sur-un-produit.png)  
Cette image est numérotée de 1 à 10. Nous allons parcourir chaque point pour expliquer comment les modifier. Certains points concernent le produit, d'autres la variante.

### Champs correspondant au produit :

- **1 :** Marque du produit. Correspond au champ **Marques** dans la page de modification.
- **2 :** Nom du produit. Correspond au champ **Titre**.
- **4 :** Description courte. Correspond au champ **Description courte**.
- **7 :** Descriptions supplémentaires. Correspond au champ **Accordions**.

### Champs correspondant à la variante :

Accédez à la page de modification de la variante en cliquant sur le lien **Variation**. Vous verrez une ou plusieurs variantes. Cliquez sur `Modifier` à côté de la variante souhaitée.

- **3 :** Prix de la variante. Correspond au champ **Prix**.
- **5 :** Attributs de variation (couleur, taille, etc.). Correspond aux champs **Couleur** et **Taille**.  
  ![Modifier les informations sur une variante](/assets/modifier-les-informations-sur-une-variante.png)
- **9 :** Images du produit. Correspond au champ **Galleries**.

### Autres champs :

- **6 :** Bouton "Ajouter au panier". Modifiable via : `/admin/config/system/commerceformatage`.  
  ![Modifier le bouton ajouter au panier](/assets/modifier-le-bouton-ajouter-au-panier.png)
- **8 :** Bloc de partage. Configurez les clés d'API dans le thème (certains réseaux ne nécessitent pas de clé).
- **10 :** Bloc d'avis. Modifiez l'apparence ou supprimez-le en suivant les tutoriels sur les layouts.

Nous avons terminé avec ces blocs d'affichage.

### Autres caractéristiques

Tout le contenu situé sous ce bloc est regroupé dans le champ **Autres caractéristiques**. Ces informations sont organisées en sections, chaque section contenant un ou plusieurs champs. Vous pouvez ajouter, modifier ou supprimer des sections.  
![Modifier les autres caractéristiques](/assets/modifier-les-autres-caracteristiques.png)

## Ajouter un produit

Pour ajouter un produit, cliquez sur le bouton `Ajouter un produit` sur la page : `/admin/commerce/products`.  
![Ajouter un produit](/assets/ajouter-un-produit.png)

:::info
Vous devez ajouter au moins une variante pour chaque produit. La variante contient le prix, la quantité en stock, les attributs de variation, les images, etc.
:::
