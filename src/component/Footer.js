import React from "react";
import ImageFooter from "../images/ImageFooter.jpg";

export default function Footer() {
  return (
    <footer className="footer has-font-size-small has-text-grey">
      <div className="container">
        <div className="columns">
          <div className="left">
            <div className="go-to has-text-blue has-font-size-medium">
              Go to
            </div>
            <div className="go-to-content has-font-size-small">
              <div className="item1">Subvisual</div>
              <div className="item2">Blog</div>
            </div>
          </div>

          <div className="right">
            <div className="we-social has-text-blue has-font-size-medium">
              We're social
            </div>
            <div className="we-social-content has-font-size-small">
              <div className="item">Md</div>
              <div className="item">Be</div>
              <div className="item">Git</div>
              <div className="item">Dri</div>
              <div className="item">In</div>
              <div className="item">Fb</div>
              <div className="item">Tw</div>
              <div className="item">Ins</div>
            </div>
          </div>

          <div className="left">
            <div className="contact-us has-text-blue has-font-size-medium">
              Contact us
            </div>
            <div className="contact-us content  has-font-size-small">
              contact@subvisual.co
            </div>
          </div>

          <div className="right">
            <div className="offices has-text-blue has-font-size-medium">
              Offices
            </div>
            <div className="offices-content  has-font-size-small">
              Remote. Work anywhere in Europe.
              <br />
              Or join our mothership,landed in Braga, Portugal.
            </div>
            {/* <div className="image">
              <img src={ImageFooter} alt="" />
            </div> */}
          </div>
        </div>

        <div className="left">
          <div className="image">
            <img
              src={ImageFooter}
              alt="Os logotipos Norte 2020, Portugal 2020 e União Europeia"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
