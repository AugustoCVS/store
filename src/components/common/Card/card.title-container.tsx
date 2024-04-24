import React from "react";
import { RootProps } from "./card.types";
import { TitleWrapper } from "./card.styles";

export const TitleContainer: React.FC<RootProps> = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};
