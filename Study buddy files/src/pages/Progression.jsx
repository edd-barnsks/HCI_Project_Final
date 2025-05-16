import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import './Progression.css';

function Progression() {
  const { results } = useContext(QuizContext);

  const calculatePercentage = (score, total) => {
    return total > 0 ? Math.round((score / total) * 100) : 0;
  };

  return (
    <div className="progression-container">
      <h2 className="progression-title">Your Progress</h2>
      {Object.keys(results).length === 0 ? (
        <p>No quiz data yet. Start learning and take some quizzes!</p>
      ) : (
        <div className="progression-list">
          {Object.entries(results).map(([subject, topics]) => (
  <div key={subject}>
    <h3 className="progression-subject">{subject}</h3>
    {Object.entries(topics).map(([topic, data]) => (
      <div className="progress-card" key={topic}>
        <h4 className="progression-topic">{topic}</h4>
        <p>Score: {data.score} / {data.total}</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${calculatePercentage(data.score, data.total)}%` }}
          ></div>
        </div>
        <p>{calculatePercentage(data.score, data.total)}%</p>
      </div>
    ))}
  </div>
))}

        </div>
      )}
    </div>
  );
}

export default Progression;
