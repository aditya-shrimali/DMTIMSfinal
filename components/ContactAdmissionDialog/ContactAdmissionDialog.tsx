// import { Dialog, Transition } from "@headlessui/react";
// import { PhoneIcon, XIcon } from "@heroicons/react/outline";
// import Image from "next/legacy/image";
// import Link from "next/link";
// import React, { Fragment, useEffect, useRef, useState } from "react";

// interface Props {
//   text: string;
// }

// function ContactAdmissionDialog({ text }: Props) {
//   let [isOpen, setIsOpen] = useState(false);

//   let completeButtonRef = useRef(null);

//   function closeModal() {
//     setIsOpen(false);
//   }

//   function openModal() {
//     setIsOpen(true);
//   }

//   return (
//     <>
//       <button type="button" onClick={openModal}>
//         {text}
//       </button>
//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           initialFocus={completeButtonRef}
//           className="fixed inset-0 z-50 overflow-y-auto"
//           onClose={closeModal}
//         >
//           <div className="min-h-screen px-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-[rgb(0,0,0,0.3)]" />
//             </Transition.Child>

//             {/* This element is to trick the browser into centering the modal contents. */}
//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="mb-8 inline-flex w-full max-w-2xl transform flex-col overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all sm:rounded-2xl md:max-w-7xl md:flex-row">
//                 <div className="relative h-[250px] w-full md:h-[450px] md:w-1/2 lg:h-[550px] 2xl:h-[650px]">
//                   <Image
//                     priority
//                     alt="Modal-Bg"
//                     src={
//                       "https://cdn.discordapp.com/attachments/929834261568167986/969674111536222369/Rectangle_1032_2.png"
//                     }
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className="mx-auto max-w-2xl p-4 md:w-1/2 md:p-8">
//                   <XIcon
//                     onClick={closeModal}
//                     className="ml-auto h-6 w-6 cursor-pointer text-[#6C6C6C]"
//                   />
//                   <p className="dmtims-title px-2 pb-4 font-condensed">
//                     Contact Admission Office
//                   </p>
//                   <p className="dmtims-text px-2 font-bold text-[#3F3A6D]">
//                     Please contact admission office regarding the application
//                     form to apply for PGDM programs.
//                   </p>
//                   <p className="dmtims-text px-2">Contac Info</p>
//                   <div className="flex items-center p-2">
//                     <PhoneIcon className="mr-2 w-5" />
//                     <div className="flex-col">
//                       <div className="flex-col">
//                         <Link legacyBehavior href="tel:+912227753226">
//                           <a className="dmtims-text">+91 22 2775 3226</a>
//                         </Link>
//                         <a className=""> / </a>
//                         <Link legacyBehavior href="tel:+912227753227">
//                           <a className="dmtims-text"> 7 </a>
//                         </Link>
//                         <a className=""> / </a>
//                         <Link legacyBehavior href="tel:+912227753228">
//                           <a className="dmtims-text"> 8 </a>
//                         </Link>
//                       </div>
//                       <div className="flex-col">
//                         <Link legacyBehavior href="tel:+918657860716">
//                           <a className="dmtims-text">+91 86578 60716</a>
//                         </Link>
//                         <a className=""> / </a>
//                         <Link legacyBehavior href="tel:+918657860717">
//                           <a className="dmtims-text"> 17 </a>
//                         </Link>
//                         <a className=""> / </a>
//                         <Link legacyBehavior href="tel:+918657860718">
//                           <a className="dmtims-text"> 18 </a>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   );
// }

// export default ContactAdmissionDialog;
















/**my code */

import { Dialog, Transition } from "@headlessui/react";
import { PhoneIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import rectangle1032 from '../../public/newImages/rectangle1032.webp'

interface Props {
  text: string;
}

function ContactAdmissionDialog({ text }: Props) {
  let [isOpen, setIsOpen] = useState(false);

  let completeButtonRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type="button" onClick={openModal}>
        {text}
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
              <div className="mb-8 inline-flex w-full max-w-2xl transform flex-col overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all sm:rounded-2xl md:max-w-7xl md:flex-row">
                <div className="relative h-[250px] w-full md:h-[450px] md:w-1/2 lg:h-[550px] 2xl:h-[650px]">
                  <Image
                    priority
                    alt="Modal-Bg"
                    src={rectangle1032}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mx-auto max-w-2xl p-4 md:w-1/2 md:p-8">
                  <XIcon
                    onClick={closeModal}
                    className="ml-auto h-6 w-6 cursor-pointer text-[#6C6C6C]"
                  />
                  <p className="dmtims-title px-2 pb-4 font-condensed">
                    Contact Admission Office
                  </p>
                  <p className="dmtims-text px-2 font-bold text-[#3F3A6D]">
                    Please contact admission office regarding the application
                    form to apply for PGDM programs.
                  </p>
                  <p className="dmtims-text px-2">Contac Info</p>
                  <div className="flex items-center p-2">
                    <PhoneIcon className="mr-2 w-5" />
                    <div className="flex-col">
                      <div className="flex-col">
                        <Link legacyBehavior href="tel:+912227753226">
                          <a className="dmtims-text">+91 22 2775 3226</a>
                        </Link>
                        <a className=""> / </a>
                        <Link legacyBehavior href="tel:+912227753227">
                          <a className="dmtims-text"> 7 </a>
                        </Link>
                        <a className=""> / </a>
                        <Link legacyBehavior href="tel:+912227753228">
                          <a className="dmtims-text"> 8 </a>
                        </Link>
                      </div>
                      <div className="flex-col">
                        <Link legacyBehavior href="tel:+918657860716">
                          <a className="dmtims-text">+91 86578 60716</a>
                        </Link>
                        <a className=""> / </a>
                        <Link legacyBehavior href="tel:+918657860717">
                          <a className="dmtims-text"> 17 </a>
                        </Link>
                        <a className=""> / </a>
                        <Link legacyBehavior href="tel:+918657860718">
                          <a className="dmtims-text"> 18 </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ContactAdmissionDialog;




