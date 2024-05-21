import { DownloadIcon } from "@heroicons/react/solid";
import Image from "next/legacy/image";
import Bg from "./images/BrochureBg.svg";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const DownloadBrochure = () => {
  const links = [
    {
      id: 0,
      name: "Brochure 2022-24",
      link: "/files/DMTIMS_BROCHURE_2022_2024.pdf",
    },
    {
      id: 1,
      name: "Brochure 2023-25",
      link: "/files/DMTIMS_BROCHURE_2023_2025.pdf",
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="relative mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <div className="relative flex items-center overflow-hidden rounded-lg bg-[#EE3768] py-6 sm:py-8 md:py-12 lg:rounded-xl lg:py-16">
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
              Download Our PGDM <br /> Programme Brochure
            </h4>
            <div className="absolute right-0 h-56 w-1/2 rounded-tl-full bg-[#4C477A] md:h-72 lg:h-96" />
          </div>
          <div className="absolute top-0 right-0 flex h-full flex-col items-center justify-center">
            <div className="dmtims-text z-10 ml-auto mr-3 flex transform cursor-pointer items-center rounded-full bg-[#FFB800] pb-0 shadow-lg sm:mr-4 md:mr-6 lg:mr-12">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="lg-text-lg inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 md:px-5 md:py-3 md:text-base lg:px-6 lg:py-3">
                    Download
                    <ChevronDownIcon
                      className="ml-2 -mr-1 h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {links.reverse().map(({ id, link, name }) => (
                      <div key={id} className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={link}
                              download
                              className={`${
                                active
                                  ? "bg-[#4C477A] text-white"
                                  : "text-[#4C477A]"
                              } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                            >
                              <DownloadIcon
                                className={`mr-1 h-4 w-4 ${
                                  active ? "text-white" : "text-[#4C477A]"
                                }  lg:h-5 lg:w-5`}
                              />
                              {name}
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadBrochure;
