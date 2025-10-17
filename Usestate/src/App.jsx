import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todoinput from "./Components/Todoinput";
import Filter from "./Components/Filter";
import Count from "./Components/Count";
import DarkMode from "./Components/DarkMode";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add Todo
  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false, // track completed
      edit: false, //track edit
      priority: "Medium", //default value~
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //toggle Todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //toggle edit
  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
  };

  //Update todo
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  //change Priority
  const changePriority = (id, newPriority) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, priority: newPriority } : todo
      )
    );
  };

  //Filters state
  const [filter, setFilter] = useState("All");

  //Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  //add filters
  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
  });

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <h1>Todo App</h1>

      <Todoinput
        input={input}
        setInput={setInput}
        addTodo={addTodo}
      ></Todoinput>

      <Filter setFilter={setFilter}></Filter>

      <ul className="todoList">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            toggleTodo={toggleTodo}
            toggleEdit={toggleEdit}
            changePriority={changePriority}
            deleteTodo={deleteTodo}
          ></TodoItem>
        ))}
      </ul>

      <Count todos={todos}></Count>
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}></DarkMode>
    </div>
  );
}
export default App;
