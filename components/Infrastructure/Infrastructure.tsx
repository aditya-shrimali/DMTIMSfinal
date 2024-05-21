// import Image from "next/legacy/image";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import ConferenceRoom from "./images/ConferenceRoom.webp";
// import Reception from "./images/Reception.webp";
// import GirlsCommonRoom from "./images/GirlsCommonRoom.webp";
// import BoysCommonRoom from "./images/BoysCommonRoom.webp";
// import ClassRoom from "./images/ClassRoom.webp";
// import FacultyRoom from "./images/FacultyRoom.webp";
// import ComputerLab from "./images/ComputerLab.webp";
// import Library from "./images/Library.webp";
// import Elevator from "./images/Elevator.webp";
// import { ArrowRightIcon } from "@heroicons/react/outline";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// // import Swiper core and required modules
// import SwiperCore, {
//   FreeMode,
//   Navigation,
//   Thumbs,
//   Autoplay,
//   EffectFade,
// } from "swiper";

// // install Swiper modules
// SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay, EffectFade]);

// const Infrastructure = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
//   const [index, setIndex] = useState<number>();

//   const infrastructures = [
//     {
//       id: 0,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/963314520678367302/unsplash_bgQgAKagQB4_5.webp",
//       title: "Campus",
//       description: `Where memories are made`,
//     },
//     {
//       id: 1,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1086287163181776966/PXL_20230104_121716483.NIGHT.jpg",
//       title: "Reception",
//       description: "The first step towards fulfilling your dreams",
//     },
//     {
//       id: 23,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1086287162925928549/121A6902.jpg",
//       title: "Lobby",
//       description: "Path towards fulfilling your dreams",
//     },
//     {
//       id: 2,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1116680709122314250/WhatsApp_Image_2023-06-09_at_4.19.45_PM.jpeg",
//       title: "Classroom",
//       description: "Where learnings begin",
//     },
//     {
//       id: 3,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/963315952118792202/Untitled_1.webp",
//       title: "Conference Room",
//       description: "Where ideas come to life",
//     },
//     {
//       id: 4,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/963315960155082772/unsplash_bgQgAKagQB4_7.webp",
//       title: "Computer Lab",
//       description: "Your date with the digital world",
//     },
//     {
//       id: 5,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1086287163513110528/PXL_20230116_044716222.jpg",
//       title: "Library",
//       description: "Your destination for knowledge",
//     },
//     {
//       id: 6,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/963316304327094363/Untitled_2.webp",
//       title: "Auditorium",
//       description: "Witness excellence and get inspired",
//     },
//     {
//       id: 7,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/963316311478390784/Untitled_3.webp",
//       title: "Canteen",
//       description: "Where food, friendships and conversations are shared",
//     },
//     {
//       id: 8,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1116680517941731358/Rectangle_1322.png",
//       title: "Common Room",
//       description: "Where bonds are strengthened",
//     },
//     {
//       id: 9,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/963316763297218580/unsplash_bgQgAKagQB4_10.webp",
//       title: "Hostel",
//       description: "A Home away from Home",
//     },
//   ];

