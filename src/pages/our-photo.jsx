import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import OurPhoto from "../components/portfolios/our-photo";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Our Photo"} />
      <OurPhoto />
    </Wrapper>
  );
};

export default index;
