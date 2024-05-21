import Image from "next/legacy/image";
import RobinBanerjee from "./images/RobinBanerjee.webp";
import PadmaGupta from "./images/PadmaGupta.webp";
import SandeepGopalan from "./images/SandeepGopalan.webp";
import ShrikantSarda from "./images/ShrikantSarda.webp";
import ShanthiMenon from "./images/ShanthiMenon.webp";
import DavidNeal from "./images/DavidNeal.webp";
import AliceVaidyan from "./images/AliceVaidyan.webp";

const BoardofStudies = () => {
  const council = [
    {
      id: 0,
      img: RobinBanerjee,
      name: "Robin Banerjee",
      designation: "Managing Director - Caprihans India Limited",
    },
    {
      id: 1,
      img: PadmaGupta,
      name: "Padma Gupta",
      designation: "Director-Human Resource at HafeleIndia Pvt. Ltd.",
    },
    {
      id: 2,
      img: SandeepGopalan,
      name: "Dr. Sandeep Gopalan",
      designation:
        "Vice Chancellor, Piedmont International University, North Carolina, USA",
    },
    {
      id: 3,
      img: ShrikantSarda,
      name: "Shrikant Sarda",
      designation: "Managing Director - Accenture Technology",
    },
    {
      id: 4,
      img: ShanthiMenon,
      name: "Shanthi Menon",
      designation:
        "Director Institutional Development - University of Stirling Ras Al Khaimah, Dubai",
    },
    {
      id: 5,
      img: DavidNeal,
      name: "David Neal",
      designation: "Director, Eight Mile Consulting, Australia",
    },
    {
      id: 6,
      img: AliceVaidyan,
      name: "Ms. Alice G. Vaidyan",
      designation:
        "Former Chairman & MD at General Insurance Corporation of India",
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="Board-of-Studies" className="dmtims-title">
            Board of Studies
          </h2>
          {/* <p className='dmtims-text pb-8 lg:w-4/5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus vitae dictum condimentum viverra accumsan vitae. Est habitasse libero amet nibh augue scelerisque mauris, integer nisl. In est purus integer ultrices ultricies et habitasse a donec. Imperdiet adipiscing nibh mus.</p> */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {council &&
              council.map((item) => (
                <div key={item.id}>
                  <div className="relative mb-4 h-[180px] sm:h-[200px] md:h-[300px]">
                    <Image
                      priority
                      src={item.img}
                      alt={item.name}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="left"
                    />
                  </div>
                  <p className="dmtims-subtitle pb-0 font-normal text-[#4C477A]">
                    {item.name}
                  </p>
                  <p className="dmtims-text font-normal text-[#BDBDBD] md:w-[240px]">
                    {item.designation}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardofStudies;
