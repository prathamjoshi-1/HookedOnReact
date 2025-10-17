const Todoinput = ({ input, setInput, addTodo }) => {
  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter a todo's..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={addTodo}>Add</button>
    </div>
  );
};
export default Todoinput;
