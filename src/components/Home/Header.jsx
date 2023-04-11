import React from "react";

const Header = () => {
  return (
    <div className="px-5 pt-5 sm:px-10 flex flex-col-reverse sm:flex-row items-center bg-primary gap-3">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">
          One Step Closer To Your <br />{" "}
          <span className="text-indigo-500">Dream Job</span>
        </h1>
        <p className="text-sm mt-2 text-gray-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="px-3 mb-5 py-2 gradient mt-5">Get Started</button>
      </div>
      <div className="w-3/4 sm:w-fit bg-violet-100 rounded-t-full shadow shadow-indigo-300">
        <img src="https://i.ibb.co/7bbR6Lk/Hero-Image.webp" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Header;
