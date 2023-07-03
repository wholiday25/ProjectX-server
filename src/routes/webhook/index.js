const express = require("express");
const router = express.Router();
const { STRIPE_SECRET_KEY } = require("../../utils/consts");
const { buffer }  = require('micro');
const Stripe = require("stripe");
const bodyParser = require('body-parser');
const stripe = new Stripe(
    STRIPE_SECRET_KEY ?? '',
    {
      // https://github.com/stripe/stripe-node#configuration
      apiVersion: '2022-11-15',
      // Register this as an official Stripe plugin.
      // https://stripe.com/docs/building-plugins#setappinfo
      appInfo: {
        name: 'Next.js Subscription Starter',
        version: '0.1.0'
      }
    }
);

// ROUTES
router.post("/", express.raw({ type: 'application/json' }), (req, res) => {
    
    const relevantEvents = new Set([
        'product.created',
        'product.updated',
        'price.created',
        'price.updated',
        'checkout.session.completed',
        'customer.subscription.created',
        'customer.subscription.updated',
        'customer.subscription.deleted'
    ]);
    let event;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (webhookSecret) {
        // Get the signature sent by Stripe
        const signature = req.headers['stripe-signature'];
        try {
          event = stripe.webhooks.constructEvent(
            req.body,
            signature,
            webhookSecret
          );
        } catch (err) {
          console.log(`⚠️  Webhook signature verification failed.`, err.message);
          return res.status(400);
        }
    }

    if (relevantEvents.has(event.type)) {
        try {
            switch (event.type) {
                case 'product.created':
                case 'product.updated':
                    console.log("created product & updated product");
                    console.log(event.data.object);
                    break;
                case 'price.created':
                case 'price.updated':
                    console.log("price updated & created");
                    console.log(event.data.object);
                    break;
                case 'customer.subscription.created':
                case 'customer.subscription.updated':
                case 'customer.subscription.deleted':
                    console.log("customer subscription");
                    console.log(event.data.object);
                    break;
                case 'checkout.session.completed':
                    console.log("checkout session completed");
                    console.log(event.data.object);
                    break;
                default:
                    throw new Error('Unhandled relevant event!');
            }
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .send('Webhook error: "Webhook handler failed. View logs."');
        }
    }
});

module.exports = router;
