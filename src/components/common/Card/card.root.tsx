import React from "react";
import { RootProps } from "./card.types";
import { CardRoot } from "./card.styles";

export const Root: React.FC<RootProps> = ({ children }) => {
  return <CardRoot>{children}</CardRoot>;
};
