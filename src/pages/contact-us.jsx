"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import WordFadeIn from "@/components/ui/word-fade-in"; // Adjust path if necessary
import WordPullUp from "@/components/ui/word-pull-up"; // Adjust path if necessary

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Heading */}
          <WordPullUp
            className="text-5xl font-extrabold text-red-600 mb-4"
            words="Get In Touch"
          />
          {/* Animated Description */}
          <WordFadeIn
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            words="Reach out to us for any questions or inquiries. Our team is here to assist you and will respond as soon as possible."
          />
        </motion.div>

        {/* Contact Info and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-800 bg-opacity-90 p-10 rounded-lg shadow-xl order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full px-5 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full px-5 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="mt-2 block w-full px-5 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-red-600 focus:border-red-600 transition duration-200"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Address Card */}
            <motion.div
              className="bg-gradient-to-r from-red-600 to-red-800 p-6 rounded-lg shadow-lg flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Our Address
                </h2>
                <p className="text-gray-200">
                  Sheikhpura New Chandigarh, Kurali-Siswan Road, Dist. S.A.S
                  Nagar, Mohali, Pin: 140110
                </p>
              </div>
            </motion.div>
            {/* Phone Card */}
            <motion.div
              className="bg-gradient-to-r from-red-600 to-red-800 p-6 rounded-lg shadow-lg flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Phone className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-2xl font-semibold text-white">Call Us</h2>
                <p className="text-gray-200">+91-90667 90662</p>
              </div>
            </motion.div>
            {/* Email Card */}
            <motion.div
              className="bg-gradient-to-r from-red-600 to-red-800 p-6 rounded-lg shadow-lg flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Mail className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-2xl font-semibold text-white">Email Us</h2>
                <p className="text-gray-200">info@bfis.in</p>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              className="mt-12 rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.9442364188503!2d76.61709347467625!3d30.832228618259553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff17915555555%3A0x742607647b86d7b9!2sBrookfield%20International%20School!5e0!3m2!1sen!2sin!4v1729859443063!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
