const { stripe } = require('../../utils/stripe');
const {
    getStripe
} = require("../../utils/stripe-client");
const createCheckoutSession = (async(req, res) => {
    const priceId = req.body.params.priceId;
    const return_url = req.body.params.return_url;
    const customer_email = 'williamholiday27@gmail.com';
    
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        customer_email: customer_email,
        line_items: [
          {
            price: priceId,
            quantity: 1
          }
        ],
        mode: 'subscription',
        allow_promotion_codes: true,
        subscription_data: {
          trial_from_plan: true,
          metadata:{}
        },
        success_url: return_url,
        cancel_url: return_url
    });

    return res.status(200).json({ sessionId: session.id });
})

const getProducts = (async(req, res) => {
    
    const {data: prices} = await stripe.prices.list();
    const plans = await Promise.all(prices.map(async(price) => {
        const product = await stripe.products.retrieve(price.product);
        return {
            id: price.id,
            name: product.name,
            price: price.unit_amount,
            interval: price.recurring.interval,
            currency: price.currency,
            description: product.description
        }
    }));

    const sortedPlans = plans.sort((a, b) => a.price - b.price);
    res.json(sortedPlans);
})
module.exports = {
    createCheckoutSession,
    getProducts
}