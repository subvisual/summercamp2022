import React from "react";
import Testimonials from "../Testimonials";

export default function DontJustTake({ testimonials }) {
  return (
    <div className="dont-just-take" id="testimonials">
      <div className="container">
        <div className="columns">
          <div className="top has-font-size-large">
            <h2>
              But don't just take our
              <br />
              word for it
            </h2>
          </div>
          <div className="bottom">
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </div>
    </div>
  );
}
