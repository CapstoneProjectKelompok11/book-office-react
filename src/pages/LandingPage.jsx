import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import banner from "../assets/Banner.png";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";
import img4 from "../assets/img-4.png";
import img5 from "../assets/asas.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://ec2-18-206-213-94.compute-1.amazonaws.com/api/buildings?page=0&limit=10"
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <div>
      {/* ----------------------Banner---------------- */}
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
      {/* ------------------End of Banner------------------------ */}
      {/* -----------Top Places------------------------ */}
      <div className="mx-auto py-16 px-4 text-center">
        <h2 className="font-medium">Top Places in Jakarta</h2>
        <div className="justify-between pt-12">
          <div className="grid grid-cols-6 gap-4">
            {data.map((builds) => {
              // console.log("builds", builds);
              return (
                <div className="border-2 ">
                  <div key={builds.id}>
                    {/* <p> {builds.name}</p> */}
                    {builds.images.slice(0, 1).map((tes) => {
                      // console.log("file name", tes.fileName);
                      return (
                        <>
                          <NavLink to={`/detail/${builds.id}`}>
                            <img
                              className="object-fill "
                              src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${tes.fileName}`}
                              alt="img"
                              key={tes.id}
                            />
                          </NavLink>
                        </>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* -----------------End of Top Places-------------------- */}
      <div className="my-16 bg-gradient-to-r from-white via-stone-150 to-stone-200 h-[350px]">
        <div className="mx-auto grid grid-cols-3 gap-4 ">
          <div className="col-span-2 flex flex-col my-10 ml-20">
            <div>
              <h2 className="text-black font-medium text-base">About Us</h2>
              <p className="py-4 max-w-sm text-base">
                We connect you with the office building that spread in the
                jakarta. We will help you for Booking, Renting, and Tour.
              </p>
            </div>
            <div className="grid grid-cols-7">
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
      {/* ---------------------End of About Us--------------- */}
      {/* ------Card SCBD Hotel------------- */}
      <div>
        <p className="ml-20 mt-40 text-2xl font-semibold">Kuningan</p>
        <div className="grid grid-cols-4 gap-1 place-items-center pt-5 px-5">
          {data.map((builds) => {
            console.log(builds.complex);
            return (
              <>
                {builds.complex.complex_name === "Kuningan"
                  ? builds.images.slice(0, 1).map(
                      (
                        tes //slice buat limitasi data yg diambil (0 sampai 1 data)
                      ) => {
                        console.log(tes.filename);
                        return (
                          <>
                            <NavLink to={`/detail/${builds.id}`}>
                              <img
                                src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${tes.fileName}`}
                                alt="img"
                                className="h-full object-cover"
                                key={tes.id}
                              />
                            </NavLink>
                          </>
                        );
                      }
                    )
                  : null}
              </>
            );
          })}
        </div>
        <div>
          <p className="text-xl ml-20 mt-5 font-semibold underline underline-offset-4">
            More Office in Kuningan
          </p>
          <p className="ml-20 mt-24 text-2xl font-semibold">Jakarta Pusat</p>
          <div className="grid grid-cols-4 gap-1 place-items-center pt-5 px-5">
            {data.map((builds) => {
              return (
                <>
                  {builds.complex.city.city_name === "Jakarta Pusat"
                    ? builds.images.map(
                        (
                          tes //slice buat limitasi data yg diambil (0 sampai 1 data)
                        ) => (
                          <>
                            <NavLink to={`/detail/${builds.id}`}>
                              <img
                                src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${tes.fileName}`}
                                alt="img"
                                className="h-full object-cover"
                                key={tes.id}
                              />
                            </NavLink>
                          </>
                        )
                      )
                    : null}
                </>
              );
            })}
          </div>
          <div>
            <p className="text-xl ml-20 mt-5 font-semibold underline underline-offset-4">
              More Office in Jakarta Pusat
            </p>
          </div>
        </div>
      </div>
      {/* -------------End of Card SCBD Hotel------------------- */}
      {/* -----------Find Us----------------- */}
      <div>
        <p className="mt-20 mb-28 text-center text-2xl font-semibold">
          Find us
        </p>
        <div>
          <div>
            <section className="bg-white body-font relative">
              <div
                className="border m-auto mb-28 shadow-2xl"
                style={{ width: "850px" }}
              >
                <div
                  className="m-auto"
                  style={{ width: "850px", height: "350px" }}
                >
                  <iframe
                    title="map"
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                    src="https://maps.google.com/maps?q=desa%20keniten%20rt%20004%20rw%20001%20kecamatan%20geneng%20kabupaten%20ngawi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  />
                </div>
                <p className="border text-center text-xl py-5 font-semibold">
                  Graha MIR Lt. 2, Jalan Pemuda No.9 Rawamangun, Jakarta Timur -
                  13220
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
