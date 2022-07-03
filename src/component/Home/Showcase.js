import React from "react";
import ProjectShowcase from "../ProjectShowcase";

export default function Showcase({ projects }) {
  return (
    <div className="showcase" id="projects">
      <div className="container">
        <div className="columns">
          <div className="header has-font-size-large">
            <h2 className="title">
              Here's what our campers have done in the past years
            </h2>
          </div>
        </div>
        <div className="projects">
          <ProjectShowcase projects={projects} />
        </div>
      </div>
    </div>
  );
}
