import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const manageIncreasing = () => {
    setCounter(counter + 1);
  };
  const manageDecreasing = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1 data-cy="page-name">SANDBOX</h1>
      <p>
        State: <b>{counter}</b>
      </p>
      <div>
        <button onClick={manageIncreasing}>+</button>
      </div>
      <div>
        <button onClick={manageDecreasing}>-</button>
      </div>
    </>
  );
}

export default App;
