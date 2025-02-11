import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import AboutUs from "./Components/AboutUs.tsx";
import ArticleList from "./Components/ArticleList.tsx";
import Greeting from "./Components/Greeting.tsx";
import ProductList from "./Components/ProductList.tsx";
import RecipeList from "./Components/RecipeList.tsx";
import Toggle from "./Components/Toggle.tsx";
import ToggleSwitch from "./Components/ToggleSwitch.tsx";
import UserList from "./Components/UserList.tsx";
import Home from "./Components/Home.tsx";
import PostList from "./Components/PostList.tsx";
import PostDetails from "./Components/PostDetails.tsx";
import PostListSearch from "./Components/PostListSearch.tsx";
import Courses from "./Components/Courses.tsx";
import AddCourse from "./Components/AddCourse.tsx";
import EditCourse from "./Components/EditCourse.tsx";

function App() {
  return (
    <Router>
      <header>
        <h1>React Demos</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Components
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/greeting">
                      Greeting
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/toggle">
                      Toggle
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/toggle-switch">
                      Toggle Switch
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products">
                      Product List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/recipes">
                      Recipe List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/courses">
                      Course List
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/users">
                      User List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/articles">
                      Article List
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/greeting" element={<Greeting />}></Route>

          <Route path="/toggle" element={<Toggle />}></Route>
          <Route path="/toggle-switch" element={<ToggleSwitch />}></Route>
          <Route path="/articles" element={<ArticleList />}></Route>
          <Route path="/recipes" element={<RecipeList />}></Route>
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts-search" element={<PostListSearch />} />
          <Route path="/products" element={<ProductList />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/edit-course/:id" element={<EditCourse />} />

          <Route path="/users" element={<UserList />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </main>
    </Router>
  );
  //#endregion Commnted Code
}

export default App;

/*

// For Props
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Articles</h1>
      <Article title="Understanding React Props">
        Props allow components to receive data from their parent."
      </Article>
      <Article title="What is Bootstrap?">
        Bootstrap is a popular CSS framework that helps in designing responsive
        websites quickly.
      </Article>
      <Article title="What is a useState()">
        useState() is a React Hook that is used to maintain state of Components
        in React.
      </Article>
    </div>
  );



*/
