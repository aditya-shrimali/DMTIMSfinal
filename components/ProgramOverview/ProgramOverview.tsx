import Image from "next/legacy/image";
import ProgramOverviewImg from "./images/ProgramOverviewImg.webp";
import photo from "../../public/newImages/program0.webp";

const ProgramOverview = () => {
  const AboutLinks = [
    { id: 0, link: "/", text: "Mission" },
    { id: 1, link: "/", text: "Vision" },
    { id: 2, link: "/", text: "Overview" },
    { id: 3, link: "/", text: "VES Trust" },
    { id: 4, link: "/", text: "Message from Management" },
    { id: 5, link: "/", text: "Advisory Council" },
    { id: 7, link: "/", text: "Infrastructure" },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl py-8">
          <h1 id="Full-Time-PGDM" className="dmtims-title text-red-500 lg:pb-2">
            {/* Post Graduate Diploma in Management */}
            Dual Degree
          </h1>
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="flex flex-col py-8 ">
              <h3
                id="Program-Overview"
                className="dmtims-subtitle border-1 rounded-md bg-gray-200 px-4 py-2"
              >
                {/* Program Overview */}
                {/* Overview */}
                <p className="pb-2 pt-1 text-base font-medium">
                  This Dual Degree program equips managers with essential
                  analytical and decision-making skills across key management
                  areas like Business Accounting, Quantitative Methods,
                  International Business, Strategy, Economics, Financial
                  Management, Human Capital, Marketing, and Strategic
                  Management. We offers a QS 5 Star International University MBA
                  Degree upon AICTE approved PGDM completion through Credit
                  Transfer, culminating in a comprehensive dissertation for
                  in-depth specialization, contributing 60 credits to the degree
                  requirements. Elevate your expertise, showcasing advanced
                  analytical and critical thinking skills in your chosen field.
                </p>
              </h3>

              {/* PGDM */}
              {/* <h5 className="pt-8 text-sm ">
                <b>AICTE Approved</b>
              </h5> */}
              <h1
                id="Full-Time-PGDM"
                className="dmtims-title pt-12 text-3xl lg:pb-2"
              >
                {/* Post Graduate Diploma in Management */}
                PGDM (AICTE Approved Full Time Two Years Program)
              </h1>
              <h2 id="Program-Overview" className="dmtims-subtitle">
                {/* Program Overview */}
                {/* Overview */}
                <p className="pb-2 text-sm font-medium">
                  Managers require analytical and decision-making skills in key
                  functional areas of management to handle problems in real life
                  situations. To acquire these skills, it is imperative to
                  understand the fundamentals of core areas of Business
                  Accounting, Quantitative Methods for Business Decisions,
                  International Businesses, Strategy, Economics, Financial
                  Management, Human Capital, Marketing & Strategic Management.
                </p>
              </h2>

              {/* MBA */}
              <h5 className="pt-8 text-sm ">
                <b>European University</b>
              </h5>

              <h1 id="Full-Time-PGDM" className="dmtims-title lg:pb-2">
                {/* Post Graduate Diploma in Management */}
                MBA
              </h1>
              <div className="m-2 rounded-lg">
                <Image src={photo} alt="photo" />
              </div>

              <h2
                id="Program-Overview"
                className="dmtims-subtitle rounded-md bg-slate-200 p-2"
              >
                {/* Program Overview */}
                Overview
                <p className="pb-2 text-sm font-medium">
                  India’s One and Only Institute to Offer a QS 5 Star European
                  University MBA Degree after Completion of PGDM through Credit
                  Transfer. To successfully complete additional European
                  University MBA degree, you will be required to undertake the
                  completion of a comprehensive dissertation, as per the
                  selection of specialization. This dissertation, a culmination
                  of your academic efforts, holds significant weight,
                  contributing a total of 60 credits transfer, towards the
                  fulfilment of your degree requirements.
                </p>
              </h2>
            </div>
            <div className="flex-shrink-0 lg:w-1/2">
              <div className="relative h-[350px] sm:h-[375px] md:h-[400px] lg:ml-16 lg:h-[425px] xl:ml-32 2xl:ml-48">
                <Image
                  priority
                  src={ProgramOverviewImg}
                  alt="ProgramOverviewImg"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">MBA Eligibility Criteria</h1>
            <p>
              Any student who has completed a two year full time post graduate
              program/course from a recognised/approved institute or university.
              If the specialisation of International MBA opted for is same as
              that of the post graduate degree, then the student may note that
              the International MBA degree will be conferred through direct
              credit transfer of the post graduate degree specialization and
              thus, the need to take up the same specialization in the
              International MBA does not arise. If, the International MBA
              specialization differs from the PGDM program's specialization, the
              student must submit a separate dissertation of additional 60
              credits, in the MBA specialization subject.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
