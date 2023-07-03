// Middleware imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const openai = require("./openai-client");
const port = process.env.PORT || 5000;
// const REACT_APP_FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";



app.use(cors());
app.use(cors(
    // {origin: ["https://projectxlabs.com", "https://www.projectxlabs.com", "http://localhost:3000"]}
    {origin: "*"}
));
app.options("*", cors());

// ROUTES
// ****************************************************
const mainRouter = require("../src/routes");
app.use("/api", mainRouter);
app.use(express.json());
module.exports = {
    start: () => {
        const port = process.env.PORT || 5000;

        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });
    },
};

