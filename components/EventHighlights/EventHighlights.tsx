import Image from "next/legacy/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cardBg from "./images/cardImage.png";
import EventBg from "./images/EventBg.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import SmallEventCard from "../SmallEventCard/SmallEventCard";
import MediumEventCard from "../MediumEventCard/MediumEventCard";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const EventHighlights = () => {
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      q("h5"),
      {
        y: 180,
      },
      {
        y: 0,
        ease: "power4.out",
        duration: 1.8,
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: q("h5"),
        },
      }
    );

    gsap.fromTo(
      q("#event-highlights"),
      {
        opacity: 0,
        y: 118,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 1.7,
        scrollTrigger: {
          trigger: q("#event-highlights"),
        },
      }
    );
  }, []);

  return (
    <section ref={el} className="relative overflow-hidden bg-[#4C477A]">
      <div className="px-4">
        <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-col pt-12 pb-4 lg:pb-8 xl:pt-16">
          <div className="relative h-[2.75rem] overflow-hidden sm:h-[3.5rem] md:h-[4.25rem] lg:h-[5rem] xl:h-[6.5rem]">
            <h5 className="font-condensed text-4xl font-bold tracking-tighter text-[#FFB800] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Event Highlights
            </h5>
          </div>
          <div className="relative h-[2.75rem] overflow-hidden sm:h-[3.5rem] md:h-[4.25rem] lg:h-[5rem] xl:h-[6.5rem]">
            <u className="text-[#FFB800]">
              <h5 className="font-condensed text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Rewind
              </h5>
            </u>
          </div>
        </div>
      </div>
      {/* <div className="px-4">
        <div className="relative mx-auto w-full max-w-screen-2xl">
          <Swiper
            id="event-highlights"
            className="pt-2 pb-16"
            slidesPerView={"auto"}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) =>
              item % 2 == 0 ? (
                <SwiperSlide
                  key={item}
                  className={`mx-2 w-60 overflow-hidden rounded-md bg-[#EE3768] shadow-lg first:ml-0`}
                >
                  <SmallEventCard img={cardBg} />
                </SwiperSlide>
              ) : (
                <SwiperSlide
                  key={item}
                  className={`mx-2 w-[32rem] overflow-hidden rounded-md bg-[#EE3768] shadow-lg first:ml-0`}
                >
                  <MediumEventCard img={cardBg} />
                </SwiperSlide>
              )
            )}
          </Swiper>
          <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[rgba(76,71,122,0.01)]  to-[#4C477A] md:w-32 lg:w-40" />
        </div>
      </div> */}
      <div className="absolute right-0 top-6 h-1/2 w-2/3 sm:w-1/2 xl:top-16">
        <div className="relative mb-6 h-full cursor-pointer items-center">
          <Image
            src={EventBg}
            alt="Event-Bg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
