import React from "react";

export default function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      </label>
      <button onClick={() => removeTodo(todo.id)}>❌</button>
      <br />
    </>
  );
}
