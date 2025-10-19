import Footer from "@/src/layout/footers/footer-3";
import HeaderThree from "@/src/layout/headers/header-3";
import ProductDetailsItem from "./product-details-item";
import Breadcrumb from "../common/breadcrumb/breadcrumb";

const ProductDetailsArea = ({ product }) => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb top_title="Product Details" title="Product Details" />
        <ProductDetailsItem sp_item={product} />
      </main>
      <Footer />
    </>
  );
};

export default ProductDetailsArea;
