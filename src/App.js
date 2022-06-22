import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import Listing from "./pages/ListingPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/listing" element={<Listing />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
