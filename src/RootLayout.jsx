import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";

export const MainContext = createContext();
const RootLayout = () => {
  const { categories, jobList } = useLoaderData();
  const [jobCircular, setJobCircular] = useState(jobList);
  const [category, setCategory] = useState(categories);
  return (
    <MainContext.Provider value={{ jobCircular, category }}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </MainContext.Provider>
  );
};

export default RootLayout;
