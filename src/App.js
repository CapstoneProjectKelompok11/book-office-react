import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
