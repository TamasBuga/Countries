import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="w-full px-8 text-gray-700 bg-white shadow-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between py-5 mx-2">
        <div className="flex flex-col md:flex-row items-center">
          <NavLink to={"/"} className={"flex items-center mb-5 md:mb-0"}>
            <span className="flex text-xl font-black text-gray-900 select-none">
              REST <span className="text-indigo-600">Explorer</span>
            </span>
          </NavLink>
          <nav className="flex w-full justify-around items-center ml-8">
            <NavLink to={"/"} end className={"w-20 font-medium text-gray-600 hover:underline hover:font-bold"}>Home</NavLink>
            <NavLink to={"/about"} end className={"w-20 font-medium text-gray-600 hover:underline hover:font-bold"}>About</NavLink>
            <NavLink to={"/countries"} end className={"w-20 font-medium text-gray-600 hover:underline hover:font-bold"}>Countries</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
