import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ListofItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      ScrollTrigger.refresh();
    }, 300);
  }, [isOpen]);

  return (
    <section id="Documents" className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
          <h2 className="dmtims-subtitle text-[#EE3768]">
            List of Items to be carried by the students:
          </h2>
          <div className="my-4 flex flex-col overflow-hidden rounded-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <div onClick={() => setIsOpen(!open)}>
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        1. Laptop (MANDATORY)
                      </p>
                      <div className="ml-auto flex items-center">
                        <PlusIcon
                          className={`${
                            open ? "rotate-45" : "rotate-0"
                          } h-8 w-8 transform p-1 text-[#28314A] transition duration-300`}
                        />
                      </div>
                    </Disclosure.Button>
                  </div>
                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-40"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-40"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Should be in operational condition for use for two full
                        years of academic exchange.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
          <div className="my-4 flex flex-col overflow-hidden rounded-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <div onClick={() => setIsOpen(!open)}>
                    <Disclosure.Button className="flex w-full items-center bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        2. Dress Code - The formal dress code for every DMTIMS
                        student is as follows: -
                      </p>
                      <div className="ml-auto flex items-center">
                        <PlusIcon
                          className={`${
                            open ? "rotate-45" : "rotate-0"
                          } h-8 w-8 transform p-1 text-[#28314A] transition duration-300`}
                        />
                      </div>
                    </Disclosure.Button>
                  </div>
                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <li className="dmtims-subheading mx-6 list-disc pb-1 text-[#FFB800]">
                        Formals
                      </li>
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        a) Ladies: Business Formals / Sarees (4 Pairs) with
                        Formal Shoes. <br />
                        b) Gentlemen: Light colored Shirts, Tie & Trousers (4
                        Pairs) with Formal Shoes.{" "}
                      </p>
                      <li className="dmtims-subheading mx-6 list-disc pb-1 text-[#FFB800]">
                        Sports-Wear
                      </li>
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        a) Ladies: Track pants with cotton T-shirts (2 Pairs).
                        One wind-cheater and Sports Shoes.
                        <br />
                        b) Gentlemen: Track pants with cotton T-shirts (2
                        Pairs). One wind-cheater and Sports Shoes.
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
          <div className="my-4 flex flex-col overflow-hidden rounded-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <div onClick={() => setIsOpen(!open)}>
                    <Disclosure.Button className="flex w-full items-center bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        3. Miscellaneous Requirements:
                      </p>
                      <div className="ml-auto flex items-center">
                        <PlusIcon
                          className={`${
                            open ? "rotate-45" : "rotate-0"
                          } h-8 w-8 transform p-1 text-[#28314A] transition duration-300`}
                        />
                      </div>
                    </Disclosure.Button>
                  </div>
                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <ol className="mx-10 list-decimal">
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Stationery and bag as per requirement.
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Bedding and Linen (if using hostel / PG accommodation)
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Basic Toiletries
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Woollen clothes / Umbrella / Raincoat / Rainy footwear
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          First Aid medicines
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Light snacks and food items.
                        </li>
                      </ol>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
          <div className="my-4 flex flex-col overflow-hidden rounded-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <div onClick={() => setIsOpen(!open)}>
                    <Disclosure.Button className="flex w-full items-center bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        4. Documents (Please carry all original documents)
                      </p>
                      <div className="ml-auto flex items-center">
                        <PlusIcon
                          className={`${
                            open ? "rotate-45" : "rotate-0"
                          } h-8 w-8 transform p-1 text-[#28314A] transition duration-300`}
                        />
                      </div>
                    </Disclosure.Button>
                  </div>
                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <ol className="mx-10 list-decimal">
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          10 passports - size photographs (in formal dress).
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Updated Resume
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Work Experience Certificate (if applicable)
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Copy of Aadhar Card
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Entrance Examination Score Card
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          SSC Mark Sheet
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          HSC Mark sheet
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Graduation all year / Semester Mark sheet (Students
                          awaiting final year result should submit Mark sheets
                          of all earlier years)
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Degree / Passing Certificate / Provisional Certificate
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          University Migration Certificate
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          College Leaving Certificate / Transfer Certificate
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Domicile Certificate / Residential Certificate
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Nationality Certificate / Copy of Passport / Birth
                          Certificate (if nationality is mentioned on the same)
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Hindi Language Certificate (if applicable)
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Gap Affidavit (if applicable)
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Caste certificate (if applicable)
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Caste Validity Certificate (if applicable)
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Non-Creamy Certificate (if applicable)
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Income Certificate (if applicable)
                        </li>
                      </ol>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
          <div className="my-4 flex flex-col overflow-hidden rounded-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <div onClick={() => setIsOpen(!open)}>
                    <Disclosure.Button className="flex w-full items-center bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        5. Medical Certificate
                      </p>
                      <div className="ml-auto flex items-center">
                        {/* <PlusIcon className={`${open ? 'rotate-45' : 'rotate-0'} p-1 transform transition duration-300 w-8 h-8 text-[#28314A]`}/> */}
                      </div>
                    </Disclosure.Button>
                  </div>
                  {/* <Transition
                                        show={open}
                                        enter="transition-all duration-300 ease-out"
                                        enterFrom="transform max-h-0"
                                        enterTo="transform max-h-screen"
                                        leave="transition-all duration-300 ease-out"
                                        leaveFrom="transform max-h-screen"
                                        leaveTo="transform max-h-0"
                                    >
                                        <Disclosure.Panel static as="ul" className="px-4 py-2 gap-2 bg-[#F2F2F2] text-sm text-gray-500">
                                            <p className='dmtims-text pb-1 text-[#28314A]'>Should be in operational condition for use for two full years of academic exchange.</p>
                                        </Disclosure.Panel>
                                    </Transition> */}
                </>
              )}
            </Disclosure>
          </div>
          <div className="my-4 flex flex-col overflow-hidden rounded-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <div onClick={() => setIsOpen(!open)}>
                    <Disclosure.Button className="flex w-full items-center bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        6. Affidavits
                      </p>
                      <div className="ml-auto flex items-center">
                        <PlusIcon
                          className={`${
                            open ? "rotate-45" : "rotate-0"
                          } h-8 w-8 transform p-1 text-[#28314A] transition duration-300`}
                        />
                      </div>
                    </Disclosure.Button>
                  </div>
                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="transform max-h-0"
                    enterTo="transform max-h-screen"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-screen"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <ul className="mx-10 list-disc">
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Anti ragging Affidavit- Student
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Anti ragging Affidavit Parent / Guardian
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Hindi Language Knowledge Affidavit
                        </li>
                        <li className="dmtims-text pb-1 text-[#28314A]">
                          Original Documents Submission Affidavit
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListofItems;
