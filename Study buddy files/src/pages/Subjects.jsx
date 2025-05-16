import React, { useState } from 'react';
import './Subjects.css';
import { useNavigate,useLocation  } from 'react-router-dom';

const subjectTopics = {
  Mathematics: ['Algebra', 'Geometry', 'Calculus'],
  'Computer Science': ['Data Structures', 'Algorithms', 'Networking'],
  Biology: ['Genetics', 'Ecology', 'Anatomy'],
  Chemistry: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry'],
  Psychology: ['Cognitive', 'Behavioral', 'Developmental'],
  Criminology: ['Theories of Crime', 'Criminal Justice System'],
  Statistics: ['Descriptive Stats', 'Inferential Stats'],
  'Data analysis': ['Data Cleaning', 'Visualization', 'Interpretation'],
};

function Subjects() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedSubject = location.state?.subject || null; // default to null
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (subject) => {
    setExpanded(expanded === subject ? null : subject);
  };

  const handleTopicClick = (subject, topic) => {
    navigate('/topic', { state: { subject, topic } });
  };

  const filteredTopics = selectedSubject
    ? { [selectedSubject]: subjectTopics[selectedSubject] }
    : subjectTopics;

  return (
    <div style={{ padding: '40px' }}>
      <h2>Available Courses</h2>
      {Object.keys(filteredTopics).map((subject) => (
        <div key={subject} style={{ borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
          <div
            onClick={() => handleToggle(subject)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '10px 0',
              fontWeight: 'bold',
              color: '#000000f',
            }}
          >
            <span>{subject}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate('/quiz', { state: { subject } });
              }}
              style={{
                padding: '6px 12px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
              }}
            >
              Start Quiz
            </button>
          </div>
          {expanded === subject && (
  <ul className="topic-list-animated" style={{ paddingLeft: '20px', marginBottom: '10px' }}>
  {filteredTopics[subject].map((topic, index) => (
    <li
      key={index}
      className="subtopic-item"
      onClick={() => handleTopicClick(subject, topic)}
    >
      {topic}
    </li>
  ))}
</ul>
)}

        </div>
      ))}
    </div>
  );
}

export default Subjects;