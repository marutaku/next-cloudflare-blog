import StaticImage from "./common/image";
import Link from "next/link";
import { ArticleMetadata } from "@/libs/articles";

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
      style={{ width: "100%" }}
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
      <div className="p-4 content">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 break-normal" style={{ height: "100%" }}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ArticleCard;
