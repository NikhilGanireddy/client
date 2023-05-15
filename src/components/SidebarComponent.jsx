import React, { useState } from "react";
import { sideBarData } from "../data/sideBarData";
import { UilAngleDoubleRight } from "@iconscout/react-unicons";
import { Link, Navigate } from "react-router-dom";

const SidebarComponent = () => {
  const [hideMenuContent, sethideMenuContent] = useState(false);
  const menuContent = () => {
    sethideMenuContent(!hideMenuContent);
  };

  //   const returnTo = (path) => {
  //     return <Navigate to={"path"} />;
  //   };
  return (
    <div className="relative flex flex-col h-full gap-4 ">
      <div className="flex items-center justify-between gap-12 px-2 py-4 text-2xl font-semibold">
        <div className={`ml-2 ${hideMenuContent ? "hidden" : ""}`}>
          Rudramadevi
        </div>
        <div
          className={`p-2 text-white rounded-full cursor-pointer transition-all duration-500 bg-dark ${
            hideMenuContent ? "rotate-540" : ""
          }`}
          onClick={menuContent}
        >
          <UilAngleDoubleRight />
        </div>
      </div>
      <div className="relative flex flex-col h-full gap-3">
        {sideBarData.map((data) => {
          return (
            <Link
              to={data.path}
              className={`flex items-center gap-3 px-4 rounded-2xl py-3 ${
                data.class
              } hover-color-light cursor-pointer ${
                hideMenuContent ? "justify-center" : ""
              }`}
              key={data.id}
            >
              {data.icon}
              <h1
                className={`font-semibold ${hideMenuContent ? "hidden" : ""}`}
              >
                {data.text}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarComponent;
