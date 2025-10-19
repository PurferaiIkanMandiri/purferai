import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Product from "../components/product";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Product Page"} />
      <Product />
    </Wrapper>
  );
};

export default index;
