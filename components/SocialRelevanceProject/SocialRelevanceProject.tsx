// import React from "react";

// function SocialRelevanceProject() {
//   const ngos = [
//     {
//       id: 0,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1098589549006966825/image_68758.webp",
//     },
//     {
//       id: 1,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1098589549417988097/image_68759.webp",
//     },
//     {
//       id: 2,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1098589549917130875/image_68760.webp",
//     },
//     {
//       id: 3,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1098589550294597672/image_68761.webp",
//     },
//   ];

//   const imgs = [
//     {
//       id: 0,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1099016475261550722/Rectangle_1313.webp",
//     },
//     {
//       id: 1,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1099016474867269724/Rectangle-1314.webp",
//     },
//     {
//       id: 2,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1099016474435272834/Rectangle-1315.webp",
//     },
//     {
//       id: 3,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1099019984845426809/Rectangle_1318.webp",
//     },
//     {
//       id: 4,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1099019985151598732/Rectangle_1317.webp",
//     },
//     {
//       id: 5,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1099019985373888522/Rectangle_1316.webp",
//     },
//     {
//       id: 6,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1099019985629749258/Rectangle_1321.webp",
//     },
//     {
//       id: 7,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1099019985931747398/Rectangle_1319.webp",
//     },
//     {
//       id: 8,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1099019986191798383/Rectangle_1320.webp",
//     },
//   ];

//   return (
//     <section className="relative bg-[#F2F2F2]">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
//           <h2 id="Social-Relevance-Project" className="dmtims-title">
//             Social Relevance Project
//           </h2>
//           <p className="dmtims-text text-[#4C477A]">
//             Global managers today are considered as bereft of managerial skills,
//             without the core element of being socially sensitive. In order to
//             cater to one of our core values of social sensitivity, our PGDM
//             students, undertake social relevance project which helps them to
//             sensitize towards the socially underprivileged and lesser people
//             around them. Their skills to empathize, be compassionate, to care
//             for and to nurture are honed thoroughly through these projects.
//           </p>
//           <p className="dmtims-title px-2 pb-4 text-center font-condensed text-[#28314A]">
//             NGO Partners
//           </p>
//           <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2 lg:grid-cols-4">
//             {ngos.map(({ id, img }) => (
//               <div key={id} className="flex items-center justify-center">
//                 <img src={img} alt={`ngo-${id}`} />
//               </div>
//             ))}
//           </div>
//           <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:py-16">
//             {imgs.map(({ id, img }) => (
//               <div key={id} className="flex items-center justify-center">
//                 <img src={img} alt={`img-${id}`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SocialRelevanceProject;















/**my code */
import React from "react";

function SocialRelevanceProject() {
  const ngos = [
    {
      id: 0,
      img: "/newImages/ngo0.png" },
    {
      id: 1,
      img:"/newImages/ngo1.png"},
    {
      id: 2,
      img: "/newImages/ngo2.png"    },
    {
      id: 3,
      img: "/newImages/ngo3.png" },
  ];

  const imgs = [
    {
      id: 0,
      img: "/newImages/ngo4.png"     },
    {
      id: 1,
      img: "/newImages/ngo5.png"     },
    {
      id: 2,
      img: "/newImages/ngo6.png"    },
    {
      id: 3,
      img: "/newImages/ngo7.png"     },
    {
      id: 4,
      img: "/newImages/ngo8.png"     },
    {
      id: 5,
      img: "/newImages/ngo9.png"     },
    {
      id: 6,
      img: "/newImages/ngo10.png"     },
    {
      id: 7,
      img:"/newImages/ngo11.png"     },
    {
      id: 8,
      img: "/newImages/ngo12.png"     },
  ];

  return (
    <section className="relative bg-[#F2F2F2]">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
          <h2 id="Social-Relevance-Project" className="dmtims-title">
            Social Relevance Project
          </h2>
          <p className="dmtims-text text-[#4C477A]">
            Global managers today are considered as bereft of managerial skills,
            without the core element of being socially sensitive. In order to
            cater to one of our core values of social sensitivity, our PGDM
            students, undertake social relevance project which helps them to
            sensitize towards the socially underprivileged and lesser people
            around them. Their skills to empathize, be compassionate, to care
            for and to nurture are honed thoroughly through these projects.
          </p>
          <p className="dmtims-title px-2 pb-4 text-center font-condensed text-[#28314A]">
            NGO Partners
          </p>
          <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2 lg:grid-cols-4">
            {ngos.map(({ id, img }) => (
              <div key={id} className="flex items-center justify-center">
                <img src={img} alt={`ngo-${id}`} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:py-16">
            {imgs.map(({ id, img }) => (
              <div key={id} className="flex items-center justify-center">
                <img src={img} alt={`img-${id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialRelevanceProject;
