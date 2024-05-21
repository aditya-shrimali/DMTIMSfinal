import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useRef, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/legacy/image";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
const parse = require("html-react-parser");

interface Props {
  title: string;
  skills: string;
  description: string;
  image: string;
  responsibilities: JSX.Element;
}

function CareerModal({
  title,
  image,
  skills,
  responsibilities,
  description,
}: Props) {
  let [isOpen, setIsOpen] = useState(false);

  let completeButtonRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const sendMessage = async (event: any) => {
    event.preventDefault(); // don't redirect the page

    const Swal = require("sweetalert2");

    Swal.fire({
      title: "Processing",
      allowOutsideClick: false,
    });
    Swal.showLoading();

    if (event.target.resume.files[0].size > 1048576) {
      Swal.fire({
        icon: "error",
        title: "File size too large!",
        text: "Please upload a file with a maximum size of 1MB",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      const resumeLink = await uploadBytes(
        ref(
          storage,
          "Application-Resumes/" + event.target.resume.files[0].name
        ),
        event.target.resume.files[0]
      ).then((snapshot) =>
        getDownloadURL(
          ref(
            storage,
            "application-resume/" + event.target.resume.files[0].name
          )
        )
      );

      const res = await fetch("/api/apply", {
        body: JSON.stringify({
          fullName: event.target.fullName.value,
          tel: event.target.tel.value,
          email: event.target.email.value,
          dob: event.target.dob.value,
          experience: event.target.experience.value,
          resume: resumeLink,
          role: title,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then((res) => res.json());

      console.log(res);

      Swal.fire({
        icon: "success",
        title: "Message sent!",
        text: "We will get back to you shortly.",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      event.target.reset();
      closeModal();
    }
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={openModal}
        className="my-6 select-none rounded-full bg-[#FFB800] py-4 text-lg font-semibold text-white transition duration-300 hover:shadow-lg active:scale-95"
      >
        Apply
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          initialFocus={completeButtonRef}
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-[rgb(0,0,0,0.3)]" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="mt-[132px] mb-8 inline-flex w-full max-w-2xl transform flex-col overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all sm:rounded-2xl md:flex-row">
                <div className="w-full p-4 md:p-8">
                  <XIcon
                    onClick={closeModal}
                    className="ml-auto h-6 w-6 cursor-pointer text-[#6C6C6C]"
                  />
                  <div className="flex items-end justify-between p-2">
                    <div className="flex flex-col">
                      <p className="text-sm font-bold tracking-wider text-[#3F3A6D]">
                        APPLY FOR
                      </p>
                      <p className="dmtims-subtitle pb-0 text-3xl text-[#3F3A6D]">
                        {title}
                      </p>
                    </div>
                    <div className="relative h-16 w-16 overflow-hidden rounded-full shadow-lg">
                      <Image
                        priority
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col p-2">
                    <p className="dmtims-text pb-1 font-bold text-[#3F3A6D]">
                      Job Description
                    </p>
                    <div className="dmtims-text">{parse(description)}</div>
                    <p className="dmtims-text pb-1 font-bold text-[#3F3A6D]">
                      Skills
                    </p>
                    <div className="dmtims-text">{skills}</div>
                    <p className="dmtims-text pb-1 font-bold text-[#3F3A6D]">
                      Responsibilities
                    </p>
                    <div className="dmtims-text">{responsibilities}</div>
                  </div>
                  <form onSubmit={sendMessage} className="flex flex-col">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-2 p-2 sm:grid-cols-2">
                      <div className="flex flex-grow flex-col">
                        <label
                          htmlFor="fullName"
                          className="dmtims-text pb-2 text-[#28314A]"
                        >
                          Full Name
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          autoComplete="name"
                          type="text"
                          required
                          className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                          placeholder="Jane Cooper"
                        />
                      </div>
                      <div className="flex flex-grow flex-col">
                        <label
                          htmlFor="tel"
                          className="dmtims-text pb-2 text-[#28314A]"
                        >
                          Contact Number
                        </label>
                        <input
                          id="tel"
                          name="tel"
                          autoComplete="tel"
                          type="tel"
                          required
                          className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="flex flex-grow flex-col p-2">
                      <label
                        htmlFor="email"
                        className="dmtims-text pb-2 text-[#28314A]"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        required
                        className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                        placeholder="michelle.rivera@example.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-2 p-2 sm:grid-cols-2">
                      <div className="flex flex-grow flex-col">
                        <label
                          htmlFor="dob"
                          className="dmtims-text pb-2 text-[#28314A]"
                        >
                          Date of Birth
                        </label>
                        <input
                          id="dob"
                          name="dob"
                          type="date"
                          required
                          className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                          placeholder="michelle.rivera@example.com"
                        />
                      </div>
                      <div className="flex flex-grow flex-col">
                        <label
                          htmlFor="experience"
                          className="dmtims-text pb-2 text-[#28314A]"
                        >
                          Years of Experience
                        </label>
                        <input
                          id="experience"
                          name="experience"
                          type="number"
                          required
                          className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                          min="0"
                          placeholder="Enter 0 if no experience"
                          max="20"
                        />
                      </div>
                    </div>
                    <div className="flex flex-grow flex-col">
                      <label
                        htmlFor="resume"
                        className="dmtims-text p-2 pb-2 text-[#28314A]"
                      >
                        Resume{" "}
                        <span className="text-xs italic">
                          (Max file size is 1MB)
                        </span>
                      </label>
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".doc, .docx,.pdf"
                        required
                        className="mx-2 flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                      />
                      <p className="px-2"></p>
                    </div>
                    <div className="flex flex-col">
                      <button
                        ref={completeButtonRef}
                        className="mx-2 mt-8 mb-4 transform rounded-lg border border-[#C4C4C4] bg-[#FFB800] px-4 py-3 font-bold text-white outline-none transition delay-100 hover:shadow-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default CareerModal;
