import "./ProjectShowcase.css";
import React from "react";

function Project(props) {
  return (
    <div className="project">
      <div className="columns">
        <div className="project-details">
          <div className="project-title has-font-size-small ">
            <div className="line"></div>
            <p>{props.title}</p>
          </div>
          <div className="project-subtitle has-font-family-secondary has-font-size-medium">
            {props.subtitle}
          </div>
          <div
            className="project-description has-font-size-small"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></div>
        </div>
        <div className="project-image">
          <img src={props.image} alt={props.title + " preview"} />
        </div>
      </div>
    </div>
  );
}

export default function ProjectShowcase(props) {
  return (
    <div className="project-showcase">
      {props.projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}
