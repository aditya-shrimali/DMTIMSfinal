// import Image from "next/legacy/image";
// import React from "react";

// function SectoralPlacements() {
//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto my-4 w-full max-w-screen-2xl pt-8">
//           <h2 className="dmtims-title pb-4">
//             Sectoral Placements of Batch 2020-22
//           </h2>
//           <p id="Second-Year-PGDM" className="dmtims-subtitle py-2">
//             Placement Statistics - 2023 @ 12 Lacs High Currently
//           </p>
//           <div className="relative my-6 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]">
//             <Image
//               className=""
//               alt={`SectoralPlacements`}
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/1109365515857702962/Sector_Wise_Overview_Chart.webp"
//               }
//               layout="fill"
//               objectFit="contain"
//             />
//           </div>
//           <p
//             id="Second-Year-PGDM"
//             className="dmtims-text py-2 text-center font-bold"
//           >
//             PGDM Commenced 2023 with offer of Rs. 10 Lacs Package
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SectoralPlacements;










/**my code */
import Image from "next/legacy/image";
import React from "react";
import sectoral from '../../public/newImages/sectoral.png'
function SectoralPlacements() {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl pt-8">
          <h2 className="dmtims-title pb-4">
            Sectoral Placements of Batch 2020-22
          </h2>
          <p id="Second-Year-PGDM" className="dmtims-subtitle py-2">
            Placement Statistics - 2023 @ 12 Lacs High Currently
          </p>
          <div className="relative my-6 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]">
            <Image
              className=""
              alt={`SectoralPlacements`}
              src={sectoral}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p
            id="Second-Year-PGDM"
            className="dmtims-text py-2 text-center font-bold"
          >
            PGDM Commenced 2023 with offer of Rs. 10 Lacs Package
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectoralPlacements;

