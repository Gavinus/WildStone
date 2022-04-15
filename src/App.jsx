import React from "react";
// import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import BarLogin from "./components/BarLogin";
import Landing from "./components/Landing";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="h-screen bg-[#B2915F] App">
      <nav>
        <Landing />
        <Menu />
        <ul>{/* Add your links here */}</ul>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
