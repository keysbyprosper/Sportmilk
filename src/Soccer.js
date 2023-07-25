import React from "react";
import "./Soccer.css";
import { Link } from "react-router-dom";


function Soccer() {
  return (
    <div className="Soccer">
      <div className="navbar">
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
      </div>
      
    </div>
  );
}

export default Soccer;
