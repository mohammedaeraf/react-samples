import { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("Your name");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          console.log("Value entered in textbox =>" + event.target.value);
          setName(event.target.value);
          console.log(event);
        }}
        placeholder="Enter your name"
      />
      <p>Your name: {name}</p>
    </div>
  );
};

export default NameInput;

/*
The provided code is a React functional component written in TypeScript, named NameInput. This component demonstrates the use of the useState hook to manage the state of a text input field. The useState hook is imported from the React library at the beginning of the file.

Within the NameInput component, the useState hook is used to declare a state variable name with an initial value of "Your name". The setName function is provided by the useState hook to update the value of name. This state variable will hold the current value of the text input field.

The component returns a JSX structure that includes a div element containing an input element and a p element. The input element is of type text and its value is controlled by the name state variable. It also has an onChange event handler that updates the name state variable with the value entered by the user. This is achieved by calling the setName function with the new value from the event.target.value. Additionally, the event handler logs the entered value and the event object to the console for debugging purposes. The input element also has a placeholder text "Enter your name".

The p element displays the current value of the name state variable, providing real-time feedback to the user as they type in the input field. This allows the user to see the entered name immediately below the input field.

*/
