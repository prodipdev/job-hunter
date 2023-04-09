const jobListAndCategory = async () => {
  const jobsPromise = fetch("jobs_circular.json").then((res) => res.json());
  const categoriesPromise = fetch("job_category.json").then((res) =>
    res.json()
  );

  try {
    const [jobList, categories] = await Promise.all([
      jobsPromise,
      categoriesPromise,
    ]);
    return { jobList, categories };
  } catch (error) {
    console.log(error);
  }
};

export { jobListAndCategory };
