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
              <div className="item1">
                <a href="https://subvisual.com/" target="_blank">
                  Subvisual
                </a>
              </div>
              <div className="item2">
                <a href="https://subvisual.com/blog/" target="_blank">
                  Blog
                </a>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="we-social has-text-blue has-font-size-medium">
              We're social
            </div>
            <div className="we-social-content has-font-size-small">
              <div className="item">
                <a href="https://medium.com/subvisual" target="_blank">
                  Md
                </a>
              </div>
              <div className="item">
                <a href="https://www.behance.net/subvisual" target="_blank">
                  Be
                </a>
              </div>
              <div className="item">
                <a href="https://github.com/subvisual" target="_blank">
                  Git
                </a>
              </div>
              <div className="item">
                <a href="https://dribbble.com/subvisual" target="_blank">
                  Dri
                </a>
              </div>
              <div className="item">
                <a
                  href="https://www.linkedin.com/company/wearesubvisual/"
                  target="_blank"
                >
                  In
                </a>
              </div>
              <div className="item">
                <a href="https://www.facebook.com/subvisual.co" target="_blank">
                  Fb
                </a>
              </div>
              <div className="item">
                <a href="https://twitter.com/subvisual" target="_blank">
                  Tw
                </a>
              </div>
              <div className="item">
                <a
                  href="https://www.instagram.com/wearesubvisual/"
                  target="_blank"
                >
                  Ins
                </a>
              </div>
            </div>
          </div>

          <div className="left">
            <div className="contact-us has-text-blue has-font-size-medium">
              Contact us
            </div>
            <div className="contact-us content  has-font-size-small">
              <a
                href="mailto:contact@subvisual.com?subject=Hi%20Subvisual!%20I%20want%20to%20talk%20to%20you"
                target="_blank"
              >
                contact@subvisual.co
              </a>
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
            <a
              href="https://drive.google.com/file/d/1O017VWq7ztHDjBNKx4H3PR9bK4Pxi2gP/view"
              target="_blank"
            >
              <img
                src={ImageFooter}
                alt="Os logotipos Norte 2020, Portugal 2020 e União Europeia"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
