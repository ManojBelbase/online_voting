import React, { useContext } from "react";
import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Layout = () => {
  const { name } = useContext(AuthContext);
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
