// import Image from "next/legacy/image";
// import { DownloadIcon } from "@heroicons/react/outline";

// function MandatroyDisclosurePDF() {
//   const disclosures = [
//     {
//       id: 1,
//       title: "Anti Ragging Committee 2023",
//       text: "Our committee for Anti Ragging Program 2023",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1116678754085912697/image.png",
//       link: "/files/Anti_Ragging_Committees_2023.docx",
//     },
//     {
//       id: 3,
//       title: "DMTIMS PGDM DTE Approval Letter",
//       text: "We have Approval of Directorate of Technical Education, Maharashtra State, India - for our PGDM program",
//       img: "https://cdn.discordapp.com/attachments/915203168391028806/937756461713477643/unknown.png",
//       link: "/files/DMTIMS_PGDM_DTE_Approval_Ltr.pdf",
//     },
//     {
//       id: 5,
//       title: "Internal Complaints Committee and WDC 2023",
//       text: "",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1116678941701316668/image.png",
//       link: "/files/Internal_Complaints_Committee_and_WDC_2023.docx",
//     },
//     {
//       id: 6,
//       title: "SC-ST Committee",
//       text: "",
//       img: "https://cdn.discordapp.com/attachments/929834261568167986/1116682532826656838/image.png",
//       link: "/files/SC_ST_Committee.docx",
//     },
//   ];

//   return (
//     <section className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl pt-8 lg:mt-8">
//           <h1 id="Core-Values" className="dmtims-title">
//             Mandatory Disclosure
//           </h1>
//         </div>
//       </div>
//       {disclosures.map(({ id, img, title, text, link }) => (
//         <div key={id} className="pb-12 last:pb-0">
//           <div className="relative mx-auto h-[250px] max-w-screen-2xl flex-grow bg-[#221D55] sm:h-[350px] lg:h-[550px] xl:h-[600px] 2xl:h-[700px]">
//             <Image
//               priority
//               src={img}
//               alt={title}
//               layout="fill"
//               objectFit="cover"
//               objectPosition={"top"}
//             />
//             <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)]" />
//           </div>
//           <div className="flex flex-col bg-[#534D89] px-4">
//             <div className="mx-auto flex w-full max-w-screen-2xl flex-col py-8 sm:flex-row lg:my-4">
//               <div>
//                 <h4 className="dmtims-title pb-2 text-white">{title}</h4>
//                 <p className="dmtims-text text-white">{text}</p>
//               </div>
//               <a
//                 href={link}
//                 target="_blank"
//                 className="z-10 my-auto mr-3 flex h-10 w-28 transform cursor-pointer items-center rounded-full bg-[#FFB800] py-1 pl-2 pr-3 shadow-lg transition duration-300 hover:scale-105 active:scale-95 sm:ml-auto sm:mr-4 sm:py-2 sm:pl-3 sm:pr-4 md:mr-6 md:w-32 lg:mr-12 lg:h-12 lg:w-40"
//               >
//                 <DownloadIcon className="mr-1 h-5 w-5 text-white lg:h-6 lg:w-6" />
//                 <p className="text-sm font-medium text-white md:px-1 lg:px-2 lg:text-lg">
//                   Download
//                 </p>
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

// export default MandatroyDisclosurePDF;








/**my code */
import Image from "next/legacy/image";
import { DownloadIcon } from "@heroicons/react/outline";
import antiRagging from '../../public/newImages/antiRagging.webp';
import internalComplaints from '../../public/newImages/internalComplaints.webp'
import scSt from '../../public/newImages/scSt.webp'
import dmtimsPgdm from '../../public/newImages/dmtimsPgdm.webp'


function MandatroyDisclosurePDF() {
  const disclosures = [
    {
      id: 1,
      // title: "Anti Ragging Committee 2023",
      title: "Anti Ragging Committee 2024",
      // text: "Our committee for Anti Ragging Program 2023",
      text: "Our committee for Anti Ragging Program 2024",
      // img: antiRagging,  //ye image hai nahi abhi
      img:antiRagging,
      link: "/files/Anti_Ragging_Committees_2023.docx",
    },
    {
      id: 3,
      title: "DMTIMS PGDM DTE Approval Letter",
      text: "We have Approval of Directorate of Technical Education, Maharashtra State, India - for our PGDM program",
      img:dmtimsPgdm,
      link: "/files/DMTIMS_PGDM_DTE_Approval_Ltr.pdf",
    },
    {
      id: 5,
      title: "Internal Complaints Committee and WDC 2023",
      text: "",
      img:internalComplaints,
      link: "/files/Internal_Complaints_Committee_and_WDC_2023.docx",
    },
    {
      id: 6,
      title: "SC-ST Committee",
      text: "",
      img:scSt,
      link: "/files/SC_ST_Committee.docx",
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl pt-8 lg:mt-8">
          <h1 id="Core-Values" className="dmtims-title">
            Mandatory Disclosure
          </h1>
        </div>
      </div>
      {disclosures.map(({ id, img, title, text, link }) => (
        <div key={id} className="pb-12 last:pb-0">
          <div className="relative mx-auto h-[250px] max-w-screen-2xl flex-grow bg-[#221D55] sm:h-[350px] lg:h-[550px] xl:h-[600px] 2xl:h-[700px]">
            <Image
              priority
              src={img}
              alt={title}
              layout="fill"
              objectFit="cover"
              objectPosition={"top"}
            />
            <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)]" />
          </div>
          <div className="flex flex-col bg-[#534D89] px-4">
            <div className="mx-auto flex w-full max-w-screen-2xl flex-col py-8 sm:flex-row lg:my-4">
              <div>
                <h4 className="dmtims-title pb-2 text-white">{title}</h4>
                <p className="dmtims-text text-white">{text}</p>
              </div>
              <a
                href={link}
                target="_blank"
                className="z-10 my-auto mr-3 flex h-10 w-28 transform cursor-pointer items-center rounded-full bg-[#FFB800] py-1 pl-2 pr-3 shadow-lg transition duration-300 hover:scale-105 active:scale-95 sm:ml-auto sm:mr-4 sm:py-2 sm:pl-3 sm:pr-4 md:mr-6 md:w-32 lg:mr-12 lg:h-12 lg:w-40"
              >
                <DownloadIcon className="mr-1 h-5 w-5 text-white lg:h-6 lg:w-6" />
                <p className="text-sm font-medium text-white md:px-1 lg:px-2 lg:text-lg">
                  Download
                </p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MandatroyDisclosurePDF;

