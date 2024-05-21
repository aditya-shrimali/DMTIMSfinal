// import Image from "next/legacy/image";
// import React from "react";

// function ComplimentaryCertificationsBanner() {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
//         <Image
//           priority
//           alt="Contact-Banner"
//           src={
//             "https://cdn.discordapp.com/attachments/929834261568167986/1115602803398803487/image_92.webp"
//           }
//           layout="fill"
//           objectFit="cover"
//           objectPosition={"top"}
//         />
//       </div>
//       <div className="flex flex-col bg-[#4C477A] px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-6">
//           <div className="flex flex-col py-4 ">
//             <p
//               id="Mission"
//               className="pb-2 font-bold uppercase text-[#FFB800] lg:text-lg xl:text-xl 2xl:text-2xl"
//             >
//               Our Mission
//             </p>
//             <p className="text-lg font-medium text-white lg:text-xl xl:text-2xl 2xl:text-3xl">
//               <em>
//                 “To become an Internationally ranking business school, providing
//                 quality & holistic education to develop inspiring leaders to
//                 transform the business world.”
//               </em>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ComplimentaryCertificationsBanner;

/** my changes */
import Image from "next/legacy/image";
import React from "react";
import campusBanner from "../../public/newImages/campusBanner.png";

function ComplimentaryCertificationsBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* <div className="relative">
      <Image
          priority
          alt="Contact-Banner"
          className="w-auto h-auto"
          src={campusBanner}
        
        />
      </div> */}
      <div className="flex flex-col bg-[#4C477A] px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-6">
          <div className="flex flex-col py-4 ">
            <p
              id="Mission"
              className="pb-2 font-bold uppercase text-[#FFB800] lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              Our Mission
            </p>
            <p className="text-lg font-medium text-white lg:text-xl xl:text-2xl 2xl:text-3xl">
              <em>
                “To become an Internationally ranking business school, providing
                quality & holistic education to develop inspiring leaders to
                transform the business world.”
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComplimentaryCertificationsBanner;
