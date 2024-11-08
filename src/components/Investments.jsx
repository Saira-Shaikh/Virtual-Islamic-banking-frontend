import React from "react";
import Button from "../ui/Button"; // Assuming you have a Button component
import { motion } from "framer-motion";

const Investments = () => {
  return (
    <section className="relative bg-center w-full min-h-[400px] flex lg:flex-row flex-col items-center justify-between px-4 md:px-10 pt-32 pb-16 gap-4 bg-[#1F1F1F] bg-[url('./Group 236.png')]">
      <img
        src="./Group 236.png"
        alt="Background"
        className="absolute top-0 left-0 w-fit h-fit object-cover z-0"
      />

      {/* Left Section - Image */}
      <motion.section
        className="flex-shrink-0 mb-6 md:mb-0 md:w-1/2 flex justify-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="./img.png"
          alt="Investment"
          className="w-full max-w-1/2 h-auto object-contain"
        />
      </motion.section>

      {/* Right Section - Content */}
      <motion.article
        className="w-full lg:w-1/2 items-center flex flex-col lg:items-start text-white"
        initial={{ y: 30, opacity: 0 }} // Initial state for animation
        animate={{ y: 0, opacity: 1 }} // Final state for animation
        transition={{ duration: 0.5, delay: 0.2 }} // Duration and delay for the animation
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-[32px] border-b-4 rounded-sm w-fit border-[#D8B150]"
        >
          Investments
        </motion.h2>
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold my-2"
        >
          Our Digital Products on <br />
          <span className="text-[#D8B150]">Deposit or investments</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white font-[300] text-[16px] leading-[36px] lg:mb-10 mb-4 mt-4 w-3/2 text-center lg:text-start"
        >
          Through our Digital Products on Deposit or investments, you can
          fulfill your different requirements as per your need through digital
          payment mechanism or virtual cards. Our main products are mentioned
          below. However, they could be customized as per your need in Shariah
          Compliance ways.
        </motion.p>

        {/* List Items */}
        <ul className="list-disc mt-2 list-inside mb-4">
          <motion.li
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="flex items-center mb-2"
          >
            <span className="w-4 h-4 bg-[#D8B150] rounded-full mr-2"></span>
            Current
          </motion.li>
          <motion.li
            initial={{ y: -75, x: 25, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-2"
          >
            <span className="w-4 h-4 bg-[#D8B150] rounded-full mr-2"></span>
            Saving
          </motion.li>
          <motion.li
            initial={{ y: -100, x: 25, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-2"
          >
            <span className="w-4 h-4 bg-[#D8B150] rounded-full mr-2"></span>
            Fixed Deposit
          </motion.li>
          <motion.li
            initial={{ y: -125, x: 25, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center mb-2"
          >
            <span className="w-4 h-4 bg-[#D8B150] rounded-full mr-2"></span>
            Sukuk
          </motion.li>
        </ul>

        {/* Button */}
        <Button content="Get Started" />
      </motion.article>
    </section>
  );
};

export default Investments;
