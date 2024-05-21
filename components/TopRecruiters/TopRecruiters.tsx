// import Image from "next/legacy/image";
// import { useEffect, useRef, useState } from "react";
// import { ArrowCircleDownIcon } from "@heroicons/react/outline";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// const TopRecruiters = () => {
//   const el = useRef(null);
//   const q = gsap.utils.selector(el);
//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     gsap.fromTo(
//       q("h5"),
//       {
//         y: 118,
//       },
//       {
//         y: 0,
//         ease: "power4.out",
//         duration: 1.8,
//         skewY: 0,
//         stagger: {
//           amount: 1.8,
//         },
//         scrollTrigger: {
//           trigger: q("h5"),
//         },
//       }
//     );
//   }, []);

//   const [open, setOpen] = useState(false);

//   const recruiters2022 = [
//     { id: 0, img: require("./images/BergerPaint.png") },
//     { id: 1, img: require("./images/indiamart.png") },
//     { id: 2, img: require("./images/HDFC.png") },
//     { id: 3, img: require("./images/upGrad.png") },
//     { id: 4, img: require("./images/JaroEducation.png") },
//     { id: 5, img: require("./images/SquareYards.png") },
//     { id: 6, img: require("./images/Morningstar.png") },
//     { id: 7, img: require("./images/Sustainalytics.png") },
//     { id: 8, img: require("./images/PitchBook.png") },
//     { id: 9, img: require("./images/K12.png") },
//     { id: 10, img: require("./images/PropertyPistol.png") },
//     { id: 11, img: require("./images/XLRecruiters.png") },
//   ];

//   const bluechips = [
//     { id: 0, img: require("./images/GodrejProperties.png") },
//     { id: 1, img: require("./images/JohnsonJohnson.png") },
//     { id: 2, img: require("./images/ICICIBank.png") },
//     { id: 3, img: require("./images/Piramal.png") },
//     { id: 4, img: require("./images/AmericanExpress.png") },
//     { id: 5, img: require("./images/RelianceJio.png") },
//     { id: 6, img: require("./images/Barclays.png") },
//     { id: 7, img: require("./images/MRF.png") },
//     { id: 8, img: require("./images/HDFCBank.png") },
//     { id: 9, img: require("./images/AdityaBirlaCapital.png") },
//     { id: 10, img: require("./images/TechMahindra.png") },
//     { id: 11, img: require("./images/CafeCoffeeDay.png") },
//     { id: 12, img: require("./images/GroupM.png") },
//     { id: 13, img: require("./images/FastLogistic.png") },
//     { id: 14, img: require("./images/tikona.png") },
//   ];

//   useEffect(() => {
//     setTimeout(function () {
//       ScrollTrigger.refresh();
//     }, 500);
//   }, [open]);

//   return (
//     <section ref={el} className="bg-[#fff]">
//       <div className="px-4">
//         <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-col pt-12 pb-4 lg:pb-8 xl:pt-16">
//           <div className="relative h-[2.45rem] overflow-hidden sm:h-[3.2rem] md:h-[3.95rem] lg:h-[4.7rem] xl:h-[6.2rem]">
//             <h5 className="font-condensed text-4xl font-bold tracking-tighter text-[#28314A] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
//               Top Recruiters
//             </h5>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`relative overflow-hidden pb-20 ${
//           open ? "max-h-[400vh]" : "max-h-72"
//         } mx-auto w-full max-w-screen-2xl transform transition-all duration-500`}
//       >
//         <div className="flex flex-col px-2">
//           <div className="flex items-center px-2">
//             <p className="text-sm font-medium text-[#BDBDBD]">
//               This Season, 2022
//             </p>
//             <div className="ml-4 h-[1px] flex-grow bg-[#BDBDBD]" />
//           </div>
//           <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
//             {recruiters2022.map((item) => (
//               <div
//                 key={item.id}
//                 className="recruiter mx-4 my-5 flex flex-col overflow-hidden"
//               >
//                 <div className="relative my-4 h-40 w-full">
//                   <Image
//                     priority
//                     src={item.img}
//                     alt={"recruiter" + item.id}
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center px-2">
//             <p className="text-sm font-medium text-[#BDBDBD]">
//               Participating BlueChips
//             </p>
//             <div className="ml-4 h-[1px] flex-grow bg-[#BDBDBD]" />
//           </div>
//           <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
//             {bluechips.map((item) => (
//               <div
//                 key={item.id}
//                 className="recruiter mx-4 flex flex-col overflow-hidden md:my-6"
//               >
//                 <div className="relative my-4 h-40 w-full">
//                   <Image
//                     priority
//                     src={item.img}
//                     alt={"recruiter" + item.id}
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="absolute bottom-6 right-4 z-20 flex w-auto flex-col">
//           <button
//             onClick={() => setOpen(!open)}
//             className="flex select-none items-center rounded-full bg-[#4C477A] py-1 pl-3 text-sm font-semibold text-white transition duration-300 hover:shadow-lg active:scale-95"
//           >
//             {open ? "Collapse" : "View All"}
//             <ArrowCircleDownIcon
//               className={`ml-2 mr-1 w-7 transform transition duration-300 ${
//                 open ? "rotate-180" : "rotate-0"
//               }`}
//             />{" "}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopRecruiters;

















