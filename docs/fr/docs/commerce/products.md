# Gestion des produits

Les produits sont des entités représentant des biens ou des services vendus dans votre magasin. Vous pouvez ajouter des produits simples ou des produits variables.

Avant d'aller plus loin, il est important de bien comprendre la différence entre les produits simples et les produits variables.

## Produit simple VS Produit variable

Un produit simple est un produit variable avec une seule variante. Contraitement les produits simple n'existent pas.

:::info
On vend la variation d'un produit. Un produit doit avoir au moins une variation et si necessaire plusieurs.
:::

**Exemple 1 :** Pour vente d'un livre, nous allons cree un produit livre et cree une variante pour ce produit.  
**Exemple 2 :** Pour la vente d'un t-shirt de couleur rouge et bleu, nous allons cree un produit t-shirt et cree une variante pour chaque couleur.

## Voir la liste des produits

Pour voir la liste des produits, accédez à : `/admin/commerce/products`
![Liste des produits](/assets/liste-des-produits.png)

## Modifier un produit

Pour modifier un produit, cliquez sur le bouton `Modifier` à côté du produit que vous souhaitez modifier.
![Modifier un produit](/assets/modifier-un-produit.png)

Pour modifier les informations sur produit, nous irons du rendu vers la page de modification du produit.
![Modifier les informations sur un produit](/assets/modifier-les-informations-sur-un-produit.png)
Cette image est numerotée de 1 à 10. Nous allons parcouris chaque point afin de voir comment le modifier.
Certains points correspond au produit, d'autre à la variante.

**Champs correspondant au produit :**

- 1 : Contient la marque du produit. Au niveau de la page de modification, elle correspond au champs 'Marques'.
- 2 : Contient le nom du produit. Au niveau de la page de modification, elle correspond au champs 'Titre'.
- 4 : Contient à la description. Au niveau de la page de modification, elle correspond au champs 'Description courte'.
- 7 : Contient les descriptions supplementaies. Au niveau de la page de modification, elle correspond au champs 'Accordions'.

**Champs correspondant à la variante :**  
Accedez à la page de modification de la variante en cliquant sur le lien 'variation', vous aurez une ou plusieurs variantes. Cliquez sur le bouton 'Modifier' à côté de la variante que vous souhaitez modifier.

- 3 : Contient le prix de la variante. Au niveau de la page de modification, elle correspond au champs 'Prix'.
- 5 : Contient les attributes de variation. Au niveau de la page de modification, elle correspond au champs 'Couleur' et taille.
  ![Modifier les informations sur une variante](/assets/modifier-les-informations-sur-une-variante.png)
- 9 : Contient les images du produit. Au niveau de la page de modification, elle correspond au champs 'Galleries'.

**Autres champs :**

- 6 : Le bouton ajouter au panier peut etre modifié en allant sur:
