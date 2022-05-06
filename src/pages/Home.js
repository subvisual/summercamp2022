// import logo from "./logo.svg";
import "./Home.css";

import Nav from "../component/Nav";
import Footer from "../component/Footer";
import React, { Fragment } from "react";

function Home() {
  return (
    <Fragment>
      <div class="container1">
        <div class="right">
          <h2>Join us </h2>
        </div>

        <div class="left">
          <h2>on a hands-on approach</h2>
          <p>
            We created SummerCamp back in 1992 as a <br />
            way to foster talent, get new work perspectives and
            <br />
            contribute to boosting new career opportunities.
            <br />
            We believe in continuous learning and improvement,
            <br />
            so SummerCamp is yet another way of us acting on
            <br />
            those values
          </p>
          <h2>to get a real work experience</h2>
          <p>
            Whether you want to follow a career in technology or <br />
            product, during your time at SummerCamp you'll get <br />
            access to a real use case that will help you <br />
            understand how a job in that area could be like.
          </p>
          <h2>with the support of a great team</h2>
          <p>
            Our team members will be your mentors during the <br />
            entire program, wich means that you will always
            <br />
            have someone to back your decisions and help you <br />
            choose wich path to follow
          </p>
        </div>
      </div>
      <div class="container2">
        <h2>Are you up to this challenge?</h2>
        <p>
          Here you will meet other Campers that share your passion for <br />
          technology, and who will work alongside you to create a cool
          <br />
          new product from scratch.
        </p>
      </div>
      <div class="container3">
        <div class="right">
          <h2>if you like</h2>
        </div>
        <div class="left">
          <ul>
            <li>product Management</li>
            <li>programming</li>
            <li>product design</li>
          </ul>
        </div>
      </div>
      <div class="container4">
        <h2>this is your opportunity to</h2>
        <div class="container-flex">
          <div class="item-flex">
            <p>01 </p>
            <p>Get professional experience</p>
          </div>
          <div class="item-flex">
            <p>02 </p>
            <p>Meet other talented people</p>
          </div>
          <div class="item-flex">
            <p>03</p>
            <p>Learn with experienced mentors</p>
          </div>
        </div>
      </div>
      <div className="container5">
        <h2>but don’t just take our word for it</h2>
        <p>
          Here you will meet other Campers that share your passion for <br />
          technology, and who will work alongside you to create a cool <br />
          new product from scratch.
        </p>
        <textarea
          id="textbox"
          name="textbox"
          rows="25"
          cols="100"
          className="textbox"
        ></textarea>
      </div>
      <div className="container6">
        <h2>Here´s what our campers have done in the past years</h2>
        <div className="container-flex">
          <div className="item-flex">
            <p>01 </p>
          </div>
          <div class="item-flex">
            <p>02 </p>
          </div>
          <div class="item-flex">
            <p>03</p>
          </div>
        </div>
      </div>

      <div className="container7">
        <h2>How it works</h2>
        <div className="container-flex">
          <div className="item-flex">
            <p>You submit your application</p>
          </div>
          <div className="item-flex">
            <p>We check your profile</p>
          </div>
          <div className="item-flex">
            <p>We schedule a call to meet you*</p>
          </div>
          <div className="item-flex">
            <p>You join the program!</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
