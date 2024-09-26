import React, { useState } from "react";
import { TodoProvider, useTodo } from "./contexts/TodoContext";

function TodoItem({ todo }) {
  const { updateTodo,toggleComplete, deleteTodo } = useTodo();
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const [isInputReadOnly, setIsInputReadOnly] = useState(true);
  const toggle = () => {
    toggleComplete(todo.id)
  }
  return (
    <form action="">
      <div className="todo">
        <figure className="img-container">
          <img src={todo.image} alt="" />
        </figure>
        <div className="todo-input">
          <input
           type="checkbox"
            id="checkbox"
            checked={todo.isComplete}
            onChange ={toggle}
/>
          <input
            id="todo-box"
            type="text"
            readOnly={isInputReadOnly}
            value={todoMsg}
            onChange={(e) => {
              setTodoMsg(e.target.value);
            }}
            className={`${todo.isComplete ? "complete" : "not-complete"}`}
          />
          <div className="button-box">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsInputReadOnly(!isInputReadOnly);
                updateTodo({ ...todo, text:todoMsg }, todo.id);
              }}
              disabled={todo.isComplete}
            >
              {isInputReadOnly ? "✏️" : "👍🏻"}
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                deleteTodo(todo.id);
              }}
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    </form>
    
  );
}

export default TodoItem;
