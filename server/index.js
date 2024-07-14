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

app.post("/schoollevel1", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `
  Generate 5 questions for a language learning game that takes place at a school, where the target language is ${targetLanguage} and the first two questions are easy, the next two questions are medium, and the last question is hard. The scenario is presented in English and should involve a common situation. The answer choices should be three common nouns, one of which is the correct answer.
  Using this JSON schema:
  {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "scenario": { "type": "string" },
      "answer_choices": {
        "type": "array",
        "items": { "type": "string" }
      },
      "correct_answer": { "type": "string" },
      "correct_answer_english": { "type": "string" }
    },
    "required": ["scenario", "answer_choices", "correct_answer", "correct_answer_english"]
  }
}`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/schoollevel2", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `
    Generate 5 questions for a language learning game that takes place at a school, where the target language is ${targetLanguage} and the first two questions are easy, the next two questions are medium, and the last question is hard. The question should ask to spell a common English word in ${targetLanguage}.
    Using this JSON schema:
      Question = {"scenario": "string", "correct_answer": "string", "correct_answer_english": "string"}
  Return a list[Question]
    `;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/schoollevel3", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `
    Generate 5 questions for a language learning game that takes place at a school, where the target language is ${targetLanguage} and the first two questions are easy, the next two questions are medium, and the last question is hard. The scenario is presented in ${targetLanguage} should be a sentence involving a common situation, where one of the nouns in the sentence is blank. The answer choices should be three common nouns, one of which is the correct answer.
    Using this JSON schema:
      Question = {"scenario": "string", "answer_choices": ["string"], "correct_answer": "string", "correct_answer_english": "string"}
  Return a list[Question]
    `;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/schoollevel4", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `
    Generate 5 questions for a language learning game that takes place at a school, where the target language is ${targetLanguage} and the first two questions are easy, the next two questions are medium, and the last question is hard. The scenario is presented in ${targetLanguage} should be a sentence involving a common situation, where one of the nouns in the sentence is blank. The scenario is presented in English and should involve a common situation. The answer choices should be three verbs in present tense, one of which is the correct conjugation.
    Using this JSON schema:
      Question = {"scenario": "string", "answer_choices": ["string"], "correct_answer": "string", "correct_answer_english": "string"}
  Return a list[Question]
    `;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/grocerylevel5", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a grocery store, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The question should ask to translate a simple English sentence into ${targetLanguage}.
    Using this JSON schema:
        Question = {{"scenario": "string", "correct_answer": "string", "correct_answer_english": "string"}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/grocerylevel6", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a grocery store, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The scenario is presented in ${targetLanguage} and should be a sentence involving a common situation with a blank space for a missing word. The answer choices should be three words, one of which is the correct answer.
    Using this JSON schema:
        Question = {{"scenario": "string", "answer_choices": ["string"], "correct_answer": "string", "correct_answer_english": "string"}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/grocerylevel7", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a grocery store, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The scenario is presented in English and should involve a common situation. The answer choices should be three verbs in past tense, one of which is the correct conjugation.
    Using this JSON schema:
        Question = {{"scenario": "string", "answer_choices": ["string"], "correct_answer": "string", "correct_answer_english": "string"}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/grocerylevel8", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a grocery store, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The question should ask to translate a complex English sentence into ${targetLanguage}.
    Using this JSON schema:
        Question = {{"scenario": "string", "correct_answer": "string", "correct_answer_english": "string"}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/bakerylevel9", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a bakery, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The scenario should involve matching a word in English with its corresponding word in ${targetLanguage}.
    Using this JSON schema:
        Question = {{"scenario": str, "answer_choices": list[str], "correct_answer": str, "correct_answer_english": str}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/bakerylevel10", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a bakery, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The scenario is presented in ${targetLanguage} and involves a sentence with a missing vocabulary word. The answer choices should be three words, one of which fits the context.
    Using this JSON schema:
        Question = {{"scenario": str, "answer_choices": list[str], "correct_answer": str, "correct_answer_english": str}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/bakerylevel11", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a bakery, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The scenario is presented in English and should involve a common situation. The answer choices should be three verbs in future tense, one of which is the correct conjugation.
    Using this JSON schema:
        Question = {{"scenario": str, "answer_choices": list[str], "correct_answer": str, "correct_answer_english": str}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/bakerylevel12", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a bakery, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The scenario is presented in ${targetLanguage} and involves a sentence with a grammatical error. The answer choices should be three corrected sentences, one of which is correct.
    Using this JSON schema:
        Question = {{"scenario": str, "answer_choices": list[str], "correct_answer": str, "correct_answer_english": str}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/beachlevel13", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a beach, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The scenario is a dialogue in ${targetLanguage} with missing phrases. The answer choices should be three phrases, one of which correctly completes the dialogue.
    Using this JSON schema:
        Question = {{"scenario": str, "answer_choices": list[str], "correct_answer": str, "correct_answer_english": str}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/beachlevel14", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a beach, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The question should ask to translate a short English paragraph into ${targetLanguage}.
    Using this JSON schema:
        Question = {{"scenario": str, "correct_answer": str, "correct_answer_english": str}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/beachlevel15", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a beach, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The scenario is presented in ${targetLanguage} and involves a sentence or short paragraph that includes cultural references. The answer choices should be three culturally relevant terms, one of which is correct.
    Using this JSON schema:
        Question = {{"scenario": str, "answer_choices": list[str], "correct_answer": str, "correct_answer_english": str}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.post("/beachlevel16", async (req, res) => {
  const { targetLanguage } = req.body;
  let prompt = `Generate 5 questions for a language learning game that takes place at a beach, where the target language is ${targetLanguage}. The first two questions should be easy, the next two questions should be medium, and the last question should be hard. The scenario is a short passage in ${targetLanguage} with questions testing comprehension. The answer choices should be three sentences, one of which correctly answers the question based on the passage.
    Using this JSON schema:
        Question = {{"scenario": str, "answer_choices": list[str], "correct_answer": str, "correct_answer_english": str}}
    Return a list[Question]`;
  let result = await model.generateContent(prompt);
  res.json(result.response.text());
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
