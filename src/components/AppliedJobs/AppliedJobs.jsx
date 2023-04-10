import React, { Fragment, useContext, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { getAppliedList } from "../utils/localStorageDB";
import { MainContext } from "../../RootLayout";
import AppliedCard from "./AppliedCard";

const AppliedJobs = () => {
  const [circularList, setCircularList] = useState([]);
  const [storedId, setStoredId] = useState([]);
  const [appliedJob, setAppliedJob] = useState([]);
  const [renderJobItems, setRenderJobItems] = useState([]);

  // get stored data
  const getStoredId = getAppliedList();
  const { jobCircular } = useContext(MainContext);

  // set stored data
  useEffect(() => {
    setCircularList(jobCircular);
    setStoredId(getStoredId);
  }, []);

  // filter applied jobs and create new array
  useEffect(() => {
    let appliedJobs = [];
    for (const id of storedId) {
      circularList.find((circular) => {
        const existCircular = circular.id === id;
        if (existCircular) {
          appliedJobs.push(circular);
        }
      });
    }
    setAppliedJob(appliedJobs);
    setRenderJobItems(appliedJobs);
  }, [circularList, storedId]);

  // Filter by Remote and Onsite category
  const filterByRemoteJob = () => {
    console.log("remote");
    const filterJobs = appliedJob.filter(
      (job) => job.job_nature.remote === true
    );
    setRenderJobItems([...filterJobs]);
  };
  const filterByOnsiteJob = () => {
    console.log("onsite");
    const filterJobs = appliedJob.filter(
      (job) => job.job_nature.remote === false
    );
    setRenderJobItems([...filterJobs]);
  };
  const filterByNone = () => {
    setRenderJobItems(appliedJob);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center bg-primary pb-16 pt-10">
        Applied Jobs
      </h2>
      <div className="grid gap-5 p-10">
        <div className="text-right">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Filter By
                <ChevronDownIcon
                  className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={filterByRemoteJob}
                        className={`${
                          active ? "bg-violet-400 text-white" : "text-gray-900"
                        } group w-full flex items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Remote Job
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={filterByOnsiteJob}
                        className={`${
                          active ? "bg-violet-400 text-white" : "text-gray-900"
                        } group w-full flex items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Onsite Job
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={filterByNone}
                        className={`${
                          active ? "bg-violet-400 text-white" : "text-gray-900"
                        } group w-full flex items-center rounded-md px-2 py-2 text-sm`}
                      >
                        None
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {renderJobItems &&
          renderJobItems.map((circular) => (
            <AppliedCard key={circular.id} circular={circular}></AppliedCard>
          ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
