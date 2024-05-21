/**my changes */
import Image from "next/legacy/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

//images
import slide0 from "../../public/newImages/slide0.webp";
// import slide0 from '../../public/newImages/slide0.webp';
// import slide0 from '../../public/newImages/slide0.webp';
// import slide0 from '../../public/newImages/slide0.webp';

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
  setIsPpaHovered: Dispatch<SetStateAction<boolean>>;
  isPpaHovered: boolean;
}

const PpaMegaMenu = ({ setIsPpaHovered, isPpaHovered }: Props) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  const slides = [
    {
      id: 0,
      image: "/newImages/slide0.webp",
    },
    {
      id: 1,
      image: "/newImages/slide1.webp",
    },
    {
      id: 2,
      image: "/newImages/slide2.webp",
    },
    {
      id: 3,
      image: "/newImages/slide3.webp",
    },
    {
      id: 4,
      image: "/newImages/slide4.webp",
    },
    {
      id: 5,
      image: "/newImages/slide5.webp",
    },
    {
      id: 6,
      image: "/newImages/slide6.webp",
    },
    {
      id: 7,
      image: "/newImages/slide7.webp",
    },
    {
      id: 8,
      image: "/newImages/slide8.webp",
    },
    {
      id: 9,
      image: "/newImages/slide9.webp",
    },
    {
      id: 10,
      image: "/newImages/slide10.webp",
    },
  ];

  const changeSlide = (i: number) => {
    swiperInstance?.slideTo(i);
  };

  return (
    <div
      onMouseEnter={() => setIsPpaHovered(true)}
      onMouseLeave={() => setIsPpaHovered(false)}
      className={`absolute hidden w-full bg-white px-4 lg:block ${
        isPpaHovered ? "max-h-[50vh]" : "max-h-0"
      } transform overflow-hidden shadow-md transition-all duration-300`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl py-8">
        <div className="grid flex-grow grid-cols-3 gap-4">
          <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
                <a className="mb-2 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Professional Partnerships & Associations
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(1)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Educational Partnerships
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(2)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Industry Certification Partnerships
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(3)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  NGO Partnerships
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
                    alt={"student-megamenu-img-" + id}
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

export default PpaMegaMenu;
