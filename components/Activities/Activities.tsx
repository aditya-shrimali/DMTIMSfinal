// import Image from "next/legacy/image";
// import Seminar1 from "./images/Seminar1.webp";
// import Seminar2 from "./images/Seminar2.webp";
// import Seminar3 from "./images/Seminar3.webp";
// import Workshop1 from "./images/Workshop1.webp";
// import Workshop2 from "./images/Workshop2.webp";
// import Workshop3 from "./images/Workshop3.webp";

// const Activities = () => {
//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
//           <h2 id="Activities" className="dmtims-title">
//             Activities
//           </h2>
//           <div className="py-10">
//             <div className="flex flex-col items-center lg:flex-row">
//               <div className="flex flex-col lg:pr-16">
//                 <p id="Seminars" className="dmtims-subtitle">
//                   Seminars
//                 </p>
//                 <p className="dmtims-text pb-8">
//                   Fully air-conditioned, well equipped with LCD projector,
//                   advanced screen and sound system where meetings, corporate
//                   interviews and presentations are held on a regular basis.
//                 </p>
//               </div>
//               <div className="flex w-full flex-shrink-0 flex-col lg:w-1/2">
//                 <div className="relative ml-auto mt-auto h-[150px] w-1/2 sm:h-[300px] md:h-[350px] lg:h-[400px] lg:w-full">
//                   <Image
//                     priority
//                     src={Seminar1}
//                     alt="Seminar1"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="left"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row">
//               <div className="flex w-1/2 flex-shrink-0 flex-col">
//                 <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
//                   <Image
//                     priority
//                     src={Seminar2}
//                     alt="Seminar2"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="right"
//                   />
//                 </div>
//               </div>
//               <div className="flex w-1/2 flex-shrink-0 flex-col">
//                 <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
//                   <Image
//                     priority
//                     src={Seminar3}
//                     alt="Seminar3"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="left"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="py-10">
//             <div className="flex flex-col items-center lg:flex-row-reverse">
//               <div className="flex flex-col lg:pl-16">
//                 <p id="Workshops" className="dmtims-subtitle">
//                   Workshops
//                 </p>
//                 <p className="dmtims-text pb-8">
//                   Marketing Club , Finance Club, HR Club, Innovation &
//                   Entrepreneurship Cell, Rural Development Cell, Communication
//                   Lab, International Relations Cell, Placement Cell
//                 </p>
//               </div>
//               <div className="flex w-full flex-shrink-0 flex-col lg:w-1/2">
//                 <div className="relative mt-auto h-[150px] w-1/2 sm:h-[300px] md:h-[350px] lg:h-[400px] lg:w-full">
//                   <Image
//                     priority
//                     src={Workshop1}
//                     alt="Workshop1"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="right"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row">
//               <div className="flex w-1/2 flex-shrink-0 flex-col">
//                 <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
//                   <Image
//                     priority
//                     src={Workshop2}
//                     alt="Workshop2"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="right"
//                   />
//                 </div>
//               </div>
//               <div className="flex w-1/2 flex-shrink-0 flex-col">
//                 <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
//                   <Image
//                     priority
//                     src={Workshop3}
//                     alt="Workshop3"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="left"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="py-10">
//             <div className="flex flex-col items-center lg:flex-row">
//               <div className="flex flex-col lg:pr-16">
//                 <p id="Guest-Lectures" className="dmtims-subtitle">
//                   Guest Lectures
//                 </p>
//                 <p className="dmtims-text pb-8">
//                   The Library of the Institute has an excellent collection of
//                   reference/textbooks and periodicals related to the field of
//                   Business Management. The Institute also subscribes to a number
//                   of international and national journals, as well as periodicals
//                   from the fields of Business Management. Reading room facility
//                   is available for the students. The library is updated by
//                   adding the latest textbooks, reference books and management
//                   journals as per the demands of the faculty, industry and
//                   students on a continuous basis. DMTIMS has also the facility
//                   of an e-Library.
//                 </p>
//               </div>
//               <div className="flex w-full flex-shrink-0 flex-col lg:w-1/2">
//                 <div className="relative ml-auto mt-auto h-[150px] w-1/2 sm:h-[300px] md:h-[350px] lg:h-[400px] lg:w-full">
//                   <Image
//                     priority
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/968154084441985074/unsplash_fuLPFeAd17E.webp"
//                     }
//                     alt="Guest-Lectures1"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="left"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row">
//               <div className="flex w-1/2 flex-shrink-0 flex-col">
//                 <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
//                   <Image
//                     priority
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/968154085259878490/unsplash_fuLPFeAd17E_1.webp"
//                     }
//                     alt="Guest-Lectures2"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="right"
//                   />
//                 </div>
//               </div>
//               <div className="flex w-1/2 flex-shrink-0 flex-col">
//                 <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
//                   <Image
//                     priority
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/968154084836278272/unsplash_fuLPFeAd17E_2.webp"
//                     }
//                     alt="Guest-Lectures3"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="left"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="py-10">
//             <div className="flex flex-col items-center lg:flex-row-reverse">
//               <div className="flex flex-col lg:pl-16">
//                 <p id="Workshops" className="dmtims-subtitle">
//                   Convocation
//                 </p>
//                 <p className="dmtims-text pb-8">
//                   Marketing Club , Finance Club, HR Club, Innovation &
//                   Entrepreneurship Cell, Rural Development Cell, Communication
//                   Lab, International Relations Cell, Placement Cell
//                 </p>
//               </div>
//               <div className="flex w-full flex-shrink-0 flex-col lg:w-1/2">
//                 <div className="relative mt-auto h-[150px] w-1/2 sm:h-[300px] md:h-[350px] lg:h-[400px] lg:w-full">
//                   <Image
//                     priority
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/968154931313909831/unsplash_fuLPFeAd17E_3.webp"
//                     }
//                     alt="Workshop1"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="right"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-row">
//               <div className="flex w-1/2 flex-shrink-0 flex-col">
//                 <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
//                   <Image
//                     priority
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/968154930999357580/unsplash_fuLPFeAd17E_4.webp"
//                     }
//                     alt="Workshop2"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="right"
//                   />
//                 </div>
//               </div>
//               <div className="flex w-1/2 flex-shrink-0 flex-col">
//                 <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
//                   <Image
//                     priority
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/968154930735091822/unsplash_fuLPFeAd17E_5.webp"
//                     }
//                     alt="Workshop3"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="left"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Activities;



















