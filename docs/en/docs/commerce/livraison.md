# Configuring Shipping Methods in Drupal Commerce

The shipping environment comes preconfigured with dummy shipping methods. These methods can be modified, deleted, or supplemented with new options according to your needs. Shipping method configuration is done in the `Configuration` -> `Commerce` -> `Shipping` menu.

![Shipping methods management](/assets/gestion-des-moyens-de-livraison.png)

## Essential Fields for Configuring a Shipping Method

The key elements to fill in when configuring a shipping method are as follows:

- **Name**: Identifier for the shipping method (visible only to the administrator).
- **Plugin**: Type of shipping method.
- **Rate label**: Label for the shipping method (displayed to the customer).
- **Rate amount**: Shipping fee amount.
- **Enabled**: Status of the shipping method (active or inactive).

## Types of Shipping Methods

Two types of shipping methods are available:

1. **Flat Rate**
2. **Flat Rate per Item**

### 1. Flat Rate

The **Flat Rate** shipping method applies fixed shipping fees, regardless of the number of items ordered, the weight of the order, or other factors. The shipping cost remains the same for all orders. This option can be adjusted to offer greater flexibility. For example, it is possible to define separate shipping fees for different geographical zones based on weight, product quantity, etc.

### 2. Flat Rate per Item

The **Flat Rate per Item** shipping method applies fixed shipping fees for each item ordered. The shipping cost is therefore proportional to the number of items. This option can also be customized to adapt to specific criteria, such as the delivery zone, weight, or product quantity.

## Customizing Shipping Fees

### Adjustment Based on User Criteria

Shipping fees can be adjusted based on user-related criteria. For example:

- **Billing Address**: Define variable shipping fees based on the billing address.
- **Shipping Address**: Define variable shipping fees based on the shipping address.

![Adjustment based on user](/assets/taux-fixe-user.png)

### Adjustment Based on Shipping Criteria

Shipping fees can also be adjusted based on order-specific criteria, such as:

- **Shipment Quantity**: Define variable shipping fees based on the quantity of items ordered.
- **Shipment Weight**: Define variable shipping fees based on the total weight of the order.

![Shipping fee adjustments](/assets/taux-fixe-ajustements.png)
