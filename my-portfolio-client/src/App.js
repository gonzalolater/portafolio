import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Mentorships from './components/Mentorships';
import Audits from './components/Audits';
import Interviews from './components/Interviews';
import TechnicalInterviews from './components/TechnicalInterviews';
import Studies from './components/Studies';
import Footer from './components/Footer';
import TechnicalChallenges from './components/TechnicalChallenges'
import Sponsors from './components/Sponsors';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/audits" element={<Audits />} />
        <Route path="/TechnicalChallenges" element={<TechnicalChallenges />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/technical-interviews" element={<TechnicalInterviews />} />
        <Route path="/mentorships" element={<Mentorships />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;