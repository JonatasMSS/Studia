

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, ChatSession } from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


export const genAI = new GoogleGenerativeAI(API_KEY!);
export const model = genAI.getGenerativeModel({ model: MODEL_NAME });





export async function sendMessageToChat({ chatSession, msg }: { chatSession: ChatSession, msg: string }) {

    const result = await chatSession.sendMessage(msg);


    return {
        parts: [{ text: result.response.text() }],
        role: "model"
    }

}
