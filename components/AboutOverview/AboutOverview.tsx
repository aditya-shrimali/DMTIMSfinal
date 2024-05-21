// import Link from "next/link";
// import { ArrowRightIcon } from "@heroicons/react/outline";

// const AboutOverview = () => {
//   const AboutLinks = [
//     { id: 1, link: "#DMTIMS-Rankings", text: "DMTIMS Rankings" },
//     { id: 2, link: "#Core-Values", text: "Core Values" },
//     { id: 3, link: "#VES-Trust", text: "VES Trust’s Legacy" },
//     {
//       id: 4,
//       link: "#Message-from-Management",
//       text: "Message from Management",
//     },
//     { id: 5, link: "#Heads", text: "From the desk of" },
//     { id: 6, link: "#Board-of-Trustees", text: "Board of Trustees" },
//     { id: 7, link: "#Board-of-Studies", text: "Board of Studies" },
//     { id: 8, link: "#Invitees", text: "Invitees" },
//     { id: 9, link: "#Advisory-Council", text: "Advisory Council" },
//     { id: 10, link: "#Infrastructure", text: "Infrastructure" },
//   ];

//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto my-4 w-full max-w-screen-2xl border-b-2 border-[#BDBDBD] pt-8">
//           <div className="flex flex-col-reverse py-4 lg:flex-row">
//             <div className="flex flex-col py-8">
//               <h1 id="About-DMTIMS" className="dmtims-subtitle">
//                 About DMTIMS
//               </h1>
//               <p className="dmtims-text">
//                 DMTIMS, through its 2-year full-time AICTE-approved PGDM
//                 program, aims to impart education, combined with the creation,
//                 dissemination, and application of knowledge, met in an
//                 integrated form, to create a synergetic impact. The Institute
//                 fosters and nurtures leaders capable of making a positive
//                 difference in the management of corporate sectors. We inculcate
//                 human values and professional ethics in our students, which help
//                 them make decisions and conceive and create paths that are good
//                 and long-lasting not only for them, but also for the society,
//                 the nation, and the world as a whole. In today's times, a mere
//                 management certificate cannot suffice the niche needs of
//                 specific skill sets in the industry today. Especially since the
//                 workplace evolved post the pandemic and with science,
//                 technology, and management practices changing at an
//                 ever-increasing rate, a gap is formed between the foundation
//                 provided by an academic education and the technical and
//                 management competencies required in today's technical and
//                 business environment. Thus, we here at DMTIMS, decided to give
//                 that extra edge to our student leaders through professional
//                 certification programs to bridge the education gap, arising out
//                 of this change. Thus, DMTIMS has partnered with established
//                 companies and colleges like IMS-Pro School, Kenbuddy, TeamLease,
//                 Slikun Institute of Management & Technology, Technolite, MTC
//                 Global, Stock Street, St.Thomas College, Bhilai, Christian
//                 College of Engineering & Technology (CCET), Bhilai, MGM College,
//                 Dimapur, VocSkills etc. to provide that ‘in trend’
//                 industry-specific skill sets, to its budding management leaders.
//               </p>
//               <p className="dmtims-text">
//                 Global managers today are considered as bereft of managerial
//                 skills, without the core element of being socially sensitive. In
//                 order to cater to one of our core values of social sensitivity
//                 and environment sensitivity, our PGDM students, undertake social
//                 relevance project which helps them to sensitize towards the
//                 socially underprivileged and lesser people around them. Their
//                 skills to empathize, be compassionate, to care for and to
//                 nurture are honed thoroughly through these projects. Hence,
//                 DMTIMS partners with well-known NGOs working for the
//                 underprivileged like orphans, senior citizens, cancer patients,
//                 rural villages etc. like Shashwat Foundation, Thane, Swami
//                 Brahmanand Pratishthan, Belapur, Sammaan, Dr. Mar Theophilus
//                 Ashraya Bhavan, Nerul, Rays of Hope, Kharghar, Prem Daan,
//                 Kharghar etc. to consciously sensitize its young management
//                 minds to be socially and environmentally sensitive leaders, too.
//                 Within a short span of its existence, DMTIMS has been
//                 consistently ranked for its academic excellence by many reputed
//                 organizations. DMTIMS was ranked 2nd in ‘Top Emerging B-schools
//                 in Mumbai’ by the 2023 Times of India national rankings and 3rd
//                 in ‘Top Emerging B-Schools in Mumbai’ by the 2022 Times of India
//                 national rankings. DMTIMS was also recently awarded the ‘2023
//                 Best Management College in Maharashtra for Industry Interface’
//                 by the Centre for Education Growth & Research (CEGR). Moving
//                 towards a progressive B-school environment, DMTIMS has also
//                 partnered with professional bodies like the Association of
//                 Indian Management Schools (AIMS), as a Lifetime Institutional
//                 Member and is also a member of ACBSP. (Accreditation Council for
//                 Business Schools and Programs).
//               </p>
//             </div>
//             <div className="flex-shrink-0 px-2 lg:w-1/2">
//               <div className="mx-auto flex max-w-sm flex-col overflow-hidden rounded-lg bg-[#F2F2F2] lg:ml-auto lg:mr-0">
//                 <div className="h-2 bg-[#EE3768]" />
//                 <div className="flex flex-col py-2">
//                   <h1 className="px-6 pt-2 text-3xl font-bold text-[#4C477A] lg:pb-2 lg:pt-4 lg:text-4xl">
//                     About Us
//                   </h1>
//                   {AboutLinks &&
//                     AboutLinks.map((item) => (
//                       <Link legacyBehavior key={item.id} href={item.link}>
//                         <a className="group mx-4 border-b-2 py-1 last:border-none">
//                           <div className="flex transform items-end rounded-md border-[#BDBDBD] px-2 py-1 transition duration-300 hover:bg-[rgba(189,189,189,0.35)]">
//                             <p className="flex-grow font-medium text-[#28314A] lg:text-lg">
//                               {item.text}
//                             </p>
//                             <ArrowRightIcon className="h-8 w-8 transform rounded-full border-2 border-[#FFB800] p-1 text-[#4C477A] transition duration-300 group-hover:rotate-45" />
//                           </div>
//                         </a>
//                       </Link>
//                     ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutOverview;

