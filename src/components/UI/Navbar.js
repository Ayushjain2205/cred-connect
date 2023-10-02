import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center h-[80px] px-[20px] border-b-2 border-black">
      <div className="flex flex-row gap-[10px]">
        <img src="/icons/logo.svg" className="h-[48px]" alt="" />
        <span className="font-medium text-[32px]">CredConnect</span>
      </div>
    </div>
  );
};

export default Navbar;
