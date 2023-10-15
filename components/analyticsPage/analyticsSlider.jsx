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

import AnalytsSliderSingleCard from "./analyticSliderSingleCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// images
import Img1 from '@/public/Images/img1.png'
import Img2 from '@/public/Images/img2.png'
import Img3 from '@/public/Images/img3.png'

// Static data for slider
const data = [
  {
    title: "Spending",
    img: Img1,
    firstItem: {
      count: "12h",
      name: "Spend",
    },
    secondItem: {
      count: "25",
      name: "Order size",
    },
    thirdItem: {
      count: "170",
      name: "Order",
    },
    fourthItem: {
      count: "28.5k",
      name: "Items",
    },
  },
  {
    title: "Traffic",
    img: Img2,
    firstItem: {
      count: "28%",
      name: "Sessions",
    },
    secondItem: {
      count: "2.9k",
      name: "Page views",
    },
    thirdItem: {
      count: "1.7k",
      name: "Leeds",
    },
    fourthItem: {
      count: "15%",
      name: "Conversions",
    },
  },
  {
    title: "Revenue Sources",
    img: Img3,
    firstItem: {
      count: "270",
      name: "Direct",
    },
    secondItem: {
      count: "970",
      name: "Organic",
    },
    thirdItem: {
      count: "65",
      name: "Referral",
    },
    fourthItem: {
      count: "1.7k",
      name: "Campaign",
    },
  },
];

export default function AnalyticsSlider() {
  return (
    <Swiper
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      
      modules={[Autoplay, Pagination]}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full shadow"
    >
      {/* {data.map((data) => {
        <SwiperSlide className="">
          <AnalytsSliderSingleCard />
        </SwiperSlide>
      })} */}

      <SwiperSlide className="rounded">
        <AnalytsSliderSingleCard
          data={data[0]}
        />
      </SwiperSlide>
      <SwiperSlide className="rounded">
        <AnalytsSliderSingleCard
          data={data[1]}
        />
      </SwiperSlide>
      <SwiperSlide className="rounded">
        <AnalytsSliderSingleCard
          data={data[2]}
        />
      </SwiperSlide>
    </Swiper>
  );
}
