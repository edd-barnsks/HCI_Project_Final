import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import CalendarPage from './pages/CalendarPage';
import Progression from './pages/Progression';
import Quiz from './pages/Quiz';
import SubjectTopics from "./pages/SubjectTopics";
import TopicDetail from './pages/TopicDetail';
import SubtopicPage from './pages/SubtopicPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/progression" element={<Progression />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/subjects/:subjectId" element={<SubjectTopics />} />
        <Route path="/quiz/:subjectId/:topicId" element={<Quiz />} />
        <Route path="/topics" element={<SubjectTopics />} />
        <Route path="/topic" element={<TopicDetail />} />
        <Route path="/subtopic" element={<SubtopicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
