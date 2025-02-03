import { useState } from "react";

const UserProfileState = () => {
  const [user, setUser] = useState({ name: "", age: "" });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={user.name}
        onChange={(e) =>
          setUser({
            name: e.target.value,
            age: user.age,
          })
        }
      />

      <input
        type="number"
        placeholder="Enter age"
        value={user.age}
        onChange={(e) => setUser({ name: user.name, age: e.target.value })}
      />
      <p>
        Name: {user.name} Age: {user.age}
      </p>
    </div>
  );
};

export default UserProfileState;
