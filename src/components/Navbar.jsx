import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-darkBg bg-opacity-90 text-gold shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-gold font-semibold hover:text-softGold transition">
          Invent
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-gold font-semibold hover:text-softGold transition">Home</Link>
          <Link to="/about" className="text-gold font-semibold hover:text-softGold transition">About</Link>
          <Link to="/services" className="text-gold font-semibold hover:text-softGold transition">Services</Link>
          <Link to="/portfolio" className="text-gold font-semibold hover:text-softGold transition">Portfolio</Link>
          <Link to="/contact" className="text-gold font-semibold hover:text-softGold transition">Contact</Link>
        </nav>

        <Link to="/about" className="hidden md:inline-block bg-gold text-black px-5 py-2 rounded font-semibold hover:bg-deepGold transition">
          Get Started
        </Link>

        {/* Mobile Menu Button (if needed) */}
        <div className="md:hidden text-2xl cursor-pointer">
          &#9776;
        </div>
      </div>
    </header>
  );
};

export default Navbar;