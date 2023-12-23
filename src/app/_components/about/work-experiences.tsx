const WorkExperience = ({
  startAt,
  endAt,
  companyName,
  position,
}: {
  startAt: string;
  endAt?: string;
  companyName: string;
  position: string;
}) => {
  return (
    <div className="my-4 mx-2 md:flex">
      <h3 className="text-md mr-2 md:w-48">
        {startAt} ~ {endAt || "現在"}
      </h3>
      <h3 className="text-md">
        {companyName}
        <p className="text-gray-600 italic">- {position}</p>
      </h3>
    </div>
  );
};

export default function WorkExperiences() {
  return (
    <div className="my-5">
      <h2 className="text-xl font-bold">職歴</h2>
      <WorkExperience
        startAt="2024/01/01"
        companyName="エムスリー株式会社 BIR"
        position="Software Engineer"
      />
      <WorkExperience
        startAt="2021/04/01"
        endAt="2023/12/31"
        companyName="株式会社GA technologies AI Strategy Center"
        position="ML Engineer"
      />
      <WorkExperience
        startAt="2017/04/01"
        endAt="2021/01/31"
        companyName="curiosity株式会社"
        position="Web Engineer(Intern)"
      />
    </div>
  );
}
