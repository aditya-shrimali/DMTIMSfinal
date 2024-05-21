// import Image from "next/legacy/image";

// const CoreFaculty = () => {
//   const facultyMembers = [
//     {
//       id: "mY6neNuL1j08e9PlqyYB",
//       name: "Dr. Susen Varghese",
//       designation: "Director DMTIMS",
//       description: `Dr. Susen Varghese has worked in senior positions in the HR domain in the industry for a decade which includes the Telecom, IT, Finance, Consulting & Manufacturing sectors. Have had 15 years of academic experience as Faculty, Chairperson, Dean and Director in reputed MBA institutes like SIES College of Management Studies and Lexicon Management Institute of Leadership & Excellence, prior
//   to joining us.`,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/939131366325489704/SusanVargese.webp",
//       courses: [],
//       achievement: "Useful link",
//       achievements: [
//         {
//           link: "https://collegedunia.com/news/c-60629-interview-dr-susen-varghese-director-at-dmtims-navi-mumbai",
//           text: "College Dunia",
//         },
//         {
//           link: "https://ijsrem.com/download/work-life-balance-assessments-of-axis-bank-employees/",
//           text: "Work Life Balance Assessments of AXIS Bank Employees",
//         },
//         {
//           text: "College Dunia Interview",
//           link: "collegedunia.com/news/c-60629-interview-dr-susen-varghese-director-at-dmtims-navi-mumbai",
//         },
//         {
//           text: "India's Top 50 Non-IIMs B-School Survey 2023",
//           link: "https://theacademicinsights.com/India-s-Top-50-Non-IIMs-B-School-Survey-2023/#page=24",
//         },
//         { link: "/files/Brief-Profile-Dr.SV.pdf", text: "Brief Profile" },
//       ],
//     },
//     {
//       id: "1IwvuaQTgys3I6cVqM1y",
//       name: "Dr. Monica Khanna",
//       designation: "Faculty",
//       description: `Author, academician, avid research scholar and trainer, Dr. Monica Khanna has around twenty five years of experience in the field of academics as well as in journalism and business. She
//   has been a panel member and resource person for Indiannica Learning (formerly Encyclopedia Britannica) for conducting workshops for school teachers across India and is currently a resource person for Eupheus Learning. She has been associated with institutes such as Indian School of Management and Entrepreneurship, SNDT Women’s University, Fr. C. Roderigues Institute of Management Studies, Terna Engineering College, Dr. B.M.N. College of Home Science, Gahlot Institute of Management and Research.`,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/959335671607222282/Frame_237573_17.webp",
//       courses: null,
//       achievement: "Achievement",
//       achievements: null,
//     },
//     {
//       id: "1yo9SKv3rhZc0sjmglB0",
//       name: "Prof. Radhika Kirankumar",
//       designation: null,
//       description: `Having 12 years of corporate and academic experience. She aspires to be a versatile educator and likes working in inter-disciplinary areas. Her teaching interests involve courses on OB,
//   HR, and general management.`,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/959336283522625576/Frame_237573_24.webp",
//       courses: null,
//       achievement: "Achievement",
//       achievements: null,
//     },
//     {
//       id: "Y9WkEosNJyVSHyiGfplj",
//       name: "Prof. Aji John",
//       designation: "Faculty & Research Scholar",
//       description: `Aji John is an academician with around two decades of industry experience in the banking sector and education sector. He has handled various positions in his academic career and has the
//   ability to perform various HR & Administrative activities.`,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/959336283862356008/Frame_237573_25.webp",
//       courses: null,
//       achievement: "Achievement",
//       achievements: null,
//     },
//     {
//       id: "xGVoOVnH3yAAGV5ilmH2",
//       name: "Prof. Nikhil Shirsat",
//       designation: "Faculty & Research Scholar",
//       description:
//         "A decade of experience in the field of Direct and IndirectTaxation and Finance and 8 years of teaching experience in the field of finance.",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/959335953946796082/Frame_237573_20.webp",
//       courses: null,
//       achievement: "Achievement",
//       achievements: [
//         {
//           text: "Linkedin",
//           link: "https://www.linkedin.com/in/nikhil-shirsat-128a52187/",
//         },
//       ],
//     },
//     {
//       id: "EPENJ7eOxITyZyfedvb3",
//       name: "Prof. Amit Ahire",
//       designation: "Faculty & Research Scholar",
//       description:
//         "A Certified Market Professional by NSE having a Corporate experience of 5 years and teaching experience of 6 years.",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/959336283275137064/Frame_237573_23.webp",
//       courses: null,
//       achievement: "Achievement",
//       achievements: null,
//     },
//     {
//       id: "H6cLOxNAMWLTPd1BS5eX",
//       name: "Prof. Febin Varghese",
//       designation: "Faculty & Research Scholar",
//       description:
//         "A self-directed, action-oriented professional with over 10 years of experience in education and community service. A versatile individual who is a dedicated, resourceful, and goal-driven professional educator with a solid commitment to social and academic growth.",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/959336907282718740/Frame_237573_29.webp",
//       courses: null,
//       achievement: "Achievement",
//       achievements: null,
//     },
//     {
//       id: "JZC2h10WG7SerKx3mZZN",
//       name: "Prof. Lalit Bhole",
//       designation: "Faculty & Research Scholar",
//       description:
//         "Faculty at IIBM, Mumbai, Having 10 years of teaching and rich Industry experience in sales management in Indian Pharmaceuticals.",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/959336907492429865/Frame_237573_30.webp",
//       courses: null,
//       achievement: "Achievement",
//       achievements: null,
//     },
//     {
//       id: "oNlqnyrgw0P4ojd5OHTW",
//       name: "Dr. Pinaki Mandal",
//       designation: "Faculty & Research Scholar",
//       description:
//         "Pinaki Mandal, is a highly skilled and experienced strategic marketing leader with a career spanning over 16 years in industry and three years in academics. With a proven track record of delivering exceptional business growth results in highly competitive industries such as IT, Business Consulting and services, Industrial Machinery Manufacturing, and Textile domains.   His success lies in spinning around businesses by expanding traditional & digital media presence, along with cultivating corporate responses to issues affecting an organization& reputation with best organizational practices.  A strategic marketing leader entering into academia, he has been able to groom young minds with his diverse understanding on the specialization, shaping their careers professionally and ensuring industry-academia linkage.",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1166983837688020992/image.png?ex=654c7964&is=653a0464&hm=8c7ebce6f00818bcd966f026b2fe430493201ea27458721ad4a9959a12619e70&",
//       courses: null,
//       achievement: "Achievement",
//       achievements: null,
//     },
//     {
//       id: "5eq2RerwQvSLGFac9w1O",
//       name: "Prof. Amrita Gokhale",
//       designation: "Faculty & Research Scholar",
//       description: `A professional with a diverse experience of a decade in corporate and ten years of experience in academics. A meticulous administrative manager with proven communication and management skills. Amrita has engaged at the corporate as well as in teaching, research, and training allowing her to bring corporate skill sets to the table for academic linkage. A Collaborative team player with an
//   ownership mentality and a track record of delivering the highest quality strategic solutions to resolve challenges, and propel growth. With a professional approach towards her growth combined with skills
//   and effective verbal and non-verbal communication, she is backed by core experience in the most respected travel organizations.`,
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1166987305563717643/Prof._Amrita_Gokhale449.png?ex=654c7c9f&is=653a079f&hm=2b27e0442f91acd5dc723e267467393dfcd731ceaec4f59b689d8604a411d79e&",
//       courses: null,
//       achievement: "Achievement",
//       achievements: null,
//     },
//     {
//       id: "bY2xBF3XGLnqjeycBMej",
//       name: "Dr. Neha Sharma",
//       designation: "Faculty & Research Scholar",
//       description:
//         "Dr. Neha Sharma  Ph.D (Intellectual Property Rights), M.Phil, MBA (IB, HRM), MA (Eng Lit)   Dr. Neha Sharma has over 11 years of experience in teaching and research in HNB Garhwal University and Mumbai University. She specializes in International Business, Intellectual Property Rights, and Human Resource Management. Her teaching interests include International Business, Intellectual Property Rights, Project Management, Digital Business Management, Entrepreneurship Development, and Human Resource Management. ",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/1166987555074494505/image.png?ex=654c7cda&is=653a07da&hm=f00991d4b627aa43f3066cca92189b24a3460416d4af31b85435036ad3fb5288&",
//       courses: null,
//       achievement: "Achievement",
//       achievements: null,
//     },
//   ];
//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto my-4 flex w-full max-w-screen-2xl flex-col pt-8">
//           <h1
//             id="Infrastructure"
//             className="pb-8 text-5xl font-bold tracking-tighter text-[#28314A] md:text-6xl lg:text-7xl xl:text-8xl"
//           >
//             Intellectual Capital
//           </h1>
//           <h2 className="dmtims-title">Core Faculty</h2>
//           <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2 xl:gap-8 2xl:gap-10">
//             {facultyMembers.map((faculty) => (
//               <div
//                 key={faculty.id}
//                 id={faculty.name.replace(" ", "-").replace(" ", "-")}
//                 className="mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-xl bg-[#F2F2F2] lg:max-w-none lg:flex-row"
//               >
//                 <div className="relative h-[350px] flex-shrink-0 sm:h-[400px] md:h-[450px] lg:w-[250px] xl:w-[300px]">
//                   <Image
//                     priority
//                     alt={faculty.name}
//                     src={faculty.image}
//                     layout="fill"
//                     objectFit="cover"
//                     objectPosition="top"
//                   />
//                 </div>
//                 <div className="flex w-full flex-col px-4 py-6 xl:px-6">
//                   <p className="text-2xl font-semibold text-[#28314A]">
//                     {faculty.name}
//                   </p>
//                   <p className="text-lg font-medium text-[#4C477A]">
//                     {faculty.designation}
//                   </p>
//                   <p className="py-4 text-[#28314A]">{faculty.description}</p>
//                   {faculty.courses && faculty.courses?.length > 0 && (
//                     <div className="flex items-center">
//                       <p className="text-sm font-semibold uppercase text-[#BDBDBD]">
//                         Courses taught
//                       </p>
//                       <div className="ml-2 h-[1px] flex-grow bg-[#BDBDBD]" />
//                     </div>
//                   )}
//                   <div className="flex flex-col py-2">
//                     <div className="grid grid-cols-2 gap-3">
//                       {faculty.courses?.map((course, i) => (
//                         <div
//                           key={i}
//                           className="rounded-full border-2 bg-white py-2 px-3 text-center"
//                         >
//                           <p className="text-xs">{course}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   {faculty.achievements && faculty.achievements?.length > 0 && (
//                     <div className="flex items-center">
//                       <p className="text-sm font-semibold uppercase text-[#BDBDBD]">
//                         {faculty.achievement}
//                       </p>
//                       <div className="ml-2 h-[1px] flex-grow bg-[#BDBDBD]" />
//                     </div>
//                   )}
//                   <div className="flex flex-col py-2">
//                     {faculty.achievements?.map(({ text, link }, i) => (
//                       <a
//                         key={i}
//                         href={link}
//                         target="_blank"
//                         className="font-medium text-[#28314A]"
//                       >
//                         <u>
//                           <em>{text}</em>
//                         </u>
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreFaculty;

