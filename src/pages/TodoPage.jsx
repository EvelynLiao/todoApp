import React, { useEffect, useState } from "react";
import Intro from "../component/Intro";
import DoneImg from "../assets/doneImg.png";

const TodoPage = () => {
  //set variable
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [inputText, setInputText] = useState("");
  const [allCompleted, setAllCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
    checkAllCompleted();
  }, [todo]);

  //functions
  const checkAllCompleted = () => {
    const allCompleted = todo.every((todo) => todo.completed);
    setAllCompleted(allCompleted);
  };

  const addTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo = { id: Date.now(), text: inputText, completed: false }; // generate special id using Date.now()
      // console.log('newTodo id: ', newTodo.id)
      setTodo([...todo, newTodo]);
      setInputText("");
    }
  };

  // Toggle task completion status
  const toggleTodo = (id) => {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodo(updatedTodo);
  };

  const removeTodo = (id) => {
    const updatedTodo = todo.filter((item) => item.id !== id); //remove task with specil id
    setTodo(updatedTodo);
  };

  return (
    <>
      <div className="land-container">
        <Intro
          title="Let's get thing done!"
          subtitle="Write done your to-do tasks and transform them into a triumphant 'tada!' moments! "
        />
      </div>

      <div className="todo-container">
        <div className="todo-title">Things to do</div>

        <div className="todo-section">
          <input
            className="todo-input"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button onClick={addTodo}>Add</button>
        </div>

        <div className="todo-list">
          {/* Render todo item to todo list */}
          {todo.map((todoItem) => (
            <div key={todoItem.id} className="todo">
              <input
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => toggleTodo(todoItem.id)}
              />
              <span className={todoItem.completed ? "completed" : ""}>
                {todoItem.text}
              </span>
              <button onClick={() => removeTodo(todoItem.id)}>x</button>
            </div>
          ))}
        </div>
        {allCompleted && (
          <div>
            <p className="todo-done">TaDa!! Everything are done!</p>
            <img className="done-img" src={DoneImg} alt="done-img" />
          </div>
        )}
      </div>
    </>
  );
};

export default TodoPage;
