import React, { useState } from "react";
import "./Nav.css";

import logo from "../images/summercamp-logo.svg";

export default function Nav() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!isMenuVisible);
  }

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
          <div className="toggle" onClick={toggleMenu}>
            toggle
          </div>
        </div>
      </div>
      <div
        className={
          "mobile-menu has-background-blue has-text-white" +
          (isMenuVisible ? "" : " is-hidden")
        }
      >
        <div className="brand">Summer Camp</div>
        <div className="has-font-size-large">
          <div className="menu-item">
            <a
              className="has-text-white"
              onClick={toggleMenu}
              href="#testimonials"
            >
              Testimonials
            </a>
          </div>
          <div className="menu-item">
            <a className="has-text-white" onClick={toggleMenu} href="#projects">
              Projects
            </a>
          </div>
          <div className="menu-item">
            <a className="has-text-white" onClick={toggleMenu} href="#faqs">
              FAQs
            </a>
          </div>
        </div>
        <div>
          <a href="/" className="button has-font-size-small has-text-white">
            Join us
          </a>
        </div>
        <div className="close" onClick={toggleMenu}>
          &times;
        </div>
      </div>
    </nav>
  );
}
