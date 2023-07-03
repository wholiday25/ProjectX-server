// Contains all the routes for project breakdowns

const fs = require("fs");
const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

const json2md = require("json2md");
const convertToMarkdown = require("./markdown-converter");
const templates = require("./templates");

// ROUTES
router.post("/md/:templateType", (req, res) => {
    const templateType = req.params.templateType;
    // console.log(templateType);
    const jsonData = req.body;
    // console.log(jsonData);

    try {
        const md = convertToMarkdown(templates[templateType], jsonData);
        console.log(md)
        
        res.attachment(`px_export_${templateType}.md`);
        res.set('Content-Type', 'text/plain')
        res.send(md);
    } catch (error) {
        console.log("failed");
        res.status(400).send(error);
    }

    // const md = convertToMarkdown(templates["breakdown"], jsonData);
    // res.attachment(`px_export_${templateType}.md`);
    // res.send(md);
});

module.exports = router;
