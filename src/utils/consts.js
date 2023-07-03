const dotenv = require('dotenv');
dotenv.config();

const utils = {
    products: [
        {
            name: 'Test1',
            description: 'For small projects',
            prices: {
                amount: 10,
                priceIds: {
                    test: 'price_1NGMgrGgGPXWWCh5NQq8i5lw',
                    production: 'price_1N8WfxCv3sM26vDerkB8Tkmz',
                },
            }
        },
        {
            name: 'Test2',
            description: 'For small projects1',
            prices: {
                amount: 20,
                priceIds: {
                    test: 'price_1NGMgrGgGPXWWCh5NQq8i5lw',
                    production: 'price_1N8WfxCv3sM26vDerkB8Tkmz',
                },
            }
        },
    ],
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY??'',
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY??''
}

module.exports = utils;