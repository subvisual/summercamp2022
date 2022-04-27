// import logo from "./logo.svg";
import "./Home.css";

import Nav from "../component/Nav";
import Footer from "../component/Footer";
import React, { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div className="grid-container">
        <div className="grid-item1">
          <h2>An immersive experience</h2>
          <p>Explain what Summer Camp is</p>
        </div>

        <div className="grid-item2">
          <h2>Discover how it´s like in the "real world"</h2>
          <p>Briefly describe the day-today</p>
        </div>

        <div className="grid-item3">
          <h2>Find out what it´s like to work as a team</h2>
          <p>
            What´s it like to be project-driven,get mentorship,short-circuit
            your growth
          </p>
        </div>
      </div>
      <div className="Page2">
        <h2>What area interests you the most?</h2>

        <div class="container-flex">
          <div class="item-flex"> Dev</div>
          <div class="item-flex"> Product Design</div>
          <div class="item-flex"> Product Management</div>
        </div>
        <h2>Advantages </h2>
        <div class="container-flex">
          <div class="item-flex">
            <p>Icon 1 </p> Professional experience
          </div>
          <div class="item-flex">
            <p>Icon 2 </p>
            Get your foot in the door
          </div>
          <div class="item-flex">
            <p> Icon 3 </p> Meet experienced mentors
          </div>
        </div>
      </div>

      <h2>What can you expect?</h2>
      <p>Lorem ipsum dolor sit amet</p>

      <p> + FAQs</p>
      <div className="grid-container">
        <div class="item1">Hiring process</div>
        <div class="item2">Stage 1 </div>
        <div class="item3">Stage 2</div>
        <div class="item4">Stage 3</div>
        <div class="item5">Stage 4</div>
      </div>
    </Fragment>
  );
}

export default Home;
