// ✅ About Page with Scroll-Based Timeline, Parallax, Text Shadow & Smooth Animations
import React from "react";
import about1 from "../assets/img/about/About 4.webp";
import about2 from "../assets/img/about/About 2.jpg";
import about3 from "../assets/img/about/About 1.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-darkBg text-gold min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-wider text-softGold mb-2 drop-shadow-md mt-4">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-xl">
            Go Dekho Pakistan Is An Advertisement And Marketing Company.
          </h2>
          <p className="text-base text-softGold italic mb-6 drop-shadow">
            We Created This Beneficial Platform On The Google Play Store Where We Offer Service To The Local Brands And Share Awareness About Digital Marketing And How They Can Attract THOUSANDS OF CUSTOMERS ONLINE!!! We are providing affordable memberships to our local brands. We created a simple but effective way of helping our Muslim Community grow together. What services we are providing for the soical media.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-gold">✔</span>
              <span className="drop-shadow-sm">Pop Up Ad For 3 Seconds.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">✔</span>
              <span className="drop-shadow-sm">Pop Up Ad For 5 Seconds.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold">✔</span>
              <span className="drop-shadow-sm">
                Pop Up Ad For 30 Seconds.
              </span>
            </li>
          </ul>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-gold hover:text-softGold transition font-semibold"
          >
            <span>Read More</span>
            <span>→</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <motion.img
            src={about1}
            alt="About 1"
            className="rounded-lg w-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          <div className="flex flex-col gap-4">
            <motion.img
              src={about2}
              alt="About 2"
              className="rounded-lg w-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.img
              src={about3}
              alt="About 3"
              className="rounded-lg w-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
