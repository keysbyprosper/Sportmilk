import React from "react";
import "./App.css";



function Card({ title, author, url , description}) {
  const sourceIndex = title.lastIndexOf("-");
  const modifiedTitle = title.slice(0, sourceIndex).trim();
  return (
    <div className="Card-main">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: "1.5em",
          fontWeight: "700",
        }}
        className="title"
      >
        {modifiedTitle}
      </a>
      <p style={{  paddingBottom: "0.5vh" }}>{author}</p>
      {description ? (
        <p
          style={{ paddingBottom: "2vh", color: "grey" }}
          className="description"
        >
          {description}
        </p>
      ) : (
        <p
          style={{
            paddingBottom: "2vh",
            color: "black",
            textAlign: "center",
            paddingTop: "3vh",
          }}
        >
          Oops, error retrieving description
        </p>
      )}
    </div>
  );
}

export default Card;
