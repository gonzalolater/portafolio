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

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentorships" element={<Mentorships />} />
        <Route path="/audits" element={<Audits />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/technical-interviews" element={<TechnicalInterviews />} />
        <Route path="/studies" element={<Studies />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;