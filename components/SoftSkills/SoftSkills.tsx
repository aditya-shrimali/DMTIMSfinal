// import Image from "next/image";
// import specialization3 from "../../public/images/specialization3.png";

// const SoftSkills = () => {
//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto my-4 w-full max-w-screen-2xl">
//           {/* <h3 id="Soft-Skills" className="dmtims-subtitle py-2 lg:py-6">
//             Soft Skills
//           </h3> */}

//           <h5 className=" text-sm ">
//             <b>European University</b>
//           </h5>
//           <h1 id="Full-Time-PGDM" className="dmtims-title lg:pb-2">
//             {/* Post Graduate Diploma in Management */}
//             MBA
//           </h1>
//           <h3
//             id="Program-Overview"
//             className="dmtims-subtitle border-1 rounded-md bg-slate-100 px-4 py-2"
//           >
//             {/* Program Overview */}
//             Overview
//             <p className="pb-2 text-base font-medium">
//               India’s One and Only Institute to Offer a QS 5 Star European
//               University MBA Degree after Completion of PGDM through Credit
//               Transfer. To successfully complete additional European University
//               MBA degree, you will be required to undertake the completion of a
//               comprehensive dissertation, as per the selection of
//               specialization. This dissertation, a culmination of your academic
//               efforts, holds significant weight, contributing a total of 60
//               credits transfer, towards the fulfilment of your degree
//               requirements.
//             </p>
//           </h3>
//         </div>
//         {/* list of specialization */}

//         <b className="text-5xl   font-extrabold ">Specialization</b>
//         <div className="flex   sm:gap-y-8 lg:gap-96">
//         <div className="text-xl font-medium text-gray-500  pt-8">
//           <p className="pt-0">
//           <li className="pb-2"> Marketing & Sales Management</li>
//           <li className ="pb-2"> Logistics & Supply Chain Management</li>
//           <li className ="pb-2"> Information technology & Systems Management</li>
//           <li className ="pb-2">Corporate Social Responsibility</li>
//           <li className ="pb-2"> Operations Management</li>
//           <li className ="pb-2"> Hospitality & Tourism Management</li>
//           <li className ="pb-2"> Human Resource Management</li>
//           <li className ="pb-2"> Innovation Management & Design Thinking</li>
//           <li className ="pb-2"> Leisure Studies</li>
//           <li className ="pb-2"> Finance </li>
//           <li className ="pb-2"> Retail Management</li>
//           <li className ="pb-2"> Strategy </li>
//           <li className ="pb-2"> Sports Management </li>
//           <li className ="pb-2"> Leadership </li>
//           <li className ="pb-2"> General Management </li>
//           <li className ="pb-2"> Enterpreneurship </li>
//           <li className ="pb-2"> International Business </li>
//           </p>
//          </div>
//         <Image
//           priority
//           className=" h-16 w-16 lg:h-auto lg:w-auto"
//           // height={100}
//           // width={800}
//           src={specialization3}
//           alt="specialization3"
//         />
//         </div>

//       </div>
//       <div className="flex flex-col bg-[#4C477A] px-4 py-8">
//         <div className="mx-auto w-full max-w-screen-2xl py-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
//             <div className="flex flex-col">
//               <p className="dmtims-text font-normal text-white">
//                 Foreign Language
//               </p>
//               <p className="dmtims-text font-normal text-white">
//                 Negotiation Skills
//               </p>
//             </div>
//             <div className="flex flex-col">
//               <p className="dmtims-text font-normal text-white">
//                 Art of Introduction
//               </p>
//               <p className="dmtims-text font-normal text-white">
//                 Corporate Etiquette
//               </p>
//             </div>
//             <div className="flex flex-col">
//               <p className="dmtims-text font-normal text-white">
//                 Stress Management
//               </p>
//               <p className="dmtims-text font-normal text-white">
//                 Personality Development
//               </p>
//             </div>
//             <div className="flex flex-col">
//               <p className="dmtims-text font-normal text-white">
//                 Critical Thinking Skills
//               </p>
//               <p className="dmtims-text font-normal text-white">
//                 Emotional Intelligence
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SoftSkills;

/** let's try something new */
import Image from "next/image";
import specialization3 from "../../public/images/specialization3.png";
import teaching from "../../public/images/teaching.png";
import teaching3 from "../../public/images/teaching3.png";

