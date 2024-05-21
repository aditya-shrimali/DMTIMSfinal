// import React from "react";
// import Image from "next/image";
// import ektaara from "../../public/newImages/ektaara.png";
// import ektaaraAll from "../../public/newImages/ektaaraAll.png";
// import aims from "../../public/newImages/aims.png";
// import eudoxia from "../../public/newImages/eudoxia.png";

// const Ektaara = () => {
//   return (
//     <div className="mx-2 px-2 py-8 ">
//       {/* <div className="flex  h-36 lg:h-24  gap-0 sm:gap-80 "> */}
//       {/* <div className="mx-auto my-4 flex w-full max-w-screen-2xl  pt-8  h-36 md:h-24  gap-0 sm:gap-80 bg-green-300"> */}
//       {/* <div className="mx-auto  sm:flex   max-w-screen-lg   pt-8  h-36 md:h-24  gap-0 sm:gap-80 sm:items-center bg-green-300"> */}
//       {/* <div className="mx-auto my-4 flex w-full max-w-screen-2xl  pt-8  h-36 md:h-24  gap-0 sm:gap-80 bg-green-300">
//         <h1 className="py-6 text-3xl lg:text-6xl font-extrabold text-[#2F3D5F]">
//           Research @ DMTIMS
//         </h1>

//         <div className="flex flex-col ">
//           <Image alt="ektaara" className="h-30 w-[200px]   pt-16 sm:h-72 sm:w-[450px] "
//           src={ektaara} />
//           <Image
//             alt="ektaara"
//             className="  h-24 w-[400px] pl-20  "
//             src={ektaaraAll}
//           />
//         </div>
//       </div> */}

//     <div className="px-1 my-4 flex bg-green-300">
//       {/* <div className="mx-auto  sm:flex   max-w-screen-lg   pt-8  h-36 md:h-24  gap-0 sm:gap-80 sm:items-center bg-green-300"> */}
//         <h1 className="pt-6 text-4xl lg:text-6xl font-extrabold text-[#2F3D5F] flex-col">
//           Research @ DMTIMS
//         </h1>

//           <div>

//           <Image alt="ektaara" className=" "
//           src={ektaara} />
//           <Image
//             alt="ektaara"
//             className="  "
//             src={ektaaraAll}
//             />
//             </div>

//       </div>

//       <h4 className="text-4xl font-bold text-[#F4115E]">EKTAARA 2024</h4>

//       <p className="text-lg font-semibold text-[#ED1651] ">CONFERENCE THEME</p>

//       <p className="  lg:w-[600px] py-2 text-lg font-bold ">
//         Navigating the Digital Revolution:
//         <span className="mx-2 font-sans font-medium text-[black]  ">
//           Leveraging Emerging Technologies for Sustainable Business Economics
//         </span>
//       </p>

//       <div className=" mr-0 lg:mr-[750px] rounded-md bg-gray-200 px-4 py-4">
//         <p className="text-lg font-semibold text-black  ">Overview</p>

//         <div>
//           The conference seeks to examine the impact of new technologies on the
//           past, present, and future of business economics. It emphasizes the
//           idea that technology is not just a passing trend but a revolution that
//           organizations need to adapt to in order to thrive. This theme allows
//           for discussions on the historical context of technological changes,
//           their current relevance, and future strategies for success in a
//           tech-driven business landscape.
//         </div>
//       </div>

//       <div className="text-xl font-bold">
//         <h1 className="pt-4 text-lg font-semibold pb-4">Conference Sub themes</h1>
//         <div className="grid grid-cols-2 ">
//           <div>
//             <h4 className="px-4 text-lg font-semibold">Marketing</h4>
//             <ul className=" text-base  font-normal">
//               <li>• Personalization in Digital Marketing</li>
//               <li>• Influencer Marketing in the Digital Age</li>
//               <li>• Customer Journey Mapping in the Digital World</li>
//               <li>• E-commerce and Emerging Tech</li>
//               <li>• Digital Advertising Fraud Detection</li>
//             </ul>

