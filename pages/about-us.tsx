// import Head from "next/head";
// import React from "react";
// import AboutBanner from "../components/AboutBanner/AboutBanner";
// import AboutHeads from "../components/AboutHeads/AboutHeads";
// import AboutOverview from "../components/AboutOverview/AboutOverview";
// import AcademicTeam from "../components/AcademicTeam/AcademicTeam";
// import AdvisoryCouncil from "../components/AdvisoryCouncil/AdvisoryCouncil";
// import BoardofStudies from "../components/BoardofStudies/BoardofStudies";
// import CoreValues from "../components/CoreValues/CoreValues";
// import DMTIMSRankings from "../components/DMTIMSRankings/DMTIMSRankings";
// import Header from "../components/Header/Header";
// import IndustryExpertsVisitingFaculty from "../components/IndustryExpertsVisitingFaculty/IndustryExpertsVisitingFaculty";
// import Infrastructure from "../components/Infrastructure/Infrastructure";
// import Invitees from "../components/Invitees/Invitees";
// import ManagementMessage from "../components/ManagementMessage/ManagementMessage";
// import ManagementTrustees from "../components/ManagementTrustees/ManagementTrustees";
// import VESTrust from "../components/VESTrust/VESTrust";

// function AboutUs() {
//   return (
//     <div className="cursor-default">
//       <Head>
//         <title>About Dr. Mar Theophilus Institute of Management Studies</title>

//         <meta
//           name="keywords"
//           content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
//         />

//         <meta
//           name="title"
//           content="About Dr. Mar Theophilus Institute of Management Studies"
//         />
//         <meta
//           name="description"
//           content="At DMTIMS we have adopted innovation and creativity as major tools to ensure that we prepare our students to acquire the knowledge and skills that will enable them to lead in diverse areas."
//         />

//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://dmtims.edu.in/about-us" />
//         <meta
//           property="og:title"
//           content="About Dr. Mar Theophilus Institute of Management Studies"
//         />
//         <meta
//           property="og:description"
//           content="At DMTIMS we have adopted innovation and creativity as major tools to ensure that we prepare our students to acquire the knowledge and skills that will enable them to lead in diverse areas."
//         />
//         <meta
//           property="og:image"
//           content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
//         />

//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content="https://dmtims.edu.in/about-us" />
//         <meta
//           property="twitter:title"
//           content="About Dr. Mar Theophilus Institute of Management Studies"
//         />
//         <meta
//           property="twitter:description"
//           content="At DMTIMS we have adopted innovation and creativity as major tools to ensure that we prepare our students to acquire the knowledge and skills that will enable them to lead in diverse areas."
//         />
//         <meta
//           property="twitter:image"
//           content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
//         />
//       </Head>

//       <AboutBanner />

//       <AboutOverview />

//       <DMTIMSRankings />

//       <CoreValues />

//       <VESTrust />

//       <ManagementMessage />

//       <AboutHeads />

//       {/* <OutReach/> */}

//       <ManagementTrustees />

//       <BoardofStudies />

//       <Invitees />

//       <AdvisoryCouncil />

//       <AcademicTeam />

//       <Infrastructure />
//     </div>
//   );
// }

// export default AboutUs;





























/** New changes in about us page */
import Head from "next/head";
import React from "react";
import AboutBanner from "../components/AboutBanner/AboutBanner";
import AboutHeads from "../components/AboutHeads/AboutHeads";
import AboutOverview from "../components/AboutOverview/AboutOverview";
import AcademicTeam from "../components/AcademicTeam/AcademicTeam";
import AdvisoryCouncil from "../components/AdvisoryCouncil/AdvisoryCouncil";
import BoardofStudies from "../components/BoardofStudies/BoardofStudies";
import CoreValues from "../components/CoreValues/CoreValues";
import DMTIMSRankings from "../components/DMTIMSRankings/DMTIMSRankings";
import Header from "../components/Header/Header";
import IndustryExpertsVisitingFaculty from "../components/IndustryExpertsVisitingFaculty/IndustryExpertsVisitingFaculty";
import Infrastructure from "../components/Infrastructure/Infrastructure";
import Invitees from "../components/Invitees/Invitees";
import ManagementMessage from "../components/ManagementMessage/ManagementMessage";
import ManagementTrustees from "../components/ManagementTrustees/ManagementTrustees";
import VESTrust from "../components/VESTrust/VESTrust";
import Patronage from "../components/ManagementMessage/Patronage";
import Directors from "../components/AboutHeads/Directors";

function AboutUs() {
  return (
    <div className="cursor-default">
      <Head>
        <title>About Dr. Mar Theophilus Institute of Management Studies</title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
        />

        <meta
          name="title"
          content="About Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta
          name="description"
          content="At DMTIMS we have adopted innovation and creativity as major tools to ensure that we prepare our students to acquire the knowledge and skills that will enable them to lead in diverse areas."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dmtims.edu.in/about-us" />
        <meta
          property="og:title"
          content="About Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta
          property="og:description"
          content="At DMTIMS we have adopted innovation and creativity as major tools to ensure that we prepare our students to acquire the knowledge and skills that will enable them to lead in diverse areas."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dmtims.edu.in/about-us" />
        <meta
          property="twitter:title"
          content="About Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta
          property="twitter:description"
          content="At DMTIMS we have adopted innovation and creativity as major tools to ensure that we prepare our students to acquire the knowledge and skills that will enable them to lead in diverse areas."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />
      </Head>

      {/* remove this part from about us page due to owner requirements */}
      {/* <AboutBanner /> */}

      <AboutOverview />
      <VESTrust />

      <CoreValues />
      <DMTIMSRankings />


     

      <Patronage/>
      {/* <ManagementMessage /> */}

      <ManagementTrustees />

      <AdvisoryCouncil />
      <Directors/>
      {/* <AboutHeads /> */}

     


      {/* <BoardofStudies /> */}

      <Invitees />


      {/* <AcademicTeam /> */}

      {/* <Infrastructure /> */}
    </div>
  );
}

export default AboutUs;

