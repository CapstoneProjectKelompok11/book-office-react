import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
