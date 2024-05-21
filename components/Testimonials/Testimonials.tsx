// import Image from "next/legacy/image";
// import bg from "./images/testimonialsBg.svg";
// import quote from "./images/quote.svg";
// import cardBg from "./images/cardImage.webp";
// import ShankarIyer from "./images/ShankarIyer.webp";
// import SusanVargese from "./images/SusanVargese.webp";
// import Bhupendra from "./images/Bhupendra.webp";
// import JancyJoseph from "./images/JancyJoseph.webp";
// import AJIJHON from "./images/AJIJHON.webp";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
// import { useEffect, useRef, useState } from "react";

// // install Swiper modules
// SwiperCore.use([Autoplay, Pagination, Navigation]);

// const Testimonials = () => {
//   const testimonialsList = [
//     {
//       id: "vAaPzywrLTSbeTS6czyI",
//       author: "Dr Susen Varghese",
//       organization: "Director DMTIMS",
//       comment:
//         "A B-School with world class management education, Industry 4.0 syllabus for its PGDM Program, eminent faculty, one on one student centric approach, top notch corporate mentoring and excellent placements.",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/939131366325489704/SusanVargese.webp",
//     },
//     {
//       id: "pRUlx8zA1oJX4xReas02",
//       author: "Jancy Joseph",
//       organization: "Support Capital",
//       comment:
//         "Best place to work!!! Great Colleagues. It has been an enriching experience meeting and counseling students over the last few years!!",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/942042447922495528/JancyJoseph.webp",
//     },
//     {
//       id: "kJZzXvXvIsQUTPoaNyyR",
//       author: "Aji John",
//       organization: "Core Faculty",
//       comment:
//         "Industry focused syllabus, the faculties are good and infrastructure is decent, digitalized classrooms are really nice and the library is fully equipped. Over all everything is good. Strategically located near to Sanpada and Juinagar stations for easy commute.",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/942043066674597948/AJIJHON.webp",
//     },
//     {
//       id: "RCAhG0h0YWysx29YGJK3",
//       author: "Neelam Maurya",
//       organization: "1st Year PGDM Student",
//       comment:
//         "I am fortunate to be a student of this college. We are blessed with very senior and experienced faculty, they are very supportive. College not only focus on academics but also on overall development of a students. They also provide extra certifications for skill enhancement",
//       image:
//         "https://cdn.discordapp.com/attachments/355008439308648478/940833473181147146/unknown.png",
//     },
//     {
//       id: "3uDhyca7xsayt2nKwUZ1",
//       author: "Samson Saji",
//       organization: "1st Year PGDM Student",
//       comment:
//         "DMTIMS is not just a college its my second home. I am privileged to have such a kind, Supportive, Enthusiastic Faculty in my life. They always  guide me for academics career as well as for my future career. I would love to thank DMTIMS Management, they are the backbone of our college. 🌹❤️",
//       image:
//         "https://cdn.discordapp.com/attachments/355008439308648478/940833238769868840/unknown.png",
//     },
//     {
//       id: "0KUung0plHxn9MPyqZ8M",
//       author: "Mr. Rajan Dwivedi",
//       organization: "Vice President Corecard India",
//       comment:
//         "It was a pleasure to interact with the students and the faculty. I wish them all the success.",
//       image:
//         "https://cdn.discordapp.com/attachments/915203168391028806/1055775609533513788/121A2303_1_1.png",
//     },
//     {
//       id: "khp2x147WVc41kD4OW4A",
//       author: "Mr. Samir Malwade",
//       organization: "Head- Advertising SIBA Ads & Communication",
//       comment:
//         "It was great interacting with students and seeing the Enthusiasm they have. Wishing all students the very best in life.",
//       image:
//         "https://cdn.discordapp.com/attachments/915203168391028806/1055775609973919785/121A2345_1.png",
//     },
//     {
//       id: "LN0wVuWA3FSGQtpzKHXK",
//       author: "Mr. Anil Sriram Athri ",
//       organization: "Entrepreuneur Dhanvanthri Engineers",
//       comment:
//         "Very professional approach by inviting Industry entrepreneurs to your organisation. The Institute is on the way of growth and prosperity. We wish you and the students the very best!",
//       image:
//         "https://cdn.discordapp.com/attachments/915203168391028806/1055775610410119259/My_project_5_1.png",
//     },
//     {
//       id: "UvRflgEvdcrqTjNwhDnB",
//       author: "Mr. Anand Dhruv",
//       organization: "Associate Director - HR NTT India",
//       comment: `Overall a very good experience connecting with students & faculty members. Wishing all the Students a flourishing learning experience & wonderful careers ahead. Looking forward to more such 
//   opportunities in future. Loads of Love & Best wishes.`,
//       image:
//         "https://cdn.discordapp.com/attachments/915203168391028806/1055775610837942272/My_project_8_1.png",
//     },
//     {
//       id: "miGqQKAtuLPj2qfpd3TO",
//       author: "Mr. Atul Chugh",
//       organization: "Founder • BeyondSkool",
//       comment: "To, All the students Keep Learning Keep Growing",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1110515482181779506/Ellipse_191.png",
//     },
//     {
//       id: "WaSMUI0isuwrwj2267sF",
//       author: "Mr. Mayank Mittal",
//       organization: "Director • MPower India Pvt. Ltd.",
//       comment:
//         "It was wonderful experience to be on the panel to interact with young minds of First Year. Wishing All The Best to the Management .....",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1110520743894200390/Ellipse_191_1.png",
//     },
//     {
//       id: "RMQ2vdYThBKZB3sf5KNj",
//       author: "Mr. Ishan Nandkarni",
//       organization: "CoFounder & CEO • Impact App",
//       comment:
//         "I had an incredible time at the panel discussion. A great way to start my New Year 2022",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1110520811825139732/Ellipse_191_2.png",
//     },
//     {
//       id: "khETLdclYsgmP0qku8fg",
//       author: "Mr. Anil Jadwani",
//       organization: "Founder • LMSKIT",
//       comment:
//         "It was great experience to address fresh & enthusiastic students",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1110521229326164059/Ellipse_191_3.png",
//     },
//     {
//       id: "bGhx9294QR73NyyHAd7D",
//       author: "Mr. Vikas Mishra",
//       organization: "Ex Service Delivery Manger • Capgemini",
//       comment:
//         "Think Logically - Question More - nothing in this world defined perfectly",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1110521464177827851/Ellipse_191_4.png",
//     },
//     {
//       id: "0JIovKykDV7Bq9vKOL4P",
//       author: "Mr. Mahesh Kudav",
//       organization: "Managing Director • Venus Safety & Health Pvt. Ltd.",
//       comment:
//         "To the organisers, It was my pleasure to grace the occasion. Giving an platform to the young minds and encouraging to participate from all over Navi Mumbai is appreciative.The event was very well organised and attended. The judges were participativeand knowledgeable.I was pleasantly surprised with well appointed premises of the college and itsconducive environment. Thank you for the token memoriam.",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1110521712413515837/Ellipse_191_5.png",
//     },
//     {
//       id: "q5plRnot17UbDr1mWhc0",
//       author: "Dr. Swapnalekha Basak",
//       organization:
//         "Founder Secretary , Founder CEO Computer Shiksha, plugH (Plug Health Services)",
//       comment:
//         "To the organisers, It was my pleasure to grace the occasion. Giving an platform to the young minds and encouraging to participate from all over Navi Mumbai is appreciative.The event was very well organised and attended. The judges were participativeand knowledgeable.I was pleasantly surprised with well appointed premises of the college and itsconducive environment. Thank you for the token memoriam.",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1110521919310143561/Ellipse_191_6.png",
//     },
//     {
//       id: "hPvBia3T9Sm88nXKHuIK",
//       author: "Saurav Pal",
//       organization: "PGDM Student • DMTIMS",
//       comment: `DMTIMS  is one of the best college for the PGDM PROGRAMME in the Navi Mumbai.. The management committee, the professor and the director are so cooperative that the institute is not just the 
//   institute it's almost like my 2nd home .. The professor are extremely fabulous....`,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1110522158138003587/Ellipse_191_7.png",
//     },
//     {
//       id: "BqzDI2QLlhmNL27TYlBX",
//       author: "Shawn Saji",
//       organization: "PGDM Student • DMTIMS",
//       comment:
//         "I am glad to be a student of this college. All of us are aware PGDM is not about theoretical knowledge do require certain additional skills which DMTIMS college has helped me. Apart from academics they always promote us to take part in extra curricular activities so that we can come up with leadership skills....",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1110522162722390017/Ellipse_191_8.png",
//     },
//     {
//       id: "HgbFhdbkMFzByiwSVG9L",
//       author: "Priyanka Raj",
//       organization: "Corporate Networking • Kotak Education Foundation, Mumbai",
//       comment:
//         "To the organisers, It was my pleasure to grace the occasion. Giving an platform to the young minds and encouraging to participate from all over Navi Mumbai is appreciative.The event was very well organised and attended. The judges were participativeand knowledgeable.I was pleasantly surprised with well appointed premises of the college and itsconducive environment. Thank you for the token memoriam.",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/942040202447314984/cardImage.webp",
//     },
//     {
//       id: "vPfivjgjiE1xmLHUnD77",
//       author: "Thomas Adaikalam",
//       organization:
//         "Head Volunteering Department • Kotak Education Foundation, Mumbai",
//       comment:
//         "To the organisers, It was my pleasure to grace the occasion. Giving an platform to the young minds and encouraging to participate from all over Navi Mumbai is appreciative.The event was very well organised and attended. The judges were participativeand knowledgeable.I was pleasantly surprised with well appointed premises of the college and itsconducive environment. Thank you for the token memoriam.",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/942040202447314984/cardImage.webp",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   const el = useRef(null);
//   const q = gsap.utils.selector(el);
//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     gsap.fromTo(
//       q("p"),
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         duration: 1.7,
//       }
//     );

