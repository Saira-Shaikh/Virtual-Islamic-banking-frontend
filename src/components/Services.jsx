import React from "react";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const Services = () => {
  // Sample data for cards
  const cards = [
    {
      id: 1,
      imgSrc: "/src/assets/s1.png",
      title: "Digital Financing",
      description:
        "This term refers to the impact of new technologies on the financial services industry. It includes a variety of products, applications that have transformed the traditional way.",
    },
    {
      id: 2,
      imgSrc: "/src/assets/s2.png",
      title: "Digital Investment",
      description:
        "This is a digital solution that allows customers to save and invest money in stocks, shares, and investment funds through an automated platform.",
    },
    {
      id: 3,
      imgSrc: "/src/assets/s3.png",
      title: "Digital SME Commercial",
      description:
        "This product caters to the SME sector and provides long-term financing for infrastructure development and industrial projects.",
    },
    {
      id: 4,
      imgSrc: "/src/assets/s4.png",
      title: "Low Cost Housing Finance",
      description:
        "This product provides digital solutions for low-cost housing finance schemes. This creates employment and boosts demand in industries.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-[#272727] text-white py-12 px-4 md:px-[5%]">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center flex flex-col justify-center items-center mb-10">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-[32px] border-b-4 rounded-sm w-fit border-[#D8B150]"
          >
            Our Services
          </motion.h2>
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-[45px] leading-tight font-bold mt-2"
          >
            Our <span className="text-[#D8B150]">Cutting Edge Solutions</span>{" "}
            for <br />
            <span className="font-normal">
              Virtual Islamic & Digital Banking
            </span>
          </motion.h1>
        </div>

        {/* Responsive Grid for Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 w-full">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-[#313131] text-white rounded-md shadow-lg flex flex-col justify-center text-center items-center p-6"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }} // Staggered delay for each card
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="h-[58px] w-[58px] object-cover rounded-md mb-4"
              />
              <h3 className="text-lg md:text-[18.5px] font-bold leading-tight mb-2">
                {card.title}
              </h3>
              <p className="text-sm md:text-[16px] font-medium leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Button content={"All Services"} />
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative mt-10 px-4 md:px-10 py-32 bg-[#302148] shadow-lg rounded-3xl w-full flex flex-col h-fit items-center text-center"
        >
          <img
            src="/src/assets/Vector (1).png"
            alt="background vector"
            className="absolute bottom-0 right-0 w-fit opacity-50 z-0"
          />
          <img
            src="/src/assets/Rectangle 25.png"
            alt="background rectangle"
            className="absolute top-0 left-0 w-[300px] md:w-[500px] h-full opacity-50 z-0 object-cover"
          />
          <div className="relative z-10 text-white flex flex-col justify-center items-center">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-[50px] font-semibold mb-4"
            >
              Digital Products On{" "}
              <span className="text-[#D8B150]">Deposit Or Investments</span>
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-sm md:text-[18px] w-3/4 mb-6 font-normal"
            >
              Work with Greensfin, more than a fintech company, currently on a
              mission to transform the global business infrastructure.
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Button className={`w-fit`} content="Book Your Consultation" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
