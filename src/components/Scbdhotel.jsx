import React from "react";
import img from "../assets/kota.png";

const Scbdhotel = () => {
  return (
    <div>
      <p className="ml-20 mt-40 text-2xl font-semibold">SCBD</p>
      <div className="grid grid-cols-4 gap-1 place-items-center pt-5 px-5">
        <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
        <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
        <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
        <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
      </div>
      <div>
        <p className="text-xl ml-20 mt-5 font-semibold underline underline-offset-4">
          More Office in SCBD
        </p>
        <p className="ml-20 mt-24 text-2xl font-semibold">Senayan City</p>
        <div className="grid grid-cols-4 gap-1 place-items-center pt-5 px-5">
          <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
          <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
          <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
          <img className="w-[314px] h-[240px] object-cover" src={img} alt="/" />
        </div>
        <div>
          <p className="text-xl ml-20 mt-5 font-semibold underline underline-offset-4">
            More Office in Senayan City
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scbdhotel;
