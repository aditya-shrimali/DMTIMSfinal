// import Image from "next/legacy/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useRef, useState } from "react";
// import AboutMegaMenu from "../AboutMegaMenu/AboutMegaMenu";
// import CTAHeader from "../CTAHeader/CTAHeader";
// import FacultyMegaMenu from "../FacultyMegaMenu/FacultyMegaMenu";
// import ProgramsMegaMenu from "../ProgramsMegaMenu/ProgramsMegaMenu";
// import StudenLifeMegaMenu from "../StudenLifeMegaMenu/StudenLifeMegaMenu";
// import WhatTheySayMegaMenu from "../WhatTheySayMegaMenu/WhatTheySayMegaMenu";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { PlayIcon } from "@heroicons/react/outline";
// import InfrastructureMegaMenu from "../InfrastructureMegaMenu/InfrastructureMegaMenu";
// import AICTEMegaMenu from "../AICTEMegaMenu/AICTEMegaMenu";
// import AdmissionsMegaMenu from "../AdmissionsMegaMenu/AdmissionsMegaMenu";

// const Header = () => {
//   const [nav, setNav] = useState<number | null>(null);
//   const [show, setShow] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProgramsHovered, setIsProgramsHovered] = useState(false);
//   const [isAboutHovered, setIsAboutHovered] = useState(false);
//   const [isFacultyHovered, setIsFacultyHovered] = useState(false);
//   const [isStudentLifeHovered, setIsStudentLifeHovered] = useState(false);
//   const [isWhatTheySayHovered, setIsWhatTheySayHovered] = useState(false);
//   const [isInfrastructureHovered, setIsInfrastructureHovered] = useState(false);
//   const [isAICTEHovered, setIsAICTEHovered] = useState(false);
//   const [isAdmissionsHovered, setIsAdmissionsHovered] = useState(false);

//   const video = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [toggle, setToggle] = useState(false);
//   const [fullscreen, setFullscreen] = useState(false);

//   const router = useRouter();

//   const navLinks = [
//     {
//       id: 0,
//       link: "/about-us",
//       text: "About",
//       mouseEnter: () => setIsAboutHovered(true),
//       mouseLeave: () => setIsAboutHovered(false),
//     },
//     {
//       id: 1,
//       link: "/programs",
//       text: "Dual Specialization",
//       mouseEnter: () => setIsProgramsHovered(true),
//       mouseLeave: () => setIsProgramsHovered(false),
//     },
//     {
//       id: 2,
//       link: "/faculty",
//       text: "Intellectual Capital",
//       mouseEnter: () => setIsFacultyHovered(true),
//       mouseLeave: () => setIsFacultyHovered(false),
//     },
//     {
//       id: 3,
//       link: "/corporate-interface",
//       text: "Corporate Interface",
//     },
//     {
//       id: 4,
//       link: "/complimentary-certifications",
//       text: "Complimentary Certifications",
//     },
//     {
//       id: -1,
//       link: "/about-us#Infrastructure",
//       text: "Infrastructure",
//       mouseEnter: () => setIsInfrastructureHovered(true),
//       mouseLeave: () => setIsInfrastructureHovered(false),
//     },
//     { id: 6, link: "/placements", text: "Placements" },

//     {
//       id: 7,
//       link: "/life-at-DMTIMS",
//       text: "Life@DMTIMS",
//       mouseEnter: () => setIsStudentLifeHovered(true),
//       mouseLeave: () => setIsStudentLifeHovered(false),
//     },
//     {
//       id: 8,
//       link: "/campus-hostel",
//       text: "In-Campus Hostel",
//     },
//     { id: -2, link: "/#testimonials", text: "What They Say" },
//     {
//       id: -3,
//       link: "/files/AICTE-23-24.pdf",
//       text: "AICTE EOA Letter",
//       mouseEnter: () => setIsAICTEHovered(true),
//       mouseLeave: () => setIsAICTEHovered(false),
//     },
//     {
//       id: 11,
//       link: "/admission",
//       text: "Admissions",
//       mouseEnter: () => setIsAdmissionsHovered(true),
//       mouseLeave: () => setIsAdmissionsHovered(false),
//     },
//     { id: -5, link: "/announcements", text: "Important Announcements" },
//     { id: 13, link: "/alumni", text: "Alumni" },
//     { id: 14, link: "/mandatory-disclosure", text: "Mandatory Disclosure" },
//   ];

//   const transitionNavbar = () => {
//     if (window.scrollY > 10) {
//       setShow(true);
//     } else {
//       setShow(false);
//     }
//   };

//   const play = () => {
//     setIsPlaying(true);
//     if (video.current?.currentTime) {
//       video.current.currentTime = 0;
//     }
//     video.current?.play();
//     console.log(isPlaying);
//     toggleFullScreen();
//   };

//   let toggleFullScreen = () => {
//     if (video.current?.requestFullscreen) {
//       video.current.requestFullscreen();
//     }
//   };

//   let toggleSound = () => {
//     if (!isPlaying) {
//       video.current!.play();
//       setIsPlaying(true);
//     }
//     setFullscreen(!fullscreen);
//     if (fullscreen) {
//       video.current?.pause();
//       video.current!.muted = true;
//       setTimeout(() => {
//         ScrollTrigger.refresh();
//       }, 500);
//     } else {
//       video.current!.muted = false;
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("fullscreenchange", toggleSound, false);

//     return () => {
//       document.removeEventListener("fullscreenchange", toggleSound, false);
//     };
//   }, [fullscreen]);

