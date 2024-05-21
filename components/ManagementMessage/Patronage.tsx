// import React from 'react'
// import patronage4 from "../../public/images/patronage4.jpg";
// import patronage3 from "../../public/images/patronage3.jpg";
// import patronage2 from "../../public/images/patronage2.jpg";
// import patronage1 from "../../public/images/patronage1.jpg";
// import Image from "next/legacy/image";

// const Patronage = () => {
//   return (
//     <section className="relative bg-white">
//     <div className="flex flex-col px-4">
//       <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
//         <h2 id="Message-from-Management" className="dmtims-title ">
//           The Patronage
//         </h2>

//         {/* patronage1 */}
//         <h2
//           id="Message-from-Management"
//           className="dmtims-title text-lg font-bold text-[#FF3131] sm:text-3xl"
//         >
//           L L His Grace Dr. Philipose Mar Theophilus Metropolitan
//         </h2>

//        {/* old code  for big screen*/}
//         <div className="hidden md:flex  sm:pb-8  lg:gap-0 ">

//           <div className="flex flex-col ">
//             <div className="relative h-full w-full bg-green-900 ">

//               <div className="flex lg:hidden w-48 h-full ">
//                 <Image
//                   priority
//                   src={patronage1}
//                   alt="PhiliposeMarTheophilus"
//                   layout="fill"
//                 //   objectFit="contain"
//                   // objectPosition="left"
//                 />
//               </div>

//               <div className="hidden    lg:flex w-48 h-full   ">
//                 <Image
//                   priority
//                   src={patronage1}
//                   alt="ambarishPatnigere "
//                   layout="fill"
//                 //   objectFit="contain"
//                 />
//               </div>
//             </div>
//           </div>

//           <div id="Philipose-Mar-Theophilus" className="flex flex-col px-4 ">
//             <p className="dmtims-text lg:text-xl text-base text-justify  ">
//               Late Lamented His Grace Dr. Philipose Mar Theophilus, our
//               Patron, was a visionary beyond his times. He completed his B.A.
//               degree from Maharaja's College, Cochin, M.A. from St. Augustine
//               of Canterbury, England, T.H.M. from Cardiff University, UK and
//               D.D from Harvard University in Chicago, USA. While his initial
//               calling was towards spirituality and emotional uplifting of the
//               people at large, he widened this calling into developing
//               youngsters into responsible and capable human beings through
//               providing affordable education. Known as the Ambassador of the
//               Malankara Church, Mar Theophilus was associated with the
//               founding of the World Christian Council. He is thus known as the
//               Architect of the Bombay Diocese.
//             </p>
//           </div>
//         </div>

//     {/*  Patronage1 for small screen */}
//     <div className="  md:hidden grid grid-cols-1 gap-4 sm:pb-8 lg:grid-cols-2 lg:gap-0  ">
//             <div className="flex flex-col">
//               <div className="relative mt-auto h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[290px] lg:w-[400px]  ">
//                 <div className="flex w-full lg:hidden">
//                   <Image
//                     priority
//                     src={patronage1}
//                     alt="PhiliposeMarTheophilus"
//                     layout="fill"
//                     objectFit="contain"
//                     // objectPosition="left"
//                   />
//                 </div>

//                 <div className="hidden h-[300px] w-full pt-4  lg:flex lg:w-[400px]  lg:px-8  ">
//                   <Image
//                     priority
//                     src={patronage1}
//                     alt="ambarishPatnigere "
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div id="Philipose-Mar-Theophilus" className="flex flex-col ">
//               <p className="dmtims-text text-base text-justify ">
//                 Late Lamented His Grace Dr. Philipose Mar Theophilus, our
//                 Patron, was a visionary beyond his times. He completed his B.A.
//                 degree from Maharaja's College, Cochin, M.A. from St. Augustine
//                 of Canterbury, England, T.H.M. from Cardiff University, UK and
//                 D.D from Harvard University in Chicago, USA. While his initial
//                 calling was towards spirituality and emotional uplifting of the
//                 people at large, he widened this calling into developing
//                 youngsters into responsible and capable human beings through
//                 providing affordable education. Known as the Ambassador of the
//                 Malankara Church, Mar Theophilus was associated with the
//                 founding of the World Christian Council. He is thus known as the
//                 Architect of the Bombay Diocese.
//               </p>

