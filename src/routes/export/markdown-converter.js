const json2md = require("json2md");

// Main function
function convertToMarkdown(templateData, objectData) {
    // console.log("Replacing data");
    let data = replacePlaceholders(templateData, objectData);
    let md = json2md(data);
    return md;
}

//Function 1
function replacePlaceholders(templateData, objectData) {
    try {
        // // console.log(templateData)
        templateData.forEach((object) => {
            let placeholders = [];
            let key = Object.keys(object)[0];
            let value = object[key];
            let matches = value.match(/{(.*?)}/g);

            if (matches) {
                placeholders = placeholders.concat(
                    matches.map((match) => match.slice(1, -1))
                );
                let results = function2(placeholders, objectData);

                placeholders.forEach((placeholder, index) => {
                    object[key] = object[key].replace(
                        `{${placeholder}}`,
                        results[index]
                    );
                });
            }
        });
        console.log("#Updated TemplateData Object:\n\n", templateData);

        return templateData;
    } catch {
        return "JSON replacements failed";
    }
}

function function2(placeholderArray, objectData) {
    let results = [];
    placeholderArray.forEach((placeholder) => {
        let keys = placeholder.split(".");
        let value = objectData;
        keys.forEach((key) => {
            value = value[key];
        });
        if (typeof value === "object") {
            value = JSON.stringify(value);
        }
        results.push(value);
    });

    // console.log("   Results: ", results);

    return results;
}

module.exports = convertToMarkdown;
