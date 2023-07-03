const { createOpenAIClient } = require("../openai-client");
const fs = require("fs");
const path = require("path");

// METHODS
// Combine prompt and context from filepath
async function combineContext(fileName, formContext) {
    // Read context from context.txt into variable context

    const filePath = path.join(__dirname, fileName);
    const context = await fs.promises
        .readFile(filePath, "utf8")
        .catch((error) => {
            console.log(error);
        });
    const combinedContext = context + formContext;
    return combinedContext;
}

async function generateQuery(prompt, temperature = 0.3, max_tokens = 1500) {
    try {
        console.log("Making request");
        const openai = createOpenAIClient();
        console.log("Progress A");
        // const answer = "Hello";
        const answer = await openai
            .createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                max_tokens: max_tokens,
                temperature: temperature,
            })
            .then((response) => {
                console.log("Progress B\n AI Response Received");
                return response.data;
            })
            .then((data) => {
                // console.log("Data", data);
                console.log("AI Choices Data Extracted from Response");
                // console.log("Data.choices: \n\n", data.choices);
                return data.choices;
            });

        return answer;
    } catch (error) {
        console.log("Error in query request: " + error);
        return error;
    }
}

async function generateCodexQuery(prompt, temperature = 0) {
    try {
        console.log("Making request");
        const openai = createOpenAIClient();
        console.log("Progress A");
        // const answer = "Hello";
        const answer = await openai
            .createCompletion({
                model: "code-davinci-002",
                prompt: prompt + "\n#Output:\n",
                max_tokens: 900,
                temperature: temperature,
            })
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                return JSON.stringify(data.choices);
            });

        return answer;
    } catch (error) {
        console.log("Error in query request: " + error);
        return error;
    }
}

module.exports = { generateQuery, combineContext };
