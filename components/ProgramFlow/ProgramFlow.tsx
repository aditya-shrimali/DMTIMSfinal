import FlowCard from "../FlowCard/FlowCard";
import card1 from "./images/card1.webp";
import card2 from "./images/card2.webp";
import card3 from "./images/card3.webp";
import card4 from "./images/card4.webp";
import card5 from "./images/card5.webp";
import card6 from "./images/card6.webp";
import bg1 from "./images/bg1.svg";
import bg2 from "./images/bg2.svg";
import bg3 from "./images/bg3.svg";
import bg4 from "./images/bg4.svg";
import bg5 from "./images/bg5.svg";
import bg6 from "./images/bg6.svg";
import Image from "next/legacy/image";

import teaching from "../../public/images/teaching.png";
import teaching3 from "../../public/images/teaching3.png";

const ProgramFlow = () => {
  const flowcards = [
    {
      title: "Pedagogy",
      text: "One of the competencies of DMTIMS is its teaching methodology which comprises various innovative tools and methods which help students realize their potential. Key elements across these varied approaches are a student-centered approach to learning, learning from peers in groups, experiential and application-oriented learning",
    },
    {
      title: "Case Study Method",
      text: "DMTIMS one of the most used pedagogical approaches is Case study and as a result, almost all courses have sessions structured around case studies. The case study instructor/faculty inside the classroom acts as a facilitator and lets students, learn key managerial skills such as analytical thinking, listening, and persuasion through this method. This method also helps students to learn from their peers who add to discussion through their varied experiences.",
    },
    {
      title: "Group Study Exercises",
      text: "We learn better in groups than as individuals and we at DMTIMS vouch for that. Most of our courses have a component of “Group Evaluation” such as group submission, project, exercise, quizzes, etc. This enables students to learn from one another",
    },
    {
      title: "Simulation Excersises",
      text: "One of the exciting elements of our teaching pedagogy is hands-on experiential exercises. System based simulation exercises imitate real business situations and give students first-hand experience on some of the real-world scenarios related to the course",
    },
    {
      title: "Real Life Application Based Learning",
      text: "As the saying goes” we learn from practice”, thus keeping that in mind we have another element of our pedagogy wherein students will be a part of role plays, live projects, live business quizzes like Tata Crucible, etc. Our students to go out on the field and interact with companies to understand how, the various management related concepts, they study in class, unfold in practice",
    },
    {
      title: "Guest Lectures",
      text: "Of course, this is something very critical and integral part of the DMTIMS PGDM program. The various course instructors are encouraged to invite practicing professionals from the industry to deliver sessions as part of courses and share cutting-edge industry knowledge and practice. Most courses have two sessions delivered by Industry Experts.",
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 w-full max-w-screen-2xl py-8">
          <div className="grid grid-cols-1">
            <h2
              id="Unique-Way-of-Learning"
              className="dmtims-title py-2 lg:py-6"
            >
              A Unique Way of Learning
            </h2>
            <p className="pb-4 text-lg font-semibold">
              DMTIMS's PGDM flagship programme’s multidisciplinary learning
              offers a fine blend of general management and functional
              specializations offered in Marketing.
            </p>
          </div>
          <div className="grid grid-cols-1 py-10 xl:grid-cols-2">
            <div className="mx-auto grid max-w-md grid-cols-1 sm:max-w-2xl sm:grid-cols-2 md:max-w-3xl">
              <FlowCard
                title={flowcards[0].title}
                text={flowcards[0].text}
                img={bg1}
                bgColor="bg-[#EE3768]"
              />
              <div className="relative h-96 w-full ">
                <Image
                  priority
                  className="sm:rounded-tr-full"
                  src={card1}
                  alt="card1"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <div className="relative h-96 w-full ">
                <Image
                  priority
                  className="sm:rounded-bl-full"
                  src={card2}
                  alt="card2"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <FlowCard
                title={flowcards[1].title}
                text={flowcards[1].text}
                img={bg2}
                bgColor="bg-[#4C477A]"
              />
            </div>
            <div className="mx-auto grid max-w-md grid-cols-1 sm:max-w-2xl sm:grid-cols-2 md:max-w-3xl">
              <div className="relative h-96 w-full ">
                <Image
                  priority
                  className="sm:rounded-tl-full"
                  src={card3}
                  alt="card3"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <FlowCard
                title={flowcards[2].title}
                text={flowcards[2].text}
                img={bg3}
                bgColor="bg-[#4C477A]"
              />
              <FlowCard
                title={flowcards[3].title}
                text={flowcards[3].text}
                img={bg4}
                bgColor="bg-[#FFB800]"
              />
              <div className="relative h-96 w-full ">
                <Image
                  priority
                  className="sm:rounded-br-full"
                  src={card4}
                  alt="card4"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
            </div>
            <div className="mx-auto grid max-w-md grid-cols-1 sm:max-w-2xl sm:grid-cols-2 md:max-w-3xl">
              <div className="relative h-96 w-full ">
                <Image
                  priority
                  className="sm:rounded-tl-full"
                  src={card5}
                  alt="card5"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
              <FlowCard
                title={flowcards[4].title}
                text={flowcards[4].text}
                img={bg5}
                bgColor="bg-[#EE3768]"
              />
              <FlowCard
                title={flowcards[5].title}
                text={flowcards[5].text}
                img={bg6}
                bgColor="bg-[#FFB800]"
              />
              <div className="relative h-96 w-full ">
                <Image
                  priority
                  className="sm:rounded-br-full"
                  src={card6}
                  alt="card6"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </div>
            </div>

            {/* teaching image */}
            {/* <div className="relative  h-96 w-full"> */}
            {/* <div className="relative min-h-96 min-w-96 md:h-auto md:w-full"> */}
            {/* <div className=" max-w-md  sm:max-w-2xl  sm:grid-cols-2 md:max-w-3xl"> */}
            <div className="max-w-lg  sm:max-w-2xl  sm:grid-cols-2 md:max-w-3xl">
              <div className="px-0 md:px-8 xl:px-28">
                <Image
                  priority
                  //  className=""
                  src={teaching}
                  alt="teaching"
                />
                <Image
                  priority
                  // className="sm:rounded-br-full"
                  src={teaching3}
                  alt="teaching"
                />
              </div>
            </div>

            {/* <div className="mx-auto flex max-w-md items-center sm:max-w-2xl md:max-w-3xl">
              <div className="flex flex-col px-16 pt-10">
                <h4 className="dmtims-title py-2 lg:py-6">
                  A Unique Way of Learning
                </h4>
                <p className="pb-4 text-lg font-semibold">
                  DMTIMS's PGDM flagship programmes multidisciplinary learning
                  offers a fine blend of general management and functional
                  specializations offered in Marketing.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFlow;
