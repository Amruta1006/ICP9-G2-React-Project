import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdoptPet from "./pages/AdoptPet";
import ContactUs from "./pages/ContactUs";
import HowToAdopt from "./pages/HowToAdopt";
import PetDetails from "./pages/PetDetails";
import SuccessStories from "./pages/SuccessStories";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoptpet" element={<AdoptPet />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/howtoadopt" element={<HowToAdopt />} />
        <Route path="/petdetails" element={<PetDetails />} />
        <Route path="/successstories" element={<SuccessStories />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
