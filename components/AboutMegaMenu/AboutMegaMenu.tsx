// import Image from "next/legacy/image";
// import Link from "next/link";
// import { Dispatch, SetStateAction, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

// // import Swiper core and required modules
// import SwiperCore, {
//   Autoplay,
//   Pagination,
//   Navigation,
//   EffectFade,
// } from "swiper";

// // install Swiper modules
// SwiperCore.use([Autoplay, Pagination, EffectFade, Navigation]);

// interface Props {
//   setIsAboutHovered: Dispatch<SetStateAction<boolean>>;
//   isAboutHovered: boolean;
// }

// const AboutMegaMenu = ({ setIsAboutHovered, isAboutHovered }: Props) => {
//   const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

//   const slides = [
//     {
//       id: 0,
//       image: "/images/Group_1334.webp",
//     },
//     {
//       id: 1,
//       image: "/images/Group_1335.webp",
//     },
//     {
//       id: 2,
//       image: "/images/Group_1379.webp",
//     },
//     {
//       id: 3,
//       image: "/images/Group_1378.webp",
//     },
//     {
//       id: 4,
//       image: "/images/image_211_1.webp",
//     },
//     {
//       id: 5,
//       image: "/images/Group_1341.webp",
//     },
//     {
//       id: 6,
//       image: "/images/Group_1342.webp",
//     },
//     {
//       id: 7,
//       image: "/images/Group_1343.webp",
//     },
//     {
//       id: 8,
//       image: "/images/Group_1336.webp",
//     },
//     {
//       id: 9,
//       image: "/images/Group_1337.webp",
//     },
//     {
//       id: 10,
//       image: "/images/Group_1338.webp",
//     },
//     {
//       id: 11,
//       // image: "/images/Group_1339.webp",
//       image: "/images/president.webp",
//     },
//     {
//       id: 12,
//       image: "/images/Group_1340.webp",
//       // image: "/images/secretary.webp",
//     },
//     {
//       id: 13,
//       image: "/images/Rectangle_1007.webp",
//     },
//     {
//       id: 14,
//       image: "/images/Group_1344.webp",
//     },
//     {
//       id: 15,
//       image: "/images/Rectangle_1007_1.webp",
//     },
//     {
//       id: 16,
//       image: "/images/unsplash_bgQgAKagQB4_7.webp",
//     },
//   ];

//   const changeSlide = (i: number) => {
//     swiperInstance?.slideTo(i);
//   };

