import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-darkBg text-gold min-h-screen">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div variants={fadeUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-4">Contact</h2>
          <p className="text-softGold max-w-xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-shadowBlack p-6 rounded-lg text-center">
            <div className="text-3xl mb-4">
              <i className="bi bi-geo-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Address</h3>
            <p className="text-softGold">Moonshine St. 14/05 Light City, London, United Kingdom</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-shadowBlack p-6 rounded-lg text-center">
            <div className="text-3xl mb-4">
              <i className="bi bi-telephone"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact Number</h3>
            <p className="text-softGold">Mobile: 00 (123) 456 78 90</p>
            <p className="text-softGold">Email: GoDekhoPakistan@gmail.com</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-shadowBlack p-6 rounded-lg text-center">
            <div className="text-3xl mb-4">
              <i className="bi bi-clock"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Opening Hour</h3>
            <p className="text-softGold">Monday - Saturday: 9:00 - 18:00</p>
            <p className="text-softGold">Sunday: Closed</p>
          </motion.div>
        </motion.div>

        <motion.form 
          variants={fadeUp}
          className="space-y-6 bg-shadowBlack p-8 rounded-lg shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Your Name*" required className="bg-darkBg text-gold placeholder-softGold px-4 py-3 rounded w-full" />
            <input type="email" name="email" placeholder="Email Address*" required className="bg-darkBg text-gold placeholder-softGold px-4 py-3 rounded w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="phone" placeholder="Phone Number*" required className="bg-darkBg text-gold placeholder-softGold px-4 py-3 rounded w-full" />
            <select name="subject" required className="bg-darkBg text-gold px-4 py-3 rounded w-full">
              <option value="">Select Service*</option>
              <option value="Service 1">Consulting</option>
              <option value="Service 2">Development</option>
              <option value="Service 3">Marketing</option>
              <option value="Service 4">Support</option>
            </select>
          </div>

          <textarea name="message" rows="6" placeholder="Write a message*" required className="bg-darkBg text-gold placeholder-softGold px-4 py-3 rounded w-full"></textarea>

          <div className="text-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gold text-black font-semibold px-8 py-3 rounded hover:bg-deepGold transition"
            >
              Submit Message
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;