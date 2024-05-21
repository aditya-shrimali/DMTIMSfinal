// import Image from "next/legacy/image";

// const CoreValues = () => {
//   const values = [
//     {
//       id: 0,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946719691781591080/Frame_1483.webp",
//       title: "Excellence",
//       text: "We perform to be outstanding and strive for brilliance in every small and big task that we undertake or do.",
//     },
//     {
//       id: 1,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946719852591185940/Frame_1357.webp",
//       title: "Discipline",
//       text: "We honor responsibility and revere our commitments to work and life, with dedication and devotion.",
//     },
//     {
//       id: 2,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946719978734891028/Frame.webp",
//       title: "Integrity",
//       text: "We rise above personal bias, endeavor to sustain trust and conduct ourselves with impeccable loyalty and fairness, in all our interactions, be it personal or professional.",
//     },
//     {
//       id: 3,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946720119227314207/Frame_1357_1.webp",
//       title: "Gratitude",
//       text: "We remain eternally indebted towards the goodness of humanity, society and the benevolence of life.",
//     },
//     {
//       id: 4,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946720242644684800/Frame_1357_4.webp",
//       title: "Ownership",
//       text: "We own up for our words and actions with accountability, in our interactions with people.",
//     },
//     {
//       id: 5,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946720368373141504/Frame_1357_5.webp",
//       title: "Respect",
//       text: "We admire the identity of each individual we interact with and value their dignity, existence and purpose of life.",
//     },
//     {
//       id: 6,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946720494005137428/Frame_1357_2.webp",
//       title: "Passion",
//       text: "We work with an incomparable passion clearly intended to make a positive change towards a holistic and wholesome life.",
//     },
//     {
//       id: 7,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946720625974739014/Frame_1357_3.webp",
//       title: "Eco-system Sensitivity",
//       text: "We aim to protect and promote nature and environment sustainabiIity.",
//     },
//     {
//       id: 8,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946720755297681428/Frame_1357_6.webp",
//       title: "Humility",
//       text: "We believe whatever heights one reaches in life, modesty and unassuming nature, are the true hallmarks and character of a management professional.",
//     },
//     {
//       id: 9,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/946720891922956288/Frame_1357_7.webp",
//       title: "Social Sensitivity",
//       text: "We stay caring and compassionate to the lesser privileged in society.",
//     },
//   ];

//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
//           <h2 id="Core-Values" className="dmtims-title">
//             Core Values
//           </h2>
//           <p className="dmtims-text lg:w-4/5">
//             Values define one's character. At DMTIMS, the foundation of our PGDM
//             students is laid on values which the world reckons by, in a becoming
//             leader. Our pedagogy and all our academic and co curriculars are
//             planned on these ten premium human values, which are imbibed in our
//             students in a conscious way, throughout their two years interaction
//             with us.
//           </p>
//           <div className="my-8 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-x-12 xl:gap-y-8">
//             {values.map(({ id, image, title, text }) => (
//               <div
//                 key={id}
//                 id={title}
//                 className="mx-auto flex w-full max-w-lg flex-col overflow-hidden rounded-xl border-2 border-[#E0E0E0] bg-[#FAFAFA] lg:max-w-none"
//               >
//                 <div className="relative m-6 h-[100px] w-[100px] shadow-lg lg:ml-auto">
//                   <Image
//                     priority
//                     src={image}
//                     alt={title}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className="flex flex-col px-6">
//                   <p className="dmtims-subtitle text-[#EE3768]">{title}</p>
//                   <p className="dmtims-text pb-6">{text}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreValues;










/** My code */
import Image from "next/legacy/image";
import CoreValues1 from "./CoreValues1";

const CoreValues = () => {
  const values = [
    {
      id: 0,
      image:"/newImages/excellence.webp",
      title: "Excellence",
      text: "We perform to be outstanding and strive for brilliance in every small and big task that we undertake or do.",
    },
    {
      id: 1,
      image:
        "/newImages/discipline.webp",
      title: "Discipline",
      text: "We honor responsibility and revere our commitments to work and life, with dedication and devotion.",
    },
    {
      id: 2,
      image:
        "/newImages/integrity.webp",
      title: "Integrity",
      text: "We rise above personal bias, endeavor to sustain trust and conduct ourselves with impeccable loyalty and fairness, in all our interactions, be it personal or professional.",
    },
    {
      id: 3,
      image:
        "/newImages/gratitude.webp",
      title: "Gratitude",
      text: "We remain eternally indebted towards the goodness of humanity, society and the benevolence of life.",
    },
    {
      id: 4,
      image:
        "/newImages/ownership.webp",
      title: "Ownership",
      text: "We own up for our words and actions with accountability, in our interactions with people.",
    },
    {
      id: 5,
      image:
        "/newImages/respect.webp",
      title: "Respect",
      text: "We admire the identity of each individual we interact with and value their dignity, existence and purpose of life.",
    },
    {
      id: 6,
      image:
        "/newImages/passion.webp",
      title: "Passion",
      text: "We work with an incomparable passion clearly intended to make a positive change towards a holistic and wholesome life.",
    },
    {
      id: 7,
      image:
        "/newImages/ecoSystemSensitivity.webp",
      title: "Eco-system Sensitivity",
      text: "We aim to protect and promote nature and environment sustainabiIity.",
    },
    {
      id: 8,
      image:
        "/newImages/humility.webp",
      title: "Humility",
      text: "We believe whatever heights one reaches in life, modesty and unassuming nature, are the true hallmarks and character of a management professional.",
    },
    {
      id: 9,
      image:
        "/newImages/socialSensitivity.webp",
      title: "Social Sensitivity",
      text: "We stay caring and compassionate to the lesser privileged in society.",
    },
  ];

  return (
    <>
   <CoreValues1/>
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="Core-Values" className="dmtims-title text-[#FFBD59]">
           Our Core Values
          </h2>
          
          <p className="dmtims-text lg:w-4/5 sm:text-lg text-base">
            Values define one's character. At DMTIMS, the foundation of our PGDM
            students is laid on values which the world reckons by, in a becoming
            leader. Our pedagogy and all our academic and co curriculars are
            planned on these ten premium human values, which are imbibed in our
            students in a conscious way, throughout their two years interaction
            with us.
          </p>
          <div className="  my-8  grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-x-12 xl:gap-y-8">
            {values.map(({ id, image, title, text }) => (
              <div
                key={id}
                id={title}
                className="mx-auto flex w-full max-w-lg flex-col overflow-hidden rounded-xl border-2 border-[#E0E0E0] bg-[#FAFAFA] lg:max-w-none"
              >
                <div className="relative m-6    h-[100px] w-[100px] shadow-lg lg:ml-auto">
                  <Image
                    priority
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col px-6 ">
                  <p className="dmtims-subtitle text-[#EE3768]">{title}</p>
                  <p className="sm:dmtims-text text-lg pb-6">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CoreValues;

