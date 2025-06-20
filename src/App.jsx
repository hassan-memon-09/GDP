import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';

// import './assets/vendor/bootstrap/css/bootstrap.min.css';
// import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
// import './assets/vendor/aos/aos.css';
// import './assets/vendor/glightbox/css/glightbox.min.css';
// import './assets/vendor/swiper/swiper-bundle.min.css';
// import './assets/css/main.css';
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
// import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
