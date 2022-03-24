import React from "react";
import Todo from "./ToDo";

function CompletionStatus() {
  const for_todos = ReactDOM.findDOMNode(<Todo />).getElementsByClassName(
    ".Todo"
  ); // Returns the elements

  for_todos.forEach((todo) =>
    todo.addEventListener("click", () => {
      let text = todo.childNodes[1];

      if (text.classList.contains("completed")) {
        text.classList.remove("completed");
        return;
      }

      text.classList.add("completed");
    })
  );
}

export default CompletionStatus;
