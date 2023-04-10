import React, { useContext, useEffect, useState } from "react";
import { getAppliedList } from "../utils/localStorageDB";
import { MainContext } from "../../RootLayout";
import AppliedCard from "./AppliedCard";

const AppliedJobs = () => {
  let appliedJobs = [];
  const [circularList, setCircularList] = useState([]);
  const [storedId, setStoredId] = useState([]);

  const getStoredId = getAppliedList();
  const { jobCircular } = useContext(MainContext);
  useEffect(() => {
    setCircularList(jobCircular);
    setStoredId(getStoredId);
  }, []);
  for (const id of storedId) {
    circularList.find((circular) => {
      const existCircular = circular.id === id;
      if (existCircular) {
        appliedJobs.push(circular);
      }
    });
  }

  console.log(appliedJobs);
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center bg-primary pb-16 pt-10">
        Applied Jobs
      </h2>
      <div className="grid gap-5 p-10">
        {appliedJobs &&
          appliedJobs.map((circular) => (
            <AppliedCard key={circular.id} circular={circular}></AppliedCard>
          ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
