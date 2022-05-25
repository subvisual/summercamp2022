import "./Home.css";

import React, { Fragment } from "react";
import Testimonials from "../component/Testimonials";
import FAQs from "../component/FAQs";
import ProjectShowcase from "../component/ProjectShowcase";
import Nav from "../component/Nav";

function JoinUs() {
  return (
    <div className="join-us">
      <div className="container">
        <div className="columns">
          <div className="left">
            <h2 className="title">Join us</h2>
          </div>

          <div className="right">
            <div className="item">
              <h2 className="title">
                <span>on a</span>
                <span className="has-text-blue"> hands-on </span>
                <br />
                <span>approach</span>
              </h2>
              <div className="text">
                <p>
                  We created SummerCamp back in 2016 as a way to foster talent,
                  get new work perspectives and contribute to boosting new
                  career opportunities. We believe in continuous learning and
                  improvement, so SummerCamp is yet another way of us acting on
                  those values
                </p>
              </div>
            </div>
            <div className="item">
              <h2 className="title">
                <span>to get a </span>
                <span className="has-text-blue"> real work </span>
                <br />
                <span>experience</span>
              </h2>
              <div className="text">
                <p>
                  Whether you want to follow a career in technology or product,
                  during your time at SummerCamp you'll get access to a real use
                  case that will help you understand how a job in that area
                  could be like.
                </p>
              </div>
            </div>
            <div className="item">
              <h2 className="title">
                <span> with the support of</span>
                <br />
                <span>a</span>
                <span className="has-text-blue"> great team</span>
              </h2>
              <div className="text">
                <p>
                  Our team members will be your mentors during the entire
                  program, wich means that you will always have someone to back
                  your decisions and help you choose wich path to follow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AreYouUp() {
  return (
    <div className="are-you-up">
      <div className="container">
        <div className="challenge">
          <div className="columns">
            <div className="header">
              <h2 className="title">Are you up to this challenge?</h2>
            </div>
            <div className="content">
              <p>
                Here you will meet other Campers that share your passion for
                technology, and who will work alongside you to create a cool new
                product from scratch.
              </p>
            </div>
          </div>
        </div>
        <div className="if-you-like">
          <div className="columns">
            <div className="left">
              <h2 className="title">If you like</h2>
            </div>
            <div className="right">
              <div className="item">
                <p>product design</p>
              </div>
              <div className="item">
                <p>product management</p>
              </div>
              <div className="item">
                <p>programming</p>
              </div>
            </div>
          </div>
        </div>
        <div className="your-opportunity">
          <div className="header">
            <h2 className="title">this is your opportunity to</h2>
          </div>
          <div className="columns">
            <div className="item has-background-blue">
              <div className="title">01</div>
              <p>Get professional experience</p>
            </div>
            <div className="item has-background-blue-dark">
              <div className="title">02</div>
              <p>Meet other talented people</p>
            </div>
            <div className="item has-background-purple">
              <div className="title">03</div>
              <p>Learn with experienced mentors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DontJustTake() {
  return (
    <div className="dont-just-take">
      <div className="container">
        <div className="columns">
          <div className="top">
            <h2>
              But don't just take our
              <br />
              word for it
            </h2>
          </div>
          <div className="bottom">
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
}

function Showcase() {
  return (
    <div className="showcase">
      <div className="container">
        <div className="columns">
          <div className="header">
            <h2 className="title">
              Here's what our campers have done in the past years
            </h2>
          </div>
        </div>
        <div className="projects">
          <ProjectShowcase />
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="how-it-works">
      <div className="container">
        <div className="background has-background-blue-dark">
          <div className="columns">
            <div className="top">
              <h2 className="title">How it works</h2>
            </div>
            <div className="content">
              <div className="row">
                <div className="box">
                  <p>
                    01 <br />
                    <br /> You submit your application.
                  </p>
                </div>
                <div className="box">
                  <p>
                    02 <br />
                    <br /> We check your profile.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="box">
                  <p>
                    03 <br />
                    <br /> We schedule
                    <br /> a call to meet you*.
                  </p>
                </div>
                <div className="box">
                  <p>
                    04 <br />
                    <br /> You join the program!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SomeQuestions() {
  return (
    <div className="some-questions">
      <div className="container">
        <div className="columns">
          <div className="top">
            <h2 className="title">Some questions we are usually asked</h2>
          </div>
          <div className="bottom">
            <FAQs />
          </div>
        </div>
      </div>
    </div>
  );
}

function TalkToUs() {
  return (
    <div className="talk-to-us">
      <div className="container">
        <div className="title">Still got questions?</div>
        <a href="/" className="button">
          Talk to us
        </a>
      </div>
    </div>
  );
}

function Onboard() {
  return (
    <div className="onboard">
      <div className="box">
        <div className="container">
          <div className="title">
            We'd love to have <br /> you on board!
          </div>
          <a href="/" className="button">
            Join us
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container"></div>
    </footer>
  );
}

function Home() {
  return (
    <Fragment>
      <div className="fold has-background-blue-light">
        <Nav />
        <JoinUs />
      </div>
      <AreYouUp />
      <DontJustTake />
      <Showcase />
      <HowItWorks />
      <SomeQuestions />
      <TalkToUs />
      <Onboard />
      <Footer />
    </Fragment>
  );
}

export default Home;
