// import Image from "next/legacy/image";
// import banner1 from "./images/banner1.webp";
// import banner2 from "./images/banner2.webp";
// import { gsap } from "gsap";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ArrowCircleRightIcon } from "@heroicons/react/outline";
// import { useEffect, useLayoutEffect, useRef, useState } from "react";

// import "swiper/css";
// import "swiper/css/effect-fade";

// import SwiperCore, { Autoplay, EffectFade } from "swiper";
// import Link from "next/link";

// // install Swiper modules
// SwiperCore.use([Autoplay, EffectFade]);

// const Banner = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(0);
//   const el = useRef(null);
//   const q = gsap.utils.selector(el);

//   typeof window === "undefined"
//     ? null
//     : useLayoutEffect(() => {
//         gsap.fromTo(
//           q("h3"),
//           {
//             y: 135,
//             skewY: 7,
//           },
//           {
//             y: 0,
//             ease: "power4.out",
//             duration: 1.8,
//             skewY: 0,
//             stagger: {
//               amount: 1.8,
//             },
//           }
//         );

//         gsap.fromTo(
//           q("p"),
//           {
//             opacity: 0,
//             y: 20,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             delay: 1.7,
//             duration: 0.5,
//           }
//         );

//         gsap.fromTo(
//           q(".apply"),
//           {
//             opacity: 0,
//             y: 20,
//           },
//           {
//             y: 0,
//             opacity: 1,
//             delay: 1.9,
//             duration: 0.5,
//           }
//         );
//       }, [thumbsSwiper]);

