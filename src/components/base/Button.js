import React from "react";

const Button = ({ text, type, onClick, children }) => {
  const bgColor =
    type === "dark" ? "bg-black" : type === "light" ? "bg-white" : "bg-black";

  const paddingClass = children ? "" : "px-8 py-3";

  return (
    <div
      onClick={onClick} // Added onClick prop here
      className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:black cursor-pointer"
    >
      <span
        className={`absolute top-[5px] left-[5px] ${bgColor} w-full h-full rounded-[10px] border-[2px] border-current`}
      ></span>
      <span
        className={`relative block border-[2px] border-current bg-white ${paddingClass} transition-transform group-hover:translate-y-[5px] group-hover:translate-x-[5px] rounded-[10px] text-[16px]`}
      >
        {text || children}
      </span>
    </div>
  );
};

export default Button;
