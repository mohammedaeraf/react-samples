import { useState } from "react";
import { Form } from "react-router-dom";

/*
Steps to Implement AddCourse Component:

1. Define the API URL for adding a new course.
2. Create state variables to hold the title, description, and message.
3. Implement the handleSubmit function to handle form submission.
4. Implement the addCourse function to make a POST request to the API.
5. Create the form structure with input fields for title and description.
6. Display a message based on the success or failure of the API request.
*/

const AddCourse: React.FC = () => {
  // API URL for adding a new course
  const API_URL = "https://67a75555203008941f674e2f.mockapi.io/courses";

  // State variables to hold the title, description, and message
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (isFormValid()) {
      addCourse(); // Call the addCourse function to add the course
      setMessage("");
    } else {
      setMessage("Please fix the validation errors");
    }
  };

  const isFormValid = () => {
    let validForm: boolean = true;

    if (title.trim() == "") {
      setTitleError("Title is required");
      validForm = false;
    } else {
      setTitleError("");
    }

    if (description.trim().length == 0) {
      setDescriptionError("Description is required");
      validForm = false;
    } else {
      setDescriptionError("");
    }

    return validForm;
  };

  // Function to add a new course
  const addCourse = async () => {
    // Create a request body with title and description
    let requestBody = { title, description }; // JS Object
    let requestBodyJSON = JSON.stringify(requestBody); // JSON Object

    // Create a request object with method, headers, and body
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: requestBodyJSON,
    };

    // Make a POST request to the API
    const response = await fetch(API_URL, request);
    if (response.ok) {
      console.log("Course added..");
      const data = await response.json(); // Parse the JSON response
      console.log(data);
      setMessage("Course Added Successfully"); // Set success message
      setTitle(""); // Clear the title input field
      setDescription(""); // Clear the description input field
    } else {
      setMessage("Error while adding Course"); // Set error message
    }
  };

  return (
    <div>
      {/* Display message if it exists */}
      {message ? (
        <div className="alert alert-warning alert-dismissible"> {message} </div>
      ) : (
        <div></div>
      )}

      <h2>Add Course</h2>
      {/* Form for adding a new course */}
      <form className="border p-3 shadow-lg rounded" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2">
            <label htmlFor="titleTextBox" className="text-secondary">
              Title
            </label>
          </div>
          <div>
            <input
              type="text"
              name="titleTextBox"
              id="titleTextBox"
              value={title}
              className="form-control mb-4"
              placeholder="Enter Course Title"
              onChange={(e) => setTitle(e.target.value)} // Update title state on input change
            />
            {titleError ? (
              <p className="text-danger small"> {titleError} </p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div>
          <div className="mb-2">
            <label htmlFor="descriptionextBox" className="text-secondary">
              Description
            </label>
          </div>
          <div>
            <input
              type="text"
              name="descriptionextBox"
              id="descriptionextBox"
              value={description}
              className="form-control mb-4"
              placeholder="Enter Course Description"
              onChange={(e) => setDescription(e.target.value)} // Update description state on input change
            />
            {descriptionError ? (
              <p className="text-danger small"> {descriptionError} </p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
