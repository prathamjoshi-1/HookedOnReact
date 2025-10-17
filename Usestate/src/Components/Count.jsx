const Count = ({ todos }) => {
  return (
    <div className="count">
      <div className="box">
        Total: {todos.length} | Completed:{" "}
        {todos.filter((t) => t.completed).length} | Pending:{" "}
        {todos.filter((t) => !t.completed).length}
      </div>
    </div>
  );
};
export default Count;
