import React from "react";

const Register = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full bg-cover lg:w-6/12 xl:w-6/12 bg-gradient-to-r from-white via-white to-gray-100 h-full">
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              <img className="" src="/image/bglogin.png" alt="" />
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
                    />
                  </div>
                  <div className="pt-2 md:pl-3">
                    <label className="font-semibold text-xl text-gray-900">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="border-2 border-black w-full md:w-56 h-10 pt-2.5 block px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                    />
                  </div>
                </div>
                <div className="relative pt-5">
                  <label className="font-semibold text-gray-900 text-xl">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="border-2 border-black h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                  />
                </div>
                <div className="relative pt-5">
                  <label className="font-semibold text-xl text-gray-900">
                    Email
                  </label>
                  <input
                    type="text"
                    className="border-2 border-black h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                  />
                </div>
                <div className="relative pt-5">
                  <label className="font-semibold text-gray-900 text-xl">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-2 border-black h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                  />
                  <div class="absolute mt-14 mr-2 inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
                  </div>
                </div>
                <div className="relative pt-5">
                  <label className="font-semibold text-gray-900 text-xl">
                    Confirmation Password
                  </label>
                  <input
                    type="password"
                    className="border-2 border-black h-10 pt-2.5 block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-white rounded-lg"
                  />
                  <div class="absolute mt-14 mr-2 inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
                  </div>
                </div>
                <div className="relative py-10">
                  <a
                    href="#_"
                    className="h-10 inline-block w-full px-3 py-1 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                  >
                    Register Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
