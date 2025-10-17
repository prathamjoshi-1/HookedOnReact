const Filter = ({ setFilter }) => {
  return (
    <div className="filter-section">
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("completed")}>completed</button>
      <button onClick={() => setFilter("pending")}>pending</button>
    </div>
  );
};
export default Filter;
