import 'dotenv/config';
import { generateChatResponse } from '../src/lib/gemini';

async function testGemini() {
    console.log("Testing Gemini API Wrapper...");

    const apiKey = process.env.GOOGLE_AI_STUDIO_KEY;
    if (!apiKey) {
        console.warn("WARNING: GOOGLE_AI_STUDIO_KEY not found in .env. Test will likely fail or use mock if implemented.");
    } else {
        console.log("API Key found.");
    }

    const userQuery = "What is the capital of Canada?";
    console.log(`\nSending query: "${userQuery}"`);

    const response = await generateChatResponse(userQuery);

    if (response.error) {
        console.error("Error received:", response.error);
    } else {
        console.log("Response received:");
        console.log(response.text);
    }
}

testGemini();
