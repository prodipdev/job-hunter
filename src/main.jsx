import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootLayout from "./RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import { jobListAndCategory } from "./components/Loaders/Loader";
import JobDetails from "./components/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    loader: jobListAndCategory,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistic",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
