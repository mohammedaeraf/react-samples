import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h2>Use State Demo using Counter</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h4>Counter Value: {count}</h4>
    </>
  );
}
export default Counter;
