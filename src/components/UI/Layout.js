import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="px-[32px] flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
