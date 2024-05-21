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
//   setIsProgramsHovered: Dispatch<SetStateAction<boolean>>;
//   isProgramsHovered: boolean;
// }

// const ProgramsMegaMenu = ({
//   setIsProgramsHovered,
//   isProgramsHovered,
// }: Props) => {
//   const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

//   const slides = [
//     {
//       id: 0,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930812561186775050/pretty-young-girl-holding-book-posing-grey-background_1.png",
//     },
//     {
//       id: 1,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930812896781406228/Group_1349.png",
//     },
//     {
//       id: 2,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813019850674186/Group_1346_1.png",
//     },
//     {
//       id: 3,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813059428139008/image_205.png",
//     },
//     {
//       id: 4,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813138696306708/Group_1350.png",
//     },
//     {
//       id: 5,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813189514465370/pretty-young-girl-holding-book-posing-grey-background_1_1.png",
//     },
//     {
//       id: 6,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813247681089536/pretty-young-girl-holding-book-posing-grey-background_1_2.png",
//     },
//     {
//       id: 7,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813289607331850/pretty-young-girl-holding-book-posing-grey-background_1_3.png",
//     },
//     {
//       id: 8,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813332825444372/pretty-young-girl-holding-book-posing-grey-background_1_4.png",
//     },
//     {
//       id: 9,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813372373545030/pretty-young-girl-holding-book-posing-grey-background_1_5.png",
//     },
//     {
//       id: 10,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813457157222500/Group_1351.png",
//     },
//     {
//       id: 11,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813535376773180/Group_1352.png",
//     },
//     {
//       id: 12,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/930813572756426802/pretty-young-girl-holding-book-posing-grey-background_1_6.png",
//     },
//   ];

//   const changeSlide = (i: number) => {
//     swiperInstance?.slideTo(i);
//   };

