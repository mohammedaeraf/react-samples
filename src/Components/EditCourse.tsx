import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  description: string;
}

const API_URL = "https://67a75555203008941f674e2f.mockapi.io/courses"; // Change this to your MockAPI.io URL

const EditCourse: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get course ID from URL
  
  const navigate = useNavigate();

  const [course, setCourse] = useState<Course | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const fetchCourse = async () => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    setCourse(data);
  };

  // Fetch course details when component mounts
  useEffect(() => {
    fetchCourse();
  }, [id]);

  // Handle form submission
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) return;

    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(course),
    });

    if (!response.ok) {
      setError("Update failed");
    } else {
      setMessage("✅ Course updated successfully!");
      setTimeout(() => navigate("/courses"), 1500); // Redirect after update
    }
  };

  if (error) return <p className="text-danger">{error}</p>;
  if (!course) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>✏ Edit Course</h2>
      {message && <p className="text-success">{message}</p>}
      <form onSubmit={handleUpdate} className="border p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={course.title}
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <Link to="/" className="btn btn-secondary ms-2">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default EditCourse;
