import HeaderThree from "@/src/layout/headers/header-3";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ProductArea from "./product-area";
import Footer from "@/src/layout/footers/footer-3";

const Product = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb top_title="Product Default" title="Product" />
        <ProductArea />
      </main>
      <Footer />
    </>
  );
};

export default Product;
