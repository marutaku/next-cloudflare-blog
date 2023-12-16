import StaticImage from "./common/image";
import Link from "next/link";

type ArticleCardProps = {
  title: string;
  description: string;
  imagePath: string;
  link: string;
};

export const ArticleCard = ({
  title,
  description,
  imagePath,
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
          src={imagePath}
          height={150}
          width="100%"
          alt="article image"
        />
      </div>
      <div className="p-4 content" style={{ height: 150 }}>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 break-normal" style={{ height: "100%" }}>
          {description}
        </p>
      </div>
      {/* <div className="px-4 py-1 flex items-center" style={{ height: 50 }}>
        <div className="i-mdi-cards-heart-outline w-5 h-5" />
        <div className="i-mdi-twitter w-5 h-5 text-gray-400" />
      </div> */}
    </Link>
  );
};

export default ArticleCard;
