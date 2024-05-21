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
//   setIsStudentLifeHovered: Dispatch<SetStateAction<boolean>>;
//   isStudentLifeHovered: boolean;
// }

// const StudenLifeMegaMenu = ({
//   setIsStudentLifeHovered,
//   isStudentLifeHovered,
// }: Props) => {
//   const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

//   const slides = [
//     {
//       id: 0,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930924016716349460/pretty-young-girl-holding-book-posing-grey-background_1_12.png",
//     },
//     {
//       id: 1,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930924048496590918/pretty-young-girl-holding-book-posing-grey-background_1_13.png",
//     },
//     {
//       id: 2,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930924086681559102/pretty-young-girl-holding-book-posing-grey-background_1_14.png",
//     },
//     {
//       id: 3,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930924126028304384/pretty-young-girl-holding-book-posing-grey-background_1_15.png",
//     },
//     {
//       id: 4,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930924161944137728/pretty-young-girl-holding-book-posing-grey-background_1_16.png",
//     },
//     {
//       id: 5,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930924191685959700/pretty-young-girl-holding-book-posing-grey-background_1_17.png",
//     },
//     {
//       id: 6,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930924236560797907/pretty-young-girl-holding-book-posing-grey-background_1_18.png",
//     },
//     {
//       id: 7,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930924266617176155/pretty-young-girl-holding-book-posing-grey-background_1_19.png",
//     },
//     {
//       id: 8,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930924292357627954/pretty-young-girl-holding-book-posing-grey-background_1_20.png",
//     },
//     {
//       id: 9,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930924322128789514/pretty-young-girl-holding-book-posing-grey-background_1_21.png",
//     },
//     {
//       id: 10,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/934041361886347304/pretty-young-girl-holding-book-posing-grey-background_1_23.png",
//     },
//   ];

//   const changeSlide = (i: number) => {
//     swiperInstance?.slideTo(i);
//   };

//   return (
//     <div
//       onMouseEnter={() => setIsStudentLifeHovered(true)}
//       onMouseLeave={() => setIsStudentLifeHovered(false)}
//       className={`absolute hidden w-full bg-white px-4 lg:block ${
//         isStudentLifeHovered ? "max-h-[50vh]" : "max-h-0"
//       } transform overflow-hidden shadow-md transition-all duration-300`}
//     >
//       <div className="mx-auto flex w-full max-w-screen-2xl py-8">
//         <div className="grid flex-grow grid-cols-3 gap-4">
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
//                 <a className="mb-2 text-xl font-medium">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Life @DMTIMS
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(1)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Great Campus
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(2)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Comprehensive Library
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(3)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Corporate Seminar Halls
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(4)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Study Exercise
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(5)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Latest Computer Labs
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(6)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Sports Activities
//                 </span>
//               </a>
//             </Link>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link
//                 legacyBehavior
//                 href={"/life-at-DMTIMS#Group-International-Immersions"}
//               >
//                 <a className="mb-4 text-xl font-medium">
//                   <span
//                     onMouseEnter={() => changeSlide(7)}
//                     className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]"
//                   >
//                     Group International Immersions
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <div className="flex">
//               <Link legacyBehavior href={"/life-at-DMTIMS#Activities"}>
//                 <a className="mb-2 text-xl font-medium">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Activities
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Seminars"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(8)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Seminars
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Workshops"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(9)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Workshops
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Guest-Lectures"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(10)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Guest Lectures
//                 </span>
//               </a>
//             </Link>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/life-at-DMTIMS#Fest-and-Culture"}>
//                 <a className="mb-4 text-xl font-medium">
//                   <span
//                     onMouseEnter={() => changeSlide(11)}
//                     className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]"
//                   >
//                     Fest & Culture
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <div className="flex">
//               <Link legacyBehavior href={"/life-at-DMTIMS#Virtual-Tour"}>
//                 <a className="mb-4 text-xl font-medium">
//                   <span
//                     onMouseEnter={() => changeSlide(7)}
//                     className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]"
//                   >
//                     Virtual Tour
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Seminars"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(7)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Experience Us Live
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Workshops"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(7)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Hostel
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Workshops"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(7)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Cafeteria
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/life-at-DMTIMS#Guest-Lectures"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(7)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Language Lab
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
//                     alt={"student-megamenu-img-" + id}
//                     layout="fill"
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