//             </div>
//           </div>

//         {/* patronage2 */}
//         <p className=" dmtims-title pb-0 text-lg font-bold text-[#FF3131] sm:text-3xl">
//           From the Desk of President & Chief Managing Trustee
//         </p>
//         <div className="hidden md:flex md:flex-row-reverse  sm:pb-8  lg:gap-0 ">

//            <div className="flex flex-col ">
//              <div className="relative h-full w-full bg-green-900 ">

//                <div className="flex lg:hidden w-48 h-full ">
//                  <Image
//                    priority
//                    src={patronage2}
//                    alt="PhiliposeMarTheophilus"
//                    layout="fill"
//                  //   objectFit="contain"
//                    // objectPosition="left"
//                  />
//                </div>

//                <div className="hidden    lg:flex w-48 h-full   ">
//                  <Image
//                    priority
//                    src={patronage2}
//                    alt="ambarishPatnigere "
//                    layout="fill"
//                  //   objectFit="contain"
//                  />
//                </div>
//              </div>
//            </div>

//            <div id="Philipose-Mar-Theophilus" className="flex flex-col pr-4 ">
//              <p className="dmtims-text lg:text-xl text-base text-justify  ">
//              Vishweshwar Education Society (VES) is a forerunner in
//               recognizing the needs of the industry and meeting business
//               requirements by developing human capital equipped with
//               knowledge, skills and values essential for good performance.
//               This journey began in 1998 with the establishment of WCCBM and
//               subsequently with DMTIMS, Approved by AICTE, Delhi. VES in its
//               efforts to keep with changing trends in the academic industry,
//               established DMTIMS, an institution dedicated to meet these
//               challenges. We welcome you to DMTIMS to help you shape your
//               future, to turn your dreams into reality and to face the
//               challenges ahead of you.
//              </p>
//              <span className="dmtims-subtitle md:text-lg font-bold text-base">
//               Geevarghese Mar Coorilos, Metropolitan
//             </span>
//            </div>
//          </div>

//         {/* patronage 2  for small screen */}
//         <div className=" md:hidden grid grid-cols-1 gap-4  lg:grid-cols-2 lg:gap-0 ">
//           <div id="Geevarghese-Mar-Coorilos" className="flex flex-col py-4">
//             <p className="dmtims-text text-base text-justify ">
//               Vishweshwar Education Society (VES) is a forerunner in
//               recognizing the needs of the industry and meeting business
//               requirements by developing human capital equipped with
//               knowledge, skills and values essential for good performance.
//               This journey began in 1998 with the establishment of WCCBM and
//               subsequently with DMTIMS, Approved by AICTE, Delhi. VES in its
//               efforts to keep with changing trends in the academic industry,
//               established DMTIMS, an institution dedicated to meet these
//               challenges. We welcome you to DMTIMS to help you shape your
//               future, to turn your dreams into reality and to face the
//               challenges ahead of you
//             </p>
//             <span className="dmtims-subtitle sm:text-xl font-bold text-base">
//               Geevarghese Mar Coorilos, Metropolitan
//             </span>
//           </div>
//           <div className="flex flex-col lg:order-last order-first mt-4 lg:mt-0  ">
//             <div className="relative sm:my-4 mb-auto h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[280px] lg:w-[400px]  ">
//               <div className="flex w-full lg:hidden ">
//                 <Image
//                   priority
//                   src={patronage2}
//                   alt="GeevargheseMarCoorilos"
//                   layout="fill"
//                   objectFit="contain"
//                   // objectPosition="left"
//                 />
//               </div>

//               <div className="hidden h-[250px] w-full pt-4  lg:flex lg:w-[400px]  lg:px-32 ">
//                 <Image
//                   priority
//                   src={patronage2}
//                   alt="ambarishPatnigere "
//                   layout="fill"
//                   objectFit="contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* patronage3 */}
//         <p className="dmtims-subtitle dmtims-title  py-4 pt-8 sm:pt-0  text-lg  font-bold text-[#FF3131] sm:text-3xl">
//           From the Desk of Vice President
//         </p>
//         <div className="hidden md:flex sm:pb-8  lg:gap-0 ">

//            <div className="flex flex-col ">
//              <div className="relative h-full w-full bg-green-900 ">

