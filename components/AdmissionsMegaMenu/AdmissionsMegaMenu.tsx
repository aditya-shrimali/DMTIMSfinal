import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import ContactAdmissionDialog from "../ContactAdmissionDialog/ContactAdmissionDialog";

interface Props {
  setIsAdmissionsHovered: Dispatch<SetStateAction<boolean>>;
  isAdmissionsHovered: boolean;
}

function AdmissionsMegaMenu({
  isAdmissionsHovered,
  setIsAdmissionsHovered,
}: Props) {
  return (
    <div
      onMouseEnter={() => setIsAdmissionsHovered(true)}
      onMouseLeave={() => setIsAdmissionsHovered(false)}
      className={`absolute hidden w-full bg-white px-4 lg:block ${
        isAdmissionsHovered ? "max-h-[100vh]" : "max-h-0"
      } transform overflow-hidden shadow-md transition-all duration-300`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl py-8">
        <div className="grid flex-grow grid-cols-3 gap-4">
          <div className="flex flex-col">
            <div className="flex">
              <a className="mb-4 text-xl font-medium" target="_blank">
                <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                  <ContactAdmissionDialog text={"Application Form"} />
                </span>
              </a>
            </div>

            <div className="flex">
              <Link
                legacyBehavior
                href={"/files/DMTIMS_BROCHURE_2023_2025.pdf"}
              >
                <a className="mb-4 text-xl font-medium" target="_blank">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    2023 PGDM Brochure
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link
                legacyBehavior
                href={"/files/DMTIMS_BROCHURE_2022_2024.pdf"}
              >
                <a className="mb-4 text-xl font-medium" target="_blank">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    2022 PGDM Brochure
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link legacyBehavior href={"/admission#fee-slabs"}>
                <a className="mb-4 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Fee Slabs
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <Link legacyBehavior href={"/admission#payment-options"}>
                <a className="mb-4 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Payment Options
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link legacyBehavior href={"/admission#Documents"}>
                <a className="mb-4 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Documents
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link legacyBehavior href={"/admission#Admission-Process"}>
                <a className="mb-4 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    Process
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex">
              <Link legacyBehavior href={"/admission#FAQs"}>
                <a className="mb-4 text-xl font-medium">
                  <span className="link-underline link-underline-black text-[#28314A] hover:text-[#EE3768]">
                    FAQs
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionsMegaMenu;
