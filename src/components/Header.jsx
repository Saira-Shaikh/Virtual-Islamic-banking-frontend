import React, { useState } from "react";
import Button from "../ui/Button";
import { CgPlayButton, CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar Links
  const navLinks = (
    <>
      <motion.a
        whileHover={{
          scale: 1.1,
          color: "#D8B150",
          borderBottom: "2px solid #D8B150", // Consistent border styling
          borderRadius: "2px",
          fontWeight: "600",
        }}
        href="/"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          color: "#D8B150",
          borderBottom: "2px solid #D8B150", // Consistent border styling
          borderRadius: "2px",
          fontWeight: "600",
        }}
        href="/"
        onClick={() => setMenuOpen(false)}
      >
        Product
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          color: "#D8B150",
          borderBottom: "3px solid #D8B150", // Consistent border styling
          borderRadius: "2px",
          fontWeight: "600",
        }}
        href="/"
        onClick={() => setMenuOpen(false)}
      >
        Services
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          color: "#D8B150",
          borderBottom: "3px solid #D8B150", // Consistent border styling
          borderRadius: "2px",
          fontWeight: "600",
        }}
        href="/"
        onClick={() => setMenuOpen(false)}
      >
        Clients
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          color: "#D8B150",
          borderBottom: "3px solid #D8B150", // Consistent border styling
          borderRadius: "2px",
          fontWeight: "600",
        }}
        href="/"
        onClick={() => setMenuOpen(false)}
      >
        Blogs
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          color: "#D8B150",
          borderBottom: "3px solid #D8B150", // Consistent border styling
          borderRadius: "2px",
          fontWeight: "600",
        }}
        href="/"
        onClick={() => setMenuOpen(false)}
      >
        Products
      </motion.a>
      <motion.a
        whileHover={{
          scale: 1.1,
          color: "#D8B150",
          borderBottom: "3px solid #D8B150", // Consistent border styling
          borderRadius: "2px",
          fontWeight: "600",
        }}
        href="/"
        onClick={() => setMenuOpen(false)}
      >
        About us
      </motion.a>
    </>
  );

  return (
    <div className="bg-gradient-to-b  from-[#351D5B] to-[#272727] h-fit px-6 md:px-[5%] relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 text-[#FAFAFA]">
        <motion.img
          src="/src/assets/logo.png"
          alt="logo"
          className="w-14 h-14"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Links and Contact Button */}
        <div className="hidden md:flex gap-8 items-center">{navLinks}</div>
        <Button className={"hidden lg:inline-flex"} content="Contact" />

        {/* Hamburger Icon for Sidebar on Mobile */}
        <motion.div whileHover={{ rotate: 90 }}>
          <CgMenuRight
            size={32}
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </motion.div>
      </nav>

      {/* Sidebar Overlay */}
      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}

      {/* Sidebar (Slide in from Right) */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-[#351D5B] to-[#272727] p-6 z-30`}
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex justify-between items-center mb-6">
          <img src="/src/assets/logo.png" alt="logo" className="w-12 h-12" />
          <AiOutlineClose
            size={24}
            className="cursor-pointer text-white"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <nav className="flex flex-col gap-4 text-[#FAFAFA]">
          {navLinks}
          <Button content="Contact" />
        </nav>
      </motion.div>

      {/* Header Content */}
      <motion.div
        className="flex flex-col pb-10 md:flex-row items-center justify-center min-h-[300px] md:min-h-[400px] relative px-4 md:px-[5%] pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="md:w-1/2 lg:w-[745px] space-y-4 text-center md:text-left"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h3 className="text-[28px] md:text-[32.57px] text-white font-normal leading-tight">
            Virtual Islamic Banking
          </h3>
          <motion.div className="h-1 bg-[#D8B150] w-32 md:w-80 mx-auto md:mx-0" />
          <h1 className="text-[#D8B150] text-[40px] md:text-[54px] font-bold leading-tight">
            Transforming Finance
          </h1>
          <h2 className="text-white text-[32px] md:text-[40px] font-normal leading-tight">
            with Fast & Easy
          </h2>
          <p className="text-white text-[16px] md:text-[18px] leading-relaxed max-w-md mx-auto md:mx-0">
            From Virtual Islamic/Digital Banking and payment platforms to asset
            management, our FinTech products encompass a wide spectrum of
            offerings that are reshaping the financial landscape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-[#D8B150] text-white font-semibold rounded-full py-3 px-8 flex items-center gap-2"
            >
              Get Started
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-white font-medium">See Live Demo</span>
              <CgPlayButton
                size={32}
                className="bg-[#D8B150] w-8 h-8 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Header Right Image */}
        <motion.div
          className="w-full md:w-[751.15px] h-[300px] md:h-auto mt-8 md:mt-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
        >
          <img
            src="/src/assets/headerImg.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Header;
