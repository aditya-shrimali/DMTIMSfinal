// import Image from "next/legacy/image";
// import React from "react";

// function DMTIMSHostel() {
//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto my-4 w-full max-w-screen-2xl pt-8">
//           <h2 className="dmtims-title pb-4">DMTIMS Hostel</h2>
//           <p id="Second-Year-PGDM" className="dmtims-subtitle py-2">
//             Your Home Away from Home
//           </p>
//           <p className="dmtims-text">
//             Situated within the beautiful campus of DMTIMS College, our hostel
//             provides a safe and supportive environment for students pursuing
//             their academic dreams. Our hostel offers a range of modern amenities
//             to ensure that your stay is comfortable and enjoyable. Each room is
//             well-furnished and equipped with essential furniture, including
//             beds, study desks, chairs, and storage units.
//           </p>
//           <div className="my-6 grid grid-cols-1 gap-8 md:grid-cols-2">
//             <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
//               <Image
//                 className=""
//                 alt={`SectoralPlacements`}
//                 src={
//                   "https://cdn.discordapp.com/attachments/929834261568167986/1115235981642178681/28358.png"
//                 }
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
//               <Image
//                 className=""
//                 alt={`SectoralPlacements`}
//                 src={
//                   "https://cdn.discordapp.com/attachments/929834261568167986/1115235981956747304/28359.png"
//                 }
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <video
//               src="/videos/Hostel.mp4"
//               controls
//               className="relative h-[300px] w-full sm:h-[350px] md:h-[400px] lg:h-[450px]"
//             ></video>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default DMTIMSHostel;






/**my code */
import Image from "next/legacy/image";
import React from "react";
import sectoralPlacements from '../../public/newImages/sectoralPlacements.png'
import sectoralPlacements1 from '../../public/newImages/sectoralPlacements1.png'

function DMTIMSHostel() {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl pt-8">
          <h2 className="dmtims-title pb-4">DMTIMS Hostel</h2>
          <p id="Second-Year-PGDM" className="dmtims-subtitle py-2">
            Your Home Away from Home
          </p>
          <p className="dmtims-text">
            Situated within the beautiful campus of DMTIMS College, our hostel
            provides a safe and supportive environment for students pursuing
            their academic dreams. Our hostel offers a range of modern amenities
            to ensure that your stay is comfortable and enjoyable. Each room is
            well-furnished and equipped with essential furniture, including
            beds, study desks, chairs, and storage units.
          </p>
          <div className="my-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
              <Image
                className=""
                alt={`SectoralPlacements`}
                src={sectoralPlacements}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
              <Image
                className=""
                alt={`SectoralPlacements`}
                src={sectoralPlacements1}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <video
              src="/videos/Hostel.mp4"
              controls
              className="relative h-[300px] w-full sm:h-[350px] md:h-[400px] lg:h-[450px]"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DMTIMSHostel;
