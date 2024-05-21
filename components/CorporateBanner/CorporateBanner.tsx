import Image from "next/legacy/image";
import React from "react";
import Bg from "./images/bg.webp";

function CorporateBanner() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]">
        <Image
          priority
          alt="Faculty-Banner"
          src={Bg}
          layout="fill"
          // objectFit="cover"
        />
      </div>
    </section>
  );
}

export default CorporateBanner;
