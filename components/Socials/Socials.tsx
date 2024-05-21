// import Image from "next/legacy/image";
// import cardBg from "../Banner/images/banner2.webp";
// import { useEffect, useRef, useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/outline";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import TimeAgo from "timeago-react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faPinterest,
//   faInstagram,
//   faTwitter,
//   faFacebook,
//   faBehanceSquare,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";

// library.add(
//   faPinterest,
//   faInstagram,
//   faTwitter,
//   faFacebook,
//   faBehanceSquare,
//   faLinkedinIn
// );

// const Socials = () => {
//   const el = useRef(null);
//   const q = gsap.utils.selector(el);
//   gsap.registerPlugin(ScrollTrigger);
//   useEffect(() => {
//     gsap.fromTo(
//       q("h5"),
//       {
//         y: 118,
//       },
//       {
//         y: 0,
//         ease: "power4.out",
//         duration: 1.8,
//         skewY: 0,
//         stagger: {
//           amount: 1.8,
//         },
//         scrollTrigger: {
//           trigger: q("h5"),
//         },
//       }
//     );

//     gsap.fromTo(
//       q(".social-card"),
//       {
//         y: 400,
//       },
//       {
//         y: 0,
//         ease: "power4.out",
//         delay: 0.5,
//         duration: 1.2,
//         stagger: {
//           amount: 0.5,
//         },
//         scrollTrigger: {
//           trigger: q(".social-card"),
//         },
//       }
//     );
//   }, []);

//   const [open, setOpen] = useState(false);

//   const socials = [
//     {
//       id: 40,
//       link: "https://www.instagram.com/p/CsWIUlXNorD/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108620283390206042/Pehchaan_2023.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-05-17T14:48:00.000Z",
//       text: `A Spectacle of Talent and Diversity: Unleashing the Creative Brilliance were the students of DMTIMS at our Cultural Extravaganza: Pehchaan 2023!❤`,
//     },
//     {
//       id: 39,
//       link: "https://www.instagram.com/p/CsJPpgihYkM/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108619919295258684/IV_presentation_Srilanka.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-05-13T14:48:00.000Z",
//       text: `This year PGDM Students embarked on their International Immersion Program to Sri Lanka.`,
//     },
//     {
//       id: 38,
//       link: "https://www.instagram.com/p/CsBiVbOt5U3/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108619548804005908/Farewelll.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-05-09T14:48:00.000Z",
//       text: `DMTIMS bids farewell to the very first batch and a special one this year.❤`,
//     },
//     {
//       id: 35,
//       link: "https://www.instagram.com/p/Cr-5HgLt0Sb/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108618239421984850/NBA_Accreditation.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-05-08T14:48:00.000Z",
//       text: `A session on the Nuances of NBA Accreditation was held at DMTIMS and it provided to be an insightful one for the faculties.`,
//     },
//     {
//       id: 37,
//       link: "https://www.instagram.com/p/Cr48CspBHMw/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108619241130831892/Faculty_Devpt_Program.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-05-06T14:48:00.000Z",
//       text: `DMTIMS in association with Shri Shashwat Foundation, a renowned nonprofit organization conducted a session on 'Prayan to the Higher Dimensions of Life as a part of our Faculty Development Program.`,
//     },
//     {
//       id: 36,
//       link: "https://www.instagram.com/p/Cr2ppEPh7JB/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108618721070690314/Dmtims_at_Nagaland.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-05-05T14:48:00.000Z",
//       text: `The admissions team of DMTIMS reaches Nagaland in search of bright minds who can with the right opportunity and training become future leaders of the country.`,
//     },
//     {
//       id: 34,
//       link: "https://www.instagram.com/p/CrxfgPMNIJy/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108617840937934929/Shri_Shashwat_Foundation.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-05-03T14:48:00.000Z",
//       text: `Shri Shashwat Foundation, a renowned nonprofit organization is conducting a session on 'Prayan to the Higher Dimensions of Life'`,
//     },
//     {
//       id: 33,
//       link: "https://www.instagram.com/p/Crk9sEqhK_z/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108617466990567424/Top_Emerging_Institutes.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-04-28T14:48:00.000Z",
//       text: `And we've done it again!

//       DMTIMS's constant effort in proving to be better and proving quality education to the management aspirants has put us on the map again, this time a rank higher.`,
//     },
//     {
//       id: 32,
//       link: "https://www.instagram.com/p/CrdYQKShj4f/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108617036650790982/Best_Management_College_-_CEGR.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-04-25T14:48:00.000Z",
//       text: `Super Proud Moment!