/** my code */
import Image from "next/legacy/image";
import susanvargese from "./images/SusanVargese.webp";
import Radhika from "./images/Radhika.webp";
import Monica from "./images/Monica.webp";
import Nikhil from "./images/Nikhil.webp";
import AJIHON from "./images/AJIJHON.webp";
import amit from "./images/amit.webp";
import amrita from "./images/amrita.webp";
import febin from "./images/febin.webp";
import lalit from "./images/lalit.webp";
import neha from "./images/neha.webp";
import pinaki from "./images/pinaki.webp";

const CoreFaculty = () => {
  const facultyMembers = [
    {
      id: "mY6neNuL1j08e9PlqyYB",
      name: "Dr. Susen Varghese",
      designation: "Director DMTIMS",
      description: `Dr. Susen Varghese has worked in senior positions in the HR domain in the industry for a decade which includes the Telecom, IT, Finance, Consulting & Manufacturing sectors. Have had 15 years of academic experience as Faculty, Chairperson, Dean and Director in reputed MBA institutes like SIES College of Management Studies and Lexicon Management Institute of Leadership & Excellence, prior 
  to joining us.`,
      // image:'/susanvargese.webp',
      image: susanvargese,
      courses: [],
      achievement: "Useful link",
      achievements: [
        {
          link: "https://collegedunia.com/news/c-60629-interview-dr-susen-varghese-director-at-dmtims-navi-mumbai",
          text: "College Dunia",
        },
        {
          link: "https://ijsrem.com/download/work-life-balance-assessments-of-axis-bank-employees/",
          text: "Work Life Balance Assessments of AXIS Bank Employees",
        },
        {
          text: "College Dunia Interview",
          link: "collegedunia.com/news/c-60629-interview-dr-susen-varghese-director-at-dmtims-navi-mumbai",
        },
        {
          text: "India's Top 50 Non-IIMs B-School Survey 2023",
          link: "https://theacademicinsights.com/India-s-Top-50-Non-IIMs-B-School-Survey-2023/#page=24",
        },
        { link: "/files/Brief-Profile-Dr.SV.pdf", text: "Brief Profile" },
      ],
    },
    {
      id: "1IwvuaQTgys3I6cVqM1y",
      name: "Dr. Monica Khanna",
      designation: "Faculty",
      description: `Author, academician, avid research scholar and trainer, Dr. Monica Khanna has around twenty five years of experience in the field of academics as well as in journalism and business. She 
  has been a panel member and resource person for Indiannica Learning (formerly Encyclopedia Britannica) for conducting workshops for school teachers across India and is currently a resource person for Eupheus Learning. She has been associated with institutes such as Indian School of Management and Entrepreneurship, SNDT Women’s University, Fr. C. Roderigues Institute of Management Studies, Terna Engineering College, Dr. B.M.N. College of Home Science, Gahlot Institute of Management and Research.`,
      image: Monica,
      courses: null,
      achievement: "Achievement",
      achievements: null,
    },
    {
      id: "1yo9SKv3rhZc0sjmglB0",
      name: "Prof. Radhika Kirankumar",
      designation: null,
      description: `Having 12 years of corporate and academic experience. She aspires to be a versatile educator and likes working in inter-disciplinary areas. Her teaching interests involve courses on OB, 
  HR, and general management.`,
      image: Radhika,
      courses: null,
      achievement: "Achievement",
      achievements: null,
    },
    {
      id: "Y9WkEosNJyVSHyiGfplj",
      name: "Prof. Aji John",
      designation: "Faculty & Research Scholar",
      description: `Aji John is an academician with around two decades of industry experience in the banking sector and education sector. He has handled various positions in his academic career and has the 
  ability to perform various HR & Administrative activities.`,
      image: AJIHON,
      courses: null,
      achievement: "Achievement",
      achievements: null,
    },
    {
      id: "xGVoOVnH3yAAGV5ilmH2",
      name: "Prof. Nikhil Shirsat",
      designation: "Faculty & Research Scholar",
      description:
        "A decade of experience in the field of Direct and IndirectTaxation and Finance and 8 years of teaching experience in the field of finance.",
      image: Nikhil,
      courses: null,
      achievement: "Achievement",
      achievements: [
        {
          text: "Linkedin",
          link: "https://www.linkedin.com/in/nikhil-shirsat-128a52187/",
        },
      ],
    },
    {
      id: "EPENJ7eOxITyZyfedvb3",
      name: "Prof. Amit Ahire",
      designation: "Faculty & Research Scholar",
      description:
        "A Certified Market Professional by NSE having a Corporate experience of 5 years and teaching experience of 6 years.",
      image: amit,
      courses: null,
      achievement: "Achievement",
      achievements: null,
    },
    {
      id: "H6cLOxNAMWLTPd1BS5eX",
      name: "Prof. Febin Varghese",
      designation: "Faculty & Research Scholar",
      description:
        "A self-directed, action-oriented professional with over 10 years of experience in education and community service. A versatile individual who is a dedicated, resourceful, and goal-driven professional educator with a solid commitment to social and academic growth.",
      image: febin,
      courses: null,
      achievement: "Achievement",
      achievements: null,
    },
    {
      id: "JZC2h10WG7SerKx3mZZN",
      name: "Prof. Lalit Bhole",
      designation: "Faculty & Research Scholar",
      description:
        "Faculty at IIBM, Mumbai, Having 10 years of teaching and rich Industry experience in sales management in Indian Pharmaceuticals.",
      image: lalit,
      courses: null,
      achievement: "Achievement",
      achievements: null,
    },
    {
      id: "oNlqnyrgw0P4ojd5OHTW",
      name: "Dr. Pinaki Mandal",
      designation: "Faculty & Research Scholar",
      description:
        "Pinaki Mandal, is a highly skilled and experienced strategic marketing leader with a career spanning over 16 years in industry and three years in academics. With a proven track record of delivering exceptional business growth results in highly competitive industries such as IT, Business Consulting and services, Industrial Machinery Manufacturing, and Textile domains.   His success lies in spinning around businesses by expanding traditional & digital media presence, along with cultivating corporate responses to issues affecting an organization& reputation with best organizational practices.  A strategic marketing leader entering into academia, he has been able to groom young minds with his diverse understanding on the specialization, shaping their careers professionally and ensuring industry-academia linkage.",
      image: pinaki,
      courses: null,
      achievement: "Achievement",
      achievements: null,
    },
    {
      id: "5eq2RerwQvSLGFac9w1O",
      name: "Prof. Amrita Gokhale",
      designation: "Faculty & Research Scholar",
      description: `A professional with a diverse experience of a decade in corporate and ten years of experience in academics. A meticulous administrative manager with proven communication and management skills. Amrita has engaged at the corporate as well as in teaching, research, and training allowing her to bring corporate skill sets to the table for academic linkage. A Collaborative team player with an 
  ownership mentality and a track record of delivering the highest quality strategic solutions to resolve challenges, and propel growth. With a professional approach towards her growth combined with skills 
  and effective verbal and non-verbal communication, she is backed by core experience in the most respected travel organizations.`,
      image: amrita,
      courses: null,
      achievement: "Achievement",
      achievements: null,
    },
    {
      id: "bY2xBF3XGLnqjeycBMej",
      name: "Dr. Neha Sharma",
      designation: "Faculty & Research Scholar",
      description:
        "Dr. Neha Sharma  Ph.D (Intellectual Property Rights), M.Phil, MBA (IB, HRM), MA (Eng Lit)   Dr. Neha Sharma has over 11 years of experience in teaching and research in HNB Garhwal University and Mumbai University. She specializes in International Business, Intellectual Property Rights, and Human Resource Management. Her teaching interests include International Business, Intellectual Property Rights, Project Management, Digital Business Management, Entrepreneurship Development, and Human Resource Management. ",
      image: neha,
      courses: null,
      achievement: "Achievement",
      achievements: null,
    },
  ];
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 flex w-full max-w-screen-2xl flex-col pt-8">
          <h1
            id="Infrastructure"
            className="pb-8 text-5xl font-bold tracking-tighter text-[#28314A] md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Intellectual Capital
          </h1>
          <h2 className="dmtims-title">Core Faculty</h2>
          <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2 xl:gap-8 2xl:gap-10">
            {facultyMembers.map((faculty) => (
              <div
                key={faculty.id}
                id={"research"}
                className="mx-auto flex w-full max-w-sm flex-col overflow-hidden rounded-xl bg-[#F2F2F2] lg:max-w-none lg:flex-row"
              >
                <div className="relative h-[350px] flex-shrink-0 sm:h-[400px] md:h-[450px] lg:w-[250px] xl:w-[300px]">
                  <Image
                    priority
                    alt={faculty.name}
                    src={faculty.image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
                <div className="flex w-full flex-col px-4 py-6 xl:px-6">
                  <p className="text-2xl font-semibold text-[#28314A]">
                    {faculty.name}
                  </p>
                  <p className="text-lg font-medium text-[#4C477A]">
                    {faculty.designation}
                  </p>
                  <p className="py-4 text-[#28314A]">{faculty.description}</p>
                  {faculty.courses && faculty.courses?.length > 0 && (
                    <div className="flex items-center">
                      <p className="text-sm font-semibold uppercase text-[#BDBDBD]">
                        Courses taught
                      </p>
                      <div className="ml-2 h-[1px] flex-grow bg-[#BDBDBD]" />
                    </div>
                  )}
                  <div className="flex flex-col py-2">
                    <div className="grid grid-cols-2 gap-3">
                      {faculty.courses?.map((course, i) => (
                        <div
                          key={i}
                          className="rounded-full border-2 bg-white px-3 py-2 text-center"
                        >
                          <p className="text-xs">{course}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {faculty.achievements && faculty.achievements?.length > 0 && (
                    <div className="flex items-center">
                      <p className="text-sm font-semibold uppercase text-[#BDBDBD]">
                        {faculty.achievement}
                      </p>
                      <div className="ml-2 h-[1px] flex-grow bg-[#BDBDBD]" />
                    </div>
                  )}
                  <div className="flex flex-col py-2">
                    {faculty.achievements?.map(({ text, link }, i) => (
                      <a
                        key={i}
                        href={link}
                        target="_blank"
                        className="font-medium text-[#28314A]"
                      >
                        <u>
                          <em>{text}</em>
                        </u>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFaculty;
