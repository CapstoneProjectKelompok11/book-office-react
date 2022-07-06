import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";
import date from "https://unpkg.com/flowbite@1.4.7/dist/datepicker.js";

const PopUpBooking = () => {
  return (
    <div>
      <div className="rounded-xl p-2 bg-gray-300 max-w-[800px] mx-auto">
        <div className="border-2 border-dashed border-black rounded-xl">
          <div className="max-w-[650px] mx-auto">
            <div className="my-9">
              <AiOutlineCloseCircle className="ml-auto" size={25} />
            </div>
            <div>
              <p className="text-center text-xl font-medium">Request Booking</p>
            </div>
            <div>
              <p className="text-xl font-medium my-3">Type Office</p>
              <form className="flex items-center max-w-[700px] mx-auto w-full border-2 p-1 rounded-md text-black bg-white border-black">
                <div className="flex items-center w-full ">
                  <select
                    id="location"
                    name="location"
                    className="bg-transparent w-full focus:outline-none mx-2 text-black "
                  >
                    <option value="jakarta barat">
                      Jakarta Barat Floor kdsajhfkjashkdjhkajs
                    </option>
                    <option value="jakarta pusat">Jakarta Pusat</option>
                    <option value="jakarta selatan">Jakarta Selatan</option>
                    <option value="jakarta timur">Jakarta Timur</option>
                    <option value="jakarta utara">Jakarta Utara</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className="">
                <p className="text-xl font-medium my-3">Start Booking</p>
                <input
                  type="date"
                  name=""
                  id=""
                  className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
                />
              </div>
              <div>
                <p className="text-xl font-medium my-3">Participant</p>
                <form className="flex items-center max-w-[700px] mx-auto w-full border-2 p-1 rounded-md text-black bg-white border-black">
                  <div className="flex items-center w-full ">
                    <select
                      id="location"
                      name="location"
                      className="bg-transparent w-full focus:outline-none mx-2 text-black "
                    >
                      <option value="jakarta barat">1</option>
                      <option value="jakarta pusat">2</option>
                      <option value="jakarta selatan">3</option>
                      <option value="jakarta timur">4</option>
                      <option value="jakarta utara">5</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div>
              <p className="text-xl font-medium my-3">Company Name</p>
              <input
                type="text"
                name=""
                id=""
                className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
              />
            </div>
            <div>
              <p className="text-xl font-medium my-3">Phone Number</p>
              <input
                type="text"
                name=""
                id=""
                className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
              />
            </div>
            <div>
              <p className="text-xl font-medium my-3">Quick Message</p>
              <textarea className="w-full border-2 p-1 rounded-md text-black bg-white border-black"></textarea>
            </div>
            <div>
              <div className="w-full">
                <div className="text-center my-10">
                  <button className="text-xl font-normal py-2 text-white bg-blue-500 shadow-sm rounded-lg w-full">
                    Request a Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpBooking;
