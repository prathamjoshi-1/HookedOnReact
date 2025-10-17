import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json()) // in this api network url is converted into javascript object in humman readable format
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })
      .catch(() => {
        setJoke({ setup: "Oops!", punchline: "Failed! to joke." });
        setLoading(false);
      });
  }, [count]);

  return (
    <div className="app">
      <h1>Random Joke Generator</h1>

      {/* means if loading state is true then show that paragraph */}

      {loading && <p>Loading...</p>}

      {/* means if Joke state is true then show that paragraph */}

      {joke && (
        <div className="joke-card">
          <p>
            <strong>{joke.setup}</strong>
          </p>
          <p>{joke.punchline}</p>
        </div>
      )}

      <button onClick={() => setCount(count + 1)}>Get New Joke</button>
    </div>
  );
}
export default App;
