import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const intervalref = useRef(null);

<<<<<<< HEAD
  const [count, setCount] = useState(0);

  const start = () => {
    if (intervalref.current !== null) return;
=======
  const start = () => {
    if (intervalref.current !== null) return; // Prevent multiple timers
>>>>>>> 9d8ace08b6735bc5b2ce547cb3d67ca7d6b82171
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
<<<<<<< HEAD

      <button onClick={() => setCount(count + 1)}>Count {count}</button>
=======
>>>>>>> 9d8ace08b6735bc5b2ce547cb3d67ca7d6b82171
    </div>
  );
}
export default App;
