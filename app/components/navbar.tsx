import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <header className="w-full px-8 text-gray-700 bg-white shadow-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between py-5 mx-2">
        <div className="flex flex-col md:flex-row items-center">
          <NavLink to={"/"} className={"flex items-center mb-5 md:mb-0"}>
            <span className="text-xl font-black text-gray-900 select-none">
              REST <span className="text-indigo-600">Explorer</span>
            </span>
          </NavLink>
          <nav>
            <NavLink to={"/"} end className={"mr-5 font-medium text-gray-600 hover:text-gray-200"}>Home</NavLink>
            <NavLink to={"/about"} end className={"mr-5 font-medium text-gray-600 hover:text-gray-200"}>About</NavLink>
            <NavLink to={"/countries"} end className={"mr-5 font-medium text-gray-600 hover:text-gray-200"}>Countries</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
