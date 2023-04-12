import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { MainContext } from "../../RootLayout";
import {
  CurrencyDollarIcon,
  IdentificationIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { addToLocalDb, getAppliedList } from "../utils/localStorageDB";
import { scrollTop } from "../utils/utils";

const JobDetails = () => {
  const appliedIdList = getAppliedList();
  const { jobCircular } = useContext(MainContext);
  const { id } = useParams();
  const job = jobCircular.find((job) => job.id === id);
  const existingApplied = appliedIdList.find((appliedId) => appliedId === id);

  const goBack = () => {
    window.history.back();
  };

  const {
    job_description,
    job_responsibility,
    education_requirements,
    experiences,
    salary,
    position,
    phone,
    email,
    location,
  } = job;
  return (
    <div>
      <div className="text-center bg-primary py-5 sm:pb-16 mb-10 sm:pt-10">
        <Link
          to={"/"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden"
        >
          <h2 className="text-xl font-bold tracking-wide">JobHunter</h2>
        </Link>
        <h2 className="text-xl sm:text-2xl font-semibold">
          {existingApplied ? "Applied Job Details" : "Job Details"}
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row px-5 sm:px-10 mt-14 gap-5 justify-center text-gray-700">
        <div className="space-y-3">
          <p>
            <span className="font-semibold underline">Job Description:</span>{" "}
            <br />
            <span> {job_description}</span>
          </p>
          <div>
            <span className="font-semibold underline">Job Responsibility:</span>
            <ul>
              {job_responsibility.map((res, index) => (
                <li key={index}> {res}.</li>
              ))}
            </ul>
          </div>
          <p>
            <span className="font-semibold">Educational Requirements:</span>{" "}
            <br />
            <span>{education_requirements}</span>
          </p>
          <p>
            <span className="font-semibold">Experiences:</span> <br />
            <span>{experiences}</span>
          </p>
        </div>
        <div>
          <div className="bg-primary p-3 rounded-md relative flex justify-center items-center">
            {existingApplied && (
              <img
                className="absolute opacity-40 h-full min-w-fit"
                src="https://i.ibb.co/b2TZ0DD/istockphoto-1049425770-612x612-removebg-preview.png"
                alt=""
              />
            )}
            <div>
              <h4 className="text-lg font-bold flex items-center justify-between">
                Job Details
              </h4>
              <hr />
              <p className="mt-2 flex gap-1">
                <span className="flex items-center gap-1 font-semibold">
                  <CurrencyDollarIcon className=" h-4 w-4 text-violet-400" />
                  Salary:
                </span>
                <span>{salary}</span>
              </p>
              <p className="flex gap-1">
                <span className="flex items-center gap-1 font-semibold">
                  <IdentificationIcon className=" h-4 w-4 text-violet-400" />
                  Job Title:{" "}
                </span>
                <span>{position}</span>
              </p>
              <h4 className="text-lg font-bold mt-5">Contact Information</h4>
              <hr />
              <p className="mt-2 flex gap-1">
                <span className="flex items-center gap-1 font-semibold">
                  <PhoneIcon className=" h-4 w-4 text-violet-400" />
                  Phone:{" "}
                </span>
                <span>{phone}</span>
              </p>
              <p className="flex gap-1">
                <span className="flex items-center gap-1 font-semibold">
                  <EnvelopeIcon className=" h-4 w-4 text-violet-400" />
                  Email:{" "}
                </span>
                <span>{email}</span>
              </p>
              <p className="flex gap-1">
                <span className="flex items-center gap-1 font-semibold">
                  <MapPinIcon className=" h-4 w-4 text-violet-400" />
                  Address:{" "}
                </span>
                <span>{location}</span>
              </p>
            </div>
          </div>
          {existingApplied ? (
            <Link onClick={goBack}>
              <button
                className="mt-5 px-3 py-2 bg-violet-500 text-white rounded-md w-full"
                onClick={scrollTop}
              >
                Back
              </button>
            </Link>
          ) : (
            <Link to={"/"} onClick={scrollTop}>
              <button
                onClick={() => addToLocalDb(id)}
                className="mt-5 px-3 py-2 gradient w-full"
              >
                Apply Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
