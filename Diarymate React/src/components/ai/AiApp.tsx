import React from 'react'
import { useRef, useState, useEffect } from "react";
import { sendMsgToOpenAI } from './Openai';

export interface Message {
  text?: string;
  isBot: boolean;
}

const AiApp = () => {
  const msgEnd = useRef(null);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      text: "hi, I am ChatGPT, a...",
      isBot: true,
    },
  ]);

  useEffect(() => {
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([...messages, { text, isBot: false }]);
    const res = await sendMsgToOpenAI(text);
    if (res && res.message && res.message.content) {
      setMessages([
        ...messages,
        { text: res.message.content, isBot: true },
      ]);
    }

  };
  const handleQuery = async (text) => {
    setInput("");
    setMessages([...messages, { text, isBot: false }]);
    const res = await sendMsgToOpenAI(text);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: res, isBot: true },
    ]);
  };
  return (
    <div className="App">
      <button
        className="midBtn"
        onClick={() => {
          window.location.reload();
        }}
      >
      </button>
      <div className="main">
        <input
          type="text"
          placeholder="Send a message"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="send" onClick={handleSend}>
        </button>
      </div>
    </div>
  );
}

export default AiApp
