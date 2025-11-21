import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import PitchDeck from './PitchDeck';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pitch-deck" element={<PitchDeck />} />
      </Routes>
    </Router>
  );
}

export default App;
