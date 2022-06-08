import "./ProjectShowcase.css";
import React from "react";
import Campers1 from "../images/Campers1.jpg";
import Campers2 from "../images/Campers2.jpg";
import Campers3 from "../images/Campers3.jpg";
const PROJECTS = [
  {
    id: "1",
    title: "YAMS",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Campers1,
  },
  {
    id: "2",
    title: "Shelf",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Campers2,
  },
  {
    id: "3",
    title: "Book Club",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Campers3,
  },
];

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
          <div className="project-description has-font-size-small ">
            {props.description}
          </div>
        </div>
        <div className="project-image">
          <img src={props.image} alt={props.title + " preview"} />
        </div>
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  return (
    <div className="project-showcase">
      {PROJECTS.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}
