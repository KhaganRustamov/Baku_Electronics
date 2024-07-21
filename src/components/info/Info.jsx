"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import styles from "./info.module.scss";
import { getSliders } from "@/services/getData";
import photo1 from "@/assets/images/suretli_catdirilma.png";
import photo2 from "@/assets/images/30_gune_qaytarma.png";
import photo3 from "@/assets/images/indi_al_sonra_ode.png";
import photo4 from "@/assets/images/qapida_odeme.png";

const Info = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const data = await getSliders();
      setImages(data);
    };
    fetchImages();
  }, []);

  const benefits = [
    {
      icon: <Image src={photo1} />,
      title: "Arxayın al!",
      description: "30 gün müddətində istər dəyiş, istər geri qaytar",
    },
    {
      icon: <Image src={photo2} />,
      title: "Sürətli çatdırılma",
      description: "24 saat ərzində çatdırılma",
    },
    {
      icon: <Image src={photo3} />,
      title: "3 ay sonra ödə",
      description: "İndi al, 3 ay sonra ödəməyə başla",
    },
    {
      icon: <Image src={photo4} />,
      title: "Qapıda ödəmə",
      description: "Qapıda ödəmə rahatlığı ilə sifariş imkanı",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.sliderContainer}>
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            spaceBetween={30}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            modules={[Navigation, Pagination, Autoplay]}
            onInit={(swiper) => {
              console.log("Swiper initialized:", swiper);
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img.image}
                  alt={`Slide ${index}`}
                  className={styles.slideImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.benefits}>
          {benefits.map((item, i) => (
            <div className={styles.items} key={i}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
