import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./components/contexts/TodoContext";
import TodoItem from "./components/TodoItem";
import SearchTodo from "./components/SearchTodo";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

 
  const addTodo = (todo) => {
    
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    console.log("todo", todos);
    
  };
  const updateTodo = (todo, id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    console.log("id", id);
    setTodos((prev) =>
      prev.map((prevTodo) => {
      return (prevTodo.id == id
          ? {...prevTodo, isComplete:!prevTodo.isComplete}
          : prevTodo);
      })
    );
    console.log(todos)
  };



  
  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")));

  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="app">
        <h1 className="heading">Manage your Todo</h1>
        <SearchTodo />
        <div className="todos-container">
          {todos.length > 0 && todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
