import Head from "next/head";
import React from "react";
import AdditionalSkillCertifications from "../components/AdditionalSkillCertifications/AdditionalSkillCertifications";
import AdmissionProcess from "../components/AdmissionProcess/AdmissionProcess";
import CoreCourses from "../components/CoreCourses/CoreCourses";
import DMTIMSAdvantages from "../components/DMTIMSAdvantages/DMTIMSAdvantages";
import DMTIMSErgonomics from "../components/DMTIMSErgonomics/DMTIMSErgonomics";
import DMTIMSUSP from "../components/DMTIMSUSP/DMTIMSUSP";
import DownloadBrochure from "../components/DownloadBrochure/DownloadBrochure";
import FirstYear from "../components/FirstYear/FirstYear";
import Header from "../components/Header/Header";
import PGDMCourseHighlights from "../components/PGDMCourseHighlights/PGDMCourseHighlights";
import ProgramBanner from "../components/ProgramBanner/ProgramBanner";
import ProgramFlow from "../components/ProgramFlow/ProgramFlow";
import ProgramOverview from "../components/ProgramOverview/ProgramOverview";
import SecondYear from "../components/SecondYear/SecondYear";
import SoftSkills from "../components/SoftSkills/SoftSkills";
import TechnicalDomainSkills from "../components/TechnicalDomainSkills/TechnicalDomainSkills";
import AcademicCalander from "../components/AcademicCalander/AcademicCalander";
import SIPprogram from "../components/SIPprogram/SIPprogram";
import AdditionalCertificates from "../components/AdditionalCertificates/AdditionalCertificates";
import SocialRelevanceProject from "../components/SocialRelevanceProject/SocialRelevanceProject";
import NationalIndustrial from "../components/NationalIndustrial/NationalIndustrial";
import AdmissionSelectionProcess from "../components/AdmissionSelectionProcess/AdmissionSelectionProcess";
import FeeStructure from "../components/FeeStructure/FeeStructure";

function programs() {
  return (
    <div className="cursor-default">
      <Head>
        <title>
          Full-time Programmes - Dr. Mar Theophilus Institute of Management
          Studies
        </title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
        />

        <meta
          name="title"
          content="Full-time Programmes - Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta
          name="description"
          content="DMTIMS's PGDM flagship programme’s multidisciplinary learning offers a fine blend of general management and functional specializations offered in Marketing, Finance, Human Resources, and Operations."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dmtims.edu.in/programs" />
        <meta
          property="og:title"
          content="Full-time Programmes - Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta
          property="og:description"
          content="DMTIMS's PGDM flagship programme’s multidisciplinary learning offers a fine blend of general management and functional specializations offered in Marketing, Finance, Human Resources, and Operations."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dmtims.edu.in/programs" />
        <meta
          property="twitter:title"
          content="Full-time Programmes - Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta
          property="twitter:description"
          content="DMTIMS's PGDM flagship programme’s multidisciplinary learning offers a fine blend of general management and functional specializations offered in Marketing, Finance, Human Resources, and Operations."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />
      </Head>

      {/* <ProgramBanner /> */}

      <ProgramOverview />

      <AcademicCalander />

      <DMTIMSUSP />

      <DMTIMSAdvantages />

      <DMTIMSErgonomics />

      <ProgramFlow />

      <PGDMCourseHighlights />

      <CoreCourses />

      <FirstYear />

      <SecondYear />

      <SoftSkills />

      <AdditionalCertificates />

      <NationalIndustrial />

      <SIPprogram />

      <SocialRelevanceProject />

      {/* <TechnicalDomainSkills /> */}

      <DownloadBrochure />
      <FeeStructure />

      <AdmissionSelectionProcess />
      {/* <AdmissionProcess /> */}
    </div>
  );
}

export default programs;
