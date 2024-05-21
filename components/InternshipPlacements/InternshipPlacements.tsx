// import React from "react";
// import { Tab } from "@headlessui/react";
// import Image from "next/legacy/image";

// function InternshipPlacements() {
//   const internships = [
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109344107026993203/Image_4.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109344177512267816/Image_3.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109344274702684200/Image_2.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109344421411037264/Image_5.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109344541724651530/Image_6.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109344656044601404/Image_7.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109344845228679168/Image_8.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109344912375300176/Image_9.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109344979022774282/Image_10.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109345156727054387/Image_11.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109345222204334110/Image_12.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109345308829302815/Image_13.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109345481898872892/Image_14.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109345555047522325/Image_15.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109345627252473897/Image_16.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109345785830707221/Image_17.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109345851161202699/Image_18.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109345910770651186/Image_19.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109346233841094796/Image_20.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109346297439338526/Image_21.webp",
//     },
//   ];

//   const placements = [
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1109353094107627580/Image_22.webp",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1116662150144983070/Neelam_Maurya_Placement.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1116662177621880912/Shawn_Saji_Placement.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1116662194915004426/Komal_Patole_Placement.png",
//     },
//   ];

//   return (
//     <section className="flex flex-col">
//       <Tab.Group>
//         <div className="bg-[#4C477A] px-4">
//           <div className="mx-auto w-full max-w-screen-2xl">
//             <Tab.List className="flex">
//               <Tab
//                 className={
//                   "relative w-full ring-transparent ring-offset-transparent focus:outline-none"
//                 }
//               >
//                 {({ selected }) => (
//                   /* Use the `selected` state to conditionally style the selected tab. */
//                   <div className="flex flex-col items-center justify-center p-4">
//                     <h2
//                       className={`dmtims-title pb-2 tracking-tighter text-white transition-all duration-300 ${
//                         selected ? "opacity-100" : "opacity-50"
//                       }`}
//                     >
//                       Internship
//                     </h2>
//                     <div
//                       className={`absolute bottom-0  w-full transform bg-[#FFB800] transition-all duration-300 ${
//                         selected ? "h-2" : "h-0"
//                       }`}
//                     ></div>
//                   </div>
//                 )}
//               </Tab>
//               <Tab
//                 className={
//                   "relative w-full ring-transparent ring-offset-transparent focus:outline-none"
//                 }
//               >
//                 {({ selected }) => (
//                   /* Use the `selected` state to conditionally style the selected tab. */
//                   <div className="flex flex-col items-center justify-center p-4">
//                     <h2
//                       className={`dmtims-title pb-2 tracking-tighter text-white transition-all duration-300 ${
//                         selected ? "opacity-100" : "opacity-50"
//                       }`}
//                     >
//                       Placements
//                     </h2>
//                     <div
//                       className={`absolute bottom-0  w-full transform bg-[#FFB800] transition-all duration-300 ${
//                         selected ? "h-2" : "h-0"
//                       }`}
//                     ></div>
//                   </div>
//                 )}
//               </Tab>
//             </Tab.List>
//           </div>
//         </div>
//         <div className="bg-[#F2F2F2] px-4">
//           <div className="mx-auto w-full max-w-screen-2xl">
//             <Tab.Panels className="my-4 lg:my-6">
//               <Tab.Panel
//                 className={
//                   "grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:py-12 xl:grid-cols-3"
//                 }
//               >
//                 {internships.map((img, i) => (
//                   <div
//                     key={i}
//                     className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[400px] 2xl:h-[450px]"
//                   >
//                     <Image
//                       className=""
//                       alt={`internship-${i}`}
//                       src={img.src}
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                   </div>
//                 ))}
//               </Tab.Panel>
//               <Tab.Panel
//                 className={
//                   "grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:py-12 xl:grid-cols-3"
//                 }
//               >
//                 {placements.map((img, i) => (
//                   <div
//                     key={i}
//                     className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[400px] 2xl:h-[450px]"
//                   >
//                     <Image
//                       className=""
//                       alt={`placements-${i}`}
//                       src={img.src}
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                   </div>
//                 ))}
//               </Tab.Panel>
//             </Tab.Panels>
//           </div>
//         </div>
//       </Tab.Group>
//     </section>
//   );
// }

// export default InternshipPlacements;

