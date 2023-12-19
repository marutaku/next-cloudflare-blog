import React from "react";
import StaticImage from "../_components/common/image";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="md:flex">
        <div className="text-center m-4 ml-0">
          <StaticImage
            src="/profile.jpg"
            width={300}
            height={300}
            imageSize="cover"
          />
        </div>
        <div className="flex-glow-1 flex flex-col justify-center text-lg">
          <div className="mb-4">
            <h3 className="text-3xl">丸山拓己</h3>
            <div className="text-xl text-gray-500">Takumi Maruyama</div>
          </div>
          <p>職業: ソフトウェアエンジニア, 自然言語処理技術者</p>
          <p>所属: GA technologies AI Strategy Center</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">職歴</h2>
        <h3 className="text-xl">
          2024/01/01 ~ 現在 株式会社エムスリー BIR
        </h3>
        <h3 className="text-xl">
          2021/04/01 ~ 2023/12/31 GA technologies 株式会社 AI Strategy Center
        </h3>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">過去の発表</h2>
        <p>Past presentations details go here...</p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">作ったもの</h2>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Social Links</h2>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/marutaku"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/marutaku"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/marutaku"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
