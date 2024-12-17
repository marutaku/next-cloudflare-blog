import StaticImage from "./common/image";
import Link from "next/link";
import { ArticleMetadata } from "@/libs/articles";
import { format } from "date-fns";

import type { JSX } from "react";

type ArticleCardProps = ArticleMetadata & {
  link: string;
};

export const ArticleCard = ({
  title,
  description,
  heroImage,
  link,
  publishedDate,
}: ArticleCardProps): JSX.Element => {
  return (
    <Link
      className="bg-white border rounded-md overflow-hidden cursor-pointer block flex flex-col py-2 hover:shadow"
      style={{ width: "100%", minWidth: 300, height: 360 }}
      href={link}
    >
      <div className="relative flex justify-center ">
        <StaticImage src={heroImage} height={150} width={300} />
      </div>
      <div className="py-2 px-4 content flex-1">
        <h2 className="text-xl font-bold">{title}</h2>
        <p
          className="mt-2 break-normal overflow-hidden"
          style={{ height: "100%" }}
        >
          {description}
        </p>
      </div>
      <div className="py-2 px-4 text-right text-gray-500">
        {format(publishedDate, "yyyy/MM/dd")}
      </div>
    </Link>
  );
};

export default ArticleCard;
