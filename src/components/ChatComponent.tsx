import React from "react";
import { LuSendHorizontal } from "react-icons/lu";
import useChatbot from "../hooks/useChatbot";
import TypingIndicator from "./TypingIndicator";

const ChatComponent = () => {
  const [inputValue, setInputValue] = React.useState("");
  const { messages, sendMessage } = useChatbot();
  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);

  const handleSend = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-[80vh] bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="flex justify-center p-4 bg-blue-100 dark:bg-gray-800 text-blue-900 dark:text-white font-bold">
        <h2>AI Chatbot</h2>
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto h-auto my-2 px-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`px-3 py-1.5 my-2 md:my-1 rounded-lg max-w-xs ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white"
            }`}
          >
            {msg.isTyping ? <TypingIndicator /> : <div>{msg.text}</div>}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-gray-100 dark:bg-gray-800 flex gap-2">
        <input
          type="text"
          value={inputValue}
          placeholder="Type your message here..."
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 p-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
        />
        <button
          onClick={handleSend}
          className="cursor-pointer p-2 bg-blue-500 transition-all duration-200 hover:bg-blue-600 text-white rounded-lg"
        >
          <LuSendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
