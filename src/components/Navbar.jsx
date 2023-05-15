import React, { useContext } from "react";
import {
  UilBell,
  UilCommentAltUpload,
  UilMoon,
  UilSun
} from "@iconscout/react-unicons";
import { UserContext } from "../UserContext";

const Navbar = () => {
  const { user, bgColor, setBgColor } = useContext(UserContext);

  const changeBgColorBtn = () => {
    setBgColor(!bgColor);
    console.log(bgColor);
  };

  const changeBgColor = () => {
    if (bgColor == true) {
      return "bg-gray-900/20 text-black";
    }
    if (bgColor == false) return "bg-white/10 text-white";
  };


  return (
    <div
      className={`flex items-center justify-between w-full p-4 duration-200 shadow-lg backdrop-blur-md rounded-2xl ${changeBgColor()}`}
    >
      <div className="text-xl font-semibold">
        Hello, {!!user && <span className="capitalize ">{user.name}</span>}
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          className="py-1 cursor-pointer hover-text-light"
          onClick={changeBgColorBtn}
        >
          {bgColor ? <UilMoon /> : <UilSun />}
        </button>
        <div className="py-1 cursor-pointer hover-text-light">
          <UilBell />
        </div>
        <div className="py-1 cursor-pointer hover-text-light">
          <UilCommentAltUpload />
        </div>
        <div>
          <div
            className={`w-7 h-7 rounded-full overflow-hidden ${
              user ? "" : "bg-light"
            }`}
          >
            <img
              src={`  ${user ? user.pic : ""}`}
              className="object-cover w-full h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
