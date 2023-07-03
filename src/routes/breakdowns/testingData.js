// Form data shape:

// {
//     project_description: "",
//     team_description: "",
//     schedule_pacing: "",
//     stack_needs: "",
// }

const testingFormData_JSON = {
    project_description:
        "The project is a web-based platform for booking and managing short-term vacation rentals. It will allow homeowners to list their properties and set availability, pricing, and house rules. Guests will be able to search for and book properties, as well as leave reviews. The main objectives are to make the process more efficient and secure, and comply with local laws. Features include a calendar view, messaging system, and reviews. Constraints and assumptions include secure payment, internet access, and device use.",
    team_description:
        "The team size for this project will be small, consisting of 5-6 members with a range of skill levels. The team plans to do the majority of the work in-house, including design, development, testing, and deployment. However, they may outsource some specialized tasks such as security assessments or accessibility testing.",
    schedule_pacing:
        "The schedule pacing for this project will be well-paced, with a focus on quality and thorough testing. The team wants to ensure that the platform is reliable and easy to use, and will take the time needed to address any issues that arise.",
    stack_needs:
        "For the stack needs, the team plans to use a combination of front-end and back-end technologies. On the front-end, they will use a modern JavaScript framework such as React, along with HTML and CSS. On the back-end, they will use a language such as Python or Ruby, and a framework such as Django or Rails. They will also use a database to store user and property information, and a server to host the platform. The team will also consider using cloud services for hosting and scalability.",
};

// loop over each key in testingFormData and combine them all into a single string with double line breaks between each substring
const testingFormData_String = Object.keys(testingFormData_JSON).reduce(
    (acc, key) => {
        return acc + testingFormData_JSON[key] + "\n\n";
    },
    ""
);

module.exports = { testingFormData_JSON, testingFormData_String };
