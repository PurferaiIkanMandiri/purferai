import React from "react";
import { useTranslation } from "@/src/hooks/useTranslation";
import { motion } from "framer-motion";

const VisionMission = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="vision-mission-area pt-100 pb-100">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row"
        >
          <div className="col-12">
            <motion.div
              custom={0}
              variants={fadeInUp}
              className="section-title text-center mb-60"
            >
              <h2 className="vm-main-title">{t("vision_mission_title")}</h2>
              <p className="vm-subtitle">{t("vision_mission_subtitle")}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Book Container */}
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="book-container"
            >
              {/* Book Wrapper */}
              <div className="book-wrapper">
                {/* Left Side - Vision */}
                <motion.div
                  custom={1}
                  variants={fadeInUp}
                  className="book-page book-left"
                >
                  <div className="page-content">
                    <div className="page-header">
                      <div className="icon-wrapper vision-icon">
                        <i className="fas fa-eye"></i>
                      </div>
                      <h3>{t("vision_title")}</h3>
                      <div className="decorative-line"></div>
                    </div>

                    <div className="page-body">
                      <div className="quote-wrapper">
                        <div className="quote-mark">"</div>
                        <p className="vision-text">{t("vision_content")}</p>
                        <div className="quote-mark quote-end">"</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Center Divider/Spine */}
                <div className="book-spine">
                  <div className="spine-decoration">
                    <div className="spine-dot"></div>
                    <div className="spine-dot"></div>
                    <div className="spine-dot"></div>
                  </div>
                </div>

                {/* Right Side - Mission */}
                <motion.div
                  custom={2}
                  variants={fadeInUp}
                  className="book-page book-right"
                >
                  <div className="page-content">
                    <div className="page-header">
                      <div className="icon-wrapper mission-icon">
                        <i className="fas fa-bullseye"></i>
                      </div>
                      <h3>{t("mission_title")}</h3>
                      <div className="decorative-line"></div>
                    </div>

                    <div className="page-body">
                      <div className="mission-list">
                        <motion.div
                          custom={3}
                          variants={fadeInUp}
                          className="mission-item"
                        >
                          <div className="mission-number">01</div>
                          <p>{t("mission_point_1")}</p>
                        </motion.div>

                        <motion.div
                          custom={4}
                          variants={fadeInUp}
                          className="mission-item"
                        >
                          <div className="mission-number">02</div>
                          <p>{t("mission_point_2")}</p>
                        </motion.div>

                        <motion.div
                          custom={5}
                          variants={fadeInUp}
                          className="mission-item"
                        >
                          <div className="mission-number">03</div>
                          <p>{t("mission_point_3")}</p>
                        </motion.div>

                        <motion.div
                          custom={6}
                          variants={fadeInUp}
                          className="mission-item"
                        >
                          <div className="mission-number">04</div>
                          <p>{t("mission_point_4")}</p>
                        </motion.div>

                        <motion.div
                          custom={7}
                          variants={fadeInUp}
                          className="mission-item"
                        >
                          <div className="mission-number">05</div>
                          <p>{t("mission_point_5")}</p>
                        </motion.div>
                      </div>

                      <div className="page-number">02</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="book-shadow"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
