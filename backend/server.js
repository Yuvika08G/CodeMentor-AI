require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/run", async (req, res) => {
    try {
        const { code } = req.body;

        const response = await axios.post(
            "https://api.jdoodle.com/v1/execute",
            {
                script: code,
                language: "cpp17",
                versionIndex: "0",
                clientId: process.env.JDOODLE_CLIENT_ID,
                clientSecret: process.env.JDOODLE_CLIENT_SECRET
            }
        );

        res.json({ output: response.data.output });

    } catch (error) {
        console.log(error);
        res.json({ output: "Execution failed" });
    }
});


app.post("/analyze", async (req, res) => {
    try {
        const { code } = req.body;

        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.1-8b-instant",
                messages: [{
                    role: "user",
                    content: `Analyze this code like a coding mentor.

Respond in EXACTLY this format:
Bug: <one line>
Hint: <one line>
Suggestion: <one line>
Complexity: <one line>

Code:
${code}`
                }]
            },
            {
                headers: {
                    "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const text = response.data.choices[0].message.content;

        const bug = text.match(/Bug:\s*(.+)/)?.[1]?.trim() || "No bug found";
        const hint = text.match(/Hint:\s*(.+)/)?.[1]?.trim() || "No hint";
        const suggestion = text.match(/Suggestion:\s*(.+)/)?.[1]?.trim() || "No suggestion";
        const complexity = text.match(/Complexity:\s*(.+)/)?.[1]?.trim() || "Unknown";

        res.json({ bug, hint, suggestion, complexity });

    } catch (error) {
        console.log(error);
        res.json({ bug: "AI analysis failed", hint: "Check backend", suggestion: "Restart server", complexity: "-" });
    }
});

app.get("/", (req, res) => {
    res.send("CodeMentor AI Backend Running ");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