//   useEffect(() => {
//     if (window) {
//       console.log();
//       const i = navLinks.findIndex((e) => e.link === window.location.pathname);
//       if (i > -1) {
//         setNav(i);
//       }
//     }

//     window.addEventListener("scroll", transitionNavbar);
//     return () => window.removeEventListener("scroll", transitionNavbar);
//   }, []);

//   return (
//     <nav
//       className={`sticky top-0 z-50 w-full bg-white ${
//         (show || isOpen) && "shadow-md"
//       } transform transition duration-300`}
//     >
//       <div className="px-4 py-1">
//         <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-2 py-1">
//           <div className="flex">
//             <div className="relative my-auto flex h-14 w-40 flex-shrink-0 cursor-pointer items-center">
//               <Link legacyBehavior href="/">
//                 <a onClick={() => setNav(null)}>
//                   <div className="relative my-auto h-14 w-40 flex-shrink-0 cursor-pointer items-center">
//                     <Image
//                       alt="DMTIMS-Logo"
//                       src={
//                         "https://cdn.discordapp.com/attachments/929834261568167986/930471459674017792/logo_lockup_1.webp"
//                       }
//                       layout="fill"
//                       objectFit="contain"
//                       priority
//                     />
//                   </div>
//                 </a>
//               </Link>
//               <div className="mx-4 h-full w-[2px] flex-shrink-0 rounded-full bg-[#D8D8D8]" />
//               <a
//                 className="flex h-full flex-shrink-0 items-center"
//                 href="/files/AICTE-23-24.pdf"
//                 target={"_blank"}
//               >
//                 <Image
//                   // className="mr-3 h-full py-1  w-auto"
//                   className=" h-full py-1  w-auto"
//                   // src="https://cdn.discordapp.com/attachments/929834261568167986/968132140753629244/image_33321.webp"
//                   src="/aicte_logo.png"
//                   width={54}
//                   height={54}
//                   alt="AICTE-Logo"
//                 />
//                 <p className="hidden flex-shrink-0 text-sm font-medium italic text-[#28314A] opacity-70 sm:inline-flex xl:hidden 2xl:flex ml-2">
//                   Approved by AICTE
//                 </p>
//               </a>
//             </div>
//             <div className="ml-auto hidden items-center lg:inline-flex">
//               <button
//                 onClick={play}
//                 className="flex transform items-center rounded-full bg-[#4C477A] px-3 py-2 font-bold text-white transition duration-300 2xl:text-lg "
//               >
//                 Campus Virtual Tour
//                 <PlayIcon className="ml-1 w-6 text-[#FFB800]" />
//               </button>
//               <Link legacyBehavior href="/admission">
//                 <a className="ml-6 transform rounded-full bg-[#EE3768] px-5 py-2 font-bold text-white transition duration-300 hover:scale-105 active:scale-95 2xl:text-lg">
//                   Apply Now
//                 </a>
//               </Link>
//             </div>
//             <div className="ml-auto flex lg:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="inline-flex items-center justify-center rounded-md bg-white p-2 text-[#414042] hover:bg-[#f2f2f2]"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//           <div className="hidden flex-wrap justify-evenly gap-2 overflow-hidden rounded-2xl bg-[#F2F2F2] px-2 py-1 lg:inline-flex">
//             {navLinks.map((item, i) => (
//               <Link key={item.id} legacyBehavior href={item.link}>
//                 <a
//                   onMouseEnter={item.mouseEnter}
//                   onMouseLeave={item.mouseLeave}
//                   onClick={() => setNav(item.id)}
//                   className={`nav-link ${nav == i && "nav-link-active"}`}
//                 >
//                   {item.text}
//                 </a>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//       <ProgramsMegaMenu
//         setIsProgramsHovered={setIsProgramsHovered}
//         isProgramsHovered={isProgramsHovered}
//       />
//       <AboutMegaMenu
//         setIsAboutHovered={setIsAboutHovered}
//         isAboutHovered={isAboutHovered}
//       />
//       <FacultyMegaMenu
//         setIsFacultyHovered={setIsFacultyHovered}
//         isFacutlyHovered={isFacultyHovered}
//       />
//       <StudenLifeMegaMenu
//         setIsStudentLifeHovered={setIsStudentLifeHovered}
//         isStudentLifeHovered={isStudentLifeHovered}
//       />
//       <WhatTheySayMegaMenu
//         setIsWhatTheySayHovered={setIsWhatTheySayHovered}
//         isWhatTheySayHovered={isWhatTheySayHovered}
//       />
//       <InfrastructureMegaMenu
//         isInfrastructureHovered={isInfrastructureHovered}
//         setIsInfrastructureHovered={setIsInfrastructureHovered}
//       />
//       <AICTEMegaMenu
//         isAICTEHovered={isAICTEHovered}
//         setIsAICTEHovered={setIsAICTEHovered}
//       />
//       <AdmissionsMegaMenu
//         isAdmissionsHovered={isAdmissionsHovered}
//         setIsAdmissionsHovered={setIsAdmissionsHovered}
//       />
//       <div
//         className={`relative bg-white xl:hidden ${
//           isOpen ? "max-h-96" : "max-h-0"
//         } transform overflow-y-scroll transition-all duration-300`}
//         id="mobile-menu"
//       >
//         <div className="grid grid-cols-1 space-y-1 pt-2 pb-3 md:grid-cols-2">
//           {navLinks?.map((item) => (
//             <Link legacyBehavior key={item.id} href={item.link}>
//               <a href={item.link} className="nav-link-mobile">
//                 {item.text}
//               </a>
//             </Link>
//           ))}
//           <button
//             onClick={play}
//             className="nav-link-mobile flex w-full text-start"
//           >
//             Campus Virtual Tour
//             <PlayIcon className="ml-1 w-6 text-[#EE3768]" />
//           </button>
//         </div>
//         <button
//           className="btn-admissions ml-2 mb-4"
//           onClick={() => router.push("/admission")}
//         >
//           Apply Now
//         </button>
//       </div>
//       <video
//         className={`${
//           !fullscreen && "hidden"
//         } h-auto w-full object-cover object-center`}
//         ref={video}
//         autoPlay={false}
//         muted={true}
//         loop={true}
//         playsInline
//         controls={false}
//       >
//         <source
//           src={"/videos/Dmtims-virtual-tour-Video.mp4"}
//           type={`video/mp4`}
//         />
//       </video>
//     </nav>
//   );
// };

