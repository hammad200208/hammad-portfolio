import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Thank you for reaching out!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-12">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-xl shadow-md bg-white dark:bg-[#1c261a]"
        >
          <div className="mb-6 text-left">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6 text-left">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6 text-left">
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-400 rounded resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