//   return (
//     <header className="relative">
//       <Swiper
//         ref={el}
//         autoplay={{
//           delay: 10000,
//           disableOnInteraction: true,
//         }}
//         autoHeight={true}
//         onSlideChange={(props) => setThumbsSwiper(props.realIndex)}
//         effect={"fade"}
//         allowTouchMove={false}
//         loop={true}
//         slidesPerView={1}
//       >
//         <SwiperSlide className="flex flex-col md:flex-row">
//           <div
//             style={{
//               background:
//                 "linear-gradient(155.19deg, #FFB800 9.93%, #FFB800 48.34%, #FFB800 82.02%)",
//             }}
//             className="relative h-[250px] flex-grow sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
//           >
//             <Image
//               priority
//               alt="banner3"
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/1099025942522892379/Top_Emerging_B-Schools_2023_Banner_left.webp"
//               }
//               layout="fill"
//               objectFit="cover"
//               objectPosition={"center"}
//             />
//           </div>
//           <div
//             style={{
//               background:
//                 "linear-gradient(178.61deg, #fff 22.59%, #fff 106.32%)",
//             }}
//             className="relative h-[250px] flex-grow sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
//           >
//             <Image
//               priority
//               alt="banner3"
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/1099025942820683866/Top_Emerging_B-Schools_2023_Banner_right.webp"
//               }
//               layout="fill"
//               objectFit="contain"
//               objectPosition={"center"}
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col md:flex-row">
//           <div
//             style={{
//               background:
//                 "linear-gradient(155.19deg, #EE3768 9.93%, #CF2956 48.34%, #920C30 82.02%)",
//             }}
//             className="relative h-[300px] flex-grow sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
//           >
//             <Image
//               priority
//               alt="banner3"
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/1069940346710138880/Times_education_1.png"
//               }
//               layout="fill"
//               objectFit="contain"
//               objectPosition={"center"}
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col md:flex-row">
//           <div className="flex h-[300px] items-center bg-[#4C477A] px-4 sm:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
//             <div className="mx-auto">
//               <div className="relative h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
//                 <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
//                   Unlocked New
//                 </h3>
//               </div>
//               <div className="relative mb-5 h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
//                 <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
//                   <u className="text-[#FFB800]">
//                     <em className="text-white">Achievement</em>
//                   </u>
//                 </h3>
//               </div>
//               <p className="max-w-xl pb-5 font-semibold text-white md:pb-8 lg:text-lg">
//                 Leading by example of continual improvement, DMTIMS finds itself
//                 ranked 1st in Navi Mumbai and 3rd in Mumbai amongst the Top
//                 Emerging B-Schools.
//               </p>
//               <div className="apply">
//                 <Link
//                   legacyBehavior
//                   href={
//                     "https://corp8.myclassboard.com/ApplicationForm_Custom/0EBE4104-7CF4-4F31-BF7A-9C5BFE514FA9/1/0"
//                   }
//                 >
//                   <a
//                     target="_blank"
//                     className="group inline-flex select-none items-center rounded-full bg-[#FFB800] py-2 pl-4 font-semibold text-white transition duration-300 hover:shadow-lg active:scale-95"
//                   >
//                     Apply now
//                     <ArrowCircleRightIcon className="mx-2 w-8 transform transition duration-300 group-hover:rotate-45 group-hover:transform lg:w-9" />{" "}
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="relative h-[250px] flex-grow bg-[#221D55] sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
//             <Image
//               priority
//               alt="banner3"
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/951427423101128704/Ranking_Hero_Section_3.webp"
//               }
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col md:flex-row">
//           <div className="flex h-[300px] items-center bg-[#EE3768] px-4 sm:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
//             <div className="mx-auto">
//               <div className="relative h-[2.075rem] overflow-hidden lg:h-[2.45rem] xl:h-[3.2rem] 2xl:h-[4.7rem]">
//                 <h3 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl 2xl:text-7xl">
//                   Singhania Education
//                 </h3>
//               </div>
//               <div className="relative mb-5 h-[2.075rem] overflow-hidden lg:h-[2.45rem] xl:h-[3.2rem] 2xl:h-[4.7rem]">
//                 <h3 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl 2xl:text-7xl">
//                   <u className="text-[#FFB800]">
//                     <em className="text-white">Excellence Award</em>
//                   </u>{" "}
//                   2022
//                 </h3>
//               </div>
//               <p className="max-w-xl pb-5 font-semibold text-white md:pb-8 lg:text-lg">
//                 Rev. Fr. Abraham Joseph has been conferred with the honourable
//                 Singhania Education Excellence Award 2022 by H. E Bhagat Singh
//                 Koshyari, Hon. Governor of Maharashtra at Raj Bhavan Mumbai on
//                 3rd September 2022
//               </p>
//             </div>
//           </div>
//           <div className="relative h-[250px] flex-grow bg-[#221D55] sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
//             <Image
//               priority
//               alt="banner6"
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/1015884954888048681/WhatsApp_Image_2022-09-04_at_10.37.39_AM.jpeg"
//               }
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col md:flex-row">
//           <div
//             style={{
//               background:
//                 "linear-gradient(155.19deg, #EE3768 9.93%, #CF2956 48.34%, #920C30 82.02%)",
//             }}
//             className="relative h-[300px] flex-grow sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
//           >
//             <Image
//               priority
//               alt="banner3"
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/1069511597963354162/WhatsApp_Image_2023-01-30_at_12.18_1.png"
//               }
//               layout="fill"
//               objectFit="cover"
//               objectPosition={"center"}
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col md:flex-row">
//           <div className="flex h-[300px] items-center bg-[#4C477A] px-4 sm:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
//             <div className="mx-auto">
//               <div className="relative h-[2.075rem] overflow-hidden lg:h-[2.45rem] xl:h-[3.2rem] 2xl:h-[4.7rem]">
//                 <h3 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl 2xl:text-7xl">
//                   DMTIMS
//                 </h3>
//               </div>
//               <div className="relative mb-5 h-[2.075rem] overflow-hidden lg:h-[2.45rem] xl:h-[3.2rem] 2xl:h-[4.7rem]">
//                 <h3 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl 2xl:text-7xl">
//                   x{" "}
//                   <u className="text-[#FFB800]">
//                     <em className="text-white"> TeamLease</em>
//                   </u>
//                   !
//                 </h3>
//               </div>
//               <p className="max-w-lg pb-5 font-semibold text-white md:pb-8 lg:text-lg">
//                 DMTIMS is glad to announce its collaboration with Team Lease
//                 Digital as our official Educational Partner for Certifications
//                 in Advanced Excel and Aptitude Analysis
//               </p>
//               <div className="apply">
//                 <Link legacyBehavior href={"https://mat.aima.in/sep22"}>
//                   <a
//                     target="_blank"
//                     className="group inline-flex select-none items-center rounded-full bg-[#FFB800] py-2 pl-4 font-semibold text-white transition duration-300 hover:shadow-lg active:scale-95"
//                   >
//                     Apply now
//                     <ArrowCircleRightIcon className="mx-2 w-8 transform transition duration-300 group-hover:rotate-45 group-hover:transform lg:w-9" />{" "}
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="relative h-[250px] flex-grow sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
//             <Image
//               priority
//               alt="banner"
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/1041659998595448872/DMTIMSxTEAMLEASE.webp"
//               }
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col md:flex-row">
//           <div className="flex h-[300px] items-center bg-[#4C477A] px-4 sm:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
//             <div className="mx-auto">
//               <div className="relative h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
//                 <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
//                   Outbound
//                 </h3>
//               </div>
//               <div className="relative mb-5 h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
//                 <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
//                   Learning{" "}
//                   <u className="text-[#FFB800]">
//                     <em className="text-white">Program</em>
//                   </u>
//                 </h3>
//               </div>
//               <p className="max-w-xl pb-5 font-semibold text-white md:pb-8 lg:text-lg">
//                 The Student Outbound Program was conducted wonderfully by Prof
//                 Vidyananda Joshi, giving students a valuable lesson about
//                 Leadership and Team Building Skills.
//               </p>
//               <div className="apply">
//                 <Link
//                   legacyBehavior
//                   href={
//                     "https://corp8.myclassboard.com/ApplicationForm_Custom/0EBE4104-7CF4-4F31-BF7A-9C5BFE514FA9/1/0"
//                   }
//                 >
//                   <a
//                     target="_blank"
//                     className="group inline-flex select-none items-center rounded-full bg-[#FFB800] py-2 pl-4 font-semibold text-white transition duration-300 hover:shadow-lg active:scale-95"
//                   >
//                     Apply now
//                     <ArrowCircleRightIcon className="mx-2 w-8 transform transition duration-300 group-hover:rotate-45 group-hover:transform lg:w-9" />{" "}
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="relative h-[250px] flex-grow bg-[#221D55] sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
//             <Image
//               priority
//               alt="banner2"
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/1041659997932769301/Outbound-Learning-Program.webp"
//               }
//               layout="fill"
//               objectFit="cover"
//               objectPosition={"left"}
//             />
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="flex flex-col md:flex-row">
//           <div className="flex h-[300px] items-center bg-[#EE3768] px-4 sm:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
//             <div className="mx-auto">
//               <div className="relative h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
//                 <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
//                   DMTIMS
//                 </h3>
//               </div>
//               <div className="relative mb-5 h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
//                 <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
//                   x{" "}
//                   <u className="text-[#FFB800]">
//                     <em className="text-white">SHASHWAT</em>
//                   </u>
//                 </h3>
//               </div>
//               <p className="max-w-lg pb-5 font-semibold text-white md:pb-8 lg:text-lg">
//                 DMTIMS is proud and happy to announce that we have successfully
//                 signed an MOU with Shashwat Foundation for the Social
//                 Sensitivity Project of PGDM.
//               </p>
//               <div className="apply">
//                 <Link
//                   legacyBehavior
//                   href={
//                     "https://corp8.myclassboard.com/ApplicationForm_Custom/0EBE4104-7CF4-4F31-BF7A-9C5BFE514FA9/1/0"
//                   }
//                 >
//                   <a
//                     target="_blank"
//                     className="group inline-flex select-none items-center rounded-full bg-[#FFB800] py-2 pl-4 font-semibold text-white transition duration-300 hover:shadow-lg active:scale-95"
//                   >
//                     Apply now
//                     <ArrowCircleRightIcon className="mx-2 w-8 transform transition duration-300 group-hover:rotate-45 group-hover:transform lg:w-9" />{" "}
//                   </a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="relative h-[250px] flex-grow bg-[#221D55] sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
//             <Image
//               priority
//               alt="banner1"
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/1044885825818738758/DMTIMS_x_SHASHWAT_1.png"
//               }
//               layout="fill"
//               objectFit="cover"
//               objectPosition={"right"}
//             />
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </header>
//   );
// };

