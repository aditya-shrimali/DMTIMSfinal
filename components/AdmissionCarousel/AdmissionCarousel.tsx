// import Image from "next/legacy/image";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
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

// const AdmissionCarousel = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
//   const [index, setIndex] = useState(0);

//   const slides = [
//     {
//       id: 0,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946710611771916328/img1.webp",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 1,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946710738200842300/img2.webp",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 2,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946710871156084756/img3.webp",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 3,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946711006468522044/Group_1227.webp",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 4,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946711158616899634/img5.webp",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 5,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946711286866116608/img6.webp",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 6,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946711450041348116/unsplash_bgQgAKagQB4_2.webp",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 7,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946711756342980618/unsplash_bgQgAKagQB4_1.webp",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 8,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946711876207783956/img9.webp",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 9,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946712000858292304/unknown.webp",
//       title: "11th Jan 2022, Ajmer",
//     },
//     {
//       id: 10,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946712158694146078/unknown_1.webp",
//       title: "13th Jan 2022, Gwalior",
//     },
//     {
//       id: 11,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946712320086786128/unknown_2.webp",
//       title: "13th Jan 2022, Gwalior",
//     },
//     {
//       id: 12,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946712451620143134/unknown_3.webp",
//       title: "13th Jan 2022, Gwalior",
//     },
//     {
//       id: 13,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946712616519213076/IMG_20220112_095553_gwalior.webp",
//       title: "13th Jan 2022, Gwalior",
//     },
//     {
//       id: 14,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946712743052967956/IMG_20220112_095323_gwalior.webp",
//       title: "13th Jan 2022, Gwalior",
//     },
//     {
//       id: 15,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946712866885603338/image_216.webp",
//       title: "18th Jan 2022, Nagpur",
//     },
//     {
//       id: 16,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946712984149983243/image_217.webp",
//       title: "18th Jan 2022, Nagpur",
//     },
//     {
//       id: 17,
//       image:
//         "https://cdn.discordapp.com/attachments/915203168391028806/951754991566217256/Inspiring_Education_Siliguri_Event_1.png",
//       title: "10th March 2022, Hotel Clover, Siliguri",
//     },
//     {
//       id: 18,
//       image:
//         "https://cdn.discordapp.com/attachments/915203168391028806/951754992178573342/Inspiring_Education_Siliguri_Event_2.png",
//       title: "10th March 2022, Hotel Clover, Siliguri",
//     },
//   ];
//   slides.reverse();

//   return (
//     <section className="relative pt-4">
//       <div className="absolute z-10 flex w-full flex-col p-4">
//         <div className="mx-auto flex w-full max-w-screen-2xl flex-grow flex-col lg:my-4">
//           <h2 className="pt-2 text-3xl font-bold tracking-tighter text-white sm:pt-4 sm:text-4xl md:text-5xl lg:text-7xl xl:pt-8 xl:text-8xl 2xl:pt-10">
//             Padh le Beta 2022
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
//         thumbs={thumbsSwiper && { swiper: thumbsSwiper }}
//         autoplay={{
//           delay: 6000,
//           pauseOnMouseEnter: true,
//         }}
//       >
//         {slides.map(({ id, image, title }) => (
//           <SwiperSlide
//             key={id}
//             className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
//           >
//             <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
//               <Image
//                 priority
//                 src={image}
//                 alt={"image-" + title}
//                 layout="fill"
//                 objectFit="cover"
//                 objectPosition="left"
//               />
//             </div>
//             <div className="absolute bottom-0 z-20 flex w-full flex-col p-4">
//               <div className="mx-auto flex w-full max-w-screen-2xl items-end pb-2 lg:pb-4">
//                 <div className="flex flex-grow flex-col">
//                   <p className="2xl:1/2 text-sm text-white md:w-5/6 lg:w-4/5 lg:text-base xl:w-2/3">
//                     {title}
//                   </p>
//                 </div>
//                 <ArrowRightIcon className="next ml-4 h-12 flex-shrink-0 transform cursor-pointer rounded-full border-2 border-[#FFB800] p-1 text-white transition duration-300 group-hover:rotate-45 lg:h-14 lg:p-2" />
//               </div>
//             </div>
//             <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-b  from-[rgba(40,49,74,0)] to-[rgba(40,49,74,1)]" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="flex flex-col px-4">
//         <div className="relative mx-auto w-full max-w-screen-2xl py-2 lg:my-4">
//           <Swiper
//             loop={true}
//             onSwiper={setThumbsSwiper}
//             slidesPerView={"auto"}
//             watchSlidesProgress={true}
//             className="py-4"
//           >
//             {slides.map(({ id, image, title }) => (
//               <SwiperSlide
//                 key={id}
//                 className={`mx-1 w-[150px] sm:mx-2 sm:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[350px] ${
//                   slides.length - index - 1 === id ? "scale-105" : "scale-100"
//                 } transform cursor-pointer transition duration-300`}
//               >
//                 <div className="relative h-[75px] sm:h-[100px] lg:h-[125px] xl:h-[150px] 2xl:h-[175px]">
//                   <Image
//                     priority
//                     src={image}
//                     alt={"image-" + title}
//                     layout="fill"
//                     objectFit="cover"
//                     objectPosition="left"
//                   />
//                 </div>
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

// export default AdmissionCarousel;









