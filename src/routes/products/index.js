

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());
const consts = require("../../utils/consts");
const {
    createCheckoutSession,
    getProducts
} = require("../../controllers/products")

router.get("/getProducts", getProducts);

router.post("/create-checkout-session", createCheckoutSession);
module.exports = router;
