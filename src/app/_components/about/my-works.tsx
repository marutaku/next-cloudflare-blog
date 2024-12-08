import Link from "next/link";

const MyWork = ({
  title,
  link,
  description,
}: {
  title: string;
  link: string;
  description: string;
}) => {
  return (
    <div className="my-4 mx-2">
      <h3 className="text-lg">
        <Link className="underline" href={link} target="_blank">
          {title}
        </Link>
      </h3>
      <p className="m-2">{description}</p>
    </div>
  );
};

export default function MyWorks() {
  return (
    <div className="my-5">
      <h2 className="text-xl font-bold">作ったもの</h2>
      <MyWork
        title="blog.marutaku.info"
        link="https://blog.marutaku.info/"
        description="このブログ"
      />
      <MyWork
        title="discord-stamp-generator"
        link="https://github.com/marutaku/discord-stamp-generator/"
        description="Discordのスタンプを簡単にCLIから作れるツール"
      />
      <MyWork
        title="csv-splitter"
        link="https://github.com/marutaku/csv-splitter"
        description="Rust製のCSV分割ツール"
      />
    </div>
  );
}
