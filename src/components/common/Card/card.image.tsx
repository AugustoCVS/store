import React from "react";
import { ImageProps } from "./card.types";
import { ImageWrapper } from "./card.styles";

export const CardImage: React.FC<ImageProps> = ({ url, width, height }) => {
  return (
    <ImageWrapper>
      <img src={url} alt="product image" width={width} height={height} />
    </ImageWrapper>
  );
};
