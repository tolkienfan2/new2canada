import 'dotenv/config';
import { generateChatResponse, embedText } from '../src/lib/gemini';

async function testGemini() {
    console.log("Testing Gemini 2.5 Flash & Embedding...");

    const apiKey = process.env.GOOGLE_AI_STUDIO_KEY;
    if (!apiKey) {
        console.warn("WARNING: GOOGLE_AI_STUDIO_KEY not found in .env.");
    } else {
        console.log("API Key found.");
    }

    // Test Generation
    const userQuery = "What is the capital of Canada?";
    console.log(`\nSending query: "${userQuery}"`);
    const response = await generateChatResponse(userQuery);

    if (response.error) {
        console.error("Generation Error:", response.error);
    } else {
        console.log("Generation Response:", response.text);
    }

    // Test Embedding
    const textToEmbed = "Newcomers to Canada";
    console.log(`\nEmbedding text: "${textToEmbed}"`);
    try {
        const embedding = await embedText(textToEmbed);
        console.log(`Embedding generated. Length: ${embedding.length}`);
        console.log(`First 5 values: ${embedding.slice(0, 5)}`);
    } catch (error) {
        console.error("Embedding Error:", error);
    }
}

testGemini();