//       DMTIMS bags the 2023 Award for Best Management College in Maharashtra for Industry Interface by CEGR Jury Committee.`,
//     },
//     {
//       id: 31,
//       link: "https://www.instagram.com/p/CrYObWENlFq/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108616638741356544/Booked_For_Life.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-04-23T14:48:00.000Z",
//       text: `On this World Book Day, here's something for all book enthusiasts.`,
//     },
//     {
//       id: 30,
//       link: "https://www.instagram.com/p/CrQD0MUhZGj/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108616184489836624/Pehchaan_Fest.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-04-20T14:48:00.000Z",
//       text: `DMTIMS is back with yet another fun, and exciting event!

//       This time our students are going to put their best foot forward and showcase their talent and creativity on the stage.❤`,
//     },
//     {
//       id: 29,
//       link: "https://www.instagram.com/p/CrBbx8nt67i/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108615503938859069/CSR_Post.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-04-14T14:48:00.000Z",
//       text: `To cater to DMTIMS's core value of Social Sensitivity, students of the PGDM course undertook a Social Relevance Project, collaborating with multiple NGOs.`,
//     },
//     {
//       id: 28,
//       link: "https://www.instagram.com/p/CqvFBCHhpR_/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108615221259542569/Past_Present_Future.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-04-07T14:48:00.000Z",
//       text: `Students of DMTIMS engaged in a journey of reflection on the Past, Present and Future Evolution`,
//     },
//     {
//       id: 27,
//       link: "https://www.instagram.com/p/CqkxWySBlLG/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108614563341013063/News_Bulletin.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-04-03T14:48:00.000Z",
//       text: `News Bulletin put up by our students is an activity that requires them to perform and enact popular news on different topics like Entertainment, Nature, Sports, and Crime of Domestic, National and International categories.`,
//     },
//     {
//       id: 26,
//       link: "https://www.instagram.com/p/CqVXk_DBu2J/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108614177662193684/Ektaara_National_Research_Conference.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-03-28T14:48:00.000Z",
//       text: `Our National Research Conference, Ektaara proved to be a successful one with excellent paper presentations involving thorough research and observations.`,
//     },
//     {
//       id: 25,
//       link: "https://www.instagram.com/p/CqMr-UyhHxq/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108613638211764259/Ektaara_3.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-03-25T14:48:00.000Z",
//       text: `DMTIMS and IIBM have joined hands in bringing together a National Research Conference, 'Ektara' today, on the 25th of March 2023.`,
//     },
//     {
//       id: 24,
//       link: "https://www.instagram.com/p/CqLDG0PNy7R/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108613164704223302/Ektaara_2.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-03-24T14:48:00.000Z",
//       text: `DMTIMS and IIBM are proud to announce a National Research Conference on the theme, "Business Strategies and Growth Opportunities in the New Normal" with renowned chief guests in attendance.`,
//     },
//     {
//       id: 23,
//       link: "https://www.instagram.com/p/CqKlBdQBAiC/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108612507456770128/Ektaara_1.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-03-24T14:48:00.000Z",
//       text: `DMTIMS and IIBM have joined hands in bringing together a National Research Conference, 'Ektara' on the 25th of March 2023.`,
//     },
//     {
//       id: 22,
//       link: "https://www.instagram.com/p/Cp-FmjeBeDv/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108612073157558282/Sandeep_Sharma_Post.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-03-19T14:48:00.000Z",
//       text: `Super excited to announce our next celebrity guest for the Galaxia ifest! @sundeep.sharma we can't wait to welcome you and look forward to a successful event.🙌`,
//     },
//     {
//       id: 21,
//       link: "https://www.instagram.com/p/Cp9bMzLt0wF/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108610942067015680/Shiv_Thakare_Posy_1.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-03-19T14:48:00.000Z",
//       text: `Super excited to announce our first celebrity guest for the Galaxia ifest! @shivthakare9 we can't wait to welcome you and look forward to a successful event.🙌`,
//     },
//     {
//       id: 20,
//       link: "https://www.instagram.com/p/Cp9vNrQhXLk/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1108611536446042193/Galaxia_Fest_Schedule.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-03-19T14:48:00.000Z",
//       text: `We're sure you're as excited as we are, or maybe even more!🔥 Get ready to enjoy 3 days of ultimate fun.`,
//     },
//     {
//       id: 12,
//       link: "https://www.instagram.com/p/CpxXa2Tt6T-/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1085861995208785991/DMTIMS_Hostel.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-03-15T14:48:00.000Z",
//       text: `When asked to describe Hostel Life at DMTIMS all they had to say is it's Home away from Home!❤ 
//       Here's a glimpse of one of the most memorable nights at DMTIMS!`,
//     },
//     {
//       id: 11,
//       link: "https://www.instagram.com/p/CpuyGZIPGXl/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1085862139320872970/Decoding_Budget.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-03-14T14:48:00.000Z",
//       text: "Honoured to have experienced Mr Tanuj Poddar's expertise through the insights he had to provide regarding the Union Budget of 2023.",
//     },
//     {
//       id: 13,
//       link: "https://www.instagram.com/p/Cpjun5xt0ou/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1085862281008648272/DMTIMS_Holi_6.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-03-09T14:48:00.000Z",
//       text: `The pictures are a testament to the fun that was had at our Holi Celebrations!❤ Colours, laughter, friendships and much more, this Holi is going to be etched in our hearts forever.🥰`,
//     },
//     {
//       id: 10,
//       link: "https://www.instagram.com/p/CpeRR-UIXkB/",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1085862429558317086/Human_Trafficking_5.webp",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2023-03-07T14:48:00.000Z",
//       text: "An initiative to address an important issue on account of Women's Day proved to be very insightful with Mr Anson Thomas presenting to the students about Human Trafficking, a heinous crime that needs to be addressed and prevented.",
//     },
//     {
//       id: 0,
//       link: "https://www.instagram.com/p/CS6TtuGHJaA/",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929411086925561936/unknown.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: "From a thought of ‘giving up on life’ to ‘giving up a good fat dollar salary’ for a ‘start-up in India’ amidst the ‘financial crisis’, find out howbecame the CEO & MD of Edelweiss. Swipe to discover Radhika’s entrepreneurial journey ;)",
//     },
//     {
//       id: 1,
//       link: "https://www.instagram.com/p/CTMtzjUMz7y/",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929411338684485714/unknown.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: "Put an End to the Never-Ending Question: PGDM or MBA? Your answer is just a few swipes away! Admissions Open! We Offer 2 Year full-time PGDM program Why Us? Learning made Simple & Fun! Industry Focused International Curriculum Pedagogy: a method to realize your potential Real-Life Application Based Learning 3 Months Industry Internship",
//     },
//     {
//       id: 2,
//       link: "https://www.instagram.com/tv/CS_2JMYHmq-/",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929412484912263238/unknown.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: "An opportunity to get placed with Top Blue Chip Companies! APPLY for a PGDM Program at DMTIMS NOW! Admissions Open till 13th September, 2021",
//     },
//     {
//       id: 3,
//       link: "https://www.instagram.com/tv/CVDdbGWgRGy/",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929413178847285278/unknown.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: "DMTIMS gives tribute to the most loved Teacher & former President, Late Dr. A P J Abdul Kalam on World Student’s Day!",
//     },
//     {
//       id: 4,
//       link: "https://www.instagram.com/p/CXTdnifspNf/",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929413382484934666/unknown.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: "The Art of War by Sun Tzu, although an old book, can teach you plenty of noteworthy lessons that you can apply in the business world. Here are some financial lessons that will help you invest and spend wisely.",
//     },
//     {
//       id: 5,
//       link: "https://www.instagram.com/p/CXbPbUBM5a_/",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929413514454499358/unknown.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#E1306C]",
//       icon: faInstagram,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: "Design Thinking is the perfect method of putting together the ability to innovate, empathize, ideate and create! Start Practicing Design Thinking.",
//     },
//     {
//       id: 6,
//       link: "https://www.linkedin.com/posts/dmtimsofficial_dmtims-pgdm-navimumbai-activity-6884487190840135680-zF-J",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929414186205851698/1641389652525.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#0077b5]",
//       icon: faLinkedinIn,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: "Always at the forefront of giving the students more exposure, DMTIMS organizes International Industry Visits, provides the opportunity for an International...",
//     },
//     {
//       id: 7,
//       link: "https://www.linkedin.com/posts/dmtimsofficial_dmtims-pgdm-navimumbai-activity-6885222892032811008-L-4T",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929414389457637416/1641565056503.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#0077b5]",
//       icon: faLinkedinIn,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: `Found this interesting? Well, we have a lot more in store for you and it's just the reflection or the pedagogy we adopt at DMTIMS!`,
//     },
//     {
//       id: 8,
//       link: "https://www.linkedin.com/posts/dmtimsofficial_changemanagement-organizationchange-organizationdevelopment-activity-6881218926848557056-4moT",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929414553102585876/1640610436786.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#0077b5]",
//       icon: faLinkedinIn,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: "With the ever-changing business environment, adapting to the changes and moving forward together has become more significant, That’s where change management...",
//     },
//     {
//       id: 9,
//       link: "https://www.linkedin.com/posts/dmtimsofficial_amul-amulindia-whiterevolution-activity-6869982976424448000-Ml1P",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929415244734943252/1637931578001.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#0077b5]",
//       icon: faLinkedinIn,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: `Happy Birthday to the Architect of White Revolution, Dr. Verghese Kurien. DMTIMS salutes and celebrates his contribution to the country's dairy industry...`,
//     },
//     {
//       id: 101,
//       link: "https://www.linkedin.com/posts/dmtimsofficial_spotifywrapped-activity-6872211384873185280-BW7f",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929415349835821127/1638462872318.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#0077b5]",
//       icon: faLinkedinIn,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: "Here are some values that DMTIMS strongly resonates with! This is who we are and what we stand by #spotifywrapped...",
//     },
//     {
//       id: 111,
//       link: "https://www.linkedin.com/posts/dmtimsofficial_dmtims-pgdm-navimumbai-activity-6867457288999981056-o0nJ",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929415565318164501/1637329407440.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#0077b5]",
//       icon: faLinkedinIn,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: "Looking for an opportunity to learn? Wish to pursue a career in management? Have the desire to work for the best? Look no more! DMTIMS offers you a complete...",
//     },
//     {
//       id: 121,
//       link: "https://www.linkedin.com/posts/dmtimsofficial_happydiwali-diwalivibes-diwali-activity-6862007792937644032-WpbV",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/929415719211372594/1636030144527.png",
//       author: "dmtimsofficial",
//       iconColor: "text-[#0077b5]",
//       icon: faLinkedinIn,
//       timestamp: "2021-10-05T14:48:00.000Z",
//       text: "Wishing everyone a very Happy Diwali! May you continue to let education lighten up your dreams and aspirations! Tell us in the comments, which sweet ...",
//     },
//   ];

