import React from 'react'
import Image from "next/legacy/image";
import SusyKuriakose from "./images/SusyKuriakose.webp";
import SusenVarghese from "./images/SusenVarghese.webp";
import director1 from "../../public/images/director1.jpg";
import director2 from "../../public/images/director2.jpg";
import director3 from "../../public/images/director3.jpg";


const Directors = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4 ">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4  ">
          <h2 id="Heads" className="dmtims-title  ">
            Our Directors
          </h2>

          {/* director1 for big screen*/}
          <p className="dmtims-subtitle text-lg  pb-0 font-bold text-[#ED1C24] sm:text-3xl  ">
            From the Desk of Executive Director - VES Trust
          </p>
          <div className="hidden sm:pb-8  md:flex  lg:gap-0 ">
            <div className="flex flex-col ">
              <div className="relative h-full w-full  ">
                <div className="hidden    h-full w-56 md:flex   ">
                  <Image
                    priority
                    src={director1}
                    alt="ambarishPatnigere "
                    layout="fill"
                    //   objectFit="contain"
                  />
                </div>
              </div>
            </div>

            <div id="Philipose-Mar-Theophilus" className="flex flex-col px-4 ">
              <p className="dmtims-text text-justify text-base lg:text-xl  ">
              At Dr. Mar Theophilus Institute of Management Studies we have adopted innovation and creativity as major tools to ensure that we prepare our students to acquire the knowledge and skills that will enable them to lead in diverse areas. DMTIMS engagement in research, both at national and international levels, provides a great opportunity for professional development along with a competitive advantage.  
DMTIMS is committed to the development of professionalism, leadership qualities, innovation and entrepreneurship attributes among its graduates. We have a history of excellent placements in multiple organizations. I encourage you to connect with us and look forward to the opportunities that await you at DMTIMS. 
              </p>
              <span className=" text-base font-bold sm:text-lg">
              Dr. Ambarish Patnigere (Former Add. Commissioner)
              
