import React from "react";

const Logindua = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full bg-cover lg:w-6/12 xl:w-6/12 bg-gradient-to-r from-white via-white to-gray-100  ">
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              <img className="" src="/image/bglogin.png" alt="" />
            </div>
          </div>
          <div className="w-full bg-white lg:w-6/12 xl:w-6/12">
            <div className="m-48 w-48 m-auto pt-16">
              <img src="/image/logologin.png" alt="" />
            </div>
            <div className="text-center pt-10 text-2xl italic font-semibold">
              <p>Welcome to SewaKantor.com</p>
              <p>Kebutuhan ruangan kerja adalah andalan kami</p>
            </div>
            <div className="text-center pt-10 text-xl font-semibold">
              <p>Login</p>
            </div>
            <div className="flex flex-col items-start justify-start w-full h-full lg:p-40 xl:pt-5">
              <div className="relative w-full">
                <div className="relative">
                  <label className="font-semibold text-xl text-gray-900">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border-2 border-black w-96 h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="relative pt-5">
                  <label className="font-semibold text-gray-900 text-xl">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-2 border-black w-96 h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                    placeholder="Password"
                  />
                </div>
                <div className="relative pt-16">
                  <a
                    href="#_"
                    className="w-96 h-10 inline-block w-full px-3 py-1 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                  >
                    Login
                  </a>
                </div>
                <div className="relative pt-10">
                  <a
                    href="#_"
                    className="w-96 h-10 inline-block w-full px-3 py-1 text-xl font-bold text-center text-gray-900 transition duration-200 bg-white border border-black rounded-lg hover:bg-gray-100 ease"
                  >
                    Login With Google
                  </a>
                </div>
                <div className="pt-5">
                  <a
                    href="#_"
                    className="text-black underline font-semibold text-xl"
                  >
                    Forgot my password
                  </a>
                </div>
                <div className="pt-5">
                  <p className="w-full text-sm text-black text-xl">
                    Doesn’t have account?{" "}
                    <a
                      href="#_"
                      className="text-black underline font-semibold text-xl"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logindua;
