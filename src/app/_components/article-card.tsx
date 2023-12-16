import StaticImage from "./common/image";
import Link from "next/link";
import { ArticleMetadata } from "@/libs/articles";
import {format} from "date-fns";

type ArticleCardProps = ArticleMetadata & {
  link: string;
};

export const ArticleCard = ({
  title,
  description,
  heroImage,
  link,
}: ArticleCardProps): JSX.Element => {
  return (
    <Link
      className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer block"
      style={{ width: 300, height: 360 }}
      href={link}
    >
      <div className="relative flex justify-center ">
        <StaticImage
          src={heroImage}
          height={150}
          width="100%"
          alt="article image"
        />
      </div>
      <div className="py-4 px-2 content">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 break-normal" style={{ height: "100%" }}>
          {description}
        </p>
      </div>
      <div className="px-4 relative bottom-px">
        {format(new Date(), "yyyy/MM/dd")}
      </div>
    </Link>
  );
};

export default ArticleCard;
