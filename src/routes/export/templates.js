const templates = {
    breakdown: [
        { h3: "Breakdown: Scope Report" },
        { h1: "{project_meta_info.title}" },
        { p: "**TLDR**: {project_meta_info.summary}\n" },

        { h2: "Summary" },
        {p: "{quick_summary.data}",},

        { h2: "Estimated Timeline" },
        { p: "**ETA:** {timeline.timeline} days" },
        { p: "{timeline.reasoning}\n" },

        { h2: "Budget" },
        { p: "**Budget:** {budget.budget} dollars" },
        { p: "**Reasoning:** {budget.reasoning}\n" },

        { h2: "Teams & Roles" },
        { p: "{teams.teams}\n" },

        { h2: "Risk & Complexity Analysis" },
        { p: "{risk_analysis.reasoning}\n" },

        { h2: "Tools & Techniques" },
        { p: "{tools_techniques.reasoning}\n" },
    ],
};

module.exports = templates;