//   useEffect(() => {
//     setTimeout(function () {
//       ScrollTrigger.refresh();
//     }, 500);
//   }, [open]);

//   const truncate = (text: string) => {
//     return text?.length > 150 ? text.substr(0, 149) + "..." : text;
//   };

//   return (
//     <section ref={el} className={`relative bg-[#F2F2F2]`}>
//       <div className="px-4">
//         <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-col pt-12 pb-4 md:text-center lg:pb-8 xl:pt-16">
//           <div className="relative h-[2.45rem] overflow-hidden sm:h-[3.2rem] md:h-[3.95rem] lg:h-[4.7rem] xl:h-[6.2rem]">
//             <h5 className="font-condensed text-4xl font-bold tracking-tighter text-[#FFB800] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
//               DMTIMS Soci@l
//             </h5>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`relative overflow-hidden pb-20 ${
//           open ? "max-h-[300vh]" : "max-h-96"
//         } transform transition-all duration-500`}
//       >
//         <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-2 px-2 md:grid-cols-4 xl:grid-cols-6">
//           {socials.map((item) => (
//             <a
//               key={item.id}
//               href={item.link}
//               className="social-card my-2 mx-1 flex flex-col overflow-hidden rounded-lg bg-white shadow-lg even:mt-20 even:-mb-16"
//               target="_blank"
//             >
//               <div className="relative h-40 flex-shrink-0">
//                 <Image
//                   priority
//                   alt={"social-img" + item.id}
//                   src={item.img}
//                   layout="fill"
//                   objectFit="cover"
//                   objectPosition={"top"}
//                 />
//               </div>
//               <div className="flex flex-grow flex-col px-3 py-4">
//                 <p className="flex-grow pb-4 text-xs font-medium text-[#4F4F4F] sm:text-sm">
//                   {truncate(item.text)}
//                 </p>
//                 <div className="flex items-center">
//                   <div className="flex flex-grow flex-col">
//                     <p className="font-condensed text-xs font-semibold text-[#4F4F4F] sm:text-sm">
//                       {item.author}
//                     </p>
//                     <p className="font-condensed text-xs font-light text-[#414042] sm:text-sm">
//                       <TimeAgo datetime={item.timestamp} />
//                     </p>
//                   </div>
//                   <FontAwesomeIcon
//                     className={`${item.iconColor} mx-auto h-8 w-8`}
//                     icon={item.icon}
//                   />
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//         <div className="absolute bottom-4 left-0 right-0 z-20 mx-auto flex w-60 flex-col items-center gap-4">
//           <button
//             className={`w-12 select-none rounded-full bg-[#FFB800] p-2 lg:w-14 ${
//               open ? "cursor-default opacity-0" : "opacity-100"
//             } transition duration-300`}
//             onClick={() => setOpen(true)}
//           >
//             <ChevronDownIcon className="text-white" />
//           </button>
//           <p
//             className={`text-lg font-medium text-[#28314A] ${
//               open ? "opacity-0" : "opacity-100"
//             } transition duration-200`}
//           >
//             Discover more..
//           </p>
//         </div>
//         <div className="absolute bottom-0 z-10 h-24 w-full bg-gradient-to-b from-[rgba(255,255,255,0.01)] to-[#fff] md:h-32 lg:h-40" />
//       </div>
//     </section>
//   );
// };