// export default StudenLifeMegaMenu;












/**my changes */
import Image from "next/legacy/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";


//images
import slide0 from '../../public/newImages/slide0.webp';
// import slide0 from '../../public/newImages/slide0.webp';
// import slide0 from '../../public/newImages/slide0.webp';
// import slide0 from '../../public/newImages/slide0.webp';


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
  setIsStudentLifeHovered: Dispatch<SetStateAction<boolean>>;
  isStudentLifeHovered: boolean;
}

const StudenLifeMegaMenu = ({
  setIsStudentLifeHovered,
  isStudentLifeHovered,
}: Props) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  const slides = [
    {
      id: 0,
      image:'/newImages/slide0.webp' },
    {
      id: 1,
      image: '/newImages/slide1.webp'  },
    {
      id: 2,
      image: '/newImages/slide2.webp'   },
    {
      id: 3,
      image: '/newImages/slide3.webp' },
    {
      id: 4,
      image: '/newImages/slide4.webp' },
    {
      id: 5,
      image:'/newImages/slide5.webp' },
    {
      id: 6,
      image:'/newImages/slide6.webp'},
    {
      id: 7,
      image:'/newImages/slide7.webp' },
    {
      id: 8,
      image:'/newImages/slide8.webp' },
    {
      id: 9,
      image:'/newImages/slide9.webp'},
    {
      id: 10,
      image:'/newImages/slide10.webp' },
  ];

  const changeSlide = (i: number) => {
    swiperInstance?.slideTo(i);
  };

  return (
    <div
      onMouseEnter={() => setIsStudentLifeHovered(true)}
      onMouseLeave={() => setIsStudentLifeHovered(false)}
      className={`absolute hidden w-full bg-white px-4 lg:block ${
        isStudentLifeHovered ? "max-h-[50vh]" : "max-h-0"
      } transform overflow-hidden shadow-md transition-all duration-300`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl py-8">
        <div className="grid flex-grow grid-cols-3 gap-4">
          <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
                <a className="mb-2 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Life @DMTIMS
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(1)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Great Campus
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(2)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Comprehensive Library
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(3)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Corporate Seminar Halls
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Study Exercise
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(5)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Latest Computer Labs
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Life"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(6)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Sports Activities
                </span>
              </a>
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <Link
                legacyBehavior
                href={"/life-at-DMTIMS#Group-International-Immersions"}
              >
                <a className="mb-4 text-xl font-medium">
                  <span
                    onMouseEnter={() => changeSlide(7)}
                    className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]"
                  >
                    Group International Immersions
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link legacyBehavior href={"/life-at-DMTIMS#Activities"}>
                <a className="mb-2 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Activities
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/life-at-DMTIMS#Seminars"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(8)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Seminars
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Workshops"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(9)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Workshops
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Guest-Lectures"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Guest Lectures
                </span>
              </a>
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/life-at-DMTIMS#Fest-and-Culture"}>
                <a className="mb-4 text-xl font-medium">
                  <span
                    onMouseEnter={() => changeSlide(11)}
                    className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]"
                  >
                    Fest & Culture
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link legacyBehavior href={"/life-at-DMTIMS#Virtual-Tour"}>
                <a className="mb-4 text-xl font-medium">
                  <span
                    onMouseEnter={() => changeSlide(7)}
                    className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]"
                  >
                    Virtual Tour
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/life-at-DMTIMS#Seminars"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(7)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Experience Us Live
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Workshops"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(7)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Hostel
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Workshops"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(7)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Cafeteria
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/life-at-DMTIMS#Guest-Lectures"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(7)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Language Lab
                </span>
              </a>
            </Link>
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
                    alt={"student-megamenu-img-" + id}
                    layout="fill"
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

export default StudenLifeMegaMenu;
