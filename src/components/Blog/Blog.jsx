import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog-questions.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center bg-primary pb-16 mb-10 pt-10">
        Find Your Question
      </h2>
      <div className="px-10 grid sm:grid-cols-2 gap-5 gap-y-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
