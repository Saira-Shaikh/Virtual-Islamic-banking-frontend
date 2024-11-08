import Button from "../ui/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";
import withAnalytics from "../hoc/withAnalytics";
const cards = [
  {
    id: 1,
    src: "./p1.png",
    title: "Virtual Islamic Bank",
    description:
      "The Islamic Fintech industry provides ways of Shariah-compliant virtual digital, transparent, easy, and quick..",
  },
  {
    id: 2,
    src: "./p2.png",
    title: "Shariah Compliant Marketplace",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
  },
  {
    id: 3,
    src: "./p3.png",
    title: "Islamic Edtech",
    description:
      "The online learning industry is growing quite fast, as it easiest, cost effective, time saving",
  },
  {
    id: 4,
    src: "./p4.png",
    title: "Product Advisory",
    description:
      "Strategic partnership that provides vital insights for informed decision-making in product development an..",
  },
];

const Products = () => {
  return (
    <section className="flex justify-center items-center bg-[#1F1F1F]">
      {/* JSON-LD Schema for Products */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Virtual Islamic Bank",
          "image": "./p1.png",
          "description": "Shariah-compliant digital, transparent, and quick Islamic banking services.",
          "offers": {
            "@type": "Offer",
            "url": "#",
            "priceCurrency": "USD",
            "price": "0.00",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock"
          }
        }
        `}
      </script>

      {/* Background Images */}
      <section className="w-fit h-fit gap-10 py-[5%] relative flex flex-col bg-[#1F1F1F] lg:flex-row items-center justify-center">
        <img
          src="./Group 236.png"
          alt="Background Image"
          className="absolute top-0 left-0 w-fit h-fit object-cover z-0"
        />
        <img
          src="./Rectangle 25.png"
          alt="Background Image"
          className="absolute top-0 left-0 w-[full] lg:w-[683px] lg:h-fit h-full object-cover z-0"
        />

        {/* Left Side Cards */}
        <section className="relative w-fit grid-cols-1 grid md:grid-cols-2 gap-8 z-10">
          {cards.map((card) => (
            <motion.article
              key={card.id}
              className={`justify-center flex flex-col relative gap-6 w-[300px] h-[405px] py-16 px-6 shadow-gray-950 shadow-lg rounded-xl ${
                card.id === 1 ? "lg:mt-16 bg-[#313131]" : "mt-0 bg-[#313131]"
              } 
              ${
                card.id === 4
                  ? "lg:-mt-[65px] bg-[#313131]"
                  : "mt-0 bg-[#313131]"
              } 
              ${
                card.id === 2
                  ? "bg-[url('./Mask group.png')] pl-0 bg-[#372552]"
                  : ""
              }`}
              initial={{ y: 150, x: -150, scale: 0.9, rotateY: 180 }}
              whileInView={{ y: 0, x: 0, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.5 }}
            >
              <figure className="w-[100px] h-[90px]">
                <img
                  src={card.src}
                  alt={card.title}
                  className={`w-full h-full ${card.id == 2 ? "pl-6" : "pl-0"}`}
                />
              </figure>
              {card.id == 2 ? (
                <img
                  src="/src/assets/Mask group.png"
                  alt="Mask Group"
                  className="absolute w-fit"
                />
              ) : null}
              <h2
                className={`font-semibold text-[24px] text-white leading-[30px] ${
                  card.id == 2 ? "pl-6" : "pl-0"
                }`}
              >
                {card.title}
              </h2>

              <p
                className={`text-white font-medium text-[14px] ${
                  card.id == 2 ? "pl-6" : "pl-0"
                }`}
              >
                {card.description}
              </p>
              <a
                href="#"
                className={`text-[#D8B150] hover:underline flex mt-2 gap-2 items-center font-[500] ${
                  card.id == 2 ? "pl-6" : "pl-0"
                }`}
              >
                <span>Know More</span>
                <FaLongArrowAltRight />
              </a>
            </motion.article>
          ))}
        </section>

        {/* Right Side Text Content */}
        <motion.section
          className="relative px-6 lg:w-[40%] bg-transparent z-10 flex flex-col items-center lg:items-start"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-[32px] border-b-4 rounded-sm w-fit border-[#D8B150]"
          >
            Products
          </motion.h2>
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl text-white font-extrabold mt-2 text-center lg:text-start"
          >
            Our <span className="text-[#D8B150]">Islamic Fintech</span> Products
            include:
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white w-3/2 text-[16px] leading-[36px] lg:mb-10 font-[300] text-center lg:text-start mt-4"
          >
            We have complete and very easy solution for Virtual Islamic /
            Digital Banking and different fintech products for Islamic banking,
            including deposit and asset side for all requirements of clients.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Button content={"All Products"} />
          </motion.div>
        </motion.section>
      </section>
    </section>
  );
};

const ProductsWithAnalytics = withAnalytics(Products);
export default ProductsWithAnalytics;
