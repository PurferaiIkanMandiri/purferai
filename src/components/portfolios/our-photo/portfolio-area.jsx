import portfolio_data from "@/src/data/portfolio-data";
import ImagePopup from "@/src/modals/ImagePopup";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/src/hooks/useTranslation";

const OurPhoto = () => {
  const { t } = useTranslation();

  // Tampilkan semua gambar tanpa filter
  const allItems = portfolio_data;

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(0);

  // image open state
  const [isOpen, setIsOpen] = useState(false);

  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  // images untuk lightbox
  const img = portfolio_data.map((item) => item.img.src);

  return (
    <>
      <div className="portfolio-area pt-100 pb-100">
        <div className="container">
          {/* Title Section */}
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center mb-50">
                <h2>{t("our_photo_title")}</h2>
                <p>{t("our_photo_subtitle")}</p>
              </div>
            </div>
          </div>

          {/* Portfolio Grid - Tampilkan Semua */}
          <motion.div layout={true} className="row grid text-center">
            {allItems.map((item, i) => (
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
                    <div className="portfolio-overlay">
                      <i className="ti-eye"></i>
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.name}</h4>
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Info Total Photos */}
          <div className="row">
            <div className="col-12 text-center mt-30">
              <p className="total-photos-text">
                {t("total_photos")}: <strong>{allItems.length}</strong>{" "}
                {t("photos")}
              </p>
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

export default OurPhoto;
