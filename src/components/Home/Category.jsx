import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const { categories } = useLoaderData();
  return (
    <div className="text-center mt-12 px-10">
      <h2 className="text-2xl font-semibold">Job Category List</h2>
      <p className="text-sm mt-2 text-gray-600">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="flex justify-between gap-5 mt-5">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
