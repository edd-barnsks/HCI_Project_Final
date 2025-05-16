import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubjectCard from '../components/SubjectCard';
import './Home.css';
import mathImg from '../assets/Mathematics_thumbnail.jpg';
import chemImg from '../assets/Chemistry_thumbnail.png';
import bioImg from '../assets/Biology_thumbnail.png';
import crimImg from '../assets/Criminology_thumbnail.png';
import psychImg from '../assets/Psychology_thumbnail.png';
import dataImg from '../assets/Data_Analysis_thumbnail.png';
import comsciImg from '../assets/computer_science_thumbnail.jpg';

const subjects = [
  { name: 'Mathematics', image: mathImg },
  { name: 'Biology', image: bioImg },
  { name: 'Chemistry', image: chemImg },
  { name: 'Criminology', image: crimImg },
  { name: 'Psychology', image: psychImg },
  { name: 'Data Analysis', image: dataImg },
  { name: 'Computer Science', image: comsciImg },
  // Subjects thumbnails here dumb dumb
];

function Home() {
  const navigate = useNavigate();

  const handleSeeMore = (subject) => {
    navigate('/subjects', { state: { subject } });
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '40px' }}>
      {subjects.map((subj, index) => (
        <SubjectCard
          key={index}
          subject={subj.name}
          image={subj.image}
          onSeeMore={() => handleSeeMore(subj.name)}
        />
      ))}
    </div>
  );
}

export default Home;
