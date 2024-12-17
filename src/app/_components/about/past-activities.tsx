const Activity = ({
  title,
  date,
  link,
}: {
  title: string;
  date: string;
  link: string;
}) => (
  <div>
    <div className="my-4 mx-2 md:flex">
      <h3 className="text-md mr-2 md:w-24">{date}</h3>
      <h3 className="text-md">
        <a className="underline" href={link} target="_blank">
          {title}
        </a>
      </h3>
    </div>
  </div>
);

export function PastActivities() {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold">過去の活動</h2>
      <Activity
        title="ChatGPT Pluginからプロダクト応用まで〜大規模言語モデルの力を引き出す方法〜"
        date="2023/07/26"
        link="https://itandi.connpass.com/event/289665/"
      />
      <Activity
        title="【ChatGPTの基礎と応用】自然言語処理の最新動向からプロダクトでの活用を考える"
        date="2023/04/25"
        link="https://itandi.connpass.com/event/279914/"
      />
      <Activity
        title="Open Hack U 2020 Online Vol.5 チームMYJ（優秀賞）"
        date="2021/03/27"
        link="https://hacku.yahoo.co.jp/hacku2020online5/"
      />
    </div>
  );
}
