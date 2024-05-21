// import Image from "next/legacy/image";
// import React from "react";

// function Festivities() {
//   const data = [
//     {
//       title: "Holi 2023",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116670981591810048/28358_1.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116670984737521764/28359.png",
//         },
//       ],
//     },
//     {
//       title: "Decoding Budget 2023",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116671144297238538/28361.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116671151150731374/28360.png",
//         },
//       ],
//     },
//     {
//       title: "Hostel Life",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116671550238773288/28362.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116671558316982292/28363.png",
//         },
//       ],
//     },
//     {
//       title: "Ektaara 2023",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116671670124564550/28364.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116671676076281906/28365.png",
//         },
//       ],
//     },
//     {
//       title: "News Bulletin",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672040175407274/28366_1.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116671794401788054/28367.png",
//         },
//       ],
//     },
//     {
//       title: "Past, Present and Future Evolution",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672173826912326/28368.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672179627630632/28369.png",
//         },
//       ],
//     },
//     {
//       title: "DMTIMS reaches Nagaland",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672419134980166/28370.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672424822452254/28371.png",
//         },
//       ],
//     },
//     {
//       title: "Faculty Development Program",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672550626402375/28372.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672556850749520/28373.png",
//         },
//       ],
//     },
//     {
//       title: "Nuances of NBA Accreditation",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672661934837830/28374.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672674446454834/28375.png",
//         },
//       ],
//     },
//     {
//       title: "Farewell PGDM Batch 2021-23",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672786837016616/28376.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672796320350229/28377_1.png",
//         },
//       ],
//     },
//     {
//       title: "Pehchaan 2023",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672911055523881/28378_1.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672917879672842/28379.png",
//         },
//       ],
//     },
//     {
//       title: "Social Relevance Project Presentation",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673039573196850/28380.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673048788082749/28381_1.png",
//         },
//       ],
//     },
//     {
//       title: "Faculty Management Program",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673173929345045/28382.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673178345947136/28383.png",
//         },
//       ],
//     },
//     {
//       title: "Culture Committee “Mahamanavas Manvandana ”",
//       images: [
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673305156534385/28384.png",
//         },
//         {
//           src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673314711158834/28385.png",
//         },
//       ],
//     },
//   ];

//   return (
//     <section className="flex flex-col bg-[#4C477A] px-4">
//       <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
//         {data.map((item, i) => (
//           <div key={i} className="pb-6">
//             <h3 className="dmtims-title pb-2 text-white">{item.title}</h3>
//             <div className="my-6 grid grid-cols-1 gap-8 md:grid-cols-2">
//               {item.images.map((image, id) => (
//                 <div
//                   key={id}
//                   className="relative h-[250px] lg:h-[300px] xl:h-[400px]"
//                 >
//                   <Image
//                     className=""
//                     alt={`${i}-${id}`}
//                     src={image.src}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Festivities;















/**my code */
import Image from "next/legacy/image";
import React from "react";
import holi1 from '../../public/newImages/holi1.webp'
import holi2 from '../../public/newImages/holi2.webp'
import decodingBudget1 from '../../public/newImages/decodingBudget1.webp'
import decodingBudget2 from '../../public/newImages/decodingBudget2.webp'
import hostelLife1 from '../../public/newImages/hostelLife1.webp'
import hostelLife2 from '../../public/newImages/hostelLife2.webp'
import ektaara1 from '../../public/newImages/ektaara1.webp'
import ektaara2 from '../../public/newImages/ektaara2.webp'
import news1 from '../../public/newImages/news1.webp'
import news2 from '../../public/newImages/news2.webp'
import ppfe1 from '../../public/newImages/ppfe1.webp'
import ppfe2 from '../../public/newImages/ppfe2.webp'

function Festivities() {
  const data = [
    {
      title: "Holi 2023",
      images: [
        {
          src: holi1,
         },
        {
          src: holi2,
        },
      ],
    },
    {
      title: "Decoding Budget 2023",
      images: [
        {
          src: decodingBudget1,
        },
        {
          src: decodingBudget2,
         },
      ],
    },
    {
      title: "Hostel Life",
      images: [
        {
          src: hostelLife1,
         },
        {
          src: hostelLife2,
          },
      ],
    },
    {
      title: "Ektaara 2023",
      images: [
        {
          src: ektaara1,
        },
        {
          src: ektaara2,
         },
      ],
    },
    {
      title: "News Bulletin",
      images: [
        {
          src: news1,
        },
        {
          src:news2,
         },
      ],
    },
    {
      title: "Past, Present and Future Evolution",
      images: [
        {
          src: ppfe1,
        },
        {
          src: ppfe2,
        },
      ],
    },
    {
      title: "DMTIMS reaches Nagaland",
      images: [
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672419134980166/28370.png",
        },
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672424822452254/28371.png",
        },
      ],
    },
    {
      title: "Faculty Development Program",
      images: [
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672550626402375/28372.png",
        },
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672556850749520/28373.png",
        },
      ],
    },
    {
      title: "Nuances of NBA Accreditation",
      images: [
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672661934837830/28374.png",
        },
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672674446454834/28375.png",
        },
      ],
    },
    {
      title: "Farewell PGDM Batch 2021-23",
      images: [
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672786837016616/28376.png",
        },
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672796320350229/28377_1.png",
        },
      ],
    },
    {
      title: "Pehchaan 2023",
      images: [
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672911055523881/28378_1.png",
        },
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116672917879672842/28379.png",
        },
      ],
    },
    {
      title: "Social Relevance Project Presentation",
      images: [
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673039573196850/28380.png",
        },
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673048788082749/28381_1.png",
        },
      ],
    },
    {
      title: "Faculty Management Program",
      images: [
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673173929345045/28382.png",
        },
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673178345947136/28383.png",
        },
      ],
    },
    {
      title: "Culture Committee “Mahamanavas Manvandana ”",
      images: [
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673305156534385/28384.png",
        },
        {
          src: "https://cdn.discordapp.com/attachments/929834261568167986/1116673314711158834/28385.png",
        },
      ],
    },
  ];

  return (
    <section className="flex flex-col bg-[#4C477A] px-4">
      <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
        {data.map((item, i) => (
          <div key={i} className="pb-6">
            <h3 className="dmtims-title pb-2 text-white">{item.title}</h3>
            <div className="my-6 grid grid-cols-1 gap-8 md:grid-cols-2">
              {item.images.map((image, id) => (
                <div
                  key={id}
                  className="relative h-[250px] lg:h-[300px] xl:h-[400px]"
                >
                  <Image
                    className=""
                    alt={`${i}-${id}`}
                    src={image.src}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Festivities;
