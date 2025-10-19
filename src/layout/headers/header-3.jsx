import useSticky from "@/src/hooks/use-sticky";
import Link from "next/link";
import React from "react";
import NavMenu from "./nav-menu";
import MobileMenus from "./mobile-menus";
import LanguageSwitcher from "@/src/components/common/LanguageSwitcher";

const HeaderThree = ({ style_7 }) => {
  const { sticky } = useSticky();

  return (
    <>
      <header
        id="header-sticky"
        className={`header-normal ${sticky && "sticky-bar"}`}
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div className="header-area">
          <div className="container">
            <div className="position-relative">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <Link href="/">
                      <img
                        src="/assets/img/logo/logo2.svg"
                        alt="digimuda"
                        style={{ maxHeight: "100px", width: "auto" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 position-static">
                  <div className="main-menu pink-menu text-center d-none d-lg-block">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                  <div className="mobile-menu mean-container d-block d-lg-none">
                    <div className="mean-bar">
                      <MobileMenus />
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                  <div className="header-btn text-right d-flex align-items-center justify-content-end gap-3">
                    <LanguageSwitcher />
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

export default HeaderThree;
