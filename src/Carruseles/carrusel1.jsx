import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../Carruseles/style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carrusel() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="src\assets\img\bailarina1.avif"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\bailarina2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\bailarina3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\bailarin4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\bailarina5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\bailarin6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\bailarin7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src\assets\img\bailarin8.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
