import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Arrow icon
import Button from "../ui/Button"; // Assuming you have a Button component
import { motion } from "framer-motion"; // Importing motion

const Blogs = () => {
  let blogs = [
    {
      id: 1,
      src: "./b1.png",
    },
    {
      id: 2,
      src: "./b2.png",
    },
    {
      id: 3,
      src: "./b3.png",
    },
  ];

  return (
    <div className="bg-[#272727] text-white py-12 md:px-[5%] px-6">
      {/* Header Section */}
      <motion.div
        className="w-full flex flex-col justify-center z-10 font-[300] text-[27px] text-center lg:text-left items-center lg:items-start lg:mt-[200px]"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-[32px] border-b-4 rounded-sm w-fit border-[#D8B150]"
        >
          Blogs
        </motion.h2>
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white font-[700] text-[32px] lg:text-[40px]"
        >
          Latest News{" "}
          <span className="text-[#D8B150]">Managing Money Better</span>
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white font-[300] text-[16px] leading-[36px] mb-8"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. finance and Islamic banking industry.
        </motion.p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="relative bg-cover bg-center rounded-lg p-6 h-[469.53px] flex flex-col justify-end"
            style={{
              backgroundImage: `url(./b${blog.id}.png)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }} // Staggered delay for each card
          >
            <button className="bg-[#D8B150] text-[#FFFFFF] text-[20px] leading-[24.38px] font-sans rounded-full py-[12.02px] font-[600] w-fit px-8 absolute top-8 right-8">
              Tech
            </button>
            <div className={`rounded-lg p-4`}>
              <h2 className="text-xl font-semibold">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-white font-[300] text-[16px] lg:leading-[36px] ">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt...
              </p>
              <a
                href="/"
                className="flex items-center text-white font-semibold mt-4"
              >
                Know More <FiArrowRight className="ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button content="View All Blogs" />
      </motion.div>

      {/* Subscription Section */}
      <motion.div
        className="relative mt-10 px-4 md:px-32 py-10 justify-between lg:flex-row bg-[#302148] shadow-lg rounded-3xl w-full flex flex-col h-fit items-center lg:items-start"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 200,
          delay: 0.5,
        }} // Delay for the subscription section
      >
        <img
          src="./Vector (2).png"
          alt="background vector"
          className="absolute bottom-0 left-0 md:left-10 w-[50%] lg:w-fit h-auto opacity-50 z-0"
        />
        <img
          src="./Rectangle 25.png"
          alt="background rectangle"
          className="absolute bottom-0 right-0 w-[200px] md:w-[300px] h-full opacity-50 z-0 object-cover"
        />
        {/* Left Text Section */}
        <div className="items-center flex flex-col lg:items-left z-10 mb-4 lg:mb-0">
          <h2 className="text-white text-[32px] border-b-4 text-center lg:text-start rounded-sm w-fit border-[#D8B150]">
            Newsletter
          </h2>
          <h1 className="text-white text-center lg:text-start font-[700] text-[32px] lg:text-[40px]">
            Keep Updated{" "}
            <span className="text-[#D8B150]">
              {" "}
              About Our
              <br /> Product{" "}
            </span>
          </h1>
        </div>

        {/* Right Subscription Form */}
        <div className="flex md:bg-[#444444] rounded-3xl flex-col z-10 md:flex-row gap-2 md:gap-4 justify-between items-center w-full lg:w-[40%] lg:mt-16">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-[#444444] text-white rounded-full px-4 py-2 w-fit md:w-auto"
          />
          <button className="bg-[#D8B150] text-[#FFFFFF] text-[20px] leading-[24.38px] font-sans rounded-full py-[12.02px] font-[600] w-fit px-8 ">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Blogs;
