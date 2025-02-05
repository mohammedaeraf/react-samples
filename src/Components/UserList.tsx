import { useState, useEffect } from "react";

// Define the User interface to type the user data
interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  // Declare a state variable 'users' to hold the list of users
  // Initialize it as an empty array
  const [users, setUsers] = useState<User[]>([]);

  // Define an asynchronous function to fetch users from an API
  const fetchUsers = async () => {
    // Make a GET request to the API endpoint
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Parse the JSON response
    const data = await response.json();

    // Update the 'users' state with the fetched data
    setUsers(data);
  };

  // Use the useEffect hook to fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []); // Empty dependency array ensures this runs only once

  return (
    // Render the list of users as an unordered list
    <ul>
      {users.map((user) => (
        // Use the user's id as the key for each list item
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
