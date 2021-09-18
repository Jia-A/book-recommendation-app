import React, { useState } from "react";
import "./styles.css";

var books = {
  happy: [
    {
      name: "Harry Potter Series",
      rating: "5/5"
    },
    {
      name: "Heart bones",
      rating: "4/5"
    }
  ],
  sad: [
    { name: "TFIOS", rating: "5/5" },
    { name: "Hopeless", rating: "4/5" }
  ],
  calm: [
    { name: "Kafka on the shore", rating: "3/5" },
    { name: "Layla", rating: "4/5" }
  ]
};
var book = Object.keys(books);

export default function App() {
  const [genreAsked, setGenreAsked] = useState("sad");

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
              background: "white",
              padding: "1rem",
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
                border: "1Px solid black",
                width: "80%",
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
