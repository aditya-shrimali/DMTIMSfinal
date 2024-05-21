import React from "react";

function SpeakersList() {
  const speakers = [
    { name: "Mr. Atul Chugh" },
    { name: "Ms. Tahseen Khan" },
    { name: "Mr. Vijay Adhikari" },
    { name: "Mr. Anil Jadwani" },
    { name: "Ms. Sangeeta Dey" },
    { name: "Ms. Prashi Mohan" },
    { name: "Mr. Mayank Mittal" },
    { name: "Mr. Arvind Ambekar" },
    { name: "Mr. Anil Khadke" },
    { name: "Mr. Ishan Nadkarni" },
    { name: "Ms. Kanika Handa Popat" },
    { name: "Dr. Namrataa Srivastav" },
    { name: "Mr. Vikas Mishra" },
    { name: "Ms. Sonali Suri" },
    { name: "Ms. Laxmi Vaish" },
    { name: "Mr. Nand Kishore Anand" },
    { name: "Ms. Himanshi Ajmera" },
    { name: "Mr. Prakash Aute" },
    { name: "Mr. Sanjay Radhakrishnan" },
    { name: "Mr. Sumeet Kapoor" },
    { name: "Mr. Milan Pandya" },
    { name: "Dr. Swetha Anand" },
    { name: "Mr. Zubin Paul Driver" },
    { name: "Mr. Anson Thomas" },
    { name: "Mr. Vidyanand Joshi" },
    { name: "Mr. Vaibhav Datar" },
    { name: "Mr. Tanuj Poddar" },
    { name: "Mr. Yuvrajsinh Dilipsinhji Desai" },
    { name: "Mr. Bhavin Parekh" },
    { name: "Mr. Mahesh Kudav" },
    { name: "Mr. Rajan Dwivedi" },
    { name: "Mr. Vidyanand Joshi" },
    { name: "Dr. Harsha Goyal" },
    { name: "Mr. Samir Malwade" },
    { name: "Mr. Hemant Jain" },
    { name: "Dr. Ashwini Arte" },
    { name: "Mr. Anil Sriram Athri" },
    { name: "Ms. Mangala Sunil" },
    { name: "Thomas Adaikalam" },
    { name: "Mr. Anand Dhruv" },
    { name: "Ms. Manisha Gaur" },
    { name: "Priyanka Raj" },
    { name: "Mr. Vivek Bhargava" },
    { name: "Ms. Arpita Ghadge" },
    { name: "Dr. Swapnalekha Basak" },
    { name: "Rev. Fr. Dr. K.M. George" },
    { name: "Mr. Ajay Jhalani" },
    { name: "Dr. Swapnalekha Basak" },
    { name: "Mr. Mukul Gupta" },
    { name: "Ms. Shivani Singh" },
    { name: "Shri. Subhash R. Shinde" },
    { name: "Smt. Shyamala Mohan" },
    { name: "Shri. Mohan Krishnan" },
    { name: "Dr. Parag Amin" },
    { name: "Mr. V. P. Varghese" },
    { name: "COMDR. K.K.IYPE" },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col bg-[#4C477A] px-4 py-8">
        <div className="mx-auto w-full max-w-screen-2xl py-4">
          <div className="grid grid-cols-2 text-center md:grid-cols-3">
            {speakers.map(({ name }, i) => (
              <p key={i} className="dmtims-text font-normal text-white">
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpeakersList;
