import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";
import success from "../assets/book-success.png";
import { date } from "https://unpkg.com/flowbite@1.4.7/dist/datepicker.js";
import Profile from "../pages/Profile/Profile";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

export default function PopUp({ show, onClose ,items}) {
  console.log("items", items);
  console.log("show", show);
  const API_URL = process.env.REACT_APP_BASE_URL;
  const [bookSuccess, setBookSuccess] = useState(false);
  const [tab, setTab] = useState("My Booking");
  
  
  const [dataForm, setDataForm] = useState({
    reservation: "",
    company: "",
    phone: "",
    participant: "",
    note: "",
  });
  
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setDataForm({
      ...dataForm,
        [name]:value,
        
      })
    }
    console.log(dataForm)
    const handleSubmit = (e) => {
      e.preventDefault();
      
      
      const date = dataForm.reservation?.substring(8,10) + '-' + dataForm.reservation?.substring(5,7) + '-' + dataForm.reservation?.substring(0,4);
      const SubmitData = {
      start_reservation:date+" 00:00:00",
      company:dataForm.company,
      phone:dataForm.phone,
      participant:dataForm.participant,
      note:dataForm.note,     
    }
    axios
    .post(
      API_URL+`auth/reservation?floorId=${items}`, SubmitData, {
        headers : {
          'Authorization': `Bearer ${Cookies.get('token')}`
        }
      }
    )
    .then((response)=>
    {
    if(response.status === 200)
      {
        setBookSuccess(true);
      }else{
        console.log("gagal");
      }
    }
   )
  }
  
  
  if (!show) return null;
  
  const BookSuccess = () => {
    function close() {
      setBookSuccess(false);
      onClose();
    }
    return (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
          <div className="rounded-xl p-5 bg-white max-w-[800px] mx-auto border-2">
            <div className="mx-auto w-[650px] border-dashed border-2 border-black rounded-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="p-5">
                  <AiOutlineCloseCircle
                    className="ml-auto cursor-pointer"
                    size={25}
                    onClick={() => {
                      close();
                    }}
                  />
                  <button
                    className="p-1 ml-auto bg-transparenttext-black opacity-5 text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  ></button>
                </div>
                {/*body*/}
                <div className="w-[550px] mx-auto">
                  <div>
                    <p className="text-center text-xl font-medium">Success</p>
                  </div>
                  <div>
                    <p className="text-xl font-medium my-3 text-center">
                      Your Request Booking Has Successfully Added
                    </p>
                    <p className="text-base font-medium my-3 text-center">
                      Massage us for discussion about price
                    </p>
                  </div>
                  <div className="w-full">
                    <img src={success} alt="" className="mx-auto" />
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center my-10">
                        <NavLink to={"/profile"}>
                          <button className="text-base font-medium py-2 text-white bg-blue-500 shadow-sm rounded-lg w-full h-full">
                            Message Us
                          </button>
                        </NavLink>
                      </div>
                      <div className="text-center my-10">
                        <NavLink to={"/profile"}>
                          <button className="text-base font-medium py-2 text-blue-500 bg-white shadow-sm rounded-lg w-full border-2 border-blue-500">
                            Your Booking Detail
                          </button>
                        </NavLink>
                      </div>
                    </div>
                    <div className="hidden">
                      <Profile go={tab} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    );
  };
  return (
    <>
      {bookSuccess ? (
        <BookSuccess />
      ) : (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="rounded-xl p-5 bg-white max-w-[800px] mx-auto border-2">
              <div className="mx-auto w-[650px] border-dashed border-2 border-black rounded-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="p-5">
                    <AiOutlineCloseCircle
                      className="ml-auto cursor-pointer"
                      size={25}
                      onClick={onClose}
                    />
                    <button
                      className="p-1 ml-auto bg-transparenttext-black opacity-5 text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={onClose}
                    ></button>
                  </div>
                  {/*body*/}
                  <form onSubmit={handleSubmit}>
                  <div className="w-[550px] mx-auto">
                    <div>
                      <p className="text-center text-xl font-medium">
                        Request Booking
                      </p>
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
                              Jakarta Barat Floor 
                            </option>
                            <option value="jakarta pusat">Jakarta Pusat</option>
                            <option value="jakarta selatan">
                              Jakarta Selatan
                            </option>
                            <option value="jakarta timur">Jakarta Timur</option>
                            <option value="jakarta utara">Jakarta Utara</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div className="grid grid-cols-2 gap-20">
                      <div className="">
                        <p className="text-xl font-medium my-3">
                          Start Booking
                        </p>
                        <input
                          type="date"
                          name="reservation"
                          id=""
                          className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
                          value={dataForm.reservation}
                          onChange={handleInput}
                        />
                      </div>
                      <div>
                        <p className="text-xl font-medium my-3">Participant</p>
                        <form className="flex items-center max-w-[700px] mx-auto w-full border-2 p-1 rounded-md text-black bg-white border-black">
                          <div className="flex items-center w-full ">
                            <select
                              id=""
                              name="participant"
                              className="bg-transparent w-full focus:outline-none mx-2 text-black "
                              value={dataForm.participant}
                              onChange={handleInput}
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-medium my-3">Company Name</p>
                      <input
                        type="text"
                        name="company"
                        id=""
                        className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
                        value={dataForm.company}
                          onChange={handleInput}
                      />
                    </div>
                    <div>
                      <p className="text-xl font-medium my-3">Phone Number</p>
                      <input
                        type="text"
                        name="phone"
                        id=""
                        className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
                        value={dataForm.phone}
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <p className="text-xl font-medium my-3">Quick Message</p>
                      <textarea className="w-full border-2 p-1 rounded-md text-black bg-white border-black"
                      name="note"
                      value={dataForm.note}
                      onChange={handleInput}></textarea>
                    </div>
                    
                    <div>
                      <div className="w-full">
                        <div className="text-center my-10">
                          <button
                            className="text-xl font-normal py-2 text-white bg-blue-500 shadow-sm rounded-lg w-full"
                           type="submit"
                          >
                            Request a Booking
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
