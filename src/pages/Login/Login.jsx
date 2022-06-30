import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../networks/api";
import img2 from "../../image/Image.png";
import img from "../../image/logologin.png";

const Login = () => {
  const [dataForm, setDataForm] = useState({
    Email: "",
    Password: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isUserExist, setUserExist] = useState("");
  const [isAllValid, setAllValid] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isMessage, setMessage] = useState({
    message: "",
  });

  const handleEmail = (e) => {
    const email = e.target.value;
    console.log("value", email);
    const valueNoSpace = email.includes(" ") ? false : true;
    const isThereaddress = email.split("@")[0] ? true : false;
    const justoneAt = email.match(/@/g)?.length === 1 ? true : false;
    const isThereDomain = email.split("@")[1]?.split(".")[0] ? true : false;
    const isThereTopLevelDomain =
      email.split(".")[1]?.length > 0 ? true : false;

    setEmail(email);
    if (
      valueNoSpace &&
      isThereaddress &&
      justoneAt &&
      isThereDomain &&
      isThereTopLevelDomain
    ) {
      setEmailValid(true);
      setDataForm((state) => ({ ...state, email }));
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    const minLength = 8;
    const maxLength = 16;
    const containsNumber = password.match(/[0-9]/) ? true : false;
    const containsLetter = password.match(/[a-zA-Z]/) ? true : false;
    setPassword(password);
    if (
      password.length >= minLength &&
      password.length <= maxLength &&
      containsLetter &&
      containsNumber
    ) {
      setPasswordValid(true);
      setDataForm((state) => ({ ...state, password }));
    } else {
      setPasswordValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }

    if (isEmailValid && isPasswordValid) {
      setLoading(true);

      axiosInstance
        .post("/login", {
          email: dataForm.Email,
          password: dataForm.Password,
        })
        .then((response) => {
          setUserExist("exists");
          setAllValid("valid");
          setLoading(false);
          console.log("response", response)
          // navigate("/home");
          Cookies.set("token", response.data.data.token);
        })
        .catch((error) => {
          setUserExist("doesn't exist");
          setAllValid("valid");
          setLoading(false);
          console.log(error);
        });
    } else {
      setAllValid("not valid");
      setUserExist("");
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-6/12 bg-gradient-to-r from-white via-white to-gray-100 ">
              <div className="relative flex flex-col items-center justify-center w-full">
                <img className="" src={img2} alt="" />
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-6/12">
              <div className="m-48 w-96 m-auto pt-16">
                <img src={img} alt="" />
              </div>
              <div className="text-center pt-10 text-2xl italic font-semibold">
                <p>Welcome to SewaKantor.com</p>
                <p>Kebutuhan ruangan kerja adalah andalan kami</p>
              </div>
              <div className="text-center pt-10 pb-10 md:pb-5 text-xl font-semibold">
                <p>Login</p>
              </div>
              <div className="flex flex-col items-center justify-start w-full lg:px-40 xl:pt-1">
                <div className="relative">
                  <div className="text-center md:text-left">
                    <label className="font-semibold text-xl text-gray-900">
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-2 m-auto border-black w-96 h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                      placeholder="Enter Your Email"
                      onChange={(e) => {
                        handleEmail(e);
                      }}
                      validators={[isEmailValid, isAllValid]}
                      alertMessage="Email yang dimasukan tidak sesuai"
                    />
                  </div>
                  <div className="relative pt-5 text-center md:text-left">
                    <label className="font-semibold text-gray-900 text-xl">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-96 border-2 m-auto border-black h-10 pt-2.5 block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                      placeholder="Password"
                      onChange={(e) => {
                        handlePassword(e);
                      }}
                      validators={[isPasswordValid, isAllValid]}
                      alertMessage="Password yang dimasukkan tidak sesuai"
                    />
                    <div className="absolute mt-14 mr-3 inset-y-0 right-0 flex items-center px-2 pointer-events-none">
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
                  <div className="pt-5">
                    <input
                      type="checkbox"
                      className="custom-checkbox w-5 h-5"
                    />
                    <label
                      className="font-semibold text-gray-900 text-xl"
                      for="vehicle1"
                    >
                      {" "}
                      Remember Me
                    </label>
                  </div>
                  <div className="pt-5 text-center md:text-left">
                    <button
                    type="submit"
                      className="w-96 h-10 inline-block w-full px-3 py-1 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                    >
                      Login
                    </button>
                  </div>
                  <div className="container-hr m-auto">
                    <span className="span-hr">or</span>
                  </div>
                  <div className="relative pt-5 text-center md:text-left">
                    <a
                      href="#_"
                      className="w-96 h-10 inline-block w-full pl-10 px-3 py-1 text-xl font-bold text-center text-gray-900 transition duration-200 bg-white border border-black rounded-lg hover:bg-gray-100 ease"
                    >
                      Login With Google
                    </a>
                    <div className="absolute mt-5 ml-20 inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.456 8.15401C19.579 8.81301 19.646 9.50201 19.646 10.221C19.646 15.845 15.882 19.844 10.197 19.844C8.90415 19.8444 7.6239 19.59 6.42939 19.0955C5.23489 18.6009 4.14954 17.8758 3.23536 16.9616C2.32118 16.0475 1.59609 14.9621 1.10152 13.7676C0.606957 12.5731 0.352603 11.2929 0.352997 10C0.352603 8.70716 0.606957 7.42691 1.10152 6.2324C1.59609 5.0379 2.32118 3.95255 3.23536 3.03837C4.14954 2.12419 5.23489 1.3991 6.42939 0.904533C7.6239 0.409966 8.90415 0.155612 10.197 0.156006C12.855 0.156006 15.076 1.13401 16.78 2.72201L14.005 5.49701V5.49001C12.972 4.50601 11.661 4.00101 10.197 4.00101C6.949 4.00101 4.309 6.74501 4.309 9.99401C4.309 13.242 6.949 15.992 10.197 15.992C13.144 15.992 15.15 14.307 15.562 11.993H10.197V8.15401H19.457H19.456Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="pt-5 text-center md:text-left">
                    <a
                      href="#_"
                      className="text-black underline font-semibold text-xl"
                    >
                      Forgot my password
                    </a>
                  </div>
                  <div className="pt-2 text-center md:text-left">
                    <p className="w-full text-sm text-black text-xl">
                      Doesn’t have account?{" "}
                      <a
                        href="/register"
                        className="text-center md:text-left text-black underline font-semibold text-xl"
                      >
                        Sign up
                      </a>
                    </p>
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

export default Login;