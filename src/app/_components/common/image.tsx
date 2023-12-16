import NextImage, { ImageLoaderProps } from "next/image";

const loader = ({ src }: ImageLoaderProps) => {
  return src;
};
const StaticImage = ({
  src,
  width,
  height,
}: {
  src: string;
  width?: number | string;
  height?: number | string;
}) => {
  return (
    <div
      style={{
        width: width || "auto",
        height: height || "auto",
        backgroundImage: `url(${src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};

export default StaticImage;
