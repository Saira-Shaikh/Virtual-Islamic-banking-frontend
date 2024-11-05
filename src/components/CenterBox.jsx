import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const CenterBox = ({ className }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${className} bg-[#313131] flex flex-col justify-center items-center text-center w-full lg:w-[1000px] p-4 rounded-xl mx-auto z-10`}
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[25px] leading-[30.48px] font-sans font-[700] text-[#D8B150]"
      >
        GET YOUR PROJECT ESTIMATION
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="font-[500] text-[18px] leading-[20px] lg:leading-[4%] py-6 text-white"
      >
        Submit your details, our representative will be in touch soon.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex gap-3 lg:gap-8 w-full items-center flex-col lg:flex-row"
      >
        <motion.input
          type="text"
          name="Full Name"
          className="border text-white placeholder:text-white border-1 bg-[#444444] rounded-xl w-full h-fit p-2 lg:p-4"
          placeholder="Full Name"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Email"
          className="border w-full h-fit border-1 text-white placeholder:text-white bg-transparent rounded-xl p-2 lg:p-4 border-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.input
          type="text"
          name="phone-no"
          placeholder="Phone No."
          className="border w-full h-fit border-1 text-white placeholder:text-white bg-transparent rounded-xl p-2 lg:p-4 border-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="w-full flex flex-center  -mt-8 rounded-3xl"
        >
          <Button
            className="rounded-lg p-2 lg:p-4 w-full mt-0"
            content={"Get A Quote"}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CenterBox;
