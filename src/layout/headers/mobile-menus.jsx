import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getMenuData } from "./menu-data";
import { useLanguage } from "@/src/context/LanguageContext";
import LanguageSwitcher from "@/src/components/common/LanguageSwitcher";

const MobileMenus = () => {
  const { language } = useLanguage();
  const menu_data = getMenuData(language);

  const [subMenu, setSubMenu] = useState("");
  const [navTitle, setNavTitle] = useState("");

  //openMobileMenu
  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  // openSubMobileMenu
  const openSubMobileMenu = (s_menu) => {
    if (subMenu === s_menu) {
      setSubMenu("");
    } else {
      setSubMenu(s_menu);
    }
  };

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, []);

  return (
    <>
      <button
        onClick={() => setToggle(!toggle)}
        className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
        style={{
          right: "0px",
          left: "auto",
          textAlign: "center",
          textIndent: "0px",
          fontSize: "18px",
        }}
      >
        {toggle ? (
          "X"
        ) : (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </button>

      {toggle && (
        <nav className="mean-nav">
          <ul>
            {/* Language Switcher di atas menu */}
            <li
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                paddingBottom: "15px",
                marginBottom: "15px",
              }}
            >
              <LanguageSwitcher />
            </li>

            {/* Home Menu - Direct Link */}
            <li>
              <Link href="/">{language === "id" ? "BERANDA" : "HOME"}</Link>
            </li>

            {menu_data.map((menu, i) => (
              <React.Fragment key={i}>
                {!menu.has_dropdown && (
                  <li>
                    <Link href={menu.link}>{menu.title}</Link>
                  </li>
                )}

                {menu.has_dropdown && !menu.mega_menu && menu.sub_menus && (
                  <li className="has-dropdown">
                    <Link href={menu.link}>{menu.title}</Link>
                    <ul
                      className="submenu"
                      style={{
                        display: navTitle === menu.title ? "block" : "none",
                      }}
                    >
                      {menu.sub_menus.map((sub, i) => (
                        <li key={i}>
                          <Link href={sub.link}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                    <a
                      className={`mean-expand ${
                        navTitle === menu.title ? "mean-clicked" : ""
                      }`}
                      onClick={() => openMobileMenu(menu.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}
                    >
                      <i className="fal fa-plus"></i>
                    </a>
                  </li>
                )}

                {menu.mega_menu && menu.mega_menus && (
                  <li className="has-dropdown has-mega-menu">
                    <Link href={menu.link}>{menu.title}</Link>
                    <ul
                      className="mega-menu"
                      style={{
                        display: navTitle === menu.title ? "block" : "none",
                      }}
                    >
                      {menu.mega_menus.map((mega_m, i) => (
                        <li key={i}>
                          <Link href={mega_m.link} className="mega-menu-title">
                            {mega_m.title}
                          </Link>

                          <ul
                            style={{
                              display:
                                subMenu === mega_m.title ? "block" : "none",
                            }}
                          >
                            {mega_m.layout.map((sub_m, i) => (
                              <li key={i}>
                                <Link href={sub_m.link}>{sub_m.title}</Link>
                              </li>
                            ))}
                          </ul>
                          <a
                            className={`mean-expand ${
                              subMenu === mega_m.title ? "mean-clicked" : ""
                            }`}
                            onClick={() => openSubMobileMenu(mega_m.title)}
                            style={{ fontSize: "18px", cursor: "pointer" }}
                          >
                            <i className="fal fa-plus"></i>
                          </a>
                        </li>
                      ))}
                    </ul>

                    <a
                      className={`mean-expand ${
                        navTitle === menu.title ? "mean-clicked" : ""
                      }`}
                      onClick={() => openMobileMenu(menu.title)}
                      style={{ fontSize: "18px", cursor: "pointer" }}
                    >
                      <i className="fal fa-plus"></i>
                    </a>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileMenus;
