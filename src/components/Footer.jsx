import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="text-gray-600 body-font"
        style={{ backgroundColor: "#565656" }}
      >
        <div className="container pt-10 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full m-auto">
              <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">
                Help
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white cursor-pointer">Terms & Condition</a>
                </li>
                <li>
                  <a className="text-white cursor-pointer">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-white cursor-pointer">Cancellation</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full  m-auto">
              <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">
                Contact Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white">Address</a>
                </li>
                <li>
                  <a className="text-white">Jl. Mangga 3, Jakarta selatan.</a>
                </li>
                <li>
                  <a className="text-white">Call us</a>
                </li>
                <li>
                  <a className="text-white">08192319204928</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full  m-auto ">
              <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">
                Subscribe our newsletter
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <p className="text-white text-lg mt-2 md:text-left text-center">
                Follow our social media
              </p>
              <div>
                <div className="container py-6 mx-auto flex items-center sm:flex-row flex-col">
                  <span className="inline-flex">
                    <a className="text-white">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-white">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-white">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                    <a className="ml-3 text-white">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={0}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
