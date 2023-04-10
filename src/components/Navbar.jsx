import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center shadow-md py-3 px-5 sm:px-10 bg-primary">
      <Link to={"/"}>
        <h2 className="text-xl font-bold tracking-wide">JobHunter</h2>
      </Link>
      <ul className="flex gap-4">
        <li>
          <NavLink
            to={"/statistic"}
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Statistic
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/applied"}
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Applied Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/blog"}
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <Link to={"/"}>
        <button className="px-3 py-2 font-semibold gradient">
          Start Applying
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
