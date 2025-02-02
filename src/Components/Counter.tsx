import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;


/*
Explanation

The provided code is a React functional component written in TypeScript, named Counter. This component demonstrates the use of the useState hook to manage a simple counter state.

At the beginning of the file, the useState hook is imported from the React library. The Counter component is then defined as a function. Inside this function, the useState hook is used to declare a state variable count with an initial value of 0. The setCount function is provided by the useState hook to update the value of count.

The component returns a JSX structure that includes a div element containing a h2 element and a button. The h2 element displays the current value of the count state variable. The button element has an onClick event handler that increments the value of count by 1 each time the button is clicked. This is achieved by calling the setCount function with the new value count + 1.

Finally, the Counter component is exported as the default export of the module, making it available for use in other parts of the application. This example illustrates how to use the useState hook to manage and update state within a React functional component, providing a simple counter functionality.


*/
