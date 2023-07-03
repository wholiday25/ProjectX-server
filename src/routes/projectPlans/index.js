// Contains all the routes for project breakdowns

const fs = require("fs");
const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use("/breakdown", bodyParser.json());
// Utils
const { generateQuery, combineContext } = require("../utils");
// OPENAI
const { createOpenAIClient } = require("../../openai-client");

// ROUTES

router.post("/", async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // console.log(JSON.stringify(req.body));
    const formPayload = req.body.text;
    // console.log(formPayload)
    const { main_prompt } = require("./prompts.js");

    try {
        var context = "# Context:\n " + formPayload;
        // console.log(combinedContext);
        const prompt = context + main_prompt + "\n";

        const output = await generateQuery(prompt)
            .then((choices) => {
                // console.log("Choices Text:\n\n", choices[0].text);
                return choices[0].text;
            })
            .then((text) => {
                text = text.trim();
                // console.log("Trimmed Text", text);
                if (text[0] != "{") {
                    text = "{" + text;
                }
                if (text[text.length - 1] != "}") {
                    text = text + "}";
                }
                // console.log("Text format", text);
                var y = JSON.parse(text);
                // console.log("JSON Stringified from JSON", JSON.stringify(y));

                return y;
            });

        res.status(200).json(output);
    } catch (error) {
        res.status(500).json({
            message: `Something went wrong + \n ${error}`,
        });
    }
});

module.exports = router;
