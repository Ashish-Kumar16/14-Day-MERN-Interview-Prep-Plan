import React from "react";
import TodoItem from "./TodoItem";

const TodoList = React.memo(({ todos, toggleTodo, removeTodo }) => {
  return (
    <>
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))
      )}
    </>
  );
});

export default TodoList;
