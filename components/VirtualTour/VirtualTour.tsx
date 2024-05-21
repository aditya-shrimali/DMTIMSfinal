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

// const VirtualTour = () => {
//   const slides = [
//     {
//       id: 0,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930453467032592454/img1.png",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 1,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930453606346395758/img2.png",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 2,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930453901021446184/img3.png",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 3,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930454173546336266/Group_1227.png",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 4,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930455071383249006/img5.png",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 5,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930455400657080380/img6.png",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 6,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930458912115818496/unsplash_bgQgAKagQB4_2.png",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 7,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930458567163662416/unsplash_bgQgAKagQB4_1.png",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 8,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930456328902697000/img9.png",
//       title: "10th Jan 2022, Kota",
//     },
//     {
//       id: 9,
//       image:
//         "https://cdn.discordapp.com/attachments/915203168391028806/930517638935879741/unknown.png",
//       title: "11th Jan 2022, Ajmer",
//     },
//     {
//       id: 10,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/931430729085243412/unknown.png",
//       title: "13th Jan 2022, Gwalior",
//     },
//     {
//       id: 11,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/931430729995399189/unknown.png",
//       title: "13th Jan 2022, Gwalior",
//     },
//     {
//       id: 12,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/931430730624561162/unknown.png",
//       title: "13th Jan 2022, Gwalior",
//     },
//     {
//       id: 13,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/931430731295637524/IMG_20220112_095553_gwalior.jpg",
//       title: "13th Jan 2022, Gwalior",
//     },
//     {
//       id: 14,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/931430732017041438/IMG_20220112_095323_gwalior.jpg",
//       title: "13th Jan 2022, Gwalior",
//     },
//     {
//       id: 15,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/933727758553591848/image_216.png",
//       title: "18th Jan 2022, Nagpur",
//     },
//     {
//       id: 16,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/933727799758446692/image_217.png",
//       title: "18th Jan 2022, Nagpur",
//     },
//   ];

//   return (
//     <section className="flex flex-col bg-white px-4">
//       <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
//         <h2 id="Virtual-Tour" className="dmtims-title pb-4 text-[#4C477A]">
//           Virtual Tour
//         </h2>
//         <p className="dmtims-subtitle">Experience Us Live!</p>
//         <video className="w-full" controls>
//           <source src="/videos/Life_at_DMTIMS.mp4" />
//         </video>
//       </div>
//     </section>
//   );
// };

// export default VirtualTour;













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

const VirtualTour = () => {
  const slides = [
    {
      id: 0,
      // image:vt0,
      title: "10th Jan 2022, Kota",
    },
    {
      id: 1,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/930453606346395758/img2.png",
      title: "10th Jan 2022, Kota",
    },
    {
      id: 2,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/930453901021446184/img3.png",
      title: "10th Jan 2022, Kota",
    },
    {
      id: 3,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/930454173546336266/Group_1227.png",
      title: "10th Jan 2022, Kota",
    },
    {
      id: 4,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/930455071383249006/img5.png",
      title: "10th Jan 2022, Kota",
    },
    {
      id: 5,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/930455400657080380/img6.png",
      title: "10th Jan 2022, Kota",
    },
    {
      id: 6,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/930458912115818496/unsplash_bgQgAKagQB4_2.png",
      title: "10th Jan 2022, Kota",
    },
    {
      id: 7,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/930458567163662416/unsplash_bgQgAKagQB4_1.png",
      title: "10th Jan 2022, Kota",
    },
    {
      id: 8,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/930456328902697000/img9.png",
      title: "10th Jan 2022, Kota",
    },
    {
      id: 9,
      image:
        "https://cdn.discordapp.com/attachments/915203168391028806/930517638935879741/unknown.png",
      title: "11th Jan 2022, Ajmer",
    },
    {
      id: 10,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/931430729085243412/unknown.png",
      title: "13th Jan 2022, Gwalior",
    },
    {
      id: 11,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/931430729995399189/unknown.png",
      title: "13th Jan 2022, Gwalior",
    },
    {
      id: 12,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/931430730624561162/unknown.png",
      title: "13th Jan 2022, Gwalior",
    },
    {
      id: 13,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/931430731295637524/IMG_20220112_095553_gwalior.jpg",
      title: "13th Jan 2022, Gwalior",
    },
    {
      id: 14,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/931430732017041438/IMG_20220112_095323_gwalior.jpg",
      title: "13th Jan 2022, Gwalior",
    },
    {
      id: 15,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/933727758553591848/image_216.png",
      title: "18th Jan 2022, Nagpur",
    },
    {
      id: 16,
      image:
        "https://cdn.discordapp.com/attachments/929834261568167986/933727799758446692/image_217.png",
      title: "18th Jan 2022, Nagpur",
    },
  ];

  return (
    <section className="flex flex-col bg-white px-4">
      <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
        <h2 id="Virtual-Tour" className="dmtims-title pb-4 text-[#4C477A]">
          Virtual Tour
        </h2>
        <p className="dmtims-subtitle">Experience Us Live!</p>
        <video className="w-full" controls>
          <source src="/videos/Life_at_DMTIMS.mp4" />
        </video>
      </div>
    </section>
  );
};

export default VirtualTour;
