// const AdditionalSkillCertifications = () => {
//   return (
//     <section id="Complimentary-Certifications" className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
//           <h2 id="PGDM-Skill-Certifications" className="dmtims-title pt-4 pb-2">
//             Additional Free PGDM Skill Certifications
//           </h2>
//           <p id="Second-Year-PGDM" className="dmtims-subtitle py-2">
//             5+ <span className="font-black text-[#EE3768]">FREE</span>{" "}
//             Certifications
//           </p>
//           <p className="dmtims-text font-semibold">
//             In today's times, a mere management certificate cannot suffice the
//             niche needs of specific skill sets in the industry today. Especially
//             since work place evolved post the pandemic and with science,
//             technology and management practices changing at an ever-increasing
//             rate, a gap is formed between the foundation provided by an academic
//             education and the technical and management competencies required in
//             today's technical and business environment. Thus, we here at DMTIMS,
//             decided to give that extra edge to our student leaders through
//             professional certification programs in order to bridge the education
//             gap, arising out of this change.
//             <br /> <br /> These are graded for each individual student based on
//             their individual performance. These include both soft skills and
//             technical/domain-based certifications as stated below:
//           </p>
//           <div className="grid grid-cols-1 gap-12 py-8 md:grid-cols-2 md:gap-y-16">
//             <div className="flex flex-col items-center">
//               <img
//                 className="mb-4 w-60"
//                 src="https://cdn.discordapp.com/attachments/929834261568167986/1095964730411208744/image-68751.webp"
//                 alt="Ken-buddy"
//               />
//               <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
//                 <li>Business French</li>
//                 <li>Business German</li>
//               </ol>
//             </div>
//             <div className="flex flex-col items-center">
//               <img
//                 className="mb-4 w-60"
//                 src="https://cdn.discordapp.com/attachments/929834261568167986/1095964657954603068/image-68752.webp"
//                 alt="SLIKUN"
//               />
//               <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
//                 <li>Power Business Intelligence</li>
//                 <li>Neuro Linguistic Program</li>
//                 <li>Six Sigma</li>
//               </ol>
//             </div>
//             <div className="flex flex-col items-center">
//               <img
//                 className="mb-4 w-60"
//                 src="https://cdn.discordapp.com/attachments/929834261568167986/1095964627428450364/image-68753.webp"
//                 alt="Team-Lease"
//               />
//               <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
//                 <li>Advance Excel</li>
//                 <li>Aptitude Building</li>
//               </ol>
//             </div>
//             <div className="flex flex-col items-center">
//               <img
//                 className="mb-4 w-60"
//                 src="https://cdn.discordapp.com/attachments/929834261568167986/1095964519215415316/image-68754.webp"
//                 alt="Pro-school"
//               />
//               <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
//                 <li>Financial Planning</li>
//                 <li>Business Analytics</li>
//                 <li>Digital Marketing</li>
//                 <li>SQL & Tableau</li>
//                 <li>Investment Banking</li>
//               </ol>
//             </div>
//             <div className="flex flex-col items-center">
//               <img
//                 className="mb-4 h-28 w-60 object-contain"
//                 src="https://cdn.discordapp.com/attachments/929834261568167986/1095964500093567036/image-68756.webp"
//                 alt="Technolite"
//               />
//               <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
//                 <li>Entrepreneurship Management </li>
//               </ol>
//             </div>
//             <div className="flex flex-col items-center">
//               <img
//                 className="mb-4 h-28 w-60 object-contain"
//                 src="https://cdn.discordapp.com/attachments/929834261568167986/1095964471664586772/image-68755.webp"
//                 alt="Stock-Street"
//               />
//               <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
//                 <li>Financial Modeling</li>
//               </ol>
//             </div>
//             <div className="flex flex-col items-center">
//               <img
//                 className="mb-4 h-28 w-60 object-contain"
//                 src="https://cdn.discordapp.com/attachments/929834261568167986/1095964451167014912/image-68757.webp"
//                 alt="MTC-Global"
//               />
//               <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
//                 <li>HR Analytics</li>
//               </ol>
//             </div>
//             <div className="flex flex-col items-center">
//               <img
//                 className="mb-4 h-28 w-60 object-contain"
//                 src="https://cdn.discordapp.com/attachments/929834261568167986/1139706366353739876/Group_237868.png"
//                 alt="MTC-Global"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdditionalSkillCertifications;











