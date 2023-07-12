"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      onClick={toggle}
      className="w-[50px] h-[25px] border-[1.5px] border-[#53c28b70] rounded-2xl flex items-center justify-between p-[2px] relative cursor-pointer"
    >
      <div className="text-[14px]"> 🌙</div>
      <div className="text-[14px]">🔆</div>
      <div
        className="w-5 h-5 bg-[#53c28b] rounded-[50%] absolute"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
