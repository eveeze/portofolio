// app/dashboard/admin/chatbot/page.jsx

"use client"; // Ensure client-side rendering
import { useState, useEffect } from "react";

const ChatBotAdmin = () => {
  const [knowledgeContent, setKnowledgeContent] = useState("");
  const [knowledgeList, setKnowledgeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch existing knowledge entries
  useEffect(() => {
    fetchKnowledge();
  }, []);

  const fetchKnowledge = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/chatbot/knowledge/get", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch knowledge");
      }
      const data = await response.json();
      setKnowledgeList(data.knowledge);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/chatbot/knowledge/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: knowledgeContent }),
      });
      if (!response.ok) {
        throw new Error("Failed to add knowledge");
      }
      const newKnowledge = await response.json();
      setKnowledgeList([...knowledgeList, newKnowledge]);
      setKnowledgeContent("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/chatbot/knowledge/delete/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete knowledge");
      }
      setKnowledgeList(knowledgeList.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Chatbot Knowledge Management</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          value={knowledgeContent}
          onChange={(e) => setKnowledgeContent(e.target.value)}
          placeholder="Add knowledge content here..."
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add Knowledge</button>
      </form>

      <h2>Existing Knowledge</h2>
      <ul>
        {knowledgeList.map((item) => (
          <li key={item.id}>
            {item.content}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatBotAdmin;
