//Responsible for rendering a ToDo from the list

import { useState, useEffect } from "react";
import "../styling/Todo.scss";

function ToDo() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  const ToDoHandler = (jobs) => {
    jobs.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        key: todos.length + 1,
      },
    ]);
    setInputText("");
  };

  useEffect(() => {
    todos.map((todo) => {
      console.log(todo);
    });
  }, [todos]);

  return (
    <div className="ToDo">
      <div className="heading">
        <h2>What's on your work list?</h2>
      </div>

      <form action="#">
        <input value={inputText} onChange={inputHandler} type="text" />
        <button onClick={ToDoHandler} disabled={!inputText}>
          Add Job
        </button>
      </form>

      <div className="todo_displayer">
        {todos.map((todo) => (
          //console.log(todo);
          <h2>{todo.text}</h2>
        ))}
      </div>

      <p>Job Count: {todos.length}</p>
    </div>
  );
}

export default ToDo;
