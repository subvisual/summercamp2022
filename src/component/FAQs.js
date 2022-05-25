import React, { useState } from "react";

import "./FAQs.css";

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

function Question(props) {
  return (
    <div className="question">
      <div className="columns">
        <div className="left">
          <h3 className="title">{props.question.title}</h3>
        </div>
        <div className="right">
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
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={"content" + (!props.question.open ? " is-hidden" : "")}>
        <p>{props.question.text}</p>
      </div>
    </div>
  );
}

export default function FAQs(props) {
  const [questions, setQuestions] = useState(QUESTIONS);

  function toggleQuestion(questionId) {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, open: !q.open } : q))
    );
  }

  return (
    <div>
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
  );
}
