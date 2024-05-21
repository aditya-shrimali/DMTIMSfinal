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

// function InductionProgram() {
//   const images = [
//     {
//       id: 0,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1041680360460779520/Mr._Anand_Dhruv.webp",
//     },
//     {
//       id: 1,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1041680360876023848/Mr._Anil_Sriram_Athri.webp",
//     },
//     {
//       id: 2,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1041680361169621102/Mr._Rajan_Dwivedi.webp",
//     },
//     {
//       id: 3,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1041680361521938492/Mr._Samir_Malwade.webp",
//     },
//   ];

//   return (
//     <section className="flex flex-col bg-[#EE3768] px-4">
//       <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
//         <h2 id="Fest-and-Culture" className="dmtims-title text-white">
//           Induction Program
//         </h2>
//         <Swiper
//           className="mb-4 pb-6"
//           slidesPerView={1}
//           spaceBetween={20}
//           scrollbar={{ draggable: true }}
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
//           }}
//         >
//           {images.map(({ id, img }) => (
//             <SwiperSlide key={id} className="flex flex-col">
//               <div className="relative h-[280px] sm:h-[300px] lg:h-[350px] xl:h-[500px] 2xl:h-[550px]">
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
// }

// export default InductionProgram;












/**my code */
import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import samirMalwade from '../../public/newImages/samirMalwade.webp'
import anandDhruv from '../../public/newImages/anandDhruv.webp'
import anilSriram from '../../public/newImages/anilSriram.webp'
import rajanDwivedi from '../../public/newImages/rajanDwivedi.webp'

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

function InductionProgram() {
  const images = [
    {
      id: 0,
      img: anandDhruv,
     },
    {
      id: 1,
      img: anilSriram,
    },
    {
      id: 2,
      img: rajanDwivedi,
    },
    {
      id: 3,
      img: samirMalwade,
    },
  ];

  return (
    <section className="flex flex-col bg-[#EE3768] px-4">
      <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
        <h2 id="Fest-and-Culture" className="dmtims-title text-white">
          Induction Program
        </h2>
        <Swiper
          className="mb-4 pb-6"
          slidesPerView={1}
          spaceBetween={20}
          scrollbar={{ draggable: true }}
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
          }}
        >
          {images.map(({ id, img }) => (
            <SwiperSlide key={id} className="flex flex-col">
              <div className="relative h-[280px] sm:h-[300px] lg:h-[350px] xl:h-[500px] 2xl:h-[550px]">
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
}

export default InductionProgram;

