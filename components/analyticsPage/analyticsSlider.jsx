"use client";

import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import AnalytsSliderCard from "./analytsSliderSingleCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function AnalyticsSlider() {
  return (
    <Swiper
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full"
    >
      <SwiperSlide className="">
        <AnalytsSliderCard />
      </SwiperSlide>
      <SwiperSlide className="bg-white">
        <AnalytsSliderCard />
      </SwiperSlide>
    </Swiper>
  );
}
