import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const intervalref = useRef(null);

  const [count, setCount] = useState(0);

  const start = () => {
    if (intervalref.current !== null) return;
    intervalref.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalref.current);
    intervalref.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <h1>StopWatch</h1>
      <h2>{time} s</h2>

      <div className="buttons">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>

      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}
export default App;
