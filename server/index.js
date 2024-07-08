const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

generation_config = {
  temperature: 1,
  top_p: 0.95,
  top_k: 64,
  max_output_tokens: 8192,
  response_mime_type: "application/json",
};

let model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: generation_config,
});

app.post("/level1", async (req, res) => {
  const { theme, targetLanguage, difficulty } = req.body;
  let prompt = `
  Generate 4 questions for a language learning game that takes place at a ${theme}, where the target language is ${targetLanguage} and the difficulty level is ${difficulty}. The scenario is presented in English and should involve a common situation. The answer choices should be three common nouns, one of which is the correct answer.
  Using this JSON schema:
  { "type": "object",
    "properties": {
        "scenario": { "type": "string" },
        "answer_choices": { "type": ["string"] },
        "correct_answer": { "type": "string" },
        "correct_answer_english": { "type": "string" },
    }
  }`;
  let result = await model.generateContent(prompt)
  res.json({ response: result.response.text() })
});

app.post("/level2", async (req, res) => {
    const { theme, targetLanguage, difficulty } = req.body;
    let prompt = `
    Generate 4 questions for a language learning game that takes place at a ${theme}, where the target language is ${targetLanguage} and the difficulty level is ${difficulty}. The question should ask to spell a common English word in ${targetLanguage}.
    Using this JSON schema:
    { "type": "object",
      "properties": {
          "scenario": { "type": "string" },
          "correct_answer": { "type": "string" },
          "correct_answer_english": { "type": "string" },
      }
    }`;
    let result = await model.generateContent(prompt)
    res.json({ response: result.response.text() })
});

app.post("/level3", async (req, res) => {
    const { theme, targetLanguage, difficulty } = req.body;
    let prompt = `
    Generate 4 questions for a language learning game that takes place at a ${theme}, where the target language is ${targetLanguage} and the difficulty level is ${difficulty}. The scenario is presented in ${targetLanguage} should be a sentence involving a common situation, where one of the nouns in the sentence is blank. The answer choices should be three common nouns, one of which is the correct answer.
    Using this JSON schema:
    { "type": "object",
      "properties": {
          "scenario": { "type": "string" },
          "answer_choices": { "type": ["string"] },
          "correct_answer": { "type": "string" },
          "correct_answer_english": { "type": "string" },
      }
    }`;
    let result = await model.generateContent(prompt)
    res.json({ response: result.response.text() })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
