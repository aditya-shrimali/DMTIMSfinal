import Image from "next/legacy/image";
import Bg from "./images/PGDM.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";

import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const PGDM = () => {
  const [index, setIndex] = useState(0);

  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const el2 = useRef(null);
  const q2 = gsap.utils.selector(el2);

  useEffect(() => {
    gsap.fromTo(
      q(".pgdm-title"),
      {
        opacity: 0,
        y: 20,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 0.5,
      }
    );

    gsap.fromTo(
      q(".pgdm-sub-title"),
      {
        opacity: 0,
        y: 20,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1,
        stagger: {
          amount: 1,
        },
      }
    );

    gsap.fromTo(
      q(".pgdm-desc"),
      {
        opacity: 0,
        y: 20,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1,
        stagger: {
          amount: 1,
        },
      }
    );

    gsap.fromTo(
      q(".pgdm-line"),
      {
        width: 0,
      },
      {
        width: "100%",
        opacity: 1,
        delay: 0.5,
        duration: 1,
        stagger: {
          amount: 1,
        },
      }
    );
  }, [index]);

  return (
    <section className="relative overflow-hidden bg-[#4C477A]">
      <div className="flex flex-col px-4 pt-6">
        <div className="mx-auto w-full max-w-screen-2xl pt-8 pb-4 xl:pt-16 ">
          <div ref={el} className="lg:mx-auto lg:w-4/5 xl:mr-0 xl:w-3/5">
            <Swiper
              loop={true}
              onSlideChange={(props) => setIndex(props.realIndex)}
              className="select-none"
              navigation={{
                nextEl: ".next",
              }}
              effect={"fade"}
              spaceBetween={30}
              autoplay={{
                delay: 12000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide className="h-auto bg-[#4C477A]">
                <p className="pgdm-title">
                  Where Industry meets <br /> World-Class Academia
                </p>
                <div className="my-4 flex flex-col lg:flex-row">
                  <p className="pgdm-sub-title">
                    DISTINGUISHED <br /> SPECIALIZATIONS
                  </p>
                  <div>
                    <p className="pgdm-desc">
                      DMTIMS offers Industry 5.0 syllabus for its PGDM program
                      relevant to dynamic global business environment with
                      emphasis on International Marketing, Human Capital
                      Management, Global Finance & FinTech, Global Supply Chain
                      Management.
                    </p>
                    <div className="pgdm-line" />
                  </div>
                </div>
                <div className="my-4 flex flex-col lg:flex-row">
                  <p className="pgdm-sub-title">
                    INTELLIGENT HUMAN <br /> CAPITAL
                  </p>
                  <div>
                    <p className="pgdm-desc">
                      DMTIMS offers Industry 5.0 syllabus for its PGDM program
                      relevant to dynamic global business environment with
                      emphasis on International Marketing, Human Capital
                      Management, Global Finance & FinTech, Global Supply Chain
                      Management.
                    </p>
                    <div className="pgdm-line" />
                  </div>
                </div>
                <div className="my-4 flex flex-col lg:flex-row">
                  <p className="pgdm-sub-title">
                    MENTORING & <br /> HABITAT
                  </p>
                  <p className="pgdm-desc border-b-0">
                    With Faculty members being more than just teachers; they
                    mentor each student in terms of providing academic advice,
                    help them adjust to the higher education learning
                    environment and also creating a comfortable habitat,
                    mentoring to help them progress successfully throughout the
                    study period and thereafter.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="h-auto bg-[#4C477A]">
                <p className="pgdm-title">
                  A carefully crafted PGDM programme for leaders of the future!
                </p>
                <div className="my-4 flex flex-col lg:flex-row">
                  <p className="pgdm-sub-title">
                    GLOBAL FINANCE & <br /> FINTECH
                  </p>
                  <div>
                    <p className="pgdm-desc">
                      Global Finance & FinTech equips students to acquire
                      specialized skills and knowledge in understanding and
                      analyzing financial transactions and related activities of
                      an organization as well as to make effective and ethical
                      financial decisions related to the same.
                    </p>
                    <div className="pgdm-line" />
                  </div>
                </div>
                <div className="my-4 flex flex-col lg:flex-row">
                  <p className="pgdm-sub-title">
                    INTERNATIONAL <br /> MARKETING
                  </p>
                  <div>
                    <p className="pgdm-desc">
                      PGDM with emphasis on International Marketing encompasses
                      the fundamental approach in understanding market
                      competition and competitor’s strategy in developing
                      marketing programs and an be a rewarding prospect for an
                      aspiring student.
                    </p>
                    <div className="pgdm-line" />
                  </div>
                </div>
                <div className="my-4 flex flex-col lg:flex-row">
                  <p className="pgdm-sub-title">
                    HUMAN CAPITAL <br /> MANAGEMENT
                  </p>
                  <div>
                    <p className="pgdm-desc">
                      Managing human resources is the most important function in
                      any organization. Students taking this specialization
                      would be able to understand and develop skills in HRM,
                      particularly related to International Human Capital best
                      practices.{" "}
                    </p>
                    <div className="pgdm-line" />
                  </div>
                </div>
                <div className="my-4 flex flex-col lg:flex-row">
                  <p className="pgdm-sub-title">SUPPLY CHAIN MANAGEMENT</p>
                  <div>
                    <p className="pgdm-desc border-b-0">
                      Global Supply Chain Management & Operation equips students
                      with skills and knowledge in understanding and analyzing
                      Supply Chain and its related activities of an organization
                      as well as to make effective and efficient decisions
                      related to the same.
                    </p>
                    <div className="pgdm-line" />
                  </div>
                </div>
                <div className="my-4 flex flex-col lg:flex-row">
                  <p className="pgdm-sub-title">
                    International Business Management
                  </p>
                  <p className="pgdm-desc border-b-0">
                    This course will enhance and sharpen your critical thinking
                    skills in general management, international business, and
                    strategy. It will equip you with the knowledge and ability
                    to realize your aspirations on a worldwide scale.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="flex items-center py-2">
              <p className="flex-grow font-bold uppercase text-white">
                {index === 0 ? "Industry 5.0" : "Full-time pgdm"}
              </p>
              <div className="next flex h-1 w-40 cursor-pointer overflow-hidden rounded-full bg-[#9893C8]">
                <div
                  className={`h-1 w-1/2 transform rounded-full bg-white transition duration-200 ${
                    index === 1 ? "translate-x-20" : "translate-x-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`invisible absolute left-[-27.5rem] bottom-[-27.5rem] h-[55rem] w-[55rem] transform transition duration-[1200ms] ease-in-out xl:visible 2xl:left-[-35rem] 2xl:bottom-[-35rem] 2xl:h-[70rem] 2xl:w-[70rem] ${
          index === 1 ? "rotate-90" : "rotate-0"
        }`}
      >
        <div className="relative h-full w-full">
          <Image
            priority
            alt="PGDM"
            src={Bg}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PGDM;
