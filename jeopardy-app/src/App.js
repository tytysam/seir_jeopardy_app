import React, { useState, useEffect } from "react";
import Display from "./Display";
import "./App.css";

const App = () => {
  const [questions, setQuestion] = useState([]);

  const updateQuestions = async () => {
    try {
      const apiEndpoint = "http://jservice.io/api/random";
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setQuestion(data);
    } catch (err) {
      console.log(`Uh oh! There was an error: ${err}`);
    }
  };

  // useEffect
  useEffect(() => {
    updateQuestions();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Jeopardy</h1>
          {questions.map((question) => {
            return (
              <Display question={question.question} answer={question.answer} />
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default App;
