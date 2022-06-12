import React from "react";
import { useState } from "react";
import axios from "axios";
import img from "../image/bglogin.png";

const Register = () => {
  const [dataForm, setDataForm] = useState({
    FrontName: "",
    LastName: "",
    PhoneNumber: "",
    Address: "",
    Email: "",
    Password: "",
    passwordConfirm: "",
  });

  const [FrontName, setFrontName] = useState("");
  const [LastName, setLastName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");
  const [UserExist, setUserExist] = useState("");
  const [AllValid, setAllValid] = useState("");
  const [loading, setLoading] = useState(false);

  const [isMessage, setMessage] = useState({
    message: "",
  });

  const handleFirstName = (e) => {
    const value = e.target.value;
    const minLength = 3;
    if (value.length < minLength) {
      setFrontName("First Name must be at least 3 characters");
    } else {
      setFrontName("");
    }
  };
  const handleLastName = (e) => {
    const value = e.target.value;
    const minLength = 3;
    if (value.length < minLength) {
      setLastName("Last Name must be at least 3 characters");
    } else {
      setLastName("");
    }
  };

  const handlePhoneNumber = (e) => {
    const value = e.target.value;
    const minLength = 10;
    if (value.length < minLength) {
      setPhoneNumber("Phone Number must be at least 10 characters");
    } else {
      setPhoneNumber("");
    }
  };

  const handleAddress = (e) => {
    const value = e.target.value;
    const minLength = 3;
    if (value.length < minLength) {
      setAddress("Address must be at least 3 characters");
    } else {
      setAddress("");
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    const minLength = 8;
    const maxLength = 16;
    const containsNumber = value.match(/[0-9]/) ? true : false;
    const containsLetter = value.match(/[a-zA-Z]/) ? true : false;
    setPassword(value);
    value.length >= minLength &&
    value.length <= maxLength &&
    containsNumber &&
    containsLetter
      ? setPasswordConfirm("")
      : setPasswordConfirm(
          "Password must be at least 8 characters and contain at least one number and one letter"
        );
  };

  

  const handlePasswordConfirm = (e) => {
    const value = e.target.value;
    setPasswordConfirm(value);
    value === Password
      ? setPasswordConfirm("")
      : setPasswordConfirm("Password must be the same");
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    const valueNoSpace = value.includes(" ") ? false : true;
    const oneAt = value.match(/@/g)?.length === 1 ? true : false;

    setEmail(valueNoSpace);
    valueNoSpace && oneAt
      ? setMessage({ message: "" })
      : setMessage({ message: "Email must contain one @" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      FrontName &&
      LastName &&
      PhoneNumber &&
      Address &&
      Email &&
      Password &&
      PasswordConfirm
    ) {
      setLoading(true);

      // axios
      //   .post("http://ec2-18-206-213-94.compute-1.amazonaws.com/api/register", {
      //     FrontName,
      //     LastName,
      //     PhoneNumber,
      //     Address,
      //     Email,
      //     Password,
      //     PasswordConfirm,
      //   })
      //   .then((response) => {
      //     console.log(response);
      //     setUserExist("false");
      //     setAllValid("valid");
      //     setLoading(false);
      //     Cookies.set("token", response.data.token);
      //  })
      //   .catch((error) => {
      //     console.log(error);
      //    setUserExist("doesn't exist");
      //    setAllValid("valid");
      //    setLoading(false);
      // });
    } else {
      setAllValid("invalid");
      setUserExist("");
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-6/12 bg-gradient-to-r from-white via-white to-gray-100 h-full">
              <div className="relative flex flex-col items-center justify-center w-full h-full">
                <img className="" src={img} alt="" />
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-6/12">
              <div className="text-center pb-10 md:pb-1 pt-44 text-xl italic font-semibold">
                <p>Sign up your account</p>
              </div>
              <div className="flex flex-col items-start justify-start w-full px-24 xl:pt-5">
                <div className="relative w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="pt-2">
                      <label className="font-semibold text-xl text-gray-900">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="border-2 border-black w-full md:w-56 h-10 pt-2.5 block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                        onChange={(e) => {
                          handleFirstName(e);
                        }}
                      />
                    </div>
                    <div className="pt-2 md:pl-3">
                      <label className="font-semibold text-xl text-gray-900">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="border-2 border-black w-full md:w-56 h-10 pt-2.5 block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                        onChange={(e) => {
                          handleLastName(e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="relative pt-5">
                    <label className="font-semibold text-gray-900 text-xl">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="border-2 border-black h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                      onChange={(e) => {
                        handlePhoneNumber(e);
                      }}
                    />
                  </div>
                  <div className="relative pt-5">
                    <label className="font-semibold text-xl text-gray-900">
                      Address
                    </label>
                    <input
                      type="textarea"
                      className="border-2 border-black h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                      onChange={(e) => {
                        handleAddress(e);
                      }}
                    />
                  </div>
                  <div className="relative pt-5">
                    <label className="font-semibold text-xl text-gray-900">
                      Email
                    </label>
                    <input
                      type="text"
                      className="border-2 border-black h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                      onChange={(e) => {
                        handleEmail(e);
                      }}
                    />
                  </div>
                  <div className="relative pt-5">
                    <label className="font-semibold text-gray-900 text-xl">
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-2 border-black h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                      onChange={(e) => {
                        handlePassword(e);
                      }}
                    />
                    <div class="absolute mt-14 mr-2 inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative pt-5">
                    <label className="font-semibold text-gray-900 text-xl">
                      Confirmation Password
                    </label>
                    <input
                      type="password"
                      className="border-2 border-black h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                      onChange={(e) => {
                        handlePasswordConfirm(e);
                      }}
                    />
                    <div class="absolute mt-14 mr-2 inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative py-10">
                    <a
                      href="#_"
                      className="h-10 inline-block w-full px-3 py-1 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                    >
                      Register Account
                    </a>
                    {/* <span>
                      {isMessage}
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
