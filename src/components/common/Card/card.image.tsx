import React from "react";
import { ImageProps } from "./card.types";
import { ImageWrapper } from "./card.styles";

import { TESTS_IDS } from "./card.constans";

export const CardImage: React.FC<ImageProps> = ({ url, width, height }) => {
  return (
    <ImageWrapper>
      <img
        src={url}
        alt="product image"
        width={width}
        height={height}
        data-tesid={TESTS_IDS.IMAGE}
      />
    </ImageWrapper>
  );
};
