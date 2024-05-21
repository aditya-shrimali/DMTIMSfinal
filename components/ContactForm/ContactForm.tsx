import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FormEventHandler, Fragment, useEffect, useRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Swal from "sweetalert2";

const ContactForm = () => {
  const people = [
    { name: "PGDM Global Finance & Fintech" },
    { name: "PGDM Human Capital Management" },
    { name: "PGDM International Marketing" },
    { name: "PGDM Supply Chain Management" },
    { name: "PGDM International Business Management" },
  ];

  const [selected, setSelected] = useState({ name: "Select" });

  const el = useRef(null);
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      q("h4"),
      {
        y: 118,
        skewY: 7,
      },
      {
        y: 0,
        ease: "power4.out",
        duration: 1.8,
        skewY: 0,
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: q("h4"),
        },
      }
    );

    gsap.fromTo(
      q("p"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.3,
        duration: 1,
        scrollTrigger: {
          trigger: q("p"),
        },
      }
    );
  }, []);

  const sendMessage = async (event: any) => {
    event.preventDefault(); // don't redirect the page

    const Swal = require("sweetalert2");

    Swal.fire({
      title: "Processing",
      allowOutsideClick: false,
    });
    Swal.showLoading();

    const res = await fetch("/api/message", {
      body: JSON.stringify({
        fullName: event.target.fullName.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    Swal.fire({
      icon: "success",
      title: "Message sent!",
      text: "We will get back to you shortly.",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });

    setSelected({ name: "Select" });

    event.target.reset();
  };

  return (
    <section
      id="contact_us"
      className="relative overflow-hidden bg-gradient-to-r from-[#4C477A]  via-[#3C3769] to-[#2D2958]"
    >
      <div className="flex flex-col lg:flex-row">
        <div
          ref={el}
          className="z-10 flex h-[300px] items-center px-4 sm:h-[350px] lg:h-auto lg:w-1/2"
        >
          <div className="md:mx-auto">
            <div className="relative h-[3.95rem] overflow-hidden md:h-[4.7rem] xl:h-[6.1rem] 2xl:h-[8.2rem]">
              <h4 className="font-condensed text-6xl font-semibold text-white md:text-center md:text-7xl lg:text-left xl:text-8xl 2xl:text-9xl">
                Take the
              </h4>
            </div>
            <div className="relative mb-5 h-[3.95rem] overflow-hidden md:h-[4.7rem] xl:h-[6.1rem] 2xl:h-[8.2rem]">
              <h4 className="font-condensed text-6xl font-semibold text-white md:text-center md:text-7xl lg:text-left xl:text-8xl 2xl:text-9xl">
                <u className="text-[#FFB800]">
                  <em className="text-white">next</em>
                </u>{" "}
                step
              </h4>
            </div>
            <p className="max-w-lg pb-5 font-normal text-white md:pb-8 md:text-center lg:text-left lg:text-lg">
              Connect with our counsellors for assistance and understanding the
              right way forward for you!
            </p>
          </div>
        </div>
        <div className="z-10 mx-auto flex w-full items-center px-2 lg:w-auto">
          <form
            onSubmit={sendMessage}
            className="mx-auto flex w-full flex-col gap-2 pb-8 md:max-w-2xl lg:w-auto lg:py-16"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 lg:flex-row lg:gap-0">
              <div className="flex flex-grow flex-col">
                <label htmlFor="fullName" className="p-2 text-[#BDBDBD]">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  type="text"
                  required
                  className="mx-2 flex-grow rounded-md px-4 py-3 text-[#4F4F4F] outline-none xl:w-64"
                  placeholder="Jane Cooper"
                />
              </div>
              <div className="flex flex-grow flex-col">
                <label htmlFor="email" className="p-2 text-[#BDBDBD]">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  required
                  className="mx-2 flex-grow rounded-md px-4 py-3 text-[#4F4F4F] outline-none xl:w-64"
                  placeholder="michelle.rivera@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="p-2 text-[#BDBDBD]">Interested In</label>
              <input
                id="subject"
                name="subject"
                defaultValue={selected.name}
                type="text"
                className="hidden"
              />
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mx-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white px-4 py-3 text-left shadow-md">
                    <span className="block truncate text-[#4F4F4F]">
                      {selected.name}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <SelectorIcon
                        className="h-5 w-5 text-[#BDBDBD]"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 my-2 w-full overflow-auto rounded-md bg-white py-2 text-base shadow-lg">
                      {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={`relative mx-2 cursor-default select-none rounded-md py-2 px-2 transition duration-150 hover:bg-[#f2f2f2] ${
                            person.name === selected.name
                              ? "bg-gradient-to-r from-[#4C477A] via-[#3C3769]  to-[#2D2958] text-white"
                              : "bg-white text-[#4F4F4F]"
                          }`}
                          value={person}
                        >
                          <span className="">{person.name}</span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="p-2 text-[#BDBDBD]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mx-2 flex-grow rounded-md px-4 py-3 text-[#4F4F4F] outline-none"
                placeholder="Type here..."
              />
            </div>
            <div className="flex flex-col">
              <button className="mx-2 my-4 transform rounded-lg bg-[#FFB800] px-4 py-3 font-bold text-white outline-none transition delay-100 hover:shadow-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute top-0 h-[400px] w-[400px] rounded-br-full bg-gradient-to-tl from-[#4C477A] via-[#4C477A] to-[#2D2958] sm:h-[600px] sm:w-[600px] lg:bottom-0 lg:top-auto lg:h-[580px] lg:w-[580px] lg:rounded-tr-full  lg:rounded-br-none" />
    </section>
  );
};

export default ContactForm;
