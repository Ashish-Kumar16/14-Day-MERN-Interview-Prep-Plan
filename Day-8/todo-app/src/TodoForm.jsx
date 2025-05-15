import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setError(value.trim() === "" ? "Todo cannot be empty" : "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return setError("Todo cannot be empty");
    addTodo(input.trim());
    setInput("");
    setError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
