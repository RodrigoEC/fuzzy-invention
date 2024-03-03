import React from "react";
import logo from "./assets/logo.svg";
import "./App.scss";
import ImportMoviesForm from "./components/ImportMoviesForm/ImportMoviesForm";

function App() {
  return (
    <div className="App">
      <header>
        <img
          src={logo}
          className="logo"
          alt="three balls with distinct colors, orange, green and blue side by side and in each of them we have the oxeanbits logo in white. The oxieanbits logo e a shape that emulates a fish"
        />
        <h1 className="title">OxeanBoxd</h1>
        <p className="subtitle">
          For you to watch bits of movies by the oXean.
        </p>
      </header>
      <ImportMoviesForm />
    </div>
  );
}

export default App;
