import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import CenterBox from "./CenterBox";

const AboutUs = () => {
  return (
    <section className="bg-[#272727] h-fit items-center py-4 lg:py-0 px-4 md:px-16 relative">
      <CenterBox className="" />

      <article className="flex flex-col lg:flex-row gap-4 justify-center items-center relative">
        {/* Background Image */}
        <motion.figure
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-[url('./Frame.png')] w-[182px] h-[177px] absolute left-[43%] top-[65%] transform -translate-x-1/2 z-0"
        ></motion.figure>

        {/* Text Content */}
        <motion.section
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[650px] flex flex-col justify-center z-10 font-[300] text-[27px] text-center lg:text-left items-center lg:items-start px-4 lg:mt-[200px]"
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-[32px] border-b-4 rounded-sm w-fit border-[#D8B150]"
          >
            About Us
          </motion.h2>
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white font-[700] text-[32px] lg:text-[40px]"
          >
            We promote emerging{" "}
            <span className="text-[#D8B150] font-[700] leading-[50px] text-[32px] lg:text-[40px]">
              Digital Experiences
            </span>
            .
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white font-[300] text-[16px] leading-[36px] lg:mb-10"
          >
            We are dedicated to revolutionizing the way you manage your finances
            by seamlessly integrating cutting-edge technology with the
            principles of Islamic finance.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Button className="font-[400] w-fit" content={"Know More"} />
          </motion.div>
        </motion.section>

        {/* Right Image */}
        <motion.figure
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-[0px] lg:mt-[200px] -z-0 w-full lg:w-[717px] h-auto flex justify-center"
        >
          <img
            className="w-full max-w-[717px] h-auto"
            src="./VideoSection.png"
            alt="Video Section"
          />
        </motion.figure>
      </article>

      {/* Group Images */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex w-full justify-center items-center py-10 flex-wrap"
      >
        {[257, 258, 259, 260, 261, 262].map((src) => (
          <motion.figure
            key={src}
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          >
            <img width={120} src={`./Group ${src}.png`} alt={`Group ${src}`} />
          </motion.figure>
        ))}
      </motion.section>
    </section>
  );
};

export default AboutUs;