//                <div className="flex lg:hidden w-48 h-full ">
//                  <Image
//                    priority
//                    src={patronage3}
//                    alt="PhiliposeMarTheophilus"
//                    layout="fill"
//                  //   objectFit="contain"
//                    // objectPosition="left"
//                  />
//                </div>

//                <div className="hidden    lg:flex w-56 h-full   ">
//                  <Image
//                    priority
//                    src={patronage3}
//                    alt="ambarishPatnigere "
//                    layout="fill"
//                  //   objectFit="contain"
//                  />
//                </div>
//              </div>
//            </div>

//            <div id="Philipose-Mar-Theophilus" className="flex flex-col px-4 ">
//              <p className="dmtims-text lg:text-xl text-base text-justify  ">
//              It is with immense pleasure and pride that I extend a warm
//               welcome to you on behalf of the VES Trust, the driving force
//               behind the Dr. Mar Theophilus Institute of Management Studies,
//               esteemed Institutes dedicated to excellence in Management
//               education. As we embark on a journey of knowledge and growth, it
//               gives me great joy to witness the aspirations and dreams of
//               countless young minds converging within the walls of our
//               institutions. The VES Trust has long been committed to providing
//               a transformative educational experience, fostering not just
//               academic prowess but also the holistic development of our
//               students. Our faculty, renowned for their academic expertise and
//               industry experience, are committed to providing a nurturing
//               environment that encourages intellectual curiosity and critical
//               thinking. I once again invite you join us at DMTIMS for our PGDM
//               program and may the Almighty's grace and light, shine on you
//               forever.
//              </p>
//              <span className="dmtims-subtitle md:text-lg font-bold text-base">
//              Dr. Geevarghese Mar Theophilos, Metropolitan
//             </span>
//            </div>
//          </div>

//         {/* patronage3 for small screen */}
//         <div className="md:hidden grid grid-cols-1 gap-4  lg:grid-cols-2 lg:gap-0">
//           <div className="flex flex-col ">
//             <div className="relative mt-auto h-[250px] w-full  sm:h-[300px] md:h-[350px] lg:h-[420px] lg:w-[400px]">
//               <div className="flex w-full lg:hidden">
//                 <Image
//                   priority
//                   src={patronage3}
//                   alt="Geevarghese-Mar-Theophilos"
//                   layout="fill"
//                   objectFit="contain"
//                   // objectPosition="left"
//                 />
//               </div>

//               <div className="hidden h-[250px] w-full   pt-4 lg:flex  lg:px-32 ">
//                 <Image
//                   priority
//                   src={patronage3}
//                   alt="ambarishPatnigere "
//                   layout="fill"
//                   //  objectFit="contain"
//                 />
//               </div>
//             </div>
//           </div>

//           <div id="Geevarghese-Mar-Theophilos" className="flex flex-col py-4">
//             <p className="dmtims-text text-base text-justify ">
//               It is with immense pleasure and pride that I extend a warm
//               welcome to you on behalf of the VES Trust, the driving force
//               behind the Dr. Mar Theophilus Institute of Management Studies,
//               esteemed Institutes dedicated to excellence in Management
//               education. As we embark on a journey of knowledge and growth, it
//               gives me great joy to witness the aspirations and dreams of
//               countless young minds converging within the walls of our
//               institutions. The VES Trust has long been committed to providing
//               a transformative educational experience, fostering not just
//               academic prowess but also the holistic development of our
//               students. Our faculty, renowned for their academic expertise and
//               industry experience, are committed to providing a nurturing
//               environment that encourages intellectual curiosity and critical
//               thinking. I once again invite you join us at DMTIMS for our PGDM
//               program and may the Almighty's grace and light, shine on you
//               forever.
//             </p>
//             <span className="dmtims-subtitle  font-bold text-base">
//               Dr. Geevarghese Mar Theophilos, Metropolitan
//             </span>
//           </div>
//         </div>

//         {/* patronage4 for big screen*/}

//         <p
//           className="dmtims-subtitle dmtims-title pb-0 text-lg  font-bold text-[#FF3131] sm:text-3xl "
//         >
//           From the Desk of Secretary
//         </p>
//         <div className="hidden md:flex md:flex-row-reverse sm:pb-8  lg:gap-0 ">

