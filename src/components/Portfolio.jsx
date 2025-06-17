import React from "react";
import portfolio1 from "../assets/img/portfolio/portfolio-1.webp";
import portfolio2 from "../assets/img/portfolio/portfolio-2.webp";
import portfolio4 from "../assets/img/portfolio/portfolio-4.webp";
import portfolio7 from "../assets/img/portfolio/portfolio-7.webp";
import portfolio10 from "../assets/img/portfolio/portfolio-10.webp";
import portfolio11 from "../assets/img/portfolio/portfolio-11.webp";

const Portfolio = () => {
  const projects = [
    { img: portfolio1, category: "Web Design", title: "Modern Dashboard Interface", desc: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis." },
    { img: portfolio10, category: "Graphics", title: "Creative Brand Identity", desc: "Vestibulum id ligula porta felis euismod semper at vulputate." },
    { img: portfolio7, category: "Motion", title: "Product Animation Reel", desc: "Donec ullamcorper nulla non metus auctor fringilla dapibus." },
    { img: portfolio4, category: "Branding", title: "Luxury Brand Package", desc: "Aenean lacinia bibendum nulla sed consectetur elit." },
    { img: portfolio2, category: "Web Design", title: "E-commerce Platform", desc: "Nullam id dolor id nibh ultricies vehicula ut id elit." },
    { img: portfolio11, category: "Graphics", title: "Digital Art Collection", desc: "Cras mattis consectetur purus sit amet fermentum." },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-darkBg text-gold min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Portfolio</h2>
          <p className="text-softGold max-w-xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((item, index) => (
            <div key={index} className="bg-shadowBlack rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src={item.img} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <span className="text-sm text-softGold uppercase tracking-wide">{item.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-1">{item.title}</h3>
                <p className="text-softGold text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
