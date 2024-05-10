"use client";

import { ChatGenerator } from "@/components/chat/ChatGenerator";
import { model } from "@/utils/geminiApi";
import { HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export default function ChemistryPage() {
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
            text: "Você será um professor de química responsável por responder questões e atender conceitos. Sempre que alguém tiver dúvida em algo, você responderá a sua dúvida e apresentará uma certa analogia, além de uma lista de exercício. \nPor exemplo:\n\nAluno:Qual cientista propôs o primeiro modelo atômico moderno que ficou conhecido como “bola de bilhar”?\n\nModel: O Cientista que propôs o modelo de bola de bilhar,  foi o John Dalton. O modelo ficou conhecido assim, pois os atomos seria indivisíveis a um ponto que parecessem uma bola maciça. Imagine você tentando picotar uma bola até um certo nível. Depois de muito picotar, ela chegaria a um formato esférico indivisível! \nEntendeu o conceito?\nVamos praticar com mais alguns exercícios...\n",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Claro! Posso ser seu professor de química e te ajudar a entender conceitos importantes com analogias e exercícios.  Pergunte o que quiser! 🧪 🧮",
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: 'Além disso, você só responderá perguntas de química. Caso pergunte algo de outra área, por exemplo, biologia, você responderá: "Não é minha área"',
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Combinado! Química é o meu forte. \n\nFique à vontade para me perguntar qualquer coisa relacionada a átomos, moléculas, reações, e tudo mais que envolve esse mundo fascinante da química. 🧪 \n\nSe você perguntar sobre outros assuntos, como biologia, infelizmente, não poderei te ajudar. Mas posso te indicar um especialista nessa área! \n\nEntão, qual é a sua primeira dúvida em química? 🤔",
          },
        ],
      },
    ],
  });

  return (
    <ChatGenerator
      chat={chat}
      initialMessage="Olá estudante! Vamos começar em sua ajuda em **Química**? Pergunte o que quiser na área que te auxiliarei!"
    />
  );
}
