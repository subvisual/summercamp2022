// import logo from "./logo.svg";
import "./Home.css";

import Nav from "../component/Nav";
import Footer from "../component/Footer";
import React from "react";

function Home() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item">
          <h2>An immersive experience</h2>
          <p>Explain what Summer Camp is</p>
        </div>

        <div className="grid-item">
          <h2>Discover how it´s like in the "real world"</h2>
          <p>Briefly describe the day-today</p>
        </div>

        <div className="grid-item">
          <h2>Find out what it´s like to work as a team</h2>
          <p>
            What´s it like to be project-driven,get mentorship,short-circuit
            your growth bkbkbkbk
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
