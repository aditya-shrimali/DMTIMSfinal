import Image from "next/image";
import image from "./images/image.png";

const NationalIndustrial = () => {
  return (
    <>
      <section>
        <div className="m-7">
          <h1 className="mb-3 text-4xl font-bold">
            National Industrial Visits
          </h1>
          <p>WRITE UP REQUIRED</p>
          <div>
            <Image src={image} alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NationalIndustrial;
