import Image from "next/legacy/image";
import React, { useRef } from "react";
import CareerModal from "../CareerModal/CareerModal";
const parse = require("html-react-parser");

interface Props {
  jobs: {
    id: string;
    title: string;
    skills: string;
    description: string;
    image: string;
    responsibilities: JSX.Element;
    tags: {
      tag: string;
    }[];
  }[];
}

function CareersAtDMTIMS({ jobs }: Props) {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 flex w-full max-w-screen-2xl flex-col py-8">
          <h1 id="Visiting-Faculty" className="dmtims-title">
            Careers @DMTIMS
          </h1>
          <div className="grid grid-cols-1 gap-8 py-4 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="mx-auto flex max-w-md flex-col rounded-xl border-4 border-[#f1f1f1] bg-[#F9F9F9] py-4 px-8"
              >
                <div className="relative mt-8 mb-6 h-20 w-20 overflow-hidden rounded-full shadow-lg">
                  <Image
                    priority
                    src={job.image}
                    alt={job.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="dmtims-subtitle text-3xl text-[#3F3A6D]">
                  {job.title}
                </p>
                <div className="flex flex-row gap-2 pb-6">
                  {job.tags.map((tag, i) => (
                    <div key={i} className="flex">
                      <p className="rounded-full border border-[#EE3768] bg-[#FCDEE6] py-2 px-3 text-center text-xs font-semibold text-[#EB144E] lg:text-sm">
                        {tag.tag}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="dmtims-text pb-1 font-bold text-[#3F3A6D]">
                  Skills
                </p>
                <div className="dmtims-text max-h-36 overflow-hidden">
                  {job.skills}
                </div>
                <p className="dmtims-text pb-1 font-bold text-[#3F3A6D]">
                  Responsibilities
                </p>
                <div className="dmtims-text relative mb-2 max-h-36 flex-grow overflow-hidden">
                  {job.responsibilities}
                  <div className="absolute bottom-0 h-8 w-full bg-gradient-to-b from-transparent to-[#F9F9F9]" />
                </div>
                <CareerModal
                  title={job.title}
                  image={job.image}
                  description={job.description}
                  skills={job.skills}
                  responsibilities={job.responsibilities}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersAtDMTIMS;
