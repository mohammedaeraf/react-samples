import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define the Post interface to type the post data
interface Post {
  id: number;
  title: string;
}

const PostList: React.FC = () => {
  // Declare a state variable 'posts' to hold the list of posts
  // Initialize it as an empty array
  const [posts, setPosts] = useState<Post[]>([]);

  // Declare a state variable 'error' to hold any error messages
  // Initialize it as null
  const [error, setError] = useState<string | null>(null);

  // Use the useEffect hook to fetch posts when the component mounts
  useEffect(() => {
    // Fetch posts from the API
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => setPosts(data.posts)) // Update the 'posts' state with the fetched data
      .catch(() => setError("Failed to load posts")); // Set an error message if the fetch fails
  }, []); // Empty dependency array ensures this runs only once

  // if error return with an error msg that will be displayed in UI
  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className="container mt-4">
      <h2>📝 Post List</h2>
      <ul className="list-group">
        {/* Map over the 'posts' array and render each post as a list item */}
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {/* Link to the post's detail page */}
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
