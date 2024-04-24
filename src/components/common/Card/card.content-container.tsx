import React from "react";
import { RootProps } from "./card.types";
import { ContentContainer } from "./card.styles";

export const Content: React.FC<RootProps> = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};