//   return (
//     <section className="relative pt-4">
//       <div className="absolute z-10 flex w-full flex-col p-4">
//         <div className="mx-auto flex w-full max-w-screen-2xl flex-grow flex-col lg:my-4">
//           <h2
//             id="Infrastructure"
//             className="pt-6 text-5xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl xl:pt-8 xl:text-8xl 2xl:pt-10"
//           >
//             Infrastructure
//           </h2>
//         </div>
//       </div>
//       <Swiper
//         loop={true}
//         navigation={{
//           nextEl: ".next",
//         }}
//         allowTouchMove={false}
//         onSlideChange={(props) => setIndex(props.realIndex)}
//         thumbs={{
//           swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//         }}
//         autoplay={{
//           delay: 6000,
//           pauseOnMouseEnter: true,
//         }}
//       >
//         {infrastructures.map(({ id, image, title, description }) => (
//           <SwiperSlide
//             key={id}
//             className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
//           >
//             <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
//               <Image
//                 priority
//                 src={image}
//                 alt={title}
//                 layout="fill"
//                 objectFit="cover"
//                 objectPosition="left"
//               />
//             </div>
//             <div className="absolute bottom-0 z-20 flex w-full flex-col p-4">
//               <div className="mx-auto flex w-full max-w-screen-2xl items-end pb-2 lg:pb-4">
//                 <div className="flex flex-grow flex-col">
//                   <p className="pb-2 text-2xl text-white lg:text-3xl">
//                     {title}
//                   </p>
//                   <p className="2xl:1/2 text-sm text-white md:w-5/6 lg:w-4/5 lg:text-base xl:w-2/3">
//                     {description}
//                   </p>
//                 </div>
//                 <ArrowRightIcon className="next ml-4 h-12 flex-shrink-0 transform cursor-pointer rounded-full border-2 border-[#FFB800] p-1 text-white transition duration-300 group-hover:rotate-45 lg:h-14 lg:p-2" />
//               </div>
//             </div>
//             <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-b from-[rgba(40,49,74,0)]  to-[rgba(40,49,74,1)]" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="flex flex-col px-4">
//         <div className="relative mx-auto w-full max-w-screen-2xl py-2 lg:my-4">
//           <Swiper
//             loop={true}
//             onSwiper={setThumbsSwiper!}
//             slidesPerView={"auto"}
//             watchSlidesProgress={true}
//             className="py-4"
//           >
//             {infrastructures.map(({ id, image, title }, i) => (
//               <SwiperSlide
//                 key={id}
//                 className={`mx-4 w-[250px] sm:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px] ${
//                   index === i ? "scale-105" : "scale-100"
//                 } transform cursor-pointer transition duration-300`}
//               >
//                 <div className="relative h-[125px] sm:h-[150px] lg:h-[175px] xl:h-[200px] 2xl:h-[225px]">
//                   <Image
//                     priority
//                     src={image}
//                     alt={title}
//                     layout="fill"
//                     objectFit="cover"
//                     objectPosition="left"
//                   />
//                 </div>
//                 <p className="absolute bottom-0 z-20 w-full p-2 text-xs text-white md:text-sm xl:p-4 xl:text-base">
//                   {title}
//                 </p>
//                 <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-b  from-[rgba(40,49,74,0)] to-[rgba(40,49,74,1)]" />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[rgba(255,255,255,0.01)]  to-white md:w-32 lg:w-40" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Infrastructure;

















/** my code */
import Image from "next/legacy/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ConferenceRoom from "./images/ConferenceRoom.webp";
import Reception from "./images/Reception.webp";
import GirlsCommonRoom from "./images/GirlsCommonRoom.webp";
import BoysCommonRoom from "./images/BoysCommonRoom.webp";
import ClassRoom from "./images/ClassRoom.webp";
import FacultyRoom from "./images/FacultyRoom.webp";
import ComputerLab from "./images/ComputerLab.webp";
import Library from "./images/Library.webp";
import Elevator from "./images/Elevator.webp";
import { ArrowRightIcon } from "@heroicons/react/outline";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import Swiper core and required modules
import SwiperCore, {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay, EffectFade]);

