// import Image from "next/legacy/image";
// import Link from "next/link";
// import Bg from "./images/PaymentBg.svg";
// import { ArrowCircleRightIcon } from "@heroicons/react/outline";
// import ContactAdmissionDialog from "../ContactAdmissionDialog/ContactAdmissionDialog";

// const PaymentDetails = () => {
//   const notes = [
//     {
//       id: 0,
//       text: "Students are requested to adhere to Fee Payment timelines at all costs. These dates are final and no requests for extension of fee payment dates will be entertained.",
//     },
//     {
//       id: 1,
//       text: "Exam fees of Rs. 1000/- per trimester has to be paid as per payment date released from Exam Office.",
//     },
//     {
//       id: 2,
//       text: "Payment of fees should be done on online mode only as per bank details provided below.",
//     },
//     {
//       id: 3,
//       text: "In case of nonconformance to this schedule, a fine will be levied of Rs. 100 for first 10 days and shall be calculated in subsequent frequency of 10 days.",
//     },
//   ];

//   const NEFTDetails = [
//     { id: 0, title: "Account Name", desc: "DMTIMS" },
//     { id: 1, title: "Account No.", desc: "0409053000008325" },
//     { id: 2, title: "Bank Name", desc: "South Indian Bank" },
//     { id: 3, title: "Branch", desc: "Vashi - Navi Mumbai" },
//     { id: 4, title: "IFSC Code", desc: "SIBL0000409" },
//   ];

//   return (
//     <section id="payment-options" className="relative bg-white">
//       <div className="flex flex-col px-4">
//         <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
//             <div className="flex flex-col py-4">
//               <h2 className="dmtims-subtitle text-[#EE3768]">
//                 DMTIMS PGDM Fee Payment Details - Batch 2023 -25
//               </h2>
//               {/* <div className="relative flex bg-[#4C477A] rounded-xl py-12 lg:py-16 px-4 mb-6 items-center overflow-hidden">
//                                 <div className='absolute bottom-0 right-1/4 w-32'>
//                                     <div className='relative h-20 w-full'>
//                                         <Image className='opacity-30' src={Bg} layout='fill' objectFit='contain' />
//                                     </div>
//                                 </div>
//                                 <h4 className='z-10 text-xl sm:text-2xl xl:text-3xl font-semibold text-white leading-tight lg:leading-snug'>Make Online Payment</h4>
//                                 <a className='flex z-10 items-center bg-[#FFB800] py-1 px-6 rounded-full ml-auto cursor-pointer hover:shadow-md active:scale-95 transition transform duration-300'>
//                                     <p className='text-lg font-medium text-white px-4'>Pay</p>
//                                 </a>
//                             </div> */}
//               <div className="relative flex flex-col rounded-xl border border-[#BDBDBD] bg-[#F2F2F2] p-4">
//                 {/* <p className='dmtims-text text-[#4C477A] font-normal'>Alternate Payment Option:</p> */}
//                 <p className="dmtims-text font-normal text-[#28314A]">
//                   Direct <span className="font-bold">NEFT payment</span> Using
//                   the below Bank Account Details
//                 </p>
//                 {NEFTDetails.map((item) => (
//                   <div key={item.id} className="grid w-80 grid-cols-2">
//                     <p className="dmtims-text flex pb-1 font-normal text-[#28314A]">
//                       {item.title} <span className="ml-auto pr-6">:</span>{" "}
//                     </p>
//                     <p className="dmtims-text pb-1 font-bold text-[#28314A]">
//                       {item.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex flex-col justify-between py-4">
//               <p className="dmtims-subtitle text-[#EE3768]">Note:</p>
//               <ol className="list-decimal px-5">
//                 {notes.map((item) => (
//                   <li key={item.id} className="dmtims-text text-[#28314A]">
//                     {item.text}
//                   </li>
//                 ))}
//               </ol>
//               <div className="relative flex flex-col rounded-xl border border-[#BDBDBD] bg-[#F2F2F2] p-6">
//                 <h4 className="z-10 py-3 text-xl font-semibold leading-tight text-[#28314A] sm:text-2xl lg:leading-snug xl:text-3xl">
//                   Apply for admissions 2023-25
//                 </h4>
//                 <p className="dmtims-text flex pb-1 font-normal text-[#28314A]">
//                   Start your DMTIMS journey with Admission Process.
//                 </p>
//               <button className="group my-2 ml-auto flex select-none items-center rounded-full bg-[#FFB800] py-2 pl-4 font-semibold text-white transition duration-300 hover:shadow-md active:scale-95">
//                  <ContactAdmissionDialog text={"Application Form"} />
//                  <ArrowCircleRightIcon className="mx-2 w-8 transform transition duration-300 group-hover:rotate-45 group-hover:transform" />
//                </button> 
//                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PaymentDetails;