//            <div className="flex flex-col ">
//              <div className="relative h-full w-full bg-green-900 ">

//                <div className="flex lg:hidden w-48 h-full ">
//                  <Image
//                    priority
//                    src={patronage4}
//                    alt="PhiliposeMarTheophilus"
//                    layout="fill"
//                  //   objectFit="contain"
//                    // objectPosition="left"
//                  />
//                </div>

//                <div className="hidden    lg:flex w-48 h-[284px]   ">
//                  <Image
//                    priority
//                    src={patronage4}
//                    alt="ambarishPatnigere "
//                    layout="fill"
//                  //   objectFit="contain"
//                  />
//                </div>
//              </div>
//            </div>

//            <div id="Philipose-Mar-Theophilus" className="flex flex-col pr-4 ">
//              <p className="dmtims-text lg:text-xl text-base text-justify  ">
//              It is with immense pleasure and pride that I extend a warm
//               welcome to you on behalf of the VES Trust, the driving force
//               behind the Dr. Mar Theophilus Institute of Management Studies,
//               esteemed Institutes dedicated to excellence in Management
//               education. As we embark on a journey of knowledge and growth, it
//               gives me great joy to witness the aspirations and dreams of
//               countless young minds converging within the walls of our
//               institutions. The VES Trust has long been committed to providing
//               a transformative educational experience, fostering not just
//               academic prowess but also the holistic development of our
//               students. Our faculty, renowned for their academic expertise and
//               industry experience, are committed to providing a nurturing
//               environment that encourages intellectual curiosity and critical
//               thinking. I once again invite you join us at DMTIMS for our PGDM
//               program and may the Almighty's grace and light, shine on you
//               forever.
//              </p>
//              <span className="dmtims-subtitle md:text-lg font-bold text-base">
//              Dr. Geevarghese Mar Theophilos, Metropolitan
//             </span>
//            </div>
//          </div>

//         {/* patronage4 small screen */}
//         <div className=" md:hidden  grid grid-cols-1 gap-4 pb-8 lg:grid-cols-2 lg:gap-0
//         xl:space-x-56  ">
//           <div id="Father-Abraham-Joseph" className="flex flex-col py-4">
//             <p className="dmtims-text text-justify sm:text-xl text-base">
//               At DMTIMS we have adopted innovation and creativity as major
//               tools to ensure that we prepare our students to acquire the
//               knowledge and skills that will enable them to lead in diverse
//               areas..DMTIMS engagement in research, both at national and
//               international levels, provides a great opportunity for
//               professional development along with a competitive advantage.
//               DMTIMS is committed to the development of professionalism,
//               leadership qualities, innovation and entrepreneurship attributes
//               among its graduates. We have a history of excellent placements
//               in multiple organizations. I encourage you to connect to us and
//               look forward to the opportunities that await you at DMTIMS.
//             </p>
//             <span className="dmtims-subtitle sm:text-xl font-bold text-base">
//               Fr. Abraham Joseph
//             </span>
//           </div>
//           <div className="flex flex-col lg:order-last mt-4 lg:mt-0 order-first">
//             <div className="relative mt-auto h-[250px] w-full  sm:h-[300px] md:h-[350px] lg:h-[320px]   ">
//               <div className="flex w-full lg:hidden">
//                 <Image
//                   priority
//                   src={patronage4}
//                   alt="FatherAbrahamJoseph"
//                   layout="fill"
//                   objectFit="contain"
//                   // objectPosition="left"
//                 />
//               </div>

//               <div className="hidden  lg:flex   ">
//                 <Image
//                   priority
//                   src={patronage4}
//                   alt="ambarishPatnigere "
//                   layout="fill"
//                    objectFit="contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   </section>
//   )
// }

// export default Patronage







/** here all code is correct but now we will do it more short and images are perfectly arrange and align with text */
import React from "react";
import patronage4 from "../../public/images/patronage4.jpg";
import patronage3 from "../../public/images/patronage3.jpg";
import patronage2 from "../../public/images/patronage2.jpg";
import patronage1 from "../../public/images/patronage1.jpg";
import Image from "next/legacy/image";