//   return (
//     <div
//       onMouseEnter={() => setIsAboutHovered(true)}
//       onMouseLeave={() => setIsAboutHovered(false)}
//       className={`absolute hidden w-full bg-white px-4 lg:block ${
//         isAboutHovered ? "max-h-[100vh]" : "max-h-0"
//       } transform overflow-hidden shadow-md transition-all duration-300`}
//     >
//       <div className="mx-auto flex w-full max-w-screen-2xl py-8">
//         <div className="grid flex-grow grid-cols-3 gap-4">
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/about-us#About-DMTIMS"}>
//                 <a
//                   onMouseEnter={() => changeSlide(2)}
//                   className="mb-4 text-xl font-medium"
//                 >
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Introduction
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <div className="flex">
//               <Link legacyBehavior href={"/about-us#"}>
//                 <a
//                   onMouseEnter={() => changeSlide(1)}
//                   className="mb-4 text-xl font-medium"
//                 >
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Vision
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <div className="flex">
//               <Link legacyBehavior href={"/about-us#Mission"}>
//                 <a
//                   onMouseEnter={() => changeSlide(1)}
//                   className="mb-4 text-xl font-medium"
//                 >
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Mission
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <div className="flex">
//               <Link legacyBehavior href={"/about-us#DMTIMS-Rankings"}>
//                 <a
//                   onMouseEnter={() => changeSlide(3)}
//                   className="mb-4 text-xl font-medium"
//                 >
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     {/* DMTIMS Rankings */}
//                     Core Values
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <div className="flex">
//               <Link legacyBehavior href={"/about-us#Core-Values"}>
//                 <a
//                   onMouseEnter={() => changeSlide(4)}
//                   className="mb-4 text-xl font-medium"
//                 >
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     {/* Values */}
//                     Rankings & Awards
//                   </span>
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/about-us#VES-Trust"}>
//                 <a
//                   onMouseEnter={() => changeSlide(5)}
//                   className="mb-4 text-xl font-medium"
//                 >
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     {/* Legacy */}
//                     Our Heritage
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <div className="flex">
//               <Link legacyBehavior href={"/about-us#Message-from-Management"}>
//                 <a className="mb-2 text-xl font-medium">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Messages from Management
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <Link legacyBehavior href={"/about-us#Philipose-Mar-Theophilus"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(9)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   H. G. Dr. Philipose Mar Theophilus
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/about-us#Geevarghese-Mar-Coorilos"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(10)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   H.G. Geevarghese Mar Coorilos
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/about-us#Father-Abraham-Joseph"}>
//               <a className="mb-4">
//                 <span
//                   onMouseEnter={() => changeSlide(11)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Rev. Father Abraham Joseph
//                 </span>
//               </a>
//             </Link>
//             <div className="flex">
//               <Link legacyBehavior href={"/about-us#Board-of-Trustees"}>
//                 <a
//                   onMouseEnter={() => changeSlide(14)}
//                   className="mb-4 text-xl font-medium"
//                 >
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Board of Trustees
//                   </span>
//                 </a>
//               </Link>
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/about-us#Advisory-Council"}>
//                 <a
//                   onMouseEnter={() => changeSlide(16)}
//                   className="mb-4 text-xl font-medium"
//                 >
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Advisory Council
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             {/* <div className="flex">
//               <Link legacyBehavior href={"/about-us#Invitees"}>
//                 <a
//                   onMouseEnter={() => changeSlide(14)}
//                   className="mb-4 text-xl font-medium"
//                 >
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Invitees
//                   </span>
//                 </a>
//               </Link>
//             </div> */}
//             <div className="flex">
//               <Link legacyBehavior href={"/about-us#Heads"}>
//                 <a className="mb-2 text-xl font-medium">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     From the desk of
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <Link legacyBehavior href={"/about-us#Susen-Varghese"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(12)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   President
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/about-us#Susen-Varghese"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(11)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Secretary
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/about-us#Susen-Varghese"}>
//               <a className="mb-4">
//                 <span
//                   onMouseEnter={() => changeSlide(13)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Director
//                 </span>
//               </a>
//             </Link>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0">
//           <Swiper
//             effect="fade"
//             onSwiper={setSwiperInstance}
//             loop={true}
//             allowTouchMove={false}
//             className="flex w-[22rem] select-none xl:w-[24rem] 2xl:w-[26rem]"
//           >
//             {slides.map(({ id, image }) => (
//               <SwiperSlide
//                 tabIndex={0}
//                 key={id}
//                 className={`w-[22rem] overflow-hidden rounded-sm bg-white xl:w-[24rem] 2xl:w-[26rem]`}
//               >
//                 <div className="relative h-[280px]">
//                   <Image
//                     src={image}
//                     layout="fill"
//                     alt={"about-megamenu-" + id}
//                     objectFit="contain"
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMegaMenu;

/** new changes in aboutmenu  */
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
  setIsAboutHovered: Dispatch<SetStateAction<boolean>>;
  isAboutHovered: boolean;
}

const AboutMegaMenu = ({ setIsAboutHovered, isAboutHovered }: Props) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  const slides = [
    {
      id: 0,
      image: "/images/Group_1334.webp",
    },
    {
      id: 1,
      image: "/images/Group_1335.webp",
    },
    {
      id: 2,
      image: "/images/Group_1379.webp",
    },
    {
      id: 3,
      image: "/images/Group_1378.webp",
    },
    {
      id: 4,
      image: "/images/image_211_1.webp",
    },
    {
      id: 5,
      image: "/images/Group_1341.webp",
    },
    {
      id: 6,
      image: "/images/Group_1342.webp",
    },
    {
      id: 7,
      image: "/images/Group_1343.webp",
    },
    {
      id: 8,
      image: "/images/Group_1336.webp",
    },
    {
      id: 9,
      image: "/images/Group_1337.webp",
    },
    {
      id: 10,
      image: "/images/Group_1338.webp",
    },
    {
      id: 11,
      // image: "/images/Group_1339.webp",
      image: "/images/president.webp",
    },
    {
      id: 12,
      image: "/images/Group_1340.webp",
      // image: "/images/secretary.webp",
    },
    {
      id: 13,
      image: "/images/Rectangle_1007.webp",
    },
    {
      id: 14,
      image: "/images/Group_1344.webp",
    },
    {
      id: 15,
      image: "/images/Rectangle_1007_1.webp",
    },
    {
      id: 16,
      image: "/images/unsplash_bgQgAKagQB4_7.webp",
    },
  ];

  const changeSlide = (i: number) => {
    swiperInstance?.slideTo(i);
  };

  return (
    <div
      onMouseEnter={() => setIsAboutHovered(true)}
      onMouseLeave={() => setIsAboutHovered(false)}
      className={`absolute hidden w-full bg-white px-4 lg:block ${
        isAboutHovered ? "max-h-[100vh]" : "max-h-0"
      } transform overflow-hidden shadow-md transition-all duration-300`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl py-4 ">
        <div className="grid flex-grow  grid-cols-3  gap-4  ">
          <div className=" flex  w-full flex-col  ">
            <div className="flex">
              {/* <Link legacyBehavior href={"/about-us#About-DMTIMS"}> */}
              <Link legacyBehavior href={"/about-us#"}>
                <a
                  onMouseEnter={() => changeSlide(2)}
                  className="mb-4 text-xl font-medium"
                >
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Introduction to St. Mary's Group of Institutions
                  </span>
                </a>
              </Link>
            </div>

            <div className="flex flex-col">
              <div className="flex">
                <Link legacyBehavior href={"/about-us#VES-Trust"}>
                  <a
                    onMouseEnter={() => changeSlide(5)}
                    className="mb-4 text-xl font-medium"
                  >
                    <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                      {/* Legacy */}
                      Our Heritage
                    </span>
                  </a>
                </Link>
              </div>

              <div className="flex flex-col">
                <div className="flex">
                  <Link legacyBehavior href={"/about-us#dmtims"}>
                    <a
                      onMouseEnter={() => changeSlide(5)}
                      className="mb-4 text-xl font-medium"
                    >
                      <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                        DMTIMS
                      </span>
                    </a>
                  </Link>
                </div>

                <div className="flex">
                  <Link legacyBehavior href={"/about-us#Vision"}>
                    <a
                      onMouseEnter={() => changeSlide(1)}
                      className="mb-4 text-xl font-medium"
                    >
                      <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                        Vision, Mission and Core Values
                      </span>
                    </a>
                  </Link>
                </div>

                <div className="flex">
                  <Link legacyBehavior href={"/about-us#Core-Values"}>
                    <a
                      onMouseEnter={() => changeSlide(4)}
                      className="mb-4 text-xl font-medium"
                    >
                      <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                        {/* Values */}
                        Rankings & Awards
                      </span>
                    </a>
                  </Link>
                </div>

                <div className="flex">
                  <Link
                    legacyBehavior
                    href={"/about-us#Message-from-Management"}
                  >
                    <a className="mb-2 text-xl font-medium">
                      <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                        The Patronage
                      </span>
                    </a>
                  </Link>
                </div>

                <div className="flex">
                  <Link legacyBehavior href={"/about-us#Board-of-Trustees"}>
                    <a
                      onMouseEnter={() => changeSlide(14)}
                      className="mb-4 text-xl font-medium"
                    >
                      <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                        Board of Trustees
                      </span>
                    </a>
                  </Link>
                </div>

                <div className="flex">
                  <Link legacyBehavior href={"/about-us#Advisory-Council"}>
                    <a
                      onMouseEnter={() => changeSlide(16)}
                      className="mb-4 text-xl font-medium"
                    >
                      <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                        Advisory Council
                      </span>
                    </a>
                  </Link>
                </div>

                <div className="flex">
                  {/* <Link legacyBehavior href={"/about-us#Susen-Varghese"}> */}
                  <Link legacyBehavior href={"/about-us#Heads"}>
                    <a className="mb-2 text-xl font-medium">
                      <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                        Our Directors
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
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

export default AboutMegaMenu;
