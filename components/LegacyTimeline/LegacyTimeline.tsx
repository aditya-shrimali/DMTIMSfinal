// import Image from "next/legacy/image";
// import TimelineBg from "./images/TimelineBg.png";

// const LegacyTimeline = () => {
//   return (
//     <div className="relative py-6 lg:my-6">
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#FFB304] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               1968
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="dmtims-subtitle pt-2 pb-0 tracking-tighter lg:pt-4">
//             St. Thomas High School
//           </p>
//           <p className="dmtims-text">Kalyan (West), Mumbai, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#FC9E15] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               1982
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="dmtims-subtitle pt-2 pb-0 tracking-tighter lg:pt-4">
//             Malankara Orthodox Church Council of Bombay (MOCCB Trust)
//           </p>
//           <p className="dmtims-text">Vashi, Navi Mumbai, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#F98B25] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               1986
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="dmtims-subtitle pt-2 pb-0 tracking-tighter lg:pt-4">
//             St. Mary’s Multipurpose High School & Junior College
//           </p>
//           <p className="dmtims-text">Vashi, Navi Mumbai, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#F77834] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               1988
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="dmtims-subtitle pt-2 pb-0 tracking-tighter lg:pt-4">
//             Vishweshwar Education Society (VES Trust)
//           </p>
//           <p className="dmtims-text">Vashi, Navi Mumbai, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#F46444] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               1998
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="dmtims-subtitle pt-2 pb-0 tracking-tighter lg:pt-4">
//             St. Mary’s High School
//           </p>
//           <p className="dmtims-text">Dhamdachi, Valsad, Gujarat</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#F25054] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               2001
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="dmtims-subtitle pt-2 pb-0 tracking-tighter lg:pt-4">
//             St. Mary’s ICSE School
//           </p>
//           <p className="dmtims-text">Koparkhairane, Navi Mumbai, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#EF3D64] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               2001
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="pt-2 lg:pt-4">
//             <span className="dmtims-subtitle pb-0 tracking-tighter">
//               Western College of Commerce & Business Management (WCCBM){" "}
//             </span>
//             <span className="dmtims-text pb-0">- Graduate College</span>
//           </p>
//           <p className="dmtims-text">Sanpada, Navi Mumbai, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#E3396A] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               2003
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="pt-2 lg:pt-4">
//             <span className="dmtims-subtitle pb-0 tracking-tighter">
//               St. Mary’s Tejaswani School{" "}
//             </span>
//             <span className="dmtims-text pb-0">
//               (Free School for Slum Childrens)
//             </span>
//           </p>
//           <p className="dmtims-text">Sanpada, Navi Mumbai, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#D33A6B] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               2003
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="dmtims-subtitle pt-2 pb-0 tracking-tighter lg:pt-4">
//             St. Mary’s JNP School
//           </p>
//           <p className="dmtims-text">JNPT, Navi Mumbai, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#C33C6D] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               2003
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="pt-2 lg:pt-4">
//             <span className="dmtims-subtitle pb-0 tracking-tighter">
//               St. Mary’s Junior College{" "}
//             </span>
//             <span className="dmtims-text pb-0">- Junior College</span>
//           </p>
//           <p className="dmtims-text">Vashi, Navi Mumbai, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#B33D6F] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               2007
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="dmtims-subtitle pt-2 pb-0 tracking-tighter lg:pt-4">
//             Dr. Mar Theophilus School
//           </p>
//           <p className="dmtims-text">Dhanori Road, Pune, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#A33F71] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               2007
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="dmtims-subtitle pt-2 pb-0 tracking-tighter lg:pt-4">
//             Gregorian Public School
//           </p>
//           <p className="dmtims-text">Khilla, Roha, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#924073] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               2008
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="pt-2 lg:pt-4">
//             <span className="dmtims-subtitle pb-0 tracking-tighter">
//               Indira Institute of Business Management (IIBM){" "}
//             </span>
//             <span className="dmtims-text pb-0">
//               - Post Graduate College - MMS
//             </span>
//           </p>
//           <p className="dmtims-text">Sanpada, Navi Mumbai, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#834274] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               2015
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="pt-2 lg:pt-4">
//             <span className="dmtims-subtitle pb-0 tracking-tighter">
//               Western College of Commerce & Business Management (WCCBM){" "}
//             </span>
//             <span className="dmtims-text pb-0">- Junior College</span>
//           </p>
//           <p className="dmtims-text">Sanpada, Navi Mumbai, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#734476] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               2019
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="dmtims-subtitle pt-2 pb-0 tracking-tighter lg:pt-4">
//             St. Mary’s Public School
//           </p>
//           <p className="dmtims-text">Khopoli, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center px-2">
//           <div>
//             <div className="flex h-20 w-20 items-center justify-center rounded-full border bg-[#644578] text-xl font-bold tracking-tighter text-white lg:h-24 lg:w-24 lg:text-2xl">
//               2021
//             </div>
//           </div>
//           <div className="-ml-1 h-full w-1 border-r-2 border-dashed border-[#dddddd]"></div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="dmtims-subtitle pt-2 pb-0 tracking-tighter lg:pt-4">
//             St. Mary’s School
//           </p>
//           <p className="dmtims-text">Dhanori Road, Pune, Maharashtra</p>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="mr-4 flex flex-col items-center">
//           <div className="flex h-24 w-24 items-center justify-center rounded-full border bg-[#50477A] text-xl font-bold tracking-tighter text-white lg:h-28 lg:w-28 lg:text-2xl">
//             2021
//           </div>
//         </div>
//         <div className="min-h-[7rem] lg:min-h-[8.5rem]">
//           <p className="pt-4 lg:pt-6">
//             <span className="pb-0 text-3xl font-bold tracking-tighter text-[#4C477A]">
//               Dr. Mar Theophilis Institute of Management Studies (DMTIMS){" "}
//             </span>
//             <span className="dmtims-text pb-0 text-lg text-[#EE3768]">
//               - Post Graduate College - PGDM
//             </span>
//           </p>
//           <p className="dmtims-text text-lg">
//             Sanpada, Navi Mumbai, Maharashtra
//           </p>
//         </div>
//       </div>
//       <div className="bottom-0 right-0 sm:absolute">
//         <div className="relative ml-auto h-[250px] w-[250px] sm:h-[320px] sm:w-[320px] lg:h-[480px] lg:w-[480px]">
//           <Image
//             src={TimelineBg}
//             alt="TimelineBg"
//             layout="fill"
//             objectFit="contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LegacyTimeline;
































