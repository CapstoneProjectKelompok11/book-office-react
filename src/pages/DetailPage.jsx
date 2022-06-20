import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HiLocationMarker } from "react-icons/hi";
import { FaCity, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { RiProjector2Line, RiParkingBoxLine } from "react-icons/ri";
import {
  AiOutlineWifi,
  AiFillBank,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOffice = async () => {
      const response = await fetch(
        `http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building?id=${id}`
      );
      const responseImg = await fetch(
        `http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/d930bd6e-7bbf-4164-9e1b-3dedee31790c.jpg`
      );
      setData(await response.json());
      setImg(await responseImg.blob());
      setLoading(false);
    };
    getOffice();
  }, []);

  const Loading = () => (
    <div>
      <div className="grid grid-cols-2 py-4 gap-8">
        <div className="pl-5">
          <Skeleton style={{ lineHeight: "70px" }} height={30} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
        </div>
        <div className="pr-5">
          <Skeleton style={{ lineHeight: "70px" }} height={30} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={200} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={300} />
          <Skeleton style={{ lineHeight: "70px" }} height={30} width={500} />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <div className="max-w-[1240px] mx-auto">
            <div className="p-5 text-center text-base font-normal">
              <p>
                Home {">"} {data.data.complex.complex_name} {">"}{" "}
                {data.data.name}
              </p>
            </div>
            {/* -----------------Image Atas----------------------- */}
            <div className="grid grid-cols-3 py-4 gap-8">
              {data.data.images.slice(0, 1).map((gambar) => {
                console.log(gambar);
                return (
                  <>
                    <img
                      className="w-full h-full object-cover col-span-2 row-span-2"
                      src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${gambar.fileName}`}
                      alt="/"
                    />
                  </>
                );
              })}
              {data.data.images.slice(1, 3).map((gambar) => {
                console.log(gambar);
                return (
                  <>
                    <img
                      className="w-full h-full object-cover"
                      src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${gambar.fileName}`}
                      alt="/"
                    />
                  </>
                );
              })}
            </div>
            {/*End of Image Atas*/}

            {/* ------------Address-------------- */}
            <div>
              <div className="text-2xl font-medium pt-12">
                <p>
                  {data.data.complex.complex_name}, {data.data.name}
                </p>
              </div>
              <div className="p-5 items-center text-black/60">
                <div className="flex py-2">
                  <HiLocationMarker size={24} />
                  <p className="px-2 text-xl font-medium">
                    {data.data.address}
                  </p>
                </div>{" "}
                <div className="flex py-2">
                  <FaCity size={24} />
                  <p className="px-2 text-xl font-medium">
                    {data.data.address}
                  </p>
                </div>
              </div>
            </div>
            {/* End of Address */}
            {/* -----------------About this Building------------- */}
            <div>
              <div className="text-2xl font-medium pt-12">
                About this building
              </div>
              <div className="px-5 items-center flex">
                <div className="py-2 px-5 text-center text-lg font-normal">
                  <p className="text-black/60 ">Capacity</p>
                  <p>{data.data.capacity}</p>
                </div>
                <div className="py-2 px-5 text-center text-lg font-normal">
                  <p className="text-black/60 ">Jumlah Lantai</p>
                  <p>{data.data.floor_count}</p>
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
                <p>{data.data.description}</p>
              </div>
            </div>
            {/* End of About this Building */}
            {/* -----------------Card Type Office------------------ */}
            <div>
              <div className="text-2xl font-medium pt-12">Type Office</div>
              <div className=" w-full max-w-full py-5 ">
                <div className="flex grid-cols-3 rounded-md shadow-sm shadow-gray-500">
                  <div>
                    <img
                      className="w-60 h-full object-fill rounded-tl-md rounded-bl-md"
                      src="https://github.com/achmadrizky486/travel-website/blob/main/src/assets/borabora.jpg?raw=true"
                      alt="/"
                    />
                  </div>
                  <div className=" p-4 flex flex-col justify-between leading-normal w-full h-full">
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
                  <div className="mx-auto my-auto">
                    <button className=" text-xl font-medium px-20 py-2 text-white bg-blue-500 mx-4 rounded-lg">
                      Book
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-full max-w-full py-5 ">
                <div className="flex grid-cols-3 rounded-md shadow-sm shadow-gray-500">
                  <div>
                    <img
                      className="w-60 h-full object-fill rounded-tl-md rounded-bl-md"
                      src="https://github.com/achmadrizky486/travel-website/blob/main/src/assets/borabora.jpg?raw=true"
                      alt="/"
                    />
                  </div>
                  <div className=" p-4 flex flex-col justify-between leading-normal w-full h-full">
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
                  <div className="mx-auto my-auto">
                    <button className=" text-xl font-medium px-20 py-2 text-white bg-blue-500 mx-4 rounded-lg">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Card Type Office */}
            {/* ------------------Review------------------ */}
            <div>
              <div className="text-2xl font-medium pt-12 pb-4">Review</div>{" "}
              {/*Awal review 5*/}
              <div className="flex grid-cols-3 ">
                <div className="flex my-auto">
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                </div>
                <div className="w-full h-full border-2 border-slate-300 my-auto">
                  <div
                    className="bg-yellow-400 h-2 mx-0 border-2 border-yellow-400"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex w-full my-auto mx-3">45% (45)</div>
              </div>
              {/*Awal review 4*/}
              <div className="flex grid-cols-3 ">
                <div className="flex my-auto">
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiOutlineStar
                    className="mx-1"
                    style={{ color: "#FBCD0A" }}
                  />
                </div>
                <div className="w-full h-full border-2 border-slate-300 my-auto">
                  <div
                    className="bg-yellow-400 h-2 mx-0 border-2 border-yellow-400"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex w-full my-auto mx-3">45% (45)</div>
              </div>
              {/*Awal review 3*/}
              <div className="flex grid-cols-3 ">
                <div className="flex my-auto">
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiOutlineStar
                    className="mx-1"
                    style={{ color: "#FBCD0A" }}
                  />
                  <AiOutlineStar
                    className="mx-1"
                    style={{ color: "#FBCD0A" }}
                  />
                </div>
                <div className="w-full h-full border-2 border-slate-300 my-auto">
                  <div
                    className="bg-yellow-400 h-2 mx-0 border-2 border-yellow-400"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex w-full my-auto mx-3">45% (45)</div>
              </div>
              {/*Awal review 2*/}
              <div className="flex grid-cols-3 ">
                <div className="flex my-auto">
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiOutlineStar
                    className="mx-1"
                    style={{ color: "#FBCD0A" }}
                  />
                  <AiOutlineStar
                    className="mx-1"
                    style={{ color: "#FBCD0A" }}
                  />
                  <AiOutlineStar
                    className="mx-1"
                    style={{ color: "#FBCD0A" }}
                  />
                </div>
                <div className="w-full h-full border-2 border-slate-300 my-auto">
                  <div
                    className="bg-yellow-400 h-2 mx-0 border-2 border-yellow-400"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex w-full my-auto mx-3">45% (45)</div>
              </div>
              {/*Awal review 1*/}
              <div className="flex grid-cols-3 ">
                <div className="flex my-auto">
                  <AiFillStar className="mx-1" style={{ color: "#FBCD0A" }} />
                  <AiOutlineStar
                    className="mx-1"
                    style={{ color: "#FBCD0A" }}
                  />
                  <AiOutlineStar
                    className="mx-1"
                    style={{ color: "#FBCD0A" }}
                  />
                  <AiOutlineStar
                    className="mx-1"
                    style={{ color: "#FBCD0A" }}
                  />
                  <AiOutlineStar
                    className="mx-1"
                    style={{ color: "#FBCD0A" }}
                  />
                </div>
                <div className="w-full h-full border-2 border-slate-300 my-auto">
                  <div
                    className="bg-yellow-400 h-2 mx-0 border-2 border-yellow-400"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <div className="flex w-full my-auto mx-3">45% (45)</div>
              </div>
            </div>
            {/* Card review */}
            <div className=" w-full max-w-full py-5 ">
              <div className="flex grid-cols-3 rounded-md shadow-sm shadow-gray-500">
                <div className="flex grid-cols-2">
                  <div className="text-center my-auto mx-6">
                    <img
                      className="w-auto h-20 object-fill rounded-full my-2"
                      src="https://github.com/achmadrizky486/travel-website/blob/main/src/assets/borabora.jpg?raw=true"
                      alt="/"
                    />
                    <p className="text-xs font-normal my-2">5/27/2022</p>
                  </div>
                  <div className="text-center my-auto">
                    <p className="text-black font-medium text-xl mb-2">
                      Panji Wahyu Utomo
                    </p>
                    <p className="text-base font-normal my-2">4.2 / 5.0</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between leading-normal w-full h-full">
                  <div className="border-l-2">
                    <p className="text-gray-700 text-base mx-2">
                      “Fasilitas motor disini kurang karena satu company hanya
                      diberikan jatah 2 access motor, lift barang di equity
                      tower hanya provide 2 lift.”
                    </p>
                  </div>
                </div>
                <div className="flex-row grid-rows-2 my-auto mx-2">
                  <button className="text-slate-400">
                    <FaThumbsUp />
                  </button>
                  <p className="text-xs font-normal">12</p>{" "}
                  <button className="text-slate-400">
                    <FaThumbsDown />
                  </button>
                  <p className="text-xs font-normal">0</p>
                </div>
              </div>
            </div>
            <div className=" w-full max-w-full py-5 ">
              <div className="flex grid-cols-3 rounded-md shadow-sm shadow-gray-500">
                <div className="flex grid-cols-2">
                  <div className="text-center my-auto mx-6">
                    <img
                      className="w-auto h-20 object-fill rounded-full my-2"
                      src="https://github.com/achmadrizky486/travel-website/blob/main/src/assets/borabora.jpg?raw=true"
                      alt="/"
                    />
                    <p className="text-xs font-normal my-2">5/27/2022</p>
                  </div>
                  <div className="text-center my-auto">
                    <p className="text-black font-medium text-xl mb-2">
                      George Hartanto
                    </p>
                    <p className="text-base font-normal my-2">4.2 / 5.0</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between leading-normal w-full h-full">
                  <div className="border-l-2">
                    <p className="text-gray-700 text-base mx-2">
                      “Equity tower cukup memuaskan, disini juga area atau
                      kawasan elit strategis, disini sendiri semua area mendapat
                      banyak fasilitas seperti mall, rumah sakit, restaurant,
                      bank. ramah pejalan kaki karena banyak fasilitas untuk
                      pejalan kaki, trotoar bersih, kalau malam interior lampu
                      nya meriah.”
                    </p>
                  </div>
                </div>
                <div className="flex-row grid-rows-2 my-auto mx-2">
                  <button className="text-slate-400">
                    <FaThumbsUp />
                  </button>
                  <p className="text-xs font-normal">12</p>{" "}
                  <button className="text-slate-400">
                    <FaThumbsDown />
                  </button>
                  <p className="text-xs font-normal">0</p>
                </div>
              </div>
            </div>
            <div className=" w-full max-w-full py-5 ">
              <div className="flex grid-cols-3 rounded-md shadow-sm shadow-gray-500">
                <div className="flex grid-cols-2">
                  <div className="text-center my-auto mx-6">
                    <img
                      className="w-auto h-20 object-fill rounded-full my-2"
                      src="https://github.com/achmadrizky486/travel-website/blob/main/src/assets/borabora.jpg?raw=true"
                      alt="/"
                    />
                    <p className="text-xs font-normal my-2">5/27/2022</p>
                  </div>
                  <div className="text-center my-auto">
                    <p className="text-black font-medium text-xl mb-2">
                      Panji Hakki
                    </p>
                    <p className="text-base font-normal my-2">4.2 / 5.0</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between leading-normal w-full h-full">
                  <div className="border-l-2">
                    <p className="text-gray-700 text-base mx-2">
                      “Overall di Equity tower baik service nya, excelent, dan
                      aman. Kebersihan selalu dijaga disini.”
                    </p>
                  </div>
                </div>
                <div className="flex-row grid-rows-2 my-auto mx-2">
                  <button className="text-slate-400">
                    <FaThumbsUp />
                  </button>
                  <p className="text-xs font-normal">12</p>{" "}
                  <button className="text-slate-400">
                    <FaThumbsDown />
                  </button>
                  <p className="text-xs font-normal">0</p>
                </div>
              </div>
            </div>
            <div className=" w-full text-center text-base font-normal">
              1 2 3
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
