import React from "react";

const CategoryCard = ({ category }) => {
  const { category_name, image, available_jobs } = category;
  return (
    <div className="bg-primary p-3 rounded-md text-left shadow">
      <img
        className="h-12 bg-white shadow-md shadow-violet-200 0 p-2 rounded"
        src={image}
        alt="logo"
      />
      <h4 className="text-lg font-semibold mt-1">{category_name}</h4>
      <p className="text-sm text-gray-600">
        {available_jobs - 7}+ Jobs Available
      </p>
    </div>
  );
};

export default CategoryCard;
