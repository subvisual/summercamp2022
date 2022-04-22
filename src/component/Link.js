import "./Link.css";

function Link(props) {
  return (
    <a href={props.href} className="Link">
      {props.children}
    </a>
  );
}

export default Link;
