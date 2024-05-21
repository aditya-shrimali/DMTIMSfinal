// import Image from "next/legacy/image";
// import Link from "next/link";
// import { useRef } from "react";
// import DMTIMSGmaps from "../DMTIMSGmaps/DMTIMSGmaps";

// const ContactUsForm = () => {
//   const completeButtonRef = useRef(null);

//   const sendMessage = async (event: any) => {
//     event.preventDefault(); // don't redirect the page

//     const Swal = require("sweetalert2");

//     Swal.fire({
//       title: "Processing",
//       allowOutsideClick: false,
//     });
//     Swal.showLoading();

//     const res = await fetch("/api/contact", {
//       body: JSON.stringify({
//         fullName: event.target.fullName.value,
//         tel: event.target.tel.value,
//         email: event.target.email.value,
//         message: event.target.message.value,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "POST",
//     });

//     const result = await res.json();
//     Swal.fire({
//       icon: "success",
//       title: "Message sent!",
//       text: "We will get back to you shortly.",
//       timer: 2000,
//       timerProgressBar: true,
//       showConfirmButton: false,
//     });

//     event.target.reset();
//   };

//   return (
//     <section className="relative overflow-hidden px-4">
//       <div className="mx-auto flex w-full max-w-screen-2xl flex-col lg:flex-row">
//         <div className="hidden flex-col justify-around py-4 lg:my-4 lg:flex lg:w-1/2">
//           <div className="relative z-10 h-[280px] w-[400px] items-center rounded-2xl ">
//             <Image
//               priority
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/946717904278261800/Group_1406.webp"
//               }
//               alt="bg-Logo"
//               layout="fill"
//               objectFit="contain"
//             />
//           </div>
//           <div className="relative z-10 ml-auto h-[280px] w-[400px] items-center rounded-2xl ">
//             <Image
//               priority
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/946718072083976232/Group_1408.webp"
//               }
//               alt="bg-Logo"
//               layout="fill"
//               objectFit="contain"
//             />
//           </div>
//           <div className="relative z-10 h-[280px] w-[400px] items-center rounded-2xl ">
//             <Image
//               priority
//               src={
//                 "https://cdn.discordapp.com/attachments/929834261568167986/946718199284658216/Group_1409.webp"
//               }
//               alt="bg-Logo"
//               layout="fill"
//               objectFit="contain"
//             />
//           </div>
//           <div className="absolute left-[-45%] h-full w-full">
//             <div className="relative h-full w-full items-center">
//               <Image
//                 priority
//                 src={
//                   "https://cdn.discordapp.com/attachments/929834261568167986/946718332290215996/Group_1407.webp"
//                 }
//                 alt="bg-Logo"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="z-10 flex lg:w-1/2">
//           <div className="ml-auto flex w-full flex-col justify-center py-8 lg:my-8 lg:max-w-2xl">
//             <h1 id="PGDM-Skill-Certifications" className="dmtims-title pb-2">
//               Get in touch
//             </h1>
//             <p className="dmtims-text pb-8 text-[#37474F]">
//               We’re here to help and answer any question you might have. <br />{" "}
//               We look forward to hearing from you.
//             </p>
//             <form onSubmit={sendMessage} className="flex flex-col pb-8">
//               <div className="grid grid-cols-1 gap-x-4 gap-y-2 pb-2 sm:grid-cols-2">
//                 <div className="flex flex-grow flex-col">
//                   <label
//                     htmlFor="fullName"
//                     className="dmtims-text pb-2 text-[#28314A]"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     id="fullName"
//                     name="fullName"
//                     autoComplete="name"
//                     type="text"
//                     required
//                     className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
//                     placeholder="Jane Cooper"
//                   />
//                 </div>
//                 <div className="flex flex-grow flex-col">
//                   <label
//                     htmlFor="tel"
//                     className="dmtims-text pb-2 text-[#28314A]"
//                   >
//                     Contact Number
//                   </label>
//                   <input
//                     id="tel"
//                     name="tel"
//                     autoComplete="tel"
//                     type="tel"
//                     required
//                     className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
//                     placeholder="Phone Number"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-grow flex-col pb-2">
//                 <label
//                   htmlFor="email"
//                   className="dmtims-text pb-2 text-[#28314A]"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   autoComplete="email"
//                   type="email"
//                   required
//                   className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
//                   placeholder="michelle.rivera@example.com"
//                 />
//               </div>
//               <div className="flex flex-grow flex-col ">
//                 <label
//                   htmlFor="message"
//                   className="dmtims-text pb-2 text-[#28314A]"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   rows={5}
//                   className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
//                   placeholder="Type here..."
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <button
//                   ref={completeButtonRef}
//                   className="mt-8 mb-4 transform rounded-lg border border-[#C4C4C4] bg-[#FFB800] px-4 py-3 font-bold text-white outline-none transition delay-100 hover:shadow-lg"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <div className="flex flex-shrink-0">
//                 <div className="mr-4 w-[5px] flex-shrink-0 rounded-full bg-[#3F3A6D]" />
//                 <div className="flex flex-col py-4">
//                   <div className="relative mb-2 h-10 w-10 items-center">
//                     <Image
//                       priority
//                       src={
//                         "https://cdn.discordapp.com/attachments/929834261568167986/946718482551160872/ci_location.webp"
//                       }
//                       alt="Location-Logo"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                   </div>
//                   <Link
//                     legacyBehavior
//                     href="https://www.google.com/maps/place/Dr+Mar+Theophilus+Institute+of+Management+Studies+(DMTIMS)/@19.0598494,73.0112944,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c137c5573567:0x4b9fe58b59a776ae!8m2!3d19.0598041!4d73.0134684"
//                   >
//                     <a className="dmtims-text pb-0 leading-tight">
//                       DMTIMS, Plot No. 2,
//                       <br /> Sector 9, Sanpada, <br /> Navi Mumbai 400 705,{" "}
//                       <br /> Maharashtra, India
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//               <div className="flex flex-shrink-0">
//                 <div className="mr-4 min-h-[160px] w-[5px] flex-shrink-0 rounded-full bg-[#EE3768]" />
//                 <div className="flex flex-col py-4">
//                   <div className="relative mb-2 h-10 w-10 items-center">
//                     <Image
//                       priority
//                       src={
//                         "https://cdn.discordapp.com/attachments/929834261568167986/946718630698160158/fluent_call-24-filled.webp"
//                       }
//                       alt="Location-Logo"
//                       layout="fill"
//                       objectFit="contain"
//                     />
//                   </div>
//                   <div className="flex-col">
//                     <div className="flex-col">
//                       <Link legacyBehavior href="tel:+912227753226">
//                         <a className="dmtims-text pb-0 leading-tight">
//                           +91 22 2775 3226
//                         </a>
//                       </Link>
//                       <a className="text-[#BDBDBD]"> / </a>
//                       <Link legacyBehavior href="tel:+912227753227">
//                         <a className="dmtims-text pb-0 leading-tight"> 7 </a>
//                       </Link>
//                       <a className="text-[#BDBDBD]"> / </a>
//                       <Link legacyBehavior href="tel:+912227753228">
//                         <a className="dmtims-text pb-0 leading-tight"> 8 </a>
//                       </Link>
//                     </div>
//                     <div className="flex-col">
//                       <Link legacyBehavior href="tel:+918657860716">
//                         <a className="dmtims-text pb-0 leading-tight">
//                           +91 86578 60716
//                         </a>
//                       </Link>
//                       <a className="text-[#BDBDBD]"> / </a>
//                       <Link legacyBehavior href="tel:+918657860717">
//                         <a className="dmtims-text pb-0 leading-tight"> 17 </a>
//                       </Link>
//                       <a className="text-[#BDBDBD]"> / </a>
//                       <Link legacyBehavior href="tel:+918657860718">
//                         <a className="dmtims-text pb-0 leading-tight"> 18 </a>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <DMTIMSGmaps />
//     </section>
//   );
// };

