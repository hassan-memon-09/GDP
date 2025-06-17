import React from "react";
import illustration from "../assets/img/illustration/illustration-16.webp";

const Landing = () => {
  return (
    <section
      id="hero"
      className="bg-darkBg text-gold py-20 px-6 md:px-20 lg:px-32 min-h-screen flex flex-col justify-center"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center bg-darkBg border border-gold rounded-full px-4 py-2 text-sm font-medium">
            <i className="bi bi-bell mr-2 text-gold"></i>
            Innovative Solutions
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Accelerating business growth through innovative technology
          </h1>

          <p className="text-softGold text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim
            justo.
          </p>

          <a
            href="#"
            className="inline-block bg-gold text-black font-semibold py-3 px-6 rounded-md hover:bg-deepGold transition"
          >
            Discover More
          </a>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <img
            src={illustration}
            alt="Business Growth"
            className="rounded-lg w-full h-auto shadow-lg"
          />
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        <div className="bg-shadowBlack p-6 rounded-lg hover:shadow-lg transition">
          <div className="text-3xl mb-4">
            <i className="bi bi-gear"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Rapid Deployment</h3>
          <p className="text-softGold text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        <div className="bg-shadowBlack p-6 rounded-lg hover:shadow-lg transition">
          <div className="text-3xl mb-4">
            <i className="bi bi-window"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
          <p className="text-softGold text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className="bg-shadowBlack p-6 rounded-lg hover:shadow-lg transition">
          <div className="text-3xl mb-4">
            <i className="bi bi-headset"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
          <p className="text-softGold text-sm">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
