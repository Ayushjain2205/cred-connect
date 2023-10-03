import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-row h-full">
      <div className="flex flex-col gap-[25px] w-1/4 h-full py-[32px] items-center border-r-2 border-black">
        <div className="flex flex-row ">
          <img src="/images/me.svg" className="h-[250px]" alt="" />
        </div>

        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-col items-center h-[75px] w-[85px] bg-[#FF84C2] rounded-[10px]">
            <span className="text-[28px] font-bold">12</span>
            <span className="font-medium text-[20px] -mt-2">Events</span>
          </div>
          <div className="flex flex-col items-center h-[75px] w-[85px] bg-[#FF84C2] rounded-[10px]">
            <span className="text-[28px] font-bold">103</span>
            <span className="font-medium text-[20px] -mt-2">Waves</span>
          </div>
          <div className="flex flex-col items-center h-[75px] w-[85px] bg-[#FF84C2] rounded-[10px]">
            <span className="text-[28px] font-bold">62</span>
            <span className="font-medium text-[20px] -mt-2">Nudges</span>
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <span className="bg-[#aedcf680] py-1 px-3 rounded-full">
            <i class="fa-brands fa-telegram" style={{ color: "#0088cc" }}></i>{" "}
            iyushjain.eth
          </span>
          <span className="bg-[#585b5c80] py-1 px-3 rounded-full">
            <i class="fa-brands fa-x-twitter" style={{ color: "#000" }}></i>{" "}
            iyushjain
          </span>
          <span className="bg-[#5865F250] py-1 px-3 rounded-full">
            <i class="fa-brands fa-discord" style={{ color: "#5865F2" }}></i>{" "}
            iyushjain.eth
          </span>
          <span className="bg-[#585b5c80] py-1 px-3 rounded-full">
            <i class="fa-brands fa-github" style={{ color: "#000" }}></i>{" "}
            ayushjain2205
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
