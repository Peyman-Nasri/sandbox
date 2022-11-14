import Counter from "./Counter";
import Buttons from "./Buttons";
import { useState } from "react";

function Main() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Counter counter={counter} />
      <Buttons counter={counter} setCounter={setCounter} />
    </>
  );
}

export default Main;
