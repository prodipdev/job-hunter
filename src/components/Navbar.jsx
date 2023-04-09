import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center shadow py-3 px-10">
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
      <button className="btn-gradient">Start Applying</button>
    </nav>
  );
};

export default Navbar;
