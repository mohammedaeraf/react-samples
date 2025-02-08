import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Define the Post interface to type the post data
interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
}

const PostDetails: React.FC = () => {
  // Extract the 'id' parameter from the URL
  const { id } = useParams<{ id: string }>();

  // Declare a state variable 'post' to hold the post details
  // Initialize it as null
  const [post, setPost] = useState<Post | null>(null);

  // Declare a state variable 'error' to hold any error messages
  // Initialize it as null
  const [error, setError] = useState<string | null>(null);

  // Use the useEffect hook to fetch post details when the component mounts or 'id' changes
  useEffect(() => {
    // Fetch post details from the API by passing the id
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => setPost(data)) // Update the 'post' state with the fetched data
      .catch(() => setError("Failed to load post details")); // Set an error message if the fetch fails
  }, [id]); // Dependency array ensures this runs when 'id' changes

  // Display error message if there is an error
  if (error) return <p className="text-danger">{error}</p>;

  // Display loading message if the post data is not yet available
  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      {/* Display the post title */}
      <h2>{post.title}</h2>
      {/* Display the post body */}
      <p>{post.body}</p>
      {/* Display the post views */}
      <p>
        <strong>👀 Views:</strong> {post.views}
      </p>
      {/* Display the post reactions */}
      <p>
        <strong>👍 Likes:</strong> {post.reactions.likes} |{" "}
        <strong>👎 Dislikes:</strong> {post.reactions.dislikes}
      </p>
      {/* Display the post tags */}
      <p>
        <strong>🏷 Tags:</strong> {post.tags.join(", ")}
      </p>
      {/* Display the user ID */}
      <p>
        <b>👤 User ID:</b> {post.userId}
      </p>
      {/* Link to navigate back to the posts list */}
      <Link to="/" className="btn btn-primary">
        ← Back to Posts
      </Link>
    </div>
  );
};

export default PostDetails;
