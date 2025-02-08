import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch(() => setError("Failed to load posts"));
  }, []);

  return (
    <div className="container mt-4">
      <h2>📝 Post List</h2>
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
