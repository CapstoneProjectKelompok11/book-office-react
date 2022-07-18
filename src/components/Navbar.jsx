import React from "react";
import { AiOutlineInbox, AiOutlineHeart } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {

  const navigate = useNavigate()
  const logout = () => {
    navigate("/")
  }

  const deleteCookies = () => {
    Cookies.remove("token", { path: "/"})

  }


  return (
    <>
      <div>
        <div
          className="flex w-full justify-between items-center h-[60px] px-3 py-3 text-white bg-[#4D89FF]"
          id="top"
        >
          <div className="flex items-center">
            <div className="w-28 h-10 ml-20">
              <NavLink to={`/`}>
                <img
                  src="https://raw.githubusercontent.com/CapstoneProjectKelompok11/book-office-react/main/src/assets/logo.png"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
          <div>
            <ul className="flex">
              <NavLink to={`/Home`}>
                <li className="mx-4">Home</li>
              </NavLink>
              <NavLink to={`/listing`}>
                <li className="mx-4">Rent an Office</li>
              </NavLink>
              <a href="#about">
                <li className="mx-4">About Us</li>
              </a>
              <a href="#find">
                <li className="mx-4">Find Us</li>
              </a>
            </ul>
          </div>
          <div className="flex">
            <AiOutlineInbox size={18} className="mr-4" />
            <AiOutlineHeart size={18} className="mr-4" />
            <NavLink to={`/profile`}>
              <VscAccount size={18} className="mr-4" />
            </NavLink>
            <BiLogOut size={18} className="mr-20"
            onClick = {()=>{logout(); deleteCookies()}}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
