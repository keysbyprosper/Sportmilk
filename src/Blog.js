import React from "react";
import "./App.css";
import { Link } from "react-router-dom";


function Blog() {
  return (
    <nav>
      <h2 className="sportmilk">sportmilk</h2>
      <div className="nav-items">
        <Link to="/" className="navvy">
          Feed
        </Link>
        <Link to="/Topics" className="navvy">
          Topic
        </Link>
        <h3>Blog</h3>
        <Link to="/About" className="navvy">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Blog;
