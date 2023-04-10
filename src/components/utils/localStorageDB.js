import toast from "react-hot-toast";
const successfullyAdded = () => toast.success("Successfully Applied!");
const alreadyAdded = () => toast.error("Already Applied!");

const addToLocalDb = (id) => {
  let appliedList = getAppliedList();
  const existId = appliedList.find((appliedId) => appliedId === id);
  if (!existId) {
    appliedList.push(id);
    localStorage.setItem("applied-jobs", JSON.stringify(appliedList));
    successfully();
  } else {
    alreadyAdded();
  }
};

const getAppliedList = () => {
  let appliedList = localStorage.getItem("applied-jobs") || [];

  if (appliedList.length > 0) {
    appliedList = JSON.parse(appliedList);
  }
  return appliedList;
};

export { addToLocalDb, getAppliedList };