(LLD, PhD (LAW), LLM, MAM, MSc)
              </span>
            </div>
          </div>


            {/* director 1 for small screen */}
          <div className="md:hidden grid grid-cols-1 gap-4 pt-2 lg:grid-cols-2  lg:gap-0 ">
            <div>
              <div className="flex flex-col   ">
                <div
                  className="relative mt-auto h-[250px] w-full  sm:h-[300px]
               
                md:h-[350px] lg:h-[450px] lg:w-[400px] xl:h-[350px] xl:mt-8 "
                >
                  <div className="flex w-full md:hidden">
                    <Image
                      priority
                      src={director1}
                      alt="ambarishPatnigere "
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>

                  <div className="hidden h-[330px] w-full pt-8 lg:flex  lg:px-8 ">
                    <Image priority src={director1} alt="ambarishPatnigere "
                    layout="fill"
                    objectFit="contain" />
                  </div>
                </div>
              </div>
            </div>
            <div id="Ambarish-Patnigere" className="flex flex-col py-4 ">
              <p className="dmtims-text   text-justify text-base">
                At Dr. Mar Theophilus Institute of Management Studies we have
                adopted innovation and creativity as major tools to ensure that
                we prepare our students to acquire the knowledge and skills that
                will enable them to lead in diverse areas. DMTIMS engagement in
                research, both at national and international levels, provides a
                great opportunity for professional development along with a
                competitive advantage. DMTIMS is committed to the development of
                professionalism, leadership qualities, innovation and
                entrepreneurship attributes among its graduates. We have a
                history of excellent placements in multiple organizations. I
                encourage you to connect with us and look forward to the
                opportunities that await you at DMTIMS.
              </p>
              <span className="text-base font-bold sm:text-lg">
                Dr. Ambarish Patnigere (Former Add. Commissioner) (LLD, PhD
                (LAW), LLM, MAM, MSc)
              </span>
            </div>
          </div>






          <p className="dmtims-subtitle text-lg  pb-0 pt-2 font-bold text-[#ED1C24] sm:text-3xl  ">
            From the desk of Director of Administration - VES trust
          </p>
          {/* director2 for big screen*/}
          <div className="hidden sm:pb-8 md:flex  md:flex-row-reverse  lg:gap-0 ">
            <div className="flex flex-col ">
              <div className="relative h-full w-full  ">
                <div className="hidden    h-full w-56 md:flex   ">
                  <Image
                    priority
                    src={director2}
                    alt="ambarishPatnigere "
                    layout="fill"
                    //   objectFit="contain"
                  />
                </div>
              </div>
            </div>

            <div id="Philipose-Mar-Theophilus" className="flex flex-col pr-4 ">
              <p className="dmtims-text text-justify text-base lg:text-xl  ">
              I am thrilled to introduce you to our PGDM program and our
                institution, where academic excellence meets a nurturing
                environment dedicated to fostering growth and innovation. As the
                Director of Administration, it is my privilege to welcome you to
                explore the myriad opportunities our institution offers. Our
                commitment to providing top-notch education, coupled with
                cutting-edge facilities, ensures an enriching learning
                experience. Join us on a journey where knowledge meets
                inspiration, where passion meets purpose. Discover a community
                that values diversity, embraces creativity, and empowers its
                students to become tomorrow's leaders. We invite you to be a
                part of our vibrant community and embark on a transformative
                educational adventure.
              </p>
              <span className="dmtims-subtitle text-base font-bold md:text-lg">
              Fr. Santhosh Varghese (BSc, BEd, BD)
              </span>
            </div>
          </div>

        {/* director2 for small screen */}
          <div className="md:hidden grid grid-cols-1 gap-4 lg:grid-cols-2  lg:gap-0  
          xl:space-x-56">
            <div id="Santosh-Varghese" className="flex flex-col py-4">
              <p className="dmtims-text py-4 text-justify sm:text-lg text-base">
                I am thrilled to introduce you to our PGDM program and our
                institution, where academic excellence meets a nurturing
                environment dedicated to fostering growth and innovation. As the
                Director of Administration, it is my privilege to welcome you to
                explore the myriad opportunities our institution offers. Our
                commitment to providing top-notch education, coupled with
                cutting-edge facilities, ensures an enriching learning
                experience. Join us on a journey where knowledge meets
                inspiration, where passion meets purpose. Discover a community
                that values diversity, embraces creativity, and empowers its
                students to become tomorrow's leaders. We invite you to be a
                part of our vibrant community and embark on a transformative
                educational adventure.
              </p>
              <span className=" text-base font-bold sm:text-lg">
                Fr. Santhosh Varghese (BSc, BEd, BD).
              </span>
            </div>
            <div className="flex flex-col  lg:order-last order-first mt-4 lg:mt-0 ">
              <div className="relative mt-auto h-[250px] w-full  sm:h-[300px] md:h-[350px] lg:h-[450px] ">
                <div className="flex w-full  md:hidden">
                  <Image
                    priority
                    src={director2}
                    alt="santosh varghese"
                    layout="fill"
                    objectFit="contain"
                    // objectPosition="right"
                  />
                </div>

               
              </div>
            </div>
          </div>



        <div>
          <p className="dmtims-subtitle text-lg  py-2 pb-0 font-bold text-[#ED1C24] sm:text-3xl ">
            From the desk of Director - DMTIMS
          </p>
          {/* director3 for big screen */}
        
          <div className="hidden sm:pb-8 md:flex  lg:gap-0 ">
            <div className="flex flex-col ">
              <div className="relative h-full w-full  ">
                <div className="hidden    h-full w-56 md:flex   ">
                  <Image
                    priority
                    src={director3}
                    alt="ambarishPatnigere "
                    layout="fill"
                    //   objectFit="contain"
                  />
                </div>
              </div>
            </div>

            <div id="Philipose-Mar-Theophilus" className="flex flex-col px-4 ">
              <p className="dmtims-text text-justify text-base lg:text-xl  ">
              A warm welcome to Dr. Mar Theophilus Institute of Management
                Studies Post Graduate Diploma in Management (PGDM) program, a
                professional journey of two years of restyling your thought
                process, perception towards life and its choices, interesting
                academic and cultural experiences and a tenure of exceptionally
                woven set of learning experiences to build a great career in
                higher management education. Our best-in-class faculty and
                industry relevant certifications facilitate our student leaders
                to polish their employment profile. An average of 6/7 placement
                offers per student each year with multinational and blue-chip
                companies, is a worthy ROI for our young managers. Our
                well-placed alumni nationally and internationally, over the last
                one decade, have always been the pride of their alma mater. I
                and my team, look forward to have you, as an invaluable part, of
                our DMTIMS family.
              </p>
              <span className="dmtims-subtitle text-base font-bold md:text-lg">
              Dr. Susen Varghese (PhD, MBA, MSW, PGDHRD, B.Com - Hons.)
              </span>
            </div>
          </div>


        {/* director3 for small screen   */}
          <div className="md:hidden grid grid-cols-1 gap-4 pt-4 lg:grid-cols-2  lg:gap-0">
            <div>
              <div className="flex flex-col">
                <div className="relative mb-auto h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[450px] lg:w-[499px]  ">
                  <div className="flex w-full md:hidden ">
                    <Image
                      priority
                      src={director3}
                      alt="Susen-Varghese"
                      layout="fill"
                      objectFit="contain"
                      // objectPosition="left "
                    />
                  </div>

                  <div className="hidden  w-full pt-8 lg:flex    lg:px-8 ">
                    <Image priority src={director3} alt="Susen-Varghese" />
                  </div>
                </div>
              </div>
            </div>
            <div id="Susen-Varghese" className="flex flex-col py-4">
              <p className="dmtims-text py-4 text-justify sm:text-lg text-base">
                A warm welcome to Dr. Mar Theophilus Institute of Management
                Studies Post Graduate Diploma in Management (PGDM) program, a
                professional journey of two years of restyling your thought
                process, perception towards life and its choices, interesting
                academic and cultural experiences and a tenure of exceptionally
                woven set of learning experiences to build a great career in
                higher management education. Our best-in-class faculty and
                industry relevant certifications facilitate our student leaders
                to polish their employment profile. An average of 6/7 placement
                offers per student each year with multinational and blue-chip
                companies, is a worthy ROI for our young managers. Our
                well-placed alumni nationally and internationally, over the last
                one decade, have always been the pride of their alma mater. I
                and my team, look forward to have you, as an invaluable part, of
                our DMTIMS family.
              </p>
              <span className=" text-base font-bold sm:text-lg">
                Dr. Susen Varghese (PhD, MBA, MSW, PGDHRD, B.Com - Hons.)
              </span>
            </div>
          </div>
        </div>
        
        </div>


      </div>
    </section>
  )
}

export default Directors