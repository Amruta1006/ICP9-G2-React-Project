import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import
import Navbar from "./components/Navbar/Navbar"; 
import Home from "./pages/Home";
import AdoptPet from "./pages/AdoptPet";
import ContactUs from "./pages/ContactUs";
import HowToAdopt from "./pages/HowToAdopt";
import PetDetails from "./pages/PetDetails";
import SuccessStories from "./pages/SuccessStories";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoptpet" element={<AdoptPet />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/howtoadopt" element={<HowToAdopt />} />
        <Route path="/petdetails" element={<PetDetails />} />
        <Route path="/successstories" element={<SuccessStories />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
