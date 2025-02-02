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
