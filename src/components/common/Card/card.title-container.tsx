import React from "react";
import { RootProps } from "./card.types";
import { TitleWrapper } from "./card.styles";
import { TESTS_IDS } from "./card.constans";

export const TitleContainer: React.FC<RootProps> = ({ children }) => {
  return (
    <TitleWrapper data-testid={TESTS_IDS.TITLE_WRAPPER}>
      {children}
    </TitleWrapper>
  );
};
