import React from "react";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.png";
import img5 from "../assets/asas.png";

const AboutUs = () => {
  return (
    <div className="my-16 bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D9] h-[350px]">
      <div className="mx-auto grid grid-cols-3 gap-4 ">
        <div className="col-span-2 flex flex-col my-10 ml-20">
          <div>
            <h2 className="text-black font-medium text-base">About Us</h2>
            <p className="py-4 max-w-sm text-base">
              We connect you with the office building that spread in the
              jakarta. We will help you for Booking, Renting, and Tour.
            </p>
          </div>
          <div className="grid grid-cols-5">
            <div className="flex items-center text-center">
              <div>
                <img src={img1} alt="/" />
                <p className="py-1">Explore</p>
              </div>
            </div>
            <div className="flex items-center text-center">
              <div>
                <img src={img2} alt="/" />
                <p className="py-1">Variate</p>
              </div>
            </div>
            <div className="flex items-center text-center">
              <div>
                <img src={img3} alt="/" />
                <p className="py-1">Live Chat</p>
              </div>
            </div>
            <div className="flex items-center text-center">
              <div>
                <img src={img4} alt="/" />
                <p className="py-1">Deal</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[-40px] ">
          <img
            className="border border-black/30 rounded-lg shadow-2xl"
            src={img5}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
// bg-gradient-to-r from-[#FFFFFF] to-[#D9D9D9]
