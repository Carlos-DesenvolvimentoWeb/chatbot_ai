import React, { useState, useRef, useEffect } from "react";
import { sendMessage } from "../api";
import "./ChatBox.css";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll automático para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendMessage(input);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Erro ao conectar com a IA." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender}-msg`}>
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="message bot-msg thinking">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span style={{ marginLeft: "8px" }}>Pensando...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-area">
          <input
            type="text"
            className="form-input"
            value={input}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="btn-send" onClick={handleSend}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
