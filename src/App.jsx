import React from 'react';
import { useState, useEffect } from "react";
import "./App.css";
import Menu from "./components/Menu";




function App() {    



  return (
<<<<<<< Updated upstream
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
=======
    <div className="App">
      <Menu />

>>>>>>> Stashed changes
    </div>
  );
}

export default App;
