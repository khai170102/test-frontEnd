import React, { useState } from "react";
import Search from "./images/icon/Search";
import Home from "./images/icon/Home";
import TimeLine from "./images/icon/TimeLine";
import AllGame from "./images/icon/AllGame";

const menuItems = [
  { id: 1, icon: <Home />, label: "Home" },
  { id: 2, icon: <TimeLine />, label: "Timeline" },
  { id: 3, icon: <AllGame />, label: "All Games" },
  { id: 4, icon: <Search />, label: "Search" },
];

export const SidebarGame = () => {
  const [activeItem, setActiveItem] = useState(1);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="w-full h-full">
      {/* Search Box */}
      <div className="sm:flex items-center rounded-md w-full hidden ">
        <button className="bg-transparent border-none cursor-pointer p-1">
          <Search className={`${isInputFocused ? "" : "opacity-20"}`} />
        </button>
        <input
          type="text"
          placeholder="Search"
          className={`flex-grow border-none outline-none text-black placeholder-gray-400`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      {/* Divider */}
      <hr className="my-4 hidden sm:block" />

      {/* Menu Items */}
      <div className="flex overflow-x-auto space-x-4 sm:hidden h-[70px] border-b border-b-gray-300 justify-center items-center mb-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center cursor-pointer h-full transition-transform duration-300  ${
              activeItem === item.id
                ? "text-black border-b-2 border-black"
                : "text-black opacity-50"
            }`}
            onClick={() => setActiveItem(item.id)}
          >
            {React.cloneElement(item.icon, {
              className:
                activeItem === item.id ? "text-black" : "text-black opacity-50",
            })}
            <span
              className={`mt-1 font-semibold text-sm ${
                activeItem === item.id ? "text-black " : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
      {/* Menu Items for larger screens */}
      <ul className="hidden md:space-y-2 md:flex md:flex-col">
        {menuItems.map((item) =>
          item.id === 4 ? null : (
            <li
              key={item.id}
              className={`flex items-center cursor-pointer ${
                activeItem === item.id ? "text-black" : "text-black opacity-50"
              }`}
              onClick={() => setActiveItem(item.id)}
            >
              {React.cloneElement(item.icon, {
                className:
                  activeItem === item.id
                    ? "text-black"
                    : "text-black opacity-50",
              })}
              <span
                className={`ml-2 font-semibold text-base ${
                  activeItem === item.id ? "text-black " : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