// export default Banner;

















/** my changes */
import Image from "next/legacy/image";
import banner1 from "./images/banner1.webp";
import banner2 from "./images/banner2.webp";
import DMTIMS_TEAMLEASE from "./images/DMTIMS_TEAMLEASE.webp";
import dmtimsShashwat from "./images/dmtimsShashwat.webp";
import martheu from "./images/martheu.webp";
import outboundLeading from "./images/outboundLeading.webp";
import singhaniaEducation from "./images/singhaniaEducation.webp";
import TimesEducationAward from "./images/TimesEducationAward.webp";
import Ranking_Hero_Section_3 from "./images/Ranking_Hero_Section_3.webp";
import TopEmerging from "./images/Top_Emerging_B-Schools_2023_Banner_right.webp";
import TopEmergingLeft from "./images/Top_Emerging_B-Schools_2023_Banner_left.webp";

import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";

import SwiperCore, { Autoplay, EffectFade } from "swiper";
import Link from "next/link";

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade]);

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(0);
  const el = useRef(null);
  const q = gsap.utils.selector(el);

  typeof window === "undefined"
    ? null
    : useLayoutEffect(() => {
        gsap.fromTo(
          q("h3"),
          {
            y: 135,
            skewY: 7,
          },
          {
            y: 0,
            ease: "power4.out",
            duration: 1.8,
            skewY: 0,
            stagger: {
              amount: 1.8,
            },
          }
        );

        gsap.fromTo(
          q("p"),
          {
            opacity: 0,
            y: 20,
          },
          {
            y: 0,
            opacity: 1,
            delay: 1.7,
            duration: 0.5,
          }
        );

        gsap.fromTo(
          q(".apply"),
          {
            opacity: 0,
            y: 20,
          },
          {
            y: 0,
            opacity: 1,
            delay: 1.9,
            duration: 0.5,
          }
        );
      }, [thumbsSwiper]);

  return (
    <header className="relative">
      <Swiper
        ref={el}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        autoHeight={true}
        onSlideChange={(props) => setThumbsSwiper(props.realIndex)}
        effect={"fade"}
        allowTouchMove={false}
        loop={true}
        slidesPerView={1}
      >
        <SwiperSlide className="flex flex-col md:flex-row">
          <div
            style={{
              background:
                "linear-gradient(155.19deg, #FFB800 9.93%, #FFB800 48.34%, #FFB800 82.02%)",
            }}
            className="relative h-[250px] flex-grow sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
          >
            <Image
              priority
              alt="banner3"
              src={TopEmergingLeft}
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
            />
          </div>
          <div
            style={{
              background:
                "linear-gradient(178.61deg, #fff 22.59%, #fff 106.32%)",
            }}
            className="relative h-[250px] flex-grow sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
          >
            <Image
              priority
              alt="banner3"
              src={TopEmerging}
              layout="fill"
              objectFit="contain"
              objectPosition={"center"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col md:flex-row">
          <div
            style={{
              background:
                "linear-gradient(155.19deg, #EE3768 9.93%, #CF2956 48.34%, #920C30 82.02%)",
            }}
            className="relative h-[300px] flex-grow sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
          >
            <Image
              priority
              alt="banner3"
             src={TimesEducationAward}
              layout="fill"
              objectFit="contain"
              objectPosition={"center"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col md:flex-row">
          <div className="flex h-[300px] items-center bg-[#4C477A] px-4 sm:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
            <div className="mx-auto">
              <div className="relative h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
                <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  Unlocked New
                </h3>
              </div>
              <div className="relative mb-5 h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
                <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  <u className="text-[#FFB800]">
                    <em className="text-white">Achievement</em>
                  </u>
                </h3>
              </div>
              <p className="max-w-xl pb-5 font-semibold text-white md:pb-8 lg:text-lg">
                Leading by example of continual improvement, DMTIMS finds itself
                ranked 1st in Navi Mumbai and 3rd in Mumbai amongst the Top
                Emerging B-Schools.
              </p>
              <div className="apply">
                <Link
                  legacyBehavior
                  href={
                    "https://corp8.myclassboard.com/ApplicationForm_Custom/0EBE4104-7CF4-4F31-BF7A-9C5BFE514FA9/1/0"
                  }
                >
                  <a
                    target="_blank"
                    className="group inline-flex select-none items-center rounded-full bg-[#FFB800] py-2 pl-4 font-semibold text-white transition duration-300 hover:shadow-lg active:scale-95"
                  >
                    Apply now
                    <ArrowCircleRightIcon className="mx-2 w-8 transform transition duration-300 group-hover:rotate-45 group-hover:transform lg:w-9" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[250px] flex-grow bg-[#221D55] sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
            <Image
              priority
              alt="banner3"
              src={Ranking_Hero_Section_3}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col md:flex-row">
          <div className="flex h-[300px] items-center bg-[#EE3768] px-4 sm:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
            <div className="mx-auto">
              <div className="relative h-[2.075rem] overflow-hidden lg:h-[2.45rem] xl:h-[3.2rem] 2xl:h-[4.7rem]">
                <h3 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl 2xl:text-7xl">
                  Singhania Education
                </h3>
              </div>
              <div className="relative mb-5 h-[2.075rem] overflow-hidden lg:h-[2.45rem] xl:h-[3.2rem] 2xl:h-[4.7rem]">
                <h3 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl 2xl:text-7xl">
                  <u className="text-[#FFB800]">
                    <em className="text-white">Excellence Award</em>
                  </u>{" "}
                  2022
                </h3>
              </div>
              <p className="max-w-xl pb-5 font-semibold text-white md:pb-8 lg:text-lg">
                Rev. Fr. Abraham Joseph has been conferred with the honourable
                Singhania Education Excellence Award 2022 by H. E Bhagat Singh
                Koshyari, Hon. Governor of Maharashtra at Raj Bhavan Mumbai on
                3rd September 2022
              </p>
            </div>
          </div>
          <div className="relative h-[250px] flex-grow bg-[#221D55] sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
            <Image
              priority
              alt="banner6"
              src={singhaniaEducation}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col md:flex-row">
          <div
            style={{
              background:
                "linear-gradient(155.19deg, #EE3768 9.93%, #CF2956 48.34%, #920C30 82.02%)",
            }}
            className="relative h-[300px] flex-grow sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]"
          >
            <Image
              priority
              alt="banner3"
              src={martheu}
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col md:flex-row">
          <div className="flex h-[300px] items-center bg-[#4C477A] px-4 sm:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
            <div className="mx-auto">
              <div className="relative h-[2.075rem] overflow-hidden lg:h-[2.45rem] xl:h-[3.2rem] 2xl:h-[4.7rem]">
                <h3 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl 2xl:text-7xl">
                  DMTIMS
                </h3>
              </div>
              <div className="relative mb-5 h-[2.075rem] overflow-hidden lg:h-[2.45rem] xl:h-[3.2rem] 2xl:h-[4.7rem]">
                <h3 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl 2xl:text-7xl">
                  x{" "}
                  <u className="text-[#FFB800]">
                    <em className="text-white"> TeamLease</em>
                  </u>
                  !
                </h3>
              </div>
              <p className="max-w-lg pb-5 font-semibold text-white md:pb-8 lg:text-lg">
                DMTIMS is glad to announce its collaboration with Team Lease
                Digital as our official Educational Partner for Certifications
                in Advanced Excel and Aptitude Analysis
              </p>
              <div className="apply">
                <Link legacyBehavior href={"https://mat.aima.in/sep22"}>
                  <a
                    target="_blank"
                    className="group inline-flex select-none items-center rounded-full bg-[#FFB800] py-2 pl-4 font-semibold text-white transition duration-300 hover:shadow-lg active:scale-95"
                  >
                    Apply now
                    <ArrowCircleRightIcon className="mx-2 w-8 transform transition duration-300 group-hover:rotate-45 group-hover:transform lg:w-9" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[250px] flex-grow sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
            <Image
              priority
              alt="banner"
              src={DMTIMS_TEAMLEASE}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col md:flex-row">
          <div className="flex h-[300px] items-center bg-[#4C477A] px-4 sm:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
            <div className="mx-auto">
              <div className="relative h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
                <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  Outbound
                </h3>
              </div>
              <div className="relative mb-5 h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
                <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  Learning{" "}
                  <u className="text-[#FFB800]">
                    <em className="text-white">Program</em>
                  </u>
                </h3>
              </div>
              <p className="max-w-xl pb-5 font-semibold text-white md:pb-8 lg:text-lg">
                The Student Outbound Program was conducted wonderfully by Prof
                Vidyananda Joshi, giving students a valuable lesson about
                Leadership and Team Building Skills.
              </p>
              <div className="apply">
                <Link
                  legacyBehavior
                  href={
                    "https://corp8.myclassboard.com/ApplicationForm_Custom/0EBE4104-7CF4-4F31-BF7A-9C5BFE514FA9/1/0"
                  }
                >
                  <a
                    target="_blank"
                    className="group inline-flex select-none items-center rounded-full bg-[#FFB800] py-2 pl-4 font-semibold text-white transition duration-300 hover:shadow-lg active:scale-95"
                  >
                    Apply now
                    <ArrowCircleRightIcon className="mx-2 w-8 transform transition duration-300 group-hover:rotate-45 group-hover:transform lg:w-9" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[250px] flex-grow bg-[#221D55] sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
            <Image
              priority
              alt="banner2"
              src={outboundLeading}
              layout="fill"
              objectFit="cover"
              objectPosition={"left"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col md:flex-row">
          <div className="flex h-[300px] items-center bg-[#EE3768] px-4 sm:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
            <div className="mx-auto">
              <div className="relative h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
                <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  DMTIMS
                </h3>
              </div>
              <div className="relative mb-5 h-[3.2rem] overflow-hidden lg:h-[3.95rem] xl:h-[4.7rem] 2xl:h-[6.2rem]">
                <h3 className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  x{" "}
                  <u className="text-[#FFB800]">
                    <em className="text-white">SHASHWAT</em>
                  </u>
                </h3>
              </div>
              <p className="max-w-lg pb-5 font-semibold text-white md:pb-8 lg:text-lg">
                DMTIMS is proud and happy to announce that we have successfully
                signed an MOU with Shashwat Foundation for the Social
                Sensitivity Project of PGDM.
              </p>
              <div className="apply">
                <Link
                  legacyBehavior
                  href={
                    "https://corp8.myclassboard.com/ApplicationForm_Custom/0EBE4104-7CF4-4F31-BF7A-9C5BFE514FA9/1/0"
                  }
                >
                  <a
                    target="_blank"
                    className="group inline-flex select-none items-center rounded-full bg-[#FFB800] py-2 pl-4 font-semibold text-white transition duration-300 hover:shadow-lg active:scale-95"
                  >
                    Apply now
                    <ArrowCircleRightIcon className="mx-2 w-8 transform transition duration-300 group-hover:rotate-45 group-hover:transform lg:w-9" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-[250px] flex-grow bg-[#221D55] sm:h-[350px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]">
            <Image
              priority
              alt="banner1"
              src={dmtimsShashwat}
              layout="fill"
              objectFit="cover"
              objectPosition={"right"}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Banner;
