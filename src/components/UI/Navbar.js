import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Button from "../base/Button";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between h-[80px] px-[20px] border-b-2 border-black">
      {/* Logo and name */}
      <div className="flex flex-row gap-[10px] items-center">
        <img src="/icons/logo.svg" className="h-[48px]" alt="logo" />
        <span className="font-medium text-[32px]">CredConnect</span>
      </div>

      {/* Navigation items */}
      <div className="flex flex-grow justify-center space-x-[15px]">
        <a href="/" className="text-lg font-medium">
          Home
        </a>
        <a href="/about" className="text-lg font-medium">
          About
        </a>
        <a href="/contact" className="text-lg font-medium">
          Contact
        </a>
      </div>

      {/* Button on the right */}
      <div>
        <Button>
          <ConnectWallet className="connect-wallet" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