// export default Socials;













/**my code */
import Image from "next/legacy/image";
import cardBg from "../Banner/images/banner2.webp";
import social40 from "../../public/newImages/social40.webp"
import social39 from "../../public/newImages/social39.webp"
import social38 from "../../public/newImages/social38.webp"
import social37 from "../../public/newImages/social37.webp"
import social36 from "../../public/newImages/social36.webp"
import social35 from "../../public/newImages/social35.webp"
import social34 from "../../public/newImages/social34.webp"
import social33 from "../../public/newImages/social33.webp"
import social32 from "../../public/newImages/social32.webp"
import social31 from "../../public/newImages/social31.webp"
import social30 from "../../public/newImages/social30.webp"
import social29 from "../../public/newImages/social29.webp"
import social28 from "../../public/newImages/social28.webp"
import social27 from "../../public/newImages/social27.webp"
import social26 from "../../public/newImages/social26.webp"
import social25 from "../../public/newImages/social25.webp"
import social24 from "../../public/newImages/social24.webp"
import social23 from "../../public/newImages/social23.webp"
import social22 from "../../public/newImages/social22.webp"
import social21 from "../../public/newImages/social21.webp"
import social20 from "../../public/newImages/social20.webp"
import social10 from "../../public/newImages/social10.webp"
import social9 from "../../public/newImages/social9.webp"
import social8 from "../../public/newImages/social8.webp"
import social7 from "../../public/newImages/social7.webp"
import social6 from "../../public/newImages/social6.webp"
import social5 from "../../public/newImages/social5.webp"
import social4 from "../../public/newImages/social4.webp"
import social3 from "../../public/newImages/social3.webp"
import social2 from "../../public/newImages/social2.webp"
import social1 from "../../public/newImages/social1.webp"
import social0 from "../../public/newImages/social0.webp"
import social11 from "../../public/newImages/social11.webp"
import social12 from "../../public/newImages/social12.webp"
import social13 from "../../public/newImages/social13.webp"
import social121 from "../../public/newImages/social121.webp"
import social111 from "../../public/newImages/social111.webp"
import social101 from "../../public/newImages/social101.webp"


