import React from "react";

export default function TalkToUs() {
  return (
    <div className="talk-to-us">
      <div className="container">
        <div className="title has-font-size-large">Still got questions?</div>
        <a
          href="mailto:contact@subvisual.com?subject=Hi%20Subvisual!%20I%20want%20to%20talk%20to%20you"
          className="button"
        >
          Talk to us
        </a>
      </div>
    </div>
  );
}
