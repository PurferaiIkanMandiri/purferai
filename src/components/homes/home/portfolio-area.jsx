import portfolio_data from "@/src/data/portfolio-data";
import ImagePopup from "@/src/modals/ImagePopup";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/src/hooks/useTranslation";

const PortfolioHomeArea = () => {
  const { t } = useTranslation();

  // Hanya tampilkan 3 gambar pertama
  const displayItems = portfolio_data.slice(0, 3);

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(0);

  // image open state
  const [isOpen, setIsOpen] = useState(false);

  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  // images
  const img = portfolio_data.map((item) => item.img.src);

  return (
    <>
      <div className="portfolio-area pt-100 pb-100">
        <div className="container">
          {/* Title Section */}
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center mb-50">
                <h2>{t("gallery_title")}</h2>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <motion.div layout={true} className="row grid text-center">
            {displayItems.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30"
              >
                <div
                  className="portfolio-item-simple"
                  onClick={() => handleImagePopup(i)}
                >
                  <div className="portfolio-image">
                    <Image src={item.img} alt={item.name} />
                    <div className="portfolio-overlay"></div>
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.name}</h4>
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* More Button */}
          <div className="row">
            <div className="col-12 text-center mt-50">
              <Link href="/our-photo" className="view-more-btn">
                <span>{t("more_button")}</span>
                <i className="ti-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default PortfolioHomeArea;
