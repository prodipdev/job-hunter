import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog-questions.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <div className="text-center bg-primary py-5 sm:pb-16 mb-10 sm:pt-10">
        <Link to={"/"} className="sm:hidden">
          <h2 className="text-xl font-bold tracking-wide">JobHunter</h2>
        </Link>
        <h2 className="text-xl sm:text-2xl font-semibold">
          Find Your Question
        </h2>
      </div>
      <div className="px-5 sm:px-10 grid sm:grid-cols-2 gap-5 gap-y-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
