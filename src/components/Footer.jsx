import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-darkBg text-gold pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Go Dekho Pakistan</h2>
          <p className="text-sm">A108 Adam Street<br />New York, NY 535022</p>
          <p className="mt-3 text-sm font-bold text-gold"><strong>Phone:</strong> +1 5589 55488 55</p>
          <p className="text-sm font-bold text-gold"><strong>Email:</strong> info@example.com</p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Home</Link></li>
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">About us</Link></li>
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Services</Link></li>
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Terms of service</Link></li>
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Our Services</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Web Design</Link></li>
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Development</Link></li>
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Marketing</Link></li>
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Graphics</Link></li>
          </ul>
        </div>

        {/* Extra Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Explore</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Molestiae</Link></li>
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Excepturi</Link></li>
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Suscipit</Link></li>
            <li><Link to="#" className="hover:text-softGold font-semibold text-gold no-underline">Dilecta</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t border-shadowBlack pt-4">
        © <strong>Go Dekho Pakistan</strong> — All Rights Reserved<br />
        <span className="text-softGold">Developed by Muhammad Hassan</span>
      </div>
    </footer>
  );
};

export default Footer;
