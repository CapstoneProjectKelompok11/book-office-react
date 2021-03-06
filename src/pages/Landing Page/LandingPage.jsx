import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axiosInstance from "../../networks/api";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import "./Style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [dataImg, setDataImg] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axiosInstance
      .get(
        "/buildings?page=0&limit=99" //Ngeget data dari sini
      )
      .then((res) => {
        setData(res.data.data); //Disimpen disini hasil get nya
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const Arrow = (props) => {
    //Styling arrow buat carousel
    const { className, style, onClick } = props;
    return (
      <div
        className={className} //Ini bawaan package, nama package React Slick
        style={{
          ...style,
          background: "blue",
          margin: "10px 10px 10px 10px",
          alignItems: "center",
        }}
        onClick={onClick} // Bawaaan package react slick
      />
    );
  };

  const settings = {
    //Bawaan package react slick
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />, //manggil arrow di line 31
    prevArrow: <Arrow />,
  };

  return (
    <div>
      <Navbar />
      {/* ----------------------Banner---------------- */}
      <div className="w-full h-[400px] relative">
        <img
          src="https://raw.githubusercontent.com/CapstoneProjectKelompok11/book-office-react/main/src/assets/Banner.png"
          alt="/"
          className="w-full h-full"
        />
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
                  <BiSearchAlt //icon dari package react icons
                    className="mr-4 text-black cursor-pointer"
                    size={18} //ngatur size icons, bawaan react icons
                  />
                </div>
              </div>
            </form>
          </div>
          <div>
            <Link to="/listing">
              <button className="bg-[#4D89FF] p-2 mt-8 rounded-md w-60">
                Find All Office
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ------------------End of Banner------------------------ */}
      {/* -----------Top Places------------------------ */}
      <div className="mx-auto py-16 px-4 text-center">
        <h2 className="font-medium">Top Places in Jakarta</h2>
        <div className="justify-between pt-12">
          <Slider {...settings} className="max-w-[1200px] mx-auto gap-96">
            {" "}
            {/* Manggil carousel pake <Slider> + template cara manggil carousel => aturan bawaan react slick */}
            <div className="relative px-5">
              <NavLink to={`/listing`}>
                <img
                  className="object-fill brightness-[.7] rounded-lg"
                  src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/5cf15fed-fd5a-425a-84b2-4059454bd71e.jpg`}
                  alt="img"
                />
                <p className="z-10 absolute bottom-5 left-10 text-base font-medium text-white">
                  SCBD
                </p>
              </NavLink>
            </div>
            <div className="relative px-5">
              <NavLink to={`/listing`}>
                <p className="z-10 absolute bottom-5 left-10 text-base font-medium text-white">
                  Senayan City
                </p>
                <img
                  className="object-fill brightness-[.7] rounded-lg"
                  src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/f86d58ee-aea6-4588-9de6-8fcb86c9444e.jpg`}
                  alt="img"
                />
              </NavLink>
            </div>
            <div className="relative px-5">
              <NavLink to={`/listing`}>
                <p className="z-10 absolute bottom-5 left-10 text-base font-medium text-white">
                  Tanah Abang
                </p>
                <img
                  className="object-fill brightness-[.7] rounded-lg"
                  src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/c7326799-84da-4ee0-84ef-78e222763f8f.jpg`}
                  alt="img"
                />
              </NavLink>
            </div>
            <div className="relative px-5">
              <NavLink to={`/listing`}>
                <p className="z-10 absolute bottom-5 left-10 text-base font-medium text-white">
                  Palmerah
                </p>
                <img
                  className="object-fill brightness-[.7] rounded-lg"
                  src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/a0b52f5e-0340-4398-9f94-c7244e3465c3.jpg`}
                  alt="img"
                />
              </NavLink>
            </div>
            <div className="relative px-5">
              <NavLink to={`/listing`}>
                <p className="z-10 absolute bottom-5 left-10 text-base font-medium text-white">
                  Cengkareng
                </p>
                <img
                  className="object-fill brightness-[.7] rounded-lg"
                  src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/aeb8dcba-f8fd-42bc-b198-1d9b09577155.jpg`}
                  alt="img"
                />
              </NavLink>
            </div>
          </Slider>{" "}
          {/* Tag penutup slider buat manggil carousel */}
        </div>
      </div>

      {/* -----------------End of Top Places-------------------- */}
      <div
        className="my-16 bg-gradient-to-r from-white via-stone-150 to-stone-200 h-[350px]"
        id="about" //dikasih Id buat auto navigate ke section ini, manggilnya ada di Navbar.jsx
      >
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
                  <img
                    src="https://raw.githubusercontent.com/CapstoneProjectKelompok11/book-office-react/main/src/assets/img-1.png"
                    alt="/"
                  />
                  <p className="py-1">Explore</p>
                </div>
              </div>
              <div className="flex items-center text-center">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/CapstoneProjectKelompok11/book-office-react/main/src/assets/img-2.png"
                    alt="/"
                  />
                  <p className="py-1">Variate</p>
                </div>
              </div>
              <div className="flex items-center text-center">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/CapstoneProjectKelompok11/book-office-react/main/src/assets/img-3.png"
                    alt="/"
                  />
                  <p className="py-1">Live Chat</p>
                </div>
              </div>
              <div className="flex items-center text-center">
                <div>
                  <img
                    src="https://raw.githubusercontent.com/CapstoneProjectKelompok11/book-office-react/main/src/assets/img-4.png"
                    alt="/"
                  />
                  <p className="py-1">Deal</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[-40px] ">
            <img
              className="border border-black/30 rounded-lg shadow-2xl shadow-slate-500"
              src="https://raw.githubusercontent.com/CapstoneProjectKelompok11/book-office-react/main/src/assets/asas.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ---------------------End of About Us--------------- */}
      {/* ------Card SCBD Hotel------------- */}
      <div>
        <p className="ml-20 mt-40 text-2xl font-semibold">SCBD</p>
        <div className="mx-auto">
          <div className="grid grid-cols-4 gap-1 place-items-center pt-5 px-5 mx-14">
            {data.map((builds) => {
              // Data dari hasil get di map dengan nama builds
              // console.log(builds);
              return (
                <>
                  {builds.complex.complex_name === "SCBD" //Ternarry operation buat kondisi jika complex name berisi SCBD maka dia nge map, selain berisi SCBD gak bakal di map
                    ? builds.images.slice(0, 1).map((tes) => {
                        //Map dengan nama tes
                        return (
                          <>
                            <div className="relative">
                              <NavLink to={`/detail/${builds.id}`}>
                                <img
                                  src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${tes.fileName}`} //Akses tes.fileName
                                  alt="img"
                                  className="h-full object-fill rounded-lg brightness-[.7]"
                                  key={tes.id}
                                />{" "}
                                <p className="z-10 absolute top-0 left-0 text-sm font-normal text-white bg-blue-500 rounded-tl-lg flex items-center px-2 py-1">
                                  <AiOutlineStar className="mr-1" size={20} />
                                  {builds.rating} / 5
                                </p>
                                <div className="border border-black/30 rounded-lg shadow-sm shadow-slate-500 p-3 min-h-[80px]">
                                  <p className="text-sm mb-1 my-auto">
                                    {builds.complex.complex_name}, {builds.name}
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
        <div>
          <p className="text-xl ml-20 mt-5 font-semibold underline underline-offset-4">
            <NavLink to={"/listing"}>More Office in SCBD</NavLink>
          </p>
          <p className="ml-20 mt-24 text-2xl font-semibold">Senayan City</p>
          <div className="mx-auto">
            <div className="grid grid-cols-4 gap-1 place-items-center pt-5 px-5 mx-14">
              {data.map((builds) => {
                return (
                  <>
                    {builds.complex.complex_name === "Senayan City" //Sama kayak ternary sebelumnya
                      ? builds.images.slice(0, 1).map((tes) => (
                          <>
                            <div className="relative">
                              <NavLink to={`/detail/${builds.id}`}>
                                <img
                                  src={`http://ec2-18-206-213-94.compute-1.amazonaws.com/api/building/image/${tes.fileName}`}
                                  alt="img"
                                  className="h-full object-fill brightness-[.7] rounded-lg"
                                  key={tes.id}
                                />
                                <p className="z-10 absolute top-0 left-0 text-sm font-normal text-white bg-blue-500 rounded-tl-lg flex items-center px-2 py-1">
                                  <AiOutlineStar className="mr-1" size={20} />
                                  {builds.rating} / 5.0
                                </p>
                                <div className="border border-black/30 rounded-lg shadow-sm shadow-slate-500 p-3 min-h-[80px]">
                                  <p className="text-sm mb-1 my-auto">
                                    {builds.complex.complex_name}, {builds.name}
                                  </p>
                                  <p className="text-xs my-auto">
                                    {builds.address}
                                  </p>
                                </div>
                              </NavLink>
                            </div>
                          </>
                        ))
                      : null}{" "}
                    {/* Sama kek ternary sebelumnya */}
                  </>
                );
              })}
            </div>
          </div>
          <div>
            <p className="text-xl ml-20 mt-5 font-semibold underline underline-offset-4">
              <NavLink to={"/listing"}>More Office in Senayan City</NavLink>
            </p>
          </div>
        </div>
      </div>
      {/* -------------End of Card SCBD Hotel------------------- */}
      {/* -----------Find Us----------------- */}
      <div>
        <p className="mt-20 mb-28 text-center text-2xl font-semibold" id="find">
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
