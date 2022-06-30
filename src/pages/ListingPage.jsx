import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ListTable from "./ListTable";
import { BiCaretDown, BiSearchAlt } from "react-icons/bi";
import Loading from "../components/Loading";
import { RiProjector2Line, RiParkingBoxLine } from "react-icons/ri";
import { AiOutlineWifi, AiFillBank } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";

const ListingPage = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState("");
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOffice = async () => {
      const response = await fetch(
        `http://ec2-18-206-213-94.compute-1.amazonaws.com/api/buildings?page=0&limit=10`
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
  console.log(data);
  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <div className="max-w-[1300px] conatiner mx-auto px-4">
            <div className="p-5 text-center text-base font-normal">
              <p>Home {">"} ALL ROOM</p>
            </div>
            <div className="w-full my-auto mx-auto border-2 rounded grid grid-cols-3 gap-3 p-4 shadow-gray-500">
              <div className="">
                <p>Search</p>
                <form className="flex items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-white bg-gray-100/90">
                  <div className="flex items-center">
                    <input
                      className="bg-transparent w-[150px] focus:outline-none mx-2 text-black"
                      type="text"
                      placeholder="Search a place"
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
                <p>Filter</p>
                <form className="flex items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
                  <div className="flex items-center">
                    <select
                      id="location"
                      name="location"
                      className="bg-transparent w-[150px] focus:outline-none mx-2 text-black"
                    >
                      <option value="jakarta barat">Jakarta Barat</option>
                      <option value="jakarta pusat">Jakarta Pusat</option>
                      <option value="jakarta selatan">Jakarta Selatan</option>
                      <option value="jakarta timur">Jakarta Timur</option>
                      <option value="jakarta utara">Jakarta Utara</option>
                    </select>
                    <div>
                      <BiCaretDown
                        className="mr-4 text-black cursor-pointer"
                        size={18}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <p>Sort By</p>
                <form className="flex items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
                  <div className="flex items-center">
                    <select
                      id="location"
                      name="location"
                      className="bg-transparent w-[150px] focus:outline-none mx-2 text-black"
                    >
                      <option value="jakarta barat">Jakarta Barat</option>
                      <option value="jakarta pusat">Jakarta Pusat</option>
                      <option value="jakarta selatan">Jakarta Selatan</option>
                      <option value="jakarta timur">Jakarta Timur</option>
                      <option value="jakarta utara">Jakarta Utara</option>
                    </select>
                    <div>
                      <BiCaretDown
                        className="mr-4 text-black cursor-pointer"
                        size={18}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* -----------------Card------------------ */}
            <div className="max-w-[1040px] mx-auto mt-16">
              {data.data.map((dataOffice) => {
                return (
                  <>
                    <div className="w-full max-w-full py-5 ">
                      <NavLink to={`/detail/${dataOffice.id}`}>
                        <div className="flex grid-cols-3 rounded-md shadow-sm shadow-gray-500">
                          <div className="w-[80%]">
                            {dataOffice.images.slice(0, 1).map((gambar) => {
                              console.log(
                                "id ku",
                                dataOffice.id,
                                "gambarku",
                                gambar
                              );
                              return (
                                <>
                                  {/* Ini pengennya cek gambar apakah ada atau gak, kalau ada tampilin data gambar, kalo gak ada gambar bakal tampil broken-1.png */}
                                  {gambar === [""] ? (
                                    <img
                                      className="w-full h-full rounded-tl-md rounded-bl-md"
                                      src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                                      alt="/"
                                    />
                                  ) : (
                                    <img
                                      className="w-full h-full rounded-tl-md rounded-bl-md"
                                      src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${gambar.fileName}`}
                                      alt="/"
                                    />
                                  )}
                                  {/* -------------- Tau dah kagak bisa mulu ------------ */}
                                </>
                              );
                            })}
                          </div>
                          <div className="p-3 flex flex-col w-full h-full">
                            <div className="">
                              <div className="text-black font-normal text-base">
                                {dataOffice.complex.complex_name}
                              </div>
                              <div className="text-black font-medium text-xl mb-2">
                                {dataOffice.name}
                              </div>
                              <div className="text-black font-medium text-xl ">
                                Location
                              </div>
                              <div className="text-black font-normal text-base mb-2">
                                {dataOffice.address}
                              </div>
                              <div className="text-black font-medium text-xl ">
                                Office Type Available
                              </div>
                              {dataOffice.office_type.map((type) => {
                                return (
                                  <>
                                    <div className="text-black font-normal text-base ">
                                      {type}
                                    </div>
                                  </>
                                );
                              })}
                            </div>
                          </div>
                          <div className="p-3 flex flex-col w-full h-full">
                            <div className="">
                              <div className="text-black font-medium text-xl mb-2">
                                Facility
                              </div>
                              <div className="flex mb-2">
                                <RiProjector2Line className="mx-1" size={20} />
                                <AiOutlineWifi className="mx-1" size={20} />
                                <RiParkingBoxLine className="mx-1" size={20} />
                                <MdRestaurantMenu className="mx-1" size={20} />
                                <AiFillBank className="mx-1" size={20} />
                              </div>
                              <div className="text-black font-medium text-xl ">
                                Room Specification
                              </div>
                              <div className="text-black font-normal text-base ">
                                Building Size : {dataOffice.building_size}
                              </div>
                              <div className="text-black font-normal text-base ">
                                Capacity : {dataOffice.capacity} person
                              </div>
                              <div className="text-black font-normal text-base ">
                                Floor : {dataOffice.floor_count}
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/* End of Card */}
        </>
      )}
    </div>
  );
};
export default ListingPage;
