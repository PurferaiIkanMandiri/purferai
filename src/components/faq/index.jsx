import FaqArea from "./faq-area";
import HeaderThree from "@/src/layout/headers/header-3";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import FaqFormArea from "./faq-form-area";
import Footer from "@/src/layout/footers/footer-3";

const Faq = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb top_title="Frequently Ask Question" title="FAQ" />
        <FaqArea />
        <FaqFormArea />
      </main>
      <Footer />
    </>
  );
};

export default Faq;
