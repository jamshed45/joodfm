import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroImages from "../lib/heroImages";



export default function HeroSlider() {
  const { t, i18n } = useTranslation();


  return (
    <div  dir="ltr" className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {heroImages.map((slide) => (
          <SwiperSlide key={slide.id}>
  <div
    className="w-full h-full bg-cover bg-center flex items-center"
    style={{ backgroundImage: `url(${slide.image})` }}
  >
    <div
      className={`bg-black/50 w-full h-full flex flex-col justify-center px-6 pt-20 md:px-20 ${
        i18n.language === 'ar' ? 'text-right' : 'text-left'
      }`}
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
        {t(slide.titleKey)}
      </h1>
      <p className="text-white text-lg md:text-xl max-w-2xl mb-6">
        {t(slide.descriptionKey)}
      </p>
      <button className="bg-primary hover:bg-primary text-white font-semibold px-6 py-3 rounded-lg w-fit">
        {t(slide.buttonKey)}
      </button>
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}
