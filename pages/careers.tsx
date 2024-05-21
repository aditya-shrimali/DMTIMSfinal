// import { collection, getDocs, orderBy, query } from "firebase/firestore";
// import Head from "next/head";
// import React from "react";
// import CareersAtDMTIMS from "../components/CareersAtDMTIMS/CareersAtDMTIMS";
// import CareersBanner from "../components/CareersBanner/CareersBanner";
// import Header from "../components/Header/Header";

// function careers() {
//   const newJobs = [
//     {
//       id: "WBLhXPv2X4Fa05gfqebg",
//       title: "Admission Head",
//       skills:
//         "Administration, Database, Good Communication Skill, Counselling , Knowledge of Computer",
//       description:
//         "A reputed B school in Mumbai is looking out for a dynamic, result-oriented and a go-getter experienced professional, for the vacancy of Admissions Head, with a minimum of 10 - 12 years of proven track record in B-school admissions, for its total of 2 full time programs only",
//       image:
//         "http://cdn.discordapp.com/attachments/929834261568167986/939168209507069963/Frame_1371.png",
      

//       responsibilities: (
//         <>
//           <p>
//             - Analyze the applications of prospective students based on standard
//             admission policies.
//           </p>
//           <p>
//             - Interview students to understand their objectives and background.
//             Provide clarifications to student's queries in a professional
//             manner.
//           </p>
//           <p>
//             - He/She will be responsible for the admission and ongoing support
//             to students
//           </p>
//           <p>
//             - Establish, reevaluate, promote, and execute the admissions process
//             for colleges, universities, and other educational institutions.
//           </p>
//           <p>
//             - Provide assistance to the students to complete the enrolment
//             forms. - Review all the students’ applications and refer the
//             students to financial services personnel if required.
//           </p>
//           <p>
//             - Inform students about the courses offered and the tuition fees.
//           </p>
//           <p>
//             - Arrange orientation programs, educational workshops and graduation
//             programs for students.
//           </p>
//           <p>
//             - Provide support to prepare admission related presentations and to
//             host student receptions.
//           </p>
//           <p>
//             - Develop innovative communication strategies, recruitment
//             strategies and enrolment plans in coordination with senior
//             management to attract and enroll more students.
//           </p>
//           <p>
//             - Participate in all recruitment events, open houses, school fairs,
//             information sessions, exhibitions, school visits and off-campus
//             events.
//           </p>
//           <p>
//             - Maintain a database of student information, telephone logs and
//             student feedbacks in order to generate student reports for
//             management whenever required.
//           </p>
//           <p>
//             - Provide support to the Senior Admission Counsellor when required.
//           </p>
//         </>
//       ),
//       tags: [
//         { tag: "Full-time" },
//         { tag: "Senior Level" },
//         { tag: "8-10 Year Exp." },
//       ],
//     },
//     {
//       id: "uQCsL0W3Xhpqgkivj0H5",
//       title: "Admission Counsellor",
//       skills:
//         "Administration, Database, Good Communication Skill, Counselling , Knowledge of Computer",
//       description:
//         "Administration, Database, Good Communication Skill, Counselling , Knowledge of Computer",
//       image:
//         "https://cdn.discordapp.com/attachments/929834261568167986/939170406408024144/Frame_1453.png",
      
     
//       responsibilities: (
//         <>
//           <p>
//             - Analyze the applications of prospective students based on standard
//             admission policies.
//           </p>
//           <p>
//             - Interview students to understand their objectives and background.
//             Provide clarifications to student's queries in a professional
//             manner.
//           </p>
//           <p>
//             - He/She will be responsible for the admission and ongoing support
//             to students
//           </p>
//           <p>
//             - Establish, reevaluate, promote, and execute the admissions process
//             for colleges, universities, and other educational institutions.
//           </p>
//           <p>
//             - Provide assistance to the students to complete the enrolment
//             forms. - Review all the students’ applications and refer the
//             students to financial services personnel if required.
//           </p>
//           <p>
//             - Inform students about the courses offered and the tuition fees.
//           </p>
//           <p>
//             - Arrange orientation programs, educational workshops and graduation
//             programs for students.
//           </p>
//           <p>
//             - Provide support to prepare admission related presentations and to
//             host student receptions.
//           </p>
//           <p>
//             - Develop innovative communication strategies, recruitment
//             strategies and enrolment plans in coordination with senior
//             management to attract and enroll more students.
//           </p>
//           <p>
//             - Participate in all recruitment events, open houses, school fairs,
//             information sessions, exhibitions, school visits and off-campus
//             events.
//           </p>
//           <p>
//             - Maintain a database of student information, telephone logs and
//             student feedbacks in order to generate student reports for
//             management whenever required.
//           </p>
//           <p>
//             - Provide support to the Senior Admission Counsellor when required.
//           </p>
//         </>
//       ),
//       tags: [
//         { tag: "Full-time" },
//         { tag: "Senior Level" },
//         { tag: "3-4 Year Exp." },
//       ],
//     },
//   ];
//   return (
//     <div className="cursor-default">
//       <Head>
//         <title>Careers @DMTIMS</title>

