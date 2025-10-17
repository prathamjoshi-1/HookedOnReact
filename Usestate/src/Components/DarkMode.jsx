const DarkMode = ({ darkMode, setDarkMode }) => {
  return (
    <div className="darkMode-toggle">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};
export default DarkMode;
