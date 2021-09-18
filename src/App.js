import React, { useState } from "react";
import "./styles.css";

var books = {
  mystery: [
    {
      name: "Verity",
      rating: "4/5"
    },
    {
      name: "The girl on the train",
      rating: "4/5"
    },
    {
      name: "Into the water",
      rating : "3.5/5"
    }
  ],
  calm: [
    { name: "The perks of being a wallflower", rating: "4.5/5" },
    { name: "Five people you meet in heaver", rating: "3/5" },
    { name: "The goldfinch", rating: "4.5/5"}
  ],
  must_read_once: [
    { name: "Kafka on the shore", rating: "3/5" },
    { name: "Everything Everything", rating: "4/5" },
    { name: "They both die at the end", rating:"3.5/5"}
  ],
  heart_wrenching: [
    { name: "The boy in the striped pyjamas", rating: "5/5" },
    { name: "A thousad splendid suns", rating: "4.5/5" },
    { name: "And the mountains echoed", rating:"5/5"}
  ],
  teen_novels: [
    { name: "Confess", rating: "4/5" },
    { name: "Hopeless", rating: "4.5/5" },
    { name: "Paper towns", rating:"4.5/5"}
  ],
  
};
var book = Object.keys(books);

export default function App() {
  const [genreAsked, setGenreAsked] = useState("heart_wrenching");

  function genreClick(genre) {
    // var meaning = books[genre];
    setGenreAsked(genre);
  }
  return (
    <div className="App">
      <h1>Books</h1>
      <p style={{ fontSize: "small" }}>
        {" "}
        Check these books out according to your favourite genre with ratings by
        me!{" "}
      </p>
      <div>
        {book.map((genre) => (
          <button
            onClick={() => genreClick(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              background: "#efefef",
              padding: "1rem",
              border: "1px solid black",
              margin: "1rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {books[genreAsked].map((result) => (
            <li
              key={result.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #9CA3AF",
                width: "80%",
                borderRadius: "0.5rem",
                margin: "1rem 0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{result.name}</div>
              <div style={{ fontSize: "larger" }}>{result.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
