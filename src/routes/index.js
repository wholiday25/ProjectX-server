const express = require("express");
const mainRouter = express.Router();
const app = express();
require('dotenv').config();

// router.use('/webapp', require('./webapp/index.js'))
mainRouter.use("/breakdown", require("./breakdowns/index.js"));
mainRouter.use("/projectPlan", require("./projectPlans/index.js"));

// Export Routers

mainRouter.use("/export", require("./export/index.js"));
// router.use('/projectPlans', require('./projectPlans/index.js'))

// //test route
mainRouter.get("/", (req, res) => {
    res.send("Hello World!");
});
// stripe
const stripe =require("./products")
mainRouter.use("/products", stripe);

// webhook
mainRouter.use("/webhooks", require("./webhook/index.js"));
module.exports = mainRouter;
