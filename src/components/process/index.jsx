import HeaderThree from "@/src/layout/headers/header-3";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import HWProcessArea from "../process/hw-process-area";
import Footer from "@/src/layout/footers/footer-3";

const Process = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb top_title="Process" title="Process" />
        <HWProcessArea process={true} />
      </main>
      <Footer no_style={true} />
    </>
  );
};

export default Process;
