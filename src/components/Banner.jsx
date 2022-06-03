import React from "react";
import banner from "../assets/Banner.png";
import { BiSearchAlt } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="w-full h-[400px] relative ">
      <img src={banner} alt="/" className="w-full h-full" />
      <div className="absolute w-full h-full top-0 left-0 bg-black/60"></div>
      <div className="absolute w-full h-full top-0 flex flex-col justify-center text-center items-center text-white">
        <h1 className="mt-16 w-[675px] text-[40px] font-semibold ">
          Find the most suitable office for your company or team
        </h1>
        <div className="mt-4 pt-3 ">
          <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-white bg-gray-100/90">
            <div className="flex items-center">
              <input
                className="bg-transparent w-[300px] focus:outline-none mx-4 text-black"
                type="text"
                placeholder="Search Destination"
              />
              <div>
                <BiSearchAlt
                  className="mr-4 text-black cursor-pointer"
                  size={18}
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <button className="bg-[#4D89FF] p-2 mt-8 rounded-md w-60">
            Find All Office
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
