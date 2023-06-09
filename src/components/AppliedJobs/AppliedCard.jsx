import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { scrollTop } from "../utils/utils";

const AppliedCard = ({ circular }) => {
  const { id, image, position, company, job_nature, location, salary } =
    circular;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border rounded-md p-3 text-left">
      <div className="bg-gray-100 h-36 w-3/4 sm:w-36 flex items-center justify-center rounded-md shadow shadow-violet-400">
        <img className="h-7" src={image} alt="logo" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mt-4 sm:mt-0">{position}</h3>
        <p className="text-sm text-gray-600 font-semibold">{company}</p>
        <div className="mt-3 space-x-3">
          <span className="px-3 border text-violet-500 border-violet-500 rounded">
            {job_nature.remote === true ? "Remote" : "Onsite"}
          </span>
          <span className="px-3 border text-violet-500 border-violet-500 rounded">
            {job_nature.full_time === true ? "Full Time" : "Part Time"}
          </span>
        </div>
        <div className="flex gap-4 mt-2 text-sm text-gray-600">
          <span className="flex items-center">
            <MapPinIcon className=" h-4 w-4 text-gray-400" />
            {location}
          </span>
          <span className="flex items-center">
            <CurrencyDollarIcon className=" h-4 w-4 text-gray-400" />
            {salary}
          </span>
        </div>
      </div>
      <Link to={`/details/${id}`}>
        <button className="mt-5 px-2 py-1 gradient" onClick={scrollTop}>
          View Details
        </button>
      </Link>
    </div>
  );
};

export default AppliedCard;