/**my code */
import Image from "next/legacy/image";
import Seminar1 from "./images/Seminar1.webp";
import Seminar2 from "./images/Seminar2.webp";
import Seminar3 from "./images/Seminar3.webp";
import Workshop1 from "./images/Workshop1.webp";
import Workshop2 from "./images/Workshop2.webp";
import Workshop3 from "./images/Workshop3.webp";
import workshop1 from '../../public/newImages/workshop1.webp'
import workshop2 from '../../public/newImages/workshop2.webp'
import workshop3 from '../../public/newImages/workshop3.webp'
import guestLecture1 from '../../public/newImages/guestLecture1.webp'
import guestLecture2 from '../../public/newImages/guestLecture2.webp'
import guestLecture3 from '../../public/newImages/guestLecture3.webp'


const Activities = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
          <h2 id="Activities" className="dmtims-title">
            Activities
          </h2>
          <div className="py-10">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="flex flex-col lg:pr-16">
                <p id="Seminars" className="dmtims-subtitle">
                  Seminars
                </p>
                <p className="dmtims-text pb-8">
                  Fully air-conditioned, well equipped with LCD projector,
                  advanced screen and sound system where meetings, corporate
                  interviews and presentations are held on a regular basis.
                </p>
              </div>
              <div className="flex w-full flex-shrink-0 flex-col lg:w-1/2">
                <div className="relative ml-auto mt-auto h-[150px] w-1/2 sm:h-[300px] md:h-[350px] lg:h-[400px] lg:w-full">
                  <Image
                    priority
                    src={Seminar1}
                    alt="Seminar1"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex w-1/2 flex-shrink-0 flex-col">
                <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <Image
                    priority
                    src={Seminar2}
                    alt="Seminar2"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="right"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-shrink-0 flex-col">
                <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <Image
                    priority
                    src={Seminar3}
                    alt="Seminar3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="flex flex-col items-center lg:flex-row-reverse">
              <div className="flex flex-col lg:pl-16">
                <p id="Workshops" className="dmtims-subtitle">
                  Workshops
                </p>
                <p className="dmtims-text pb-8">
                  Marketing Club , Finance Club, HR Club, Innovation &
                  Entrepreneurship Cell, Rural Development Cell, Communication
                  Lab, International Relations Cell, Placement Cell
                </p>
              </div>
              <div className="flex w-full flex-shrink-0 flex-col lg:w-1/2">
                <div className="relative mt-auto h-[150px] w-1/2 sm:h-[300px] md:h-[350px] lg:h-[400px] lg:w-full">
                  <Image
                    priority
                    src={Workshop1}
                    alt="Workshop1"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="right"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex w-1/2 flex-shrink-0 flex-col">
                <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <Image
                    priority
                    src={Workshop2}
                    alt="Workshop2"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="right"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-shrink-0 flex-col">
                <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <Image
                    priority
                    src={Workshop3}
                    alt="Workshop3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="flex flex-col lg:pr-16">
                <p id="Guest-Lectures" className="dmtims-subtitle">
                  Guest Lectures
                </p>
                <p className="dmtims-text pb-8">
                  The Library of the Institute has an excellent collection of
                  reference/textbooks and periodicals related to the field of
                  Business Management. The Institute also subscribes to a number
                  of international and national journals, as well as periodicals
                  from the fields of Business Management. Reading room facility
                  is available for the students. The library is updated by
                  adding the latest textbooks, reference books and management
                  journals as per the demands of the faculty, industry and
                  students on a continuous basis. DMTIMS has also the facility
                  of an e-Library.
                </p>
              </div>
              <div className="flex w-full flex-shrink-0 flex-col lg:w-1/2">
                <div className="relative ml-auto mt-auto h-[150px] w-1/2 sm:h-[300px] md:h-[350px] lg:h-[400px] lg:w-full">
                  <Image
                    priority
                    src={guestLecture1}
                    alt="Guest-Lectures1"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex w-1/2 flex-shrink-0 flex-col">
                <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <Image
                    priority
                    src={guestLecture2}
                    alt="Guest-Lectures2"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="right"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-shrink-0 flex-col">
                <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <Image
                    priority
                    src={guestLecture3}
                    alt="Guest-Lectures3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="flex flex-col items-center lg:flex-row-reverse">
              <div className="flex flex-col lg:pl-16">
                <p id="Workshops" className="dmtims-subtitle">
                  Convocation
                </p>
                <p className="dmtims-text pb-8">
                  Marketing Club , Finance Club, HR Club, Innovation &
                  Entrepreneurship Cell, Rural Development Cell, Communication
                  Lab, International Relations Cell, Placement Cell
                </p>
              </div>
              <div className="flex w-full flex-shrink-0 flex-col lg:w-1/2">
                <div className="relative mt-auto h-[150px] w-1/2 sm:h-[300px] md:h-[350px] lg:h-[400px] lg:w-full">
                  <Image
                    priority
                    src={workshop1}
                    alt="Workshop1"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="right"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex w-1/2 flex-shrink-0 flex-col">
                <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <Image
                    priority
                    src={workshop2}
                    alt="Workshop2"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="right"
                  />
                </div>
              </div>
              <div className="flex w-1/2 flex-shrink-0 flex-col">
                <div className="relative mt-auto h-[150px] w-full sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <Image
                    priority
                    src={workshop3}
                    alt="Workshop3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;

