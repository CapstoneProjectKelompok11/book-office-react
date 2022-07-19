import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axiosInstance from "../../networks/api";

const Login = () => {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
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
    setEmail(email);
    if (
      email
    ) {
      setEmailValid(true);
      setDataForm((state) => ({ ...state, email }));
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (
      password
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
          email: dataForm.email,
          password: dataForm.password,
        })
        .then((response) => {
          setUserExist("exists");
          setAllValid("valid");
          setLoading(false);
          console.log("response", response);
          navigate("/Home");
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
    <section className="w-full bg-white max-h-screen">
      <div className="mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-6/12">
              <div className="relative flex flex-col items-center justify-center w-full">
                <img
                  className="h-screen w-full"
                  src="https://raw.githubusercontent.com/CapstoneProjectKelompok11/book-office-react/main/src/image/Image.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-6/12">
              <div className="w-96 m-auto pt-16">
                <img
                  src="https://raw.githubusercontent.com/CapstoneProjectKelompok11/book-office-react/main/src/image/logologin.png"
                  alt=""
                />
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
                      className="border-2 m-auto border-black h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
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
                  <div className="pt-5 text-center md:text-left">
                    <button
                      type="submit"
                      className="h-10 inline-block w-full px-3 py-1 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                    >
                      Login
                    </button>
                  </div>
                  <div className="mt-3 text-center md:text-left">
                    <p className="w-full font-semibold text-lg text-black">
                      Doesn't have account?{" "}
                      <NavLink
                        to={"/Register"}
                        className="text-center md:text-left text-black underline font-semibold text-lg"
                      >
                        Sign up
                      </NavLink>
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