import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimeAgo from "timeago-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPinterest,
  faInstagram,
  faTwitter,
  faFacebook,
  faBehanceSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPinterest,
  faInstagram,
  faTwitter,
  faFacebook,
  faBehanceSquare,
  faLinkedinIn
);

const Socials = () => {
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      q("h5"),
      {
        y: 118,
      },
      {
        y: 0,
        ease: "power4.out",
        duration: 1.8,
        skewY: 0,
        stagger: {
          amount: 1.8,
        },
        scrollTrigger: {
          trigger: q("h5"),
        },
      }
    );

    gsap.fromTo(
      q(".social-card"),
      {
        y: 400,
      },
      {
        y: 0,
        ease: "power4.out",
        delay: 0.5,
        duration: 1.2,
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: q(".social-card"),
        },
      }
    );
  }, []);

  const [open, setOpen] = useState(false);

  const socials = [
    {
      id: 40,
      link: "https://www.instagram.com/p/CsWIUlXNorD/",
      img:social40, 
       author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-05-17T14:48:00.000Z",
      text: `A Spectacle of Talent and Diversity: Unleashing the Creative Brilliance were the students of DMTIMS at our Cultural Extravaganza: Pehchaan 2023!❤`,
    },
    {
      id: 39,
      link: "https://www.instagram.com/p/CsJPpgihYkM/",
      img:social39,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-05-13T14:48:00.000Z",
      text: `This year PGDM Students embarked on their International Immersion Program to Sri Lanka.`,
    },
    {
      id: 38,
      link: "https://www.instagram.com/p/CsBiVbOt5U3/",
      img:social38,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-05-09T14:48:00.000Z",
      text: `DMTIMS bids farewell to the very first batch and a special one this year.❤`,
    },
    {
      id: 35,
      link: "https://www.instagram.com/p/Cr-5HgLt0Sb/",
      img:social35,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-05-08T14:48:00.000Z",
      text: `A session on the Nuances of NBA Accreditation was held at DMTIMS and it provided to be an insightful one for the faculties.`,
    },
    {
      id: 37,
      link: "https://www.instagram.com/p/Cr48CspBHMw/",
      img:social37,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-05-06T14:48:00.000Z",
      text: `DMTIMS in association with Shri Shashwat Foundation, a renowned nonprofit organization conducted a session on 'Prayan to the Higher Dimensions of Life as a part of our Faculty Development Program.`,
    },
    {
      id: 36,
      link: "https://www.instagram.com/p/Cr2ppEPh7JB/",
      img: social36,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-05-05T14:48:00.000Z",
      text: `The admissions team of DMTIMS reaches Nagaland in search of bright minds who can with the right opportunity and training become future leaders of the country.`,
    },
    {
      id: 34,
      link: "https://www.instagram.com/p/CrxfgPMNIJy/",
      img:social34,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-05-03T14:48:00.000Z",
      text: `Shri Shashwat Foundation, a renowned nonprofit organization is conducting a session on 'Prayan to the Higher Dimensions of Life'`,
    },
    {
      id: 33,
      link: "https://www.instagram.com/p/Crk9sEqhK_z/",
      img:social33,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-04-28T14:48:00.000Z",
      text: `And we've done it again!

      DMTIMS's constant effort in proving to be better and proving quality education to the management aspirants has put us on the map again, this time a rank higher.`,
    },
    {
      id: 32,
      link: "https://www.instagram.com/p/CrdYQKShj4f/",
      img:social32,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-04-25T14:48:00.000Z",
      text: `Super Proud Moment!

      DMTIMS bags the 2023 Award for Best Management College in Maharashtra for Industry Interface by CEGR Jury Committee.`,
    },
    {
      id: 31,
      link: "https://www.instagram.com/p/CrYObWENlFq/",
      img:social31,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-04-23T14:48:00.000Z",
      text: `On this World Book Day, here's something for all book enthusiasts.`,
    },
    {
      id: 30,
      link: "https://www.instagram.com/p/CrQD0MUhZGj/",
      img:social30,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-04-20T14:48:00.000Z",
      text: `DMTIMS is back with yet another fun, and exciting event!

      This time our students are going to put their best foot forward and showcase their talent and creativity on the stage.❤`,
    },
    {
      id: 29,
      link: "https://www.instagram.com/p/CrBbx8nt67i/",
      img:social29,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-04-14T14:48:00.000Z",
      text: `To cater to DMTIMS's core value of Social Sensitivity, students of the PGDM course undertook a Social Relevance Project, collaborating with multiple NGOs.`,
    },
    {
      id: 28,
      link: "https://www.instagram.com/p/CqvFBCHhpR_/",
      img:social28,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-04-07T14:48:00.000Z",
      text: `Students of DMTIMS engaged in a journey of reflection on the Past, Present and Future Evolution`,
    },
    {
      id: 27,
      link: "https://www.instagram.com/p/CqkxWySBlLG/",
      img:social27,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-04-03T14:48:00.000Z",
      text: `News Bulletin put up by our students is an activity that requires them to perform and enact popular news on different topics like Entertainment, Nature, Sports, and Crime of Domestic, National and International categories.`,
    },
    {
      id: 26,
      link: "https://www.instagram.com/p/CqVXk_DBu2J/",
      img:social26,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-03-28T14:48:00.000Z",
      text: `Our National Research Conference, Ektaara proved to be a successful one with excellent paper presentations involving thorough research and observations.`,
    },
    {
      id: 25,
      link: "https://www.instagram.com/p/CqMr-UyhHxq/",
      img:social25,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-03-25T14:48:00.000Z",
      text: `DMTIMS and IIBM have joined hands in bringing together a National Research Conference, 'Ektara' today, on the 25th of March 2023.`,
    },
    {
      id: 24,
      link: "https://www.instagram.com/p/CqLDG0PNy7R/",
      img:social24,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-03-24T14:48:00.000Z",
      text: `DMTIMS and IIBM are proud to announce a National Research Conference on the theme, "Business Strategies and Growth Opportunities in the New Normal" with renowned chief guests in attendance.`,
    },
    {
      id: 23,
      link: "https://www.instagram.com/p/CqKlBdQBAiC/",
      img: social23,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-03-24T14:48:00.000Z",
      text: `DMTIMS and IIBM have joined hands in bringing together a National Research Conference, 'Ektara' on the 25th of March 2023.`,
    },
    {
      id: 22,
      link: "https://www.instagram.com/p/Cp-FmjeBeDv/",
      img:social22,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-03-19T14:48:00.000Z",
      text: `Super excited to announce our next celebrity guest for the Galaxia ifest! @sundeep.sharma we can't wait to welcome you and look forward to a successful event.🙌`,
    },
    {
      id: 21,
      link: "https://www.instagram.com/p/Cp9bMzLt0wF/",
      img:social21,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-03-19T14:48:00.000Z",
      text: `Super excited to announce our first celebrity guest for the Galaxia ifest! @shivthakare9 we can't wait to welcome you and look forward to a successful event.🙌`,
    },
    {
      id: 20,
      link: "https://www.instagram.com/p/Cp9vNrQhXLk/",
      img:social20,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-03-19T14:48:00.000Z",
      text: `We're sure you're as excited as we are, or maybe even more!🔥 Get ready to enjoy 3 days of ultimate fun.`,
    },
    {
      id: 12,
      link: "https://www.instagram.com/p/CpxXa2Tt6T-/",
      img:social12,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-03-15T14:48:00.000Z",
      text: `When asked to describe Hostel Life at DMTIMS all they had to say is it's Home away from Home!❤ 
      Here's a glimpse of one of the most memorable nights at DMTIMS!`,
    },
    {
      id: 11,
      link: "https://www.instagram.com/p/CpuyGZIPGXl/",
      img:social11,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-03-14T14:48:00.000Z",
      text: "Honoured to have experienced Mr Tanuj Poddar's expertise through the insights he had to provide regarding the Union Budget of 2023.",
    },
    {
      id: 13,
      link: "https://www.instagram.com/p/Cpjun5xt0ou/",
      img:social13,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-03-09T14:48:00.000Z",
      text: `The pictures are a testament to the fun that was had at our Holi Celebrations!❤ Colours, laughter, friendships and much more, this Holi is going to be etched in our hearts forever.🥰`,
    },
    {
      id: 10,
      link: "https://www.instagram.com/p/CpeRR-UIXkB/",
      img:social10,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2023-03-07T14:48:00.000Z",
      text: "An initiative to address an important issue on account of Women's Day proved to be very insightful with Mr Anson Thomas presenting to the students about Human Trafficking, a heinous crime that needs to be addressed and prevented.",
    },
    {
      id: 0,
      link: "https://www.instagram.com/p/CS6TtuGHJaA/",
      img:social0,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: "From a thought of ‘giving up on life’ to ‘giving up a good fat dollar salary’ for a ‘start-up in India’ amidst the ‘financial crisis’, find out howbecame the CEO & MD of Edelweiss. Swipe to discover Radhika’s entrepreneurial journey ;)",
    },
    {
      id: 1,
      link: "https://www.instagram.com/p/CTMtzjUMz7y/",
      img:social1,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: "Put an End to the Never-Ending Question: PGDM or MBA? Your answer is just a few swipes away! Admissions Open! We Offer 2 Year full-time PGDM program Why Us? Learning made Simple & Fun! Industry Focused International Curriculum Pedagogy: a method to realize your potential Real-Life Application Based Learning 3 Months Industry Internship",
    },
    {
      id: 2,
      link: "https://www.instagram.com/tv/CS_2JMYHmq-/",
      img:social2,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: "An opportunity to get placed with Top Blue Chip Companies! APPLY for a PGDM Program at DMTIMS NOW! Admissions Open till 13th September, 2021",
    },
    {
      id: 3,
      link: "https://www.instagram.com/tv/CVDdbGWgRGy/",
      img:social3,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: "DMTIMS gives tribute to the most loved Teacher & former President, Late Dr. A P J Abdul Kalam on World Student’s Day!",
    },
    {
      id: 4,
      link: "https://www.instagram.com/p/CXTdnifspNf/",
      img:social4,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: "The Art of War by Sun Tzu, although an old book, can teach you plenty of noteworthy lessons that you can apply in the business world. Here are some financial lessons that will help you invest and spend wisely.",
    },
    {
      id: 5,
      link: "https://www.instagram.com/p/CXbPbUBM5a_/",
      img:social5,
      author: "dmtimsofficial",
      iconColor: "text-[#E1306C]",
      icon: faInstagram,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: "Design Thinking is the perfect method of putting together the ability to innovate, empathize, ideate and create! Start Practicing Design Thinking.",
    },
    {
      id: 6,
      link: "https://www.linkedin.com/posts/dmtimsofficial_dmtims-pgdm-navimumbai-activity-6884487190840135680-zF-J",
      img:social6,
      author: "dmtimsofficial",
      iconColor: "text-[#0077b5]",
      icon: faLinkedinIn,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: "Always at the forefront of giving the students more exposure, DMTIMS organizes International Industry Visits, provides the opportunity for an International...",
    },
    {
      id: 7,
      link: "https://www.linkedin.com/posts/dmtimsofficial_dmtims-pgdm-navimumbai-activity-6885222892032811008-L-4T",
      img:social7,
      author: "dmtimsofficial",
      iconColor: "text-[#0077b5]",
      icon: faLinkedinIn,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: `Found this interesting? Well, we have a lot more in store for you and it's just the reflection or the pedagogy we adopt at DMTIMS!`,
    },
    {
      id: 8,
      link: "https://www.linkedin.com/posts/dmtimsofficial_changemanagement-organizationchange-organizationdevelopment-activity-6881218926848557056-4moT",
      img:social8,
      author: "dmtimsofficial",
      iconColor: "text-[#0077b5]",
      icon: faLinkedinIn,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: "With the ever-changing business environment, adapting to the changes and moving forward together has become more significant, That’s where change management...",
    },
    {
      id: 9,
      link: "https://www.linkedin.com/posts/dmtimsofficial_amul-amulindia-whiterevolution-activity-6869982976424448000-Ml1P",
      img:social9,
      author: "dmtimsofficial",
      iconColor: "text-[#0077b5]",
      icon: faLinkedinIn,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: `Happy Birthday to the Architect of White Revolution, Dr. Verghese Kurien. DMTIMS salutes and celebrates his contribution to the country's dairy industry...`,
    },
    {
      id: 101,
      link: "https://www.linkedin.com/posts/dmtimsofficial_spotifywrapped-activity-6872211384873185280-BW7f",
      img:social101,
      author: "dmtimsofficial",
      iconColor: "text-[#0077b5]",
      icon: faLinkedinIn,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: "Here are some values that DMTIMS strongly resonates with! This is who we are and what we stand by #spotifywrapped...",
    },
    {
      id: 111,
      link: "https://www.linkedin.com/posts/dmtimsofficial_dmtims-pgdm-navimumbai-activity-6867457288999981056-o0nJ",
      img:social111,
      author: "dmtimsofficial",
      iconColor: "text-[#0077b5]",
      icon: faLinkedinIn,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: "Looking for an opportunity to learn? Wish to pursue a career in management? Have the desire to work for the best? Look no more! DMTIMS offers you a complete...",
    },
    {
      id: 121,
      link: "https://www.linkedin.com/posts/dmtimsofficial_happydiwali-diwalivibes-diwali-activity-6862007792937644032-WpbV",
      img:social121,
      author: "dmtimsofficial",
      iconColor: "text-[#0077b5]",
      icon: faLinkedinIn,
      timestamp: "2021-10-05T14:48:00.000Z",
      text: "Wishing everyone a very Happy Diwali! May you continue to let education lighten up your dreams and aspirations! Tell us in the comments, which sweet ...",
    },
  ];

  useEffect(() => {
    setTimeout(function () {
      ScrollTrigger.refresh();
    }, 500);
  }, [open]);

  const truncate = (text: string) => {
    return text?.length > 150 ? text.substr(0, 149) + "..." : text;
  };

  return (
    <section ref={el} className={`relative bg-[#F2F2F2]`}>
      <div className="px-4">
        <div className="z-10 mx-auto flex w-full max-w-screen-2xl flex-col pt-12 pb-4 md:text-center lg:pb-8 xl:pt-16">
          <div className="relative h-[2.45rem] overflow-hidden sm:h-[3.2rem] md:h-[3.95rem] lg:h-[4.7rem] xl:h-[6.2rem]">
            <h5 className="font-condensed text-4xl font-bold tracking-tighter text-[#FFB800] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              DMTIMS Soci@l
            </h5>
          </div>
        </div>
      </div>
      <div
        className={`relative overflow-hidden pb-20 ${
          open ? "max-h-[300vh]" : "max-h-96"
        } transform transition-all duration-500`}
      >
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-2 px-2 md:grid-cols-4 xl:grid-cols-6">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="social-card my-2 mx-1 flex flex-col overflow-hidden rounded-lg bg-white shadow-lg even:mt-20 even:-mb-16"
              target="_blank"
            >
              <div className="relative h-40 flex-shrink-0">
                <Image
                  priority
                  alt={"social-img" + item.id}
                  src={item.img}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"top"}
                />
              </div>
              <div className="flex flex-grow flex-col px-3 py-4">
                <p className="flex-grow pb-4 text-xs font-medium text-[#4F4F4F] sm:text-sm">
                  {truncate(item.text)}
                </p>
                <div className="flex items-center">
                  <div className="flex flex-grow flex-col">
                    <p className="font-condensed text-xs font-semibold text-[#4F4F4F] sm:text-sm">
                      {item.author}
                    </p>
                    <p className="font-condensed text-xs font-light text-[#414042] sm:text-sm">
                      <TimeAgo datetime={item.timestamp} />
                    </p>
                  </div>
                  <FontAwesomeIcon
                    className={`${item.iconColor} mx-auto h-8 w-8`}
                    icon={item.icon}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 z-20 mx-auto flex w-60 flex-col items-center gap-4">
          <button
            className={`w-12 select-none rounded-full bg-[#FFB800] p-2 lg:w-14 ${
              open ? "cursor-default opacity-0" : "opacity-100"
            } transition duration-300`}
            onClick={() => setOpen(true)}
          >
            <ChevronDownIcon className="text-white" />
          </button>
          <p
            className={`text-lg font-medium text-[#28314A] ${
              open ? "opacity-0" : "opacity-100"
            } transition duration-200`}
          >
            Discover more..
          </p>
        </div>
        <div className="absolute bottom-0 z-10 h-24 w-full bg-gradient-to-b from-[rgba(255,255,255,0.01)] to-[#fff] md:h-32 lg:h-40" />
      </div>
    </section>
  );
};

export default Socials;

