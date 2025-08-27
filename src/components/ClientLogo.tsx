'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { fetchClientLogos } from '../lib/api';

// ✅ Swiper styles
// import 'swiper/css';

const ClientLogo = () => {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    async function loadLogos() {
      try {
        const data = await fetchClientLogos();
        setLogos(data);
      } catch (error) {
        console.error('Failed to load client logos:', error);
      }
    }
    loadLogos();
  }, []);

  return (
    <div dir="ltr" className="max-w-6xl mx-auto mt-16 px-4 py-2">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 }
        }}
        loop={true}
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={logo}
              alt={`client-${idx}`}
              className="object-contain h-12 mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientLogo;
