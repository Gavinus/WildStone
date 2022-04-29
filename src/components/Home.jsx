import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const Home = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

export default Home;
