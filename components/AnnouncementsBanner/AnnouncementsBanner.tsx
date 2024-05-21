// import Image from "next/legacy/image";
// import React from "react";

// function AnnouncementsBanner() {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
//         <Image
//           priority
//           alt="Announcements-Banner"
//           src={
//             "https://cdn.discordapp.com/attachments/929834261568167986/1115624553012535397/image_92_1.webp"
//           }
//           layout="fill"
//           objectFit="cover"
//           objectPosition={"top"}
//         />
//       </div>
//     </section>
//   );
// }

// export default AnnouncementsBanner;











/**my code */
import Image from "next/legacy/image";
import React from "react";
import annoucementBanner from '../../public/newImages/announcementBanner.png'
function AnnouncementsBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
        <Image
          priority
          alt="Announcements-Banner"
          src={annoucementBanner}
          layout="fill"
          objectFit="cover"
          objectPosition={"top"}
        />
      </div>
    </section>
  );
}

export default AnnouncementsBanner;
