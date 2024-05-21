// import Image from "next/legacy/image";
// import GreatCampus from "./images/GreatCampus.webp";
// import ComprehensiveLibrary from "./images/ComprehensiveLibrary.webp";
// import SeminarHall from "./images/SeminarHall.webp";
// import StudyExercise from "./images/StudyExercise.webp";
// import ComputerLab from "./images/ComputerLabs.webp";
// import SportsActivities from "./images/SportsActivities.webp";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";

// import "swiper/css/grid";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/free-mode";

// // import Swiper core and required modules
// import SwiperCore, {
//   Grid,
//   Pagination,
//   Scrollbar,
//   FreeMode,
//   Autoplay,
// } from "swiper";

// // install Swiper modules
// SwiperCore.use([Grid, Pagination, Scrollbar, FreeMode, Autoplay]);

// const LifeAtDMTIMS = () => {
//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
//           <h1 id="Life" className="dmtims-title">
//             Life @DMTIMS
//           </h1>
//           <Swiper
//             className="select-none"
//             autoHeight={true}
//             scrollbar={{ draggable: true }}
//             autoplay={{
//               delay: 10000,
//               disableOnInteraction: false,
//             }}
//           >
//             <SwiperSlide className="flex flex-col">
//               <div className="flex flex-col lg:flex-row">
//                 <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
//                   <div className="mx-auto lg:px-8">
//                     <p className="dmtims-title font-bold text-[#28314A]">
//                       Great Campus
//                     </p>
//                     <p className="dmtims-text pb-8">
//                       DMTIMS Navi Mumbai campus has aesthetically designed
//                       classrooms for a world-class learning experience. It is a
//                       fully wireless campus with Wi-Fi connectivity to enable
//                       the students to access the internet from the comfort of
//                       their Classroom. Each classroom has state-of-the-art
//                       infrastructure to enhance the learning experience of the
//                       students.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
//                   <Image
//                     priority
//                     src={GreatCampus}
//                     alt="GreatCampus"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="bottom"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col lg:flex-row">
//                 <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
//                   <Image
//                     priority
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/968152771100553216/Rectangle_876.webp"
//                     }
//                     alt="ComprehensiveLibrary"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="top"
//                   />
//                 </div>
//                 <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
//                   <div className="mx-auto lg:px-8">
//                     <p className="dmtims-title font-bold text-[#28314A]">
//                       Comprehensive Library
//                     </p>
//                     <p className="dmtims-text pb-8">
//                       The Library of the Institute has an excellent collection
//                       of reference/textbooks and periodicals related to the
//                       field of Business Management. The Institute also
//                       subscribes to a number of international and national
//                       journals, as well as periodicals from the fields of
//                       Business Management. Reading room facility is available
//                       for the students. The library is updated by adding the
//                       latest textbooks, reference books and management journals
//                       as per the demands of the faculty, industry and students
//                       on a continuous basis. DMTIMS has also the facility of an
//                       e-Library.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="flex flex-col">
//               <div className="flex flex-col lg:flex-row">
//                 <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
//                   <div className="mx-auto lg:px-8">
//                     <p className="dmtims-title font-bold text-[#28314A]">
//                       Corporate Seminar Halls
//                     </p>
//                     <p className="dmtims-text pb-8">
//                       Fully air-conditioned, well equipped with LCD projector,
//                       advanced screen and sound system where meetings, corporate
//                       interviews and presentations are held on a regular basis.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
//                   <Image
//                     priority
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/968152772182679562/Rectangle_877.webp"
//                     }
//                     alt="SeminarHall"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="bottom"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col lg:flex-row">
//                 <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
//                   <Image
//                     priority
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/968152771368980550/Rectangle_878.webp"
//                     }
//                     alt="StudyExercise"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="top"
//                   />
//                 </div>
//                 <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
//                   <div className="mx-auto lg:px-8">
//                     <p className="dmtims-title font-bold text-[#28314A]">
//                       Study Exercies
//                     </p>
//                     <p className="dmtims-text pb-8">
//                       Marketing Club , Finance Club, HR Club, Innovation &
//                       Entrepreneurship Cell, Rural Development Cell,
//                       Communication Lab, International Relations Cell, Placement
//                       Cell
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className="flex flex-col">
//               <div className="flex flex-col lg:flex-row">
//                 <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
//                   <div className="mx-auto lg:px-8">
//                     <p className="dmtims-title font-bold text-[#28314A]">
//                       Latest Computer Labs
//                     </p>
//                     <p className="dmtims-text pb-8">
//                       DMTIMS has fully equipped Computer Lab which is configured
//                       with the latest management software called SPSS and Tally
//                       Software for students’ access. SPSS software has 10 users
//                       license, which will be very useful for management
//                       students, enabling them to conduct complex statistical
//                       analysis for their research projects.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
//                   <Image
//                     priority
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/968152771717128243/Rectangle_879.webp"
//                     }
//                     alt="ComputerLab"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="bottom"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col lg:flex-row">
//                 <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
//                   <Image
//                     priority
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/968152771910057984/Rectangle_880.webp"
//                     }
//                     alt="SportsActivities"
//                     layout="fill"
//                     objectFit="contain"
//                     objectPosition="top"
//                   />
//                 </div>
//                 <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
//                   <div className="mx-auto lg:px-8">
//                     <p className="dmtims-title font-bold text-[#28314A]">
//                       Sports Activites
//                     </p>
//                     <p className="dmtims-text pb-8">
//                       DMTIMS Navi Mumbai campus has aesthetically designed
//                       classrooms for a world-class learning experience. It is a
//                       fully wireless campus with Wi-Fi connectivity to enable
//                       the students to access the internet from the comfort of
//                       their Classroom. Each classroom has state-of-the-art
//                       infrastructure to enhance the learning experience of the
//                       students.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LifeAtDMTIMS;














