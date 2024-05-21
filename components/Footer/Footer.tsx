
/** some change has been applied */
import Image from "next/legacy/image";
import Link from "next/link";
import logo from "./images/footerLogo.png";
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPinterest,
  faInstagram,
  faTwitter,
  faFacebook,
  faBehanceSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPinterest,
  faInstagram,
  faTwitter,
  faFacebook,
  faBehanceSquare,
  faLinkedinIn
);

const Footer = () => {
  const usefulLinks = [
    { id: 0, link: "/about-us", text: "About DMTIMS" },
    { id: 1, link: "https://indiraiibm.edu.in/", text: "About IIBM" },
    { id: 2, link: "/programs", text: "About Program" },
    { id: 3, link: "/careers", text: "Careers" },
    { id: 4, link: "/contact-us", text: "Contact" },
  ];

  const otherLinks = [
    { id: 0, link: "/files/EOA Report 2024-25.pdf", text: "AICTE Certificate" },
    { id: 1, link: "/mandatory-disclosure", text: "Mandatory Disclosure" },
    { id: 2, link: "/files/PGDMApplicationForm.docx", text: "Admission Form" },
    {
      id: 3,
      link: "https://dmtims.edugrievance.com/",
      text: "Grievance Redressal Portal",
    },
    { id: 4, link: "/sitemap.xml", text: "Sitemap" },
  ];

  const socialLinks = [
    {
      id: 0,
      link: "https://www.facebook.com/dmtimsofficial",
      text: faFacebook,
      backgroundColor: "hover:bg-[#4267b2]",
    },
    {
      id: 1,
      link: "https://www.instagram.com/dmtimsofficial",
      text: faInstagram,
      backgroundColor: "hover:bg-[#E1306C]",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/company/dmtimsofficial",
      text: faLinkedinIn,
      backgroundColor: "hover:bg-[#0e76a8]",
    },
    {
      id: 3,
      link: "https://twitter.com/dmtimsofficial",
      // text: faTwitter,
      backgroundColor: "hover:bg-[#1da1f2]",
    },
  ];

  return (
    <footer className="bg-[#28314A]">
      <div className="px-4">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 pt-12 pb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pb-3">
            <Link legacyBehavior href="/">
              <a>
                <div className="relative mb-6 h-14 w-40 cursor-pointer items-center">
                  <Image
                    priority
                    src={logo}
                    alt="DMTIMS-Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </a>
            </Link>
            <h6 className="footer-title">
              Dr. Mar Theophilus Institute of Management Studies
            </h6>
            <div className="flex items-center py-2">
              <LocationMarkerIcon className="mr-2 w-5 text-[#BDBDBD]" />
              <Link
                legacyBehavior
                href="https://www.google.com/maps/place/Dr+Mar+Theophilus+Institute+of+Management+Studies+(DMTIMS)/@19.0598494,73.0112944,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c137c5573567:0x4b9fe58b59a776ae!8m2!3d19.0598041!4d73.0134684"
              >
                <a className="footer-link">
                  DMTIMS, Plot No. 2, Sector 9, Sanpada, <br /> Navi Mumbai 400
                  705, Maharashtra, India
                </a>
              </Link>
            </div>
            <div className="flex items-center py-2">
              <PhoneIcon className="mr-2 w-5 text-[#BDBDBD]" />
              <div className="flex-col">
                <div className="flex-col">
                  <Link legacyBehavior href="tel:+912227753226">
                    <a className="footer-link">+91 22 2775 3226</a>
                  </Link>
                  <a className="text-[#BDBDBD]"> / </a>
                  <Link legacyBehavior href="tel:+912227753227">
                    <a className="footer-link"> 7 </a>
                  </Link>
                  <a className="text-[#BDBDBD]"> / </a>
                  <Link legacyBehavior href="tel:+912227753228">
                    <a className="footer-link"> 8 </a>
                  </Link>
                </div>
                <div className="flex-col">
                  <Link legacyBehavior href="tel:+918657860716">
                    <a className="footer-link">+91 86578 60716</a>
                  </Link>
                  <a className="text-[#BDBDBD]"> / </a>
                  <Link legacyBehavior href="tel:+918657860717">
                    <a className="footer-link"> 17 </a>
                  </Link>
                  <a className="text-[#BDBDBD]"> / </a>
                  <Link legacyBehavior href="tel:+918657860718">
                    <a className="footer-link"> 18 </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 pb-3 lg:justify-self-center">
            <h6 className="footer-title">Useful Links</h6>
            {usefulLinks.map((item) => (
              <div className="flex py-2" key={item.id}>
                <Link legacyBehavior href={item.link}>
                  <a className="footer-link" href={item.link}>
                    {item.text}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="px-2 pb-3 lg:justify-self-center">
            <h6 className="footer-title">Other Links</h6>
            {otherLinks.map((item) => (
              <div className="flex py-2" key={item.id}>
                <Link legacyBehavior href={item.link}>
                  {item.id == 1 ? (
                    <a className="footer-link">{item.text}</a>
                  ) : (
                    <a className="footer-link" target="_blank">
                      {item.text}
                    </a>
                  )}
                </Link>
              </div>
            ))}
          </div>
          <div className="px-2 pb-3 lg:justify-self-center">
            <h6 className="footer-title mb-1">For Admission Queries</h6>
            <Link legacyBehavior href="mailto:admissions@dmtims.edu.in">
              <a className="footer-link">admissions@dmtims.edu.in</a>
            </Link>
            <h6 className="footer-title mt-6 mb-1">For General Queries</h6>
            <Link legacyBehavior href="mailto:connect@dmtims.edu.in">
              <a className="footer-link">connect@dmtims.edu.in</a>
            </Link>
            <h6 className="footer-title mt-6 mb-0">Follow us</h6>
            <div className="flex py-4">
              {socialLinks.map((item) => (
                <a
                  target="_blank"
                  key={item.id}
                  href={item.link}
                  className={`group mx-2 flex h-11 w-11 overflow-hidden rounded-full bg-[#222A3F] py-3 first:ml-0 ${item.backgroundColor} select-none transition duration-200`}
                >

                {item.text ? 
                  <FontAwesomeIcon
                    className="rendering mx-auto h-5 w-7 text-[#F2F2F2] group-hover:text-white"
                    icon={item.text}
                    />
                  
                  : <>
                  
                  <svg
                  className="rendering mx-auto h-5 w-7 text-[#F2F2F2] group-hover:text-white"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fafafa" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>

                  </>}
                
                </a>
              ))}
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex bg-[#222A3F] p-4 font-bourgeois">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col-reverse lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center py-1">
            <h5 className="font-condensed text-sm font-medium text-white opacity-50">
              ©DMTIMS, {new Date().getFullYear()}. All Rights Reserved.{" "}
            </h5>
          </div>
          <div className="flex items-center justify-center py-1 text-center">
            <a
              href="https://www.bourgeois.in/"
              target="_blank"
              className="group text-sm font-medium text-white"
            >
              {" "}
              <span className="opacity-50 ">
                CONCEIVED · DESIGNED · DEVELOPED by{" "}
              </span>
              <span className="opacity-50 transition duration-300 group-hover:opacity-100">
                BOÜRGEOIS©{" "}
              </span>
              <span className="opacity-50 ">2021</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
