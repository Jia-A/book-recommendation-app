import React, { useState } from "react";
import "./styles.css";

var books = {
  mystery: [
    {
      name: "Verity",
      description : "You never know what the reality is until you reach the end!!",
      rating: "7/10"
    },
    {
      name: "The girl on the train",
      description:"This book will not let you sleep until you complete it.",
      rating: "8/10"
    },
    {
      name: "Into the water",
      description:"The last sentence will reveal all the secrets!",
      rating : "8.5/10"
    }
  ],
  calm: [
    { 
      name: "The perks of being a wallflower", 
    description: "You'll see yourself in this one if you over-think and over-analyze!",
    rating: "8/10" 
    },
    {
      name: "Five people you meet in heaver", 
    description: "This book gives you 5 important life-lessons",
    rating: "8/10" 
    },
    { 
      name: "The goldfinch", 
    description: "That one painting which became his last home",
    rating: "9/10"
    }
  ],
  must_read_once: [
    { 
      name: "Kafka on the shore", 
    description: "This book has imagination, supernatures, time and a rock!",
    rating: "9/10" 
    },
    { 
      name: "Everything Everything", 
    description: "What's life without a little bit of risk?",
    rating: "7/10" 
    },
    { 
      name: "They both die at the end", 
    description: "A call and everything is changed.",
    rating:"8/10"
    }
  ],
  heart_wrenching: [
    { 
      name: "The boy in the striped pyjamas", 
    description: "Two boys, the mirror of each other, sitting either side of a wire fence.",
    rating: "10/10" 
    },
    { 
      name: "A thousad splendid suns", 
    description : "Two women, same yet different.",
    rating: "10/10" 
    },
    { name: "And the mountains echoed", 
    description : "Their fate was written somewhere else.",
    rating:"10/10"
    }
  ],
  teen_novels: [
    {
      name: "Confess", 
    description : "The confession could be more destructive than the actual sin.",
    rating: "7/10" 
    },
    { 
      name: "Hopeless", 
    description : "This one will have you in tears because of it's delicacy.",
    rating: "10/10" 
    },
    { 
      name: "Paper towns", 
    description : "The clues lead him to her but they were there for something else.",
    rating:"9/10"
    }
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
              <div style={{ fontSize: "larger" }}>{result.description}</div>
              <div style={{ fontSize: "larger" }}>{result.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