// export default Header;

/**my changes */
// import Image from "next/legacy/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useEffect, useRef, useState } from "react";
// import AboutMegaMenu from "../AboutMegaMenu/AboutMegaMenu";
// import CTAHeader from "../CTAHeader/CTAHeader";
// import FacultyMegaMenu from "../FacultyMegaMenu/FacultyMegaMenu";
// import ProgramsMegaMenu from "../ProgramsMegaMenu/ProgramsMegaMenu";
// import StudenLifeMegaMenu from "../StudenLifeMegaMenu/StudenLifeMegaMenu";
// import WhatTheySayMegaMenu from "../WhatTheySayMegaMenu/WhatTheySayMegaMenu";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { PlayIcon } from "@heroicons/react/outline";
// import InfrastructureMegaMenu from "../InfrastructureMegaMenu/InfrastructureMegaMenu";
// import AICTEMegaMenu from "../AICTEMegaMenu/AICTEMegaMenu";
// import AdmissionsMegaMenu from "../AdmissionsMegaMenu/AdmissionsMegaMenu";

// import { MouseEvent } from "react";

// const Header = () => {
//   const [nav, setNav] = useState<number | null>(null);
//   const [show, setShow] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProgramsHovered, setIsProgramsHovered] = useState(false);
//   const [isAboutHovered, setIsAboutHovered] = useState(false);
//   const [isFacultyHovered, setIsFacultyHovered] = useState(false);
//   const [isStudentLifeHovered, setIsStudentLifeHovered] = useState(false);
//   const [isWhatTheySayHovered, setIsWhatTheySayHovered] = useState(false);
//   const [isInfrastructureHovered, setIsInfrastructureHovered] = useState(false);
//   const [isAICTEHovered, setIsAICTEHovered] = useState(false);
//   const [isAdmissionsHovered, setIsAdmissionsHovered] = useState(false);

//   const video = useRef<HTMLVideoElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [toggle, setToggle] = useState(false);
//   const [fullscreen, setFullscreen] = useState(false);

//   const router = useRouter();

//   const navLinks = [
//     {
//       id: 0,
//       link: "/about-us",
//       text: "About Us",
//       mouseEnter: () => setIsAboutHovered(true),
//       mouseLeave: () => setIsAboutHovered(false),
//     },
//     {
//       id: 1,
//       link: "/programs",
//       text: "Dual Degree",
//       mouseEnter: () => setIsProgramsHovered(true),
//       mouseLeave: () => setIsProgramsHovered(false),
//     },
//     {
//       id: 2,
//       link: "/faculty",
//       // text: "Intellectual Capital",
//       text: "Our Intellectual Property",
//       mouseEnter: () => setIsFacultyHovered(true),
//       mouseLeave: () => setIsFacultyHovered(false),
//     },
//     {
//       id: 3,
//       link: "/corporate-interface",
//       // text: "Corporate Interface",
//       text: "Corporate Interaction Series",
//     },
//     {
//       id: 4,
//       link: "/complimentary-certifications",
//       // text: "Complimentary Certifications",
//       text: "Professional Partnerships & Associations",
//     },
//     {
//       id: -1,
//       link: "/about-us#Infrastructure",
//       // text: "Infrastructure",
//       text: "Campus Infrastructure",
//       mouseEnter: () => setIsInfrastructureHovered(true),
//       mouseLeave: () => setIsInfrastructureHovered(false),
//     },
//     { id: 6, link: "/placements", text: "Placements" },

//     {
//       id: 7,
//       link: "/life-at-DMTIMS",
//       text: "Life@DMTIMS",
//       mouseEnter: () => setIsStudentLifeHovered(true),
//       mouseLeave: () => setIsStudentLifeHovered(false),
//     },
//     {
//       id: 8,
//       link: "/campus-hostel",
//       text: "In-Campus Hostel",
//     },
//     {
//       id: -2,
//       link: "/#testimonials",
//       //  text: "What They Say"
//       text: "Testimonials",
//     },
//     {
//       id: -3,
//       link: "/files/AICTE-23-24.PDF",
//       text: "AICTE EOA Letter",
//       mouseEnter: () => setIsAICTEHovered(true),
//       mouseLeave: () => setIsAICTEHovered(false),
//     },
//     {
//       id: 11,
//       link: "/admission",
//       text: "Admissions",
//       mouseEnter: () => setIsAdmissionsHovered(true),
//       mouseLeave: () => setIsAdmissionsHovered(false),
//     },
//     {
//       id: -5,
//       link: "/announcements",
//       //  text: "Important Announcements"
//       text: "Upcoming Events",
//     },
//     { id: 13, link: "/alumni", text: "Alumni" },
//     { id: 14, link: "/mandatory-disclosure", text: "Mandatory Disclosure" },
//   ];

