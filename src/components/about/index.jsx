import HeaderThree from "@/src/layout/headers/header-3";
import React from "react";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ServiceArea from "../homes/home-6/service-area";
import HIWArea from "../homes/home-6/hiw-area";
import BrandArea from "../about/brand-area";
import Footer from "@/src/layout/footers/footer-3";
import TeamArea from "@/src/components/about/team-area";
import VisionMission from "./vission-mission";
const AboutTwo = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb top_title="About Style 02" title="About 2" />
        <VisionMission />
        <ServiceArea />
        <HIWArea />
        <TeamArea />
        <BrandArea />
        <Footer />
      </main>
    </>
  );
};

export default AboutTwo;
