import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { QuizContext } from '../context/QuizContext';
import './Quiz.css';

function Quiz() {
  const location = useLocation();
  const { subject, topic, questions = [] } = location.state || {};

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const { addResult } = useContext(QuizContext);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(prev => prev + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
  const finalScore = score + (selected === questions[current].answer ? 1 : 0);
  setScore(finalScore);
  setShowResult(true);
  addResult(subject, topic, finalScore, questions.length);

}
  };

  if (!questions.length) {
    return <div className="quiz-container">No questions available for this quiz.</div>;
  }

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Quiz: {subject}</h2>
      {showResult ? (
        <div className="quiz-result">
          <h3>Quiz Completed!</h3>
          <p>Your score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div className="quiz-question">
          <h4>{questions[current].question}</h4>
          <ul className="quiz-options">
            {questions[current].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)} className="quiz-option-btn">
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
