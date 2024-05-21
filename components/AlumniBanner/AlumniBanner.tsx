// import Image from "next/legacy/image";
// import React from "react";

// function AlumniBanner() {
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

// export default AlumniBanner;









/**my code */
import Image from "next/legacy/image";
import React from "react";
import campusHostel from '../../public/newImages/campusHostel.png';

function AlumniBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
        <Image
          priority
          alt="Careers-Banner"
          src={campusHostel}
          layout="fill"
          objectFit="cover"
          objectPosition={"top"}
        />
      </div>
    </section>
  );
}

export default AlumniBanner;
