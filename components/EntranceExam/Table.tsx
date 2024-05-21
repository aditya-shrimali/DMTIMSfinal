// import React from "react";
// import Link from "next/link";
// const Table = () => {
//   return (
//     <>
//     {/* small screen */}
//       <div className="hidden lg:flex">
//         <table className="mx-8 mb-8 border-2 border-black px-8 ">
//           <thead className="border-2 border-black px-8">
//             <tr className="border-2 border-black px-8">
//               <th className="pr-40">Component</th>
//               <th className="px-4 pr-24">DATE 2024 </th>
//               <th className="pr-40">CET 2024</th>
//               <th className="pr-40"> IIMs CAT 2023 </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2  "> Total Questions </td>
//               <td className="px-6 py-2"> 200 </td>
//               <td className="px-32 py-2"> 200 </td>
//               <td className="px-28 py-2 "> 66 </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2">
//                 {" "}
//                 Overall Time Limit to Attempt the Exam{" "}
//               </td>
//               <td className="px-6 py-2"> 2 hours </td>
//               <td className="px-32 py-2"> 2 ½ hours </td>
//               <td className="px-28 py-2 "> 2 hours </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2"> Questions For DATE </td>
//               <td className="px-6 py-2"> All MCQs </td>
//               <td className="px-32 py-2"> All MCQs </td>
//               <td className="px-28 py-2 ">
//                 {" "}
//                 70% questions are MCQs, rest Non-MCQs
//               </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2"> Answer Options for MCQs</td>
//               <td className="px-6 py-2"> 4 </td>
//               <td className="px-32 py-2"> 4 </td>
//               <td className="px-28 py-2"> 4 </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2">
//                 {" "}
//                 Marks Awarded For Each Correct Answer{" "}
//               </td>
//               <td className="px-6 py-2"> 1 </td>
//               <td className="px-32 py-2"> 1 </td>
//               <td className="px-28 py-2"> 3 </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2"> Negative Marking </td>
//               <td className="px-6 py-2"> n/a </td>
//               <td className="px-32 py-2"> 0.25 mark </td>
//               <td className="px-28 py-2">
//                 {" "}
//                 MCQs with 1/3 negative marking; No negative marking for Non-MCQs{" "}
//               </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2"> Exam Difficulty Level </td>
//               <td className="px-6 py-2"> Easy to Moderate </td>
//               <td className="px-32 py-2"> Easy to Moderate </td>
//               <td className="px-28 py-2"> Difficult </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2"> Number of Sections </td>
//               <td className="px-6 py-2"> 4 </td>
//               <td className="px-32 py-2"> 5 </td>
//               <td className="px-28 py-2"> 3 </td>
//             </tr>
//             <tr>
//               <td className="px-6 py-2">
//                 {" "}
//                 Section-1: Name and Number of Questions{" "}
//               </td>
//               <td className="px-6 py-2"> Language Comprehension: 25 </td>
//               <td className="px-32 py-2"> Language Comprehension: 40 </td>
//               <td className="px-28 py-2">
//                 {" "}
//                 Verbl Ability & Reading Comprehension: 24{" "}
//               </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2">
//                 {" "}
//                 Section-2: Name and Number of Questions{" "}
//               </td>
//               <td className="px-6 py-2">
//                 {" "}
//                 Intelligence & Critical Reasoning: 25{" "}
//               </td>
//               <td className="px-32 py-2">
//                 {" "}
//                 Intelligence & Critical Reasoning: 40{" "}
//               </td>
//               <td className="px-28 py-2">
//                 {" "}
//                 Data Interpretation & Logical Reasoning - 20{" "}
//               </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2">
//                 {" "}
//                 Section-3: Name and Number of Questions
//               </td>
//               <td className="px-6 py-2"> Data Analysis & Sufficiency: 25 </td>
//               <td className="px-32 py-2"> Data Analysis & Sufficiency: 40 </td>
//               <td className="px-28 py-2"> Quantitative Ability - 22 </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2">
//                 {" "}
//                 Section-4: Name and Number of Questions{" "}
//               </td>
//               <td className="px-6 py-2"> Not Applicable </td>
//               <td className="px-32 py-2"> Mathematical Skills: 40 </td>
//               <td className="px-28 py-2"> Not Applicable </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2">
//                 {" "}
//                 Section-5: Name and Number of Questions{" "}
//               </td>
//               <td className="px-6 py-2"> Indian & Global Environment : 25 </td>
//               <td className="px-32 py-2"> Indian & Global Environment : 40 </td>
//               <td className="px-28 py-2"> Not Applicable </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2">
//                 {" "}
//                 Facility to Choose Order of Sections{" "}
//               </td>
//               <td className="px-6 py-2"> Yes </td>
//               <td className="px-32 py-2">
//                 {" "}
//                 Yes, any section/question within overall time limit{" "}
//               </td>
//               <td className="px-28 py-2">
//                 {" "}
//                 No, Should follow predefined sectional order{" "}
//               </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2"> Individual Sectional time limit </td>
//               <td className="px-6 py-2"> No </td>
//               <td className="px-32 py-2">
//                 {" "}
//                 Yes, Candidate to complete the test in 150 minutes{" "}
//               </td>
//               <td className="px-28 py-2">
//                 {" "}
//                 Yes, each section with 40 Minutes time limit{" "}
//               </td>
//             </tr>
//             <tr className="border-2 border-black">
//               <td className="px-6 py-2">
//                 {" "}
//                 Top MBA Colleges accepting exam score{" "}
//               </td>
//               <td className="px-6 py-2"> DMTIMS </td>
//               <td className="px-32 py-2">
//                 {" "}
//                 Christ University, NDIM , DSIMS, IPE, IESMCRC, FIIB among 600
//                 MBA Colleges{" "}
//               </td>
//               <td className="px-28 py-2">
//                 {" "}
//                 20 IIMs, FMS, MDI, NITIE, SPJIMR, IMI, IMT, IITs, TAPMI, XIMB
//                 and hundreds of others{" "}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* large screen */}
//       <div className="mx-4 mb-8 overflow-x-auto lg:hidden">
//         <table className="mx-8 mb-8 w-full table-auto border-2 border-black px-8 ">
//           <thead className="border-2 border-black ">
//             <tr className="border-2 border-black ">
//               <th className="px-4 py-2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4">
//                 Component
//               </th>
//               <th className="px-4 py-2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4">
//                 DATE 2024
//               </th>
//               <th className="px-4 py-2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4">
//                 CET 2024
//               </th>
//               <th className="px-4 py-2 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4">
//                 IIMs CAT 2023
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border border-black">
//               <td className="px-4 py-2">Total Questions</td>
//               <td className="px-4 py-2">200</td>
//               <td className="px-4 py-2">200</td>
//               <td className="px-4 py-2">66</td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2">
//                 Overall Time Limit to Attempt the Exam
//               </td>
//               <td className="px-4 py-2">2 hours</td>
//               <td className="px-4 py-2">2 ½ hours</td>
//               <td className="px-4 py-2">2 hours</td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2">Questions For DATE</td>
//               <td className="px-4 py-2">All MCQs</td>
//               <td className="px-4 py-2">All MCQs</td>
//               <td className="px-4 py-2">
//                 70% questions are MCQs, rest Non-MCQs
//               </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2"> Answer Options for MCQs</td>
//               <td className="px-4 py-2"> 4 </td>
//               <td className="px-4 py-2"> 4 </td>
//               <td className="px-4 py-2"> 4 </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2">
//                 {" "}
//                 Marks Awarded For Each Correct Answer{" "}
//               </td>
//               <td className="px-4 py-2"> 1 </td>
//               <td className="px-4 py-2"> 1 </td>
//               <td className="px-4 py-2"> 3 </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2"> Negative Marking </td>
//               <td className="px-4 py-2"> n/a </td>
//               <td className="px-4 py-2"> 0.25 mark </td>
//               <td className="px-4 py-2">
//                 {" "}
//                 MCQs with 1/3 negative marking; No negative marking for Non-MCQs{" "}
//               </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2"> Exam Difficulty Level </td>
//               <td className="px-4 py-2"> Easy to Moderate </td>
//               <td className="px-4 py-2"> Easy to Moderate </td>
//               <td className="px-4 py-2"> Difficult </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2"> Number of Sections </td>
//               <td className="px-4 py-2"> 4 </td>
//               <td className="px-4 py-2"> 5 </td>
//               <td className="px-4 py-2"> 3 </td>
//             </tr>
//             <tr>
//               <td className="px-4 py-2">
//                 {" "}
//                 Section-1: Name and Number of Questions{" "}
//               </td>
//               <td className="px-4 py-2"> Language Comprehension: 25 </td>
//               <td className="px-4 py-2"> Language Comprehension: 40 </td>
//               <td className="px-4 py-2">
//                 {" "}
//                 Verbl Ability & Reading Comprehension: 24{" "}
//               </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2">
//                 {" "}
//                 Section-2: Name and Number of Questions{" "}
//               </td>
//               <td className="px-4 py-2">
//                 {" "}
//                 Intelligence & Critical Reasoning: 25{" "}
//               </td>
//               <td className="px-4 py-2">
//                 {" "}
//                 Intelligence & Critical Reasoning: 40{" "}
//               </td>
//               <td className="px-4 py-2">
//                 {" "}
//                 Data Interpretation & Logical Reasoning - 20{" "}
//               </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2">
//                 {" "}
//                 Section-3: Name and Number of Questions
//               </td>
//               <td className="px-4 py-2"> Data Analysis & Sufficiency: 25 </td>
//               <td className="px-4 py-2"> Data Analysis & Sufficiency: 40 </td>
//               <td className="px-4 py-2"> Quantitative Ability - 22 </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2">
//                 {" "}
//                 Section-4: Name and Number of Questions{" "}
//               </td>
//               <td className="px-4 py-2"> Not Applicable </td>
//               <td className="px-4 py-2"> Mathematical Skills: 40 </td>
//               <td className="px-4 py-2"> Not Applicable </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2">
//                 {" "}
//                 Section-5: Name and Number of Questions{" "}
//               </td>
//               <td className="px-4 py-2"> Indian & Global Environment : 25 </td>
//               <td className="px-4 py-2"> Indian & Global Environment : 40 </td>
//               <td className="px-4 py-2"> Not Applicable </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2">
//                 {" "}
//                 Facility to Choose Order of Sections{" "}
//               </td>
//               <td className="px-4 py-2"> Yes </td>
//               <td className="px-4 py-2">
//                 {" "}
//                 Yes, any section/question within overall time limit{" "}
//               </td>
//               <td className="px-4 py-2">
//                 {" "}
//                 No, Should follow predefined sectional order{" "}
//               </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2"> Individual Sectional time limit </td>
//               <td className="px-4 py-2"> No </td>
//               <td className="px-4 py-2">
//                 {" "}
//                 Yes, Candidate to complete the test in 150 minutes{" "}
//               </td>
//               <td className="px-4 py-2">
//                 {" "}
//                 Yes, each section with 40 Minutes time limit{" "}
//               </td>
//             </tr>
//             <tr className="border border-black">
//               <td className="px-4 py-2">
//                 {" "}
//                 Top MBA Colleges accepting exam score{" "}
//               </td>
//               <td className="px-4 py-2"> DMTIMS </td>
//               <td className="px-4 py-2">
//                 {" "}
//                 Christ University, NDIM , DSIMS, IPE, IESMCRC, FIIB among 600
//                 MBA Colleges{" "}
//               </td>
//               <td className="px-4 py-2">
//                 {" "}
//                 20 IIMs, FMS, MDI, NITIE, SPJIMR, IMI, IMT, IITs, TAPMI, XIMB
//                 and hundreds of others{" "}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* extra links */}
//       <h4 className="px-6 py-2 text-base font-semibold">
//         III. Register for DATE:
//       </h4>
//       <Link
//         className="text-[#ED1651] "
//         href="https://forms.gle/fDP49ZAAkqzRHiiQ8"
//       >
//         <p className="px-6">https://forms.gle/fDP49ZAAkqzRHiiQ8</p>
//       </Link>

