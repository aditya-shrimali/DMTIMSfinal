import { motion } from "framer-motion";
import $ from "jquery";
import ls from "localstorage-slim";
import { gsap } from "gsap";
import { createRef, useRef, useState } from "react";
import DMTIMSModal from "../DMTIMSModal/DMTIMSModal";
import EventModal from "../EventModal/EventModal";

const Preloader = () => {
  const [openDMTIMSModal, setOpenDMTIMSModal] = useState(false);
  const [openEventModal, setOpenEventModal] = useState(false);

  const icon = {
    hidden: { opacity: 0, pathLength: 0, fill: "rgba(65,76,108, 0)" },
    visible: { opacity: 1, pathLength: 1, fill: "rgba(65,76,108, 1)" },
  };
  const icon2 = {
    hidden: { opacity: 0, pathLength: 0, fill: "rgba(238,55,104, 0)" },
    visible: { opacity: 1, pathLength: 1, fill: "rgba(238,55,104, 1)" },
  };
  const icon3 = {
    hidden: { opacity: 0, pathLength: 0, fill: "rgba(40,49,74, 0)" },
    visible: { opacity: 1, pathLength: 1, fill: "rgba(40,49,74, 1)" },
  };
  const icon4 = {
    hidden: { opacity: 0, pathLength: 0, fill: "rgba(76,71,122, 0)" },
    visible: { opacity: 1, pathLength: 1, fill: "rgba(76,71,122, 1)" },
  };

  var key = Boolean(ls.get("key"));

  const el = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(el);

  function onComplete() {
    if (key) {
      $(".loader-wrapper-2").css({
        transform: "translateY(-100%)",
      });
      $(".loader-wrapper").css({
        opacity: "0",
      });
      $(".loader-wrapper")
        .delay(500)
        .queue(function (next) {
          $(".loader-wrapper").css({
            transform: "translateY(-100%)",
          });
          next();
        });
      setTimeout(() => {
        setOpenDMTIMSModal(true);
      }, 2500);
    } else {
      $(".loader-wrapper").css({
        opacity: "0",
      });

      gsap.fromTo(
        q("h3"),
        {
          y: 135,
          skewY: 7,
        },
        {
          y: 0,
          ease: "power4.out",
          duration: 1.8,
          delay: 0.5,
          skewY: 0,
          stagger: {
            amount: 1.8,
          },
        }
      );

      $(".loader-wrapper-2")
        .delay(2500)
        .queue(function (next) {
          $(".loader-wrapper").css({
            transform: "translateY(-100%)",
          });
          $(this).css({
            transform: "translateY(-100%)",
          });
          ls.set("key", "false", { ttl: 3600 });
          next();
        });

      setTimeout(() => {
        setOpenEventModal(true);
      }, 4500);
    }
  }

  return (
    <section className="preloader">
      <div className="loader-wrapper flex items-center justify-center p-36">
        <motion.svg
          width="100"
          height="327"
          viewBox="0 0 238 327"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            className="preloader-item"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M138.708 326.373C132.351 325.667 125.288 324.961 118.932 324.255C92.7989 321.429 68.0787 313.66 46.8899 298.122C24.2886 281.171 11.5753 257.863 5.92497 230.318C3.8061 221.136 3.8061 211.954 3.8061 202.772C3.0998 190.765 3.8061 178.758 3.8061 166.751C3.8061 165.339 5.21868 163.926 5.92497 162.514C5.92497 163.926 7.33756 165.339 7.33756 166.751C7.33756 180.171 7.33756 194.297 7.33756 207.716C8.75014 253.625 33.4704 294.59 77.9668 310.835C99.1555 318.604 120.344 322.136 142.946 321.429C146.477 321.429 148.596 322.842 148.596 326.373C145.065 326.373 141.533 326.373 138.708 326.373Z"
            fill="#414C6C"
          />
          <motion.path
            className="preloader-item"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M146.484 308.717C127.414 308.717 109.051 306.598 91.3934 300.948C68.792 293.885 50.4284 281.878 37.7152 262.102C26.4145 245.151 19.3516 226.081 19.3516 204.892C19.3516 192.179 19.3516 180.172 19.3516 167.458C19.3516 163.927 20.0579 163.221 23.5893 163.221C63.1417 163.221 102.694 163.221 142.246 163.221C143.659 163.221 145.072 163.221 146.484 163.221C146.484 211.955 146.484 259.983 146.484 308.717Z"
            fill="#414C6C"
          />
          <motion.path
            className="preloader-item2"
            variants={icon2}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M19.3516 0.772698C22.883 0.772698 25.0019 0.0664062 27.8271 0.0664062C65.9668 0.0664062 104.107 0.0664062 142.246 0.0664062C146.484 0.0664062 147.897 1.47899 147.897 5.71674C147.897 51.6257 147.897 96.8284 147.897 142.737C147.897 146.269 146.484 147.681 142.953 147.681C103.4 147.681 63.848 147.681 24.2956 147.681C21.4704 147.681 20.0579 146.975 20.0579 144.15C19.3516 96.1221 19.3516 48.8006 19.3516 0.772698ZM104.107 99.6536C112.582 99.6536 121.764 99.6536 130.946 99.6536C134.477 99.6536 135.89 98.241 135.89 94.7095C135.89 81.9963 135.89 69.9893 135.89 57.2761C135.89 53.0383 134.477 52.332 130.946 52.332C123.177 52.332 115.407 52.332 108.344 52.332C106.932 52.332 104.107 50.9194 104.107 49.5069C103.4 46.6817 104.107 43.1502 104.107 38.9125C112.582 38.9125 121.058 38.9125 128.827 38.9125C131.652 38.9125 133.065 38.2062 133.065 35.381C133.065 32.5558 131.652 31.8496 128.827 31.8496C122.47 31.8496 116.114 31.8496 109.757 31.8496C102.694 31.8496 102.694 31.1433 104.107 24.0803C113.995 24.0803 123.176 24.0803 133.065 24.0803C133.771 17.0174 133.771 17.0174 128.121 17.0174C118.939 17.0174 109.757 17.0174 99.8689 17.0174C92.806 17.0174 92.806 17.0174 92.806 24.0803C92.806 33.2621 92.806 42.4439 92.806 51.6257C87.8619 53.0383 85.743 51.6257 86.4493 46.6817C86.4493 38.2062 86.4493 29.7307 86.4493 21.2552C86.4493 17.7237 85.743 17.0174 82.2116 16.3111C77.9738 16.3111 76.5612 17.0174 76.5612 21.9615C76.5612 31.8496 76.5612 41.7376 76.5612 50.9194C72.3235 52.332 70.9109 50.9194 70.9109 47.388C70.9109 38.9125 70.9109 30.437 70.9109 21.2552C70.9109 18.43 70.9109 16.3111 66.6731 16.3111C56.0788 16.3111 46.1907 16.3111 35.5963 16.3111C29.9459 16.3111 29.2397 17.0174 31.3585 23.374C41.2466 23.374 51.1347 23.374 61.0228 23.374C61.0228 30.437 61.0228 30.437 54.6662 30.437C48.3095 30.437 41.9529 30.437 35.5963 30.437C32.0648 30.437 30.6522 32.5558 32.0648 35.381C32.7711 38.2062 35.5963 39.6188 37.0089 39.6188C45.4844 39.6188 53.2536 39.6188 61.7291 39.6188C61.7291 41.0313 61.7291 41.7376 61.7291 42.4439C61.7291 53.0383 61.7291 53.0383 51.841 53.0383C45.4844 53.0383 39.1277 53.0383 32.0648 53.0383C32.0648 67.8704 32.0648 82.7026 32.0648 96.8284C32.0648 97.5347 34.89 99.6536 36.3026 99.6536C43.3655 99.6536 50.4284 99.6536 57.4913 99.6536C60.3165 99.6536 61.7291 100.36 61.7291 103.185C61.7291 106.01 61.0228 107.423 57.4913 107.423C51.1347 107.423 44.0718 107.423 37.7152 107.423C31.3585 107.423 31.3585 108.129 33.4774 115.192C42.6592 115.192 52.5473 115.192 61.7291 115.192C62.4354 122.255 62.4354 122.961 55.3725 122.961C49.0158 122.961 41.9529 122.961 35.5963 122.961C33.4774 122.961 31.3585 122.961 31.3585 126.493C31.3585 130.024 33.4774 130.024 35.5963 130.024C46.1907 130.024 56.0788 130.024 66.6731 130.024C70.2046 130.024 71.6172 128.612 71.6172 125.08C71.6172 118.017 71.6172 110.954 71.6172 103.891C71.6172 99.6536 73.7361 99.6536 77.2675 100.36C77.2675 108.835 77.2675 116.605 77.2675 124.374C77.2675 127.905 77.9738 129.318 81.5053 129.318C82.9179 129.318 84.3304 129.318 86.4493 129.318C86.4493 120.842 86.4493 113.073 86.4493 105.304C86.4493 99.6536 87.1556 99.6536 92.806 101.066C92.806 108.835 92.806 117.311 92.806 125.08C92.806 129.318 94.2185 130.73 97.75 130.73C107.638 130.73 117.526 130.73 127.414 130.73C130.239 130.73 133.065 130.73 133.065 126.493C133.065 122.255 130.239 122.961 127.414 122.961C119.645 122.961 111.17 122.961 102.694 122.961C102.694 120.136 102.694 118.017 102.694 115.192C104.813 115.192 106.932 115.192 108.344 115.192C114.701 115.192 120.351 115.192 126.708 115.192C128.827 115.192 131.652 115.192 131.652 111.661C131.652 108.129 129.533 108.129 126.708 108.129C121.058 108.129 114.701 108.129 109.051 108.129C102.694 108.835 101.988 107.423 104.107 99.6536Z"
            fill="#EE3768"
          />
          <motion.path
            className="preloader-item3"
            variants={icon3}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M161.316 60.1016C186.742 60.1016 212.169 60.1016 237.595 60.1016C237.595 62.9267 237.595 65.0456 237.595 67.1645C237.595 91.8847 237.595 116.605 237.595 141.325C237.595 146.269 236.183 147.682 231.239 147.682C209.344 147.682 187.448 147.682 165.553 147.682C162.728 147.682 160.609 147.682 160.609 144.15C160.609 116.605 160.609 89.7658 160.609 62.2204C160.609 61.5141 161.316 60.8079 161.316 60.1016Z"
            fill="#28314A"
          />
          <motion.path
            className="preloader-item4"
            variants={icon4}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M161.312 250.802C161.312 221.844 161.312 193.592 161.312 163.928C186.739 163.928 211.459 163.928 236.886 163.928C243.949 216.9 217.11 251.508 161.312 250.802Z"
            fill="#4C477A"
          />
          <motion.path
            className="preloader-item2"
            variants={icon2}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M0.28125 0.774515C8.75676 -0.63807 9.46305 -0.63807 9.46305 7.83744C9.46305 52.3338 9.46305 97.5366 9.46305 142.033C9.46305 144.858 9.46305 147.683 5.2253 147.683C0.28125 147.683 0.28125 144.858 0.28125 141.327C0.28125 98.9491 0.28125 56.5716 0.28125 14.1941C0.28125 9.95631 0.28125 5.71856 0.28125 0.774515Z"
            fill="#EE3768"
          />
          <motion.path
            className="preloader-item2"
            variants={icon2}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M112.578 92.5903C111.166 92.5903 110.46 92.5903 109.753 92.5903C101.984 92.5903 101.984 92.5903 101.984 84.8211C101.984 78.4644 102.69 72.1078 101.984 65.7512C101.278 60.8071 103.397 59.3945 108.341 59.3945C109.753 59.3945 111.166 59.3945 112.578 59.3945C112.578 71.4015 112.578 81.9959 112.578 92.5903Z"
            fill="#EE3768"
          />
          <motion.path
            className="preloader-item2"
            variants={icon2}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M94.2185 91.884C86.4493 91.884 79.3863 91.884 73.0297 91.884C71.6171 91.884 70.2045 90.4714 70.2045 89.0588C69.4982 87.6462 70.2045 85.5273 70.2045 83.4085C70.2045 79.877 70.9108 78.4644 74.4423 79.1707C79.3863 79.1707 85.0367 79.1707 89.9807 79.1707C94.2185 79.1707 95.6311 80.5833 94.9248 84.1148C94.2185 86.9399 94.2185 89.0588 94.2185 91.884Z"
            fill="#EE3768"
          />
          <motion.path
            className="preloader-item2"
            variants={icon2}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M94.2171 60.8086C94.2171 65.0463 94.2171 67.8715 94.2171 72.1093C86.4478 72.1093 77.9723 72.1093 70.2031 72.1093C70.2031 68.5778 70.2031 65.0463 70.2031 60.8086C77.9723 60.8086 85.7416 60.8086 94.2171 60.8086Z"
            fill="#EE3768"
          />
          <motion.path
            className="preloader-item2"
            variants={icon2}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M128.826 60.1024C128.826 70.6967 128.826 80.5848 128.826 89.7666C128.826 90.4729 126 91.8855 124.588 91.8855C123.175 91.8855 120.35 90.4729 120.35 89.7666C119.644 80.5848 119.644 72.1093 120.35 62.9275C120.35 57.9835 125.294 60.8086 128.826 60.1024Z"
            fill="#EE3768"
          />
          <motion.path
            className="preloader-item2"
            variants={icon2}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M61.7316 59.3945C61.7316 69.9889 61.7316 79.877 61.7316 89.7651C61.7316 90.4714 58.9064 92.5903 58.2001 92.5903C56.7875 92.5903 53.9623 91.1777 53.9623 89.7651C53.9623 80.5833 53.2561 72.1078 53.9623 62.926C53.9623 57.2757 58.9064 60.8071 61.7316 59.3945Z"
            fill="#EE3768"
          />
          <motion.path
            onAnimationComplete={() => onComplete()}
            className="preloader-item2"
            variants={icon2}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M39.125 92.591C39.125 81.9966 39.125 72.8148 39.125 62.9267C39.125 62.2204 41.9502 60.1016 43.3628 60.1016C44.069 60.1016 46.1879 62.2204 46.8942 62.9267C46.8942 71.4022 46.8942 79.8777 46.8942 88.3533C46.1879 94.7099 42.6565 91.8847 39.125 92.591Z"
            fill="#EE3768"
          />
        </motion.svg>
      </div>
      <div
        ref={el}
        className="loader-wrapper-2 flex items-center justify-center p-10"
      >
        <div className="relative h-[1.625rem] overflow-hidden sm:h-[1.75rem] md:h-[2rem] lg:h-[2.375rem] xl:h-[2.75rem] ">
          <h3 className="dmtims-condensed text-lg font-bold text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Be at the forefront of innovation
          </h3>
        </div>
      </div>
      <DMTIMSModal open={openDMTIMSModal} />
      <EventModal open={openEventModal} />
    </section>
  );
};

export default Preloader;
