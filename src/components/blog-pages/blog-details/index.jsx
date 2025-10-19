import HeaderThree from "@/src/layout/headers/header-3";
import BreadcrumbFive from "../../common/breadcrumb/breadcrumb-5";
import BlogDetailsArea from "./blog-details-area";
import Footer from "@/src/layout/footers/footer-3";

const BlogDetails = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <BreadcrumbFive top_title="Blog Details" title="Blog Details" />
        <BlogDetailsArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
