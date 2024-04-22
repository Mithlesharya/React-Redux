import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid mx-auto bg-black py-4 px-14 w-full">
        <div className="navbar flex justify-between items-center">
          <div className="brand-logo text-white text-lg">Redux logo</div>
          <div className="cart-icons text-white relative">
            <PiShoppingCartSimple className="text-3xl" />
            <span className="text-xs absolute block top-[-10px] right-[-5px]">
              01
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
