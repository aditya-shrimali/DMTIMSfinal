import Head from "next/head";
import React from "react";
import AdmissionBanner from "../components/AdmissionBanner/AdmissionBanner";
import EnquiryForm from "../components/EnquiryForm/EnquiryForm";

function AdmissionEnquiry() {
  return (
    <div className="cursor-default">
      <Head>
        <title>Admission Enquiry</title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
        />

        <meta name="title" content="Admission Enquiry" />
        <meta
          name="description"
          content="At DMTIMS we have adopted innovation and creativity as major tools to ensure that we prepare our students to acquire the knowledge and skills that will enable them to lead in diverse areas."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dmtims.edu.in/admission-enquiry"
        />
        <meta property="og:title" content="Admission Enquiry" />
        <meta
          property="og:description"
          content="At DMTIMS we have adopted innovation and creativity as major tools to ensure that we prepare our students to acquire the knowledge and skills that will enable them to lead in diverse areas."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dmtims.edu.in/admission-enquiry"
        />
        <meta property="twitter:title" content="Admission Enquiry" />
        <meta
          property="twitter:description"
          content="At DMTIMS we have adopted innovation and creativity as major tools to ensure that we prepare our students to acquire the knowledge and skills that will enable them to lead in diverse areas."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />
      </Head>

      <AdmissionBanner />

      <EnquiryForm />
    </div>
  );
}

export default AdmissionEnquiry;
