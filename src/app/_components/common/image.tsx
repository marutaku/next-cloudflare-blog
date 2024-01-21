import NextImage, { ImageLoaderProps } from "next/image";

const loader = ({ src }: ImageLoaderProps) => {
  return src;
};
const StaticImage = ({
  src,
  width,
  height,
  imageSize = "contain",
  backgroundPosition = "center",
}: {
  src: string;
  width?: number | string;
  height?: number | string;
  imageSize?: "cover" | "contain";
  backgroundPosition?: string;
}) => {
  return (
    <div
      style={{
        width: width || "auto",
        height: height || "auto",
        backgroundImage: `url(${src})`,
        backgroundSize: imageSize,
        backgroundRepeat: "no-repeat",
        backgroundPosition: backgroundPosition,
      }}
    />
  );
};

export default StaticImage;