/**my code */
import Image from "next/legacy/image";
import { useEffect, useRef, useState } from "react";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import img0 from '../../public/newImages/image0.webp'

const TopRecruiters = () => {
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      q("h5"),
      {
        y: 118,
      },
      {
        y: 0,
        ease: "power4.out",
        duration: 1.8,
        skewY: 0,
        stagger: {
          amount: 1.8,
        },
        scrollTrigger: {
          trigger: q("h5"),
        },
      }
    );
  }, []);

  const [open, setOpen] = useState(false);

  const recruiters2022 = [
    // { id: 0, img: require("./images/BergerPaint.png") },
    { id: 0, img: require("../../public/newImages/BergerPaint.png") },
    { id: 1, img: require("../../public/newImages/indiaMart.webp") },
    { id: 2, img: require("../../public/newImages/hdfc.png") },
    { id: 3, img: require("../../public/newImages/upgrad.png") },
    { id: 4, img: require("../../public/newImages/jaroEducation.png") },
    { id: 5, img: require("../../public/newImages/squareYards.png") },
    { id: 6, img: require("../../public/newImages/morningStar.png") },
    { id: 7, img: require("../../public/newImages/sustainalytics.png") },
    { id: 8, img: require("../../public/newImages/pitchBooks.png") },
    { id: 9, img: require("../../public/newImages/k12.webp") },
    { id: 10, img: require("../../public/newImages/propertyPistol.png") },
    { id: 11, img: require("../../public/newImages/xlRecruiters.webp") },
  ];

  const bluechips = [
    { id: 0, img: require("../../public/newImages/godrej.png") },
    { id: 1, img: require("../../public/newImages/johnson.png") },
    { id: 2, img: require("../../public/newImages/iciciBank.png") },
    { id: 3, img: require("../../public/newImages/piramal.png") },
    { id: 4, img: require("../../public/newImages/americanExpress.png") },
    { id: 5, img: require("../../public/newImages/jio.png") },
    { id: 6, img: require("../../public/newImages/barclays.png") },
    { id: 7, img: require("../../public/newImages/mrf.png") },
    { id: 8, img: require("../../public/newImages/hdfcBank.png") },
    { id: 9, img: require("../../public/newImages/adityaBirla.png") },
    { id: 10, img: require("../../public/newImages/techMahindra.png") },
    { id: 11, img: require("../../public/newImages/coffee.png") },
    { id: 12, img: require("../../public/newImages/groupM.png") },
    { id: 13, img: require("../../public/newImages/fastLogistic.png") },
    { id: 14, img: require("../../public/newImages/tikona.png") },
  ];

  useEffect(() => {
    setTimeout(function () {
      ScrollTrigger.refresh();
    }, 500);
  }, [open]);

  return (
    <section ref={el} className="bg-[#fff]">
      <div className="px-4">
        <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-col pt-12 pb-4 lg:pb-8 xl:pt-16">
          <div className="relative h-[2.45rem] overflow-hidden sm:h-[3.2rem] md:h-[3.95rem] lg:h-[4.7rem] xl:h-[6.2rem]">
            <h5 className="font-condensed text-4xl font-bold tracking-tighter text-[#28314A] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              Top Recruiters
            </h5>
          </div>
        </div>
      </div>
      <div
        className={`relative overflow-hidden pb-20 ${
          open ? "max-h-[400vh]" : "max-h-72"
        } mx-auto w-full max-w-screen-2xl transform transition-all duration-500`}
      >
        <div className="flex flex-col px-2">
          <div className="flex items-center px-2">
            <p className="text-sm font-medium text-[#BDBDBD]">
              This Season, 2022
            </p>
            <div className="ml-4 h-[1px] flex-grow bg-[#BDBDBD]" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {recruiters2022.map((item) => (
              <div
                key={item.id}
                className="recruiter mx-4 my-5 flex flex-col overflow-hidden"
              >
                <div className="relative my-4 h-40 w-full">
                  <Image
                    priority
                    src={item.img}
                    alt={"recruiter" + item.id}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center px-2">
            <p className="text-sm font-medium text-[#BDBDBD]">
              Participating BlueChips
            </p>
            <div className="ml-4 h-[1px] flex-grow bg-[#BDBDBD]" />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
            {bluechips.map((item) => (
              <div
                key={item.id}
                className="recruiter mx-4 flex flex-col overflow-hidden md:my-6"
              >
                <div className="relative my-4 h-40 w-full">
                  <Image
                    priority
                    src={item.img}
                    alt={"recruiter" + item.id}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 right-4 z-20 flex w-auto flex-col">
          <button
            onClick={() => setOpen(!open)}
            className="flex select-none items-center rounded-full bg-[#4C477A] py-1 pl-3 text-sm font-semibold text-white transition duration-300 hover:shadow-lg active:scale-95"
          >
            {open ? "Collapse" : "View All"}
            <ArrowCircleDownIcon
              className={`ml-2 mr-1 w-7 transform transition duration-300 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
