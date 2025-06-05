import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleInc = () => {
    setCounter((counter) => counter + 1);
  };
  const handleDec = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div className="counter">
      <div className="value">{counter}</div>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
};
