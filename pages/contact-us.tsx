import Head from "next/head";
import React from "react";
import ContactUsBanner from "../components/ContactUsBanner/ContactUsBanner";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import Header from "../components/Header/Header";

function contactus() {
  return (
    <div className="cursor-default">
      <Head>
        <title>
          Contact Us - Dr. Mar Theophilus Institute of Management Studies
        </title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications,enquiry,contact,questions"
        />

        <meta
          name="title"
          content="Contact Us - Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta
          name="description"
          content="Get in touch. We’re here to help and answer any question you might have. We look forward to hearing from you."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dmtims.edu.in/contact-us" />
        <meta
          property="og:title"
          content="Contact Us - Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta
          property="og:description"
          content="Get in touch. We’re here to help and answer any question you might have. We look forward to hearing from you."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/929834261568167986/943917749204316243/unknown.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dmtims.edu.in/contact-us"
        />
        <meta
          property="twitter:title"
          content="Contact Us - Dr. Mar Theophilus Institute of Management Studies"
        />
        <meta
          property="twitter:description"
          content="Get in touch. We’re here to help and answer any question you might have. We look forward to hearing from you."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/929834261568167986/943917749204316243/unknown.png"
        />
      </Head>

      <ContactUsBanner />

      <ContactUsForm />
    </div>
  );
}

export default contactus;