const Patronage = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="Message-from-Management" className="dmtims-title ">
            The Patronage
          </h2>

          {/* patronage1 */}
          <h2
            id="Message-from-Management"
            className="dmtims-title text-lg font-bold text-[#FF3131] sm:text-3xl"
          >
            L L His Grace Dr. Philipose Mar Theophilus Metropolitan
          </h2>

          {/* old code  for big screen*/}
          <div className="hidden sm:pb-8  md:flex  lg:gap-0 ">
            <div className="flex flex-col ">
              <div className="relative h-full w-full  ">
                <div className="hidden    h-full w-48 md:flex   ">
                  <Image
                    priority
                    src={patronage1}
                    alt="ambarishPatnigere "
                    layout="fill"
                    //   objectFit="contain"
                  />
                </div>
              </div>
            </div>

            <div id="Philipose-Mar-Theophilus" className="flex flex-col px-4 ">
              <p className="dmtims-text text-justify text-base lg:text-xl  ">
                Late Lamented His Grace Dr. Philipose Mar Theophilus, our
                Patron, was a visionary beyond his times. He completed his B.A.
                degree from Maharaja's College, Cochin, M.A. from St. Augustine
                of Canterbury, England, T.H.M. from Cardiff University, UK and
                D.D from Harvard University in Chicago, USA. While his initial
                calling was towards spirituality and emotional uplifting of the
                people at large, he widened this calling into developing
                youngsters into responsible and capable human beings through
                providing affordable education. Known as the Ambassador of the
                Malankara Church, Mar Theophilus was associated with the
                founding of the World Christian Council. He is thus known as the
                Architect of the Bombay Diocese.
              </p>
            </div>
          </div>

          {/*  Patronage1 for small screen */}
          <div className="md:hidden  grid grid-cols-1 gap-4 sm:pb-8  lg:grid-cols-2 lg:gap-0  ">
            <div className="flex flex-col">
              <div className="relative mt-auto h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[290px] lg:w-[400px]  ">
                <div className="flex w-full md:hidden">
                  <Image
                    priority
                    src={patronage1}
                    alt="PhiliposeMarTheophilus"
                    layout="fill"
                    objectFit="contain"
                    // objectPosition="left"
                  />
                </div>
              </div>
            </div>
            <div id="Philipose-Mar-Theophilus" className="flex flex-col ">
              <p className="dmtims-text text-justify text-base ">
                Late Lamented His Grace Dr. Philipose Mar Theophilus, our
                Patron, was a visionary beyond his times. He completed his B.A.
                degree from Maharaja's College, Cochin, M.A. from St. Augustine
                of Canterbury, England, T.H.M. from Cardiff University, UK and
                D.D from Harvard University in Chicago, USA. While his initial
                calling was towards spirituality and emotional uplifting of the
                people at large, he widened this calling into developing
                youngsters into responsible and capable human beings through
                providing affordable education. Known as the Ambassador of the
                Malankara Church, Mar Theophilus was associated with the
                founding of the World Christian Council. He is thus known as the
                Architect of the Bombay Diocese.
              </p>
            </div>
          </div>

          {/* patronage2 for big screen*/}
          <p className=" dmtims-title pb-0 text-lg font-bold text-[#FF3131] sm:text-3xl">
            From the Desk of President & Chief Managing Trustee
          </p>
          <div className="hidden sm:pb-8 md:flex  md:flex-row-reverse  lg:gap-0 ">
            <div className="flex flex-col ">
              <div className="relative h-full w-full  ">
                <div className="hidden    h-full w-48 md:flex   ">
                  <Image
                    priority
                    src={patronage2}
                    alt="ambarishPatnigere "
                    layout="fill"
                    //   objectFit="contain"
                  />
                </div>
              </div>
            </div>

            <div id="Philipose-Mar-Theophilus" className="flex flex-col pr-4 ">
              <p className="dmtims-text text-justify text-base lg:text-xl  ">
                Vishweshwar Education Society (VES) is a forerunner in
                recognizing the needs of the industry and meeting business
                requirements by developing human capital equipped with
                knowledge, skills and values essential for good performance.
                This journey began in 1998 with the establishment of WCCBM and
                subsequently with DMTIMS, Approved by AICTE, Delhi. VES in its
                efforts to keep with changing trends in the academic industry,
                established DMTIMS, an institution dedicated to meet these
                challenges. We welcome you to DMTIMS to help you shape your
                future, to turn your dreams into reality and to face the
                challenges ahead of you.
              </p>
              <span className="dmtims-subtitle text-base font-bold md:text-lg">
                Geevarghese Mar Coorilos, Metropolitan
              </span>
            </div>
          </div>

          {/* patronage 2  for small screen */}
          <div className=" grid grid-cols-1 gap-4 md:hidden  lg:grid-cols-2 lg:gap-0 ">
            <div id="Geevarghese-Mar-Coorilos" className="flex flex-col py-4">
              <p className="dmtims-text text-justify text-base ">
                Vishweshwar Education Society (VES) is a forerunner in
                recognizing the needs of the industry and meeting business
                requirements by developing human capital equipped with
                knowledge, skills and values essential for good performance.
                This journey began in 1998 with the establishment of WCCBM and
                subsequently with DMTIMS, Approved by AICTE, Delhi. VES in its
                efforts to keep with changing trends in the academic industry,
                established DMTIMS, an institution dedicated to meet these
                challenges. We welcome you to DMTIMS to help you shape your
                future, to turn your dreams into reality and to face the
                challenges ahead of you
              </p>
              <span className="dmtims-subtitle text-base font-bold sm:text-xl">
                Geevarghese Mar Coorilos, Metropolitan
              </span>
            </div>
            <div className="order-first mt-4 flex flex-col lg:order-last lg:mt-0  ">
              <div className="relative mb-auto h-[250px] w-full sm:my-4 sm:h-[300px] md:h-[350px] lg:h-[280px] lg:w-[400px]  ">
                <div className="flex w-full md:hidden ">
                  <Image
                    priority
                    src={patronage2}
                    alt="GeevargheseMarCoorilos"
                    layout="fill"
                    objectFit="contain"
                    // objectPosition="left"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* patronage3 for big screen*/}
          <p className="dmtims-subtitle dmtims-title  py-4 pt-8 text-lg  font-bold  text-[#FF3131] sm:pt-0 sm:text-3xl">
            From the Desk of Vice President
          </p>
          <div className="hidden sm:pb-8 md:flex  lg:gap-0 ">
            <div className="flex flex-col ">
              <div className="relative h-full w-full  ">
                <div className="hidden    h-full w-56 md:flex   ">
                  <Image
                    priority
                    src={patronage3}
                    alt="ambarishPatnigere "
                    layout="fill"
                    //   objectFit="contain"
                  />
                </div>
              </div>
            </div>

            <div id="Philipose-Mar-Theophilus" className="flex flex-col px-4 ">
              <p className="dmtims-text text-justify text-base lg:text-xl  ">
                It is with immense pleasure and pride that I extend a warm
                welcome to you on behalf of the VES Trust, the driving force
                behind the Dr. Mar Theophilus Institute of Management Studies,
                esteemed Institutes dedicated to excellence in Management
                education. As we embark on a journey of knowledge and growth, it
                gives me great joy to witness the aspirations and dreams of
                countless young minds converging within the walls of our
                institutions. The VES Trust has long been committed to providing
                a transformative educational experience, fostering not just
                academic prowess but also the holistic development of our
                students. Our faculty, renowned for their academic expertise and
                industry experience, are committed to providing a nurturing
                environment that encourages intellectual curiosity and critical
                thinking. I once again invite you join us at DMTIMS for our PGDM
                program and may the Almighty's grace and light, shine on you
                forever.
              </p>
              <span className="dmtims-subtitle text-base font-bold md:text-lg">
                Dr. Geevarghese Mar Theophilos, Metropolitan
              </span>
            </div>
          </div>

          {/* patronage3 for small screen */}
          <div className="grid grid-cols-1 gap-4 md:hidden  lg:grid-cols-2 lg:gap-0">
            <div className="flex flex-col ">
              <div className="relative mt-auto h-[250px] w-full  sm:h-[300px] md:h-[350px] lg:h-[420px] lg:w-[400px]">
                <div className="flex w-full md:hidden">
                  <Image
                    priority
                    src={patronage3}
                    alt="Geevarghese-Mar-Theophilos"
                    layout="fill"
                    objectFit="contain"
                    // objectPosition="left"
                  />
                </div>
              </div>
            </div>

            <div id="Geevarghese-Mar-Theophilos" className="flex flex-col py-4">
              <p className="dmtims-text text-justify text-base ">
                It is with immense pleasure and pride that I extend a warm
                welcome to you on behalf of the VES Trust, the driving force
                behind the Dr. Mar Theophilus Institute of Management Studies,
                esteemed Institutes dedicated to excellence in Management
                education. As we embark on a journey of knowledge and growth, it
                gives me great joy to witness the aspirations and dreams of
                countless young minds converging within the walls of our
                institutions. The VES Trust has long been committed to providing
                a transformative educational experience, fostering not just
                academic prowess but also the holistic development of our
                students. Our faculty, renowned for their academic expertise and
                industry experience, are committed to providing a nurturing
                environment that encourages intellectual curiosity and critical
                thinking. I once again invite you join us at DMTIMS for our PGDM
                program and may the Almighty's grace and light, shine on you
                forever.
              </p>
              <span className="dmtims-subtitle  text-base font-bold">
                Dr. Geevarghese Mar Theophilos, Metropolitan
              </span>
            </div>
          </div>

          {/* patronage4 for big screen*/}
          <p className="dmtims-subtitle dmtims-title pb-0 text-lg  font-bold text-[#FF3131] sm:text-3xl ">
            From the Desk of Secretary
          </p>
          <div className="hidden sm:pb-8 md:flex md:flex-row-reverse  lg:gap-0 ">
            <div className="flex flex-col ">
              <div className="relative h-full w-full  ">
                <div className="hidden    h-[284px] w-48 md:flex   ">
                  <Image
                    priority
                    src={patronage4}
                    alt="ambarishPatnigere "
                    layout="fill"
                    //   objectFit="contain"
                  />
                </div>
              </div>
            </div>

            <div id="Philipose-Mar-Theophilus" className="flex flex-col pr-4 ">
              <p className="dmtims-text text-justify text-base lg:text-xl  ">
                It is with immense pleasure and pride that I extend a warm
                welcome to you on behalf of the VES Trust, the driving force
                behind the Dr. Mar Theophilus Institute of Management Studies,
                esteemed Institutes dedicated to excellence in Management
                education. As we embark on a journey of knowledge and growth, it
                gives me great joy to witness the aspirations and dreams of
                countless young minds converging within the walls of our
                institutions. The VES Trust has long been committed to providing
                a transformative educational experience, fostering not just
                academic prowess but also the holistic development of our
                students. Our faculty, renowned for their academic expertise and
                industry experience, are committed to providing a nurturing
                environment that encourages intellectual curiosity and critical
                thinking. I once again invite you join us at DMTIMS for our PGDM
                program and may the Almighty's grace and light, shine on you
                forever.
              </p>
              <span className="dmtims-subtitle text-base font-bold md:text-lg">
               Ft. Abraham Joseph
              </span>
            </div>
          </div>
          {/* patronage4 small screen */}
          <div
            className=" grid  grid-cols-1 gap-4 pb-8 md:hidden lg:grid-cols-2 lg:gap-0
        xl:space-x-56  "
          >
            <div id="Father-Abraham-Joseph" className="flex flex-col py-4">
              <p className="dmtims-text text-justify text-base sm:text-xl">
                At DMTIMS we have adopted innovation and creativity as major
                tools to ensure that we prepare our students to acquire the
                knowledge and skills that will enable them to lead in diverse
                areas..DMTIMS engagement in research, both at national and
                international levels, provides a great opportunity for
                professional development along with a competitive advantage.
                DMTIMS is committed to the development of professionalism,
                leadership qualities, innovation and entrepreneurship attributes
                among its graduates. We have a history of excellent placements
                in multiple organizations. I encourage you to connect to us and
                look forward to the opportunities that await you at DMTIMS.
              </p>
              <span className="dmtims-subtitle text-base font-bold sm:text-xl">
                Fr. Abraham Joseph
              </span>
            </div>
            <div className="order-first mt-4 flex flex-col lg:order-last lg:mt-0">
              <div className="relative mt-auto h-[250px] w-full  sm:h-[300px] md:h-[350px] lg:h-[320px]   ">
                <div className="flex w-full md:hidden">
                  <Image
                    priority
                    src={patronage4}
                    alt="FatherAbrahamJoseph"
                    layout="fill"
                    objectFit="contain"
                    // objectPosition="left"
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

export default Patronage;
