import HeaderThree from "@/src/layout/headers/header-3";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioArea from "./portfolio-area";
import FooterThree from "@/src/layout/footers/footer-3";

const OurPhoto = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb top_title="Our Photos" title="Our Photos" />
        <PortfolioArea />
      </main>
      <FooterThree />
    </>
  );
};

export default OurPhoto;
