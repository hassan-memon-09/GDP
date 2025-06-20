// ✅ Portfolio Page with Framer Motion + 3D Tile Hover Effects
import React from "react";
import { motion } from "framer-motion";
import portfolio1 from "../assets/img/portfolio/Web.png";
import portfolio2 from "../assets/img/portfolio/Web.png";
import portfolio4 from "../assets/img/portfolio/Motion.jpg";
import portfolio7 from "../assets/img/portfolio//Motion.jpg";
import portfolio10 from "../assets/img/portfolio/Graphics.jpg";
import portfolio11 from "../assets/img/portfolio/Graphics.jpg";

const Portfolio = () => {
  const projects = [
    {
      img: portfolio1,
      category: "Web Design",
      title: "Modern Dashboard Interface",
      desc: "An intuitive dashboard with dynamic data visualization, designed to enhance productivity and user experience for business management."
    },
    {
      img: portfolio10,
      category: "Graphics",
      title: "Creative Brand Identity",
      desc: "A bold and vibrant graphic identity for a modern startup, including logo, color scheme, and typography that communicates innovation."
    },
    {
      img: portfolio7,
      category: "Motion",
      title: "Product Animation Reel",
      desc: "A sleek animated reel showcasing product features with transitions, movement, and storytelling that grabs attention instantly."
    },
    {
      img: portfolio4,
      category: "Branding",
      title: "Luxury Brand Package",
      desc: "Elegant and premium branding solution developed for high-end clientele including visuals, packaging, and stationery."
    },
    {
      img: portfolio2,
      category: "Web Design",
      title: "E-commerce Platform",
      desc: "User-friendly e-commerce platform designed for seamless navigation, fast checkout, and scalable architecture."
    },
    {
      img: portfolio11,
      category: "Graphics",
      title: "Digital Art Collection",
      desc: "A curated collection of digital illustrations blending futuristic aesthetics with modern design elements and symmetry."
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-darkBg text-gold min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-4">Portfolio</h2>
          <p className="text-softGold max-w-xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              className="bg-shadowBlack rounded-lg overflow-hidden group [perspective:1000px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="rounded-lg overflow-hidden shadow-md bg-shadowBlack"
              >
                <img src={item.img} alt={item.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="p-4 text-center">
                  <span className="text-sm text-softGold uppercase tracking-wide">{item.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-2 text-gold drop-shadow-md glow-text">
                    {item.title}
                  </h3>
                  <p className="text-softGold text-sm">{item.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
