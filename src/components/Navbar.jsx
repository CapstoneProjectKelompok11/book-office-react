import React from "react";
import { AiOutlineInbox, AiOutlineHeart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full justify-between items-center h-[60px] px-3 py-3 absolute z-10 text-white bg-[#4D89FF]">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-[#B7B4B4] ml-[80px]"></div>
          <h1 className="mx-3">Logo</h1>
        </div>
        <div>
          <ul className="flex">
            <li className="mx-4">Home</li>
            <li className="mx-4">Rent an Office</li>
            <li className="mx-4">About Us</li>
            <li className="mx-4">Find Us</li>
          </ul>
        </div>
        <div className="flex">
          <AiOutlineInbox size={18} />
          <AiOutlineHeart size={18} className="mx-4" />
          <VscAccount size={18} className="mr-20" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
