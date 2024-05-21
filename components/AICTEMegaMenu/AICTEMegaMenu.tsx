// import Link from "next/link";
// import React, { Dispatch, SetStateAction } from "react";

// interface Props {
//   setIsAICTEHovered: Dispatch<SetStateAction<boolean>>;
//   isAICTEHovered: boolean;
// }

// function AICTEMegaMenu({ isAICTEHovered, setIsAICTEHovered }: Props) {
//   return (
//     <div
//       onMouseEnter={() => setIsAICTEHovered(true)}
//       onMouseLeave={() => setIsAICTEHovered(false)}
//       className={`absolute hidden w-full bg-white px-4 lg:block ${
//         isAICTEHovered ? "max-h-[100vh]" : "max-h-0"
//       } transform overflow-hidden shadow-md transition-all duration-300`}
//     >
//       <div className="mx-auto flex w-full max-w-screen-2xl py-8">
//         <div className="grid flex-grow grid-cols-3 gap-4">
//           <div className="flex flex-col">
//             <div className="flex">
//               <Link legacyBehavior href={"/files/AICTE-23-24.pdf"}>
//                 <a className="mb-4 text-xl font-medium" target="_blank">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     AICTE-23-24
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <div className="flex">
//               <Link legacyBehavior href={"/files/AICTE-22-23.pdf"}>
//                 <a className="mb-4 text-xl font-medium" target="_blank">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     AICTE-22-23
//                   </span>
//                 </a>
//               </Link>
//             </div>
//             <div className="flex">
//               <Link legacyBehavior href={"/files/AICTE-21-22.pdf"}>
//                 <a className="mb-4 text-xl font-medium" target="_blank">
//                   <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
//                     AICTE-21-22
//                   </span>
//                 </a>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AICTEMegaMenu;







/**my changes */
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  setIsAICTEHovered: Dispatch<SetStateAction<boolean>>;
  isAICTEHovered: boolean;
}

function AICTEMegaMenu({ isAICTEHovered, setIsAICTEHovered }: Props) {
  return (
    <div
      onMouseEnter={() => setIsAICTEHovered(true)}
      onMouseLeave={() => setIsAICTEHovered(false)}
      className={`absolute hidden w-full bg-white px-4 lg:block ${
        isAICTEHovered ? "max-h-[100vh]" : "max-h-0"
      } transform overflow-hidden shadow-md transition-all duration-300`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl py-8">
        <div className="grid flex-grow grid-cols-3 gap-4">
          <div className="flex flex-col">
            {/* adding new pdf */}
            <div className="flex">
              <Link legacyBehavior href={"/files/EOA Report 2024-25.pdf"}>
                <a className="mb-4 text-xl font-medium" target="_blank">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                  {/* EOA Report 2024-25 */}
                  AICTE-24-25
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link legacyBehavior href={"/files/AICTE-23-24.PDF"}>
                <a className="mb-4 text-xl font-medium" target="_blank">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    AICTE-23-24
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link legacyBehavior href={"/files/AICTE-22-23.PDF"}>
                <a className="mb-4 text-xl font-medium" target="_blank">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    AICTE-22-23
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link legacyBehavior href={"/files/AICTE-21-22.PDF"}>
                <a className="mb-4 text-xl font-medium" target="_blank">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    AICTE-21-22
                  </span>
                </a>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AICTEMegaMenu;

