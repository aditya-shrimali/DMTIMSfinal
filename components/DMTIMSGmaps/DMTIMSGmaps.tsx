import React from "react";

function DMTIMSGmaps() {
  return (
    <div className="flex flex-col">
      <div className="z-10 mx-auto w-full max-w-screen-2xl py-8 lg:my-8">
        <div className="flex flex-col py-4 ">
          <iframe
            className="h-[250px] w-full sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[600px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0883111413423!2d73.01128905048205!3d19.059854457369326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c137c5573567%3A0x4b9fe58b59a776ae!2sDr%20Mar%20Theophilus%20Institute%20of%20Management%20Studies%20(DMTIMS)!5e0!3m2!1sen!2sin!4v1645001138734!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default DMTIMSGmaps;
