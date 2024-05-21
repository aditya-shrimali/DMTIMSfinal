import Image, { StaticImageData } from "next/legacy/image";
import { Disclosure, Transition } from "@headlessui/react";
import { ArrowDownIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Props {
  id: string;
  img: StaticImageData;
  title: string;
  desc: string;
  subjects: string[];
}

const PGDMCard = ({ id, img, title, desc, subjects }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      ScrollTrigger.refresh();
    }, 300);
  }, [isOpen]);

  return (
    <div
      id={id}
      className="my-8 flex flex-col overflow-hidden rounded-xl border"
    >
      <div className="relative flex flex-col md:flex-row">
        <div className="relative h-60 w-full md:h-auto md:w-1/2 lg:h-[300px]">
          <Image
            priority
            src={img}
            alt="PGDMCard"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="flex flex-col px-4 md:w-1/2 lg:pr-12">
          <div className="flex flex-col">
            <h4 className="dmtims-subtitle pb-4 pt-8 lg:pt-12">{title}</h4>
            <p className="dmtims-text text-[#4F4F4F]">{desc}</p>
          </div>
        </div>
      </div>
      <Disclosure>
        {({ open }) => (
          <>
            <div onClick={() => setIsOpen(!open)}>
              <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                <div className="ml-auto flex items-center">
                  <ArrowDownIcon
                    className={`${
                      open ? "rotate-180" : "rotate-0"
                    } h-7 w-7 transform rounded-full border-2 border-[#FFB800] p-1 text-[#FFB800] transition duration-300`}
                  />
                  <p className="mx-2 text-sm font-medium tracking-tighter text-[#4C477A]">
                    View Subjects
                  </p>
                </div>
              </Disclosure.Button>
            </div>
            <Transition
              show={open}
              enter="transition-all duration-300 ease-out"
              enterFrom="transform max-h-0"
              enterTo="transform max-h-96"
              leave="transition-all duration-300 ease-out"
              leaveFrom="transform max-h-96"
              leaveTo="transform max-h-0"
            >
              <Disclosure.Panel
                static
                as="ul"
                className="grid grid-cols-2 gap-2 bg-[#F2F2F2] px-4 py-6 text-sm text-gray-500"
              >
                {subjects.map((item, i) => (
                  <li
                    key={i}
                    className="dmtims-text px-2 font-medium text-[#4F4F4F]"
                  >
                    {item}
                  </li>
                ))}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PGDMCard;
