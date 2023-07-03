const {
    loadStripe
} = require("@stripe/stripe-js");
const  {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
} = require("../utils/consts")
const getStripe = () => {
    stripePromise = loadStripe(
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ??
        ''
    );
  return stripePromise;
};
module.exports = {
    getStripe
}