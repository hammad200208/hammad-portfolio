import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeozoqko"); // Replace with your Formspree form ID

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

        {state.succeeded ? (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
            Thank you for your message! I'll get back to you soon.
          </div>
        ) : (
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
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
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
                required
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className={`bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 ${
                state.submitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;