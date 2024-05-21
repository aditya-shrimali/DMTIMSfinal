import Image from "next/legacy/image";
import bg from "./images/NewsLetter.png";

const NewsLetter = () => {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col px-4">
        <div className="mx-auto w-full max-w-screen-2xl pt-8 lg:my-4">
          <h4 className="dmtims-title">Newsletter</h4>
        </div>
      </div>
      <div className="flex flex-col bg-[#4C477A] px-4">
        <div className="mx-auto w-full max-w-screen-2xl py-8 lg:my-4">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:pr-16">
              <h4 className="dmtims-title text-white">
                DMTIMS Newsletter 2023
              </h4>
              <p className="dmtims-text text-white">
                To give spiritual touch, students were taken to the temple of
                Shri Naina Devi Ji, and Gajjra Devi Ji. Next students visited
                ‘The Mall Road’ of Nainital, which runs parallel to the Naini
                Lake, connecting the two ends of the hill town, and is the prime
                shopping place. Students continued shopping in Tibetan Market
                which is popular for extensive variety of woolens and winter
                wears.
              </p>
              <p className="dmtims-text text-white">
                Industrial visit was arranged for students in Dainik Jagran.
                Students were guided by Mr. Sanjay Kumar Arya-Brand Manager and
                and Mr. Suraj Mehra, Public Sales and Marketing executive about
                various aspects of their industry. Mr. Ragvir Chadda, General
                Manager of Dainik Jagran shared his insights about the print
                industry with students.
              </p>
              <p className="dmtims-subheading text-white">
                Industrial Visit was conducted from 29th January, 2020 to 4th
                February, 2020 to Manali. 81 students from PGDM batch
                accompanied by two teachers attended the visit. Soothing and
                scenic beauty of Solang Valley, Beas River gave mesmerizing
                experience to students.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-col lg:w-1/2">
              <div className="relative mt-auto h-[350px] w-full overflow-hidden rounded-xl sm:h-[450px] md:h-[550px] lg:h-[650px]">
                <Image
                  priority
                  src={bg}
                  alt="Newsletter"
                  layout="fill"
                  objectFit="cover"
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

export default NewsLetter;
