import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }} // Start hidden and shifted down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and neutral Y position
      transition={{ duration: 0.8, delay: 0.3 }} // Optional delay and duration
      viewport={{ once: true, amount: 0.5 }} // Trigger only once, when 50% is visible
      className="bg-[#1c261a] text-white py-6"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center space-y-4">
        <div className="flex space-x-4 sm:space-x-6 text-lg sm:text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Mohammad Hammad. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
