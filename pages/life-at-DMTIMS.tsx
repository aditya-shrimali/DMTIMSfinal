import Head from "next/head";
import React from "react";
import Activities from "../components/Activities/Activities";
import CampusToCorporate from "../components/CampusToCorporate/CampusToCorporate";
import FestCulture from "../components/FestCulture/FestCulture";
import Header from "../components/Header/Header";
import InductionProgram from "../components/InductionProgram/InductionProgram";
import IndustrialVisits from "../components/IndustrialVisits/IndustrialVisits";
import Infrastructure from "../components/Infrastructure/Infrastructure";
import LifeAtDMTIMS from "../components/LifeAtDMTIMS/LifeAtDMTIMS";
import SocialRelevanceProject from "../components/SocialRelevanceProject/SocialRelevanceProject";
import StudentLifeBanner from "../components/StudentLifeBanner/StudentLifeBanner";
import VirtualTour from "../components/VirtualTour/VirtualTour";
import Festivities from "../components/Festivities/Festivities";

function lifeAtDMTIMS() {
  return (
    <div className="cursor-default">
      <Head>
        <title>Life @DMTIMS</title>
        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications,enquiry,contact,questions"
        />

        <meta name="title" content="Life @DMTIMS" />
        <meta
          name="description"
          content="DMTIMS offers great campus, comprehensive library, corporate seminar halls, study exercises, latest computer labs, sports activities and Group International Immersions"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dmtims.edu.in/life-at-DMTIMS"
        />
        <meta property="og:title" content="Life @DMTIMS" />
        <meta
          property="og:description"
          content="DMTIMS offers great campus, comprehensive library, corporate seminar halls, study exercises, latest computer labs, sports activities and Group International Immersions"
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dmtims.edu.in/life-at-DMTIMS"
        />
        <meta property="twitter:title" content="Life @DMTIMS" />
        <meta
          property="twitter:description"
          content="DMTIMS offers great campus, comprehensive library, corporate seminar halls, study exercises, latest computer labs, sports activities and Group International Immersions"
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />
      </Head>

      <StudentLifeBanner />

      <Festivities />

      <InductionProgram />

      <LifeAtDMTIMS />

      <IndustrialVisits />

      {/* <NewsLetter/> */}

      <Activities />

      <SocialRelevanceProject />

      <CampusToCorporate />

      <FestCulture />

      <VirtualTour />
    </div>
  );
}

export default lifeAtDMTIMS;
