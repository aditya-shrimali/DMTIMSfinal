import Image, { StaticImageData } from "next/legacy/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";

interface Props {
  img: string;
  title: string;
  date: string;
}

const SmallEventCard = ({ img: cardBg, date, title }: Props) => {
  return (
    <div className="flex h-64 flex-col">
      <div className="flex flex-grow px-3 py-2">
        <p className=" text-white">{title}</p>
      </div>
      <div className="relative h-44">
        <Image src={cardBg} alt="cardBg" layout="fill" objectFit="cover" />
        <p className="absolute bottom-2 left-2 text-sm text-white">
          <em>{date}</em>
        </p>
      </div>
    </div>
  );
};

export default SmallEventCard;
