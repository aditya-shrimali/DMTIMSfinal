// import Image from "next/legacy/image";

// const DMTIMSRankings = () => {
//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
//           <h2 className="dmtims-title">Our Group of Institutions</h2>
//           <video
//             className="mx-auto w-full max-w-screen-xl"
//             controls
//             autoPlay
//             muted
//             poster="https://cdn.discordapp.com/attachments/853240651385929738/983634307463667772/unknown.png"
//           >
//             <source src="/videos/Trustees-Meet-Video.mp4" />
//           </video>
//         </div>
//         <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
//           <h2 id="DMTIMS-Rankings" className="dmtims-title mb-4">
//             DMTIMS Ranking & Recognitions
//           </h2>
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
//             <div className="flex flex-col text-center">
//               <div className="relative mx-auto mt-auto h-[400px] w-full md:mb-8 md:h-[450px]">
//                 <Image
//                   priority
//                   alt="Times Education Awards"
//                   src="https://cdn.discordapp.com/attachments/929834261568167986/1095874476266242108/Group_1378_1.webp"
//                   layout="fill"
//                   objectFit="contain"
//                 />
//               </div>
//               <p className="dmtims-subtitle pb-2">Times Education Awards</p>
//               <p className="dmtims-text pb-1 font-normal">2022</p>
//             </div>
//             <div className="flex flex-col text-center">
//               <div className="relative mx-auto mt-auto h-[400px] w-full md:mb-8 md:h-[450px]">
//                 <Image
//                   priority
//                   alt="Singhania Education Excellence Awards"
//                   src="https://cdn.discordapp.com/attachments/929834261568167986/1095874476517892116/Group_1379_1.webp"
//                   layout="fill"
//                   objectFit="contain"
//                 />
//               </div>
//               <p className="dmtims-subtitle pb-2">
//                 Singhania Education Excellence Awards
//               </p>
//               <p className="dmtims-text pb-1 font-normal">2022</p>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//             <div className="flex flex-col text-center">
//               <div className="relative mx-auto mt-auto h-[350px] w-[300px]">
//                 <Image
//                   priority
//                   alt="International Achievers Award"
//                   src="https://cdn.discordapp.com/attachments/929834261568167986/946722553303552050/Group_1357.webp"
//                   layout="fill"
//                   objectFit="contain"
//                 />
//               </div>
//               <p className="dmtims-subtitle pb-2">
//                 International Achievers Award
//               </p>
//               <p className="dmtims-text pb-1 font-normal">
//                 in Management Education
//               </p>
//               <p className="dmtims-text pb-1 font-normal text-[#BDBDBD]">
//                 Presented By
//               </p>
//               <p className="dmtims-text pb-1 font-normal">
//                 Foriegn Trade Industry - UAE
//               </p>
//             </div>
//             <div className="flex flex-col text-center">
//               <div className="relative mx-auto h-[515px] w-[300px]">
//                 <Image
//                   priority
//                   alt="Radio City Award for Excellence"
//                   src="https://cdn.discordapp.com/attachments/929834261568167986/946722682743959572/Group_1358_1.webp"
//                   layout="fill"
//                   objectFit="contain"
//                 />
//               </div>
//               <p className="dmtims-subtitle pb-2">
//                 Radio City Award for Excellence
//               </p>
//               <p className="dmtims-text pb-1 font-normal">
//                 in Management Education
//               </p>
//               <p className="dmtims-text pb-1 font-normal text-[#BDBDBD]">
//                 Presented By
//               </p>
//               <p className="dmtims-text pb-1 font-normal">
//                 Radio City, Mumbai, India
//               </p>
//             </div>
//             <div className="flex flex-col text-center">
//               <div className="relative mx-auto mt-auto h-[350px] w-[300px]">
//                 <Image
//                   priority
//                   alt="Most Promising Management College"
//                   src="https://cdn.discordapp.com/attachments/929834261568167986/946722810246627418/Group_1359.webp"
//                   layout="fill"
//                   objectFit="contain"
//                 />
//               </div>
//               <p className="dmtims-subtitle pb-2">
//                 Most Promising Management College
//               </p>
//               <p className="dmtims-text pb-1 font-normal">
//                 in Maharashtra - 2009
//               </p>
//               <p className="dmtims-text pb-1 font-normal">
//                 in Quality Education
//               </p>
//               <p className="dmtims-text pb-1 font-normal">
//                 & Leading Infrastructure
//               </p>
//             </div>
//           </div>
//           <ul className="ml-10 list-disc pt-16">
//             <li className="dmtims-subtitle italic underline">
//               Ranked 1st: Top Emerging B-School in Navi-Mumbai
//             </li>
//             <li className="dmtims-subtitle italic underline">
//               Ranked 3rd: Top Emerging B-School in Mumbai(Times B-School |
//               Bombay Times 2022)
//             </li>
//             <li className="dmtims-subtitle italic underline">
//               Ranked 8th: Top Emerging B-School in India (Times of India
//               Rankings 2022)
//             </li>
//             <li className="dmtims-subtitle italic underline">
//               Rev. Fr. Abraham Joseph has been conferred with the honourable
//               Singhania Education Excellence Award 2022 by H. E Bhagat Singh
//               Koshyari, Hon. Governor of Maharashtra at Raj Bhavan Mumbai on 3rd
//               September 2022
//             </li>
//             <li className="dmtims-subtitle italic underline">
//               CEGR : Best Management College in Maharashtra for Industry
//               Interface
//             </li>
//             <li className="dmtims-subtitle italic underline">
//               Ranked 2nd : Top Emerging B-Schools in Mumbai (TOI National
//               Ranking)
//             </li>
//             <li className="dmtims-subtitle italic underline">
//               Ranked 7th : Top Emerging B-Schools in Mumbai (TOI National
//               Ranking)
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DMTIMSRankings;

