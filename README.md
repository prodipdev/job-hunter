# This site job circular related

## Features

- [See Demo Live Site](https://job-hunter-in.web.app/)
- Discover the best tech job opportunities from different categories.
- Filter the jobs by type to narrow down your options and find your ideal fit.
- Apply for any tech job in one click and monitor your application status.
- Check your applied jobs and the result chart to track your progress.

## That part was a bit challenging for me:

I had to fetch data from two different sources at the same time. I used the Promise.all method to wait until both the jobs and categories data were ready before returning them.

Is this better? Do you have any feedback or suggestions? 😊

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
