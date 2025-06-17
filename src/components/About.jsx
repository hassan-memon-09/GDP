import React from "react";
import about1 from "../assets/img/about/about-portrait-1.webp";
import about2 from "../assets/img/about/about-8.webp";
import about3 from "../assets/img/about/about-12.webp";

const About = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-darkBg text-gold min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-softGold mb-2">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unleashing Potential with Creative Strategy</h2>
          <p className="text-base text-softGold italic mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-gold">✔</span>
              <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">✔</span>
              <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">✔</span>
              <span>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </span>
            </li>
          </ul>
          <a href="/about" className="inline-flex items-center gap-2 text-gold hover:text-softGold transition font-semibold">
            <span>Read More</span>
            <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src={about1} alt="About 1" className="rounded-lg w-full" />
          <div className="flex flex-col gap-4">
            <img src={about2} alt="About 2" className="rounded-lg w-full" />
            <img src={about3} alt="About 3" className="rounded-lg w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;