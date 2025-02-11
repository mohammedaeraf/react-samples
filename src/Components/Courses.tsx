import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define the Course interface to type the course data
interface Course {
  id: string;
  title: string;
  description: string;
}

function Courses() {
  const API_URL = "https://67a75555203008941f674e2f.mockapi.io/courses";

  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCourses(data);
  };

  const deleteCourse = async (id: string) => {
    const request = {
      method: "DELETE",
    };
    const response = await fetch(`${API_URL}/${id}`, request);
    const data = await response.json();
    console.log(data);

    const updatedCourses = courses.filter((course) => course.id != id);
    setCourses(updatedCourses);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <div>
        <Link to="/add-course" className="btn btn-outline-success mb-3">
          ➕ Add Course
        </Link>
      </div>
      <h2>Course List</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <th scope="row">{course.id}</th>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCourse(course.id)}
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
            // Use the user's id as the key for each list item
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Courses;
