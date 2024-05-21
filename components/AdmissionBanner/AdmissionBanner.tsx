// import Image from "next/legacy/image";
// import Bg from "./images/AdmissionBg.webp";

// const AdmissionBanner = () => {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
//         <Image
//           priority
//           alt="Admission-Banner"
//           src={
//             "https://cdn.discordapp.com/attachments/929834261568167986/930468280014082078/image_92.webp"
//           }
//           layout="fill"
//           objectFit="cover"
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
//                 “To create a competitive learning environment to enable our
//                 stakeholders to realize their full potential”
//               </em>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdmissionBanner;





/** my code */
import Image from "next/legacy/image";
import Bg from "./images/AdmissionBg.webp";
import admissionBanner from '../../public/newImages/admissionBanner.webp';

const AdmissionBanner = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
        <Image
          priority
          alt="Admission-Banner"
          src={admissionBanner}
          layout="fill"
          objectFit="cover"
        />
      </div>
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
                “To create a competitive learning environment to enable our
                stakeholders to realize their full potential”
              </em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionBanner;
