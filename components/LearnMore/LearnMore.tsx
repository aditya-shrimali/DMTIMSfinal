import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/outline";

const LearnMore = ({ link = "#" }) => {
  return (
    <div className="flex">
      <Link legacyBehavior href={link}>
        <a className="group border-b-2 py-1 last:border-none">
          <div className="flex items-center border-[#BDBDBD]">
            <ArrowRightIcon className="h-8 w-8 transform rounded-full border-2 border-[#FFB800] p-1 text-[#FFB800] transition duration-300 group-hover:rotate-45" />
            <p className="flex-grow px-2 font-medium text-[#4C477A] lg:text-lg">
              Learn More
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default LearnMore;
