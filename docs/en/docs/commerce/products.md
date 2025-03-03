# Product Management

Products represent goods or services sold in your store. You can add simple products or variable products.

Before proceeding, it is essential to understand the distinction between simple products and variable products.

## Simple Product vs. Variable Product

A simple product is a variable product with only one variant. In reality, simple products do not exist as such.

:::info
We always sell a variant of a product. A product must have at least one variant, and if necessary, multiple variants.
:::

**Example 1:** For selling a book, create a product "Book" and add a variant for this product.  
**Example 2:** For selling a t-shirt available in red and blue, create a product "T-shirt" and add a variant for each color.

## View the Product List

To view the list of products, go to: `/admin/commerce/products`  
![Product list](/assets/liste-des-produits.png)

## Edit a Product

To edit a product, click the `Edit` button next to the relevant product.  
![Edit a product](/assets/modifier-un-produit.png)

To modify the product information, you will be redirected to the edit page.  
![Edit product information](/assets/modifier-les-informations-sur-un-produit.png)  
This image is numbered from 1 to 10. We will go through each point to explain how to modify them. Some points relate to the product, while others relate to the variant.

### Fields Corresponding to the Product:

- **1:** Product brand. Corresponds to the **Brands** field on the edit page.
- **2:** Product name. Corresponds to the **Title** field.
- **4:** Short description. Corresponds to the **Short Description** field.
- **7:** Additional descriptions. Corresponds to the **Accordions** field.

### Fields Corresponding to the Variant:

Access the variant edit page by clicking the **Variation** link. You will see one or more variants. Click `Edit` next to the desired variant.

- **3:** Variant price. Corresponds to the **Price** field.
- **5:** Variation attributes (color, size, etc.). Corresponds to the **Color** and **Size** fields.  
  ![Edit variant information](/assets/modifier-les-informations-sur-une-variante.png)
- **9:** Product images. Corresponds to the **Galleries** field.

### Other Fields:

- **6:** "Add to Cart" button. Editable via: `/admin/config/system/commerceformatage`.  
  ![Edit the add to cart button](/assets/modifier-le-bouton-ajouter-au-panier.png)
- **8:** Share block. Configure API keys in the theme (some networks do not require a key).
- **10:** Review block. Modify its appearance or remove it by following layout tutorials.

We are done with these display blocks.

### Other Features

All content located below this block is grouped in the **Other Features** field. This information is organized into sections, with each section containing one or more fields. You can add, modify, or delete sections.  
![Edit other features](/assets/modifier-les-autres-caracteristiques.png)

## Add a Product

To add a product, click the `Add Product` button on the page: `/admin/commerce/products`.  
![Add a product](/assets/ajouter-un-produit.png)

:::info
You must add at least one variant for each product. The variant contains the price, stock quantity, variation attributes, images, etc.
:::