/**new code for writeup  */
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";
import classroom from "../../public/newImages/classroom.webp";
import Image from "next/image";

const AboutOverview = () => {
  const AboutLinks = [
    { id: 1, link: "#DMTIMS-Rankings", text: "DMTIMS Rankings" },
    { id: 2, link: "#Core-Values", text: "Core Values" },
    { id: 3, link: "#VES-Trust", text: "VES Trust’s Legacy" },
    {
      id: 4,
      link: "#Message-from-Management",
      text: "Message from Management",
    },
    { id: 5, link: "#Heads", text: "From the desk of" },
    { id: 6, link: "#Board-of-Trustees", text: "Board of Trustees" },
    { id: 7, link: "#Board-of-Studies", text: "Board of Studies" },
    { id: 8, link: "#Invitees", text: "Invitees" },
    { id: 9, link: "#Advisory-Council", text: "Advisory Council" },
    { id: 10, link: "#Infrastructure", text: "Infrastructure" },
  ];

  return (
    <>
      <section>
        <div className="flex flex-col px-4 py-8">
          <h1 id="infra" className="dmtims-title">
            Campus Infrastructure{" "}
          </h1>
          <p className="dmtims-text text-base sm:text-xl">
            At DMTIMS we blend innovation with outstanding educational
            standards. Our campus infrastructure is meticulously planned to
            ignite creativity, foster collaboration, and nurture future business
            leaders. With cutting-edge facilities, spaces that encourage
            teamwork, and a range of support services, our campus reflects the
            essence of business education.
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-8">
          <h1 id="tour" className="dmtims-title">
            Campus Virtual Tour{" "}
          </h1>
          <iframe
            className="video mx-auto mt-8  h-auto w-full max-w-screen-xl px-4 md:h-[640px]"
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src={`https://youtube.com/embed/kT9qqagoXN4?autoplay=0`}
          ></iframe>
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-4">
          <h1 id="facility" className="dmtims-title">
            Campus Facilities{" "}
          </h1>
          <ul className="dmtims-text flex flex-col gap-2 text-base sm:text-xl">
            <li>Large, adequately furnished and safe campus.</li>
            <li>Digital boards in all class rooms.</li>
            <li>
              Cushioned and comfortable chairs and seating in all class rooms
              and halls.
            </li>
            <li>
              Pleasant and airy library facilities with latest books and
              national and international business Journals exceeding 7000+
              volumes.
            </li>
            <li>
              High speed band with enabled air condition computer lab. " Large,
              well-lighted and user-friendly playground cum lawn facility for
              basketball, football, badminton etc.
            </li>
            <li>
              Air conditioned seminar halls equipped with latest audio- visual
              aids.
            </li>
            <li>
              Large, Palm trees shaded and pleasant open- air theatre for
              numerous co-curricular student activities and programs.
            </li>
            <li>Wi-fi and CCTV enabled campus, hostel and cafeteria.</li>
            <li>Professional and trained security services.</li>
            <li>
              Fully equipped medical rooms with comfortable linen and bedding.
            </li>
            <li>
              Student friendly separate common rooms for boys and girls equipped
              with indoor games.
            </li>
            <li>
              Popular and well lighted cafeteria service for fresh and healthy
              food.
            </li>
            <li>
              Separate girls and boys in campus Wi-Fi equipped hostel with
              furnished rooms inclusive of bed, mattress, cupboards, curtains,
              study table, washing machine and other essential items.
            </li>
            <li>
              24*7 Provision of clean drinking water in both campus and hostel.
            </li>
            <li>
              Professional security guards, hot and cold running water and
              biometric entry and attendance facility for hostel and cafeteria
              use.
            </li>
            <li>
              Sanitized campus following all Covid protocol for campus, hostel
              and cafeteria facilities.
            </li>
            <li>
              Professional, trained and experienced house- keeping services at
              campus and hostel.
            </li>
            <li>
              Availability of sanitary pad vending machines to empower our
              female students.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-4">
          <h1 id="About-DMTIMS" className="dmtims-title">
            Classroom
          </h1>
          <p className="dmtims-text text-base sm:text-xl">
            At DMTIMS we blend innovation with outstanding educational
            standards. Our campus infrastructure is meticulously planned to
            ignite creativity, foster collaboration, and nurture future business
            leaders. With cutting-edge facilities, spaces that encourage
            teamwork, and a range of support services, our campus reflects the
            essence of business education.
          </p>
          <Image src={classroom} alt="classroom" height={700} width={700} />
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-4">
          <h1 id="About-DMTIMS" className="dmtims-title">
            Library{" "}
          </h1>
          <p className="dmtims-text text-base sm:text-xl">
            At DMTIMS we blend innovation with outstanding educational
            standards. Our campus infrastructure is meticulously planned to
            ignite creativity, foster collaboration, and nurture future business
            leaders. With cutting-edge facilities, spaces that encourage
            teamwork, and a range of support services, our campus reflects the
            essence of business education.
          </p>
          <Image src={classroom} alt="classroom" height={700} width={700} />
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-4">
          <h1 id="About-DMTIMS" className="dmtims-title">
            Common Room{" "}
          </h1>
          <p className="dmtims-text text-base sm:text-xl">
            At DMTIMS we blend innovation with outstanding educational
            standards. Our campus infrastructure is meticulously planned to
            ignite creativity, foster collaboration, and nurture future business
            leaders. With cutting-edge facilities, spaces that encourage
            teamwork, and a range of support services, our campus reflects the
            essence of business education.
          </p>
          <Image src={classroom} alt="classroom" height={700} width={700} />
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-4">
          <h1 id="About-DMTIMS" className="dmtims-title">
            Reception{" "}
          </h1>
          <p className="dmtims-text text-base sm:text-xl">
            At DMTIMS we blend innovation with outstanding educational
            standards. Our campus infrastructure is meticulously planned to
            ignite creativity, foster collaboration, and nurture future business
            leaders. With cutting-edge facilities, spaces that encourage
            teamwork, and a range of support services, our campus reflects the
            essence of business education.
          </p>
          <Image src={classroom} alt="classroom" height={700} width={700} />
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-4">
          <h1 id="About-DMTIMS" className="dmtims-title">
            Conference Room{" "}
          </h1>
          <p className="dmtims-text text-base sm:text-xl">
            At DMTIMS we blend innovation with outstanding educational
            standards. Our campus infrastructure is meticulously planned to
            ignite creativity, foster collaboration, and nurture future business
            leaders. With cutting-edge facilities, spaces that encourage
            teamwork, and a range of support services, our campus reflects the
            essence of business education.
          </p>
          <Image src={classroom} alt="classroom" height={700} width={700} />
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-4">
          <h1 id="About-DMTIMS" className="dmtims-title">
            Auditorium{" "}
          </h1>
          <p className="dmtims-text text-base sm:text-xl">
            At DMTIMS we blend innovation with outstanding educational
            standards. Our campus infrastructure is meticulously planned to
            ignite creativity, foster collaboration, and nurture future business
            leaders. With cutting-edge facilities, spaces that encourage
            teamwork, and a range of support services, our campus reflects the
            essence of business education.
          </p>
          <Image src={classroom} alt="classroom" height={700} width={700} />
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-4">
          <h1 id="About-DMTIMS" className="dmtims-title">
            Hostel{" "}
          </h1>
          <p className="dmtims-text text-base sm:text-xl">
            At DMTIMS we blend innovation with outstanding educational
            standards. Our campus infrastructure is meticulously planned to
            ignite creativity, foster collaboration, and nurture future business
            leaders. With cutting-edge facilities, spaces that encourage
            teamwork, and a range of support services, our campus reflects the
            essence of business education.
          </p>
          <Image src={classroom} alt="classroom" height={700} width={700} />
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-4">
          <h1 id="About-DMTIMS" className="dmtims-title">
            Lobby{" "}
          </h1>
          <p className="dmtims-text text-base sm:text-xl">
            At DMTIMS we blend innovation with outstanding educational
            standards. Our campus infrastructure is meticulously planned to
            ignite creativity, foster collaboration, and nurture future business
            leaders. With cutting-edge facilities, spaces that encourage
            teamwork, and a range of support services, our campus reflects the
            essence of business education.
          </p>
          <Image src={classroom} alt="classroom" height={700} width={700} />
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-4">
          <h1 id="About-DMTIMS" className="dmtims-title">
            Computer Lab{" "}
          </h1>
          <p className="dmtims-text text-base sm:text-xl">
            At DMTIMS we blend innovation with outstanding educational
            standards. Our campus infrastructure is meticulously planned to
            ignite creativity, foster collaboration, and nurture future business
            leaders. With cutting-edge facilities, spaces that encourage
            teamwork, and a range of support services, our campus reflects the
            essence of business education.
          </p>
          <Image src={classroom} alt="classroom" height={700} width={700} />
        </div>
      </section>
      <section>
        <div className="flex flex-col px-4 py-4">
          <h1 id="About-DMTIMS" className="dmtims-title">
            Canteen{" "}
          </h1>
          <p className="dmtims-text text-base sm:text-xl">
            At DMTIMS we blend innovation with outstanding educational
            standards. Our campus infrastructure is meticulously planned to
            ignite creativity, foster collaboration, and nurture future business
            leaders. With cutting-edge facilities, spaces that encourage
            teamwork, and a range of support services, our campus reflects the
            essence of business education.
          </p>
          <Image src={classroom} alt="classroom" height={700} width={700} />
        </div>
      </section>

      {/* <section className="relative bg-white">
        <div className="mx-4 flex flex-col ">
          <div className="mx-auto my-4 w-full max-w-screen-2xl border-b-2 border-[#BDBDBD] pt-8">
            <div className="flex flex-col-reverse py-4 lg:flex-row">
              <div className="flex flex-col py-8">
                <h1 id="About-DMTIMS" className="dmtims-title">
                  Introduction to St. Mary’s Group of Institutions
                </h1>
                <p className="dmtims-text text-base sm:text-xl">
                  More popularly known as the St. Mary's Group of Institutions
                  in Maharashtra and Gujarat since 1982, this institution has
                  under its umbrella, ten schools, four junior colleges, one
                  degree college and two post graduate colleges, etc., imparting
                  education to over 20,000 students each year and alumni across
                  the globe.
                </p>
                <p className="dmtims-text text-base sm:text-xl">
                  Under the tutelage of the Malankara Orthodox Syrian Church,
                  established in 52 AD, MOCCB run VES Trust's Group of
                  Educational Institutes are pioneers in KG to PG education.
                  Head quartered in Vashi, Navi Mumbai on Dr. Mar Theophilus
                  Marg, this leading and exemplary educational group, has a
                  proven track record of outstanding work in value based
                  education, aimed at holistic growth and overall development of
                  its students.
                </p>
              </div>
              <div className="flex-shrink-0 px-2 lg:w-1/2">
                <div className="mx-auto flex max-w-sm flex-col overflow-hidden rounded-lg bg-[#F2F2F2] lg:ml-auto lg:mr-0">
                  <div className="h-2 bg-[#EE3768]" />
                  <div className="flex flex-col py-2">
                    <h1 className="px-6 pt-2 text-3xl font-bold text-[#4C477A] lg:pb-2 lg:pt-4 lg:text-4xl">
                      About Us
                    </h1>
                    {AboutLinks &&
                      AboutLinks.map((item) => (
                        <Link legacyBehavior key={item.id} href={item.link}>
                          <a className="group mx-4 border-b-2 py-1 last:border-none">
                            <div className="flex transform items-end rounded-md border-[#BDBDBD] px-2 py-1 transition duration-300 hover:bg-[rgba(189,189,189,0.35)]">
                              <p className="flex-grow font-medium text-[#28314A] lg:text-lg">
                                {item.text}
                              </p>
                              <ArrowRightIcon className="h-8 w-8 transform rounded-full border-2 border-[#FFB800] p-1 text-[#4C477A] transition duration-300 group-hover:rotate-45" />
                            </div>
                          </a>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutOverview;
