import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import IndustryGroupPartners from "../components/IndustryGroupPartners/IndustryGroupPartners";
import PartnersBanner from "../components/PartnersBanner/PartnersBanner";
import InternshipPlacements from "../components/InternshipPlacements/InternshipPlacements";
import SectoralPlacements from "../components/SectoralPlacements/SectoralPlacements";
import HighestPackage from "../components/HighestPackage/HighestPackage";

function placements() {
  return (
    <div className="cursor-default">
      <Head>
        <title>
          Placements | Dr. Mar Theophilus Institute of Management Studies
        </title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications,enquiry,contact,questions"
        />

        <meta
          name="title"
          content="Placements | Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta name="description" content="Industry Group Partners" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dmtims.edu.in/placements" />
        <meta
          property="og:title"
          content="Placements | Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta property="og:description" content="Industry Group Partners" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/929834261568167986/1115622080818458725/image_92.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dmtims.edu.in/placements"
        />
        <meta
          property="twitter:title"
          content="Placements | Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta
          property="twitter:description"
          content="Industry Group Partners"
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/929834261568167986/1115622080818458725/image_92.webp"
        />
      </Head>

      <PartnersBanner />

      <SectoralPlacements />

      <HighestPackage />

      <IndustryGroupPartners />

      <InternshipPlacements />
    </div>
  );
}

export default placements;
