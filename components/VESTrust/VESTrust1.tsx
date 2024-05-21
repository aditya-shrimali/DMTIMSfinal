import Image from "next/legacy/image";
import LearnMore from "../LearnMore/LearnMore";
import IIBM from "./images/IIBM.webp";
import DMTIMS from "./images/DMTIMS.webp";
import WCCMB from "./images/WCCMB.webp";
import LegacyTimeline from "../LegacyTimeline/LegacyTimeline";

const VESTrust1 = () => {
  const legacy = [
    {
      id: 1,
      image: DMTIMS,
      //   title: "DMTIMS",
      text: [
        " Global Recognition and Reputation: A QS 5 Star European University has a strong global reputation, which adds significant value to your dual degree. Employers worldwide recognize and appreciate degrees from well-regarded institutions, that provides graduates with a competitive edge in the job market",
        " Comprehensive Skill Development: Combining an MBA and PGDM provides a well-rounded education that covers both management principles (MBA) and specific skills related to management studies (PGDM). This comprehensive approach ensures that graduates are equipped with a diverse skill set, including leadership, strategic thinking, and specialized knowledge in areas such as marketing, finance, and operations.",
        " International Exposure: European universities, especially those with a QS 5 Star rating, typically emphasize an international perspective in their programs. This exposure allows students to develop a global mindset and cultural agility, essential qualities in today's interconnected business environment.",
        " Networking Opportunities: Having enrolled in a prestigious European university, you have unparalleled networking opportunities. Students have the chance to interact with professors, industry experts, and fellow students who come from diverse backgrounds. These connections can prove invaluable for future collaborations, business partnerships, and career opportunities.",
        " Access to Cutting-Edge Research and Faculty: QS 5 Star universities are at the forefront of academic research and innovation. Students pursuing a dual degree benefit from exposure to the latest management theories, practices, and research findings. Access to renowned faculty members can also contribute to a rich learning experience.",
        " Dual Degree Advantage: The dual degree structure allows students to specialize in both management (MBA) and a specific area of management studies (PGDM). This dual specialization makes graduates more versatile and adaptable to different industries and roles.",
        " Higher Earning Potential: Graduates with dual degrees command higher salaries and enjoy better career progression opportunities. Employers value the combination of general management knowledge and specialized skills, making dual-degree holders attractive candidates for leadership positions.",
        " Cultural and Personal Growth: Studying with a different cultural setting can foster personal growth, independence, and a broader worldview. This experience can be invaluable for future leaders who need to navigate diverse work environments and effectively lead teams with members from various backgrounds.",
      ],
      link: "",
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col ">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          {/* <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8 2xl:gap-10"> */}
            {legacy.map(({ id, image, text, link }) => (
              <div key={id} className="flex flex-col px-4">
                {text.map((item, i) => (
                  <p key={i} className="dmtims-text list-item " >
                  
                    {item}
                       
                  </p>
                ))}
                {id != 1 && <LearnMore link={link} />}
              </div>
            ))}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default VESTrust1;