/** new changes of image  */
import Image from "next/legacy/image";
import TimelineBg from "./images/TimelineBg.png";

const LegacyTimeline = () => {
  return (<>


<div className="flex ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub1.png"
          className="w-full "
          alt="1968"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
            St. Thomas High School
          </p>
          <p className="dmtims-text">Kalyan (West), Mumbai, Maharashtra</p>
        </div>
      </div>

<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub2.png"
          className="w-full"
          alt="1986"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
              Malankara Orthodox Church Council of Bombay (MOCCB Trust)
          </p>
          <p className="dmtims-text">Vashi, Navi Mumbai, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub3.png"
          className="w-full"
          alt="1988"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
             St. Marys Multipurpose High School & Junior College
          </p>
          <p className="dmtims-text">Vashi, Navi Mumbai, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub4.png"
          className="w-full"
          alt="1998"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
              Vishweshwar Education Trust (VES)
          </p>
          <p className="dmtims-text">Vashi, Navi Mumbai, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub5.png"
          className="w-full"
          alt="2001-a"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
              St. Mary’s School
          </p>
          <p className="dmtims-text">Dhamdachi, Valsad, Gujarat</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub6.png"
          className="w-full"
          alt="2001-b"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
              St. Mary’s ICSE School
          </p>
          <p className="dmtims-text">Koperkhairne, Navi Mumbai, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub7.png"
          className="w-full"
          alt="2003-a"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
              Western College of Commerce & Business Management  (WCCBM) Graduate Clg
          </p>
          <p className="dmtims-text">Sanpada, Navi Mumbai, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub8.png"
          className="w-full"
          alt="2001-b"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
              St. Mary’s Tejaswani School(Free School for Slum Children)
          </p>
          <p className="dmtims-text">Vashi, Navi Mumbai, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub9.png"
          className="w-full"
          alt="2003-a"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
             St. Mary’s JNP School
          </p>
          <p className="dmtims-text">JNPT, Navi Mumbai, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub10.png"
          className="w-full"
          alt="2003-b"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
            Dr. Mar Theophilus School
          </p>
          <p className="dmtims-text">Dhanori Road, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub10.png"
          className="w-full"
          alt="2007-a"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
            Gregorian Public School
          </p>
          <p className="dmtims-text">Khilla, Roha, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub13.png"
          className="w-full"
          alt="2007-b"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
             Indira Institute of Business Management (IIBM) Post Graduate College - MMS
          </p>
          <p className="dmtims-text">Sanpada, Navi Mumbai, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub14.png"
          className="w-full"
          alt="2008"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
             Western College of Commerce & Business Management (WCCBM) Jr. College
          </p>
          <p className="dmtims-text">Sanpada, Navi Mumbai, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub15.png"
          className="w-full"
          alt="2015"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
           St. Mary’s Public School
          </p>
          <p className="dmtims-text">Khopoli, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub16.png"
          className="w-full"
          alt="2021-a"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
         St. Mary’s School
          </p>
          <p className="dmtims-text">Dhule, Maharashtra</p>
        </div>
      </div>
<div className="flex  ">
        <div className=" flex flex-col  px-2 ">
         
         <img src="/AboutUs/sub16.png"
          className="w-full"
          alt="2021-b"/>
        </div>
        <div className="w-full">
          <p className="text-2xl text-[#414042] font-bold pb-4
           pt-2 tracking-tighter lg:pt-4">
          Dr. Mar Theophilus Institute of Management Studies
(DMTIMS) Post Graduate College - PGDM
          </p>
          <p className="dmtims-text">Sanpada, Navi Mumbai, Maharashtra</p>
        </div>
      </div>











    </>
  );
};

export default LegacyTimeline;
