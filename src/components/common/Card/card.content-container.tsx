import React from "react";
import { RootProps } from "./card.types";
import { ContentContainer } from "./card.styles";
import { TESTS_IDS } from "./card.constans";

export const Content: React.FC<RootProps> = ({ children }) => {
  return (
    <ContentContainer data-testid={TESTS_IDS.CONTENT_CONTAINER}>
      {children}
    </ContentContainer>
  );
};
