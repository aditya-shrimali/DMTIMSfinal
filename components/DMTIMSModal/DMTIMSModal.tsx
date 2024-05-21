import { Dialog, Transition } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment, Ref, useEffect, useRef, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/legacy/image";
import ls from "localstorage-slim";
import rectangle from '../../public/newImages/rectangle1032.webp'

interface Props {
  open: boolean;
}

function DMTIMSModal({ open }: Props) {
  let [isOpen, setIsOpen] = useState(false);

  let completeButtonRef = useRef(null);

  const people = [
    { name: "PGDM Global Finance & Fintech" },
    { name: "PGDM Human Capital Management" },
    { name: "PGDM International Marketing" },
    { name: "PGDM Supply Chain Management" },
    { name: "PGDM International Business Management" },
  ];

  const [selected, setSelected] = useState({ name: "Select" });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    var ctaModal = ls.get("ctaModal");
    if (ctaModal !== "false") {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    if (open) {
      openModal();
    }
  }, [open]);

  const sendMessage = async (event: any) => {
    event.preventDefault(); // don't redirect the page

    const Swal = require("sweetalert2");

    Swal.fire({
      title: "Processing",
      allowOutsideClick: false,
    });
    Swal.showLoading();

    const res = await fetch("/api/register", {
      body: JSON.stringify({
        fullName: event.target.fullName.value,
        tel: event.target.tel.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        city: event.target.city.value,
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
    closeModal();
  };

  return (
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
            <div className="mt-[132px] mb-8 inline-flex w-full max-w-2xl transform flex-col overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all sm:rounded-2xl md:max-w-7xl md:flex-row">
              <div className="relative hidden h-auto w-1/2 md:block">
                <Image
                  priority
                  alt="Modal-Bg"
                  src={rectangle}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mx-auto max-w-2xl p-4 md:w-1/2 md:p-8">
                <XIcon
                  onClick={() => {
                    closeModal();
                    ls.set("ctaModal", "false", { ttl: 900 });
                  }}
                  className="ml-auto h-6 w-6 cursor-pointer text-[#6C6C6C]"
                />
                <p className="dmtims-title px-2 pb-4 font-condensed">
                  Register for free session with our expert Counsellors
                </p>
                <form onSubmit={sendMessage} className="flex flex-col">
                  <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 md:flex-col lg:flex-row lg:gap-0">
                    <div className="flex flex-grow flex-col">
                      <label htmlFor="fullName" className="p-2 text-[#28314A]">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        autoComplete="name"
                        type="text"
                        required
                        className="mx-2 flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                        placeholder="Jane Cooper"
                      />
                    </div>
                    <div className="flex flex-grow flex-col">
                      <label htmlFor="tel" className="p-2 text-[#28314A]">
                        Contact Number
                      </label>
                      <input
                        id="tel"
                        name="tel"
                        autoComplete="tel"
                        type="tel"
                        required
                        className="mx-2 flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="p-2 text-[#28314A]">Interested In</label>
                    <input
                      id="subject"
                      name="subject"
                      defaultValue={selected.name}
                      type="text"
                      className="hidden"
                    />
                    <Listbox value={selected} onChange={setSelected}>
                      <div className="relative mx-2">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-left">
                          <span className="block truncate text-[#4F4F4F]">
                            {selected.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <SelectorIcon
                              className="h-5 w-5 text-[#28314A]"
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
                          <Listbox.Options className="absolute z-10 my-2 w-full overflow-auto rounded-md border border-[#C4C4C4] bg-[#EEEEEE] py-2 text-base shadow-lg">
                            {people.map((person, personIdx) => (
                              <Listbox.Option
                                key={personIdx}
                                className={`relative mx-2 cursor-default select-none rounded-md py-2 px-2 transition duration-150 hover:bg-[#f2f2f2] ${
                                  person.name === selected.name
                                    ? "bg-gradient-to-r from-[#4C477A] via-[#3C3769]  to-[#2D2958] text-white"
                                    : "bg-[#EEEEEE] text-[#4F4F4F]"
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
                  <div className="flex flex-grow flex-col">
                    <label htmlFor="email" className="p-2 text-[#28314A]">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      autoComplete="email"
                      type="email"
                      required
                      className="mx-2 flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                      placeholder="michelle.rivera@example.com"
                    />
                  </div>
                  <div className="flex flex-grow flex-col">
                    <label htmlFor="city" className="p-2 text-[#28314A]">
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      className="mx-2 flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                      placeholder="Mumbai"
                    />
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
  );
}

export default DMTIMSModal;
