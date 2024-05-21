import Image from "next/image";
import coreValues from "../../public/images/coreValues.png";

const CoreValues1 = () => {
  return (
    <section className="px-4 py-2">
      <div 
       className=" font-bold text-[#4F4675] dmtims-title">
        Vision, Mission and Core Values
      </div>

      <div className="  relative  h-full rounded-3xl  sm:px-2">
        <Image
          priority
          src={coreValues}
          alt="coreValues"
          // layout="fill"
          // objectFit="cover"
        />
      </div>

        
    <div id="Vision" className="pt-1">
      {/* <div className="bg-black p-4 sm:p-10 font-bold  text-xl sm:text-7xl text-white rounded-3xl  justify-center text-center ">
        To be one of the most preferred institutes in higher management
        education
      </div> */}
      {/* changed vision shape and colour */}
      <div className="bg-[#4F4675]  text-white p-4 rounded-3xl sm:p-10 text-base sm:text-lg " >
        <h1 className="text-[#FFBD59] font-bold text-3xl "> OUR VISION</h1>
       
        <h6>
        To be one of the most preferred institutes in higher management
        education.
        </h6>
      </div>
      </div>

      <div className="pt-1">


      
      <div className="bg-[#4F4675]  text-white p-4 rounded-3xl sm:p-10 text-base sm:text-lg " >
        <h1 className="text-[#FFBD59] font-bold text-3xl "> OUR MISSION</h1>
        <h6>
          To develop managerial, and collaborative skills related to the
          business environment.
        </h6>
        <h6>
          To inculcate and nurture a sense of ethics and values among the
          students.
        </h6>
        <h6>
          To provide education that enables students to apply knowledge of
          management in their respective domains.
        </h6>
      </div>
      </div>

    </section>
  );
};

export default CoreValues1;
