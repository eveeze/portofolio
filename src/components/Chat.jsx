"use client";

// components/Chat.jsx

import { useEffect } from "react";

const Chat = () => {
  useEffect(() => {
    // Setting up the configuration for the chatbot
    window.embeddedChatbotConfig = {
      chatbotId: "-0gMyOkOr3UIHcVc4CdQy",
      domain: "www.chatbase.co",
    };

    // Creating a script element to embed the chatbot
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", "-0gMyOkOr3UIHcVc4CdQy");
    script.setAttribute("domain", "www.chatbase.co");
    script.defer = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="fixed bottom-5 right-5 p-4 bg-lightGray rounded-neumorphism shadow-neumorphism-light cursor-pointer"
      style={{
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => {
        // Logic to open the chat when clicked, if needed
      }}
    ></div>
  );
};

export default Chat;
