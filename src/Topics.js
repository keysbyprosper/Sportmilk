import React from "react";
import "./App.css";
import { Link } from "react-router-dom";


function Topics() {
  return (
    <div>
      <nav>
        <h2 className="sportmilk">sportmilk</h2>
        <div className="nav-items">
          <Link to="/" className="navvy">
            Feed
          </Link>
          <h3>Topic</h3>
          <Link to="/Blog" className="navvy">
            Blog
          </Link>
          <Link to="/About" className="navvy">
            About
          </Link>
        </div>
      </nav>
      <div className="body">
        <Link to="/Topics/Soccer">Soccer</Link>
        <Link to="/Topics/Basketball">Basketball</Link>
        <Link to="/Topics/American Football">American Football</Link>
        <Link to="/Topics/Hockey">Hockey</Link>
      </div>
    </div>
  );
}

export default Topics;
