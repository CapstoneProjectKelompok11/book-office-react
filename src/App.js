import React from "react";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Findus from "./components/Findus";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Scbdhotel from "./components/Scbdhotel";
import TopPlaces from "./components/TopPlaces";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <TopPlaces />
      <AboutUs />
      <Scbdhotel />
      <Findus />
      <Footer />
    </div>
  );
}

export default App;
