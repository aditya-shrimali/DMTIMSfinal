import React from "react";

function CorporateVisitorSessions() {
  const visitors = [
    {
      id: 0,
      name: "Mr. Atul Chugh",
      designation: "Founder",
      agency: "BeyondSkool",
    },
    {
      id: 1,
      name: "Mr. Arvind Ambekar",
      designation: "Proprietor",
      agency: "Firstpoint Business Solutions",
    },
    {
      id: 2,
      name: "Mr. Anil Jadwani",
      designation: "Founder",
      agency: "LMSKIT",
    },
    {
      id: 3,
      name: "Ms. Kanika Handa Popat",
      designation: "Chief Executive Officer & Principal Officer",
      agency: "Shift Risk Insurance Brokers Lid",
    },
    {
      id: 4,
      name: "Mr. Mayank Mittal",
      designation: "Director",
      agency: "MPower India Pvt Ltd",
    },
    {
      id: 5,
      name: "Ms. Sonali Suri",
      designation: "Sales Marketing and Business Development",
      agency: "James Walker Inmarco Industries Pvt. Ltd",
    },
    {
      id: 6,
      name: "Mr. Ishan Nadkami",
      designation: "Cofounder & CEO",
      agency: "Impact App",
    },
    {
      id: 7,
      name: "Ms Himanshi Ajmera",
      designation: "Senior Consultant",
      agency: "Deloitte Consulting USI",
    },
    {
      id: 8,
      name: "Mr. Vikas Mishra",
      designation: "Freelance Consultant",
      agency: "Ex Service Delivery Manager-Capgemini",
    },
    {
      id: 9,
      name: "Mr. Sumeet Kapoor",
      designation: "Regional Director",
      agency: "Navtor India",
    },
    {
      id: 10,
      name: "Mr. Nand Kishore Anand",
      designation: "Chief Digital Officer (CDO)& Senior Vice President",
      agency: "Mynd Solutions",
    },
    {
      id: 11,
      name: "Mr. Zubin Paul Driver",
      designation: "Corporate Coach & Playwright",
      agency: "Founder - The Big Ripple",
    },
    {
      id: 12,
      name: "Mr. Sanjay Radhakrishnan",
      designation: "Chief Strategy and Business Excelence",
      agency: "Tata Class Edge",
    },
    {
      id: 13,
      name: "Mr. Vaibhav Datar",
      designation: "Mid-life Coach",
      agency: `Author of bestseller book "Simply your Life"`,
    },
    {
      id: 14,
      name: "Dr. Swetha Anand",
      designation: "Founder",
      agency: `VISHWAM Wellness Centre`,
    },
    {
      id: 15,
      name: "Mr. Bhavin Parekh",
      designation: "Hospitality Professional",
      agency: `Atlas Skill Tech University`,
    },
    {
      id: 16,
      name: "Mr. Vidyanand Joshi",
      designation:
        "Behavioral Consultant, Management Educator and Personal Counsellor",
      agency: `Mobisoft Infotech`,
    },
    {
      id: 17,
      name: "Mr. Hemant Jain",
      designation: "President and Head of Digital Business",
      agency: `Lokmat Media Pvt Ltd`,
    },
    {
      id: 18,
      name: "Mr. Yuvrajsinh Dilipsinhi Desai",
      designation: "Propeltor",
      agency: `Riddhi Siddhi Securities (Sub broker of Anand Rathi Shares and Stock Brokers Ltd)`,
    },
    {
      id: 19,
      name: "Ms. Mangala Suni",
      designation: "Master Trainer",
      agency: `Helen O'Grady International, India`,
    },
    {
      id: 20,
      name: "Mr. Rajan Dwivedi",
      designation: "Vice President",
      agency: `Corecard India`,
    },
    {
      id: 21,
      name: "Ms. Manisha Gaur",
      designation: "Team Member",
      agency: `Helen O'Grady International, India`,
    },
    {
      id: 22,
      name: "Mr. Samir Malwade",
      designation: "Head-Advertising",
      agency: `SIBA Ads & Communication`,
    },
    {
      id: 23,
      name: "Ms. Shivani Singh",
      designation: "Senior Marketing Specialist",
      agency: `Saviynt Inc`,
    },
    {
      id: 24,
      name: "Mr. Anil Sriram Athr",
      designation: "Entrepreneur",
      agency: `Dhanvanthri Engineers`,
    },
    {
      id: 25,
      name: "Mr. Vijay Adhikari",
      designation: "General Manager",
      agency: `Nesco Ltd`,
    },
    {
      id: 26,
      name: "Mr. Anand Dhruv",
      designation: "Associate director - HR",
      agency: `NTT India`,
    },
    {
      id: 27,
      name: "Ms. Prashi Mohan",
      designation: "Head of Products",
      agency: `Fitterfly`,
    },
    {
      id: 28,
      name: "Mr. Vivek Bhargava",
      designation: "Co-founder",
      agency: `ProfitWheel`,
    },
    {
      id: 29,
      name: "Mr. Ani Khadke",
      designation: "Global Portfolio Leader",
      agency: `Kyndry`,
    },
    {
      id: 30,
      name: "Rev. Fr. Dr. KM. George",
      designation: "Director",
      agency: `Dr. Paulos Mar Gregorios Chair, Mahatma Gandhi University, Kottayam`,
    },
    {
      id: 31,
      name: "Dr. Namrataa Srivastav",
      designation: "Creative Communicator",
      agency: `Creative Manners`,
    },
    {
      id: 32,
      name: "Mr. Mukul Gupta",
      designation: "Senior Categrity Manager",
      agency: `Board Infinity`,
    },
    {
      id: 33,
      name: "Ms. Laxmi Vaish",
      designation: "Senior Manager",
      agency: `Capgemini India Ltd.`,
    },
    {
      id: 34,
      name: "Ms. Tahseen Khan",
      designation: "Senior Executive Human Resources",
      agency: `Caratlane A Tanishq Partnership`,
    },
    {
      id: 35,
      name: "Mr. Prakash Aute",
      designation: "Zonal Incharge",
      agency: `Gujarat Co-operative Milk Marketing Federation Ltd. -Amul`,
    },
    {
      id: 36,
      name: "Ms Sangeeta Dey",
      designation: "Regional Manager West",
      agency: `Teamlease Edtech`,
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 flex w-full max-w-screen-2xl flex-col pt-8">
          <h2 id="Support-Capital" className="dmtims-title">
            Corporate Visitor Sessions
          </h2>
        </div>
      </div>
      <div className="flex flex-col bg-[#4C477A] px-4 py-8">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {visitors.map(({ id, name, designation, agency }) => (
              <div key={id} className="pb-4">
                <p className="dmtims-text pb-0 font-semibold text-white">
                  {name}
                </p>
                <p className="max-w-sm text-sm font-semibold uppercase text-white">
                  {designation},{" "}
                  <span className="capitalize italic text-[#FFB800]">
                    {agency}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorporateVisitorSessions;
