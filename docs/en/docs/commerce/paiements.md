# Payment Methods Management

We offer two payment methods: credit card payments and PayPal payments. These two methods are the most commonly used.

## Credit Card Payment

For this payment method, we use **Stripe** to process transactions. Stripe is an online payment platform that allows businesses of all sizes to securely accept online payments, including credit card payments.

### Create a Stripe Account

To get started, you need to create a **Stripe** account. To do this, go to [stripe.com](https://stripe.com/fr) and follow the instructions.

#### Configure Your Account

- **Complete Your Profile**: After validation, Stripe will ask you to provide additional information about your business (address, type of activity, etc.).
- **Add a Bank Account**: To receive payments, you must add a bank account where Stripe can transfer funds.

#### Retrieve API Keys

- **Access the Dashboard**: Once your account is set up, log in to your Stripe dashboard.

- **Go to Developer Settings**: In the left-hand menu, click on "Developers."

- **API Keys**: Under the "API keys" tab, you will find your API keys:

  - Publishable Key

  - Secret Key

#### Add Your API Keys to Your Store

In your Drupal site, go to `Commerce` > `Configuration` > `Commerce` > `Payment Gateways` > `Credit Card (Stripe)` and add your API keys.

![Stripe](/assets/clee-api-in-drupal.png)
