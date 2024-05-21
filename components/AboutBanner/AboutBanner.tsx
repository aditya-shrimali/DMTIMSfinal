import Image from "next/legacy/image";
import Bg from "./images/AboutBg.webp";

const AboutBanner = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl pb-4 pt-8 ">
          <div className="flex flex-col py-4 lg:flex-row lg:items-center">
            <div className="flex-shrink-0 pb-2 lg:mx-auto lg:py-10">
              <div className="relative h-[3.5rem] overflow-hidden md:h-[4.25rem] lg:h-[5rem] xl:h-[6.5rem]">
                <h4 className="text-5xl font-bold tracking-tighter text-[#EE3768] md:text-6xl lg:text-7xl xl:text-8xl">
                  Our vision for
                </h4>
              </div>
              <div className="relative mb-5 h-[3.5rem] overflow-hidden md:h-[4.25rem] lg:h-[5rem] xl:h-[6.5rem]">
                <h4 className="text-5xl font-bold tracking-tighter text-[#EE3768] md:text-6xl lg:text-7xl xl:text-8xl">
                  <u className="text-[#FFB800]">
                    <em className="text-[#EE3768]">future</em>
                  </u>{" "}
                  leaders
                </h4>
              </div>
            </div>
            <div className="flex-grow lg:px-8 xl:px-16">
              <p className="pb-5 text-lg font-medium text-[#28314A] sm:text-xl md:pb-8 md:text-2xl xl:text-3xl">
                To be one of the most preferred institutes in higher management
                education.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
        <Image
          priority
          className=""
          alt="about-background"
          src={Bg}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col bg-[#4C477A] px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-6">
          <div className="flex flex-col py-4 ">
            <p
              id="Mission"
              className="pb-2 font-bold uppercase text-[#FFB800] lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              Our Mission
            </p>
            <div className="text-lg font-medium text-white lg:text-xl xl:text-2xl 2xl:text-3xl">
              <em>
                {/* “To create a competitive learning environment to enable our
                stakeholders to realize their full potential” */}
              </em>
              <p>
                To develop managerial, analytical, and collaborative skills
                related to the business environment.
              </p>
              <p>
                To inculcate and nurture a sense of ethics and values among the
                students.
              </p>
              <p>
                To provide education that enables students to apply knowledge
                of management in their respective domains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
