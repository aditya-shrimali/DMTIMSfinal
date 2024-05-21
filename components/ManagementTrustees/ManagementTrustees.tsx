










// /** 2nd code  */
// import Image from "next/legacy/image";
// import bg from "./images/TrusteesBg.webp";

// const ManagementTrustees = () => {
//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
//           <h2 id="Board-of-Trustees" className="dmtims-title">
//             Board of Trustees
//           </h2>
//           <div className="flex md:items-center md:py-10">
//             <div className="relative mb-4 h-[400px] sm:w-96 md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
//               <Image
//                 priority
//                 src={bg}
//                 alt="bg"
//                 layout="fill"
//                 objectFit="contain"
//                 objectPosition="left"
//               />
//             </div>
//             <div className="flex flex-col">
//               <div className="grid grid-cols-2 gap-x-16 gap-y-8">
//                 <div>
//                   <p className="font-bold text-[#414042] text-base">
                   
//                     Mr. H.G. GEEVARGHESE MAR COORILOS  
//                   </p>
//                   <p className="text-md">
//                   Hon. President & Chief Managing Trustee
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-[#414042] text-base">
//                    H.G. DR. GEEVARGHESE MAR THEOPHILOS
//                   </p>
//                   <p className="text-md">
//                     Vice President
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-[#414042] text-base">
//                     REV. FR. ABRAHAM JOSEPH
//                   </p>
//                   <p className="text-md">
//                   Home Secretary
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-[#414042] text-base">
//                     REV. FR. THOMAS K. CHACKO
//                   </p>
//                   <p className="text-md">
//                    Hon. Member
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-[#414042] text-base">
//                    MR. M. K. VARGHESE
//                   </p>
//                   <p className="text-md">
//                     Hon. Treasurer (CA)
//                     </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-[#414042] text-base">
//                    DR. SUNNY PARIYARAM
//                   </p>
//                   <p className="text-md">
//                     Hon. Member(MD - Sunny & Co.)
//                     </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-[#414042] text-base">
//                     MR. ABRAHAM EASO
//                   </p>
//                   <p className="text-md">
//                    Hon. Member(Former AGM - SBI)
//                     </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-[#414042] text-base">
//                     MR. JACOB VARGHESE
//                   </p>
//                   <p className="text-md">
//                     Hon. Member(CA)
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-[#414042] text-base">
//                     MR. M.C. SUNNY
//                   </p>
//                   <p className="text-md">
//                     Hon. Member(MD - National Builders)
//                     </p>
//                 </div>
//                 <div>
//                   <p className="font-bold text-[#414042] text-base">
//                     DR. PETER PHILIP
//                   </p>
//                   <p className="text-md">
//                     Hon. Member(MD - Phillips Coffee & Director - MRF)
//                     </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ManagementTrustees;



















/** 3rd or new code */











/** 2nd code  */
import Image from "next/legacy/image";
import bg from "./images/TrusteesBg.webp";
import boardOfTrustees from '../../public/images/boardOfTrustees.png'

const ManagementTrustees = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="Board-of-Trustees" className="dmtims-title">
            Board of Trustees
          </h2>

          <Image
          src={boardOfTrustees}
          alt="boarfOfTrustees"

          />
          <div className="flex md:items-center md:py-10">
           
            <div className="flex flex-col">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 lg:gap-x-44 gap-y-8 sm:px-4 px-2">
                <div >
                  <ul>
                   
                   <li className="text-[#201C6F] list-square ">
                    

                  <span className="font-bold text-[#414042] text-base">

                    Mr. H.G. GEEVARGHESE MAR COORILOS  
                  </span>
                    </li>
                  </ul>
                  <p className="text-md">
                  Hon. President & Chief Managing Trustee
                  </p>
                </div>

                <div>
                  <ul >
                  <li className="text-[#201C6F] list-square ">
                    

                    <span className="font-bold text-[#414042] text-base">
                   H.G. DR. GEEVARGHESE MAR THEOPHILOS
                   </span>
                   </li>

                  </ul>
                  <p className="text-md">
                    Vice President
                  </p>
                </div>

                <div>
                  <ul >
                  <li className="text-[#201C6F] list-square ">
                    

                    <span className="font-bold text-[#414042] text-base">
                    REV. FR. ABRAHAM JOSEPH

                  </span>
                  </li>
                  </ul>
                  <p className="text-md">
                  Home Secretary
                  </p>
                </div>

                <div>
                  <ul >
                  <li className="text-[#201C6F] list-square ">
                    

                    <span className="font-bold text-[#414042] text-base">
                    REV. FR. THOMAS K. CHACKO
                    </span>
                    </li>

                  </ul>
                  <p className="text-md">
                   Hon. Member
                  </p>
                </div>


                <div>
                  <ul >
                  <li className="text-[#201C6F] list-square ">
                    

                    <span className="font-bold text-[#414042] text-base">
                   MR. M. K. VARGHESE
                   </span>
                   </li>
                  </ul>
                  <p className="text-md">
                    Hon. Treasurer (CA)
                    </p>
                </div>

                <div>
                  <ul >
                  <li className="text-[#201C6F] list-square ">
                    

                    <span className="font-bold text-[#414042] text-base">
                   DR. SUNNY PARIYARAM
                   </span>
                   </li>

                  </ul>
                  <p className="text-md">
                    Hon. Member(MD - Sunny & Co.)
                    </p>
                </div>

                <div>
                  <ul >
                  <li className="text-[#201C6F] list-square ">
                    

                    <span className="font-bold text-[#414042] text-base">
                    MR. ABRAHAM EASO
                    </span>
                    </li>
                  </ul>
                  <p className="text-md">
                   Hon. Member(Former AGM - SBI)
                    </p>
                </div>

                <div>
                  <ul >
                  <li className="text-[#201C6F] list-square ">
                    

                    <span className="font-bold text-[#414042] text-base">
                    MR. JACOB VARGHESE
                    </span>
                  </li>
                  </ul>
                  <p className="text-md">
                    Hon. Member(CA)
                  </p>
                </div>

                <div>
                  <ul >
                  <li className="text-[#201C6F] list-square ">
                    

                    <span className="font-bold text-[#414042] text-base">
                    MR. M.C. SUNNY
                    </span>
                    </li>
                  </ul>
                  <p className="text-md">
                    Hon. Member(MD - National Builders)
                    </p>
                </div>

                <div>
                  <ul>
                  <li className="text-[#201C6F] list-square ">
                    

                    <span className="font-bold text-[#414042] text-base">
                    DR. PETER PHILIP
                    </span>
                    </li>
                  </ul>
                  <p className="text-md">
                    Hon. Member(MD - Phillips Coffee & Director - MRF)
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

export default ManagementTrustees;
