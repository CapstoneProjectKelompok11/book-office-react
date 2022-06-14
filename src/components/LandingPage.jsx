import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Findus from "./Findus";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Scbdhotel from "./Scbdhotel";
import TopPlaces from "./TopPlaces";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <TopPlaces />
      <AboutUs />
      <Scbdhotel />
      <Findus />
      <Footer />
    </div>
  );
};

export default LandingPage;
