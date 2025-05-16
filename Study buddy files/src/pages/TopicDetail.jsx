import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const subtopics = {
  Algebra: ['Linear Equations', 'Quadratic Equations'],
  Geometry: ['Triangles', 'Circles'],
  Calculus: ['Derivatives', 'Integrals'],
  Cognitive: ['Memory', 'Perception'],
  Behavioral: ['Conditioning', 'Reinforcement'],
  // Add more topics and their subtopics here
};

function TopicDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const topic = location.state?.topic;
  const subject = location.state?.subject;

  const currentSubtopics = subtopics[topic] || [];

  const handleSubtopicClick = (subtopic) => {
    navigate('/subtopic', { state: { subject, topic, subtopic } });
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>{topic}</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {currentSubtopics.map((subtopic, index) => (
          <div
            key={index}
            onClick={() => handleSubtopicClick(subtopic)}
            style={{
              cursor: 'pointer',
              border: '1px solid #007bff',
              borderRadius: '8px',
              padding: '20px',
              minWidth: '200px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              transition: '0.3s',
            }}
          >
            <h4 style={{ color: '#007bff' }}>{subtopic}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicDetail;
