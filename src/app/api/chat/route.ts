import { NextResponse } from 'next/server';
import { generateChatResponse } from '@/lib/gemini';

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: 'Message is required' },
                { status: 400 }
            );
        }

        // TODO: In a real implementation, we would retrieve context chunks here
        // based on the user's message using a vector database.
        // For now, we'll pass an empty array or mock context.
        const mockContext: string[] = [];

        const response = await generateChatResponse(message, mockContext);

        if (response.error) {
            return NextResponse.json(
                { error: response.error },
                { status: 429 } // Or 500 depending on the error
            );
        }

        return NextResponse.json({ response: response.text });
    } catch (error) {
        console.error('Error in chat API:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
