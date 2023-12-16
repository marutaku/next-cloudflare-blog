import NextImage, { ImageLoaderProps } from "next/image";

const loader = ({ src }: ImageLoaderProps) => {
  return src;
};
const StaticImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
      }}
    />
  );
};

export default StaticImage;
