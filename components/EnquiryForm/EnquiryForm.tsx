import Image from "next/image";
import React from "react";
import Bg from "./images/EnquiryForm.png";

function EnquiryForm() {
  const sendMessage = async (event: any) => {
    event.preventDefault(); // don't redirect the page

    const Swal = require("sweetalert2");

    Swal.fire({
      title: "Processing",
      allowOutsideClick: false,
    });
    Swal.showLoading();

    const res = await fetch("/api/enquiry", {
      body: JSON.stringify({
        fullName: event.target.fullName.value,
        tel: event.target.tel.value,
        email: event.target.email.value,
        dob: event.target.dob.value,
        address: event.target.address.value,
        stream: event.target.stream.value,
        education: event.target.education.value,
        exam: event.target.exam.value,
        score: event.target.score.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => res.json());

    console.log(res);

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
    <section className="relative py-20 md:py-40">
      <Image
        src={Bg}
        alt="Enquiry-Bg"
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col bg-white px-4 py-8 shadow-2xl md:rounded-lg">
        <p className="dmtims-title text-center">Admission Enquiry Form</p>
        <form onSubmit={sendMessage} className="flex flex-col">
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 p-2 sm:grid-cols-2">
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
              <label htmlFor="tel" className="dmtims-text pb-2 text-[#28314A]">
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
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 p-2 sm:grid-cols-2">
            <div className="flex flex-grow flex-col">
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
            <div className="flex flex-grow flex-col">
              <label htmlFor="dob" className="dmtims-text pb-2 text-[#28314A]">
                Date of Birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                required
                className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                placeholder="michelle.rivera@example.com"
              />
            </div>
          </div>
          <div className="flex flex-grow flex-col p-2">
            <label
              htmlFor="address"
              className="dmtims-text pb-2 text-[#28314A]"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows={5}
              className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
              placeholder="Enter your Address"
            />
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 p-2 sm:grid-cols-2">
            <div className="flex flex-grow flex-col">
              <label
                htmlFor="stream"
                className="dmtims-text pb-2 text-[#28314A]"
              >
                Stream
              </label>
              <input
                id="stream"
                name="stream"
                type="text"
                required
                className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                placeholder="Enter your stream"
              />
            </div>
            <div className="flex flex-grow flex-col">
              <label
                htmlFor="education"
                className="dmtims-text pb-2 text-[#28314A]"
              >
                Education
              </label>
              <input
                id="education"
                name="education"
                type="text"
                required
                className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                placeholder="Graduate / Appeared (Waiting for Result)"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 p-2 sm:grid-cols-2">
            <div className="flex flex-grow flex-col">
              <label htmlFor="exam" className="dmtims-text pb-2 text-[#28314A]">
                Entrance Exam Details
              </label>
              <input
                id="exam"
                name="exam"
                type="text"
                required
                className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                placeholder="CAT / CMAT / CET / Other..."
              />
            </div>
            <div className="flex flex-grow flex-col">
              <label
                htmlFor="score"
                className="dmtims-text pb-2 text-[#28314A]"
              >
                Score
              </label>
              <input
                id="score"
                name="score"
                type="number"
                min={0}
                required
                className="flex-grow rounded-md border border-[#C4C4C4] bg-[#EEEEEE] px-4 py-3 text-[#4F4F4F] outline-none"
                placeholder="Your Score"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <button className="mx-2 mt-8 mb-4 transform rounded-lg border border-[#C4C4C4] bg-[#FFB800] px-4 py-3 font-bold text-white outline-none transition delay-100 hover:shadow-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnquiryForm;
