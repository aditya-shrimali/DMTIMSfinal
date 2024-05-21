// import Image from "next/legacy/image";
// import React from "react";

// function IndustrySpeakers() {
//   const speakers = [
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220403820957726/28358.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220404122951773/28359.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220404387184741/28360.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220586088640513/28361.png ",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220614064636015/28362.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220635510124585/28363.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220789311057991/28364.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220800916697138/28365.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220812753014846/28366.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220952062636162/28367.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220958534434816/28368.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115220965744455750/28369.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221106790518784/28370.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221114440917002/28371.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221121265053696/28372.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221292195516457/28373.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221300068237382/28374.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221303964749854/28375.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221429131161610/28377.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221444230656061/28376.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221452510203934/28378.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221560039579658/28380.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221568918929408/28379.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221572387618816/28381.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221739429957682/28383.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221741741019236/28382.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221752482639983/28384.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221887161737216/28386.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221897437777980/28385.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115221900117934080/28387.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115222035866595348/28388.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115222045333147730/28389.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115222050638942258/28390.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115222192448356423/28391.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115222205266133002/28392.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115222207682056242/28394.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115222350514901061/28395.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115222360094691409/28396.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115222364599373926/28397.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115222462502805544/28398.png",
//     },
//     {
//       src: "https://cdn.discordapp.com/attachments/929834261568167986/1115222469037535372/28399.png",
//     },
//   ];

//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-4">
//           <h2 id="PGDM-Course-Highlights" className="dmtims-title py-12">
//             Industry Speakers for Corporate Interface
//           </h2>
//           <div
//             className={
//               "grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:py-12 xl:grid-cols-3"
//             }
//           >
//             {speakers.map((img, i) => (
//               <div
//                 key={i}
//                 className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[400px] 2xl:h-[450px]"
//               >
//                 <Image
//                   className=""
//                   alt={`speakers-${i}`}
//                   src={img.src}
//                   layout="fill"
//                   objectFit="contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default IndustrySpeakers;

/**my code */

import Image from "next/legacy/image";
import React from "react";

function IndustrySpeakers() {
  const speakers = [
    {
      src: "/newImages/28358.png",
    },
    { src: "/newImages/28359.png" },
    { src: "/newImages/28360.png" },
    { src: "/newImages/28361.png" },
    { src: "/newImages/28362.png" },
    { src: "/newImages/28363.png" },
    { src: "/newImages/28364.png" },
    { src: "/newImages/28365.png" },
    { src: "/newImages/28366.png" },
    { src: "/newImages/28367.png" },
    { src: "/newImages/28368.png" },
    { src: "/newImages/28369.png" },
    { src: "/newImages/28370.png" },
    { src: "/newImages/28371.png" },
    { src: "/newImages/28372.png" },
    { src: "/newImages/28373.png" },
    { src: "/newImages/28374.png" },
    { src: "/newImages/28375.png" },
    { src: "/newImages/28376.png" },
    { src: "/newImages/28377.png" },
    { src: "/newImages/28378.png" },
    { src: "/newImages/28379.png" },
    { src: "/newImages/28380.png" },
    { src: "/newImages/28381.png" },
    { src: "/newImages/28382.png" },
    { src: "/newImages/28383.png" },
    { src: "/newImages/28384.png" },
    { src: "/newImages/28385.png" },
    { src: "/newImages/28386.png" },
    { src: "/newImages/28387.png" },
    { src: "/newImages/28388.png" },
    { src: "/newImages/28389.png" },
    { src: "/newImages/28390.png" },
    { src: "/newImages/28391.png" },
    { src: "/newImages/28392.png" },
    { src: "/newImages/28394.png" },
    { src: "/newImages/28395.png" },
    { src: "/newImages/28396.png" },
    { src: "/newImages/28397.png" },
    { src: "/newImages/28398.png" },
    { src: "/newImages/28399.png" },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-2">
          <h2 id="PGDM-Course-Highlights" className="dmtims-title py-6">
            Industry Speakers for Corporate Interface
          </h2>
          <p className="text-lg font-bold">
            DMTIMS regularly invites guest speakers from the corporate world to
            bridge the gap that exists between the educational curriculum and
            the expectations of the industry. Seminars and workshops are
            organized to train and enlighten students in numerous domains, and
            also to develop their soft skills. These includes sessions on
            Artificial Intelligence, Budget Analysis, Personality Grooming,
            Facing Job Interviews, and much more.
          </p>
          <div
            className={
              "grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:py-12 xl:grid-cols-3"
            }
          >
            {speakers.map((img, i) => (
              <div
                key={i}
                className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[400px] 2xl:h-[450px]"
              >
                <Image
                  className=""
                  alt={`speakers-${i}`}
                  src={img.src}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustrySpeakers;
