import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  return (
<>
      
    <Landing/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
  </>
  );
};

export default Home;
