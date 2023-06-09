import React, { useContext } from "react";
import { UilSun, UilSunset, UilMoon } from "@iconscout/react-unicons";
import { UserContext } from "../UserContext";

const FoodMini = () => {
  const { bgColor, setBgColor } = useContext(UserContext);

  const changeBgColor = () => {
    if (bgColor == true) {
      return "bg-gray-900/20 text-black";
    }
    if (bgColor == false) return "bg-white/10 text-white";
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-semibold">Food</div>
      <div className="grid grid-cols-2 gap-4 font-semibold">
        <div
          className={`flex flex-col items-center justify-center py-4 ${changeBgColor()} rounded-2xl hover:scale-[1.05] duration-200 transition-all ease-in-out`}
        >
          <UilSunset />
          <div className="flex flex-col items-center justify-center ">
            <div>Dosa</div>
            <div className="text-sm font-light">Breakfast</div>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center py-4  ${changeBgColor()} rounded-2xl hover:scale-[1.05] duration-200 transition-all ease-in-out`}
        >
          <UilSun />
          <div className="flex flex-col items-center justify-center ">
            <div>Egg tomato</div>
            <div className="text-sm font-light">Lunch</div>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center py-4  ${changeBgColor()} rounded-2xl hover:scale-[1.05] duration-200 transition-all ease-in-out`}
        >
          <UilSunset />
          <div className="flex flex-col items-center justify-center ">
            <div>Gulab Jamun</div>
            <div className="text-sm font-light">Snacks</div>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center py-4  ${changeBgColor()} rounded-2xl hover:scale-[1.05] duration-200 transition-all ease-in-out`}
        >
          <UilMoon />
          <div className="flex flex-col items-center justify-center ">
            <div>Aloo, Gobi 65</div>
            <div className="text-sm font-light">Dinner</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMini;
