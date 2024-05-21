import React from "react";

function IndustryExpertsVisitingFaculty() {
  const faculty = [
    { id: 0, name: "Dr. Apoorva Trivedi" },
    { id: 1, name: "Prof. Ashok Ramaswamy" },
    { id: 2, name: "Prof. Raj Vilas Kadam" },
    { id: 3, name: "Dr. Ira Kumar" },
    { id: 4, name: "Prof. Ashok V. R" },
    { id: 5, name: "Prof. Ramchandran V R" },
    { id: 6, name: "Dr. Kazanfer Khan" },
    { id: 7, name: "Prof. Ashwini Mhatre" },
    { id: 8, name: "Prof. Ramkishen Y" },
    { id: 9, name: "Dr. Nishi Kaul" },
    { id: 10, name: "Prof. Bharat Nadkarni " },
    { id: 11, name: "Prof. Rohan Abraham Easo" },
    { id: 12, name: "Dr. R.C. Walke" },
    { id: 13, name: "Prof. Gopal V S " },
    { id: 14, name: "Prof. Rubina Shaikh" },
    { id: 15, name: "Dr. Sandeep Bhanot" },
    { id: 16, name: "Prof. K S S Ramdev" },
    { id: 17, name: "Prof. Sadiya Fuggawala" },
    { id: 18, name: "Dr. Sonali Kale " },
    { id: 19, name: "Prof. Ketaki Ghatole" },
    { id: 20, name: "Prof. Sagar Patil" },
    { id: 21, name: "Dr. Sonia Gupta" },
    { id: 22, name: "Prof. Laxmi Vaish" },
    { id: 23, name: "Prof. Sarita Eklahare" },
    { id: 24, name: "Prof. A.K. Saxena" },
    { id: 25, name: "Prof. Manasi Salunkhe" },
    { id: 26, name: "Prof. Savita Bodke" },
    { id: 27, name: "Prof. Abhijeet Pawar" },
    { id: 28, name: "Prot. Mayuri Choudhari" },
    { id: 29, name: "Prof. Sambhavi Kamat" },
    { id: 30, name: "Prof. Abhinav Chopra" },
    { id: 31, name: "Prof. Mohd Maner Omar" },
    { id: 32, name: "Prof. Subhojit Chakraborty" },
    { id: 33, name: "Prof. Abhishek Gaurav" },
    { id: 34, name: "Prof. Moreshwar Dhaygude" },
    { id: 35, name: "Prof. Suparna Majumdar" },
    { id: 36, name: "Prof. Anand Patil" },
    { id: 37, name: "Prof. Nipu Kumar" },
    { id: 38, name: "Prof. Susan Shibu " },
    { id: 39, name: "Prof. Anant Medhekar" },
    { id: 40, name: "Prof. Praful Sharma" },
    { id: 41, name: "Prof. Venkateshwarloo " },
    { id: 42, name: "Prof. Anil Jadwani" },
    { id: 43, name: "Prof. Prashant Kulkarni" },
    { id: 44, name: "Prof. Vidyanand Joshi " },
    { id: 45, name: "Prof. Arvind Chandramohan" },
    { id: 46, name: "Prof. Rahul Katke" },
    { id: 47, name: "Prof. Vikram Hande " },
    { id: 48, name: "Prof, Vishal Madrecha" },
    { id: 49, name: "Prof. Rahul Katke" },
    { id: 50, name: "Prof. Vilas Choudhary" },
    { id: 51, name: "Prof. Vishal Madrecha" },
    { id: 52, name: "Prof. Tushar Dharkar" },
    // { id: 50, name: "Prof. Prashant Kulkarni " },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto my-4 flex w-full max-w-screen-2xl flex-col pt-8">
          <h2 id="Support-Capital" className="dmtims-title">
            Industry Experts Visiting Faculty Team
          </h2>
        </div>
      </div>
      <div className="flex flex-col bg-[#4C477A] px-4 py-8">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <div className="grid grid-cols-2 md:grid-cols-3 md:px-20">
            {faculty.map(({ id, name }) => (
              // <p key={id} className="dmtims-text font-normal text-white">
              //  <li>
              //  {name}
              //   </li>
              // </p>

              // //changes
              <ul
                key={id}
                className="dmtims-text font-normal text-white
            "
              >
                <li>• {name}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustryExpertsVisitingFaculty;
