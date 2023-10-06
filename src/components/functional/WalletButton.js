import React, { useState, useEffect } from "react";
import Button from "../base/Button";
import * as Dialog from "@radix-ui/react-dialog";
import { Magic } from "magic-sdk";
let magic;

const WalletButton = () => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      magic = new Magic("pk_live_08A562C1E83CCD5A", {
        extensions: [],
      });
    }
  }, []);

  const login = async () => {
    await magic.auth.loginWithMagicLink({ email });
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await magic.user.logout();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    magic?.user.isLoggedIn().then((magicIsLoggedIn) => {
      setIsLoggedIn(magicIsLoggedIn);
    });
  }, [isLoggedIn]);
  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button onClick={() => console.log("hello")} text="Connect Wallet" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60" />
          <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] transform translate-x-[-50%] translate-y-[-50%]  bg-white p-[25px] shadow-lg focus:outline-none rounded-[10px] border-[2px] border-black">
            <Dialog.Title className="m-0 text-lg font-medium text-gray-900">
              Connect Wallet
            </Dialog.Title>
            <Dialog.Description className="text-gray-700 mt-[10px] mb-5 text-sm leading-normal">
              Enter your Email Id to get a Magic Link.
            </Dialog.Description>

            <fieldset className="mb-[15px] flex items-center gap-5">
              <label
                className="text-blue-600 w-[90px] text-right text-sm"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(event) => setEmail(event.target.value)}
                className="p-2 border rounded-md mb-4 w-64"
              />
            </fieldset>
            <div className="mt-[25px] flex justify-end">
              <Button text="Send Magic Link" onClick={login} />
            </div>
            <Dialog.Close asChild>
              <button
                className=" hover:bg-blue-200 focus:ring-2 focus:ring-blue-300 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] items-center justify-center rounded-full focus:outline-none"
                aria-label="Close"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default WalletButton;
