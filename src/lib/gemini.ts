import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GOOGLE_AI_STUDIO_KEY;

if (!API_KEY) {
    console.warn("GOOGLE_AI_STUDIO_KEY is not set in environment variables.");
}

const genAI = new GoogleGenerativeAI(API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

// Simple in-memory rate limiter (reset every minute)
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 15; // Conservative limit for free tier
let requestCount = 0;
let windowStart = Date.now();

function checkRateLimit(): boolean {
    const now = Date.now();
    if (now - windowStart > RATE_LIMIT_WINDOW) {
        requestCount = 0;
        windowStart = now;
    }

    if (requestCount >= MAX_REQUESTS_PER_WINDOW) {
        return false;
    }

    requestCount++;
    return true;
}

export interface ChatResponse {
    text: string;
    error?: string;
}

export async function generateChatResponse(
    userQuery: string,
    contextChunks: string[] = [] // RAG context to be added here
): Promise<ChatResponse> {
    if (!checkRateLimit()) {
        return {
            text: "",
            error: "Our free quota has been temporarily reached. Please try again in 5 minutes."
        };
    }

    try {
        // Construct prompt with context (RAG)
        const contextText = contextChunks.length > 0
            ? `\n\nContext:\n${contextChunks.join("\n\n")}`
            : "";

        const systemInstruction = `
You are a helpful assistant for newcomers to Canada. Use ONLY the retrieved context to answer the user's question precisely and simply. If the answer is not in the context, state that you do not have enough information.
`;

        const prompt = `${systemInstruction}\n\nUser Question: ${userQuery}${contextText}`;

        let retryCount = 0;
        const maxRetries = 3;
        let baseDelay = 2000; // 2 seconds

        while (true) {
            try {
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
                return { text };
            } catch (error: any) {
                const isQuotaError = error.message?.includes("429") ||
                    error.message?.toLowerCase().includes("quota") ||
                    error.status === 429;

                if (isQuotaError && retryCount < maxRetries) {
                    const delay = baseDelay * Math.pow(2, retryCount);
                    console.log(`Quota hit. Retrying in ${delay}ms... (Attempt ${retryCount + 1}/${maxRetries})`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    retryCount++;
                    continue;
                } else if (isQuotaError) {
                    return {
                        text: "",
                        error: "Our free quota has been temporarily reached. Please try again in 5 minutes."
                    };
                } else {
                    throw error; // Re-throw non-quota errors to be caught by outer block
                }
            }
        }
    } catch (error) {
        console.error("Error generating content with Gemini:", error);
        return {
            text: "",
            error: "An error occurred while processing your request."
        };
    }
}

export async function embedText(text: string): Promise<number[]> {
    try {
        const embeddingModel = genAI.getGenerativeModel({ model: "text-embedding-004" });
        const result = await embeddingModel.embedContent(text);
        const embedding = result.embedding;
        return embedding.values;
    } catch (error) {
        console.error("Error embedding text with Gemini:", error);
        throw error;
    }
}
