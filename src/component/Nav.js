import "./Nav.css";
import React from "react";
import logo from "../images/summercamp-logo.svg";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <div className="brand">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="menu">
            <a href="/" className="button">
              Join Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
