import Image from "next/image";
import image from "../../public/images/feeScreenshotDmtims.png";

const FeeStructure = () => {
  return (
    <>
      <section>
        <div className="m-12">
          <h1 className="mb-9 text-4xl font-bold">Fees of Dual Degree</h1>
          <div>
            <Image src={image} alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeeStructure;
