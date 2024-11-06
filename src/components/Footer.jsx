import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white py-12 px-6 md:px-10">
      {/* Upper Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:flex-row justify-between items-start gap-10 pb-8 border-b border-gray-600">
        {/* Column 1 - Logo and Social Icons */}
        <motion.div
          className="flex flex-col items-start space-y-4"
          initial={{ opacity: 0, y: 20 }} // Initial state
          whileInView={{ opacity: 1, y: 0 }} // Animate to this state
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <img
            src="./logo.png"
            alt="Logo"
            className="ml-4 mb-4 w-[24px] h-[24px]"
          />
          <p className="text-gray-300 w-[270px]">
            Virtual Islamic/ Digital Banking and payment platforms to asset
            management
          </p>
          <div className="flex space-x-4">
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }} // Scale on hover
              transition={{ duration: 0.3 }}
            >
              <FaFacebookF
                className="text-white hover:bg-[#D8B150] hover:text-[#1F1F1F] p-1 rounded-sm"
                size={24}
              />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }} // Scale on hover
              transition={{ duration: 0.3 }}
            >
              <FaLinkedinIn
                className="text-white hover:bg-[#D8B150] hover:text-[#1F1F1F] p-1 rounded-sm"
                size={24}
              />
            </motion.a>
            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }} // Scale on hover
              transition={{ duration: 0.3 }}
            >
              <FaYoutube
                className="text-white hover:bg-[#D8B150] hover:text-[#1F1F1F] p-1 rounded-sm"
                size={24}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Column 2 - Quick Links */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }} // Staggered delay
        >
          <p className="font-bold text-white">Products</p>
          <span className="block">Virtual Islamic Bank</span>
          <span className="block">Shariah Marketplace</span>
          <span className="block">Islamic Edtech</span>
          <span className="block">Product Advisory</span>
        </motion.div>

        {/* Column 3 - Quick Links */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} // Staggered delay
        >
          <p className="font-bold text-white">Quick Links</p>
          <span className="block">Services</span>
          <span className="block">Blogs</span>
          <span className="block">Knowledge Center</span>
          <span className="block">Clients</span>
          <span className="block">About Us</span>
        </motion.div>

        {/* Column 4 - Resources */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }} // Staggered delay
        >
          <p className="font-bold text-white">Resources</p>
          <div>
            <p className="font-bold text-white">Phone:</p>
            <span className="block">021-35123213</span>
          </div>
          <div>
            <p className="font-bold text-white">Email:</p>
            <span className="block">info@greensfin.com</span>
          </div>
          <div>
            <p className="font-bold text-white">Address:</p>
            <span className="block">
              4C 21st Comm. St, D.H.A Phase II Extension Phase 2 Ext Defence
              Housing Authority, Karachi,
            </span>
          </div>
        </motion.div>
      </div>

      {/* Lower Section - Copyright */}
      <motion.div
        className="text-center pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }} // Delay for copyright
      >
        <p className="text-gray-400">
          Copyright © 2023 Sheikh. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
