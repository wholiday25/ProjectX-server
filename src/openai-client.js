const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

function createOpenAIClient() {
  const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
  });
  return new OpenAIApi(configuration);
}

module.exports = { createOpenAIClient };
