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
// import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        
      </Routes>
    </Router>
  );
};

export default App;
