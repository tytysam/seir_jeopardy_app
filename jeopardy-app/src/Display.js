import React, { useState } from "react";

const Display = ({ question, answer }) => {
  const [showAnswer, toggleAnswer] = useState(false);

  return (
    <div>
      <button>Next Question</button>

      <div>{question}</div>
      <div>{showAnswer && answer}</div>
      <button onClick={() => toggleAnswer(!showAnswer)}>Reveal Answer</button>
    </div>
  );
};

export default Display;
