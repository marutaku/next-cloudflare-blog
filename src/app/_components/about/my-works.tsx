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
        <a className="underline" href={link} target="_blank">
          {title}
        </a>
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
