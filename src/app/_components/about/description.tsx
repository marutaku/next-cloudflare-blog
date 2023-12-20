import StaticImage from "../common/image";

export default function Description() {
  return (
    <div>
      <div className="md:flex justify-center">
        <div className="text-center m-4 md:ml-0 min-w-80">
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
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}