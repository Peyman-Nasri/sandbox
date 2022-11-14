import React from "react";

function Buttons({ counter, setCounter }) {
  return (
    <>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </>
  );
}

export default Buttons;
