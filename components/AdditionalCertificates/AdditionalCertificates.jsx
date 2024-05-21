import Image from "next/image";
import image from "./images/image.png";

const AdditionalCertificates = () => {
  return (
    <>
      <section>
        <div className="m-7">
          <h1 className="mb-6 text-4xl font-bold">Additional Certifications</h1>
          <p>
            In today's time, a mere management certificate cannot suffice the
            niche needs of specific skill sets in the industry today. Especially
            since work place evolved post the pandemic and with science,
            technology and management practices changing at an ever- increasing
            rate, a gap is formed between the foundation provided by an academic
            education and the technical and management competencies required in
            today's technical and business environment. Thus, we here at DMTIMS,
            decided to gove the extra edge to our student leaders through
            professional certification programs in order to bridge the
            educational gap, arising out of this change.
          </p>
          <div>
            <Image src={image} alt="certification" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdditionalCertificates;
