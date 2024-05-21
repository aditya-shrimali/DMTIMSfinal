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
  setIsInfrastructureHovered: Dispatch<SetStateAction<boolean>>;
  isInfrastructureHovered: boolean;
}

const InfrastructureMegaMenu = ({
  setIsInfrastructureHovered,
  isInfrastructureHovered,
}: Props) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  /**my changes */
  const infrastructures = [
    {
      id: 0,
      image: "/newImages/conferenceRoom.webp",
      title: "Campus Infrastructure",
      description: `Where memories are made`,
    },
    {
      id: 1,
      image: "/newImages/infra5.webp",
      title: "Campus Virtual Tour",
      description: "The first step towards fulfilling your dreams",
    },
    {
      id: 2,
      image: "/newImages/infra9.webp",
      title: "Campus Facilities",
      description: "Path towards fulfilling your dreams",
    },
    // {
    //   id: 3,
    //   image: "/newImages/infra1.webp",
    //   title: "Classroom",
    //   description: "Where learnings begin",
    // },
    // {
    //   id: 4,
    //   image: "/newImages/infra6.webp",
    //   title: "Conference Room",
    //   description: "Where ideas come to life",
    // },
    // {
    //   id: 5,
    //   image: "/newImages/infra10.webp",
    //   title: "Computer Lab",
    //   description: "Your date with the digital world",
    // },
    // {
    //   id: 6,
    //   image: "/newImages/infra2.webp",
    //   title: "Library",
    //   description: "Your destination for knowledge",
    // },
    // {
    //   id: 7,
    //   image: "/newImages/infra7.webp",
    //   title: "Auditorium",
    //   description: "Witness excellence and get inspired",
    // },
    // {
    //   id: 8,
    //   image: "/newImages/infra11.webp",
    //   title: "Canteen",
    //   description: "Where food, friendships and conversations are shared",
    // },
    // {
    //   id: 9,
    //   image: "/newImages/infra4.webp",
    //   title: "Common Room",
    //   description: "Where bonds are strengthened",
    // },
    // {
    //   id: 10,
    //   image: "/newImages/infra8.webp",
    //   title: "Hostel",
    //   description: "A Home away from Home",
    // },
  ];

  const changeSlide = (i: number) => {
    swiperInstance?.slideTo(i);
  };

  return (
    <div
      onMouseEnter={() => setIsInfrastructureHovered(true)}
      onMouseLeave={() => setIsInfrastructureHovered(false)}
      className={`absolute hidden w-full bg-white px-4 lg:block ${
        isInfrastructureHovered ? "max-h-[100vh]" : "max-h-0"
      } transform overflow-hidden shadow-md transition-all duration-300`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl py-8">
        <div className="grid flex-grow grid-cols-1 gap-2 px-4">
          {infrastructures.map((item) => (
            <Link key={item.id} legacyBehavior href={"/about-us#infra"}>
              <a className="mb-1 text-xl font-medium">
                <span
                  onMouseEnter={() => changeSlide(item.id + 1)}
                  className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]"
                >
                  {item.title}
                </span>
              </a>
            </Link>
          ))}
          {/* <Link legacyBehavior href={"/about-us#Infrastructure"}>
            <a className="mb-1 font-bold text-[#929292]">+more..</a>
          </Link> */}
        </div>
        <div className="flex flex-shrink-0">
          <Swiper
            effect="fade"
            onSwiper={setSwiperInstance}
            loop={true}
            allowTouchMove={false}
            className="flex w-[22rem] select-none xl:w-[24rem] 2xl:w-[26rem]"
          >
            {infrastructures.map(({ id, image }) => (
              <SwiperSlide
                tabIndex={0}
                key={id}
                className={`w-[22rem] overflow-hidden rounded-sm bg-white xl:w-[24rem] 2xl:w-[26rem]`}
              >
                <div className="relative h-[280px]">
                  <Image
                    src={image}
                    layout="fill"
                    alt={"about-megamenu-" + id}
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

export default InfrastructureMegaMenu;
