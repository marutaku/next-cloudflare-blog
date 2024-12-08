import Link from "next/link";
import StaticImage from "../common/image";

export default function Description() {
  return (
    <div>
      <div className="md:flex justify-center">
        <div className="text-center m-4 md:ml-0 min-w-80 flex justify-center">
          <StaticImage
            src="/profile.jpg"
            width={300}
            height={300}
            imageSize="contain"
          />
        </div>
        <div className="flex-glow-1 flex flex-col justify-center md:text-lg">
          <div className="mb-5">
            <h3 className="text-3xl">丸山拓己</h3>
            <div className="text-xl text-gray-500">Takumi Maruyama</div>
          </div>
          <p>Software Engineer, NLP Researcher</p>
          <div className="text-gray-600 text-3xl my-4">
            <Link
              className="inline-block m-2"
              href="https://twitter.com/Takumi_Maru0131"
              target="_blank"
            >
              <span className="i-simple-icons-x" />
            </Link>
            <Link
              className="inline-block m-2"
              href="https://github.com/marutaku"
              target="_blank"
            >
              <span className="i-simple-icons-github" />
            </Link>
            <Link
              className="inline-block m-2"
              href="https://www.linkedin.com/in/takumi-maruyama-049151156/"
              target="_blank"
            >
              <span className="i-simple-icons-linkedin" />
            </Link>
            <Link
              className="inline-block m-2"
              href="https://twitter.com/Takumi_Maru0131"
              target="_blank"
            >
              <span className="i-simple-icons-qiita" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
