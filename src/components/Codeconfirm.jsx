import React from "react";

const Codeconfirm = () => {
  return (
    <div>
      <section className="w-full bg-white">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-6/12 bg-gradient-to-r from-white via-white to-gray-100 h-full">
              <div className="relative flex flex-col items-center justify-center w-full h-full">
                <img className="" src="/image/bglogin.png" alt="" />
              </div>
            </div>
            <div className="w-full bg-white lg:w-6/12 xl:w-6/12">
              <div className="text-center pb-10 md:pb-1 pt-80 text-xl italic font-semibold pl-6">
                <p>Your Account successfully created</p>
              </div>
              <div className="py-12 items-center p-80">
                <svg
                  width="84"
                  height="88"
                  viewBox="0 0 84 88"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42 2.33337L52.9438 10.3167L66.4917 10.2917L70.6521 23.1834L81.6271 31.125L77.4167 44L81.6271 56.875L70.6521 64.8167L66.4917 77.7084L52.9438 77.6834L42 85.6667L31.0563 77.6834L17.5083 77.7084L13.3479 64.8167L2.37292 56.875L6.58334 44L2.37292 31.125L13.3479 23.1834L17.5083 10.2917L31.0563 10.3167L42 2.33337Z"
                    fill="#4D89FF"
                    stroke="black"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start justify-start w-full px-40 xl:pt-5">
                <div className="relative w-full">
                  <a
                    href="#_"
                    className="h-10 inline-block w-96 px-3 py-1 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease"
                  >
                    Back to Login Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Codeconfirm;
