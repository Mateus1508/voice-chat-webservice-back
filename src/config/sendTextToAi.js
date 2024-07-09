require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const sendTextToAi = async (prompt) => {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
}

module.exports = sendTextToAi;