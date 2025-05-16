import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [results, setResults] = useState({});

  const addResult = (subject, topic, score, total) => {
    setResults(prevResults => ({
      ...prevResults,
      [subject]: {
        ...(prevResults[subject] || {}),
        [topic]: { score, total, date: new Date().toLocaleString() }
      }
    }));
  };

  return (
    <QuizContext.Provider value={{ results, addResult }}>
      {children}
    </QuizContext.Provider>
  );
};