//       <h4 className="px-6 py-2 text-base font-semibold">
//         IV. MOCK DATE TEST Link:
//       </h4>

//       <p className="px-6 text-[#ED1651]">(will be provided)</p>
//     </>
//   );
// };

// export default Table;

































/** new code or changes apply here */
import React from "react";
import Link from "next/link";
const Table = () => {
  return (
    <>

      <div className="mx-4  py-4">
        <table className="mx-auto   border-2 border-black  ">
          <thead className="border-2 border-black font-thin ">
            <tr className="border-2 border-black text-sm  ">
              <th className=" py-2 sm:py-4 text-xs sm:text-lg">
                Component
              </th>
              <th className="py-2 sm:py-4 text-xs sm:text-lg">
                DATE 2024
              </th>
              <th className=" py-2 sm:py-4 text-xs sm:text-lg">
                CET 2024
              </th>
              <th className="py-2 sm:py-4 text-xs sm:text-lg">
                IIMs CAT 2023
              </th>
            </tr>
          </thead>
          <tbody className="text-xs  text-center sm:text-lg">
            <tr className="border border-black    ">
              <td className=" py-2 sm:py-4">Total Questions</td>
              <td className="py-2 sm:py-4">200</td>
              <td className="py-2 sm:py-4">200</td>
              <td className="py-2 sm:py-4">66</td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4">
                Overall Time Limit to Attempt the Exam
              </td>
              <td className="py-2 sm:py-4">2 hours</td>
              <td className="py-2 sm:py-4">2 ½ hours</td>
              <td className="py-2 sm:py-4">2 hours</td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4">Questions For DATE</td>
              <td className="py-2 sm:py-4">All MCQs</td>
              <td className="py-2 sm:py-4">All MCQs</td>
              <td className="py-2 sm:py-4">
                70% questions are MCQs, rest Non-MCQs
              </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4"> Answer Options for MCQs</td>
              <td className="py-2 sm:py-4"> 4 </td>
              <td className="py-2 sm:py-4"> 4 </td>
              <td className="py-2 sm:py-4"> 4 </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4">
                {" "}
                Marks Awarded For Each Correct Answer{" "}
              </td>
              <td className="py-2 sm:py-4"> 1 </td>
              <td className="py-2 sm:py-4"> 1 </td>
              <td className="py-2 sm:py-4"> 3 </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4"> Negative Marking </td>
              <td className="py-2 sm:py-4"> n/a </td>
              <td className="py-2 sm:py-4"> 0.25 mark </td>
              <td className="py-2 sm:py-4">
                {" "}
                MCQs with 1/3 negative marking; No negative marking for Non-MCQs{" "}
              </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4"> Exam Difficulty Level </td>
              <td className="py-2 sm:py-4"> Easy to Moderate </td>
              <td className="py-2 sm:py-4"> Easy to Moderate </td>
              <td className="py-2 sm:py-4"> Difficult </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4"> Number of Sections </td>
              <td className="py-2 sm:py-4"> 4 </td>
              <td className="py-2 sm:py-4"> 5 </td>
              <td className="py-2 sm:py-4"> 3 </td>
            </tr>
            <tr>
              <td className="py-2 sm:py-4">
                {" "}
                Section-1: Name and Number of Questions{" "}
              </td>
              <td className="py-2 sm:py-4"> Language Comprehension: 25 </td>
              <td className="py-2 sm:py-4"> Language Comprehension: 40 </td>
              <td className="py-2 sm:py-4">
                {" "}
                Verbl Ability & Reading Comprehension: 24{" "}
              </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4">
                {" "}
                Section-2: Name and Number of Questions{" "}
              </td>
              <td className="py-2 sm:py-4">
                {" "}
                Intelligence & Critical Reasoning: 25{" "}
              </td>
              <td className="py-2 sm:py-4">
                {" "}
                Intelligence & Critical Reasoning: 40{" "}
              </td>
              <td className="py-2 sm:py-4">
                {" "}
                Data Interpretation & Logical Reasoning - 20{" "}
              </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4">
                {" "}
                Section-3: Name and Number of Questions
              </td>
              <td className="py-2 sm:py-4"> Data Analysis & Sufficiency: 25 </td>
              <td className="py-2 sm:py-4"> Data Analysis & Sufficiency: 40 </td>
              <td className="py-2 sm:py-4"> Quantitative Ability - 22 </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4">
                {" "}
                Section-4: Name and Number of Questions{" "}
              </td>
              <td className="py-2 sm:py-4"> Not Applicable </td>
              <td className="py-2 sm:py-4"> Mathematical Skills: 40 </td>
              <td className="py-2 sm:py-4"> Not Applicable </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4">
                {" "}
                Section-5: Name and Number of Questions{" "}
              </td>
              <td className="py-2 sm:py-4"> Indian & Global Environment : 25 </td>
              <td className="py-2 sm:py-4"> Indian & Global Environment : 40 </td>
              <td className="py-2 sm:py-4"> Not Applicable </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4">
                {" "}
                Facility to Choose Order of Sections{" "}
              </td>
              <td className="py-2 sm:py-4"> Yes </td>
              <td className="py-2 sm:py-4">
                {" "}
                Yes, any section/question within overall time limit{" "}
              </td>
              <td className="py-2 sm:py-4">
                {" "}
                No, Should follow predefined sectional order{" "}
              </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4"> Individual Sectional time limit </td>
              <td className="py-2 sm:py-4"> No </td>
              <td className="py-2 sm:py-4">
                {" "}
                Yes, Candidate to complete the test in 150 minutes{" "}
              </td>
              <td className="py-2 sm:py-4">
                {" "}
                Yes, each section with 40 Minutes time limit{" "}
              </td>
            </tr>
            <tr className="border border-black">
              <td className="py-2 sm:py-4">
                {" "}
                Top MBA Colleges accepting exam score{" "}
              </td>
              <td className="py-2 sm:py-4"> DMTIMS </td>
              <td className="py-2 sm:py-4">
                {" "}
                Christ University, NDIM , DSIMS, IPE, IESMCRC, FIIB among 600
                MBA Colleges{" "}
              </td>
              <td className="py-2 sm:py-4">
                {" "}
                20 IIMs, FMS, MDI, NITIE, SPJIMR, IMI, IMT, IITs, TAPMI, XIMB
                and hundreds of others{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* extra links */}
      <h4 className="px-6 py-2 text-base font-semibold">
        III. Register for DATE:
      </h4>
      <Link
        className="text-[#ED1651] "
        href="https://forms.gle/fDP49ZAAkqzRHiiQ8"
      >
        <p className="px-6">https://forms.gle/fDP49ZAAkqzRHiiQ8</p>
      </Link>

      <h4 className="px-6 py-2 text-base font-semibold">
        IV. MOCK DATE TEST Link:
      </h4>

      <p className="px-6 text-[#ED1651]">(will be provided)</p>
    </>
  );
};

export default Table;













