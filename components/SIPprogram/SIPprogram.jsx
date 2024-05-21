import Image from "next/image";
import image from "../../public/images/Rectangle_1007.webp";
import ngo from "./images/ngo.png";
import ngo2 from "./images/ngo2.png";

const SIPprogram = () => {
  return (
    <>
      <section>
        <div className="m-7">
          <h1 className="mb-6 text-4xl font-bold">
            Four Months Summer Internship Project (SIP)
          </h1>
          <Image src={image} alt="image" />
          <p>
            How freshers can get some actual workplace experience on a Project
            for 4 months so that they get some experience.
          </p>
          <p>Different Sectors where students can be placed:</p>
          <div className="ml-7">
            <ol>
              <li>◘ Banking</li>
              <li>◘ Finance</li>
              <li>◘ Services</li>
              <li>◘ Real Estate</li>
              <li>◘ ITES</li>
              <li>◘ Logistics</li>
              <li>◘ Infrastructure</li>
              <li>◘ BFSI</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default SIPprogram;
