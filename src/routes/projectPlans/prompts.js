const main_prompt = `
# Instructions: Pretend your a scrum master responsible for putting together a master agile project plan for a new project. Generate a project plan for a new project (including phases, epics, and tickets) with the answers for the output as nested pure JSON objects with double quoted keys, and all as one line. Then check the generated text and clean the output so it is 100% correct and valid JSON data that can be parsed with JSON.parse. 
## Run a test to verify the JSON output has no errors and is valid. If there are any errors, correct them and rewrite the json.

{
    "prompt": "Generate phases for the project",
    "phases": [
        {
            "phase_name": <string>,
            "phase_number": <integer>,
            "epics": [
                {
                    "epic_name": <string>,
                    "epic_number": <integer>,
                    "epic_description": <string>,
                    "tickets": [
                        {
                            "ticket_name": <string>,
                            "eta_days": <integer>
                        }
                    ]
                }
            ]
        }
    ]
}

`;
module.exports = { main_prompt };
