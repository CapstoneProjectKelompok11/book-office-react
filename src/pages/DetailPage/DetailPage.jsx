import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { HiLocationMarker } from "react-icons/hi";
import { FaCity, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { RiProjector2Line, RiParkingBoxLine } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import {
  AiOutlineWifi,
  AiFillBank,
  AiFillStar,
  AiOutlineStar,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";
import Loading from "../../components/Loading";
import PopUp from "../../components/PopUp";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const DetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const [datas, setDatas] = useState([]);
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPopUpShow, setIsPopUpShow] = useState(false);
  const [datam, setDatam] = useState([]);

  useEffect(() => {
    const getOffice = async () => {
      const response = await fetch(
        `http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building?id=${id}`
      );
      const responseImg = await fetch(
        `http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/d930bd6e-7bbf-4164-9e1b-3dedee31790c.jpg` //pakai statik buat
      );
      setData(await response.json()); //Buat dapetin data json biar
      setImg(await responseImg.blob()); //Buat dapetin data gambar biar nanti kalau loading kelar, gambar bisa langsung tampil tanpa blank dulu
      setLoading(false); // setState handle loading
    };
    getOffice();
  }, []);

  useEffect(() => {
    axios
      .get(
        "http://ec2-18-206-213-94.compute-1.amazonaws.com/api/buildings?page=0&limit=99" //Ngeget data dari sini
      )
      .then((res) => {
        setDataAll(res.data.data); //Disimpen disini hasil get nya
      })
      .catch((err) => {});
  }, []);
  console.log("dataAll", dataAll);

  const dataFloor = data?.data?.id;
  console.log("dataFloor", dataFloor);
  useEffect(() => {
    axios
      .get(
        `http://ec2-18-206-213-94.compute-1.amazonaws.com/api/floor?buildingId=${id}`
      )
      .then((res) => {
        setDatam(res);
        console.log("res", res);
      })
      .catch((err) => {
        // setError(err);
      });
  }, []);

  const [floorId, setFloorId] = useState();

  const handleSelectFloor = (id) => {
    console.log("id", id);
    setFloorId(id);
  };

  console.log("datam", datam);
  console.log("data", data);
  return (
    <div>
      <Navbar />
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <div className="z-[-1]">
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
                  {datam?.data?.data?.map((floor) => (
                    <div className="flex grid-cols-3 rounded-md shadow-sm shadow-gray-500 mb-4">
                      <div>
                        <img
                          className="w-60 h-full rounded-tl-md rounded-bl-md"
                          src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/floor/image/${floor.image}`}
                          alt="/"
                        />
                      </div>
                      <div className=" p-4 flex flex-col justify-between leading-normal w-full h-full">
                        <div className="">
                          <div className="text-black font-medium text-xl mb-2">
                            {floor.name}
                          </div>
                          <p className="text-gray-700 text-base">
                            Participant : {floor.max_capacity}
                          </p>
                          <p className="text-gray-700 text-base">
                            Floor Size : {floor.floor_size}
                          </p>
                          <p className="text-gray-700 text-base">
                            Price start at : {floor.starting_price}
                          </p>
                        </div>
                      </div>
                      <div className="mx-auto my-auto">
                        <button
                          className=" text-xl font-medium px-20 py-2 text-white bg-blue-500 mx-4 rounded-lg"
                          onClick={() => {
                            //Buat nampilin popup Booking
                            setIsPopUpShow(true);
                            handleSelectFloor(floor.id);
                          }}
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  ))}
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
                  <div className="w-[1630px] h-full border-2 border-slate-300 my-auto">
                    <div
                      className="bg-yellow-400 h-2 mx-0 border-2 border-yellow-400"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <div className="flex w-full my-auto mx-3">45% (45)</div>
                  <div className="flex text-blue-500 w-96 cursor-pointer">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 2.01172L19 5.01172L16.713 7.29972L13.713 4.29972L16 2.01172ZM4 13.9997V16.9997H7L15.299 8.71272L12.299 5.71272L4 13.9997ZM4 19.9997H20V21.9997H4V19.9997Z"
                        fill="#4D89FF"
                      />
                    </svg>
                    <p className="ml-1">Write a review</p>
                  </div>
                </div>
              </div>
              {/* Card review */}
              <div className=" w-full max-w-full py-5 ">
                <div className="flex grid-cols-3 rounded-md shadow-sm shadow-gray-500">
                  <div className="flex grid-cols-2">
                    <div className="text-center my-auto mx-6">
                      <img
                        className="w-auto h-20 rounded-full my-2"
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
                        className="w-auto h-20 rounded-full my-2"
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
                        kawasan elit strategis, disini sendiri semua area
                        mendapat banyak fasilitas seperti mall, rumah sakit,
                        restaurant, bank. ramah pejalan kaki karena banyak
                        fasilitas untuk pejalan kaki, trotoar bersih, kalau
                        malam interior lampu nya meriah.”
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
                        className="w-auto h-20 rounded-full my-2"
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
              {/* <div className=" w-full text-center text-base font-normal">
              1 2 3
            </div> */}
              <p className="mt-10 text-2xl font-semibold">Nearby Office</p>
              <div className="mx-auto">
                <div className="grid grid-cols-4 gap-1 place-items-center pt-5">
                  {dataAll.map((builds) => {
                    // Data dari hasil get di map dengan nama builds
                    // console.log(builds);
                    return (
                      <>
                        {builds.complex.complex_name ===
                        data.data.complex.complex_name //Ternarry operation buat kondisi jika complex name berisi SCBD maka dia nge map, selain berisi SCBD gak bakal di map
                          ? builds.images.slice(0, 1).map((tes) => {
                              //Map dengan nama tes
                              return (
                                <>
                                  <div
                                    className="relative"
                                    onClick={() =>
                                      window.location.reload(false)
                                    }
                                  >
                                    <NavLink to={`/detail/${builds.id}`}>
                                      <img
                                        src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${tes.fileName}`} //Akses tes.fileName
                                        alt="img"
                                        className="h-full object-fill rounded-lg brightness-[.7]"
                                        key={tes.id}
                                      />
                                      <p className="z-10 absolute top-0 left-0 text-sm font-normal text-white bg-blue-500 rounded-tl-lg flex items-center px-2 py-1">
                                        <AiOutlineStar
                                          className="mr-1"
                                          size={20}
                                        />
                                        {builds.rating} / 5
                                      </p>
                                      <div className="border border-black/30 rounded-lg shadow-sm shadow-slate-500 p-3 min-h-[80px]">
                                        <p className="text-sm mb-1 my-auto">
                                          {builds.complex.complex_name},{" "}
                                          {builds.name}
                                        </p>
                                        <p className="text-xs my-auto">
                                          {builds.address}
                                        </p>
                                      </div>
                                    </NavLink>
                                  </div>
                                </>
                              );
                            })
                          : null}
                        {/* Jika complex_name tidak berisi SCBD maka tampilkan null */}
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="my-9">
                <div className="bg-blue-500 rounded-full w-fit p-2 ml-auto">
                  <a href="#top">
                    <IoIosArrowUp className=" text-white" size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
      <PopUp
        show={isPopUpShow}
        items={floorId}
        onClose={() => setIsPopUpShow(false)}
      />
    </div>
  );
};

export default DetailPage;
