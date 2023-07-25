import React, { useState, useEffect}  from "react";
import "./App.css";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Card from "./Card.js"



function Feed() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const currentDate = new Date();
  const formattedDateDay = format(currentDate, "iiii", {
    locale: enUS,
  });
  const formattedDateMonthYear = format(currentDate, "MMMM do, yyyy", {
    locale: enUS,
  });

  const fetchData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=eca70018580445b6b32680186ff03061"
    )
      .then((response) => response.json())
      .then((json) => {
        const LimitedTopics = json.articles.slice(0,112)
        console.log(LimitedTopics);
        setData(LimitedTopics); // Update the state with the articles array
      });
    };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Feed">
      
      <nav>
        <h2 className="sportmilk">sportmilk</h2>
        <div className="nav-items">
          <h3>Feed</h3>
          <Link to="/Topics" className="navvy">
            Topic
          </Link>
          <Link to="/Blog" className="navvy">
            Blog
          </Link>
          <Link to="/About" className="navvy">
            About
          </Link>
        </div>
      </nav>
      

      <div className="feed-body">
        <div className="feed-left">
          <div className="left-content">
            <h1 style={{ color: "red", fontSize: "50px" }}>Keeping up with</h1>
            <h2 style={{ fontSize: "50px" }}>Sports</h2>
            <h4
              style={{
                paddingTop: "3vh",
                fontWeight: "300",
                paddingBottom: "2vh",
              }}
            >
              Get the weekly newsletter keeping thousands of Sport fans in the
              loop.
            </h4>
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

            <h5 style={{ fontWeight: "300", paddingTop: "1vh" }}>
              Unsubscribe anytime, no hard feelings.
            </h5>
          </div>
        </div>
        <div className="feed-right">
          <div className="right-content">
            <h3 style={{ paddingTop: "15vh", color: "grey" }}>
              {formattedDateDay}
            </h3>

            <h3 style={{ fontSize: "5vh" }}>{formattedDateMonthYear}</h3>
            <h2
              style={{
                paddingBottom: "3vh",
                paddingTop: "1vh",
                fontSize: "1.8vh",
                color: "grey",
              }}
            >
              The right way to set goals for growth, content strategy for
              horizontal SaaS, asking about career goals in 1:1's, and more.
            </h2>
            <div style={{ paddingTop: "2vh" }} className="news">
              
              {data.length > 0 ? (
                <ul>
                  {data.map((item, index) => (
                    <div key={index}>
                      <Card
                        title={item.title}
                        author={item.author}
                        description={item.content}
                        url={item.url}
                      />
                    </div>
                  ))}
                </ul>
              ) : (
                <p>Loading...</p>
              )}
              
            </div>
          </div>
        </div>
      </div>
      <div className="Footer">
        <p style={{ color: "white", fontSize: "1.3vh" }}>
          &copy; 2023 Sport Milk LLC. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Feed;