/**my code */
import Image from "next/legacy/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightIcon } from "@heroicons/react/outline";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import jan0 from '../../public/newImages/jan0.webp';
import jan1 from '../../public/newImages/jan1.webp';
import jan2 from '../../public/newImages/jan2.webp';
import jan3 from '../../public/newImages/jan3.webp';
import jan4 from '../../public/newImages/jan4.webp';
import jan5 from '../../public/newImages/jan5.webp';
import jan6 from '../../public/newImages/jan6.webp';
import jan7 from '../../public/newImages/jan7.webp';
import jan8 from '../../public/newImages/jan8.webp';
import jan9 from '../../public/newImages/jan9.webp';
import jan10 from '../../public/newImages/jan10.webp';
import jan11 from '../../public/newImages/jan11.webp';
import jan12 from '../../public/newImages/jan12.webp';
import jan13 from '../../public/newImages/jan13.webp';
import jan14 from '../../public/newImages/jan14.webp';
import jan15 from '../../public/newImages/jan15.webp';
import jan16 from '../../public/newImages/jan16.webp';
import jan17 from '../../public/newImages/jan17.webp';
import jan18 from '../../public/newImages/jan18.webp';
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

const AdmissionCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [index, setIndex] = useState(0);

  const slides = [
    {
      id: 0,
      image:jan0,
      title: "10th Jan 2022, Kota",
    },
    {
      id: 1,
      image:jan1,
      title: "10th Jan 2022, Kota",
    },
    {
      id: 2,
      image:jan2,
      title: "10th Jan 2022, Kota",
    },
    {
      id: 3,
      image:jan3,
      title: "10th Jan 2022, Kota",
    },
    {
      id: 4,
      image:jan4,
      title: "10th Jan 2022, Kota",
    },
    {
      id: 5,
      image:jan5,
      title: "10th Jan 2022, Kota",
    },
    {
      id: 6,
      image:jan6,
      title: "10th Jan 2022, Kota",
    },
    {
      id: 7,
      image:jan7,
      title: "10th Jan 2022, Kota",
    },
    {
      id: 8,
      image:jan8,
      title: "10th Jan 2022, Kota",
    },
    {
      id: 9,
      image:jan9,
      title: "11th Jan 2022, Ajmer",
    },
    {
      id: 10,
      image:jan10,
      title: "13th Jan 2022, Gwalior",
    },
    {
      id: 11,
      image:jan11,
      title: "13th Jan 2022, Gwalior",
    },
    {
      id: 12,
      image:jan12,
      title: "13th Jan 2022, Gwalior",
    },
    {
      id: 13,
      image:jan13,
      title: "13th Jan 2022, Gwalior",
    },
    {
      id: 14,
      image:jan14,
      title: "13th Jan 2022, Gwalior",
    },
    {
      id: 15,
      image:jan15,
      title: "18th Jan 2022, Nagpur",
    },
    {
      id: 16,
      image:jan16,
      title: "18th Jan 2022, Nagpur",
    },
    {
      id: 17,
      image:jan17,
      title: "10th March 2022, Hotel Clover, Siliguri",
    },
    {
      id: 18,
      image:jan18,
      title: "10th March 2022, Hotel Clover, Siliguri",
    },
  ];
  slides.reverse();

  return (
    <section className="relative pt-4">
      <div className="absolute z-10 flex w-full flex-col p-4">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-grow flex-col lg:my-4">
          <h2 className="pt-2 text-3xl font-bold tracking-tighter text-white sm:pt-4 sm:text-4xl md:text-5xl lg:text-7xl xl:pt-8 xl:text-8xl 2xl:pt-10">
            Padh le Beta 2022
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
        thumbs={thumbsSwiper && { swiper: thumbsSwiper }}
        autoplay={{
          delay: 6000,
          pauseOnMouseEnter: true,
        }}
      >
        {slides.map(({ id, image, title }) => (
          <SwiperSlide
            key={id}
            className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
          >
            <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
              <Image
                priority
                src={image}
                alt={"image-" + title}
                layout="fill"
                objectFit="cover"
                objectPosition="left"
              />
            </div>
            <div className="absolute bottom-0 z-20 flex w-full flex-col p-4">
              <div className="mx-auto flex w-full max-w-screen-2xl items-end pb-2 lg:pb-4">
                <div className="flex flex-grow flex-col">
                  <p className="2xl:1/2 text-sm text-white md:w-5/6 lg:w-4/5 lg:text-base xl:w-2/3">
                    {title}
                  </p>
                </div>
                <ArrowRightIcon className="next ml-4 h-12 flex-shrink-0 transform cursor-pointer rounded-full border-2 border-[#FFB800] p-1 text-white transition duration-300 group-hover:rotate-45 lg:h-14 lg:p-2" />
              </div>
            </div>
            <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-b  from-[rgba(40,49,74,0)] to-[rgba(40,49,74,1)]" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col px-4">
        <div className="relative mx-auto w-full max-w-screen-2xl py-2 lg:my-4">
          <Swiper
            loop={true}
            onSwiper={setThumbsSwiper}
            slidesPerView={"auto"}
            watchSlidesProgress={true}
            className="py-4"
          >
            {slides.map(({ id, image, title }) => (
              <SwiperSlide
                key={id}
                className={`mx-1 w-[150px] sm:mx-2 sm:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[350px] ${
                  slides.length - index - 1 === id ? "scale-105" : "scale-100"
                } transform cursor-pointer transition duration-300`}
              >
                <div className="relative h-[75px] sm:h-[100px] lg:h-[125px] xl:h-[150px] 2xl:h-[175px]">
                  <Image
                    priority
                    src={image}
                    alt={"image-" + title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left"
                  />
                </div>
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

export default AdmissionCarousel;
