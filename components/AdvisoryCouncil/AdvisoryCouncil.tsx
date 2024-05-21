// import Image from "next/legacy/image";
// import bg from "./images/CouncilBg.webp";

// const AdvisoryCouncil = () => {
//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
//           <h2 id="Advisory-Council" className="dmtims-title">
//             Advisory Council
//           </h2>
//           <div className="flex md:items-center md:py-10">
//             <div className="relative mb-4 h-[400px] flex-shrink-0 md:h-[450px] md:w-96 lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
//               <Image
//                 priority
//                 src={bg}
//                 alt="Advisory-Council"
//                 layout="fill"
//                 objectFit="contain"
//                 objectPosition="left"
//               />
//             </div>
//             <div className="flex flex-col">
//               <div className="grid grid-cols-2 gap-x-4 gap-y-8">
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Catholicose and Malankara Metropolitan
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     H.H.M.M. Baselios Marthoma Mathew III
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Metropolitan
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     H.G. Geevargese Mar Coorilos
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     M D, Muthoot Group
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     MR. GEORGE ALEXANDER MUTHOOT
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     M D, Bin Jamin Dubai
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     MR. ALEXANDER POTHEN
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Former Chief Justice, Patna High Court
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     JUSTICE JACOB BENJAMIN KOSHY (RETD.)
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     M D, Aban Offshore Ltd.
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     MR. REJI ABRAHAM
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Director TCS
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     MR. P. V. VARGHESE
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Director, Malayala Manorama and M D, India Coffee & Tea
//                     Distributing Co. Ltd.
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     DR. PETER PHILIP
//                   </p>
//                 </div>

//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Former VC, D.Y. Patil University
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     DR. JAMES THOMAS
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Nurosurgeon, MM Hospital
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     DR. SOJAN IPE
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Former Chairman & MD -GAC
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     MRS. ALICE VIDYAN
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     PHD (IIT DELHI) - Director General & CEO, IAM & ATDC.
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     DR. DARLIE O. KOSHY
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Former Chief Secretary, Govt. of Kerala
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     Mr. Jiji Thomson
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Secretary/CEO MOSC Medical College.
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     MR. JOY P. JACOB
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Former Chief Secretary, Govt. of Meghalaya.
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     MR. PETER JAMES BAZELEY, <br /> IAS (RETD.)
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Director General, Cellular Operators Association of India
//                     (COAI).
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     MR. RAJAN S. MATHEWS
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Former Additional Chief Secretary, Govt. of Kerala.
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     MR. Sajan PETER, IAS (RETD.)
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Management Professional & Certified ACBSP Mentor
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     MRS. ASHA ALEXANDER
//                   </p>
//                 </div>
//                 <div className="xl:w-4/5">
//                   <p className="text-sm font-medium text-[#4C477A]">
//                     Former Chairman & MD -GAC
//                   </p>
//                   <p className="font-bold uppercase text-[#414042]">
//                     COMDR. K. K. IPE
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdvisoryCouncil;














/** new changes */

import Image from "next/legacy/image";
import bg from "./images/CouncilBg.webp";

const AdvisoryCouncil = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="Advisory-Council" className="dmtims-title">
            Advisory Council
          </h2>
          <div className="flex md:items-center md:py-10">
            <div className="relative mb-4 h-[400px] flex-shrink-0 md:h-[450px] md:w-96 lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
              <Image
                priority
                src={bg}
                alt="Advisory-Council"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    H.H.M.M. Baselios Marthoma Mathew III
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Catholicose and Malankara Metropolitan
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    H.G. Geevargese Mar Coorilos
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Metropolitan
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    H.G. DR. G.M. THEOPHILOS
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Metropolitan
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    DR. DARLY O. KOSHY
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Director General/CEO , Apparel Tranining and Design Centre, (ATDC-IAM) Gurugram
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                 MR. REJI ABRAHAM
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                   Managing Director, Aban Offshore Ltd, Chennai
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                  MR. GEORGE ALEXANDER MUTHOOT
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Managing Director - Muthoot Group, Kerala
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    MR. SAJAN PETER, I.A.S (RETD.)
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Former Addl. Chief Secretary, Govt of Kerala
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    MR. JIJI THOMSON I.A.S(RETD.)
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                   Former Chief Justice, Patna High Court
                  </p>
                </div>

                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                  MR. ALEXANDER POTHEN
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                  MD - Golden Falcon Group of Companies, Dubai
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                   MR. JACOB BENJAMIN KOSHY
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Former Chief Justice, Patna High Court
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                  MR. P.V. VARGHESE
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Director - TCS
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    MR. JOY P. JACOB
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Secretary/CEO - MOSC Medical College, Kolenchery
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                   DR. JAMES THOMAS
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Former Vice Chancellor, D.Y. Patil University
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    DR. SOJAN IPE
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Neurosurgean - M.M. Hospital, Kolenchery
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                   MR. PETER J BAZELEY, <br /> IAS (RETD.)
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Former Chief Secretary, Govt. of Meghalaya.
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    COMDR. K.K IPE
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Director, Former Chairman & Managing Director - GAC.
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    MR. RAJAN S. MATHEWS
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Director General, Cellular Operators Association of India (COAI), New Delhi
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    MRS. MINI IPE
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                   Former Managing Director, LIC of India
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    DR. GEEVARGHESE VAIDYAN
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Former DMD - SBI
                  </p>
                </div>
                <div className="xl:w-4/5">
                  <p className="font-bold uppercase text-[#414042]">
                    MRS. ALICE VAIDYAN
                  </p>
                  <p className="text-sm font-medium text-[#4C477A]">
                    Former Chairman and Managing Director, General Insurance Corporation of India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryCouncil;
