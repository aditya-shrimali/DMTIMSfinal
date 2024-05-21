import Image from "next/legacy/image";
import Visit1 from "./images/Visit1.webp";
import Visit2 from "./images/Visit2.webp";
import Visit3 from "./images/Visit3.webp";

const IndustrialVisits = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl pt-4 pb-16 lg:my-4">
          <h2 id="Group-International-Immersions" className="dmtims-title">
            Group International Immersions
          </h2>
          <div className="flex flex-col xl:flex-row">
            <div className="flex flex-col lg:pr-16">
              <p className="dmtims-subtitle">
                The ten days international immersion program of DMTIMS is the
                crown jewel of the full time PGDM program, nurturing our student
                leaders to become globally sensitized world citizens.
              </p>
              <p className="dmtims-text">
                The last three years was a learning expedition to Thailand,
                Dubai and Malaysia of global engagement which gave our students
                an opportunity to learn the language of global business, engage
                completely with global issues and transform into informed global
                citizens.
              </p>
              <p className="dmtims-text">
                International immersions act as robust and highly impactful
                launching point of the program for our PGDM student leaders
                designed to offer an immediate introduction into foundational
                business principles in a global context.
              </p>
            </div>
            <div className="ml-auto flex w-1/2 flex-shrink-0 flex-col">
              <div className="relative mt-auto h-[150px] w-full sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[550px]">
                <Image
                  priority
                  alt="Visit1"
                  src={Visit1}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex w-1/2 flex-shrink-0 flex-col">
              <div className="relative mt-auto h-[150px] w-full sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[550px]">
                <Image
                  priority
                  alt="Visit2"
                  src={Visit2}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="right"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-shrink-0 flex-col">
              <div className="relative mt-auto h-[150px] w-full sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[550px]">
                <Image
                  priority
                  alt="Visit3"
                  src={Visit3}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialVisits;
