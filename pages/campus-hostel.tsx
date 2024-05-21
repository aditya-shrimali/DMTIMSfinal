import Head from "next/head";
import React from "react";
import CampusHostelBanner from "../components/CampusHostelBanner/CampusHostelBanner";
import DMTIMSHostel from "../components/DMTIMSHostel/DMTIMSHostel";

function CampusHostel() {
  return (
    <div className="cursor-default">
      <Head>
        <title>Campus Hostel</title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
        />

        <meta name="title" content="Campus Hostel" />
        <meta name="description" content="Your Home Away from Home" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dmtims.edu.in/campus-hostel" />
        <meta property="og:title" content="Campus Hostel" />
        <meta property="og:description" content="Your Home Away from Home" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dmtims.edu.in/campus-hostel"
        />
        <meta property="twitter:title" content="Campus Hostel" />
        <meta
          property="twitter:description"
          content="Your Home Away from Home"
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />
      </Head>

      <CampusHostelBanner />

      <DMTIMSHostel />
    </div>
  );
}

export default CampusHostel;