//   const transitionNavbar = () => {
//     if (window.scrollY > 10) {
//       setShow(true);
//     } else {
//       setShow(false);
//     }
//   };

//   const play = () => {
//     setIsPlaying(true);
//     if (video.current?.currentTime) {
//       video.current.currentTime = 0;
//     }
//     video.current?.play();
//     console.log(isPlaying);
//     toggleFullScreen();
//   };

//   let toggleFullScreen = () => {
//     if (video.current?.requestFullscreen) {
//       video.current.requestFullscreen();
//     }
//   };

//   let toggleSound = () => {
//     if (!isPlaying) {
//       video.current!.play();
//       setIsPlaying(true);
//     }
//     setFullscreen(!fullscreen);
//     if (fullscreen) {
//       video.current?.pause();
//       video.current!.muted = true;
//       setTimeout(() => {
//         ScrollTrigger.refresh();
//       }, 500);
//     } else {
//       video.current!.muted = false;
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("fullscreenchange", toggleSound, false);

//     return () => {
//       document.removeEventListener("fullscreenchange", toggleSound, false);
//     };
//   }, [fullscreen]);

//   useEffect(() => {
//     if (window) {
//       console.log();
//       const i = navLinks.findIndex((e) => e.link === window.location.pathname);
//       if (i > -1) {
//         setNav(i);
//       }
//     }

//     window.addEventListener("scroll", transitionNavbar);
//     return () => window.removeEventListener("scroll", transitionNavbar);
//   }, []);

//   // /** previous code here /admission page fully reloading which creates problem and also time consuming */
//   // const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
//   //   // Open the specified URL in a new tab
//   //   const newTab = window.open(
//   //     "https://dmtims.linways.com/v4/adm/landing-page?uid=ErTY%2B16ejan1S3YAVEPMCpKkylIlQWLY8v2g80lXE0Kond7dw%2BA4ERB5qg8TeNWY81jr33n%2F2s%2FT3rmjFT6p1w%3D%3D&smId=rkJf8MX33R",
//   //     "_blank"
//   //   );
//   //   if (newTab) {
//   //     newTab.focus(); // Optional: Focus the new tab
//   //   }

//   //   // Navigate to the /admission page within the same app
//   //   window.location.href = "/admission";

//   // };

//   /**new code to remove full reloading */
//   const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
//     // Open the specified URL in a new tab
//     const newTab = window.open(
//       "https://dmtims.linways.com/v4/adm/landing-page?uid=ErTY%2B16ejan1S3YAVEPMCpKkylIlQWLY8v2g80lXE0Kond7dw%2BA4ERB5qg8TeNWY81jr33n%2F2s%2FT3rmjFT6p1w%3D%3D&smId=rkJf8MX33R",
//       "_blank"
//     );
//     if (newTab) {
//       newTab.focus(); // Optional: Focus the new tab
//     }

//     // Navigate to the /admission page within the same app
//     router.push("/admission");
//   };

//   return (
//     <nav
//       className={`sticky top-0 z-50 w-full bg-white ${
//         (show || isOpen) && "shadow-md"
//       } transform transition duration-300`}
//     >
//       <div className="px-4 py-1">
//         <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-2 py-1">
//           <div className="flex">
//             <div className="relative my-auto flex h-14 w-40 flex-shrink-0 cursor-pointer items-center">
//               <Link legacyBehavior href="/">
//                 <a onClick={() => setNav(null)}>
//                   <div className="relative my-auto h-14 w-40 flex-shrink-0 cursor-pointer items-center">
//                     <Image
//                       alt="DMTIMS-Logo"
//                       src={"/newImages/dmtimsLogo.webp"}
//                       layout="fill"
//                       objectFit="contain"
//                       priority
//                     />
//                   </div>
//                 </a>
//               </Link>

//               {/* AICTE LOGO */}
//               <div className="mx-4 h-full w-[2px] flex-shrink-0 rounded-full bg-[#D8D8D8]" />
//               <a
//                 className="flex h-full flex-shrink-0 items-center"
//                 href="/files/AICTE-23-24.pdf"
//                 target={"_blank"}
//               >
//                 <Image
//                   // className="mr-3 h-full py-1  w-auto"
//                   className=" h-full w-auto  py-1"
//                   // src="https://cdn.discordapp.com/attachments/929834261568167986/968132140753629244/image_33321.webp"
//                   src="/aicte_logo.png"
//                   width={75}
//                   height={70}
//                   alt="AICTE-Logo"
//                 />
//                 <p className="ml-2 hidden flex-shrink-0 text-sm font-medium italic text-[#28314A] opacity-70 sm:inline-flex xl:hidden 2xl:flex">
//                   {/* Approved by AICTE */}
//                 </p>
//               </a>

//               {/* AIMS LOGO */}
//               <a
//                 className="flex h-full flex-shrink-0 items-center"
//                 href="/files/AICTE-23-24.pdf"
//                 target={"_blank"}
//               >
//                 <Image
//                   // className="mr-3 h-full py-1  w-auto"
//                   className=" h-full w-auto  py-1"
//                   // src="https://cdn.discordapp.com/attachments/929834261568167986/968132140753629244/image_33321.webp"
//                   src="/logo2.jpg"
//                   width={95}
//                   height={70}
//                   alt="AIMS-Logo"
//                 />
//                 <p className="ml-2 hidden flex-shrink-0 text-sm font-medium italic text-[#28314A] opacity-70 sm:inline-flex xl:hidden 2xl:flex">
//                   {/* Approved by AIMS */}
//                 </p>
//               </a>

