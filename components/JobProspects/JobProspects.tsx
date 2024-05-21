import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import cardBg from "./images/tikona.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect, useRef, useState } from "react";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const JobProspects = () => {
  return (
    <section className="bg-[#F2F2F2]">
      <div className="relative">
        <Swiper
          id="testimonials"
          className="px-4 pt-6 pb-10 md:pb-24 lg:pt-10 xl:pb-32"
          slidesPerView={"auto"}
          centeredSlides={true}
        >
          {[0, 1, 2].map((item) => (
            <SwiperSlide
              key={item}
              className="relative mx-10 flex max-w-screen-2xl flex-col rounded-3xl bg-white shadow-xl md:flex-row-reverse"
            >
              <div className="h-80 w-full md:h-auto md:w-1/2">
                <div className="relative h-full w-full">
                  <Image
                    src={cardBg}
                    alt="cardBg"
                    layout="fill"
                    objectPosition="center"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col px-10 py-8 md:w-1/2">
                <p className="pb-6 font-condensed text-4xl font-bold tracking-tight text-[#28314A] lg:text-5xl xl:text-6xl">
                  A section about possible Job Prospects
                </p>
                <p className="pb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Libero velit morbi purus tortor. Ut sit amet, vel mollis proin
                  id et, massa. Id mattis faucibus eget sit ac. Metus, orci
                  velit ipsum venenatis. Amet amet elit aenean sapien,
                  pellentesque pulvinar leo. Accumsan tristique eu ultrices
                  felis, congue mi tincidunt sed eleifend. Condimentum faucibus
                  fusce sem enim nunc. Hac et, egestas id sagittis, purus sed
                  ipsum ipsum nulla. Nec proin gravida congue nulla sed. Ut
                  tempus sociis nunc nunc nisl, sed. Et, posuere nibh nulla
                  cursus senectus velit. Est felis enim, bibendum orci. Fusce
                  vestibulum quam pretium tellus in.
                </p>
                <p>
                  Rhoncus facilisis aenean euismod felis. Commodo tellus dictum
                  vitae vitae non tincidunt sodales nullam.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default JobProspects;
