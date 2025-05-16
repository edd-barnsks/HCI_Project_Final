// pages/SubjectTopics.jsx
import { useLocation, useNavigate } from 'react-router-dom';

const topicsData = {
  Mathematics: ['Algebra', 'Geometry', 'Calculus'],
  Biology: ['Cell Biology', 'Genetics', 'Evolution'],
  'Computer Science': ['Data Structures', 'Algorithms', 'Databases'],
  Chemistry: ['Organic Chemisrty', 'Inorganic Chemistry', 'Physical Chemistry'],
};

const SubjectTopics = () => {
  const { state } = useLocation();
  const subject = state?.subject;
  const topics = topicsData[subject] || [];
  const navigate = useNavigate();

  const goToTopic = (topic) => {
    navigate('/topic', { state: { subject, topic } });
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>{subject} Topics</h2>
      <ul>
        {topics.map((topic, i) => (
          <li key={i} onClick={() => goToTopic(topic)} style={{ cursor: 'pointer', color: 'green' }}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectTopics;
