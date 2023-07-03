// import Stripe from 'stripe';
// import { STRIPE_SECRET_KEY } from '@/utils/app/const';
const initStripe = require("stripe");
const {
    STRIPE_SECRET_KEY
} = require("../utils/consts");

const stripe = initStripe(STRIPE_SECRET_KEY)
console.log("_________________________");
console.log(STRIPE_SECRET_KEY);
console.log("_________________________");

module.exports = {
    stripe
}
