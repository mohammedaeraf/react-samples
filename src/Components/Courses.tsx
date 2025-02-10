import { useState, useEffect } from "react";

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

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <h2>Course List</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <th scope="row">{course.id}</th>
              <td>{course.title}</td>
              <td>{course.description}</td>
            </tr>
            // Use the user's id as the key for each list item
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Courses;
