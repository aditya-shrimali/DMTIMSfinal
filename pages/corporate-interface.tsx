import Head from "next/head";
import React from "react";
import CorporateBanner from "../components/CorporateBanner/CorporateBanner";
import IndustrySpeakers from "../components/IndustrySpeakers/IndustrySpeakers";
import SpeakersList from "../components/SpeakersList/SpeakersList";
import CorporateVisitorSessions from "../components/CorporateVisitorSessions/CorporateVisitorSessions";

function CorporateInterface() {
  return (
    <div className="cursor-default">
      <Head>
        <title>Corporate Interface</title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
        />

        <meta name="title" content="Corporate Interface" />
        <meta
          name="description"
          content="Work with us. Dr. Mar Theophilus Institute of Management Studies Ranked No.1 in Top Emerging Institutes in Navi-Mumbai & 3rd in Mumbai."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dmtims.edu.in/corporate-interface"
        />
        <meta property="og:title" content="Corporate Interface" />
        <meta
          property="og:description"
          content="Work with us. Dr. Mar Theophilus Institute of Management Studies Ranked No.1 in Top Emerging Institutes in Navi-Mumbai & 3rd in Mumbai."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dmtims.edu.in/corporate-interface"
        />
        <meta property="twitter:title" content="Corporate Interface" />
        <meta
          property="twitter:description"
          content="Work with us. Dr. Mar Theophilus Institute of Management Studies Ranked No.1 in Top Emerging Institutes in Navi-Mumbai & 3rd in Mumbai."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />
      </Head>

      {/* <CorporateBanner /> */}

      <IndustrySpeakers />

      <CorporateVisitorSessions />
    </div>
  );
}

export default CorporateInterface;
