import Image from "next/legacy/image";
import SelectionBg from "./images/SelectionBg.webp";

const AdmissionSelectionProcess = () => {
  const criterias = [
    {
      id: 0,
      text: "A minimum 50% in graduation, which must be preferably completed by June 2023.",
    },
    {
      id: 1,
      text: "CAT, XAT, CMAT, GMAT, MAT, ATMA, State CET tests & NMAT by GMAC where applicable, and as per AICTE guidelines.",
    },
  ];

  const selectionProcesses = [
    {
      id: 0,
      text: "Once we receive the completed online form along with acknowledgement of the application fee payment, the selection committee shall process the application.",
    },
    {
      id: 1,
      text: "The candidates shall appear for the screening process which may include case analysis, group discussion, personal interview or a micro presentation, led by an expert panel.",
    },
    { id: 2, text: "The list of selected candidates is announced." },
    {
      id: 3,
      text: "Payment of the registration and full first year fees is to be done on or before the last date of admission.",
    },
  ];

  return (
    <section id="Admission-Process" className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-7 mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
          <h1 className="dmtims-title">Admission Process</h1>
          <div className="flex flex-col lg:flex-row-reverse">
            <div className="flex flex-col py-2 lg:py-0 lg:pl-16">
              <p className="dmtims-subheading pb-3 text-gray-700">
                DMTIMS follows a non-discriminatory policy to admit all such
                students, who have completed their bachelor’s degree in any
                discipline from an accredited institution in India or its
                equivalent.
              </p>
              <p className="dmtims-subtitle text-black">Eligibility criteria</p>
              <ol className="list-decimal px-6 pb-1">
                {criterias.map((item) => (
                  <li
                    key={item.id}
                    className="dmtims-subheading pb-2 text-[#28314A]"
                  >
                    {item.id + 1}- {item.text}
                  </li>
                ))}
              </ol>
              <p className="dmtims-subtitle text-black"> Admission process</p>
              <p>Aspirants can apply Online on Visit - www.dmtims.edu.in</p>
              <p className="dmtims-subtitle text-black">Selection process</p>
              <ol className="list-decimal px-6">
                {selectionProcesses.map((item) => (
                  <li
                    key={item.id}
                    className="dmtims-subheading pb-2 text-[#28314A]"
                  >
                    {item.id + 1}- {item.text}
                  </li>
                ))}
              </ol>
            </div>
            {/* <div className="flex flex-shrink-0 flex-col lg:w-1/2">
              <div className="relative mt-auto h-[350px] w-full sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]">
                <Image
                  priority
                  src={SelectionBg}
                  alt="SelectionBg"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSelectionProcess;
