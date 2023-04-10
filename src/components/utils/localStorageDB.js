const addToLocalDb = (id) => {
  let appliedList = getAppliedList();
  const existId = appliedList.find((appliedId) => appliedId === id);
  if (!existId) {
    appliedList.push(id);
    localStorage.setItem("applied-jobs", JSON.stringify(appliedList));
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
