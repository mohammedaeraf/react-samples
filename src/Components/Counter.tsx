import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Updated");
  }, []);

  return (
    <>
      <h2>Use State Demo using Counter</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h4>Counter Value: {count}</h4>
    </>
  );
}
export default Counter;
