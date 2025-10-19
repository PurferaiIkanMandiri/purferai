import HeaderThree from "@/src/layout/headers/header-3";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer-3";
import BlogArea from "../blog/blog-area";

const BlogLeftSidebar = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb top_title="Blog Left Sidebar" title="Blog Left Sidebar" />
        <BlogArea style_blog={true} />
      </main>
      <Footer />
    </>
  );
};

export default BlogLeftSidebar;
