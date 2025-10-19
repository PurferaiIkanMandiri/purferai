import HeaderThree from "@/src/layout/headers/header-3";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import ProductArea from "../product/product-area";

const ProductList = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb top_title="Product List" title="Product List" />
        <ProductArea shop_list={true} />
      </main>
      <Footer />
    </>
  );
};

export default ProductList;
