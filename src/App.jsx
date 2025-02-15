import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdoptPet from "./pages/AdoptPet";
import ContactUs from "./pages/ContactUs";
import HowToAdopt from "./pages/HowToAdopt";
import PetDetails from "./pages/PetDetails";
import SuccessStories from "./pages/SuccessStories";
import UserDashboard from "./pages/UserDashboard";
import AboutUs from "./pages/AboutUs";  
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/adoptpet" element={<AdoptPet />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/howtoadopt" element={<HowToAdopt />} />
          <Route path="/petdetails" element={<PetDetails />} />
          <Route path="/successstories" element={<SuccessStories />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
        </Routes>
      </div>
      <Footer />  
    </div>
  )
}

export default App;
