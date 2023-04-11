import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-gray-100 rounded-md overflow-hidden shadow shadow-violet-300">
      <h2 className="text-lg sm:text-xl px-5 pt-2 font-semibold tracking-wide bg-gray-400 text-white bg-gradient">
        {blog.question}
      </h2>
      <p className="px-5 pt-1 pb-5 text-gray-600">{blog.answer}</p>
    </div>
  );
};

export default BlogCard;