//         <meta
//           name="keywords"
//           content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
//         />

//         <meta name="title" content="Careers @DMTIMS" />
//         <meta
//           name="description"
//           content="Work with us. Dr. Mar Theophilus Institute of Management Studies Ranked No.1 in Top Emerging Institutes in Navi-Mumbai & 3rd in Mumbai."
//         />

//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://dmtims.edu.in/careers" />
//         <meta property="og:title" content="Careers @DMTIMS" />
//         <meta
//           property="og:description"
//           content="Work with us. Dr. Mar Theophilus Institute of Management Studies Ranked No.1 in Top Emerging Institutes in Navi-Mumbai & 3rd in Mumbai."
//         />
//         <meta
//           property="og:image"
//           content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
//         />

//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content="https://dmtims.edu.in/careers" />
//         <meta property="twitter:title" content="Careers @DMTIMS" />
//         <meta
//           property="twitter:description"
//           content="Work with us. Dr. Mar Theophilus Institute of Management Studies Ranked No.1 in Top Emerging Institutes in Navi-Mumbai & 3rd in Mumbai."
//         />
//         <meta
//           property="twitter:image"
//           content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
//         />
//       </Head>

//       <CareersBanner />

//       <CareersAtDMTIMS jobs={newJobs} />
//     </div>
//   );
// }

// export default careers;












/**my code */
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import CareersAtDMTIMS from "../components/CareersAtDMTIMS/CareersAtDMTIMS";
import CareersBanner from "../components/CareersBanner/CareersBanner";
import Header from "../components/Header/Header";

