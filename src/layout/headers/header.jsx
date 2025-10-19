import React, { useRef, useEffect } from "react";
import header_logo from "@assets/img/logo/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import useSticky from "@/src/hooks/use-sticky";
import NavMenu from "./nav-menu";
import MobileMenus from "./mobile-menus";
import LanguageSwitcher from "@/src/components/common/LanguageSwitcher";

const HeaderOne = () => {
  const { sticky } = useSticky();

  return (
    <>
      <header
        id="header-sticky"
        className={`header-transparent header-text-white ${
          sticky && "sticky-bar"
        }`}
      >
        <div className="header-area">
          <div className="container">
            <div className="position-relative">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <Link href="/">
                      <Image src={header_logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 position-static">
                  <div className="main-menu red-menu white-menu text-center d-none d-lg-block">
                    <div className="mean-push"></div>
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                  <div className="mobile-menu mean-container d-lg-none">
                    <div className="mean-bar">
                      <MobileMenus />
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                  <div className="header-btn text-right d-flex align-items-center justify-content-end gap-3">
                    <LanguageSwitcher />
                    <a
                      href="#"
                      className="x-btn btn-border btn-squ"
                      style={{
                        backgroundColor: "#000",
                        color: "#fff",
                        borderColor: "#000",
                      }}
                    >
                      free trial
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
