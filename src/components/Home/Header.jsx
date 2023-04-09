import React from "react";

const Header = () => {
  return (
    <div className="p-10 flex items-center bg-primary">
      <div>
        <h1 className="text-3xl font-bold">
          One Step Closer To Your <br />{" "}
          <span className="text-indigo-500">Dream Job</span>
        </h1>
        <p className="text-sm mt-2 text-gray-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn-gradient mt-5">Get Started</button>
      </div>
      <div>
        <img src="/src/assets/hero.png" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Header;
