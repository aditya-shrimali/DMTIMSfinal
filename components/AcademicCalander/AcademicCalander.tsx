import Image from "next/image";
import React from "react";
import Bg from "./images/BrochureBg.svg";

function AcademicCalander() {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="relative mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <div className="relative flex items-center overflow-hidden rounded-lg bg-[#4C477A] py-6 sm:py-8 md:py-12 lg:rounded-xl lg:py-16">
            <div className="absolute top-4 h-full w-full md:top-8 lg:top-10">
              <div className="relative h-20 w-full sm:h-28 lg:h-40">
                <Image
                  priority
                  alt="Download-Brochure"
                  className="opacity-30"
                  src={Bg}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="z-0 mx-3 h-14 w-1 rounded-full bg-white sm:mx-4 sm:h-16 md:mx-6 md:h-20 lg:mx-12 lg:h-28 xl:h-32" />
            <h4 className="z-10 text-lg font-semibold leading-tight text-white sm:text-xl md:text-2xl lg:text-4xl lg:leading-snug xl:text-5xl">
              Download Our <br /> Academic Calendar
            </h4>
            <div className="absolute right-0 h-56 w-1/2 rounded-tl-full bg-[#EE3768] md:h-72 lg:h-96" />
          </div>
          <div className="absolute top-0 right-0 flex h-full flex-col items-center justify-center">
            <a
              href="/files/DMTIMS-2023-PGDM-Academic-Calendar.pdf"
              target="_blank"
              className="dmtims-text lg-text-lg shadow-lgsm:mr-4 z-10 ml-auto mr-3 transform cursor-pointer items-center justify-center rounded-full bg-[#FFB800] px-4 py-2 pb-0 text-sm font-medium text-white md:mr-6 md:px-5 md:py-3 md:text-base lg:mr-12 lg:px-8 lg:py-3"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademicCalander;
