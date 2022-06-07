import React, { useState } from "react";

import "./FAQs.css";

const QUESTIONS = [
  {
    id: "1",
    title: "How many teams participate in the Summer Camp?",
    text: (
      <div>
        Just one. We look for
        <span className="has-text-bold">
          1 Product Manager, 1 Product Designer,
        </span>
        and <span className="has-text-bold">2 to 3 Developers </span> per
        cohort. Our focus is on ensuring that this group's experience is the
        best possible, so we allocate all the necessary resources to our
        campers' learning and keep it to one group only.
      </div>
    ),
    open: false,
  },
  {
    id: "2",
    title: "Are the dates flexible?",
    text: (
      <div>
        <span className="has-text-bold">
          The dates are pre-set by the organization.
        </span>
        As the cohort works as a team to complete the project within the
        available limited time, it is critical that they work in tandem and are
        constantly aligned.
      </div>
    ),
    open: false,
  },
  {
    id: "3",
    title: "Can I work remotely?",
    text: (
      <div>
        <span className="has-text-bold">Sure! </span>Our participants have the
        option of working from home, from our offices in Braga, or from another
        location at their disposal. We are proud to have candidates from around
        the world and we just try to guarantee some overlap when it comes to
        working hours, so that there can be moments of synchronous coordination
        between the team and mentors.
      </div>
    ),
    open: false,
  },
  {
    id: "4",
    title: "What will my day-to-day be like?",
    text: (
      <div>
        During the first week the focus will be on getting to know each other to
        create strong working relationships. As the project progresses, each
        participant is expected to develop their part of the work with the full
        support of the mentors, and in constant coordination with the rest of
        the team. The participants' day-to-day usually involves
        <span className="has-text-bold">
          meetings with the team and with their mentors, constant learning,
        </span>
        and
        <span className="has-text-bold">
          networking with other members of Subvisual as well as the Subvisual
          Universe,
        </span>
        etc. Ultimately, everyone will have the autonomy to decide how to
        allocate their time!
      </div>
    ),
    open: false,
  },
];

function Question(props) {
  const titleClass = `title has-font-family-secondary has-font-size-medium ${
    props.question.open ? "has-text-blue" : ""
  }`;

  return (
    <div className="question">
      <div className="columns header" onClick={props.onToggle}>
        <div className="left">
          <h3 className={titleClass}>{props.question.title}</h3>
        </div>
        <div className="right">
          <div className="toggle">
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
      <div
        className={
          "content has-font-size-small " +
          (!props.question.open ? " is-hidden" : "")
        }
      >
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
