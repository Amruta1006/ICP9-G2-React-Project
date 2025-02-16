import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HowToAdoptCard from './components/HowToAdoptCard';
import HowToAdoptPage from './pages/HowToAdoptPage';

function HowToAdopt() {
  return (
    <Router>
      <div className="App">
        <div className="flex justify-center p-6">
          <HowToAdoptCard />
        </div>
        
        <Routes>
          <Route path="/how-to-adopt" element={<HowToAdoptPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default HowToAdopt;
