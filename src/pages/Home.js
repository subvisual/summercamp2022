import "./Home.css";

import React, { Fragment, useState } from "react";

const QUESTIONS = [
  {
    id: "1",
    title: "lorem ipsum",
    text: "lorem ipsum dolor sit amet",
    open: false,
  },
  {
    id: "2",
    title: "lorem ipsum",
    text: "lorem ipsum dolor sit amet",
    open: false,
  },
  {
    id: "3",
    title: "lorem ipsum",
    text: "lorem ipsum dolor sit amet",
    open: false,
  },
  {
    id: "4",
    title: "lorem ipsum",
    text: "lorem ipsum dolor sit amet",
    open: false,
  },
];

const TESTIMONIALS = [
  {
    text: "The SummerCamp was the perfect opportunity to validate my wish to pursue a career in Product Management as it provided me with a real life work experience. Additionally, being surrounded by other talented people from all background who shared a common vision, made this an unforgetable summer.",
    author: "Álvaro Bezerra",
    info: "Summer Camp 2020",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repudiandae id nisi inventore ipsum omnis impedit blanditiis voluptatum eveniet fuga corrupti, ducimus velit veritatis quasi ipsa soluta ad ratione sed!",
    author: "Álvaro Bezerra",
    info: "Summer Camp 2020",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repudiandae id nisi inventore ipsum omnis impedit blanditiis voluptatum eveniet fuga corrupti, ducimus velit veritatis quasi ipsa soluta ad ratione sed!",
    author: "John Doe",
    info: "Summer Camp 2020",
  },
];

function Question(props) {
  return (
    <div className="question">
      <div className="question-header">
        <h3 className="title">{props.question.title}</h3>
        <div className="toggle" onClick={props.onToggle}>
          <svg
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L9 9L16 2"
              stroke="#403F4C"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={"text" + (!props.question.open ? " is-hidden" : "")}>
        <p>{props.question.text}</p>
      </div>
    </div>
  );
}

