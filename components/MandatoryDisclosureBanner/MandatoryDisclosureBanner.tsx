// import Image from "next/legacy/image";

// const MandatoryDisclosureBanner = () => {
//   return (
//     <section>
//       <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
//         <Image
//           priority
//           alt="MandatoryDisclosureBanner"
//           src={
//             "https://cdn.discordapp.com/attachments/929834261568167986/937242444678979684/Frame_1523.png"
//           }
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className="flex flex-col bg-[#EE3768] px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-6">
//           <div className="flex flex-col py-4 ">
//             <p className="pb-2 font-bold uppercase text-[#FFB800] lg:text-lg xl:text-xl 2xl:text-2xl">
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
// };

// export default MandatoryDisclosureBanner;









/** my code */
import Image from "next/legacy/image";
import mandatoryBanner from '../../public/newImages/mandatoryBanner.png'

const MandatoryDisclosureBanner = () => {
  return (
    <section>
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
        <Image
          priority
          alt="MandatoryDisclosureBanner"
          src={mandatoryBanner}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col bg-[#EE3768] px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-6">
          <div className="flex flex-col py-4 ">
            <p className="pb-2 font-bold uppercase text-[#FFB800] lg:text-lg xl:text-xl 2xl:text-2xl">
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
};

export default MandatoryDisclosureBanner;
