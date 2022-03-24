import React from "react";
import "../styling/Todo.scss";
import CompletionStatus from "./CompletionStatus";

export default function Todo({ todos, setTodos, todo }) {
  //importing props
  const DeleteTodo = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Todo">
      <div className="todoText">
        <h2>{todo.text}</h2>
      </div>
      <div className="altering_todos">
        {/* <button>✅</button> */}
        <button classonClick={DeleteTodo}>🗑️</button>
      </div>
      <CompletionStatus />
    </div>
  );
}
