import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { scrollToTarget, scrollTop } from "./utils/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMenu = () => {
    scrollTop();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="absolute sm:hidden left-2 top-1" onClick={isMenu}>
        {isMenuOpen ? (
          <XMarkIcon className="h-10 w-10 text-violet-500" />
        ) : (
          <Bars3Icon className="h-10 w-10 text-violet-500" />
        )}
      </div>
      <nav
        className={`flex flex-col sm:flex-row justify-between items-center gap-3 py-3 px-5 sm:px-10 bg-primary absolute sm:sticky sm:top-0 sm:rounded-none ${
          isMenuOpen ? "top-10 rounded-md duration-500" : "-top-60"
        }`}
      >
        <Link to={"/"} onClick={isMenu} className="hidden sm:block">
          <h2 className="text-xl font-bold tracking-wide">JobHunter</h2>
        </Link>
        <ul className="flex flex-col sm:flex-row gap-5">
          <li onClick={isMenu}>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li onClick={isMenu}>
            <NavLink
              to={"/statistic"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Statistic
            </NavLink>
          </li>
          <li onClick={isMenu}>
            <NavLink
              to={"/applied"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li onClick={isMenu}>
            <NavLink
              to={"/blog"}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <Link to={"/"}>
          <button
            onClick={() => scrollToTarget("features")}
            className="px-3 py-2 font-semibold gradient"
          >
            Start Applying
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
