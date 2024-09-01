// app/dashboard/admin/chatbot/page.jsx

"use client"; // Ensure client-side rendering
import { useState, useEffect } from "react";

const ChatBotAdmin = () => {
  const [knowledgeContent, setKnowledgeContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch existing knowledge entry on component mount
  useEffect(() => {
    fetchKnowledge();
  }, []);

  const fetchKnowledge = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/chatbot/knowledge", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch knowledge");
      }
      const data = await response.json();
      const combinedContent = data.map((item) => item.content).join("\n");
      setKnowledgeContent(combinedContent);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/chatbot/knowledge/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: knowledgeContent.trim() }),
      });

      if (!response.ok) {
        throw new Error("Failed to update knowledge");
      }

      const result = await response.json();
      if (knowledgeContent.trim() === "") {
        alert("Knowledge deleted successfully");
      } else {
        alert("Knowledge updated successfully");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-white">Chatbot Knowledge Management</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSave}>
        <textarea
          value={knowledgeContent}
          onChange={(e) => setKnowledgeContent(e.target.value)}
          placeholder="Edit knowledge content here..."
          rows="20"
          cols="80"
        ></textarea>
        <button type="submit" className="text-white">
          Save Knowledge
        </button>
      </form>
    </div>
  );
};

export default ChatBotAdmin;