/**my code */
import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/legacy/image";
import placement0 from "../../public/newImages/placement0.webp";
import placement1 from "../../public/newImages/placement1.webp";
import placement2 from "../../public/newImages/placement2.webp";
import placement3 from "../../public/newImages/placement3.webp";


import internship0 from '../../public/newImages/internship0.webp'
import internship1 from '../../public/newImages/internship1.webp'
import internship2 from '../../public/newImages/internship2.webp'
import internship3 from '../../public/newImages/internship3.webp'
import internship4 from '../../public/newImages/internship4.webp'
import internship5 from '../../public/newImages/internship5.webp'
import internship6 from '../../public/newImages/internship6.webp'
import internship7 from '../../public/newImages/internship7.webp'
import internship8 from '../../public/newImages/internship8.webp'
import internship9 from '../../public/newImages/internship9.webp'
import internship10 from '../../public/newImages/internship10.webp'
import internship11 from '../../public/newImages/internship11.webp'
import internship12 from '../../public/newImages/internship12.webp'
import internship13 from '../../public/newImages/internship13.webp'
import internship14 from '../../public/newImages/internship14.webp'
function InternshipPlacements() {
  const internships = [
    {src:internship0    },
    {src:internship1    },
    {src:internship2    },
    {src:internship3    },
    {src:internship4    },
    {src:internship5    },
    {src:internship6    },
    {src:internship7    },
    {src:internship8    },
    {src:internship9    },
    {src:internship10    },
    {src:internship11    },
    {src:internship12    },
    {src:internship13   },
    {src:internship14    },
    // {src:internship15    },
    // {src:internship    },
    // {
    //   src: "https://cdn.discordapp.com/attachments/929834261568167986/1109345910770651186/Image_19.webp",
    // },
    // {
    //   src: "https://cdn.discordapp.com/attachments/929834261568167986/1109346233841094796/Image_20.webp",
    // },
    // {
    //   src: "https://cdn.discordapp.com/attachments/929834261568167986/1109346297439338526/Image_21.webp",
    // },
  ];

  const placements = [
    {
      src: placement0,
    },
    { src: placement1 },
    { src: placement2 },
    { src: placement3 },
    
  ];

  return (
    <section className="flex flex-col">
      <Tab.Group>
        <div className="bg-[#4C477A] px-4">
          <div className="mx-auto w-full max-w-screen-2xl">
            <Tab.List className="flex">
              <Tab
                className={
                  "relative w-full ring-transparent ring-offset-transparent focus:outline-none"
                }
              >
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div className="flex flex-col items-center justify-center p-4">
                    <h2
                      className={`dmtims-title pb-2 tracking-tighter text-white transition-all duration-300 ${
                        selected ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      Internship
                    </h2>
                    <div
                      className={`absolute bottom-0  w-full transform bg-[#FFB800] transition-all duration-300 ${
                        selected ? "h-2" : "h-0"
                      }`}
                    ></div>
                  </div>
                )}
              </Tab>
              <Tab
                className={
                  "relative w-full ring-transparent ring-offset-transparent focus:outline-none"
                }
              >
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <div className="flex flex-col items-center justify-center p-4">
                    <h2
                      className={`dmtims-title pb-2 tracking-tighter text-white transition-all duration-300 ${
                        selected ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      Placements
                    </h2>
                    <div
                      className={`absolute bottom-0  w-full transform bg-[#FFB800] transition-all duration-300 ${
                        selected ? "h-2" : "h-0"
                      }`}
                    ></div>
                  </div>
                )}
              </Tab>
            </Tab.List>
          </div>
        </div>
        <div className="bg-[#F2F2F2] px-4">
          <div className="mx-auto w-full max-w-screen-2xl">
            <Tab.Panels className="my-4 lg:my-6">
              <Tab.Panel
                className={
                  "grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:py-12 xl:grid-cols-3"
                }
              >
                {internships.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[400px] 2xl:h-[450px]"
                  >
                    <Image
                      className=""
                      alt={`internship-${i}`}
                      src={img.src}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel
                className={
                  "grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:py-12 xl:grid-cols-3"
                }
              >
                {placements.map((img, i) => (
                  <div
                    key={i}
                    className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[400px] 2xl:h-[450px]"
                  >
                    <Image
                      className=""
                      alt={`placements-${i}`}
                      src={img.src}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </section>
  );
}

export default InternshipPlacements;
