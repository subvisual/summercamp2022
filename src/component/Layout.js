import { useState, Fragment } from "react";

import Footer from "./Footer";
import Nav from "./Nav";
import "./Layout.css";

export function Layout(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuClassName = isMenuOpen ? "quadrado" : "quadrado hidden";

  return (
    <Fragment>
      <div onClick={onClick} className={menuClassName}>
        <Nav></Nav>
      </div>
      <button onClick={onClick}>menu</button>
      {props.children}

      <Footer></Footer>
    </Fragment>
  );
}

export default Layout;