//     gsap.fromTo(
//       q("h5"),
//       {
//         y: 118,
//       },
//       {
//         y: 0,
//         ease: "power4.out",
//         duration: 1.8,
//         delay: 1.2,
//         skewY: 0,
//         stagger: {
//           amount: 1.8,
//         },
//         scrollTrigger: {
//           trigger: q("h5"),
//         },
//       }
//     );

//     gsap.fromTo(
//       q("#testimonials"),
//       {
//         opacity: 0,
//         y: 118,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         delay: 2,
//         duration: 1.7,
//         scrollTrigger: {
//           trigger: q("#testimonials"),
//         },
//       }
//     );
//   }, []);

//   return (
//     <section ref={el} className="relative overflow-hidden bg-[#F2F2F2]">
//       <div className="flex flex-col px-4">
//         <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-col pt-8 pb-4 text-center xl:pt-16">
//           <p className="pb-2 text-xs font-semibold uppercase tracking-widest text-[#FFB800] md:text-sm md:tracking-[0.25rem] lg:text-lg xl:text-xl">
//             industry experts, recruiters, alumni
//           </p>
//           <div className="relative h-[2.75rem] overflow-hidden sm:h-[3.5rem] md:h-[4.25rem] lg:h-[5rem] xl:h-[6.5rem]">
//             <h5 className="font-condensed text-4xl font-bold tracking-tighter text-[#28314A] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
//               DMTIMS, Raising the bar
//             </h5>
//           </div>
//         </div>
//       </div>
//       <div className="relative">
//         <Swiper
//           loop={true}
//           onSlideChange={(props) => setIndex(props.realIndex)}
//           id="testimonials"
//           className="pt-6 pb-10 md:pb-24 lg:pt-10 xl:pb-32"
//           slidesPerView={"auto"}
//           centeredSlides={true}
//           autoplay={{
//             delay: 10000,
//             disableOnInteraction: false,
//           }}
//         >
//           {testimonialsList.map(
//             ({ id, image, comment, author, organization }) => (
//               <SwiperSlide
//                 key={id}
//                 className={`mx-4 flex w-64 transform flex-col  overflow-hidden rounded-lg bg-white shadow-md transition duration-500 md:w-auto md:flex-row lg:mx-10 xl:mx-12`}
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
//               </SwiperSlide>
//             )
//           )}
//         </Swiper>
//         <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[rgba(242,242,242,0.01)]  to-[#F2F2F2] md:w-32 lg:w-40" />
//         <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[rgba(242,242,242,0.01)]  to-[#F2F2F2] md:w-32 lg:w-40" />
//       </div>
//       <div className="absolute top-12 h-72 w-72 md:h-64 md:w-64 xl:h-80 xl:w-80 2xl:left-12 2xl:h-96 2xl:w-96">
//         <div className="relative h-full w-full">
//           <Image priority src={bg} alt="bg" layout="fill" objectFit="contain" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;












