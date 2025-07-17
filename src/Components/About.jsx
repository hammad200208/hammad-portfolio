import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="section px-6 py-20 bg-white text-center md:text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="/bg-removebg-preview.jpg"
            alt="About"
            className="w-52 md:w-72 rounded-lg shadow-md"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-blue-600 mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            I'm a passionate web developer with experience in creating responsive and interactive websites. My focus is on writing clean and efficient code using modern web technologies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I love solving problems and bringing ideas to life through code. Let's work together to create something amazing!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
