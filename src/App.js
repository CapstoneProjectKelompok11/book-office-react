import React from "react";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TopPlaces from "./components/TopPlaces";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <TopPlaces />
      <AboutUs />
    </div>
  );
}

export default App;