/** my code */
import Image from "next/legacy/image";
import GreatCampus from "./images/GreatCampus.webp";
import ComprehensiveLibrary from "./images/ComprehensiveLibrary.webp";
import SeminarHall from "./images/SeminarHall.webp";
import StudyExercise from "./images/StudyExercise.webp";
import ComputerLab from "./images/ComputerLabs.webp";
import SportsActivities from "./images/SportsActivities.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import comprehensiveLibrary from '../../public/newImages/comprehensiveLibrary.webp'
import studyExercise from '../../public/newImages/studyExercise.webp'
import seminarHalls from '../../public/newImages/seminarHalls.webp'
import computerLab from '../../public/newImages/computerLab.webp'
import sportsActivities from '../../public/newImages/sportsActivities.webp'

import "swiper/css";

import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

// import Swiper core and required modules
import SwiperCore, {
  Grid,
  Pagination,
  Scrollbar,
  FreeMode,
  Autoplay,
} from "swiper";

// install Swiper modules
SwiperCore.use([Grid, Pagination, Scrollbar, FreeMode, Autoplay]);

const LifeAtDMTIMS = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
          <h1 id="Life" className="dmtims-title">
            Life @DMTIMS
          </h1>
          <Swiper
            className="select-none"
            autoHeight={true}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="flex flex-col">
              <div className="flex flex-col lg:flex-row">
                <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
                  <div className="mx-auto lg:px-8">
                    <p className="dmtims-title font-bold text-[#28314A]">
                      Great Campus
                    </p>
                    <p className="dmtims-text pb-8">
                      DMTIMS Navi Mumbai campus has aesthetically designed
                      classrooms for a world-class learning experience. It is a
                      fully wireless campus with Wi-Fi connectivity to enable
                      the students to access the internet from the comfort of
                      their Classroom. Each classroom has state-of-the-art
                      infrastructure to enhance the learning experience of the
                      students.
                    </p>
                  </div>
                </div>
                <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
                  <Image
                    priority
                    src={GreatCampus}
                    alt="GreatCampus"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="bottom"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
                  <Image
                    priority
                    src={comprehensiveLibrary}
                    alt="ComprehensiveLibrary"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                  />
                </div>
                <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
                  <div className="mx-auto lg:px-8">
                    <p className="dmtims-title font-bold text-[#28314A]">
                      Comprehensive Library
                    </p>
                    <p className="dmtims-text pb-8">
                      The Library of the Institute has an excellent collection
                      of reference/textbooks and periodicals related to the
                      field of Business Management. The Institute also
                      subscribes to a number of international and national
                      journals, as well as periodicals from the fields of
                      Business Management. Reading room facility is available
                      for the students. The library is updated by adding the
                      latest textbooks, reference books and management journals
                      as per the demands of the faculty, industry and students
                      on a continuous basis. DMTIMS has also the facility of an
                      e-Library.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col">
              <div className="flex flex-col lg:flex-row">
                <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
                  <div className="mx-auto lg:px-8">
                    <p className="dmtims-title font-bold text-[#28314A]">
                      Corporate Seminar Halls
                    </p>
                    <p className="dmtims-text pb-8">
                      Fully air-conditioned, well equipped with LCD projector,
                      advanced screen and sound system where meetings, corporate
                      interviews and presentations are held on a regular basis.
                    </p>
                  </div>
                </div>
                <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
                  <Image
                    priority
                    src={seminarHalls}
                    alt="SeminarHall"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="bottom"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
                  <Image
                    priority
                    src={studyExercise}
                    alt="StudyExercise"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                  />
                </div>
                <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
                  <div className="mx-auto lg:px-8">
                    <p className="dmtims-title font-bold text-[#28314A]">
                      Study Exercise
                    </p>
                    <p className="dmtims-text pb-8">
                      Marketing Club , Finance Club, HR Club, Innovation &
                      Entrepreneurship Cell, Rural Development Cell,
                      Communication Lab, International Relations Cell, Placement
                      Cell
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col">
              <div className="flex flex-col lg:flex-row">
                <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
                  <div className="mx-auto lg:px-8">
                    <p className="dmtims-title font-bold text-[#28314A]">
                      Latest Computer Labs
                    </p>
                    <p className="dmtims-text pb-8">
                      DMTIMS has fully equipped Computer Lab which is configured
                      with the latest management software called SPSS and Tally
                      Software for students’ access. SPSS software has 10 users
                      license, which will be very useful for management
                      students, enabling them to conduct complex statistical
                      analysis for their research projects.
                    </p>
                  </div>
                </div>
                <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
                  <Image
                    priority
                    src={computerLab }
                    alt="ComputerLab"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="bottom"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row">
                <div className="relative h-[250px] flex-grow sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px]">
                  <Image
                    priority
                    src={sportsActivities}
                    alt="SportsActivities"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="top"
                  />
                </div>
                <div className="flex items-center py-4 sm:py-8 lg:w-1/2">
                  <div className="mx-auto lg:px-8">
                    <p className="dmtims-title font-bold text-[#28314A]">
                      Sports Activites
                    </p>
                    <p className="dmtims-text pb-8">
                      DMTIMS Navi Mumbai campus has aesthetically designed
                      classrooms for a world-class learning experience. It is a
                      fully wireless campus with Wi-Fi connectivity to enable
                      the students to access the internet from the comfort of
                      their Classroom. Each classroom has state-of-the-art
                      infrastructure to enhance the learning experience of the
                      students.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default LifeAtDMTIMS;
