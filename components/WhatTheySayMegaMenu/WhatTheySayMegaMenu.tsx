import Image from "next/legacy/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, EffectFade, Navigation]);

interface Props {
  setIsWhatTheySayHovered: Dispatch<SetStateAction<boolean>>;
  isWhatTheySayHovered: boolean;
}

const WhatTheySayMegaMenu = ({
  setIsWhatTheySayHovered,
  isWhatTheySayHovered,
}: Props) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  const slides = [
    {
      id: 0,
      image:
        // "https://cdn.discordapp.com/attachments/929834261568167986/933731955684548638/pretty-young-girl-holding-book-posing-grey-background_1_22.png",
      "/newImages/barclays.png"
      },
  ];

  const changeSlide = (i: number) => {
    swiperInstance?.slideTo(i);
  };

  return (
    <div
      onMouseEnter={() => setIsWhatTheySayHovered(true)}
      onMouseLeave={() => setIsWhatTheySayHovered(false)}
      className={`absolute hidden w-full bg-white px-4 lg:block ${
        isWhatTheySayHovered ? "max-h-[50vh]" : "max-h-0"
      } transform overflow-hidden shadow-md transition-all duration-300`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl py-8">
        <div className="grid flex-grow grid-cols-3 gap-4">
          <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/#testimonials"}>
                <a className="mb-2 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Testimonials
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/#testimonials"}>
              <a className="mb-1">
                <span className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]">
                  Faculty
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/#testimonials"}>
              <a className="mb-1">
                <span className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]">
                  Student
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/#testimonials"}>
              <a className="mb-1">
                <span className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]">
                  Alumni
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/#testimonials"}>
              <a className="mb-1">
                <span className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]">
                  Recruiters
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/#testimonials"}>
              <a className="mb-1">
                <span className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]">
                  Parents
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-shrink-0">
          <Swiper
            effect="fade"
            onSwiper={setSwiperInstance}
            loop={true}
            allowTouchMove={false}
            className="flex w-[22rem] select-none xl:w-[24rem] 2xl:w-[26rem]"
          >
            {slides.map(({ id, image }) => (
              <SwiperSlide
                tabIndex={0}
                key={id}
                className={`w-[22rem] overflow-hidden rounded-sm bg-white xl:w-[24rem] 2xl:w-[26rem]`}
              >
                <div className="relative h-[280px]">
                  <Image
                    src={image}
                    alt={"testimonial-megamenu-img-" + id}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WhatTheySayMegaMenu;
