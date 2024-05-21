// import Image from "next/legacy/image";
// import bg from "./images/CouncilBg.webp";

// function AcademicTeam() {
//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
//           <h2 id="Our-Academic-Team" className="dmtims-title">
//             Our Academic Team
//           </h2>
//           <p className="pb-2 text-lg font-medium text-[#4C477A] md:text-xl lg:text-2xl xl:text-3xl">
//             Advisory Board of Research
//           </p>
//           <div className="flex md:py-10">
//             <div className="relative mb-4 h-[400px] flex-shrink-0 md:h-[450px] md:w-96 lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
//               <Image
//                 priority
//                 src={
//                   "https://cdn.discordapp.com/attachments/929834261568167986/1098882979780120596/Ellipse_198.webp"
//                 }
//                 alt="Our-Academic-Team"
//                 layout="fill"
//                 objectFit="contain"
//                 objectPosition="left"
//               />
//             </div>
//             <div className="flex flex-col">
//               <div className="grid grid-cols-2 gap-x-4 gap-y-8">
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Chairman VKK Menon College of Commerce & Economics, Bhandup,
//                     Mumbai
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     SMT. P. SARADA MENON
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Research - Conference Convener
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     DR. MONICA KHANNA
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Principal - Bunts College of Higher Education, Juinagar,
//                     Navi Mumbai
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     DR. SS BHANDARI
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Dean - Faculty of Commerce, KBP (Modern) College, Vashi,
//                     Navi Mumbai
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     DR. HARSHA GOYAL
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Principal, St. Thomas College, Bhilai
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     DR. SUSAN THOMAS
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Research - Conference Convener
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     DR. PRIYA HARIKUMAR
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AcademicTeam;
















/**my code */

import Image from "next/legacy/image";
import bg from "./images/CouncilBg.webp";
import ourAcademicTeam from '../../public/newImages/ourAcademicTeam.png'


function AcademicTeam() {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="Our-Academic-Team" className="dmtims-title">
            Our Academic Team
          </h2>
          <p className="pb-2 text-lg font-medium text-[#4C477A] md:text-xl lg:text-2xl xl:text-3xl">
            Advisory Board of Research
          </p>
          <div className="flex md:py-10">
            <div className="relative mb-4 h-[400px] flex-shrink-0 md:h-[450px] md:w-96 lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
              <Image
                priority
                src={ourAcademicTeam}
                alt="Our-Academic-Team"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    SMT. P. SARADA MENON
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Chairman VKK Menon College of Commerce & Economics, Bhandup,
                    Mumbai
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    DR. S S BHANDARI
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                  Principal - Bunts College of Higher Education, Juinagar,
                    Navi Mumbai
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    DR. SUSAN R ABRAHAM
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                  HOD - Dept. of Mgt. Studies, St. Thomas College, Bhilai
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                  DR. MONICA KHANNA
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    
                    Research - Conference Convener
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    DR. HARSHA GOYAL
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                   
                    Dean - Faculty of Commerce, KBP (Modern) College, Vashi,
                    Navi Mumbai
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    DR. NITHYA VARGHESE
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Principal - Western College of Commerce and Business Management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademicTeam;

