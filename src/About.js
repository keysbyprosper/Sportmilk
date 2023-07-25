import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./About.css";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";
import Footer from "./Footer.js"


function About() {
  const [email, setEmail] = useState("");

  return (
    <div className="About">
      <nav>
        <h2 className="sportmilk">sportmilk</h2>
        <div className="nav-items">
          <Link to="/" className="navvy">
            Feed
          </Link>
          <Link to="/Topics" className="navvy">
            Topic
          </Link>
          <Link to="/Blog" className="navvy">
            Blog
          </Link>
          <h3>About</h3>
        </div>
      </nav>
      <div className="about-content">
        <div style={{ width: "17vw" }}></div>
        <div className="about-content-content">
          <h4
            style={{
              fontSize: "6vh",
              paddingTop: "10vh",
              paddingBottom: "4vh",
            }}
          >
            The Sport Milk <s>mission</s> reason
          </h4>
          <p className="para">
            For too long, the overwhelming amount of sports content has made it
            challenging for enthusiasts to stay updated and engaged.
          </p>
          <p className="para">There's a flood of information.</p>
          <p className="para">
            For sports fans, this can be overwhelming. With new developments,
            game highlights, and player updates happening constantly, it's
            difficult to keep track of it all.
          </p>
          <p className="para">It doesn't have to be this way.</p>
          <p className="para">
            SportMilk's goal isn't to be just another sports website
            contributing to the noise. Our aim is to help sports enthusiasts
            sift through the sea of content and deliver only the most
            captivating and relevant information.
          </p>
          <p className="para">You deserve to stay informed with the best.</p>
          <p className="para">
            Our reason for existing is to empower sports fans and increase the
            number of passionate, knowledgeable supporters in the world. And our
            sincere hope is that SportMilk can help you get there.
          </p>
          <p className="para">❤️,</p>
          <p className="para">The SportMilk Team</p>
          <h2 style={{ paddingTop: "5vh" }}>How SportMilk works</h2>
          <p className="para">
            SportMilk is your go-to destination for discovering the latest
            sports news, resources, and guides. Every day, we curate five new
            links to add to our expanding library of sports content, sourced
            from various creators across the web.
          </p>
          <p className="para">
            We also offer a weekly newsletter, cherished by thousands of sports
            enthusiasts, delivered every Tuesday. You can subscribe here:
          </p>

          <form>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <div>
              <Button
                variant="contained"
                style={{ height: "6.5vh", backgroundColor: "black" }}
                type="email"
              >
                Try it
              </Button>
            </div>
          </form>
          <h2 style={{ paddingTop: "10vh" }}>Questions?</h2>
          <p className="para">
            If you have any questions or concerns feel free to{" "}
            <a
              href="mailto:sportmilk101@gmail.com"
              style={{ backgroundColor: "yellow", textDecoration: "none" }}
            >
              drop us a line
            </a>
            !
          </p>
        </div>
        <div style={{ width: "17vw" }}></div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
