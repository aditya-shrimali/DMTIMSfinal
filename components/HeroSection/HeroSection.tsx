import Image from "next/legacy/image";
import FindCourse from "./images/FindCourse.webp";
import ExploreCampus from "./images/ExploreCampus.webp";
import Admission from "./images/Admission.webp";
import HeroBg from "./images/DMTIMSCampusImg.webp";
import { useState } from "react";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

const HeroSection = () => {
  const [course, setCourse] = useState(false);
  const [campus, setCampus] = useState(false);
  const [admission, setAdmission] = useState(false);

  return (
    <section className="relative bg-white">
      <div className="relative z-10 my-12 mx-2 flex max-w-4xl items-center rounded-full bg-[#F2F2F2] py-2 px-2 text-center lg:mx-auto xl:max-w-6xl">
        <Link legacyBehavior href={"/programs"}>
          <a
            onMouseEnter={() => setCourse(!course)}
            onMouseLeave={() => setCourse(!course)}
            className={`hero-part py-[1.8rem] sm:py-9 md:py-[3.1rem] lg:py-[4rem] ${
              course ? "z-30 bg-[#EE3768]" : "z-20"
            } ${campus || admission ? "opacity-0" : "opacity-100"} `}
          >
            Find a Course
          </a>
        </Link>
        <Link legacyBehavior href={"/life-at-DMTIMS"}>
          <a
            onMouseEnter={() => setCampus(!campus)}
            onMouseLeave={() => setCampus(!campus)}
            className={`hero-part hover: ${
              campus ? "z-30 bg-[#FFB800]" : "z-20"
            } ${course || admission ? "opacity-0" : "opacity-100"}`}
          >
            Explore Campus <br /> Life @DMTIMS
          </a>
        </Link>
        <Link legacyBehavior href={"/#contact_us"}>
          <a
            onMouseEnter={() => setAdmission(!admission)}
            onMouseLeave={() => setAdmission(!admission)}
            className={`hero-part hover: ${
              admission ? "z-30 bg-[#4C477A]" : "z-20"
            } ${campus || course ? "opacity-0" : "opacity-100"}`}
          >
            Talk to Admission <br /> Counsellors
          </a>
        </Link>
        <Image
          priority
          alt="FindCourse"
          className={`z-10 rounded-full transition duration-150 ${
            course ? "opacity-100" : "opacity-0"
          }`}
          src={FindCourse}
          layout="fill"
          objectFit="cover"
        />
        <Image
          priority
          alt="ExploreCampus"
          className={`z-10 rounded-full transition duration-500 ${
            campus ? "opacity-100" : "opacity-0"
          }`}
          src={ExploreCampus}
          layout="fill"
          objectFit="cover"
        />
        <Image
          priority
          alt="Admission"
          className={`z-10 rounded-full transition duration-500 ${
            admission ? "opacity-100" : "opacity-0"
          }`}
          src={Admission}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center pb-4">
        <h3 className="z-10 font-condensed text-7xl font-semibold tracking-tighter text-[#4C477A] md:text-8xl lg:text-9xl xl:text-[9rem] 2xl:text-[10rem]">
          <em className="font-normal text-[#FFB800]">We</em>
          <span className="text-[#EE3768]">,</span> DMTIMS
        </h3>
      </div>
      <div className="relative h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[750px] xl:h-[800px] 2xl:h-[850px]">
        <Image
          priority
          alt="Hero-Bg"
          src={HeroBg}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className="relative bottom-0 right-0 z-10 ml-auto flex max-w-5xl flex-col bg-white md:flex-row lg:absolute">
        <p className="top-3 max-w-4xl px-2 py-2 text-3xl font-bold tracking-tighter text-[#4C477A] sm:top-6 sm:px-4 md:absolute md:text-white">
          The Institute fosters and nurtures leaders capable of making a
          positive difference.
        </p>
        <div className="flex h-56 flex-col bg-[#FFB800] px-2 pt-4 sm:px-4 md:h-auto md:w-1/3 md:pt-32 ">
          <p className="flex-grow text-xl text-white">
            To create a competitive learning environment, enabling our
            stakeholders to realize their full potential.
          </p>
          <p className="py-4 text-sm font-bold tracking-[0.35rem] text-white">
            VISION
          </p>
        </div>
        <div className="flex h-56 flex-col bg-[#EE3768] px-2 pt-4 sm:px-4 md:h-auto md:w-1/3 md:pt-32 ">
          <p className="flex-grow pb-4 text-xl text-white">
            Become an Internationally-recognized Business School, providing
            quality& holistic education to nurture inspiring leaders in
            transforming the business world.
          </p>
          <p className="py-4 text-sm font-bold tracking-[0.35rem] text-white">
            MISSION
          </p>
        </div>
        <div className="flex h-56 flex-col rounded-br-full bg-[#4C477A] px-2 pt-4 pr-10 sm:px-4 md:h-auto md:w-1/3 md:pt-32 lg:pr-16">
          <p className="flex-grow text-xl text-white">
            Integrity, Equity & Inclusivity. Practicing Excellence Driven by
            Innovation Creative Approach Community Centric
          </p>
          <ArrowCircleRightIcon className="mb-2 w-10 transform cursor-pointer text-[#FFB800] transition duration-300 hover:rotate-45" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
