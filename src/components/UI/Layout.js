import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="p-[32px]">{children}</div>
    </div>
  );
};

export default Layout;
