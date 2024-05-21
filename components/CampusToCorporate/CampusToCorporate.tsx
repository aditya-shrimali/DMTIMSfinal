// import React from "react";

// function CampusToCorporate() {
//   const corporates = [
//     {
//       id: 0,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1098884706126286930/28358.webp",
//     },
//     {
//       id: 1,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1098884706436653156/28377.webp",
//     },
//     {
//       id: 2,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1098884706805760061/28426.webp",
//     },
//     {
//       id: 3,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1098884707204222976/28378.webp",
//     },
//     {
//       id: 4,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1098884707514589285/28429.webp",
//     },
//     {
//       id: 5,
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1098884707850141746/28381.webp",
//     },
//   ];

//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
//           <h2 id="Social-Relevance-Project" className="dmtims-title">
//             Campus to Corporate
//           </h2>
//           <p className="dmtims-text text-[#4C477A]">
//             DMTIMS regularly invites guest speakers from the corporate world to
//             bridge the gap that exists between the educational curriculum and
//             the expectations of the industry. Seminars and workshops are
//             organized to train and enlighten students in numerous domains, and
//             also to develop their soft skills. These include sessions on
//             Artificial Intelligence, Budget Analysis, Personality Grooming,
//             Facing Job Interviews, and much more.
//           </p>
//           <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2">
//             {corporates.map(({ id, img }) => (
//               <div key={id} className="flex items-center justify-center">
//                 <img src={img} alt={`corporates-${id}`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CampusToCorporate;











/** my code */
import React from "react";

function CampusToCorporate() {
  const corporates = [
    {
      id: 0,
      img: "/newImages/corporates0.png"    },
    {
      id: 1,
      img:   "/newImages/corporates1.png"  },
    {
      id: 2,
      img:  "/newImages/corporates2.png"   },
    {
      id: 3,
      img:  "/newImages/corporates3.png"  },
    {
      id: 4,
      img:  "/newImages/corporates4.png"    },
    {
      id: 5,
      img: "/newImages/corporates5.png"    },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
          <h2 id="Social-Relevance-Project" className="dmtims-title">
            Campus to Corporate
          </h2>
          <p className="dmtims-text text-[#4C477A]">
            DMTIMS regularly invites guest speakers from the corporate world to
            bridge the gap that exists between the educational curriculum and
            the expectations of the industry. Seminars and workshops are
            organized to train and enlighten students in numerous domains, and
            also to develop their soft skills. These include sessions on
            Artificial Intelligence, Budget Analysis, Personality Grooming,
            Facing Job Interviews, and much more.
          </p>
          <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2">
            {corporates.map(({ id, img }) => (
              <div key={id} className="flex items-center justify-center">
                <img src={img} alt={`corporates-${id}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusToCorporate;