function careers() {
  const newJobs = [
    {
      id: "WBLhXPv2X4Fa05gfqebg",
      title: "Admission Head",
      skills:
        "Administration, Database, Good Communication Skill, Counselling , Knowledge of Computer",
      description:
        "A reputed B school in Mumbai is looking out for a dynamic, result-oriented and a go-getter experienced professional, for the vacancy of Admissions Head, with a minimum of 10 - 12 years of proven track record in B-school admissions, for its total of 2 full time programs only",
    
      image: "/newImages/AdmissionHeadLogo.png",

      responsibilities: (
        <>
          <p>
            - Analyze the applications of prospective students based on standard
            admission policies.
          </p>
          <p>
            - Interview students to understand their objectives and background.
            Provide clarifications to student's queries in a professional
            manner.
          </p>
          <p>
            - He/She will be responsible for the admission and ongoing support
            to students
          </p>
          <p>
            - Establish, reevaluate, promote, and execute the admissions process
            for colleges, universities, and other educational institutions.
          </p>
          <p>
            - Provide assistance to the students to complete the enrolment
            forms. - Review all the students’ applications and refer the
            students to financial services personnel if required.
          </p>
          <p>
            - Inform students about the courses offered and the tuition fees.
          </p>
          <p>
            - Arrange orientation programs, educational workshops and graduation
            programs for students.
          </p>
          <p>
            - Provide support to prepare admission related presentations and to
            host student receptions.
          </p>
          <p>
            - Develop innovative communication strategies, recruitment
            strategies and enrolment plans in coordination with senior
            management to attract and enroll more students.
          </p>
          <p>
            - Participate in all recruitment events, open houses, school fairs,
            information sessions, exhibitions, school visits and off-campus
            events.
          </p>
          <p>
            - Maintain a database of student information, telephone logs and
            student feedbacks in order to generate student reports for
            management whenever required.
          </p>
          <p>
            - Provide support to the Senior Admission Counsellor when required.
          </p>
        </>
      ),
      tags: [
        { tag: "Full-time" },
        { tag: "Senior Level" },
        { tag: "8-10 Year Exp." },
      ],
    },
    {
      id: "uQCsL0W3Xhpqgkivj0H5",
      title: "Admission Counsellor",
      skills:
        "Administration, Database, Good Communication Skill, Counselling , Knowledge of Computer",
      description:
        "Administration, Database, Good Communication Skill, Counselling , Knowledge of Computer",
      // image:
      //   "https://cdn.discordapp.com/attachments/929834261568167986/939170406408024144/Frame_1453.png",
      
      image: "/newImages/AdmissionManagerLogo.png",
     
      responsibilities: (
        <>
          <p>
            - Analyze the applications of prospective students based on standard
            admission policies.
          </p>
          <p>
            - Interview students to understand their objectives and background.
            Provide clarifications to student's queries in a professional
            manner.
          </p>
          <p>
            - He/She will be responsible for the admission and ongoing support
            to students
          </p>
          <p>
            - Establish, reevaluate, promote, and execute the admissions process
            for colleges, universities, and other educational institutions.
          </p>
          <p>
            - Provide assistance to the students to complete the enrolment
            forms. - Review all the students’ applications and refer the
            students to financial services personnel if required.
          </p>
          <p>
            - Inform students about the courses offered and the tuition fees.
          </p>
          <p>
            - Arrange orientation programs, educational workshops and graduation
            programs for students.
          </p>
          <p>
            - Provide support to prepare admission related presentations and to
            host student receptions.
          </p>
          <p>
            - Develop innovative communication strategies, recruitment
            strategies and enrolment plans in coordination with senior
            management to attract and enroll more students.
          </p>
          <p>
            - Participate in all recruitment events, open houses, school fairs,
            information sessions, exhibitions, school visits and off-campus
            events.
          </p>
          <p>
            - Maintain a database of student information, telephone logs and
            student feedbacks in order to generate student reports for
            management whenever required.
          </p>
          <p>
            - Provide support to the Senior Admission Counsellor when required.
          </p>
        </>
      ),
      tags: [
        { tag: "Full-time" },
        { tag: "Senior Level" },
        { tag: "3-4 Year Exp." },
      ],
    },
  ];
  return (
    <div className="cursor-default">
      <Head>
        <title>Careers @DMTIMS</title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
        />

        <meta name="title" content="Careers @DMTIMS" />
        <meta
          name="description"
          content="Work with us. Dr. Mar Theophilus Institute of Management Studies Ranked No.1 in Top Emerging Institutes in Navi-Mumbai & 3rd in Mumbai."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dmtims.edu.in/careers" />
        <meta property="og:title" content="Careers @DMTIMS" />
        <meta
          property="og:description"
          content="Work with us. Dr. Mar Theophilus Institute of Management Studies Ranked No.1 in Top Emerging Institutes in Navi-Mumbai & 3rd in Mumbai."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dmtims.edu.in/careers" />
        <meta property="twitter:title" content="Careers @DMTIMS" />
        <meta
          property="twitter:description"
          content="Work with us. Dr. Mar Theophilus Institute of Management Studies Ranked No.1 in Top Emerging Institutes in Navi-Mumbai & 3rd in Mumbai."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />
      </Head>

      <CareersBanner />

      <CareersAtDMTIMS jobs={newJobs} />
    </div>
  );
}

export default careers;
