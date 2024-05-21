import Image from "next/legacy/image";
import FeePaymentSchedule from "./images/FeePaymentSchedule.png";
import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import feeScreenshotDmtims from '../../public/images/feeScreenshotDmtims.png'

const FAQs = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      ScrollTrigger.refresh();
    }, 300);
  }, [isOpen]);

  return (
    <section id="FAQs" className="relative bg-[#4C477A]">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
          <h2 className="dmtims-subtitle text-[#F2F2F2]">FAQ’s</h2>
          <div className="my-4 flex flex-col overflow-hidden rounded-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <div onClick={() => setIsOpen(!open)}>
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        1. What is the minimum educational qualification
                        required to get into the DMTIMS DUAL DEGREE program?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Graduation (minimum three-year duration) in any
                        discipline from a recognized University with a mandatory
                        minimum of 50 per cent marks. The students who are
                        appearing for final year examination / awaiting final
                        year results can also apply.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        2. What are the various exams considered?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        We consider marks in any of the following all India
                        examinations. CAT/ CMAT / ATMA / MAT / MH-CET / XAT/
                        GMAT
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        3. What is the minimum cut off scores in each of the
                        tests that are considered?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        DMITMS believes in the overall personality while
                        selecting students considering their past academic
                        records, work experience, if any, among other aspects
                        like the student performance in the DMTIMS screening
                        process of aptitude tests, group discussions, case
                        analysis, presentation, personal interview etc. There is
                        no prescribed minimum cut off score for any test.
                        However, due weightage is given to the test scores. For
                        this year’s admission 20 percent weightage will be given
                        to the test scores.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        4. Can I apply for DUAL DEGREE program if I have not appeared
                        for any of the above mentioned entrance tests?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        No.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        5. What scores do I submit if I have given all the
                        exams?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        You can submit all the scores whatever you have appeared
                        at or wherever you have scored highest.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        6. Is the DUAL DEGREE Course at DMTIMS an AICTE approved
                        course?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Yes: The DUAL DEGREE Course at DMTIMS is approved by AICTE &
                        DTE, Maharashtra, Ministry of HRD, Government of India.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        7. What is the intake of students in DMTIMS DUAL DEGREE
                        program?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Post Graduate Diploma in Management (PGDM): 120 seats
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        {/* 8. What is the PGDM admission application form fee for
                        2023-25? */}
                        8. What is the DUAL DEGREE admission application form fee for
                        2024-2026?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        {/* For our AICTE approved DMTIMS PGDM program, the
                        Application Fee is Rs. 1000/- for academic year 2023-25
                        (Available at DMTIMS office. Form can also be downloaded
                        from www.dmtims.edu.in. Payment details are stated below
                        to confirm application status) */}
                        For our AICTE approved DMTIMS DUAL DEGREE program, the
                        Application Fee is Rs. 1000/- for academic year 2024-2026
                        (Available at DMTIMS office. Form can also be downloaded
                        from www.dmtims.edu.in. Payment details are stated below
                        to confirm application status)
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        9. How do I pay for the Admission Form?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Mode of Payment for DUAL DEGREE admission application form for
                        2023-25 is online as given below
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        10. What is the DUAL DEGREE Fee Payment Schedule?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        {/* The fee payment schedule for the PGDM Batch 2023-25 is
                        as follows:- */}
                        The fee payment schedule for the DUAL DEGREE Batch 2024-2026 is
                        as follows:-
                      </p>
                      <div className="relative my-6 h-[150px] sm:h-[200px] lg:h-[250px] xl:h-[300px]">
                        {/* <Image
                          priority
                          src={FeePaymentSchedule}
                          alt="FeePaymentSchedule"
                          layout="fill"
                          objectFit="contain"
                          objectPosition="left"
                        /> */}
                        {/* new update image */}
                        <Image
                          priority
                          src={feeScreenshotDmtims}
                          alt="FeePaymentSchedule"
                          layout="fill"
                          objectFit="contain"
                          objectPosition="left"
                        />
                      </div>
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Note: Exam fees of Rs.1000/- per trimester has to be
                        paid as per payment date released from Exam Office.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        11. What are the different options to pay fees?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        Below mentioned are two options to pay DMTIMS DUAL DEGREE Fees.
                      </p>
                      <p className="dmtims-text mx-6 pb-0 font-semibold text-[#4C477A]">
                        Option 1:
                      </p>
                      <p className="dmtims-text mx-6 pb-0 text-[#28314A]">
                        Online fee payment fee link:
                      </p>
                      <a className="dmtims-text mx-6 pb-1 text-[#FFB800]">
                        <em>
                          https://feebook.southindianbank.com/FeeBookUser/org?id=152
                        </em>
                      </a>
                      <p className="dmtims-text mx-6 pb-4 text-xs text-[#28314A]">
                        (This fee payment link available on our Institute
                        Website also){" "}
                      </p>
                      <p className="dmtims-text mx-6 pb-0 font-semibold text-[#4C477A]">
                        Option 2:
                      </p>
                      <p className="dmtims-text mx-6 pb-0 text-[#28314A]">
                        Direct NEFT payment using the above mentioned Bank
                        Account details{" "}
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        12. What are the selection criteria for admission to
                        DMTIMS DUAL DEGREE program?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 text-[#28314A]">
                        The below mentioned process determines the selection to
                        DMTIMS DUAL DEGREE 2023-25 program.
                      </p>
                      <p className="dmtims-text mx-6 text-[#28314A]">
                        1. Competitive Exam Test scores
                      </p>
                      <p className="dmtims-text mx-6 text-[#28314A]">
                        2. Either or a combination of a few of the following
                        assessments, will comprise the DUAL DEGREE program admission
                        screening process.
                      </p>
                      <p className="dmtims-text mx-6 text-[#28314A]">
                        a) Aptitude Test b) Group Discussion (GD) c) Caselet
                        Analysis d) Presentation f) Personal interview (PI).
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        13. What are the aspects covered in the DMTIMS Personal
                        Interview?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 text-[#28314A]">
                        The Personal interview assesses the following aspects in
                        the students during the interview.
                      </p>
                      <p className="dmtims-text mx-6 text-[#28314A]">
                        a) Technical Assessment: These questions test your basic
                        knowledge and look into your overall understanding of
                        management concepts.
                      </p>
                      <p className="dmtims-text mx-6 text-[#28314A]">
                        b) Competency based Assessment: Competency or behavioral
                        questions are one of the best tools to identify whether
                        a candidate's characteristics and motivations match the
                        behaviors needed for a management admission. These helps
                        identify the behavioral traits and characteristics that
                        DMTIMS believes, are essential for success as future
                        management professionals.
                      </p>
                      <p className="dmtims-text mx-6 text-[#28314A]">
                        c) Past academic records: Academic & Co-Curricular
                        performance
                      </p>
                      <p className="dmtims-text mx-6 text-[#28314A]">
                        d) Work experience, if any.
                      </p>
                      <p className="dmtims-text mx-6 text-[#28314A]">
                        Based on weighted average of the above parameters, the
                        merit listing will be done and the admission status
                        announced to the student. Below chart shows the steps of
                        admission process of DMTIMS.
                      </p>
                      <div className="relative my-6 h-[150px] sm:h-[200px] lg:h-[250px] xl:h-[300px]">
                        {/* <Image
                          priority
                          alt="Personal Interview"
                          src={
                            "https://cdn.discordapp.com/attachments/929834261568167986/946731073558175764/image_195.webp"
                          }
                          layout="fill"
                          objectFit="contain"
                          objectPosition="left"
                        /> */}
                      </div>
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        14. What weightage do we give for various parameters in
                        selection process?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Weightages vary from year to year. Apart from GD/Case
                        Analysis and PI, weightage is also given to past
                        academic credentials and work experience. Test scores
                        also carry a weightage
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        15. What is the next step after the results of the
                        admission screening process is announced?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        The Candidate will be issued an Admission Confirmation
                        Offer letter, from the Admissions office.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        16. What is the validity of the DMTIMS Admission
                        Confirmation Offer letter?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        The validity of the DMTIMS Admission letter is valid
                        only for 10 days from its date of issue.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        17. What is the next step after the Admission Offer
                        letter is issued?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        The student candidate is expected to pay the
                        registration fees of Rs. 50, 000/- to the Institute
                        office. (Fee Payment details is already mentioned in
                        this document in Point No. 10)
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        18. What are the different specializations offered by
                        DMTIMS?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        The institute offers five specializations of
                        International Business Management, Global Finance &
                        Fintech, International Marketing, Human Capital
                        Management & Global Supply Chain Management & Operations
                        in the DUAL DEGREE program.{" "}
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        19. What is the fee structure for DMTIMS DUAL DEGREE program?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        The fee structure for the DUAL DEGREE course for the academic
                        year 2023- 25 is mentioned separately on the DMTIMS
                        Website www.dmtims.edu.in and the DUAL DEGREE Brochure.{" "}
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        20. Will I get refund of fees if I cancel my admission?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Yes, As per AICTE rules.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        21. Do I have to abide by the fee structure and dates of
                        fee submission?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Yes. Complete fees have to be paid as per DMTIMS fee
                        structure rules and regulations declared for academic
                        year 2023-25. No separate requests/favors/part payments
                        can be availed from the Institute.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        22. Are there any management seats?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        No. All seats are purely on merit. The institute does
                        not charge any Capitation Fees, whatsoever.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        23. Where would the admission process be conducted?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        The admission process would be conducted in various
                        states of Maharashtra, Gujarat, Madhya Pradesh and West
                        Bengal including cities of Siliguri, Kolkata, Indore,
                        Ajmer, Kota, Bhilai, Mumbai, Jaipur, Surat, Ahmedabad,
                        Nagpur, Jabalpur etc. The detail information is
                        available on our Institute Website. (The list of centres
                        is not final subject to changes)
                      </p>
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Note: Any of the outstation centers can be changed at
                        the discretion of the institute admission office
                        depending on response. Other new centers may also be
                        added depending on response from the candidates. The
                        venue of the process at the outstation campus would be
                        uploaded in due course.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        24. Does DMTIMS provide hostel facility?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Yes. The hostel facility is provided for both boys and
                        girls separately.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        25. What are the generic hostel facilities provided at
                        DMTIMS?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        The DMTIMS hostel facilities include, provision of clean
                        drinking water, hot and cold water supply, 24/7 wifi
                        facility, 24/7 professional security guards, CCTV
                        cameras for increased vigilance, furnished rooms
                        including cupboards, study tables, beds, mattress,
                        curtains, washing machines etc. at very nominal rates.
                        There are many facilities of medical shops, hospitals,
                        restaurants, food joints and provision stores located
                        just opposite the road of the hostel.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        26. Is hostel stay mandatory for all students?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        No. Hostel rooms are limited and is allotted on first
                        come first serve basis.{" "}
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        27. Does DMTIMS provide pick and drop facility?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        No. Students have to arrange their own mode of transport
                        to the Institute. The Institute is located within 1/2
                        kms. of Sanpada, Juinagar and Vashi railway stations and
                        bus stands. Auto stands and taxi stands are located
                        opposite the main gate of the campus.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        28. How are placements at DMTIMS?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        The placement is quite decent in its group of
                        institutes, since its inception. The institute has very
                        good relationship with a large number of corporate and
                        alumni from various sectors. There is a 75% rise in new
                        companies every year.
                      </p>
                      <p className="dmtims-text mx-6 pb-2 text-[#28314A]">
                        Latest Group Placement Statistics are as follows:
                      </p>
                      <div className="grid md:grid-cols-3">
                        <div className="relative my-6 h-[150px] sm:h-[200px] lg:h-[250px] xl:h-[300px]">
                          <Image
                            priority
                            alt="Placements1"
                            src={
                              "https://cdn.discordapp.com/attachments/929834261568167986/1109365515857702962/Sector_Wise_Overview_Chart.webp"
                            }
                            layout="fill"
                            objectFit="contain"
                            objectPosition="left"
                          />
                        </div>
                        <div className="relative my-6 h-[150px] sm:h-[200px] lg:h-[250px] xl:h-[300px]">
                          <Image
                            priority
                            alt="Placements2"
                            src={
                              "https://cdn.discordapp.com/attachments/929834261568167986/1109367957827625020/Group_237659.webp"
                            }
                            layout="fill"
                            objectFit="contain"
                            objectPosition="left"
                          />
                        </div>
                      </div>
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        The ROI for our Group Institutes is quite competitive,
                        if not better, than many of the comparable institutes
                        considering the fees, facilities, knowledge
                        accumulation, corporate exposure, hostel facility and
                        initial placement salary. With almost ten plus free
                        certifications in soft skills and technical skills and a
                        national and international industrial tour, our students
                        get an excellent edge over other students from Mumbai
                        city in their academic and leadership acumen due to this
                        exposure. For other details including companies coming
                        to the campus, please refer the institution website,
                        www.dmtims.edu. Or visit our Placement office
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        29. Can I know the names of some select recruiters at
                        DMTIMS?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Yes. DMTIMS has had an excellent track record of 100%
                        placements each year. Every student gets an average of
                        6/7 placement offers each year. Apart from some of the
                        names given below, the companies range from Startups to
                        Brands, across all sectors. You may refer our brochure,
                        website or our Placements office for more details.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        30. Does DMTIMS provide both domestic and international
                        placements?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Yes. DMTIMS provide both domestic and international
                        placement opportunities
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        31. Where will I get the DMTIMS application form for
                        DUAL DEGREE program?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        At all the below stated addresses.
                      </p>
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        1. Institute office at DMTIMS Campus, Plot No. 2, Sector
                        9, Sanpada, Navi Mumbai - 400705 on all working days
                        (10.00 am to 4.00pm)
                      </p>
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        2. Website (www.dmtims.edu.in) from where they can be
                        downloaded and submitted to the institute personally or
                        by post.
                      </p>
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        3. At select Coaching Centers (details available on
                        www.dmtims.edu or our Admissions office)
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        32. What is the last date for sale and submission of
                        Application Forms?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Last date of sale of forms: 31st March, 2023; last date
                        of submission of forms: 30th April, 2023
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        33. What is the date of declaration of admission
                        results?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Dates are declared within one week of student admission
                        screening process.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        34. What is the date of commencement of classes for DUAL DEGREE
                        programs?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        Mid June/July-2023 (Details will be made available
                        later)
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        35. What term does the DUAL DEGREE Program follow?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        The DUAL DEGREE program follows the trimester pattern. The
                        first year has three trimesters of general management
                        subjects and general management certifications. The
                        final year has three trimesters of specialization
                        subjects and specialization based certifications. The
                        fourth trimester is on internship, the fifth trimester
                        is classroom interactions and the sixth trimester is
                        project based. Hence, the first year consists of getting
                        an overview of all general management concepts and
                        theories, while the final year consists of real time,
                        live experiences of the corporate industry.
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        36. What are the Institute contact details where I can
                        reach for any information/ assistance?
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-0 text-[#28314A]">
                        Institute Address & Contact Details:
                      </p>
                      <p className="dmtims-text mx-6 pb-0 text-[#28314A]">
                        • DMTIMS Campus, Plot No. 2, Sector 9, Sanpada, Navi
                        Mumbai – 400705
                      </p>
                      <p className="dmtims-text mx-6 pb-0 text-[#28314A]">
                        Please Call for:
                      </p>
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        DMTIMS DUAL DEGREE BATCH 2023-25 Admissions
                      </p>
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        Office Landline Nos.: +91 22 – 2775 3226 /7 /8
                      </p>
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        Mobile Nos.: +91 8657860716 / 17 / 18
                      </p>
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        Email For Admissions: admissions@dmtims.edu.in
                      </p>
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        For General Inquiries: connect@dmtims.edu.in
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
                    <Disclosure.Button className="flex w-full bg-[#F2F2F2] px-4 py-2">
                      <p className="dmtims-subheading pb-0 text-left text-[#28314A]">
                        {/* 37. Any faculty member I can get in touch with for my
                        PGDM 2023-25 admission concerns. */}
                        37. Any faculty member I can get in touch with for my
                        DUAL DEGREE 2024-2026 admission concerns.
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
                    enterTo="transform max-h-[100vh]"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="transform max-h-[100vh]"
                    leaveTo="transform max-h-0"
                  >
                    <Disclosure.Panel
                      static
                      as="ul"
                      className="gap-2 bg-[#F2F2F2] px-4 py-2 text-sm text-gray-500"
                    >
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        Yes. The faculty contact details are given below:-
                      </p>
                      <p className="dmtims-text mx-6 pb-4 text-[#28314A]">
                        a. Dr. Susen Varghese - +91 86578 60718/17/16 | +91 22
                        2775 3228/7/6
                      </p>
                      <p className="dmtims-text mx-6 pb-1 text-[#28314A]">
                        b. General Information: In case you have major issue,
                        please contact the Director of the institute Dr. Susen
                        Varghese at director@dmtims.edu.in
                      </p>
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

export default FAQs;
