"use client";

import { ChatSender } from "@/components/chat/ChatSender";
import Arrow from "@/assets/seta.svg";
import Image from "next/image";
import { ChatSession, Content } from "@google/generative-ai";
import { useEffect, useState } from "react";
import { sendMessageToChat } from "@/utils/geminiApi";
import { Loader } from "../Global/Loader";

type chatHistory = {
  role: string;
  parts: Array<{
    text: string;
  }>;
};

export const ChatGenerator = ({
  chat,
  initialMessage,
}: {
  chat: ChatSession;
  initialMessage: string;
}) => {
  const [localHistory, setLocalHistory] = useState<chatHistory[]>([
    { parts: [{ text: initialMessage }], role: "model" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSendText = () => {
    // Add to local history
    const newHistoryData: chatHistory[] = [
      {
        role: "user",
        parts: [{ text: inputValue }],
      },
    ];

    // Acrescentar o que falei
    setLocalHistory([...localHistory, ...newHistoryData]);
    // Send to API
    setInputValue("");
    setLoading(true);
    sendMessageToChat({ chatSession: chat, msg: inputValue })
      .then((result) => {
        newHistoryData.push(result);
        setLocalHistory([...localHistory, ...newHistoryData]);
        setLoading(false);
      })
      .catch((error) => {
        alert("Ocorreu um erro:" + error);
        setLoading(false);
      });
  };

  return (
    <main className="flex gap-10 p-12 flex-col overflow-auto  w-[60%] h-[500px] bg-Gourmete border-[1px] border-[#414F48] rounded-lg">
      <Chat chatHistory={localHistory} />

      {/* Input */}
      <div className="w-[44rem] fixed left-72 bottom-8 justify-between flex bg-[#161C19] rounded-full p-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          className="w-[90%] border-none font-light outline-none bg-transparent"
        />

        {isLoading ? (
          <div
            onClick={handleSendText}
            className="p-1 bg-Dark-gourmete rounded-full"
          >
            <Loader />
          </div>
        ) : (
          <button
            onClick={handleSendText}
            className="p-1 bg-Mint-white rounded-full"
          >
            <Image src={Arrow} alt="seta" />
          </button>
        )}
      </div>
    </main>
  );
};

// Componentes
const Chat = ({ chatHistory }: { chatHistory: chatHistory[] }) => {
  const chatList = chatHistory;

  return chatList.map((chat, i) => (
    <ChatSender key={i} msg={chat.parts[0].text} role={chat.role} />
  ));
};
