import React, { useState } from "react";
const Question = ({ id, title, info }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article key={id} className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? "-" : "+"}
        </button>
      </header>

      <p>{readMore ? info : `${info.substring(0, 0)}`}</p>
    </article>
  );
};

export default Question;
