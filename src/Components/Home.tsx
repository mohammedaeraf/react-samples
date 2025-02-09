import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <Link className="btn btn-primary btn-lg me-2" to="/greeting">
        Greeting
      </Link>
      <Link className="btn btn-warning btn-lg me-2" to="/toggle">
        Toggle
      </Link>
      <Link className="btn btn-danger btn-lg me-2" to="/toggle-switch">
        Toggle Switch
      </Link>
      <div className="row mt-5"></div>
      <Link className="btn btn-secondary btn-lg me-2" to="/courses">
        Courses
      </Link>
      <Link className="btn btn-info btn-lg me-2" to="/products">
        Products
      </Link>
      <Link className="btn btn-dark btn-lg me-2" to="/articles">
        Articles
      </Link>
      <Link className="btn btn-warning btn-lg me-2" to="/users">
        Users
      </Link>
      <Link className="btn btn-success btn-lg me-2" to="/posts">
        Posts
      </Link>
      <Link className="btn btn-success btn-lg me-2" to="/posts-search">
        Search Posts
      </Link>
    </main>
  );
}
export default Home;
