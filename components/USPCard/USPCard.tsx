import Image, { StaticImageData } from "next/legacy/image";

interface Props {
  title: string;
  text: string;
  img: StaticImageData;
  bgColor: string;
  titleColor: string;
  textColor: string;
}

const USPCard = ({
  title,
  text,
  img,
  bgColor,
  titleColor,
  textColor,
}: Props) => {
  return (
    <div
      className={`relative flex h-64 w-full flex-col ${bgColor} py-6 px-4 lg:py-8`}
    >
      <p className={`text-6xl font-thin ${titleColor}`}>{title}</p>
      <p className={`${textColor} py-8 pb-12 font-medium`}>{text}</p>
      <div className="absolute right-6 z-10">
        <div className="relative h-40 w-40">
          <Image
            priority
            src={img}
            alt={title}
            layout="fill"
            objectFit="contain"
            objectPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default USPCard;