/**my code */
import Image from "next/legacy/image";
import Link from "next/link";
import Bg from "./images/PaymentBg.svg";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import ContactAdmissionDialog from "../ContactAdmissionDialog/ContactAdmissionDialog";

const PaymentDetails = () => {
  const notes = [
    {
      id: 0,
      text: "Students are requested to adhere to Fee Payment timelines at all costs. These dates are final and no requests for extension of fee payment dates will be entertained.",
    },
    {
      id: 1,
      text: "Exam fees of Rs. 1000/- per trimester has to be paid as per payment date released from Exam Office.",
    },
    {
      id: 2,
      text: "Payment of fees should be done on online mode only as per bank details provided below.",
    },
    {
      id: 3,
      text: "In case of nonconformance to this schedule, a fine will be levied of Rs. 100 for first 10 days and shall be calculated in subsequent frequency of 10 days.",
    },
  ];

  const NEFTDetails = [
    { id: 0, title: "Account Name", desc: "DMTIMS" },
    { id: 1, title: "Account No.", desc: "0409053000008325" },
    { id: 2, title: "Bank Name", desc: "South Indian Bank" },
    { id: 3, title: "Branch", desc: "Vashi - Navi Mumbai" },
    { id: 4, title: "IFSC Code", desc: "SIBL0000409" },
  ];

  return (
    <section id="payment-options" className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
            <div className="flex flex-col py-4">
              <h2 className="dmtims-subtitle text-[#EE3768]">
                DMTIMS PGDM Fee Payment Details - Batch 2023 -25
              </h2>
              {/* <div className="relative flex bg-[#4C477A] rounded-xl py-12 lg:py-16 px-4 mb-6 items-center overflow-hidden">
                                <div className='absolute bottom-0 right-1/4 w-32'>
                                    <div className='relative h-20 w-full'>
                                        <Image className='opacity-30' src={Bg} layout='fill' objectFit='contain' />
                                    </div>
                                </div>
                                <h4 className='z-10 text-xl sm:text-2xl xl:text-3xl font-semibold text-white leading-tight lg:leading-snug'>Make Online Payment</h4>
                                <a className='flex z-10 items-center bg-[#FFB800] py-1 px-6 rounded-full ml-auto cursor-pointer hover:shadow-md active:scale-95 transition transform duration-300'>
                                    <p className='text-lg font-medium text-white px-4'>Pay</p>
                                </a>
                            </div> */}
              <div className="relative flex flex-col rounded-xl border border-[#BDBDBD] bg-[#F2F2F2] p-4">
                {/* <p className='dmtims-text text-[#4C477A] font-normal'>Alternate Payment Option:</p> */}
                <p className="dmtims-text font-normal text-[#28314A]">
                  Direct <span className="font-bold">NEFT payment</span> Using
                  the below Bank Account Details
                </p>
                {NEFTDetails.map((item) => (
                  <div key={item.id} className="grid w-80 grid-cols-2">
                    <p className="dmtims-text flex pb-1 font-normal text-[#28314A]">
                      {item.title} <span className="ml-auto pr-6">:</span>{" "}
                    </p>
                    <p className="dmtims-text pb-1 font-bold text-[#28314A]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <p className="dmtims-subtitle text-[#EE3768]">Note:</p>
              <ol className="list-decimal px-5">
                {notes.map((item) => (
                  <li key={item.id} className="dmtims-text text-[#28314A]">
                    {item.text}
                  </li>
                ))}
              </ol>
              <div className="relative flex flex-col rounded-xl border border-[#BDBDBD] bg-[#F2F2F2] p-6">
                <h4 className="z-10 py-3 text-xl font-semibold leading-tight text-[#28314A] sm:text-2xl lg:leading-snug xl:text-3xl">
                  {/* Apply for admissions 2023-25 */}
                  Apply for admissions 2024-2026
                </h4>
                <p className="dmtims-text flex pb-1 font-normal text-[#28314A]">
                  Start your DMTIMS journey with Admission Process.
                </p>
               
               {/* there is new tag to remove button heirarchy problem */}
                <div className="group my-2 ml-auto flex select-none items-center rounded-full bg-[#FFB800] py-2 pl-4 font-semibold text-white transition duration-300 hover:shadow-md active:scale-95">
                  <ContactAdmissionDialog text={"Application Form"} />
                  <ArrowCircleRightIcon className="mx-2 w-8 transform transition duration-300 group-hover:rotate-45 group-hover:transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDetails;
