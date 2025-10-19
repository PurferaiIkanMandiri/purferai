import HeaderThree from "@/src/layout/headers/header-3";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ContactStandardArea from "./contact-standard-area";
import ContactMap from "../common/map";
import ContactStandardFormArea from "./contact-standard-form-area";
import Footer from "@/src/layout/footers/footer-3";

const Contact = () => {
  return (
    <>
      <HeaderThree />
      <main>
        <Breadcrumb top_title="Contact Us" title="Contact - Us" />
        <ContactStandardArea />
        <ContactMap />
        <ContactStandardFormArea />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
