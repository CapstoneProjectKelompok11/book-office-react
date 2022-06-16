import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { data } from "autoprefixer";
import { HiLocationMarker } from "react-icons/hi";
import { FaCity } from "react-icons/fa";
import { RiProjector2Line, RiParkingBoxLine } from "react-icons/ri";
import { AiOutlineWifi, AiFillBank } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";

const DetailPage = () => {
  const { id } = useParams();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .all([
        axios.get(
          "http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building?page=0&limit=10"
        ),
        axios.get(
          `http://ec2-18-206-213-94.compute-1.amazonaws.com/api/floor?buildingId=${id}`
        ),
      ])

      .then(
        axios.spread((result1, result2) => {
          setData1(result1.data.data);
          setData2(result2.data.data);
        })
      );
  }, []);
  // console.log("Ini data 1", data1);
  // console.log("Ini data 2", data2);
  // console.log(data1.complex);
  // console.log(data1.capacity);

  return (
    <div>
      <div className="max-w-[1240px] mx-auto">
        <div className="p-5 text-center text-base font-normal">
          Home {">"} SCBD {">"} Equity Tower
        </div>
        {/* -----------------Image Atas----------------------- */}
        <div className="grid grid-cols-3 py-4 gap-8">
          <img
            className="w-full h-full object-cover col-span-2 row-span-2"
            src="https://github.com/achmadrizky486/travel-website/blob/main/src/assets/borabora.jpg?raw=true"
            alt="/"
          />
          <img
            className="w-full h-full object-cover"
            src="https://github.com/achmadrizky486/travel-website/blob/main/src/assets/borabora.jpg?raw=true"
            alt="/"
          />
          <img
            className="w-full h-full object-cover"
            src="https://github.com/achmadrizky486/travel-website/blob/main/src/assets/borabora.jpg?raw=true"
            alt="/"
          />
        </div>
        {/*End of Image Atas*/}

        {/* ------------Address-------------- */}
        <div>
          <div className="text-2xl font-medium pt-12">SCBD, Equity Tower</div>
          <div className="p-5 items-center text-black/60">
            <div className="flex py-2">
              <HiLocationMarker size={24} />
              <p className="px-2 text-xl font-medium">
                SCBD, Lot 9 JRT.5, Jl. Jenderal Sudirman No.Kav.52-53,
                RT.5/RW.3, Senayan
              </p>
            </div>
            <div className="flex py-2">
              <FaCity size={24} />
              <p className="px-2 text-xl font-medium">
                SCBD, Lot 9 JRT.5, Jl. Jenderal Sudirman No.Kav.52-53,
                RT.5/RW.3, Senayan
              </p>
            </div>
          </div>
        </div>
        {/* End of Address */}
        {/* -----------------About this Building------------- */}
        <div>
          <div className="text-2xl font-medium pt-12">About this building</div>
          <div className="px-5 items-center flex">
            <div className="py-2 px-5 text-center text-lg font-normal">
              <p className="text-black/60 ">Capacity</p>
              <p>200</p>
            </div>
            <div className="py-2 px-5 text-center text-lg font-normal">
              <p className="text-black/60 ">Jumlah Lantai</p>
              <p>200</p>
            </div>
            <div className="py-2 px-5 text-center text-lg font-normal ">
              <p className="text-black/60 ">Facility</p>
              <div className="flex">
                <RiProjector2Line className="mx-3" size={24} />
                <AiOutlineWifi className="mx-3" size={24} />
                <RiParkingBoxLine className="mx-3" size={24} />
                <MdRestaurantMenu className="mx-3" size={24} />
                <AiFillBank className="mx-3" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
