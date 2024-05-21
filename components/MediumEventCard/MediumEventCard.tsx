import Image, { StaticImageData } from "next/legacy/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";

interface Props {
  img: string;
  title: string;
  desc: string;
  date: string;
}

const MediumEventCard = ({ img: cardBg, title, date, desc }: Props) => {
  return (
    <div className="flex h-64">
      <div className="relative w-64">
        <Image src={cardBg} alt="cardbg" layout="fill" objectFit="cover" />
        <p className="absolute bottom-2 left-2 text-sm text-white">
          <em>{date}</em>
        </p>
      </div>
      <div className="flex w-64 flex-col px-3 py-2 pb-4">
        <p className=" pb-2 text-white">{title}</p>
        <p className="flex-grow text-sm text-white">{desc}</p>
      </div>
    </div>
  );
};

export default MediumEventCard;
