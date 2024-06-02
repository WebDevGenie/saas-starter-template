import Image, { ImageProps } from "next/image";
import React from "react";

const Logo = (props: ImageProps) => {
  const { src, alt, width, height } = props;
  return (
    <Image
      src={src ? src : "/assets/placeholder/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Logo;
