// ✅ Services Page with Video Background Behind Content
import React from "react";
import { FaFilm, FaCube, FaMagic, FaChalkboard, FaPaintBrush, FaFont, FaSmile, FaPhotoVideo } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const serviceItems = [
    {
      icon: <FaFilm className="text-5xl text-gold" />, title: "2D Animation",
      desc: "We create engaging 2D animations for explainer videos, educational content, and more to deliver your message effectively."
    },
    {
      icon: <FaCube className="text-5xl text-gold" />, title: "3D Animation",
      desc: "Stunning 3D animation for product demos, architecture, and immersive storytelling."
    },
    {
      icon: <FaMagic className="text-5xl text-gold" />, title: "VFX / CGI",
      desc: "We blend reality with imagination through cutting-edge visual effects and CGI for film, ads, and presentations."
    },
    {
      icon: <FaChalkboard className="text-5xl text-gold" />, title: "Web Development",
      desc: "Custom websites and web apps using the latest technologies tailored to your business needs."
    },
    {
      icon: <FaPaintBrush className="text-5xl text-gold" />, title: "Whiteboard Animation",
      desc: "Crisp whiteboard animations ideal for tutorials, business pitches, and storytelling."
    },
    {
      icon: <FaFont className="text-5xl text-gold" />, title: "Logo Animation",
      desc: "Add motion to your brand with animated logos that leave a lasting impression."
    },
    {
      icon: <FaSmile className="text-5xl text-gold" />, title: "Cartoon Animation",
      desc: "Fun and colorful cartoon animations for children’s content, ads, and entertainment."
    },
    {
      icon: <FaPhotoVideo className="text-5xl text-gold" />, title: "Graphic Motion",
      desc: "Eye-catching motion graphics for ads, social media, intros, and branding."
    },
  ];

  return (
    <div className="relative m-0 p-0 -mt-4 overflow-hidden">
      {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="../assets/video/Video 1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <section className="relative z-10 py-20 px-6 md:px-20 bg-darkBg/80 text-gold min-h-screen backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
            <p className="text-softGold max-w-xl mx-auto">
              Explore the range of creative and development services we offer to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {serviceItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-shadowBlack p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-opacity-90 hover:shadow-2xl hover:shadow-gold/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.07, rotate: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 animate-pulse duration-700 ease-in-out hover:animate-none">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-softGold text-sm mb-4">{item.desc}</p>
                <a href="#" className="inline-flex items-center text-gold font-semibold hover:text-softGold transition">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
