// import { collection, getDocs, orderBy, query } from "firebase/firestore";
// import Head from "next/head";
// import React from "react";
// import Banner from "../components/Banner/Banner";
// import ContactForm from "../components/ContactForm/ContactForm";
// import DownloadBrochure from "../components/DownloadBrochure/DownloadBrochure";
// import EventHighlights from "../components/EventHighlights/EventHighlights";
// import Header from "../components/Header/Header";
// import HeroSection from "../components/HeroSection/HeroSection";
// import JobProspects from "../components/JobProspects/JobProspects";
// import PGDM from "../components/PGDM/PGDM";
// import Socials from "../components/Socials/Socials";
// import Testimonials from "../components/Testimonials/Testimonials";
// import TopRecruiters from "../components/TopRecruiters/TopRecruiters";
// import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
// import WallofFame from "../components/WallofFame/WallofFame";

// function index() {
//   return (
//     <div className="cursor-default">
//       <Head>
//         <title>
//           DMTIMS | Top Emerging PDGM Institute in India | International Business
//           Management, Global Finance and Fintech, International Marketing, Human
//           Capital Management, Supply Chain Management
//         </title>
//         <meta
//           name="keywords"
//           content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications,enquiry,contact,questions"
//         />
//         <meta
//           name="title"
//           content="DMTIMS | Top Emerging PDGM Institute in India | International Business Management, Global Finance and Fintech, International Marketing, Human Capital Management, Supply Chain Management"
//         />
//         <meta
//           name="description"
//           content="DMTIMS, through its 2-year full time AICTE approved PGDM program aims to impart education, combined with creation, dissemination and application of knowledge, met in an integrated form, to create a synergetic impact. The Institute fosters and nurtures leaders capable of making a positive difference in the management of corporate sectors."
//         />

//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://dmtims.edu.in/" />
//         <meta
//           property="og:title"
//           content="DMTIMS | Top Emerging PDGM Institute in India | International Business Management, Global Finance and Fintech, International Marketing, Human Capital Management, Supply Chain Management"
//         />
//         <meta
//           property="og:description"
//           content="DMTIMS, through its 2-year full time AICTE approved PGDM program aims to impart education, combined with creation, dissemination and application of knowledge, met in an integrated form, to create a synergetic impact. The Institute fosters and nurtures leaders capable of making a positive difference in the management of corporate sectors."
//         />
//         <meta
//           property="og:image"
//           content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
//         />

//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content="https://dmtims.edu.in/" />
//         <meta
//           property="twitter:title"
//           content="DMTIMS | Top Emerging PDGM Institute in India | International Business Management, Global Finance and Fintech, International Marketing, Human Capital Management, Supply Chain Management"
//         />
//         <meta
//           property="twitter:description"
//           content="DMTIMS, through its 2-year full time AICTE approved PGDM program aims to impart education, combined with creation, dissemination and application of knowledge, met in an integrated form, to create a synergetic impact. The Institute fosters and nurtures leaders capable of making a positive difference in the management of corporate sectors."
//         />
//         <meta
//           property="twitter:image"
//           content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
//         />
//       </Head>

//       <Banner />

//       <HeroSection />

//       <PGDM />

//       {/* <UpcomingEvents />

//         <EventHighlights />

//         <JobProspects /> */}

//       <DownloadBrochure />

//       <TopRecruiters />

//       <WallofFame />

//       <Socials />

//       <Testimonials />

//       <ContactForm />
//     </div>
//   );
// }

// export default index;










/**my code also include google analytics code here */
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";
import DownloadBrochure from "../components/DownloadBrochure/DownloadBrochure";
import EventHighlights from "../components/EventHighlights/EventHighlights";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import JobProspects from "../components/JobProspects/JobProspects";
import PGDM from "../components/PGDM/PGDM";
import Socials from "../components/Socials/Socials";
import Testimonials from "../components/Testimonials/Testimonials";
import TopRecruiters from "../components/TopRecruiters/TopRecruiters";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import WallofFame from "../components/WallofFame/WallofFame";
import Script from "next/script";

function index() {
  return (
    <div className="cursor-default">
      <Head>
        <title>
          DMTIMS | Top Emerging PDGM Institute in India | International Business
          Management, Global Finance and Fintech, International Marketing, Human
          Capital Management, Supply Chain Management
        </title>
        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications,enquiry,contact,questions"
        />
        <meta
          name="title"
          content="DMTIMS | Top Emerging PDGM Institute in India | International Business Management, Global Finance and Fintech, International Marketing, Human Capital Management, Supply Chain Management"
        />
        <meta
          name="description"
          content="DMTIMS, through its 2-year full time AICTE approved PGDM program aims to impart education, combined with creation, dissemination and application of knowledge, met in an integrated form, to create a synergetic impact. The Institute fosters and nurtures leaders capable of making a positive difference in the management of corporate sectors."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dmtims.edu.in/" />
        <meta
          property="og:title"
          content="DMTIMS | Top Emerging PDGM Institute in India | International Business Management, Global Finance and Fintech, International Marketing, Human Capital Management, Supply Chain Management"
        />
        <meta
          property="og:description"
          content="DMTIMS, through its 2-year full time AICTE approved PGDM program aims to impart education, combined with creation, dissemination and application of knowledge, met in an integrated form, to create a synergetic impact. The Institute fosters and nurtures leaders capable of making a positive difference in the management of corporate sectors."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dmtims.edu.in/" />
        <meta
          property="twitter:title"
          content="DMTIMS | Top Emerging PDGM Institute in India | International Business Management, Global Finance and Fintech, International Marketing, Human Capital Management, Supply Chain Management"
        />
        <meta
          property="twitter:description"
          content="DMTIMS, through its 2-year full time AICTE approved PGDM program aims to impart education, combined with creation, dissemination and application of knowledge, met in an integrated form, to create a synergetic impact. The Institute fosters and nurtures leaders capable of making a positive difference in the management of corporate sectors."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        {/* google analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XCZ803J6W8"></Script>
          <Script id="google-analytics">
            {
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XCZ803J6W8');

            `}
          </Script>

      </Head>

      <Banner />

      <HeroSection />

      <PGDM />

      {/* <UpcomingEvents />

        <EventHighlights />

        <JobProspects /> */}

      <DownloadBrochure />

      <TopRecruiters />

      <WallofFame />

      <Socials />

      <Testimonials />

      <ContactForm />
    </div>
  );
}

export default index;