/** My changes */
import Image from "next/legacy/image";
import bg from "./images/testimonialsBg.svg";
import quote from "./images/quote.svg";
import cardBg from "./images/cardImage.webp";
import ShankarIyer from "./images/ShankarIyer.webp";
import SusanVargese from "./images/SusanVargese.webp";
import Bhupendra from "./images/Bhupendra.webp";
import JancyJoseph from "./images/JancyJoseph.webp";
import vikas from "./images/vikas.webp";
import swapanalekha from "./images/swapanalekha.webp";
import shawn from "./images/shawn.webp";
import saurav from "./images/saurav.webp";
import shankarIyer from "./images/ShankarIyer.webp";
import samson from "./images/samson.webp";
import samir from "./images/samir.webp";
import rajan from "./images/rajan.webp";
import neelam from "./images/neelam.webp";
import mayank from "./images/mayank.webp";
import mahesh from "./images/mahesh.webp";
import ishan from "./images/ishan.webp";
import atul from "./images/atul.webp";
import anil from "./images/anil.webp";
import anand from "./images/anand.webp";
import AJIJHON from "./images/AJIJHON.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect, useRef, useState } from "react";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Testimonials = () => {
  const testimonialsList = [
    {
      id: "vAaPzywrLTSbeTS6czyI",
      author: "Dr Susen Varghese",
      organization: "Director DMTIMS",
      comment:
        "A B-School with world class management education, Industry 4.0 syllabus for its PGDM Program, eminent faculty, one on one student centric approach, top notch corporate mentoring and excellent placements.",
      image:SusanVargese,
    },
    {
      id: "pRUlx8zA1oJX4xReas02",
      author: "Jancy Joseph",
      organization: "Support Capital",
      comment:
        "Best place to work!!! Great Colleagues. It has been an enriching experience meeting and counseling students over the last few years!!",
      image:JancyJoseph,
    },
    {
      id: "kJZzXvXvIsQUTPoaNyyR",
      author: "Aji John",
      organization: "Core Faculty",
      comment:
        "Industry focused syllabus, the faculties are good and infrastructure is decent, digitalized classrooms are really nice and the library is fully equipped. Over all everything is good. Strategically located near to Sanpada and Juinagar stations for easy commute.",
      image:AJIJHON,
    },
    {
      id: "RCAhG0h0YWysx29YGJK3",
      author: "Neelam Maurya",
      organization: "1st Year PGDM Student",
      comment:
        "I am fortunate to be a student of this college. We are blessed with very senior and experienced faculty, they are very supportive. College not only focus on academics but also on overall development of a students. They also provide extra certifications for skill enhancement",
      image:neelam,
    },
    {
      id: "3uDhyca7xsayt2nKwUZ1",
      author: "Samson Saji",
      organization: "1st Year PGDM Student",
      comment:
        "DMTIMS is not just a college its my second home. I am privileged to have such a kind, Supportive, Enthusiastic Faculty in my life. They always  guide me for academics career as well as for my future career. I would love to thank DMTIMS Management, they are the backbone of our college. 🌹❤️",
      image:samson,
    },
    {
      id: "0KUung0plHxn9MPyqZ8M",
      author: "Mr. Rajan Dwivedi",
      organization: "Vice President Corecard India",
      comment:
        "It was a pleasure to interact with the students and the faculty. I wish them all the success.",
      image:rajan,
    },
    {
      id: "khp2x147WVc41kD4OW4A",
      author: "Mr. Samir Malwade",
      organization: "Head- Advertising SIBA Ads & Communication",
      comment:
        "It was great interacting with students and seeing the Enthusiasm they have. Wishing all students the very best in life.",
      image:samir,
    },
    {
      id: "LN0wVuWA3FSGQtpzKHXK",
      author: "Mr. Anil Sriram Athri ",
      organization: "Entrepreuneur Dhanvanthri Engineers",
      comment:
        "Very professional approach by inviting Industry entrepreneurs to your organisation. The Institute is on the way of growth and prosperity. We wish you and the students the very best!",
      image:anil,
    },
    {
      id: "UvRflgEvdcrqTjNwhDnB",
      author: "Mr. Anand Dhruv",
      organization: "Associate Director - HR NTT India",
      comment: `Overall a very good experience connecting with students & faculty members. Wishing all the Students a flourishing learning experience & wonderful careers ahead. Looking forward to more such 
  opportunities in future. Loads of Love & Best wishes.`,
      image:anand,
    },
    {
      id: "miGqQKAtuLPj2qfpd3TO",
      author: "Mr. Atul Chugh",
      organization: "Founder • BeyondSkool",
      comment: "To, All the students Keep Learning Keep Growing",
      image:atul,
    },
    {
      id: "WaSMUI0isuwrwj2267sF",
      author: "Mr. Mayank Mittal",
      organization: "Director • MPower India Pvt. Ltd.",
      comment:
        "It was wonderful experience to be on the panel to interact with young minds of First Year. Wishing All The Best to the Management .....",
      image:mayank,
    },
    {
      id: "RMQ2vdYThBKZB3sf5KNj",
      author: "Mr. Ishan Nandkarni",
      organization: "CoFounder & CEO • Impact App",
      comment:
        "I had an incredible time at the panel discussion. A great way to start my New Year 2022",
      image:ishan,
    },
    {
      id: "khETLdclYsgmP0qku8fg",
      author: "Mr. Anil Jadwani",
      organization: "Founder • LMSKIT",
      comment:
        "It was great experience to address fresh & enthusiastic students",
      image:anil,
    },
    {
      id: "bGhx9294QR73NyyHAd7D",
      author: "Mr. Vikas Mishra",
      organization: "Ex Service Delivery Manger • Capgemini",
      comment:
        "Think Logically - Question More - nothing in this world defined perfectly",
      image:vikas,
    },
    {
      id: "0JIovKykDV7Bq9vKOL4P",
      author: "Mr. Mahesh Kudav",
      organization: "Managing Director • Venus Safety & Health Pvt. Ltd.",
      comment:
        "To the organisers, It was my pleasure to grace the occasion. Giving an platform to the young minds and encouraging to participate from all over Navi Mumbai is appreciative.The event was very well organised and attended. The judges were participativeand knowledgeable.I was pleasantly surprised with well appointed premises of the college and itsconducive environment. Thank you for the token memoriam.",
      image:mahesh,
    },
    {
      id: "q5plRnot17UbDr1mWhc0",
      author: "Dr. Swapnalekha Basak",
      organization:
        "Founder Secretary , Founder CEO Computer Shiksha, plugH (Plug Health Services)",
      comment:
        "To the organisers, It was my pleasure to grace the occasion. Giving an platform to the young minds and encouraging to participate from all over Navi Mumbai is appreciative.The event was very well organised and attended. The judges were participativeand knowledgeable.I was pleasantly surprised with well appointed premises of the college and itsconducive environment. Thank you for the token memoriam.",
      image:swapanalekha,
    },
    {
      id: "hPvBia3T9Sm88nXKHuIK",
      author: "Saurav Pal",
      organization: "PGDM Student • DMTIMS",
      comment: `DMTIMS  is one of the best college for the PGDM PROGRAMME in the Navi Mumbai.. The management committee, the professor and the director are so cooperative that the institute is not just the 
  institute it's almost like my 2nd home .. The professor are extremely fabulous....`,
      image:saurav,
    },
    {
      id: "BqzDI2QLlhmNL27TYlBX",
      author: "Shawn Saji",
      organization: "PGDM Student • DMTIMS",
      comment:
        "I am glad to be a student of this college. All of us are aware PGDM is not about theoretical knowledge do require certain additional skills which DMTIMS college has helped me. Apart from academics they always promote us to take part in extra curricular activities so that we can come up with leadership skills....",
      image:shawn,
    },
    // {
    //   id: "HgbFhdbkMFzByiwSVG9L",
    //   author: "Priyanka Raj",
    //   organization: "Corporate Networking • Kotak Education Foundation, Mumbai",
    //   comment:
    //     "To the organisers, It was my pleasure to grace the occasion. Giving an platform to the young minds and encouraging to participate from all over Navi Mumbai is appreciative.The event was very well organised and attended. The judges were participativeand knowledgeable.I was pleasantly surprised with well appointed premises of the college and itsconducive environment. Thank you for the token memoriam.",
    //   image:
    //     "https://cdn.discordapp.com/attachments/929834261568167986/942040202447314984/cardImage.webp",
    // },
    // {
    //   id: "vPfivjgjiE1xmLHUnD77",
    //   author: "Thomas Adaikalam",
    //   organization:
    //     "Head Volunteering Department • Kotak Education Foundation, Mumbai",
    //   comment:
    //     "To the organisers, It was my pleasure to grace the occasion. Giving an platform to the young minds and encouraging to participate from all over Navi Mumbai is appreciative.The event was very well organised and attended. The judges were participativeand knowledgeable.I was pleasantly surprised with well appointed premises of the college and itsconducive environment. Thank you for the token memoriam.",
    //   image:
    //     "https://cdn.discordapp.com/attachments/929834261568167986/942040202447314984/cardImage.webp",
    // },
  ];

  const [index, setIndex] = useState(0);

  const el = useRef(null);
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      q("p"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.7,
      }
    );

    gsap.fromTo(
      q("h5"),
      {
        y: 118,
      },
      {
        y: 0,
        ease: "power4.out",
        duration: 1.8,
        delay: 1.2,
        skewY: 0,
        stagger: {
          amount: 1.8,
        },
        scrollTrigger: {
          trigger: q("h5"),
        },
      }
    );

    gsap.fromTo(
      q("#testimonials"),
      {
        opacity: 0,
        y: 118,
      },
      {
        y: 0,
        opacity: 1,
        delay: 2,
        duration: 1.7,
        scrollTrigger: {
          trigger: q("#testimonials"),
        },
      }
    );
  }, []);

  return (
    <section ref={el} className="relative overflow-hidden bg-[#F2F2F2]">
      <div className="flex flex-col px-4">
        <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-col pt-8 pb-4 text-center xl:pt-16">
          <p className="pb-2 text-xs font-semibold uppercase tracking-widest text-[#FFB800] md:text-sm md:tracking-[0.25rem] lg:text-lg xl:text-xl">
            industry experts, recruiters, alumni
          </p>
          <div className="relative h-[2.75rem] overflow-hidden sm:h-[3.5rem] md:h-[4.25rem] lg:h-[5rem] xl:h-[6.5rem]">
            <h5 className="font-condensed text-4xl font-bold tracking-tighter text-[#28314A] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              DMTIMS, Raising the bar
            </h5>
          </div>
        </div>
      </div>
      <div className="relative">
        <Swiper
          loop={true}
          onSlideChange={(props) => setIndex(props.realIndex)}
          id="testimonials"
          className="pt-6 pb-10 md:pb-24 lg:pt-10 xl:pb-32"
          slidesPerView={"auto"}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {testimonialsList.map(
            ({ id, image, comment, author, organization }) => (
              <SwiperSlide
                key={id}
                className={`mx-4 flex w-64 transform flex-col  overflow-hidden rounded-lg bg-white shadow-md transition duration-500 md:w-auto md:flex-row lg:mx-10 xl:mx-12`}
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
              </SwiperSlide>
            )
          )}
        </Swiper>
        <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[rgba(242,242,242,0.01)]  to-[#F2F2F2] md:w-32 lg:w-40" />
        <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[rgba(242,242,242,0.01)]  to-[#F2F2F2] md:w-32 lg:w-40" />
      </div>
      <div className="absolute top-12 h-72 w-72 md:h-64 md:w-64 xl:h-80 xl:w-80 2xl:left-12 2xl:h-96 2xl:w-96">
        <div className="relative h-full w-full">
          <Image priority src={bg} alt="bg" layout="fill" objectFit="contain" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
