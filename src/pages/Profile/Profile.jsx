import React from "react";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PopUp from "../../components/PopUp";

const MyProfile = () => {
  return (
    <>
      <div className="my-10 border-2 shadow-sm shadow-gray-500">
        <div className="mt-20 flex">
          <div className="flex mx-auto">
            <img
              src="https://bitsofco.de/content/images/2018/12/broken-1.png"
              alt=""
              srcset=""
              className="rounded-full mx-auto "
            />
            <AiFillEdit />
          </div>
        </div>
        <div className="mt-20 mx-3">
          <div className="grid grid-cols-11 gap-1 mb-2">
            <div className="col-span-5">
              <p className="text-xl font-medium">First Name</p>
            </div>
            <div className="col-span-5">
              <p className="text-xl font-medium">Last Name</p>
            </div>
            <div className="my-auto mx-auto">
              <AiFillEdit className="" />
            </div>
          </div>
          <div className="grid grid-cols-11 gap-1">
            <div className="col-span-5">
              <input
                type="text"
                name=""
                id=""
                className="border-2 border-black rounded-md w-full"
              />
            </div>
            <div className="col-span-6">
              <input
                type="text"
                name=""
                id=""
                className="border-2 border-black rounded-md w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 mx-3">
          <div className="grid grid-cols-11 gap-1 mb-2">
            <div className="col-span-10">
              <p className="text-xl font-medium">Phone Number</p>
            </div>
            <div className="my-auto mx-auto">
              <AiFillEdit className="" />
            </div>
          </div>
          <div className="">
            <div className="">
              <input
                type="text"
                name=""
                id=""
                className="border-2 border-black rounded-md w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 mx-3">
          <div className="grid grid-cols-11 gap-1 mb-2">
            <div className="col-span-10">
              <p className="text-xl font-medium">Email</p>
            </div>
            <div className="my-auto mx-auto">
              <AiFillEdit className="" />
            </div>
          </div>
          <div className="">
            <div className="">
              <input
                type="text"
                name=""
                id=""
                className="border-2 border-black rounded-md w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 mx-3">
          <div className="grid grid-cols-11 gap-1 mb-2">
            <div className="col-span-10">
              <p className="text-xl font-medium">Company</p>
            </div>
            <div className="my-auto mx-auto">
              <AiFillEdit className="" />
            </div>
          </div>
          <div className="">
            <div className="">
              <input
                type="text"
                name=""
                id=""
                className="border-2 border-black rounded-md w-full"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-center my-10">
            <button className=" text-xl font-medium px-20 py-2 text-white bg-blue-500 mx-4 rounded-lg">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const MyBooking = () => {
  return (
    <>
      <div className="my-10 border-2 rounded-md shadow-sm shadow-gray-500">
        <div className="grid grid-cols-3 gap-2 my-2 mx-2">
          <div className="border-2 rounded-md">
            <div className="my-2 mx-2">
              <img
                src="https://bitsofco.de/content/images/2018/12/broken-1.png"
                alt=""
                srcset=""
                className="rounded-lg"
              />
            </div>
            <div>
              <div className="w-full">
                <div className="text-center mt-10 mb-5">
                  <button className=" text-base font-medium px-3 py-2 text-black bg-yellow-400 shadow-sm shadow-gray-500 rounded-lg">
                    Waiting for Payment
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full">
                <div className="text-center mb-10">
                  <button className="text-base font-medium px-3 py-2 text-black bg-blue-500 shadow-sm shadow-gray-500 rounded-lg">
                    Message Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-md">
            <div className="mx-2 my-2">
              <p className="text-base font-bold">Name Building</p>
              <p>SCBD, Equity Tower</p>
              <p className="text-base font-bold">Building Type</p>
              <p>Serviced Office</p>
              <p className="text-base font-bold">Floor</p>
              <p>48th</p>
              <p className="text-base font-bold">Size Room</p>
              <p>442,20 sqm</p>
            </div>
          </div>
          <div className="border-2 rounded-md">
            <div className="mx-2 my-2">
              <p className="text-base font-bold">Booking Code</p>
              <p>AA2138KW92</p>
              <p className="text-base font-bold">Start Booking Date</p>
              <p>20 June 2022</p>
              <p className="text-base font-bold">Name</p>
              <p>Fatih Safaat</p>
              <p className="text-base font-bold">Email</p>
              <p>Fatih1234@gmail.com</p>
              <p className="text-base font-bold">Phone Number</p>
              <p>081288901234</p>
              <p className="text-base font-bold">Company Name</p>
              <p>Alterra Academy</p>
              <p className="text-base font-bold">Participant</p>
              <p>7 People</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MyFavorite = () => {
  return (
    <>
      <div className="my-10 border-2 rounded-md shadow-sm shadow-gray-500">
        <div className="grid grid-cols-2 gap-6 my-10 mx-12">
          <div className="relative">
            <p className="z-10 absolute bottom-9 left-5 text-base font-bold">
              Start at Rp 19.000.000
            </p>
            <p className="z-10 absolute bottom-5 left-5 text-base font-medium">
              SCBD, Equity Tower
            </p>
            <img
              src="https://bitsofco.de/content/images/2018/12/broken-1.png"
              alt=""
              srcset=""
              className="rounded-md"
            />
          </div>
          <div className="relative">
            <p className="z-10 absolute bottom-9 left-5 text-base font-bold">
              Start at Rp 19.000.000
            </p>
            <p className="z-10 absolute bottom-5 left-5 text-base font-medium">
              SCBD, Equity Tower
            </p>
            <img
              src="https://bitsofco.de/content/images/2018/12/broken-1.png"
              alt=""
              srcset=""
              className="rounded-md"
            />
          </div>
          <div className="relative">
            <p className="z-10 absolute bottom-9 left-5 text-base font-bold">
              Start at Rp 19.000.000
            </p>
            <p className="z-10 absolute bottom-5 left-5 text-base font-medium">
              SCBD, Equity Tower
            </p>
            <img
              src="https://bitsofco.de/content/images/2018/12/broken-1.png"
              alt=""
              srcset=""
              className="rounded-md"
            />
          </div>
          <div className="relative">
            <p className="z-10 absolute bottom-9 left-5 text-base font-bold">
              Start at Rp 19.000.000
            </p>
            <p className="z-10 absolute bottom-5 left-5 text-base font-medium">
              SCBD, Equity Tower
            </p>
            <img
              src="https://bitsofco.de/content/images/2018/12/broken-1.png"
              alt=""
              srcset=""
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Profile = () => {
  const [tab, setTab] = useState("My Profile");
  return (
    <div>
      <Navbar />
      <div className="max-w-[864px] conatiner mx-auto px-4">
        <div className="grid grid-cols-3 py-4 gap-3 mt-10">
          <button
            className={
              tab === "My Profile"
                ? "text-xl font-medium px-8 py-2 text-white shadow-sm shadow-gray-500 bg-blue-500"
                : "text-xl font-medium px-8 py-2 text-black border-2 shadow-sm shadow-gray-500"
            }
            onClick={() => setTab("My Profile")}
          >
            My Profile
          </button>
          <button
            className={
              tab === "My Booking"
                ? "text-xl font-medium px-8 py-2 text-white shadow-sm shadow-gray-500 bg-blue-500"
                : "text-xl font-medium px-8 py-2 text-black border-2 shadow-sm shadow-gray-500"
            }
            onClick={() => setTab("My Booking")}
          >
            My Booking
          </button>
          <button
            className={
              tab === "My Favorite"
                ? "text-xl font-medium px-8 py-2 text-white shadow-sm shadow-gray-500 bg-blue-500"
                : "text-xl font-medium px-8 py-2 text-black border-2 shadow-sm shadow-gray-500"
            }
            onClick={() => setTab("My Favorite")}
          >
            My Favorite
          </button>
        </div>
        {tab === "My Profile" ? <MyProfile /> : null}
        {tab === "My Booking" ? <MyBooking /> : null}
        {tab === "My Favorite" ? <MyFavorite /> : null}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
