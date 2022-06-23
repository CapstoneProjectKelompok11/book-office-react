import React from "react";
import { AiOutlineInbox, AiOutlineHeart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="flex w-full justify-between items-center h-[60px] px-3 py-3 text-white bg-[#4D89FF]">
          <div className="flex items-center">
            <div className="w-28 h-10 ml-20">
              <NavLink to={`/`}>
                <img src={logo} alt="" />{" "}
              </NavLink>
            </div>
          </div>
          <div>
            <ul className="flex">
              <NavLink to={`/`}>
                <li className="mx-4">Home</li>
              </NavLink>
              <NavLink to={`/listing`}>
                <li className="mx-4">Rent an Office</li>
              </NavLink>
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
      </div>
    </>
  );
};

export default Navbar;
