import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const [circularList, setCircularList] = useState([]);
  const { jobList } = useLoaderData();
  console.log(circularList);

  // Initially showing 4 job circular
  useEffect(() => {
    setCircularList(jobList.slice(0, 4));
  }, []);

  // Showing all job circular when see all button clicked
  const seeFullJobs = () => {
    setCircularList(jobList);
  };

  return (
    <div className="text-center mt-12 px-10">
      <h2 className="text-2xl font-semibold">Featured Jobs</h2>
      <p className="text-sm mt-2 text-gray-600">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {circularList.map((job) => (
          <FeaturedCard key={job.id} job={job}></FeaturedCard>
        ))}
      </div>
      {circularList.length > 4 || (
        <button onClick={seeFullJobs} className="mt-10 px-3 py-1 gradient">
          See All Jobs
        </button>
      )}
    </div>
  );
};

export default Featured;
