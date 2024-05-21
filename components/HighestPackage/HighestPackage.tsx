// import Image from "next/legacy/image";
// import React from "react";

// function HighestPackage() {
//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto my-4 w-full max-w-screen-2xl pt-8">
//           <h2 className="dmtims-title pb-4">Highest Package</h2>
//           <div className="relative my-8 h-[300px] sm:h-[350px] md:h-[400px] lg:my-12 lg:h-[450px] xl:h-[550px] 2xl:h-[650px]">
//             <Image
//               className=""
//               alt={`highest-package`}
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/1109367957827625020/Group_237659.webp"
//               }
//               layout="fill"
//               objectFit="contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HighestPackage;










/**my code */
import Image from "next/legacy/image";
import React from "react";
import highestPackage from '../../public/newImages/highestPackage.png'


function HighestPackage() {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl pt-8">
          <h2 className="dmtims-title pb-4">Highest Package</h2>
          <div className="relative my-8 h-[300px] sm:h-[350px] md:h-[400px] lg:my-12 lg:h-[450px] xl:h-[550px] 2xl:h-[650px]">
            <Image
              className=""
              alt={`highest-package`}
              src={highestPackage}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighestPackage;
