import React from "react";
import { TextProps } from "./card.types";
import { PriceTag, PriceTagWrapper } from "./card.styles";

import { TESTS_IDS } from "./card.constans";

export const Tag: React.FC<TextProps> = ({ text }) => {
  return (
    <PriceTagWrapper data-testid={TESTS_IDS.TAG}>
      <PriceTag>R${text}</PriceTag>
    </PriceTagWrapper>
  );
};
