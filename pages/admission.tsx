import Head from "next/head";
import React from "react";
import AdmissionBanner from "../components/AdmissionBanner/AdmissionBanner";
import AdmissionCarousel from "../components/AdmissionCarousel/AdmissionCarousel";
import AdmissionSelectionProcess from "../components/AdmissionSelectionProcess/AdmissionSelectionProcess";
import FAQs from "../components/FAQs/FAQs";
import Header from "../components/Header/Header";
import ListofItems from "../components/ListofItems/ListofItems";
import PaymentDetails from "../components/PaymentDetails/PaymentDetails";
import PaymentSchedule from "../components/PaymentSchedule/PaymentSchedule";

function admission() {
  return (
    <div className="cursor-default">
      <Head>
        <title>
          {`Apply for PGDM Admissions ${new Date().getFullYear()}-
          ${new Date().getFullYear() - 1998}`}
        </title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
        />

        <meta name="title" content="Apply for PGDM Admissions" />
        <meta
          name="description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dmtims.edu.in/admission" />
        <meta property="og:title" content="Apply for PGDM Admissions" />
        <meta
          property="og:description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dmtims.edu.in/admission"
        />
        <meta property="twitter:title" content="Apply for PGDM Admissions" />
        <meta
          property="twitter:description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/853240651385929738/910199409386610738/TAG_LINE.png"
        />
      </Head>

      {/* <AdmissionBanner /> */}

      <AdmissionSelectionProcess />

      <AdmissionCarousel />

      <PaymentSchedule />

      <PaymentDetails />

      <ListofItems />

      <FAQs />
    </div>
  );
}

export default admission;
