const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.options((req, res) => {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Accept, Origin, X-Requested-With, X-CSRF-Token"
    );

    // End the preflight request with a 200 OK status
    res.sendStatus(200);
});

router
    .route("/")
    .post((req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );
        res.setHeader(
            "Access-Control-Allow-Headers",
            "X-Requested-With,content-type"
        );

        console.log("");
        console.log(req.body);
        const payload = req.body;
        // console.log(payload);
        // console.log(
        //     "Post made to generations. Data: " + JSON.stringify(payload)
        // );

        const responses = [];
        // Fetch post request to breakdowns route to get the breakdown
        fetch("http://localhost:5000/breakdown", {
            method: "POST",
            headers: {
                "Content-Type": "application/text",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers":
                    "Content-Type, Accept, Origin, X-Requested-With, X-CSRF-Token",
            },
            body: JSON.stringify(payload),
            // body: JSON.stringify({ animal: "monkey" }),
        }).then((response) => {
            console.log(response);
            return response;
        });
        // .then((response) => {
        //     const readableStream = response.body;
        //     // var data = "";
        //     // readableStream.on("data", (chunk) => {
        //     //     data += chunk;
        //     // });
        //     // readableStream.on("end", () => {
        //     //     try {
        //     //         const jsonData = JSON.parse(data);
        //     //         console.log(jsonData);
        //     //     } catch (err) {
        //     //         console.error(err);
        //     //     }
        //     // });
        //     // console.log(response.body);

        //     return response.data;
        //     // return { hello: "ello" };
        // })
        // .then((data) => {
        //     console.log(data);
        //     const response = {
        //         message: "Success is painful",
        //         data: "Candt",
        //     };
        //     console.log("Generate Res body: " + JSON.stringify(response));
        //     res.json(response);
        //     res.end();
        // })
        // .catch((error) => {
        //     console.error(error);
        //     res.json({ message: "Error in generation" });
        // });
    })
    .get((req, res) => {
        console.log("Hello");
        res.send({ message: "Hello its me" });
    });

module.exports = router;
