import React, { useContext, useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import { MainContext } from "../../RootLayout";

const Featured = () => {
  const [circularList, setCircularList] = useState([]);
  const { jobCircular } = useContext(MainContext);

  // Initially showing 4 job circular
  useEffect(() => {
    setCircularList(jobCircular.slice(0, 4));
  }, []);

  // Showing all job circular when see all button clicked
  const seeFullJobs = () => {
    setCircularList(jobCircular);
  };

  return (
    <div id="features" className="text-center mt-12 px-5 sm:px-10">
      <h2 className="text-xl sm:text-2xl font-semibold">Featured Jobs</h2>
      <p className="text-sm mt-2 text-gray-600">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid sm:grid-cols-2 gap-5 mt-5">
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
