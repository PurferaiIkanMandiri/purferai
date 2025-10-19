import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import ProductList from "../components/product-list";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Product List"} />
      <ProductList />
    </Wrapper>
  );
};

export default index;
