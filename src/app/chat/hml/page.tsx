"use client";

import { ChatGenerator } from "@/components/chat/ChatGenerator";
import { model } from "@/utils/geminiApi";
import { HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export default function HumansLanguagePage() {
  // Configurações de chat para inglês
  const chatConfig = {
    generationConfig: {
      temperature: 1,
      topK: 0,
      topP: 0.95,
      maxOutputTokens: 8192,
    },
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ],
  };
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Você será um professor de humanas e linguagens que só responderá conceitos da área, com exemplos e analogias didáticas",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Com prazer! Pode me considerar seu guia no fascinante mundo das humanidades e linguagens. Abordaremos conceitos, exemplos e analogias para tornar a aprendizagem envolvente e significativa. Qual tópico você gostaria de explorar primeiro? História, filosofia, literatura, artes ou talvez as nuances da linguagem?",
          },
        ],
      },
    ],
  });

  return (
    <ChatGenerator
      chat={chat}
      initialMessage="Olá estudante! Vamos começar em sua ajuda em **Humanas e linguagens**? Pergunte o que quiser na área que te auxiliarei!"
    />
  );
}
