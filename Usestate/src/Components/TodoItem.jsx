const TodoItem = ({
  todo,
  updateTodo,
  toggleTodo,
  toggleEdit,
  changePriority,
  deleteTodo,
}) => {
  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      {todo.edit ? (
        <input
          type="text"
          value={todo.text}
          onChange={(e) => updateTodo(todo.id, e.target.value)}
          autoFocus
        ></input>
      ) : (
        <span
          onClick={() => toggleTodo(todo.id)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color:
              todo.priority === "High"
                ? "red"
                : todo.priority === "Medium"
                ? "orange"
                : "green",
          }}
        >
          {todo.text}
        </span>
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
        {todo.edit ? "Save" : "Edit"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};
export default TodoItem;
