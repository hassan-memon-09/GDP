import React from "react";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  return (
<>
      {/*<Cursor /> */}
    <Navbar/>
    <Landing/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </>
  );
};

export default Home;