//               {/* ACBSP LOGO */}
//               <a
//                 className="flex h-full flex-shrink-0 items-center"
//                 href="/files/AICTE-23-24.pdf"
//                 target={"_blank"}
//               >
//                 <Image
//                   // className="mr-3 h-full py-1  w-auto"
//                   className=" h-full w-auto  py-1"
//                   // src="https://cdn.discordapp.com/attachments/929834261568167986/968132140753629244/image_33321.webp"
//                   src="/logo3.jpg"
//                   width={75}
//                   height={70}
//                   alt="ACBSP-Logo"
//                 />
//                 <p className="ml-2 hidden flex-shrink-0 text-sm font-medium italic text-[#28314A] opacity-70 sm:inline-flex xl:hidden 2xl:flex">
//                   {/* Approved by AICTE */}
//                 </p>
//               </a>
//             </div>
//             <div className="ml-auto hidden items-center lg:inline-flex">
//               <button
//                 onClick={play}
//                 className="flex transform items-center rounded-full bg-[#4C477A] px-3 py-2 font-bold text-white transition duration-300 2xl:text-lg "
//               >
//                 Campus Virtual Tour
//                 <PlayIcon className="ml-1 w-6 text-[#FFB800]" />
//               </button>

//               {/* old code */}
//               {/* <Link legacyBehavior href="/admission">
//                 <a className="ml-6 transform rounded-full bg-[#EE3768] px-5 py-2 font-bold text-white transition duration-300 hover:scale-105 active:scale-95 2xl:text-lg">
//                   Apply Now
//                 </a>
//               </Link> */}

//               {/*  new code */}
//               <button
//                 onClick={handleButtonClick}
//                 className="ml-6 transform rounded-full bg-[#EE3768] px-5 py-2 font-bold text-white transition duration-300 hover:scale-105 active:scale-95 2xl:text-lg"
//               >
//                 Apply Now
//               </button>
//             </div>

//             <div className="ml-auto flex lg:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="inline-flex items-center justify-center rounded-md bg-white p-2 text-[#414042] hover:bg-[#f2f2f2]"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//           <div className="hidden flex-wrap justify-evenly gap-2 overflow-hidden rounded-2xl bg-[#F2F2F2] px-2 py-1 lg:inline-flex">
//             {navLinks.map((item, i) => (
//               <Link key={item.id} legacyBehavior href={item.link}>
//                 <a
//                   onMouseEnter={item.mouseEnter}
//                   onMouseLeave={item.mouseLeave}
//                   onClick={() => setNav(item.id)}
//                   className={`nav-link ${nav == i && "nav-link-active"}`}
//                 >
//                   {item.text}
//                 </a>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//       <ProgramsMegaMenu
//         setIsProgramsHovered={setIsProgramsHovered}
//         isProgramsHovered={isProgramsHovered}
//       />
//       <AboutMegaMenu
//         setIsAboutHovered={setIsAboutHovered}
//         isAboutHovered={isAboutHovered}
//       />
//       <FacultyMegaMenu
//         setIsFacultyHovered={setIsFacultyHovered}
//         isFacutlyHovered={isFacultyHovered}
//       />
//       <StudenLifeMegaMenu
//         setIsStudentLifeHovered={setIsStudentLifeHovered}
//         isStudentLifeHovered={isStudentLifeHovered}
//       />
//       <WhatTheySayMegaMenu
//         setIsWhatTheySayHovered={setIsWhatTheySayHovered}
//         isWhatTheySayHovered={isWhatTheySayHovered}
//       />
//       <InfrastructureMegaMenu
//         isInfrastructureHovered={isInfrastructureHovered}
//         setIsInfrastructureHovered={setIsInfrastructureHovered}
//       />
//       <AICTEMegaMenu
//         isAICTEHovered={isAICTEHovered}
//         setIsAICTEHovered={setIsAICTEHovered}
//       />
//       <AdmissionsMegaMenu
//         isAdmissionsHovered={isAdmissionsHovered}
//         setIsAdmissionsHovered={setIsAdmissionsHovered}
//       />
//       <div
//         className={`relative bg-white xl:hidden ${
//           isOpen ? "max-h-96" : "max-h-0"
//         } transform overflow-y-scroll transition-all duration-300`}
//         id="mobile-menu"
//       >
//         <div className="grid grid-cols-1 space-y-1 pb-3 pt-2 md:grid-cols-2">
//           {navLinks?.map((item) => (
//             <Link legacyBehavior key={item.id} href={item.link}>
//               <a href={item.link} className="nav-link-mobile">
//                 {item.text}
//               </a>
//             </Link>
//           ))}
//           <button
//             onClick={play}
//             className="nav-link-mobile flex w-full text-start"
//           >
//             Campus Virtual Tour
//             <PlayIcon className="ml-1 w-6 text-[#EE3768]" />
//           </button>
//         </div>
//         {/* <button
//           className="btn-admissions mb-4 ml-2"
//           onClick={() => router.push("/admission")}
//         >
//           Apply Now
//         </button> */}

//         {/* updated code for hamburger button in header to go on next page with /admission route */}
//         <button
//           className="btn-admissions mb-4 ml-2"
//           onClick={handleButtonClick}
//         >
//           Apply Now
//         </button>
//       </div>

//       <video
//         className={`${
//           !fullscreen && "hidden"
//         } h-auto w-full object-cover object-center`}
//         ref={video}
//         autoPlay={false}
//         muted={true}
//         loop={true}
//         playsInline
//         controls={false}
//       >
//         <source
//           src={"/videos/Dmtims-virtual-tour-Video.mp4"}
//           type={`video/mp4`}
//         />
//       </video>
//     </nav>
//   );
// };

