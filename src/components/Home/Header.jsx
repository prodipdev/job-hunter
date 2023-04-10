import React from "react";

const Header = () => {
  return (
    <div className="px-5 py-3 sm:px-10 flex flex-col-reverse sm:flex-row items-center bg-primary">
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
        <button className="px-3 py-2 gradient mt-5">Get Started</button>
      </div>
      <div>
        <img src="https://i.ibb.co/7bbR6Lk/Hero-Image.webp" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Header;
