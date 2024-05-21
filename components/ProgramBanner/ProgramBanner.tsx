import Image from "next/legacy/image";
import Bg from "./images/ProgramBg.webp";

const ProgramBanner = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl pt-8 pb-4 ">
          <div className="flex flex-col py-4 lg:flex-row lg:items-center">
            <div className="flex-shrink-0 pb-2 lg:mx-auto lg:py-10">
              <div className="relative h-[2.25rem] overflow-hidden sm:h-[3.5rem] md:h-[4.25rem] xl:h-[5rem] 2xl:h-[6.5rem]">
                <h4 className="text-3xl font-bold tracking-tighter text-[#EE3768] sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
                  An Industry focused
                </h4>
              </div>
              <div className="relative h-[2.25rem] overflow-hidden sm:h-[3.5rem] md:h-[4.25rem] xl:h-[5rem] 2xl:h-[6.5rem]">
                <h4 className="text-3xl font-bold tracking-tighter text-[#EE3768] sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
                  full-time{" "}
                  <u className="text-[#FFB800]">
                    <em className="text-[#EE3768]">PGDM</em>
                  </u>{" "}
                  course
                </h4>
              </div>
            </div>
            <div className="flex-grow lg:px-8 xl:px-16">
              <p className="pb-5 text-lg font-medium text-[#28314A] sm:text-xl md:pb-8 md:text-2xl xl:text-3xl">
                A course designed especially for you
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[225px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]">
        <Image
          priority
          alt="ProgramBanner"
          src={Bg}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default ProgramBanner;
