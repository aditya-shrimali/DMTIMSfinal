import { ArrowRightIcon } from "@heroicons/react/outline";

const DMTIMSErgonomics = () => {
  const ergonomics = [
    { id: 0, text: "Large, adequately furnished and safe campus." },
    { id: 1, text: "Digital boards in all class rooms." },
    {
      id: 2,
      text: `Cushioned and comfortable chairs and seating in all class rooms and halls.`,
    },
    {
      id: 3,
      text: "Pleasant and airy library facilities with latest books and national and international business journals exceeding 7000+ volumes.",
    },
    {
      id: 4,
      text: "High speed band width enabled air condition computer lab.",
    },
    {
      id: 5,
      text: "Large, well-lighted and user-friendly playground cum lawn facility for basketball, football, badminton etc.",
    },
    {
      id: 6,
      text: "Air conditioned seminar halls equipped with latest audio-visual aids.",
    },
    {
      id: 7,
      text: "Large, Palm trees shaded and pleasant open- air theatre for numerous co-curricular student activities and programs.",
    },
    { id: 8, text: "Wi-fi and CCTV enabled campus, hostel and cafeteria." },
    { id: 9, text: "Professional and trained security services." },
    {
      id: 10,
      text: "Fully equipped medical rooms with comfortable linen and bedding.",
    },
    {
      id: 11,
      text: "Student friendly separate common rooms for boys and girls equipped with indoor games.",
    },
    {
      id: 12,
      text: "Popular and well lighted cafeteria service for fresh and healthy food.",
    },
    {
      id: 13,
      text: "Separate girls and boys in campus Wi-Fi equipped hostel with furnished rooms inclusive of bed, mattress, cupboards, curtains. study table, washing machine and other essential items.",
    },
    {
      id: 14,
      text: "24*7 Provision of clean drinking water in both campus and hostel.",
    },
    {
      id: 15,
      text: "Professional security guards, hot and cold running water and biometric entry and attendance facility for hostel and cafeteria use.",
    },
    {
      id: 16,
      text: "Sanitized campus following all Covid protocol for campus, hostel and cafeteria facilities.",
    },
    {
      id: 17,
      text: "Professional, trained and experienced house- keeping services at campus and hostel.",
    },
    {
      id: 18,
      text: "Availability of sanitary pad vending machines to empower our female students.",
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl">
          <h2 id="DMTIMS-Ergonomics" className="dmtims-title pt-12">
            DMTIMS Ergonomics
          </h2>
        </div>
      </div>
      <div className="flex flex-col bg-[#4C477A] px-4 py-8">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {ergonomics.map(({ id, text }) => (
              <div key={id} className="flex items-center border-[#BDBDBD]">
                <ArrowRightIcon className="h-7 w-7 flex-shrink-0 transform rounded-full border-2 border-[#FFB800] p-[3px] text-[#FFB800] transition duration-300 group-hover:rotate-45" />
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

export default DMTIMSErgonomics;
