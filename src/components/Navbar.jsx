import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div
        className="absolute sm:hidden left-2 top-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-10 w-10 text-violet-500" />
        ) : (
          <Bars3Icon className="h-10 w-10 text-violet-500" />
        )}
      </div>
      <nav
        className={`flex flex-col sm:flex-row justify-between items-center gap-3 py-3 px-5 sm:px-10 bg-primary absolute sm:static sm:top-0 ${
          isMenuOpen ? "top-10 rounded-md duration-500" : "-top-60"
        }`}
      >
        <Link to={"/"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <h2 className="text-xl font-bold tracking-wide">JobHunter</h2>
        </Link>
        <ul className="flex flex-col sm:flex-row gap-4">
          <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <NavLink
              to={"/statistic"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Statistic
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <NavLink
              to={"/applied"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <NavLink
              to={"/blog"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <Link to={"/"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="px-3 py-2 font-semibold gradient">
            Start Applying
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
