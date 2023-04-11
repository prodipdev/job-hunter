import React, { useContext } from "react";
import CategoryCard from "./CategoryCard";
import { MainContext } from "../../RootLayout";

const Category = () => {
  const { category } = useContext(MainContext);
  return (
    <div className="text-center mt-12 px-5 sm:px-10">
      <h2 className="text-xl sm:text-2xl font-semibold">Job Category List</h2>
      <p className="text-sm mt-2 text-gray-600">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid sm:grid-cols-4 gap-5 mt-5">
        {category.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
