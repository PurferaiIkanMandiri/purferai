import HeaderThree from "@/src/layout/headers/header-3";
import React from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import PortfolioArea from "./portfolio-area";
import FooterThree from "@/src/layout/footers/footer-3";
import { useTranslation } from "@/src/hooks/useTranslation";

const OurPhoto = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb
          top_title={t("our_photos_breadcrumb")}
          title={t("our_photos_title")}
        />
        <PortfolioArea />
      </main>
      <FooterThree />
    </>
  );
};

export default OurPhoto;
