import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import Listing from "./pages/ListingPage";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
        <Route path="/listing" element={<Listing />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
