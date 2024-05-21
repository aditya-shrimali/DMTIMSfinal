import Head from "next/head";
import React from "react";
import ComplimentaryCertificationsBanner from "../components/ComplimentaryCertificationsBanner/ComplimentaryCertificationsBanner";
import AdditionalSkillCertifications from "../components/AdditionalSkillCertifications/AdditionalSkillCertifications";

function ComplimentaryCertifications() {
  return (
    <div className="cursor-default">
      <Head>
        <title>{`Complimentary Certifications`}</title>

        <meta
          name="keywords"
          content="top b schools in mumbai,post graduate diploma in management,marketing, finance, human resources,specialization in global finance and finTech,emphasis on international marketing,global supply chain management,general management,international business,strategy,skill certifications"
        />

        <meta name="title" content="Complimentary Certifications" />
        <meta
          name="description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dmtims.edu.in/complimentary-certifications"
        />
        <meta property="og:title" content="Complimentary Certifications" />
        <meta
          property="og:description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/929834261568167986/1115602803398803487/image_92.webp"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dmtims.edu.in/complimentary-certifications"
        />
        <meta property="twitter:title" content="Complimentary Certifications" />
        <meta
          property="twitter:description"
          content="DMTIMS follows a non-discriminatory policy to admit all such students, who have completed their bachelor’s degree in any discipline from an accredited institution in India or its equivalent."
        />
        <meta
          property="twitter:image"
          content="https://cdn.discordapp.com/attachments/929834261568167986/1115602803398803487/image_92.webp"
        />
      </Head>

      {/* <ComplimentaryCertificationsBanner /> */}

      {/* <AdditionalSkillCertifications /> */}

      <section className="mb-2 ml-8 mt-4">
        <h1 className="mb-4 text-xl font-bold">
          Professional Partnerships & Associations
        </h1>
        <p className="w-[50%]">
          Forming alliances with associations that provide education,
          industry-recognized certifications, and opportunities for NGO
          collaboration significantly boost professional development. These
          partnerships equip our Students with the latest knowledge and skills,
          validate their expertise through certifications, and allow them to
          make their contribution towards society at large alongside NGOs,
          making them a well-rounded and impactful professional. That’s why
          DMTIMS believes in forming such partnerships for the all round
          development of our Students
        </p>
      </section>
      <section className="mb-2 ml-8 mt-4">
        <h1 className="text-2xl font-bold text-slate-600">
          Educational Partnerships
        </h1>
        <div className="mt-6">
          <ul className="flex flex-col gap-8">
            <li>AIMS</li>
            <li>ACBSP</li>
            <li>EUDOXIA</li>
            <li>St. Thomas College-Ruabandha Sector, Bhilai</li>
            <li>Christian College of Engineering & Technology</li>
            <li>M.G.M College, Dimapur</li>
          </ul>
        </div>
      </section>
      <section className="mb-4 ml-8 mt-6">
        <h1 className="text-2xl font-bold text-slate-600">
          Industry Certification Partnerships
        </h1>
        <div className="mt-6">
          <ul className="flex flex-col gap-8">
            <li>Ken Buddy</li>
            <li>Silkun Institute of Management and Technology </li>
            <li>ProSchool</li>
            <li>Stock Street</li>
            <li>Team Lease</li>
            <li>MTC Global</li>
            <li>Vocskill</li>
          </ul>
        </div>
      </section>
      <section className="mb-4 ml-8 mt-6">
        <h1 className="text-2xl font-bold text-slate-600">NGO Partnerships</h1>
        <div className="mt-6">
          <ul className="flex flex-col gap-8">
            <li>Shashwant Foundation</li>
            <li>Bhojraj Vikas Program</li>
            <li>Sammaan</li>
            <li>Dr. Mar Theophilus Ashraya Bhavan</li>
            <li>Rays of Hope Ministries</li>
            <li>Premdan</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ComplimentaryCertifications;
