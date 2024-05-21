// import Image from "next/legacy/image";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";

// import "swiper/css/grid";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/free-mode";

// // import Swiper core and required modules
// import SwiperCore, {
//   Grid,
//   Pagination,
//   Scrollbar,
//   FreeMode,
//   Autoplay,
// } from "swiper";

// // install Swiper modules
// SwiperCore.use([Grid, Pagination, Scrollbar, FreeMode, Autoplay]);

// const FestCulture = () => {
//   const newImages = [
//     {
//       id: 20,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087359755825188894/WhatsApp_Image_2023-03-20_at_5.49.15_PM.jpeg",
//     },
//     {
//       id: 21,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087359752679477249/WhatsApp_Image_2023-03-20_at_5.49.15_PM_1.jpeg",
//     },
//     {
//       id: 22,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087359752197115996/WhatsApp_Image_2023-03-20_at_5.49.16_PM_1.jpeg",
//     },
//     {
//       id: 23,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087359751958056980/WhatsApp_Image_2023-03-20_at_5.50.01_PM.jpeg",
//     },
//     {
//       id: 24,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087359752457175110/WhatsApp_Image_2023-03-20_at_5.49.16_PM.jpeg",
//     },
//     {
//       id: 25,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087359751718977606/WhatsApp_Image_2023-03-20_at_5.50.53_PM.jpeg",
//     },
//     {
//       id: 13,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087346051993837649/AAVAHAN_2023_day_3_-1.webp",
//     },
//     {
//       id: 14,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087346052316811314/AAVAHAN_2023_day_3_-2.webp",
//     },
//     {
//       id: 15,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087346052652343307/AAVAHAN_2023_day_3_-3.webp",
//     },
//     {
//       id: 16,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087346052962734080/AAVAHAN_2023_day_3_-4.webp",
//     },
//     {
//       id: 17,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087346053348597870/AAVAHAN_2023_day_3_-5.webp",
//     },
//     {
//       id: 18,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1087346053671571496/AAVAHAN_2023_day_3_-6.webp",
//     },
//   ];

//   const images = [
//     {
//       id: 0,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/933774505573253233/Frame_1511.png",
//     },
//     {
//       id: 1,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/933776197916196864/Frame_1512.png",
//     },
//     {
//       id: 2,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/933776232120725574/Frame_1513.png",
//     },
//     {
//       id: 3,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/933776278060924968/Frame_1513_1.png",
//     },
//     {
//       id: 4,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/933776315318952027/Frame_1518.png",
//     },
//     {
//       id: 5,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/933776366241988608/Frame_1514.png",
//     },
//     {
//       id: 6,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/933776419522248706/Frame_1515.png",
//     },
//     {
//       id: 7,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/933776453227671612/Frame_1516.png",
//     },
//     {
//       id: 8,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/933776489051217970/Frame_1516_1.png",
//     },
//     {
//       id: 9,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/968155490381094933/Frame_1519.png",
//     },
//     {
//       id: 10,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/968155490687266937/Frame_1520.png",
//     },
//     {
//       id: 11,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/968155491077341215/Frame_1522.png",
//     },
//     {
//       id: 12,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/968155491337379850/Frame_1521.png",
//     },
//   ];

//   return (
//     <section className="flex flex-col bg-[#4C477A] px-4">
//       <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
//         <h2 id="Fest-and-Culture" className="dmtims-title text-white">
//           Fest & Culture
//         </h2>
//         <Swiper
//           className="mb-4 pb-6"
//           slidesPerView={1}
//           spaceBetween={20}
//           scrollbar={{ draggable: true }}
//           grid={{ rows: 2, fill: "row" }}
//           autoplay={{
//             delay: 10000,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             "768": {
//               slidesPerView: 2,
//             },
//             "991": {
//               slidesPerView: 2,
//             },
//             "1200": {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           <SwiperSlide className="flex flex-col">
//             <div className="relative h-72 2xl:h-80">
//               <video
//                 className="h-full w-full object-cover"
//                 src="/videos/About-DMTIMS.mp4"
//                 controls
//                 muted
//               ></video>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="flex flex-col">
//             <div className="relative h-72 2xl:h-80">
//               <video
//                 className="h-full w-full object-cover"
//                 src="/videos/Internship-Diaries.mp4"
//                 controls
//                 muted
//               ></video>
//             </div>
//           </SwiperSlide>
//           {newImages.map(({ id, img }) => (
//             <SwiperSlide key={id} className="flex flex-col">
//               <div className="relative h-72 2xl:h-80">
//                 <Image
//                   priority
//                   src={img}
//                   alt={"img" + id}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//           <SwiperSlide className="flex flex-col">
//             <div className="relative h-72 2xl:h-80">
//               <video
//                 className="h-full w-full object-cover"
//                 src="/videos/diwali-celebrations.mp4"
//                 controls
//                 muted
//               ></video>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="flex flex-col">
//             <div className="relative h-72 2xl:h-80">
//               <video
//                 className="h-full w-full object-cover"
//                 src="/videos/Shashwat-Foundation.mp4"
//                 controls
//                 muted
//               ></video>
//             </div>
//           </SwiperSlide>
//           {images.map(({ id, img }) => (
//             <SwiperSlide key={id} className="flex flex-col">
//               <div className="relative h-72 2xl:h-80">
//                 <Image
//                   priority
//                   src={img}
//                   alt={"img" + id}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default FestCulture;











