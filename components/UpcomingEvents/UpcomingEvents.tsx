// import Image from "next/legacy/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import cardBg from "./images/cardImage.png";
// import UpcomingBg from "./images/UpcomingBg.png";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
// import SmallEventCard from "../SmallEventCard/SmallEventCard";
// import MediumEventCard from "../MediumEventCard/MediumEventCard";

// // install Swiper modules
// SwiperCore.use([Autoplay, Pagination, Navigation]);

// const UpcomingEvents = () => {
//   const events = [
//     {
//       id: 0,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1139104889864204308/Rectangle_168.png",
//       title:
//         "Robin Banerjee on his new book: Business Crimes Now Bigger, Broader,..",
//       desc: null,
//       date: "21st Dec,2021",
//     },
//     {
//       id: 1,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1139105125256929280/Rectangle_733.png",
//       title: "Crescendo :Rise To Express | Galaxia iFest 2021",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit adipiscing at fermentum duis et quam. Fames ultricies convallis nisl diam ut sollicitudin aliquam sit in. Convallis et.",
//       date: "21st Dec,2021",
//     },
//     {
//       id: 2,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1139105735423316008/Rectangle_172.png",
//       title: `Astitva : Art & Music
//     Festival | Galaxia iFest
//     2021`,
//       desc: null,
//       date: "21st Dec,2021",
//     },
//     {
//       id: 4,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1139105859385950239/Rectangle_168_1.png",
//       title: "PGDM 2023 Commencement: 15th September 2023",
//       desc: null,
//       date: "15th Sep,2023",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="absolute right-0 top-6 h-1/2 w-2/3 sm:w-1/2 xl:top-16">
//         <div className="relative mb-6 h-full cursor-pointer items-center">
//           <Image
//             priority
//             src={UpcomingBg}
//             alt="UpcomingBg"
//             layout="fill"
//             objectFit="contain"
//           />
//         </div>
//       </div>
//       <div className="px-4">
//         <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-col pt-12 pb-4 lg:pb-8 xl:pt-16">
//           <h2 id="PGDM-Course-Highlights" className="dmtims-title pt-12">
//             Upcoming Events
//           </h2>
//         </div>
//       </div>
//       <div className="mx-auto max-w-screen-2xl px-4 py-8">
//         <div className="relative z-10 flex flex-col md:flex-row">
//           <div className="flex h-40 flex-col justify-center gap-4 bg-gradient-to-b from-[#FFB800] to-[#CC9300] p-4 md:h-96 md:w-1/2 md:gap-8 md:px-12 lg:h-[450px] xl:h-[600px] xl:gap-16 2xl:h-[700px]">
//             <div>
//               <p className="font-condensed text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
//                 PGDM 2023
//               </p>
//               <p className="font-condensed text-4xl text-white lg:text-5xl xl:text-6xl">
//                 Commencement
//               </p>
//             </div>
//             <p className="font-condensed text-lg text-white lg:text-xl xl:text-2xl">
//               15th September 2023
//             </p>
//           </div>
//           <div className="relative h-60 cursor-pointer items-center md:h-96 md:w-1/2 lg:h-[450px] xl:h-[600px] 2xl:h-[700px]">
//             <Image
//               priority
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/1139709688653557810/Rectangle_4654.png"
//               }
//               alt="UpcomingBg"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;









/** my code */
import Image from "next/legacy/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cardBg from "./images/cardImage.png";
import UpcomingBg from "./images/UpcomingBg.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import SmallEventCard from "../SmallEventCard/SmallEventCard";
import MediumEventCard from "../MediumEventCard/MediumEventCard";
import upcomingBg from '../../public/newImages/upcomingBg.png'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const UpcomingEvents = () => {
  const events = [
    {
      id: 0,
      img: "https://cdn.discordapp.com/attachments/929834261568167986/1139104889864204308/Rectangle_168.png",
      title:
        "Robin Banerjee on his new book: Business Crimes Now Bigger, Broader,..",
      desc: null,
      date: "21st Dec,2021",
    },
    {
      id: 1,
      img: "https://cdn.discordapp.com/attachments/929834261568167986/1139105125256929280/Rectangle_733.png",
      title: "Crescendo :Rise To Express | Galaxia iFest 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit adipiscing at fermentum duis et quam. Fames ultricies convallis nisl diam ut sollicitudin aliquam sit in. Convallis et.",
      date: "21st Dec,2021",
    },
    {
      id: 2,
      img: "https://cdn.discordapp.com/attachments/929834261568167986/1139105735423316008/Rectangle_172.png",
      title: `Astitva : Art & Music
    Festival | Galaxia iFest
    2021`,
      desc: null,
      date: "21st Dec,2021",
    },
    {
      id: 4,
      img: "https://cdn.discordapp.com/attachments/929834261568167986/1139105859385950239/Rectangle_168_1.png",
      title: "PGDM 2023 Commencement: 15th September 2023",
      desc: null,
      date: "15th Sep,2023",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute right-0 top-6 h-1/2 w-2/3 sm:w-1/2 xl:top-16">
        <div className="relative mb-6 h-full cursor-pointer items-center">
          {/* <Image
            priority
            src={UpcomingBg}
            alt="UpcomingBg"
            layout="fill"
            objectFit="contain"
          /> */}
        </div>
      </div>
      <div className="px-4">
        <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-col pt-12 pb-4 lg:pb-8 xl:pt-16">
          <h2 id="PGDM-Course-Highlights" className="dmtims-title pt-12">
            Upcoming Events
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 py-8">
        <div className="relative z-10 flex flex-col md:flex-row">
          <div className="flex h-40 flex-col justify-center gap-4 bg-gradient-to-b from-[#FFB800] to-[#CC9300] p-4 md:h-96 md:w-1/2 md:gap-8 md:px-12 lg:h-[450px] xl:h-[600px] xl:gap-16 2xl:h-[700px]">
            <div>
              <p className="font-condensed text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
                PGDM 2023
              </p>
              <p className="font-condensed text-4xl text-white lg:text-5xl xl:text-6xl">
                Commencement
              </p>
            </div>
            <p className="font-condensed text-lg text-white lg:text-xl xl:text-2xl">
              15th September 2023
            </p>
          </div>
          <div className="relative h-60 cursor-pointer items-center md:h-96 md:w-1/2 lg:h-[450px] xl:h-[600px] 2xl:h-[700px]">
            <Image
              priority
              src={upcomingBg}
              alt="UpcomingBg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

