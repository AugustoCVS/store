import React from "react";
import { ImageProps } from "./card.types";
import { ImageWrapper } from "./card.styles";
import Image from "next/image";

export const CardImage: React.FC<ImageProps> = ({ url }) => {
  return (
    <ImageWrapper>
      <Image src={url} alt="product image" />
    </ImageWrapper>
  );
};
