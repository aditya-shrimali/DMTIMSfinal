// import Image from "next/legacy/image";
// import React from "react";
// import quote from "./images/quote.svg";

// function StudentTestimonials() {
//   const students = [
//     {
//       id: 1,
//       author: "Saurav Pal",
//       organization: "PGDM Student • DMTIMS",
//       comment: `DMTIMS  is one of the best college for the PGDM PROGRAMME in the Navi Mumbai.. The management committee, the professor and the director are so cooperative that the institute is not just the institute it's almost like my 2nd home ..
//     The professor are extremely fabulous....`,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1115620877090967633/Ellipse_191.png",
//     },
//     {
//       id: 2,
//       author: "Shawn Saji",
//       organization: "PGDM Student • DMTIMS",
//       comment: `I am glad to be a student of this college. All of us are aware PGDM is not about theoretical knowledge do require certain additional skills which DMTIMS college has helped me. Apart from academics they always promote us to take part in extra curricular activities so that we can come up with leadership skills....`,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1115620908724396143/Ellipse_191_1.png",
//     },
//     {
//       id: 3,
//       author: "Neelam Maurya",
//       organization: "PGDM Student • DMTIMS",
//       comment: `I am fortunate to be a student of this college. We are blessed with very senior and experienced faculty, they are very supportive. College not only focuses on academics but also on the overall development of students. They also provide extra certifications...`,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1115620937405050920/Ellipse_191_2.png",
//     },
//     {
//       id: 4,
//       author: "Samson Saji",
//       organization: "PGDM Student • DMTIMS",
//       comment: `DMTIMS is not just a college its my second home. I am privileged to have such a kind, Supportive, Enthusiastic Faculty in my life. They always  guide me for academics career as well as for my future career. I would love to .....`,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1115620957265088522/Ellipse_191_3.png",
//     },
//   ];

//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-4">
//           <h2 id="PGDM-Course-Highlights" className="dmtims-title py-12">
//             Students Testimonials
//           </h2>
//           <video
//             className="h-[500px] w-full object-contain"
//             src="/videos/Internship-Diaries.mp4"
//             controls
//           ></video>
//           <div
//             className={"grid grid-cols-1 gap-8 py-8 lg:py-12 xl:grid-cols-2"}
//           >
//             {students.map(({ id, author, comment, image, organization }) => (
//               <div
//                 key={id}
//                 className={`mx-auto flex w-full max-w-3xl transform flex-col overflow-hidden rounded-lg bg-white shadow-md transition duration-500 md:flex-row`}
//               >
//                 <div className="relative h-60 md:mt-4 md:h-72 md:w-72">
//                   <Image
//                     priority
//                     className="rounded-tr-full"
//                     src={image}
//                     alt={author}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className="my-auto flex flex-col px-3 py-5 md:w-96 md:px-6">
//                   <p className="pb-4 font-medium text-[#4F4F4F]">
//                     <em>{comment}</em>
//                   </p>
//                   <div>
//                     <p className="font-medium text-[#4F4F4F]">{author}</p>
//                     <p className="text-xs font-semibold text-[#BDBDBD]">
//                       {organization}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="absolute right-3 top-0 h-16 w-16 md:left-48 md:h-24 md:w-32">
//                   <div className="relative h-full w-full">
//                     <Image
//                       priority
//                       src={quote}
//                       alt="quote"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default StudentTestimonials;







/** my code */
import Image from "next/legacy/image";
import React from "react";
import quote from "./images/quote.svg";
import saurav from '../../public/newImages/saurav.png'
import shawn from '../../public/newImages/shawn.png'
import neelam from '../../public/newImages/neelam.png'
import samson from '../../public/newImages/samson.png'
function StudentTestimonials() {
  const students = [
    {
      id: 1,
      author: "Saurav Pal",
      organization: "PGDM Student • DMTIMS",
      comment: `DMTIMS  is one of the best college for the PGDM PROGRAMME in the Navi Mumbai.. The management committee, the professor and the director are so cooperative that the institute is not just the institute it's almost like my 2nd home ..
    The professor are extremely fabulous....`,
      image:saurav,
    },
    {
      id: 2,
      author: "Shawn Saji",
      organization: "PGDM Student • DMTIMS",
      comment: `I am glad to be a student of this college. All of us are aware PGDM is not about theoretical knowledge do require certain additional skills which DMTIMS college has helped me. Apart from academics they always promote us to take part in extra curricular activities so that we can come up with leadership skills....`,
      image:shawn,
    },
    {
      id: 3,
      author: "Neelam Maurya",
      organization: "PGDM Student • DMTIMS",
      comment: `I am fortunate to be a student of this college. We are blessed with very senior and experienced faculty, they are very supportive. College not only focuses on academics but also on the overall development of students. They also provide extra certifications...`,
      image:neelam,
    },
    {
      id: 4,
      author: "Samson Saji",
      organization: "PGDM Student • DMTIMS",
      comment: `DMTIMS is not just a college its my second home. I am privileged to have such a kind, Supportive, Enthusiastic Faculty in my life. They always  guide me for academics career as well as for my future career. I would love to .....`,
      image:samson,
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <h2 id="PGDM-Course-Highlights" className="dmtims-title py-12">
            Students Testimonials
          </h2>
          <video
            className="h-[500px] w-full object-contain"
            src="/videos/Internship-Diaries.mp4"
            controls
          ></video>
          <div
            className={"grid grid-cols-1 gap-8 py-8 lg:py-12 xl:grid-cols-2"}
          >
            {students.map(({ id, author, comment, image, organization }) => (
              <div
                key={id}
                className={`mx-auto flex w-full max-w-3xl transform flex-col overflow-hidden rounded-lg bg-white shadow-md transition duration-500 md:flex-row`}
              >
                <div className="relative h-60 md:mt-4 md:h-72 md:w-72">
                  <Image
                    priority
                    className="rounded-tr-full"
                    src={image}
                    alt={author}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="my-auto flex flex-col px-3 py-5 md:w-96 md:px-6">
                  <p className="pb-4 font-medium text-[#4F4F4F]">
                    <em>{comment}</em>
                  </p>
                  <div>
                    <p className="font-medium text-[#4F4F4F]">{author}</p>
                    <p className="text-xs font-semibold text-[#BDBDBD]">
                      {organization}
                    </p>
                  </div>
                </div>
                <div className="absolute right-3 top-0 h-16 w-16 md:left-48 md:h-24 md:w-32">
                  <div className="relative h-full w-full">
                    <Image
                      priority
                      src={quote}
                      alt="quote"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentTestimonials;
