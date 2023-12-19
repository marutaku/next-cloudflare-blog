import NextImage, { ImageLoaderProps } from "next/image";

const loader = ({ src }: ImageLoaderProps) => {
  return src;
};
const StaticImage = ({
  src,
  width,
  height,
  imageSize = "contain",
}: {
  src: string;
  width?: number | string;
  height?: number | string;
  imageSize?: "cover" | "contain";
}) => {
  return (
    <div
      style={{
        width: width || "auto",
        height: height || "auto",
        backgroundImage: `url(${src})`,
        backgroundSize: imageSize,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};

export default StaticImage;