const SoftSkills = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl">
          {/* <h3 id="Soft-Skills" className="dmtims-subtitle py-2 lg:py-6">
            Soft Skills
          </h3> */}

          <h5 className=" text-sm ">
            <b>European University</b>
          </h5>
          <h1 id="Full-Time-PGDM" className="dmtims-title lg:pb-2">
            {/* Post Graduate Diploma in Management */}
            MBA
          </h1>
          <h3
            id="Program-Overview"
            className="dmtims-subtitle border-1 rounded-md bg-slate-100 px-4 py-2"
          >
            {/* Program Overview */}
            Overview
            <p className="pb-2 text-base font-medium">
              India’s One and Only Institute to Offer a QS 5 Star European
              University MBA Degree after Completion of PGDM through Credit
              Transfer. To successfully complete additional European University
              MBA degree, you will be required to undertake the completion of a
              comprehensive dissertation, as per the selection of
              specialization. This dissertation, a culmination of your academic
              efforts, holds significant weight, contributing a total of 60
              credits transfer, towards the fulfilment of your degree
              requirements.
            </p>
          </h3>
        </div>
      </div>

      <div className="mx-8">
        {/* list of specialization */}

        <b className="text-5xl   font-extrabold ">Specialization</b>
        <Image
          priority
          // className=" h-16 w-16 lg:h-auto lg:w-auto"
          // className=" min-h-8 min-w-8 lg:h-auto lg:w-auto"
          className=" flex md:hidden"
          src={specialization3}
          alt="specialization3"
        />
        {/* <div className="flex   sm:gap-y-8 lg:gap-80"> */}
        <div className="flex  sm:gap-y-8 lg:w-full  lg:space-x-40  xl:space-x-80">
          <div className="pt-8 text-xl font-medium  text-gray-500">
            <div className="pt-0">
              <li className="pb-2"> Marketing & Sales Management</li>
              <li className="pb-2"> Logistics & Supply Chain Management</li>
              <li className="pb-2">
                {" "}
                Information technology & Systems Management
              </li>
              <li className="pb-2">Corporate Social Responsibility</li>
              <li className="pb-2"> Operations Management</li>
              <li className="pb-2"> Hospitality & Tourism Management</li>
              <li className="pb-2"> Human Resource Management</li>
              <li className="pb-2"> Innovation Management & Design Thinking</li>
              <li className="pb-2"> Leisure Studies</li>
              <li className="pb-2"> Finance </li>
              <li className="pb-2"> Retail Management</li>
              <li className="pb-2"> Strategy </li>
              <li className="pb-2"> Sports Management </li>
              <li className="pb-2"> Leadership </li>
              <li className="pb-2"> General Management </li>
              <li className="pb-2"> Enterpreneurship </li>
              <li className="pb-2"> International Business </li>
            </div>
          </div>
          <Image
            priority
            // className=" h-16 w-16 lg:h-auto lg:w-auto"
            // className=" min-h-8 min-w-8 lg:h-auto lg:w-auto"
            className="hidden md:flex lg:pr-8"
            src={specialization3}
            alt="specialization3"
          />
        </div>
        <div>
          <div className="mt-3 border-t-4">
            <div className="m-auto max-w-lg sm:max-w-2xl sm:grid-cols-2 md:max-w-3xl">
              <div className="flex">
                <Image
                  priority
                  //  className=""
                  src={teaching}
                  alt="teaching"
                />
                <Image
                  priority
                  // className="sm:rounded-br-full"
                  src={teaching3}
                  alt="teaching"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col bg-[#4C477A] px-4 py-8">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                Foreign Language
              </p>
              <p className="dmtims-text font-normal text-white">
                Negotiation Skills
              </p>
            </div>
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                Art of Introduction
              </p>
              <p className="dmtims-text font-normal text-white">
                Corporate Etiquette
              </p>
            </div>
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                Stress Management
              </p>
              <p className="dmtims-text font-normal text-white">
                Personality Development
              </p>
            </div>
            <div className="flex flex-col">
              <p className="dmtims-text font-normal text-white">
                Critical Thinking Skills
              </p>
              <p className="dmtims-text font-normal text-white">
                Emotional Intelligence
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default SoftSkills;
