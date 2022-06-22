import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Codeconfirm from "./components/Codeconfirm";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
     <Route path="/Login/" element={<Login />} />
      <Route path="/Register/" element={<Register />} />

    </>
  );
}

export default App;
