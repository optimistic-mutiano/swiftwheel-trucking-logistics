
import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO } from "../constants";

// Fixed: Initialize GoogleGenAI strictly using process.env.API_KEY as per the guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the Swiftwheel AI Assistant for "Swiftwheel Trucking & Logistics Service".
Business Info:
- Location: ${BUSINESS_INFO.address}
- Phone: ${BUSINESS_INFO.phone}
- Hours: ${BUSINESS_INFO.hours.weekdays}, ${BUSINESS_INFO.hours.sunday}
- Services: General Freight, Perishable Goods, Sand & Granite Supply, Truck Hire.
- Area: Primarily operating in Lagos State, Nigeria (Lekki, Ajah, Sangotedo, etc).

Instructions:
1. Be professional, friendly, and helpful.
2. If asked about prices, explain that they vary based on distance and load, and suggest calling ${BUSINESS_INFO.phone} for an accurate quote.
3. If asked about location, tell them we are at Olokonla Bus Stop, Lekki-Epe Expressway.
4. Keep answers concise. Use Nigerian English nuances where appropriate (e.g., "Good day").
5. Always emphasize speed and reliability.
`;

export async function askAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Correct: Extracting the text directly from the .text property of GenerateContentResponse.
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I apologize, but I'm having trouble connecting right now. Please call us directly at " + BUSINESS_INFO.phone + " for assistance.";
  }
}
