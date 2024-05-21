import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import MandatoryDisclosureBanner from "../components/MandatoryDisclosureBanner/MandatoryDisclosureBanner";
import MandatroyDisclosurePDF from "../components/MandatroyDisclosurePDF/MandatroyDisclosurePDF";

function mandatory_disclosure() {
  return (
    <div className="cursor-default">
      <Head>
        <title>
          Mandatory Disclosure | Dr. Mar Theophilus Institute of Management
          Studies
        </title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications,enquiry,contact,questions"
        />

        <meta
          name="title"
          content="Mandatory Disclosure | Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta name="description" content="Mandatory disclosures" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dmtims.edu.in/mandatory-disclosure"
        />
        <meta
          property="og:title"
          content="Mandatory Disclosure | Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta property="og:description" content="Mandatory disclosures" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dmtims.edu.in/mandatory-disclosure"
        />
        <meta
          property="twitter:title"
          content="Mandatory Disclosure | Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta property="twitter:description" content="Mandatory disclosures" />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />
      </Head>

      <MandatoryDisclosureBanner />

      <MandatroyDisclosurePDF />
    </div>
  );
}

export default mandatory_disclosure;
