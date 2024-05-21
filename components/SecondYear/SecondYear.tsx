import PGDMGFF from "./images/PGDMGFF.webp";
import PGDMIM from "./images/PGDMIM.webp";
import PGDMHCM from "./images/PGDMHCM.webp";
import PGDMSCM from "./images/PGDMSCM.webp";
import PGDMIBM from "./images/PGDMIBM.webp";
import PGDMCard from "../PGDMCard/PGDMCard";

const SecondYear = () => {
  const pgcards = [
    {
      id: "GFF",
      img: PGDMGFF,
      title: "PGDM (GFF)",
      desc: "Specialization in Global Finance & FinTech equips students to acquire specialized skills and knowledge in understanding and analyzing financial transactions and related activities of an organization as well as to make effective and ethical financial decisions related to the same. The purpose of this emphasis is to enable students to understand and analyse theories in Corporate Finance, Investment & Portfolio, etc. A focus on financial institutions & international finance domain enable students to keep abreast of various changes and challenges operating in international business scenarios.",
      subjects: [
        "Financial Modeling",
        "Project & Infrastructure Finance",
        "Investment Banking, Mergers & Acquisitions",
        "Security Analysis & Portfolio Management",
        "Banking, Insurance & Micro Finance",
        "Green Finance",
        "Capital Markets & Derivatives",
        "International Finance",
        "Risk Management & Analytics",
        "FinTech",
      ],
    },
    {
      id: "IM",
      img: PGDMIM,
      title: "PGDM (IM)",
      desc: `PGDM with emphasis on International Marketing can be a rewarding prospect for an aspiring student oriented towards building a career in marketing. The marketing emphasis encompasses the fundamental approach in understanding market competition and competitor's strategy in developing marketing programs.`,
      subjects: [
        "Predictive Modeling",
        "Strategic Global Marketing",
        "Rural Marketing",
        "Integrated Marketing Communication & Advertising",
        "Green Marketing",
        "Digital Marketing Strategy",
        "Marketing Research & Analytics",
        "Product & Brand Management",
        "Services Marketing",
        "B2B Marketing",
      ],
    },
    {
      id: "HCM",
      img: PGDMHCM,
      title: "PGDM (HCM)",
      desc: `Managing human resources is the most important function in any organization. Students taking this specialization would be able to understand and develop skills in HRM, particularly related to International Human Capital best practices.`,
      subjects: [
        "Training & Development",
        "Talent Acquisition & Management",
        "Compensations & Benefit",
        "International HRM",
        "Strategic HRM",
        "Emotional Intelligence",
        "HR Analytics",
        "Power & Politics in Organization",
        "Competency Mapping & Performance Management",
        "Industrial Relations & International Labor Law",
      ],
    },
    {
      id: "SCM",
      img: PGDMSCM,
      title: "PGDM (SCM)",
      desc: `PGDM with emphasis on GLOBAL SUPPLY CHAIN MANAGEMENT equips students with skills and knowledge in understanding and analyzing Supply Chain and its related activities of an organization as well as to make effective and efficient decisions related to the same. The purpose of this emphasis is for students to understand and analyze the theories in innovation, services and logistics in global context.`,
      subjects: [
        "Predictive Modeling",
        "Strategic Cost Management",
        "Services Operations",
        "Turtles & Hares: Systems, Strategy, & Z Bottle Necks",
        "Supply Chain Innovation & Logistics Management",
        "Management of Mega & Complex Projects",
        "Logistics in Global Context",
        "Green Operations",
        "Strategic Sourcing & Supply Management",
        "Operation Analytics",
      ],
    },
    {
      id: "IBM",
      img: PGDMIBM,
      title: "PGDM (IBM)",
      desc: `This course will enhance and sharpen your critical thinking skills in general management, international business, and strategy. It will equip you with the knowledge and ability to realize your aspirations on a worldwide scale.`,
      subjects: [
        "Fundamentals of International Business Management",
        "Global Cross Culture Management",
        "India’s Foreign Trade & Policy",
        "International Business Operations",
        "Global Business Economics & Management Decision",
        "GLobal Trade, Laws, Regulations & Investment Environment",
        "Global Corporate Strategies",
        "WTO & its impact on International Business",
        "Econometrics & Business Statistics",
        "Leadership in International Context",
      ],
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl pt-8">
          <h2 className="dmtims-title">PGDM Specializations</h2>
          <p id="Second-Year-PGDM" className="dmtims-subtitle py-2 lg:py-6">
            Second Year - PGDM Course
          </p>
          {pgcards.map(({ id, img, title, desc, subjects }) => (
            <PGDMCard
              key={id}
              img={img}
              id={id}
              title={title}
              desc={desc}
              subjects={subjects}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondYear;