//             <h4 className="px-4 text-lg font-semibold">
//               Human Resources (HR){" "}
//             </h4>
//             <ul className=" text-base  font-normal">
//               <li>• AI in Talent Acquisition</li>
//               <li >
//                 • Remote Work and Employee Well-being
//               </li>
//               <li >
//                 • Digital Learning and Development
//               </li>
//               <li >
//                 • Data-Driven HR Decisions
//               </li>
//               <li >
//                 • Diversity and Inclusion in Virtual Teams
//               </li>
//             </ul>
//             <h4 className="px-4 text-lg font-semibold">Operations</h4>
//             <ul className=" text-base  font-normal">
//               <li >
//                 • Supply Chain Automation
//               </li>
//               <li >
//                 • Predictive Maintenance in Manufacturing
//               </li>
//               <li >
//                 • Agile Manufacturing with 3D Printing
//               </li>
//               <li>
//                 • Smart Inventory Management
//               </li>
//               <li>
//                 • Sustainable Operations through Green Tech
//               </li>
//             </ul>
//           </div>

//           {/* Information Technology */}
//           <div>
//             <h4 className="text-lg font-semibold">
//               Information Technology (IT)
//             </h4>
//             <ul className=" text-base  font-normal">
//               <li>• Cybersecurity in the Age of IoT</li>
//               <li>• Cloud Computing and Business Economics</li>
//               <li>• Digital Transformation Strategies</li>
//               <li>• Data Privacy and Regulatory Compliance</li>
//               <li>• AI and IT Service Management</li>
//             </ul>
//             <h4 className="text-lg font-semibold">Finance</h4>
//             <ul className=" text-base  font-normal">
//               <li>• Cryptocurrency and Blockchain in Finance</li>
//               <li>• Robo-Advisors and Wealth Management</li>
//               <li>• Fintech Disruption</li>
//               <li>•Digital Payment Trends</li>
//               <li>• Risk Management in the Digital Era</li>
//             </ul>
//             <h4 className="text-lg font-semibold">General Management</h4>
//             <ul className=" text-base  font-normal">
//               <li>• Business Management in times of Hybrid Work Practices</li>
//               <li>• The ethical dilemma of Moonlighting</li>
//               <li>• Social Entrepreneurship</li>
//               <li>• Organizational Crisis Management</li>
//               <li>• Mental Health & Work Environment</li>
//               <li>• Role of Unicorns in Business Economy</li>
//               <li>• Impact of Business Development on Environment</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ektaara;

/** new code */
import React from "react";
import Image from "next/image";
import ektaara from "../../public/newImages/ektaara.png";
import ektaaraAll from "../../public/newImages/ektaaraAll.png";

