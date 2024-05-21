import Head from "next/head";
import React from "react";
import AnnouncementsBanner from "../components/AnnouncementsBanner/AnnouncementsBanner";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";

function announcements() {
  return (
    <div className="cursor-default">
      <Head>
        <title>{`Announcements`}</title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
        />

        <meta name="title" content="Announcements" />
        <meta
          name="description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dmtims.edu.in/announcements" />
        <meta property="og:title" content="Announcements" />
        <meta
          property="og:description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/929834261568167986/1115231984965394565/image_92.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dmtims.edu.in/announcements"
        />
        <meta property="twitter:title" content="Announcements" />
        <meta
          property="twitter:description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/929834261568167986/1115231984965394565/image_92.webp"
        />
      </Head>

      <AnnouncementsBanner />

      <UpcomingEvents />
    </div>
  );
}

export default announcements;
