// import Image from "next/legacy/image";

// const PartnersBanner = () => {
//   return (
//     <section className="relative overflow-hidden bg-white">
//       <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
//         <Image
//           priority
//           alt="PartnersBanner"
//           src={
//             "https://cdn.discordapp.com/attachments/929834261568167986/1115622080818458725/image_92.webp"
//           }
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default PartnersBanner;

















/**my code */
import Image from "next/legacy/image";
import partnersBanner from '../../public/newImages/partnersBanner.png'
const PartnersBanner = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
        <Image
          priority
          alt="PartnersBanner"
          src={partnersBanner}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default PartnersBanner;
