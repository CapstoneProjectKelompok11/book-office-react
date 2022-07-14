import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BiCaretDown, BiSearchAlt } from "react-icons/bi";
import Loading from "../../components/Loading";
import { RiProjector2Line, RiParkingBoxLine } from "react-icons/ri";
import { AiOutlineWifi, AiFillBank } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";
import axios from "axios";

const ListingPage = () => {
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [dataComplex, setDataComplex] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState("");
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataFilter, setDataFilter] = useState("");
  const filtered = data.filter((session) => {
    if (dataFilter === "" || dataFilter === "All Cities") {
      return data;
    } else {
      return(
         session.complex.city.city_name === dataFilter ||
          session.complex.complex_name === dataFilter     
          )  
    }
  });

  const [searchInput, setSearchInput] = useState("");
  const inputHandler = (e) => {
    const searchData = e.target.value.toLowerCase();
    setSearchInput(searchData);
  };
  console.log("cek search", searchInput);
  const filter = data.filter((session) => {
    if (searchInput === "" ) {
      return session;
    } else {
      return (
        session.name.toLowerCase().includes(searchInput) 
        )
      }
    });
    const filters = (searchInput === "" ) ? filtered:filter

  useEffect(() => {
    const getOffice = async () => {
      axios
        .get("http://ec2-18-206-213-94.compute-1.amazonaws.com/api/buildings")
        .then((res) => {
          setData(res.data.data);
        });

      const responseImg = await fetch(
        `http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/d930bd6e-7bbf-4164-9e1b-3dedee31790c.jpg`
      );

      setImg(await responseImg.blob());
      setLoading(false);
    };
    getOffice();
  }, []);


  useEffect(() => {
    axios
      .get("http://ec2-18-206-213-94.compute-1.amazonaws.com/api/city")
      .then((res) => {
        setDatas(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("Data gak ketemu");
        // setError("Data gak ketemu")
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://ec2-18-206-213-94.compute-1.amazonaws.com/api/complex")
      .then((res) => {
        setDataComplex(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("Data gak ketemu");
        // setError("Data gak ketemu")
      });
  }, []);

  

  const handleChangeFilter = (e) => {
    console.log("cek filter", e.target.value);
    setDataFilter(e.target.value);
  };

  const handleChangeFiltered = (e) => {
    console.log("cek filtered", e.target.value);
    setDataFilter(e.target.value);
  };
  
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
                      onChange={inputHandler}
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
                      onChange={handleChangeFilter}
                    >
                      <option value="All Cities">All Cities</option>
                      {datas.map((city) => (
                        <option id={city.id} value={city.city_name}>
                          {city.city_name}
                        </option>
                      ))}
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
                      onChange={handleChangeFiltered}
                    >
                      <option value="All Complex">All Complex</option>
                      {dataComplex.map((city) => (
                        <option id={city.id} value={city.complex_name}>
                          {city.complex_name}
                        </option>
                      ))}
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

              {filters.map((dataOffice) => {
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