const Ektaara = () => {
  return (
    <div className="mx-2 px-2 py-8 " id="Ektaara">
      {/* small screen image */}
      <div className="my-4 flex-col  px-1 sm:hidden ">
        <h1 className="flex-col pt-6 text-4xl font-extrabold text-[#2F3D5F] lg:text-6xl">
          Research
        </h1>

        {/* <div className="  sm:hidden">
          <Image alt="ektaara" className=" " src={ektaara} />
          <Image alt="ektaara" className="  " src={ektaaraAll} />
        </div> */}
      </div>

      {/* large screen image */}
      <div className="mx-auto my-0 hidden w-full max-w-screen-2xl gap-0 sm:flex lg:gap-40  ">
        <h1 className="py-6 text-3xl font-extrabold text-[#2F3D5F] lg:text-6xl">
          Research
        </h1>

        {/* <div className="hidden h-36 flex-col  pt-8  sm:flex md:h-24  ">
          <Image alt="ektaara" className=" " src={ektaara} />
          <Image alt="ektaara" className="    " src={ektaaraAll} />
        </div> */}
      </div>

      {/* <h4 className="text-4xl font-bold text-[#F4115E]">EKTAARA 2024</h4>

      <p className="text-lg font-semibold text-[#ED1651] ">CONFERENCE THEME</p> */}

      <p className=" text-lg font-bold lg:w-[600px] ">
        EUDOXIA Our International Research Partner{" "}
        <span className="mx-2 font-sans font-medium text-[black]  ">
          Leveraging Emerging Technologies for Sustainable Business Economics
        </span>
      </p>

      <div className=" mr-0  rounded-md bg-gray-200 px-4 py-4 xl:mr-[750px]">
        <p className="text-lg font-semibold text-black  ">Overview</p>

        <div>
          The conference seeks to examine the impact of new technologies on the
          past, present, and future of business economics. It emphasizes the
          idea that technology is not just a passing trend but a revolution that
          organizations need to adapt to in order to thrive. This theme allows
          for discussions on the historical context of technological changes,
          their current relevance, and future strategies for success in a
          tech-driven business landscape.
        </div>
      </div>

      <div className="text-xl font-bold ">
        <h1 className="pb-4 pt-4 text-lg font-semibold">
          Conference Sub themes
        </h1>
        <div className="grid grid-cols-2 ">
          <div>
            <h4 className="px-4 text-lg font-semibold">Marketing</h4>
            <ul className=" text-base  font-normal">
              <li>• Personalization in Digital Marketing</li>
              <li>• Influencer Marketing in the Digital Age</li>
              <li>• Customer Journey Mapping in the Digital World</li>
              <li>• E-commerce and Emerging Tech</li>
              <li>• Digital Advertising Fraud Detection</li>
            </ul>

            <h4 className="px-4 text-lg font-semibold">
              Human Resources (HR){" "}
            </h4>
            <ul className=" text-base  font-normal">
              <li>• AI in Talent Acquisition</li>
              <li>• Remote Work and Employee Well-being</li>
              <li>• Digital Learning and Development</li>
              <li>• Data-Driven HR Decisions</li>
              <li>• Diversity and Inclusion in Virtual Teams</li>
            </ul>
            <h4 className="px-4 text-lg font-semibold">Operations</h4>
            <ul className=" text-base  font-normal">
              <li>• Supply Chain Automation</li>
              <li>• Predictive Maintenance in Manufacturing</li>
              <li>• Agile Manufacturing with 3D Printing</li>
              <li>• Smart Inventory Management</li>
              <li>• Sustainable Operations through Green Tech</li>
            </ul>
          </div>

          {/* Information Technology */}
          <div>
            <h4 className="text-lg font-semibold">
              Information Technology (IT)
            </h4>
            <ul className=" text-base  font-normal">
              <li>• Cybersecurity in the Age of IoT</li>
              <li>• Cloud Computing and Business Economics</li>
              <li>• Digital Transformation Strategies</li>
              <li>• Data Privacy and Regulatory Compliance</li>
              <li>• AI and IT Service Management</li>
            </ul>
            <h4 className="text-lg font-semibold">Finance</h4>
            <ul className=" text-base  font-normal">
              <li>• Cryptocurrency and Blockchain in Finance</li>
              <li>• Robo-Advisors and Wealth Management</li>
              <li>• Fintech Disruption</li>
              <li>•Digital Payment Trends</li>
              <li>• Risk Management in the Digital Era</li>
            </ul>
            <h4 className="text-lg font-semibold">General Management</h4>
            <ul className=" text-base  font-normal">
              <li>• Business Management in times of Hybrid Work Practices</li>
              <li>• The ethical dilemma of Moonlighting</li>
              <li>• Social Entrepreneurship</li>
              <li>• Organizational Crisis Management</li>
              <li>• Mental Health & Work Environment</li>
              <li>• Role of Unicorns in Business Economy</li>
              <li>• Impact of Business Development on Environment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ektaara;
