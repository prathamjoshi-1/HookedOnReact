import { useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add new todo
  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      priority: "Medium",
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // Toggle completed
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle edit mode
  const toggleEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Update todo text
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  };

  // Change priority
  const changePriority = (id, newPriority) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, priority: newPriority } : todo
      )
    );
  };

  // Filter state
  const [filter, setFilter] = useState("All");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Completed") return todo.completed;
    if (filter === "Pending") return !todo.completed;
  });

  // Dark mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <h1>Todo App (useState only)</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.isEditing ? (
              <input
                type="text"
                defaultValue={todo.text}
                onBlur={(e) => updateTodo(todo.id, e.target.value)}
                autoFocus
              />
            ) : (
              <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            )}

            <select
              value={todo.priority}
              onChange={(e) => changePriority(todo.id, e.target.value)}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <button onClick={() => toggleEdit(todo.id)}>
              {todo.isEditing ? "Save" : "Edit"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div className="filter-section">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
      </div>

      <div className="count">
        Total: {todos.length} | Completed:{" "}
        {todos.filter((t) => t.completed).length} | Pending:{" "}
        {todos.filter((t) => !t.completed).length}
      </div>

      <div className="darkmode-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}
