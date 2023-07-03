// const main_prompt = `
// ### Prompts (A. Generate the prompt outputs as nested pure JSON objects with double quoted keys. B. Then clean the output so it is valid json with no unexpected whitespace or escape characters)**

// answers: {
// Provide a quick summary of around 100 words for this project without starting with 'You want to build' in the following data shape:
// "quick_summary": {
// summary: <string>
// }

// }`;

// const main_prompt = `
// ### Prompts: Generate the answers for the output as nested pure JSON objects with double quoted key.  Then clean the output so it is valid json characters with no unexpected whitespace characters or backslashes, and output as one line)**
const main_prompt = `
# Instructions: Pretend you are a project planner having a dialogue to a client that is seeking answers and reccommendations for their group. Each of the prompts is one of their questions. Generate the answers for the output as nested pure JSON objects with double quoted keys, and all as one line. Then clean the output so it is a valid JSON object that can be parsed with JSON.parse. 
## Run a test to verify the JSON output has no errors and is valid. If there are any errors, correct them and rewrite the json.

{
        "project_meta_info": {
            "prompt": "Provide a one sentence summary of this project and a creative title (must include what the project is, ie. webapp, renovation, project, less than 4 words) for it",
            "title": <string>,
            "summary": <string>
        }
        "quick_summary": {
            "prompt": "Provide a quick summary of around 100 words for this project in a descriptive style starting with 'You want to build'",
            "data": <string>
        },
        "timeline": {
            "prompt": "Provide an realistic estimated timeline for this project and a breakdown for the reasoning behind it in an narrative dialogue format (less than 100 words)",
            "timeline": <string>,
            "reasoning": <string>
        },
        "budget": {
            "prompt": "Provide an estimated budget and reasoning in an narrative dialogue format (less than 60 words) for this project. Take any inhouse work into account",
            "budget": <float>,
            "reasoning": <string>
        },
        "teams": {
            "prompt": "Provide a list of the roles that will be needed to complete this project",
            "teams": [{
                "team_name": <string>,
                "team_members": <number>
            }]
        },
        "risk_analysis": {
            "prompt": "Provide an analysis of some risks and complexities that may arise during this project in an narrative dialogue format ",
            "reasoning": <string>
        },
        "tools_techniques": {
            "prompt": "Provide a list of tools and techniques that you would recommend for this project that were not mentioned in the context in an narrative dialogue format. Dont speak personally",
            "reasoning": <string>
        }
}
`;

module.exports = { main_prompt };
