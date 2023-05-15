import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserContext } from "./UserContext";

const UserLayout = () => {
  const { bgColor } = useContext(UserContext);

  const changeBgPic = () => {
    if (bgColor == true) {
      return "bg-light";
    }
    if (bgColor == false) return "bg-dark";
  };
  return (
    <div
      className={`flex items-center justify-center w-screen h-screen ${changeBgPic()} `}
    >
      <div className="w-[95%] h-[90%] rounded-2xl flex gap-4">
        <Sidebar />
        <div className="flex flex-col w-full gap-4">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