// export default ContactUsForm;











/**my code */
import Image from "next/legacy/image";
import Link from "next/link";
import { useRef } from "react";
import DMTIMSGmaps from "../DMTIMSGmaps/DMTIMSGmaps";
import bgLogo1 from '../../public/newImages/bgLogo1.png'
import bgLogo2 from '../../public/newImages/bgLogo2.png'
import bgLogo3 from '../../public/newImages/bgLogo3.png'

const ContactUsForm = () => {
  const completeButtonRef = useRef(null);

  const sendMessage = async (event: any) => {
    event.preventDefault(); // don't redirect the page

    const Swal = require("sweetalert2");

    Swal.fire({
      title: "Processing",
      allowOutsideClick: false,
    });
    Swal.showLoading();

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        fullName: event.target.fullName.value,
        tel: event.target.tel.value,
        email: event.target.email.value,
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

    event.target.reset();
  };

  return (
    <section className="relative overflow-hidden px-4">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col lg:flex-row">
        <div className="hidden flex-col justify-around py-4 lg:my-4 lg:flex lg:w-1/2">
          <div className="relative z-10 h-[280px] w-[400px] items-center rounded-2xl ">
            <Image
              priority
              src={bgLogo1}
              alt="bg-Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative z-10 ml-auto h-[280px] w-[400px] items-center rounded-2xl ">
            <Image
              priority
              src={bgLogo2}
              alt="bg-Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative z-10 h-[280px] w-[400px] items-center rounded-2xl ">
            <Image
              priority
              src={bgLogo3}
              alt="bg-Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="absolute left-[-45%] h-full w-full">
            <div className="relative h-full w-full items-center">
              <Image
                priority
                src={""}
                alt="bg-Logo"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="z-10 flex lg:w-1/2">
          <div className="ml-auto flex w-full flex-col justify-center py-8 lg:my-8 lg:max-w-2xl">
            <h1 id="PGDM-Skill-Certifications" className="dmtims-title pb-2">
              Get in touch
            </h1>
            <p className="dmtims-text pb-8 text-[#37474F]">
              We’re here to help and answer any question you might have. <br />{" "}
              We look forward to hearing from you.
            </p>
            <form onSubmit={sendMessage} className="flex flex-col pb-8">
              <div className="grid grid-cols-1 gap-x-4 gap-y-2 pb-2 sm:grid-cols-2">
                <div className="flex flex-grow flex-col">
                  <label
                    htmlFor="fullName"
                    className="dmtims-text pb-2 text-[#28314A]"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    autoComplete="name"
                    type="text"
                    required
                    className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                    placeholder="Jane Cooper"
                  />
                </div>
                <div className="flex flex-grow flex-col">
                  <label
                    htmlFor="tel"
                    className="dmtims-text pb-2 text-[#28314A]"
                  >
                    Contact Number
                  </label>
                  <input
                    id="tel"
                    name="tel"
                    autoComplete="tel"
                    type="tel"
                    required
                    className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="flex flex-grow flex-col pb-2">
                <label
                  htmlFor="email"
                  className="dmtims-text pb-2 text-[#28314A]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  type="email"
                  required
                  className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                  placeholder="michelle.rivera@example.com"
                />
              </div>
              <div className="flex flex-grow flex-col ">
                <label
                  htmlFor="message"
                  className="dmtims-text pb-2 text-[#28314A]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                  placeholder="Type here..."
                />
              </div>
              <div className="flex flex-col">
                <button
                  ref={completeButtonRef}
                  className="mt-8 mb-4 transform rounded-lg border border-[#C4C4C4] bg-[#FFB800] px-4 py-3 font-bold text-white outline-none transition delay-100 hover:shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-shrink-0">
                <div className="mr-4 w-[5px] flex-shrink-0 rounded-full bg-[#3F3A6D]" />
                <div className="flex flex-col py-4">
                  <div className="relative mb-2 h-10 w-10 items-center">
                    {/* <Image
                      priority
                      src={
                        "https://cdn.discordapp.com/attachments/929834261568167986/946718482551160872/ci_location.webp"
                      }
                      alt="Location-Logo"
                      layout="fill"
                      objectFit="contain"
                    /> */}
                  </div>
                  <Link
                    legacyBehavior
                    href="https://www.google.com/maps/place/Dr+Mar+Theophilus+Institute+of+Management+Studies+(DMTIMS)/@19.0598494,73.0112944,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c137c5573567:0x4b9fe58b59a776ae!8m2!3d19.0598041!4d73.0134684"
                  >
                    <a className="dmtims-text pb-0 leading-tight">
                      DMTIMS, Plot No. 2,
                      <br /> Sector 9, Sanpada, <br /> Navi Mumbai 400 705,{" "}
                      <br /> Maharashtra, India
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-shrink-0">
                <div className="mr-4 min-h-[160px] w-[5px] flex-shrink-0 rounded-full bg-[#EE3768]" />
                <div className="flex flex-col py-4">
                  <div className="relative mb-2 h-10 w-10 items-center">
                    {/* <Image
                      priority
                      src={
                        "https://cdn.discordapp.com/attachments/929834261568167986/946718630698160158/fluent_call-24-filled.webp"
                      }
                      alt="Location-Logo"
                      layout="fill"
                      objectFit="contain"
                    /> */}
                  </div>
                  <div className="flex-col">
                    <div className="flex-col">
                      <Link legacyBehavior href="tel:+912227753226">
                        <a className="dmtims-text pb-0 leading-tight">
                          +91 22 2775 3226
                        </a>
                      </Link>
                      <a className="text-[#BDBDBD]"> / </a>
                      <Link legacyBehavior href="tel:+912227753227">
                        <a className="dmtims-text pb-0 leading-tight"> 7 </a>
                      </Link>
                      <a className="text-[#BDBDBD]"> / </a>
                      <Link legacyBehavior href="tel:+912227753228">
                        <a className="dmtims-text pb-0 leading-tight"> 8 </a>
                      </Link>
                    </div>
                    <div className="flex-col">
                      <Link legacyBehavior href="tel:+918657860716">
                        <a className="dmtims-text pb-0 leading-tight">
                          +91 86578 60716
                        </a>
                      </Link>
                      <a className="text-[#BDBDBD]"> / </a>
                      <Link legacyBehavior href="tel:+918657860717">
                        <a className="dmtims-text pb-0 leading-tight"> 17 </a>
                      </Link>
                      <a className="text-[#BDBDBD]"> / </a>
                      <Link legacyBehavior href="tel:+918657860718">
                        <a className="dmtims-text pb-0 leading-tight"> 18 </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DMTIMSGmaps />
    </section>
  );
};

export default ContactUsForm;
