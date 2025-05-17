import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
  padding: 16px;
  border-bottom: 1px solid #2f3336;
  background-color: black;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  background-color: #000;
  color: white;
`;

const Button = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  background-color: #1d9bf0;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #1a8cd8;
  }
`;

function TweetForm({ onPost }) {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    await axios.post("/api/tweets", { content });
    setContent("");
    if (onPost) onPost();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        rows="3"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening?"
      />
      <Button type="submit">Tweet</Button>
    </Form>
  );
}

export default TweetForm;
