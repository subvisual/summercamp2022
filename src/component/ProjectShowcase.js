import "./ProjectShowcase.css";

const PROJECTS = [
  {
    id: "1",
    title: "YAMS",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    title: "Shelf",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "3",
    title: "Book Club",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function Project(props) {
  return (
    <div className="project">
      <div className="columns">
        <div className="project-details">
          <div className="project-title">{props.title}</div>
          <div className="project-subtitle">{props.subtitle}</div>
          <div className="project-description">{props.description}</div>
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
