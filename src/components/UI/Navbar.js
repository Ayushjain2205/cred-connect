import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectWallet } from "@thirdweb-dev/react";
import Button from "../base/Button";

const Navbar = () => {
  const router = useRouter();

  const navLinks = [
    { path: "/", label: "Explore" },
    { path: "/social", label: "Social" },
    { path: "/profile", label: "Profile" },
  ];

  const isActive = (path) => router.pathname === path;

  return (
    <div className="flex flex-row items-center justify-between h-[80px] px-[20px] border-b-2 border-black">
      <div className="flex flex-row gap-[10px] items-center">
        <img src="/icons/logo.svg" className="h-[48px]" alt="logo" />
        <span className="font-medium text-[32px]">CredConnect</span>
      </div>

      <div className="flex flex-grow justify-center space-x-[45px]">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.path} passHref>
            <span
              className={`text-lg font-medium border-2 px-4 py-2 transition-all duration-0 ${
                isActive(link.path)
                  ? "bg-black border-black text-white rounded-[10px]"
                  : "border-transparent text-black hover:border-black hover:rounded-[10px] focus:outline-none focus:border-black focus:rounded-[10px]"
              }`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>

      <div>
        <Button>
          <ConnectWallet className="connect-wallet" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
