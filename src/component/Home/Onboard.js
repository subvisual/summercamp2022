import React from "react";

export default function Onboard() {
  return (
    <div className="onboard">
      <div className="box">
        <div className="container">
          <div
            className="title has-font-size-large"
            style={{ color: "var(--color-white)" }}
          >
            We'd love to have <br /> you on board!
          </div>
          <a
            href="https://jobs.subvisual.com/summer-camp-program"
            className="button has-font-size-medium"
          >
            Join us
          </a>
        </div>
      </div>
    </div>
  );
}
