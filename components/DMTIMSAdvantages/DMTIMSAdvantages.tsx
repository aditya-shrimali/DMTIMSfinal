import { ArrowRightIcon } from "@heroicons/react/outline";

const DMTIMSAdvantages = () => {
  const advantages = [
    {
      id: 0,
      text: "Dual Specialization offered in a choice of five subjects in the final year to augment student employability quotient.",
    },
    { id: 1, text: "Proposed National and International Student Exchange." },
    {
      id: 2,
      text: `The 'One Time, One Student' approach aims at individual focus and attention on each and every student growth and development.`,
    },
    {
      id: 3,
      text: "Remedial Classes & English Fluency Classes for students having scope to improve further.",
    },
    {
      id: 4,
      text: "Counselling sessions to guide students on appropriate specialization.",
    },
    {
      id: 5,
      text: "Tutorials with in-depth corporate knowledge to prepared students for industry.",
    },
    {
      id: 6,
      text: "Social Relevance Project to develop socially sensitive management leaders.",
    },
    { id: 7, text: "Structured Corporate Grooming Session 1n each trimester." },
    {
      id: 8,
      text: "Board of Studies from the most reputed in the industry and academia.",
    },
    {
      id: 9,
      // text: "Paid 3 months Summer Internship Projects in reputed companies in India and abroad.",
      text: "Paid 3 months Summer Internship Projects in reputed companies in India.",
    },
    { id: 10, text: "Paperless culture by use of mandatory laptop." },
    { id: 11, text: "Regular Soft Skills and Life Skill Modules." },
    {
      id: 12,
      text: "Mock GDs. Pls. Extempore and Employability Workshops and Training in Personality Development and Pre-Placement Grooming.",
    },
    { id: 13, text: "Best Business Practices Sessions from Corporate Houses." },
    {
      id: 14,
      text: "Rigorous Student involvement in strategic management decisions through Student Committees.",
    },
    { id: 15, text: "Methodical Personality Development Training." },
    { id: 16, text: "International and National research Conferences." },
    { id: 17, text: "Finest academic delivery by Indian and Foreign Faculty." },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl">
          <h2 id="DMTIMS-Advantages" className="dmtims-title pt-12">
            DMTIMS Advantages
          </h2>
        </div>
      </div>
      <div className="flex flex-col bg-[#4C477A] px-4 py-8">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {advantages.map(({ id, text }) => (
              <div key={id} className="flex items-center border-[#BDBDBD]">
                <ArrowRightIcon className="h-7 w-7 flex-shrink-0 transform rounded-full border-2 border-[#FFB800] p-[2px] text-[#FFB800] transition duration-300 group-hover:rotate-45" />
                <p className="flex-grow px-4 font-medium text-white lg:text-lg">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DMTIMSAdvantages;