/** my changes */
import Image from 'next/image';
import kenBuddy from '../../public/newImages/kenBuddy.png'
import vockskill from '../../public/newImages/vockskill.png'
import silkun from '../../public/newImages/silkun.png'
import teamLease from '../../public/newImages/teamLease.png'
import proSchool from '../../public/newImages/proSchool.png'
import technolite from '../../public/newImages/technolite.png'
import stockStreet from '../../public/newImages/stockStreet.png'
import mtcGlobal from '../../public/newImages/mtcGlobal.png'

const AdditionalSkillCertifications = () => {
  return (
    <section id="Complimentary-Certifications" className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="PGDM-Skill-Certifications" className="dmtims-title pt-4 pb-2">
            Additional Free PGDM Skill Certifications
          </h2>
          <p id="Second-Year-PGDM" className="dmtims-subtitle py-2">
            5+ <span className="font-black text-[#EE3768]">FREE</span>{" "}
            Certifications
          </p>
          <p className="dmtims-text font-semibold">
            In today's times, a mere management certificate cannot suffice the
            niche needs of specific skill sets in the industry today. Especially
            since work place evolved post the pandemic and with science,
            technology and management practices changing at an ever-increasing
            rate, a gap is formed between the foundation provided by an academic
            education and the technical and management competencies required in
            today's technical and business environment. Thus, we here at DMTIMS,
            decided to give that extra edge to our student leaders through
            professional certification programs in order to bridge the education
            gap, arising out of this change.
            <br /> <br /> These are graded for each individual student based on
            their individual performance. These include both soft skills and
            technical/domain-based certifications as stated below:
          </p>
          <div className="grid grid-cols-1 gap-12 py-8 md:grid-cols-2 md:gap-y-16">
            <div className="flex flex-col items-center">
              <Image
                className="mb-4 w-60"
                src={kenBuddy}
                alt="Ken-buddy"
              />
              <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
                <li>Business French</li>
                <li>Business German</li>
              </ol>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="mb-4 w-60"
                src={silkun}
                alt="SLIKUN"
              />
              <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
                <li>Power Business Intelligence</li>
                <li>Neuro Linguistic Program</li>
                <li>Six Sigma</li>
              </ol>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="mb-4 w-60"
                src={teamLease}
                alt="Team-Lease"
              />
              <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
                <li>Advance Excel</li>
                <li>Aptitude Building</li>
              </ol>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="mb-4 w-60"
                src={proSchool}
                alt="Pro-school"
              />
              <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
                <li>Financial Planning</li>
                <li>Business Analytics</li>
                <li>Digital Marketing</li>
                <li>SQL & Tableau</li>
                <li>Investment Banking</li>
              </ol>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="mb-4 h-28 w-60 object-contain"
                src={technolite}
                alt="Technolite"
              />
              <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
                <li>Entrepreneurship Management </li>
              </ol>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="mb-4 h-28 w-60 object-contain"
                src={stockStreet}
                alt="Stock-Street"
              />
              <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
                <li>Financial Modeling</li>
              </ol>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="mb-4 h-28 w-60 object-contain"
                src={mtcGlobal}
                alt="MTC-Global"
              />
              <ol className="ml-4 list-decimal font-condensed text-xl font-extrabold text-[#28314A]">
                <li>HR Analytics</li>
              </ol>
            </div>
            <div className="flex flex-col items-center">
              <Image
                className="mb-4 h-28 w-60 object-contain"
                src={vockskill}
                alt="Vockskill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkillCertifications;
