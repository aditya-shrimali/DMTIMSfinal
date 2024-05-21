import Link from "next/link";
import { useState } from "react";
import ContactAdmissionDialog from "../ContactAdmissionDialog/ContactAdmissionDialog";

const Sidebar = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div
      className="fixed right-[-10rem] top-[44%] z-40 sm:right-[-10.3rem] xl:right-[-11.4rem]"
      style={{ filter: "drop-shadow(-2px 0px 16px rgba(0, 0, 0, 0.15))" }}
    >
      <div
        className="flex -rotate-90 items-center gap-3 rounded-t-lg px-4 py-1 text-white sm:px-6 sm:py-2"
        style={{
          background:
            "linear-gradient(120.88deg, #EE3768 -47.5%, #FFB800 142.05%)",
        }}
      >
        <a
          target="_blank"
          href="https://feebook.southindianbank.com/FeeBookUser/org?id=152"
          className="link-hover p-1 text-xs font-semibold xl:text-sm"
        >
          Fee Payment
        </a>
        <div className="h-6 w-[3px] rounded-full bg-white opacity-25" />
        <Link
          href="/admission-enquiry"
          className="link-hover p-1 text-xs font-semibold xl:text-sm"
        >
          Enquiry Form
        </Link>
        <div className="h-6 w-[3px] rounded-full bg-white opacity-25" />
        <div className="link-hover p-1 text-xs font-semibold xl:text-sm">
          <ContactAdmissionDialog text={"Application Form"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
