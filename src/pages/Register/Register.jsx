import React from "react";
import { useState } from "react";
import axios from "axios";
import axiosInstance from "../../networks/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [dataForm, setDataForm] = useState({
    frontName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [frontName, setFrontName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");
  const [userExist, setUserExist] = useState("");
  const [allValid, setAllValid] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [isMessage, setMessage] = useState({
    message: "",
  });

  const handleFirstName = (e) => {
    const frontName = e.target.value;
    const minLength = 3;
    if (frontName.length < minLength) {
      setFrontName("First Name must be at least 3 characters");
    } else {
      setFrontName("");
      setDataForm((state) => ({ ...state, frontName }));
    }
  };
  const handleLastName = (e) => {
    const lastName = e.target.value;
    const minLength = 3;
    if (lastName.length < minLength) {
      setLastName("Last Name must be at least 3 characters");
    } else {
      setLastName("");
      setDataForm((state) => ({ ...state, lastName }));
    }
  };

  const handlePhoneNumber = (e) => {
    const phoneNumber = e.target.value;
    // console.log(e)
    const minLength = 10;
    if (phoneNumber.length < minLength) {
      setPhoneNumber("Phone Number must be at least 10 characters");
    } else {
      setPhoneNumber("");
      setDataForm((state) => ({ ...state, phoneNumber }));
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
      containsNumber &&
      containsLetter
    ) {
      setPasswordConfirm("");
      setDataForm((state) => ({ ...state, password }));
    } else {
      setPasswordConfirm(
        "Password must be at least 8 characters and contain at least one number and one letter"
      );
    }
  };

  const handlePasswordConfirm = (e) => {
    const passwordConfirm = e.target.value;
    setPasswordConfirm(passwordConfirm);
    if (passwordConfirm === password) {
      setPasswordConfirm("");
      setDataForm((state) => ({ ...state, passwordConfirm }));
    } else {
      setPasswordConfirm("Password must be the same");
    }
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    const valueNoSpace = email.includes(" ") ? false : true;
    const oneAt = email.match(/@/g)?.length === 1 ? true : false;

    setEmail(email);
    if (valueNoSpace && oneAt) {
      setMessage({ message: "" });
      setDataForm((state) => ({ ...state, email }));
    } else {
      setMessage({ message: "Email must contain one @" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataForm);

    if (
      dataForm.frontName &&
      dataForm.lastName &&
      dataForm.phoneNumber &&
      dataForm.email &&
      dataForm.password &&
      dataForm.passwordConfirm
    ) {
      setLoading(true);
      axiosInstance
        .post("/register", {
          first_name: dataForm.frontName,
          last_name: dataForm.lastName,
          phone: dataForm.phoneNumber,
          email: dataForm.email,
          password: dataForm.password,
        })
        .then((response) => {
          setUserExist("does't exist");
          setAllValid("valid");
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          setUserExist("exists");
          setAllValid("valid");
          setLoading(false);
        });
      alert("Akun berhasil dibuat");
    } else {
      setAllValid("invalid");
      setUserExist("");
    }
  };

  return (
    <section className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-0">
          <div className="w-full">
            <img
              className="w-full"
              src="https://raw.githubusercontent.com/CapstoneProjectKelompok11/book-office-react/main/src/image/bglogin.png"
              alt=""
            />
          </div>
          <div className="w-full">
            <div className="text-center pb-10 md:pb-1 pt-44 text-xl italic font-semibold">
              <p>Sign up your account</p>
            </div>
            <div className="items-start justify-start w-full px-24 xl:pt-5">
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="">
                    <label className="font-semibold text-xl text-gray-900">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="border-2 border-black w-full h-10 pt-2.5 block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                      value={dataForm.firstName}
                      onChange={(e) => {
                        handleFirstName(e);
                      }}
                    />
                  </div>
                  <div className="">
                    <label className="font-semibold text-xl text-gray-900">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="border-2 border-black w-full h-10 pt-2.5 block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
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
                  <p>{PasswordConfirm}</p>
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
                  <button
                    type="submit"
                    className="h-10 inline-block w-full px-3 py-1 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                  >
                    Register Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
