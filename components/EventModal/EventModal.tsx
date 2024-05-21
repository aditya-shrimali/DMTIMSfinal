import { Dialog, Transition } from "@headlessui/react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useRef, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import Image from "next/legacy/image";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import ls from "localstorage-slim";
const parse = require("html-react-parser");

interface Props {
  open: boolean;
}

const EventModal = ({ open }: Props) => {
  let [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [linkText, setLinkText] = useState("");

  let completeButtonRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    getDoc(doc(db, "CTA-Event", "BP6kuncAw1ZpFxqmTIBT")).then(
      (doc: DocumentData) => {
        setIsShown(doc.data().show);
        setTitle(doc.data().title);
        setDescription(doc.data().description);
        setImage(doc.data().image);
        setLink(doc.data().link);
        setLinkText(doc.data().linkText);

        var ctaModal = ls.get("ctaModal");
        if (ctaModal !== "false" && doc.data().show && open) {
          openModal();
        }
      }
    );
  }, [open]);

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
            <div className="my-8 inline-flex w-full max-w-2xl transform flex-col overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all sm:rounded-2xl md:flex-row lg:max-w-7xl">
              <div className="relative hidden w-1/2 lg:block">
                <Image
                  priority
                  src={image}
                  alt="Event-Modal-Bg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"left"}
                />
              </div>
              <div className="mx-auto max-w-2xl p-4 md:p-8 lg:w-1/2">
                <XIcon
                  onClick={() => {
                    closeModal();
                    ls.set("ctaModal", "false", { ttl: 900 });
                  }}
                  className="ml-auto h-6 w-6 cursor-pointer text-[#6C6C6C]"
                />
                <p className="dmtims-title px-2 pb-4 font-condensed">{title}</p>
                <div className="flex min-h-[400px] flex-col justify-between">
                  <div className="dmtims-text w-full px-2">
                    {parse(description)}
                  </div>
                  <a
                    href={link}
                    ref={completeButtonRef}
                    className="mx-2 my-4 transform rounded-lg border border-[#C4C4C4] bg-[#FFB800] px-4 py-3 text-center font-bold text-white outline-none transition delay-100 hover:shadow-lg"
                  >
                    {linkText}
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EventModal;
