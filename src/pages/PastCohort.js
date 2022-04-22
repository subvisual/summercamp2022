import React from "react";
import "./PastCohort.css";
import Nav from "../component/Nav";

function PastCohort() {
  return (
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
  );
}
export default PastCohort;
