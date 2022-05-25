import React, { useState } from "react";

import "./Testimonials.css";

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

function ArrowButton(props) {
  const directions = {
    left: { transform: "scale(1, 1)" },
    right: { transform: "scale(-1, 1)" },
  };

  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={directions[props.direction]}
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
  );
}

export default function Testimonials(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function slideLeft() {
    setCurrentSlide(
      currentSlide - 1 < 0 ? TESTIMONIALS.length - 1 : currentSlide - 1
    );
  }

  function slideRight() {
    setCurrentSlide((currentSlide + 1) % TESTIMONIALS.length);
  }

  return (
    <div className="testimonials has-background-blue-light">
      <div className="columns">
        <div className="content">
          {TESTIMONIALS.map((testimonial, index) => {
            return (
              <div
                key={index}
                className={
                  "testimonial" + (currentSlide !== index ? " is-hidden" : "")
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
            <div onClick={slideLeft}>
              <ArrowButton direction="left" />
            </div>
            <div onClick={slideRight}>
              <ArrowButton direction="right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
