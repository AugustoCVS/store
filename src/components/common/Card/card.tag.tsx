import React from "react";
import { TextProps } from "./card.types";
import { PriceTag, PriceTagWrapper } from "./card.styles";

export const Tag: React.FC<TextProps> = ({ text }) => {
  return (
    <PriceTagWrapper>
      <PriceTag>R${text}</PriceTag>
    </PriceTagWrapper>
  );
};
