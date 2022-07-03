import React from "react";
import FAQs from "../FAQs";

export default function SomeQuestions({ faqs }) {
  return (
    <div className="some-questions" id="faqs">
      <div className="container">
        <div className="columns">
          <div className="top">
            <h2 className="title has-font-size-large">
              Some questions we are usually asked
            </h2>
          </div>
          <div className="bottom">
            <FAQs faqs={faqs} />
          </div>
        </div>
      </div>
    </div>
  );
}
