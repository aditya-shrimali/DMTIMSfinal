import Image, { StaticImageData } from "next/legacy/image";

interface Props {
  title: string;
  text: string;
  bgColor: string;
  img: StaticImageData;
}

const FlowCard = ({ title, text, bgColor, img }: Props) => {
  return (
    <div className={`relative flex flex-col ${bgColor} py-6 px-4 lg:py-8`}>
      <p className="dmtims-subtitle text-[#f2f2f2]">{title}</p>
      <p className=" pb-6 text-[#f2f2f2] sm:pb-0">{text}</p>
      <div className="absolute right-6 z-10">
        <div className="relative h-40 w-40">
          <Image
            src={img}
            alt="img"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default FlowCard;
