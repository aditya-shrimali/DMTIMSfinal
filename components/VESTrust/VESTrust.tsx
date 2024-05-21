import Image from "next/legacy/image";
import LearnMore from "../LearnMore/LearnMore";
import IIBM from "./images/IIBM.webp";
import DMTIMS from "./images/DMTIMS.webp";
import WCCMB from "./images/WCCMB.webp";
import LegacyTimeline from "../LegacyTimeline/LegacyTimeline";
import VESTrust1 from "./VESTrust1";
import about_Dmtims  from '../../public/images/about_dmtims.webp'
const VESTrust = () => {
  const legacy = [
    // {
    //   id: 0,
    //   image: IIBM,
    //   title: "IIBM",
    //   text: [
    //     "IIBM attracts the brightest minds and puts them in an extremely diverse and competitive environment where they continuously strive for excellence while imbibing the human values and leadership qualities.",
    //     "The institute facilitates practical learning of MBA course by providing an optimal mix of classroom learning and industry exposure. It also acclimatizes students to the dynamics of changing the business world by fostering interest and due awareness, shaping strategy acumen by augmenting analytical and interpersonal skills. Students are motivated to carve a niche for themselves in the market.",
    //   ],
    //   link: "https://indiraiibm.edu.in/",
    // },
    {
      id: 1,
      image: about_Dmtims,
      title: 
      "DMTIMS",
      text: [
      //   "Welcome to VES’s Dr. Mar Theophilus Institute of Management Studies (DMTIMS), which is managed by “Malankara Orthodox Church Council of Bombay (MOCCB)”. The Institute offers a “Post Graduate Diploma in Management (PGDM)”, two years industry-focused full-time program.",
      //   "It has state-of-the-art infrastructure, specifically designed to create a stimulating atmosphere. It is located very close to Sanpada and Juinagar railway stations, Navi Mumbai.",
      

      //new lines
      

      "Nestled within the vibrant urban community of Navi Mumbai, Dr. Mar Theophilus Institute of Management Studies (DMTIMS) is strategically located, with Mumbai on one side and the picturesque hill stations of Lonavala & Khandala on the other. Surrounded by amenities such as malls, restaurants, medical centers, and transportation hubs, it offers an ideal setting for a two-year higher management education.",
      
      
      
      "Obtaining a dual degree in PGDM (Postgraduate Diploma in Management Studies) and International MBA (Master of Business Administration) from AICTE & a QS 5 Star European University offers a unique and comprehensive educational experience that can significantly enhance the career prospects and overall skill set of management students.",
      
      
      
      "Under the Vishweshwar Education Society Trust, DMTIMS is swiftly becoming the preferred Business School in Navi Mumbai. With an exceptional faculty, a rich legacy of educational institutes, and international collaborations, the institute's AICTE approved PGDM and QS 5 Star International MBA program aims to integrate education and knowledge application, creating leaders capable of positive impacts in the corporate sector.",
      
      
      
      "Recognizing the evolving workplace post-pandemic, DMTIMS addresses the gap between academic education and industry demands. Through partnerships with esteemed companies and colleges, the institute provides professional certification programs, enhancing the skill sets of its management leaders.",
      
      
      
      "DMTIMS recognizes the evolving role of global managers, emphasizing the essential aspect of social sensitivity in managerial skills. Aligned with its core values of social and environmental sensitivity, the institute incorporates a Social Relevance Project within the Dual Degree curriculum.",
      
      
      
      "These projects serve as a platform for students to engage with the socially underprivileged and less fortunate individuals in the community. Through hands-on experiences with well-established NGOs, including Shashwat Foundation, Swami Brahmanand Pratishthan, Sammaan, Dr. Mar Theophilus Ashraya Bhavan and Rays of Hope, students develop a heightened awareness of social issues affecting various groups, such as orphans, senior citizens, cancer patients, and rural communities.",
      
      
      
      "In a short span, DMTIMS has gained recognition for academic excellence, ranking 6th in Times of India Top Emerging B-Schools in India Survey 2024 as well as ranking 2nd and 3rd in 'Top Emerging B-schools in Mumbai' in 2023 and 2022, respectively. Additionally, it received the '2023 Best Management College in Maharashtra for Industry Interface' award from the Centre for Education Growth & Research.",
      
      
      
      "Pioneering a progressive environment, DMTIMS is a Lifetime Institutional Member of the Association of Indian Management Schools (AIMS) and a member of the Accreditation Council for Business Schools and Programs (ACBSP).",
    ],
      link: "",
    },
    // {
    //   id: 2,
    //   image: WCCMB,
    //   title: "WCCBM",
    //   text: [
    //     "Western College of Commerce & Business Management is conveniently located in the heart of Navi Mumbai at Sanpada. The college conducts Junior College Commerce Courses, and four undergraduate degree courses – B.Com. B.Sc. (IT), B.M.S and B.Com (Accounting & Finance). In order to fulfill the Institution’s vision WCCBM offers the industry a new breed of talented young men and women, thereby creating an atmosphere of professionalism.",
    //   ],
    //   link: "http://wccbm.ac.in/infrastructure/",
    // },
  ];

  return (
    <section className="relative bg-white" >
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-4 lg:my-4">
          <h2 id="VES-Trust" className="dmtims-title">
            {/* VES Trust’s Legacy */}
            Our Heritage
          </h2>
          <p className="dmtims-text lg:w-4/5 sm:text-xl text-base ">
            The prestigious MOCCB run VES Trust's Group of Institutes are
            pioneers in education in Mumbai well known for its chain of
            educational institutes established all over Maharashtra and Gujarat
            from KG to PG. More popularly known as the St. Mary's Group of
            Institutes, the span of various schools spreads across different
            cities in Maharashtra, whereas the junior college, the undergraduate
            college and the post graduate colleges are based in Navi Mumbai.
          </p>
          <LegacyTimeline />
          <div className="grid grid-cols-1 gap-6  xl:gap-8 2xl:gap-10" id="dmtims">

            {legacy.map(({ id, image, title, text, link }) => (
              <div key={id} id={title} className="flex flex-col" >
                <p className="dmtims-title">{title}</p>
                <div className="relative mb-6 h-[250px] w-full sm:h-[300px] md:h-[350px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] bg-slate-700">
                  <Image
                    priority
                    src={image}
                    alt={"img" + id}
                    layout="fill"
                     objectFit="cover"
                  />
                </div>
                {text.map((item, i) => (
                  <p key={i} className="dmtims-text sm:text-lg text-base">
                    {item}
                  </p>
                 
                ))}
                <h1 className="text-[#C74F6B] font-bold sm:text-2xl text-base">
                Here are several reasons why pursuing such a dual degree is considered a highly advantageous option:
                </h1>
                <h1 className="dmtims-text sm:text-lg text-base">

                <VESTrust1/>
                </h1>
                {id != 1 && <LearnMore link={link} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VESTrust;
