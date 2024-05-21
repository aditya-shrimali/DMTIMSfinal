import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import CoreFaculty from "../components/CoreFaculty/CoreFaculty";
import CorporateVisitorSessions from "../components/CorporateVisitorSessions/CorporateVisitorSessions";
import FacultyBanner from "../components/FacultyBanner/FacultyBanner";
import Header from "../components/Header/Header";
import SupportCapital from "../components/SupportCapital/SupportCapital";
import Ektaara from '../components/Ektaara/Ektaara';
import VisitingFacutly from "../components/VisitingFaculty/VisitingFaculty";
import IndustryExpertsVisitingFaculty from "../components/IndustryExpertsVisitingFaculty/IndustryExpertsVisitingFaculty";

function faculty() {
  return (
    <div className="cursor-default">
      <Head>
        <title>Faculty @DMTIMS</title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications,enquiry,contact,questions"
        />

        <meta name="title" content="Faculty @DMTIMS" />
        <meta
          name="description"
          content="Dr. Susen Varghese · Prof. Bhupendra Mishra · Dr. Susy Kuriakose · Dr. Monica Khanna · Dr. Kazanfar Khan · Dr. Priya Harikumar · Prof. Radhika Kirankumar · Prof. Aji John · Prof. Nikhil Shirsat · Prof. Jayaraj V. S"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dmtims.edu.in/faculty" />
        <meta property="og:title" content="Faculty @DMTIMS" />
        <meta
          property="og:description"
          content="Dr. Susen Varghese · Prof. Bhupendra Mishra · Dr. Susy Kuriakose · Dr. Monica Khanna · Dr. Kazanfar Khan · Dr. Priya Harikumar · Prof. Radhika Kirankumar · Prof. Aji John · Prof. Nikhil Shirsat · Prof. Jayaraj V. S"
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dmtims.edu.in/faculty" />
        <meta property="twitter:title" content="Faculty @DMTIMS" />
        <meta
          property="twitter:description"
          content="Dr. Susen Varghese · Prof. Bhupendra Mishra · Dr. Susy Kuriakose · Dr. Monica Khanna · Dr. Kazanfar Khan · Dr. Priya Harikumar · Prof. Radhika Kirankumar · Prof. Aji John · Prof. Nikhil Shirsat · Prof. Jayaraj V. S"
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />
      </Head>

      <FacultyBanner />

      <CoreFaculty />

      <IndustryExpertsVisitingFaculty />

      <SupportCapital />
      <Ektaara/>
    </div>
  );
}

export default faculty;
