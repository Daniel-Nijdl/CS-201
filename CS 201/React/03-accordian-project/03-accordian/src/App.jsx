import data from "./util/data";
import React, { useState } from "react";
import Question from "./components/Question";

const App = ({ question, id }) => {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {data.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
