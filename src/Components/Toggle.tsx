import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h2>Status: {isOn ? "ON" : "OFF"}</h2>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
};

export default Toggle;

/* 
Explanation - 
The provided code is a simple React functional component written in TypeScript. It demonstrates the use of the useState hook to manage the state of a toggle switch. The component is named Toggle and it starts by importing the useState hook from the React library.

Within the Toggle component, a state variable isOn is declared using the useState hook, with an initial value of false. This state variable represents whether the toggle is in the "ON" or "OFF" state. The setIsOn function is used to update the value of isOn.

The component returns a JSX structure that includes a div element containing a h2 element and a button. The h2 element displays the current status of the toggle, showing "ON" if isOn is true and "OFF" if isOn is false. The button element has an onClick event handler that toggles the value of isOn between true and false each time the button is clicked.

Finally, the Toggle component is exported as the default export of the module, making it available for use in other parts of the application. This example is a practical demonstration of how to use the useState hook to manage component state in a React application.
*/
