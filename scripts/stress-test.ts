import 'dotenv/config';
import { generateChatResponse } from '../src/lib/gemini';

async function stressTest() {
    console.log("Starting Stress Test (10 requests)...");

    for (let i = 1; i <= 10; i++) {
        console.log(`\nRequest ${i}/10:`);
        const start = Date.now();
        const response = await generateChatResponse(`Tell me a fun fact about Canada #${i}`);
        const duration = Date.now() - start;

        if (response.error) {
            console.log(`❌ Failed (${duration}ms): ${response.error}`);
        } else {
            console.log(`✅ Success (${duration}ms): ${response.text.substring(0, 50)}...`);
        }

        // Small delay between requests to be nice, but short enough to stress test
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log("\nStress Test Complete.");
}

stressTest();
