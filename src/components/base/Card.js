import React from "react";

const Card = () => {
  return (
    <div className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring active:black cursor-pointer">
      <div className="absolute inset-0 bg-black w-full h-full rounded-[10px]"></div>
      <div className="w-[200px] relative block border-[2px] border-current bg-white px-8 py-3 transition-transform hover:-translate-y-[5px] hover:-translate-x-[5px] rounded-[10px] text-[16px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        exercitationem, at architecto vitae modi magni aspernatur quo eligendi
        porro! Fugiat reiciendis odit quae, accusamus sunt aliquam aliquid illo
        cumque? Doloribus!
      </div>
    </div>
  );
};

export default Card;