/**my code */
import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import image20 from '../../public/newImages/image20.webp'
import image21 from '../../public/newImages/image21.webp'
import image22 from '../../public/newImages/image22.webp'
import image23 from '../../public/newImages/image23.webp'
import image24 from '../../public/newImages/image24.webp'
import image25 from '../../public/newImages/image25.webp'
import image13 from '../../public/newImages/image13.webp'
import image14 from '../../public/newImages/image14.webp'
import image15 from '../../public/newImages/image15.webp'
import image16 from '../../public/newImages/image16.webp'
import image17 from '../../public/newImages/image17.webp'
// import image from '../../public/newImages/image18.webp'

// import Swiper core and required modules
import SwiperCore, {
  Grid,
  Pagination,
  Scrollbar,
  FreeMode,
  Autoplay,
} from "swiper";

// install Swiper modules
SwiperCore.use([Grid, Pagination, Scrollbar, FreeMode, Autoplay]);

const FestCulture = () => {
  const newImages = [
    {
      id: 20,
      img: "/newImages/image20.webp",
     },
    {
      id: 21,
      img: "/newImages/image21.webp",
     },
    {
      id: 22,
      img: "/newImages/image22.webp",
     },
    {
      id: 23,
      img: "/newImages/image23.webp",
    },
    {
      id: 24,
      img: "/newImages/image24.webp",
    },
    {
      id: 25,
      img: "/newImages/image25.webp",
     },
    {
      id: 13,
      img:"/newImages/image13.webp",
     },
    {
      id: 14,
      img: "/newImages/image14.webp",
    },
    {
      id: 15,
      img: "/newImages/image15.webp",
     },
    {
      id: 16,
      img:"/newImages/image16.webp",
      },
    {
      id: 17,
      img: "/newImages/image17.webp",
     },
    {
      id: 18,
      img: "/newImages/image18.webp",
     },
  ];

  const images = [
    {
      id: 0,img:"/newImages/image0.webp"    },
    {
      id: 1,img:"/newImages/image1.webp"    },
    {
      id: 2,img:"/newImages/image2.webp"    },
    {
      id: 3,img:"/newImages/image3.webp"    },
    {
      id: 4,img:"/newImages/image4.webp"    },
    {
      id: 5,img:"/newImages/image5.webp"    },
    {
      id: 6,img:"/newImages/image6.webp"    },
    {
      id: 7,img:"/newImages/image7.webp"    },
    {
      id: 8,img:"/newImages/image8.webp"    },
    {
      id: 9,img:"/newImages/image9.webp"
    },
    {
      id: 10,img:"/newImages/image10.webp"    },
    {
      id: 11,img:"/newImages/image11.webp"    },
    {
      id: 12,img:"/newImages/image12.webp"    },
  ];

  return (
    <section className="flex flex-col bg-[#4C477A] px-4">
      <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
        <h2 id="Fest-and-Culture" className="dmtims-title text-white">
          Fest & Culture
        </h2>
        <Swiper
          className="mb-4 pb-6"
          slidesPerView={1}
          spaceBetween={20}
          scrollbar={{ draggable: true }}
          grid={{ rows: 2, fill: "row" }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "768": {
              slidesPerView: 2,
            },
            "991": {
              slidesPerView: 2,
            },
            "1200": {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="flex flex-col">
            <div className="relative h-72 2xl:h-80">
              <video
                className="h-full w-full object-cover"
                src="/videos/About-DMTIMS.mp4"
                controls
                muted
              ></video>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="relative h-72 2xl:h-80">
              <video
                className="h-full w-full object-cover"
                src="/videos/Internship-Diaries.mp4"
                controls
                muted
              ></video>
            </div>
          </SwiperSlide>
          {newImages.map(({ id, img }) => (
            <SwiperSlide key={id} className="flex flex-col">
              <div className="relative h-72 2xl:h-80">
                <Image
                  priority
                  src={img}
                  alt={"img" + id}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide className="flex flex-col">
            <div className="relative h-72 2xl:h-80">
              <video
                className="h-full w-full object-cover"
                src="/videos/diwali-celebrations.mp4"
                controls
                muted
              ></video>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
            <div className="relative h-72 2xl:h-80">
              <video
                className="h-full w-full object-cover"
                src="/videos/Shashwat-Foundation.mp4"
                controls
                muted
              ></video>
            </div>
          </SwiperSlide>
          {images.map(({ id, img }) => (
            <SwiperSlide key={id} className="flex flex-col">
              <div className="relative h-72 2xl:h-80">
                <Image
                  priority
                  src={img}
                  alt={"img" + id}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FestCulture;