// export default Header;

/**new code */
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import AboutMegaMenu from "../AboutMegaMenu/AboutMegaMenu";
import CTAHeader from "../CTAHeader/CTAHeader";
import FacultyMegaMenu from "../FacultyMegaMenu/FacultyMegaMenu";
import ProgramsMegaMenu from "../ProgramsMegaMenu/ProgramsMegaMenu";
import StudenLifeMegaMenu from "../StudenLifeMegaMenu/StudenLifeMegaMenu";
import WhatTheySayMegaMenu from "../WhatTheySayMegaMenu/WhatTheySayMegaMenu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PlayIcon } from "@heroicons/react/outline";
import InfrastructureMegaMenu from "../InfrastructureMegaMenu/InfrastructureMegaMenu";
import AICTEMegaMenu from "../AICTEMegaMenu/AICTEMegaMenu";
import AdmissionsMegaMenu from "../AdmissionsMegaMenu/AdmissionsMegaMenu";
import { MouseEvent } from "react";
import PpaMegaMenu from "../PpaMegaMenu/PpaMegaMenu";
import PlacementMegaMenu from "../PlacementMegaMenu/PlacementMegaMenu";

const Header = () => {
  const [nav, setNav] = useState<number | null>(null);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsHovered, setIsProgramsHovered] = useState(false);
  const [isPpaHovered, setIsPpaHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isFacultyHovered, setIsFacultyHovered] = useState(false);
  const [isStudentLifeHovered, setIsStudentLifeHovered] = useState(false);
  const [isWhatTheySayHovered, setIsWhatTheySayHovered] = useState(false);
  const [isInfrastructureHovered, setIsInfrastructureHovered] = useState(false);
  const [isAICTEHovered, setIsAICTEHovered] = useState(false);
  const [isAdmissionsHovered, setIsAdmissionsHovered] = useState(false);
  const [isPlacementHovered, setIsPlacementHovered] = useState(false);

  const video = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const router = useRouter();

  const navLinks = [
    {
      id: 0,
      link: "/about-us",
      text: "About Us",
      mouseEnter: () => setIsAboutHovered(true),
      mouseLeave: () => setIsAboutHovered(false),
    },
    {
      id: 1,
      link: "/programs",
      text: "Dual Degree",
      mouseEnter: () => setIsProgramsHovered(true),
      mouseLeave: () => setIsProgramsHovered(false),
    },
    {
      id: 2,
      link: "/complimentary-certifications",
      // text: "Complimentary Certifications",
      text: "Professional Partnerships & Associations",
      mouseEnter: () => setIsPpaHovered(true),
      mouseLeave: () => setIsPpaHovered(false),
    },
    {
      id: 3,
      link: "/faculty",
      text: "Intellectual Capital",
      // text: "Intellectual Capital",
      mouseEnter: () => setIsFacultyHovered(true),
      mouseLeave: () => setIsFacultyHovered(false),
    },
    {
      id: 4,
      link: "/corporate-interface",
      // text: "Corporate Interface",
      text: "Corporate Interaction Series",
    },
    {
      id: -1,
      link: "/about-us#Infrastructure",
      // text: "Infrastructure",
      text: "Campus Infrastructure",
      mouseEnter: () => setIsInfrastructureHovered(true),
      mouseLeave: () => setIsInfrastructureHovered(false),
    },
    {
      id: 6,
      link: "/placements",
      text: "Placements",
      mouseEnter: () => setIsPlacementHovered(true),
      mouseLeave: () => setIsPlacementHovered(false),
    },

    {
      id: 7,
      link: "/life-at-DMTIMS",
      text: "Life@DMTIMS",
      mouseEnter: () => setIsStudentLifeHovered(true),
      mouseLeave: () => setIsStudentLifeHovered(false),
    },
    {
      id: 8,
      link: "/campus-hostel",
      text: "In-Campus Hostel",
    },
    // {
    //   id: 9,
    //   link: "/blog/home",
    //   text: "Blogs",
    // },
    {
      id: -2,
      link: "/#testimonials",
      //  text: "What They Say"
      text: "Testimonials",
    },
    {
      id: -3,
      link: "/files/EOA Report 2024-25.pdf",
      text: "AICTE-24-25",
      mouseEnter: () => setIsAICTEHovered(true),
      mouseLeave: () => setIsAICTEHovered(false),
    },
    {
      id: 11,
      link: "/admission",
      text: "Admissions",
      mouseEnter: () => setIsAdmissionsHovered(true),
      mouseLeave: () => setIsAdmissionsHovered(false),
    },
    {
      id: -5,
      link: "/announcements",
      //  text: "Important Announcements"
      text: "Upcoming Events",
    },
    { id: 13, link: "/alumni", text: "Alumni" },
    { id: 14, link: "/mandatory-disclosure", text: "Mandatory Disclosure" },
  ];

  const transitionNavbar = () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const play = () => {
    setIsPlaying(true);
    if (video.current?.currentTime) {
      video.current.currentTime = 0;
    }
    video.current?.play();
    console.log(isPlaying);
    toggleFullScreen();
  };

  let toggleFullScreen = () => {
    if (video.current?.requestFullscreen) {
      video.current.requestFullscreen();
    }
  };

  let toggleSound = () => {
    if (!isPlaying) {
      video.current!.play();
      setIsPlaying(true);
    }
    setFullscreen(!fullscreen);
    if (fullscreen) {
      video.current?.pause();
      video.current!.muted = true;
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    } else {
      video.current!.muted = false;
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", toggleSound, false);

    return () => {
      document.removeEventListener("fullscreenchange", toggleSound, false);
    };
  }, [fullscreen]);

  useEffect(() => {
    if (window) {
      console.log();
      const i = navLinks.findIndex((e) => e.link === window.location.pathname);
      if (i > -1) {
        setNav(i);
      }
    }

    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  // /** previous code here /admission page fully reloading which creates problem and also time consuming */
  // const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
  //   // Open the specified URL in a new tab
  //   const newTab = window.open(
  //     "https://dmtims.linways.com/v4/adm/landing-page?uid=ErTY%2B16ejan1S3YAVEPMCpKkylIlQWLY8v2g80lXE0Kond7dw%2BA4ERB5qg8TeNWY81jr33n%2F2s%2FT3rmjFT6p1w%3D%3D&smId=rkJf8MX33R",
  //     "_blank"
  //   );
  //   if (newTab) {
  //     newTab.focus(); // Optional: Focus the new tab
  //   }

  //   // Navigate to the /admission page within the same app
  //   window.location.href = "/admission";

  // };

  /**new code to remove full reloading */
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    // Open the specified URL in a new tab
    const newTab = window.open(
      "https://dmtims.linways.com/v4/adm/landing-page?uid=ErTY%2B16ejan1S3YAVEPMCpKkylIlQWLY8v2g80lXE0Kond7dw%2BA4ERB5qg8TeNWY81jr33n%2F2s%2FT3rmjFT6p1w%3D%3D&smId=rkJf8MX33R",
      "_blank"
    );
    if (newTab) {
      newTab.focus(); // Optional: Focus the new tab
    }

    // Navigate to the /admission page within the same app
    router.push("/admission");
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white ${
        (show || isOpen) && "shadow-md"
      } transform transition duration-300`}
    >
      <div className="px-4 py-1">
        {/* logos in big screen */}
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-2 py-1">
          <div className="flex">
            <div className="relative my-auto flex h-14 w-40 flex-shrink-0 cursor-pointer items-center">
              <Link legacyBehavior href="/">
                <a onClick={() => setNav(null)}>
                  <div className="relative my-auto h-14 w-40 flex-shrink-0 cursor-pointer items-center">
                    <Image
                      alt="DMTIMS-Logo"
                      src={"/newImages/dmtimsLogo.webp"}
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                </a>
              </Link>

              <div className="mx-1 h-full w-[2px] flex-shrink-0 rounded-full bg-[#D8D8D8] min-[400px]:mx-4" />

              {/* Entrance text small screen */}
              {/* <Link legacyBehavior href="/EntranceExam">
                <div className="  animate-pulse rounded-md bg-[#F4115E] px-2 text-white  min-[433px]:mx-4 min-[433px]:px-4  lg:hidden">
                  <div className="text-md w-[7rem] font-bold sm:h-[4rem] sm:py-2 sm:text-base ">
                    Entrance Test
                    <div className="pl-2">2024 - 2026</div>
                  </div>
                </div>
              </Link> */}

              {/* AICTE LOGO */}
              <a
                // className="flex h-full flex-shrink-0 items-center"
                className="hidden h-full flex-shrink-0 items-center min-[530px]:flex"
                href="/files/AICTE-23-24.PDF"
                target={"_blank"}
              >
                <Image
                  className=" h-full w-auto  py-1"
                  src="/aicte_logo.png"
                  width={75}
                  height={70}
                  alt="AICTE-Logo"
                />
              </a>

              {/* AIMS LOGO */}
              <a
                // className=" hidden sm:flex h-full  flex-shrink-0 items-center "
                className=" hidden h-full flex-shrink-0  items-center min-[630px]:flex "
                href="https://aims.org.in/about/"
                target={"_blank"}
              >
                <Image
                  className=" h-full w-auto  py-1 "
                  src="/logo2.jpg"
                  width={95}
                  height={70}
                  alt="AIMS-Logo"
                />
              </a>

              {/* ACBSP LOGO */}
              <a
                className="hidden h-full flex-shrink-0 items-center min-[715px]:flex"
                href="https://en.m.wikipedia.org/wiki/Accreditation_Council_for_Business_Schools_and_Programs"
                target={"_blank"}
              >
                <Image
                  className=" h-full w-auto  py-1"
                  src="/logo3.jpg"
                  width={75}
                  height={70}
                  alt="ACBSP-Logo"
                />
              </a>

              {/* Entrance text big screen*/}
              {/* <Link legacyBehavior href="/EntranceExam">
                <div className=" hidden animate-pulse  rounded-md bg-[#F4115E] px-2 text-white  min-[433px]:mx-4 min-[433px]:px-4  lg:flex">
                  <div className="text-md w-[7rem] font-bold sm:h-[4rem] sm:py-2 sm:text-base ">
                    Entrance Test
                    <div className="pl-2">2024 - 2026</div>
                  </div>
                </div>
              </Link> */}
            </div>

            <div className="ml-auto hidden items-center lg:inline-flex">
              <button
                onClick={play}
                className="flex transform items-center rounded-full bg-[#4C477A] px-3 py-2 font-bold text-white transition duration-300 2xl:text-lg "
              >
                Campus Virtual Tour
                <PlayIcon className="ml-1 w-6 text-[#FFB800]" />
              </button>

              {/* old code */}
              {/* <Link legacyBehavior href="/admission">
                <a className="ml-6 transform rounded-full bg-[#EE3768] px-5 py-2 font-bold text-white transition duration-300 hover:scale-105 active:scale-95 2xl:text-lg">
                  Apply Now 
                </a>
              </Link> */}

              {/*  new code */}
              <button
                onClick={handleButtonClick}
                className="ml-6 transform rounded-full bg-[#EE3768] px-5 py-2 font-bold text-white transition duration-300 hover:scale-105 active:scale-95 2xl:text-lg"
              >
                Apply Now
              </button>
            </div>

            <div className="ml-auto flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-[#414042] hover:bg-[#f2f2f2]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="hidden flex-wrap justify-evenly gap-2 overflow-hidden rounded-2xl bg-[#F2F2F2] px-2 py-1 lg:inline-flex">
            {navLinks.map((item, i) => (
              <Link key={item.id} legacyBehavior href={item.link}>
                <a
                  onMouseEnter={item.mouseEnter}
                  onMouseLeave={item.mouseLeave}
                  onClick={() => setNav(item.id)}
                  className={`nav-link ${nav == i && "nav-link-active"}`}
                >
                  {item.text}
                </a>
              </Link>
            ))}
          </div>
        </div>
        {/* logos in small screen */}
        <div className="">
          {/* AICTE LOGO */}
          <a
            className=" h-full  flex-shrink-0 items-center min-[530px]:hidden"
            href="/files/AICTE-23-24.PDF"
            target={"_blank"}
          >
            <Image
              className=" h-full w-auto  py-1"
              src="/aicte_logo.png"
              width={75}
              height={70}
              alt="AICTE-Logo"
            />
          </a>

          {/* AIMS LOGO */}
          <a
            // className=" hidden sm:flex h-full  flex-shrink-0 items-center "
            className="  h-full flex-shrink-0  items-center min-[630px]:hidden "
            href="https://aims.org.in/about/"
            target={"_blank"}
          >
            <Image
              className=" h-full w-auto  py-1 "
              src="/logo2.jpg"
              width={95}
              height={70}
              alt="AIMS-Logo"
            />
          </a>

          {/* ACBSP LOGO */}
          <a
            className="  h-full  flex-shrink-0 items-center min-[715px]:hidden"
            href="https://en.m.wikipedia.org/wiki/Accreditation_Council_for_Business_Schools_and_Programs"
            target={"_blank"}
          >
            <Image
              className=" h-full w-auto  py-1"
              src="/logo3.jpg"
              width={75}
              height={70}
              alt="ACBSP-Logo"
            />
          </a>
        </div>
      </div>
      <ProgramsMegaMenu
        setIsProgramsHovered={setIsProgramsHovered}
        isProgramsHovered={isProgramsHovered}
      />
      <PlacementMegaMenu
        setIsPlacementHovered={setIsPlacementHovered}
        isPlacementHovered={isPlacementHovered}
      />
      <PpaMegaMenu
        isPpaHovered={isPpaHovered}
        setIsPpaHovered={setIsPpaHovered}
      />
      <AboutMegaMenu
        setIsAboutHovered={setIsAboutHovered}
        isAboutHovered={isAboutHovered}
      />
      <FacultyMegaMenu
        setIsFacultyHovered={setIsFacultyHovered}
        isFacutlyHovered={isFacultyHovered}
      />
      <StudenLifeMegaMenu
        setIsStudentLifeHovered={setIsStudentLifeHovered}
        isStudentLifeHovered={isStudentLifeHovered}
      />
      <WhatTheySayMegaMenu
        setIsWhatTheySayHovered={setIsWhatTheySayHovered}
        isWhatTheySayHovered={isWhatTheySayHovered}
      />
      <InfrastructureMegaMenu
        isInfrastructureHovered={isInfrastructureHovered}
        setIsInfrastructureHovered={setIsInfrastructureHovered}
      />
      <AICTEMegaMenu
        isAICTEHovered={isAICTEHovered}
        setIsAICTEHovered={setIsAICTEHovered}
      />
      <AdmissionsMegaMenu
        isAdmissionsHovered={isAdmissionsHovered}
        setIsAdmissionsHovered={setIsAdmissionsHovered}
      />
      <div
        className={`relative bg-white xl:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        } transform overflow-y-scroll transition-all duration-300`}
        id="mobile-menu"
      >
        <div className="grid grid-cols-1 space-y-1 pb-3 pt-2 md:grid-cols-2">
          {navLinks?.map((item) => (
            <Link legacyBehavior key={item.id} href={item.link}>
              <a href={item.link} className="nav-link-mobile">
                {item.text}
              </a>
            </Link>
          ))}
          <button
            onClick={play}
            className="nav-link-mobile flex w-full text-start"
          >
            Campus Virtual Tour
            <PlayIcon className="ml-1 w-6 text-[#EE3768]" />
          </button>
        </div>
        {/* <button
          className="btn-admissions mb-4 ml-2"
          onClick={() => router.push("/admission")}
        >
          Apply Now
        </button> */}

        {/* updated code for hamburger button in header to go on next page with /admission route */}
        <button
          className="btn-admissions mb-4 ml-2"
          onClick={handleButtonClick}
        >
          Apply Now
        </button>
      </div>

      <video
        className={`${
          !fullscreen && "hidden"
        } h-auto w-full object-cover object-center`}
        ref={video}
        autoPlay={false}
        muted={true}
        loop={true}
        playsInline
        controls={false}
      >
        <source
          // src={"/videos/Dmtims-virtual-tour-Video.mp4"}
          src={" "}
          type={`video/mp4`}
        />
      </video>
    </nav>
  );
};

export default Header;
