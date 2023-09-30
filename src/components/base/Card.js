import React from "react";

const Card = ({ children, color = "#000000" }) => {
  return (
    <div className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:black cursor-pointer">
      <div
        className={`absolute inset-0 w-full h-full rounded-[10px] border-[2px] border-current`}
        style={{ backgroundColor: color }}
      ></div>
      <div className="w-[200px] relative block border-[2px] border-current bg-white px-4 py-3 transition-transform hover:-translate-y-[7px] hover:-translate-x-[7px] rounded-[10px] text-[16px]">
        {children}
      </div>
    </div>
  );
};

export default Card;
