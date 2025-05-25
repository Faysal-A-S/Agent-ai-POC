import React from "react";

interface Message {
  text: string;
  sender: "user" | "bot";
  isTyping?: boolean;
}

const useChatbot = () => {
  const [messages, setMessages] = React.useState<Message[]>([]);

  const sendMessage = async (message: string) => {
    const userMessage: Message = { text: message, sender: "user" };
    const typingPlaceholder: Message = {
      text: "",
      sender: "bot",
      isTyping: true,
    };
    setMessages((prev) => [...prev, userMessage, typingPlaceholder]);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4.1",
            messages: [
              ...[...messages, userMessage].map((msg) => ({
                role: msg.sender === "user" ? "user" : "assistant",
                content: msg.text,
              })),
            ],
          }),
        }
      );
      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "no response";
      setMessages((prev) => {
        const newMsgs = [...prev];
        const typingIndex = newMsgs.findIndex((m) => m.isTyping);
        if (typingIndex !== -1) {
          newMsgs[typingIndex] = { text: botReply, sender: "bot" };
        }
        return newMsgs;
      });
    } catch (error) {
      console.log(error);
    }
  };
  return { messages, sendMessage };
};

export default useChatbot;
