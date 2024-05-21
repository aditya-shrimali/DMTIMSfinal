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
  setIsFacultyHovered: Dispatch<SetStateAction<boolean>>;
  isFacutlyHovered: boolean;
}

const FacultyMegaMenu = ({ setIsFacultyHovered, isFacutlyHovered }: Props) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  const slides = [
    {
      id: 0,
      image: "/newImages/faculty0.webp",
    },
    {
      id: 1,
      image: "/newImages/faculty2.webp",
    },
    {
      id: 2,
      image: "/newImages/faculty1.webp",
    },
    {
      id: 3,
      image: "/newImages/faculty1.webp",
    },
    {
      id: 4,
      image: "/newImages/faculty2.webp",
    },
    {
      id: 5,
      image: "/newImages/faculty3.webp",
    },
    {
      id: 6,
      image: "/newImages/faculty3.webp",
    },
    {
      id: 7,
      image: "/newImages/faculty2.webp",
    },
  ];

  // const changeSlide = (i: number) => {
  //   swiperInstance?.slideTo(i);
  // };

  return (
    <div
      onMouseEnter={() => setIsFacultyHovered(true)}
      onMouseLeave={() => setIsFacultyHovered(false)}
      className={`absolute hidden w-full bg-white px-4 lg:block ${
        isFacutlyHovered ? "max-h-[50vh]" : "max-h-0"
      } transform overflow-hidden shadow-md transition-all duration-300`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl py-8">
        <div className="grid flex-grow grid-cols-3 gap-4">
          <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/faculty#Core-Faculty"}>
                <a className="mb-2 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Intellectual Capital
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/faculty#Dr.-Susen-Varghese"}>
              <a className="mb-1">
                <span
                  // onMouseEnter={() => changeSlide(1)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Meet our Visionaries
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/faculty#Dr.-Monica-Khanna"}>
              <a className="mb-1">
                <span
                  // onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Core Faculty
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/faculty#Dr.-Monica-Khanna"}>
              <a className="mb-1">
                <span
                  // onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Visiting Faculty
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/faculty#Dr.-Monica-Khanna"}>
              <a className="mb-1">
                <span
                  // onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Support Capital
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/faculty#research"}>
              <a className="mb-1">
                <span
                  // onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Research
                </span>
              </a>
            </Link>

            {/* <Link legacyBehavior href={"/faculty#Core-Faculty"}>
              <a className="mb-1 font-bold text-[#929292]">+more..</a>
            </Link> */}
          </div>
          {/* <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/faculty#Visiting-Faculty"}>
                <a className="mb-4 text-xl font-medium">
                  <span
                    onMouseEnter={() => changeSlide(7)}
                    className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]"
                  >
                    Visiting Faculty
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link legacyBehavior href={"/faculty#Support-Capital"}>
                <a className="mb-2 text-xl font-medium">
                  <span
                    onMouseEnter={() => changeSlide(8)}
                    className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]"
                  >
                    Support Capital
                  </span>
                </a>
              </Link>
            </div>
          </div> */}

          {/* <div>
            <div className="flex flex-col">
              <div className="flex"> */}
          {/* <Link legacyBehavior href={"/faculty#Support-Capital"}> */}
          {/* <Link legacyBehavior href={"/faculty#Ektaara"}>
                  <a className="mb-4 text-2xl font-medium">
                    <p
                      onMouseEnter={() => changeSlide(8)}
                      className="link-underline link-underline-black text-[#4A4874] hover:text-[#EE3768]"
                    >
                      Research @ DMTIMS
                    </p>
                    <span className="text-[#929292]">EKTAARA 2024</span>
                  </a>
                </Link>
              </div>
            </div>
          </div> */}

          {/* <div></div> */}
        </div>
        {/* <div className="flex flex-shrink-0">
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
                    alt={"faculty-image-" + id}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </div>
  );
};

export default FacultyMegaMenu;
