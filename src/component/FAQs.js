import React, { useState } from "react";

import "./FAQs.css";

function Question(props) {
  const titleClass = `title has-font-family-secondary has-font-size-medium ${
    props.question.open ? "has-text-blue" : ""
  }`;

  return (
    <div className="question">
      <div className="header columns" onClick={props.onToggle}>
        <div className="left">
          <h3 className={titleClass}>{props.question.title}</h3>
        </div>
        <div className="right">
          <div
            className="toggle"
            style={props.question.open ? { transform: "scaleY(-1)" } : {}}
          >
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L9 9L16 2"
                stroke={props.question.open ? "#045cfc" : "#403F4C"}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={
          "columns has-font-size-small " +
          (!props.question.open ? " is-hidden" : "")
        }
      >
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: props.question.text }}
        />
      </div>
    </div>
  );
}

export default function FAQs(props) {
  const [questions, setQuestions] = useState(props.faqs);

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
