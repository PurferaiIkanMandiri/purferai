import React from "react";
import Image from "next/image";
import { useTranslation } from "@/src/hooks/useTranslation";

import shape_line_img from "@assets/img/shape/line.png";
import work_img_1 from "@assets/img/icon/hw-1.png";
import work_img_2 from "@assets/img/icon/hw-2.png";
import work_img_3 from "@assets/img/icon/hw-3.png";
import work_img_4 from "@assets/img/icon/hw-4.png";

const work_data = {
  id: [
    {
      id: 1,
      icon: work_img_1,
      title: "Pengisian Air Laut",
      description:
        "Air laut dipompa ke dalam petak-petak tambak yang sudah disiapkan. Proses ini dilakukan saat air laut memiliki kadar garam yang tinggi.",
    },
    {
      id: 2,
      icon: work_img_2,
      title: "Penguapan",
      description:
        "Air laut dibiarkan menguap secara alami dengan bantuan sinar matahari. Proses ini memakan waktu beberapa hari hingga air menjadi jenuh garam.",
    },
    {
      id: 3,
      icon: work_img_3,
      title: "Kristalisasi",
      description:
        "Setelah air menguap, kristal garam mulai terbentuk di dasar petak. Proses ini terus berlanjut hingga lapisan garam mencapai ketebalan yang diinginkan.",
    },
    {
      id: 4,
      icon: work_img_4,
      title: "Panen & Pengangkatan",
      description:
        "Garam yang sudah mengkristal dipanen dengan cara diangkat menggunakan alat khusus, kemudian dikumpulkan untuk proses pengeringan dan pengemasan.",
    },
  ],
  en: [
    {
      id: 1,
      icon: work_img_1,
      title: "Seawater Filling",
      description:
        "Seawater is pumped into prepared ponds. This process is carried out when seawater has a high salt content.",
    },
    {
      id: 2,
      icon: work_img_2,
      title: "Evaporation",
      description:
        "Seawater is allowed to evaporate naturally with the help of sunlight. This process takes several days until the water becomes saturated with salt.",
    },
    {
      id: 3,
      icon: work_img_3,
      title: "Crystallization",
      description:
        "After the water evaporates, salt crystals begin to form at the bottom of the pond. This process continues until the salt layer reaches the desired thickness.",
    },
    {
      id: 4,
      icon: work_img_4,
      title: "Harvest & Collection",
      description:
        "The crystallized salt is harvested using special tools, then collected for drying and packaging process.",
    },
  ],
};

const HWProcessArea = ({ style_service_2, process, style_fancy }) => {
  const { t, language } = useTranslation();
  const processData = work_data[language] || work_data.id;

  return (
    <>
      <div
        className={`${
          style_service_2
            ? "hw-area-2 mb-120"
            : process
            ? "hw-area pt-145 pb-120"
            : style_fancy
            ? "hw-area"
            : "hw-area hw-position"
        } fix`}
      >
        <div className="container">
          {style_fancy ? null : (
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
                <div className="section-title-2 text-center mb-70">
                  <span className="st-sub">
                    {language === "id"
                      ? "Bagaimana Kami Bekerja"
                      : "How We Works"}
                  </span>
                  <h2 className="mb-20 f-600">
                    {language === "id"
                      ? "Proses Panen Garam"
                      : "Salt Harvesting Process"}
                  </h2>
                  <Image src={shape_line_img} alt="theme-pure" />
                </div>
              </div>
            </div>
          )}
          <div className="row">
            {processData.map((item, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="hw-list text-center mb-30">
                  <div className="ex-fea-img hw-list-img mb-30">
                    <Image src={item.icon} alt="theme-pure" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HWProcessArea;
