# Order Management in Drupal Commerce

Order management is a crucial step in the operation of an e-commerce platform. It allows you to track, process, and ship orders efficiently. In Drupal Commerce, orders are managed via the **Orders** tab in the administration interface. Here is a detailed guide to processing orders after a purchase on your site.

## **Accessing the Order List**

To access the list of orders, follow these steps:

1. Go to the **Commerce** -> **Orders** menu.
2. You will see a list of all orders placed on your site.

## **Viewing Order Details**

To view the details of a specific order:

1. Click on the **View** link corresponding to the desired order.
2. You will have access to all information related to the order, including products, customer information, shipping, and billing details.

## **Processing an Order**

Processing an order involves several key steps:

### **1. Order Verification**

- Verify the ordered products, customer information, shipping, and billing details.
- If everything is correct, click **Validate order** to confirm the order.

  ![Validate order](/assets/validate-order.png)

### **2. Transition to the 'Fulfillment' State**

- Once the order is validated, its status changes to **Fulfillment**. This means the order is ready to be prepared and shipped.

  ![Fulfillment](/assets/fulfillment.png)

### **3. Transition to the 'Completed' State**

- When the order is shipped and delivered, change its status to **Completed**. This indicates that the processing is complete.

  ![Completed](/assets/completed.png)

## **Other Possible Actions on an Order**

In addition to the processing steps, you can perform the following actions on an order:

### **1. Update the Order Status**

- You can update the order status based on its progress (e.g., pending, processing, shipped, etc.).

### **2. Add Comments**

- Add comments to track the order's progress and facilitate internal communication.

### **3. Add Products**

- If necessary, you can add additional products to the order.

### **4. Modify Shipping Information**

- You can adjust shipping information, such as the address or delivery method.

### **5. Modify Billing Information**

- You can update billing information if needed.

### **6. Modify Customer Information**

- You can update customer information, such as name, address, or contact details.

#### **Official Documentation**

To learn more about order management in Drupal Commerce, consult the official documentation:

- [Drupal Commerce - Order Workflows](https://docs.drupalcommerce.org/v2/developer-guide/orders/workflows/)
