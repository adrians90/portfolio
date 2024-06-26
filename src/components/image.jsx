import Image from "next/image";

export default function ImageComponent({ alt, width, height, src, className }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
