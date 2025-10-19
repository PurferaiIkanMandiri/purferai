import React from "react";
import Link from "next/link";
import Image from "next/image";

import hero_shape_1 from "@assets/img/shape/shape1.png";
import hero_shape_2 from "@assets/img/shape/shape2.png";
import hero_shape_3 from "@assets/img/shape/shape3.png";
import hero_shape_4 from "@assets/img/shape/shape4.png";
import hero_shape_5 from "@assets/img/shape/shape5.png";
import hero_shape_6 from "@assets/img/shape/shape6.png";

const hero_content = {
  title_1: "Advanced",
  title_2: "Future Software Made Simple",
  info: (
    <>
      Herb fill fowl fourth they're were whales Don it first green Years to
      seasons seed behold fruitful let gathering good
    </>
  ),
};
const { title_1, title_2, info } = hero_content;

const HeroArea = () => {
  // Ganti VIDEO_ID dengan ID video YouTube yang Anda inginkan
  // Contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID nya: dQw4w9WgXcQ
  const youtubeVideoId = "dQw4w9WgXcQ";

  return (
    <>
      <section className="slider-area fix">
        {/* Video Background */}
        <div className="video-background">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Background Video"
          ></iframe>
          {/* Overlay gelap agar teks tetap terbaca */}
          <div className="video-overlay"></div>
        </div>

        <div className="shape-slider">
          <Image
            className="shape shape-1"
            src={hero_shape_1}
            alt="theme-pure"
          />
          <Image
            className="shape shape-2"
            src={hero_shape_2}
            alt="theme-pure"
          />
          <Image
            className="shape shape-3"
            src={hero_shape_3}
            alt="theme-pure"
          />
          <Image
            className="shape shape-4"
            src={hero_shape_4}
            alt="theme-pure"
          />
          <Image
            className="shape shape-5"
            src={hero_shape_5}
            alt="theme-pure"
          />
          <Image
            className="shape shape-6"
            src={hero_shape_6}
            alt="theme-pure"
          />
        </div>

        <div
          className="single-slider slider-height d-flex align-items-center"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="slider-text text-center">
                  <h2 className="wow fadeInUp animated" data-wow-delay="0.4s">
                    <span className="color">{title_1}</span> {title_2}
                  </h2>
                  <p className="wow fadeInUp animated" data-wow-delay="0.9s">
                    {info}
                  </p>
                  <Link
                    href="/register"
                    className="x-btn wow fadeInUp animated"
                    data-wow-delay="1.5s"
                  >
                    Free trial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .video-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
          }

          .video-background iframe {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100vw;
            height: 56.25vw; /* 16:9 aspect ratio */
            min-height: 100vh;
            min-width: 177.77vh; /* 16:9 aspect ratio */
            transform: translate(-50%, -50%);
            pointer-events: none;
          }

          .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5); /* Overlay gelap 50% */
            z-index: 1;
          }

          .slider-area {
            position: relative;
            overflow: hidden;
          }

          .slider-text {
            position: relative;
            z-index: 3;
            color: #fff;
          }
        `}</style>
      </section>
    </>
  );
};

export default HeroArea;