const Infrastructure = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [index, setIndex] = useState<number>();

  const infrastructures = [
    {
      id: 0,
      image:
        "/newImages/campus.webp",
      title: "Campus",
      description: `Where memories are made`,
    },
    {
      id: 1,
      image:
        "/newImages/reception.webp",
      title: "Reception",
      description: "The first step towards fulfilling your dreams",
    },
    {
      id: 23,
      image:
        "/newImages/lobby.webp",
      title: "Lobby",
      description: "Path towards fulfilling your dreams",
    },
    {
      id: 2,
      image:
        "/newImages/classroom.webp",
      title: "Classroom",
      description: "Where learnings begin",
    },
    {
      id: 3,
      image:
        "/newImages/conferenceRoom.webp",
      title: "Conference Room",
      description: "Where ideas come to life",
    },
    {
      id: 4,
      image:
        "/newImages/computerLab.webp",
      title: "Computer Lab",
      description: "Your date with the digital world",
    },
    {
      id: 5,
      image:
        "/newImages/library.webp",
      title: "Library",
      description: "Your destination for knowledge",
    },
    {
      id: 6,
      image:
        "/newImages/auditorium.webp",
      title: "Auditorium",
      description: "Witness excellence and get inspired",
    },
    {
      id: 7,
      image:
        "/newImages/canteen.webp",
      title: "Canteen",
      description: "Where food, friendships and conversations are shared",
    },
    {
      id: 8,
      image:
        "/newImages/commonRoom.webp",
      title: "Common Room",
      description: "Where bonds are strengthened",
    },
    {
      id: 9,
      image:
        "/newImages/hostel.webp",
      title: "Hostel",
      description: "A Home away from Home",
    },
  ];

  return (
    <section className="relative pt-4">
      <div className="absolute z-10 flex w-full flex-col p-4">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-grow flex-col lg:my-4">
          <h2
            id="Infrastructure"
            className="pt-6 text-5xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl xl:pt-8 xl:text-8xl 2xl:pt-10"
          >
            Infrastructure
          </h2>
        </div>
      </div>
      <Swiper
        loop={true}
        navigation={{
          nextEl: ".next",
        }}
        allowTouchMove={false}
        onSlideChange={(props) => setIndex(props.realIndex)}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        autoplay={{
          delay: 6000,
          pauseOnMouseEnter: true,
        }}
      >
        {infrastructures.map(({ id, image, title, description }) => (
          <SwiperSlide
            key={id}
            className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
          >
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
              <Image
                priority
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                objectPosition="left"
              />
            </div>
            <div className="absolute bottom-0 z-20 flex w-full flex-col p-4">
              <div className="mx-auto flex w-full max-w-screen-2xl items-end pb-2 lg:pb-4">
                <div className="flex flex-grow flex-col">
                  <p className="pb-2 text-2xl text-white lg:text-3xl">
                    {title}
                  </p>
                  <p className="2xl:1/2 text-sm text-white md:w-5/6 lg:w-4/5 lg:text-base xl:w-2/3">
                    {description}
                  </p>
                </div>
                <ArrowRightIcon className="next ml-4 h-12 flex-shrink-0 transform cursor-pointer rounded-full border-2 border-[#FFB800] p-1 text-white transition duration-300 group-hover:rotate-45 lg:h-14 lg:p-2" />
              </div>
            </div>
            <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-b from-[rgba(40,49,74,0)]  to-[rgba(40,49,74,1)]" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col px-4">
        <div className="relative mx-auto w-full max-w-screen-2xl py-2 lg:my-4">
          <Swiper
            loop={true}
            onSwiper={setThumbsSwiper!}
            slidesPerView={"auto"}
            watchSlidesProgress={true}
            className="py-4"
          >
            {infrastructures.map(({ id, image, title }, i) => (
              <SwiperSlide
                key={id}
                className={`mx-4 w-[250px] sm:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px] ${
                  index === i ? "scale-105" : "scale-100"
                } transform cursor-pointer transition duration-300`}
              >
                <div className="relative h-[125px] sm:h-[150px] lg:h-[175px] xl:h-[200px] 2xl:h-[225px]">
                  <Image
                    priority
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                  />
                </div>
                <p className="absolute bottom-0 z-20 w-full p-2 text-xs text-white md:text-sm xl:p-4 xl:text-base">
                  {title}
                </p>
                <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-b  from-[rgba(40,49,74,0)] to-[rgba(40,49,74,1)]" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[rgba(255,255,255,0.01)]  to-white md:w-32 lg:w-40" />
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
