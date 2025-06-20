import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/Logo.jpg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-darkBg bg-opacity-90 text-gold shadow-md backdrop-blur"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Image */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 w-auto rounded shadow-md" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              key={link.path}
            >
              <Link
                to={link.path}
                className="text-gold font-semibold hover:text-softGold transition no-underline"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-block"
        >
          <Link
            to="/about"
            className="bg-gold text-black px-5 py-2 rounded font-semibold hover:bg-deepGold transition"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Mobile Menu Icon */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={toggleMenu}
        >
          <span className={`transition-transform ${hovered ? "scale-110 text-softGold" : ""}`}>
            &#9776;
          </span>
        </motion.div>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-darkBg bg-opacity-95 px-6 pb-6"
        >
          <div className="flex flex-col gap-4 items-start">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-gold font-semibold hover:text-softGold transition no-underline"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/services"
              className="mt-2 bg-gold text-black px-5 py-2 rounded font-semibold hover:bg-deepGold transition"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gold z-50"
        style={{ width: "100%" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.header>
  );
};

export default Navbar;
