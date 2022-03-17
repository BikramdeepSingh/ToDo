import { useState, useEffect } from "react";
// import "../styling/ToDo.scss";

function ToDo() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputHandler = (appendText) => {
    setInputText(appendText.target.value);
  };

  const ToDoHandler = (jobs) => {
    jobs.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        key: Math.random() * 100,
      },
    ]);
  };

  return (
    <div className="ToDo">
      <h2 className="heading">What's on your work list?</h2>
      <form action="#">
        <input value={inputText} onChange={inputHandler} type="text" />
        <button onClick={ToDoHandler}>Add Job</button>
      </form>

      <div className="todo_displayer">
        {todos.map(() => (
          <h2>{todos.text}</h2>
        ))}
      </div>

      <p>Job Count: {todos.length}</p>
    </div>
  );
}

export default ToDo;
