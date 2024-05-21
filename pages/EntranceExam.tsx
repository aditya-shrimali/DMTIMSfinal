import Head from "next/head";
import React from "react";
import Entrance from '../components/EntranceExam/Entrance';
import Table from "../components/EntranceExam/Table";


function lifeAtDMTIMS() {
  return (
    <div className="cursor-default">
      <Head>
        <title>DATE</title>
        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications,enquiry,contact,questions"
        />

        <meta name="title" content="EntranceExam" />
        <meta
          name="description"
          content="DMTIMS offers great campus, comprehensive library, corporate seminar halls, study exercises, latest computer labs, sports activities and Group International Immersions"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dmtims.edu.in/EntranceExam"
        />
        <meta property="og:title" content="Entrance Exam" />
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
          content="https://dmtims.edu.in/EntranceExam"
        />
        <meta property="twitter:title" content="Entrance Exam" />
        <meta
          property="twitter:description"
          content="DMTIMS offers great campus, comprehensive library, corporate seminar halls, study exercises, latest computer labs, sports activities and Group International Immersions"
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />
      </Head>

    <Entrance/>
    <Table/>


    
     
    </div>
  );
}

export default lifeAtDMTIMS;
