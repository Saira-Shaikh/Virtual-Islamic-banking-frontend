import React from "react";
import { FaArrowRight } from "react-icons/fa6";
function Button({ content, className }) {
  return (
    <button
      className={`${className} bg-[#D8B150]   text-[#FFFFFF] text-[20px] leading-[24.38px]  font-sans rounded-full flex py-[12.02px] font-[600] gap-2 justify-center items-center px-[38.48px] h-[50px] mt-8`}
    >
      <span>{content}</span> <FaArrowRight />
    </button>
  );
}

export default Button;
