// import Image from "next/legacy/image";
// import React from "react";

// function CampusHostelBanner() {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
//         <Image
//           priority
//           alt="Careers-Banner"
//           src={
//             "https://cdn.discordapp.com/attachments/929834261568167986/1115231984965394565/image_92.webp"
//           }
//           layout="fill"
//           objectFit="cover"
//           objectPosition={"top"}
//         />
//       </div>
//     </section>
//   );
// }

// export default CampusHostelBanner;









/**my code */

import Image from "next/legacy/image";
import React from "react";
import CampusHostel from "../../public/newImages/campusHostel.png";
function CampusHostelBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
        <Image
          priority
          alt="Careers-Banner"
          src={CampusHostel}
          layout="fill"
          objectFit="cover"
          objectPosition={"top"}
        />
      </div>
    </section>
  );
}

export default CampusHostelBanner;
