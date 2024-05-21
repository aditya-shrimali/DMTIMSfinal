import Image from "next/legacy/image";
import LearnMore from "../LearnMore/LearnMore";
import AdmissionProcessBg from "./images/AdmissionProcessBg.webp";

const AdmissionProcess = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-6">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col">
              <h2 className="dmtims-title">Admission Process</h2>
              <p className="dmtims-text">
                DMTIMS follows a non-discriminatory policy to admit all such
                students, who have completed their bachelor’s degree in any
                discipline from an accredited institution in India or its
                equivalent.
              </p>
              <p className="dmtims-text font-bold">
                <em>Admissions now open for batch 2024-2025.</em>
              </p>
              <p className="dmtims-text font-semibold">
                <u>Find more information on</u>
              </p>
              <ul className="flex list-disc flex-col pl-8 pb-8">
                <li className="dmtims-text pb-0 font-semibold">
                  Eligibility Criteria
                </li>
                <li className="dmtims-text pb-0 font-semibold">Fee Details</li>
                <li className="dmtims-text pb-0 font-semibold">
                  Selection Process
                </li>
                <li className="dmtims-text pb-0 font-semibold">Notes</li>
              </ul>
              <LearnMore link="/admission" />
            </div>
            <div className="flex flex-col">
              <div className="relative mt-auto h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[450px]">
                <Image
                  priority
                  src={AdmissionProcessBg}
                  alt="Admission-ProcessBg"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