function Home() {
  const [questions, setQuestions] = useState(QUESTIONS);
  const [currentSlide, setCurrentSlide] = useState(0);

  function toggleQuestion(questionId) {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, open: !q.open } : q))
    );
  }

  function slideLeft() {
    setCurrentSlide(
      currentSlide - 1 < 0 ? TESTIMONIALS.length - 1 : currentSlide - 1
    );
  }

  function slideRight() {
    setCurrentSlide((currentSlide + 1) % TESTIMONIALS.length);
  }

  return (
    <Fragment>
      <div className="join-us">
        <div className="box">
          <div className="container">
            <div className="columns">
              <div className="join-us-left">
                <h2 className="title">Join us</h2>
              </div>

              <div className="join-us-right">
                <div className="item">
                  <h2 className="title">
                    <span>on a</span>
                    <span className="has-text-primary"> hands-on </span>
                    <span>approach</span>
                  </h2>
                  <div className="content">
                    <p>
                      We created SummerCamp back in 2016 as a way to foster
                      talent, get new work perspectives and contribute to
                      boosting new career opportunities. We believe in
                      continuous learning and improvement, so SummerCamp is yet
                      another way of us acting on those values
                    </p>
                  </div>
                </div>
                <div className="item">
                  <h2 className="title">
                    <span>to get a </span>
                    <span className="has-text-primary"> real work </span>
                    <span>experience</span>
                  </h2>
                  <div className="content">
                    <p>
                      Whether you want to follow a career in technology or
                      product, during your time at SummerCamp you'll get access
                      to a real use case that will help you understand how a job
                      in that area could be like.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <h2 className="title">
                    <span> with the support of a </span>
                    <span className="has-text-primary"> great team</span>
                  </h2>
                  <div className="content">
                    <p>
                      Our team members will be your mentors during the entire
                      program, wich means that you will always have someone to
                      back your decisions and help you choose wich path to
                      follow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="challenge">
        <div className="container">
          <div className="columns">
            <div className="containerTittle">
              <h2 className="tittle">Are you up to this challenge?</h2>
            </div>
            <div className="containerText">
              <div className="content">
                <p>
                  Here you will meet other Campers that share your passion for
                  technology, and who will work alongside you to create a cool
                  new product from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="if-you-like">
        <div className="container">
          <div className="columns">
            <div className="left">
              <h2 className="tittle">If you like</h2>
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
      </div>

      <div className="your-opportunity">
        <div className="container">
          <div className="columns">
            <div className="title">
              <h2>this is your opportunity to</h2>
            </div>
            <div className="caixa">
              <div className="container-opportunity">
                <div className="item-01">
                  01 <br /> Get professional experience
                </div>
                <div className="item-02">
                  02 <br /> Meet other talented people
                </div>
                <div className="item-03">
                  03 <br /> Learn with experienced mentors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dont-just-take">
        <div className="container">
          <div className="columns">
            <div className="title">
              <h2>
                But don't just take our
                <br />
                word for it
              </h2>
            </div>
          </div>
          <div className="box">
            <div className="columns">
              <div className="content">
                {TESTIMONIALS.map((testimonial, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        "testimonial" +
                        (currentSlide !== index ? " is-hidden" : "")
                      }
                    >
                      <div className="text">
                        <p>{testimonial.text}</p>
                      </div>
                      <div className="author">
                        <p>{testimonial.author}</p>
                        <p>{testimonial.info}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="buttons">
                  <div className="button-left" onClick={slideLeft}>
                    <svg
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.499995 35C0.499997 15.9462 15.9462 0.500003 35 0.500005C54.0538 0.500006 69.5 15.9462 69.5 35C69.5 54.0538 54.0538 69.5 35 69.5C15.9462 69.5 0.499994 54.0538 0.499995 35Z"
                        stroke="#045CFC"
                      />
                      <path
                        d="M21.6464 34.6464C21.4512 34.8417 21.4512 35.1583 21.6464 35.3536L24.8284 38.5355C25.0237 38.7308 25.3403 38.7308 25.5355 38.5355C25.7308 38.3403 25.7308 38.0237 25.5355 37.8284L22.7071 35L25.5355 32.1716C25.7308 31.9763 25.7308 31.6597 25.5355 31.4645C25.3403 31.2692 25.0237 31.2692 24.8284 31.4645L21.6464 34.6464ZM48 34.5L22 34.5L22 35.5L48 35.5L48 34.5Z"
                        fill="#045CFC"
                      />
                    </svg>
                  </div>
                  <div className="button-right" onClick={slideRight}>
                    <svg
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.499995 35C0.499997 15.9462 15.9462 0.500003 35 0.500005C54.0538 0.500006 69.5 15.9462 69.5 35C69.5 54.0538 54.0538 69.5 35 69.5C15.9462 69.5 0.499994 54.0538 0.499995 35Z"
                        stroke="#045CFC"
                      />
                      <path
                        d="M21.6464 34.6464C21.4512 34.8417 21.4512 35.1583 21.6464 35.3536L24.8284 38.5355C25.0237 38.7308 25.3403 38.7308 25.5355 38.5355C25.7308 38.3403 25.7308 38.0237 25.5355 37.8284L22.7071 35L25.5355 32.1716C25.7308 31.9763 25.7308 31.6597 25.5355 31.4645C25.3403 31.2692 25.0237 31.2692 24.8284 31.4645L21.6464 34.6464ZM48 34.5L22 34.5L22 35.5L48 35.5L48 34.5Z"
                        fill="#045CFC"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-camper">
        <div className="container">
          <div className="columns">
            <div className="title">
              Here's what our campers have done in the past years
            </div>
          </div>
          <div className="columns">
            <div className="right">
              <div className="columnshalf">
                <div className="subtitle">YAMS</div>
                <div className="sub-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do.
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <div className="left">
              <div className="columnshalf">
                <div className="empty-box">lalalala</div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="right">
              <div className="columnshalf">
                <div className="empty-box">lalalala</div>
              </div>
            </div>

            <div className="left">
              <div className="columnshalf">
                <div className="subtitle-left">SHELF</div>
                <div className="sub-subtitle-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do.
                </div>
                <div className="text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="right">
              <div className="columnshalf">
                <div className="subtitle">YAMS</div>
                <div className="sub-subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do.
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <div className="left">
              <div className="columnshalf">
                <div className="empty-box">lalalala</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blue-box">
        <div className="container">
          <div className="columns">
            <div className="blue-box-title"> How it works</div>
            <div className="boxes-container">
              <div className="boxes">
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

              <div className="boxes">
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

      <div className="some-questions">
        <div className="container">
          <div className="columns">
            <div className="top">
              <h2 className="title">Some questions we are usually asked</h2>
            </div>
            <div className="questions">
              {questions.map((question, index) => {
                return (
                  <Question
                    key={index}
                    question={question}
                    onToggle={() => toggleQuestion(question.id)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
