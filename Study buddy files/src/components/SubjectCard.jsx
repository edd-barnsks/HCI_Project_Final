import React from 'react';
import './SubjectCard.css';

function SubjectCard({ subject, image, onSeeMore }) {
  return (
    <div className="subject-card">
      <img src={image} alt={subject} className="subject-image" />
      <div className="subject-content">
        <h4 className="subject-title">{subject}</h4>
        <p className="subject-description">Explore quizzes and topics for {subject}.</p>
        <button className="subject-button" onClick={onSeeMore}>See More</button>
      </div>
    </div>
  );
}

export default SubjectCard;