/** my code */
import Image from "next/legacy/image";
import singhaniaEducationExcellenceAwards from "../../public/newImages/singhaniaEducationExcellenceAwards.png";
import timesEducationAwards from "../../public/newImages/timesEducationAwards.png";
import internationalAchieversAward from "../../public/newImages/internationalAchieversAward.png";
import radioCityAwardForExcellence from "../../public/newImages/radioCityAwardForExcellence.png";
import mostPromisingManagementCollege from "../../public/newImages/mostPromisingManagementCollege.png";

import award from '../../public/images/award.png'

const DMTIMSRankings = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          {/* <h2 className="dmtims-title">Our Group of Institutions</h2>
          <video
            className="mx-auto w-full max-w-screen-xl"
            controls
            autoPlay
            muted
            poster="https://cdn.discordapp.com/attachments/853240651385929738/983634307463667772/unknown.png"
          > */}
            {/* <source src="/videos/Trustees-Meet-Video.mp4" /> */}
          {/* </video> */}
        </div>
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          
        
          <h2 id="DMTIMS-Rankings" className="dmtims-title mb-4">
            {/* DMTIMS Ranking & Recognitions */}
            Rankings & Awards
          </h2>

          {/* image of award  */}
          <Image
          className="sm:pb-8 w-full"
          src={award}
          alt="award"
          // layout="fill"
          objectFit="cover"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col text-center">
              <div className="relative mx-auto mt-auto h-[400px] w-full md:mb-8 md:h-[450px]">
                <Image
                  priority
                  alt="Times Education Awards"
                  src={timesEducationAwards}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="dmtims-subtitle pb-2">Times Education Awards</p>
              <p className="dmtims-text pb-1 font-normal">2022</p>
            </div>
            <div className="flex flex-col text-center">
              <div className="relative mx-auto mt-auto h-[400px] w-full md:mb-8 md:h-[450px]">
                <Image
                  priority
                  alt="Singhania Education Excellence Awards"
                  src={singhaniaEducationExcellenceAwards}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="dmtims-subtitle pb-2">
                Singhania Education Excellence Awards
              </p>
              <p className="dmtims-text pb-1 font-normal">2022</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col text-center">
              <div className="relative mx-auto mt-auto h-[350px] w-[300px]">
                <Image
                  priority
                  alt="International Achievers Award"
                  src={internationalAchieversAward}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="dmtims-subtitle pb-2">
                International Achievers Award
              </p>
              <p className="dmtims-text pb-1 font-normal">
                in Management Education
              </p>
              <p className="dmtims-text pb-1 font-normal text-[#BDBDBD]">
                Presented By
              </p>
              <p className="dmtims-text pb-1 font-normal">
                Foriegn Trade Industry - UAE
              </p>
            </div>
            <div className="flex flex-col text-center">
              <div className="relative mx-auto h-[515px] w-[300px]">
                <Image
                  priority
                  alt="Radio City Award for Excellence"
                  src={radioCityAwardForExcellence}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="dmtims-subtitle pb-2">
                Radio City Award for Excellence
              </p>
              <p className="dmtims-text pb-1 font-normal">
                in Management Education
              </p>
              <p className="dmtims-text pb-1 font-normal text-[#BDBDBD]">
                Presented By
              </p>
              <p className="dmtims-text pb-1 font-normal">
                Radio City, Mumbai, India
              </p>
            </div>
            <div className="flex flex-col text-center">
              <div className="relative mx-auto mt-auto h-[350px] w-[300px]">
                <Image
                  priority
                  alt="Most Promising Management College"
                  src={mostPromisingManagementCollege}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="dmtims-subtitle pb-2">
                Most Promising Management College
              </p>
              <p className="dmtims-text pb-1 font-normal">
                in Maharashtra - 2009
              </p>
              <p className="dmtims-text pb-1 font-normal">
                in Quality Education
              </p>
              <p className="dmtims-text pb-1 font-normal">
                & Leading Infrastructure
              </p>
            </div>
          </div>
          <ul className="ml-10 list-disc pt-16">
            <li className="dmtims-subtitle italic underline">
              {/* Ranked 1st: Top Emerging B-School in Navi-Mumbai */}
              2024 - Times of India Rankings - No. 6 in Top Emerging B-Schools
              in India
            </li>
            <li className="dmtims-subtitle italic underline">
              {/* Ranked 3rd: Top Emerging B-School in Mumbai(Times B-School |
              Bombay Times 2022) */}
              2023 - Times of India Rankings - No. 2 in Top Emerging B-Schools
              in Mumbai
            </li>
            <li className="dmtims-subtitle italic underline">
              {/* Ranked 8th: Top Emerging B-School in India (Times of India
              Rankings 2022) */}
              2023 - CEGR - Best Management College In Maharashtra for Industry
              Interface
            </li>
            <li className="dmtims-subtitle italic underline">
              {/* Rev. Fr. Abraham Joseph has been conferred with the honourable
              Singhania Education Excellence Award 2022 by H. E Bhagat Singh
              Koshyari, Hon. Governor of Maharashtra at Raj Bhavan Mumbai on 3rd
              September 2022 */}
              2022 - Times of India Rankings - No. 1in Top Emerging B-Schools in
              Navi Mumbai
            </li>
            <li className="dmtims-subtitle italic underline">
              {/* CEGR : Best Management College in Maharashtra for Industry
              Interface */}
              2022 - CEGR - Best Management College In Maharashtra for Academic
              Excellence
            </li>
            <li className="dmtims-subtitle italic underline">
              2022 - Times Education Icon Award
            </li>
            <li className="dmtims-subtitle italic underline">
              2022 - Singhania Education Excellence Award
            </li>
            <li className="dmtims-subtitle italic underline">
              2021 - Radio City Award for Excellence in Management Education
              presented by Radio City, Mumbai
            </li>
            <li className="dmtims-subtitle italic underline">
              2021 - International Achievers Award in Management Education
              presented by Foreign Trade Industry - UAE
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DMTIMSRankings;
