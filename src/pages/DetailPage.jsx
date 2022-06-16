import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { data } from "autoprefixer";
import { HiLocationMarker } from "react-icons/hi";
import { FaCity } from "react-icons/fa";
import { RiProjector2Line, RiParkingBoxLine } from "react-icons/ri";
import { AiOutlineWifi, AiFillBank } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";

const Card = () => {
  return (
    <div>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img
            src="https://github.com/achmadrizky486/travel-website/blob/main/src/assets/borabora.jpg?raw=true"
            alt=""
          />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://github.com/achmadrizky486/travel-website/blob/main/src/assets/borabora.jpg?raw=true"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
                <RiProjector2Line className="mx-1" size={20} />
                <AiOutlineWifi className="mx-1" size={20} />
                <RiParkingBoxLine className="mx-1" size={20} />
                <MdRestaurantMenu className="mx-1" size={20} />
                <AiFillBank className="mx-1" size={20} />
              </div>
            </div>
          </div>
          <div className="py-3">
            <p>
              Equity Tower adalah gedung pencakar langit yang terletak di
              Sudirman Central Business District, Senayan, Kebayoran Baru,
              Jakarta Selatan. Gedung ini berfungsi sebagai gedung perkantoran
              komersial. Beberapa fasilitas yang dimilikinya seperti area
              parkir, aula mutifungsi, ATM Center, kantin, toilet, tempat
              informasi, dan musala. Tower ini memiliki akses yang mudah dan
              terletak di pusat kota sehingga mudah untuk dijangkau untuk
              berbagi transportasi umum. Gedung ini dibagi menjadi dua bagian
              yaitu lantai bagian bawah yang terdiri dari basemant hingga lantai
              29 serta lantai bagian atas terdiri dari lantai 30 hingga lantai
              50.
            </p>
          </div>
        </div>
        {/* End of About this Building */}
        {/* -----------------Type Office------------------ */}
        <div>
          <div className="text-2xl font-medium pt-12">Type Office</div>
          <div className=" w-full max-w-full py-5 ">
            <div className="flex grid-cols-3 border-4">
              <div>
                <img
                  className="w-60 h-full object-fill"
                  src="https://github.com/achmadrizky486/travel-website/blob/main/src/assets/borabora.jpg?raw=true"
                  alt="/"
                />
              </div>
              <div className=" p-4 flex flex-col justify-between leading-normal">
                <div className="">
                  <div className="text-black font-medium text-xl mb-2">
                    Floor 48th, Equity Tower, Serviced office
                  </div>
                  <p className="text-gray-700 text-base">
                    Participant : 1-8 people
                  </p>
                  <p className="text-gray-700 text-base">
                    Floor Size : 442.20 sqm
                  </p>
                  <p className="text-gray-700 text-base">
                    Price start at Rp 19.000.000
                  </p>
                </div>
              </div>
              <div>
                <div className="item-right">
                  <button className="w-full my-4">Rates & Availabillity</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