//   return (
//     <div
//       onMouseEnter={() => setIsProgramsHovered(true)}
//       onMouseLeave={() => setIsProgramsHovered(false)}
//       className={`absolute hidden w-full bg-white px-4 lg:block ${
//         isProgramsHovered ? "max-h-[50vh]" : "max-h-0"
//       } transform overflow-hidden shadow-md transition-all duration-300`}
//     >
//       <div className="mx-auto flex w-full max-w-screen-2xl py-8">
//         <div className="grid flex-grow grid-cols-3 gap-4">
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/programs#Full-Time-PGDM"}>
//                 <a className="mb-2 text-xl font-medium">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Full Time PGDM
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <Link legacyBehavior href={"/programs#Program-Overview"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(1)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Program Overview
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#DMTIMS-USP"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(2)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   DMTIMS USPs
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#DMTIMS-Advantages"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(3)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   DMTIMS Advantages
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#DMTIMS-Ergonomics"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(4)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   DMTIMS Ergonomics
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#Unique-Way-of-Learning"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(4)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   A Unique Way of Learning
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#PGDM-Course-Highlights"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(4)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   PGDM Course Highlights
//                 </span>
//               </a>
//             </Link>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/programs#Core-Courses"}>
//                 <a className="mb-2 text-xl font-medium">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     PGDM Specialization
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <Link legacyBehavior href={"/programs#GFF"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(6)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Global Finance & Fintech(GFF)
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#IM"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(7)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   International Marketing(IM)
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#HCM"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(8)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Human Capital Management(HCM)
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#SCM"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(9)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Supply Chain Management(SCM)
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#IBM"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(10)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   International Business Management(IBM)
//                 </span>
//               </a>
//             </Link>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/programs#PGDM-Skill-Certifications"}>
//                 <a className="mb-4 text-xl font-medium">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Additional Free PGDM Skill Certifications
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <Link legacyBehavior href={"/programs#Soft-Skills"}>
//               <a className="mb-1">
//                 <span
//                   onMouseEnter={() => changeSlide(11)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Soft Skills
//                 </span>
//               </a>
//             </Link>
//             <Link legacyBehavior href={"/programs#Technical-Domain-Skills"}>
//               <a className="mb-4">
//                 <span
//                   onMouseEnter={() => changeSlide(12)}
//                   className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
//                 >
//                   Technical / Domain Skills
//                 </span>
//               </a>
//             </Link>
//             <div className="flex">
//               <Link legacyBehavior href={"/programs#Admission-Process"}>
//                 <a
//                   onMouseEnter={() => changeSlide(13)}
//                   className="mb-4 text-xl font-medium"
//                 >
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     Admission Process
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <div className="flex">
//               <a
//                 onMouseEnter={() => changeSlide(13)}
//                 className="mb-4 text-xl font-medium"
//                 href="/files/DMTIMS-2023-PGDM-Academic-Calendar.pdf"
//                 target="_blank"
//               >
//                 <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                   Academic Calander
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-shrink-0">
//           <Swiper
//             effect={"fade"}
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
//                     alt={"program-megamenu-img-" + id}
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

// export default ProgramsMegaMenu;

/**my changes */
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
  setIsProgramsHovered: Dispatch<SetStateAction<boolean>>;
  isProgramsHovered: boolean;
}

const ProgramsMegaMenu = ({
  setIsProgramsHovered,
  isProgramsHovered,
}: Props) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

  const slides = [
    {
      id: 0,
      image: "/newImages/program0.webp",
    },
    {
      id: 1,
      image: "/newImages/program1.webp",
    },
    {
      id: 2,
      image: "/newImages/program2.webp",
    },
    {
      id: 3,
      image: "/newImages/program3.webp",
    },
    {
      id: 4,
      image: "/newImages/program3.webp",
    },
    {
      id: 5,
      image: "/newImages/program4.webp",
    },
    {
      id: 6,
      image: "/newImages/program5.webp",
    },
    {
      id: 7,
      image: "/newImages/program6.webp",
    },
    {
      id: 8,
      image: "/newImages/program7.webp",
    },
    {
      id: 9,
      image: "/newImages/program8.webp",
    },
    {
      id: 10,
      image: "/newImages/program9.webp",
    },
    {
      id: 11,
      image: "/newImages/program10.webp",
    },
    {
      id: 12,
      image: "/newImages/program11.webp",
    },
  ];

  const changeSlide = (i: number) => {
    swiperInstance?.slideTo(i);
  };

  return (
    <div
      onMouseEnter={() => setIsProgramsHovered(true)}
      onMouseLeave={() => setIsProgramsHovered(false)}
      className={`absolute hidden w-full bg-white px-4 lg:block ${
        isProgramsHovered ? "max-h-[100vh]" : "max-h-0"
      } transform overflow-hidden shadow-md transition-all duration-300`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl py-2">
        <div className="grid flex-grow grid-cols-3 gap-4">
          {/* Dual Degree */}
          <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/programs#Full-Time-PGDM"}>
                <a className="mb-2 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    <b>Dual Degree</b>
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/programs#Program-Overview"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(1)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Program PGDM (AICTE Approved Full Time Two Years Program)
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#DMTIMS-USP"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(2)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  PGDM Eligibility Criteria{" "}
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#DMTIMS-Advantages"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(3)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  PGDM Specializations{" "}
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#DMTIMS-Ergonomics"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  European University MBA{" "}
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#Unique-Way-of-Learning"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  MBA Eligibility Criteria{" "}
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#PGDM-Course-Highlights"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  European University MBA Specializations{" "}
                </span>
              </a>
            </Link>

            {/* new name in the list need perfect route */}
            <Link legacyBehavior href={"/programs#"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(4)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Teaching Methods{" "}
                </span>
              </a>
            </Link>

            {/* PGDM SPECIALIZATION */}
            {/* <div className="flex flex-col"> */}
            <div className="flex flex-col">
              {/* <div className="flex">
                <Link legacyBehavior href={"/programs#Core-Courses"}>
                  <a className="mb-2 text-xl font-medium">
                    <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                      PGDM Specialization
                    </span>
                  </a>
                </Link>
              </div> */}
              <Link legacyBehavior href={"/programs#GFF"}>
                <a className="mb-1">
                  <span
                    onMouseEnter={() => changeSlide(6)}
                    className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                  >
                    Additional Certifications{" "}
                  </span>
                </a>
              </Link>
              <Link legacyBehavior href={"/programs#IM"}>
                <a className="mb-1">
                  <span
                    onMouseEnter={() => changeSlide(7)}
                    className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                  >
                    Four Months Summer Internship Project (SIP){" "}
                  </span>
                </a>
              </Link>
              <Link legacyBehavior href={"/programs#HCM"}>
                <a className="mb-1">
                  <span
                    onMouseEnter={() => changeSlide(8)}
                    className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                  >
                    Social Relevance Project (SRP){" "}
                  </span>
                </a>
              </Link>
              <Link legacyBehavior href={"/programs#SCM"}>
                <a className="mb-1">
                  <span
                    onMouseEnter={() => changeSlide(9)}
                    className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                  >
                    National Industrial Visits{" "}
                  </span>
                </a>
              </Link>
              <Link legacyBehavior href={"/programs#IBM"}>
                <a className="mb-1">
                  <span
                    onMouseEnter={() => changeSlide(10)}
                    className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                  >
                    International Industrial Visits{" "}
                  </span>
                </a>
              </Link>
              <Link legacyBehavior href={"/programs#IBM"}>
                <a className="mb-1">
                  <span
                    onMouseEnter={() => changeSlide(10)}
                    className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                  >
                    Fees of Dual Degree{" "}
                  </span>
                </a>
              </Link>
              <Link legacyBehavior href={"/programs#IBM"}>
                <a className="mb-1">
                  <span
                    onMouseEnter={() => changeSlide(10)}
                    className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                  >
                    Admission Process{" "}
                  </span>
                </a>
              </Link>
              <Link legacyBehavior href={"/programs#IBM"}>
                <a className="mb-1">
                  <span
                    onMouseEnter={() => changeSlide(10)}
                    className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                  >
                    2024 Dual Degree Prospectus{" "}
                  </span>
                </a>
              </Link>
              <Link legacyBehavior href={"/programs#IBM"}>
                <a className="mb-1">
                  <span
                    onMouseEnter={() => changeSlide(10)}
                    className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                  >
                    2023 24 Academic Calendar{" "}
                  </span>
                </a>
              </Link>
              <Link legacyBehavior href={"/programs#IBM"}>
                <a className="mb-1">
                  <span
                    onMouseEnter={() => changeSlide(10)}
                    className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                  >
                    Click for DMTIMS Inquiry Form, DMTIMS Application Form and
                    DMTIMS Counselling Form{" "}
                  </span>
                </a>
              </Link>
            </div>
          </div>

          {/* MBA SPECIALIZATION */}
          {/* <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/programs#Core-Courses"}>
                <a className="mb-0 text-xl font-medium">
                  <h6 className="text-sm"> European University</h6>
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    <b>MBA Specialization</b>
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/programs#GFF"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(6)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Marketing & Sales Management
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(7)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Logistics & Supply Chain Management
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#HCM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(8)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Information Technology & Systems Managment
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#SCM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(9)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Corporate Social Responsibility (C.S.R)
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Operations Management
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Hospitality & Tourism Management
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Human Resource Management
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Innovation Management & Design Thinking
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Leisure Studies
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Finance
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Retail Management
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Strategy
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Sports Management
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Leadership
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  General Management
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Entrepreneurship
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#IBM"}>
              <a className="mb-0">
                <span
                  onMouseEnter={() => changeSlide(10)}
                  className="link-underline link-underline-black pb-0 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  International Business
                </span>
              </a>
            </Link>
          </div> */}

          {/* additional fee pgdm skill certification */}
          <div className="flex flex-col">
            {/* <div className="flex">
              <Link legacyBehavior href={"/programs#PGDM-Skill-Certifications"}>
                <a className="mb-4 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Additional Free PGDM Skill Certifications
                  </span>
                </a>
              </Link>
            </div>
            <Link legacyBehavior href={"/programs#Soft-Skills"}>
              <a className="mb-1">
                <span
                  onMouseEnter={() => changeSlide(11)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Soft Skills
                </span>
              </a>
            </Link>
            <Link legacyBehavior href={"/programs#Technical-Domain-Skills"}>
              <a className="mb-4">
                <span
                  onMouseEnter={() => changeSlide(12)}
                  className="link-underline link-underline-black pb-1 text-sm font-medium text-[#929292] hover:text-[#4C477A]"
                >
                  Technical / Domain Skills
                </span>
              </a>
            </Link> */}
            {/* <div className="flex">
              <Link legacyBehavior href={"/programs#Admission-Process"}>
                <a
                  onMouseEnter={() => changeSlide(13)}
                  className="mb-4 text-xl font-medium"
                >
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Admission Process
                  </span>
                </a>
              </Link>
            </div> */}
            {/* <div className="flex">
              <a
                onMouseEnter={() => changeSlide(13)}
                className="mb-4 text-xl font-medium"
                href="/files/DMTIMS-2023-PGDM-Academic-Calendar.pdf"
                target="_blank"
              >
                <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                  Academic Calander
                </span>
              </a>
            </div> */}
          </div>
        </div>

        <div className="flex flex-shrink-0">
          <Swiper
            effect={"fade"}
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
                    alt={"program-megamenu-img-" + id}
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

export default ProgramsMegaMenu;
