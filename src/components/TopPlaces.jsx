import React from "react";
import img from "../assets/Image.png";

const TopPlaces = () => {
  return (
    <div className="mx-auto py-16 px-4 text-center">
      <h2 className="font-medium">Top Places in Jakarta</h2>
      <div className="justify-between pt-12">
        <div className="grid grid-cols-3 gap-1 place-items-center ">
          <img className="w-[314px] h-[314px] object-cover" src={img} alt="/" />
          <img className="w-[314px] h-[314px] object-cover" src={img} alt="/" />
          <img className="w-[314px] h-[314px] object-cover" src={img} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default TopPlaces;
