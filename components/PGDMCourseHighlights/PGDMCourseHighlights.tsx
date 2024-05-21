import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PGDMCourseHighlights = () => {
  const [series, setseries] = useState([1, 1, 1, 1, 1, 1, 1, 1]);

  const el = useRef(null);
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      q("#radialChart"),
      {
        opacity: 1,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: q("#radialChart"),
          onEnter: loadData,
        },
      }
    );

    setTimeout(() => {
      setseries([1, 1, 1, 1, 1, 1, 1, 1]);
    }, 5000);
  }, []);

  const loadData = () => {
    setseries([34, 40, 46, 52, 58, 64, 70, 80]);
  };

  const options: any = {
    stroke: {
      lineCap: "round",
    },
    colors: [
      "#ED028C",
      "#A2238E",
      "#0095D9",
      "#674287",
      "#F58220",
      "#2E3092",
      "#EE1D23",
      "#00A54F",
    ],
    plotOptions: {
      radialBar: {
        inverseOrder: false,
        startAngle: -180,
        endAngle: 180,
        hollow: {
          margin: 20,
          size: "15%",
          background: "transparent",
          image:
            "https://cdn.discordapp.com/attachments/929834261568167986/941328002753646602/Frame_1405.png",
          imageWidth: 80,
          imageHeight: 80,
          imageOffsetX: 0,
          imageOffsetY: 0,
          imageClipped: false,
          position: "front",
        },
        track: {
          show: true,
          background: "#D8D8D8",
          strokeWidth: "97%",
          opacity: 1,
          margin: 14,
        },
        dataLabels: {
          show: false,
          name: {
            show: false,
          },
          value: {
            show: false,
          },
          total: {
            show: false,
          },
        },
      },
    },
  };

  return (
    <section className="relative bg-[#F2F2F2]">
      <div ref={el} className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <h2 id="PGDM-Course-Highlights" className="dmtims-title py-12">
            PGDM Course Highlights
          </h2>
          <p className="dmtims-subtitle font-bold">Our Teaching Methods</p>
          <div className="flex flex-col xl:flex-row-reverse">
            <div className="grid flex-grow grid-cols-1 gap-8 pt-6 pb-12 md:grid-cols-2 xl:grid-cols-4">
              <div className="mr-auto flex w-72 items-center rounded-lg bg-white sm:mx-auto xl:mx-0">
                <div className="m-4 h-20 w-1 rounded-full bg-[#00A54F]" />
                <p className="dmtims-subheading pb-0 font-semibold text-[#28314A]">
                  Case Studies
                </p>
              </div>
              <div className="ml-auto flex w-72 flex-row-reverse items-center rounded-lg bg-white sm:mx-auto sm:flex-row xl:mx-0">
                <div className="m-4 h-20 w-1 rounded-full bg-[#EE1D23]" />
                <p className="dmtims-subheading pb-0 font-semibold text-[#28314A]">
                  Role Plays
                </p>
              </div>
              <div className="mr-auto flex w-72 items-center rounded-lg bg-white sm:mx-auto xl:mx-0">
                <div className="m-4 h-20 w-1 rounded-full bg-[#2E3092]" />
                <p className="dmtims-subheading pb-0 font-semibold text-[#28314A]">
                  Corporate Seminars
                </p>
              </div>
              <div className="ml-auto flex w-72 flex-row-reverse items-center rounded-lg bg-white sm:mx-auto sm:flex-row xl:mx-0">
                <div className="m-4 h-20 w-1 rounded-full bg-[#ED028C]" />
                <p className="dmtims-subheading pb-0 font-semibold text-[#28314A]">
                  Outbound Learnings
                </p>
              </div>
              <div className="mr-auto flex w-72 items-center rounded-lg bg-white sm:mx-auto xl:mx-0">
                <div className="m-4 h-20 w-1 rounded-full bg-[#0095D9]" />
                <p className="dmtims-subheading pb-0 font-semibold text-[#28314A]">
                  Management Games & <br /> Movies
                </p>
              </div>
              <div className="ml-auto flex w-72 flex-row-reverse items-center rounded-lg bg-white sm:mx-auto sm:flex-row xl:mx-0">
                <div className="m-4 h-20 w-1 rounded-full bg-[#A2238E]" />
                <p className="dmtims-subheading pb-0 font-semibold text-[#28314A]">
                  Live Projects & <br /> Assignments
                </p>
              </div>
              <div className="mr-auto flex w-72 items-center rounded-lg bg-white sm:mx-auto xl:mx-0">
                <div className="m-4 h-20 w-1 rounded-full bg-[#F58220]" />
                <p className="dmtims-subheading pb-0 font-semibold text-[#28314A]">
                  News Analysis & <br /> Discussions
                </p>
              </div>
              <div className="ml-auto flex w-72 flex-row-reverse items-center rounded-lg bg-white sm:mx-auto sm:flex-row xl:mx-0">
                <div className="m-4 h-20 w-1 rounded-full bg-[#674287]" />
                <p className="dmtims-subheading pb-0 font-semibold text-[#28314A]">
                  Skill Based Training <br /> Workshops
                </p>
              </div>
            </div>
          </div>
          <p className="dmtims-subheading font-semibold text-[#28314A]">
            DMTIMS offers Industry 5.0 syllabus for its PGDM program relevant to
            dynamic global business environment with emphasis on International
            Marketing, Human Capital Management, Global Finance & FinTech,
            Global Supply Chain Management & Operations and International
            Business Management. The intellectual capital includes experienced
            and qualified faculty members with excellent track records in
            different fields of specializations in business and management from
            both academia and industry. With Faculty members being more than
            just teachers; they mentor each student in terms of providing
            academic advice, help them enable to adjust to the higher education
            learning environment and also mentor to help them progress
            successfully throughout the study period and thereafter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PGDMCourseHighlights;
