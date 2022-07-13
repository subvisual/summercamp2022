import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";

export default function AreYouUp() {
  return (
    <div className="are-you-up">
      <div className="container">
        <div className="challenge">
          <div className="columns">
            <div className="header">
              <h2 className="title has-font-size-xlarge">
                Are you up to this challenge?
              </h2>
              <div className="content has-font-size-small">
                <p>
                  Here you will meet other Campers that share your passion for
                  technology, and who will work alongside you to create a cool
                  new product from scratch.
                </p>
              </div>
            </div>
            <div className="firstphoto">
              <Parallax speed={-10} easing="easeInQuad" rotate={[0, 5]}>
                <StaticImage
                  className="img"
                  loading="lazy"
                  src="../../images/FirstPhotoChallenge.jpg"
                  alt=""
                />
              </Parallax>
            </div>
            <div className="secondphoto">
              <Parallax speed={10} easing="easeInQuad" rotate={[0, -5]}>
                <StaticImage
                  className="img"
                  loading="lazy"
                  src="../../images/SecondPhotoChallenge.jpg"
                  alt=""
                />
              </Parallax>
            </div>
          </div>
        </div>
        <div className="if-you-like">
          <div className="columns">
            <div className="left">
              <h2 className="title has-font-size-large">If you like</h2>
            </div>

            <div className="right has-text-blue has-font-family-secondary has-font-size-large">
              <div className="item">
                <div className="line"></div>
                <p>product design</p>
              </div>
              <div className="item">
                <div className="line"></div>
                <p>product management</p>
              </div>
              <div className="item">
                <div className="line"></div>
                <p>programming</p>
              </div>
            </div>
          </div>
        </div>
        <div className="your-opportunity">
          <div className="header">
            <h2 className="title has-font-size-large">
              This is your opportunity to
            </h2>
          </div>
          <div className="columns">
            <div className="item has-background-blue has-font-size-medium ">
              <div className="title">01</div>
              <br />
              <p>Get professional experience</p>
            </div>
            <div className="item has-background-blue-dark has-font-size-medium">
              <div className="title">02</div>
              <br />
              <p>Meet other talented people</p>
            </div>
            <div className="item has-background-purple has-font-size-medium">
              <div className="title">03</div>
              <br />
              <p>Learn with experienced mentors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
