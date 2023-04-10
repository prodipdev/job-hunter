# This site job circular related

## Features

- [See Demo Live Site](https://jobs-hunter.netlify.app/)
- Find top rated tech job circular
- Sorting circular by job types
- You will instant any type of job
- Find your applied jobs
- You will also find result chart

## That part was a bit challenging for me:

Fetching multiple data simultaneously had to be thought of in a different way.

```javascript
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
```
